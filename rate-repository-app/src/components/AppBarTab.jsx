import { Pressable, StyleSheet } from 'react-native';
import {Text} from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  text: {
    color: 'white',
    paddingHorizontal: 12,
    paddingVertical: 16,
    fontWeight: 'bold',
  },
});

const AppBarTab = ({ title }) => (
  <Pressable>
    <Text style={styles.text}>{title}</Text>
  </Pressable>
);

export default AppBarTab;
