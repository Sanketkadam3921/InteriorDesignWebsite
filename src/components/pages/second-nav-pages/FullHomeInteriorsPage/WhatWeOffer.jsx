import React from "react";
import { Container, Box, Typography, useTheme } from "@mui/material";
import { SERVICES } from "./constants";
import ServiceCard from "./ServiceCard";

export default function WhatWeOffer() {
  const theme = useTheme();

  return (
    <Container maxWidth="lg" sx={{ pt: 3, pb: 6, px: { xs: 2, md: 4 } }}>
      <Box
        sx={{
          backgroundColor: theme.palette.background.default,
          borderRadius: 3,
          p: { xs: 3, md: 5 },
          mx: { xs: -2, md: 0 },
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        }}
      >
        <Typography
          variant="h3"
          component="h2"
          sx={{
            fontSize: { xs: "1.8rem", md: "2.2rem" },
            fontWeight: "bold",
            color: theme.palette.text.primary,
            mb: 4,
          }}
        >
          What we offer
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: { xs: 2, sm: 2.5, md: 3 },
            justifyContent: "center",
            alignItems: "stretch",
            flexWrap: { xs: "wrap", sm: "wrap", md: "nowrap" },
            "& > *": {
              flex: { 
                xs: "1 1 100%", 
                sm: "1 1 calc(50% - 10px)", 
                md: "1 1 300px" 
              },
              maxWidth: { 
                xs: "100%", 
                sm: "calc(50% - 10px)", 
                md: "350px" 
              },
              minWidth: { 
                xs: "280px", 
                sm: "280px", 
                md: "280px" 
              },
            },
          }}
        >
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              image={service.image}
              alt={service.alt}
            />
          ))}
        </Box>
      </Box>
    </Container>
  );
}

