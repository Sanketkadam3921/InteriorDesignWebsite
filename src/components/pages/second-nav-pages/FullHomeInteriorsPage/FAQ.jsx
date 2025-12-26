import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { FAQ_ITEMS } from "./constants";
import FAQItem from "./FAQItem";

export default function FAQ() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.paper,
        py: { xs: 6, md: 5 },
        mt: 0,
        mb: 0,
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "left", mb: 6 }}>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: 700,
              color: theme.palette.text.primary,
              fontSize: { xs: "1.8rem", md: "2.4rem" },
              mb: 2,
            }}
          >
            Frequently Asked Questions
          </Typography>
        </Box>

        <Box sx={{ width: "100%" }}>
          {FAQ_ITEMS.map((item) => (
            <FAQItem
              key={item.id}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
}














