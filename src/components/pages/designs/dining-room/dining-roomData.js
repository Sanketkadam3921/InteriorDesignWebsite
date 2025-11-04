// Dining Room Designs Data
export const diningroomDesigns = [
    {
        id: '1',
        name: 'Modern Dining Room Design',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500',
        description: 'Beautiful and functional dining room design with modern aesthetics',
        style: 'Modern',
        price: '₹2,50,000',
        area: '100 sq ft'
    }
];

// Dining Room Design Details Data
export const diningroomDesignDetails = {
    '1': {
        id: '1',
        title: 'Modern Dining Room Design',
        category: 'dining-room',
        style: 'Modern',
        price: '₹2,50,000',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800',
        description: 'Beautiful and functional dining room design with modern aesthetics.',
        longDescription: 'This modern dining room design features contemporary elements and functional layout.',
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

// Dining Room Category Configuration
export const diningroomConfig = {
    categoryKey: 'dining-room',
    displayName: 'Dining Room',
    description: 'Explore our curated collection of dining room design concepts'
};