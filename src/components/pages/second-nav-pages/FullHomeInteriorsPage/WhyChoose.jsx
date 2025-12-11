import React from "react";
import { Box, Typography, Grid, Container } from "@mui/material";
import themeNeutral from "../../../../themeNeutral";
import { WHY_CHOOSE_ITEMS } from "./constants";
import WhyChooseItem from "./WhyChooseItem";

export default function WhyChoose() {
  return (
    <Box
      sx={{
        mt: 4,
        mb: 8,
        backgroundColor: "#f8f9fa",
        borderRadius: 3,
        p: { xs: 4, md: 6 },
      }}
    >
      <Container maxWidth="xl">
        <Typography
          variant="h2"
          component="h2"
          sx={{
            fontSize: { xs: "1.8rem", md: "2.2rem" },
            fontWeight: themeNeutral.typography.h2.fontWeight,
            color: themeNeutral.palette.text.primary,
            mb: 5,
            textAlign: "center",
          }}
        >
          Why Choose Us for Full Home Interiors?
        </Typography>

        <Grid container spacing={3} justifyContent="center">
          {WHY_CHOOSE_ITEMS.map((item) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={item.id}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <WhyChooseItem
                title={item.title}
                icon={item.icon}
                iconUrl={item.iconUrl}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
