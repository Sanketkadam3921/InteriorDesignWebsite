import React from "react";
import KitchenHeroSection from "./KitchenHeroSection";
import KitchenHero from "./KitchenHero";
import KitchenLayoutSelector from "./KitchenLayoutSelector";
import KitchenHowItWorks from "./KitchenHowItWorks";
import KitchenEstimatorFAQs from "./KitchenEstimatorFAQs";

export default function KitchenPriceCalculator() {
    return (
        <><div style={{ overflowX: "hidden", width: "100%" }}>
            <KitchenHeroSection />
            <KitchenHero />
            <KitchenLayoutSelector />
            <KitchenHowItWorks />
            <KitchenEstimatorFAQs />
        </div>

        </>
    );
}
