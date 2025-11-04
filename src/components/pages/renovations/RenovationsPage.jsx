import React from 'react';
import Hero from './Hero';
import RenovationSteps from './Renovationssteps';
import HowItWorks from './Howitworks';
import WhatWeOffer from './Whatweoffer';
import TypeOfHome from './TypeOfHome';

const RenovationsPage = () => {
    return (
        <>
            <Hero />
            <RenovationSteps />
            <WhatWeOffer />
            <HowItWorks />

            <TypeOfHome />
        </>
    );
};

export default RenovationsPage;
