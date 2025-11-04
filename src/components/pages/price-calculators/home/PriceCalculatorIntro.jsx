import React from "react";
import { Box, Container, Typography, Button, Breadcrumbs, Link, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function PriceCalculatorIntro({
    title = "What is the Full Home Interior Price Calculator?",
    description = "The full home interior price calculator helps you get an estimate for your full home interiors. All you have to do is answer a few simple questions and, voila!",
    breadcrumb = [
        { label: "Home", path: "/" },
        { label: "Interiors", path: "/interiors" },
        { label: "Home Interior Price Calculator" },
    ],
    buttonText = "Get Started",
    onButtonClick,
}) {
    const theme = useTheme();
    const navigate = useNavigate();

    const handleClick = () => {
        if (onButtonClick) onButtonClick();
        else navigate("/price-calculators/home/calculator/bhk");
    };

    return (
        <Box sx={{
            py: { xs: 6, md: 10 },
            textAlign: "center",
            backgroundColor: theme.palette.background.paper
        }}>
            <Container maxWidth="md">
                {/* Breadcrumb */}
                <Breadcrumbs
                    aria-label="breadcrumb"
                    sx={{
                        justifyContent: "center",
                        display: "flex",
                        mb: 2,
                        fontSize: "0.9rem",
                    }}
                >
                    {breadcrumb.map((item, index) =>
                        item.path ? (
                            <Link
                                key={index}
                                color={index === breadcrumb.length - 1 ? "text.primary" : theme.palette.primary.main}
                                underline={index === breadcrumb.length - 1 ? "none" : "hover"}
                                href={item.path}
                                sx={{
                                    fontWeight: index === breadcrumb.length - 1 ? 500 : 600,
                                    fontSize: "0.9rem",
                                }}
                            >
                                {item.label}
                            </Link>
                        ) : (
                            <Typography
                                key={index}
                                color="text.primary"
                                sx={{ fontWeight: 500, fontSize: "0.9rem" }}
                            >
                                {item.label}
                            </Typography>
                        )
                    )}
                </Breadcrumbs>

                {/* Title */}
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: 700,
                        mb: 2,
                        color: theme.palette.text.primary,
                        fontSize: { xs: "1.8rem", md: "2.4rem" },
                        fontFamily: theme.typography.fontFamily
                    }}
                >
                    {title}
                </Typography>

                {/* Description */}
                <Typography
                    variant="body1"
                    sx={{
                        color: theme.palette.text.secondary,
                        mb: 4,
                        fontSize: { xs: "1rem", md: "1.1rem" },
                        maxWidth: 700,
                        mx: "auto",
                        fontFamily: theme.typography.fontFamily
                    }}
                >
                    {description}
                </Typography>

                {/* Button */}
                <Button
                    variant="contained"
                    size="large"
                    onClick={handleClick}
                    sx={{
                        backgroundColor: theme.palette.primary.main,
                        color: theme.palette.primary.contrastText,
                        textTransform: "none",
                        fontWeight: 600,
                        borderRadius: 10,
                        px: 4,
                        py: 1.5,
                        fontFamily: theme.typography.fontFamily,
                        "&:hover": {
                            backgroundColor: theme.palette.primary.dark,
                            transform: "translateY(-2px)",
                        },
                    }}
                >
                    {buttonText}
                </Button>
            </Container>
        </Box>
    );
}
