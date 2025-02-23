import { useNavigate, useParams } from "react-router-dom";
import { BikeContext } from "../contexts/BikeContext";
import { useContext, useEffect, useState } from "react";
import { getBikeService } from "../services/getBikeService";
import { delBikeService } from "../services/delBikeService";

export const DeleteBike = () => {
  const { IdBike } = useParams();
  const { bikeL } = useContext(BikeContext);
  const [bike, setBikeS] = useState(
    bikeL && bikeL.filter((b) => b.id.toString() === IdBike)[0]
  );

  useEffect(() => {
    if (bike === "") {
      getBikeService(IdBike).then((b) => {
        setBikeS(b);
      });
    }
  }, [IdBike, bike]);

  const navigate = useNavigate();

  const onSubmit = async () => {
    await delBikeService(IdBike);
    navigate("/bike/my");
  };

  return (
    <>
      <section className="catalog">
        <h3>Delete Bike</h3>
        <div key={bike.id} className="myBike">
          <p>
            Status: <b>{bike.status}</b>
          </p>
          <p>
            Brand: <b>{bike.brand}</b>
          </p>
          <p>
            Model: <b>{bike.model}</b>
          </p>
          <p>
            Type bike: <b>{bike.type_bike}</b>
          </p>
          <p>
            Frame number: <b>{bike.frame_number}</b>
          </p>
          <p>Description: {bike.description}</p>
          <p></p>
          <img className="image" src={bike.img} alt="No img" />
          <button onClick={onSubmit} className="button button_del">
            Yes
          </button>
          <button
            onClick={() => {
              navigate("/bike/my");
            }}
            className="button button_no_del"
          >
            No
          </button>
        </div>
      </section>
    </>
  );
};
