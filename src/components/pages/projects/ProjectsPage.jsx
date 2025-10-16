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
    Breadcrumbs,
    Link,
} from "@mui/material";
import { ArrowForward } from "@mui/icons-material";

export default function ProjectsPage() {
    const navigate = useNavigate();
    const theme = useTheme();

    const handleCardClick = (type) => navigate(`/projects/${type}`);

    return (
        <Box sx={{
            minHeight: '100vh',
            backgroundColor: theme.palette.background.default,
            pt: { xs: 2, sm: 3, md: 4 }, // Consistent top padding
            pb: { xs: 4, sm: 6, md: 8 }   // Consistent bottom padding
        }}>
            <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
                {/* 🧭 Breadcrumbs and Page Intro */}
                <Box sx={{ mb: 8 }}>

                    <Typography
                        variant="h3"
                        sx={{
                            fontWeight: 700,
                            color: theme.palette.text.primary,
                            mb: 2,
                            fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' },
                            lineHeight: 1.2,
                        }}
                    >
                        KalaKruti Studio Interior Design Portfolio
                    </Typography>

                    <Typography
                        variant="h6"
                        color="text.secondary"
                        sx={{
                            maxWidth: 850,
                            lineHeight: 1.6,
                            fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
                        }}
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

            </Container>
        </Box>
    );
}
