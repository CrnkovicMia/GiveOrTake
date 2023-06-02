import "../style/BellClick.css";

export const BellClick = ({
  category,
  bellClick,
  setBellClick,
  setBellPopUp,
}) => {
  return (
    <div className="bellPopUp">
      <p className="bellTitle">Važno!</p>
      <p>
        Ako želite primate obavijesti putem email adrese za kategoriju{" "}
        <strong>{category}</strong> označite DA
      </p>
      <div className="buttonBellDiv">
        <button
          className="buttonBell buttonStyle"
          onClick={() => {
            setBellClick(!bellClick);
            setBellPopUp(false);
          }}
        >
          DA
        </button>
        <button
          className="buttonBell buttonStyle"
          onClick={() => {
            setBellClick(!bellClick);
            setBellPopUp(false);
          }}
        >
          NE
        </button>
      </div>
    </div>
  );
};
