import "../style/Item.css";

import { useState, useEffect } from "react";
import { LinkedItems } from "../components/LinkedItems.js";
import { supabase } from "../lib/supabaseClient";
import { useSearchParams } from "react-router-dom";

export const Item = () => {
  const [card, setCard] = useState({
    id: null,
    title: "",
    description: "",
    location: "",
    picture: "",
  });
  const [clicked, setActive] = useState(false);
  const [searchParams] = useSearchParams();
  const [active, setActiveButton] = useState(false);
  const handleActive = () => {
    setActiveButton(!active);
  };

  const itemId = searchParams.get("id");
  const imgUrl =
    "https://xobfpixlhapreuruwsyk.supabase.co/storage/v1/object/public/got-img/";

  useEffect(() => {
    getCard();
  }, []);

  useEffect(() => {
    imageClick(0);
  }, [card]);

  const handleClick = () => {
    setActive(!clicked);
  };

  const [idCat, setIdCat] = useState();

  async function getCard() {
    const { data } = await supabase
      .from("Card")
      .select()
      .eq("id", itemId)
      .single();

    const { data: categoryData, error } = await supabase
      .from("cardCategory")
      .select("*")
      .eq("cardId", itemId);

    const categoryIds = categoryData.map((data) => {
      return data.categoryId;
    });
    setIdCat(categoryIds);

    setCard(data);
  }

  const imag = [
    { id: 0, value: imgUrl + card.picture },
    { id: 1, value: require("../images/logoImage.png") },
    { id: 2, value: require("../images/logoImage.png") },
    { id: 3, value: require("../images/logoImage.png") },
  ];
  const [sliderData, setsliderData] = useState(imag[0]);

  const imageClick = (index) => {
    const slider = imag[index];
    setsliderData(slider);
  };

  return (
    <>
      <div className="mainContenr">
        <div className="images">
          <div className="mainPhoto">
            <img src={sliderData.value} className="mainPhotoImg" />
          </div>
          <div className="otherVersions">
            {imag.map((data, i) => (
              <div className="otherPhotos">
                <img
                  key={data.id}
                  src={data.value}
                  className="otherPhotosImg"
                  onClick={() => imageClick(i)}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="itemInfoDiv">
          <div className="infoTop">
            <div className="itemButtons">
              <button
                className={active ? "opisButton" : "opisButtonActive"}
                onClick={() => {
                  handleActive();
                }}
              >
                OPIS
              </button>
              <button
                className={
                  !active ? "recenzijeButton" : "recenzijeButtonActive"
                }
                onClick={() => {
                  handleActive();
                }}
              >
                RECENZIJE
              </button>
            </div>
            <span
              onClick={() => {
                handleClick();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                className={clicked ? "heartImageRedTwo" : "heartImageTwo"}
                viewBox="0 0 256 256"
              >
                <path d="M240 98a57.63 57.63 0 0 1-17 41l-89.3 90.62a8 8 0 0 1-11.4 0L33 139a58 58 0 0 1 82-82.1l13 12.15l13.09-12.19A58 58 0 0 1 240 98Z" />
              </svg>
            </span>
          </div>
          {!active ? (
            <div className="itemInfo">
              <div className="infoLeft">
                <span className="spanTitle">
                  <strong>{card.title}</strong>
                </span>
                <span className="location">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 2c3.31 0 6 2.66 6 5.95C18 12.41 12 19 12 19S6 12.41 6 7.95C6 4.66 8.69 2 12 2m0 4a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m8 13c0 2.21-3.58 4-8 4s-8-1.79-8-4c0-1.29 1.22-2.44 3.11-3.17l.64.91C6.67 17.19 6 17.81 6 18.5c0 1.38 2.69 2.5 6 2.5s6-1.12 6-2.5c0-.69-.67-1.31-1.75-1.76l.64-.91C18.78 16.56 20 17.71 20 19Z"
                    />
                  </svg>
                  <label>{card.location}</label>
                </span>
                <span className="textChange">{card.description}</span>
              </div>
              <div className="infoRight">
                <div className="properties">
                  <span className="line">
                    <strong>Kategorija: </strong>
                  </span>
                  <span className="line">
                    <strong>Veličina: </strong>
                  </span>
                  <span className="line">
                    <strong>Boja: </strong>
                  </span>
                  <span className="line">
                    <strong>Datum objave: </strong>
                  </span>
                  <span className="line">
                    <strong>Istek oglasa: </strong>
                  </span>
                  <span className="line">
                    <strong>Pregledi: </strong>
                  </span>
                </div>
                <div className="propertiesValues">
                  <span className="line">Obuća</span>
                  <span className="line">42</span>
                  <span className="line">Plava</span>
                  <span className="line">27.04.2023.</span>
                  <span className="line">13 dana</span>
                  <span className="line">3</span>
                </div>
              </div>
            </div>
          ) : (
            <p className="alert">Recenzije će biti vidljive ubrzo</p>
          )}

          <div className="itemInfoBottom">
            <button className="kontaktirajButton">Kontaktiraj vlasnika</button>
          </div>
        </div>
      </div>
      <LinkedItems IDCategory={idCat} />
    </>
  );
};
