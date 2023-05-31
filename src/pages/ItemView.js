import { Item } from "../components/Item.js";

export const ItemView = (props) => {
  return (
    <>
      <Item user={props.user}/>
    </>
  );
};
