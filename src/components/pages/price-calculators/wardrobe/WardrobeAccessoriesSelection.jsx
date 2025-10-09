import React, { useState } from 'react';
import { Box, Typography, Card, CardContent, Button, useTheme } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import CheckIcon from '@mui/icons-material/Check';

const accessoriesOptions = [
    {
        id: 'loft',
        title: 'Loft',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300',
        price: 15000
    },
    {
        id: 'single-drawer',
        title: 'Single full-size drawer',
        image: 'https://images.unsplash.com/photo-1616627562164-e9b1864a6422?w=300',
        price: 12000
    },
    {
        id: 'half-drawer-1',
        title: '1 half-drawer',
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=300',
        price: 8000
    },
    {
        id: 'half-drawer-2',
        title: '2 half-drawers',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300',
        price: 15000
    },
    {
        id: 'wicker-pullout',
        title: 'Wicker pull out',
        image: 'https://images.unsplash.com/photo-1616627562164-e9b1864a6422?w=300',
        price: 10000
    }
];

export default function WardrobeAccessoriesSelection() {
    const theme = useTheme();
    const navigate = useNavigate();
    const location = useLocation();
    const [selectedAccessories, setSelectedAccessories] = useState(['loft']);

    const handleAccessoryToggle = (accessoryId) => {
        setSelectedAccessories(prev => {
            if (prev.includes(accessoryId)) {
                return prev.filter(id => id !== accessoryId);
            } else {
                return [...prev, accessoryId];
            }
        });
    };

    const handleNext = () => {
        const searchParams = new URLSearchParams(location.search);
        const queryParams = new URLSearchParams({
            height: searchParams.get('height'),
            type: searchParams.get('type'),
            finish: searchParams.get('finish'),
            material: searchParams.get('material'),
            accessories: selectedAccessories.join(',')
        });
        navigate(`/price-calculators/wardrobe/calculator/timeline?${queryParams.toString()}`);
    };

    const handleBack = () => {
        const searchParams = new URLSearchParams(location.search);
        const queryParams = new URLSearchParams({
            height: searchParams.get('height'),
            type: searchParams.get('type'),
            finish: searchParams.get('finish'),
            material: searchParams.get('material')
        });
        navigate(`/price-calculators/wardrobe/calculator/material?${queryParams.toString()}`);
    };

    const totalAccessoriesPrice = selectedAccessories.reduce((total, accessoryId) => {
        const accessory = accessoriesOptions.find(acc => acc.id === accessoryId);
        return total + (accessory ? accessory.price : 0);
    }, 0);

    return (
        <Box sx={{ maxWidth: 1000, mx: 'auto', p: 3 }}>
            <Typography
                variant="h4"
                sx={{
                    textAlign: 'center',
                    mb: 2,
                    fontWeight: 'bold',
                    color: theme.palette.text.primary
                }}
            >
                Add your preferred accessories (optional)
            </Typography>

            <Box sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
                gap: 3,
                mb: 4
            }}>
                {accessoriesOptions.map((accessory) => {
                    const isSelected = selectedAccessories.includes(accessory.id);
                    return (
                        <Card
                            key={accessory.id}
                            sx={{
                                border: isSelected ? `2px solid ${theme.palette.primary.main}` : '1px solid',
                                borderColor: isSelected ? theme.palette.primary.main : theme.palette.grey[300],
                                transition: 'all 0.3s ease',
                                cursor: 'pointer',
                                position: 'relative',
                                '&:hover': {
                                    borderColor: theme.palette.primary.main,
                                    boxShadow: '0 8px 24px rgba(0,0,0,0.1)'
                                }
                            }}
                            onClick={() => handleAccessoryToggle(accessory.id)}
                        >
                            {isSelected && (
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: 8,
                                        right: 8,
                                        width: 24,
                                        height: 24,
                                        borderRadius: '50%',
                                        backgroundColor: theme.palette.primary.main,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        zIndex: 1
                                    }}
                                >
                                    <CheckIcon sx={{ color: 'white', fontSize: 16 }} />
                                </Box>
                            )}

                            <CardContent sx={{ p: 2 }}>
                                <Box
                                    sx={{
                                        height: 150,
                                        backgroundImage: `url(${accessory.image})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        borderRadius: 2,
                                        mb: 2
                                    }}
                                />

                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontWeight: 'bold',
                                        textAlign: 'center',
                                        color: theme.palette.text.primary
                                    }}
                                >
                                    {accessory.title}
                                </Typography>

                                <Typography
                                    variant="body2"
                                    sx={{
                                        textAlign: 'center',
                                        color: theme.palette.primary.main,
                                        fontWeight: 600,
                                        mt: 1
                                    }}
                                >
                                    ₹{accessory.price.toLocaleString()}
                                </Typography>
                            </CardContent>
                        </Card>
                    );
                })}
            </Box>

            {/* Selected Accessories Summary */}
            {selectedAccessories.length > 0 && (
                <Card sx={{
                    backgroundColor: theme.palette.primary.light + '20',
                    border: '1px solid',
                    borderColor: theme.palette.primary.main + '30',
                    mb: 4
                }}>
                    <CardContent sx={{ p: 3 }}>
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 'bold',
                                color: theme.palette.primary.main,
                                mb: 2,
                                textAlign: 'center'
                            }}
                        >
                            Selected Accessories
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center', mb: 2 }}>
                            {selectedAccessories.map(accessoryId => {
                                const accessory = accessoriesOptions.find(acc => acc.id === accessoryId);
                                return (
                                    <Box
                                        key={accessoryId}
                                        sx={{
                                            backgroundColor: theme.palette.primary.main,
                                            color: 'white',
                                            px: 2,
                                            py: 1,
                                            borderRadius: 2,
                                            fontSize: '0.875rem'
                                        }}
                                    >
                                        {accessory?.title}
                                    </Box>
                                );
                            })}
                        </Box>
                        <Typography
                            variant="h6"
                            sx={{
                                textAlign: 'center',
                                fontWeight: 'bold',
                                color: theme.palette.text.primary
                            }}
                        >
                            Total Accessories: ₹{totalAccessoriesPrice.toLocaleString()}
                        </Typography>
                    </CardContent>
                </Card>
            )}

            {/* Navigation Buttons */}
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                mt: 4,
                pt: 3,
                borderTop: '1px solid',
                borderColor: 'divider'
            }}>
                <Button
                    variant="text"
                    onClick={handleBack}
                    sx={{
                        color: theme.palette.primary.main,
                        textTransform: 'none',
                        fontWeight: 600
                    }}
                >
                    BACK
                </Button>

                <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{
                        px: 4,
                        textTransform: 'none',
                        fontWeight: 600
                    }}
                >
                    NEXT
                </Button>
            </Box>
        </Box>
    );
}
