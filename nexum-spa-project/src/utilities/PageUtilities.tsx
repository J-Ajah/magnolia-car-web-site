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

export const formatDate = (actualString) => {
  let publishDate = actualString.slice(0, 10);
  let reverseString = publishDate.split("-").reverse();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  // New format- May 12,2020
  const monthString = parseInt(reverseString[1][1]) - 1;
  return reverseString[0] + " " + months[monthString] + ", " + reverseString[2];
};
