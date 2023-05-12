import "../style/ProfileInfo.css";
import { useState } from "react";

export const ProfilCard = (props) => {
  const [active, setActive] = useState(false);

  const imgUrl =
    "https://xobfpixlhapreuruwsyk.supabase.co/storage/v1/object/public/got-img/";

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className="card-wrapperTwo">
      <div className="cardTwo">
        <div
          className="circleDivTwo"
          onClick={() => {
            handleClick();
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={
              active ? "absoluteSVGImageGreenTwo" : "absoluteSVGImageTwo"
            }
            viewBox="0 0 24 24"
          >
            <path d="M12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z" />
          </svg>
        </div>
        <div className="penDivTwo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absoluteSVGImageTwo"
            viewBox="0 0 512 512"
          >
            <path d="m497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4L.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3l262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3l-31.1-31.1L51.7 376H88v48z" />
          </svg>
        </div>
        <div className="cardImageDivTwo">
          <img
            src={imgUrl+props.card.picture}
            alt="cardImag"
            className="cardImageTwo"
          />
        </div>
        <div className="cardDescriptionTwo">
          <p>{props.card.title}</p>
        </div>
      </div>
    </div>
  );
};
