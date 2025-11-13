import React from "react";
import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  Button,
  Avatar,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

const WhatWeOffer = () => {
  const theme = useTheme();

  const services = [
    {
      icon: "https://cdn-icons-png.flaticon.com/128/12287/12287146.png", // Our Services
      title: "Our Services",
      items:
        "1) Modular kitchens, 2) Modular wardrobes, 3) Lighting, 4) Flooring, 5) Electrical work, 6) Civil work, 7) False ceiling, 8) Wall design & painting",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/128/4400/4400863.png", // Warranty
      title: "Warranty",
      items:
        "Flat 10-year warranty¹ - Stay worry-free with our warranty policy on modular products. Up to 1-year on-site service warranty¹ - for painting, electrical, plumbing and more.",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/128/4115/4115705.png", // Price Benefits
      title: "Price Benefits",
      items:
        "Flexible payment options via EMI, No hidden costs with transparent pricing, and Value for money through superior quality at best prices.",
    },
  ];

  return (
    <Box sx={{ py: 8, backgroundColor: "white" }}>
      <Container>
        {/* Header Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            mb: 6,
            gap: 2,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: theme.palette.text.primary,
              fontSize: { xs: "2rem", md: "2.5rem" },
              fontWeight: 700,
              fontFamily: theme.typography.fontFamily,
            }}
          >
            What we offer
          </Typography>
        </Box>

        {/* Cards Section */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: 4,
          }}
        >
          {services.map((service, index) => (
            <Card
              key={index}
              sx={{
                height: "100%",
                borderRadius: 3,
                boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
                transition: "all 0.3s ease",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
                },
              }}
            >
              <CardContent sx={{ p: 4 }}>
                {/* Centered Icon */}
                <Avatar
                  src={service.icon}
                  alt={service.title}
                  sx={{
                    width: 80,
                    height: 80,
                    backgroundColor: theme.palette.background.paper,
                    border: `2px solid ${theme.palette.primary.main}`,
                    boxShadow: "0 3px 8px rgba(0,0,0,0.08)",
                    mb: 2.5,
                    mx: "auto",
                    p: 1.5,
                  }}
                />

                {/* Title */}
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 600,
                    color: theme.palette.text.primary,
                    mb: 2,
                    fontFamily: theme.typography.fontFamily,
                    textAlign: "center",
                  }}
                >
                  {service.title}
                </Typography>

                {/* Single Line Items */}
                <Typography
                  variant="body2"
                  sx={{
                    color: theme.palette.text.secondary,
                    fontSize: "0.95rem",
                    lineHeight: 1.6,
                    textAlign: "center",
                    fontFamily: theme.typography.fontFamily,
                  }}
                >
                  {service.items}
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
