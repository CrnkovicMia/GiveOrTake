import { OverSeasExpress } from "../components/OverSeasExpress";
import { OverSeasExpressRecive } from "../components/OverSeasExpressRecive";

import { useState } from "react";

export const Mail = () => {
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
