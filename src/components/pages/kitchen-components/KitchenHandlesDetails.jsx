import React, { useState } from 'react';
import {
    Box,
    Container,
    Typography,
    Button,
    Chip,
    Breadcrumbs,
    Link,
    useTheme,
    styled,
    IconButton,
    Divider,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Collapse
} from '@mui/material';
import {
    ArrowBack,
    Home,
    Kitchen,
    ArrowForward,
    ArrowBackIos,
    ExpandMore,
    ExpandLess,
    Download,
    Chat,
    Add
} from '@mui/icons-material';
import { useNavigate, useParams } from 'react-router-dom';

// Styled components
const ProductImageContainer = styled(Box)(({ theme }) => ({
    position: 'relative',
    width: '100%',
    height: '400px',
    borderRadius: '8px',
    backgroundColor: '#f5f5f5',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    textAlign: 'center'
}));

const ThumbnailContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: '8px',
    marginTop: '16px',
    justifyContent: 'center',
    '& .thumbnail': {
        width: '80px',
        height: '60px',
        borderRadius: '4px',
        overflow: 'hidden',
        cursor: 'pointer',
        border: '2px solid transparent',
        transition: 'border-color 0.2s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5f5f5',
        '&.active': {
            borderColor: theme.palette.primary.main,
        },
        '& img': {
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'contain',
        }
    }
}));

const InfoPanel = styled(Box)(({ theme }) => ({
    backgroundColor: '#f8f9fa',
    padding: '16px',
    borderRadius: '8px',
    border: '1px solid #e9ecef',
}));

const SpecChip = styled(Chip)(({ theme }) => ({
    margin: '4px 8px 4px 0',
    fontSize: '0.75rem',
    height: '28px',
    backgroundColor: '#e3f2fd',
    color: theme.palette.primary.main,
    border: '1px solid #bbdefb',
}));

