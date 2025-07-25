import React from 'react';
import { FlatList, View, StyleSheet, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import RepositoryItem from './RepositoryItem';
import ItemSeparator from './ItemSeparator';

const styles = StyleSheet.create({
  header: {
    padding: 10,
    backgroundColor: 'white',
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
});

export class RepositoryListContainer extends React.Component {
  renderHeader = () => {
    const { sort, setSort, keyword, setKeyword } = this.props;

    return (
      <View style={styles.header}>
        <TextInput
          placeholder="Search repositories"
          value={keyword}
          onChangeText={setKeyword}
          style={styles.searchInput}
        />
        <Picker selectedValue={sort} onValueChange={setSort}>
          <Picker.Item label="Latest repositories" value="latest" />
          <Picker.Item label="Highest rated repositories" value="highest" />
          <Picker.Item label="Lowest rated repositories" value="lowest" />
        </Picker>
      </View>
    );
  };

  render() {
    const { repositories } = this.props;

    const repositoryNodes = repositories
      ? repositories.edges.map(edge => edge.node)
      : [];

    return (
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => <RepositoryItem item={item} />}
        keyExtractor={({ id }) => id}
        ListHeaderComponent={this.renderHeader}
      />
    );
  }
}
