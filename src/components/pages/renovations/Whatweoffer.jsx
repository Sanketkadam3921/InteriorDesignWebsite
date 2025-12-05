import React from "react";
import { Box, Typography, Container, Card, CardContent } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const WhatWeOffer = () => {
  const theme = useTheme();

  const services = [
    "Home Renovations",
    "Kitchen Renovations",
    "Modular Kitchens",
    "Modular Wardrobes",
    "Lighting Solutions",
    "Flooring Work",
    "Electrical Work",
    "Civil Work",
    "False Ceiling",
    "Wall Design & Painting",
  ];

  return (
    <Box sx={{ py: 8, backgroundColor: "#f8f9fa" }}>
      <Container maxWidth="lg">
        {/* Header */}
        <Box
          sx={{
            textAlign: "center",
            mb: 6,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: theme.palette.text.primary,
              fontSize: { xs: "2rem", md: "2.75rem" },
              fontWeight: 700,
              fontFamily: theme.typography.fontFamily,
              mb: 2,
            }}
          >
            What We Offer
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              color: theme.palette.text.secondary,
              fontSize: { xs: "1rem", md: "1.125rem" },
              maxWidth: "600px",
              mx: "auto",
            }}
          >
            Comprehensive interior solutions tailored to transform your space
          </Typography>
        </Box>

        {/* Grid Layout */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(5, 1fr)",
            },
            gap: 3,
          }}
        >
          {services.map((service, index) => (
            <Card
              key={index}
              sx={{
                borderRadius: 2,
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                transition: "all 0.3s ease",
                cursor: "pointer",
                border: "1px solid #e0e0e0",
                "&:hover": {
                  transform: "translateY(-8px)",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                  borderColor: theme.palette.primary.main,
                },
              }}
            >
              <CardContent
                sx={{
                  p: 3,
                  textAlign: "center",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  minHeight: "100px",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontWeight: 600,
                    color: theme.palette.text.primary,
                    fontSize: "0.95rem",
                    lineHeight: 1.4,
                  }}
                >
                  {service}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default WhatWeOffer;
