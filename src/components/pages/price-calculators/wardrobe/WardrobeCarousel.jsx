import React from "react";
import {
    Box,
    Container,
    Typography,
    Button,
    Card,
    CardMedia,
    CardContent,
    Grid,
    useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function WardrobeCarousel() {
    const theme = useTheme();
    const navigate = useNavigate();

    const items = [
        {
            title: "Swing Wardrobe",
            subtitle: "Classic Hinged Design",
            description:
                "Built with hinged doors to offer generous storage space and clear visibility for everyday convenience.",
            image:
                "https://images.unsplash.com/photo-1672137233327-37b0c1049e77?fm=jpg&q=60&w=3000",
        },
        {
            title: "Sliding Wardrobe",
            subtitle: "Modern Space-Saving Design",
            description:
                "Designed with sleek sliding doors that save floor space while enhancing accessibility and style.",
            image:
                "https://images.unsplash.com/photo-1662454419622-a41092ecd245?q=80&w=1118",
        },
    ];

    return (
        <Box
            sx={{
                py: { xs: 6, md: 10 },
                backgroundColor: theme.palette.background.default,
            }}
        >
            <Container maxWidth="lg">
                {/* 🔹 Heading Section */}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexWrap: "wrap",
                        mb: 6,
                        gap: 2,
                    }}
                >
                    <Box sx={{ flex: 1, minWidth: 250 }}>
                        <Typography
                            variant="h4"
                            sx={{
                                fontWeight: 700,
                                color: theme.palette.text.primary,
                                mb: 1.5,
                                fontSize: { xs: "1.8rem", md: "2.4rem" },
                            }}
                        >
                            Find the wardrobe that fits your lifestyle
                        </Typography>

                        <Typography
                            variant="subtitle1"
                            sx={{
                                color: theme.palette.text.secondary,
                                fontSize: { xs: "1rem", md: "1.15rem" },
                                maxWidth: 600,
                            }}
                        >
                            Explore timeless and modern wardrobe designs tailored to your space,
                            style, and budget — made to organize your life beautifully.
                        </Typography>
                    </Box>

                    <Button
                        variant="contained"
                        onClick={() =>
                            navigate("/price-calculators/wardrobe/calculator/length")
                        }
                        sx={{
                            backgroundColor: theme.palette.primary.main,
                            color: theme.palette.primary.contrastText,
                            textTransform: "none",
                            fontWeight: 600,
                            borderRadius: 3,
                            px: { xs: 3, md: 4 },
                            py: { xs: 1, md: 1.4 },
                            fontSize: { xs: "0.9rem", md: "1rem" },
                            alignSelf: { xs: "center", md: "auto" },
                            boxShadow: `0 4px 12px ${theme.palette.primary.main}30`,
                            "&:hover": {
                                backgroundColor: theme.palette.primary.dark,
                                transform: "translateY(-2px)",
                                boxShadow: `0 6px 18px ${theme.palette.primary.main}40`,
                            },
                        }}
                    >
                        Get Started
                    </Button>
                </Box>

                {/* 🔹 Wardrobe Layouts Section */}
                <Grid container spacing={6}>
                    {items.map((item, index) => (
                        <Grid item xs={12} key={index}>
                            <Card
                                sx={{
                                    display: "flex",
                                    flexDirection: {
                                        xs: "column",
                                        md: index % 2 === 0 ? "row" : "row-reverse",
                                    },
                                    borderRadius: 4,
                                    overflow: "hidden",
                                    boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                    "&:hover": {
                                        transform: "translateY(-6px)",
                                        boxShadow: "0 12px 30px rgba(0,0,0,0.1)",
                                    },
                                }}
                            >
                                {/* Image Section */}
                                <CardMedia
                                    component="img"
                                    image={item.image}
                                    alt={item.title}
                                    sx={{
                                        width: { xs: "100%", md: "50%" },
                                        height: { xs: 220, sm: 280, md: 340 },
                                        objectFit: "cover",
                                    }}
                                />

                                {/* Text Section */}
                                <Box
                                    sx={{
                                        flex: 1,
                                        display: "flex",
                                        alignItems: "center",
                                        background: `linear-gradient(to bottom right, rgba(255,255,255,0.95), rgba(245,245,245,0.9))`,
                                    }}
                                >
                                    <CardContent
                                        sx={{
                                            px: { xs: 3, sm: 4, md: 6 },
                                            py: { xs: 3, md: 4 },
                                            textAlign: { xs: "center", md: "left" },
                                        }}
                                    >
                                        <Typography
                                            variant="h5"
                                            sx={{
                                                fontWeight: 700,
                                                color: theme.palette.text.primary,
                                                mb: 1,
                                                fontSize: { xs: "1.4rem", md: "1.8rem" },
                                            }}
                                        >
                                            {item.title}
                                        </Typography>

                                        <Typography
                                            variant="subtitle1"
                                            sx={{
                                                fontWeight: 600,
                                                color: theme.palette.primary.main,
                                                mb: 2,
                                                fontSize: { xs: "1rem", md: "1.1rem" },
                                            }}
                                        >
                                            {item.subtitle}
                                        </Typography>

                                        <Typography
                                            variant="body1"
                                            sx={{
                                                color: theme.palette.text.secondary,
                                                fontSize: { xs: "0.95rem", md: "1.05rem" },
                                                lineHeight: 1.7,
                                                mb: 3,
                                                maxWidth: { md: "90%" },
                                            }}
                                        >
                                            {item.description}
                                        </Typography>

                                        <Button
                                            variant="contained"
                                            onClick={() =>
                                                navigate(
                                                    "/price-calculators/wardrobe/calculator/length"
                                                )
                                            }
                                            sx={{
                                                backgroundColor: theme.palette.primary.main,
                                                color: theme.palette.primary.contrastText,
                                                textTransform: "none",
                                                fontWeight: 600,
                                                borderRadius: 3,
                                                px: 4,
                                                py: 1.3,
                                                fontSize: { xs: "0.9rem", md: "1rem" },
                                                boxShadow: `0 3px 10px ${theme.palette.primary.main}30`,
                                                "&:hover": {
                                                    backgroundColor: theme.palette.primary.dark,
                                                    transform: "translateY(-2px)",
                                                    boxShadow: `0 6px 16px ${theme.palette.primary.main}40`,
                                                },
                                            }}
                                        >
                                            Choose This Type
                                        </Button>
                                    </CardContent>
                                </Box>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
