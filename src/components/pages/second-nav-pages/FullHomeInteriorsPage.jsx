import React, { useState } from 'react';
import {
    Box,
    Typography,
    Button,
    useTheme,
    useMediaQuery,
    IconButton,
    Paper,
    styled,
    Container,
    Grid,
    Card,
    CardMedia,
    CardContent,
    Stack,
    Divider
} from '@mui/material';
import { Link } from 'react-router-dom';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ChatIcon from '@mui/icons-material/Chat';

// Styled components for custom styling
const HeroSection = styled(Box)(({ theme }) => ({
    position: 'relative',
    width: '100%',
    height: '70vh',
    minHeight: '500px',
    backgroundImage: `url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        zIndex: 1,
    },
}));

const FloatingWidget = styled(Box)(({ theme }) => ({
    position: 'fixed',
    zIndex: 1000,
    '&:hover': {
        transform: 'scale(1.05)',
    },
    transition: 'transform 0.3s ease',
}));

export default function FullHomeInteriorsPage() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box sx={{ overflowX: "hidden", width: "100%" }}>
            {/* Hero Section */}
            <HeroSection>
                {/* Main Content */}
                <Box
                    sx={{
                        position: 'relative',
                        zIndex: 2,
                        textAlign: 'center',
                        color: 'white',
                        maxWidth: '800px',
                        px: { xs: 2, sm: 3, md: 4 },
                        mx: 'auto',
                    }}
                >
                    <Typography
                        variant="h1"
                        component="h1"
                        sx={{
                            fontSize: { xs: '1.5rem', sm: '1.8rem', md: '2.5rem', lg: '3rem' },
                            fontWeight: 'bold',
                            lineHeight: 1.2,
                            mb: 4,
                            color: 'white',
                            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                            textAlign: 'center',
                            wordWrap: 'break-word',
                            hyphens: 'auto',
                        }}
                    >
                        Dream interiors made possible
                    </Typography>

                    <Button
                        component={Link}
                        to="/contact"
                        variant="contained"
                        size="medium"
                        sx={{
                            backgroundColor: theme.palette.primary.main,
                            color: 'white',
                            textTransform: 'uppercase',
                            fontWeight: 'bold',
                            px: { xs: 3, md: 4 },
                            py: { xs: 1.5, md: 2 },
                            fontSize: { xs: '0.9rem', md: '1rem' },
                            borderRadius: '50px',
                            boxShadow: `0 4px 16px ${theme.palette.primary.main}30`,
                            '&:hover': {
                                backgroundColor: theme.palette.primary.dark,
                                transform: 'translateY(-2px)',
                                boxShadow: `0 6px 20px ${theme.palette.primary.main}40`,
                            },
                            transition: 'all 0.3s ease-in-out',
                        }}
                    >
                        Book Online Consultation
                    </Button>
                </Box>
            </HeroSection>

            {/* Main Content Section */}
            <Container maxWidth="lg" sx={{ py: 4, px: { xs: 2, md: 4 } }}>

                {/* Main Heading */}
                <Typography
                    variant="h2"
                    component="h1"
                    sx={{
                        fontSize: { xs: '2rem', md: '3rem' },
                        fontWeight: 'bold',
                        color: theme.palette.text.primary,
                        mb: 3,
                        lineHeight: 1.2
                    }}
                >
                    The complete home interiors experience
                </Typography>

                {/* Description */}
                <Typography
                    variant="body1"
                    sx={{
                        fontSize: { xs: '1rem', md: '1.1rem' },
                        color: theme.palette.text.secondary,
                        lineHeight: 1.6,
                        mb: 3,
                        maxWidth: '1000px'
                    }}
                >
                    No more dreaming about your interiors. KalaKruti brings together award-winning designers, service partners and brands, to help you take your home interiors from dream to reality.
                </Typography>

                {/* What we offer section */}
                <Box sx={{
                    mt: 8,
                    backgroundColor: theme.palette.background.default,
                    borderRadius: 2,
                    p: { xs: 3, md: 4 },
                    mx: { xs: -2, md: 0 }
                }}>
                    <Typography
                        variant="h3"
                        component="h2"
                        sx={{
                            fontSize: { xs: '1.8rem', md: '2.2rem' },
                            fontWeight: 'bold',
                            color: theme.palette.text.primary,
                            mb: 4
                        }}
                    >
                        What we offer
                    </Typography>

                    <Box
                        sx={{
                            display: 'flex',
                            gap: { xs: 2, md: 3 },
                            justifyContent: 'center',
                            alignItems: 'stretch',
                            flexWrap: { xs: 'wrap', md: 'nowrap' },
                            '& > *': {
                                flex: { xs: '1 1 100%', md: '1 1 300px' },
                                maxWidth: { xs: '100%', md: '350px' },
                                minWidth: { xs: '280px', md: '280px' }
                            }
                        }}
                    >
                        {/* Service Card 1 - Design */}
                        <Card
                            sx={{
                                height: '400px',
                                borderRadius: 2,
                                overflow: 'hidden',
                                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
                                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                                '&:hover': {
                                    transform: 'translateY(-8px)',
                                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
                                },
                            }}
                        >
                            <CardMedia
                                component="img"
                                height="200"
                                image="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                                alt="Interior Design"
                                sx={{ objectFit: 'cover' }}
                            />
                            <CardContent sx={{ p: 2.5, height: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                <Box>
                                    <Typography
                                        variant="h6"
                                        component="h3"
                                        sx={{
                                            fontWeight: 'bold',
                                            color: theme.palette.text.primary,
                                            mb: 1,
                                            fontSize: '1.1rem'
                                        }}
                                    >
                                        Interior Design
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{ lineHeight: 1.5, fontSize: '0.9rem' }}
                                    >
                                        Expert design consultation and space planning to create your dream home.
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>

                        {/* Service Card 2 - Construction */}
                        <Card
                            sx={{
                                height: '400px',
                                borderRadius: 2,
                                overflow: 'hidden',
                                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
                                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                                '&:hover': {
                                    transform: 'translateY(-8px)',
                                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
                                },
                            }}
                        >
                            <CardMedia
                                component="img"
                                height="200"
                                image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                                alt="Construction & Installation"
                                sx={{ objectFit: 'cover' }}
                            />
                            <CardContent sx={{ p: 2.5, height: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                <Box>
                                    <Typography
                                        variant="h6"
                                        component="h3"
                                        sx={{
                                            fontWeight: 'bold',
                                            color: theme.palette.text.primary,
                                            mb: 1,
                                            fontSize: '1.1rem'
                                        }}
                                    >
                                        Construction & Installation
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{ lineHeight: 1.5, fontSize: '0.9rem' }}
                                    >
                                        Professional construction and installation services for all your interior needs.
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>

                        {/* Service Card 3 - Kitchen */}
                        <Card
                            sx={{
                                height: '400px',
                                borderRadius: 2,
                                overflow: 'hidden',
                                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
                                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                                '&:hover': {
                                    transform: 'translateY(-8px)',
                                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
                                },
                            }}
                        >
                            <CardMedia
                                component="img"
                                height="200"
                                image="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                                alt="Kitchen Design"
                                sx={{ objectFit: 'cover' }}
                            />
                            <CardContent sx={{ p: 2.5, height: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                <Box>
                                    <Typography
                                        variant="h6"
                                        component="h3"
                                        sx={{
                                            fontWeight: 'bold',
                                            color: theme.palette.text.primary,
                                            mb: 1,
                                            fontSize: '1.1rem'
                                        }}
                                    >
                                        Kitchen Design
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{ lineHeight: 1.5, fontSize: '0.9rem' }}
                                    >
                                        Modern kitchen designs with premium materials and smart storage solutions.
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Box>
                </Box>
            </Container>

            {/* How it works section */}
            <Container maxWidth="lg" sx={{ py: 2, px: { xs: 2, md: 4 } }}>
                <Box sx={{
                    backgroundColor: theme.palette.background.default,
                    borderRadius: 2,
                    p: { xs: 3, md: 4 },
                    mb: 3,
                    mx: { xs: -2, md: 0 }
                }}>
                    <Box sx={{ textAlign: 'left', mb: 6 }}>
                        <Typography
                            variant="h2"
                            component="h2"
                            sx={{
                                fontSize: { xs: '2rem', md: '2.5rem' },
                                fontWeight: 'bold',
                                color: theme.palette.text.primary,
                                mb: 2
                            }}
                        >
                            Your journey in a snapshot
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                fontSize: { xs: '1rem', md: '1.1rem' },
                                color: theme.palette.text.secondary,
                                lineHeight: 1.6,
                                maxWidth: '800px'
                            }}
                        >
                            At KalaKruti, we make setting up your home a process as comfortable as living in it.
                        </Typography>
                    </Box>

                    <Grid container spacing={{ xs: 3, md: 6 }} sx={{ alignItems: 'flex-start' }}>
                        {/* Left Column - Process Steps */}
                        <Grid item xs={12} md={6}>
                            <Stack spacing={3}>
                                {/* Step 1: Booking */}
                                <Paper
                                    sx={{
                                        p: 3,
                                        backgroundColor: theme.palette.background.paper,
                                        borderLeft: `4px solid ${theme.palette.primary.main}`,
                                        borderRadius: 2,
                                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                                        position: 'relative'
                                    }}
                                >
                                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                                        <Box
                                            sx={{
                                                width: 40,
                                                height: 40,
                                                borderRadius: '50%',
                                                backgroundColor: theme.palette.primary.main,
                                                color: 'white',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontWeight: 'bold',
                                                fontSize: '1.1rem',
                                                flexShrink: 0
                                            }}
                                        >
                                            1
                                        </Box>
                                        <Box sx={{ flex: 1 }}>
                                            <Typography
                                                variant="h6"
                                                sx={{
                                                    fontWeight: 'bold',
                                                    color: theme.palette.text.primary,
                                                    mb: 1
                                                }}
                                            >
                                                Booking
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                sx={{ color: '#666', mb: 1 }}
                                            >
                                                Typically 2 weeks*
                                            </Typography>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                <Typography
                                                    variant="body2"
                                                    sx={{ color: '#666' }}
                                                >
                                                    You pay 5%**
                                                </Typography>
                                                <Box
                                                    sx={{
                                                        backgroundColor: '#4CAF50',
                                                        color: 'white',
                                                        px: 1.5,
                                                        py: 0.5,
                                                        borderRadius: '12px',
                                                        fontSize: '0.7rem',
                                                        fontWeight: 'bold',
                                                        textTransform: 'uppercase'
                                                    }}
                                                >
                                                    MILESTONE
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Paper>

                                {/* Step 2: Design Phase */}
                                <Paper
                                    sx={{
                                        p: 3,
                                        backgroundColor: 'white',
                                        borderRadius: 2,
                                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                                        position: 'relative'
                                    }}
                                >
                                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                                        <Box
                                            sx={{
                                                width: 40,
                                                height: 40,
                                                borderRadius: '50%',
                                                backgroundColor: theme.palette.primary.main,
                                                color: 'white',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontWeight: 'bold',
                                                fontSize: '1.1rem',
                                                flexShrink: 0
                                            }}
                                        >
                                            2
                                        </Box>
                                        <Box sx={{ flex: 1 }}>
                                            <Typography
                                                variant="h6"
                                                sx={{
                                                    fontWeight: 'bold',
                                                    color: theme.palette.text.primary,
                                                    mb: 1
                                                }}
                                            >
                                                Design Phase
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                sx={{ color: '#666', mb: 1 }}
                                            >
                                                Typically 2 months*
                                            </Typography>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                <Typography
                                                    variant="body2"
                                                    sx={{ color: '#666' }}
                                                >
                                                    You pay 60%
                                                </Typography>
                                                <Box
                                                    sx={{
                                                        backgroundColor: '#4CAF50',
                                                        color: 'white',
                                                        px: 1.5,
                                                        py: 0.5,
                                                        borderRadius: '12px',
                                                        fontSize: '0.7rem',
                                                        fontWeight: 'bold',
                                                        textTransform: 'uppercase'
                                                    }}
                                                >
                                                    MILESTONE
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Paper>

                                {/* Step 3: Manufacturing & Installation */}
                                <Paper
                                    sx={{
                                        p: 3,
                                        backgroundColor: 'white',
                                        borderRadius: 2,
                                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                                        position: 'relative'
                                    }}
                                >
                                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                                        <Box
                                            sx={{
                                                width: 40,
                                                height: 40,
                                                borderRadius: '50%',
                                                backgroundColor: theme.palette.primary.main,
                                                color: 'white',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontWeight: 'bold',
                                                fontSize: '1.1rem',
                                                flexShrink: 0
                                            }}
                                        >
                                            3
                                        </Box>
                                        <Box sx={{ flex: 1 }}>
                                            <Typography
                                                variant="h6"
                                                sx={{
                                                    fontWeight: 'bold',
                                                    color: theme.palette.text.primary,
                                                    mb: 1
                                                }}
                                            >
                                                Manufacturing & Installation
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                sx={{ color: '#666', mb: 1 }}
                                            >
                                                Typically 3 months*
                                            </Typography>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                <Typography
                                                    variant="body2"
                                                    sx={{ color: '#666' }}
                                                >
                                                    You pay 100%
                                                </Typography>
                                                <Box
                                                    sx={{
                                                        backgroundColor: '#4CAF50',
                                                        color: 'white',
                                                        px: 1.5,
                                                        py: 0.5,
                                                        borderRadius: '12px',
                                                        fontSize: '0.7rem',
                                                        fontWeight: 'bold',
                                                        textTransform: 'uppercase'
                                                    }}
                                                >
                                                    MILESTONE
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Paper>

                                {/* Step 4: Move-in */}
                                <Paper
                                    sx={{
                                        p: 3,
                                        backgroundColor: 'white',
                                        borderRadius: 2,
                                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                                        position: 'relative'
                                    }}
                                >
                                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                                        <Box
                                            sx={{
                                                width: 40,
                                                height: 40,
                                                borderRadius: '50%',
                                                backgroundColor: theme.palette.primary.main,
                                                color: 'white',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                fontWeight: 'bold',
                                                fontSize: '1.1rem',
                                                flexShrink: 0
                                            }}
                                        >
                                            4
                                        </Box>
                                        <Box sx={{ flex: 1 }}>
                                            <Typography
                                                variant="h6"
                                                sx={{
                                                    fontWeight: 'bold',
                                                    color: theme.palette.text.primary,
                                                    mb: 1
                                                }}
                                            >
                                                Move-in
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Paper>
                            </Stack>
                        </Grid>

                        {/* Right Column - Process Details */}
                        <Grid item xs={12} md={6}>
                            <Box sx={{ pl: { xs: 0, md: 4 } }}>
                                <Typography
                                    variant="h4"
                                    component="h3"
                                    sx={{
                                        fontSize: { xs: '1.5rem', md: '1.8rem' },
                                        fontWeight: 'bold',
                                        color: theme.palette.text.primary,
                                        mb: 3
                                    }}
                                >
                                    Booking
                                </Typography>

                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: theme.palette.text.secondary,
                                        lineHeight: 1.6,
                                        mb: 4,
                                        fontSize: '1rem'
                                    }}
                                >
                                    Say hi to your designer and kick-start your dream with a design proposal.
                                </Typography>

                                <Stack spacing={3}>
                                    {/* Step 1 */}
                                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                                        <Box
                                            sx={{
                                                width: 8,
                                                height: 8,
                                                borderRadius: '50%',
                                                backgroundColor: theme.palette.primary.main,
                                                mt: 1,
                                                flexShrink: 0
                                            }}
                                        />
                                        <Box>
                                            <Typography
                                                variant="h6"
                                                sx={{
                                                    fontWeight: 'bold',
                                                    color: theme.palette.text.primary,
                                                    mb: 1,
                                                    fontSize: '1rem'
                                                }}
                                            >
                                                Fill form
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                sx={{ color: '#666', lineHeight: 1.5 }}
                                            >
                                                Share your basic information and property details in a quiz.
                                            </Typography>
                                        </Box>
                                    </Box>

                                    {/* Step 2 */}
                                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                                        <Box
                                            sx={{
                                                width: 8,
                                                height: 8,
                                                borderRadius: '50%',
                                                backgroundColor: theme.palette.primary.main,
                                                mt: 1,
                                                flexShrink: 0
                                            }}
                                        />
                                        <Box>
                                            <Typography
                                                variant="h6"
                                                sx={{
                                                    fontWeight: 'bold',
                                                    color: theme.palette.text.primary,
                                                    mb: 1,
                                                    fontSize: '1rem'
                                                }}
                                            >
                                                Get a call
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                sx={{ color: '#666', lineHeight: 1.5 }}
                                            >
                                                A KalaKruti executive connects with you to understand your requirements.
                                            </Typography>
                                        </Box>
                                    </Box>

                                    {/* Step 3 */}
                                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                                        <Box
                                            sx={{
                                                width: 8,
                                                height: 8,
                                                borderRadius: '50%',
                                                backgroundColor: theme.palette.primary.main,
                                                mt: 1,
                                                flexShrink: 0
                                            }}
                                        />
                                        <Box>
                                            <Typography
                                                variant="h6"
                                                sx={{
                                                    fontWeight: 'bold',
                                                    color: theme.palette.text.primary,
                                                    mb: 1,
                                                    fontSize: '1rem'
                                                }}
                                            >
                                                Share your floor plan
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                sx={{ color: '#666', lineHeight: 1.5 }}
                                            >
                                                We match you to a KalaKruti designer based on your requirements.
                                            </Typography>
                                        </Box>
                                    </Box>

                                    {/* Step 4 */}
                                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                                        <Box
                                            sx={{
                                                width: 8,
                                                height: 8,
                                                borderRadius: '50%',
                                                backgroundColor: theme.palette.primary.main,
                                                mt: 1,
                                                flexShrink: 0
                                            }}
                                        />
                                        <Box>
                                            <Typography
                                                variant="h6"
                                                sx={{
                                                    fontWeight: 'bold',
                                                    color: theme.palette.text.primary,
                                                    mb: 1,
                                                    fontSize: '1rem'
                                                }}
                                            >
                                                Speak to your designer
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                sx={{ color: '#666', lineHeight: 1.5 }}
                                            >
                                                Your designer takes the time to understand you and your family's needs.
                                            </Typography>
                                        </Box>
                                    </Box>

                                    {/* Step 5 */}
                                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                                        <Box
                                            sx={{
                                                width: 8,
                                                height: 8,
                                                borderRadius: '50%',
                                                backgroundColor: theme.palette.primary.main,
                                                mt: 1,
                                                flexShrink: 0
                                            }}
                                        />
                                        <Box>
                                            <Typography
                                                variant="h6"
                                                sx={{
                                                    fontWeight: 'bold',
                                                    color: theme.palette.text.primary,
                                                    mb: 1,
                                                    fontSize: '1rem'
                                                }}
                                            >
                                                Design proposal
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                sx={{ color: '#666', lineHeight: 1.5 }}
                                            >
                                                A design proposal and a tentative quote are created based on your budget.
                                            </Typography>
                                        </Box>
                                    </Box>

                                    {/* Step 6 */}
                                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                                        <Box
                                            sx={{
                                                width: 8,
                                                height: 8,
                                                borderRadius: '50%',
                                                backgroundColor: theme.palette.primary.main,
                                                mt: 1,
                                                flexShrink: 0
                                            }}
                                        />
                                        <Box>
                                            <Typography
                                                variant="h6"
                                                sx={{
                                                    fontWeight: 'bold',
                                                    color: theme.palette.text.primary,
                                                    mb: 1,
                                                    fontSize: '1rem'
                                                }}
                                            >
                                                Visit an Experience Centre
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                sx={{ color: '#666', lineHeight: 1.5 }}
                                            >
                                                Get a presentation on your home interiors at an EC or via an online call.
                                            </Typography>
                                        </Box>
                                    </Box>

                                    {/* Step 7 */}
                                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                                        <Box
                                            sx={{
                                                width: 8,
                                                height: 8,
                                                borderRadius: '50%',
                                                backgroundColor: theme.palette.primary.main,
                                                mt: 1,
                                                flexShrink: 0
                                            }}
                                        />
                                        <Box>
                                            <Typography
                                                variant="h6"
                                                sx={{
                                                    fontWeight: 'bold',
                                                    color: theme.palette.text.primary,
                                                    mb: 1,
                                                    fontSize: '1rem'
                                                }}
                                            >
                                                Revised quote
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                sx={{ color: '#666', lineHeight: 1.5 }}
                                            >
                                                Share your feedback and receive a revised proposal.
                                            </Typography>
                                        </Box>
                                    </Box>

                                    {/* Step 8 - Book with us */}
                                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                                        <Box
                                            sx={{
                                                width: 8,
                                                height: 8,
                                                borderRadius: '50%',
                                                backgroundColor: theme.palette.primary.main,
                                                mt: 1,
                                                flexShrink: 0
                                            }}
                                        />
                                        <Box>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                                                <Typography
                                                    variant="h6"
                                                    sx={{
                                                        fontWeight: 'bold',
                                                        color: theme.palette.text.primary,
                                                        fontSize: '1rem'
                                                    }}
                                                >
                                                    Book with us
                                                </Typography>
                                                <Box
                                                    sx={{
                                                        backgroundColor: '#4CAF50',
                                                        color: 'white',
                                                        px: 1.5,
                                                        py: 0.5,
                                                        borderRadius: '12px',
                                                        fontSize: '0.7rem',
                                                        fontWeight: 'bold',
                                                        textTransform: 'uppercase'
                                                    }}
                                                >
                                                    MILESTONE
                                                </Box>
                                            </Box>
                                            <Typography
                                                variant="body2"
                                                sx={{ color: '#666', lineHeight: 1.5 }}
                                            >
                                                You pay 10% or Rs.25,000 (whichever is higher) to book with KalaKruti
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Stack>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>

            {/* The team behind your dream section */}
            <Container maxWidth="lg" sx={{ py: 4, px: { xs: 2, md: 4 } }}>
                <Box sx={{
                    backgroundColor: theme.palette.background.default,
                    borderRadius: 2,
                    p: { xs: 3, md: 4 },
                    mb: 3,
                    mx: { xs: -2, md: 0 }
                }}>
                    <Box sx={{ textAlign: 'left', mb: 6 }}>
                        <Typography
                            variant="h2"
                            component="h2"
                            sx={{
                                fontSize: { xs: '2rem', md: '2.5rem' },
                                fontWeight: 'bold',
                                color: theme.palette.text.primary,
                                mb: 2
                            }}
                        >
                            The team behind your dream
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                fontSize: { xs: '1rem', md: '1.1rem' },
                                color: theme.palette.text.secondary,
                                lineHeight: 1.6,
                                maxWidth: '800px'
                            }}
                        >
                            It takes having the right people to bring dreams to life - and we make sure you get the best.
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            display: 'flex',
                            gap: { xs: 3, md: 4 },
                            justifyContent: 'center',
                            alignItems: 'stretch',
                            flexWrap: { xs: 'wrap', md: 'nowrap' },
                            '& > *': {
                                flex: { xs: '1 1 100%', md: '1 1 400px' },
                                maxWidth: { xs: '100%', md: '500px' },
                                minWidth: { xs: '300px', md: '350px' }
                            }
                        }}
                    >
                        {/* Your Designer Card */}
                        <Card
                            sx={{
                                height: '100%',
                                borderRadius: 2,
                                overflow: 'hidden',
                                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
                                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                                '&:hover': {
                                    transform: 'translateY(-8px)',
                                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
                                },
                            }}
                        >
                            <CardContent sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
                                {/* Icon */}
                                <Box
                                    sx={{
                                        width: 80,
                                        height: 80,
                                        borderRadius: '50%',
                                        backgroundColor: '#f5f5f5',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        mb: 3,
                                        mx: 'auto',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: 60,
                                            height: 60,
                                            borderRadius: '50%',
                                            backgroundColor: theme.palette.primary.main,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: 'white',
                                            fontSize: '1.5rem'
                                        }}
                                    >
                                        👩‍🎨
                                    </Box>
                                </Box>

                                {/* Title and Subtitle */}
                                <Typography
                                    variant="h5"
                                    component="h3"
                                    sx={{
                                        fontWeight: 'bold',
                                        color: theme.palette.text.primary,
                                        mb: 1,
                                        textAlign: 'center'
                                    }}
                                >
                                    Your Designer
                                </Typography>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        color: theme.palette.text.secondary,
                                        mb: 2,
                                        textAlign: 'center',
                                        fontSize: '1rem',
                                        fontWeight: 'normal'
                                    }}
                                >
                                    An expert in full home design
                                </Typography>

                                {/* Description */}
                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: theme.palette.text.secondary,
                                        lineHeight: 1.6,
                                        mb: 3,
                                        textAlign: 'center'
                                    }}
                                >
                                    Your designer will translate your family's personality and needs into a wholesome design.
                                </Typography>

                                {/* Details */}
                                <Box sx={{ flex: 1 }}>
                                    <Box sx={{ mb: 2 }}>
                                        <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#505B5F', mb: 0.5 }}>
                                            Education:
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: '#666' }}>
                                            Masters / Bachelors in Interior Design
                                        </Typography>
                                    </Box>

                                    <Box sx={{ mb: 2 }}>
                                        <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#505B5F', mb: 0.5 }}>
                                            Typical Experience:
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: '#666' }}>
                                            6+ years
                                        </Typography>
                                    </Box>

                                    <Box sx={{ mb: 3 }}>
                                        <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#505B5F', mb: 0.5 }}>
                                            Projects Managed:
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: '#666' }}>
                                            Over 15 homes
                                        </Typography>
                                    </Box>

                                    <Box>
                                        <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#505B5F', mb: 1 }}>
                                            Top Skills:
                                        </Typography>
                                        <Box component="ul" sx={{ pl: 2, m: 0 }}>
                                            <Typography component="li" variant="body2" sx={{ color: '#666', mb: 0.5 }}>
                                                Experienced in designing across styles & themes
                                            </Typography>
                                            <Typography component="li" variant="body2" sx={{ color: '#666', mb: 0.5 }}>
                                                Space planning
                                            </Typography>
                                            <Typography component="li" variant="body2" sx={{ color: '#666', mb: 0.5 }}>
                                                Civil/core materials know-how
                                            </Typography>
                                            <Typography component="li" variant="body2" sx={{ color: '#666' }}>
                                                Furniture & furnishing
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>

                        {/* Your Operations Lead Card */}
                        <Card
                            sx={{
                                height: '100%',
                                borderRadius: 2,
                                overflow: 'hidden',
                                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
                                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                                '&:hover': {
                                    transform: 'translateY(-8px)',
                                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
                                },
                            }}
                        >
                            <CardContent sx={{ p: 4, height: '100%', display: 'flex', flexDirection: 'column' }}>
                                {/* Icon */}
                                <Box
                                    sx={{
                                        width: 80,
                                        height: 80,
                                        borderRadius: '50%',
                                        backgroundColor: '#f5f5f5',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        mb: 3,
                                        mx: 'auto',
                                        position: 'relative',
                                        overflow: 'hidden'
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: 60,
                                            height: 60,
                                            borderRadius: '50%',
                                            backgroundColor: theme.palette.primary.main,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: 'white',
                                            fontSize: '1.5rem'
                                        }}
                                    >
                                        👷‍♂️
                                    </Box>
                                </Box>

                                {/* Title and Subtitle */}
                                <Typography
                                    variant="h5"
                                    component="h3"
                                    sx={{
                                        fontWeight: 'bold',
                                        color: theme.palette.text.primary,
                                        mb: 1,
                                        textAlign: 'center'
                                    }}
                                >
                                    Your Operations Lead
                                </Typography>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        color: theme.palette.text.secondary,
                                        mb: 2,
                                        textAlign: 'center',
                                        fontSize: '1rem',
                                        fontWeight: 'normal'
                                    }}
                                >
                                    An expert in project management
                                </Typography>

                                {/* Description */}
                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: theme.palette.text.secondary,
                                        lineHeight: 1.6,
                                        mb: 3,
                                        textAlign: 'center'
                                    }}
                                >
                                    Your rep on site, your operations lead will ensure a perfect and complete home transformation.
                                </Typography>

                                {/* Details */}
                                <Box sx={{ flex: 1 }}>
                                    <Box sx={{ mb: 2 }}>
                                        <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#505B5F', mb: 0.5 }}>
                                            Education:
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: '#666' }}>
                                            Civil Engineer
                                        </Typography>
                                    </Box>

                                    <Box sx={{ mb: 2 }}>
                                        <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#505B5F', mb: 0.5 }}>
                                            Typical Experience:
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: '#666' }}>
                                            4+ years
                                        </Typography>
                                    </Box>

                                    <Box sx={{ mb: 3 }}>
                                        <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#505B5F', mb: 0.5 }}>
                                            Projects Managed:
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: '#666' }}>
                                            Over 40 homes
                                        </Typography>
                                    </Box>

                                    <Box>
                                        <Typography variant="body2" sx={{ fontWeight: 'bold', color: '#505B5F', mb: 1 }}>
                                            Top Skills:
                                        </Typography>
                                        <Box component="ul" sx={{ pl: 2, m: 0 }}>
                                            <Typography component="li" variant="body2" sx={{ color: '#666', mb: 0.5 }}>
                                                Project planning
                                            </Typography>
                                            <Typography component="li" variant="body2" sx={{ color: '#666', mb: 0.5 }}>
                                                Onsite progress & tracking
                                            </Typography>
                                            <Typography component="li" variant="body2" sx={{ color: '#666', mb: 0.5 }}>
                                                Custom work/services audit
                                            </Typography>
                                            <Typography component="li" variant="body2" sx={{ color: '#666' }}>
                                                Quality adherence
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>
                    </Box>
                </Box>
            </Container>



            {/* Testimonials Section */}
            <Container maxWidth="lg" sx={{ py: 4, px: { xs: 2, md: 4 } }}>
                <Box sx={{
                    backgroundColor: theme.palette.background.default,
                    borderRadius: 2,
                    p: { xs: 3, md: 4 },
                    mb: 3,
                    mx: { xs: -2, md: 0 }
                }}>
                    <Box sx={{ textAlign: 'center', mb: 6 }}>
                        <Typography
                            variant="h2"
                            component="h2"
                            sx={{
                                fontSize: { xs: '2rem', md: '2.5rem' },
                                fontWeight: 'bold',
                                color: theme.palette.text.primary,
                                mb: 2
                            }}
                        >
                            Here's what our homeowners have to say
                        </Typography>
                    </Box>

                    <Box
                        sx={{
                            display: 'flex',
                            gap: { xs: 3, md: 4 },
                            justifyContent: 'center',
                            alignItems: 'stretch',
                            flexWrap: { xs: 'wrap', md: 'nowrap' },
                            '& > *': {
                                flex: { xs: '1 1 100%', md: '1 1 300px' },
                                maxWidth: { xs: '100%', md: '400px' },
                                minWidth: { xs: '280px', md: '280px' }
                            }
                        }}
                    >
                        {/* Testimonial Card 1 */}
                        <Card
                            sx={{
                                borderRadius: 2,
                                overflow: 'hidden',
                                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
                                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                                '&:hover': {
                                    transform: 'translateY(-4px)',
                                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
                                },
                            }}
                        >
                            <Box sx={{ position: 'relative' }}>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                                    alt="Customer testimonial"
                                    sx={{ objectFit: 'cover' }}
                                />
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        bottom: 12,
                                        right: 12,
                                        width: 40,
                                        height: 40,
                                        borderRadius: '50%',
                                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            backgroundColor: 'white',
                                            transform: 'scale(1.1)',
                                        }
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: 0,
                                            height: 0,
                                            borderLeft: '12px solid #B28E52',
                                            borderTop: '8px solid transparent',
                                            borderBottom: '8px solid transparent',
                                            marginLeft: '3px'
                                        }}
                                    />
                                </Box>
                            </Box>
                            <CardContent sx={{ p: 3 }}>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: theme.palette.text.secondary,
                                        lineHeight: 1.6,
                                        mb: 3,
                                        fontStyle: 'italic',
                                        fontSize: '0.95rem'
                                    }}
                                >
                                    "Hats off to the entire team at KalaKruti. They finished the project ahead of time. They said 45 days but finished it much earlier."
                                </Typography>
                                <Box sx={{ borderTop: '1px solid #eee', pt: 2 }}>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontWeight: 'bold',
                                            color: theme.palette.text.primary,
                                            mb: 0.5,
                                            fontSize: '1rem'
                                        }}
                                    >
                                        Rohit Paul & Shveta
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{ color: '#666', fontSize: '0.9rem' }}
                                    >
                                        Modular kitchen, Gurugram
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>

                        {/* Testimonial Card 2 */}
                        <Card
                            sx={{
                                borderRadius: 2,
                                overflow: 'hidden',
                                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
                                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                                '&:hover': {
                                    transform: 'translateY(-4px)',
                                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
                                },
                            }}
                        >
                            <Box sx={{ position: 'relative' }}>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                                    alt="Customer testimonial"
                                    sx={{ objectFit: 'cover' }}
                                />
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        bottom: 12,
                                        right: 12,
                                        width: 40,
                                        height: 40,
                                        borderRadius: '50%',
                                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            backgroundColor: 'white',
                                            transform: 'scale(1.1)',
                                        }
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: 0,
                                            height: 0,
                                            borderLeft: '12px solid #B28E52',
                                            borderTop: '8px solid transparent',
                                            borderBottom: '8px solid transparent',
                                            marginLeft: '3px'
                                        }}
                                    />
                                </Box>
                            </Box>
                            <CardContent sx={{ p: 3 }}>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: theme.palette.text.secondary,
                                        lineHeight: 1.6,
                                        mb: 3,
                                        fontStyle: 'italic',
                                        fontSize: '0.95rem'
                                    }}
                                >
                                    "Our experience with KalaKruti was nice - thanks to the project managers. They worked so much on this project, and finished it on time."
                                </Typography>
                                <Box sx={{ borderTop: '1px solid #eee', pt: 2 }}>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontWeight: 'bold',
                                            color: theme.palette.text.primary,
                                            mb: 0.5,
                                            fontSize: '1rem'
                                        }}
                                    >
                                        Swati & Gaurav
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{ color: '#666', fontSize: '0.9rem' }}
                                    >
                                        2 BHK, Bangalore
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>

                        {/* Testimonial Card 3 */}
                        <Card
                            sx={{
                                borderRadius: 2,
                                overflow: 'hidden',
                                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
                                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                                '&:hover': {
                                    transform: 'translateY(-4px)',
                                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
                                },
                            }}
                        >
                            <Box sx={{ position: 'relative' }}>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                                    alt="Customer testimonial"
                                    sx={{ objectFit: 'cover' }}
                                />
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        bottom: 12,
                                        right: 12,
                                        width: 40,
                                        height: 40,
                                        borderRadius: '50%',
                                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            backgroundColor: 'white',
                                            transform: 'scale(1.1)',
                                        }
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: 0,
                                            height: 0,
                                            borderLeft: '12px solid #B28E52',
                                            borderTop: '8px solid transparent',
                                            borderBottom: '8px solid transparent',
                                            marginLeft: '3px'
                                        }}
                                    />
                                </Box>
                            </Box>
                            <CardContent sx={{ p: 3 }}>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        color: theme.palette.text.secondary,
                                        lineHeight: 1.6,
                                        mb: 3,
                                        fontStyle: 'italic',
                                        fontSize: '0.95rem'
                                    }}
                                >
                                    "This house is a part of me. We reached out to KalaKruti and they designed the house that we really wanted."
                                </Typography>
                                <Box sx={{ borderTop: '1px solid #eee', pt: 2 }}>
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontWeight: 'bold',
                                            color: theme.palette.text.primary,
                                            mb: 0.5,
                                            fontSize: '1rem'
                                        }}
                                    >
                                        Priya Sharma
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{ color: '#666', fontSize: '0.9rem' }}
                                    >
                                        4 BHK interiors, Gurugram
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Box>
                </Box>
            </Container>



        </Box>
    );
}