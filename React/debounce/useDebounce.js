import { useEffect, useState } from "react";

export const useDebounce = (text) => {
  const [debounceText, setDebounceText] = useState("");
  const delay = 1000;
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceText(text);
    }, delay);
    return () => {
      clearInterval(timer);
    };
  }, [text]);
  return { debounceText };
};
