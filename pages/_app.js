import "@styles/globals.css";
// import { Amplify } from "aws-amplify";
// import awsExports from "../src/aws-exports";
// Amplify.configure({ ...awsExports, ssr: true });

function Application({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default Application;
