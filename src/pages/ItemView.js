import { Item } from "../components/Item.js";
import { useEffect } from "react";
export const ItemView = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Item user={props.user} />
    </>
  );
};
