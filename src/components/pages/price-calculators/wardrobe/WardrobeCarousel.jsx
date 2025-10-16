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
                "https://images.unsplash.com/photo-1672137233327-37b0c1049e77?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2FyZHJvYmV8ZW58MHx8MHx8fDA%3D", // Example wardrobe image
        },
        {
            title: "Sliding Wardrobe",
            subtitle: "Sliding Wardrobe",
            description:
                "Modern designs with horizontally movable doors to save floor space.",
            image:
                "https://images.unsplash.com/photo-1662454419622-a41092ecd245?q=80&w=1118&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Example wardrobe image
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
                    <Box>
                        <Typography
                            variant="h4"
                            sx={{
                                fontWeight: 700,
                                color: theme.palette.text.primary,
                                mb: 1,
                                fontSize: { xs: "1.8rem", md: "2.2rem" },
                                fontFamily: theme.typography.fontFamily
                            }}
                        >
                            Since one type doesn't fit all
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            sx={{
                                color: theme.palette.text.secondary,
                                fontSize: "1.1rem",
                                fontFamily: theme.typography.fontFamily
                            }}
                        >
                            No matter your style, our wardrobe price calculator has got you covered.
                        </Typography>
                    </Box>

                    <Button
                        variant="contained"
                        onClick={() => navigate("/price-calculators/wardrobe/calculator/length")}
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
                                transform: "translateY(-2px)"
                            },
                        }}
                    >
                        Get Started
                    </Button>
                </Box>

                {/* Wardrobe Options - Vertical Layout */}
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
                                        boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
                                    },
                                }}
                            >
                                <Grid container>
                                    {/* Image Section */}
                                    <Grid item xs={12} md={6}>
                                        <CardMedia
                                            component="img"
                                            image={item.image}
                                            alt={item.title}
                                            sx={{
                                                height: { xs: 250, md: 300 },
                                                width: "100%",
                                                objectFit: "cover",
                                            }}
                                        />
                                    </Grid>

                                    {/* Content Section */}
                                    <Grid item xs={12} md={6}>
                                        <CardContent
                                            sx={{
                                                p: 4,
                                                display: "flex",
                                                flexDirection: "column",
                                                justifyContent: "center",
                                                height: { xs: "auto", md: 300 }
                                            }}
                                        >
                                            <Typography
                                                variant="h4"
                                                sx={{
                                                    fontWeight: 700,
                                                    color: theme.palette.text.primary,
                                                    mb: 1,
                                                    fontSize: { xs: "1.5rem", md: "2rem" },
                                                    fontFamily: theme.typography.fontFamily
                                                }}
                                            >
                                                {item.title}
                                            </Typography>

                                            <Typography
                                                variant="h6"
                                                sx={{
                                                    fontWeight: 600,
                                                    color: theme.palette.primary.main,
                                                    mb: 2,
                                                    fontSize: { xs: "1.1rem", md: "1.3rem" },
                                                    fontFamily: theme.typography.fontFamily
                                                }}
                                            >
                                                {item.subtitle}
                                            </Typography>

                                            <Typography
                                                variant="body1"
                                                sx={{
                                                    color: theme.palette.text.secondary,
                                                    fontSize: { xs: "1rem", md: "1.1rem" },
                                                    lineHeight: 1.6,
                                                    fontFamily: theme.typography.fontFamily,
                                                    mb: 3
                                                }}
                                            >
                                                {item.description}
                                            </Typography>

                                            <Button
                                                variant="contained"
                                                onClick={() => navigate("/price-calculators/wardrobe/calculator/length")}
                                                sx={{
                                                    backgroundColor: theme.palette.primary.main,
                                                    color: theme.palette.primary.contrastText,
                                                    textTransform: "none",
                                                    fontWeight: 600,
                                                    borderRadius: 2,
                                                    px: 4,
                                                    py: 1.5,
                                                    fontSize: "1rem",
                                                    fontFamily: theme.typography.fontFamily,
                                                    alignSelf: "flex-start",
                                                    "&:hover": {
                                                        backgroundColor: theme.palette.primary.dark,
                                                        transform: "translateY(-2px)"
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
