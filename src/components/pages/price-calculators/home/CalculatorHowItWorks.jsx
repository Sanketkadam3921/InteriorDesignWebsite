import React from "react";
import { Box, Container, Typography, Link, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function CalculatorHowItWorks() {
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
                        textAlign: "left", // ensures everything aligns uniformly
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
                        How Does The Full Home Interior Calculator Work
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
                        Our full home interior price estimator calculates the cost considering the number of
                        bedrooms, size of the house and number of rooms to be designed to get an accurate cost.
                        By answering these questions, we'll be able to understand the scope of work.
                    </Typography>

                    {/* Section: BHK Type */}
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: 600,
                            color: theme.palette.text.primary,
                            mb: 0.5,
                            fontFamily: theme.typography.fontFamily,
                        }}
                    >
                        BHK type
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
                        Our price estimator will make a few assumptions based on the configuration of your
                        home. This will help us get significant information and work on the requirements
                        accordingly.
                    </Typography>

                    {/* Section: Size of the house */}
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: 600,
                            color: theme.palette.text.primary,
                            mb: 0.5,
                            fontFamily: theme.typography.fontFamily,
                        }}
                    >
                        Size of the house
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
                        Based on the size of your home and BHK type, our calculator will calculate the cost per
                        sq ft. for the interior services you desire.
                    </Typography>

                    {/* Section: Rooms to be designed */}
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: 600,
                            color: theme.palette.text.primary,
                            mb: 0.5,
                            fontFamily: theme.typography.fontFamily,
                        }}
                    >
                        Rooms to be designed
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
                        There's always a scope of getting a budget as per your requirement. For that, we'll need
                        to number the rooms you would like us to design and our calculator will do the magic for
                        you.
                    </Typography>

                    {/* Calculate Now Link */}
                    <Link
                        component="button"
                        underline="none"
                        onClick={() =>
                            navigate("/price-calculators/home/calculator/bhk")
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
