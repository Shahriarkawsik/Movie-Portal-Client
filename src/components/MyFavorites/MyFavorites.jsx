import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const MyFavorites = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    document.title = "Favorite Movie | Movie Portal";
  }, [pathname]);
  return <div></div>;
};

export default MyFavorites;
