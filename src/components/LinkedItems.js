/*import "../style/LinkedItems.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";
import { useEffect, useState } from 'react';


import {Card} from './Card';

export const LinkedItems = ()  => {
   const [categoryDisplay, setCategoryDisplay] = useState(5);

   async function getCards() {
     const categoryId = await supabase.from('Category').select('id, name').eq('name', category).single();
     console.log("catId: ", categoryId.data.id)
     const { data, error } = await supabase.from('Card').select().eq('categoryId', categoryId.data.id);
     console.log(data)
     setCards(data);
   
   console.log(cardList);
   
 }


 const arrayDataItems = cardList.map((card) => <div key={card.id}><Card card={card}/></div>);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth <= 479.99) {
                setCategoryDisplay(2);
              } 
            if (window.innerWidth >= 480 && window.innerWidth<559.99) {
                setCategoryDisplay(2);
              } 
          if (window.innerWidth >= 560 && window.innerWidth<768.99) {
                setCategoryDisplay(3);
          } 
          if (window.innerWidth >= 768 && window.innerWidth<1023.99) {
            setCategoryDisplay(3);
          } 
          if (window.innerWidth >= 1024 && window.innerWidth<1280) {
            setCategoryDisplay(4);
          } 
          if (window.innerWidth >1280) {
            setCategoryDisplay(5);
          } 
        }
        handleResize();
        window.addEventListener("resize", handleResize);
      }, []);

      const cards = [];
      for(var i=0; i < 10;i++){
          cards.push(<Card/>);
      }
  
      const arrayDataItems = cards.map((cards) => <div className='cardMargin'><SwiperSlide>{cards}</SwiperSlide></div>);
    return(
        <>
        <div className="povezaniProizvodi">
            <span>Povezani proizvodi</span>
        </div>
        <div className='swiperDiv'>
        <Swiper
          slidesPerView={categoryDisplay}
          spaceBetween={10}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {arrayDataItems}
        </Swiper>
        </div>
        </>
    );
};*/