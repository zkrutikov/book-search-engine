import { gql } from '@apollo/client';

export const GET_ME = gql `
{
    me {
        _id
        username
        email
        bookCount
        savedBooks {
            bookId: ID!
            authors: [String]
            description: String
            title: String
            image: String
            link: String
         }
    }
}
`;
