import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { bikeMessagesService } from "../services/bikeMessagesService";

export const MessageBike = () => {
  const { IdBike } = useParams();
  const [message, setMessage] = useState();

  useEffect(() => {
    bikeMessagesService(IdBike).then((result) => {
      setMessage(result);
    });
  });

  return (
    <>
      <section className="box">
        <h3>Мessages about the bike</h3>

        {message &&
          message.length >= 1 &&
          message.map((m) => (
            <div key={m._id} className="message">
              <p>From: {m.senderEmail}</p>
              <p>
                Message: {m.messageForOwner}
              </p>
            </div>
          ))}
          {message && message.length < 1 && <h3 className="no-message">There are no reports on this bike</h3>}
      </section>
    </>
  );
};
