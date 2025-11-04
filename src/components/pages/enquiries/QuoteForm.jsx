import React, { useState } from 'react';
import {
    Box,
    Container,
    Typography,
    TextField,
    Button,
    Card,
    FormControlLabel,
    Checkbox,
    useTheme,
} from '@mui/material';

export default function QuoteForm() {
    const theme = useTheme();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        propertyName: '',
        whatsappUpdates: true
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
        // You can add API call or other logic here
    };

    return (
        <Box sx={{ mt: 6, mb: 4 }}>
            <Container maxWidth="lg">
                <Card
                    sx={{
                        width: '100%',
                        borderRadius: 3,
                        overflow: 'hidden',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
                        background: `linear-gradient(135deg, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.dark} 100%)`
                    }}
                >
                    <Box sx={{ display: 'flex', minHeight: '400px' }}>
                        {/* Left Side - Form */}
                        <Box
                            sx={{
                                flex: 1,
                                p: { xs: 3, md: 5 },
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                color: 'white'
                            }}
                        >
                            <Typography
                                variant="h3"
                                component="h2"
                                sx={{
                                    fontWeight: 'bold',
                                    mb: 2,
                                    fontSize: { xs: '1.8rem', md: '2.5rem' },
                                    lineHeight: 1.2
                                }}
                            >
                                Designs for Every Budget
                            </Typography>

                            <Typography
                                variant="h6"
                                sx={{
                                    mb: 4,
                                    opacity: 0.9,
                                    fontSize: { xs: '1rem', md: '1.1rem' },
                                    lineHeight: 1.4
                                }}
                            >
                                Get your dream home today. Let our experts help you
                            </Typography>

                            <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                                <TextField
                                    fullWidth
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Name"
                                    variant="outlined"
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            backgroundColor: 'white',
                                            borderRadius: 2,
                                            '& fieldset': {
                                                border: 'none'
                                            },
                                            '&:hover fieldset': {
                                                border: 'none'
                                            },
                                            '&.Mui-focused fieldset': {
                                                border: `2px solid ${theme.palette.primary.main}`
                                            }
                                        },
                                        '& .MuiInputBase-input': {
                                            py: 1.5,
                                            px: 2,
                                            fontSize: '1rem'
                                        }
                                    }}
                                />

                                <TextField
                                    fullWidth
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email"
                                    type="email"
                                    variant="outlined"
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            backgroundColor: 'white',
                                            borderRadius: 2,
                                            '& fieldset': {
                                                border: 'none'
                                            },
                                            '&:hover fieldset': {
                                                border: 'none'
                                            },
                                            '&.Mui-focused fieldset': {
                                                border: `2px solid ${theme.palette.primary.main}`
                                            }
                                        },
                                        '& .MuiInputBase-input': {
                                            py: 1.5,
                                            px: 2,
                                            fontSize: '1rem'
                                        }
                                    }}
                                />

                                <Box sx={{ display: 'flex', gap: 1 }}>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            px: 2,
                                            py: 1.5,
                                            border: 'none',
                                            borderRadius: 2,
                                            backgroundColor: 'white',
                                            minWidth: '90px',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: 20,
                                                height: 15,
                                                backgroundColor: theme.palette.primary.main,
                                                borderRadius: '2px',
                                                mr: 1,
                                                position: 'relative'
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    position: 'absolute',
                                                    top: '50%',
                                                    left: '50%',
                                                    transform: 'translate(-50%, -50%)',
                                                    width: 0,
                                                    height: 0,
                                                    borderLeft: '3px solid transparent',
                                                    borderRight: '3px solid transparent',
                                                    borderTop: '4px solid white'
                                                }}
                                            />
                                        </Box>
                                        <Typography variant="body2" sx={{ fontSize: '0.875rem', color: '#333' }}>
                                            +91
                                        </Typography>
                                    </Box>
                                    <TextField
                                        fullWidth
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder="Phone Number"
                                        type="tel"
                                        variant="outlined"
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                backgroundColor: 'white',
                                                borderRadius: 2,
                                                '& fieldset': {
                                                    border: 'none'
                                                },
                                                '&:hover fieldset': {
                                                    border: 'none'
                                                },
                                                '&.Mui-focused fieldset': {
                                                    border: `2px solid ${theme.palette.primary.main}`
                                                }
                                            },
                                            '& .MuiInputBase-input': {
                                                py: 1.5,
                                                px: 2,
                                                fontSize: '1rem'
                                            }
                                        }}
                                    />
                                </Box>

                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            name="whatsappUpdates"
                                            checked={formData.whatsappUpdates}
                                            onChange={handleChange}
                                            sx={{
                                                color: 'white',
                                                '&.Mui-checked': {
                                                    color: 'white'
                                                }
                                            }}
                                        />
                                    }
                                    label="Send me updates on WhatsApp"
                                    sx={{
                                        color: 'white',
                                        alignItems: 'flex-start',
                                        '& .MuiFormControlLabel-label': {
                                            fontSize: '0.9rem'
                                        }
                                    }}
                                />

                                <TextField
                                    fullWidth
                                    name="propertyName"
                                    value={formData.propertyName}
                                    onChange={handleChange}
                                    placeholder="Property Name"
                                    variant="outlined"
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            backgroundColor: 'white',
                                            borderRadius: 2,
                                            '& fieldset': {
                                                border: 'none'
                                            },
                                            '&:hover fieldset': {
                                                border: 'none'
                                            },
                                            '&.Mui-focused fieldset': {
                                                border: `2px solid ${theme.palette.primary.main}`
                                            }
                                        },
                                        '& .MuiInputBase-input': {
                                            py: 1.5,
                                            px: 2,
                                            fontSize: '1rem'
                                        }
                                    }}
                                />

                                <Button
                                    type="submit"
                                    variant="contained"
                                    fullWidth
                                    sx={{
                                        backgroundColor: theme.palette.primary.main,
                                        color: 'white',
                                        textTransform: 'uppercase',
                                        fontWeight: 'bold',
                                        py: 2,
                                        fontSize: '1rem',
                                        borderRadius: 2,
                                        mt: 2,
                                        '&:hover': {
                                            backgroundColor: theme.palette.primary.dark,
                                            transform: 'translateY(-2px)',
                                            boxShadow: `0 4px 12px ${theme.palette.primary.main}40`
                                        },
                                        transition: 'all 0.3s ease-in-out'
                                    }}
                                >
                                    Get Free Quote
                                </Button>
                            </Box>
                        </Box>

                        {/* Right Side - Image */}
                        <Box
                            sx={{
                                flex: 1,
                                display: { xs: 'none', md: 'block' },
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            <Box
                                component="img"
                                src="https://d2emch4msrhe87.cloudfront.net/image/data/modular%20kitchen/22.jpg"
                                alt="Modern Kitchen Design"
                                sx={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    objectPosition: 'center'
                                }}
                            />
                            {/* Gradient overlay for better text contrast if needed */}
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    background: 'linear-gradient(45deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.05) 100%)'
                                }}
                            />
                        </Box>
                    </Box>
                </Card>
            </Container>
        </Box>
    );
}
