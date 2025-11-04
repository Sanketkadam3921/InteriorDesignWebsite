import React from "react";
import {
    Box,
    Container,
    Grid,
    Typography,
    Button,
    Avatar,
    useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function EstimateSteps() {
    const theme = useTheme();
    const navigate = useNavigate();

    const steps = [
        {
            icon: "https://cdn-icons-png.flaticon.com/128/489/489870.png", // 
            title: "Choose your BHK type",
            description:
                "The type of house helps us understand the configuration of your home.",
        },
        {
            icon: "https://cdn-icons-png.flaticon.com/128/3638/3638360.png", // 
            title: "Select the size of your house",
            description:
                "This will help us give you a more accurate estimate for your interiors.",
        },
        {
            icon: "https://cdn-icons-png.flaticon.com/128/5436/5436184.png", // 
            title: "Pick the rooms to be designed",
            description:
                "This will help us understand the scope of work for your home interiors.",
        },
        {
            icon: "https://cdn-icons-png.flaticon.com/128/1442/1442912.png", // 
            title: "Pick a package as per your preference",
            description:
                "This helps us fine tune the calculation based on the products and accessories that match your lifestyle.",
        },
    ];

    return (
        <Box
            sx={{
                py: { xs: 6, md: 10 },
                backgroundColor: theme.palette.background.default,
                textAlign: "center",
            }}
        >
            <Container maxWidth="lg">
                {/* Heading */}
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 700,
                        mb: 1,
                        color: theme.palette.text.primary,
                        fontSize: { xs: "1.8rem", md: "2.2rem" },
                        fontFamily: theme.typography.fontFamily
                    }}
                >
                    Get your estimate in 4 simple steps
                </Typography>

                <Typography
                    variant="subtitle1"
                    sx={{
                        color: theme.palette.text.secondary,
                        mb: 6,
                        fontSize: "1.1rem",
                        fontFamily: theme.typography.fontFamily
                    }}
                >
                    It's that simple and convenient!
                </Typography>

                {/* Steps */}
                <Grid container spacing={4} justifyContent="center" alignItems="stretch">
                    {steps.map((step, index) => (
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={3}
                            key={index}
                            sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
                        >
                            {/* Icon */}
                            <Box
                                sx={{
                                    position: "relative",
                                    mb: 2,
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",

                                }}
                            >
                                <Avatar
                                    src={step.icon}
                                    alt={step.title}
                                    sx={{
                                        width: 80,
                                        height: 80,
                                        backgroundColor: theme.palette.background.paper,
                                        border: `1px solid ${theme.palette.neutral.lightGray}`,
                                        boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
                                        p: 2,
                                        zIndex: 1,
                                    }}
                                />
                            </Box>

                            {/* Title */}
                            <Typography
                                variant="subtitle1"
                                sx={{
                                    fontWeight: 600,
                                    color: theme.palette.text.primary,
                                    mb: 1,
                                    fontFamily: theme.typography.fontFamily
                                }}
                            >
                                {step.title}
                            </Typography>

                            {/* Description */}
                            <Typography
                                variant="body2"
                                sx={{
                                    color: theme.palette.text.secondary,
                                    maxWidth: 250,
                                    lineHeight: 1.6,
                                    fontFamily: theme.typography.fontFamily
                                }}
                            >
                                {step.description}
                            </Typography>
                        </Grid>
                    ))}
                </Grid>

                {/* Button */}
                <Button
                    variant="contained"
                    size="large"
                    onClick={() => navigate("/price-calculators/home/calculator/bhk")}
                    sx={{
                        backgroundColor: theme.palette.primary.main,
                        color: theme.palette.primary.contrastText,
                        textTransform: "none",
                        fontWeight: 600,
                        borderRadius: 10,
                        px: 4,
                        py: 1.5,
                        mt: 6,
                        fontFamily: theme.typography.fontFamily,
                        "&:hover": {
                            backgroundColor: theme.palette.primary.dark,
                            transform: "translateY(-2px)",
                        },
                    }}
                >
                    Get Free Estimate
                </Button>
            </Container>
        </Box>
    );
}
