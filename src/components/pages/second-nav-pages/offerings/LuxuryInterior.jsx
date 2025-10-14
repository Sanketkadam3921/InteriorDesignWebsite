import React, { useState } from 'react';
import { Box, Typography, Button, useTheme, useMediaQuery, IconButton, Paper, styled, Container, Grid, Card, CardMedia, CardContent, Breadcrumbs, Stack, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ChatIcon from '@mui/icons-material/Chat';
import HomeIcon from '@mui/icons-material/Home';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SettingsIcon from '@mui/icons-material/Settings';
import BuildIcon from '@mui/icons-material/Build';
import PaletteIcon from '@mui/icons-material/Palette';
import StarIcon from '@mui/icons-material/Star';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

// Styled components for luxury interior page
const HeroSection = styled(Box)(({ theme }) => ({
    position: 'relative',
    width: '100%',
    maxWidth: '100vw',
    height: '100vh',
    minHeight: '600px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    [theme.breakpoints.down('lg')]: {
        height: '80vh',
        minHeight: '500px'
    },
    [theme.breakpoints.down('md')]: {
        height: '70vh',
        minHeight: '400px'
    }
}));

const ImageSection = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    backgroundImage: `url('https://www.oppoliahome.com/wp-content/uploads/2023/06/australia-luxury-apartment-project-whole-house-solution-17.webp')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    zIndex: 1
}));

const TextSection = styled(Box)(({ theme }) => ({
    position: 'relative',
    zIndex: 3,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: theme.spacing(4),
    maxWidth: '800px',
    margin: '0 auto',
    [theme.breakpoints.down('lg')]: {
        padding: theme.spacing(3),
        maxWidth: '700px'
    },
    [theme.breakpoints.down('md')]: {
        padding: theme.spacing(2),
        maxWidth: '90%'
    }
}));

const GoldenDivider = styled(Box)(({ theme }) => ({
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    width: '2px',
    backgroundColor: '#B1B6B8', // Theme color
    zIndex: 2,
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}));

const LuxuryText = styled(Typography)(({ theme }) => ({
    fontFamily: 'serif',
    color: 'white',
    textAlign: 'center',
    lineHeight: 1.2,
    marginBottom: theme.spacing(4),
    textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
    [theme.breakpoints.down('lg')]: {
        marginBottom: theme.spacing(3)
    },
    [theme.breakpoints.down('md')]: {
        fontSize: '2rem',
        marginBottom: theme.spacing(2)
    }
}));

const CTAButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#6B7280',
    color: 'white',
    padding: theme.spacing(2, 4),
    borderRadius: '8px',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    textTransform: 'none',
    '&:hover': {
        backgroundColor: '#4B5563',
        transform: 'translateY(-2px)',
        boxShadow: '0 4px 12px rgba(107, 114, 128, 0.3)'
    },
    transition: 'all 0.3s ease'
}));

const FloatingWidget = styled(Box)(({ theme }) => ({
    position: 'fixed',
    bottom: 20,
    right: 20,
    zIndex: 1000,
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1)
}));

const ImageOverlay = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 100%)',
    zIndex: 2
}));

const FloatingElements = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: '20%',
    right: '10%',
    zIndex: 3,
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}));

const FloatingCard = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    backdropFilter: 'blur(10px)',
    borderRadius: '12px',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
    transform: 'rotate(-5deg)',
    marginBottom: theme.spacing(2),
    '&:nth-of-type(2)': {
        transform: 'rotate(3deg)',
        marginLeft: theme.spacing(3)
    },
    '&:nth-of-type(3)': {
        transform: 'rotate(-2deg)',
        marginLeft: theme.spacing(-2)
    }
}));

// New styled components for the second section
const SecondSection = styled(Box)(({ theme }) => ({
    backgroundColor: 'white', // White background
    padding: theme.spacing(8, 0),
    position: 'relative',
    [theme.breakpoints.down('lg')]: {
        padding: theme.spacing(5, 0)
    },
    [theme.breakpoints.down('md')]: {
        padding: theme.spacing(4, 0)
    }
}));

const FleurDeLisIcon = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: theme.spacing(2),
    left: '50%',
    transform: 'translateX(-50%)',
    width: '24px',
    height: '24px',
    background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23B8860B'%3E%3Cpath d='M12 2L13.5 6.5L18 8L13.5 9.5L12 14L10.5 9.5L6 8L10.5 6.5L12 2Z'/%3E%3C/svg%3E") no-repeat center`,
    backgroundSize: 'contain',
    zIndex: 2
}));

