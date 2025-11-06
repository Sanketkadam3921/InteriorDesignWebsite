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
    Breadcrumbs,
    Stack,
    Divider,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Chip
} from '@mui/material';
import { Link } from 'react-router-dom';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ChatIcon from '@mui/icons-material/Chat';
import HomeIcon from '@mui/icons-material/Home';
import { ExpandMore } from '@mui/icons-material';
import themeNeutral from '../../../../themeNeutral';

// Styled components for custom styling
const HeroSection = styled(Box)(({ theme }) => ({
    position: 'relative',
    width: '100%',
    height: '70vh',
    minHeight: '500px',
    backgroundImage: `url('https://mydecomarketing.com/wp-content/uploads/2020/05/Living-Room-3D-Design-by-Anna-K-Studio.png')`,
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

function ModularInteriors() {
    const theme = useTheme();

    return (
        <Box sx={{
            overflowX: 'hidden',
            width: '100%',
            minHeight: '100vh',
            position: 'relative'
        }}>
            {/* Hero Section */}
            <HeroSection>
                <Box
                    sx={{
                        position: 'relative',
                        zIndex: 2,
                        textAlign: 'center',
                        color: 'white',
                        maxWidth: { xs: '100%', md: '800px' },
                        px: { xs: 3, md: 4 },
                    }}
                >
                    <Typography
                        variant="h1"
                        component="h1"
                        sx={{
                            fontSize: { xs: '1.8rem', md: '2.5rem', lg: '3rem' },
                            fontWeight: 'bold',
                            lineHeight: 1.2,
                            mb: 4,
                            color: 'white',
                            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                        }}
                    >
                        The finest choice in modular solutions
                    </Typography>

                    <Button
                        component={Link}
                        to="/offerings/book-online-consultation"
                        variant="contained"
                        size="medium"
                        sx={{
                            backgroundColor: themeNeutral.palette.primary.main,
                            color: themeNeutral.palette.primary.contrastText,
                            textTransform: 'none',
                            fontWeight: themeNeutral.typography.button.fontWeight,
                            px: { xs: 3, md: 4 },
                            py: { xs: 1.5, md: 2 },
                            fontSize: { xs: '0.9rem', md: '1rem' },
                            borderRadius: themeNeutral.components.MuiButton.styleOverrides.root.borderRadius,
                            boxShadow: '0 4px 16px rgba(80, 91, 95, 0.3)',
                            '&:hover': {
                                backgroundColor: themeNeutral.palette.primary.dark,
                                transform: 'translateY(-2px)',
                                boxShadow: '0 6px 20px rgba(80, 91, 95, 0.4)',
                            },
                            transition: themeNeutral.components.MuiButton.styleOverrides.root.transition,
                        }}
                    >
                        Book Online Consultation
                    </Button>
                </Box>
            </HeroSection>

            {/* Main Content Section */}
            <Container maxWidth="lg" sx={{ py: 4, px: { xs: 2, sm: 3, md: 4 } }}>

                {/* Main Heading */}
                <Typography
                    variant="h2"
                    component="h1"
                    sx={{
                        fontSize: { xs: '1.5rem', md: '2.5rem' },
                        fontWeight: themeNeutral.typography.h2.fontWeight,
                        color: themeNeutral.palette.text.primary,
                        mb: 3,
                        lineHeight: 1.2
                    }}
                >
                    Modular Interior Solutions
                </Typography>

                {/* Description */}
                <Typography
                    variant="body1"
                    sx={{
                        fontSize: { xs: '1rem', md: '1.1rem' },
                        color: themeNeutral.palette.text.secondary,
                        lineHeight: themeNeutral.typography.body1.lineHeight,
                        mb: 3,
                        maxWidth: { xs: '100%', md: '1000px' }
                    }}
                >
                    Transform your spaces with our premium modular interior solutions. From custom kitchens to smart wardrobes,
                    we create functional and beautiful storage solutions tailored to your lifestyle.
                </Typography>

                {/* What we offer section */}
                <Box sx={{
                    mt: 8,
                    backgroundColor: '#f8f9fa',
                    borderRadius: 2,
                    p: 4
                }}>
                    <Typography
                        variant="h3"
                        component="h2"
                        sx={{
                            fontSize: { xs: '1.4rem', md: '1.8rem' },
                            fontWeight: themeNeutral.typography.h3.fontWeight,
                            color: themeNeutral.palette.text.primary,
                            mb: 4
                        }}
                    >
                        What we offer
                    </Typography>

                    <Box
                        sx={{
                            display: 'flex',
                            gap: 3,
                            justifyContent: 'center',
                            alignItems: 'stretch',
                            flexWrap: { xs: 'wrap', md: 'nowrap' },
                            '& > *': {
                                flex: { xs: '1 1 100%', sm: '1 1 300px' },
                                maxWidth: { xs: '100%', sm: '350px' },
                                minWidth: { xs: '280px', sm: '280px' }
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
                                            color: themeNeutral.palette.text.primary,
                                            mb: 1,
                                            fontSize: '1.1rem'
                                        }}
                                    >
                                        Interior Design
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{ lineHeight: 1.5, fontSize: '0.9rem', mb: 2 }}
                                    >
                                        Expert design consultation and space planning to create your dream home.
                                    </Typography>
                                    <Typography
                                        component={Link}
                                        to="/offerings/learn-more"
                                        sx={{
                                            color: themeNeutral.palette.primary.main,
                                            textDecoration: 'none',
                                            fontSize: '0.9rem',
                                            fontWeight: 'bold',
                                            '&:hover': {
                                                textDecoration: 'underline'
                                            }
                                        }}
                                    >
                                        Learn more →
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
                                            color: themeNeutral.palette.text.primary,
                                            mb: 1,
                                            fontSize: '1.1rem'
                                        }}
                                    >
                                        Construction & Installation
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{ lineHeight: 1.5, fontSize: '0.9rem', mb: 2 }}
                                    >
                                        Professional construction and installation services for all your interior needs.
                                    </Typography>
                                    <Typography
                                        component={Link}
                                        to="/offerings/learn-more"
                                        sx={{
                                            color: themeNeutral.palette.primary.main,
                                            textDecoration: 'none',
                                            fontSize: '0.9rem',
                                            fontWeight: 'bold',
                                            '&:hover': {
                                                textDecoration: 'underline'
                                            }
                                        }}
                                    >
                                        Learn more →
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
                                            color: themeNeutral.palette.text.primary,
                                            mb: 1,
                                            fontSize: '1.1rem'
                                        }}
                                    >
                                        Kitchen Design
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{ lineHeight: 1.5, fontSize: '0.9rem', mb: 2 }}
                                    >
                                        Modern kitchen designs with premium materials and smart storage solutions.
                                    </Typography>
                                    <Typography
                                        component={Link}
                                        to="/offerings/learn-more"
                                        sx={{
                                            color: themeNeutral.palette.primary.main,
                                            textDecoration: 'none',
                                            fontSize: '0.9rem',
                                            fontWeight: 'bold',
                                            '&:hover': {
                                                textDecoration: 'underline'
                                            }
                                        }}
                                    >
                                        Learn more →
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Box>

                    {/* Description below cards */}
                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: { xs: '1rem', md: '1.1rem' },
                            color: themeNeutral.palette.text.secondary,
                            lineHeight: 1.3,
                            mt: 4,
                            textAlign: 'left',
                            maxWidth: '100%'
                        }}
                    >
                        Does your project scope require services like electrical or plumbing? We'll take care of it. Happen to need services beyond the scope of your project? With KalaKruti's excellent partner network it's easy to find the right people for your job.
                    </Typography>
                </Box>





                {/*    What goes into crafting the best section */}
              {

              }
                

                {/* Technology that makes our products long lasting section */}
              

                {/* How it works section */}
              



                {/* Testimonials Section */}
                <Container maxWidth="lg" sx={{ py: 4, px: { xs: 2, sm: 3, md: 4 } }}>
                    <Box sx={{
                        backgroundColor: '#f8f9fa',
                        borderRadius: 2,
                        p: 4,
                        mb: 3
                    }}>
                        <Box sx={{ textAlign: 'center', mb: 6 }}>
                            <Typography
                                variant="h2"
                                component="h2"
                                sx={{
                                    fontSize: { xs: '1.4rem', md: '1.8rem' },
                                    fontWeight: themeNeutral.typography.h2.fontWeight,
                                    color: themeNeutral.palette.text.primary,
                                    mb: 2
                                }}
                            >
                                Here's what our homeowners have to say
                            </Typography>
                        </Box>

                        <Box
                            sx={{
                                display: 'flex',
                                gap: 4,
                                justifyContent: 'center',
                                alignItems: 'stretch',
                                flexWrap: { xs: 'wrap', md: 'nowrap' },
                                '& > *': {
                                    flex: { xs: '1 1 100%', sm: '1 1 300px' },
                                    maxWidth: { xs: '100%', sm: '400px' },
                                    minWidth: { xs: '280px', sm: '280px' }
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
                                                borderLeft: '12px solid #B1B6B8',
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
                                            color: themeNeutral.palette.text.secondary,
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
                                                fontWeight: themeNeutral.typography.button.fontWeight,
                                                color: themeNeutral.palette.text.primary,
                                                mb: 0.5,
                                                fontSize: '1rem'
                                            }}
                                        >
                                            Rohit Paul & Shveta
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{ color: themeNeutral.palette.text.secondary, fontSize: '0.9rem' }}
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
                                                borderLeft: '12px solid #B1B6B8',
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
                                            color: themeNeutral.palette.text.secondary,
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
                                                fontWeight: themeNeutral.typography.button.fontWeight,
                                                color: themeNeutral.palette.text.primary,
                                                mb: 0.5,
                                                fontSize: '1rem'
                                            }}
                                        >
                                            Swati & Gaurav
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{ color: themeNeutral.palette.text.secondary, fontSize: '0.9rem' }}
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
                                                borderLeft: '12px solid #B1B6B8',
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
                                            color: themeNeutral.palette.text.secondary,
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
                                                fontWeight: themeNeutral.typography.button.fontWeight,
                                                color: themeNeutral.palette.text.primary,
                                                mb: 0.5,
                                                fontSize: '1rem'
                                            }}
                                        >
                                            Priya Sharma
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{ color: themeNeutral.palette.text.secondary, fontSize: '0.9rem' }}
                                        >
                                            4 BHK interiors, Gurugram
                                        </Typography>
                                    </Box>
                                </CardContent>
                            </Card>
                        </Box>
                    </Box>
                </Container>

                {/* 45-day Move-in Guarantee Section */}
             

                {/* FAQ Section */}
                <Box
                    sx={{
                        backgroundColor: theme.palette.background.paper,
                        py: { xs: 6, md: 10 },
                        mt: 1,
                        mb: 8
                    }}
                >
                    <Container maxWidth="lg">
                        {/* Title Section */}
                        <Box sx={{ textAlign: "left", mb: 6 }}>
                            <Typography
                                variant="h3"
                                component="h2"
                                sx={{
                                    fontWeight: 700,
                                    color: theme.palette.text.primary,
                                    fontSize: { xs: "1.8rem", md: "2.4rem" },
                                    mb: 2,
                                }}
                            >
                                Frequently Asked Questions
                            </Typography>

                            <Typography
                                variant="subtitle1"
                                sx={{
                                    color: theme.palette.text.secondary,
                                    fontSize: { xs: "1rem", md: "1.1rem" },
                                    maxWidth: 800,
                                    lineHeight: 1.7,
                                }}
                            >
                                Find answers to common questions about our modular kitchen solutions,
                                customization options, and design process.
                            </Typography>
                        </Box>

                        {/* FAQ Accordions */}
                        <Box sx={{ width: "100%" }}>
                            {/* FAQ Item 1 */}
                            <Accordion
                                sx={{
                                    mb: 2,
                                    "&:before": { display: "none" },
                                    borderRadius: 3,
                                    overflow: "hidden",
                                    boxShadow: "0 6px 20px rgba(0,0,0,0.05)",
                                    backgroundColor: theme.palette.background.paper,
                                    transition: "all 0.3s ease",
                                    "&:hover": {
                                        boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                                    },
                                }}
                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMore sx={{ color: theme.palette.primary.main }} />}
                                    sx={{
                                        backgroundColor: theme.palette.background.paper,
                                        "&:hover": {
                                            backgroundColor: theme.palette.action.hover,
                                        },
                                    }}
                                >
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontWeight: 600,
                                            color: theme.palette.text.primary,
                                            fontSize: { xs: "1rem", md: "1.1rem" },
                                        }}
                                    >
                                        What makes KalaKruti modular kitchens different from traditional kitchens?
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
                                        sx={{
                                            lineHeight: 1.8,
                                            color: theme.palette.text.secondary,
                                            fontSize: { xs: "0.95rem", md: "1rem" },
                                        }}
                                    >
                                        Our modular kitchens are precision-engineered with 4-sigma accuracy and come with a flat 10-year warranty.
                                        Unlike traditional kitchens, they feature pre-fabricated modules that are manufactured in controlled environments,
                                        ensuring consistent quality, faster installation, and better durability. Each module is designed to fit perfectly
                                        and can be easily replaced or modified as your needs change.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                            {/* FAQ Item 2 */}
                            <Accordion
                                sx={{
                                    mb: 2,
                                    "&:before": { display: "none" },
                                    borderRadius: 3,
                                    overflow: "hidden",
                                    boxShadow: "0 6px 20px rgba(0,0,0,0.05)",
                                    backgroundColor: theme.palette.background.paper,
                                    transition: "all 0.3s ease",
                                    "&:hover": {
                                        boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                                    },
                                }}
                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMore sx={{ color: theme.palette.primary.main }} />}
                                    sx={{
                                        backgroundColor: theme.palette.background.paper,
                                        "&:hover": {
                                            backgroundColor: theme.palette.action.hover,
                                        },
                                    }}
                                >
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontWeight: 600,
                                            color: theme.palette.text.primary,
                                            fontSize: { xs: "1rem", md: "1.1rem" },
                                        }}
                                    >
                                        How much does a modular kitchen cost and what factors affect the pricing?
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
                                        sx={{
                                            lineHeight: 1.8,
                                            color: theme.palette.text.secondary,
                                            fontSize: { xs: "0.95rem", md: "1rem" },
                                        }}
                                    >
                                        Modular kitchen pricing typically ranges from ₹2-8 lakhs depending on size, materials, and finishes.
                                        Key factors include kitchen dimensions, choice of shutters (laminates, acrylic, or solid wood),
                                        hardware quality, countertop material (granite, quartz, or marble), and additional features like
                                        soft-close mechanisms, LED lighting, and smart storage solutions. We provide transparent pricing
                                        with no hidden costs and detailed breakdowns.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                            {/* FAQ Item 3 */}
                            <Accordion
                                sx={{
                                    mb: 2,
                                    "&:before": { display: "none" },
                                    borderRadius: 3,
                                    overflow: "hidden",
                                    boxShadow: "0 6px 20px rgba(0,0,0,0.05)",
                                    backgroundColor: theme.palette.background.paper,
                                    transition: "all 0.3s ease",
                                    "&:hover": {
                                        boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                                    },
                                }}
                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMore sx={{ color: theme.palette.primary.main }} />}
                                    sx={{
                                        backgroundColor: theme.palette.background.paper,
                                        "&:hover": {
                                            backgroundColor: theme.palette.action.hover,
                                        },
                                    }}
                                >
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontWeight: 600,
                                            color: theme.palette.text.primary,
                                            fontSize: { xs: "1rem", md: "1.1rem" },
                                        }}
                                    >
                                        How long does it take to install a modular kitchen?
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
                                        sx={{
                                            lineHeight: 1.8,
                                            color: theme.palette.text.secondary,
                                            fontSize: { xs: "0.95rem", md: "1rem" },
                                        }}
                                    >
                                        Modular kitchen installation typically takes 3-7 days depending on the complexity and size.
                                        Since all modules are pre-fabricated in our factory, the on-site installation is much faster
                                        compared to traditional kitchens. Our skilled technicians ensure precise fitting and minimal
                                        disruption to your daily routine. We also provide a 45-day move-in guarantee for complete projects.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                            {/* FAQ Item 4 */}
                            <Accordion
                                sx={{
                                    mb: 2,
                                    "&:before": { display: "none" },
                                    borderRadius: 3,
                                    overflow: "hidden",
                                    boxShadow: "0 6px 20px rgba(0,0,0,0.05)",
                                    backgroundColor: theme.palette.background.paper,
                                    transition: "all 0.3s ease",
                                    "&:hover": {
                                        boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                                    },
                                }}
                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMore sx={{ color: theme.palette.primary.main }} />}
                                    sx={{
                                        backgroundColor: theme.palette.background.paper,
                                        "&:hover": {
                                            backgroundColor: theme.palette.action.hover,
                                        },
                                    }}
                                >
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontWeight: 600,
                                            color: theme.palette.text.primary,
                                            fontSize: { xs: "1rem", md: "1.1rem" },
                                        }}
                                    >
                                        What materials and finishes are available for modular kitchens?
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
                                        sx={{
                                            lineHeight: 1.8,
                                            color: theme.palette.text.secondary,
                                            fontSize: { xs: "0.95rem", md: "1rem" },
                                        }}
                                    >
                                        We offer a wide range of materials including laminates, acrylic, PVC, and solid wood shutters.
                                        For countertops, you can choose from granite, quartz, marble, or engineered stone. Our hardware
                                        includes premium brands with soft-close mechanisms, full-extension drawers, and ergonomic handles.
                                        All materials are sourced from certified suppliers and come with quality guarantees. We also offer
                                        custom color matching and texture options to match your home's aesthetic.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>

                            {/* FAQ Item 5 */}
                            <Accordion
                                sx={{
                                    mb: 2,
                                    "&:before": { display: "none" },
                                    borderRadius: 3,
                                    overflow: "hidden",
                                    boxShadow: "0 6px 20px rgba(0,0,0,0.05)",
                                    backgroundColor: theme.palette.background.paper,
                                    transition: "all 0.3s ease",
                                    "&:hover": {
                                        boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                                    },
                                }}
                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMore sx={{ color: theme.palette.primary.main }} />}
                                    sx={{
                                        backgroundColor: theme.palette.background.paper,
                                        "&:hover": {
                                            backgroundColor: theme.palette.action.hover,
                                        },
                                    }}
                                >
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            fontWeight: 600,
                                            color: theme.palette.text.primary,
                                            fontSize: { xs: "1rem", md: "1.1rem" },
                                        }}
                                    >
                                        Do you provide warranty and after-sales service for modular kitchens?
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
                                        sx={{
                                            lineHeight: 1.8,
                                            color: theme.palette.text.secondary,
                                            fontSize: { xs: "0.95rem", md: "1rem" },
                                        }}
                                    >
                                        Yes, we provide a comprehensive 10-year warranty on all our modular kitchen components including shutters,
                                        hardware, and structural elements. Our after-sales service includes free maintenance for the first year,
                                        repair services, and replacement of defective parts. We have a dedicated customer support team and service
                                        centers across major cities. All warranty terms are clearly documented and we ensure quick resolution
                                        of any issues that may arise.
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </Box>

                        {/* Contact CTA */}
                        <Box
                            sx={{
                                textAlign: "center",
                                mt: 10,
                                py: { xs: 6, md: 8 },
                                backgroundColor: theme.palette.grey[100], // light grey background
                                borderRadius: 3,
                            }}
                        >
                            <Typography
                                variant="h5"
                                sx={{
                                    fontWeight: 700,
                                    color: theme.palette.text.primary,
                                    mb: 1.5,
                                    fontSize: { xs: "1.4rem", md: "1.8rem" },
                                }}
                            >
                                Still have questions?
                            </Typography>

                            <Typography
                                variant="body1"
                                sx={{
                                    color: theme.palette.text.secondary,
                                    mb: 4,
                                    maxWidth: 700,
                                    mx: "auto",
                                    lineHeight: 1.7,
                                    fontSize: { xs: "0.95rem", md: "1rem" },
                                }}
                            >
                                Our modular kitchen design experts are here to help you with any specific
                                questions about pricing, materials, customizations, or design solutions for your
                                dream kitchen.
                            </Typography>

                            <Chip
                                label="Contact Us"
                                onClick={() => (window.location.href = "/contact")}
                                variant="outlined"
                                sx={{
                                    fontWeight: 600,
                                    borderRadius: 3,
                                    color: theme.palette.primary.main,
                                    borderColor: theme.palette.primary.main,
                                    px: 2.8,
                                    py: 1,
                                    fontSize: "1rem",
                                    cursor: "pointer",
                                    transition: "all 0.3s ease",
                                    "&:hover": {
                                        backgroundColor: theme.palette.primary.main,
                                        color: theme.palette.primary.contrastText,
                                        transform: "translateY(-2px)",
                                        boxShadow: `0 4px 12px ${theme.palette.primary.main}40`,
                                    },
                                }}
                            />
                        </Box>
                    </Container>
                </Box>

                {/* Floating Chat Widget */}
                <FloatingWidget
                    sx={{
                        bottom: 20,
                        right: 20,
                    }}
                >
                    <Box
                        sx={{
                            position: 'relative',
                            cursor: 'pointer',
                        }}
                    >
                        {/* Speech Bubble */}
                        {/* <Box
            sx={{
              position: 'absolute',
              bottom: '100%',
              right: 0,
              mb: 1,
              backgroundColor: 'white',
              color: '#333',
              padding: '8px 12px',
              borderRadius: '20px',
              fontSize: '0.8rem',
              fontWeight: '500',
              boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
              whiteSpace: 'nowrap',
              '&::after': {
                content: '""',
                position: 'absolute',
                top: '100%',
                right: '20px',
                width: 0,
                height: 0,
                borderLeft: '8px solid transparent',
                borderRight: '8px solid transparent',
                borderTop: '8px solid white',
              }
            }}
          >
            Need help with modular interiors?
          </Box> */}

                        {/* Chat Icon */}
                        {/* <IconButton
            sx={{
              width: 60,
              height: 60,
              backgroundColor: '#B1B6B8',
              color: 'white',
              borderRadius: '50%',
              boxShadow: '0 4px 16px rgba(177, 182, 184, 0.3)',
              '&:hover': {
                backgroundColor: '#92A3AB',
                transform: 'scale(1.05)',
              },
              transition: 'all 0.3s ease',
            }}
          >
            <ChatIcon sx={{ fontSize: '1.5rem' }} />
          </IconButton> */}
                    </Box>
                </FloatingWidget>
            </Container>
        </Box>
    )
}

export default ModularInteriors