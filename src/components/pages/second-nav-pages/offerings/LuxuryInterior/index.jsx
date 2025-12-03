import React from "react";
import { Box } from "@mui/material";
import HeroSection from "./HeroSection";
import LuxuryDescription from "./LuxuryDescription";
import QuadrantSection from "./QuadrantSection";
import CarouselSection from "./CarouselSection";
import UniqueFeatures from "./UniqueFeatures";
import ReferralSection from "./ReferralSection";

export default function LuxuryInterior() {
  return (
    <Box
      sx={{
        overflowX: "hidden",
        width: "100%",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      <HeroSection />
      <LuxuryDescription />
      <QuadrantSection />
      <CarouselSection />
      <UniqueFeatures />
      <ReferralSection />
    </Box>
  );
}










