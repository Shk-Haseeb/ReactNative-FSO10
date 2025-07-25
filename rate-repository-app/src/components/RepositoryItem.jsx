import { View, StyleSheet, Image } from 'react-native';
import { Text } from 'react-native';
import theme from '../theme';
import * as Linking from 'expo-linking';

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

const RepositoryItem = ({ item, showGitHubButton = false }) => {
  const openGitHub = () => {
    Linking.openURL(item.url);
  };

  return (
    <View style={styles.container} testID="repositoryItem">

      {showGitHubButton && (
        <Pressable onPress={openGitHub} style={{ marginTop: 12 }}>
          <Text style={{ color: theme.colors.primary, fontWeight: 'bold' }}>
            Open in GitHub
          </Text>
        </Pressable>
      )}
    </View>
  );
};

export default RepositoryItem;