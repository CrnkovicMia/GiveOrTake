import React from "react";
import { useEffect, useState } from "react";
import "../style/NewPost.css";
import Select from "react-select";
import { supabase } from "../lib/supabaseClient";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { v4 as uuid4 } from "uuid";
import { decode } from "base64-arraybuffer";

export const NewPost = (props) => {
  const [categories, setCategories] = useState();
  const [cities, setCities] = useState();
  const [colors, setColors] = useState();
  const [sizes, setSizes] = useState();
  const [newPost, setNewPost] = useState({
    title: "",
    description: "",
    categoryId: [],
    locationId: 0,
    sizeId: 0,
    colorId: 0,
    picture: null,
  });

  const [file1, setFile1] = useState({
    url: null,
    pic: null,
  });
  const [file2, setFile2] = useState({
    url: null,
    pic: null,
  });
  const [file3, setFile3] = useState({
    url: null,
    pic: null,
  });
  const [file4, setFile4] = useState({
    url: null,
    pic: null,
  });

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  useEffect(() => {
    getInformation();
  }, []);

  const handleClick = (event) => {
    document.getElementById("hiddenFileInput1").click();
  };
  const handleChangePic1 = (event) => {
    if (event.target?.files[0]) {
      setFile1({
        url: URL.createObjectURL(event.target.files[0]),
        pic: event.target.files[0],
      });
    }
  };

  const handleClick2 = (event) => {
    document.getElementById("hiddenFileInput2").click();
  };
  const handleChangePic2 = (event) => {
    if (event.target?.files[0]) {
      setFile2({
        url: URL.createObjectURL(event.target.files[0]),
        pic: event.target.files[0],
      });
    }
  };

  const handleClick3 = (event) => {
    document.getElementById("hiddenFileInput3").click();
  };
  const handleChangePic3 = (event) => {
    if (event.target?.files[0]) {
      setFile3({
        url: URL.createObjectURL(event.target.files[0]),
        pic: event.target.files[0],
      });
    }
  };

  const handleClick4 = (event) => {
    document.getElementById("hiddenFileInput4").click();
  };
  const handleChangePic4 = (event) => {
    if (event.target?.files[0]) {
      setFile4({
        url: URL.createObjectURL(event.target.files[0]),
        pic: event.target.files[0],
      });
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

  const formSchema = z.object({
    title: z.string().min(1, "Naslov je obavezan!"),
    description: z.string().min(1, "Opis je obavezan!"),
    locationId: z.string().optional(),
    mainPic: z
      .any()
      .refine((val) => val.length > 0, "Glavna slika je obavezna"),
  });

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  async function submitData() {
    console.log("it worked", newPost);
    console.log(
      "Category",
      selectedCategory,
      "Location",
      selectedLocation,
      "size",
      selectedSize,
      "color",
      selectedColor
    );
    const { error: cardError, data: cardData } = await supabase
      .from("Card")
      .insert({
        title: newPost.title,
        description: newPost.description,
        picture: "/mainPic",
      })
      .select("id")
      .single();
    if (selectedCategory != null) {
      for (let i = 0; i < selectedCategory.length; i++) {
        const { data, error } = await supabase
          .from("cardCategory")
          .insert({ cardId: cardData.id, categoryId: selectedCategory[i] });
      }
    }
    if (selectedLocation != null) {
      for (let i = 0; i < selectedLocation.length; i++) {
        const { data, error } = await supabase
          .from("cardLocation")
          .insert({ cardId: cardData.id, locationId: selectedLocation[i] });
      }
    }
    if (selectedColor != null) {
      for (let i = 0; i < selectedColor.length; i++) {
        const { data, error } = await supabase
          .from("cardColor")
          .insert({ cardId: cardData.id, colorId: selectedColor[i] });
      }
    }
    if (selectedSize != null) {
      for (let i = 0; i < selectedSize.length; i++) {
        const { data, error } = await supabase
          .from("cardSize")
          .insert({ cardId: cardData.id, sizeId: selectedSize[i] });
      }
    }

    console.log(props.userSession.id);
    console.log(file1.pic);

    const { data, error } = await supabase.storage
      .from("got-img")
      .upload(props.userSession.id + "/mainPic", file1.pic, {
        contentType: "image/png",
      });
  }

  function handleChangeForm(event) {
    setNewPost((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  function handleChangeCategory(e) {
    setSelectedCategory(Array.isArray(e) ? e.map((x) => x.value) : []);
  }
  function handleChangeLocation(e) {
    setSelectedLocation(Array.isArray(e) ? e.map((x) => x.value) : []);
  }
  function handleChangeSize(e) {
    setSelectedSize(Array.isArray(e) ? e.map((x) => x.value) : []);
  }
  function handleChangeColor(e) {
    setSelectedColor(Array.isArray(e) ? e.map((x) => x.value) : []);
  }

  return (
    <>
      {props.userSession ? (
        <div className="newPostMain">
          <div className="newPostTitle">
            <span>Nova objava</span>
          </div>
          <form onSubmit={handleSubmit(submitData)}>
            <div className="newPostElements">
              <div className="elementsLeft">
                <div className="elementOne">
                  <label>Naslov</label>
                  <input
                    type="text"
                    className="newPostNaslov"
                    {...register("title")}
                    name="title"
                    onChangeCapture={handleChangeForm}
                  />
                  {errors.title && (
                    <p className="errorMsg">{errors.title.message}</p>
                  )}

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
                    name="categoryId"
                    onChange={handleChangeCategory}
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
                    name="colorId"
                    onChange={handleChangeColor}
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
                    name="locationId"
                    onChange={handleChangeLocation}
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
                    name="categoryId"
                    onChange={handleChangeSize}
                  />
                </div>
              </div>
              <div className="elementsRight">
                <label>Opis</label>
                <textarea
                  type="text"
                  className="newPostOpis"
                  maxLength={1000}
                  {...register("description")}
                  name="description"
                  onChangeCapture={handleChangeForm}
                />
                {errors.description && (
                  <p className="errorMsg">{errors.description.message}</p>
                )}
              </div>
            </div>
            <div className="newPostImages">
              <div className="newPostLeft">
                <div className="newPostLeftDiv">
                  <div className="mainImage imgOne">
                    {file1.url ? (
                      <img
                        className="mainImageInside"
                        src={file1.url}
                        onClick={handleClick}
                      />
                    ) : (
                      <button
                        className="mainImageInside"
                        type="button"
                        onClick={handleClick}
                      >
                        Dodaj
                        <br />
                        glavnu
                        <br />
                        fotografiju
                      </button>
                    )}

                    <input
                      type="file"
                      id="hiddenFileInput1"
                      style={{ display: "none" }}
                      {...register("mainPic")}
                      onChangeCapture={handleChangePic1}
                    />
                  </div>
                  <div className="mainImage imgOne">
                    <div className="imageInside">
                      {file2.url ? (
                        <img
                          className="imageInside"
                          src={file2.url}
                          onClick={handleClick2}
                        />
                      ) : (
                        <button
                          className="buttonInside"
                          type="button"
                          onClick={handleClick2}
                        >
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
                        id="hiddenFileInput2"
                        style={{ display: "none" }}
                        onChange={handleChangePic2}
                      />
                    </div>
                  </div>
                </div>
                {errors.mainPic && (
                  <p className="errorMsg2">{errors.mainPic.message}</p>
                )}
              </div>
              <div className="newPostRight">
                <div className="mainImage imgTwo">
                  <div className="imageInside">
                    {file3.url ? (
                      <img
                        className="imageInside"
                        src={file3.url}
                        onClick={handleClick3}
                      />
                    ) : (
                      <button
                        className="buttonInside"
                        type="button"
                        onClick={handleClick3}
                      >
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
                      id="hiddenFileInput3"
                      style={{ display: "none" }}
                      onChange={handleChangePic3}
                    />
                  </div>
                </div>
                <div className="mainImage imgTwo">
                  <div className="imageInside">
                    {file4.url ? (
                      <img
                        className="imageInside"
                        src={file4.url}
                        onClick={handleClick4}
                      />
                    ) : (
                      <button
                        className="buttonInside"
                        type="button"
                        onClick={handleClick4}
                      >
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
                      id="hiddenFileInput4"
                      style={{ display: "none" }}
                      onChange={handleChangePic4}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="newPostButton">
              <button
                className="addButton"
                type="submit"
                disabled={isSubmitting}
              >
                Dodaj objavu
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="notLoggedIn">
          Za unos oglasa trebate biti prijavljeni!
        </div>
      )}
    </>
  );
};
