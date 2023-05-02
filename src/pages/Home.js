import { TitleAndFilter } from '../components/TitleAndFilter';
import { CardDisplay } from '../components/CardsDisplay';
import {LoadButton} from '../components/LoadButton';



export const Home = () =>{
    return(
        <div>
        <TitleAndFilter/>
        <CardDisplay/>
        </div>
    );
};