import React from 'react';
import {
    Box,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Chip,
    useTheme,
} from '@mui/material';
import { ExpandMore, QuestionAnswer } from '@mui/icons-material';

export default function HomeInteriorEstimatorFAQs() {
    const theme = useTheme();

    // Home Interior Estimator FAQ data
    const homeInteriorEstimatorFAQs = [
        {
            id: 'home-interior-faq-1',
            question: 'How accurate is the home interior price calculator?',
            answer:
                'Our home interior price calculator uses advanced algorithms and real-time market data to provide accurate estimates. While the calculator gives you a reliable ballpark figure, the final quote may vary slightly based on specific site conditions, exact measurements, and custom requirements.',
        },
        {
            id: 'home-interior-faq-2',
            question: 'What factors does the calculator consider for pricing?',
            answer:
                'The calculator considers multiple factors including BHK type, total area, number of rooms to be designed, selected package tier, materials, finishes, and additional accessories. Each factor is weighted according to current market rates and our experience in the industry.',
        },
        {
            id: 'home-interior-faq-3',
            question: 'Can I get a detailed breakdown of the estimated cost?',
            answer:
                'Yes! After completing the calculator, you can request a detailed cost breakdown that includes room-wise pricing, material costs, labor charges, and any additional services. Our design experts will provide this detailed estimate during your consultation.',
        },
        {
            id: 'home-interior-faq-4',
            question: 'How long does it take to complete the home interior project?',
            answer:
                'Project timelines vary based on the scope of work, but typically range from 45-90 days for a complete home interior project. The calculator will also provide an estimated timeline based on your selected package and requirements.',
        },
        {
            id: 'home-interior-faq-5',
            question: 'What if I want to modify my selections after getting the estimate?',
            answer:
                'No problem! You can easily modify your selections and get updated estimates. Our flexible approach allows you to adjust room selections, upgrade packages, or add/remove accessories. Simply update your preferences in the calculator or discuss changes with our design team.',
        },
        {
            id: 'home-interior-faq-6',
            question: 'Does the estimate include all necessary services?',
            answer:
                'The estimate includes design, materials, labor, and basic installation services. Additional services like demolition, electrical work, plumbing modifications, or premium finishes may incur extra charges, which will be clearly communicated during the detailed consultation.',
        },
    ];

    return (
        <Box sx={{
            mt: 8,
            px: { xs: 2, md: 20 },
            backgroundColor: theme.palette.background.paper
        }}>
            {/* Title Section */}
            <Box sx={{ textAlign: 'left', mb: 4 }}>
                <Typography
                    variant="h3"
                    component="h2"
                    gutterBottom
                    sx={{
                        fontWeight: 700,
                        color: theme.palette.text.primary,
                        fontFamily: theme.typography.fontFamily
                    }}
                >
                    FAQs
                </Typography>


            </Box>

            {/* FAQ Accordions */}
            <Box sx={{ width: '100%' }}>
                {homeInteriorEstimatorFAQs.map((faq) => (
                    <Accordion
                        key={faq.id}
                        sx={{
                            mb: 2,
                            '&:before': { display: 'none' },
                            boxShadow: "0 6px 20px rgba(0,0,0,0.05)",
                            borderRadius: 14,
                            backgroundColor: theme.palette.background.paper,
                            '&:hover': {
                                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                            },
                        }}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMore sx={{ color: theme.palette.primary.main }} />}
                            sx={{
                                backgroundColor: theme.palette.background.paper,
                                '&:hover': {
                                    backgroundColor: theme.palette.action.hover,
                                },
                            }}
                        >
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: 600,
                                    color: theme.palette.text.primary,
                                    fontFamily: theme.typography.fontFamily
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
                                    lineHeight: 1.7,
                                    color: theme.palette.text.secondary,
                                    fontFamily: theme.typography.fontFamily
                                }}
                            >
                                {faq.answer}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Box>

            {/* Contact CTA */}
            <Box sx={{ textAlign: 'center', py: 6, mt: 4 }}>
                <Typography
                    variant="h5"
                    gutterBottom
                    sx={{
                        color: theme.palette.text.primary,
                        fontFamily: theme.typography.fontFamily
                    }}
                >
                    Still have questions?
                </Typography>
                <Typography
                    variant="body1"
                    sx={{
                        mb: 3,
                        maxWidth: 600,
                        mx: 'auto',
                        color: theme.palette.text.secondary,
                        fontFamily: theme.typography.fontFamily
                    }}
                >
                    Our home interior design experts are here to help you with any specific
                    questions about your home interior project.
                </Typography>
                <Chip
                    label="Contact Us"
                    sx={{
                        cursor: 'pointer',
                        fontWeight: 600,
                        color: theme.palette.primary.main,
                        borderColor: theme.palette.primary.main,
                        '&:hover': {
                            backgroundColor: theme.palette.primary.main,
                            color: theme.palette.primary.main
                        }
                    }}
                    variant="outlined"
                    onClick={() => (window.location.href = '/contact')}
                />
            </Box>
        </Box>
    );
}
