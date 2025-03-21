import { useEffect } from "react";

export const useUrl = (url: string, disable: boolean = false, delay: number = 500) => {
  useEffect(() => {
    if (disable) return;
    setTimeout(() => {
      window.open(url);
    }, delay);
  }, [delay, url, disable]);
};
