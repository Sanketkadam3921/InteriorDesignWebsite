import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import { FOUNDERS } from "./constants";
import FounderCard from "./FounderCard";

export default function Founders() {
  return (
    <Box sx={{ mt: 8 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          sx={{
            textAlign: "center",
            color: "primary.main",
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
        <br />
        <br />
      </Container>
    </Box>
  );
}

