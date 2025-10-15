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
} from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { deliveredProjects } from "../../../data/projects/deliveredProjects";

export default function DeliveredProjectsList() {
    const navigate = useNavigate();
    const theme = useTheme();

    const handleProjectClick = (projectId) => {
        navigate(`/projects/delivered/${projectId}`);
    };

    return (
        <Container maxWidth="xl" sx={{ py: 6, px: 0 }}>
            {/* Back Button */}
            <Button
                startIcon={<ArrowBack />}
                onClick={() => navigate("/projects")}
                sx={{ mb: 4, px: 0 }}
            >
                Back to Projects
            </Button>
            {/* 🧭 Page Title */}
            <Box sx={{ textAlign: "left", mb: 6 }}>
                <Typography
                    variant="h3"
                    component="h1"
                    sx={{
                        fontWeight: 700,
                        mb: 2,
                        color: theme.palette.text.primary,
                    }}
                >
                    Delivered Projects
                </Typography>

                <Typography
                    variant="h6"
                    color="text.secondary"
                    sx={{
                        maxWidth: 600,
                        lineHeight: 1.6,
                        textAlign: "left", // ✅ ensures left alignment
                    }}
                >
                    Explore our completed projects showcasing innovative designs and exceptional craftsmanship.
                </Typography>
            </Box>


            {/* Projects Grid */}
            {/* 🧱 Projects Grid - Styled like AllDesigns cards */}
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: {
                        xs: "1fr",
                        sm: "repeat(2, 1fr)",
                        md: "repeat(3, 1fr)",
                    },
                    gap: 3,
                    mt: 2,
                    width: "100%",
                    "& > *": {
                        minHeight: "430px",
                    },
                }}
            >
                {deliveredProjects.map((project) => (
                    <Card
                        key={project.id}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            height: "100%",
                            cursor: "pointer",
                            transition: "all 0.3s ease-in-out",
                            "&:hover": {
                                transform: "translateY(-6px)",
                                boxShadow: theme.shadows[8],
                            },
                        }}
                        onClick={() => handleProjectClick(project.id)}
                    >
                        <Box sx={{ position: "relative" }}>
                            <CardMedia
                                component="img"
                                height="220"
                                image={project.image}
                                alt={project.title}
                                sx={{ objectFit: "cover" }}
                            />
                            {/* Number of images */}
                            <Chip
                                label={`${project.images.length} Images`}
                                size="small"
                                sx={{
                                    position: "absolute",
                                    bottom: 10,
                                    right: 10,
                                    backgroundColor: "rgba(0,0,0,0.7)",
                                    color: "white",
                                    fontWeight: 600,
                                }}
                            />
                            {/* Project status */}
                            <Chip
                                label={project.status}
                                size="small"
                                color="success"
                                sx={{
                                    position: "absolute",
                                    top: 10,
                                    left: 10,
                                    fontWeight: 600,
                                }}
                            />
                        </Box>

                        <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
                            <Typography
                                variant="h6"
                                component="h3"
                                gutterBottom
                                sx={{
                                    fontWeight: 600,
                                    color: theme.palette.text.primary,
                                    lineHeight: 1.3,
                                    minHeight: "48px",
                                    display: "-webkit-box",
                                    WebkitLineClamp: 2,
                                    WebkitBoxOrient: "vertical",
                                    overflow: "hidden",
                                }}
                            >
                                {project.title}
                            </Typography>

                            <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{ mb: 1 }}
                            >
                                {project.location}
                            </Typography>

                            <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{ mb: 0.5 }}
                            >
                                {project.scope}
                            </Typography>

                            <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{ mb: 0.5 }}
                            >
                                {project.bhk}
                            </Typography>

                            <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{ mb: 2 }}
                            >
                                {project.pricing}
                            </Typography>

                            <Button
                                variant="outlined"
                                fullWidth
                                endIcon={<ArrowForward />}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleProjectClick(project.id);
                                }}
                                sx={{
                                    mt: "auto",
                                    borderColor: theme.palette.primary.main,
                                    color: theme.palette.primary.main,
                                    fontWeight: 600,
                                    py: 1.2,
                                    borderRadius: "20px",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.5px",
                                    "&:hover": {
                                        borderColor: theme.palette.primary.dark,
                                        backgroundColor: theme.palette.action.hover,
                                    },
                                }}
                            >
                                View Details
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </Box>

        </Container>
    );
}
