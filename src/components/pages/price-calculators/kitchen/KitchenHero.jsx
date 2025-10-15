import React from "react";
import { Box, Container, Typography, Button, Grid, Avatar, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function KitchenHero() {
    const theme = useTheme();
    const navigate = useNavigate();

    const steps = [
        {
            icon: "https://cdn-icons-png.flaticon.com/128/2851/2851928.png", // Kitchen layout icon
            title: "Select the shape of your kitchen",
            description: "The kitchen layout lets us understand the scope of work and how we could design your kitchen based on your taste.",
        },
        {
            icon: "https://cdn-icons-png.flaticon.com/128/4228/4228950.png", // Measurements icon
            title: "Choose the measurements",
            description: "This helps us estimate the size of your kitchen and give you a more accurate pricing.",
        },
        {
            icon: "https://cdn-icons-png.flaticon.com/128/963/963883.png", // Package icon
            title: "Choose your kitchen package",
            description: "Select from our curated packages - Essentials, Premium, Luxe, or build your own custom package.",
        },
    ];

    return (
        <Box
            sx={{
                py: { xs: 6, md: 10 },
                backgroundColor: theme.palette.background.paper,
                textAlign: "center",
            }}
        >
            <Container maxWidth="lg">
                {/* Main Heading */}
                <Typography
                    variant="h3"
                    sx={{
                        fontWeight: 700,
                        mb: 2,
                        color: theme.palette.text.primary,
                        fontSize: { xs: "2rem", md: "3rem" },
                        fontFamily: theme.typography.fontFamily
                    }}
                >
                    3 simple steps to get your quote
                </Typography>

                {/* Sub-heading */}
                <Typography
                    variant="h6"
                    sx={{
                        color: theme.palette.text.secondary,
                        mb: 6,
                        fontSize: { xs: "1.1rem", md: "1.3rem" },
                        maxWidth: 600,
                        mx: "auto",
                        fontFamily: theme.typography.fontFamily
                    }}
                >
                    It's that easy! You can now effortlessly plan your dream kitchen.
                </Typography>

                {/* Steps Grid */}
                <Grid container spacing={4} justifyContent="center" alignItems="stretch">
                    {steps.map((step, index) => (
                        <Grid
                            item
                            xs={12}
                            md={4}
                            key={index}
                            sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
                        >
                            {/* Step Number and Icon */}
                            <Box
                                sx={{
                                    position: "relative",
                                    mb: 3,
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                }}
                            >
                                {/* Step Number Circle 
                                <Box
                                    sx={{
                                        width: 60,
                                        height: 60,
                                        borderRadius: "50%",
                                        backgroundColor: theme.palette.primary.main,
                                        color: theme.palette.primary.contrastText,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontSize: "1.5rem",
                                        fontWeight: "bold",
                                        mb: 2,
                                        position: "relative",
                                        zIndex: 2,
                                    }}
                                >
                                    {index + 1}
                                </Box>*/}

                                {/* Icon */}
                                <Avatar
                                    src={step.icon}
                                    alt={step.title}
                                    sx={{
                                        width: 80,
                                        height: 80,
                                        backgroundColor: theme.palette.background.default,
                                        border: `3px solid ${theme.palette.primary.main}`,
                                        boxShadow: `0 4px 12px ${theme.palette.primary.main}20`,
                                        p: 2,
                                    }}
                                />

                                {/* Connecting Line (except for last step) 
                                {index < steps.length - 1 && (
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            top: "50%",
                                            right: "-50%",
                                            width: "100%",
                                            height: "3px",
                                            backgroundColor: theme.palette.neutral.lightGray,
                                            transform: "translateY(-50%)",
                                            zIndex: 1,
                                            display: { xs: "none", md: "block" },
                                        }}
                                    />
                                )}*/}
                            </Box>

                            {/* Title */}
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: 600,
                                    color: theme.palette.text.primary,
                                    mb: 2,
                                    fontSize: { xs: "1.1rem", md: "1.3rem" },
                                    fontFamily: theme.typography.fontFamily
                                }}
                            >
                                {step.title}
                            </Typography>

                            {/* Description */}
                            <Typography
                                variant="body1"
                                sx={{
                                    color: theme.palette.text.secondary,
                                    lineHeight: 1.6,
                                    maxWidth: 300,
                                    fontSize: { xs: "0.95rem", md: "1rem" },
                                    fontFamily: theme.typography.fontFamily
                                }}
                            >
                                {step.description}
                            </Typography>
                        </Grid>
                    ))}
                </Grid>

                {/* CTA Button */}
                <Button
                    variant="contained"
                    size="large"
                    onClick={() => navigate("/price-calculators/kitchen/calculator/layout")}
                    sx={{
                        backgroundColor: theme.palette.primary.main,
                        color: theme.palette.primary.contrastText,
                        textTransform: "none",
                        fontWeight: 600,
                        borderRadius: 10,
                        px: 6,
                        py: 2,
                        mt: 6,
                        fontSize: "1.1rem",
                        fontFamily: theme.typography.fontFamily,
                        "&:hover": {
                            backgroundColor: theme.palette.primary.dark,
                            transform: "translateY(-2px)",
                        },
                    }}
                >
                    GET FREE ESTIMATE
                </Button>
            </Container>
        </Box>
    );
}