export default function KitchenHandlesDetails() {
    const navigate = useNavigate();
    const theme = useTheme();
    const { id, category } = useParams();
    const [selectedImage, setSelectedImage] = useState(0);
    const [expandedDescription, setExpandedDescription] = useState(false);

    // Enhanced handles data with detailed information
    const handlesData = [
        {
            id: 1,
            title: "Modern Chrome Handles",
            category: "MODERN HANDLES - CHROME",
            description: "Sleek chrome handles with contemporary design for modern kitchen aesthetics.",
            shortOverview: "Sleek chrome handles with contemporary design for modern kitchen aesthetics.",
            fullDescription: "These modern chrome handles feature a sleek, contemporary design that perfectly complements modern kitchen aesthetics. Made from high-quality chrome-plated metal, they offer excellent durability and resistance to tarnishing. The ergonomic design ensures comfortable grip while the polished finish adds a sophisticated touch to your kitchen cabinets.",
            keyHighlights: [
                "High-quality chrome-plated metal",
                "Contemporary sleek design",
                "Excellent durability and tarnish resistance",
                "Ergonomic comfortable grip"
            ],
            specs: {
                range: "Modern",
                grade: "Premium",
                handleType: "Chrome Handles",
                inStock: "Yes",
                material: "Chrome-plated Metal"
            },
            careNotes: [
                "Clean with soft cloth and mild soap",
                "Avoid abrasive cleaners",
                "Dry thoroughly after cleaning"
            ],
            leadTime: "In-stock. Standard dispatch in 3–5 days. 1-year warranty on finish.",
            images: [
                "https://i.pinimg.com/474x/8a/6c/5d/8a6c5d84192697c29d98a1d457164ad3.jpg",
                "https://www.doorandcabinethardware.com.au/wp-content/uploads/2016/10/Bar-Cabinet-Handles.jpg"
            ],
            tags: ["Modern", "Chrome"]
        },
        {
            id: 2,
            title: "Classic Brass Knobs",
            category: "CLASSIC HANDLES - BRASS",
            description: "Traditional brass knobs that add warmth and elegance to your kitchen cabinets.",
            shortOverview: "Traditional brass knobs that add warmth and elegance to your kitchen cabinets.",
            fullDescription: "These classic brass knobs bring traditional elegance and warmth to your kitchen design. Crafted from solid brass with a beautiful patina finish, they develop a rich character over time. The timeless design works perfectly with both traditional and transitional kitchen styles, adding a touch of sophistication to your cabinetry.",
            keyHighlights: [
                "Solid brass construction",
                "Beautiful patina finish",
                "Timeless traditional design",
                "Develops rich character over time"
            ],
            specs: {
                range: "Classic",
                grade: "Premium",
                handleType: "Brass Knobs",
                inStock: "Yes",
                material: "Solid Brass"
            },
            careNotes: [
                "Polish with brass cleaner occasionally",
                "Handle with clean hands to prevent tarnishing",
                "Avoid harsh chemicals"
            ],
            leadTime: "In-stock. Standard dispatch in 3–5 days. 1-year warranty on finish.",
            images: [
                "https://www.doorandcabinethardware.com.au/wp-content/uploads/2016/10/Bar-Cabinet-Handles.jpg",
                "https://i.pinimg.com/474x/8a/6c/5d/8a6c5d84192697c29d98a1d457164ad3.jpg"
            ],
            tags: ["Classic", "Brass"]
        },
        {
            id: 3,
            title: "Minimalist Black Handles",
            category: "MINIMALIST HANDLES - BLACK",
            description: "Clean black handles with minimalist design for contemporary kitchen spaces.",
            shortOverview: "Clean black handles with minimalist design for contemporary kitchen spaces.",
            fullDescription: "These minimalist black handles feature a clean, understated design perfect for contemporary kitchen spaces. The matte black finish provides a sophisticated contrast against light cabinetry while the streamlined profile maintains a minimalist aesthetic. Made from durable materials with a powder-coated finish for long-lasting performance.",
            keyHighlights: [
                "Matte black powder-coated finish",
                "Minimalist streamlined design",
                "Durable construction materials",
                "Sophisticated contrast effect"
            ],
            specs: {
                range: "Minimalist",
                grade: "Standard",
                handleType: "Black Handles",
                inStock: "Yes",
                material: "Powder-coated Metal"
            },
            careNotes: [
                "Wipe with damp cloth",
                "Avoid abrasive cleaners",
                "Handle with care to prevent scratches"
            ],
            leadTime: "In-stock. Standard dispatch in 3–5 days. 1-year warranty on finish.",
            images: [
                "https://i.pinimg.com/474x/8a/6c/5d/8a6c5d84192697c29d98a1d457164ad3.jpg",
                "https://img-new.cgtrader.com/items/4252515/3ff973f505/large/handles-for-kitchen-cabinets-or-furniture-doors-drawer-3d-model-3d-model-3ff973f505.webp"
            ],
            tags: ["Minimalist", "Black"]
        },
        {
            id: 4,
            title: "Vintage Copper Pulls",
            category: "VINTAGE HANDLES - COPPER",
            description: "Antique-style copper pulls that bring character and charm to your kitchen.",
            shortOverview: "Antique-style copper pulls that bring character and charm to your kitchen.",
            fullDescription: "These vintage copper pulls feature an antique-style design that brings character and charm to your kitchen. Made from genuine copper with an aged patina finish, they create a warm, inviting atmosphere. The traditional design elements and rich copper color make them perfect for farmhouse, rustic, or vintage-inspired kitchen designs.",
            keyHighlights: [
                "Genuine copper construction",
                "Aged patina finish",
                "Traditional vintage design",
                "Warm, inviting atmosphere"
            ],
            specs: {
                range: "Vintage",
                grade: "Premium",
                handleType: "Copper Pulls",
                inStock: "Yes",
                material: "Genuine Copper"
            },
            careNotes: [
                "Clean with copper cleaner",
                "Handle with clean hands",
                "Allow natural patina to develop"
            ],
            leadTime: "In-stock. Standard dispatch in 3–5 days. 1-year warranty on finish.",
            images: [
                "https://img-new.cgtrader.com/items/4252515/3ff973f505/large/handles-for-kitchen-cabinets-or-furniture-doors-drawer-3d-model-3d-model-3ff973f505.webp",
                "https://www.modelplusmodel.com/images/detailed/3/mpm_p01_02.jpg"
            ],
            tags: ["Vintage", "Copper"]
        },
        {
            id: 5,
            title: "Stainless Steel Bars",
            category: "STAINLESS STEEL HANDLES - BARS",
            description: "Durable stainless steel bar handles perfect for high-traffic kitchen areas.",
            shortOverview: "Durable stainless steel bar handles perfect for high-traffic kitchen areas.",
            fullDescription: "These stainless steel bar handles are designed for durability and functionality in high-traffic kitchen areas. Made from premium stainless steel with a brushed finish, they resist fingerprints and maintain their appearance over time. The ergonomic bar design provides excellent grip and the corrosion-resistant material ensures long-lasting performance.",
            keyHighlights: [
                "Premium stainless steel construction",
                "Brushed finish resists fingerprints",
                "Ergonomic bar design",
                "Corrosion-resistant material"
            ],
            specs: {
                range: "Stainless Steel",
                grade: "Premium",
                handleType: "Steel Bars",
                inStock: "Yes",
                material: "Premium Stainless Steel"
            },
            careNotes: [
                "Clean with stainless steel cleaner",
                "Wipe in direction of grain",
                "Avoid chlorine-based cleaners"
            ],
            leadTime: "In-stock. Standard dispatch in 3–5 days. 1-year warranty on finish.",
            images: [
                "https://www.modelplusmodel.com/images/detailed/3/mpm_p01_02.jpg",
                "https://images.livspace-cdn.com/w:654/h:450/plain/https://imgs.livspace.com/2630147-original/short-base-unit.jpg"
            ],
            tags: ["Stainless Steel", "Durable"]
        },
        {
            id: 6,
            title: "Wooden Knobs",
            category: "WOODEN HANDLES - KNOBS",
            description: "Natural wooden knobs that add organic warmth to your kitchen design.",
            shortOverview: "Natural wooden knobs that add organic warmth to your kitchen design.",
            fullDescription: "These natural wooden knobs bring organic warmth and texture to your kitchen design. Crafted from sustainably sourced hardwood with a natural finish, they showcase the beautiful grain patterns of the wood. The warm, tactile feel and natural variations make each knob unique, perfect for creating a cozy, inviting kitchen atmosphere.",
            keyHighlights: [
                "Sustainably sourced hardwood",
                "Natural wood grain patterns",
                "Warm, tactile feel",
                "Unique natural variations"
            ],
            specs: {
                range: "Natural",
                grade: "Standard",
                handleType: "Wooden Knobs",
                inStock: "Yes",
                material: "Hardwood"
            },
            careNotes: [
                "Clean with wood cleaner",
                "Apply wood conditioner periodically",
                "Avoid excessive moisture"
            ],
            leadTime: "In-stock. Standard dispatch in 3–5 days. 1-year warranty on finish.",
            images: [
                "https://images.livspace-cdn.com/w:654/h:450/plain/https://imgs.livspace.com/2630147-original/short-base-unit.jpg",
                "https://i.pinimg.com/474x/8a/6c/5d/8a6c5d84192697c29d98a1d457164ad3.jpg"
            ],
            tags: ["Wooden", "Natural"]
        }
    ];

    // Get the current product data
    const currentProduct = handlesData.find(item => item.id === parseInt(id));

    if (!currentProduct) {
        return (
            <Container maxWidth="lg" sx={{ py: 4 }}>
                <Typography variant="h4">Product not found</Typography>
                <Button onClick={() => navigate('/kitchen/components/handles')} sx={{ mt: 2 }}>
                    Back to Handles
                </Button>
            </Container>
        );
    }

    const handleImageChange = (index) => {
        setSelectedImage(index);
    };

    const toggleDescription = () => {
        setExpandedDescription(!expandedDescription);
    };

    return (
        <Box sx={{ minHeight: '100vh', backgroundColor: '#fafafa' }}>
            <Container maxWidth="lg" sx={{ py: 4 }}>
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
                        Interiors
                    </Link>
                    <Link
                        component="button"
                        variant="body2"
                        onClick={() => navigate('/kitchen/components/handles')}
                    >
                        Handles
                    </Link>
                    <Typography color="text.primary">{currentProduct.title}</Typography>
                </Breadcrumbs>

                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
                    {/* Left Column - Images */}
                    <Box sx={{ flex: { xs: '1', md: '0 0 60%' }, maxWidth: { xs: '100%', md: '60%' } }}>
                        <ProductImageContainer>
                            <img
                                src={currentProduct.images[selectedImage]}
                                alt={currentProduct.title}
                                style={{
                                    maxWidth: '100%',
                                    maxHeight: '100%',
                                    objectFit: 'contain',
                                    display: 'block',
                                    margin: '0 auto'
                                }}
                            />
                            <IconButton
                                sx={{
                                    position: 'absolute',
                                    right: 16,
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    backgroundColor: 'rgba(255,255,255,0.9)',
                                    '&:hover': {
                                        backgroundColor: 'rgba(255,255,255,1)',
                                    }
                                }}
                                onClick={() => setSelectedImage((selectedImage + 1) % currentProduct.images.length)}
                            >
                                <ArrowForward />
                            </IconButton>
                        </ProductImageContainer>

                        <ThumbnailContainer>
                            {currentProduct.images.map((image, index) => (
                                <Box
                                    key={index}
                                    className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                                    onClick={() => handleImageChange(index)}
                                >
                                    <img src={image} alt={`${currentProduct.title} ${index + 1}`} />
                                </Box>
                            ))}
                        </ThumbnailContainer>
                    </Box>

                    {/* Right Column - Product Information */}
                    <Box sx={{ flex: { xs: '1', md: '0 0 40%' }, maxWidth: { xs: '100%', md: '40%' } }}>
                        <Box sx={{ mb: 3 }}>
                            {/* Category Overline */}
                            <Typography
                                variant="caption"
                                sx={{
                                    textTransform: 'uppercase',
                                    color: theme.palette.text.secondary,
                                    fontSize: '0.75rem',
                                    letterSpacing: '0.5px'
                                }}
                            >
                                {currentProduct.category}
                            </Typography>

                            {/* Title */}
                            <Typography
                                variant="h3"
                                component="h1"
                                sx={{
                                    mt: 1,
                                    mb: 2,
                                    fontWeight: 'bold',
                                    color: theme.palette.text.primary
                                }}
                            >
                                | {currentProduct.title}
                            </Typography>

                            {/* Short Overview */}
                            <Typography
                                variant="body1"
                                sx={{
                                    mb: 2,
                                    lineHeight: 1.6,
                                    color: theme.palette.text.primary
                                }}
                            >
                                {currentProduct.shortOverview}
                            </Typography>

                            {/* Disclaimer */}
                            <Typography
                                variant="body2"
                                sx={{
                                    mb: 3,
                                    color: theme.palette.text.secondary,
                                    fontSize: '0.8rem'
                                }}
                            >
                                Actual sample & digital images might differ due to varying light and screen settings.
                            </Typography>

                            {/* Key Highlights */}
                            <Box sx={{ mb: 3 }}>
                                <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold' }}>
                                    Key Highlights
                                </Typography>
                                <List dense>
                                    {currentProduct.keyHighlights.map((highlight, index) => (
                                        <ListItem key={index} sx={{ py: 0.5, px: 0 }}>
                                            <ListItemIcon sx={{ minWidth: '20px' }}>
                                                <Box
                                                    sx={{
                                                        width: '4px',
                                                        height: '4px',
                                                        borderRadius: '50%',
                                                        backgroundColor: theme.palette.primary.main
                                                    }}
                                                />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={highlight}
                                                primaryTypographyProps={{ fontSize: '0.9rem' }}
                                            />
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>

                            {/* Specs Preview */}
                            <Box sx={{ mb: 3 }}>
                                <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold' }}>
                                    Specifications
                                </Typography>
                                <Box>
                                    <SpecChip label={`Handle Type: ${currentProduct.specs.handleType}`} />
                                    <SpecChip label={`In-Stock: ${currentProduct.specs.inStock}`} />
                                    <SpecChip label={`Material: ${currentProduct.specs.material}`} />
                                </Box>
                            </Box>

                            {/* Full Description */}
                            <Box sx={{ mb: 3 }}>
                                <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold' }}>
                                    Full Description
                                </Typography>
                                <Collapse in={expandedDescription} collapsedSize={120}>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            lineHeight: 1.6,
                                            color: theme.palette.text.primary
                                        }}
                                    >
                                        {currentProduct.fullDescription}
                                    </Typography>
                                </Collapse>
                                <Button
                                    onClick={toggleDescription}
                                    size="small"
                                    sx={{
                                        mt: 1,
                                        textTransform: 'none',
                                        color: theme.palette.primary.main
                                    }}
                                >
                                    {expandedDescription ? 'Read less' : 'Read more'}
                                    {expandedDescription ? <ExpandLess /> : <ExpandMore />}
                                </Button>
                            </Box>

                            {/* Care & Installation Notes */}
                            <Box sx={{ mb: 3 }}>
                                <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold', fontSize: '1rem' }}>
                                    Care & Installation Notes
                                </Typography>
                                <List dense>
                                    {currentProduct.careNotes.map((note, index) => (
                                        <ListItem key={index} sx={{ py: 0.5, px: 0 }}>
                                            <ListItemIcon sx={{ minWidth: '20px' }}>
                                                <Box
                                                    sx={{
                                                        width: '4px',
                                                        height: '4px',
                                                        borderRadius: '50%',
                                                        backgroundColor: theme.palette.text.secondary
                                                    }}
                                                />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={note}
                                                primaryTypographyProps={{ fontSize: '0.85rem' }}
                                            />
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>

                            {/* Lead Time / Warranty */}
                            <Typography
                                variant="body2"
                                sx={{
                                    mb: 3,
                                    color: theme.palette.text.secondary,
                                    fontSize: '0.8rem'
                                }}
                            >
                                {currentProduct.leadTime}
                            </Typography>

                            {/* Product Information Panel */}
                            <InfoPanel>
                                <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
                                    Product Information
                                </Typography>

                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 0.5 }}>
                                        <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.85rem' }}>Range:</Typography>
                                        <Typography variant="body2" fontWeight="medium" sx={{ fontSize: '0.85rem' }}>{currentProduct.specs.range}</Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 0.5 }}>
                                        <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.85rem' }}>Grade:</Typography>
                                        <Typography variant="body2" fontWeight="medium" sx={{ fontSize: '0.85rem' }}>{currentProduct.specs.grade}</Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 0.5 }}>
                                        <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.85rem' }}>Handle Type:</Typography>
                                        <Typography variant="body2" fontWeight="medium" sx={{ fontSize: '0.85rem' }}>{currentProduct.specs.handleType}</Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 0.5 }}>
                                        <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.85rem' }}>In-Stock:</Typography>
                                        <Typography variant="body2" fontWeight="medium" sx={{ fontSize: '0.85rem' }}>{currentProduct.specs.inStock}</Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 0.5 }}>
                                        <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.85rem' }}>Material:</Typography>
                                        <Typography variant="body2" fontWeight="medium" sx={{ fontSize: '0.85rem' }}>{currentProduct.specs.material}</Typography>
                                    </Box>
                                </Box>
                            </InfoPanel>


                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}
