import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {
    Box,
    Container,
    Typography,
    Card,
    CardContent,
    IconButton,
    useTheme,
    useMediaQuery,
} from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

export default function Testimonials() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

    const testimonials = [
        {
            name: "Rohan & Priya Mehta",
            location: "Pune, Maharashtra",
            quote:
                "Livspace turned our small 2BHK into a luxurious and cozy home! The design team was professional, attentive, and incredibly creative. The estimation process was smooth and transparent.",
        },
        {
            name: "Aditi Sharma",
            location: "Bengaluru, Karnataka",
            quote:
                "The modular kitchen estimator helped us budget our renovation perfectly. The team executed the design beautifully — our kitchen is now the heart of our home!",
        },
        {
            name: "Vikram Desai",
            location: "Mumbai, Maharashtra",
            quote:
                "I was amazed by how precise the wardrobe estimator was! The final cost was nearly identical to the estimate. Great attention to detail and craftsmanship by the team.",
        },
        {
            name: "Sneha Patil",
            location: "Hyderabad, Telangana",
            quote:
                "From consultation to delivery, everything was perfectly managed. The designs are stunning, and the quality is top-notch. Highly recommend this team for modern interiors.",
        },
    ];

    // ✅ Fixed configuration for consistent display
    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            align: "start",
            containScroll: "trimSnaps",
            slidesToScroll: 1,
            skipSnaps: false,
        },
        [Autoplay({ delay: 5000, stopOnInteraction: false })]
    );

    const [selectedIndex, setSelectedIndex] = useState(0);

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
        <Box
            sx={{
                py: { xs: 6, md: 10 },
                backgroundColor: theme.palette.grey[50],
                position: "relative",
            }}
        >
            <Container maxWidth="lg">
                {/* Title Section */}
                <Box textAlign="center" mb={6}>
                    <Typography
                        variant="h3"
                        sx={{
                            fontWeight: 700,
                            color: theme.palette.text.primary,
                            fontSize: { xs: "2rem", md: "2.5rem" },
                            mb: 2,
                        }}
                    >
                        What Our Clients Say
                    </Typography>
                    <Typography
                        variant="h6"
                        sx={{
                            color: theme.palette.text.secondary,
                            maxWidth: 700,
                            mx: "auto",
                            lineHeight: 1.7,
                            fontSize: { xs: "1rem", md: "1.1rem" },
                        }}
                    >
                        Hear from homeowners who transformed their spaces with our design
                        expertise.
                    </Typography>
                </Box>

                {/* Carousel Section */}
                <Box sx={{
                    position: "relative",
                    mx: { xs: 0, md: 6 },
                }}>
                    <div
                        className="embla"
                        ref={emblaRef}
                        style={{
                            overflow: "hidden", // Keep horizontal overflow hidden
                            paddingTop: "8px", // Space for hover lift at top
                            paddingBottom: "16px", // Space for hover lift at bottom
                            marginTop: "-8px", // Compensate for padding
                        }}
                    >
                        <div
                            className="embla__container"
                            style={{
                                display: "flex",
                                // ✅ Fixed gap using calc to prevent third card peek
                                gap: isMobile ? "20px" : "24px",
                            }}
                        >
                            {testimonials.map((t, i) => (
                                <div
                                    key={i}
                                    className="embla__slide"
                                    style={{
                                        // ✅ Use calc to account for gap precisely
                                        flex: isMobile
                                            ? "0 0 calc(100% - 20px)"
                                            : isTablet
                                                ? "0 0 calc(100% - 24px)"
                                                : "0 0 calc(50% - 12px)", // 50% minus half the gap
                                        minWidth: 0, // Important for proper flex behavior
                                    }}
                                >
                                    <Card
                                        elevation={0}
                                        sx={{
                                            borderRadius: 3,
                                            p: { xs: 3, md: 4 },
                                            height: "100%",
                                            backgroundColor: theme.palette.background.paper,
                                            border: `1px solid ${theme.palette.divider}`,
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "space-between",
                                            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                                            position: "relative",
                                            overflow: "visible",
                                            "&:hover": {
                                                boxShadow: "0 12px 40px rgba(0,0,0,0.08)",
                                                transform: "translateY(-6px)",
                                                borderColor: theme.palette.primary.light,
                                            },
                                        }}
                                    >
                                        {/* Quote Icon */}
                                        <Box
                                            sx={{
                                                position: "absolute",
                                                top: 16,
                                                right: 16,
                                                opacity: 0.1,
                                            }}
                                        >
                                            <FormatQuoteIcon
                                                sx={{
                                                    fontSize: { xs: 48, md: 64 },
                                                    color: theme.palette.primary.main,
                                                }}
                                            />
                                        </Box>

                                        <CardContent sx={{ p: 0 }}>
                                            <Typography
                                                variant="body1"
                                                sx={{
                                                    color: theme.palette.text.secondary,
                                                    lineHeight: 1.8,
                                                    fontSize: { xs: "0.95rem", md: "1.05rem" },
                                                    fontStyle: "italic",
                                                    mb: 4,
                                                    position: "relative",
                                                    zIndex: 1,
                                                }}
                                            >
                                                "{t.quote}"
                                            </Typography>

                                            <Box
                                                sx={{
                                                    pt: 3,
                                                    borderTop: `1px solid ${theme.palette.divider}`,
                                                }}
                                            >
                                                <Typography
                                                    variant="h6"
                                                    sx={{
                                                        fontWeight: 600,
                                                        color: theme.palette.text.primary,
                                                        fontSize: { xs: "1rem", md: "1.1rem" },
                                                        mb: 0.5,
                                                    }}
                                                >
                                                    {t.name}
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    sx={{
                                                        color: theme.palette.text.secondary,
                                                        fontSize: "0.9rem",
                                                    }}
                                                >
                                                    {t.location}
                                                </Typography>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Arrows */}
                    <IconButton
                        onClick={scrollPrev}
                        aria-label="Previous testimonial"
                        sx={{
                            position: "absolute",
                            top: "50%",
                            left: { xs: 0, md: -24 },
                            transform: "translateY(-50%)",
                            backgroundColor: theme.palette.background.paper,
                            border: `1px solid ${theme.palette.divider}`,
                            color: theme.palette.text.primary,
                            width: { xs: 40, md: 48 },
                            height: { xs: 40, md: 48 },
                            zIndex: 10,
                            transition: "all 0.2s ease",
                            "&:hover": {
                                backgroundColor: theme.palette.primary.main,
                                color: theme.palette.primary.contrastText,
                                borderColor: theme.palette.primary.main,
                                transform: "translateY(-50%) scale(1.05)",
                            },
                        }}
                    >
                        <ChevronLeftIcon fontSize="medium" />
                    </IconButton>

                    <IconButton
                        onClick={scrollNext}
                        aria-label="Next testimonial"
                        sx={{
                            position: "absolute",
                            top: "50%",
                            right: { xs: 0, md: -24 },
                            transform: "translateY(-50%)",
                            backgroundColor: theme.palette.background.paper,
                            border: `1px solid ${theme.palette.divider}`,
                            color: theme.palette.text.primary,
                            width: { xs: 40, md: 48 },
                            height: { xs: 40, md: 48 },
                            zIndex: 10,
                            transition: "all 0.2s ease",
                            "&:hover": {
                                backgroundColor: theme.palette.primary.main,
                                color: theme.palette.primary.contrastText,
                                borderColor: theme.palette.primary.main,
                                transform: "translateY(-50%) scale(1.05)",
                            },
                        }}
                    >
                        <ChevronRightIcon fontSize="medium" />
                    </IconButton>
                </Box>

                {/* Pagination Dots */}
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        gap: 1,
                        mt: 4,
                    }}
                >
                    {testimonials.map((_, index) => (
                        <Box
                            key={index}
                            onClick={() => emblaApi?.scrollTo(index)}
                            sx={{
                                width: selectedIndex === index ? 32 : 8,
                                height: 8,
                                borderRadius: 4,
                                backgroundColor:
                                    selectedIndex === index
                                        ? theme.palette.primary.main
                                        : theme.palette.grey[300],
                                cursor: "pointer",
                                transition: "all 0.3s ease",
                                "&:hover": {
                                    backgroundColor:
                                        selectedIndex === index
                                            ? theme.palette.primary.dark
                                            : theme.palette.grey[400],
                                },
                            }}
                        />
                    ))}
                </Box>
            </Container>
        </Box>
    );
}