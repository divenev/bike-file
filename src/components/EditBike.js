import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "../hooks/useForm";

import { BikeContext } from "../contexts/BikeContext";
import { useContext, useEffect, useState } from "react";
import { editBikeService } from "../services/editBikeService";
import { getBikeService } from "../services/getBikeService";

export const EditBike = () => {
  const { IdBike } = useParams();
  const { bikeL } = useContext(BikeContext);
  const [bike, setBikeS] = useState(
    bikeL && bikeL.filter((b) => b.id.toString() === IdBike)[0]
  );

  const { values, changeHandler, changeValue } = useForm({
    id: bike.id,
    owner_id: bike.owner_id,
    brand: bike.brand && bike.brand,
    model: bike.model && bike.model,
    type_bike:  bike.type_bike && bike.type_bike,
    tire_size: bike.tire_size && bike.tire_size,
    frame_size: bike.frame_size && bike.frame_size,
    frame_number: bike.frame_number && bike.frame_number,
    img: bike.img && bike.img,
    description: bike && bike.description,
    status: bike.status && bike.status,
  });

  useEffect(() => {
    if (bike === '') {
      getBikeService(IdBike).then((b) => {
        setBikeS(b);
        changeValue(b);
      });
    }
  }, [IdBike, bike, changeValue]);

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    await editBikeService(e, IdBike);
    navigate("/bike/my");
  };

  return (
    <>
      <form className="form" onSubmit={onSubmit}>
        <input
          type="text"
          name="brand"
          value={values.brand}
          onChange={changeHandler}
          placeholder="Brand"
        ></input>
        <input
          type="text"
          name="model"
          value={values.model}
          onChange={changeHandler}
          placeholder="Model"
        ></input>
        <input
          type="text"
          name="type_bike"
          value={values.type_bike}
          onChange={changeHandler}
          placeholder="Category"
        ></input>
        <input
          type="text"
          name="frame_number"
          value={values.frame_number}
          onChange={changeHandler}
          placeholder="Frame Number"
        ></input>
        <input
          type="text"
          name="tire_size"
          value={values.tire_size}
          onChange={changeHandler}
          placeholder="Tire size"
        ></input>
        <input
          type="text"
          name="frame_size"
          value={values.frame_size}
          onChange={changeHandler}
          placeholder="frame_size"
        ></input>
        <input
          type="url"
          name="img"
          value={values.img}
          onChange={changeHandler}
          placeholder="Url image"
        ></input>
        <input
          type="text"
          name="description"
          value={values.description}
          onChange={changeHandler}
          placeholder="Description"
        ></input>
        <select name="status" defaultValue={bike.status} >
          <option value="for_sale">For sale</option>
          <option value="not_for_sale">Not for sale</option>
          <option value="stolen">Stolen</option>
        </select>
        <input type="submit" className="button" value="Edit bike"></input>
      </form>
    </>
  );
};
