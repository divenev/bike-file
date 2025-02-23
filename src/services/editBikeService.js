import { requestServer } from "./requestServer";

export const editBikeService = async (e, IdBike) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));

  if (
    data.brand === "" ||
    data.category === "" ||
    data.frameNumber === "" ||
    data.status === ""
  ) {
    alert("Enter a value in all fields");
    throw new Error("Enter a value in all fields");
  }

  data.type_bike = { name: data.type_bike };
  data.img = { img_url: data.img };

  const result = await requestServer(`/bike/details/${IdBike}`, "PUT", data);

  return result;
};
