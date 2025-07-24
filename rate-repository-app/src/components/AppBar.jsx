import { View, StyleSheet, ScrollView, Pressable } from 'react-native';
import Constants from 'expo-constants';
import { Link, useNavigate } from 'react-router-native';
import { useApolloClient, useQuery } from '@apollo/client';

import AppBarTab from './AppBarTab';
import theme from '../theme';
import useAuthStorage from '../hooks/useAuthStorage';
import { ME } from '../graphql/queries';

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
  const { data } = useQuery(ME, { fetchPolicy: 'cache-and-network' });
  const isAuthenticated = !!data?.me;

  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const navigate = useNavigate();

  const signOut = async () => {
    await authStorage.removeAccessToken();
    await apolloClient.resetStore();
    navigate('/');
  };

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

        {isAuthenticated ? (
          <Pressable onPress={signOut}>
            <AppBarTab title="Sign out" />
          </Pressable>
        ) : (
          <Link to="/sign-in" style={{ textDecorationLine: 'none' }}>
            <AppBarTab title="Sign in" />
          </Link>
        )}

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
