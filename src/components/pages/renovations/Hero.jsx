import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        position: "relative",
        height: "70vh",
        minHeight: "500px",
        backgroundImage:
          'url("https://ik.imagekit.io/bowr9614/Renovation/Renovation3.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center", // ✅ Center text alignment
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0,0,0,0.4)",
          zIndex: 1,
        },
      }}
    >
      <Container
        sx={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          maxWidth: "800px",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "2.3rem", md: "3.5rem" },
            fontWeight: 700,
            mb: 2,
            color: "white",
          }}
        >
          Home Renovations You'll Love
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "1rem", md: "1.2rem" },
            mb: 4,
            color: "rgba(255,255,255,0.9)",
            lineHeight: 1.6,
            maxWidth: "700px",
          }}
        >
          Celebrate the special moments of life with a space that is forever
          yours. From getting married to cherishing the joy of having a baby,
          mark these moments by giving your home a fresh makeover it deserves.
        </Typography>

        <Button
          variant="contained"
          size="large"
          onClick={() => navigate("/contact")}
          sx={{
            backgroundColor: theme.palette.primary.main,
            color: "white",
            px: 4,
            py: 2,
            fontSize: "1.1rem",
            fontWeight: 600,
            borderRadius: "8px",
            "&:hover": {
              backgroundColor: theme.palette.primary.dark,
              transform: "translateY(-2px)",
            },
          }}
        >
          BOOK FREE CONSULTATION
        </Button>
      </Container>
    </Box>
  );
};

export default Hero;
