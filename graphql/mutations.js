/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCharity = /* GraphQL */ `
  mutation CreateCharity(
    $input: CreateCharityInput!
    $condition: ModelCharityConditionInput
  ) {
    createCharity(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateCharity = /* GraphQL */ `
  mutation UpdateCharity(
    $input: UpdateCharityInput!
    $condition: ModelCharityConditionInput
  ) {
    updateCharity(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteCharity = /* GraphQL */ `
  mutation DeleteCharity(
    $input: DeleteCharityInput!
    $condition: ModelCharityConditionInput
  ) {
    deleteCharity(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const createPerson = /* GraphQL */ `
  mutation CreatePerson(
    $input: CreatePersonInput!
    $condition: ModelPersonConditionInput
  ) {
    createPerson(input: $input, condition: $condition) {
      id
      name
      email
      allocation
      createdAt
      updatedAt
    }
  }
`;
export const updatePerson = /* GraphQL */ `
  mutation UpdatePerson(
    $input: UpdatePersonInput!
    $condition: ModelPersonConditionInput
  ) {
    updatePerson(input: $input, condition: $condition) {
      id
      name
      email
      allocation
      createdAt
      updatedAt
    }
  }
`;
export const deletePerson = /* GraphQL */ `
  mutation DeletePerson(
    $input: DeletePersonInput!
    $condition: ModelPersonConditionInput
  ) {
    deletePerson(input: $input, condition: $condition) {
      id
      name
      email
      allocation
      createdAt
      updatedAt
    }
  }
`;
export const createChoice = /* GraphQL */ `
  mutation CreateChoice(
    $input: CreateChoiceInput!
    $condition: ModelChoiceConditionInput
  ) {
    createChoice(input: $input, condition: $condition) {
      id
      charity {
        id
        name
        description
        createdAt
        updatedAt
      }
      person {
        id
        name
        email
        allocation
        createdAt
        updatedAt
      }
      cost
      createdAt
      updatedAt
    }
  }
`;
export const updateChoice = /* GraphQL */ `
  mutation UpdateChoice(
    $input: UpdateChoiceInput!
    $condition: ModelChoiceConditionInput
  ) {
    updateChoice(input: $input, condition: $condition) {
      id
      charity {
        id
        name
        description
        createdAt
        updatedAt
      }
      person {
        id
        name
        email
        allocation
        createdAt
        updatedAt
      }
      cost
      createdAt
      updatedAt
    }
  }
`;
export const deleteChoice = /* GraphQL */ `
  mutation DeleteChoice(
    $input: DeleteChoiceInput!
    $condition: ModelChoiceConditionInput
  ) {
    deleteChoice(input: $input, condition: $condition) {
      id
      charity {
        id
        name
        description
        createdAt
        updatedAt
      }
      person {
        id
        name
        email
        allocation
        createdAt
        updatedAt
      }
      cost
      createdAt
      updatedAt
    }
  }
`;
