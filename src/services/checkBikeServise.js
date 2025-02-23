import { requestServer } from "./requestServer";

export const checkBikeService = async (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));
  const bike = await requestServer(
    `/bike/check/?frame_number=${data.frame_number}`,
    
    "GET"
  );
  return bike;
};
