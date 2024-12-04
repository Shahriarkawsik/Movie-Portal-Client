import { useContext, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const PrivateRoutes = ({ children }) => {
  const { user, setDestination } = useContext(AuthContext);
  const { pathname } = useLocation();
  useEffect(() => {
    setDestination(pathname);
  }, [pathname]);

  if (user) {
    return children;
  }
  return <Navigate to={"/login"}></Navigate>;
};

export default PrivateRoutes;
