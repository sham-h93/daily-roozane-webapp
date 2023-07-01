import axios from "axios";
import { useEffect, useState } from "react";

const BASE_URL = "http://127.0.0.1:2000/api/";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "content-type": "application/json; charset=utf-8",
  },
});

const useAxios = (method, url, data = null) => {
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios({
        method: method,
        url: BASE_URL + url,
        params: data,
        headers: { "Content-Type": "application/json" },
      });
      console.log();
      setResponse(res.data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url, data]);

  return [response, error, loading];
};

export default useAxios;
