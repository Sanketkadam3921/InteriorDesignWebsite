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
            subtitle: "Swing Wardrobe",
            description:
                "Built with hinged doors to offer more space for storage and visibility.",
            image:
                "https://images.unsplash.com/photo-1672137233327-37b0c1049e77?fm=jpg&q=60&w=3000",
        },
        {
            title: "Sliding Wardrobe",
            subtitle: "Sliding Wardrobe",
            description:
                "Modern designs with horizontally movable doors to save floor space.",
            image:
                "https://images.unsplash.com/photo-1662454419622-a41092ecd245?q=80&w=1118",
        },
    ];

    return (
        <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: theme.palette.background.paper }}>
            <Container maxWidth="lg">
                {/* Heading */}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexWrap: "wrap",
                        mb: 4,
                        gap: 2,
                    }}
                >
                    <Box sx={{ flex: 1, minWidth: 250 }}>
                        <Typography
                            variant="h4"
                            sx={{
                                fontWeight: 700,
                                color: theme.palette.text.primary,
                                mb: 1,
                                fontSize: { xs: "1.6rem", md: "2.2rem" },
                            }}
                        >
                            Since one type doesn't fit all
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            sx={{
                                color: theme.palette.text.secondary,
                                fontSize: { xs: "0.95rem", md: "1.1rem" },
                            }}
                        >
                            No matter your style, our wardrobe price calculator has got you covered.
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
                            borderRadius: 10,
                            px: { xs: 3, md: 4 },
                            py: { xs: 1, md: 1.5 },
                            fontSize: { xs: "0.9rem", md: "1rem" },
                            alignSelf: { xs: "center", md: "auto" },
                            "&:hover": {
                                backgroundColor: theme.palette.primary.dark,
                                transform: "translateY(-2px)",
                            },
                        }}
                    >
                        Get Started
                    </Button>
                </Box>

                {/* Wardrobe Cards */}
                <Grid container spacing={4}>
                    {items.map((item, index) => (
                        <Grid item xs={12} key={index}>
                            <Card
                                sx={{
                                    borderRadius: 3,
                                    boxShadow: "0 6px 20px rgba(0,0,0,0.05)",
                                    overflow: "hidden",
                                    backgroundColor: theme.palette.background.paper,
                                    transition: "all 0.3s ease",
                                    "&:hover": {
                                        transform: "translateY(-4px)",
                                        boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                                    },
                                }}
                            >
                                <Grid container direction={{ xs: "column", md: "row" }}>
                                    {/* Image */}
                                    <Grid item xs={12} md={6}>
                                        <CardMedia
                                            component="img"
                                            image={item.image}
                                            alt={item.title}
                                            sx={{
                                                height: { xs: 200, sm: 250, md: 300 },
                                                width: "100%",
                                                objectFit: "cover",
                                            }}
                                        />
                                    </Grid>

                                    {/* Content */}
                                    <Grid
                                        item
                                        xs={12}
                                        md={6}
                                        sx={{
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                        }}
                                    >
                                        <CardContent
                                            sx={{
                                                p: { xs: 3, md: 4 },
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
                                                    fontSize: { xs: "1rem", md: "1.2rem" },
                                                }}
                                            >
                                                {item.subtitle}
                                            </Typography>

                                            <Typography
                                                variant="body1"
                                                sx={{
                                                    color: theme.palette.text.secondary,
                                                    fontSize: { xs: "0.95rem", md: "1rem" },
                                                    lineHeight: 1.6,
                                                    mb: 3,
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
                                                    borderRadius: 2,
                                                    px: 4,
                                                    py: 1.3,
                                                    fontSize: { xs: "0.9rem", md: "1rem" },
                                                    "&:hover": {
                                                        backgroundColor: theme.palette.primary.dark,
                                                        transform: "translateY(-2px)",
                                                    },
                                                }}
                                            >
                                                Choose This Type
                                            </Button>
                                        </CardContent>
                                    </Grid>
                                </Grid>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
