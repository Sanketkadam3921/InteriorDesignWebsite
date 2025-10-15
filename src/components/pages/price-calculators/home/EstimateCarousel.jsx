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

export default function EstimateCarousel() {
    const theme = useTheme();
    const navigate = useNavigate();
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "start",
        skipSnaps: false,
    });

    const [selectedIndex, setSelectedIndex] = useState(0);

    // ✅ Responsive breakpoints
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

    const items = [
        {
            title: "1 BHK",
            description: "Compact homes, cozy and stylish with smart interior designs.",
            image: "https://images.unsplash.com/photo-1598300052625-0c19c4a6ef8e?w=1200",
        },
        {
            title: "2 BHK",
            description: "Perfect balance of space and comfort for your modern lifestyle.",
            image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200",
        },
        {
            title: "3 BHK",
            description: "Transform any 3 BHK, compact or spacious, with stunning interiors.",
            image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200",
        },
        {
            title: "4 BHK",
            description: "Experience a different level of comfort and style in your 4 BHK.",
            image: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=1200",
        },
        {
            title: "5 BHK+",
            description: "Give your beautiful 5 BHK+ home the interiors it deserves.",
            image: "https://images.unsplash.com/photo-1617103902913-c9d5fd88047a?w=1200",
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

    return (
        <Box sx={{ py: { xs: 6, md: 10 }, background: theme.palette.background.default }}>
            <Container maxWidth="lg">
                {/* Heading Section */}
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
                            Estimates for any home
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            color="text.secondary"
                            sx={{
                                fontSize: "1.1rem",
                                fontFamily: theme.typography.fontFamily,
                            }}
                        >
                            Choose your preferred home type and get instant price estimates
                        </Typography>
                    </Box>

                    <Button
                        variant="contained"
                        onClick={() =>
                            navigate("/price-calculators/home/calculator/bhk")
                        }
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

                {/* Carousel */}
                <Box sx={{ position: "relative" }}>
                    <div className="embla" ref={emblaRef}>
                        <div
                            className="embla__container"
                            style={{
                                display: "flex",
                                gap: isMobile ? "12px" : "24px",
                            }}
                        >
                            {items.map((item, index) => (
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
                                            image={item.image}
                                            alt={item.title}
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
                                                {item.title}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                color="text.secondary"
                                                sx={{ lineHeight: 1.6 }}
                                            >
                                                {item.description}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ✅ Navigation Arrows — visible & positioned dynamically */}
                    <IconButton
                        onClick={scrollPrev}
                        sx={{
                            position: "absolute",
                            top: "50%",
                            left: isMobile ? "8px" : "-28px",
                            transform: "translateY(-50%)",
                            backgroundColor: "rgba(255, 255, 255, 0.9)", // ✅ solid opaque white
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
                            backgroundColor: "rgba(255, 255, 255, 0.9)", // ✅ solid opaque white
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
            </Container>
        </Box>
    );
}
