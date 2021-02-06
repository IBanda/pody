import { useEffect, useState } from 'react';
export default function useLocalstorage(key, initialState, { id } = {}) {
  const [state, setState] = useState(() => {
    const lsValue = window.localStorage.getItem(key);
    if (lsValue) return JSON.parse(lsValue);
    return initialState;
  });
  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}
