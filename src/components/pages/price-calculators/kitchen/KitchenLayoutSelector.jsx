import React, { useCallback, useEffect, useState } from "react";
import { Box, Container, Typography, Button, Card, CardMedia, CardContent, IconButton, useTheme, useMediaQuery } from "@mui/material";
import useEmblaCarousel from "embla-carousel-react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useNavigate } from "react-router-dom";

export default function KitchenLayoutSelector() {
    const theme = useTheme();
    const navigate = useNavigate();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    // Configure carousel based on screen size
    const carouselOptions = {
        loop: true,
        align: "start",
        skipSnaps: false,
        slidesToScroll: isMobile ? 1 : 1, // Show one slide at a time on mobile
    };

    const [emblaRef, emblaApi] = useEmblaCarousel(carouselOptions);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const kitchenLayouts = [
        {
            title: "Sleek L-shaped Kitchen",
            description: "Featuring adjoining countertops with corner spaces.",
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200",
            layout: "L-shaped",
        },
        {
            title: "Spacious U-shaped Kitchen",
            description: "Comprising three connected walls of cabinets with a practical open entrance.",
            image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200",
            layout: "U-shaped",
        },
        {
            title: "Essential Straight Kitchen",
            description: "A convenient option with the countertop and cabinets placed in a straight line.",
            image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200",
            layout: "Straight",
        },
    ];

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on("select", onSelect);
    }, [emblaApi, onSelect]);

    const handleStartNow = (layout) => {
        // Navigate to the next step with the selected layout
        navigate(`/price-calculators/kitchen/calculator/measurements?layout=${layout}`);
    };

    return (
        <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: theme.palette.background.default }}>
            <Container maxWidth="lg">
                {/* Heading */}
                <Box
                    sx={{
                        textAlign: "center",
                        mb: 6,
                    }}
                >
                    <Typography
                        variant="h3"
                        sx={{
                            fontWeight: 700,
                            color: theme.palette.text.primary,
                            mb: 2,
                            fontSize: { xs: "2rem", md: "3rem" },
                            fontFamily: theme.typography.fontFamily
                        }}
                    >
                        Estimates for every kitchen
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            color: theme.palette.text.secondary,
                            fontSize: { xs: "1.1rem", md: "1.3rem" },
                            maxWidth: 600,
                            mx: "auto",
                            fontFamily: theme.typography.fontFamily
                        }}
                    >
                        Choose your preferred kitchen layout, and let our estimator work its magic.
                    </Typography>
                </Box>

                {/* Carousel */}
                <Box sx={{ position: "relative" }}>
                    <div className="embla" ref={emblaRef}>
                        <div className="embla__container" style={{ display: "flex", gap: isMobile ? "16px" : "24px" }}>
                            {kitchenLayouts.map((layout, index) => (
                                <div
                                    className="embla__slide"
                                    key={index}
                                    style={{
                                        flex: isMobile ? "0 0 100%" : "0 0 33.333%",
                                        minWidth: isMobile ? "100%" : "33.333%"
                                    }}
                                >
                                    <Card
                                        sx={{
                                            borderRadius: 14,
                                            boxShadow: "0 6px 20px rgba(0,0,0,0.05)",
                                            overflow: "hidden",
                                            height: "100%",
                                            backgroundColor: theme.palette.background.paper,
                                            transition: "all 0.3s ease",
                                            "&:hover": {
                                                transform: "translateY(-8px)",
                                                boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
                                            },
                                        }}
                                    >
                                        <CardMedia
                                            component="img"
                                            image={layout.image}
                                            alt={layout.title}
                                            sx={{ height: 280, objectFit: "cover" }}
                                        />
                                        <CardContent sx={{ p: 3 }}>
                                            <Typography
                                                variant="h5"
                                                sx={{
                                                    fontWeight: 600,
                                                    color: theme.palette.text.primary,
                                                    mb: 2,
                                                    fontSize: { xs: "1.2rem", md: "1.4rem" },
                                                    fontFamily: theme.typography.fontFamily
                                                }}
                                            >
                                                {layout.title}
                                            </Typography>
                                            <Typography
                                                variant="body1"
                                                sx={{
                                                    color: theme.palette.text.secondary,
                                                    mb: 3,
                                                    lineHeight: 1.6,
                                                    fontSize: { xs: "0.95rem", md: "1rem" },
                                                    fontFamily: theme.typography.fontFamily
                                                }}
                                            >
                                                {layout.description}
                                            </Typography>
                                            <Button
                                                variant="contained"
                                                fullWidth
                                                onClick={() => handleStartNow(layout.layout)}
                                                sx={{
                                                    backgroundColor: theme.palette.primary.main,
                                                    color: theme.palette.primary.contrastText,
                                                    textTransform: "none",
                                                    fontWeight: 600,
                                                    borderRadius: 10,
                                                    py: 1.5,
                                                    fontSize: "1rem",
                                                    fontFamily: theme.typography.fontFamily,
                                                    "&:hover": {
                                                        backgroundColor: theme.palette.primary.dark,
                                                        transform: "translateY(-2px)",
                                                    },
                                                }}
                                            >
                                                START NOW
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Arrows */}
                    <IconButton
                        onClick={scrollPrev}
                        sx={{
                            position: "absolute",
                            top: "50%",
                            left: isMobile ? "10px" : "-30px",
                            transform: "translateY(-50%)",
                            backgroundColor: theme.palette.background.paper,
                            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                            width: isMobile ? 40 : 50,
                            height: isMobile ? 40 : 50,
                            color: theme.palette.primary.main,
                            zIndex: 2,
                            "&:hover": {
                                backgroundColor: theme.palette.action.hover,
                                transform: "translateY(-50%) scale(1.1)",
                                color: theme.palette.primary.dark
                            },
                        }}
                    >
                        <ChevronLeftIcon fontSize={isMobile ? "medium" : "large"} />
                    </IconButton>

                    <IconButton
                        onClick={scrollNext}
                        sx={{
                            position: "absolute",
                            top: "50%",
                            right: isMobile ? "10px" : "-30px",
                            transform: "translateY(-50%)",
                            backgroundColor: theme.palette.background.paper,
                            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                            width: isMobile ? 40 : 50,
                            height: isMobile ? 40 : 50,
                            color: theme.palette.primary.main,
                            zIndex: 2,
                            "&:hover": {
                                backgroundColor: theme.palette.action.hover,
                                transform: "translateY(-50%) scale(1.1)",
                                color: theme.palette.primary.dark
                            },
                        }}
                    >
                        <ChevronRightIcon fontSize={isMobile ? "medium" : "large"} />
                    </IconButton>

                    {/* Mobile Slide Indicators */}
                    {isMobile && (
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                gap: 1,
                                mt: 3,
                            }}
                        >
                            {kitchenLayouts.map((_, index) => (
                                <Box
                                    key={index}
                                    sx={{
                                        width: 8,
                                        height: 8,
                                        borderRadius: "50%",
                                        backgroundColor: selectedIndex === index
                                            ? theme.palette.primary.main
                                            : theme.palette.grey[300],
                                        transition: "background-color 0.3s ease",
                                    }}
                                />
                            ))}
                        </Box>
                    )}
                </Box>
            </Container>
        </Box>
    );
}
