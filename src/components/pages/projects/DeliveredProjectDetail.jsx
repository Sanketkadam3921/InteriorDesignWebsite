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
  CardContent,
} from "@mui/material";
import {
  ArrowBack,
  LocationOn,
  ExpandMore,
  QuestionAnswer,
} from "@mui/icons-material";
import { useNavigate, useParams } from "react-router-dom";
import { deliveredProjectsDetails } from "../../../data/projects/deliveredProjects";

export default function DeliveredProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const theme = useTheme();
  const project = deliveredProjectsDetails[id];

  const deliveredFAQs = [
    {
      id: "delivered-faq-1",
      question: "Can I get a similar design for my own home?",
      answer:
        "Yes! You can absolutely get a similar design inspired by this delivered project. Our design team can recreate the theme, layout, and finishes while customizing it to your budget, space, and personal preferences.",
    },

    {
      id: "delivered-faq-3",
      question:
        "Are all the materials and finishes used in this project still available?",
      answer:
        "Most of the materials, finishes, and furnishings used in delivered projects remain available through our trusted vendors. However, if any specific item has been discontinued, we'll suggest the closest alternatives that maintain the same quality and aesthetic.",
    },
    {
      id: "delivered-faq-4",
      question:
        "Can the same design be customized for different property sizes?",
      answer:
        "Absolutely! Our design concepts are flexible. Whether your property is smaller or larger, our team can adapt the spatial layout, furniture, and décor elements to suit your floor plan and requirements.",
    },
  ];

  if (!project) {
    return (
      <Container maxWidth="lg" sx={{ py: 6, textAlign: "center" }}>
        <Typography variant="h4" color="error" gutterBottom>
          Project not found
        </Typography>
        <Button
          variant="contained"
          onClick={() => navigate("/projects/delivered")}
          startIcon={<ArrowBack />}
        >
          Back to Delivered Projects
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
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: theme.palette.background.default,
        pt: { xs: 2, sm: 3, md: 4 },
        pb: { xs: 4, sm: 6, md: 8 },
      }}
    >
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        {/* Back Button */}
        <Button
          startIcon={<ArrowBack />}
          onClick={() => navigate("/projects/delivered")}
          sx={{
            mb: 4,
            px: 0,
            color: theme.palette.text.secondary,
            "&:hover": {
              backgroundColor: theme.palette.action.hover,
              color: theme.palette.text.primary,
            },
            fontWeight: 500,
            textTransform: "none",
            fontSize: "1rem",
          }}
        >
          Back to Delivered Projects
        </Button>

        {/* Project Title */}
        <Box sx={{ mb: 3 }}>
          <Typography
            variant="h3"
            component="h1"
            sx={{ fontWeight: 700, mb: 1.3 }}
          >
            {project.title}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            {project.description}
          </Typography>
        </Box>

        {/* ----------- ImageList Collage Section ----------- */}
        <Box sx={{ position: "relative", mb: 6 }}>
          {project.images.length === 4 ? (
            // Custom layout for 4 images: 2x2 grid on mobile, original layout on desktop
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "repeat(2, 1fr)", md: "repeat(3, 1fr)" },
                gridTemplateRows: { xs: "repeat(2, 1fr)", md: "repeat(2, 1fr)" },
                gap: { xs: 1, sm: 1.5, md: 2 },
                borderRadius: 2,
                overflow: "hidden",
              }}
            >
              {/* Image 1: Bottom Middle (first - center column, bottom row) */}
              <Box
                sx={{
                  gridColumn: { xs: "1", md: "2" },
                  gridRow: { xs: "2", md: "2" },
                  width: "100%",
                  height: { xs: "140px", sm: "220px", md: "400px" },
                  borderRadius: "10px",
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.02)",
                  },
                }}
                onClick={() => navigate(`/projects/delivered/${id}/gallery`)}
              >
                <img
                  src={`${project.images[0]}?w=600&fit=crop&auto=format`}
                  srcSet={`${project.images[0]}?w=600&fit=crop&auto=format&dpr=2 2x`}
                  alt={`${project.title}-0`}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>
              {/* Image 2: Right (second - right column) */}
              <Box
                sx={{
                  gridColumn: { xs: "2", md: "3" },
                  gridRow: { xs: "1", md: "1" },
                  width: "100%",
                  height: { xs: "140px", sm: "220px", md: "400px" },
                  borderRadius: "10px",
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.02)",
                  },
                }}
                onClick={() => navigate(`/projects/delivered/${id}/gallery`)}
              >
                <img
                  src={`${project.images[1]}?w=600&fit=crop&auto=format`}
                  srcSet={`${project.images[1]}?w=600&fit=crop&auto=format&dpr=2 2x`}
                  alt={`${project.title}-1`}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>
              {/* Image 3: Left (third - left column) */}
              <Box
                sx={{
                  gridColumn: { xs: "1", md: "1" },
                  gridRow: { xs: "1", md: "1" },
                  width: "100%",
                  height: { xs: "140px", sm: "220px", md: "400px" },
                  borderRadius: "10px",
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.02)",
                  },
                }}
                onClick={() => navigate(`/projects/delivered/${id}/gallery`)}
              >
                <img
                  src={`${project.images[2]}?w=600&fit=crop&auto=format`}
                  srcSet={`${project.images[2]}?w=600&fit=crop&auto=format&dpr=2 2x`}
                  alt={`${project.title}-2`}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>
              {/* Image 4: Top Middle (fourth - center column, top row) */}
              <Box
                sx={{
                  gridColumn: { xs: "2", md: "2" },
                  gridRow: { xs: "2", md: "1" },
                  width: "100%",
                  height: { xs: "140px", sm: "220px", md: "400px" },
                  borderRadius: "10px",
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.02)",
                  },
                }}
                onClick={() => navigate(`/projects/delivered/${id}/gallery`)}
              >
                <img
                  src={`${project.images[3]}?w=600&fit=crop&auto=format`}
                  srcSet={`${project.images[3]}?w=600&fit=crop&auto=format&dpr=2 2x`}
                  alt={`${project.title}-3`}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>
            </Box>
          ) : (
            // Default layout for other cases - Compact 2-column grid for mobile
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "repeat(2, 1fr)", md: "repeat(3, 1fr)" },
                gap: { xs: 1, sm: 1.5, md: 2 },
                borderRadius: 2,
                overflow: "hidden",
              }}
            >
              {project.images.slice(0, 6).map((img, idx) => (
                <Box
                  key={idx}
                  sx={{
                    width: "100%",
                    height: { xs: "140px", sm: "220px", md: "400px" },
                    borderRadius: "10px",
                    overflow: "hidden",
                    cursor: "pointer",
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.02)",
                    },
                  }}
                  onClick={() => navigate(`/projects/delivered/${id}/gallery`)}
                >
                  <img
                    src={`${img}?w=600&fit=crop&auto=format`}
                    srcSet={`${img}?w=600&fit=crop&auto=format&dpr=2 2x`}
                    alt={`${project.title}-${idx}`}
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              ))}
            </Box>
          )}

          {/* Floating "See All" Button */}
          <Button
            variant="contained"
            size="medium"
            onClick={() => navigate(`/projects/delivered/${id}/gallery`)}
            sx={{
              position: "absolute",
              bottom: { xs: 10, md: 20 },
              right: { xs: 15, md: 30 },
              backgroundColor: "rgba(0,0,0,0.7)",
              color: "#fff",
              borderRadius: "25px",
              px: { xs: 2, md: 3 },
              py: { xs: 0.5, md: 1 },
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.5px",
              fontSize: { xs: "0.75rem", md: "0.85rem" },
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
          <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
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
                <Chip
                  label={project.style}
                  color="success"
                  variant="outlined"
                />
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
                <Typography variant="body1">{project.location}</Typography>
              </Box>

              {/* CTA Button */}
            </Card>

            {/* Card 2 - Project Details */}
          </Box>
        </Box>
        {/* FAQs Section */}
        <Box sx={{ mt: 8 }}>
          <Box sx={{ textAlign: "left", mb: 4 }}>
            <Typography
              variant="h4"
              component="h2"
              gutterBottom
              sx={{ fontWeight: 600 }}
            >
              Frequently Asked Questions
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ mb: 3 }}>
              Common questions about this delivered project
            </Typography>
          </Box>

          <Box sx={{ width: "100%" }}>
            {deliveredFAQs.map((faq) => (
              <Accordion
                key={faq.id}
                sx={{
                  mb: 2,
                  "&:before": {
                    display: "none",
                  },
                  boxShadow: theme.shadows[2],
                  "&:hover": {
                    boxShadow: theme.shadows[4],
                  },
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  sx={{
                    backgroundColor: theme.palette.background.paper,
                    "&:hover": {
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
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ lineHeight: 1.7 }}
                  >
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
