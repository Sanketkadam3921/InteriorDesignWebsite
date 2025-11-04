import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
    Container,
    Typography,
    Box,
    Button,
    ImageList,
    ImageListItem,
    useTheme,
    Modal,
    Backdrop,
    Fade,
    IconButton,
    Card,
    CardMedia,
} from "@mui/material";
import { ArrowBack, Close, NavigateBefore, NavigateNext } from "@mui/icons-material";
import { masterBedroomDesignDetails } from './master-bedroom';
import { kitchenDesignDetails } from './kitchen/kitchenData';
import { bathroomDesignDetails } from './bathroom';
import { livingroomDesignDetails } from './living-room/living-roomData';
import { wardrobeDesignDetails } from './wardrobe';
import { poojaroomDesignDetails } from './pooja-room';
import { tvunitDesignDetails } from './tv-unit';
import { falseceilingDesignDetails } from './false-ceiling';
import { kidsbedroomDesignDetails } from './kids-bedroom';
import { balconyDesignDetails } from './balcony';
import { diningroomDesignDetails } from './dining-room';
import { foyerDesignDetails } from './foyer';
import { homeslivspaceDesignDetails } from './homes-livspace';
import { homeofficeDesignDetails } from './home-office';
import { guestbedroomDesignDetails } from './guest-bedroom';
import { windowDesignDetails } from './window';
import { flooringDesignDetails } from './flooring';
import { walldecorDesignDetails } from './wall-decor';
import { wallpaintDesignDetails } from './wall-paint';
import { wallpaperDesignDetails } from './wallpaper';
import { tileDesignDetails } from './tile';
import { studyroomDesignDetails } from './study-room';
import { kitchensinksDesignDetails } from './kitchen-sinks';
import { spacesavingDesignDetails } from './space-saving';
import { doorDesignDetails } from './door';
import { staircaseDesignDetails } from './staircase';
import { crockeryunitDesignDetails } from './crockery-unit';
import { homebarDesignDetails } from './home-bar';

export default function DesignGallery() {
    const { category, id } = useParams();
    const navigate = useNavigate();
    const theme = useTheme();
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Comprehensive design data - same as DesignDetail
    const designsData = {
        "master-bedroom": masterBedroomDesignDetails,
        "kitchen": kitchenDesignDetails,
        "bathroom": bathroomDesignDetails,
        "living-room": livingroomDesignDetails,
        "wardrobe": wardrobeDesignDetails,
        "pooja-room": poojaroomDesignDetails,
        "tv-unit": tvunitDesignDetails,
        "false-ceiling": falseceilingDesignDetails,
        "kids-bedroom": kidsbedroomDesignDetails,
        "balcony": balconyDesignDetails,
        "dining-room": diningroomDesignDetails,
        "foyer": foyerDesignDetails,
        "homes-livspace": homeslivspaceDesignDetails,
        "home-office": homeofficeDesignDetails,
        "guest-bedroom": guestbedroomDesignDetails,
        "window": windowDesignDetails,
        "flooring": flooringDesignDetails,
        "wall-decor": walldecorDesignDetails,
        "wall-paint": wallpaintDesignDetails,
        "wallpaper": wallpaperDesignDetails,
        "tile": tileDesignDetails,
        "study-room": studyroomDesignDetails,
        "kitchen-sinks": kitchensinksDesignDetails,
        "space-saving": spacesavingDesignDetails,
        "door": doorDesignDetails,
        "staircase": staircaseDesignDetails,
        "crockery-unit": crockeryunitDesignDetails,
        "home-bar": homebarDesignDetails,
    };

    const design = designsData[category]?.[id] || {
        id: id,
        title: 'Design Not Found',
        category: category,
        style: 'Unknown',
        price: 'N/A',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800',
        description: 'This design could not be found.',
        images: ['https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800'],
        specifications: {},
        sections: [],
    };

    const handleImageClick = (image, index) => {
        setSelectedImage(image);
        setCurrentImageIndex(index);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
    };

    const handlePreviousImage = () => {
        const images = design.images || [design.image];
        const newIndex = currentImageIndex > 0 ? currentImageIndex - 1 : images.length - 1;
        setCurrentImageIndex(newIndex);
        setSelectedImage(images[newIndex]);
    };

    const handleNextImage = () => {
        const images = design.images || [design.image];
        const newIndex = currentImageIndex < images.length - 1 ? currentImageIndex + 1 : 0;
        setCurrentImageIndex(newIndex);
        setSelectedImage(images[newIndex]);
    };

    if (!design || design.title === 'Design Not Found') {
        return (
            <Container maxWidth="lg" sx={{ py: 6, textAlign: "center" }}>
                <Typography variant="h4" color="error" gutterBottom>
                    Design not found
                </Typography>
                <Button
                    variant="contained"
                    onClick={() => navigate(`/designs/${category}`)}
                    startIcon={<ArrowBack />}
                >
                    Back to Design Category
                </Button>
            </Container>
        );
    }

    const images = design.images || [design.image];

    return (
        <Container maxWidth="xl" sx={{ py: 6 }}>
            {/* Back Button */}
            <Button
                startIcon={<ArrowBack />}
                onClick={() => navigate(`/designs/${category}/${id}`)}
                sx={{ mb: 4 }}
            >
                Back to Design Details
            </Button>

            {/* Gallery Title */}
            <Box sx={{ textAlign: "center", mb: 6 }}>
                <Typography
                    variant="h3"
                    component="h1"
                    sx={{
                        fontWeight: 700,
                        mb: 2,
                        color: theme.palette.text.primary,
                    }}
                >
                    {design.title} - Gallery
                </Typography>
                <Typography
                    variant="h6"
                    color="text.secondary"
                    sx={{ maxWidth: 600, mx: "auto", lineHeight: 1.6 }}
                >
                    Explore all {images.length} images from this design
                </Typography>
            </Box>

            {/* Image Gallery - Display images in large view one below another */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
                {images.map((img, idx) => (
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
                            alt={`${design.title} - Image ${idx + 1}`}
                            sx={{
                                width: "100%",
                                height: "auto",
                                maxHeight: "80vh",
                                objectFit: "contain",
                            }}
                        />
                        <Box sx={{ p: 2, textAlign: "center" }}>
                            <Typography variant="body2" color="text.secondary">
                                Image {idx + 1} of {images.length}
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
                                zIndex: 1,
                                "&:hover": {
                                    backgroundColor: "rgba(0,0,0,0.7)",
                                },
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
                                zIndex: 1,
                                "&:hover": {
                                    backgroundColor: "rgba(0,0,0,0.7)",
                                },
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
                                zIndex: 1,
                                "&:hover": {
                                    backgroundColor: "rgba(0,0,0,0.7)",
                                },
                            }}
                        >
                            <NavigateNext />
                        </IconButton>

                        {/* Image */}
                        <img
                            src={selectedImage}
                            alt={`${design.title} - Full View`}
                            style={{
                                maxWidth: "100%",
                                maxHeight: "100%",
                                objectFit: "contain",
                                borderRadius: "8px",
                            }}
                        />

                        {/* Image Counter */}
                        <Box
                            sx={{
                                position: "absolute",
                                bottom: 20,
                                left: "50%",
                                transform: "translateX(-50%)",
                                color: "white",
                                backgroundColor: "rgba(0,0,0,0.5)",
                                px: 2,
                                py: 1,
                                borderRadius: 2,
                            }}
                        >
                            <Typography variant="body2">
                                {currentImageIndex + 1} of {images.length}
                            </Typography>
                        </Box>
                    </Box>
                </Fade>
            </Modal>
        </Container>
    );
}
