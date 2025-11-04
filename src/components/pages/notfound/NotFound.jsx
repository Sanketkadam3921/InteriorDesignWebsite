import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { Home, ArrowBack } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <Container maxWidth="md" sx={{ py: 8, textAlign: 'center' }}>
            <Typography variant="h1" component="h1" sx={{ fontSize: '6rem', fontWeight: 'bold', color: 'primary.main', mb: 2 }}>
                404
            </Typography>
            <Typography variant="h4" component="h2" gutterBottom>
                Page Not Found
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
                The page you're looking for doesn't exist or has been moved.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                <Button
                    variant="contained"
                    size="large"
                    startIcon={<Home />}
                    onClick={() => navigate('/')}
                    sx={{ px: 4 }}
                >
                    Go Home
                </Button>
                <Button
                    variant="outlined"
                    size="large"
                    startIcon={<ArrowBack />}
                    onClick={() => navigate(-1)}
                    sx={{ px: 4 }}
                >
                    Go Back
                </Button>
            </Box>
        </Container>
    );
}

