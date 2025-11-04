// Study Room Designs Data
export const studyroomDesigns = [
    {
        id: '1',
        name: 'Modern Study Room Design',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500',
        description: 'Beautiful and functional study room design with modern aesthetics',
        style: 'Modern',
        price: '₹2,50,000',
        area: '100 sq ft'
    }
];

// Study Room Design Details Data
export const studyroomDesignDetails = {
    '1': {
        id: '1',
        title: 'Modern Study Room Design',
        category: 'study-room',
        style: 'Modern',
        price: '₹2,50,000',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800',
        description: 'Beautiful and functional study room design with modern aesthetics.',
        longDescription: 'This modern study room design features contemporary elements and functional layout.',
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

// Study Room Category Configuration
export const studyroomConfig = {
    categoryKey: 'study-room',
    displayName: 'Study Room',
    description: 'Explore our curated collection of study room design concepts'
};