import Head from "next/head";
import { useEffect } from "react";
import {
  Accordion,
  Box,
  Divider,
  Grid,
  Heading,
  Modal,
  Text,
} from "@chakra-ui/react";
import Header from "@components/Header";
import { snow } from "../components/_snow";
import { Charity } from "@components/Charity";

export default function Home(props) {
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
        <Header title="Charity Chooser" color="white" />
        {/* <button onClick={createNewCharity}>Create</button> */}
        <Divider />

        <Box color="white">
          <Heading>Welcome, {props.person.name}</Heading>
          <Text>
            You have <strong>${props.person.allocation / 100}</strong> to choose
            what to do with. Look below to choose.
          </Text>
        </Box>

        <Accordion allowToggle colorScheme="green">
          <Grid
            templateColumns="1fr [first] 1fr [second] 1fr [third]"
            gap="1rem"
          >
            {props.charities.map((charity) => (
              <Charity key={charity.id} charity={charity}></Charity>
            ))}
          </Grid>
        </Accordion>
        {/* <pre>{JSON.stringify(props.person, null, 2)}</pre> */}
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { API, graphqlOperation } = require("@aws-amplify/api");
  const { listCharitys, getPerson } = require("graphql/queries");
  const charityListResponse = await API.graphql(graphqlOperation(listCharitys));
  const getPersonResponse = await API.graphql(
    graphqlOperation(getPerson, { id: "b75dd305-fbb4-4fd4-9da1-3cc0c2a95a92" })
  );

  //   if (!data) {
  //     return {
  //       notFound: true,
  //     };
  //   }

  return {
    props: {
      charities: charityListResponse.data.listCharitys.items,
      person: getPersonResponse.data.getPerson,
      choice: {},
    }, // will be passed to the page component as props
  };
}
