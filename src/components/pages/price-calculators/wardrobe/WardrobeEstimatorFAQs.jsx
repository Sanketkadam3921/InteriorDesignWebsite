import React from "react";
import {
    Box,
    Container,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Chip,
    useTheme,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

export default function WardrobeEstimatorFAQs() {
    const theme = useTheme();

    const wardrobeEstimatorFAQs = [
        {
            id: "wardrobe-faq-1",
            question:
                "Will the wardrobe price calculator show different costs based on location?",
            answer:
                "Locations may differ, but the modular wardrobe price remains the same! All Livspace products maintain uniform pricing across India, ensuring fair and transparent costs for everyone.",
        },
        {
            id: "wardrobe-faq-2",
            question:
                "How does the wardrobe calculator make assumptions on materials and accessories?",
            answer:
                "Our modular wardrobe price calculator uses a smart algorithm that auto-calculates the cost by mapping essential units needed for a functional wardrobe. Based on our expertise in the Indian market, it accounts for necessary materials, finishes, and accessories to provide an accurate base estimate.",
        },
        {
            id: "wardrobe-faq-3",
            question:
                "How accurate is this estimate? Will my designer provide a similar quote?",
            answer:
                "Yes, our wardrobe price calculator generates a real-time estimate using precise algorithms, ensuring your quote closely aligns with what you’ll receive from our design team. The final price may vary slightly depending on site measurements and final customization, but the calculator offers a highly reliable cost benchmark.",
        },
        {
            id: "wardrobe-faq-4",
            question:
                "What if I want to change the style of my wardrobe? How is demolition cost factored in?",
            answer:
                "You can modify your wardrobe style anytime. If you wish to renovate or redesign, we offer optional demolition services at an additional cost based on your selected materials, finishes, and wardrobe type. Your designer will share a clear breakdown of these charges before starting.",
        },
        {
            id: "wardrobe-faq-5",
            question: "Can I customize my wardrobe design and get an updated cost?",
            answer:
                "Absolutely! Our team specializes in creating custom wardrobe designs tailored to your lifestyle. You can personalize the core materials, finishes, and accessories, and our experts will update your estimate accordingly to match your chosen specifications.",
        },
    ];

    return (
        <Box
            sx={{
                backgroundColor: theme.palette.background.paper,
                py: { xs: 6, md: 10 },
            }}
        >
            <Container maxWidth="lg">
                {/* 🔹 Title Section */}
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

                    <Typography
                        variant="subtitle1"
                        sx={{
                            color: theme.palette.text.secondary,
                            fontSize: { xs: "1rem", md: "1.1rem" },
                            maxWidth: 800,
                            lineHeight: 1.7,
                        }}
                    >
                        Find answers to common questions about our modular wardrobe cost
                        estimator, customization options, and design process.
                    </Typography>
                </Box>

                {/* 🔹 FAQ Accordions */}
                <Box sx={{ width: "100%" }}>
                    {wardrobeEstimatorFAQs.map((faq) => (
                        <Accordion
                            key={faq.id}
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

                {/* 🔹 Contact CTA */}
                <Box
                    sx={{
                        textAlign: "center",
                        mt: 10,
                        py: { xs: 6, md: 8 },
                        backgroundColor: theme.palette.grey[100], // light grey background
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
                        Our wardrobe design experts are here to help you with any specific
                        questions about pricing, materials, or customizations for your
                        modular wardrobe.
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
                </Box>
            </Container>
        </Box>
    );
}
