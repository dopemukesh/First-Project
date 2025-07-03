import { useEffect, useState } from "react";
import FetchAPI from "../api/fetchAPI/FetchAPI2";

const useResource = (resourceType) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!resourceType) return;

    const fetchData = async () => {
      try {
        const result = await FetchAPI(`v1/${resourceType}/all`, { method: "GET" });
        if (!result) throw new Error(`Failed to fetch ${resourceType}`);
        setData(result[resourceType] || result); // Fallback for flexible response formats
      } catch (err) {
        console.error(`Error fetching ${resourceType}:`, err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [resourceType]);

  return { data, loading, error };
};

export default useResource;