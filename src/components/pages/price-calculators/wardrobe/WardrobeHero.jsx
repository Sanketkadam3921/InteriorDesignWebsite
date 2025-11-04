import React from "react";
import { Box, Container, Typography, Button, Grid, Avatar, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function WardrobeHero() {
    const theme = useTheme();
    const navigate = useNavigate();

    const steps = [
        {
            icon: "https://cdn-icons-png.flaticon.com/128/2755/2755641.png", // 📏 Ruler - dimension icon
            title: "Select wardrobe length",
            description:
                "Let's start with the basics. The dimension helps us understand the scope of work better.",
        },
        {
            icon: "https://cdn-icons-png.flaticon.com/128/7055/7055664.png", // 🚪 Wardrobe door icon
            title: "Choose the wardrobe type",
            description:
                "What's your type? Tell us if you like a sliding or swing door wardrobe to get the quote right.",
        },
        {
            icon: "https://cdn-icons-png.flaticon.com/128/2782/2782895.png", // 🎨 Brush icon
            title: "Pick your preferred finish",
            description:
                "Finishing matters, especially when it comes to calculating the wardrobe price.",
        },
        {
            icon: "https://cdn-icons-png.flaticon.com/128/2708/2708071.png", // 🪵 Material icon
            title: "Pick a core material",
            description:
                "The material you choose becomes a core factor for us to calculate an accurate price estimate.",
        },
        {
            icon: "https://cdn-icons-png.flaticon.com/128/2337/2337984.png", // ⚙️ Accessories icon
            title: "Select smart accessories",
            description:
                "Have some add-ons on your mind? Tell us now and we'll include them in our final estimate.",
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
            <Container maxWidth="xl">
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
                    5 simple steps to get your quote
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
                    It's that easy! You can now effortlessly plan your dream wardrobe.
                </Typography>

                {/* Steps Grid */}
                <Grid container spacing={4} justifyContent="center" alignItems="stretch">
                    {steps.map((step, index) => (
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={4}
                            lg={2.4}
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

                                {/* Connecting Line (except for last step) */}

                            </Box>

                            {/* Title */}
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: 600,
                                    color: theme.palette.text.primary,
                                    mb: 2,
                                    fontSize: { xs: "1rem", md: "1.2rem" },
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
                                    maxWidth: 250,
                                    fontSize: { xs: "0.9rem", md: "0.95rem" },
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
                    onClick={() => navigate("/price-calculators/wardrobe/calculator/length")}
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
