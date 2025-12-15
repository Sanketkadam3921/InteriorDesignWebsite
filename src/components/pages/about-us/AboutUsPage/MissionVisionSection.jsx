import React from "react";
import { Box, Container, Typography, Grid, useTheme } from "@mui/material";
import { MISSION_DATA, VISION_DATA } from "./constants";
import InfoCard from "./InfoCard";

export default function MissionVisionSection() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: { xs: 6, md: 1 },
        backgroundColor: "#f7f7f7",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <InfoCard
              title={MISSION_DATA.title}
              description={MISSION_DATA.description}
              titleColor={theme.palette.primary.main}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6} lg={6}>
            <InfoCard
              title={VISION_DATA.title}
              description={VISION_DATA.description}
              titleColor={theme.palette.primary.main}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}





