import React from "react";
import { Box } from "@mui/material";
import HeroSection from "./HeroSection";
import Introduction from "./Introduction";
import WhatWeOffer from "./WhatWeOffer";
import JourneySnapshot from "./JourneySnapshot";
import TeamSection from "./TeamSection";
import Testimonials from "./Testimonials";

export default function FullHomeInteriorsPage() {
  return (
    <Box sx={{ overflowX: "hidden", width: "100%" }}>
      <HeroSection />
      <Introduction />
      <WhatWeOffer />
      <JourneySnapshot />
      <TeamSection />
    </Box>
  );
}










