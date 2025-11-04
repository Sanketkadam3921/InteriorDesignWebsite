import React, { useState } from 'react';
import { 
    Box, 
    Container, 
    Typography, 
    Breadcrumbs, 
    Link, 
    Tabs, 
    Tab, 
    Card,
    CardContent,
    CardMedia,
    Chip,
    IconButton,
    useTheme,
    useMediaQuery
} from '@mui/material';
import { keyframes } from '@mui/system';
import { 
    Home as HomeIcon,
    AccessTime as AccessTimeIcon,
    ArrowBackIos as ArrowBackIosIcon,
    ArrowForwardIos as ArrowForwardIosIcon
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const wave = keyframes`
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(-200px);
    }
`;

export default function MagazinePage() {
    const [activeTab, setActiveTab] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(0);
    const navigate = useNavigate();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const categories = [
        'All',
        'Rooms',
        'Commercial interiors',
        'KalaKruti homes',
        'Expert advice',
        'Decor & inspiration'
    ];

    const editorPicks = [
        {
            id: 1,
            title: "Modern Minimalist Living Room Design Ideas",
            excerpt: "Discover how to create a stunning minimalist living space that combines functionality with aesthetic appeal.",
            image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            category: "Living Room",
            readTime: "5 min read",
            author: "Sarah Johnson"
        },
        {
            id: 2,
            title: "Kitchen Renovation: Before and After Transformation",
            excerpt: "See how we transformed a dated kitchen into a modern culinary haven with smart storage solutions.",
            image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            category: "Kitchen",
            readTime: "7 min read",
            author: "Mike Chen"
        },
        {
            id: 3,
            title: "Small Space Design: Maximizing Every Square Foot",
            excerpt: "Learn expert tips for making small spaces feel larger and more functional without compromising on style.",
            image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            category: "Small Spaces",
            readTime: "6 min read",
            author: "Emma Davis"
        }
    ];

    const recentStories = [
        {
            id: 1,
            title: "Color Psychology in Interior Design",
            readTime: "4 min read",
            date: "2 hours ago"
        },
        {
            id: 2,
            title: "Sustainable Materials for Eco-Friendly Homes",
            readTime: "8 min read",
            date: "5 hours ago"
        },
        {
            id: 3,
            title: "Bedroom Design Trends for 2024",
            readTime: "6 min read",
            date: "1 day ago"
        },
        {
            id: 4,
            title: "Lighting Solutions for Every Room",
            readTime: "5 min read",
            date: "2 days ago"
        },
        {
            id: 5,
            title: "Storage Ideas for Clutter-Free Living",
            readTime: "7 min read",
            date: "3 days ago"
        }
    ];

    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
    };

    const handleNextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % editorPicks.length);
    };

    const handlePrevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + editorPicks.length) % editorPicks.length);
    };

    return (
        <Box sx={{ minHeight: '100vh', backgroundColor: '#fff', position: 'relative' }}>
            <Container 
                maxWidth="lg" 
                sx={{ 
                    py: 4,
                    width: { xs: '100%', sm: '90%', md: '80%', lg: '70%' },
                    maxWidth: { xs: '100%', sm: '90%', md: '80%', lg: '70%' },
                    ml: 0,
                    mr: 'auto'
                }}
            >
                {/* Breadcrumbs */}
                <Breadcrumbs 
                    aria-label="breadcrumb" 
                    sx={{ mb: 3 }}
                >
                    <Link
                        component="button"
                        variant="body2"
                        onClick={() => navigate('/')}
                        sx={{
                            color: '#B28E52',
                            textDecoration: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            gap: 0.5,
                            '&:hover': {
                                textDecoration: 'underline'
                            }
                        }}
                    >
                        <HomeIcon sx={{ fontSize: 16 }} />
                        Home
                    </Link>
                    <Typography 
                        color="text.primary" 
                        variant="body2"
                        sx={{ color: '#505B5F' }}
                    >
                        Magazine
                    </Typography>
                </Breadcrumbs>

                {/* Category Navigation */}
                <Box sx={{ mb: 4 }}>
                    <Tabs
                        value={activeTab}
                        onChange={handleTabChange}
                        variant={isMobile ? "scrollable" : "standard"}
                        scrollButtons={isMobile ? "auto" : false}
                        allowScrollButtonsMobile
                        sx={{
                            borderBottom: 1,
                            borderColor: 'divider',
                            '& .MuiTabs-indicator': {
                                backgroundColor: '#B28E52',
                                height: 3,
                                borderRadius: '2px 2px 0 0'
                            },
                            '& .MuiTab-root': {
                                textTransform: 'none',
                                fontWeight: 500,
                                fontSize: '0.95rem',
                                minHeight: 48,
                                color: '#92A3AB',
                                '&.Mui-selected': {
                                    color: '#505B5F',
                                    fontWeight: 600
                                },
                                '&:hover': {
                                    color: '#B28E52'
                                }
                            }
                        }}
                    >
                        {categories.map((category, index) => (
                            <Tab 
                                key={index} 
                                label={category}
                                sx={{
                                    px: { xs: 1, sm: 2 },
                                    minWidth: { xs: 'auto', sm: 'auto' }
                                }}
                            />
                        ))}
                    </Tabs>
                </Box>

                {/* Main Title Section */}
                <Box sx={{ mb: 6 }}>
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
                        {/* Red accent bar */}
                        <Box 
                            sx={{ 
                                width: 4, 
                                height: 60, 
                                backgroundColor: '#B28E52', 
                                mr: 3,
                                borderRadius: '2px',
                                flexShrink: 0
                            }} 
                        />
                        
                        {/* Title */}
                        <Typography 
                            variant="h3" 
                            component="h1"
                            sx={{
                                color: '#505B5F',
                                fontWeight: 'bold',
                                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                                lineHeight: 1.2
                            }}
                        >
                Magazine
            </Typography>
                    </Box>

                    {/* Description */}
                    <Typography 
                        variant="body1"
                        sx={{
                            color: '#505B5F',
                            fontSize: { xs: '1rem', md: '1.1rem' },
                            lineHeight: 1.6,
                            maxWidth: 800,
                            ml: { xs: 0, sm: 7 }, // Align with title text
                            textAlign: 'left'
                        }}
                    >
                        Everything you wanted to know about getting your interiors is right here. 
                        Discover the latest home tours, decor ideas, interior design guides, 
                        industry insights and more.
                    </Typography>
                </Box>

                {/* Editor's Picks and Recent Stories Section */}
                <Box sx={{ mb: 4 }}>
                    <Box sx={{ 
                        display: 'flex', 
                        flexDirection: { xs: 'column', lg: 'row' },
                        gap: 4,
                        alignItems: 'flex-start'
                    }}>
                        {/* Editor's Picks Card - Left Side */}
                        <Box sx={{ 
                            flex: { xs: 'none', lg: '0 0 50%' }, // Equal width
                            width: { xs: '100%', lg: 'auto' },
                            display: 'flex',
                            flexDirection: 'column'
                        }}>
                            <Box sx={{ mb: 3 }}>
                                <Typography 
                                    variant="h5" 
                                    sx={{ 
                                        color: '#505B5F',
                                        fontWeight: 'bold'
                                    }}
                                >
                                    Editor's Picks
                                </Typography>
                            </Box>
                            <Box sx={{ position: 'relative', flex: 1 }}>
                                <Card 
                                    sx={{ 
                                        borderRadius: 3,
                                        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                        '&:hover': {
                                            transform: 'translateY(-4px)',
                                            boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                                        }
                                    }}
                                >
                                    <CardMedia
                                        component="img"
                                        height="300"
                                        image={editorPicks[currentSlide].image}
                                        alt={editorPicks[currentSlide].title}
                                        sx={{ objectFit: 'cover' }}
                                    />
                                    <CardContent sx={{ p: 4 }}>
                                        <Chip 
                                            label={editorPicks[currentSlide].category}
                                            size="small"
                                            sx={{ 
                                                backgroundColor: '#B28E52',
                                                color: 'white',
                                                mb: 2,
                                                fontSize: '0.75rem'
                                            }}
                                        />
                                        <Typography 
                                            variant="h5" 
                                            sx={{ 
                                                color: '#505B5F',
                                                fontWeight: 'bold',
                                                mb: 2,
                                                fontSize: '1.3rem',
                                                lineHeight: 1.3
                                            }}
                                        >
                                            {editorPicks[currentSlide].title}
                                        </Typography>
                                        <Typography 
                                            variant="body1" 
                                            sx={{ 
                                                color: '#666',
                                                mb: 3,
                                                lineHeight: 1.6,
                                                fontSize: '1rem'
                                            }}
                                        >
                                            {editorPicks[currentSlide].excerpt}
                                        </Typography>
                                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <Typography 
                                                variant="body2" 
                                                sx={{ color: '#92A3AB', fontSize: '0.9rem' }}
                                            >
                                                By {editorPicks[currentSlide].author}
                                            </Typography>
                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                <AccessTimeIcon sx={{ fontSize: 16, color: '#92A3AB', mr: 0.5 }} />
                                                <Typography 
                                                    variant="body2" 
                                                    sx={{ color: '#92A3AB', fontSize: '0.9rem' }}
                                                >
                                                    {editorPicks[currentSlide].readTime}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </CardContent>
                                </Card>

                                {/* Navigation Arrows */}
                                <IconButton
                                    onClick={handlePrevSlide}
                                    sx={{
                                        position: 'absolute',
                                        left: -20,
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        backgroundColor: 'white',
                                        boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                                        '&:hover': {
                                            backgroundColor: '#F5F5F5'
                                        },
                                        zIndex: 1
                                    }}
                                >
                                    <ArrowBackIosIcon sx={{ fontSize: 20, color: '#505B5F' }} />
                                </IconButton>

                                <IconButton
                                    onClick={handleNextSlide}
                                    sx={{
                                        position: 'absolute',
                                        right: -20,
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        backgroundColor: 'white',
                                        boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                                        '&:hover': {
                                            backgroundColor: '#F5F5F5'
                                        },
                                        zIndex: 1
                                    }}
                                >
                                    <ArrowForwardIosIcon sx={{ fontSize: 20, color: '#505B5F' }} />
                                </IconButton>
                            </Box>
                        </Box>

                        {/* Recent Stories - Right Side */}
                        <Box sx={{ 
                            flex: { xs: 'none', lg: '0 0 50%' }, // Equal width
                            width: { xs: '100%', lg: 'auto' },
                            display: 'flex',
                            flexDirection: 'column'
                        }}>
                            <Box sx={{ mb: 3 }}>
                                <Typography 
                                    variant="h5" 
                                    sx={{ 
                                        color: '#505B5F',
                                        fontWeight: 'bold'
                                    }}
                                >
                                    Recent Stories
                                </Typography>
                            </Box>
                            <Box sx={{ 
                                backgroundColor: '#F8F8F8',
                                borderRadius: 3,
                                p: 3,
                                flex: 1
                            }}>
                                
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                    {recentStories.map((story, index) => (
                                        <Box 
                                            key={story.id}
                                            sx={{ 
                                                display: 'flex',
                                                alignItems: 'flex-start',
                                                gap: 2,
                                                pb: index < recentStories.length - 1 ? 2 : 0,
                                                borderBottom: index < recentStories.length - 1 ? '1px solid #E0E0E0' : 'none'
                                            }}
                                        >
                                            <Box 
                                                sx={{ 
                                                    width: 8,
                                                    height: 8,
                                                    borderRadius: '50%',
                                                    backgroundColor: '#B28E52',
                                                    mt: 1,
                                                    flexShrink: 0
                                                }}
                                            />
                                            <Box sx={{ flex: 1 }}>
                                                <Typography 
                                                    variant="body2" 
                                                    sx={{ 
                                                        color: '#505B5F',
                                                        fontWeight: 500,
                                                        mb: 0.5,
                                                        lineHeight: 1.4,
                                                        cursor: 'pointer',
                                                        '&:hover': {
                                                            color: '#B28E52'
                                                        }
                                                    }}
                                                >
                                                    {story.title}
                                                </Typography>
                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                    <AccessTimeIcon sx={{ fontSize: 12, color: '#92A3AB' }} />
                                                    <Typography 
                                                        variant="caption" 
                                                        sx={{ color: '#92A3AB', fontSize: '0.75rem' }}
                                                    >
                                                        {story.readTime} • {story.date}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Box>
                                    ))}
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                {/* Design Gallery Section */}
                <Box sx={{ 
                    position: 'relative',
                    backgroundColor: theme.palette.secondary.main, // #505B5F
                    borderRadius: 4,
                    overflow: 'hidden',
                    mb: 6,
                    minHeight: 500,
                    width: '100vw',
                    marginLeft: 'calc(-50vw + 50%)',
                    marginRight: 'calc(-50vw + 50%)'
                }}>
                    {/* Wavy Pattern Background */}
                    <Box sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(45deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.1) 100%)',
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: '20%',
                            left: '-10%',
                            width: '120%',
                            height: '60%',
                            background: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 100 20\'%3E%3Cpath d=\'M0,10 Q25,0 50,10 T100,10 V20 H0 Z\' fill=\'rgba(255,255,255,0.1)\'/%3E%3C/svg%3E") repeat-x',
                            backgroundSize: '200px 20px',
                            animation: `${wave} 10s linear infinite`
                        }
                    }} />

                    <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2, py: 6 }}>
                        <Box sx={{ 
                            display: 'flex', 
                            flexDirection: { xs: 'column', lg: 'row' },
                            alignItems: 'flex-start',
                            gap: 4,
                            minHeight: 400
                        }}>
                            {/* Left Panel - Design Gallery Info */}
                            <Box sx={{ 
                                flex: { xs: 'none', lg: '0 0 40%' },
                                width: { xs: '100%', lg: 'auto' },
                                pr: { xs: 0, lg: 4 }
                            }}>
                                {/* Icon */}
                                <Box sx={{ 
                                    width: 80,
                                    height: 80,
                                    borderRadius: '50%',
                                    backgroundColor: 'white',
                                    border: `2px solid ${theme.palette.secondary.main}`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    mb: 3,
                                    position: 'relative'
                                }}>
                                    {/* Picture frames icon */}
                                    <Box sx={{
                                        position: 'relative',
                                        width: 40,
                                        height: 30
                                    }}>
                                        {/* Back frame */}
                                        <Box sx={{
                                            position: 'absolute',
                                            top: 5,
                                            left: 5,
                                            width: 30,
                                            height: 20,
                                            border: `2px solid ${theme.palette.secondary.main}`,
                                            borderRadius: 1
                                        }} />
                                        {/* Front frame */}
                                        <Box sx={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: 30,
                                            height: 20,
                                            border: `2px solid ${theme.palette.secondary.main}`,
                                            borderRadius: 1,
                                            backgroundColor: 'rgba(178, 142, 82, 0.1)'
                                        }} />
                                        {/* Small chair icon */}
                                        <Box sx={{
                                            position: 'absolute',
                                            top: 8,
                                            right: 2,
                                            width: 6,
                                            height: 6,
                                            backgroundColor: theme.palette.primary.main,
                                            borderRadius: '50% 50% 0 0'
                                        }} />
                                    </Box>
                                </Box>

                                {/* Title */}
                                <Typography 
                                    variant="h3" 
                                    sx={{
                                        color: 'white',
                                        fontWeight: 'bold',
                                        fontSize: { xs: '2rem', sm: '2.5rem', md: '2.8rem' },
                                        lineHeight: 1.2,
                                        mb: 2
                                    }}
                                >
                                    Design Gallery
                                </Typography>

                                {/* Description */}
                                <Typography 
                                    variant="body1"
                                    sx={{
                                        color: 'white',
                                        fontSize: { xs: '1rem', md: '1.2rem' },
                                        lineHeight: 1.6,
                                        opacity: 0.9
                                    }}
                                >
                                    Get inspired by a range of design ideas for every room
                                </Typography>
                            </Box>

                            {/* Right Panel - Content Cards */}
                            <Box sx={{ 
                                flex: { xs: 'none', lg: '0 0 60%' },
                                width: { xs: '100%', lg: 'auto' },
                                position: 'relative',
                                display: 'flex',
                                gap: 2,
                                alignItems: 'flex-start'
                            }}>
                                {/* Card 1 - Kitchen Cabinet Materials */}
                                <Card sx={{
                                    flex: 1,
                                    borderRadius: 3,
                                    boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                                    overflow: 'hidden',
                                    transform: 'translateY(0)',
                                    zIndex: 3
                                }}>
                                    <Box sx={{ 
                                        height: 200,
                                        background: 'linear-gradient(135deg, #FFE4B5 0%, #FFD700 50%, #FFA500 100%)',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}>
                                        {/* Kitchen collage placeholder */}
                                        <Box sx={{
                                            position: 'absolute',
                                            top: 10,
                                            left: 10,
                                            width: '45%',
                                            height: '80%',
                                            backgroundColor: 'white',
                                            borderRadius: 2,
                                            border: '2px solid #ddd'
                                        }} />
                                        <Box sx={{
                                            position: 'absolute',
                                            top: 10,
                                            right: 10,
                                            width: '45%',
                                            height: '80%',
                                            backgroundColor: '#E6F3FF',
                                            borderRadius: 2,
                                            border: '2px solid #ddd'
                                        }} />
                                    </Box>
                                    <CardContent sx={{ p: 3 }}>
                                        <Chip 
                                            label="EXPERT ADVICE"
                                            size="small"
                                            sx={{ 
                                                backgroundColor: '#F5F5F5',
                                                color: '#666',
                                                mb: 2,
                                                fontSize: '0.75rem',
                                                fontWeight: 500
                                            }}
                                        />
                                        <Typography 
                                            variant="h6" 
                                            sx={{ 
                                                color: '#333',
                                                fontWeight: 'bold',
                                                fontSize: '1.1rem',
                                                lineHeight: 1.3
                                            }}
                                        >
                                            The Best Kitchen Cabinet Materials in 2025: The Complete Guide
                                        </Typography>
                                    </CardContent>
                                </Card>

                                {/* Card 2 - Bedroom Walls */}
                                <Card sx={{
                                    flex: 1,
                                    borderRadius: 3,
                                    boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                                    overflow: 'hidden',
                                    transform: 'translateY(20px)',
                                    zIndex: 2
                                }}>
                                    <Box sx={{ 
                                        height: 200,
                                        background: 'linear-gradient(135deg, #FFB6C1 0%, #FFC0CB 50%, #FF69B4 100%)',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}>
                                        {/* Bedroom collage placeholder */}
                                        <Box sx={{
                                            position: 'absolute',
                                            top: 10,
                                            left: 5,
                                            width: '30%',
                                            height: '80%',
                                            backgroundColor: '#FFE4E1',
                                            borderRadius: 2,
                                            border: '2px solid #ddd'
                                        }} />
                                        <Box sx={{
                                            position: 'absolute',
                                            top: 10,
                                            left: '35%',
                                            width: '30%',
                                            height: '80%',
                                            backgroundColor: '#F0E68C',
                                            borderRadius: 2,
                                            border: '2px solid #ddd'
                                        }} />
                                        <Box sx={{
                                            position: 'absolute',
                                            top: 10,
                                            right: 5,
                                            width: '30%',
                                            height: '80%',
                                            backgroundColor: '#E0F6FF',
                                            borderRadius: 2,
                                            border: '2px solid #ddd'
                                        }} />
                                    </Box>
                                    <CardContent sx={{ p: 3 }}>
                                        <Chip 
                                            label="DECOR & INSPIRATION"
                                            size="small"
                                            sx={{ 
                                                backgroundColor: '#F5F5F5',
                                                color: '#666',
                                                mb: 2,
                                                fontSize: '0.75rem',
                                                fontWeight: 500
                                            }}
                                        />
                                        <Typography 
                                            variant="h6" 
                                            sx={{ 
                                                color: '#333',
                                                fontWeight: 'bold',
                                                fontSize: '1.1rem',
                                                lineHeight: 1.3
                                            }}
                                        >
                                            20+ Two Colour Combinations for Bedroom Walls That You Will Love
                                        </Typography>
                                    </CardContent>
                                </Card>

                                {/* Card 3 - Kitchen Combinations */}
                                <Card sx={{
                                    flex: 1,
                                    borderRadius: 3,
                                    boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                                    overflow: 'hidden',
                                    transform: 'translateY(40px)',
                                    zIndex: 1
                                }}>
                                    <Box sx={{ 
                                        height: 200,
                                        background: 'linear-gradient(135deg, #E6F3FF 0%, #B0E0E6 50%, #87CEEB 100%)',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}>
                                        {/* Kitchen combinations collage placeholder */}
                                        <Box sx={{
                                            position: 'absolute',
                                            top: 5,
                                            left: 5,
                                            width: '45%',
                                            height: '45%',
                                            backgroundColor: '#FFE4E1',
                                            borderRadius: 2,
                                            border: '2px solid #ddd'
                                        }} />
                                        <Box sx={{
                                            position: 'absolute',
                                            top: 5,
                                            right: 5,
                                            width: '45%',
                                            height: '45%',
                                            backgroundColor: '#2F2F2F',
                                            borderRadius: 2,
                                            border: '2px solid #ddd'
                                        }} />
                                        <Box sx={{
                                            position: 'absolute',
                                            bottom: 5,
                                            left: 5,
                                            width: '45%',
                                            height: '45%',
                                            backgroundColor: '#90EE90',
                                            borderRadius: 2,
                                            border: '2px solid #ddd'
                                        }} />
                                        <Box sx={{
                                            position: 'absolute',
                                            bottom: 5,
                                            right: 5,
                                            width: '45%',
                                            height: '45%',
                                            backgroundColor: '#E0E0E0',
                                            borderRadius: 2,
                                            border: '2px solid #ddd'
                                        }} />
                                    </Box>
                                    <CardContent sx={{ p: 3 }}>
                                        <Chip 
                                            label="DECOR & INSPIRATION"
                                            size="small"
                                            sx={{ 
                                                backgroundColor: '#F5F5F5',
                                                color: '#666',
                                                mb: 2,
                                                fontSize: '0.75rem',
                                                fontWeight: 500
                                            }}
                                        />
                                        <Typography 
                                            variant="h6" 
                                            sx={{ 
                                                color: '#333',
                                                fontWeight: 'bold',
                                                fontSize: '1.1rem',
                                                lineHeight: 1.3
                                            }}
                                        >
                                            Unique Single and Multi-Colour Combinations for Every Kitchen
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Box>
                        </Box>
                    </Container>
                </Box>
        </Container>

        </Box>
    );
}