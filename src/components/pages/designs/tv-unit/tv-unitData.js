// TV Unit Designs Data
export const tvunitDesigns = [
    {
        id: '1',
        name: 'Modern TV Unit Design',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500',
        description: 'Beautiful and functional tv unit design with modern aesthetics',
        style: 'Modern',
        price: '₹2,50,000',
        area: '100 sq ft'
    }
];

// TV Unit Design Details Data
export const tvunitDesignDetails = {
    '1': {
        id: '1',
        title: 'Modern TV Unit Design',
        category: 'tv-unit',
        style: 'Modern',
        price: '₹2,50,000',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800',
        description: 'Beautiful and functional tv unit design with modern aesthetics.',
        longDescription: 'This modern tv unit design features contemporary elements and functional layout.',
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

// TV Unit Category Configuration
export const tvunitConfig = {
    categoryKey: 'tv-unit',
    displayName: 'TV Unit',
    description: 'Explore our curated collection of tv unit design concepts'
};