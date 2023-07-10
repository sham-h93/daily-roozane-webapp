import axios from "axios";
import { useEffect, useState } from "react";

const BASE_URL = "http://127.0.0.1:2000/api/";

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
        headers: { "content-type": "application/json; charset=utf-8" },
        data: data,
      });
      //console.log(res);
      setResponse(res);
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