const TextColumn = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: theme.spacing(4),
    [theme.breakpoints.down('md')]: {
        padding: theme.spacing(2)
    }
}));

const ImageColumn = styled(Box)(({ theme }) => ({
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(4),
    [theme.breakpoints.down('md')]: {
        padding: theme.spacing(2)
    }
}));

const ArchFrame = styled(Box)(({ theme }) => ({
    position: 'relative',
    width: '100%',
    maxWidth: '500px',
    height: '600px',
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        border: '8px solid #B1B6B8',
        borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 85%, 50% 100%, 0% 85%)',
        zIndex: 2
    },
    '&::after': {
        content: '""',
        position: 'absolute',
        top: '-12px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '20px',
        height: '20px',
        background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23B8860B'%3E%3Cpath d='M12 2L13.5 6.5L18 8L13.5 9.5L12 14L10.5 9.5L6 8L10.5 6.5L12 2Z'/%3E%3C/svg%3E") no-repeat center`,
        backgroundSize: 'contain',
        zIndex: 3
    }
}));

const BedroomImage = styled(Box)(({ theme }) => ({
    width: '100%',
    height: '100%',
    backgroundImage: `url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
    clipPath: 'polygon(0% 0%, 100% 0%, 100% 85%, 50% 100%, 0% 85%)',
    position: 'relative',
    zIndex: 1
}));

const LuxuryHeadline = styled(Typography)(({ theme }) => ({
    fontFamily: 'serif',
    color: 'black',
    lineHeight: 1.2,
    marginBottom: theme.spacing(3),
    [theme.breakpoints.down('md')]: {
        fontSize: '2rem'
    }
}));

const LuxuryDescription = styled(Typography)(({ theme }) => ({
    color: 'black',
    lineHeight: 1.6,
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down('md')]: {
        fontSize: '0.95rem'
    }
}));

const ContactButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#6B7280',
    color: 'white',
    padding: theme.spacing(2, 4),
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: 'bold',
    textTransform: 'none',
    '&:hover': {
        backgroundColor: '#4B5563',
        transform: 'translateY(-2px)',
        boxShadow: '0 4px 12px rgba(107, 114, 128, 0.3)'
    },
    transition: 'all 0.3s ease'
}));

// New styled components for the quadrant section
const QuadrantSection = styled(Box)(({ theme }) => ({
    backgroundColor: '#B1B6B8', // Grey background
    padding: theme.spacing(8, 0),
    position: 'relative',
    [theme.breakpoints.down('lg')]: {
        padding: theme.spacing(5, 0)
    },
    [theme.breakpoints.down('md')]: {
        padding: theme.spacing(4, 0)
    }
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
    fontFamily: 'serif',
    color: 'black',
    textAlign: 'center',
    marginBottom: theme.spacing(6),
    [theme.breakpoints.down('md')]: {
        fontSize: '2rem',
        marginBottom: theme.spacing(4)
    }
}));

const QuadrantContainer = styled(Box)(({ theme }) => ({
    position: 'relative',
    maxWidth: '1000px',
    margin: '0 auto',
    padding: theme.spacing(4),
    [theme.breakpoints.down('md')]: {
        padding: theme.spacing(2)
    }
}));

const QuadrantGrid = styled(Box)(({ theme }) => ({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridTemplateRows: '1fr 1fr',
    gap: 0,
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
        gridTemplateColumns: '1fr',
        gridTemplateRows: 'repeat(4, 1fr)'
    }
}));

const QuadrantItem = styled(Box)(({ theme }) => ({
    padding: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    minHeight: '250px',
    position: 'relative',
    [theme.breakpoints.down('lg')]: {
        padding: theme.spacing(3),
        minHeight: '220px'
    },
    [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(2),
        minHeight: '180px'
    }
}));

const QuadrantTitle = styled(Typography)(({ theme }) => ({
    color: 'black',
    fontWeight: 'bold',
    marginBottom: theme.spacing(1),
    fontSize: '1.2rem',
    [theme.breakpoints.down('md')]: {
        fontSize: '1.1rem',
        marginBottom: theme.spacing(0.5)
    }
}));

const QuadrantDescription = styled(Typography)(({ theme }) => ({
    color: 'black',
    lineHeight: 1.4,
    fontSize: '0.95rem',
    marginTop: theme.spacing(0.5),
    [theme.breakpoints.down('md')]: {
        fontSize: '0.9rem',
        lineHeight: 1.3,
        marginTop: theme.spacing(0.25)
    }
}));

const QuadrantDivider = styled(Box)(({ theme }) => ({
    position: 'absolute',
    backgroundColor: '#6B7280',
    zIndex: 2,
    '&.horizontal': {
        top: '50%',
        left: '5%',
        right: '5%',
        height: '1px',
        transform: 'translateY(-50%)',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    '&.vertical': {
        left: '50%',
        top: '5%',
        bottom: '5%',
        width: '1px',
        transform: 'translateX(-50%)',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    }
}));

const GoldenDot = styled(Box)(({ theme }) => ({
    position: 'absolute',
    width: '8px',
    height: '8px',
    backgroundColor: '#6B7280',
    borderRadius: '50%',
    zIndex: 3,
    '&.center': {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    '&.horizontal-left': {
        top: '50%',
        left: '5%',
        transform: 'translateY(-50%)',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    '&.horizontal-right': {
        top: '50%',
        right: '5%',
        transform: 'translateY(-50%)',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    '&.vertical-top': {
        left: '50%',
        top: '5%',
        transform: 'translateX(-50%)',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    },
    '&.vertical-bottom': {
        left: '50%',
        bottom: '5%',
        transform: 'translateX(-50%)',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    }
}));

const ConsultationButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#6B7280',
    color: 'white',
    padding: theme.spacing(2, 4),
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: 'bold',
    textTransform: 'none',
    marginTop: theme.spacing(4),
    '&:hover': {
        backgroundColor: '#4B5563',
        transform: 'translateY(-2px)',
        boxShadow: '0 4px 12px rgba(107, 114, 128, 0.3)'
    },
    transition: 'all 0.3s ease'
}));

// New styled components for the carousel section
const CarouselSection = styled(Box)(({ theme }) => ({
    backgroundColor: 'white', // White background
    padding: theme.spacing(8, 0),
    [theme.breakpoints.down('lg')]: {
        padding: theme.spacing(5, 0)
    },
    [theme.breakpoints.down('md')]: {
        padding: theme.spacing(4, 0)
    }
}));

const CarouselTitle = styled(Typography)(({ theme }) => ({
    fontFamily: 'serif',
    color: 'black',
    textAlign: 'center',
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
        fontSize: '2rem'
    }
}));

const CarouselSubtitle = styled(Typography)(({ theme }) => ({
    color: 'black',
    textAlign: 'center',
    marginBottom: theme.spacing(6),
    [theme.breakpoints.down('md')]: {
        fontSize: '0.95rem',
        marginBottom: theme.spacing(4)
    }
}));

const CarouselContainer = styled(Box)(({ theme }) => ({
    position: 'relative',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: theme.spacing(0, 4),
    width: '100%',
    overflow: 'hidden',
    [theme.breakpoints.down('md')]: {
        padding: theme.spacing(0, 2),
        maxWidth: '100%'
    }
}));

const CarouselWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing(2),
    position: 'relative',
    width: '100%',
    maxWidth: '100%',
    overflow: 'hidden',
    [theme.breakpoints.down('lg')]: {
        gap: theme.spacing(1.5)
    },
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        gap: theme.spacing(1),
        width: '100%',
        maxWidth: '100%'
    }
}));

const SideImage = styled(Box)(({ theme }) => ({
    width: '200px',
    height: '300px',
    borderRadius: '12px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    filter: 'blur(2px) brightness(0.7)',
    transition: 'all 0.3s ease',
    flexShrink: 0,
    [theme.breakpoints.down('lg')]: {
        width: '160px',
        height: '240px'
    },
    [theme.breakpoints.down('md')]: {
        width: '150px',
        height: '200px'
    },
    [theme.breakpoints.down('sm')]: {
        width: '120px',
        height: '160px'
    }
}));

const CentralImage = styled(Box)(({ theme }) => ({
    width: '400px',
    height: '500px',
    borderRadius: '12px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    border: '3px solid #B1B6B8',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
    transition: 'all 0.3s ease',
    flexShrink: 0,
    [theme.breakpoints.down('lg')]: {
        width: '320px',
        height: '400px'
    },
    [theme.breakpoints.down('md')]: {
        width: '300px',
        height: '400px'
    },
    [theme.breakpoints.down('sm')]: {
        width: '250px',
        height: '320px'
    }
}));

const NavigationArrow = styled(IconButton)(({ theme }) => ({
    position: 'absolute',
    backgroundColor: '#F5F5DC',
    color: '#666',
    width: '48px',
    height: '48px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    zIndex: 3,
    '&:hover': {
        backgroundColor: '#E8E8E8',
        transform: 'scale(1.1)',
        boxShadow: '0 6px 16px rgba(0, 0, 0, 0.15)'
    },
    transition: 'all 0.3s ease',
    '&.left': {
        left: '10%',
        top: '50%',
        transform: 'translateY(-50%)',
        [theme.breakpoints.down('md')]: {
            left: '5%'
        }
    },
    '&.right': {
        right: '10%',
        top: '50%',
        transform: 'translateY(-50%)',
        [theme.breakpoints.down('md')]: {
            right: '5%'
        }
    }
}));

// New styled components for the unique features section
const UniqueSection = styled(Box)(({ theme }) => ({
    backgroundColor: 'white', // White background as requested
    padding: theme.spacing(8, 0),
    [theme.breakpoints.down('lg')]: {
        padding: theme.spacing(5, 0)
    },
    [theme.breakpoints.down('md')]: {
        padding: theme.spacing(4, 0)
    }
}));

const UniqueTitle = styled(Typography)(({ theme }) => ({
    fontFamily: 'serif',
    color: 'black',
    textAlign: 'center',
    marginBottom: theme.spacing(6),
    [theme.breakpoints.down('md')]: {
        fontSize: '2rem',
        marginBottom: theme.spacing(4)
    }
}));

const FeaturesContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: theme.spacing(4),
    maxWidth: '1200px',
    margin: '0 auto',
    padding: theme.spacing(0, 4),
    width: '100%',
    overflow: 'hidden',
    [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
        gap: theme.spacing(3),
        maxWidth: '100%',
        padding: theme.spacing(0, 2)
    }
}));

const FeatureItem = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    minWidth: '180px',
    [theme.breakpoints.down('md')]: {
        minWidth: '150px'
    }
}));

const HexagonalIcon = styled(Box)(({ theme }) => ({
    width: '80px',
    height: '80px',
    position: 'relative',
    marginBottom: theme.spacing(2),
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#B1B6B8',
        clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)',
        border: '2px solid #92A3AB',
        zIndex: 1
    },
    '&::after': {
        content: '""',
        position: 'absolute',
        top: '8px',
        left: '8px',
        right: '8px',
        bottom: '8px',
        backgroundColor: '#92A3AB',
        clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)',
        zIndex: 2
    }
}));

const IconWrapper = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 3,
    color: 'white',
    fontSize: '24px'
}));

const FeatureText = styled(Typography)(({ theme }) => ({
    color: 'black',
    fontSize: '0.9rem',
    fontWeight: '500',
    lineHeight: 1.4,
    [theme.breakpoints.down('md')]: {
        fontSize: '0.85rem'
    }
}));

const UniqueButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#6B7280',
    color: 'white',
    padding: theme.spacing(2, 4),
    borderRadius: '8px',
    fontSize: '1rem',
    fontWeight: 'bold',
    textTransform: 'none',
    marginTop: theme.spacing(4),
    '&:hover': {
        backgroundColor: '#4B5563',
        transform: 'translateY(-2px)',
        boxShadow: '0 4px 12px rgba(107, 114, 128, 0.3)'
    },
    transition: 'all 0.3s ease'
}));

// New styled components for the referral section
const ReferralSection = styled(Box)(({ theme }) => ({
    backgroundColor: '#E8E2D9', // Light beige background as per image
    padding: theme.spacing(8, 0),
    position: 'relative',
    [theme.breakpoints.down('lg')]: {
        padding: theme.spacing(5, 0)
    },
    [theme.breakpoints.down('md')]: {
        padding: theme.spacing(4, 0)
    }
}));

const ReferralContainer = styled(Box)(({ theme }) => ({
    maxWidth: '1200px',
    margin: '0 auto',
    padding: theme.spacing(0, 4),
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    [theme.breakpoints.down('md')]: {
        padding: theme.spacing(0, 2),
        maxWidth: '100%'
    }
}));

const DecorativeBorder = styled(Box)(({ theme }) => ({
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: '60px',
    zIndex: 1,
    '&.left': {
        left: 0,
        background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 100'%3E%3Cdefs%3E%3Cpattern id='diamond' x='0' y='0' width='20' height='20' patternUnits='userSpaceOnUse'%3E%3Cpath d='M10 0L20 10L10 20L0 10Z' fill='none' stroke='%236B7280' stroke-width='1'/%3E%3Ccircle cx='10' cy='10' r='2' fill='%236B7280'/%3E%3Cpath d='M10 2L12 6L10 10L8 6Z' fill='%236B7280'/%3E%3Cpath d='M10 10L12 14L10 18L8 14Z' fill='%236B7280'/%3E%3Cpath d='M2 10L6 8L10 10L6 12Z' fill='%236B7280'/%3E%3Cpath d='M18 10L14 8L10 10L14 12Z' fill='%236B7280'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23diamond)'/%3E%3C/svg%3E") repeat-y`,
        backgroundSize: '60px 20px',
        [theme.breakpoints.down('md')]: {
            display: 'none'
        }
    },
    '&.right': {
        right: 0,
        background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 100'%3E%3Cdefs%3E%3Cpattern id='diamond' x='0' y='0' width='20' height='20' patternUnits='userSpaceOnUse'%3E%3Cpath d='M10 0L20 10L10 20L0 10Z' fill='none' stroke='%236B7280' stroke-width='1'/%3E%3Ccircle cx='10' cy='10' r='2' fill='%236B7280'/%3E%3Cpath d='M10 2L12 6L10 10L8 6Z' fill='%236B7280'/%3E%3Cpath d='M10 10L12 14L10 18L8 14Z' fill='%236B7280'/%3E%3Cpath d='M2 10L6 8L10 10L6 12Z' fill='%236B7280'/%3E%3Cpath d='M18 10L14 8L10 10L14 12Z' fill='%236B7280'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23diamond)'/%3E%3C/svg%3E") repeat-y`,
        backgroundSize: '60px 20px',
        [theme.breakpoints.down('md')]: {
            display: 'none'
        }
    }
}));

