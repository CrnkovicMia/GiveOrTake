import { useState } from "react";
import "../style/OverSeasExpress.css";

export const OverSeasExpress = ({ visable, setVisable }) => {
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 1);
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const day = String(currentDate.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});

  const validateFields = () => {
    const errors = {};

    // Perform validation checks for each field
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

  return (
    <div className="containerSend">
      <div className="imageOverSeas">
        <p>Podatci o pošiljatelju</p>
        <img src={require("../images/logoOver.png")}></img>
      </div>
      <input
        type="text"
        placeholder="Ime i prezime pošiljatelja*"
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
      <input type="tel" placeholder="Telefon" className="inputElement"></input>
      <div className="dateDiv">
        <label className="labelOver">
          Odaberite datum preuzimanja pošiljke*
        </label>
        <input type="date" className="dateInput" min={formattedDate}></input>
        <button
          className="daljeButton"
          onClick={() => {
            const validationErrors = validateFields();
            if (Object.keys(validationErrors).length === 0) {
              // Redirect to the next page
              setVisable(!visable);
            } else {
              // Set the errors state to display the validation errors
              setErrors(validationErrors);
            }
          }}
        >
          DALJE
        </button>
      </div>
    </div>
  );
};
