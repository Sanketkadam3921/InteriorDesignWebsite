import React, { useState } from 'react';
import {
    Box,
    Typography,
    useTheme,
    useMediaQuery,
    IconButton,
    Container,
    Grid
} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const inspirationItems = [
    { title: 'Living Room', image: '/Home_Page/Inspiration/LivingRoom.jpg' },
    { title: 'Master Bedroom', image: '/Home_Page/Inspiration/Master_Bedroom.jpg' },
    { title: 'False Ceiling', image: '/Home_Page/Inspiration/False_Ceiling.jpeg' },
    { title: 'KalaKruti Studio Designs', image: '/Home_Page/Inspiration/KalaKruti_Studio_Designs.jpg' },
    { title: 'Kitchen', image: '/Home_Page/Inspiration/Kitchen.jpg' },
    { title: 'Wardrobe', image: '/Home_Page/Inspiration/Wardrobe.jpeg' },
    { title: 'Kids Room', image: '/Home_Page/Inspiration/Kids_Room.jpeg' },
    { title: 'Home Office', image: '/Home_Page/Inspiration/Home_Office.jpeg' },
    { title: 'Guest Bedroom', image: '/Home_Page/Inspiration/Guest_Bedroom.jpg' },
    { title: 'Foyer', image: '/Home_Page/Inspiration/Foyer.jpeg' },
    { title: 'Dining Room', image: '/Home_Page/Inspiration/Dinning_Room.jpeg' },
    { title: 'Bathroom', image: '/Home_Page/Inspiration/Bathroom.jpeg' },
];

