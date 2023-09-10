import { useEffect, useState } from "react";

const useOnline = () => {
  const [netStatus, setnetStatus] = useState(true);

  useEffect(() => {
    let handleOnline = () => {
      setnetStatus(true);
    };

    let handleOffline = () => {
      setnetStatus(false);
    };
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.addEventListener("online", handleOnline);
      window.addEventListener("offline", handleOffline);
    };
  }, []);

  return netStatus;
};

export default useOnline;
