import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Box, Container, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Hero() {
    const navigate = useNavigate();
    const [selectedIndex, setSelectedIndex] = useState(0);

    const slides = [
        {
            image:
                "https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?q=80&w=1074&auto=format&fit=crop",
            title: "We Create Dream Spaces",
            subtitle: "Transform your home with elegant and functional design."
        },
        {
            image:
                "https://images.unsplash.com/photo-1591474200742-8e512e6f98f8?auto=format&fit=crop&q=80&w=1074",
            title: "Modern Designs for Modern Living",
            subtitle: "From concept to completion, we craft experiences that inspire."
        },
        {
            image:
                "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=1200",
            title: "Your Vision, Our Expertise",
            subtitle: "Collaborate with our experts to bring your dream interiors to life."
        },
        {
            image:
                "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?q=80&w=1074&auto=format&fit=crop",
            title: "Luxury That Speaks for Itself",
            subtitle: "Every detail designed with precision, passion, and purpose."
        }
    ];

    const [emblaRef, emblaApi] = useEmblaCarousel(
        {
            loop: true,
            align: "start",
            skipSnaps: false,
            dragFree: false
        },
        [Autoplay({ delay: 4000, stopOnInteraction: false })]
    );

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on("select", onSelect);
        return () => emblaApi.off("select", onSelect);
    }, [emblaApi, onSelect]);

    return (
        <Box
            sx={{
                position: "relative",
                height: { xs: "94vh", md: "94vh" }, // Responsive height
                overflow: "hidden"
            }}
        >
            {/* Embla Carousel */}
            <div className="embla" ref={emblaRef}>
                <div className="embla__container" style={{ display: "flex" }}>
                    {slides.map((slide, index) => (
                        <div
                            className="embla__slide"
                            key={index}
                            style={{ flex: "0 0 100%" }}
                        >
                            <Box
                                sx={{
                                    backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${slide.image})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    height: { xs: "94vh", md: "94vh" },
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "white",
                                    textAlign: "center"
                                }}
                            >
                                <Container maxWidth="md">
                                    <Typography
                                        variant="h3"
                                        component="h1"
                                        gutterBottom
                                        sx={{
                                            fontWeight: "bold",
                                            color: "#ffffff",
                                            textShadow: "2px 2px 10px rgba(0,0,0,0.4)",
                                            fontSize: { xs: "2rem", md: "3rem" }
                                        }}
                                    >
                                        {slide.title}
                                    </Typography>
                                    <Typography
                                        variant="h6"
                                        gutterBottom
                                        sx={{
                                            mb: 4,
                                            color: "#f5f5f5",
                                            textShadow: "1px 1px 8px rgba(0,0,0,0.4)",
                                            fontSize: { xs: "1rem", md: "1.25rem" }
                                        }}
                                    >
                                        {slide.subtitle}
                                    </Typography>

                                    <Button
                                        variant="contained"
                                        size="large"
                                        onClick={() => navigate("/contact")}
                                        sx={{
                                            px: 4,
                                            py: 2,
                                            borderRadius: 2,
                                            textTransform: "none",
                                            fontWeight: 600
                                        }}
                                    >
                                        Book Consultation
                                    </Button>
                                </Container>
                            </Box>
                        </div>
                    ))}
                </div>
            </div>

            {/* Dots navigation */}
            <Box
                sx={{
                    position: "absolute",
                    bottom: 20,
                    left: "50%",
                    transform: "translateX(-50%)",
                    display: "flex",
                    gap: 1
                }}
            >
                {slides.map((_, i) => (
                    <Box
                        key={i}
                        onClick={() => emblaApi && emblaApi.scrollTo(i)}
                        sx={{
                            width: 12,
                            height: 12,
                            borderRadius: "50%",
                            bgcolor:
                                i === selectedIndex
                                    ? "white"
                                    : "rgba(255, 255, 255, 0.5)",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                            "&:hover": {
                                bgcolor:
                                    i === selectedIndex
                                        ? "white"
                                        : "rgba(255, 255, 255, 0.8)",
                                transform: "scale(1.2)"
                            }
                        }}
                    />
                ))}
            </Box>
        </Box>
    );
}
