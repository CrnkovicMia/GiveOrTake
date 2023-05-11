import { Card } from "./Card";
import "../style/CardDisplay.css";
import { supabase } from "../lib/supabaseClient";
import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { LoadButton } from "./LoadButton";
import { forEach, reverse } from "lodash";

export const CardDisplay = () => {
  const [cardList, setCards] = useState([]);
  // const memoisedCardList = useMemo()
  const [searchParams] = useSearchParams();
  const [cardNumber, setCardNumber] = useState(14);

  const searchInput = searchParams.get("search");
  const category = searchParams.get("kategorija");
  const filterLocation = searchParams.get("location");
  const filterColor = searchParams.get("color");
  const filterSize = searchParams.get("size");
  const sort = searchParams.get("sort");


  function loadMoreCards(newCardNumber) {
    setCardNumber(cardNumber + newCardNumber);
    console.log(cardNumber);
  }

  useEffect(() => {
    getCards();
    console.log(category);
  }, [searchParams, cardNumber]);

  useEffect(() => {
    setCardNumber(15);
    getCards();
    console.log(category);
  }, [searchParams]);

  async function getCards() {
    if (searchInput) {
      const { data } = await supabase
        .from("Card")
        .select()
        .range(0, cardNumber)
        .ilike("title", "%" + searchInput + "%");
      setCards(data);
    }
    if (category) {
      const categoryId = await supabase
        .from("Category")
        .select("id, name")
        .eq("name", category)
        .single();
      console.log("catId: ", categoryId.data.id);
      const { data, error } = await supabase
        .from("Card")
        .select()
        .eq("categoryId", categoryId.data.id);
      console.log(data);
      setCards(data);
    }if(filterLocation || filterColor || filterSize){
      const query = supabase.from("Card").select("*, cardColor!inner(*)")
      const filteredCards = []
      if(filterLocation != "null"){
        query.filter("locationId", "eq", filterLocation)
        }
      if(filterColor != "null") {
        query.filter("cardColor.colorId", "eq", filterColor)
        };
      if(filterSize != "null"){
        query.filter("sizeId", "eq", filterSize)
      }
      if(sort != "null"){
        switch(sort){
          case "1":
            query.order("created_at", {ascending: false})
            break;
          case "2":
            query.order("created_at", {ascending: true })
            break;
          case "3":
            query.order("title", {ascending: true })
            break;
          case "4":
            query.order("title", {ascending: false })
            break;
        }
      }
      query.range(0, cardNumber)
      const { data } = await query;
      console.log(data)
      setCards(data)
      
    } else if (!searchInput && !category) {
      const { data } = await supabase
        .from("Card")
        .select()
        .range(0, cardNumber);
      setCards(data);
    }

    console.log(cardList);
    if(sort){
      switch(sort){
        case 1:
          cardList.sort((a, b) => new Date(a.created_at).valueOf() < new Date(b.created_at).valueOf())
          break;
        case 2:
          cardList.sort((a, b) => new Date(a.created_at) > new Date(b.created_at))
          break;
      }
    }
  }

  const arrayDataItems = cardList.map((card) => (
    <div key={card.id}>
      <Card card={card} />
    </div>
  ));

  return (
    <div>
      <div className="card-row">{arrayDataItems}</div>
      <LoadButton cardLoad={loadMoreCards} />
    </div>
  );

  // const cards = [];
  // for(var i=0; i < 15;i++){
  //     cards.push(<Card/>);
  // }

  // const arrayDataItems = cards.map((cards) => <div>{cards}</div>);

  // return (
  //     <div class="card-row">
  //         {arrayDataItems}
  //     </div>
  // );
};
