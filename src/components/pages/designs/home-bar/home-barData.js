// Home Bar Designs Data
export const homebarDesigns = [
    {
        id: '1',
        name: 'Modern Home Bar Design',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500',
        description: 'Beautiful and functional home bar design with modern aesthetics',
        style: 'Modern',
        price: '₹2,50,000',
        area: '100 sq ft'
    }
];

// Home Bar Design Details Data
export const homebarDesignDetails = {
    '1': {
        id: '1',
        title: 'Modern Home Bar Design',
        category: 'home-bar',
        style: 'Modern',
        price: '₹2,50,000',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800',
        description: 'Beautiful and functional home bar design with modern aesthetics.',
        longDescription: 'This modern home bar design features contemporary elements and functional layout.',
        images: [
            'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800',
            'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800'
        ],
        features: [
            'Modern Design',
            'Functional Layout',
            'Quality Materials',
            'Contemporary Style'
        ],
        specifications: {
            area: '100 sq ft',
            style: 'Modern',
            colorScheme: 'Neutral',
            materials: 'Premium Materials',
            lighting: 'LED Lighting',
            furniture: 'Modern + Functional'
        }
    }
};

// Home Bar Category Configuration
export const homebarConfig = {
    categoryKey: 'home-bar',
    displayName: 'Home Bar',
    description: 'Explore our curated collection of home bar design concepts'
};