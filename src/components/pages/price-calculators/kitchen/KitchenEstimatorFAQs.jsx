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

export default function KitchenEstimatorFAQs() {
    const theme = useTheme();

    // Kitchen Estimator FAQ data
    const kitchenEstimatorFAQs = [
        {
            id: 'kitchen-faq-1',
            question: 'How accurate is the modular kitchen price calculator?',
            answer:
                'Our modular kitchen price calculator provides highly accurate estimates based on current market rates, material costs, and labor charges. The calculator considers kitchen layout, dimensions, materials, and accessories to give you a reliable cost estimate that closely matches the final project cost.',
        },
        {
            id: 'kitchen-faq-2',
            question: 'What kitchen layouts are supported by the calculator?',
            answer:
                'The calculator supports all major kitchen layouts including L-shaped, U-shaped, Straight (galley), and Island kitchens. Each layout is optimized for different space configurations and usage patterns, ensuring you get the most suitable design for your home.',
        },
        {
            id: 'kitchen-faq-3',
            question: 'Can I customize my kitchen design after getting the estimate?',
            answer:
                'Absolutely! The calculator provides a starting point, but you can customize every aspect of your kitchen design. Our design experts will work with you to modify layouts, change materials, adjust dimensions, and add personalized features to create your dream kitchen.',
        },
        {
            id: 'kitchen-faq-4',
            question: 'What materials and finishes are included in the estimate?',
            answer:
                'The estimate includes a range of materials from basic to premium options. You can choose from various finishes like laminate, acrylic, membrane, and wood veneer. The calculator will show you different material options and their impact on the overall cost.',
        },
        {
            id: 'kitchen-faq-5',
            question: 'How long does it take to install a modular kitchen?',
            answer:
                'Installation time varies based on kitchen size and complexity. Typically, a standard modular kitchen takes 7-15 days for installation, including cabinet assembly, countertop installation, and final fittings. The calculator will provide an estimated timeline based on your selected specifications.',
        },
        {
            id: 'kitchen-faq-6',
            question: 'Does the estimate include appliances and accessories?',
            answer:
                'The basic estimate includes essential kitchen accessories like handles, hinges, and basic storage solutions. Premium appliances, specialized accessories, and smart storage solutions can be added to your package for an additional cost, which will be clearly outlined in your detailed quote.',
        },
        {
            id: 'kitchen-faq-7',
            question: 'What if my kitchen space has unique requirements?',
            answer:
                'Our calculator handles standard kitchen configurations, but for unique spaces with special requirements, our design team will provide a custom solution. This includes irregular shapes, low ceilings, or specific accessibility needs. Contact us for a personalized consultation.',
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
                {kitchenEstimatorFAQs.map((faq) => (
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
                    Our kitchen design experts are here to help you with any specific
                    questions about your modular kitchen project.
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
                            color: theme.palette.primary.contrastText
                        }
                    }}
                    variant="outlined"
                    onClick={() => (window.location.href = '/contact')}
                />
            </Box>
        </Box>
    );
}
