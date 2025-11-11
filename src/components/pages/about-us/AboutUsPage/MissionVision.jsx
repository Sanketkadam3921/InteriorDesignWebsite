import React from "react";
import { Container, Paper, Grid, Box } from "@mui/material";
import { INFO_CARDS } from "./constants";
import InfoCard from "./InfoCard";

export default function MissionVision() {
  return (
    <Box
      sx={{
        py: 8,
        backgroundImage:
          "url('https://www.transparenttextures.com/patterns/gray-floral.png')",
        backgroundColor: "#f7f7f7",
        backgroundSize: "300px",
      }}
    >
      <Container maxWidth="lg">
        <Paper
          elevation={4}
          sx={{
            p: { xs: 3, md: 5 },
            borderRadius: 4,
            backdropFilter: "blur(4px)",
            backgroundColor: "rgba(255,255,255,0.85)",
            boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
          }}
        >
          <Grid container spacing={4}>
            {INFO_CARDS.map((card) => (
              <Grid item xs={12} md={6} key={card.id}>
                <InfoCard
                  title={card.title}
                  description={card.description}
                  titleColor={card.titleColor}
                />
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}
