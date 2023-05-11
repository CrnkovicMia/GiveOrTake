import '../style/Profil.css';

import { ProfileInfo } from '../components/ProfileInfo';

export const Profil = (props) =>{
    return(
        <div class="profilBody">
            <ProfileInfo userSession={props.userSession}/>
        </div>
    );
};