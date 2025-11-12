import React from "react";
import { Container, Box, Typography, useTheme } from "@mui/material";
import { TESTIMONIALS_DATA } from "./constants";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  const theme = useTheme();

  return (
    <Container maxWidth="lg" sx={{ py: 4, px: { xs: 2, md: 4 } }}>
      <Box
        sx={{
          backgroundColor: theme.palette.background.default,
          borderRadius: 2,
          p: { xs: 3, md: 4 },
          mb: 3,
          mx: { xs: -2, md: 0 },
        }}
      >
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontSize: { xs: "2rem", md: "2.5rem" },
              fontWeight: "bold",
              color: theme.palette.text.primary,
              mb: 2,
            }}
          >
            {TESTIMONIALS_DATA.title}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: { xs: 3, md: 4 },
            justifyContent: "center",
            alignItems: "stretch",
            flexWrap: { xs: "wrap", md: "nowrap" },
            "& > *": {
              flex: { xs: "1 1 100%", md: "1 1 300px" },
              maxWidth: { xs: "100%", md: "400px" },
              minWidth: { xs: "280px", md: "280px" },
            },
          }}
        >
          {TESTIMONIALS_DATA.testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              quote={testimonial.quote}
              author={testimonial.author}
              location={testimonial.location}
              image={testimonial.image}
            />
          ))}
        </Box>
      </Box>
    </Container>
  );
}


