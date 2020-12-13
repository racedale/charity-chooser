import "@styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Amplify } from "aws-amplify";
import awsExports from "../src/aws-exports";

Amplify.configure({ ...awsExports, ssr: true });

import { extendTheme } from "@chakra-ui/react";

// Colors
// #F5624D; // light red
// #CC231E; // red
// #34A65F; // light green
// #0F8A5F; // green
// #235E6F; // blue-y

const theme = extendTheme({
  useSystemColorMode: false,
  initialColorMode: "dark",
});

function Application({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default Application;
