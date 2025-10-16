import React, { useState } from 'react';
import {
    Box,
    Card,
    CardMedia,
    CardContent,
    Typography,
    Button,
    IconButton,
    useTheme,
    useMediaQuery,
    Chip
} from '@mui/material';
import { ArrowBack, ArrowForward, Star } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { featuredProjects } from '../../data/projects/featuredProjects';

export default function FeaturedProjectsCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    const navigate = useNavigate();

    // Get first 5 featured projects
    const displayProjects = featuredProjects.slice(0, 5);

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === displayProjects.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? displayProjects.length - 1 : prevIndex - 1
        );
    };

    const handleProjectClick = (projectId) => {
        navigate(`/projects/featured/${projectId}`);
    };

    if (isMobile) {
        // Mobile carousel view - show one project at a time
        return (
            <Box sx={{ position: 'relative', width: '100%' }}>
                {/* Project Card */}
                <Card
                    sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        minHeight: '450px',
                        width: '100%',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease-in-out',
                        '&:hover': {
                            transform: 'translateY(-4px)',
                            boxShadow: theme.shadows[8],
                        },
                    }}
                    onClick={() => handleProjectClick(displayProjects[currentIndex].id)}
                >
                    <Box sx={{ position: 'relative' }}>
                        <CardMedia
                            component="img"
                            height="250"
                            image={displayProjects[currentIndex].image}
                            alt={displayProjects[currentIndex].title}
                            sx={{ objectFit: 'cover' }}
                        />
                        {/* Image count chip */}
                        <Chip
                            label={`${displayProjects[currentIndex].images.length} Images`}
                            size="small"
                            sx={{
                                position: 'absolute',
                                bottom: 10,
                                right: 10,
                                backgroundColor: 'rgba(0,0,0,0.7)',
                                color: 'white',
                                fontWeight: 600,
                            }}
                        />
                        {/* Project status */}
                        <Chip
                            label={displayProjects[currentIndex].status}
                            size="small"
                            color="primary"
                            sx={{
                                position: 'absolute',
                                top: 10,
                                left: 10,
                                fontWeight: 600,
                            }}
                        />
                        {/* Completed chip */}
                        {displayProjects[currentIndex].isCompleted && (
                            <Chip
                                label="COMPLETED"
                                size="small"
                                color="success"
                                sx={{
                                    position: 'absolute',
                                    top: 10,
                                    right: 10,
                                    fontWeight: 600,
                                }}
                            />
                        )}
                    </Box>

                    <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                        <Typography
                            variant="h6"
                            component="h3"
                            gutterBottom
                            sx={{
                                fontWeight: 600,
                                color: theme.palette.text.primary,
                                lineHeight: 1.3,
                                minHeight: '48px',
                                display: '-webkit-box',
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden',
                            }}
                        >
                            {displayProjects[currentIndex].title}
                        </Typography>

                        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                            {displayProjects[currentIndex].location}
                        </Typography>

                        <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                            {displayProjects[currentIndex].scope}
                        </Typography>

                        <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                            {displayProjects[currentIndex].bhk}
                        </Typography>

                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                            {displayProjects[currentIndex].pricing}
                        </Typography>

                        <Button
                            variant="outlined"
                            fullWidth
                            endIcon={<ArrowForward />}
                            onClick={(e) => {
                                e.stopPropagation();
                                handleProjectClick(displayProjects[currentIndex].id);
                            }}
                            sx={{
                                mt: 'auto',
                                borderColor: theme.palette.primary.main,
                                color: theme.palette.primary.main,
                                fontWeight: 600,
                                py: 1.2,
                                borderRadius: '20px',
                                textTransform: 'uppercase',
                                letterSpacing: '0.5px',
                                '&:hover': {
                                    borderColor: theme.palette.primary.dark,
                                    backgroundColor: theme.palette.action.hover,
                                },
                            }}
                        >
                            View Details
                        </Button>
                    </CardContent>
                </Card>

                {/* Navigation Buttons */}
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    mt: 3,
                    gap: 2
                }}>
                    <IconButton
                        onClick={handlePrev}
                        sx={{
                            backgroundColor: theme.palette.primary.main,
                            color: 'white',
                            '&:hover': {
                                backgroundColor: theme.palette.primary.dark,
                            },
                        }}
                    >
                        <ArrowBack />
                    </IconButton>

                    {/* Dots indicator */}
                    <Box sx={{ display: 'flex', gap: 1 }}>
                        {displayProjects.map((_, index) => (
                            <Box
                                key={index}
                                sx={{
                                    width: 8,
                                    height: 8,
                                    borderRadius: '50%',
                                    backgroundColor: index === currentIndex
                                        ? theme.palette.primary.main
                                        : theme.palette.grey[300],
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                }}
                                onClick={() => setCurrentIndex(index)}
                            />
                        ))}
                    </Box>

                    <IconButton
                        onClick={handleNext}
                        sx={{
                            backgroundColor: theme.palette.primary.main,
                            color: 'white',
                            '&:hover': {
                                backgroundColor: theme.palette.primary.dark,
                            },
                        }}
                    >
                        <ArrowForward />
                    </IconButton>
                </Box>

                {/* Project counter */}
                <Typography
                    variant="body2"
                    color="text.secondary"
                    textAlign="center"
                    sx={{ mt: 1 }}
                >
                    {currentIndex + 1} of {displayProjects.length}
                </Typography>
            </Box>
        );
    }

    // Desktop grid view - show all projects
    return (
        <Box
            sx={{
                display: 'grid',
                gridTemplateColumns: {
                    xs: '1fr',
                    sm: 'repeat(2, 1fr)',
                    md: 'repeat(3, 1fr)',
                    lg: 'repeat(5, 1fr)',
                },
                gap: 3,
                width: '100%',
            }}
        >
            {displayProjects.map((project) => (
                <Card
                    key={project.id}
                    sx={{
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        minHeight: '450px',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease-in-out',
                        '&:hover': {
                            transform: 'translateY(-6px)',
                            boxShadow: theme.shadows[8],
                        },
                    }}
                    onClick={() => handleProjectClick(project.id)}
                >
                    <Box sx={{ position: 'relative' }}>
                        <CardMedia
                            component="img"
                            height="200"
                            image={project.image}
                            alt={project.title}
                            sx={{ objectFit: 'cover' }}
                        />
                        {/* Image count chip */}
                        <Chip
                            label={`${project.images.length} Images`}
                            size="small"
                            sx={{
                                position: 'absolute',
                                bottom: 10,
                                right: 10,
                                backgroundColor: 'rgba(0,0,0,0.7)',
                                color: 'white',
                                fontWeight: 600,
                            }}
                        />
                        {/* Project status */}
                        <Chip
                            label={project.status}
                            size="small"
                            color="primary"
                            sx={{
                                position: 'absolute',
                                top: 10,
                                left: 10,
                                fontWeight: 600,
                            }}
                        />
                        {/* Completed chip */}
                        {project.isCompleted && (
                            <Chip
                                label="COMPLETED"
                                size="small"
                                color="success"
                                sx={{
                                    position: 'absolute',
                                    top: 10,
                                    right: 10,
                                    fontWeight: 600,
                                }}
                            />
                        )}
                    </Box>

                    <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                        <Typography
                            variant="h6"
                            component="h3"
                            gutterBottom
                            sx={{
                                fontWeight: 600,
                                color: theme.palette.text.primary,
                                lineHeight: 1.3,
                                minHeight: '48px',
                                display: '-webkit-box',
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden',
                            }}
                        >
                            {project.title}
                        </Typography>

                        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                            {project.location}
                        </Typography>

                        <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                            {project.scope}
                        </Typography>

                        <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
                            {project.bhk}
                        </Typography>

                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
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
                                mt: 'auto',
                                borderColor: theme.palette.primary.main,
                                color: theme.palette.primary.main,
                                fontWeight: 600,
                                py: 1.2,
                                borderRadius: '20px',
                                textTransform: 'uppercase',
                                letterSpacing: '0.5px',
                                '&:hover': {
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
    );
}