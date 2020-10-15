import { RouteComponentProps } from '@reach/router';
import { Validator } from 'fluentvalidation-ts';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { usePost } from '../Hooks/usePost';
import { Goal } from './Goals';
import styled from 'styled-components';

const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 200px;
`;

type AddGoalProps = RouteComponentProps;

type FormModel = {
  name: string;
};

const initialValues: FormModel = {
  name: '',
};

const maxNameLength = 20;
class AddGoalValidator extends Validator<FormModel> {
  constructor() {
    super();

    this.ruleFor('name').maxLength(maxNameLength).withMessage(`Pls no. Be shorter than ${maxNameLength}`);
  }
}

const validate = (values: FormModel) => {
  const validator = new AddGoalValidator();

  return validator.validate(values);
};

export const AddGoal = (props: AddGoalProps) => {
  const { error, loading, onSubmit } = usePost<FormModel, Goal>('/api/goals', console.log);

  if (loading) {
    return <p>Saving</p>;
  }
  if (error) {
    return <p>error.message</p>;
  }
  return (
    <div>
      <h1>Add Goal</h1>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validate={validate}>
        <StyledForm>
          <label htmlFor='name'>Name</label>
          <Field name='name' type='text' />
          <ErrorMessage name='name' />
          <button type='submit'>Submit</button>
        </StyledForm>
      </Formik>
    </div>
  );
};
