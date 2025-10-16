import React from "react";
import {
    ImageList,
    ImageListItem,
    Button,
    Box,
    Grid,
    Typography,
    Card,
    CardMedia,
    useTheme,
    Chip,
    TextField,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from "@mui/material";
import { LocationOn, ExpandMore, QuestionAnswer } from "@mui/icons-material";
import { useNavigate, useParams } from "react-router-dom";
import { deliveredProjectsDetails } from "../../../data/projects/deliveredProjects";
import ProjectPageLayout from "../../common/ProjectPageLayout";

export default function DeliveredProjectDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const theme = useTheme();
    const project = deliveredProjectsDetails[id];

    const deliveredFAQs = [
        {
            id: "delivered-faq-1",
            question: "Can I get a similar design for my own home?",
            answer: "Yes! You can absolutely get a similar design inspired by this delivered project. Our design team can recreate the theme, layout, and finishes while customizing it to your budget, space, and personal preferences."
        },
        {
            id: "delivered-faq-2",
            question: "Where is this delivered project located?",
            answer: "Each delivered project is located in a specific residential area or city mentioned in the project details above. You can also contact us if you'd like to visit a nearby completed site or explore similar work in your area."
        },
        {
            id: "delivered-faq-3",
            question: "Are all the materials and finishes used in this project still available?",
            answer: "Most of the materials, finishes, and furnishings used in delivered projects remain available through our trusted vendors. However, if any specific item has been discontinued, we'll suggest the closest alternatives that maintain the same quality and aesthetic."
        },
        {
            id: "delivered-faq-4",
            question: "Can the same design be customized for different property sizes?",
            answer: "Absolutely! Our design concepts are flexible. Whether your property is smaller or larger, our team can adapt the spatial layout, furniture, and décor elements to suit your floor plan and requirements."
        },
        {
            id: "delivered-faq-5",
            question: "Do you provide post-completion support or maintenance services?",
            answer: "Yes, we offer post-completion support for delivered projects. This includes assistance with minor modifications, furniture refits, and maintenance guidance to ensure your home stays beautiful and functional for years."
        }
    ];

    if (!project) {
        return (
            <ProjectPageLayout
                title="Project Not Found"
                subtitle="The requested project could not be found."
                backButtonText="Back to Delivered Projects"
                backButtonPath="/projects/delivered"
            >
                <Box sx={{ textAlign: 'center', py: 8 }}>
                    <Typography variant="h6" color="text.secondary">
                        This project does not exist or has been removed.
                    </Typography>
                </Box>
            </ProjectPageLayout>
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
        <ProjectPageLayout
            title={project.title}
            subtitle={project.description}
            backButtonText="Back to Delivered Projects"
            backButtonPath="/projects/delivered"
        >

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
                                    navigate(`/projects/delivered/${id}/gallery`)
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
                        navigate(`/projects/delivered/${id}/gallery`)
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
                                <Chip label={project.style} color="success" variant="outlined" />
                                <Chip label="Luxury" color="success" variant="outlined" />
                                <Chip label="4BHK" color="success" variant="outlined" />
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
                                            2-Door Matte Dark Green Sliding Wardrobe Design
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
                        Common questions about this delivered project
                    </Typography>

                </Box>

                <Box sx={{ width: '100%' }}>
                    {deliveredFAQs.map((faq) => (
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
        </ProjectPageLayout>
    );
}
