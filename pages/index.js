import Head from "next/head";
import Header from "@components/Header";
import axios from "axios";
import { API, graphqlOperation } from "@aws-amplify/api";
import { createCharity } from "../graphql/mutations";
import { listCharitys } from "graphql/queries";

const createNewCharity = async () => {
  const charity = {
    name: "STL Covid Relief",
    description: `St. Louis COVID-19 Regional Response Fund`,
  };

  const response = await API.graphql(
    graphqlOperation(createCharity, { input: charity })
  );
  console.log(response);
  return response;
};

export default function Home(props) {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Charity Chooser" />
        {/* <button onClick={createNewCharity}>Create</button> */}

        <div className="grid">
          {props.charities.map((charity) => (
            <div key={charity.id}>
              <h2>{charity.name}</h2>
              <p>{charity.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { data } = await API.graphql(graphqlOperation(listCharitys));
  console.log(data);

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
