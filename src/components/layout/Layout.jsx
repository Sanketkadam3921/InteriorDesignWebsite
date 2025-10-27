import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import Header from '../main/Header';
import Footer from '../main/Footer';

export default function Layout() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
                overflowX: 'hidden', // ✅ Prevent any horizontal scroll or shift
                width: '100%',
            }}
        >
            <Header />

            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    pt: isMobile ? '60px' : '70px', // ✅ Reduced to match new header height
                    pb: isMobile ? '0px' : 0,
                    overflowX: 'hidden',
                }}
            >

                <Outlet />
            </Box>

            <Footer />
        </Box>
    );
}
