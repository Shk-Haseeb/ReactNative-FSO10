import React from 'react';
import { useParams } from 'react-router-native';
import { useQuery } from '@apollo/client';
import RepositoryItem from './RepositoryItem';
import { GET_REPOSITORY } from '../graphql/queries';
import Text from './Text';

const SingleRepositoryView = () => {
  const { id } = useParams();
  const { data, loading, error } = useQuery(GET_REPOSITORY, {
    variables: { id },
    fetchPolicy: 'cache-and-network',
  });

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error fetching repository</Text>;

  return <RepositoryItem item={data.repository} showGitHubButton />;
};

export default SingleRepositoryView;
