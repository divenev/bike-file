import { requestServer } from "./requestServer";

export const sendMessageService = async (e, user, bike) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));
  data["senderEmail"] = user.email;
  data["bikeID"] = bike._id;
  const message = await requestServer(`/data/comments`, "POST", data);
  return message;
};
