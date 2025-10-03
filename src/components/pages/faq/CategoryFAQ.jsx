import React, { useState } from 'react';
import {
    Box,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    useTheme
} from '@mui/material';
import { ExpandMore, QuestionAnswer } from '@mui/icons-material';
import { faqData } from './index';

export default function CategoryFAQ({ category }) {
    const theme = useTheme();

    // Get FAQs for the specific category
    const categoryFAQs = faqData[category] || [];
    const generalFAQs = faqData.general || [];

    // Combine category-specific and general FAQs
    const allFAQs = [...categoryFAQs, ...generalFAQs];

    if (allFAQs.length === 0) {
        return null;
    }

    return (
        <Box sx={{ mt: 6 }}>
            <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 3 }}>
                Frequently Asked Questions
            </Typography>

            <Box sx={{ maxWidth: 800 }}>
                {allFAQs.map((faq) => (
                    <Accordion
                        key={faq.id}
                        sx={{
                            mb: 2,
                            '&:before': {
                                display: 'none',
                            },
                            boxShadow: theme.shadows[1],
                            '&:hover': {
                                boxShadow: theme.shadows[3],
                            },
                        }}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMore />}
                            sx={{
                                backgroundColor: theme.palette.background.paper,
                                '&:hover': {
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
                            <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                                {faq.answer}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Box>
        </Box>
    );
}
