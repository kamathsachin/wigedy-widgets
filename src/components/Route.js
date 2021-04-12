import { useState, useEffect } from "react";

const Route = ({ path, children }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const OnLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", OnLocationChange);

    return () => {
      window.removeEventListener("popstate", OnLocationChange);
    };
  }, []);

  return currentPath === path ? children : null;
};

export default Route;
