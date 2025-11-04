// Kitchen Designs Data
export const kitchenDesigns = [
    {
        id: '1',
        name: 'Modern Modular Kitchen with Island',
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500',
        description: 'A contemporary modular kitchen featuring a central island and breakfast counter',
        style: 'Modern',
        price: '₹4,50,000',
        area: '120 sq ft'
    },
    {
        id: '2',
        name: 'Compact U-Shaped Kitchen',
        image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500',
        description: 'An efficient U-shaped kitchen design that maximizes storage and functionality',
        style: 'Contemporary',
        price: '₹3,20,000',
        area: '80 sq ft'
    }
];

// Kitchen Design Details Data
export const kitchenDesignDetails = {
    "1": {
        id: "1",
        title: "Modern Modular Kitchen with Island and Breakfast Counter",
        category: "kitchen",
        style: "Modern",
        price: "₹4,50,000",
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800",
        description: "A contemporary modular kitchen featuring a central island, breakfast counter, and premium finishes for the perfect cooking and dining experience.",
        specifications: {
            dimension: "12x10 feet",
            color: "White, Gray, Wood",
            furniture: "Modular Cabinets, Island, Breakfast Counter",
            lighting: "LED Under-cabinet, Pendant Lights",
            materials: "Laminate, Granite, Stainless Steel",
        },
        sections: [
            {
                title: "Kitchen Layout",
                items: [
                    "L-shaped layout maximizes space efficiency and workflow.",
                    "Central island provides additional prep space and storage.",
                    "Breakfast counter creates casual dining area within the kitchen.",
                    "Ample counter space for multiple cooking activities.",
                ],
            },
            {
                title: "Storage Solutions",
                items: [
                    "Floor-to-ceiling cabinets maximize vertical storage.",
                    "Pull-out drawers and organizers for easy access.",
                    "Island includes built-in wine rack and utensil storage.",
                    "Pantry-style storage for bulk items and appliances.",
                ],
            },
            {
                title: "Premium Features",
                items: [
                    "Granite countertops provide durability and elegance.",
                    "Stainless steel appliances create a professional look.",
                    "Soft-close cabinet doors and drawers for quiet operation.",
                    "LED lighting system ensures proper illumination for cooking.",
                ],
            },
        ],
        idealFor: "Cooking enthusiasts and families who love to entertain",
        images: [
            "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800",
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800",
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800",
            "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800",
        ],
    },
    "2": {
        id: "2",
        title: "Compact U-Shaped Kitchen with Smart Storage",
        category: "kitchen",
        style: "Contemporary",
        price: "₹3,20,000",
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800",
        description: "An efficient U-shaped kitchen design that maximizes storage and functionality in a compact space with smart organizational features.",
        specifications: {
            dimension: "10x8 feet",
            color: "White, Navy Blue",
            furniture: "U-shaped Cabinets, Pull-out Pantry",
            lighting: "Recessed LED, Under-cabinet Strips",
            materials: "High-gloss Laminate, Quartz, Chrome",
        },
        sections: [
            {
                title: "Space Optimization",
                items: [
                    "U-shaped layout creates efficient work triangle.",
                    "Corner cabinets with lazy susan for easy access.",
                    "Pull-out pantry maximizes vertical storage space.",
                    "Compact design perfect for smaller homes.",
                ],
            },
            {
                title: "Smart Features",
                items: [
                    "Soft-close mechanisms on all doors and drawers.",
                    "Built-in spice racks and utensil organizers.",
                    "Pull-out trash and recycling bins.",
                    "Adjustable shelving for flexible storage needs.",
                ],
            },
            {
                title: "Modern Aesthetics",
                items: [
                    "High-gloss white cabinets create bright, clean look.",
                    "Navy blue accent wall adds depth and sophistication.",
                    "Quartz countertops provide durability and easy maintenance.",
                    "Chrome hardware adds contemporary finishing touches.",
                ],
            },
        ],
        idealFor: "Small families and urban apartments",
        images: [
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800",
            "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800",
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800",
            "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800",
        ],
    },
};

// Kitchen Category Configuration
export const kitchenConfig = {
    categoryKey: 'kitchen',
    displayName: 'Kitchen',
    description: 'Explore our curated collection of modular kitchen design concepts',
    icon: 'kitchen',
    color: '#FF6B6B',
    featured: true,
    totalDesigns: 2
};