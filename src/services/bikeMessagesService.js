import { requestServer } from "./requestServer";

export const bikeMessagesService = async (bikeId) => {
  const message = await requestServer(
    `/data/comments?where=bikeID IN ("${bikeId}")`,
    "GET"
  );
  return message;
};
