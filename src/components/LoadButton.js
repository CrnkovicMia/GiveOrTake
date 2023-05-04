import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import "../style/ucitajButton.css";
export const LoadButton = (props) => {
  const loadMoreCards = () => {
    props.cardLoad(15);
  };
  return (
    <div className="ucitajViše">
      <button
        className="ucitajViseButton cursors buttonStyle"
        onClick={loadMoreCards}
      >
        {" "}
        Učitaj više
      </button>
    </div>
  );
};

export function CardNumber() {}
