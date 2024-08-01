import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
      }
    }
  }
`;

export const SAVE_BOOK = gql`
    mutation saveBook($_id: ID $input: BookInfo) {
    saveBook(_id: $_id input: $input) {
      _id
      savedBooks {
        authors
        description
        bookId
        title
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook($_id: ID $bookId: String!) {
    removeBook(_id: $_id bookId: $bookId) {
      _id
      savedBooks  {
        authors
        description
        bookId
        title
      }
    }
  }
`;
