import { RouteComponentProps } from '@reach/router';
import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react';

type AddGoalProps = RouteComponentProps;

type FormModel = {
  name: string;
};

const initialValues: FormModel = {
  name: '',
};

export const AddGoal = (props: AddGoalProps) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const onSubmit = (values: FormModel) => {
    setError(null);
    setLoading(true);

    fetch('/api/goals', {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  };

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
