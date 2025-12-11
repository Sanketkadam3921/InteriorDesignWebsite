import React from "react";
import { Box } from "@mui/material";
import HeroSection from "./HeroSection";
import FounderIntroduction from "./FounderIntroduction";
import MissionVisionSection from "./MissionVisionSection";
import WhyChooseOurStudio from "./WhyChooseOurStudio";
import Statistics from "./Statistics";
import GrowthJourney from "./GrowthJourney";
import FutureOfKalakruti from "./FutureOfKalakruti";
import Founders from "./Founders";

export default function AboutUsPage() {
  return (
    <Box sx={{ minHeight: "100vh", overflowX: "hidden" }}>
      <HeroSection />
      <FounderIntroduction />
      <MissionVisionSection />
      <WhyChooseOurStudio />
      <Statistics />
      <GrowthJourney />
      <FutureOfKalakruti />
      <Founders />
    </Box>
  );
}

