import React, { useState } from 'react';
import {
    Box,
    Typography,
    useTheme,
    useMediaQuery,
    IconButton,
    Dialog,
    DialogContent,
    DialogActions,
    Button,
    Chip
} from '@mui/material';
import { ArrowBack, Close, NavigateBefore, NavigateNext, ZoomIn } from '@mui/icons-material';
import { useNavigate, useParams } from 'react-router-dom';
import ProjectPageLayout from '../../common/ProjectPageLayout';

export default function ProjectGallery({ projectData, projectType, projectTitle }) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const navigate = useNavigate();
    const { id } = useParams();
    const [selectedImage, setSelectedImage] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const project = projectData[id];

    if (!project) {
        return (
            <ProjectPageLayout
                title="Project Not Found"
                subtitle="The requested project could not be found."
                backButtonText={`Back to ${projectType} Projects`}
                backButtonPath={`/projects/${projectType}`}
            >
                <Box sx={{ textAlign: 'center', py: 8 }}>
                    <Typography variant="h6" color="text.secondary">
                        This project does not exist or has been removed.
                    </Typography>
                </Box>
            </ProjectPageLayout>
        );
    }

    const handleImageClick = (imageIndex) => {
        setSelectedImage(project.images[imageIndex]);
        setCurrentImageIndex(imageIndex);
    };

    const handleCloseDialog = () => {
        setSelectedImage(null);
    };

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

    const getBackButtonText = () => {
        switch (projectType) {
            case 'featured':
                return 'Back to Featured Project';
            case 'delivered':
                return 'Back to Delivered Project';
            case 'upcoming':
                return 'Back to Upcoming Project';
            default:
                return 'Back to Project';
        }
    };

    const getBackButtonPath = () => {
        return `/projects/${projectType}/${id}`;
    };

    return (
        <ProjectPageLayout
            title={`${project.title} - Gallery`}
            subtitle={`View all ${project.images.length} images from this ${projectType} project`}
            backButtonText={getBackButtonText()}
            backButtonPath={getBackButtonPath()}
        >
            {/* Project Info Header */}
            <Box sx={{
                mb: 4,
                p: 3,
                backgroundColor: theme.palette.background.paper,
                borderRadius: 2,
                boxShadow: theme.shadows[1]
            }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                    <Typography variant="h5" fontWeight={600}>
                        {project.title}
                    </Typography>
                    <Chip
                        label={projectType.toUpperCase()}
                        color={projectType === 'featured' ? 'primary' : projectType === 'delivered' ? 'success' : 'warning'}
                        size="small"
                    />
                </Box>
                <Typography variant="body1" color="text.secondary">
                    {project.description}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    {project.images.length} images • Click on any image to view in full size
                </Typography>
            </Box>

            {/* Image Grid */}
            <Box sx={{
                display: 'grid',
                gridTemplateColumns: {
                    xs: '1fr',
                    sm: 'repeat(2, 1fr)',
                    md: 'repeat(3, 1fr)',
                    lg: 'repeat(4, 1fr)'
                },
                gap: 2,
                mb: 4
            }}>
                {project.images.map((image, index) => (
                    <Box
                        key={index}
                        sx={{
                            position: 'relative',
                            aspectRatio: '4/3',
                            borderRadius: 2,
                            overflow: 'hidden',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                transform: 'scale(1.02)',
                                boxShadow: theme.shadows[8],
                            }
                        }}
                        onClick={() => handleImageClick(index)}
                    >
                        <Box
                            component="img"
                            src={`${image}?w=600&fit=crop&auto=format`}
                            alt={`${project.title} - Image ${index + 1}`}
                            sx={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                transition: 'transform 0.3s ease',
                            }}
                        />

                        {/* Image Number Overlay */}
                        <Box
                            sx={{
                                position: 'absolute',
                                top: 8,
                                right: 8,
                                backgroundColor: 'rgba(0,0,0,0.7)',
                                color: 'white',
                                borderRadius: '50%',
                                width: 32,
                                height: 32,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '0.8rem',
                                fontWeight: 600,
                            }}
                        >
                            {index + 1}
                        </Box>

                        {/* Zoom Icon Overlay */}
                        <Box
                            sx={{
                                position: 'absolute',
                                bottom: 8,
                                right: 8,
                                backgroundColor: 'rgba(0,0,0,0.7)',
                                color: 'white',
                                borderRadius: '50%',
                                width: 32,
                                height: 32,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                opacity: 0,
                                transition: 'opacity 0.3s ease',
                                '&:hover': {
                                    opacity: 1,
                                }
                            }}
                        >
                            <ZoomIn fontSize="small" />
                        </Box>
                    </Box>
                ))}
            </Box>

            {/* Image Counter */}
            <Box sx={{ textAlign: 'center', mb: 4 }}>
                <Typography variant="body2" color="text.secondary">
                    Showing {project.images.length} images • Click any image to view in full size
                </Typography>
            </Box>

            {/* Full Size Image Dialog */}
            <Dialog
                open={!!selectedImage}
                onClose={handleCloseDialog}
                maxWidth="lg"
                fullWidth
                fullScreen={isMobile}
                sx={{
                    '& .MuiDialog-paper': {
                        backgroundColor: 'rgba(0,0,0,0.9)',
                        color: 'white',
                    }
                }}
            >
                <DialogContent sx={{ p: 0, position: 'relative' }}>
                    {/* Navigation Arrows */}
                    <IconButton
                        onClick={handlePreviousImage}
                        sx={{
                            position: 'absolute',
                            left: 16,
                            top: '50%',
                            transform: 'translateY(-50%)',
                            backgroundColor: 'rgba(255,255,255,0.2)',
                            color: 'white',
                            zIndex: 1,
                            '&:hover': {
                                backgroundColor: 'rgba(255,255,255,0.3)',
                            }
                        }}
                    >
                        <NavigateBefore />
                    </IconButton>

                    <IconButton
                        onClick={handleNextImage}
                        sx={{
                            position: 'absolute',
                            right: 16,
                            top: '50%',
                            transform: 'translateY(-50%)',
                            backgroundColor: 'rgba(255,255,255,0.2)',
                            color: 'white',
                            zIndex: 1,
                            '&:hover': {
                                backgroundColor: 'rgba(255,255,255,0.3)',
                            }
                        }}
                    >
                        <NavigateNext />
                    </IconButton>

                    {/* Close Button */}
                    <IconButton
                        onClick={handleCloseDialog}
                        sx={{
                            position: 'absolute',
                            top: 16,
                            right: 16,
                            backgroundColor: 'rgba(255,255,255,0.2)',
                            color: 'white',
                            zIndex: 1,
                            '&:hover': {
                                backgroundColor: 'rgba(255,255,255,0.3)',
                            }
                        }}
                    >
                        <Close />
                    </IconButton>

                    {/* Full Size Image */}
                    {selectedImage && (
                        <Box
                            component="img"
                            src={`${selectedImage}?w=1200&fit=crop&auto=format`}
                            alt={`${project.title} - Full Size`}
                            sx={{
                                width: '100%',
                                height: 'auto',
                                maxHeight: '90vh',
                                objectFit: 'contain',
                                display: 'block',
                            }}
                        />
                    )}

                    {/* Image Counter in Dialog */}
                    <Box
                        sx={{
                            position: 'absolute',
                            bottom: 16,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            backgroundColor: 'rgba(0,0,0,0.7)',
                            color: 'white',
                            px: 2,
                            py: 1,
                            borderRadius: 2,
                            fontSize: '0.9rem',
                        }}
                    >
                        {currentImageIndex + 1} of {project.images.length}
                    </Box>
                </DialogContent>

                {!isMobile && (
                    <DialogActions sx={{ p: 2, backgroundColor: 'rgba(0,0,0,0.9)' }}>
                        <Button
                            onClick={handleCloseDialog}
                            sx={{ color: 'white' }}
                        >
                            Close
                        </Button>
                    </DialogActions>
                )}
            </Dialog>
        </ProjectPageLayout>
    );
}