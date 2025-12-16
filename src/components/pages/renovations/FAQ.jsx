import React from "react";
import {
  Box,
  Typography,
  Container,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useTheme,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

const FAQ = () => {
  const theme = useTheme();

  const renovationFAQs = [
    {
      id: "renovation-faq-2",
      question: "Do I need to move out during the renovation?",
      answer:
        "It depends on the scale of renovation. For minor renovations like a single room or kitchen, you can usually stay in your home. For extensive whole-home renovations, we recommend temporary relocation for safety and convenience. We'll discuss this during the planning phase.",
    },
    {
      id: "renovation-faq-3",
      question: "What is included in the renovation cost?",
      answer:
        "Our renovation costs typically include materials, labor, design consultation, project management, and basic finishes. Custom fixtures, premium materials, and special requirements are quoted separately. We provide a detailed breakdown of all costs before starting the project.",
    },
    {
      id: "renovation-faq-4",
      question: "Can I renovate my home in phases?",
      answer:
        "Yes, absolutely! Many homeowners choose to renovate in phases to manage costs and minimize disruption. We can help you plan a phased approach, starting with high-priority areas like kitchen or bathrooms, and then moving to other spaces as your budget allows.",
    },

    {
      id: "renovation-faq-7",
      question: "How do you ensure quality during renovation?",
      answer:
        "We maintain strict quality control through regular site inspections, use of premium materials, and skilled craftsmen. Our project managers oversee every stage of the renovation, and we conduct quality checks at key milestones before proceeding to the next phase.",
    },
    {
      id: "renovation-faq-8",
      question: "Can I make changes during the renovation process?",
      answer:
        "Minor changes can usually be accommodated, but significant modifications may affect the timeline and budget. We recommend finalizing all design decisions before work begins. Any changes during construction will be discussed and approved before implementation.",
    },
  ];

  return (
    <Box
      sx={{
        py: 3,
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "left", mb: 4 }}>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{
              fontWeight: 600,
              color: theme.palette.text.primary,
              fontSize: { xs: "1.75rem", md: "2.125rem" },
            }}
          >
            Frequently Asked Questions
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ mb: 3, fontSize: { xs: "1rem", md: "1.125rem" } }}
          >
            Common questions about home renovations
          </Typography>
        </Box>

        <Box sx={{ width: "100%" }}>
          {renovationFAQs.map((faq) => (
            <Accordion
              key={faq.id}
              sx={{
                mb: 2,
                "&:before": {
                  display: "none",
                },
                boxShadow: theme.shadows[2],
                "&:hover": {
                  boxShadow: theme.shadows[4],
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMore />}
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
                    fontWeight: 500,
                    fontSize: { xs: "1rem", md: "1.125rem" },
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
                  color="text.secondary"
                  sx={{ lineHeight: 1.7 }}
                >
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default FAQ;





