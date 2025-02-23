import { createContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userLocalState] = useLocalStorage();

  const [user, setUser] = useState(() => {
    return userLocalState;
  });

  const updateUser = (value) => {
    setUser(value);
  };

  const context = {
    useLocalStorage,
    user: user,
    updateUser,
  };

  return (
    <>
      <UserContext.Provider value={context}>{children}</UserContext.Provider>
    </>
  );
};
