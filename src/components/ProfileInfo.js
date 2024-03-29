import "../style/ProfileInfo.css";
import { ProfilCard } from "./ProfileCard";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

export const ProfileInfo = (props) => {
  const [active, setActive] = useState(true);
  const [cards, setCards] = useState([]);
  const [profile, setProfile] = useState({
    username: "-",
    email: "-",
    donationNumber: -1,
    profilePic: "-",
    id: 0,
  });

  var cardList = [];

  async function getProfile() {
    const { data } = await supabase.from("profiles").select().limit(1, 0);
    setProfile(data);
    console.log(data);
  }

  async function getCards() {
    const { data } = await supabase
      .from("Card")
      .select()
      .eq("postedBy", props.userSession.id);

    cardList = data;
    const newCards = cardList.map((cardL) => {
      return <ProfilCard key={cardL.id} card={cardL} />;
    });

    return newCards;
  }

  useEffect(() => {
    getProfile().then(() => {
      getCards().then((newCards) => {
        setCards(newCards);
      });
    });
  }, []);

  const handleActive = () => {
    setActive(!active);
  };

  useEffect(() => {
    getProfile();
    getCards();
  }, []);
  return (
    <>
      <div className="profilInformationTwo">
        <div className="profileImageTwo">
          <img
            src={require("../images/userimg.jpg")}
            alt="portret"
            className="profileImageImageTwo"
          />
        </div>
        <div className="userInformationTwo">
          <span className="informacijeTwo">
            <strong>ivandjakovac55</strong>
          </span>
          <span className="informacijeTwo">ivandjakovac55@gmail.com</span>
          <span className="informacijeTwo">Broj darivanja: 5</span>
          <span className="informacijeTwo">
            Broj aktivnih objava: {cards.length}
          </span>
        </div>
        <div className="profileButtonTwo">
          <button className="editButtonTwo singatureColor">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="editButtonSVGTwo"
                viewBox="0 0 512 512"
              >
                <path d="m497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4L.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3l262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3l-31.1-31.1L51.7 376H88v48z" />
              </svg>
            </span>
            <span>Uredi profil</span>
          </button>
          <button className="newPostButtonTwo singatureColor">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="newPostSVGTwo"
                viewBox="0 0 24 24"
              >
                <path d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z" />
              </svg>
            </span>
            <span>Nova objava</span>
          </button>
          <button className="chatButtonTwo singatureColor">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="chatButtonSVGTwo"
                width="18"
                height="18"
                viewBox="0 0 24 24"
              >
                <path d="M12 3c5.5 0 10 3.58 10 8s-4.5 8-10 8c-1.24 0-2.43-.18-3.53-.5C5.55 21 2 21 2 21c2.33-2.33 2.7-3.9 2.75-4.5C3.05 15.07 2 13.13 2 11c0-4.42 4.5-8 10-8Z" />
              </svg>
            </span>
            <span>Razgovori</span>
          </button>
        </div>
      </div>
      <div className="contentTwo">
        <div className="tabTwo">
          <button
            className={active ? "buttonAcitve" : "buttonInactive"}
            onClick={() => {
              handleActive();
            }}
          >
            OBJAVE
          </button>
          <button
            className={active ? "buttonInactive" : "buttonAcitve"}
            onClick={() => {
              handleActive();
            }}
          >
            SPREMLJENO
          </button>
        </div>
        <div className="myImagesTwo">
          {active ? (
            <div className="card-rowTwo">{cards}</div>
          ) : (
            <p className="alert">Vaše objave biti će vidljive ubrzo</p>
          )}
        </div>
      </div>
    </>
  );
};
