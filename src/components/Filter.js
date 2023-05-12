import "../style/Filter.css";
import Select from "react-select";
import { useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export const Filter = () => {
  const [cities, setCities] = useState();
  const [colors, setColors] = useState();
  const [sizes, setSizes] = useState();
  const [searchParams, setSearchParams] = useSearchParams();

  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSort, setSelectedSort] = useState(null);

  useEffect(() => {
    getInformation();
  }, []);

  async function getInformation() {
    const { data: cityData } = await supabase.from("City").select("id, name");
    setCities(cityData);

    const { data: colorData } = await supabase.from("Color").select("id, name");
    setColors(colorData);

    const { data: sizeData } = await supabase.from("Size").select("id, name");
    setSizes(sizeData);
  }

  const optionsLocation = cities?.map(function (row) {
    return { value: row.id, label: row.name };
  });

  const optionsColor = colors?.map(function (row) {
    return { value: row.id, label: row.name };
  });

  const optionsSize = sizes?.map(function (row) {
    return { value: row.id, label: row.name };
  });

  const optionsSort = [
    { value: "1", label: "Najnovije" },
    { value: "2", label: "Najstarije" },
    { value: "3", label: "Od A-Z" },
    { value: "4", label: "OD Z-A" },
  ];

  function handleChangeLocation(e) {
    // setSelectedLocation(Array.isArray(e) ? e.map((x) => x.value) : []);

    setSelectedLocation(e.value);
  }
  function handleChangeSize(e) {
    setSelectedSize(e.value);
  }
  function handleChangeColor(e) {
    setSelectedColor(e.value);
  }
  function handleChangeSort(e) {
    setSelectedSort(e.value);
  }
  const [active, setActive] = useState(true);

  async function filterCards() {
    setSearchParams({
      location: selectedLocation,
      color: selectedColor,
      size: selectedSize,
      sort: selectedSort,
    });
  }
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      {active && (
        <div className="filterSort">
          <div className="filterText">
            Filtriranje
            <span
              onClick={() => {
                handleClick();
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="xButton"
                viewBox="0 0 256 256"
              >
                <path d="M208 36H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12Zm4 172a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4V48a4 4 0 0 1 4-4h160a4 4 0 0 1 4 4ZM162.83 98.83L133.66 128l29.17 29.17a4 4 0 0 1-5.66 5.66L128 133.66l-29.17 29.17a4 4 0 0 1-5.66-5.66L122.34 128L93.17 98.83a4 4 0 0 1 5.66-5.66L128 122.34l29.17-29.17a4 4 0 1 1 5.66 5.66Z" />
              </svg>
            </span>
          </div>
          <div className="filterCity">
            <Select
              options={optionsLocation}
              placeholder="Grad"
              styles={{
                control: (baseStyles) => ({
                  ...baseStyles,
                  borderRadius: "0",
                  backgroundColor: "#F0F0F0",
                }),
              }}
              onChange={handleChangeLocation}
            />
          </div>
          <div className="filterCity">
            <Select
              options={optionsColor}
              placeholder="Boja"
              styles={{
                control: (baseStyles) => ({
                  ...baseStyles,
                  borderRadius: "0",
                  backgroundColor: "#F0F0F0",
                }),
              }}
              onChange={handleChangeColor}
            />
          </div>
          <div className="filterCity">
            <Select
              options={optionsSize}
              placeholder="Veličina"
              styles={{
                control: (baseStyles) => ({
                  ...baseStyles,
                  borderRadius: "0",
                  backgroundColor: "#F0F0F0",
                }),
              }}
              onChange={handleChangeSize}
            />
          </div>
          <div className="filterText">Sortiranje</div>
          <div className="filterCity ">
            <Select
              options={optionsSort}
              placeholder="Sortiraj"
              styles={{
                control: (baseStyles) => ({
                  ...baseStyles,
                  borderRadius: "0",
                  backgroundColor: "#F0F0F0",
                }),
              }}
              onChange={handleChangeSort}
            />
          </div>
          <div className="primjeni">
            <button className="primjeniButton" onClick={filterCards}>
              Zapamti filter
            </button>
            <button className="obrišiButton" onClick={filterCards}>
              Obriši filter
            </button>
          </div>
        </div>
      )}
    </>
  );
};
