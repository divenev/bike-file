import { useContext, useEffect } from "react";
import { logoutUser } from "../services/logoutUser";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

export const Logout = () => {
  const navigate = useNavigate();
  const { updateUser } = useContext(UserContext);

  useEffect(() => {
    logoutUser();
    localStorage.removeItem("userData");
    updateUser();
    navigate("/");
  }, [navigate, updateUser]);
};
