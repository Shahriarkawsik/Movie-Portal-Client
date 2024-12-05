import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    document.title = "Home | Movie Portal";
  }, [pathname]);
  return <div></div>;
};

export default Home;
