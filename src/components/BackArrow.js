import "../style/BackArrow.css";
export const BackArrow = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="arrowContainer" onClick={handleScrollToTop}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="backArrow"
        viewBox="0 0 24 24"
      >
        <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6l-6 6l1.41 1.41z" />
      </svg>
    </div>
  );
};
