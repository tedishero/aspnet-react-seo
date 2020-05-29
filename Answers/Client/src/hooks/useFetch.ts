import { useState, useEffect } from "react";
import axios from "axios";

// custom hook for performing GET request
const useFetch = (url: string, initData: any) => {
  const [data, setData] = useState<any>(initData);
  const [loading, setLoading] = useState(!initData);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async function () {
      try {
        setLoading(true);
        const response = await axios.get(url);
        if (response.status === 200) {
          setData(response.data);
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    if (!initData) {
      fetchData();
    }
  }, [url]);
  return { loading, data, error };
};

export default useFetch;