export default function HomeInspiration() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const [startIndex, setStartIndex] = useState(0);
    const [currentInspirationIndex, setCurrentInspirationIndex] = useState(0);
    const itemsPerPage = 6;

    const handleNext = () => {
        if (startIndex + itemsPerPage < inspirationItems.length) {
            setStartIndex(startIndex + itemsPerPage);
        }
    };

    const handlePrev = () => {
        if (startIndex - itemsPerPage >= 0) {
            setStartIndex(startIndex - itemsPerPage);
        }
    };

    const handleMobileNext = () => {
        setCurrentInspirationIndex((prevIndex) =>
            prevIndex === inspirationItems.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handleMobilePrev = () => {
        setCurrentInspirationIndex((prevIndex) =>
            prevIndex === 0 ? inspirationItems.length - 1 : prevIndex - 1
        );
    };

    const visibleItems = inspirationItems.slice(startIndex, startIndex + itemsPerPage);

    return (
        <Box sx={{ py: { xs: 4, md: 10 }, backgroundColor: '#f9f9f9' }}>
            <Container maxWidth="xl">
                <Typography variant="h3" textAlign="center" fontWeight={700} mb={2} sx={{
                    fontSize: { xs: '1.8rem', md: '3rem' } // 👈 smaller text for mobile
                }}>
                    Inspiration for home interior designs
                </Typography>
                <Typography variant="h6" textAlign="center" color="text.secondary" mb={6}>
                    Give your home a new look with these interior design ideas curated for you
                </Typography>

                {isMobile ? (
                    // Mobile: carousel
                    <Box sx={{ position: 'relative', width: '100%' }}>
                        {/* Inspiration Card */}
                        <Box sx={{
                            borderRadius: 3,
                            overflow: 'hidden',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                            '&:hover': {
                                transform: 'translateY(-4px)',
                                boxShadow: '0 6px 20px rgba(0,0,0,0.12)',
                            },
                        }}>
                            <Box
                                component="img"
                                src={inspirationItems[currentInspirationIndex].image}
                                alt={inspirationItems[currentInspirationIndex].title}
                                sx={{
                                    width: '100%',
                                    height: 250,
                                    objectFit: 'cover'
                                }}
                            />
                            <Box sx={{
                                p: 3,
                                background: '#fff',
                                textAlign: 'center'
                            }}>
                                <Typography
                                    variant="h6"
                                    fontWeight={600}
                                    sx={{
                                        color: theme.palette.text.primary,
                                        fontSize: '1.3rem'
                                    }}
                                >
                                    {inspirationItems[currentInspirationIndex].title}
                                </Typography>
                            </Box>
                        </Box>

                        {/* Navigation Buttons */}
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            mt: 3,
                            gap: 2
                        }}>
                            <IconButton
                                onClick={handleMobilePrev}
                                sx={{
                                    backgroundColor: theme.palette.primary.main,
                                    color: 'white',
                                    '&:hover': {
                                        backgroundColor: theme.palette.primary.dark,
                                    },
                                }}
                            >
                                <ArrowBackIcon />
                            </IconButton>

                            {/* Dots indicator */}
                            <Box sx={{ display: 'flex', gap: 1 }}>
                                {inspirationItems.map((_, index) => (
                                    <Box
                                        key={index}
                                        sx={{
                                            width: 8,
                                            height: 8,
                                            borderRadius: '50%',
                                            backgroundColor: index === currentInspirationIndex
                                                ? theme.palette.primary.main
                                                : theme.palette.grey[300],
                                            cursor: 'pointer',
                                            transition: 'all 0.3s ease',
                                        }}
                                        onClick={() => setCurrentInspirationIndex(index)}
                                    />
                                ))}
                            </Box>

                            <IconButton
                                onClick={handleMobileNext}
                                sx={{
                                    backgroundColor: theme.palette.primary.main,
                                    color: 'white',
                                    '&:hover': {
                                        backgroundColor: theme.palette.primary.dark,
                                    },
                                }}
                            >
                                <ArrowForwardIcon />
                            </IconButton>
                        </Box>

                        {/* Inspiration counter */}
                        <Typography
                            variant="body2"
                            color="text.secondary"
                            textAlign="center"
                            sx={{ mt: 1 }}
                        >
                            {currentInspirationIndex + 1} of {inspirationItems.length}
                        </Typography>
                    </Box>
                ) : (
                    // Desktop: Perfect fit container layout
                    <Box sx={{ position: 'relative', height: 500 }}>
                        <Box
                            sx={{
                                display: 'grid',
                                gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr',
                                gridTemplateRows: '1fr 1fr',
                                gap: 1,
                                height: '100%',
                                width: '100%',
                                transition: 'all 0.5s ease-in-out',
                            }}
                        >
                            {visibleItems.map((item, i) => {
                                let gridArea;

                                // Perfect fit layout for 6 items
                                if (i === 0) {
                                    gridArea = '1 / 1 / 3 / 3'; // Top-left, spans 2 rows and 2 columns
                                } else if (i === 1) {
                                    gridArea = '1 / 3 / 2 / 4'; // Top row, 3rd column
                                } else if (i === 2) {
                                    gridArea = '1 / 4 / 2 / 5'; // Top row, 4th column
                                } else if (i === 3) {
                                    gridArea = '1 / 5 / 2 / 6'; // Top row, 5th column
                                } else if (i === 4) {
                                    gridArea = '2 / 3 / 3 / 5'; // Bottom row, spans 2 columns
                                } else if (i === 5) {
                                    gridArea = '2 / 5 / 3 / 6'; // Bottom row, last column
                                }

                                return (
                                    <Box
                                        key={`${startIndex}-${i}`}
                                        sx={{
                                            position: 'relative',
                                            overflow: 'hidden',
                                            gridArea: gridArea,
                                            width: '100%',
                                            height: '100%',
                                            transition: 'all 0.5s ease-in-out',
                                            '&:hover': {
                                                transform: 'scale(1.02)',
                                                zIndex: 2,
                                            }
                                        }}
                                    >
                                        <Box
                                            component="img"
                                            src={item.image}
                                            alt={item.title}
                                            sx={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                objectPosition: 'center',
                                                display: 'block',
                                            }}
                                        />
                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                bottom: 0,
                                                left: 0,
                                                right: 0,
                                                background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                                                color: 'white',
                                                p: 2,
                                                display: 'flex',
                                                alignItems: 'flex-end',
                                                minHeight: '50px',
                                            }}
                                        >
                                            <Typography
                                                fontWeight={600}
                                                variant={i === 0 ? "h5" : "h6"}
                                                sx={{
                                                    color: 'white',
                                                    textShadow: '0 2px 4px rgba(0,0,0,0.8)',
                                                    fontSize: i === 0 ? '1.4rem' : '1rem',
                                                }}
                                            >
                                                {item.title}
                                            </Typography>
                                        </Box>
                                    </Box>
                                );
                            })}
                        </Box>

                        {/* Navigation Arrows */}
                        {startIndex > 0 && (
                            <IconButton
                                onClick={handlePrev}
                                sx={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: -30,
                                    transform: 'translateY(-50%)',
                                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                    backdropFilter: 'blur(10px)',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                                    width: 56,
                                    height: 56,
                                    zIndex: 10, // 👈 keep arrows always on top
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        backgroundColor: 'rgba(255, 255, 255, 1)',
                                        transform: 'translateY(-50%) scale(1.1)',
                                        boxShadow: '0 6px 25px rgba(0,0,0,0.2)',
                                    },
                                }}
                            >
                                <ChevronLeftIcon sx={{ fontSize: 28 }} />
                            </IconButton>
                        )}

                        {startIndex + itemsPerPage < inspirationItems.length && (
                            <IconButton
                                onClick={handleNext}
                                sx={{
                                    position: 'absolute',
                                    top: '50%',
                                    right: -30,
                                    transform: 'translateY(-50%)',
                                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                    backdropFilter: 'blur(10px)',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                                    width: 56,
                                    height: 56,
                                    zIndex: 10, // 👈 keep arrows above hovered images
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        backgroundColor: 'rgba(255, 255, 255, 1)',
                                        transform: 'translateY(-50%) scale(1.1)',
                                        boxShadow: '0 6px 25px rgba(0,0,0,0.2)',
                                    },
                                }}
                            >
                                <ChevronRightIcon sx={{ fontSize: 28 }} />
                            </IconButton>
                        )}
                    </Box>
                )}
            </Container>
        </Box>
    );
}