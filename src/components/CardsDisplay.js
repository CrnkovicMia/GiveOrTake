import { Card } from "./Card";
import '../style/CardDisplay.css';
import { supabase } from "../lib/supabaseClient";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { LoadButton } from "./LoadButton";

export const CardDisplay = () =>{
    const [cardList, setCards] = useState([]);
    const [searchParams] = useSearchParams();
    const [cardNumber, setCardNumber] = useState(14);

    const searchInput = searchParams.get('search');
    const category = searchParams.get('kategorija');

    function loadMoreCards(newCardNumber){
      setCardNumber(cardNumber+newCardNumber);
      console.log(cardNumber)
    }


    

    useEffect(() => {
        getCards();
        console.log(category);
        
    }, [searchParams,cardNumber]);

    useEffect(() => {
      setCardNumber(15);
      getCards();
      console.log(category);
      
    }, [searchParams]);


      async function getCards() {
         if(searchInput){
           const { data } = await supabase.from("Card").select().range(0,cardNumber).ilike('title', "%" + searchInput + "%" );
           setCards(data);
          }
        if(category){
          const categoryId = await supabase.from('Category').select('id, name').eq('name', category).single();
          console.log("catId: ", categoryId.data.id)
          const { data, error } = await supabase.from('Card').select().eq('categoryId', categoryId.data.id);
          console.log(data)
          setCards(data);
          

        }
        else{
          const { data } = await supabase.from("Card").select().range(0,cardNumber);
          setCards(data);
        }
        
        console.log(cardList);
        
      }

  
      const arrayDataItems = cardList.map((card) => <div key={card.id}><Card card={card}/></div>);
  
      return (
        <div>
          <div class="card-row">
                {arrayDataItems}
          </div>
          <LoadButton cardLoad={loadMoreCards}/>
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
