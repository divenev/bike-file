import { requestServer } from "./requestServer";

export const logoutUser = async () => {
  const result = await requestServer(`/user/logout/`, 'POST');
  return result;
};
