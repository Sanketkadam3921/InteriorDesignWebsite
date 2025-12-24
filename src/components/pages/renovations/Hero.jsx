import React from "react";
import { Box, Typography, Button, styled } from "@mui/material";
import { Link } from "react-router-dom";
import themeNeutral from "../../../themeNeutral";

const HeroSectionStyled = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: "70vh",
  minHeight: "500px",
  backgroundImage:
    'url("https://ik.imagekit.io/bowr9614/Renovation/Renovation3.jpg")',
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    zIndex: 1,
  },
}));

const Hero = () => {
  return (
    <HeroSectionStyled>
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          color: "white",
          maxWidth: { xs: "100%", md: "800px" },
          px: { xs: 3, md: 4 },
        }}
      >
        <Typography
          variant="h1"
          component="h1"
          sx={{
            fontSize: { xs: "1.8rem", md: "2.5rem", lg: "3rem" },
            fontWeight: "bold",
            lineHeight: 1.2,
            mb: 2,
            color: "white",
            textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
          }}
        >
          Home Renovations You'll Love
        </Typography>
        <Typography
          variant="h5"
          component="h2"
          sx={{
            fontSize: { xs: "1rem", md: "1.3rem", lg: "1.5rem" },
            fontWeight: 400,
            lineHeight: 1.4,
            mb: 4,
            color: "white",
            textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
          }}
        >
          Celebrate the special moments of life with a space that is forever
          yours. From getting married to cherishing the joy of having a baby,
          mark these moments by giving your home a fresh makeover it deserves.
        </Typography>

        <Button
          component={Link}
          to="/contact"
          variant="contained"
          size="medium"
          sx={{
            backgroundColor: themeNeutral.palette.primary.main,
            color: themeNeutral.palette.primary.contrastText,
            textTransform: "none",
            fontWeight: themeNeutral.typography.button.fontWeight,
            px: { xs: 3, md: 4 },
            py: { xs: 1.5, md: 2 },
            fontSize: { xs: "0.9rem", md: "1rem" },
            borderRadius: "8px",
            boxShadow: "0 4px 16px rgba(80, 91, 95, 0.3)",
            "&:hover": {
              backgroundColor: themeNeutral.palette.primary.dark,
              transform: "translateY(-2px)",
              boxShadow: "0 6px 20px rgba(80, 91, 95, 0.4)",
            },
            transition:
              themeNeutral.components.MuiButton.styleOverrides.root.transition,
          }}
        >
          Book Free Consultation
        </Button>
      </Box>
    </HeroSectionStyled>
  );
};

export default Hero;
