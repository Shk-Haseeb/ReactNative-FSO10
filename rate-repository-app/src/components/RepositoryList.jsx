import React, { useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import useRepositories from '../hooks/useRepositories';
import RepositoryItem from './RepositoryItem';
import ItemSeparator from './ItemSeparator';

const styles = StyleSheet.create({
  pickerContainer: {
    padding: 10,
    backgroundColor: 'white',
  },
});

const RepositoryListHeader = ({ selectedSort, setSelectedSort }) => (
  <View style={styles.pickerContainer}>
    <Picker
      selectedValue={selectedSort}
      onValueChange={(value) => setSelectedSort(value)}
    >
      <Picker.Item label="Latest repositories" value="latest" />
      <Picker.Item label="Highest rated repositories" value="highest" />
      <Picker.Item label="Lowest rated repositories" value="lowest" />
    </Picker>
  </View>
);

const RepositoryList = () => {
  const [selectedSort, setSelectedSort] = useState('latest');

  const getOrderVariables = () => {
    switch (selectedSort) {
      case 'highest':
        return { orderBy: 'RATING_AVERAGE', orderDirection: 'DESC' };
      case 'lowest':
        return { orderBy: 'RATING_AVERAGE', orderDirection: 'ASC' };
      default:
        return { orderBy: 'CREATED_AT', orderDirection: 'DESC' };
    }
  };

  const { repositories } = useRepositories(getOrderVariables());

  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <RepositoryItem item={item} />}
      ListHeaderComponent={
        <RepositoryListHeader
          selectedSort={selectedSort}
          setSelectedSort={setSelectedSort}
        />
      }
    />
  );
};

export default RepositoryList;
