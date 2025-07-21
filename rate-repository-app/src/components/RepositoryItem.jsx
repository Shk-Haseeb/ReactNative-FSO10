import { View, Text, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: 'white',
  },
  row: {
    flexDirection: 'row',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 5,
    marginRight: 15,
  },
  info: {
    flexShrink: 1,
  },
  fullName: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  language: {
    backgroundColor: '#0366d6',
    alignSelf: 'flex-start',
    color: 'white',
    paddingVertical: 4,
    paddingHorizontal: 6,
    borderRadius: 4,
    marginTop: 4,
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  statItem: {
    alignItems: 'center',
  },
});

const formatThousands = (value) =>
  value >= 1000 ? `${(value / 1000).toFixed(1)}k` : String(value);

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Image style={styles.avatar} source={{ uri: item.ownerAvatarUrl }} />
        <View style={styles.info}>
          <Text style={styles.fullName}>{item.fullName}</Text>
          <Text>{item.description}</Text>
          <Text style={styles.language}>{item.language}</Text>
        </View>
      </View>
      <View style={styles.stats}>
        <View style={styles.statItem}>
          <Text style={{ fontWeight: 'bold' }}>{formatThousands(item.stargazersCount)}</Text>
          <Text>Stars</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={{ fontWeight: 'bold' }}>{formatThousands(item.forksCount)}</Text>
          <Text>Forks</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={{ fontWeight: 'bold' }}>{item.reviewCount}</Text>
          <Text>Reviews</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={{ fontWeight: 'bold' }}>{item.ratingAverage}</Text>
          <Text>Rating</Text>
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;
