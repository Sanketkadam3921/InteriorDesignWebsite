import React from "react";
import { Box, Container } from "@mui/material";
import HeroSection from "./HeroSection";
import MissionVision from "./MissionVision";
import GrowthJourney from "./GrowthJourney";
import Founders from "./Founders";

export default function AboutUsPage() {
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <HeroSection />

      <Box sx={{ py: 8, backgroundColor: "background.default" }}>
        <MissionVision />
        <GrowthJourney />
        <Founders />
      </Box>
    </Box>
  );
}

