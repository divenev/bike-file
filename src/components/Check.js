import { useState } from "react";
import { useForm } from "../hooks/useForm";
import { checkBikeService } from "../services/checkBikeServise";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { sendMessageService } from "../services/sendMessageService";

export const Check = () => {
  const { user } = useContext(UserContext);
  const [bike, setBike] = useState();
  const [message, setMessage] = useState();
  const { values, changeHandler } = useForm({
    frame_number: "",
    messageForOwner: "",
  });

  const onSubmit = async (e) => {
    const result = await checkBikeService(e);
    setBike(result);
  };

  const sendMessage = async (e) => {
    const result = await sendMessageService(e, user, bike[0]);
    setMessage(result);
  };

  return (
    <>
      <form className="form" onSubmit={onSubmit}>
        <input
          type="text"
          name="frame_number"
          value={values.frame_number}
          onChange={changeHandler}
          placeholder="Frame number"
        ></input>

        <input type="submit" className="button" value="Check a bike"></input>

        {bike && bike.length > 0 && (
          <>
            <p>
              <b>Status: {bike[0].status}</b>
            </p>
            <p>Brand: {bike[0].brand}</p>
            <p>Category: {bike[0].type_bike}</p>
            <p>Description: {bike[0].description}</p>
            <p>FrameNumber: {bike[0].frame_number}</p>
            <div>
              <img className="image" src={bike[0].img} alt="bike_image" />
            </div>
          </>
        )}
        {bike && bike.length === 0 && <p>Not found</p>}
      </form>
      {!message && bike && bike.length !== 0 && user && user.hasOwnProperty("email") && (
        <>
          <form className="form" onSubmit={sendMessage}>
            <textarea
              type="text"
              name="messageForOwner"
              value={values.message}
              onChange={changeHandler}
              placeholder="Мessage to the owner"
            ></textarea>
            <button type="submit" className="button" value="Send message">
              Send the message
            </button>
            {message && <>Send the message</>}
          </form>
        </>
      )}
      {message && (
        <form className="form">
          <p>Send the message</p>
        </form>
      )}
    </>
  );
};
