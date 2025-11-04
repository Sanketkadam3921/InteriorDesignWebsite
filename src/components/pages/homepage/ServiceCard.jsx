import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

export default function ServiceCard({ title, description }) {
    return (
        <Card
            sx={{
                height: '100%',           // let Grid control height
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                textAlign: 'center',
                p: 2,
                borderRadius: 3,
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                "&:hover": {
                    transform: 'translateY(-6px)',
                    boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
                },
            }}
        >
            <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Typography variant="h5" gutterBottom fontWeight={600}>
                    {title}
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ px: 1 }}>
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
}
