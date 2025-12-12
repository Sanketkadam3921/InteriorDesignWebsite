import React from "react";
import { Box, Container } from "@mui/material";
import HeroSection from "./HeroSection";
import Introduction from "./Introduction";
import WhatWeOffer from "./WhatWeOffer";
import WhyChoose from "./WhyChoose";
import ClosingCTA from "./ClosingCTA";
import Testimonials from "./Testimonials";
import FAQ from "./FAQ";

export default function ModularInteriors() {
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

      <Container maxWidth="lg" sx={{ py: 6, px: { xs: 2, sm: 3, md: 4 } }}>
        <Introduction />
        <WhatWeOffer />
        <WhyChoose />
        {/* <ClosingCTA /> */}
      </Container>

      {/* <Testimonials /> */}
      <FAQ />
    </Box>
  );
}
