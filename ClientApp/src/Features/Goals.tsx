import { RouteComponentProps } from '@reach/router';
import React, { useEffect, useState } from 'react';

type Goal = {
  name: string;
  completed: boolean;
};

type Goals = {
  goals: Array<Goal>;
};

type GoalsProps = RouteComponentProps;

export const Goals: React.FC<GoalsProps> = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<Goals | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch('https://localhost:5001/api/goals')
      .then((response: Response) => response.json())
      .then((result: Goals) => setData(result))
      .catch((error: Error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

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
