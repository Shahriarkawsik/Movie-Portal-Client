import { useContext, useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  // const { pathname } = useLocation();
  // useEffect(() => {
  //   setDestination(pathname);
  // }, [pathname]);

  if (loading) {
    return (
      <div className="flex items-center justify-center">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to={"/login"}></Navigate>;
};

export default PrivateRoutes;
