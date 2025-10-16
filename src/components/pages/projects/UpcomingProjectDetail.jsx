import React from "react";
import {
    ImageList,
    ImageListItem,
    Button,
    Box,
    Grid,
    Typography,
    Container,
    Card,
    CardMedia,
    useTheme,
    Chip,
    TextField,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from "@mui/material";
import { ArrowBack, LocationOn, ExpandMore, QuestionAnswer, Schedule } from "@mui/icons-material";
import { useNavigate, useParams } from "react-router-dom";
import { upcomingProjectsDetails } from "../../../data/projects/upcomingProjects";

export default function UpcomingProjectDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const theme = useTheme();
    const project = upcomingProjectsDetails[id];

    const upcomingFAQs = [
        {
            id: "upcoming-faq-1",
            question: "When will this upcoming project be completed?",
            answer: "The expected completion date for this project is mentioned in the project details above. We maintain regular communication with our clients throughout the construction process and provide updates on any timeline changes."
        },
        {
            id: "upcoming-faq-2",
            question: "Can I book this design for my own home?",
            answer: "Yes! You can absolutely book a similar design for your own home. Our design team can adapt the concept to your specific space, budget, and requirements while maintaining the core design elements."
        },
        {
            id: "upcoming-faq-3",
            question: "What materials and finishes will be used in this project?",
            answer: "The project will feature premium materials and finishes as specified in the design plan. We work with trusted vendors to ensure quality and timely delivery of all materials. Specific material details are provided during the design consultation."
        },
        {
            id: "upcoming-faq-4",
            question: "Can I visit the construction site during development?",
            answer: "Site visits can be arranged during specific phases of construction with prior appointment. We ensure safety protocols are followed and provide guided tours to show progress and answer any questions about the construction process."
        },
        {
            id: "upcoming-faq-5",
            question: "What is the payment structure for upcoming projects?",
            answer: "Our payment structure is typically divided into milestones aligned with project phases. We provide detailed payment schedules during the initial consultation and maintain transparency throughout the project duration."
        }
    ];

    if (!project) {
        return (
            <Container maxWidth="lg" sx={{ py: 6, textAlign: "center" }}>
                <Typography variant="h4" color="error" gutterBottom>
                    Project not found
                </Typography>
                <Button
                    variant="contained"
                    onClick={() => navigate("/projects/upcoming")}
                    startIcon={<ArrowBack />}
                >
                    Back to Upcoming Projects
                </Button>
            </Container>
        );
    }

    const inputStyle = {
        "& .MuiOutlinedInput-root": {
            borderRadius: "10px",
        },
        "& input": {
            fontSize: "0.95rem",
        },
    };

    return (
        <Container maxWidth="xl" sx={{ py: 6 }}>
            {/* Back Button */}
            <Button
                startIcon={<ArrowBack />}
                onClick={() => navigate("/projects/upcoming")}
                sx={{ mb: 4, px: 0 }}
            >
                Back to Upcoming Projects
            </Button>

            {/* Project Title */}
            <Box sx={{ mb: 3 }}>
                <Typography variant="h3" component="h1" sx={{ fontWeight: 700 }}>
                    {project.title}
                </Typography>
                <Typography variant="h6" color="text.secondary">
                    {project.description}
                </Typography>
            </Box>

            {/* ----------- ImageList Collage Section ----------- */}
            <Box sx={{ position: "relative", mb: 6 }}>
                <ImageList
                    variant="masonry"
                    cols={3}
                    gap={8}
                    sx={{
                        borderRadius: 2,
                        overflow: "hidden",
                        boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                    }}
                >
                    {project.images.slice(0, 6).map((img, idx) => (
                        <ImageListItem key={idx}>
                            <img
                                src={`${img}?w=600&fit=crop&auto=format`}
                                srcSet={`${img}?w=600&fit=crop&auto=format&dpr=2 2x`}
                                alt={`${project.title}-${idx}`}
                                loading="lazy"
                                style={{
                                    borderRadius: "10px",
                                    cursor: "pointer",
                                    transition: "transform 0.3s ease-in-out",
                                }}
                                onClick={() =>
                                    navigate(`/projects/upcoming/${id}/gallery`)
                                }
                                onMouseOver={(e) =>
                                    (e.currentTarget.style.transform = "scale(1.02)")
                                }
                                onMouseOut={(e) =>
                                    (e.currentTarget.style.transform = "scale(1)")
                                }
                            />
                        </ImageListItem>
                    ))}
                </ImageList>

                {/* Floating "See All" Button */}
                <Button
                    variant="contained"
                    size="medium"
                    onClick={() =>
                        navigate(`/projects/upcoming/${id}/gallery`)
                    }
                    sx={{
                        position: "absolute",
                        bottom: 20,
                        right: 30,
                        backgroundColor: "rgba(0,0,0,0.7)",
                        color: "#fff",
                        borderRadius: "25px",
                        px: 3,
                        py: 1,
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.5px",
                        fontSize: "0.85rem",
                        boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
                        "&:hover": {
                            backgroundColor: "rgba(0,0,0,0.9)",
                            transform: "translateY(-2px)",
                        },
                        transition: "all 0.25s ease-in-out",
                    }}
                >
                    See All
                </Button>
            </Box>

            {/* ----------- Project Details Section ----------- */}
            <Box sx={{ mt: 8 }}>
                <Grid container spacing={4}>
                    {/* Left Section */}
                    <Grid
                        item
                        xs={12}
                        md={8}
                        sx={{ display: "flex", flexDirection: "column", gap: 4 }}
                    >
                        {/* Card 1 - Project Overview */}
                        <Card
                            sx={{
                                p: 4,
                                borderRadius: 3,
                                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                            }}
                        >
                            <Typography variant="h4" fontWeight={700} gutterBottom>
                                {project.title}
                            </Typography>

                            <Typography
                                variant="subtitle1"
                                color="text.secondary"
                                sx={{ mb: 2 }}
                            >
                                {project.description}
                            </Typography>

                            {/* Chips */}
                            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 2 }}>
                                <Chip label={project.style} color="warning" variant="outlined" />
                                <Chip label="Upcoming" color="warning" variant="outlined" />
                                <Chip label="4BHK" color="warning" variant="outlined" />
                            </Box>

                            {/* Location */}
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    mb: 3,
                                    color: "text.secondary",
                                }}
                            >
                                <LocationOn sx={{ mr: 1 }} fontSize="small" />
                                <Typography variant="body1">
                                    {project.location}
                                </Typography>
                            </Box>

                            {/* Expected Completion */}
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    mb: 3,
                                    color: "text.secondary",
                                }}
                            >
                                <Schedule sx={{ mr: 1 }} fontSize="small" />
                                <Typography variant="body1">
                                    Expected Completion: {project.expectedCompletion}
                                </Typography>
                            </Box>

                            {/* Property Info Grid */}
                            <Grid container spacing={2} sx={{ mb: 3 }}>
                                <Grid item xs={6} sm={4}>
                                    <Typography variant="body2" color="text.secondary">
                                        Pricing
                                    </Typography>
                                    <Typography variant="body1" fontWeight={600}>
                                        {project.budget}
                                    </Typography>
                                </Grid>
                                <Grid item xs={6} sm={4}>
                                    <Typography variant="body2" color="text.secondary">
                                        Property Type
                                    </Typography>
                                    <Typography variant="body1" fontWeight={600}>
                                        Villa
                                    </Typography>
                                </Grid>
                                <Grid item xs={6} sm={4}>
                                    <Typography variant="body2" color="text.secondary">
                                        Size
                                    </Typography>
                                    <Typography variant="body1" fontWeight={600}>
                                        {project.area}
                                    </Typography>
                                </Grid>
                            </Grid>

                            {/* CTA Button */}
                            <Button
                                variant="contained"
                                color="primary"
                                sx={{
                                    mb: 1,
                                    fontWeight: 600,
                                    px: 3,
                                    borderRadius: "25px",
                                    textTransform: "uppercase",
                                }}
                            >
                                Get Started
                            </Button>
                        </Card>

                        {/* Card 2 - Project Details */}
                        <Card
                            sx={{
                                p: 4,
                                borderRadius: 3,
                                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                            }}
                        >
                            <Typography
                                variant="h5"
                                fontWeight={700}
                                sx={{ mb: 3, color: theme.palette.text.primary }}
                            >
                                Project Details
                            </Typography>

                            {/* Accordion 1 - Design Highlights */}
                            <Accordion
                                defaultExpanded
                                sx={{
                                    mb: 2,
                                    borderRadius: 2,
                                    boxShadow: "none",
                                    border: "1px solid rgba(0,0,0,0.08)",
                                    "&:before": { display: "none" },
                                }}
                            >
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                    <Typography
                                        variant="h6"
                                        fontWeight={600}
                                        sx={{ color: theme.palette.text.primary }}
                                    >
                                        Design Highlights
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Card sx={{ borderRadius: 2, overflow: "hidden", mb: 3 }}>
                                        <CardMedia
                                            component="img"
                                            image={project.images[0]}
                                            alt={project.title}
                                            sx={{
                                                width: "100%",
                                                height: "400px",
                                                objectFit: "cover",
                                            }}
                                        />
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                            sx={{ p: 2 }}
                                        >
                                            Modern Kitchen Design with Premium Finishes
                                        </Typography>
                                    </Card>
                                </AccordionDetails>
                            </Accordion>

                            {/* Accordion 2 - About the Home */}
                            <Accordion
                                defaultExpanded
                                sx={{
                                    borderRadius: 2,
                                    boxShadow: "none",
                                    border: "1px solid rgba(0,0,0,0.08)",
                                    "&:before": { display: "none" },
                                }}
                            >
                                <AccordionSummary expandIcon={<ExpandMore />}>
                                    <Typography
                                        variant="h6"
                                        fontWeight={600}
                                        sx={{ color: theme.palette.text.primary }}
                                    >
                                        About the Home
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            lineHeight: 1.8,
                                            color: "text.secondary",
                                            fontSize: "1.05rem",
                                        }}
                                    >
                                        {project.longDescription}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </Card>
                    </Grid>

                    {/* Right Sidebar (currently unused) */}
                    <Grid item xs={12} md={4}></Grid>
                </Grid>
            </Box>
            {/* FAQs Section */}
            <Box sx={{ mt: 8 }}>
                <Box sx={{ textAlign: 'center', mb: 4 }}>
                    <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
                        Frequently Asked Questions
                    </Typography>
                    <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
                        Common questions about this upcoming project
                    </Typography>
                    <Chip
                        icon={<QuestionAnswer />}
                        label="Project FAQs"
                        color="primary"
                        variant="outlined"
                        sx={{ mb: 3 }}
                    />
                </Box>

                <Box sx={{ width: '100%' }}>
                    {upcomingFAQs.map((faq) => (
                        <Accordion
                            key={faq.id}
                            sx={{
                                mb: 2,
                                '&:before': {
                                    display: 'none',
                                },
                                boxShadow: theme.shadows[2],
                                '&:hover': {
                                    boxShadow: theme.shadows[4],
                                },
                            }}
                        >
                            <AccordionSummary
                                expandIcon={<ExpandMore />}
                                sx={{
                                    backgroundColor: theme.palette.background.paper,
                                    '&:hover': {
                                        backgroundColor: theme.palette.action.hover,
                                    },
                                }}
                            >
                                <Typography variant="h6" sx={{ fontWeight: 500 }}>
                                    {faq.question}
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails
                                sx={{
                                    backgroundColor: theme.palette.background.default,
                                    borderTop: `1px solid ${theme.palette.divider}`,
                                }}
                            >
                                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                                    {faq.answer}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </Box>
            </Box>
        </Container>
    );
}
