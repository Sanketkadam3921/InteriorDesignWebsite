import React, { useCallback, useEffect, useState } from "react";
import {
    Box,
    Container,
    Typography,
    Button,
    Card,
    CardMedia,
    CardContent,
    IconButton,
    useTheme,
    useMediaQuery,
} from "@mui/material";
import useEmblaCarousel from "embla-carousel-react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useNavigate } from "react-router-dom";

export default function KitchenLayoutSelector() {
    const theme = useTheme();
    const navigate = useNavigate();
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "start",
        skipSnaps: false,
    });

    const [selectedIndex, setSelectedIndex] = useState(0);

    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

    // ✅ Added new Parallel Kitchen layout
    const kitchenLayouts = [
        {
            title: "Sleek L-shaped Kitchen",
            description:
                "Featuring adjoining countertops with corner spaces, ideal for medium spaces.",
            image:
                "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200",
            layout: "L-shaped",
        },
        {
            title: "Spacious U-shaped Kitchen",
            description:
                "Three connected walls of cabinets with a practical open entrance for convenience.",
            image:
                "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200",
            layout: "U-shaped",
        },
        {
            title: "Essential Straight Kitchen",
            description:
                "A compact, efficient layout with countertop and cabinets placed in a straight line.",
            image:
                "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200",
            layout: "Straight",
        },
        {
            title: "Parallel Kitchen",
            description:
                "Two long countertops facing each other, perfect for maximizing workflow efficiency.",
            image:
                "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200",
            layout: "Parallel",
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
        navigate(`/price-calculators/kitchen/calculator/measurements?layout=${layout}`);
    };

    return (
        <Box sx={{ py: { xs: 6, md: 10 }, background: theme.palette.background.default }}>
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
                        textAlign: { xs: "center", md: "left" },
                    }}
                >
                    <Box>
                        <Typography
                            variant="h4"
                            fontWeight={700}
                            color="text.primary"
                            sx={{
                                mb: 1,
                                fontSize: { xs: "1.8rem", md: "2.2rem" },
                                fontFamily: theme.typography.fontFamily,
                            }}
                        >
                            Estimates for every kitchen
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            color="text.secondary"
                            sx={{
                                fontSize: "1.1rem",
                                maxWidth: 600,
                                fontFamily: theme.typography.fontFamily,
                            }}
                        >
                            Choose your preferred kitchen layout and get instant design estimates.
                        </Typography>
                    </Box>

                    <Button
                        variant="contained"
                        onClick={() => navigate("/price-calculators/kitchen")}
                        sx={{
                            backgroundColor: theme.palette.primary.main,
                            color: theme.palette.primary.contrastText,
                            textTransform: "none",
                            fontWeight: 600,
                            borderRadius: 3,
                            px: 4,
                            py: 1.5,
                            fontFamily: theme.typography.fontFamily,
                            boxShadow: `0 4px 12px ${theme.palette.primary.main}30`,
                            "&:hover": {
                                backgroundColor: theme.palette.primary.dark,
                                transform: "translateY(-2px)",
                                boxShadow: `0 6px 16px ${theme.palette.primary.main}40`,
                            },
                        }}
                    >
                        Get Started
                    </Button>
                </Box>

                {/* 🔹 Carousel Section */}
                <Box sx={{ position: "relative" }}>
                    <div className="embla" ref={emblaRef}>
                        <div
                            className="embla__container"
                            style={{
                                display: "flex",
                                gap: isMobile ? "12px" : "24px",
                            }}
                        >
                            {kitchenLayouts.map((layout, index) => (
                                <div
                                    className="embla__slide"
                                    key={index}
                                    style={{
                                        flex: isMobile
                                            ? "0 0 100%"
                                            : isTablet
                                                ? "0 0 50%"
                                                : "0 0 33.333%",
                                    }}
                                >
                                    <Card
                                        sx={{
                                            borderRadius: 4,
                                            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                                            overflow: "hidden",
                                            height: "100%",
                                            backgroundColor: theme.palette.background.paper,
                                            transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                            "&:hover": {
                                                transform: "translateY(-6px)",
                                                boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                                            },
                                        }}
                                    >
                                        <CardMedia
                                            component="img"
                                            image={layout.image}
                                            alt={layout.title}
                                            sx={{
                                                height: 240,
                                                objectFit: "cover",
                                                width: "100%",
                                            }}
                                        />
                                        <CardContent sx={{ p: 3 }}>
                                            <Typography
                                                variant="h6"
                                                fontWeight={600}
                                                color="text.primary"
                                                sx={{ mb: 1 }}
                                            >
                                                {layout.title}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                color="text.secondary"
                                                sx={{ lineHeight: 1.6, mb: 3 }}
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
                                                    borderRadius: 3,
                                                    py: 1.3,
                                                    fontFamily: theme.typography.fontFamily,
                                                    "&:hover": {
                                                        backgroundColor: theme.palette.primary.dark,
                                                        transform: "translateY(-2px)",
                                                    },
                                                }}
                                            >
                                                Start Now
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* 🔹 Navigation Arrows */}
                    <IconButton
                        onClick={scrollPrev}
                        sx={{
                            position: "absolute",
                            top: "50%",
                            left: isMobile ? "8px" : "-28px",
                            transform: "translateY(-50%)",
                            backgroundColor: "rgba(255, 255, 255, 0.9)",
                            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                            color: theme.palette.primary.main,
                            width: isMobile ? 36 : 44,
                            height: isMobile ? 36 : 44,
                            "&:hover": {
                                backgroundColor: "rgba(255, 255, 255, 0.9)",
                                color: theme.palette.primary.dark,
                            },
                        }}
                    >
                        <ChevronLeftIcon fontSize={isMobile ? "small" : "medium"} />
                    </IconButton>

                    <IconButton
                        onClick={scrollNext}
                        sx={{
                            position: "absolute",
                            top: "50%",
                            right: isMobile ? "8px" : "-28px",
                            transform: "translateY(-50%)",
                            backgroundColor: "rgba(255, 255, 255, 0.9)",
                            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                            color: theme.palette.primary.main,
                            width: isMobile ? 36 : 44,
                            height: isMobile ? 36 : 44,
                            "&:hover": {
                                backgroundColor: "rgba(255, 255, 255, 0.9)",
                                color: theme.palette.primary.dark,
                            },
                        }}
                    >
                        <ChevronRightIcon fontSize={isMobile ? "small" : "medium"} />
                    </IconButton>
                </Box>

                {/* 🔹 Mobile Slide Indicators */}
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
                                    backgroundColor:
                                        selectedIndex === index
                                            ? theme.palette.primary.main
                                            : theme.palette.grey[300],
                                    transition: "background-color 0.3s ease",
                                }}
                            />
                        ))}
                    </Box>
                )}
            </Container>
        </Box>
    );
}
