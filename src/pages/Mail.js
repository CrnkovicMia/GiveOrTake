import { OverSeasExpress } from "../components/OverSeasExpress";
import { OverSeasExpressRecive } from "../components/OverSeasExpressRecive";

import { useState, useEffect } from "react";

export const Mail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [visable, SetVisable] = useState(false);

  return (
    <div>
      {visable ? (
        <OverSeasExpressRecive visable={visable} setVisable={SetVisable} />
      ) : (
        <OverSeasExpress visable={visable} setVisable={SetVisable} />
      )}
    </div>
  );
};
