// Wall Paint Designs Data
export const wallpaintDesigns = [
    {
        id: '1',
        name: 'Modern Wall Paint Design',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500',
        description: 'Beautiful and functional wall paint design with modern aesthetics',
        style: 'Modern',
        price: '₹2,50,000',
        area: '100 sq ft'
    }
];

// Wall Paint Design Details Data
export const wallpaintDesignDetails = {
    '1': {
        id: '1',
        title: 'Modern Wall Paint Design',
        category: 'wall-paint',
        style: 'Modern',
        price: '₹2,50,000',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800',
        description: 'Beautiful and functional wall paint design with modern aesthetics.',
        longDescription: 'This modern wall paint design features contemporary elements and functional layout.',
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

// Wall Paint Category Configuration
export const wallpaintConfig = {
    categoryKey: 'wall-paint',
    displayName: 'Wall Paint',
    description: 'Explore our curated collection of wall paint design concepts'
};