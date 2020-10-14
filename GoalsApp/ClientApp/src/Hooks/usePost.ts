import { useState } from 'react';

type UsePostResult<TPost, TResponse> = {
  loading: boolean;
  error: Error | null;
  onSubmit: (values: TPost) => void | Promise<unknown>;
};

export const usePost = <TPost, TResponse>(
  url: string,
  onResult: (result: TResponse) => unknown,
): UsePostResult<TPost, TResponse> => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const onSubmit = (values: TPost) => {
    setError(null);
    setLoading(true);

    fetch(url, {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((jsonResult: TResponse) => onResult(jsonResult))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  };

  return {
    loading,
    error,
    onSubmit,
  };
};
