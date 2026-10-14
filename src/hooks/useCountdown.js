import { useEffect, useState } from "react";

export default function useCountdown(end) {
  const target = new Date(end).getTime();
  const calc = () => {
    const d = Math.max(0, target - Date.now());
    return { Days: Math.floor(d / 864e5), Hours: Math.floor(d / 36e5) % 24, Mins: Math.floor(d / 6e4) % 60, Secs: Math.floor(d / 1e3) % 60 };
  };
  const [t, setT] = useState(calc);
  useEffect(() => {
    const i = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(i);
  }, [target]);
  return t;
}
