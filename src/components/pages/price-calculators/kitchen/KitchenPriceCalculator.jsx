import React from "react";

import KitchenLayoutSelector from "./KitchenLayoutSelector";
import KitchenEstimatorFAQs from "./KitchenEstimatorFAQs";

export default function KitchenPriceCalculator() {
  return (
    <>
      <div style={{ overflowX: "hidden", width: "100%" }}>
        <KitchenLayoutSelector />
        <KitchenEstimatorFAQs />
      </div>
    </>
  );
}
