import { Pressable, StyleSheet } from 'react-native';
import { Text } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  tab: {
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  text: {
    color: 'white',
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.subheading,
  },
});

const AppBarTab = ({ text }) => {
  return (
    <Pressable style={styles.tab}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

export default AppBarTab;
