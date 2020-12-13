import Head from "next/head";
import Header from "@components/Header";
import axios from "axios";

export default function Home(props) {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Charity Chooser" />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const response = await axios.get(`https://url.com`, {
    headers: {
      "x-api-key": process.env.API_KEY,
    },
  });
  const data = response.data;
  // const data = mockData;

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      data,
    }, // will be passed to the page component as props
  };
}
