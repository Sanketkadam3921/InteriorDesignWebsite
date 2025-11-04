// Balcony Designs Data
export const balconyDesigns = [
    {
        id: '1',
        name: 'Modern Balcony Design',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500',
        description: 'Beautiful and functional balcony design with modern aesthetics',
        style: 'Modern',
        price: '₹2,50,000',
        area: '100 sq ft'
    }
];

// Balcony Design Details Data
export const balconyDesignDetails = {
    '1': {
        id: '1',
        title: 'Modern Balcony Design',
        category: 'balcony',
        style: 'Modern',
        price: '₹2,50,000',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800',
        description: 'Beautiful and functional balcony design with modern aesthetics.',
        longDescription: 'This modern balcony design features contemporary elements and functional layout.',
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

// Balcony Category Configuration
export const balconyConfig = {
    categoryKey: 'balcony',
    displayName: 'Balcony',
    description: 'Explore our curated collection of balcony design concepts'
};