const ReferralContent = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: theme.spacing(6, 8),
    position: 'relative',
    zIndex: 2,
    [theme.breakpoints.down('md')]: {
        padding: theme.spacing(4, 2)
    }
}));

const ReferralText = styled(Typography)(({ theme }) => ({
    fontFamily: 'serif',
    color: 'black',
    fontSize: '2.5rem',
    fontWeight: '400',
    lineHeight: 1.3,
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down('md')]: {
        fontSize: '2rem'
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '1.5rem'
    }
}));

const ReferralButton = styled(Button)(({ theme }) => ({
    backgroundColor: '#6B7280', // Grey color
    color: 'white',
    padding: theme.spacing(2, 4),
    borderRadius: '8px',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    textTransform: 'none',
    fontFamily: 'sans-serif',
    '&:hover': {
        backgroundColor: '#4B5563',
        transform: 'translateY(-2px)',
        boxShadow: '0 4px 12px rgba(107, 114, 128, 0.3)'
    },
    transition: 'all 0.3s ease'
}));

export default function LuxuryInterior() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    // Carousel state
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const carouselImages = [
        {
            id: 1,
            central: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
            left: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            right: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
        },
        {
            id: 2,
            central: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
            left: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            right: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
        },
        {
            id: 3,
            central: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
            left: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
            right: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80'
        }
    ];

    const handlePrevious = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === 0 ? carouselImages.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentImageIndex((prevIndex) =>
            prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <Box sx={{
            overflowX: 'hidden',
            width: '100%',
            minHeight: '100vh',
            position: 'relative'
        }}>
            {/* Hero Section */}
            <HeroSection>
                {/* Full Width Background Image */}
                <ImageSection />

                {/* Dark Overlay */}
                <ImageOverlay />

                {/* Text Section */}
                <TextSection>
                    <LuxuryText
                        variant="h2"
                        sx={{
                            fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                            fontWeight: '300'
                        }}
                    >
                        Experience the majesty of bespoke homes
                    </LuxuryText>

                    <CTAButton
                        component={Link}
                        to="/contact"
                        size="large"
                    >
                        Begin your journey
                    </CTAButton>
                </TextSection>
            </HeroSection>

            {/* Second Section - Luxury Description */}
            <SecondSection>
                <FleurDeLisIcon />
                <Container maxWidth="lg">
                    <Grid container spacing={6} sx={{ alignItems: 'center' }}>
                        {/* Text Content */}
                        <Grid item xs={12}>
                            <TextColumn>
                                <LuxuryHeadline
                                    variant="h2"
                                    sx={{
                                        fontSize: { xs: '2rem', md: '2.5rem', lg: '3rem' },
                                        fontWeight: '300'
                                    }}
                                >
                                    An aura of grandeur, a touch of<br />
                                    opulence and a symphony of<br />
                                    thoughtful designs
                                </LuxuryHeadline>

                                <LuxuryDescription
                                    variant="body1"
                                    sx={{
                                        fontSize: { xs: '0.95rem', md: '1rem' }
                                    }}
                                >
                                    We believe that homes are more than what meets the eye. They're a culmination of
                                    scientific designs and passionate craftsmanship woven together to narrate a story.
                                    One that resonates with your being. At KalaKruti, we craft enchanting homes that
                                    redefine luxury and comfort for you.
                                </LuxuryDescription>

                                <ContactButton
                                    component={Link}
                                    to="/contact"
                                    size="large"
                                >
                                    Get in touch
                                </ContactButton>
                            </TextColumn>
                        </Grid>

                    </Grid>
                </Container>
            </SecondSection>

            {/* Quadrant Section - iy */}
            <QuadrantSection>
                <Container maxWidth="lg">
                    <SectionTitle
                        variant="h2"
                        sx={{
                            fontSize: { xs: '2rem', md: '2.5rem', lg: '3rem' },
                            fontWeight: '300'
                        }}
                    >
                        How we bring luxurious homes to life
                    </SectionTitle>

                    <QuadrantContainer>
                        <QuadrantGrid>
                            {/* Top-Left Quadrant */}
                            <QuadrantItem>
                                <QuadrantTitle variant="h6">
                                    Design Consultation
                                </QuadrantTitle>
                                <QuadrantDescription variant="body1">
                                    Immerse yourself in conversations with our design experts as they serve you with the best of aesthetic home solutions.
                                </QuadrantDescription>
                            </QuadrantItem>

                            {/* Top-Right Quadrant */}
                            <QuadrantItem>
                                <QuadrantTitle variant="h6">
                                    Holistic Interior Solution
                                </QuadrantTitle>
                                <QuadrantDescription variant="body1">
                                    Witness the epitome of excellence as we seamlessly orchestrate an end-to-end interior journey for you.
                                </QuadrantDescription>
                            </QuadrantItem>

                            {/* Bottom-Left Quadrant */}
                            <QuadrantItem>
                                <QuadrantTitle variant="h6">
                                    Project Management
                                </QuadrantTitle>
                                <QuadrantDescription variant="body1">
                                    Lean back and watch your dedicated team effortlessly unfold your vision into a luxurious abode.
                                </QuadrantDescription>
                            </QuadrantItem>

                            {/* Bottom-Right Quadrant */}
                            <QuadrantItem>
                                <QuadrantTitle variant="h6">
                                    Styling
                                </QuadrantTitle>
                                <QuadrantDescription variant="body1">
                                    Behold our stylists add a touch of finesse and elevate your space to narrate your essence of living.
                                </QuadrantDescription>
                            </QuadrantItem>

                            {/* Golden Dividers */}
                            <QuadrantDivider className="horizontal" />
                            <QuadrantDivider className="vertical" />

                            {/* Golden Dots */}
                            <GoldenDot className="center" />
                            <GoldenDot className="horizontal-left" />
                            <GoldenDot className="horizontal-right" />
                            <GoldenDot className="vertical-top" />
                            <GoldenDot className="vertical-bottom" />
                        </QuadrantGrid>

                        {/* Call-to-Action Button */}
                        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                            <ConsultationButton
                                component={Link}
                                to="/contact"
                                size="large"
                            >
                                Book a design consultation
                            </ConsultationButton>
                        </Box>
                    </QuadrantContainer>
                </Container>
            </QuadrantSection>

            {/* Carousel Section - Homes by KalaKruti */}
            <CarouselSection>
                <Container maxWidth="lg">
                    <CarouselTitle
                        variant="h2"
                        sx={{
                            fontSize: { xs: '2rem', md: '2.5rem', lg: '3rem' },
                            fontWeight: '300'
                        }}
                    >
                        Homes by KalaKruti
                    </CarouselTitle>

                    <CarouselSubtitle
                        variant="h6"
                        sx={{
                            fontSize: { xs: '1rem', md: '1.1rem' },
                            fontWeight: '400'
                        }}
                    >
                        Bespoke homes, envisioned and created by our craftsmen.
                    </CarouselSubtitle>

                    <CarouselContainer>
                        <CarouselWrapper>
                            {/* Left Side Image */}
                            <SideImage
                                sx={{
                                    backgroundImage: `url(${carouselImages[currentImageIndex].left})`
                                }}
                            />

                            {/* Central Image */}
                            <CentralImage
                                sx={{
                                    backgroundImage: `url(${carouselImages[currentImageIndex].central})`
                                }}
                            />

                            {/* Right Side Image */}
                            <SideImage
                                sx={{
                                    backgroundImage: `url(${carouselImages[currentImageIndex].right})`
                                }}
                            />

                            {/* Navigation Arrows */}
                            <NavigationArrow
                                className="left"
                                onClick={handlePrevious}
                                aria-label="Previous image"
                            >
                                <ChevronLeftIcon />
                            </NavigationArrow>

                            <NavigationArrow
                                className="right"
                                onClick={handleNext}
                                aria-label="Next image"
                            >
                                <ChevronRightIcon />
                            </NavigationArrow>
                        </CarouselWrapper>
                    </CarouselContainer>
                </Container>
            </CarouselSection>

            {/* Unique Features Section - What makes KalaKruti unique */}
            <UniqueSection>
                <Container maxWidth="lg">
                    <UniqueTitle
                        variant="h2"
                        sx={{
                            fontSize: { xs: '2rem', md: '2.5rem', lg: '3rem' },
                            fontWeight: '300'
                        }}
                    >
                        What makes KalaKruti unique
                    </UniqueTitle>

                    <FeaturesContainer>
                        {/* Feature 1: Tailor-made full home interiors */}
                        <FeatureItem>
                            <HexagonalIcon>
                                <IconWrapper>
                                    <SettingsIcon />
                                </IconWrapper>
                            </HexagonalIcon>
                            <FeatureText>
                                Tailor-made full home interiors
                            </FeatureText>
                        </FeatureItem>

                        {/* Feature 2: Meticulous craftsmanship */}
                        <FeatureItem>
                            <HexagonalIcon>
                                <IconWrapper>
                                    <BuildIcon />
                                </IconWrapper>
                            </HexagonalIcon>
                            <FeatureText>
                                Meticulous craftsmanship
                            </FeatureText>
                        </FeatureItem>

                        {/* Feature 3: Assortment of exquisite designs */}
                        <FeatureItem>
                            <HexagonalIcon>
                                <IconWrapper>
                                    <PaletteIcon />
                                </IconWrapper>
                            </HexagonalIcon>
                            <FeatureText>
                                Assortment of exquisite designs
                            </FeatureText>
                        </FeatureItem>

                        {/* Feature 4: Exceptional 10-year promise */}
                        <FeatureItem>
                            <HexagonalIcon>
                                <IconWrapper>
                                    <StarIcon />
                                </IconWrapper>
                            </HexagonalIcon>
                            <FeatureText>
                                Exceptional 10-year promise
                            </FeatureText>
                        </FeatureItem>

                        {/* Feature 5: Unparalleled timely delivery */}
                        <FeatureItem>
                            <HexagonalIcon>
                                <IconWrapper>
                                    <LocalShippingIcon />
                                </IconWrapper>
                            </HexagonalIcon>
                            <FeatureText>
                                Unparalleled timely delivery
                            </FeatureText>
                        </FeatureItem>
                    </FeaturesContainer>

                    {/* Call-to-Action Button */}
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                        <UniqueButton
                            component={Link}
                            to="/contact"
                            size="large"
                        >
                            Get in touch
                        </UniqueButton>
                    </Box>
                </Container>
            </UniqueSection>

            {/* Referral Section */}
            <ReferralSection>
                <ReferralContainer>
                    {/* Decorative Borders */}
                    <DecorativeBorder className="left" />
                    <DecorativeBorder className="right" />

                    <ReferralContent>
                        <ReferralText>
                            Refer your friend & earn 3% of their project's value
                        </ReferralText>

                        <ReferralButton
                            component={Link}
                            to="/contact"
                            size="large"
                        >
                            Refer now
                        </ReferralButton>
                    </ReferralContent>
                </ReferralContainer>
            </ReferralSection>

            {/* Floating Chat Widget */}
            {/* <FloatingWidget>
                <IconButton
                    sx={{
                        backgroundColor: '#25D366',
                        color: 'white',
                        '&:hover': {
                            backgroundColor: '#128C7E',
                            transform: 'scale(1.1)'
                        },
                        width: 56,
                        height: 56,
                        boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                    }}
                >
                    <WhatsAppIcon />
                </IconButton>
                <IconButton
                    sx={{
                        backgroundColor: theme.palette.primary.main,
                        color: 'white',
                        '&:hover': {
                            backgroundColor: theme.palette.primary.dark,
                            transform: 'scale(1.1)'
                        },
                        width: 56,
                        height: 56,
                        boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
                    }}
                >
                    <ChatIcon />
                </IconButton>
            </FloatingWidget> */}
        </Box>
    );
}