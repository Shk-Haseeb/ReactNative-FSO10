import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (variables) => {
  const { data, loading, fetchMore, ...result } = useQuery(GET_REPOSITORIES, {
    variables,
    fetchPolicy: 'cache-and-network',
  });

  const repositories = data?.repositories;

  return {
    repositories,
    loading,
    fetchMore,
    ...result,
  };
};

export default useRepositories;
