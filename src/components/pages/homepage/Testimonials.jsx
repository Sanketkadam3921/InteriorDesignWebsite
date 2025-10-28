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

export default function Testimonials() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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

    // ✅ Align start and containScroll to avoid half cuts
    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            align: "start",
            containScroll: "trimSnaps",
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
            }}
        >
            <Container maxWidth="lg">
                {/* 🔹 Title Section */}
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
                        }}
                    >
                        Hear from homeowners who transformed their spaces with our design
                        expertise.
                    </Typography>
                </Box>

                {/* 🔹 Carousel Section */}
                <Box sx={{ position: "relative", overflow: "hidden" }}>
                    <div className="embla" ref={emblaRef}>
                        <div
                            className="embla__container"
                            style={{
                                display: "flex",
                                gap: isMobile ? "16px" : "32px", // consistent spacing
                            }}
                        >
                            {testimonials.map((t, i) => (
                                <div
                                    key={i}
                                    className="embla__slide"
                                    style={{
                                        flex: isMobile ? "0 0 100%" : "0 0 48%", // 👈 Exactly 2 visible cards on desktop
                                        minWidth: isMobile ? "100%" : "48%",
                                    }}
                                >
                                    <Card
                                        sx={{
                                            borderRadius: 4,
                                            p: { xs: 3, md: 4 },
                                            height: "100%",
                                            backgroundColor: theme.palette.background.paper,
                                            boxShadow: "0 6px 20px rgba(0,0,0,0.05)",
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "space-between",
                                            transition: "all 0.3s ease",
                                            "&:hover": {
                                                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                                                transform: "translateY(-4px)",
                                            },
                                        }}
                                    >
                                        <CardContent>
                                            <Typography
                                                variant="body1"
                                                sx={{
                                                    color: theme.palette.text.secondary,
                                                    lineHeight: 1.8,
                                                    fontSize: "1.05rem",
                                                    fontStyle: "italic",
                                                    mb: 3,
                                                }}
                                            >
                                                “{t.quote}”
                                            </Typography>

                                            <Box>
                                                <Typography
                                                    variant="h6"
                                                    sx={{
                                                        fontWeight: 600,
                                                        color: theme.palette.text.primary,
                                                    }}
                                                >
                                                    {t.name}
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    sx={{
                                                        color: theme.palette.text.secondary,
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

                    {/* 🔹 Navigation Arrows */}
                    <IconButton
                        onClick={scrollPrev}
                        sx={{
                            position: "absolute",
                            top: "50%",
                            left: isMobile ? "8px" : "-2px",
                            transform: "translateY(-50%)",
                            backgroundColor: "rgba(255,255,255,0.95)",
                            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                            color: theme.palette.primary.main,
                            width: isMobile ? 36 : 44,
                            height: isMobile ? 36 : 44,
                            zIndex: 10,
                            "&:hover": {
                                backgroundColor: "rgba(255,255,255,1)",
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
                            right: isMobile ? "8px" : "-2px",
                            transform: "translateY(-50%)",
                            backgroundColor: "rgba(255,255,255,0.95)",
                            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                            color: theme.palette.primary.main,
                            width: isMobile ? 36 : 44,
                            height: isMobile ? 36 : 44,
                            zIndex: 10,
                            "&:hover": {
                                backgroundColor: "rgba(255,255,255,1)",
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
