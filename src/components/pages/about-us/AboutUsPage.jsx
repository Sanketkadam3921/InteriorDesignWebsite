import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, Paper, Fab, Chip, Avatar, IconButton } from '@mui/material';
import PeopleIcon from '@mui/icons-material/People';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import PublicIcon from '@mui/icons-material/Public';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import StarIcon from '@mui/icons-material/Star';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function AboutUsPage() {
    return (
        <Box sx={{ minHeight: '100vh' }}>
            {/* Hero Image Section */}
            <Box
                sx={{
                    position: 'relative',
                    width: '100%',
                    height: { xs: '60vh', sm: '70vh', md: '80vh' },
                    backgroundImage: 'url("https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2016&q=80")',
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
                        backgroundColor: 'rgba(44, 17, 17, 0.3)',
                        zIndex: 1,
                    }
                }}
            >
                {/* Trust Badge */}
                <Box
                    sx={{
                        position: 'absolute',
                        top: { xs: 20, sm: 30 },
                        right: { xs: 20, sm: 30 },
                        zIndex: 3,
                        display: { xs: 'none', sm: 'block' }
                    }}
                >
                    {/* <Chip
                        icon={<StarIcon sx={{ color: '#FFD700' }} />}
                        label="INDIA'S MOST TRUSTED HOME INTERIORS BRAND"
                        sx={{
                            backgroundColor: 'rgba(255, 255, 255, 0.95)',
                            color: '#505B5F',
                            fontWeight: 'bold',
                            fontSize: '0.8rem',
                            px: 2,
                            py: 1,
                            borderRadius: 2,
                            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                            '& .MuiChip-icon': {
                                color: '#FFD700',
                                fontSize: '1.2rem'
                            }
                        }}
                    /> */}
                </Box>


                <Box
                    sx={{
                        position: 'absolute',
                        bottom: { xs: 80, sm: 100 },
                        right: { xs: 90, sm: 110 },
                        zIndex: 3,
                        backgroundColor: 'rgba(255, 255, 255, 0.95)',
                        borderRadius: 2,
                        px: 2,
                        py: 1,
                        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                        display: { xs: 'none', md: 'block' },
                        '&::after': {
                            content: '""',
                            position: 'absolute',
                            bottom: 8,
                            right: -8,
                            width: 0,
                            height: 0,
                            borderLeft: '8px solid rgba(255, 255, 255, 0.95)',
                            borderTop: '8px solid transparent',
                            borderBottom: '8px solid transparent',
                        }
                    }}
                >
                    {/* <Typography variant="body2" sx={{ color: '#505B5F', fontWeight: 'medium' }}>
                        We're online. How may I assist you?
                    </Typography> */}
                </Box>

                {/* Hero Content */}
                <Box
                    sx={{
                        position: 'relative',
                        zIndex: 2,
                        textAlign: 'center',
                        color: 'white',
                        px: 3,
                        maxWidth: '800px'
                    }}
                >
                    <Typography
                        variant="h2"
                        component="h1"
                        gutterBottom
                        sx={{
                            fontWeight: 'bold',
                            mb: 3,
                            color: 'white',
                            textShadow: '2px 2px 4px rgba(121, 124, 113, 0.9)',
                            fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' }
                        }}
                    >
                        About KalaKruti Studio
                    </Typography>
                    <Typography
                        variant="h5"
                        sx={{
                            fontWeight: 'normal',
                            color: 'white',
                            textShadow: '1px 1px 2px rgba(129, 131, 125, 0.9)',
                            fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.6rem' },
                            lineHeight: 1.4
                        }}
                    >
                        Your trusted partner in creating beautiful, functional, and inspiring interior spaces
                    </Typography>
                </Box>
            </Box>

            {/* Main Content Section */}
            <Box sx={{ py: 8, backgroundColor: '#f8f9fa' }}>
                <Container maxWidth="lg">
                    <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
                        {/* <Typography 
                        variant="h3" 
                        component="h1" 
                        gutterBottom 
                        sx={{ 
                            textAlign: 'center', 
                            color: '#B28E52',
                            fontWeight: 'bold',
                            mb: 4
                        }}
                    >
                        About KalaKruti Studio
                    </Typography> */}
                        {/*                     
                    <Typography 
                        variant="h6" 
                        sx={{ 
                            textAlign: 'center', 
                            color: '#666',
                            mb: 4,
                            lineHeight: 1.6
                        }}
                    >
                        Your trusted partner in creating beautiful, functional, and inspiring interior spaces.
                    </Typography> */}

                        <Grid container spacing={4}>
                            <Grid item xs={12} md={6}>
                                <Card sx={{ height: '100%', p: 3 }}>
                                    <CardContent>
                                        <Typography variant="h5" gutterBottom sx={{ color: '#a09e9cff', fontWeight: 'bold' }}>
                                            Our Mission
                                        </Typography>
                                        <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                                            At KalaKruti Studio, we believe that every space has the potential to tell a story.
                                            Our mission is to transform your vision into reality through innovative design,
                                            quality craftsmanship, and personalized attention to detail.
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <Card sx={{ height: '100%', p: 3 }}>
                                    <CardContent>
                                        <Typography variant="h5" gutterBottom sx={{ color: '#585755ff', fontWeight: 'bold' }}>
                                            Our Vision
                                        </Typography>
                                        <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                                            To be the leading interior design studio that creates spaces that not only look
                                            beautiful but also enhance the quality of life for our clients. We strive to
                                            push the boundaries of design while maintaining functionality and sustainability.
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <Card sx={{ height: '100%', p: 3 }}>
                                    <CardContent>
                                        <Typography variant="h5" gutterBottom sx={{ color: '#777470ff', fontWeight: 'bold' }}>
                                            Why Choose KalaKruti Studio?
                                        </Typography>
                                        <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                                            With years of experience in interior design and a passion for creating exceptional spaces,
                                            we bring together creativity, functionality, and quality to deliver results that exceed expectations.
                                            Our team of skilled designers and craftsmen work closely with you to understand your needs and
                                            bring your dream space to life.
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>

                        </Grid>
                    </Paper>

                    {/* Our Growth Journey Section */}
                    <Box sx={{ mt: 8, mb: 8 }}>
                        <Container maxWidth="lg">
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
                                <CardContent sx={{ p: 6 }}>
                                    <Typography
                                        variant="h4"
                                        component="h2"
                                        gutterBottom
                                        sx={{
                                            textAlign: 'center',
                                            color: '#505B5F',
                                            fontWeight: 'bold',
                                            mb: 3
                                        }}
                                    >
                                        Our Growth Journey
                                    </Typography>

                                    <Typography
                                        variant="body1"
                                        sx={{
                                            textAlign: 'center',
                                            color: '#666',
                                            maxWidth: 800,
                                            mx: 'auto',
                                            mb: 5,
                                            lineHeight: 1.6,
                                            fontSize: '1.1rem'
                                        }}
                                    >
                                    </Typography>

                                    <Grid container spacing={4}>
                                        <Grid item xs={12} md={6}>
                                            <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 4 }}>
                                                <Box
                                                    sx={{
                                                        width: 60,
                                                        height: 60,
                                                        borderRadius: '50%',
                                                        backgroundColor: '#6d6b67ff',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        mr: 3,
                                                        flexShrink: 0
                                                    }}
                                                >
                                                    <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold' }}>
                                                        2018
                                                    </Typography>
                                                </Box>
                                                <Box>
                                                    <Typography
                                                        variant="h6"
                                                        sx={{
                                                            color: '#505B5F',
                                                            fontWeight: 'bold',
                                                            mb: 1
                                                        }}
                                                    >
                                                        The Beginning
                                                    </Typography>
                                                    <Typography
                                                        variant="body1"
                                                        sx={{
                                                            color: '#666',
                                                            lineHeight: 1.6
                                                        }}
                                                    >
                                                        Started as a small design studio with a vision to revolutionize interior design.
                                                        Our first project was a modest 2BHK apartment that set the foundation for our design philosophy.
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Grid>

                                        <Grid item xs={12} md={6}>
                                            <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 4 }}>
                                                <Box
                                                    sx={{
                                                        width: 60,
                                                        height: 60,
                                                        borderRadius: '50%',
                                                        backgroundColor: '#86847fff',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        mr: 3,
                                                        flexShrink: 0
                                                    }}
                                                >
                                                    <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold' }}>
                                                        2020
                                                    </Typography>
                                                </Box>
                                                <Box>
                                                    <Typography
                                                        variant="h6"
                                                        sx={{
                                                            color: '#505B5F',
                                                            fontWeight: 'bold',
                                                            mb: 1
                                                        }}
                                                    >
                                                        Digital Transformation
                                                    </Typography>
                                                    <Typography
                                                        variant="body1"
                                                        sx={{
                                                            color: '#666',
                                                            lineHeight: 1.6
                                                        }}
                                                    >
                                                        Launched our virtual design consultation services and 3D visualization platform.
                                                        This innovation helped us serve clients across multiple cities during challenging times.
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Grid>

                                        <Grid item xs={12} md={6}>
                                            <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 4 }}>
                                                <Box
                                                    sx={{
                                                        width: 60,
                                                        height: 60,
                                                        borderRadius: '50%',
                                                        backgroundColor: '#999690ff',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        mr: 3,
                                                        flexShrink: 0
                                                    }}
                                                >
                                                    <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold' }}>
                                                        2022
                                                    </Typography>
                                                </Box>
                                                <Box>
                                                    <Typography
                                                        variant="h6"
                                                        sx={{
                                                            color: '#505B5F',
                                                            fontWeight: 'bold',
                                                            mb: 1
                                                        }}
                                                    >
                                                        National Expansion
                                                    </Typography>
                                                    <Typography
                                                        variant="body1"
                                                        sx={{
                                                            color: '#666',
                                                            lineHeight: 1.6
                                                        }}
                                                    >
                                                        Expanded our services to 3 major cities with a team of 50+ expert designers.
                                                        Completed over 1000 projects and established ourselves as a trusted brand.
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Grid>

                                        <Grid item xs={12} md={6}>
                                            <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 4 }}>
                                                <Box
                                                    sx={{
                                                        width: 60,
                                                        height: 60,
                                                        borderRadius: '50%',
                                                        backgroundColor: '#8b8a87ff',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        mr: 3,
                                                        flexShrink: 0
                                                    }}
                                                >
                                                    <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold' }}>
                                                        2024
                                                    </Typography>
                                                </Box>
                                                <Box>
                                                    <Typography
                                                        variant="h6"
                                                        sx={{
                                                            color: '#505B5F',
                                                            fontWeight: 'bold',
                                                            mb: 1
                                                        }}
                                                    >
                                                        Innovation & Excellence
                                                    </Typography>
                                                    <Typography
                                                        variant="body1"
                                                        sx={{
                                                            color: '#666',
                                                            lineHeight: 1.6
                                                        }}
                                                    >
                                                        Today, we're proud to have transformed over 75,000 homes with cutting-edge design solutions,
                                                        sustainable practices, and an unwavering commitment to customer satisfaction.
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Container>
                    </Box>

                    {/* Founders Section */}
                    <Box sx={{ mt: 8 }}>
                        <Container maxWidth="lg">
                            <Typography
                                variant="h4"
                                component="h2"
                                gutterBottom
                                sx={{
                                    textAlign: 'center',
                                    color: '#505B5F',
                                    fontWeight: 'bold',
                                    mb: 6
                                }}
                            >
                                Meet Our Founders
                            </Typography>

                            <Grid container spacing={4} justifyContent="center">
                                <Grid item xs={12} md={6}>
                                    <Card
                                        sx={{
                                            height: '100%',
                                            borderRadius: 3,
                                            boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                            '&:hover': {
                                                transform: 'translateY(-4px)',
                                                boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                                            }
                                        }}
                                    >
                                        <CardContent sx={{ p: 4, textAlign: 'center' }}>
                                            <Avatar
                                                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                                                sx={{
                                                    width: 120,
                                                    height: 120,
                                                    mx: 'auto',
                                                    mb: 3,
                                                    border: '4px solid #8f8c88ff'
                                                }}
                                            />
                                            <Typography
                                                variant="h5"
                                                sx={{
                                                    color: '#505B5F',
                                                    fontWeight: 'bold',
                                                    mb: 1
                                                }}
                                            >
                                                Rajesh Kumar
                                            </Typography>
                                            <Typography
                                                variant="h6"
                                                sx={{
                                                    color: '#B28E52',
                                                    fontWeight: 'medium',
                                                    mb: 2
                                                }}
                                            >
                                                Co-Founder & CEO
                                            </Typography>
                                            <Typography
                                                variant="body1"
                                                sx={{
                                                    color: '#666',
                                                    lineHeight: 1.6,
                                                    mb: 3
                                                }}
                                            >
                                                With over 15 years of experience in interior design and architecture,
                                                Rajesh leads our vision of creating beautiful, functional spaces that
                                                enhance the quality of life for our clients.
                                            </Typography>
                                            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
                                                <IconButton size="small" sx={{ color: '#868686ff' }}>
                                                    <LinkedInIcon />
                                                </IconButton>

                                                <IconButton size="small" sx={{ color: '#635c5eff' }}>
                                                    <InstagramIcon />
                                                </IconButton>

                                                <IconButton size="small" sx={{ color: '#686868ff' }}>
                                                    <FacebookIcon />
                                                </IconButton>

                                                <IconButton size="small" sx={{ color: '#6d6f70ff' }}>
                                                    <TwitterIcon />
                                                </IconButton>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </Grid>

                                <Grid item xs={12} md={6}>
                                    <Card
                                        sx={{
                                            height: '100%',
                                            borderRadius: 3,
                                            boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                            '&:hover': {
                                                transform: 'translateY(-4px)',
                                                boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                                            }
                                        }}
                                    >
                                        <CardContent sx={{ p: 4, textAlign: 'center' }}>
                                            <Avatar
                                                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                                                sx={{
                                                    width: 120,
                                                    height: 120,
                                                    mx: 'auto',
                                                    mb: 3,
                                                    border: '4px solid #B28E52'
                                                }}
                                            />
                                            <Typography
                                                variant="h5"
                                                sx={{
                                                    color: '#505B5F',
                                                    fontWeight: 'bold',
                                                    mb: 1
                                                }}
                                            >
                                                Priya Sharma
                                            </Typography>
                                            <Typography
                                                variant="h6"
                                                sx={{
                                                    color: '#B28E52',
                                                    fontWeight: 'medium',
                                                    mb: 2
                                                }}
                                            >
                                                Co-Founder & Creative Director
                                            </Typography>
                                            <Typography
                                                variant="body1"
                                                sx={{
                                                    color: '#666',
                                                    lineHeight: 1.6,
                                                    mb: 3
                                                }}
                                            >
                                                A creative visionary with expertise in modern interior design trends,
                                                Priya brings innovative ideas and artistic flair to every project,
                                                ensuring each space tells a unique story.
                                            </Typography>
                                            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
                                                <IconButton size="small" sx={{ color: '#0077B5' }}>
                                                    <LinkedInIcon />
                                                </IconButton>
                                                <IconButton size="small" sx={{ color: '#E4405F' }}>
                                                    <InstagramIcon />
                                                </IconButton>
                                                <IconButton size="small" sx={{ color: '#4267B2' }}>
                                                    <FacebookIcon />
                                                </IconButton>
                                                <IconButton size="small" sx={{ color: '#1DA1F2' }}>
                                                    <TwitterIcon />
                                                </IconButton>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Container>
                    </Box>

                    {/* Team Section */}
                    <Box sx={{ mt: 8, py: 6, backgroundColor: '#F8F8F8', borderRadius: 3 }}>
                        <Container maxWidth="lg">
                            <Typography
                                variant="h4"
                                component="h2"
                                gutterBottom
                                sx={{
                                    textAlign: 'center',
                                    color: '#505B5F',
                                    fontWeight: 'bold',
                                    mb: 6
                                }}
                            >
                                Our Amazing Team
                            </Typography>

                            <Box
                                sx={{
                                    display: 'flex',
                                    gap: 3,
                                    overflowX: 'auto',
                                    pb: 2,
                                    '&::-webkit-scrollbar': {
                                        height: 8,
                                    },
                                    '&::-webkit-scrollbar-track': {
                                        backgroundColor: '#f1f1f1',
                                        borderRadius: 4,
                                    },
                                    '&::-webkit-scrollbar-thumb': {
                                        backgroundColor: '#B28E52',
                                        borderRadius: 4,
                                        '&:hover': {
                                            backgroundColor: '#9A7A45',
                                        },
                                    },
                                }}
                            >
                                {[
                                    { name: 'Amit Patel', role: 'Senior Designer', image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80' },
                                    { name: 'Sneha Reddy', role: 'Project Manager', image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80' },
                                    { name: 'Vikram Singh', role: 'Architect', image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80' },
                                    { name: 'Anita Joshi', role: 'Color Specialist', image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80' },
                                    { name: 'Rohit Agarwal', role: '3D Visualizer', image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80' },
                                    { name: 'Kavya Nair', role: 'Interior Stylist', image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80' },
                                    { name: 'Arjun Mehta', role: 'Space Planner', image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80' },
                                    { name: 'Divya Iyer', role: 'Material Expert', image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80' }
                                ].map((member, index) => (
                                    <Card
                                        key={index}
                                        sx={{
                                            minWidth: 280,
                                            borderRadius: 3,
                                            boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                            '&:hover': {
                                                transform: 'translateY(-4px)',
                                                boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                                            }
                                        }}
                                    >
                                        <CardContent sx={{ p: 3, textAlign: 'center' }}>
                                            <Avatar
                                                src={member.image}
                                                sx={{
                                                    width: 80,
                                                    height: 80,
                                                    mx: 'auto',
                                                    mb: 2,
                                                    border: '3px solid #B28E52'
                                                }}
                                            />
                                            <Typography
                                                variant="h6"
                                                sx={{
                                                    color: '#505B5F',
                                                    fontWeight: 'bold',
                                                    mb: 0.5
                                                }}
                                            >
                                                {member.name}
                                            </Typography>
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    color: '#B28E52',
                                                    fontWeight: 'medium'
                                                }}
                                            >
                                                {member.role}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                ))}
                            </Box>
                        </Container>
                    </Box>

                    {/* Stats Section */}
                    <Box sx={{ mt: 8, py: 6, backgroundColor: '#F8F8F8', borderRadius: 3 }}>
                        <Container maxWidth="lg">
                            <Typography
                                variant="h4"
                                component="h2"
                                gutterBottom
                                sx={{
                                    textAlign: 'center',
                                    color: '#505B5F',
                                    fontWeight: 'bold',
                                    mb: 6
                                }}
                            >
                                We'll let our numbers do the talking
                            </Typography>

                            <Grid container spacing={4} justifyContent="center" sx={{ maxWidth: 1400, mx: 'auto' }}>
                                <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex' }}>
                                    <Card
                                        sx={{
                                            height: '100%',
                                            width: '100%',
                                            minHeight: 280,
                                            textAlign: 'center',
                                            borderRadius: 3,
                                            boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            '&:hover': {
                                                transform: 'translateY(-4px)',
                                                boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                                            }
                                        }}
                                    >
                                        <CardContent sx={{ p: 5, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                            <Box
                                                sx={{
                                                    width: 100,
                                                    height: 100,
                                                    borderRadius: '50%',
                                                    backgroundColor: '#ECE9E3',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    mx: 'auto',
                                                    mb: 4,
                                                    position: 'relative'
                                                }}
                                            >
                                                <PeopleIcon sx={{ fontSize: 50, color: '#B28E52' }} />
                                                <Box
                                                    sx={{
                                                        position: 'absolute',
                                                        top: -4,
                                                        right: -4,
                                                        width: 24,
                                                        height: 24,
                                                        borderRadius: '50%',
                                                        backgroundColor: '#B28E52',
                                                        border: '2px solid white',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center'
                                                    }}
                                                >
                                                    <Typography variant="caption" sx={{ color: 'white', fontSize: '10px', fontWeight: 'bold' }}>
                                                        +
                                                    </Typography>
                                                </Box>
                                            </Box>
                                            <Typography
                                                variant="h3"
                                                sx={{
                                                    color: '#505B5F',
                                                    fontWeight: 'bold',
                                                    mb: 1,
                                                    fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' }
                                                }}
                                            >
                                                75,000+
                                            </Typography>
                                            <Typography
                                                variant="h6"
                                                sx={{
                                                    color: '#505B5F',
                                                    fontWeight: 'normal',
                                                    fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' }
                                                }}
                                            >
                                                #KalaKrutiHomes
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>

                                <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex' }}>
                                    <Card
                                        sx={{
                                            height: '100%',
                                            width: '100%',
                                            minHeight: 280,
                                            textAlign: 'center',
                                            borderRadius: 3,
                                            boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            '&:hover': {
                                                transform: 'translateY(-4px)',
                                                boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                                            }
                                        }}
                                    >
                                        <CardContent sx={{ p: 5, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                            <Box
                                                sx={{
                                                    width: 100,
                                                    height: 100,
                                                    borderRadius: '50%',
                                                    backgroundColor: '#ECE9E3',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    mx: 'auto',
                                                    mb: 4,
                                                    position: 'relative'
                                                }}
                                            >
                                                <DesignServicesIcon sx={{ fontSize: 50, color: '#B28E52' }} />
                                                <Box
                                                    sx={{
                                                        position: 'absolute',
                                                        top: -4,
                                                        right: -4,
                                                        width: 24,
                                                        height: 24,
                                                        borderRadius: '50%',
                                                        backgroundColor: '#B28E52',
                                                        border: '2px solid white',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center'
                                                    }}
                                                >
                                                    <Typography variant="caption" sx={{ color: 'white', fontSize: '10px', fontWeight: 'bold' }}>
                                                        +
                                                    </Typography>
                                                </Box>
                                            </Box>
                                            <Typography
                                                variant="h3"
                                                sx={{
                                                    color: '#505B5F',
                                                    fontWeight: 'bold',
                                                    mb: 1,
                                                    fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' }
                                                }}
                                            >
                                                3,500+
                                            </Typography>
                                            <Typography
                                                variant="h6"
                                                sx={{
                                                    color: '#505B5F',
                                                    fontWeight: 'normal',
                                                    fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' }
                                                }}
                                            >
                                                expert designers
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>

                                <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex' }}>
                                    <Card
                                        sx={{
                                            height: '100%',
                                            width: '100%',
                                            minHeight: 280,
                                            textAlign: 'center',
                                            borderRadius: 3,
                                            boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            '&:hover': {
                                                transform: 'translateY(-4px)',
                                                boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                                            }
                                        }}
                                    >
                                        <CardContent sx={{ p: 5, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                            <Box
                                                sx={{
                                                    width: 100,
                                                    height: 100,
                                                    borderRadius: '50%',
                                                    backgroundColor: '#ECE9E3',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    mx: 'auto',
                                                    mb: 4,
                                                    position: 'relative'
                                                }}
                                            >
                                                <PublicIcon sx={{ fontSize: 50, color: '#B28E52' }} />
                                                <Box
                                                    sx={{
                                                        position: 'absolute',
                                                        top: -4,
                                                        right: -4,
                                                        width: 24,
                                                        height: 24,
                                                        borderRadius: '50%',
                                                        backgroundColor: '#B28E52',
                                                        border: '2px solid white',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center'
                                                    }}
                                                >
                                                    <Typography variant="caption" sx={{ color: 'white', fontSize: '10px', fontWeight: 'bold' }}>
                                                        02
                                                    </Typography>
                                                </Box>
                                            </Box>
                                            <Typography
                                                variant="h3"
                                                sx={{
                                                    color: '#505B5F',
                                                    fontWeight: 'bold',
                                                    mb: 1,
                                                    fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' }
                                                }}
                                            >
                                                3 countries
                                            </Typography>
                                            <Typography
                                                variant="h6"
                                                sx={{
                                                    color: '#505B5F',
                                                    fontWeight: 'normal',
                                                    fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' }
                                                }}
                                            >
                                                60+ cities
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Container>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
}