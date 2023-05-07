import React from "react";
import { useEffect, useState } from "react";
import "../style/NewPost.css";
import Select from "react-select";
import { supabase } from "../lib/supabaseClient";

export const NewPost = () => {
  const [categories, setCategories] = useState();
  const [cities, setCities] = useState();
  const [colors, setColors] = useState();
  const [sizes, setSizes] = useState();

  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);
  const [file3, setFile3] = useState(null);
  const [file4, setFile4] = useState(null);

  useEffect(() => {
    getInformation();
  }, []);

  const hiddenFileInput1 = React.useRef(null);
  const hiddenFileInput2 = React.useRef(null);
  const hiddenFileInput3 = React.useRef(null);
  const hiddenFileInput4 = React.useRef(null);

  const handleClick = (event) => {
    hiddenFileInput1.current.click();
  };
  const handleChangePic1 = (event) => {
    if (event.target?.files[0]) {
      setFile1(URL.createObjectURL(event.target.files[0]));
    }
  };

  const handleClick2 = (event) => {
    hiddenFileInput2.current.click();
  };
  const handleChangePic2 = (event) => {
    if (event.target?.files[0]) {
      setFile2(URL.createObjectURL(event.target.files[0]));
    }
  };

  const handleClick3 = (event) => {
    hiddenFileInput3.current.click();
  };
  const handleChangePic3 = (event) => {
    if (event.target?.files[0]) {
      setFile3(URL.createObjectURL(event.target.files[0]));
    }
  };

  const handleClick4 = (event) => {
    hiddenFileInput4.current.click();
  };
  const handleChangePic4 = (event) => {
    if (event.target?.files[0]) {
      setFile4(URL.createObjectURL(event.target.files[0]));
    }
  };

  async function getInformation() {
    const { data: categoryData } = await supabase
      .from("Category")
      .select("id, name");
    setCategories(categoryData);
    console.log(categoryData);

    const { data: cityData } = await supabase.from("City").select("id, name");
    setCities(cityData);

    const { data: colorData } = await supabase.from("Color").select("id, name");
    setColors(colorData);

    const { data: sizeData } = await supabase.from("Size").select("id, name");
    setSizes(sizeData);
  }

  const optionsCategory = categories?.map(function (row) {
    return { value: row.id, label: row.name };
  });

  const optionsLocation = cities?.map(function (row) {
    return { value: row.id, label: row.name };
  });

  const optionsColor = colors?.map(function (row) {
    return { value: row.id, label: row.name };
  });

  const optionsSize = sizes?.map(function (row) {
    return { value: row.id, label: row.name };
  });

  // const optionsCategory = [
  //     {value: '1', label: 'Odjeća'},
  //     {value: '2', label: 'Obuća'},
  //     {value: '3', label: 'Literatura'},
  //     {value: '4', label: 'Sport'}
  //   ];
  // const optionsColor = [
  //   {value: '1', label: 'Red'},
  //   {value: '2', label: 'White'},
  //   {value: '3', label: 'Blue'}
  // ];
  // const optionsLocaation = [
  //   {value: '1', label: 'Red'},
  //   {value: '2', label: 'White'},
  //   {value: '3', label: 'Blue'}
  // ];
  // const optionsSize = [
  //   {value: '1', label: 'Red'},
  //   {value: '2', label: 'White'},
  //   {value: '3', label: 'Blue'}
  // ];
  return (
    <div className="newPostMain">
      <div className="newPostTitle">
        <span>Nova objava</span>
      </div>
      <div className="newPostElements">
        <div className="elementsLeft">
          <div className="elementOne">
            <label>Naslov</label>
            <input type="text" className="newPostNaslov" />
            <label>Kategorija</label>
            <Select
              options={optionsCategory}
              isMulti
              placeholder="Odaberite kategoriju"
              styles={{
                control: (baseStyles) => ({
                  ...baseStyles,
                  borderRadius: "0",
                  backgroundColor: "#FFFFFF",
                }),
              }}
              className="newPostKategorija"
            />
            <label>Boja</label>
            <Select
              options={optionsColor}
              isMulti
              placeholder="Odaberite boju"
              styles={{
                control: (baseStyles) => ({
                  ...baseStyles,
                  borderRadius: "0",
                  backgroundColor: "#FFFFFF",
                }),
              }}
              className="newPostKategorija"
            />
          </div>
          <div className="elementTwo">
            <label>Lokacija</label>
            <Select
              options={optionsLocation}
              isMulti
              placeholder="Odaberite lokaciju"
              styles={{
                control: (baseStyles) => ({
                  ...baseStyles,
                  borderRadius: "0",
                  backgroundColor: "#FFFFFF",
                }),
              }}
              className="newPostKategorija"
            />
            <label>Veličina</label>
            <Select
              options={optionsSize}
              isMulti
              placeholder="Odaberite veličinu"
              styles={{
                control: (baseStyles) => ({
                  ...baseStyles,
                  borderRadius: "0",
                  backgroundColor: "#FFFFFF",
                }),
              }}
              className="newPostKategorija"
            />
          </div>
        </div>
        <div className="elementsRight">
          <label>Opis</label>
          <textarea type="text" className="newPostOpis" maxLength={1000} />
        </div>
      </div>
      <div className="newPostImages">
        <div className="newPostLeft">
          <div className="mainImage imgOne">
            {file1 ? (
              <img
                className="mainImageInside"
                src={file1}
                onClick={handleClick}
              />
            ) : (
              <button className="mainImageInside" onClick={handleClick}>
                Dodaj
                <br />
                glavnu
                <br />
                fotografiju
              </button>
            )}

            <input
              type="file"
              ref={hiddenFileInput1}
              style={{ display: "none" }}
              onChange={handleChangePic1}
            />
          </div>
          <div className="mainImage imgOne">
            <div className="imageInside">
              {/* <span>
              <svg xmlns="http://www.w3.org/2000/svg"
                className='plusIcon'
                viewBox="0 0 256 256">
                <path d="M128 24a104 104 0 1 0 104 104A104.13 104.13 0 0 0 128 24Zm40 112h-32v32a8 8 0 0 1-16 0v-32H88a8 8 0 0 1 0-16h32V88a8 8 0 0 1 16 0v32h32a8 8 0 0 1 0 16Z" />
              </svg>
            </span>
            <span>Dodaj<br />fotografiju</span> */}

              {file2 ? (
                <img
                  className="imageInside"
                  src={file2}
                  onClick={handleClick2}
                />
              ) : (
                <button className="buttonInside" onClick={handleClick2}>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="plusIcon"
                      viewBox="0 0 256 256"
                    >
                      <path d="M128 24a104 104 0 1 0 104 104A104.13 104.13 0 0 0 128 24Zm40 112h-32v32a8 8 0 0 1-16 0v-32H88a8 8 0 0 1 0-16h32V88a8 8 0 0 1 16 0v32h32a8 8 0 0 1 0 16Z" />
                    </svg>
                  </span>
                  <span>
                    Dodaj
                    <br />
                    fotografiju
                  </span>
                </button>
              )}

              <input
                type="file"
                ref={hiddenFileInput2}
                style={{ display: "none" }}
                onChange={handleChangePic2}
              />
            </div>
          </div>
        </div>
        <div className="newPostRight">
          <div className="mainImage imgTwo">
            <div className="imageInside">
              {file3 ? (
                <img
                  className="imageInside"
                  src={file3}
                  onClick={handleClick3}
                />
              ) : (
                <button className="buttonInside" onClick={handleClick3}>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="plusIcon"
                      viewBox="0 0 256 256"
                    >
                      <path d="M128 24a104 104 0 1 0 104 104A104.13 104.13 0 0 0 128 24Zm40 112h-32v32a8 8 0 0 1-16 0v-32H88a8 8 0 0 1 0-16h32V88a8 8 0 0 1 16 0v32h32a8 8 0 0 1 0 16Z" />
                    </svg>
                  </span>
                  <span>
                    Dodaj
                    <br />
                    fotografiju
                  </span>
                </button>
              )}

              <input
                type="file"
                ref={hiddenFileInput3}
                style={{ display: "none" }}
                onChange={handleChangePic3}
              />
            </div>
          </div>
          <div className="mainImage imgTwo">
            <div className="imageInside">
              {file4 ? (
                <img
                  className="imageInside"
                  src={file4}
                  onClick={handleClick4}
                />
              ) : (
                <button className="buttonInside" onClick={handleClick4}>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="plusIcon"
                      viewBox="0 0 256 256"
                    >
                      <path d="M128 24a104 104 0 1 0 104 104A104.13 104.13 0 0 0 128 24Zm40 112h-32v32a8 8 0 0 1-16 0v-32H88a8 8 0 0 1 0-16h32V88a8 8 0 0 1 16 0v32h32a8 8 0 0 1 0 16Z" />
                    </svg>
                  </span>
                  <span>
                    Dodaj
                    <br />
                    fotografiju
                  </span>
                </button>
              )}

              <input
                type="file"
                ref={hiddenFileInput4}
                style={{ display: "none" }}
                onChange={handleChangePic4}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="newPostButton">
        <button className="addButton">Dodaj objavu</button>
      </div>
    </div>
  );
};
