import React from 'react';
import {
    Box,
    Container,
    Typography,
    Card,
    CardContent,
    CardMedia,
    Button,
    useTheme
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function AllDesigns() {
    const navigate = useNavigate();
    const theme = useTheme();

    const designCategories = [
        { id: 'kitchen', title: 'Modular Kitchen Designs', description: 'Functional and beautiful kitchens with smart storage solutions', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500', count: 15 },
        { id: 'wardrobe', title: 'Wardrobe Designs', description: 'Customized wardrobes with optimal storage and style', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500', count: 12 },
        { id: 'bathroom', title: 'Bathroom Designs', description: 'Luxurious and practical bathroom designs for daily comfort', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=500', count: 10 },
        { id: 'master-bedroom', title: 'Master Bedroom Designs', description: 'Elegant master bedroom designs for peaceful rest', image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=500', count: 18 },
        { id: 'living-room', title: 'Living Room Designs', description: 'Inviting living spaces for relaxation and entertainment', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500', count: 24 },
        { id: 'pooja-room', title: 'Pooja Room Designs', description: 'Sacred spaces designed with tradition and elegance', image: 'https://images.unsplash.com/photo-1604328727240-3e2d3f9e2e2f?w=500', count: 8 },
        { id: 'tv-unit', title: 'TV Unit Designs', description: 'Stylish TV units that enhance your entertainment area', image: 'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=500', count: 14 },
        { id: 'false-ceiling', title: 'False Ceiling Designs', description: 'Modern ceiling designs that add dimension and style', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500', count: 16 },
        { id: 'kids-bedroom', title: 'Kids Bedroom Designs', description: 'Fun and functional spaces for children to grow and play', image: 'https://images.unsplash.com/photo-1586105449897-20b5efeb3c35?w=500', count: 11 },
        { id: 'balcony', title: 'Balcony Designs', description: 'Transform your balcony into a relaxing outdoor retreat', image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=500', count: 9 },
        { id: 'dining-room', title: 'Dining Room Designs', description: 'Elegant dining spaces for memorable meals and gatherings', image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500', count: 10 },
        { id: 'foyer', title: 'Foyer Designs', description: 'Make a stunning first impression with elegant foyer designs', image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=500', count: 7 },
        { id: 'homes-livspace', title: 'Homes by Livspace', description: 'Complete home interior solutions from Livspace', image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=500', count: 20 },
        { id: 'home-office', title: 'Home Office Designs', description: 'Productive workspaces designed for focus and creativity', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=500', count: 13 },
        { id: 'guest-bedroom', title: 'Guest Bedroom Designs', description: 'Comfortable guest rooms that welcome your visitors', image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=500', count: 8 },
        { id: 'window', title: 'Window Designs', description: 'Beautiful window treatments and designs for natural light', image: 'https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=500', count: 12 },
        { id: 'flooring', title: 'Flooring Designs', description: 'Explore various flooring options for every room', image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=500', count: 15 },
        { id: 'wall-decor', title: 'Wall Decor Designs', description: 'Creative wall decor ideas to personalize your space', image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=500', count: 18 },
        { id: 'wall-paint', title: 'Wall Paint Designs', description: 'Color combinations and paint ideas for every room', image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=500', count: 22 },
        { id: 'wallpaper', title: 'Home Wallpaper Designs', description: 'Stunning wallpaper designs to transform your walls', image: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?w=500', count: 16 },
        { id: 'tile', title: 'Tile Designs', description: 'Beautiful tile patterns for floors and walls', image: 'https://images.unsplash.com/photo-1604709177225-055f99402ea3?w=500', count: 14 },
        { id: 'study-room', title: 'Study Room Designs', description: 'Focused study spaces for learning and concentration', image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=500', count: 9 },
        { id: 'kitchen-sinks', title: 'Kitchen Sinks', description: 'Modern and functional kitchen sink designs', image: 'https://images.unsplash.com/photo-1585659722983-3a675dabf23d?w=500', count: 6 },
        { id: 'space-saving', title: 'Space Saving Designs', description: 'Smart solutions to maximize your living space', image: 'https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=500', count: 17 },
        { id: 'door', title: 'Door Designs', description: 'Stylish door designs for every room in your home', image: 'https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=500', count: 11 },
        { id: 'staircase', title: 'Staircase Designs', description: 'Elegant staircase designs that make a statement', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500', count: 10 },
        { id: 'crockery-unit', title: 'Crockery Unit Designs', description: 'Display and storage solutions for your dinnerware', image: 'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=500', count: 8 },
        { id: 'home-bar', title: 'Home Bar Designs', description: 'Stylish home bar setups for entertaining guests', image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=500', count: 7 },
    ];

    return (
        <Container maxWidth="xl" sx={{
            py: { xs: 4, sm: 0, md: 4 },
        }}
        >
            {/* Header Section */}
            <Box sx={{ mb: 6, textAlign: 'left' }}>
                <Typography
                    variant="h3"
                    component="h1"
                    gutterBottom
                    sx={{
                        fontWeight: 700,
                        color: theme.palette.text.primary,
                    }}
                >
                    Interior Design Gallery
                </Typography>
                <Typography
                    variant="h6"
                    color="text.secondary"
                    sx={{ maxWidth: '800px' }}
                >
                    Explore our comprehensive collection of interior design categories.
                    From kitchens to living rooms, find inspiration for every space in your home.
                </Typography>
            </Box>

            {/* Design Categories Grid (CSS Grid for Equal Height) */}
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: {
                        xs: '1fr',
                        sm: 'repeat(2, 1fr)',
                        md: 'repeat(3, 1fr)',
                        lg: 'repeat(4, 1fr)',
                    },
                    gap: 3,
                    mt: 2,
                    width: '100%',
                    '& > *': {
                        minHeight: '430px',
                    },
                }}
            >
                {designCategories.map((category) => (
                    <Card
                        key={category.id}
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease-in-out',
                            '&:hover': {
                                transform: 'translateY(-8px)',
                                boxShadow: theme.shadows[8],
                            },
                        }}
                        onClick={() => navigate(`/designs/${category.id}`)}
                    >
                        <CardMedia
                            component="img"
                            height="220"
                            image={category.image}
                            alt={category.title}
                            sx={{ objectFit: 'cover' }}
                        />
                        <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                            <Typography
                                variant="h6"
                                gutterBottom
                                sx={{
                                    color: theme.palette.text.primary,
                                    fontWeight: 600,
                                    fontSize: '1.1rem',
                                    minHeight: '48px',
                                }}
                            >
                                {category.title}
                            </Typography>
                            <Typography
                                variant="body2"
                                color="text.secondary"
                                sx={{ mb: 2, flexGrow: 1 }}
                            >
                                {category.description}
                            </Typography>
                            <Typography
                                variant="body2"
                                color="primary"
                                sx={{ fontWeight: 500, mb: 2 }}
                            >
                                {category.count} designs available
                            </Typography>
                            <Button
                                variant="outlined"
                                fullWidth
                                onClick={(e) => {
                                    e.stopPropagation();
                                    navigate(`/designs/${category.id}`);
                                }}
                                sx={{
                                    borderColor: theme.palette.primary.main,
                                    color: theme.palette.primary.main,
                                    '&:hover': {
                                        borderColor: theme.palette.primary.dark,
                                        backgroundColor: theme.palette.action.hover,
                                    },
                                }}
                            >
                                View Designs
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </Box>

            {/* CTA Section */}
            <Box
                sx={{
                    textAlign: 'center',
                    py: 6,
                    mt: 6,
                    backgroundColor: theme.palette.background.default,
                    borderRadius: 2,
                    border: `1px solid ${theme.palette.divider}`,
                }}
            >
                <Typography
                    variant="h4"
                    gutterBottom
                    sx={{
                        fontWeight: 600,
                        color: theme.palette.text.primary,
                    }}
                >
                    Need Help Choosing?
                </Typography>
                <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ mb: 3, maxWidth: '600px', mx: 'auto' }}
                >
                    Our design experts can help you choose the perfect style for your space.
                    Get personalized recommendations tailored to your needs.
                </Typography>
                <Button
                    variant="contained"
                    size="large"
                    onClick={() => navigate('/contact')}
                    sx={{
                        px: 4,
                        py: 1.5,
                        fontSize: '1.1rem',
                        backgroundColor: theme.palette.primary.main,
                        '&:hover': {
                            backgroundColor: theme.palette.primary.dark,
                        },
                    }}
                >
                    Get Design Consultation
                </Button>
            </Box>
        </Container>
    );
}
