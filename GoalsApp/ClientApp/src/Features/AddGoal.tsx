import { RouteComponentProps } from '@reach/router';
import { Field, Form, Formik } from 'formik';
import React from 'react';
import { usePost } from '../Hooks/usePost';

type AddGoalProps = RouteComponentProps;

type FormModel = {
  name: string;
};

const initialValues: FormModel = {
  name: '',
};

export const AddGoal = (props: AddGoalProps) => {
  const { error, loading, onSubmit } = usePost('/api/goals', console.log);

  if (loading) {
    return <p>Saving</p>;
  }
  if (error) {
    return <p>error.message</p>;
  }
  return (
    <div>
      <h1>Add Goal</h1>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          <label htmlFor='name'>Name</label>
          <Field name='name' type='text' />
          <button type='submit'>Submit</button>
        </Form>
      </Formik>
    </div>
  );
};
