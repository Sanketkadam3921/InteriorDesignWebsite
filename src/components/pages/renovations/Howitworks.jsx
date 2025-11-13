import React from "react";
import { Box, Typography, Container, Button, Avatar } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const HowItWorks = () => {
  const theme = useTheme();

  const steps = [
    {
      icon: "https://cdn-icons-png.flaticon.com/128/7164/7164002.png",
      title: "Meet a designer",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/128/2910/2910768.png",
      title: "Book a renovation",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/128/9640/9640682.png",
      title: "Execution begins",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/128/4961/4961619.png",
      title: "Final installations",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/128/9320/9320557.png",
      title: "Move in and enjoy!",
    },
  ];

  return (
    <Box sx={{ py: 8, backgroundColor: theme.palette.background.default }}>
      <Container>
        {/* Heading */}
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            mb: 6,
            color: theme.palette.text.primary,
            fontSize: { xs: "2rem", md: "2.5rem" },
            fontWeight: 700,
            fontFamily: theme.typography.fontFamily,
          }}
        >
          HOW IT WORKS
        </Typography>

        {/* Steps Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "stretch",
            flexWrap: "wrap",
            gap: { xs: 3, md: 5 },
            mb: 6,
          }}
        >
          {steps.map((step, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                flex: { xs: "1 1 40%", md: "1 1 15%" },
                backgroundColor: theme.palette.background.paper,
                borderRadius: 2,
                boxShadow: "0 3px 8px rgba(0,0,0,0.08)",
                p: 2.5,
                position: "relative",
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 5px 14px rgba(0,0,0,0.12)",
                },
              }}
            >
              {/* Step Number Badge */}
              <Box
                sx={{
                  position: "absolute",
                  top: 10,
                  left: 10,
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.primary.contrastText,
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
                }}
              >
                {index + 1}
              </Box>

              {/* Icon */}
              <Avatar
                src={step.icon}
                alt={step.title}
                sx={{
                  width: 65,
                  height: 65,
                  border: `2px solid ${theme.palette.primary.main}`,
                  backgroundColor: "#fff",
                  mb: 1.5,
                  boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
                  p: 1.5,
                }}
              />

              {/* Title */}
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 600,
                  color: theme.palette.text.primary,
                  fontFamily: theme.typography.fontFamily,
                  fontSize: { xs: "0.95rem", md: "1rem" },
                }}
              >
                {step.title}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* CTA Button */}
      </Container>
    </Box>
  );
};

export default HowItWorks;
