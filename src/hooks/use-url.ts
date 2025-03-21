import { useEffect } from "react";

export const useUrl = (url: string, delay: number = 500) => {
  useEffect(() => {
    setTimeout(() => {
      window.open(url);
    }, delay);
  }, [delay, url]);
};
