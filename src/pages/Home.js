import { TitleAndFilter } from "../components/TitleAndFilter";
import { CardDisplay } from "../components/CardsDisplay";
import { useEffect } from "react";
export const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <TitleAndFilter />
      <CardDisplay />
    </div>
  );
};
