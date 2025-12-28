import React, { useState } from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme,
  Container,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import { faqData } from "./index";

export default function CategoryFAQ({ category }) {
  const theme = useTheme();
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  // Get FAQs for the specific category
  const categoryFAQs = faqData[category] || [];
  const generalFAQs = faqData.general || [];

  // Combine category-specific and general FAQs
  const allFAQs = [...categoryFAQs, ...generalFAQs];

  if (allFAQs.length === 0) {
    return null;
  }

  return (
    <Container maxWidth="xl" sx={{ py: 6 }}>
      <Box>
        <Typography
          variant="h3"
          component="h2"
          gutterBottom
          sx={{
            mb: 3,
            fontWeight: 700,
            color: theme.palette.text.primary,
            fontSize: { xs: "1.8rem", md: "2.4rem" },
          }}
        >
          Frequently Asked Questions
        </Typography>

        <Box sx={{ maxWidth: 1700, mx: "auto" }}>
          {allFAQs.map((faq) => (
            <Accordion
              key={faq.id}
              expanded={expanded === faq.id}
              onChange={handleChange(faq.id)}
              sx={{
                mb: 2,
                "&:before": { display: "none" },
                borderRadius: 3,
                overflow: "hidden",
                boxShadow: "0 6px 20px rgba(0,0,0,0.05)",
                backgroundColor: theme.palette.background.paper,
                transition: "all 0.3s ease",
                "&:hover": {
                  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMore sx={{ color: theme.palette.primary.main }} />}
                sx={{
                  backgroundColor: theme.palette.background.paper,
                  "&:hover": {
                    backgroundColor: theme.palette.action.hover,
                  },
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    color: theme.palette.text.primary,
                    fontSize: { xs: "1rem", md: "1.1rem" },
                  }}
                >
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  backgroundColor: theme.palette.background.default,
                  borderTop: `1px solid ${theme.palette.divider}`,
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    lineHeight: 1.8,
                    color: theme.palette.text.secondary,
                    fontSize: { xs: "0.95rem", md: "1rem" },
                  }}
                >
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>
    </Container>
  );
}
