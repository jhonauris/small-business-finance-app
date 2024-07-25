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
