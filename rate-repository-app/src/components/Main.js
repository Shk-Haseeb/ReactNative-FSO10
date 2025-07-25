import { View, StyleSheet } from 'react-native';
import { Routes, Route, Navigate } from 'react-router-native';
import CreateReview from '../pages/CreateReview';
import RepositoryList from './RepositoryList';
import SignIn from './SignIn';
import AppBar from './AppBar';
import theme from '../theme';
import SingleRepositoryView from './SingleRepositoryView';
import SignUp from './pages/SignUp';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/repository/:id" element={<SingleRepositoryView />} />
        <Route path="/create-review" element={<CreateReview />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </View>
  );
};

export default Main;
