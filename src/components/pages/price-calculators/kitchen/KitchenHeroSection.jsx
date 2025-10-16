import React from "react";
import { Box, Container, Typography, Button, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function KitchenHeroSection() {
    const theme = useTheme();
    const navigate = useNavigate();

    const image =
        "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1476";

    return (
        <Box
            sx={{
                position: "relative",
                height: "80vh",
                overflow: "hidden",
                backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                textAlign: "center",
            }}
        >
            <Container maxWidth="md">
                <Typography
                    variant="h3"
                    component="h1"
                    gutterBottom
                    sx={{
                        fontWeight: "bold",
                        color: theme.palette.text.light,
                        fontFamily: theme.typography.fontFamily
                    }}
                >
                    Design Your Dream Kitchen
                </Typography>
                <Typography
                    variant="h5"
                    gutterBottom
                    sx={{
                        mb: 4,
                        color: theme.palette.text.light,
                        fontFamily: theme.typography.fontFamily
                    }}
                >
                    Get an instant quote for your modular kitchen with our smart calculator
                </Typography>

                <Button
                    variant="contained"
                    size="large"
                    onClick={() => navigate("/price-calculators/kitchen/calculator/layout")}
                    sx={{
                        px: 4,
                        py: 2,
                        backgroundColor: theme.palette.primary.main,
                        color: theme.palette.primary.contrastText,
                        '&:hover': {
                            backgroundColor: theme.palette.primary.dark,
                            transform: 'translateY(-2px)'
                        }
                    }}
                >
                    Get Started
                </Button>
            </Container>
        </Box>
    );
}
