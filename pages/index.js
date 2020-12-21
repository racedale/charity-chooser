import Head from "next/head";
import { useEffect, useState } from "react";
import {
  Accordion,
  Box,
  Button,
  Divider,
  FormControl,
  FormLabel,
  Grid,
  Heading,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import Header from "@components/Header";
import { snow } from "../components/_snow";
import { API, graphqlOperation } from "@aws-amplify/api";
import { Charity } from "@components/Charity";
import { createChoice, updatePerson } from "graphql/mutations";
import { getPerson, listChoices } from "graphql/queries";
import { onCreateChoice } from "graphql/subscriptions";

const calcAmountLeft = (person) => {
  if (person.choice) {
    return (person.allocation - person.choice.cost) / 100;
  }

  return (person.allocation || 0) / 100;
};

const countChoices = (allChoices, charityId) => {
  return allChoices.filter((choice) => choice.charity.id === charityId).length;
};

export default function Home(props) {
  const [choices, setChoices] = useState(props.allChoices);
  const [person, setPerson] = useState({});
  const [personCode, setPersonCode] = useState();
  const [confirming, setConfirming] = useState(false);
  const toast = useToast();

  const confirmFunc = (person) => async (charity, accordionButtonRef) => {
    setConfirming(true);
    try {
      const choiceResponse = await API.graphql(
        graphqlOperation(createChoice, {
          input: {
            cost: person.allocation,
            choicePersonId: person.id,
            choiceCharityId: charity.id,
          },
        })
      );
      const personResponse = await API.graphql(
        graphqlOperation(updatePerson, {
          input: {
            id: person.id,
            personChoiceId: choiceResponse.data.createChoice.id,
          },
        })
      );
      setPerson(personResponse.data.updatePerson);

      const listChoiceResponse = await API.graphql(
        graphqlOperation(listChoices)
      );
      setChoices(listChoiceResponse.data.listChoices.items);

      toast({
        title: "Confirmed",
        description: "Thank you for choosing a charity to donate to",
        status: "success",
        duration: 9000,
        isClosable: true,
      });

      accordionButtonRef.current.click();
      setConfirming(false);
      return choiceResponse;
    } catch (exception) {
      toast({
        title: "Error",
        description: exception.errors[0].message,
        status: "error",
        duration: 9000,
      });
    }
  };

  const fetchPerson = async (event) => {
    event.preventDefault();

    const { data } = await API.graphql(
      graphqlOperation(getPerson, {
        id: personCode,
      })
    );
    if (data.getPerson) {
      setPerson(data.getPerson);
    } else {
      setPerson({});
    }
  };

  useEffect(() => {
    snow();
  }, []);

  return (
    <div className="container sky">
      <Head>
        <title>Charity Chooser</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main style={{ zIndex: "1" }}>
        <Header
          title="Charity Chooser"
          color="white"
          fontSize="6rem"
          textAlign="center"
        />
        <form onSubmit={fetchPerson}>
          <FormControl>
            <FormLabel color="white">Input voucher code below:</FormLabel>
            <Grid templateColumns="8fr 2fr">
              <Input
                placeholder="Press Enter to submit"
                color="white"
                onChange={(event) => setPersonCode(event.target.value)}
              />
              <Button type="submit">Load</Button>
            </Grid>
          </FormControl>
        </form>
        <Divider />

        {person.id && (
          <Box color="white">
            <Heading>Welcome, {person.name}</Heading>
            <Text fontSize="2rem">
              You have <strong>${calcAmountLeft(person)}</strong> to donate
              with. Please choose from the below options.
            </Text>
          </Box>
        )}

        {person.id && (
          <Accordion allowToggle colorScheme="green">
            <Grid
              templateColumns="1fr [first] 1fr [second] 1fr [third]"
              gap="1rem"
            >
              {props.charities
                .sort((a, b) => (a.name > b.name ? 1 : -1))
                .map((charity) => (
                  <Charity
                    key={charity.id}
                    person={person}
                    charity={charity}
                    confirmFunc={confirmFunc(person)}
                    loading={confirming}
                    count={countChoices(choices, charity.id)}
                  ></Charity>
                ))}
            </Grid>
          </Accordion>
        )}
        <Text color="white" textAlign="center">
          Got feedback on how the site can be improved? Please send me an email
        </Text>
        {/* <pre>{JSON.stringify(props.person, null, 2)}</pre> */}
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { listCharitys, listChoices } = require("graphql/queries");
  const charityListResponse = await API.graphql(graphqlOperation(listCharitys));
  const choicesListResponse = await API.graphql(graphqlOperation(listChoices));

  return {
    props: {
      charities: charityListResponse.data.listCharitys.items,
      allChoices: choicesListResponse.data.listChoices.items,
    }, // will be passed to the page component as props
  };
}

// TODO: fix multiple choices for a user not disabling if a person has it removed
// TODO: make form disappear, with button to re-enable
