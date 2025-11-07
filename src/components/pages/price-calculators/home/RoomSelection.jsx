import React, { useState, useMemo } from 'react';
import {
    Box,
    Typography,
    Card,
    CardContent,
    Button,
    IconButton,
    useTheme,
    Divider,
    Alert,
} from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const roomTypes = [
    { id: 'livingRoom', label: 'Living Room', defaultCount: 1 },
    { id: 'kitchen', label: 'Kitchen', defaultCount: 1 },
    { id: 'bedroom', label: 'Bedroom', defaultCount: 1 },
    { id: 'bathroom', label: 'Bathroom', defaultCount: 2 }, // Excluded from limit logic
    { id: 'dining', label: 'Dining', defaultCount: 0 },
];

// Define maximum allowed "main rooms" per BHK type
const bhkRoomLimits = {
    '1bhk': 3,
    '2bhk': 5,
    '3bhk': 7,
    '4bhk': 9,
    '5bhk': 12,
};

export default function RoomSelection() {
    const theme = useTheme();
    const navigate = useNavigate();
    const location = useLocation();

    const searchParams = new URLSearchParams(location.search);
    const selectedBHK = searchParams.get('bhk');

    const maxRoomsAllowed = bhkRoomLimits[selectedBHK] || 5;

    const [roomCounts, setRoomCounts] = useState(() => {
        const counts = {};
        roomTypes.forEach((room) => {
            counts[room.id] = room.defaultCount;
        });
        return counts;
    });

    // Calculate total rooms excluding bathrooms
    const totalMainRooms = useMemo(
        () =>
            Object.entries(roomCounts)
                .filter(([roomId]) => roomId !== 'bathroom')
                .reduce((sum, [, count]) => sum + count, 0),
        [roomCounts]
    );

    const totalRooms = useMemo(
        () => Object.values(roomCounts).reduce((sum, count) => sum + count, 0),
        [roomCounts]
    );

    const handleIncrement = (roomId) => {
        // Allow bathroom increments without limit
        if (roomId === 'bathroom' || totalMainRooms < maxRoomsAllowed) {
            setRoomCounts((prev) => ({
                ...prev,
                [roomId]: Math.min(prev[roomId] + 1, 10),
            }));
        }
    };

    const handleDecrement = (roomId) => {
        setRoomCounts((prev) => ({
            ...prev,
            [roomId]: Math.max(prev[roomId] - 1, 0),
        }));
    };

    const handleNext = () => {
        const queryParams = new URLSearchParams(location.search);
        const finalParams = new URLSearchParams({
            bhk: queryParams.get('bhk'),
            size: queryParams.get('size'),
            ...roomCounts,
        });
        navigate(`/price-calculators/home/calculator/package?${finalParams.toString()}`);
    };

    const handleBack = () => {
        const queryParams = new URLSearchParams(location.search);
        navigate(`/price-calculators/home/calculator/bhk?${queryParams.toString()}`);
    };

    return (
        <Box sx={{ 
            maxWidth: 700, 
            mx: 'auto', 
            p: 3,
            display: "flex",
            flexDirection: "column",
            minHeight: "calc(100vh - 200px)",
            pb: 10,
        }}>
            <Typography
                variant="h5"
                sx={{
                    textAlign: 'center',
                    mb: 1,
                    fontWeight: 600,
                    color: theme.palette.text.primary,
                }}
            >
                Select the Rooms You'd Like Us to Design
            </Typography>

            <Typography
                variant="body2"
                sx={{
                    textAlign: 'center',
                    mb: 4,
                    color: theme.palette.text.secondary,
                }}
            >
                Add or remove rooms based on your home configuration.
            </Typography>

            <Box
                sx={{
                    backgroundColor: theme.palette.primary.light + '25',
                    borderRadius: 2,
                    p: 3,
                    mb: 2,
                    border: '1px solid',
                    borderColor: theme.palette.primary.light + '40',
                }}
            >
            <Box sx={{ 
                display: 'grid', 
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
                gap: 1.5, 
                mb: 3 
            }}>
                {roomTypes.map((room, index) => {
                    const isBathroom = room.id === 'bathroom';
                    const atLimit = totalMainRooms >= maxRoomsAllowed && !isBathroom;
                    const isDining = room.id === 'dining'; // Last item (index 4)

                    return (
                        <Card
                            key={room.id}
                            sx={{
                                borderRadius: 2,
                                border: '1px solid',
                                borderColor: theme.palette.grey[300],
                                boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
                                transition: 'none',
                                '&:hover': { borderColor: theme.palette.primary.main },
                                // Center Dining (last item in 2-column grid) with same width as other cards
                                gridColumn: isDining ? { xs: '1', sm: 'span 2' } : 'auto',
                                justifySelf: isDining ? { xs: 'stretch', sm: 'center' } : 'stretch',
                                width: isDining ? { xs: '100%', sm: 'calc((100% - 1.5rem) / 2)' } : '100%',
                            }}
                        >
                            <CardContent sx={{ p: 2 }}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Typography
                                        variant="subtitle1"
                                        sx={{
                                            fontWeight: 600,
                                            color: theme.palette.text.primary,
                                        }}
                                    >
                                        {room.label}
                                    </Typography>

                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <IconButton
                                            onClick={() => handleDecrement(room.id)}
                                            disabled={roomCounts[room.id] <= 0}
                                            sx={{
                                                color: theme.palette.primary.main,
                                                border: '1px solid',
                                                borderColor: theme.palette.primary.main,
                                                width: 32,
                                                height: 32,
                                                '&:hover': {
                                                    backgroundColor: theme.palette.primary.main,
                                                    color: 'white',
                                                },
                                            }}
                                        >
                                            <RemoveIcon fontSize="small" />
                                        </IconButton>

                                        <Typography
                                            variant="body1"
                                            sx={{
                                                minWidth: 28,
                                                textAlign: 'center',
                                                fontWeight: 600,
                                                color: theme.palette.text.primary,
                                            }}
                                        >
                                            {roomCounts[room.id]}
                                        </Typography>

                                        <IconButton
                                            onClick={() => handleIncrement(room.id)}
                                            disabled={
                                                roomCounts[room.id] >= 10 ||
                                                atLimit
                                            }
                                            sx={{
                                                color: theme.palette.primary.main,
                                                border: '1px solid',
                                                borderColor: theme.palette.primary.main,
                                                width: 32,
                                                height: 32,
                                                '&:hover': {
                                                    backgroundColor: theme.palette.primary.main,
                                                    color: 'white',
                                                },
                                            }}
                                        >
                                            <AddIcon fontSize="small" />
                                        </IconButton>
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>
                    );
                })}
            </Box>

            {totalMainRooms >= maxRoomsAllowed && (
                <Alert
                    severity="info"
                    sx={{
                        mb: 3,
                        borderRadius: 2,
                        backgroundColor: theme.palette.primary.light + '10',
                    }}
                >
                    You’ve reached the limit of {maxRoomsAllowed} main rooms for your{' '}
                    {selectedBHK?.toUpperCase()} plan.
                    You can still adjust bathrooms freely.
                </Alert>
            )}

            <Card
                sx={{
                    backgroundColor: theme.palette.primary.light + '15',
                    border: '1px solid',
                    borderColor: theme.palette.primary.main + '30',
                    borderRadius: 2,
                    mb: 3,
                }}
            >
                <CardContent sx={{ textAlign: 'center', py: 2 }}>
                    <Typography
                        variant="subtitle1"
                        sx={{
                            fontWeight: 600,
                            color: theme.palette.primary.main,
                            mb: 0.5,
                        }}
                    >
                        Total Main Rooms: {totalMainRooms}
                    </Typography>
                    <Typography variant="caption" sx={{ color: theme.palette.text.secondary }}>
                        Maximum allowed: {maxRoomsAllowed} (Bathrooms excluded)
                    </Typography>
                </CardContent>
            </Card>
            </Box>

            <Box sx={{ flex: 1, minHeight: 20 }} />

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    pt: 2,
                    borderTop: "1px solid",
                    borderColor: theme.palette.divider,
                    position: "sticky",
                    bottom: 0,
                    backgroundColor: theme.palette.background.default,
                    pb: 2,
                }}
            >
                <Button
                    variant="text"
                    onClick={handleBack}
                    sx={{
                        color: theme.palette.primary.main,
                        textTransform: 'none',
                        fontWeight: 600,
                    }}
                >
                    Back
                </Button>

                <Button
                    variant="contained"
                    onClick={handleNext}
                    disabled={totalRooms === 0}
                    sx={{
                        px: 4,
                        textTransform: 'none',
                        fontWeight: 600,
                    }}
                >
                    Next
                </Button>
            </Box>
        </Box>
    );
}
