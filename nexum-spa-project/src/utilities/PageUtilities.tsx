import { useEffect, useRef } from "react";

export const setCurrentPage = (path): string => {
  switch (path) {
    case "/":
    case "/homepage":
      path = "home";
      break;
    case "/homepage/about":
      path = "about";
      break;
    case "/contact":
      path = "contact us";
    default:
      path = "/";
  }
  return path;
};


export const useIsMounted = () => {
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  });

  return isMounted;
};
