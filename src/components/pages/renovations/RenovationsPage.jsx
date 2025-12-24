import React from "react";
import { Container } from "@mui/material";
import Hero from "./Hero";
import Introduction from "./Introduction";
import RenovationSteps from "./Renovationssteps";
import HowItWorks from "./Howitworks";
import WhatWeOffer from "./Whatweoffer";
import TypeOfHome from "./TypeOfHome";
import FAQ from "./FAQ";

const RenovationsPage = () => {
  return (
    <>
      <Hero />
      <Container maxWidth="lg" sx={{ py: 6, px: { xs: 2, sm: 3, md: 4 } }}>
        <Introduction />
      </Container>
      <RenovationSteps />
      <WhatWeOffer />
      <HowItWorks />
      <FAQ />
    </>
  );
};

export default RenovationsPage;
