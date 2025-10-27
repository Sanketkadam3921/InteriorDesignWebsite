import React from "react";
import { Box, Container, Typography, Link, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function WardrobeHowItWorks() {
    const theme = useTheme();
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                py: { xs: 6, md: 10 },
                backgroundColor: theme.palette.background.default,
            }}
        >
            <Container maxWidth="lg">
                {/* Unified text block for consistent width */}
                <Box
                    sx={{
                        mx: "auto",
                        textAlign: "left", // aligns text consistently
                    }}
                >
                    {/* Title */}
                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: 700,
                            mb: 2,
                            color: theme.palette.text.primary,
                            fontSize: { xs: "1.8rem", md: "2.2rem" },
                            fontFamily: theme.typography.fontFamily,
                        }}
                    >
                        How Does The Wardrobe Price Calculator Work
                    </Typography>

                    {/* Description */}
                    <Typography
                        variant="body1"
                        sx={{
                            color: theme.palette.text.secondary,
                            mb: 4,
                            lineHeight: 1.8,
                            fontSize: { xs: "1rem", md: "1.1rem" },
                            fontFamily: theme.typography.fontFamily,
                        }}
                    >
                        The Livspace Wardrobe Price Calculator considers factors like dimension, type, material,
                        finish, and accessories to generate the price estimate. By answering a few simple questions,
                        you’ll receive an accurate wardrobe cost estimate in real time.
                    </Typography>

                    {/* Section: Length of Wardrobe */}
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: 600,
                            color: theme.palette.text.primary,
                            mb: 0.5,
                            fontFamily: theme.typography.fontFamily,
                        }}
                    >
                        Length of the wardrobe
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{
                            color: theme.palette.text.secondary,
                            mb: 3,
                            lineHeight: 1.8,
                            fontFamily: theme.typography.fontFamily,
                        }}
                    >
                        The dimensions of a wardrobe play a major role in determining its cost. Our calculator
                        makes precise assumptions based on your input to estimate an accurate price for your wardrobe.
                    </Typography>

                    {/* Section: Type of Wardrobe */}
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: 600,
                            color: theme.palette.text.primary,
                            mb: 0.5,
                            fontFamily: theme.typography.fontFamily,
                        }}
                    >
                        Type of the wardrobe
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{
                            color: theme.palette.text.secondary,
                            mb: 3,
                            lineHeight: 1.8,
                            fontFamily: theme.typography.fontFamily,
                        }}
                    >
                        The make and type of wardrobe — whether sliding or swing door — affects both cost and
                        functionality. Sliding door wardrobes are ideal for smaller rooms, while swing door designs
                        offer more space and storage flexibility.
                    </Typography>

                    {/* Section: Material & Finishes */}
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: 600,
                            color: theme.palette.text.primary,
                            mb: 0.5,
                            fontFamily: theme.typography.fontFamily,
                        }}
                    >
                        Material and finishes
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{
                            color: theme.palette.text.secondary,
                            mb: 3,
                            lineHeight: 1.8,
                            fontFamily: theme.typography.fontFamily,
                        }}
                    >
                        The materials and finishes you choose determine not just the cost but also the longevity
                        and aesthetic of your wardrobe. Our calculator helps you explore popular options and
                        their pricing impact with clarity.
                    </Typography>

                    {/* Section: Accessories */}
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: 600,
                            color: theme.palette.text.primary,
                            mb: 0.5,
                            fontFamily: theme.typography.fontFamily,
                        }}
                    >
                        Accessories
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{
                            color: theme.palette.text.secondary,
                            mb: 5,
                            lineHeight: 1.8,
                            fontFamily: theme.typography.fontFamily,
                        }}
                    >
                        From pull-out drawers to organizers and hangers, accessories enhance the functionality
                        of your wardrobe. Choose the ones that suit your lifestyle, and our calculator will
                        factor them in while estimating your final cost.
                    </Typography>

                    {/* Calculate Now Link */}
                    <Link
                        component="button"
                        underline="none"
                        onClick={() =>
                            navigate("/price-calculators/wardrobe/calculator/length")
                        }
                        sx={{
                            color: theme.palette.primary.main,
                            fontWeight: 600,
                            fontSize: "1rem",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 0.5,
                            transition: "color 0.2s ease",
                            fontFamily: theme.typography.fontFamily,
                            "&:hover": {
                                color: theme.palette.primary.dark,
                                textDecoration: "underline",
                            },
                        }}
                    >
                        Calculate Now →
                    </Link>
                </Box>
            </Container>
        </Box>
    );
}
