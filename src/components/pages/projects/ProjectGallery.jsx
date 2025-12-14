import React, { useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import {
    Container,
    Typography,
    Box,
    Button,
    IconButton,
    Card,
    CardMedia,
    Modal,
    Backdrop,
    Fade,
    useTheme,
} from "@mui/material";
import { ArrowBack, Close, NavigateBefore, NavigateNext } from "@mui/icons-material";
import { deliveredProjectsDetails } from "../../../data/projects/deliveredProjects";

export default function ProjectGallery() {
    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const theme = useTheme();

    const [selectedImage, setSelectedImage] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Extract project type from the current path
    const pathSegments = location.pathname.split("/");
    const projectType = pathSegments[2]; // delivered, upcoming, or featured

    let project = null;
    let backPath = "";

    switch (projectType) {
        case "delivered":
            project = deliveredProjectsDetails[id];
            backPath = `/projects/delivered/${id}`;
            break;
        case "upcoming":
            project = upcomingProjectsDetails[id];
            backPath = `/projects/upcoming/${id}`;
            break;
        case "featured":
            project = featuredProjectsDetails[id];
            backPath = `/projects/featured/${id}`;
            break;
        default:
            break;
    }

    const handleImageClick = (image, index) => {
        setSelectedImage(image);
        setCurrentImageIndex(index);
    };

    const handleCloseModal = () => setSelectedImage(null);

    const handlePreviousImage = () => {
        const newIndex = currentImageIndex > 0 ? currentImageIndex - 1 : project.images.length - 1;
        setCurrentImageIndex(newIndex);
        setSelectedImage(project.images[newIndex]);
    };

    const handleNextImage = () => {
        const newIndex = currentImageIndex < project.images.length - 1 ? currentImageIndex + 1 : 0;
        setCurrentImageIndex(newIndex);
        setSelectedImage(project.images[newIndex]);
    };

    if (!project) {
        return (
            <Container maxWidth="lg" sx={{ py: 6, textAlign: "center" }}>
                <Typography variant="h4" color="error" gutterBottom>
                    Project not found
                </Typography>
                <Button
                    variant="contained"
                    onClick={() => navigate("/projects")}
                    startIcon={<ArrowBack />}
                >
                    Back to Projects
                </Button>
            </Container>
        );
    }

    return (
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 }, pt: { xs: 2, sm: 3, md: 4 }, pb: 6 }}>
            {/* Back Button */}
            <Button
                startIcon={<ArrowBack />}
                onClick={() => navigate(backPath)}
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
                Back to Project Details
            </Button>

            {/* Gallery Title */}
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
                    {project.title} - Gallery
                </Typography>
                <Typography
                    variant="h6"
                    color="text.secondary"
                    sx={{ maxWidth: 600, lineHeight: 1.6 }}
                >
                    Explore all {project.images.length} images from this project
                </Typography>
            </Box>

            {/* Image Gallery */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
                {project.images.map((img, idx) => (
                    <Card
                        key={idx}
                        sx={{
                            borderRadius: 3,
                            overflow: "hidden",
                            boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                            transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                            cursor: "pointer",
                            "&:hover": {
                                transform: "translateY(-4px)",
                                boxShadow: "0 12px 40px rgba(0,0,0,0.18)",
                            },
                        }}
                        onClick={() => handleImageClick(img, idx)}
                    >
                        <CardMedia
                            component="img"
                            image={`${img}?w=1200&fit=crop&auto=format`}
                            alt={`${project.title} - Image ${idx + 1}`}
                            sx={{
                                width: "100%",
                                height: "auto",
                                maxHeight: "80vh",
                                objectFit: "contain",
                            }}
                        />
                        <Box sx={{ p: 2, textAlign: "center" }}>
                            <Typography variant="body2" color="text.secondary">
                                Image {idx + 1} of {project.images.length}
                            </Typography>
                        </Box>
                    </Card>
                ))}
            </Box>

            {/* Full Screen Image Modal */}
            <Modal
                open={!!selectedImage}
                onClose={handleCloseModal}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                    sx: { backgroundColor: "rgba(0,0,0,0.9)" },
                }}
            >
                <Fade in={!!selectedImage}>
                    <Box
                        sx={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            width: "90vw",
                            height: "90vh",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        {/* Close Button */}
                        <IconButton
                            onClick={handleCloseModal}
                            sx={{
                                position: "absolute",
                                top: 20,
                                right: 20,
                                color: "white",
                                backgroundColor: "rgba(0,0,0,0.5)",
                                zIndex: 2,
                                "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
                            }}
                        >
                            <Close />
                        </IconButton>

                        {/* Previous Button */}
                        <IconButton
                            onClick={handlePreviousImage}
                            sx={{
                                position: "absolute",
                                left: 20,
                                top: "50%",
                                transform: "translateY(-50%)",
                                color: "white",
                                backgroundColor: "rgba(0,0,0,0.5)",
                                zIndex: 2,
                                "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
                            }}
                        >
                            <NavigateBefore />
                        </IconButton>

                        {/* Next Button */}
                        <IconButton
                            onClick={handleNextImage}
                            sx={{
                                position: "absolute",
                                right: 20,
                                top: "50%",
                                transform: "translateY(-50%)",
                                color: "white",
                                backgroundColor: "rgba(0,0,0,0.5)",
                                zIndex: 2,
                                "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
                            }}
                        >
                            <NavigateNext />
                        </IconButton>

                        {/* Image */}
                        <img
                            src={selectedImage}
                            alt={`${project.title} - Full View`}
                            style={{
                                maxWidth: "100%",
                                maxHeight: "100%",
                                objectFit: "contain",
                                borderRadius: "8px",
                            }}
                        />

                        {/* Improved Image Counter */}
                        <Box
                            sx={{
                                position: "absolute",
                                bottom: 25,
                                left: "50%",
                                transform: "translateX(-50%)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "#fff",
                                px: 4,
                                py: 1.2,
                                borderRadius: "20px",
                                background: "linear-gradient(135deg, rgba(0,0,0,0.8), rgba(50,50,50,0.6))",
                                border: "1px solid rgba(255,255,255,0.25)",
                                boxShadow: "0 4px 12px rgba(0,0,0,0.5)",
                                backdropFilter: "blur(8px)",
                                fontSize: "1rem",
                                fontWeight: 600,
                                letterSpacing: "0.7px",
                                zIndex: 2,
                            }}
                        >
                            {currentImageIndex + 1} &nbsp;
                            <Typography
                                component="span"
                                sx={{
                                    fontWeight: 400,
                                    opacity: 0.8,
                                    mx: 0.5,
                                }}
                            >
                                /
                            </Typography>
                            &nbsp;{project.images.length}
                        </Box>
                    </Box>
                </Fade>
            </Modal>
        </Container>
    );
}
