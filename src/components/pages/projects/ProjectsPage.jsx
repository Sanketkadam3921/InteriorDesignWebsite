import React from "react";
import { useNavigate } from "react-router-dom";
import {
    Container,
    Typography,
    Box,
    Card,
    CardMedia,
    Button,
    Chip,
    Grid,
    useTheme,
    Paper,
} from "@mui/material";
import { ArrowForward, Star, Architecture } from "@mui/icons-material";

export default function ProjectsPage() {
    const navigate = useNavigate();
    const theme = useTheme();

    const handleCardClick = () => navigate("/projects/delivered");

    const project = {
        title: "Delivered Projects",
        subtitle:
            "A curated showcase of completed interior projects reflecting elegance, functionality, and modern design principles.",
        chip: "COMPLETED",
        color: "success",
        image:
            "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&q=80&w=1200",
    };

    return (
        <Box
            sx={{
                backgroundColor: theme.palette.background.default,
                overflowX: "hidden",
            }}
        >
            {/* 🌟 Hero Section */}
            <Box
                sx={{
                    minHeight: "80vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    textAlign: "center",
                    background:
                        "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1920') center/cover",
                    color: "white",
                    p: { xs: 6, md: 10 },
                }}
            >
                <Typography
                    variant="h2"
                    sx={{
                        fontWeight: 800,
                        mb: 2,
                        fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
                    }}
                >
                    Delivered Projects
                </Typography>

                <Typography
                    variant="h6"
                    sx={{
                        maxWidth: "750px",
                        mx: "auto",
                        opacity: 0.9,
                        fontSize: { xs: "1rem", sm: "1.1rem" },
                        mb: 4,
                    }}
                >
                    Step inside our completed spaces — a blend of art, architecture, and
                    precision that transforms homes into timeless living experiences.
                </Typography>

                {/* 🎯 View All Projects Button */}
                <Button
                    variant="contained"
                    color="primary"
                    endIcon={<ArrowForward />}
                    onClick={handleCardClick}
                    sx={{
                        fontWeight: 700,
                        px: 4,
                        py: 1.5,
                        borderRadius: "30px",
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                        backgroundColor: "rgba(255,255,255,0.15)",
                        border: "1px solid rgba(255,255,255,0.4)",
                        backdropFilter: "blur(4px)",
                        "&:hover": {
                            backgroundColor: "rgba(255,255,255,0.25)",
                        },
                    }}
                >
                    View All Projects
                </Button>
            </Box>

            <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
                {/* 🪄 About Our Work */}
                <Box textAlign="center" sx={{ mb: 10 }}>
                    <Typography
                        variant="h4"
                        sx={{ fontWeight: 700, mb: 2, color: theme.palette.text.primary }}
                    >
                        Our Design Philosophy
                    </Typography>
                    <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{
                            maxWidth: "800px",
                            mx: "auto",
                            lineHeight: 1.8,
                            fontSize: { xs: "1rem", sm: "1.1rem" },
                        }}
                    >
                        At KalaKruti Studio, we believe great design begins with great
                        understanding. Every project we deliver tells a story — built on
                        individuality, innovation, and craftsmanship. We combine modern
                        materials with timeless aesthetics to create interiors that inspire
                        and endure.
                    </Typography>
                </Box>

                {/* 💡 What Makes Us Special */}
                <Grid container spacing={4} sx={{ mb: 10, justifyContent: "center" }}>
                    {[
                        {
                            icon: (
                                <Architecture
                                    sx={{ fontSize: 40, color: theme.palette.primary.main }}
                                />
                            ),
                            title: "Precision in Design",
                            desc: "Every inch is planned with a purpose — blending functionality with style.",
                        },
                        {
                            icon: (
                                <Star
                                    sx={{ fontSize: 40, color: theme.palette.primary.main }}
                                />
                            ),
                            title: "Quality Craftsmanship",
                            desc: "Delivered with superior materials and unmatched attention to detail.",
                        },
                    ].map((feature, i) => (
                        <Grid item xs={12} sm={6} md={4} key={i}>
                            <Paper
                                elevation={3}
                                sx={{
                                    borderRadius: "16px",
                                    p: 4,
                                    textAlign: "center",
                                    height: "100%",
                                    transition: "transform 0.3s ease",
                                    "&:hover": { transform: "translateY(-5px)" },
                                }}
                            >
                                {feature.icon}
                                <Typography
                                    variant="h6"
                                    sx={{ fontWeight: 700, mt: 2, mb: 1 }}
                                >
                                    {feature.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {feature.desc}
                                </Typography>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>

                {/* 🏗️ Delivered Projects Card */}
                <Card
                    onClick={handleCardClick}
                    sx={{
                        cursor: "pointer",
                        borderRadius: "20px",
                        overflow: "hidden",
                        boxShadow: "0px 8px 25px rgba(0,0,0,0.1)",
                        transition: "transform 0.4s ease, box-shadow 0.4s ease",
                        "&:hover": {
                            transform: "translateY(-6px)",
                            boxShadow: "0px 12px 30px rgba(0,0,0,0.15)",
                        },
                    }}
                >
                    <Box sx={{ position: "relative" }}>
                        <CardMedia
                            component="img"
                            height="420"
                            image={project.image}
                            alt={project.title}
                            sx={{ objectFit: "cover", filter: "brightness(0.9)" }}
                        />

                        {/* Overlay */}
                        <Box
                            sx={{
                                position: "absolute",
                                bottom: 0,
                                left: 0,
                                right: 0,
                                background:
                                    "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.2))",
                                color: "white",
                                p: 4,
                            }}
                        >
                            <Chip
                                label={project.chip}
                                color={project.color}
                                sx={{ mb: 1.5, fontWeight: 600 }}
                            />
                            <Typography variant="h4" sx={{ fontWeight: 700, mb: 1 }}>
                                {project.title}
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{ opacity: 0.9, maxWidth: "700px", mb: 3 }}
                            >
                                {project.subtitle}
                            </Typography>
                            <Button
                                variant="contained"
                                endIcon={<ArrowForward />}
                                sx={{
                                    fontWeight: 600,
                                    px: 3,
                                    py: 1.5,
                                    borderRadius: "30px",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.5px",
                                }}
                            >
                                View Projects
                            </Button>
                        </Box>
                    </Box>
                </Card>

                {/* 🗣️ Testimonials Preview */}
                <Box textAlign="center" sx={{ mt: 12 }}>
                    <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
                        What Our Clients Say
                    </Typography>
                    <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{
                            maxWidth: "700px",
                            mx: "auto",
                            mb: 6,
                            fontSize: { xs: "1rem", sm: "1.1rem" },
                        }}
                    >
                        “Working with KalaKruti Studio was a seamless experience. They
                        transformed our home into a space that truly feels like us.”
                        — <strong>Rohan & Priya Deshmukh</strong>
                    </Typography>
                    <Button
                        variant="outlined"
                        color="primary"
                        onClick={handleCardClick}
                        sx={{
                            fontWeight: 600,
                            borderRadius: "25px",
                            px: 4,
                            py: 1.5,
                        }}
                    >
                        Explore All Delivered Projects
                    </Button>
                </Box>
            </Container>
        </Box>
    );
}
