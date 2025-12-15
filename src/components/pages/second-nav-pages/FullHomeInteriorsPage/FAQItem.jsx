import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

export default function FAQItem({ question, answer }) {
    const theme = useTheme();

    return (
        <Accordion
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
                    {question}
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
                    {answer}
                </Typography>
            </AccordionDetails>
        </Accordion>
    );
}






