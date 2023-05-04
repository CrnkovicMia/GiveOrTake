import { useState } from "react";

export const LoginFunction = () => {
  const [state, setState] = useState(false);

  const setModal = () => {
    setState((prev) => !prev);
    console.log(state);
  };

  return [state, setModal];
};
