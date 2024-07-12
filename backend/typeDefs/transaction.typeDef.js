const transactionTypeDef = `#graphql
    type Transaction{
        _id: ID!
        userID: ID!
        description: String!
        paymentType: String!
        category: String!
        amount: Float!
        location: String
        date: String!
    }
    type Query {
        transactions: [Transaction!]
        transaction(transactionID:ID!): Transaction
        # TODO =>  ADD CATERGORY STATISTICS QUERY
    }

    type Mutation{
        createTransaction(input: CreateTransactionInput!): Transaction!
        updateTransaction(input: UpdateTransactionInput!): Transaction!
        deleteTransaction(transactionId: ID!): Transaction!
    }

    input CreateTransactionInput{
        description: String!
        paymentType: String!
        category: String!
        amount: Float!
        date: String!
        location: String
        
    }

    input UpdateTransactionInput{
        transactionID: ID!
        description: String
        paymentType: String
        category: String
        amount: Float
        location: String
        date: String
    }


`;
export default transactionTypeDef;
