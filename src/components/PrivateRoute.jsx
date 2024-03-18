/* eslint-disable react/prop-types */
import { Navigate, useLocation, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = () => {
  const { authToken } = useAuth();
  const location = useLocation();

  if (authToken) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
};
export default PrivateRoute;
