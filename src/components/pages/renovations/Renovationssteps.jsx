import React from 'react';
import { Box, Typography, Container, Avatar } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const RenovationSteps = () => {
    const theme = useTheme();

    const features = [
        {
            icon: 'https://cdn-icons-png.flaticon.com/128/1077/1077976.png', // Hassle-free experience
            title: 'Hassle-free experience',
            description: 'Enjoy smooth planning, quick execution, and zero stress throughout your renovation journey.',
        },
        {
            icon: 'https://cdn-icons-png.flaticon.com/128/340/340313.png', // End-to-end service
            title: 'End-to-end service',
            description: 'We handle everything—from design to delivery—ensuring complete peace of mind.',
        },
        {
            icon: 'https://cdn-icons-png.flaticon.com/128/17659/17659898.png', // Certified experts
            title: 'Certified experts',
            description: 'Our skilled and verified professionals deliver top-quality craftsmanship and reliability.',
        },
    ];

    return (
        <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: 'white' }}>
            <Container>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: { xs: 4, md: 8 },
                        flexWrap: 'wrap',
                    }}
                >
                    {features.map((feature, index) => (
                        <Box
                            key={index}
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center',
                                flex: { xs: '1 1 100%', sm: '1 1 45%', md: '1' },
                                maxWidth: { xs: '300px', md: '220px' },
                            }}
                        >
                            {/* Icon */}
                            <Avatar
                                src={feature.icon}
                                alt={feature.title}
                                sx={{
                                    width: 80,
                                    height: 80,
                                    backgroundColor: theme.palette.background.paper,
                                    border: `1px solid ${theme.palette.neutral.lightGray}`,
                                    boxShadow: '0 4px 10px rgba(0,0,0,0.08)',
                                    p: 2,
                                    mb: 2,
                                }}
                            />

                            {/* Title */}
                            <Typography
                                variant="h6"
                                sx={{
                                    fontWeight: 600,
                                    color: theme.palette.text.primary,
                                    mb: 1,
                                    fontFamily: theme.typography.fontFamily,
                                }}
                            >
                                {feature.title}
                            </Typography>

                            {/* Description */}
                            <Typography
                                variant="body2"
                                sx={{
                                    color: theme.palette.text.secondary,
                                    fontSize: '0.95rem',
                                    lineHeight: 1.5,
                                    fontFamily: theme.typography.fontFamily,
                                    maxWidth: 220,
                                }}
                            >
                                {feature.description}
                            </Typography>
                        </Box>
                    ))}
                </Box>
            </Container>
        </Box>
    );
};

export default RenovationSteps;
