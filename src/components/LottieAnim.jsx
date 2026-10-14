import { useEffect, useState } from "react";
import Lottie from "lottie-react";

/* Loads a Lottie json on demand so the big files stay out of the first bundle.
   Pass a loader like: () => import("../lottie/money.json") */
export default function LottieAnim({ load, className = "", label, loop = true }) {
  const [data, setData] = useState(null);
  const [still, setStill] = useState(false);

  useEffect(() => {
    let alive = true;
    load().then((m) => alive && setData(m.default || m)).catch(() => {});
    setStill(window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false);
    return () => { alive = false; };
  }, [load]);

  return (
    <div className={`lottie ${className}`} role="img" aria-label={label}>
      {data && <Lottie animationData={data} loop={loop} autoplay={!still} rendererSettings={{ preserveAspectRatio: "xMidYMid meet" }} />}
    </div>
  );
}

export const loadExchange = () => import("../lottie/currency-exchange.json");
export const loadMoney = () => import("../lottie/money.json");
export const loadDownload = () => import("../lottie/download-app.json");
