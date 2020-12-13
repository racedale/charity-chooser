import { Heading } from "@chakra-ui/react";

export default function Header(props) {
  return (
    <Heading as="h1" className="title" {...props}>
      {props.title}
    </Heading>
  );
}
