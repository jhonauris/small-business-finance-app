import { gql } from "@apollo/client";
// we are basing this off of the query resolvers we created in the backend
export const GET_AUTHENTICATED_USER = gql`
  query GetAuthenticatedUser {
    authUser {
      _id
      username
      name
      profilePicture
    }
  }
`;

export const GET_USER_AND_TRANSACTIONS = gql`
  query GetUserAndTransactions($userId: ID!) {
    user(userId: $userId) {
      _id
      name
      username
      profilePicture
      # relationships
      transactions {
        _id
        description
        paymentType
        category
        amount
        location
        date
      }
    }
  }
`;
