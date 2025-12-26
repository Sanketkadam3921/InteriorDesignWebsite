import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
  Tabs,
  Tab,
  useTheme,
} from "@mui/material";
import { ExpandMore, QuestionAnswer } from "@mui/icons-material";
import { faqData, faqConfig } from "./index";

export default function FAQ() {
  const { category } = useParams();
  const navigate = useNavigate(); // ✅ for React Router navigation
  const theme = useTheme();
  const [selectedTab, setSelectedTab] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  // Get FAQs for the specific category or general FAQs
  const getFAQsForCategory = (cat) => {
    if (cat && faqData[cat]) {
      return faqData[cat];
    }
    return faqData.general;
  };

  // Get all available categories for tabs
  const availableCategories = faqConfig.categories.filter(
    (cat) => faqData[cat.key] && faqData[cat.key].length > 0
  );

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
    setExpanded(false); // Reset expanded state when tab changes
  };

  const currentCategory = availableCategories[selectedTab];
  const currentFAQs = getFAQsForCategory(currentCategory?.key);

  return (
    <Container maxWidth="lg" sx={{ py: 4, mb: 0 }}>
      {/* Header */}
      <Box sx={{ textAlign: "left", mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          {faqConfig.title}
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
          {faqConfig.description}
        </Typography>

        {/* Optional Category Chip */}
        {/* 
                {currentCategory && (
                    <Chip
                        icon={<QuestionAnswer />}
                        label={currentCategory.displayName}
                        color="primary"
                        variant="outlined"
                        sx={{ mb: 3 }}
                    />
                )} 
                */}
      </Box>

      {/* Category Tabs */}
      {availableCategories.length > 1 && (
        <Box sx={{ mb: 4 }}>
          <Tabs
            value={selectedTab}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            sx={{ borderBottom: 1, borderColor: "divider" }}
          >
            {availableCategories.map((cat) => (
              <Tab key={cat.key} label={cat.displayName} />
            ))}
          </Tabs>
        </Box>
      )}

      {/* FAQ Accordions */}
      <Box sx={{ maxWidth: 1200, mx: "auto" }}>
        {currentFAQs.map((faq) => (
          <Accordion
            key={faq.id}
            expanded={expanded === faq.id}
            onChange={handleChange(faq.id)}
            sx={{
              mb: 2,
              "&:before": { display: "none" },
              boxShadow: theme.shadows[2],
              "&:hover": { boxShadow: theme.shadows[4] },
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
              <Typography variant="h6" sx={{ fontWeight: 500 }}>
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

      {/* No FAQs Message */}
      {currentFAQs.length === 0 && (
        <Box sx={{ textAlign: "center", py: 8 }}>
          <Typography variant="h6" color="text.secondary">
            No FAQs available for this category yet.
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            Check back soon for more information!
          </Typography>
        </Box>
      )}

      {/* Contact CTA */}
      <Box sx={{ textAlign: "center", py: 6, mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          Still have questions?
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
          Our design experts are here to help you with any specific questions
          about your project.
        </Typography>
        <Chip
          label="Contact Us"
          color="primary"
          variant="outlined"
          sx={{ cursor: "pointer" }}
          onClick={() => navigate("/contact")} // ✅ Client-side route navigation
        />
      </Box>
    </Container>
  );
}
