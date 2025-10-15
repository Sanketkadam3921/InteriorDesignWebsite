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
import { ArrowBack, LocationOn, ExpandMore, QuestionAnswer, Star } from "@mui/icons-material";
import { useNavigate, useParams } from "react-router-dom";
import { featuredProjectsDetails } from "../../../data/projects/featuredProjects";

export default function FeaturedProjectDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const theme = useTheme();
    const project = featuredProjectsDetails[id];

    const featuredFAQs = [
        {
            id: "featured-faq-1",
            question: "What makes this a featured project?",
            answer: "This project is featured because it showcases exceptional design innovation, premium materials, and outstanding craftsmanship. It represents the pinnacle of our design capabilities and serves as an inspiration for future projects."
        },
        {
            id: "featured-faq-2",
            question: "Can I get a similar design for my home?",
            answer: "Absolutely! Our featured projects serve as design inspiration. We can adapt the core design elements, materials, and layout to suit your specific space, budget, and personal preferences while maintaining the essence of the original design."
        },
        {
            id: "featured-faq-3",
            question: "What premium materials were used in this project?",
            answer: "This featured project incorporates high-end materials including premium wood finishes, natural stone, designer fixtures, and custom-made furniture pieces. We work with top-tier suppliers to ensure the highest quality materials are used throughout."
        },
        {
            id: "featured-faq-4",
            question: "How long did this featured project take to complete?",
            answer: "Featured projects typically take longer due to their complexity and the attention to detail required. The timeline varies based on project scope, but we maintain regular communication and provide detailed progress updates throughout the construction process."
        },
        {
            id: "featured-faq-5",
            question: "Can I visit this featured project?",
            answer: "Yes, we can arrange visits to completed featured projects with prior appointment. This allows you to experience the quality and craftsmanship firsthand. We also provide virtual tours and detailed documentation for remote viewing."
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
                    onClick={() => navigate("/projects/featured")}
                    startIcon={<ArrowBack />}
                >
                    Back to Featured Projects
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
        <Container maxWidth="xl" sx={{
            py: 0,
        }}>
            {/* Back Button */}
            <Button
                startIcon={<ArrowBack />}
                onClick={() => navigate("/projects/featured")}
                sx={{
                    px: 0,
                    py: 0,
                    mt: { xs: 0, sm: 0, md: 6 }, // 0 on mobile/small, 6 on medium and up
                }}            >
                Back to Featured Projects
            </Button>

            {/* Project Title */}
            <Box sx={{ mb: 3 }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
                    <Typography variant="h3" component="h1" sx={{ fontWeight: 700 }}>
                        {project.title}
                    </Typography>
                </Box>
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
                                    navigate(`/projects/featured/${id}/gallery`)
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
                        navigate(`/projects/featured/${id}/gallery`)
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
                                <Chip label={project.style} color="primary" variant="outlined" />
                                <Chip label="Featured" color="primary" variant="outlined" />
                                <Chip label="Premium" color="primary" variant="outlined" />
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
                                        Premium
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
                                Get This Design
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
                                            Premium Design with Luxury Finishes
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
                <Box sx={{ textAlign: 'left', mb: 4 }}>
                    <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
                        Frequently Asked Questions
                    </Typography>
                    <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
                        Common questions about this featured project
                    </Typography>

                </Box>

                <Box sx={{ width: '100%' }}>
                    {featuredFAQs.map((faq) => (
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
                                <Typography variant="h6" sx={{ fontWeight: 600 }}>
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
