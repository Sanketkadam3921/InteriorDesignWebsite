import React from "react";
import WardrobeHeroSection from "./WardrobeHeroSection";
import WardrobeHero from "./WardrobeHero";
import WardrobeCarousel from "./WardrobeCarousel";
import WardrobeHowItWorks from "./WardrobeHowItWorks";
import WardrobeEstimatorFAQs from "./WardrobeEstimatorFAQs";

export default function WardrobePriceCalculator() {
    return (
        <>
            <WardrobeHeroSection />
            <WardrobeHero />
            <WardrobeCarousel />
            <WardrobeHowItWorks />
            <WardrobeEstimatorFAQs />
        </>
    );
}
