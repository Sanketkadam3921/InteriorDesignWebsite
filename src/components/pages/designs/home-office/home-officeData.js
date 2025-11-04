// Home Office Designs Data
export const homeofficeDesigns = [
    {
        id: '1',
        name: 'Modern Home Office Design',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500',
        description: 'Beautiful and functional home office design with modern aesthetics',
        style: 'Modern',
        price: '₹2,50,000',
        area: '100 sq ft'
    }
];

// Home Office Design Details Data
export const homeofficeDesignDetails = {
    '1': {
        id: '1',
        title: 'Modern Home Office Design',
        category: 'home-office',
        style: 'Modern',
        price: '₹2,50,000',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800',
        description: 'Beautiful and functional home office design with modern aesthetics.',
        longDescription: 'This modern home office design features contemporary elements and functional layout.',
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

// Home Office Category Configuration
export const homeofficeConfig = {
    categoryKey: 'home-office',
    displayName: 'Home Office',
    description: 'Explore our curated collection of home office design concepts'
};