import React, { useState } from "react";
import { Box, Container, Typography, Chip } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { FAQ_ITEMS } from "./constants";
import FAQItem from "./FAQItem";

export default function FAQ() {
  const theme = useTheme();
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

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
              id={item.id}
              question={item.question}
              answer={item.answer}
              expanded={expanded === item.id}
              onChange={handleChange(item.id)}
            />
          ))}
        </Box>
        {/* 
        <Box
          sx={{
            textAlign: "center",
            mt: 10,
            py: { xs: 6, md: 8 },
            backgroundColor: theme.palette.grey[100],
            borderRadius: 3,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              color: theme.palette.text.primary,
              mb: 1.5,
              fontSize: { xs: "1.4rem", md: "1.8rem" },
            }}
          >
            Still have questions?
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: theme.palette.text.secondary,
              mb: 4,
              maxWidth: 700,
              mx: "auto",
              lineHeight: 1.7,
              fontSize: { xs: "0.95rem", md: "1rem" },
            }}
          >
            Our modular kitchen design experts are here to help you with any
            specific questions about pricing, materials, customizations, or
            design solutions for your dream kitchen.
          </Typography>

          <Chip
            label="Contact Us"
            onClick={() => (window.location.href = "/contact")}
            variant="outlined"
            sx={{
              fontWeight: 600,
              borderRadius: 3,
              color: theme.palette.primary.main,
              borderColor: theme.palette.primary.main,
              px: 2.8,
              py: 1,
              fontSize: "1rem",
              cursor: "pointer",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.primary.contrastText,
                transform: "translateY(-2px)",
                boxShadow: `0 4px 12px ${theme.palette.primary.main}40`,
              },
            }}
          />
        </Box> */}
      </Container>
    </Box>
  );
}
