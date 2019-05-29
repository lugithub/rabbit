import React, { useState, useEffect, useRef } from 'react';

function useTime(time: number) {
  const timeRef = useRef(time);
  useEffect(() => {
    timeRef.current = time;
  });
  return timeRef;
}

export default function Clock() {
  const [time, setTime] = useState(0);
  const timeRef = useTime(time);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(timeRef.current + 1);
    }, 1000);
    return () => {
      console.log('clearInterval', timer);
      clearInterval(timer);
    };
  }, [timeRef]);

  return <div>Seconds: {time}</div>;
}
