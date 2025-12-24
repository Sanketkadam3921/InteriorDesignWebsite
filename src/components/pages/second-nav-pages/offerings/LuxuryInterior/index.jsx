import React from "react";
import { Box, Container } from "@mui/material";
import HeroSection from "./HeroSection";
import Introduction from "./Introduction";
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

      <Container maxWidth="lg" sx={{ py: 6, px: { xs: 2, sm: 3, md: 4 } }}>
        <Introduction />
        {/* <LuxuryDescription /> */}
        <QuadrantSection />
        <CarouselSection />
        <UniqueFeatures />
      </Container>
    </Box>
  );
}
