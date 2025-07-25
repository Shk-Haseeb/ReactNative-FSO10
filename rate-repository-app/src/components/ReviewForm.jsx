import React from 'react';
import { View, TextInput, Pressable, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  form: {
    backgroundColor: 'white',
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 12,
    marginBottom: 4,
  },
  inputError: {
    borderColor: '#d73a4a',
  },
  errorText: {
    color: '#d73a4a',
    marginBottom: 8,
  },
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
    padding: 14,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

const validationSchema = yup.object().shape({
  ownerName: yup
    .string()
    .required('Repository owner username is required'),
  repositoryName: yup
    .string()
    .required('Repository name is required'),
  rating: yup
    .number()
    .required('Rating is required')
    .min(0, 'Rating must be between 0 and 100')
    .max(100, 'Rating must be between 0 and 100'),
  text: yup.string().optional(),
});

const initialValues = {
  ownerName: '',
  repositoryName: '',
  rating: '',
  text: '',
};

const ReviewForm = ({ onSubmit }) => {
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {({ handleChange, handleBlur, handleSubmit, values, touched, errors }) => (
        <View style={styles.form}>
          <TextInput
            placeholder="Repository owner name"
            value={values.ownerName}
            onChangeText={handleChange('ownerName')}
            onBlur={handleBlur('ownerName')}
            style={[styles.input, touched.ownerName && errors.ownerName && styles.inputError]}
          />
          {touched.ownerName && errors.ownerName && (
            <Text style={styles.errorText}>{errors.ownerName}</Text>
          )}

          <TextInput
            placeholder="Repository name"
            value={values.repositoryName}
            onChangeText={handleChange('repositoryName')}
            onBlur={handleBlur('repositoryName')}
            style={[styles.input, touched.repositoryName && errors.repositoryName && styles.inputError]}
          />
          {touched.repositoryName && errors.repositoryName && (
            <Text style={styles.errorText}>{errors.repositoryName}</Text>
          )}

          <TextInput
            placeholder="Rating (0-100)"
            value={values.rating}
            onChangeText={handleChange('rating')}
            onBlur={handleBlur('rating')}
            keyboardType="numeric"
            style={[styles.input, touched.rating && errors.rating && styles.inputError]}
          />
          {touched.rating && errors.rating && (
            <Text style={styles.errorText}>{errors.rating}</Text>
          )}

          <TextInput
            placeholder="Review"
            value={values.text}
            onChangeText={handleChange('text')}
            onBlur={handleBlur('text')}
            multiline
            style={[styles.input, touched.text && errors.text && styles.inputError, { height: 100 }]}
          />

          <Pressable style={styles.button} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Create review</Text>
          </Pressable>
        </View>
      )}
    </Formik>
  );
};

export default ReviewForm;
