import '../style/ProfileInfo.css';
import { Link } from 'react-router-dom';
import { ProfilCard } from './ProfileCard';

export const ProfileInfo = () =>{
    const cards = [];
    for(var i=0; i < 10;i++){
        cards.push(<ProfilCard/>);
    }

    const arrayDataItems = cards.map((cards) => <div>{cards}</div>);
    return(
        <>
        <div class="profilInformationTwo">
            <div class="profileImageTwo">
                <img src={require('../images/portret.png')} alt="portret" class="profileImageImageTwo"/>
            </div>
            <div class="userInformationTwo">
                <span class="informacijeTwo"><strong>user_name</strong></span>
                <span class="informacijeTwo">username@gmail.com</span>
                <span class="informacijeTwo">Broj darivanja: x</span>
                <span class="informacijeTwo">Broj aktivnih objava: X</span>
            </div>
            <div class="profileButtonTwo">
              <button class="editButtonTwo singatureColor">
                   <span>
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    class="editButtonSVGTwo"
                    viewBox="0 0 512 512">
                        <path d="m497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4L.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3l262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3l-31.1-31.1L51.7 376H88v48z"/>
                    </svg>
                </span> 
                    <span>Uredi profil</span>
                </button>
              <Link to="/novaobjava"><button class="newPostButtonTwo singatureColor">
                    <span>
                        <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        class="newPostSVGTwo"
                        viewBox="0 0 24 24">
                        <path d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z"/></svg>
                    
                </span> 
                   <span>Nova objava</span>
                </button>
                </Link>
               <button class="chatButtonTwo singatureColor">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" 
                        class="chatButtonSVGTwo"
                        width="18" 
                        height="18" 
                        viewBox="0 0 24 24">
                            <path  d="M12 3c5.5 0 10 3.58 10 8s-4.5 8-10 8c-1.24 0-2.43-.18-3.53-.5C5.55 21 2 21 2 21c2.33-2.33 2.7-3.9 2.75-4.5C3.05 15.07 2 13.13 2 11c0-4.42 4.5-8 10-8Z"/>
                        </svg>
                    </span>
                <span>Razgovori</span>
            </button>
            </div>
        </div>
        <div class="contentTwo">
        <div class="tabTwo">
            <button class="objavaButttonTwo">OBJAVE</button>
            <button class="spremljenoButtonTwo">SPREMLJENO</button>
        </div>
        <div class="myImagesTwp">
            <div class="card-rowTwo">
                {arrayDataItems}
            </div>
        </div>
    </div>
        </>

    );
};