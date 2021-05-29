import { useState, useEffect } from "react";

const useFetch = (url) => {
  const Abortcont = new AbortController();
  const [data, setData] = useState(null);
  const [isPending, setIspending] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch(url, { signal: Abortcont.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("could not fetch data for that resource");
        }

        return res.json();
      })
      .then((data) => {
        setData(data);
        setIspending(false);
        setError(null);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch aborted");
        } else {
          setIspending(false);
          setError(err.message);
        }
      });
    return () => {
      Abortcont.abort();
    };
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
