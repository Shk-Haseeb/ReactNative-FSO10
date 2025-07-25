import { gql } from '@apollo/client';

import { gql } from '@apollo/client';

export const GET_REPOSITORY = gql`
  query Repository($id: ID!) {
    repository(id: $id) {
      id
      fullName
      description
      language
      forksCount
      stargazersCount
      ratingAverage
      reviewCount
      ownerAvatarUrl
      url
    }
  }
`;



export const ME = gql`
  query Me {
    me {
      id
      username
    }
  }
`;
