import React, { useState } from 'react';
import useInterval from './use-interval';

export default function CounterUseInterval() {
  const [count, setCount] = useState(0);
  useInterval(setCount.bind(null, count + 1), 1000);
  return <h1>{count}</h1>;
}
