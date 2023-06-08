import "../style/Profil.css";

import { ProfileInfo } from "../components/ProfileInfo";
import { useEffect } from "react";
export const Profil = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div class="profilBody">
      <ProfileInfo userSession={props.userSession} />
    </div>
  );
};
