import "../style/Cards.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const imgUrl =
    "https://xobfpixlhapreuruwsyk.supabase.co/storage/v1/object/public/got-img/";

export const Card = (props) => {
  const [active, setActive] = useState(false);
  
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className="card-wrapper">
      <div className="card">
        <span
          className="heartImageSpan cursors"
          onClick={() => {
            handleClick();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={active ? "heartImageRed" : "heartImage"}
            viewBox="0 0 256 256"
          >
            <path d="M240 98a57.63 57.63 0 0 1-17 41l-89.3 90.62a8 8 0 0 1-11.4 0L33 139a58 58 0 0 1 82-82.1l13 12.15l13.09-12.19A58 58 0 0 1 240 98Z" />
          </svg>
        </span>
        <div className="cardImageDiv">
          <img
            src={imgUrl + props.card.picture}
            alt="cardImage"
            className="cardImage"
          />
        </div>
        <div className="cardDescription">
          <div className="cardDescriptionLeft">
            <div class="itemName">
              <h4>{props.card.title}</h4>
            </div>
            <div class="place">
              <img
                src={require("../images/location.png")}
                alt="loaction"
                class="locationImageImage"
              />
              <span class="CityName">{props.card.location}</span>
            </div>
          </div>
          <div className="itemDescription">
            <p>{props.card.description}</p>
          </div>
          <div className="cardDescriptionRight">
            <Link to={`/proizvod?id=${props.card.id}`}>
              <div className="viseButtonDiv">
                <button className="višeButton cursors buttonStyle">
                  <span>Više</span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="viseSVG"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M13.3 17.275q-.3-.3-.288-.725t.313-.725L16.15 13H5q-.425 0-.713-.288T4 12q0-.425.288-.713T5 11h11.15L13.3 8.15q-.3-.3-.3-.713t.3-.712q.3-.3.713-.3t.712.3L19.3 11.3q.15.15.213.325t.062.375q0 .2-.063.375t-.212.325l-4.6 4.6q-.275.275-.687.275t-.713-.3Z"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
