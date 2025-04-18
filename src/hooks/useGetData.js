// import { useState, useEffect } from "react";
// import axios from "axios";

// const useGetData = (endpoint,token) => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const fetchData = async () => {
//     try {
//       const res = await axios.get(endpoint);
//       setData(res.data);
//     } catch (err) {
//       setError(err.message || res.data.message || "Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (endpoint) {
//       fetchData();
//     }
//   }, [endpoint]);

//   return { data, loading, error };
// };

// export default useGetData;

import { useState, useEffect } from "react";
import axios from "axios";

const useGetData = (endpoint, token = null) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const config = token
        ? { headers: { Authorization: `Bearer ${token}` } }
        : {};

      const response = await axios.get(endpoint, config);
      setData(response.data);
      setError(null); // Clear previous errors on success
    } catch (err) {
      setError(
        err.response?.data?.message || err.message || "Failed to fetch data"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (endpoint) {
      fetchData();
    }
  }, [endpoint, token]);

  return { data, loading, error };
};

export default useGetData;
