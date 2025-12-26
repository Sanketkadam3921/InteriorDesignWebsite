import React from "react";
import { useNavigate } from "react-router-dom";
import {
    Typography,
    Box,
    Card,
    CardMedia,
    CardContent,
    Button,
    Chip,
    useTheme,
} from "@mui/material";
import { ArrowForward } from "@mui/icons-material";
import { deliveredProjects } from "../../../data/projects/deliveredProjects";
import ProjectPageLayout from "../../common/ProjectPageLayout";

export default function DeliveredProjectsList() {
    const navigate = useNavigate();
    const theme = useTheme();

    const handleProjectClick = (projectId) => {
        navigate(`/projects/delivered/${projectId}`);
    };

    return (
        <ProjectPageLayout
            title="Delivered Projects"
            subtitle="Explore our completed projects showcasing innovative designs and exceptional craftsmanship."
        >


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
                                sx={{ mb: 2 }}
                            >
                                {project.scope}
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
                                    textTransform: "none",
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
        </ProjectPageLayout>
    );
}
