import { requestServer } from "./requestServer";

export const getBikeService = async (IdBike) => {
  const result = await requestServer(`/bike/details/${IdBike}`, "GET");

  return result;
};
