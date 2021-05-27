import { useEffect, useState } from 'react';
import api from '@services/api';
import capitalize from '@utils/capitalize';

export default function useFind(modelName: string, params = {}) {
  const capitalizedModel = capitalize(modelName);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [model, setModel] = useState(null);

  useEffect(() => {
    find();
  }, []);

  async function find() {
    try {
      setLoading(true);
      const response = await api.get(modelName, { params });
      setModel(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  return {
    loading,
    [`loading${capitalizedModel}`]: loading,
    [modelName]: model,
    error,
    refresh: find,
    [`refresh${capitalizedModel}`]: find,
  };
}
