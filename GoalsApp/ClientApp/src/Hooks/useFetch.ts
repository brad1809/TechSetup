import { useEffect, useState } from 'react';

type UseFetchResult<T> = {
  data: T | null;
  loading: boolean;
  error: Error | null;
};

export const useFetch = <T>(url: string): UseFetchResult<T> => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(url)
      .then((response: Response) => response.json())
      .then((result: T) => setData(result))
      .catch((error: Error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return {
    data,
    loading,
    error,
  };
};
