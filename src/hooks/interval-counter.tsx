import React, { useState, useEffect } from 'react';

export default function IntervalCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    return () => {
      console.log('clearInterval', id);
      clearInterval(id);
    };
  }, []);

  return <h1>{count}</h1>;
}
