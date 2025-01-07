import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import BGImg from "../../assets/image/BG/10.png";
import Banner from "../Banner/Banner";
import TrailerMovie from "../TrendingMovie/TrendingMovie";
import Footer from "../Footer/Footer";
import SubscriptionDemo from "../Subscription/SubscriptionDemo";
import ContactFeedback from "../ContactFeedback/ContactFeedback";
import { AuthContext } from "./../../Providers/AuthProvider";
import { FiMoon, FiSun } from "react-icons/fi";
const Home = () => {
  const { isDark, setIsDark } = useContext(AuthContext);
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
      <SubscriptionDemo />
      <ContactFeedback />
      <button
        className="p-4 rounded-full bg-blue-200 fixed right-5 bottom-5 z-10"
        onClick={() => setIsDark((c) => !c)}
      >
        {isDark ? <FiSun /> : <FiMoon />}
      </button>
    </div>
  );
};

export default Home;
