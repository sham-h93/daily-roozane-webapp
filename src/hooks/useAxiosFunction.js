import axios from "axios";
import { useEffect, useState } from "react";

const BASE_URL = "http://127.0.0.1:2000/";

const useAxios = () => {
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [controller, setController] = useState();

  const fetchData = async ({ method, url, data = {} }) => {
    try {
      setLoading(true);
      const ctrl = new AbortController();
      setController(ctrl);
      const res = await axios({
        method: method,
        url: BASE_URL + url,
        signal: ctrl.signal,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "content-type": "application/json; charset=utf-8",
        },
        data: data,
      });
      console.log(res);
      setResponse(res);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    return () => controller && controller.abort();
  }, [controller]);

  return [response, error, loading, fetchData];
};

export default useAxios;
