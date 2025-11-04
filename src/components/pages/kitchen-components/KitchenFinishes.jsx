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
    backgroundImage: `url('https://wallmarker.in/wp-content/uploads/2020/09/rsz_edowew0xkagzmyw.jpg')`,
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

export default function KitchenFinishes() {
    const navigate = useNavigate();
    const theme = useTheme();
    const [activeTab, setActiveTab] = useState(0);

    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
    };

    const finishesData = {
        laminates: [
            {
                id: 1,
                title: "Wood Grain Laminate",
                description: "Premium wood grain laminate finish that mimics natural wood textures with excellent durability.",
                image: "https://img.freepik.com/free-photo/brown-wood-textured-background-with-design-space_53876-160425.jpg?semt=ais_hybrid&w=740&q=80",
                tags: ["Premium", "Wood Finish"],
                // price: "Starting from ₹18,000"
            },
            {
                id: 2,
                title: "Solid Color Laminate",
                description: "Modern solid color laminates available in various shades to match your kitchen theme.",
                image: "https://materialdepot-images-hbh2cjbvbtfmanhx.z02.azurefd.net/V000664/4142-a-8-cappuccino-8-ft-x-4-ft-texture-finish-decorative-laminate-1-mm/4142-a-8-cappuccino-8-ft-x-4-ft-texture-finish-decorative-laminate-1-mm/1.png?width=500",
                tags: ["Modern", "Color Options"],
                // price: "Starting from ₹15,000"
            },
            {
                id: 3,
                title: "Textured Laminate",
                description: "Textured laminate finishes that add depth and character to your kitchen cabinets.",
                image: "https://m.media-amazon.com/images/I/31LJxNUv0eL._UF1000,1000_QL80_.jpg",
                tags: ["Textured", "Premium"],
                // price: "Starting from ₹22,000"
            },
            {
                id: 4,
                title: "High Gloss Laminate",
                description: "High gloss laminate finish that provides a sleek, modern look with easy maintenance.",
                image: "https://royaletouche.gumlet.io/wp-content/uploads/2023/02/04171422/CRYSTAL_1284_A4_Image.jpg?compress=true&quality=80&w=600&dpr=2.6",
                tags: ["High Gloss", "Modern"],
                // price: "Starting from ₹18,000"
            },
            {
                id: 5,
                title: "Matt Finish Laminate",
                description: "Matt finish laminate that offers a sophisticated, non-reflective surface.",
                image: "https://5.imimg.com/data5/GR/LD/MY-9022244/matte-laminate-sheet.jpg",
                tags: ["Matt Finish", "Elegant"],
                // price: "Starting from ₹15,000"
            },
            {
                id: 6,
                title: "Metallic Laminate",
                description: "Metallic laminate finishes that add a contemporary touch to your kitchen design.",
                image: "https://cdn.ready-market.com.tw/aed8e971/Templates/pic/lcm-A138-top-2.jpg?v=f152ef27",
                tags: ["Metallic", "Contemporary"],
                // price: "Starting from ₹22,000"
            }
        ],
        acrylic: [
            {
                id: 1,
                title: "High Gloss Acrylic",
                description: "Premium high gloss acrylic finish that provides a mirror-like reflective surface.",
                image: "https://image.made-in-china.com/229f0j00mQKUVoZnwlkA/%E5%89%AA%E5%BD%B1%C2%B7%E6%8B%8D%E6%8B%8D-20240426.mp4.webp",
                tags: ["High Gloss", "Premium"],
                // price: "Starting from ₹14,000"
            },
            {
                id: 2,
                title: "Matt Acrylic",
                description: "Matt acrylic finish that offers a smooth, non-reflective surface with modern appeal.",
                image: "https://i.pinimg.com/564x/9e/7a/be/9e7abe4f7deebfbd441e7935b6553e90.jpg",
                tags: ["Matt Finish", "Modern"],
                // price: "Starting from ₹11,000"
            },
            {
                id: 3,
                title: "Solid Color Acrylic",
                description: "Vibrant solid color acrylic finishes available in a wide range of colors.",
                image: "https://i.pinimg.com/736x/c2/c7/5b/c2c75bf50e263c265bed11c15562e8d9.jpg",
                tags: ["Color Options", "Vibrant"],
                // price: "Starting from ₹8,000"
            },
            {
                id: 4,
                title: "Textured Acrylic",
                description: "Textured acrylic finishes that add visual interest and depth to cabinet surfaces.",
                image: "https://i.pinimg.com/736x/c2/c7/5b/c2c75bf50e263c265bed11c15562e8d9.jpg",
                tags: ["Textured", "Visual Interest"],
                // price: "Starting from ₹8,000"
            },
            {
                id: 5,
                title: "Metallic Acrylic",
                description: "Metallic acrylic finishes that provide a luxurious, contemporary appearance.",
                image: "https://cloudfrontgharpediabucket.gharpedia.com/uploads/2023/04/Frameless-Glass-Partition-07-0503070034.jpg",
                tags: ["Metallic", "Luxury"],
                // price: "Starting from ₹14,000"
            },
            {
                id: 6,
                title: "Transparent Acrylic",
                description: "Transparent acrylic finishes that allow the underlying material to show through.",
                image: "https://i.pinimg.com/564x/9e/7a/be/9e7abe4f7deebfbd441e7935b6553e90.jpg",
                tags: ["Transparent", "Unique"],
                // price: "Starting from ₹11,000"
            }
        ],
        membrane: [
            {
                id: 1,
                title: "Soft Touch Membrane",
                description: "Soft touch membrane finish that provides a luxurious, tactile experience.",
                image: "https://assets-news.housing.com/news/wp-content/uploads/2022/03/17140031/Tall-unit-kitchen-cabinet-ideas-Why-are-they-popular-in-modern-kitchens-02.jpg",
                tags: ["Soft Touch", "Luxury"],
                // price: "Starting from ₹25,000"
            },
            {
                id: 2,
                title: "High Gloss Membrane",
                description: "High gloss membrane finish that creates a sleek, modern appearance.",
                image: "https://suntechinteriors.com/wp-content/uploads/photo-gallery/imported_from_media_libray/wooden-tall-units-for-kitchen-1.jpg?bwg=1641281851",
                tags: ["High Gloss", "Modern"],
                // price: "Starting from ₹30,000"
            },
            {
                id: 3,
                title: "Matt Membrane",
                description: "Matt membrane finish that offers a sophisticated, non-reflective surface.",
                image: "https://m.media-amazon.com/images/I/51YOCXTO6WL.jpg",
                tags: ["Matt Finish", "Sophisticated"],
                // price: "Starting from ₹22,000"
            },
            {
                id: 4,
                title: "Textured Membrane",
                description: "Textured membrane finishes that add depth and character to cabinet surfaces.",
                image: "https://suntechinteriors.com/wp-content/uploads/photo-gallery/imported_from_media_libray/wooden-tall-units-for-kitchen-1.jpg?bwg=1641281851",
                tags: ["Textured", "Character"],
                // price: "Starting from ₹30,000"
            },
            {
                id: 5,
                title: "Color Membrane",
                description: "Vibrant color membrane finishes available in various shades and tones.",
                image: "https://m.media-amazon.com/images/I/51YOCXTO6WL.jpg",
                tags: ["Color Options", "Vibrant"],
                // price: "Starting from ₹22,000"
            },
            {
                id: 6,
                title: "Wood Grain Membrane",
                description: "Wood grain membrane finish that mimics natural wood textures with enhanced durability.",
                image: "https://assets-news.housing.com/news/wp-content/uploads/2022/03/17140031/Tall-unit-kitchen-cabinet-ideas-Why-are-they-popular-in-modern-kitchens-02.jpg",
                tags: ["Wood Grain", "Durable"],
                // price: "Starting from ₹25,000"
            },
        ],
        puPoint: [
            {
                id: 1,
                title: "High Gloss PU",
                description: "High gloss PU finish that provides excellent durability and a mirror-like surface.",
                image: "https://s3-blog.homelane.com/design-ideas-pre/wp-content/uploads/2021/08/budget-friendly-modular-kitchen.jpg",
                tags: ["High Gloss", "Durable"],
                // price: "Starting from ₹18,000"
            },
            {
                id: 2,
                title: "Matt PU Finish",
                description: "Matt PU finish that offers a smooth, non-reflective surface with modern appeal.",
                image: "https://huvu.in/wp-content/uploads/2024/08/Breakfast-Counter.webp",
                tags: ["Matt Finish", "Modern"],
                // price: "Starting from ₹20,000"
            },
            {
                id: 3,
                title: "Satin PU Finish",
                description: "Satin PU finish that provides a subtle sheen between matt and gloss finishes.",
                image: "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2017/8/15/1/IO_Suzanne-Childress_Avenue-Arts-Crafts_3.jpg.rend.hgtvcom.616.924.85.suffix/1502820159839.webp",
                tags: ["Satin", "Subtle Sheen"],
                // price: "Starting from ₹16,000"
            },
            {
                id: 4,
                title: "Textured PU",
                description: "Textured PU finish that adds visual interest and depth to cabinet surfaces.",
                image: "https://huvu.in/wp-content/uploads/2024/08/Breakfast-Counter.webp",
                tags: ["Textured", "Visual Interest"],
                // price: "Starting from ₹20,000"
            },
            {
                id: 5,
                title: "Color PU Finish",
                description: "Vibrant color PU finishes available in a wide range of colors and shades.",
                image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                tags: ["Color Options", "Vibrant"],
                // price: "Starting from ₹16,000"
            },
            {
                id: 6,
                title: "Wood Grain PU",
                description: "Wood grain PU finish that mimics natural wood textures with enhanced protection.",
                image: "https://huvu.in/wp-content/uploads/2024/08/Breakfast-Counter.webp",
                tags: ["Wood Grain", "Protection"],
                // price: "Starting from ₹16,000"
            }
        ],
        glass: [
            {
                id: 1,
                title: "Clear Glass",
                description: "Crystal clear glass finish that provides a modern, transparent look.",
                image: "https://s3-blog.homelane.com/design-ideas-pre/wp-content/uploads/2021/08/budget-friendly-modular-kitchen.jpg",
                tags: ["Clear", "Modern"],
                // price: "Starting from ₹18,000"
            },
            {
                id: 2,
                title: "Frosted Glass",
                description: "Frosted glass finish that provides privacy while maintaining a modern aesthetic.",
                image: "https://huvu.in/wp-content/uploads/2024/08/Breakfast-Counter.webp",
                tags: ["Frosted", "Privacy"],
                // price: "Starting from ₹20,000"
            },
            {
                id: 3,
                title: "Tinted Glass",
                description: "Tinted glass finish available in various colors to match your kitchen theme.",
                image: "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2017/8/15/1/IO_Suzanne-Childress_Avenue-Arts-Crafts_3.jpg.rend.hgtvcom.616.924.85.suffix/1502820159839.webp",
                tags: ["Tinted", "Color Options"],
                // price: "Starting from ₹16,000"
            },
            {
                id: 4,
                title: "Textured Glass",
                description: "Textured glass finish that adds visual interest and depth to cabinet doors.",
                image: "https://huvu.in/wp-content/uploads/2024/08/Breakfast-Counter.webp",
                tags: ["Textured", "Visual Interest"],
                // price: "Starting from ₹20,000"
            },
            {
                id: 5,
                title: "Mirror Glass",
                description: "Mirror glass finish that creates a reflective surface for a luxurious look.",
                image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                tags: ["Mirror", "Luxury"],
                // price: "Starting from ₹16,000"
            },
            {
                id: 6,
                title: "Back Painted Glass",
                description: "Back painted glass finish that provides a solid color appearance with glass durability.",
                image: "https://huvu.in/wp-content/uploads/2024/08/Breakfast-Counter.webp",
                tags: ["Back Painted", "Durable"],
                // price: "Starting from ₹16,000"
            }
        ]
    };

    const tabLabels = ['Laminates', 'Acrylic', 'Membrane', 'Pu Point', 'Glass'];
    const tabKeys = ['laminates', 'acrylic', 'membrane', 'puPoint', 'glass'];
    const tabDescriptions = [
        'Premium laminate finishes that combine durability with aesthetic appeal, available in various textures and colors to match your kitchen design.',
        'High-quality acrylic finishes that provide a sleek, modern look with excellent durability and easy maintenance for your kitchen cabinets.',
        'Advanced membrane finishes that offer superior protection and a luxurious feel, perfect for contemporary kitchen designs.',
        'Professional PU (Polyurethane) finishes that provide excellent durability and a smooth, protective coating for your kitchen surfaces.',
        'Elegant glass finishes that add sophistication and modern appeal to your kitchen cabinets with various transparency and texture options.'
    ];
    const currentData = finishesData[tabKeys[activeTab]];
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
                        Kitchen Finishes
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
                        Explore our premium range of kitchen finishes designed for durability, style, and elegance
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
                        <Typography color="text.primary">Finishes</Typography>
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

                    {/* Finish Types Grid */}
                    <Box sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 3,
                        justifyContent: { xs: 'center', md: 'flex-start' }
                    }}>
                        {currentData.map((finish) => (
                            <Card
                                key={finish.id}
                                onClick={() => navigate(`/kitchen/components/finishes/${tabKeys[activeTab]}/${finish.id}`)}
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
                                        image={finish.image}
                                        alt={finish.title}
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
                                            mb: 1.5,
                                            fontWeight: 'bold',
                                            fontSize: '1.1rem',
                                            color: theme.palette.text.primary,
                                            lineHeight: 1.3
                                        }}
                                    >
                                        {finish.title}
                                    </Typography>

                                    <Box sx={{ mb: 2, flexGrow: 1 }}>
                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                            {finish.tags.map((tag, index) => (
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

                                    <Box sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        mt: 'auto'
                                    }}>
                                        <Typography
                                            variant="body2"
                                            color="primary"
                                            sx={{
                                                fontWeight: 'bold',
                                                fontSize: '0.9rem'
                                            }}
                                        >
                                            {finish.price}
                                        </Typography>
                                        {/* <Button
                                            variant="contained"
                                            size="small"
                                            sx={{ 
                                                textTransform: 'none',
                                                fontSize: '0.8rem',
                                                px: 2,
                                                py: 0.5,
                                                minWidth: 'auto'
                                            }}
                                        >
                                            Get Quote
                                        </Button> */}
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
