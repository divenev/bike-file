import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { Navigate, Outlet } from "react-router-dom";

export const RouteGuard = () => {
  const { user } = useContext(UserContext);
  if (!user) {
    return <Navigate to="/user/login" />;
  }
  return <Outlet />;
};
