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

export default function HomeInteriorEstimatorFAQs() {
    const theme = useTheme();

    const homeInteriorEstimatorFAQs = [
        {
            id: "home-interior-faq-1",
            question: "How accurate is the home interior price calculator?",
            answer:
                "Our home interior price calculator uses advanced algorithms and real-time market data to provide accurate estimates. While the calculator gives you a reliable ballpark figure, the final quote may vary slightly based on specific site conditions, exact measurements, and custom requirements.",
        },
        {
            id: "home-interior-faq-2",
            question: "What factors does the calculator consider for pricing?",
            answer:
                "The calculator considers multiple factors including BHK type, total area, number of rooms to be designed, selected package tier, materials, finishes, and additional accessories. Each factor is weighted according to current market rates and our experience in the industry.",
        },
        {
            id: "home-interior-faq-3",
            question: "Can I get a detailed breakdown of the estimated cost?",
            answer:
                "Yes! After completing the calculator, you can request a detailed cost breakdown that includes room-wise pricing, material costs, labor charges, and any additional services. Our design experts will provide this detailed estimate during your consultation.",
        },
        {
            id: "home-interior-faq-4",
            question: "How long does it take to complete the home interior project?",
            answer:
                "Project timelines vary based on the scope of work, but typically range from 45–90 days for a complete home interior project. The calculator will also provide an estimated timeline based on your selected package and requirements.",
        },
        {
            id: "home-interior-faq-5",
            question: "What if I want to modify my selections after getting the estimate?",
            answer:
                "No problem! You can easily modify your selections and get updated estimates. Our flexible approach allows you to adjust room selections, upgrade packages, or add/remove accessories. Simply update your preferences in the calculator or discuss changes with our design team.",
        },
        {
            id: "home-interior-faq-6",
            question: "Does the estimate include all necessary services?",
            answer:
                "The estimate includes design, materials, labor, and basic installation services. Additional services like demolition, electrical work, plumbing modifications, or premium finishes may incur extra charges, which will be clearly communicated during the detailed consultation.",
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
                        Find answers to the most common questions about our home interior
                        price calculator, process, and design services.
                    </Typography>
                </Box>

                {/* 🔹 FAQ Accordions */}
                <Box sx={{ width: "100%" }}>
                    {homeInteriorEstimatorFAQs.map((faq) => (
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
                        Our home interior experts are happy to help you with specific queries
                        about your design, pricing, or custom requirements.
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
