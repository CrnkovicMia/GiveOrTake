import "../style/LinkedItems.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

import { Card } from "./Card";

export const LinkedItems = (props) => {
  const [categoryDisplay, setCategoryDisplay] = useState(5);
  const cardLinked = [];
  // const [cardLinked, setCardLiked] = useState([]);
  const cards = [];
  //const [cards, setCards] = useState();
  const [list, setList] = useState([]);

  async function setLinkedCard() {
    const cardLinked = [];
    const cardIds = new Set();

    for (var i = 0; i < props.IDCategory.length; i++) {
      const { data: linkedData, error } = await supabase
        .from("cardCategory")
        .select()
        .eq("categoryId", props.IDCategory[i]);

      if (error) {
        console.error("Error fetching linked card data:", error);
        return;
      }

      linkedData.forEach((linkedItem) => cardIds.add(linkedItem.cardId));

      cardLinked.push(linkedData);
      console.log("cardLinked");
      console.log(cardLinked);
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

    console.log("cardsTwo");
    console.log(cardsTwo);

    const cardElements = cardsTwo.map((card, index) => (
      <div className="cardMargin" key={index}>
        <SwiperSlide>{card}</SwiperSlide>
      </div>
    ));

    setList(cardElements);

    console.log("list");
    console.log(list);
  }

  setLinkedCard();
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 479.99) {
        setCategoryDisplay(2);
      }
      if (window.innerWidth >= 480 && window.innerWidth < 559.99) {
        setCategoryDisplay(2);
      }
      if (window.innerWidth >= 560 && window.innerWidth < 768.99) {
        setCategoryDisplay(3);
      }
      if (window.innerWidth >= 768 && window.innerWidth < 1023.99) {
        setCategoryDisplay(3);
      }
      if (window.innerWidth >= 1024 && window.innerWidth < 1280) {
        setCategoryDisplay(4);
      }
      if (window.innerWidth > 1280) {
        setCategoryDisplay(5);
      }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    //setLinkedCard();
  }, []);

  return (
    <>
      <div className="povezaniProizvodi">
        <span>Povezani proizvodi</span>
      </div>
      <div className="swiperDiv">
        <Swiper
          slidesPerView={categoryDisplay}
          spaceBetween={10}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {list}
        </Swiper>
      </div>
    </>
  );
};
