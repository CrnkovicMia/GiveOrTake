import "../style/MenuCategory.css";
import { Link } from "react-router-dom";

export const MenuCategory = () => {
  return (
    <div className="menuDrop">
      <div className="categoryMenu">
        <Link to="/?kategorija=Odjeća">Odjeća</Link>
      </div>
      <div className="categoryMenu">
        <Link to="/?kategorija=Obuća">Obuća</Link>
      </div>
      <div className="categoryMenu">
        <Link to="/?kategorija=Igračke">Igračke</Link>
      </div>
      <div className="categoryMenu">
        <Link to="/?kategorija=Za dom">Za dom</Link>
      </div>
      <div className="categoryMenu">
        <Link to="/?kategorija=Tehnologija">Tehnologija</Link>
      </div>
      <div className="categoryMenu">
        <Link to="/?kategorija=Novorođenčad">Novorođenčad</Link>
      </div>
      <div className="categoryMenu">
        <Link to="/?kategorija=Sport i oprema">Sport i oprema</Link>
      </div>
      <div className="categoryMenu">
        <Link to="/?kategorija=Kućni ljubimci">Kućni ljubimci</Link>
      </div>
      <div className="categoryMenu">
        <Link to="/?kategorija=Literatura">Literatura</Link>
      </div>
      <div className="categoryMenu">
        <Link to="/?kategorija=Ostalo">Ostalo</Link>
      </div>
    </div>
  );
};
