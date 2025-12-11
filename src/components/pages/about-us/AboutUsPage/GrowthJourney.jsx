import React from "react";
import {
  Box,
  Container,
  Card,
  CardContent,
  Typography,
  Grid,
} from "@mui/material";
import { TIMELINE_ITEMS } from "./constants";
import TimelineItem from "./TimelineItem";

export default function GrowthJourney() {
  return (
    <Box sx={{ mt: 8, mb: 8 }}>
      <Container maxWidth="lg">
        <Card
          sx={{
            borderRadius: 3,
            boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            "&:hover": {
              transform: "translateY(-4px)",
              boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
            },
          }}
        >
          <CardContent sx={{ p: 4 }}>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{
                textAlign: "center",
                color: "primary.main",
                fontWeight: "bold",
                mb: 3,
              }}
            >
              Our Growth Journey
            </Typography>

            <Grid container spacing={4}>
              {TIMELINE_ITEMS.map((item) => (
                <TimelineItem
                  key={item.id}
                  year={item.year}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </Box>
  );
}
