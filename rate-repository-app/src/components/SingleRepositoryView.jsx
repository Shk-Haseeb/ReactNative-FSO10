import React from 'react';
import { useParams } from 'react-router-native';
import { useQuery } from '@apollo/client';
import { FlatList, View, StyleSheet } from 'react-native';

import Text from './Text';
import { GET_REPOSITORY } from '../graphql/queries';
import ReviewItem from './ReviewItem';
import RepositoryInfo from './RepositoryInfo';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const SingleRepositoryView = () => {
  const { id } = useParams();
  const { data, loading, error } = useQuery(GET_REPOSITORY, {
    variables: { id },
    fetchPolicy: 'cache-and-network',
  });

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error loading repository</Text>;

  const repository = data.repository;
  const reviews = repository.reviews
    ? repository.reviews.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} />}
      keyExtractor={({ id }) => id}
      ItemSeparatorComponent={ItemSeparator}
      ListHeaderComponent={() => <RepositoryInfo repository={repository} />}
    />
  );
};

export default SingleRepositoryView;
