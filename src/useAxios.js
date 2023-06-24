import axios from "axios";
import { useEffect, useState } from "react";

const BASE_URL = "http://127.0.0.1:2000/api/";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "content-type": "Application/json",
  },
});

const useAxios = (params) => {
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const fetchData = async () => {
    try {
      const response = await axiosInstance.get(params);
      setResponse(response.data);
      //  console.log(response.data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, [params]);

  return [loading, response, error];
};

export default useAxios;
