const userTypeDef = `#graphql
    type User {
        _id: ID!
        username: String!
        name: String!
        password: String!
        profilePictture: String
        gender: String!
    }
    type  Query{   
        authUser: User
        user(userId:ID): User
    }
    type Mutation {
        signUp(input: SignUpInput!): User
        login(input: LoginInput!): User
        logout: LogoutResposne
    }
    input SignUpInput {
        username: String!
        name: String!
        password: String!
        gender: String!
    }

    input LoginInput{
       username: String!
       password: String! 
    }

    type LogoutResposne{
        message: String!
    }
`;

export default userTypeDef;
