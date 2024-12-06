import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import BGImg from "../../assets/image/BG/10.png";
import Banner from "../Banner/Banner";
import TrailerMovie from "../TrendingMovie/TrendingMovie";
const Home = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    document.title = "Home | Movie Portal";
  }, [pathname]);
  return (
    <div
      style={{
        backgroundImage: `url(${BGImg})`,
        backgroundSize: "100% 100%",
      }}
    >
      <Banner></Banner>
      <TrailerMovie></TrailerMovie>
      {/* <div className="w-11/12 lg:w-9/12 mx-auto"></div> */}
    </div>
  );
};

export default Home;
