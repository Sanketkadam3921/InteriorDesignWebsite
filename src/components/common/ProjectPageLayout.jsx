import React from 'react';
import { Container, Box, Button, Typography, useTheme } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

export default function ProjectPageLayout({
    children,
    title,
    subtitle,
    showBackButton = true,
    backButtonText = "Back to Projects",
    backButtonPath = "/projects",
    maxWidth = "xl"
}) {
    const theme = useTheme();
    const navigate = useNavigate();

    return (
        <Box sx={{
            minHeight: '100vh',
            backgroundColor: theme.palette.background.default,
            pt: { xs: 2, sm: 3, md: 4 }, // Consistent top padding
            pb: { xs: 4, sm: 6, md: 8 }   // Consistent bottom padding
        }}>
            <Container maxWidth={maxWidth} sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
                {/* Back Button - Consistent positioning */}
                {showBackButton && (
                    <Button
                        startIcon={<ArrowBack />}
                        onClick={() => navigate(backButtonPath)}
                        sx={{
                            mb: 4,
                            px: 0,
                            color: theme.palette.text.secondary,
                            '&:hover': {
                                backgroundColor: theme.palette.action.hover,
                                color: theme.palette.text.primary,
                            },
                            fontWeight: 500,
                            textTransform: 'none',
                            fontSize: '1rem'
                        }}
                    >
                        {backButtonText}
                    </Button>
                )}

                {/* Page Title Section - Consistent styling */}
                {(title || subtitle) && (
                    <Box sx={{
                        textAlign: "left",
                        mb: 6,
                        maxWidth: '100%'
                    }}>
                        {title && (
                            <Typography
                                variant="h3"
                                component="h1"
                                sx={{
                                    fontWeight: 700,
                                    mb: 2,
                                    color: theme.palette.text.primary,
                                    fontSize: { xs: '1.8rem', sm: '2.2rem', md: '2.5rem' },
                                    lineHeight: 1.2,
                                }}
                            >
                                {title}
                            </Typography>
                        )}

                        {subtitle && (
                            <Typography
                                variant="h6"
                                color="text.secondary"
                                sx={{
                                    maxWidth: 700,
                                    lineHeight: 1.6,
                                    textAlign: "left",
                                    fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
                                }}
                            >
                                {subtitle}
                            </Typography>
                        )}
                    </Box>
                )}

                {/* Content Area */}
                <Box sx={{ width: '100%' }}>
                    {children}
                </Box>
            </Container>
        </Box>
    );
}
