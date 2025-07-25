import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from './Text';
import theme from '../theme';
import { format } from 'date-fns';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: 'white',
  },
  ratingCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderColor: theme.colors.primary,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  ratingText: {
    color: theme.colors.primary,
    fontWeight: 'bold',
    fontSize: theme.fontSizes.subheading,
  },
  rightColumn: {
    flex: 1,
  },
  username: {
    fontWeight: 'bold',
    marginBottom: 4,
  },
  date: {
    color: theme.colors.textSecondary,
    marginBottom: 4,
  },
  text: {
    lineHeight: 20,
  },
});

const ReviewItem = ({ review }) => {
  const date = format(new Date(review.createdAt), 'dd.MM.yyyy');

  return (
    <View style={styles.container}>
      <View style={styles.ratingCircle}>
        <Text style={styles.ratingText}>{review.rating}</Text>
      </View>
      <View style={styles.rightColumn}>
        <Text style={styles.username}>{review.user.username}</Text>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.text}>{review.text}</Text>
      </View>
    </View>
  );
};

export default ReviewItem;
