import { useState } from "react";
import "../style/OverSeasExpress.css";
import { useNavigate } from "react-router-dom";

export const OverSeasExpressRecive = ({ visable, setVisable }) => {
  const [sendItem, setSendItem] = useState(false);

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});

  const validateFields = () => {
    const errors = {};
    if (name.trim() === "") {
      errors.name = "Unesite ime i prezime, obavezno polje";
    }

    if (address.trim() === "") {
      errors.address = "Unesite adresu, obavezno polje";
    }

    if (city.trim() === "") {
      errors.city = "Unesite grad, obavezno polje";
    }

    if (email.trim() === "") {
      errors.email = "Unesite email, obavezno polje";
    }

    if (phone.trim() === "") {
      errors.phone = "Unesite broj telefona, obavezno polje";
    }
    return errors;
  };

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  return (
    <div>
      {sendItem && (
        <div class="alert">
          <span className="closebtn" onClick={handleClick}>
            &times;
          </span>
          Vaš zahtijev za preuzimanje pošiljke je zaprimljen.
        </div>
      )}
      <div className="containerSend">
        <div className="imageOverSeas">
          <p>Podatci o primatelju</p>
          <img src={require("../images/logoOver.png")}></img>
        </div>
        <input
          type="text"
          placeholder="Ime i prezime primatelja*"
          className="inputElement"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        {errors.name && <p className="error">{errors.name}</p>}
        <input
          type="text"
          placeholder="Ulica i kučni broj*"
          className="inputElement"
          required
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        ></input>
        {errors.address && <p className="error">{errors.address}</p>}
        <input
          type="text"
          placeholder="Mjesto*"
          className="inputElement"
          required
          value={city}
          onChange={(e) => setCity(e.target.value)}
        ></input>
        {errors.city && <p className="error">{errors.city}</p>}
        <input
          type="email"
          placeholder="Email*"
          className="inputElement"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        {errors.email && <p className="error">{errors.email}</p>}
        <input
          type="tel"
          placeholder="Mobitel*"
          className="inputElement"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        ></input>
        {errors.phone && <p className="error">{errors.phone}</p>}
        <input
          type="tel"
          placeholder="Telefon"
          className="inputElement"
        ></input>
        <div className="buttoniOver">
          <button
            className="daljeButton"
            onClick={() => {
              setVisable(!visable);
            }}
          >
            POVRATAK
          </button>
          <button
            onClick={() => {
              const validationErrors = validateFields();
              if (Object.keys(validationErrors).length === 0) {
                setSendItem(!sendItem);
              } else {
                setErrors(validationErrors);
              }
            }}
            className="daljeButton"
          >
            POŠALJI
          </button>
        </div>
      </div>
    </div>
  );
};
