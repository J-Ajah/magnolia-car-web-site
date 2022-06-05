
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