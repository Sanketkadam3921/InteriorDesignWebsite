import React from 'react';
import { Box } from '@mui/material';
import Hero from './Hero';
import HomeServices from './HomepageServices';
import HomeInspiration from './HomeInspiration';
import WhyChooseUs from './WhyChoose'; // ✅ new component
import Estimate from './Estimate';
import ThemeTest from '../../common/ThemeTest';
import Testimonials from './Testimonials';
export default function HomePage() {
    return (
        <Box>
            <Hero />
            <HomeServices />
            <HomeInspiration />
            <WhyChooseUs />   {/* ✅ add it here */}

            <Estimate />
            <Testimonials />  {/* ✅ Add it here */}

        </Box>
    );
}
