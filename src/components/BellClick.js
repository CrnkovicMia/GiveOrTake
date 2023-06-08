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
        <strong>{category}</strong> kliknite kvačicu
      </p>
      <div className="buttonBellDiv">
        <button
          className="buttonBellOne"
          onClick={() => {
            setBellClick(!bellClick);
            setBellPopUp(false);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="white"
              fill-rule="evenodd"
              d="M18.03 7.97a.75.75 0 0 1 0 1.06l-7 7a.75.75 0 0 1-1.06 0l-4-4a.75.75 0 1 1 1.06-1.06l3.47 3.47l6.47-6.47a.75.75 0 0 1 1.06 0Z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <button
          className="buttonBellTwo"
          onClick={() => {
            setBellClick(!bellClick);
            setBellPopUp(false);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 15 15"
          >
            <path
              fill="white"
              fill-rule="evenodd"
              d="M6.793 7.5L4.146 4.854l.708-.708L7.5 6.793l2.646-2.647l.708.708L8.207 7.5l2.647 2.646l-.708.707L7.5 8.207l-2.646 2.646l-.708-.707L6.793 7.5Z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
