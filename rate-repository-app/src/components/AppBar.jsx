import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { Link } from 'react-router-native';
import AppBarTab from './AppBarTab';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight + 10,
    backgroundColor: theme.colors.appBarBackground,
  },
  scrollContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        <Link to="/" style={{ textDecorationLine: 'none' }}>
          <AppBarTab title="Repositories" />
        </Link>
        <Link to="/sign-in" style={{ textDecorationLine: 'none' }}>
          <AppBarTab title="Sign in" />
        </Link>

        <Link to="/" style={{ textDecorationLine: 'none' }}>
          <AppBarTab title="Extra 1" />
        </Link>
        <Link to="/" style={{ textDecorationLine: 'none' }}>
          <AppBarTab title="Extra 2" />
        </Link>
        <Link to="/" style={{ textDecorationLine: 'none' }}>
          <AppBarTab title="Extra 3" />
        </Link>
      </ScrollView>
    </View>
  );
};

export default AppBar;
