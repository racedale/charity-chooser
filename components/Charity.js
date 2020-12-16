import { CheckIcon } from "@chakra-ui/icons";
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

export const Charity = ({ charity }) => {
  return (
    <AccordionItem style={{ border: "none" }}>
      <AccordionButton bg="green.500">
        <Box color="white" padding="0.5rem" borderRadius="0.3rem">
          <Heading as="h2" size="md">
            {charity.name}
          </Heading>
          <Text>{charity.description}</Text>
        </Box>
      </AccordionButton>
      <AccordionPanel bg="green.900">
        <Box color="white">
          <Grid templateColumns="1fr 1fr" gap="0.5rem" alignItems="center">
            <Text>Click button to confirm choice of donation: </Text>
            <IconButton
              aria-label="Confirm Donation"
              icon={<CheckIcon />}
              colorScheme="green"
            >
              Confirm
            </IconButton>
          </Grid>
        </Box>
      </AccordionPanel>
    </AccordionItem>
  );
};
