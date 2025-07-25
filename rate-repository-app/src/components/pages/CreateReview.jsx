import React from 'react';
import { useNavigate } from 'react-router-native';
import { useMutation } from '@apollo/client';
import ReviewForm from '../components/ReviewForm';
import { CREATE_REVIEW } from '../graphql/mutations';

const CreateReview = () => {
  const [createReview] = useMutation(CREATE_REVIEW);
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { ownerName, repositoryName, rating, text } = values;

    try {
      const { data } = await createReview({
        variables: {
          ownerName,
          repositoryName,
          rating: parseInt(rating),
          text,
        },
      });

      if (data?.createReview?.repositoryId) {
        navigate(`/repository/${data.createReview.repositoryId}`);
      }
    } catch (e) {
      console.error('Review creation failed:', e);
    }
  };

  return <ReviewForm onSubmit={onSubmit} />;
};

export default CreateReview;
