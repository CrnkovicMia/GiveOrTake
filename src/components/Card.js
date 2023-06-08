import "../style/Cards.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";
import { useEffect } from "react";

const imgUrl =
  "https://xobfpixlhapreuruwsyk.supabase.co/storage/v1/object/public/got-img/";

export const Card = (props) => {
  const [active, setActive] = useState(false);
  const [locationData, setLocation] = useState(" ");

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = async () => {
    const { data } = await supabase
      .from("City")
      .select("*")
      .eq("id", props.card.locationId)
      .single();
    setLocation(data.name);
  };

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
          </div>
          <div className="cardDescriptionPlace">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5a2.5 2.5 0 0 1 0 5z"
                />
              </svg>
            </span>
            <span class="CityName">{locationData}</span>
          </div>
          <div className="itemDescription">
            <p>{props.card.description}</p>
          </div>
          <div className="cardDescriptionRight">
            <Link to={`/proizvod?id=${props.card.id}`}>
              <div className="viseButtonDiv">
                <span className="saznajVise">Saznaj više</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M9 12h6m0 0l-3 3m3-3l-3-3" />
                  </g>
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
