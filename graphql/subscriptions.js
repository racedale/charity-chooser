/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCharity = /* GraphQL */ `
  subscription OnCreateCharity {
    onCreateCharity {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCharity = /* GraphQL */ `
  subscription OnUpdateCharity {
    onUpdateCharity {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCharity = /* GraphQL */ `
  subscription OnDeleteCharity {
    onDeleteCharity {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePerson = /* GraphQL */ `
  subscription OnCreatePerson {
    onCreatePerson {
      id
      name
      email
      allocation
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePerson = /* GraphQL */ `
  subscription OnUpdatePerson {
    onUpdatePerson {
      id
      name
      email
      allocation
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePerson = /* GraphQL */ `
  subscription OnDeletePerson {
    onDeletePerson {
      id
      name
      email
      allocation
      createdAt
      updatedAt
    }
  }
`;
export const onCreateChoice = /* GraphQL */ `
  subscription OnCreateChoice {
    onCreateChoice {
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
export const onUpdateChoice = /* GraphQL */ `
  subscription OnUpdateChoice {
    onUpdateChoice {
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
export const onDeleteChoice = /* GraphQL */ `
  subscription OnDeleteChoice {
    onDeleteChoice {
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
