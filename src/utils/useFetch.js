import { useState, useEffect, useRef, useCallback } from 'react';

let baseUrl =
  'https://cors-anywhere.herokuapp.com/https://listen-api-test.listennotes.com/api/v2/';
if (process.env.NODE_ENV === 'production') {
  baseUrl = 'https://listen-api.listennotes.com/api/v2/';
}
export default function useFetch(
  url,
  { defaultVal, key, lazy, defaultStatus } = {}
) {
  const [payload, setState] = useState({
    status: defaultStatus || 'idle',
    data: defaultVal || [],
    error: null,
  });
  const [fetchLink, setFetchLink] = useState(() => url || null);

  const setPayload = useSafeAsync(setState);

  useEffect(() => {
    if (fetchLink) {
      setPayload((prev) => ({ ...prev, status: 'pending' }));
      fetch(baseUrl + fetchLink, {
        headers: {
          'X-ListenAPI-Key': process.env.REACT_APP_LISTENNOTES_APIKEY,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setPayload({
            status: 'resolved',
            data: key ? data[key] : data,
            error: null,
          });
        })
        .catch((error) => {
          setPayload({
            status: 'rejected',
            data: defaultVal || [],
            error: error.message,
          });
        });
    }
  }, [defaultVal, fetchLink, key, setPayload]);

  const handleLazyFetch = useCallback((link) => {
    setFetchLink(link);
  }, []);

  if (lazy) return [payload, setPayload, handleLazyFetch];

  return [payload, setPayload];
}

function useSafeAsync(setState) {
  const mountRef = useRef();
  useEffect(() => {
    mountRef.current = true;
    return () => {
      mountRef.current = false;
    };
  }, []);
  return useCallback(
    (...args) => {
      if (mountRef.current) {
        setState(...args);
      }
    },
    [setState]
  );
}
