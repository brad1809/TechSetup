import { RouteComponentProps } from '@reach/router';
import React from 'react';
import { useFetch } from '../Hooks/useFetch';

type Goal = {
  name: string;
  completed: boolean;
};

type Goals = {
  goals: Array<Goal>;
};

type GoalsProps = RouteComponentProps;

export const Goals: React.FC<GoalsProps> = () => {
  const { data, loading, error } = useFetch<Goals>('api/goals');

  if (loading) {
    return <>Loading!</>;
  }

  if (error) {
    return <>Error: {error.message}</>;
  }

  return (
    <div>
      <h1>Goals Page</h1>
      {data && (
        <>
          Found {data.goals.length} goals:
          <ul>
            {data.goals.map((goal: Goal) => (
              <li key={goal.name}>{goal.name}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};
