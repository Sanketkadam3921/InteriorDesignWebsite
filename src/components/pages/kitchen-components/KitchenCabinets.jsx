import React, { useState } from 'react';
import {
    Box,
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    CardMedia,
    Button,
    Chip,
    Breadcrumbs,
    Link,
    useTheme,
    styled,
    Tabs,
    Tab
} from '@mui/material';
import { ArrowBack, Home, Kitchen } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

// Styled components for hero section
const HeroSection = styled(Box)(({ theme }) => ({
    position: 'relative',
    width: '100%',
    height: '50vh',
    minHeight: '250px',
    backgroundImage: `url('https://www.shutterstock.com/image-photo/this-modern-kitchen-showcases-vibrant-260nw-2676112627.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 1,
    },
}));

export default function KitchenCabinets() {
    const navigate = useNavigate();
    const theme = useTheme();
    const [activeTab, setActiveTab] = useState(0);

    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
    };

    const cabinetData = {
        baseUnits: [
            {
                id: 1,
                title: "Sink Unit",
                description: "Specialized base cabinet designed to house your kitchen sink with proper plumbing access.",
                shortOverview: "A durable under-sink base unit with easy access doors—ideal for water lines and cleaning supplies.",
                image: "https://images.livspace-cdn.com/w:654/h:450/plain/https://imgs.livspace.com/2625972-original/short-base-unit.jpg",
                tags: ["Aarambh by KalaKruti", "Premium"],
                inStock: "Yes",
                // price: "Starting from ₹18,000"
            },
            {
                id: 2,
                title: "Blind Corner Unit, 1 Shelf",
                description: "Smart corner solutions with single shelf for organized storage in corner spaces.",
                shortOverview: "Maximize corner space with this smart storage solution featuring a single shelf for organized corner storage.",
                image: "https://images.livspace-cdn.com/w:654/h:450/plain/https://imgs.livspace.com/2626143-original/base-unit-3-ss-drawers-2m-1l.jpg",
                tags: ["Semi Modular Metal"],
                inStock: "Yes",
                // price: "Starting from ₹15,000"
            },
            {
                id: 3,
                title: "Blind Corner Unit, 2 Dee Trays",
                description: "Advanced corner solutions with two Dee-shaped pull-out trays for maximum corner utilization.",
                shortOverview: "Advanced corner storage with two Dee-shaped pull-out trays for maximum space utilization and easy access.",
                image: "https://images.livspace-cdn.com/w:654/h:450/plain/https://imgs.livspace.com/2630147-original/short-base-unit.jpg",
                tags: ["Premium"],
                inStock: "Yes",
                // price: "Starting from ₹22,000"
            },
            {
                id: 4,
                title: "Sink Unit",
                description: "Specialized base cabinet designed to house your kitchen sink with proper plumbing access.",
                shortOverview: "A durable under-sink base unit with easy access doors—ideal for water lines and cleaning supplies.",
                image: "https://images.livspace-cdn.com/w:654/h:450/plain/https://imgs.livspace.com/2625972-original/short-base-unit.jpg",
                tags: ["Aarambh by KalaKruti", "Premium"],
                inStock: "Yes",
                // price: "Starting from ₹18,000"
            },
            {
                id: 5,
                title: "Blind Corner Unit, 1 Shelf",
                description: "Smart corner solutions with single shelf for organized storage in corner spaces.",
                shortOverview: "Maximize corner space with this smart storage solution featuring a single shelf for organized corner storage.",
                image: "https://images.livspace-cdn.com/w:654/h:450/plain/https://imgs.livspace.com/2626143-original/base-unit-3-ss-drawers-2m-1l.jpg",
                tags: ["Semi Modular Metal"],
                inStock: "Yes",
                // price: "Starting from ₹15,000"
            },
            {
                id: 6,
                title: "Blind Corner Unit, 2 Dee Trays",
                description: "Advanced corner solutions with two Dee-shaped pull-out trays for maximum corner utilization.",
                shortOverview: "Advanced corner storage with two Dee-shaped pull-out trays for maximum space utilization and easy access.",
                image: "https://images.livspace-cdn.com/w:654/h:450/plain/https://imgs.livspace.com/2630147-original/short-base-unit.jpg",
                tags: ["Premium"],
                inStock: "Yes",
                // price: "Starting from ₹22,000"
            }
        ],
        wallUnits: [
            {
                id: 1,
                title: "Glass Door Wall Unit",
                description: "Upper-level cabinets with glass doors to showcase your beautiful dinnerware and glassware.",
                shortOverview: "Elegant wall storage with glass doors to display your finest dinnerware and glassware collection.",
                image: "https://cloudfrontgharpediabucket.gharpedia.com/uploads/2023/04/Frameless-Glass-Partition-07-0503070034.jpg",
                tags: ["Premium", "Glass Doors"],
                inStock: "Yes",
                // price: "Starting from ₹14,000"
            },
            {
                id: 2,
                title: "Solid Door Wall Unit",
                description: "Traditional wall cabinets with solid doors for concealed storage of kitchen items.",
                shortOverview: "Classic wall storage with solid doors for concealed storage of kitchen essentials and cookware.",
                image: "https://i.pinimg.com/564x/9e/7a/be/9e7abe4f7deebfbd441e7935b6553e90.jpg",
                tags: ["Standard"],
                inStock: "Yes",
                // price: "Starting from ₹11,000"
            },
            {
                id: 3,
                title: "Open Wall Shelving",
                description: "Open wall shelves for easy access to frequently used items and decorative display.",
                shortOverview: "Modern open shelving for easy access to frequently used items and stylish decorative display.",
                image: "https://i.pinimg.com/736x/c2/c7/5b/c2c75bf50e263c265bed11c15562e8d9.jpg",
                tags: ["Modern", "Open Design"],
                inStock: "Yes",
                // price: "Starting from ₹8,000"
            },
            {
                id: 4,
                title: "Open Wall Shelving",
                description: "Open wall shelves for easy access to frequently used items and decorative display.",
                shortOverview: "Modern open shelving for easy access to frequently used items and stylish decorative display.",
                image: "https://i.pinimg.com/736x/c2/c7/5b/c2c75bf50e263c265bed11c15562e8d9.jpg",
                tags: ["Modern", "Open Design"],
                inStock: "Yes",
                // price: "Starting from ₹8,000"
            },
            {
                id: 5,
                title: "Glass Door Wall Unit",
                description: "Upper-level cabinets with glass doors to showcase your beautiful dinnerware and glassware.",
                shortOverview: "Elegant wall storage with glass doors to display your finest dinnerware and glassware collection.",
                image: "https://cloudfrontgharpediabucket.gharpedia.com/uploads/2023/04/Frameless-Glass-Partition-07-0503070034.jpg",
                tags: ["Premium", "Glass Doors"],
                inStock: "Yes",
                // price: "Starting from ₹14,000"
            },
            {
                id: 6,
                title: "Solid Door Wall Unit",
                description: "Traditional wall cabinets with solid doors for concealed storage of kitchen items.",
                shortOverview: "Classic wall storage with solid doors for concealed storage of kitchen essentials and cookware.",
                image: "https://i.pinimg.com/564x/9e/7a/be/9e7abe4f7deebfbd441e7935b6553e90.jpg",
                tags: ["Standard"],
                inStock: "Yes",
                // price: "Starting from ₹11,000"
            }
        ],
        tallUnits: [
            {
                id: 1,
                title: "Pantry Tall Unit",
                description: "Full-height cabinets perfect for pantry storage with multiple shelves and compartments.",
                shortOverview: "Maximize vertical storage with this full-height pantry unit featuring multiple shelves and compartments.",
                image: "https://assets-news.housing.com/news/wp-content/uploads/2022/03/17140031/Tall-unit-kitchen-cabinet-ideas-Why-are-they-popular-in-modern-kitchens-02.jpg",
                tags: ["Premium", "Pantry Storage"],
                inStock: "Yes",
                // price: "Starting from ₹25,000"
            },
            {
                id: 2,
                title: "Appliance Tall Unit",
                description: "Tall cabinets designed to house large appliances like ovens, microwaves, and refrigerators.",
                shortOverview: "Full-height storage designed to house large appliances like ovens, microwaves, and refrigerators.",
                image: "https://suntechinteriors.com/wp-content/uploads/photo-gallery/imported_from_media_libray/wooden-tall-units-for-kitchen-1.jpg?bwg=1641281851",
                tags: ["Appliance Housing"],
                inStock: "Yes",
                // price: "Starting from ₹30,000"
            },
            {
                id: 3,
                title: "Utility Tall Unit",
                description: "Multi-purpose tall cabinets for cleaning supplies, brooms, and other utility items.",
                shortOverview: "Multi-purpose tall storage for cleaning supplies, brooms, and other utility items with organized compartments.",
                image: "https://m.media-amazon.com/images/I/51YOCXTO6WL.jpg",
                tags: ["Utility Storage"],
                inStock: "Yes",
                // price: "Starting from ₹22,000"
            },
            {
                id: 4,
                title: "Appliance Tall Unit",
                description: "Tall cabinets designed to house large appliances like ovens, microwaves, and refrigerators.",
                shortOverview: "Full-height storage designed to house large appliances like ovens, microwaves, and refrigerators.",
                image: "https://suntechinteriors.com/wp-content/uploads/photo-gallery/imported_from_media_libray/wooden-tall-units-for-kitchen-1.jpg?bwg=1641281851",
                tags: ["Appliance Housing"],
                inStock: "Yes",
                // price: "Starting from ₹30,000"
            },
            {
                id: 5,
                title: "Utility Tall Unit",
                description: "Multi-purpose tall cabinets for cleaning supplies, brooms, and other utility items.",
                shortOverview: "Multi-purpose tall storage for cleaning supplies, brooms, and other utility items with organized compartments.",
                image: "https://m.media-amazon.com/images/I/51YOCXTO6WL.jpg",
                tags: ["Utility Storage"],
                inStock: "Yes",
                // price: "Starting from ₹22,000"
            },
            {
                id: 6,
                title: "Pantry Tall Unit",
                description: "Full-height cabinets perfect for pantry storage with multiple shelves and compartments.",
                shortOverview: "Maximize vertical storage with this full-height pantry unit featuring multiple shelves and compartments.",
                image: "https://assets-news.housing.com/news/wp-content/uploads/2022/03/17140031/Tall-unit-kitchen-cabinet-ideas-Why-are-they-popular-in-modern-kitchens-02.jpg",
                tags: ["Premium", "Pantry Storage"],
                inStock: "Yes",
                // price: "Starting from ₹25,000"
            },
        ],
        midTallUnits: [
            {
                id: 1,
                title: "Mid-Height Storage Unit",
                description: "Medium-height cabinets perfect for countertop appliances and additional storage.",
                shortOverview: "Versatile mid-height storage perfect for countertop appliances and additional kitchen storage needs.",
                image: "https://s3-blog.homelane.com/design-ideas-pre/wp-content/uploads/2021/08/budget-friendly-modular-kitchen.jpg",
                tags: ["Standard", "Storage"],
                inStock: "Yes",
                // price: "Starting from ₹18,000"
            },
            {
                id: 2,
                title: "Breakfast Nook Unit",
                description: "Mid-height cabinets designed for breakfast nooks and casual dining areas.",
                shortOverview: "Perfect mid-height solution for breakfast nooks and casual dining areas with elegant design.",
                image: "https://huvu.in/wp-content/uploads/2024/08/Breakfast-Counter.webp",
                tags: ["Premium", "Dining"],
                inStock: "Yes",
                // price: "Starting from ₹20,000"
            },
            {
                id: 3,
                title: "Appliance Mid Unit",
                description: "Specialized mid-height units for housing countertop appliances with easy access.",
                shortOverview: "Specialized mid-height storage for countertop appliances with easy access and organized compartments.",
                image: "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2017/8/15/1/IO_Suzanne-Childress_Avenue-Arts-Crafts_3.jpg.rend.hgtvcom.616.924.85.suffix/1502820159839.webp",
                tags: ["Appliance Storage"],
                inStock: "Yes",
                // price: "Starting from ₹16,000"
            },
            {
                id: 4,
                title: "Breakfast Nook Unit",
                description: "Mid-height cabinets designed for breakfast nooks and casual dining areas.",
                shortOverview: "Perfect mid-height solution for breakfast nooks and casual dining areas with elegant design.",
                image: "https://huvu.in/wp-content/uploads/2024/08/Breakfast-Counter.webp",
                tags: ["Premium", "Dining"],
                inStock: "Yes",
                // price: "Starting from ₹20,000"
            },
            {
                id: 5,
                title: "Appliance Mid Unit",
                description: "Specialized mid-height units for housing countertop appliances with easy access.",
                shortOverview: "Specialized mid-height storage for countertop appliances with easy access and organized compartments.",
                image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                tags: ["Appliance Storage"],
                inStock: "Yes",
                // price: "Starting from ₹16,000"
            },
            {
                id: 6,
                title: "Appliance Mid Unit",
                description: "Specialized mid-height units for housing countertop appliances with easy access.",
                shortOverview: "Specialized mid-height storage for countertop appliances with easy access and organized compartments.",
                image: "https://huvu.in/wp-content/uploads/2024/08/Breakfast-Counter.webp",
                tags: ["Appliance Storage"],
                inStock: "Yes",
                // price: "Starting from ₹16,000"
            }
        ]
    };

    const tabLabels = ['Base Units', 'Wall Units', 'Tall Units', 'Mid Tall Units'];
    const tabKeys = ['baseUnits', 'wallUnits', 'tallUnits', 'midTallUnits'];
    const tabDescriptions = [
        'With countless kitchen base units available in multiple options, we offer the most aesthetic and functional range of base units you\'ll find anywhere!',
        'With our exciting wall units, you can make the most of the wall space and break the monotony while freeing up the floor space in your kitchen.',
        'All tall units in the kitchen don\'t have to look the same. Pick and choose from these options depending on your need, budget and space.',
        'If you\'re looking for practical and attractive storage solutions for your kitchen, our latest range of mid-tall kitchen units promise to leave you inspired!'
    ];
    const currentData = cabinetData[tabKeys[activeTab]];
    const currentDescription = tabDescriptions[activeTab];

    return (
        <Box>
            {/* Hero Section */}
            <HeroSection>
                {/* Main Content */}
                <Box
                    sx={{
                        position: 'relative',
                        zIndex: 2,
                        textAlign: 'center',
                        color: 'white',
                        maxWidth: '800px',
                        px: { xs: 3, md: 4 },
                    }}
                >
                    <Typography
                        variant="h1"
                        component="h1"
                        sx={{
                            fontSize: { xs: '2rem', md: '3rem', lg: '3.5rem' },
                            fontWeight: 'bold',
                            lineHeight: 1.2,
                            mb: 3,
                            color: 'white',
                            textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
                        }}
                    >
                        Kitchen Cabinets
                    </Typography>

                    <Typography
                        variant="h5"
                        component="h2"
                        sx={{
                            fontSize: { xs: '1.1rem', md: '1.3rem' },
                            fontWeight: 400,
                            lineHeight: 1.4,
                            mb: 4,
                            color: 'white',
                            textShadow: '1px 1px 2px rgba(0,0,0,0.7)',
                            maxWidth: '600px',
                            mx: 'auto',
                        }}
                    >
                        Discover our premium range of kitchen cabinets designed for functionality and style
                    </Typography>
                </Box>
            </HeroSection>

            {/* Main Content */}
            <Box sx={{ pt: 2, pb: 4 }}>
                <Container maxWidth="lg">
                    {/* Breadcrumbs */}
                    <Breadcrumbs sx={{ mb: 3 }}>
                        <Link
                            component="button"
                            variant="body2"
                            onClick={() => navigate('/')}
                            sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
                        >
                            <Home fontSize="small" />
                            Home
                        </Link>
                        <Link
                            component="button"
                            variant="body2"
                            onClick={() => navigate('/offerings')}
                        >
                            Offerings
                        </Link>
                        <Link
                            component="button"
                            variant="body2"
                            onClick={() => navigate('/kitchen/components')}
                        >
                            Kitchen Components
                        </Link>
                        <Typography color="text.primary">Cabinets</Typography>
                    </Breadcrumbs>

                    {/* Navigation Tabs */}
                    <Box sx={{ mb: 4 }}>
                        <Tabs
                            value={activeTab}
                            onChange={handleTabChange}
                            variant="scrollable"
                            scrollButtons="auto"
                            sx={{
                                borderBottom: 1,
                                borderColor: 'divider',
                                '& .MuiTab-root': {
                                    textTransform: 'none',
                                    fontWeight: 500,
                                    fontSize: '1rem',
                                    minHeight: 48,
                                    color: theme.palette.text.secondary,
                                    '&.Mui-selected': {
                                        color: theme.palette.primary.main,
                                        fontWeight: 'bold',
                                    },
                                },
                                '& .MuiTabs-indicator': {
                                    backgroundColor: theme.palette.primary.main,
                                    height: 3,
                                },
                            }}
                        >
                            {tabLabels.map((label, index) => (
                                <Tab key={index} label={label} />
                            ))}
                        </Tabs>
                    </Box>

                    {/* Section Title */}
                    <Typography variant="h4" component="h2" sx={{ mb: 2, fontWeight: 'bold', color: theme.palette.text.primary }}>
                        {tabLabels[activeTab]}
                    </Typography>

                    {/* Section Description */}
                    <Typography variant="body1" sx={{ mb: 4, color: theme.palette.text.secondary, lineHeight: 1.6, maxWidth: '800px' }}>
                        {currentDescription}
                    </Typography>

                    {/* Cabinet Types Grid */}
                    <Box sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 3,
                        justifyContent: { xs: 'center', md: 'flex-start' }
                    }}>
                        {currentData.map((cabinet) => (
                            <Card
                                key={cabinet.id}
                                onClick={() => navigate(`/kitchen/components/cabinets/${tabKeys[activeTab]}/${cabinet.id}`)}
                                sx={{
                                    width: { xs: '100%', sm: 'calc(50% - 12px)', md: 'calc(33.333% - 16px)' },
                                    maxWidth: '350px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    backgroundColor: 'white',
                                    borderRadius: 2,
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                                    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                                    cursor: 'pointer',
                                    '&:hover': {
                                        transform: 'translateY(-4px)',
                                        boxShadow: '0 8px 25px rgba(0,0,0,0.15)'
                                    }
                                }}
                            >
                                <Box sx={{
                                    height: '200px',
                                    overflow: 'hidden',
                                    borderRadius: '8px 8px 0 0'
                                }}>
                                    <CardMedia
                                        component="img"
                                        height="100%"
                                        image={cabinet.image}
                                        alt={cabinet.title}
                                        sx={{
                                            objectFit: 'cover',
                                            width: '100%',
                                            height: '100%'
                                        }}
                                    />
                                </Box>
                                <CardContent sx={{ p: 2.5, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                                    <Typography
                                        variant="h6"
                                        component="h3"
                                        sx={{
                                            mb: 1,
                                            fontWeight: 'bold',
                                            fontSize: '1.1rem',
                                            color: theme.palette.text.primary,
                                            lineHeight: 1.3
                                        }}
                                    >
                                        {cabinet.title}
                                    </Typography>

                                    <Typography
                                        variant="body2"
                                        sx={{
                                            mb: 1.5,
                                            color: theme.palette.text.secondary,
                                            fontSize: '0.85rem',
                                            lineHeight: 1.4,
                                            display: '-webkit-box',
                                            WebkitLineClamp: 2,
                                            WebkitBoxOrient: 'vertical',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis'
                                        }}
                                    >
                                        {cabinet.shortOverview}
                                    </Typography>

                                    <Box sx={{ mb: 2, flexGrow: 1 }}>
                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                            {cabinet.tags.map((tag, index) => (
                                                <Chip
                                                    key={index}
                                                    label={tag}
                                                    size="small"
                                                    variant="outlined"
                                                    sx={{
                                                        fontSize: '0.7rem',
                                                        height: '24px',
                                                        backgroundColor: '#f5f5f5',
                                                        borderColor: '#e0e0e0',
                                                        color: theme.palette.text.secondary,
                                                        '& .MuiChip-label': {
                                                            px: 1
                                                        }
                                                    }}
                                                />
                                            ))}
                                        </Box>
                                    </Box>

                                </CardContent>
                            </Card>
                        ))}
                    </Box>


                </Container>
            </Box>
        </Box>
    );
}
