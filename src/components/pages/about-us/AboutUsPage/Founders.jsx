import React from "react";
import { Box, Container, Typography, Grid, useTheme } from "@mui/material";
import { FOUNDERS } from "./constants";
import FounderCard from "./FounderCard";
import { keyframes } from "@emotion/react";

const gradientMove = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

export default function Founders() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        mt: 8,
        py: 10,
        background: `linear-gradient(
          120deg,
          ${theme.palette.primary.light},
          ${theme.palette.secondary.light},
          ${theme.palette.primary.dark}
        )`,
        backgroundSize: "300% 300%",
        animation: `${gradientMove} 14s ease infinite`,
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{
            textAlign: "center",
            color: theme.palette.common.white,
            fontWeight: "bold",
            mb: 6,
          }}
        >
          Meet Our Founders
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {FOUNDERS.map((founder) => (
            <Grid item xs={12} md={6} key={founder.id}>
              <FounderCard
                name={founder.name}
                role={founder.role}
                description={founder.description}
                image={founder.image}
                borderColor={founder.borderColor}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
