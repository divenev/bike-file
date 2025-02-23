import { useState } from "react";

export const useLocalStorage = (initialValues) => {
  const [user, setUser] = useState(() => {
    const userLocalStorage = localStorage.getItem("userData");
    if (userLocalStorage) {
      const oldUser = JSON.parse(userLocalStorage);
      return oldUser;
    }

    return initialValues;
  });

  const setUserLocalStorage = (value) => {
    setUser(value);
    localStorage.setItem("userData", JSON.stringify(value));
  };

  return [user, setUserLocalStorage];
};
