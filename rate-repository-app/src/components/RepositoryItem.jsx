import { View, StyleSheet, Image } from 'react-native';
import { Text } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    padding: 15,
  },
  topRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 4,
    marginRight: 15,
  },
  info: {
    flex: 1,
  },
  fullName: {
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.subheading,
    marginBottom: 4,
  },
  description: {
    color: theme.colors.textSecondary,
    marginBottom: 4,
  },
  language: {
    alignSelf: 'flex-start',
    backgroundColor: theme.colors.primary,
    color: 'white',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    overflow: 'hidden',
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontWeight: theme.fontWeights.bold,
  },
});

const formatThousands = (value) =>
  value >= 1000 ? `${(value / 1000).toFixed(1)}k` : String(value);

const Stat = ({ label, value }) => (
  <View style={styles.statItem}>
    <Text style={styles.statNumber}>{formatThousands(value)}</Text>
    <Text>{label}</Text>
  </View>
);

const RepositoryItem = ({ item }) => (
  <View style={styles.container} testID="repositoryItem">
    <View style={styles.topRow}>
      <Image style={styles.avatar} source={{ uri: item.ownerAvatarUrl }} />
      <View style={styles.info}>
        <Text style={styles.fullName}>{item.fullName}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.language}>{item.language}</Text>
      </View>
    </View>
    <View style={styles.statsRow}>
      <Stat label="Stars" value={item.stargazersCount} />
      <Stat label="Forks" value={item.forksCount} />
      <Stat label="Reviews" value={item.reviewCount} />
      <Stat label="Rating" value={item.ratingAverage} />
    </View>
  </View>
);

export default RepositoryItem;
