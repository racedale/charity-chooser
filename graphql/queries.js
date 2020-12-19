/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCharity = /* GraphQL */ `
  query GetCharity($id: ID!) {
    getCharity(id: $id) {
      id
      name
      description
      ein
      createdAt
      updatedAt
    }
  }
`;
export const listCharitys = /* GraphQL */ `
  query ListCharitys(
    $filter: ModelCharityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCharitys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        ein
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPerson = /* GraphQL */ `
  query GetPerson($id: ID!) {
    getPerson(id: $id) {
      id
      name
      email
      allocation
      choice {
        id
        charity {
          id
          name
          description
          ein
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
      createdAt
      updatedAt
    }
  }
`;
export const listPersons = /* GraphQL */ `
  query ListPersons(
    $filter: ModelPersonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPersons(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        email
        allocation
        choice {
          id
          cost
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getChoice = /* GraphQL */ `
  query GetChoice($id: ID!) {
    getChoice(id: $id) {
      id
      charity {
        id
        name
        description
        ein
        createdAt
        updatedAt
      }
      person {
        id
        name
        email
        allocation
        choice {
          id
          cost
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      cost
      createdAt
      updatedAt
    }
  }
`;
export const listChoices = /* GraphQL */ `
  query ListChoices(
    $filter: ModelChoiceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChoices(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        charity {
          id
          name
          description
          ein
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
      nextToken
    }
  }
`;
