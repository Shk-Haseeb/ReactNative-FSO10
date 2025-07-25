import { FlatList, View, StyleSheet, Pressable, Alert } from 'react-native';
import { useQuery, useMutation } from '@apollo/client';
import { format } from 'date-fns';
import { GET_CURRENT_USER } from '../graphql/queries';
import { DELETE_REVIEW } from '../graphql/mutations';
import Text from '../components/Text';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: 'white',
  },
  rating: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderColor: theme.colors.primary,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  ratingText: {
    color: theme.colors.primary,
    fontWeight: theme.fontWeights.bold,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  date: {
    color: theme.colors.textSecondary,
    marginBottom: 4,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 8,
  },
  button: {
    padding: 10,
    borderRadius: 4,
    marginTop: 4,
    backgroundColor: theme.colors.primary,
  },
});

const ReviewItem = ({ review, refetch }) => {
  const [deleteReview] = useMutation(DELETE_REVIEW);

  const handleDelete = () => {
    Alert.alert(
      'Delete review',
      'Are you sure you want to delete this review?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: async () => {
            await deleteReview({ variables: { id: review.id } });
            refetch();
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <View style={styles.rating}>
          <Text style={styles.ratingText}>{review.rating}</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text fontWeight="bold">{review.repository.fullName}</Text>
          <Text style={styles.date}>
            {format(new Date(review.createdAt), 'dd.MM.yyyy')}
          </Text>
          <Text>{review.text}</Text>
        </View>
      </View>
      <View style={styles.buttonRow}>
        <Pressable
          style={[styles.button, { backgroundColor: theme.colors.primary }]}
          onPress={() => {
          }}
        >
          <Text color="white" fontWeight="bold">
            View repository
          </Text>
        </Pressable>
        <Pressable
          style={[styles.button, { backgroundColor: theme.colors.error }]}
          onPress={handleDelete}
        >
          <Text color="white" fontWeight="bold">
            Delete review
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

const MyReviews = () => {
  const { data, loading, refetch } = useQuery(GET_CURRENT_USER, {
    variables: { includeReviews: true },
    fetchPolicy: 'cache-and-network',
  });

  if (loading) return null;

  const reviews = data?.me?.reviews?.edges.map(edge => edge.node) || [];

  return (
    <FlatList
      data={reviews}
      keyExtractor={({ id }) => id}
      renderItem={({ item }) => (
        <ReviewItem review={item} refetch={refetch} />
      )}
      ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
    />
  );
};

export default MyReviews;
