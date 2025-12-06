import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import themeNeutral from '../../../../../themeNeutral';

export default function WhyChooseItem({ title }) {
    return (
        <Card
            sx={{
                height: '100%',
                borderRadius: 3,
                overflow: 'hidden',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
                },
            }}
        >
            <CardContent 
                sx={{ 
                    p: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: 120
                }}
            >
                <Box
                    sx={{
                        fontSize: '2rem',
                        color: themeNeutral.palette.primary.main,
                        mb: 2,
                        fontWeight: 'bold'
                    }}
                >
                    ✔
                </Box>
                <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                        fontWeight: 'bold',
                        color: themeNeutral.palette.text.primary,
                        textAlign: 'center',
                        fontSize: '1.2rem'
                    }}
                >
                    {title}
                </Typography>
            </CardContent>
        </Card>
    );
}

