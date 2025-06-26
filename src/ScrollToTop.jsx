import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = ({ skipPaths = [] }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    const shouldSkip = skipPaths.some((path) => pathname.startsWith(path));
    if (!shouldSkip) {
      window.scrollTo(0, 0);
    }
  }, [pathname, skipPaths]);

  return null;
};

export default ScrollToTop;
