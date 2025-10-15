import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import Header from '../main/Header';
import Footer from '../main/Footer';
import Headertwo from '../main/Headertwo';

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
            {!isMobile && <Headertwo />}

            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    pt: isMobile ? '72px' : '170px',
                    pb: isMobile ? '0px' : 0,
                    overflowX: 'hidden', // ✅ Protect main content as well
                }}
            >
                <Outlet />
            </Box>

            <Footer />

            {/* Headertwo at bottom for mobile */}
            {isMobile && <Headertwo />}
        </Box>
    );
}
