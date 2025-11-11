import React from "react";
import { Container, Paper, Grid } from "@mui/material";
import { INFO_CARDS } from "./constants";
import InfoCard from "./InfoCard";

export default function MissionVision() {
  return (
    <Container maxWidth="lg">
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
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
  );
}

