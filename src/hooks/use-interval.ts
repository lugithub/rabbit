import { useEffect } from 'react';

export default function useInterval(callback: () => void, delay: number) {
  useEffect(() => {
    if (delay !== null) {
      let id = setInterval(callback, delay);
      return () => clearInterval(id);
    }
  }, [callback, delay]);
}
