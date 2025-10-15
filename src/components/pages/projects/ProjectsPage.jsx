import React from "react";
import { useNavigate } from "react-router-dom";
import {
    Container,
    Typography,
    Box,
    Card,
    CardMedia,
    CardContent,
    Button,
    Chip,
    Grid,
    useTheme,
    Divider,
    Breadcrumbs,
    Link,
} from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import { deliveredProjects } from "../../../data/projects/deliveredProjects";
import { upcomingProjects as upcomingData } from "../../../data/projects/upcomingProjects";
import { featuredProjects as featuredData } from "../../../data/projects/featuredProjects";
import FeaturedProjectsCarousel from "../../common/FeaturedProjectsCarousel";

export default function ProjectsPage() {
    const navigate = useNavigate();
    const theme = useTheme();

    const handleCardClick = (type) => navigate(`/projects/${type}`);
    const handleFeaturedProjectClick = (projectId) =>
        navigate(`/projects/featured/${projectId}`);
    const handleViewAllFeatured = () => navigate("/projects/featured");

    return (
        <Box sx={{ overflowX: "hidden" }}>
            <Container maxWidth="lg">
                {/* 🧭 Breadcrumbs and Page Intro */}
                <Box
                    sx={{
                        mb: 8,
                        mt: { xs: 0, sm: 0, md: 6 }, // ✅ 0 on mobile & small, 6 on medium and above
                        px: { xs: 2, sm: 2, md: 2 }, // ✅ Add horizontal padding
                    }}
                >
                    <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
                        <Link
                            underline="hover"
                            color="inherit"
                            onClick={() => navigate("/")}
                            sx={{ cursor: "pointer" }}
                        >
                            Home
                        </Link>
                        <Typography color="text.primary">KalaKruti Studio Portfolio</Typography>
                    </Breadcrumbs>

                    <Typography
                        variant="h3"
                        sx={{
                            fontWeight: 700,
                            color: theme.palette.text.primary,
                            mb: 1,
                        }}
                    >
                        KalaKruti Studio Interior Design Portfolio
                    </Typography>

                    <Typography
                        variant="h6"
                        color="text.secondary"
                        sx={{ maxWidth: 850, lineHeight: 1.7 }}
                    >
                        Proposed and completed residential projects by Livspace, featuring
                        innovative designs, latest trends, and personalized aesthetics to match
                        your lifestyle.
                    </Typography>
                </Box>
                {/* 🧱 Project Categories Section */}
                <Grid container spacing={6} sx={{ mb: { xs: 0, sm: 0, md: 12 }, justifyContent: "center" }}>
                    {[
                        {
                            title: "Delivered Projects",
                            subtitle:
                                "A collection of completed projects highlighting style and precision.",
                            chip: "COMPLETED",
                            color: "success",
                            image:
                                "https://plus.unsplash.com/premium_photo-1725408023149-e9235667309b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1025",
                            type: "delivered",
                        },
                        {
                            title: "Upcoming Projects",
                            subtitle:
                                "Proposed projects featuring detailed plans and innovative designs.",
                            chip: "UPCOMING",
                            color: "warning",
                            image:
                                "https://plus.unsplash.com/premium_photo-1661963428055-4b25a7ebd3a9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1116",
                            type: "upcoming",
                        },
                    ].map((project, index) => (
                        <Grid item xs={12} md={6} key={index}>
                            <Card
                                onClick={() => handleCardClick(project.type)}
                                sx={{
                                    cursor: "pointer",
                                    borderRadius: "20px",
                                    overflow: "hidden",
                                    boxShadow: theme.shadows[6],
                                    position: "relative",
                                    transition: "transform 0.4s ease, box-shadow 0.4s ease",
                                    "&:hover": {
                                        transform: "translateY(-6px)",
                                        boxShadow: theme.shadows[12],
                                    },
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    height="300"
                                    image={project.image}
                                    alt={project.title}
                                />
                                <CardContent
                                    sx={{
                                        p: 4,
                                        background:
                                            "linear-gradient(to bottom right, rgba(255,255,255,0.9), rgba(245,245,245,0.8))",
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            mb: 2,
                                        }}
                                    >
                                        <Typography variant="h4" sx={{ fontWeight: 700 }}>
                                            {project.title}
                                        </Typography>
                                        <Chip
                                            label={project.chip}
                                            color={project.color}
                                            sx={{
                                                fontWeight: 600,
                                                borderRadius: "6px",
                                                fontSize: "0.8rem",
                                            }}
                                        />
                                    </Box>
                                    <Typography
                                        variant="body1"
                                        color="text.secondary"
                                        sx={{ mb: 3, lineHeight: 1.7 }}
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
                                            borderRadius: "25px",
                                            textTransform: "uppercase",
                                            letterSpacing: "0.5px",
                                        }}
                                    >
                                        View Projects
                                    </Button>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                <Divider sx={{ mb: 8 }} />

                {/* ✨ Featured Projects */}
                {/* ✨ Featured Projects */}
                <Box
                    sx={{
                        mb: 6,
                        px: { xs: 2, sm: 3, md: 4 }, // ✅ Adds a small left & right padding (2=16px, 3=24px, 4=32px)
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            flexWrap: "wrap",
                            rowGap: 2,
                        }}
                    >
                        {/* Left Text Section */}
                        <Box sx={{ textAlign: "left", flex: { xs: "1 1 100%", md: "1 1 70%" } }}>
                            <Typography
                                variant="h3"
                                sx={{
                                    fontWeight: 700,
                                    mb: 2,
                                    color: theme.palette.text.primary,
                                }}
                            >
                                Featured Projects
                            </Typography>

                            <Typography
                                variant="h6"
                                color="text.secondary"
                                sx={{
                                    maxWidth: 700,
                                    lineHeight: 1.7,
                                }}
                            >
                                A glimpse of our best creations — blending design precision and aesthetic
                                brilliance.
                            </Typography>
                        </Box>

                        {/* Right Button Section */}
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: { xs: "flex-start", md: "flex-end" },
                                flex: { xs: "1 1 100%", md: "1 1 30%" },
                            }}
                        >
                            <Button
                                variant="outlined"
                                endIcon={<ArrowForward />}
                                onClick={handleViewAllFeatured}
                                sx={{
                                    fontWeight: 600,
                                    px: 3,
                                    py: 1.5,
                                    borderRadius: "25px",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.5px",
                                }}
                            >
                                View All
                            </Button>
                        </Box>
                    </Box>
                </Box>



                {/* Featured Projects Carousel */}
                <Box sx={{ mb: 8 }}>
                    <FeaturedProjectsCarousel
                        projects={featuredData}
                        onViewAll={handleViewAllFeatured}
                    />
                </Box>
            </Container>
        </Box>
    );
}
