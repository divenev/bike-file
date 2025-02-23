import { requestServer } from "./requestServer";

export const addBikeService = async (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));

  if (
    data.brand === "" ||
    data.model === "" ||
    data.frame_number === "" ||
    data.status === "" 
    // ||
    // data.type_bike === ""
  ) {
    alert("Enter a value in all fields");
    throw new Error("Enter a value in all fields");
  }

  data.type_bike = { name: data.type_bike };
  data.img = { img_url: data.img };

  const result = await requestServer(`/bike/bikes/`, "POST", data);

  return result;
};
