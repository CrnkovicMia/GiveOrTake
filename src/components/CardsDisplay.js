import { Card } from "./Card";
import "../style/CardDisplay.css";
import { supabase } from "../lib/supabaseClient";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { LoadButton } from "./LoadButton";

export const CardDisplay = () => {
  const [cardList, setCards] = useState([]);
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
  }

  useEffect(() => {
    getCards();
  }, [searchParams, cardNumber, window.location]);

  useEffect(() => {
    setCardNumber(14);
    getCards();
  }, [searchParams, window.location]);

  async function getCards() {
    if (searchInput) {
      const { data } = await supabase
        .from("Card")
        .select()
        .range(0, cardNumber)
        .ilike("title", "%" + searchInput + "%");

      setCards(data);
    } else if (category) {
      const categoryId = await supabase
        .from("Category")
        .select("id, name")
        .eq("name", category)
        .single();

      const { data: cardIds } = await supabase
        .from("cardCategory")
        .select()
        .eq("categoryId", categoryId.data.id);

      const cardIdArray = cardIds.map(({ cardId }) => cardId);

      const { data } = await supabase
        .from("Card")
        .select()
        .in("id", cardIdArray);

      setCards(data);
    } else if (filterLocation || filterColor || filterSize || sort) {
      const query = supabase.from("Card").select("*, cardColor!inner(*)");

      if (filterLocation !== "null") {
        query.filter("locationId", "eq", filterLocation);
      }

      if (filterColor !== "null") {
        query.filter("cardColor.colorId", "eq", filterColor);
      }

      if (filterSize !== "null") {
        query.filter("sizeId", "eq", filterSize);
      }

      if (sort !== "null") {
        switch (sort) {
          case "1":
            query.order("created_at", { ascending: false });
            break;
          case "2":
            query.order("created_at", { ascending: true });
            break;
          case "3":
            query.order("title", { ascending: true });
            break;
          case "4":
            query.order("title", { ascending: false });
            break;
          default:
            break;
        }
      }

      query.range(0, cardNumber);
      const { data } = await query;

      setCards(data);
    } else if (!searchInput && !category) {
      const { data } = await supabase
        .from("Card")
        .select()
        .range(0, cardNumber);

      setCards(data);
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
      {cardList.length >= 15 ? (
        <LoadButton cardLoad={loadMoreCards} />
      ) : (
        <div className="hidden-load-button"></div>
      )}
    </div>
  );
};
