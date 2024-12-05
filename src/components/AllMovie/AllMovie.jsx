import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const AllMovie = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    document.title = "All Movie | Movie Portal";
  }, [pathname]);
  return <div></div>;
};

export default AllMovie;
