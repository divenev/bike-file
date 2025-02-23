import { createContext, useState } from "react";

export const BikeContext = createContext();

export const BikeProvider = ({ children }) => {
  const [bikeL, setBike] = useState("");

  const updateBike = (value) => {
    setBike(value);
  };

  const context = {
    bikeL,
    updateBike,
  };

  return (
    <>
      <BikeContext.Provider value={context}>{children}</BikeContext.Provider>
    </>
  );
};
