import "../style/LinkedItems.css";
import "../style/Slider.css";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { Card } from "./Card";

export const LinkedItems = (props) => {
  const [list, setList] = useState([]);
  const [iteWidth, setItemWidth] = useState(126);

  const cards = [];
  const cardLinked = [];
  const cardIds = new Set();
  const outerContainer =
    document.getElementsByClassName("outer-containerTwo")[0];

  const handleNextClick = () => {
    outerContainer.scrollBy(iteWidth, 0);
  };
  const handlePrevClikc = () => {
    outerContainer.scrollBy(-iteWidth, 0);
  };

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 480) {
        setItemWidth(190);
      }
      if (window.innerWidth >= 480 && window.innerWidth < 559.99) {
        setItemWidth(190);
      }
      if (window.innerWidth >= 560 && window.innerWidth < 768.99) {
        setItemWidth(195);
      }
      if (window.innerWidth >= 768 && window.innerWidth < 849.99) {
        setItemWidth(184);
      }
      if (window.innerWidth >= 850 && window.innerWidth < 1023.99) {
        setItemWidth(205);
      }
      if (window.innerWidth >= 1024 && window.innerWidth < 1280) {
        setItemWidth(225);
      }
      if (window.innerWidth >= 1280) {
        setItemWidth(225);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);


  async function setLinkedCard() {
    
    for (var i = 0; i < props.IDCategory.length; i++) {
      const { data: linkedData, error } = await supabase
        .from("cardCategory")
        .select()
        .eq("categoryId", props.IDCategory[i])
        .neq("cardId", props.IDItem);

      if (error) {
        console.error("Error fetching linked card data:", error);
        return;
      }

      linkedData.forEach((linkedItem) => cardIds.add(linkedItem.cardId));

      cardLinked.push(linkedData);
    }

    for (const id of cardIds) {
      const { data: cardData, error } = await supabase
        .from("Card")
        .select()
        .eq("id", id);

      if (error) {
        console.error("Error fetching card data:", error);
        return;
      }

      cards.push(cardData);
    }

    const cardsTwo = cards.map((card) => (
      <Card card={card[0]} key={card[0].id} />
    ));

    const cardElements = cardsTwo.map((card, index) => (
      <div className="categoryTwo" key={index}>
        {card}
      </div>
    ));

    setList(cardElements);
  }

  setLinkedCard();

  return (
    <>
      <div className="povezaniProizvodi">
        <span>Povezani proizvodi</span>
      </div>
      <div className="swiperDiv">
        <div className="barTwo">
          <button
            type="button"
            className="buttonTwo"
            id="button-prev"
            onClick={handlePrevClikc}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m11 18l-6-6l6-6l1.4 1.4L7.825 12l4.575 4.6L11 18Zm6.6 0l-6-6l6-6L19 7.4L14.425 12L19 16.6L17.6 18Z"
              />
            </svg>
          </button>
          <div className="outer-containerTwo">{list}</div>
          <button
            type="button"
            className="buttonTwo"
            id="button-next"
            onClick={() => {
              handleNextClick();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M6.4 18L5 16.6L9.575 12L5 7.4L6.4 6l6 6l-6 6Zm6.6 0l-1.4-1.4l4.575-4.6L11.6 7.4L13 6l6 6l-6 6Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};
