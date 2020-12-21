import { CheckIcon } from "@chakra-ui/icons";
import { Badge, CircularProgress } from "@chakra-ui/react";
import {
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  IconButton,
  Box,
  Heading,
  Text,
  Grid,
} from "@chakra-ui/react";
import { useRef } from "react";

export const Charity = ({ person, charity, confirmFunc, loading, count }) => {
  const accordionButtonRef = useRef();
  return (
    <AccordionItem style={{ border: "none" }}>
      <AccordionButton
        bg={charity.name.includes("VISA") ? "green.600" : "green.500"}
        minHeight="150px"
        ref={accordionButtonRef}
        flexDirection="column"
        justifyContent="space-evenly"
      >
        <Box color="white" width="100%">
          <Heading as="h2" size="md">
            {charity.name}
          </Heading>
          {charity.ein && <Text fontSize="xs">EIN: {charity.ein}</Text>}
          <Text>{charity.description}</Text>
        </Box>
        <Box color="gray.200">
          chosen <Badge colorScheme="green">{count}</Badge> times
        </Box>
      </AccordionButton>
      <AccordionPanel bg="green.900">
        <Box color="white">
          <Grid templateColumns="1fr 1fr" gap="0.5rem" alignItems="center">
            <Text>Click button to confirm choice of donation: </Text>
            <IconButton
              aria-label="Confirm Donation"
              icon={
                loading ? (
                  <CircularProgress isIndeterminate size="2rem" />
                ) : (
                  <CheckIcon />
                )
              }
              disabled={!person.id || (person.choice && person.choice.id)}
              colorScheme="green"
              maxWidth="5rem"
              onClick={() => {
                confirmFunc(charity, accordionButtonRef);
              }}
            >
              Confirm
            </IconButton>
          </Grid>
        </Box>
      </AccordionPanel>
    </AccordionItem>
  );
};
