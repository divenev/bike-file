import { requestServer } from "./requestServer";

export const delBikeService = async (IdBike) => {
  const result = await requestServer(`/bike/details/${IdBike}`, "DELETE");
  return result;
};
