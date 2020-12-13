import Head from "next/head";
import { useEffect } from "react";
import { Box, Divider, Grid, Heading, Text } from "@chakra-ui/react";
import Header from "@components/Header";
import { snow } from "../components/_snow";

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

        <Grid templateColumns="1fr [first] 1fr [second] 1fr [third]" gap="1rem">
          {props.charities.map((charity) => (
            <Box
              key={charity.id}
              bg="green.500"
              color="white"
              padding="0.5rem"
              borderRadius="0.3rem"
              as="button"
            >
              <Heading as="h2" size="md">
                {charity.name}
              </Heading>
              <Text>{charity.description}</Text>
            </Box>
          ))}
        </Grid>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { API, graphqlOperation } = require("@aws-amplify/api");
  const { listCharitys } = require("graphql/queries");
  const { data } = await API.graphql(graphqlOperation(listCharitys));

  //   if (!data) {
  //     return {
  //       notFound: true,
  //     };
  //   }

  return {
    props: {
      charities: data.listCharitys.items,
    }, // will be passed to the page component as props
  };
}
