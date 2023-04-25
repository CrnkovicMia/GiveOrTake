import { Card } from "./Card";
import '../style/CardDisplay.css';

export const CardDisplay = () =>{
    const cards = [];
    for(var i=0; i < 15;i++){
        cards.push(<Card/>);
    }

    const arrayDataItems = cards.map((cards) => <div>{cards}</div>);

    return (
        <div class="card-row">
            {arrayDataItems}
        </div>
    );
};
