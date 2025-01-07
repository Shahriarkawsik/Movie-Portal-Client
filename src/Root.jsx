import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import { useEffect, useContext } from "react";
import { AuthContext } from "./Providers/AuthProvider";

const Root = () => {
  const { isDark } = useContext(AuthContext);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname === "/") {
      document.documentElement.setAttribute(
        "data-theme",
        isDark ? "dark" : "light"
      );
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, [pathname, isDark]);
  return (
    <div>
      <NavBar />
      <div className="min-h-screen">
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
};

export default Root;
