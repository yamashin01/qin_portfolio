import { gql } from "@apollo/client";

export const GET_REPO_QUERY = gql`
  query { 
    user(login: "yamashin01") {
      repositories(last: 5, privacy: PUBLIC, orderBy: {field: UPDATED_AT, direction: ASC}) {
        edges {
          node {
            id
            forkCount
            stargazerCount
            name
            description
            languages(first: 10, orderBy: { field: SIZE, direction: DESC }) {
              edges {
                size
                node {
                  id
                  color
                  name
                }
              }
              totalSize
            }
          }
        }
      }
    }
  }
`;

