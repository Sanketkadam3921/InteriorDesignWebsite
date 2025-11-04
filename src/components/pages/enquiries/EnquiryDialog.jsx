import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Box,
    Container,
    Typography,
    Button,
    TextField,
    FormControlLabel,
    Checkbox,
    Radio,
    RadioGroup,
    FormControl,
    FormLabel,
    Card,
    CardContent,
    Stepper,
    Step,
    StepLabel,
    IconButton,
    Link
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const steps = ['SCOPE OF WORK', 'ROOMS TO DESIGN', 'PACKAGE', 'GET QUOTE'];

export default function QuoteForm() {
    const navigate = useNavigate();
    const [activeStep, setActiveStep] = useState(0);
    const [formData, setFormData] = useState({
        // Step 1: Scope of Work
        scopeOfWork: '',
        
        // Step 2: Rooms to Design
        rooms: {
            livingRoom: 1,
            kitchen: 1,
            bedroom: 4,
            bathroom: 4,
            dining: 1
        },
        
        // Step 3: Package
        selectedPackage: 'essentials',
        
        // Step 4: Get Quote
        name: '',
        email: '',
        phone: '',
        whatsappOptIn: true,
        propertyName: ''
    });

    const packages = [
        {
            id: 'essentials',
            name: 'Essentials',
            description: 'Our base package with essential solutions for all your home interiors needs.',
            stars: 1,
            features: [
                'Affordable pricing',
                'Convenient designs',
                'Basic accessories'
            ]
        },
        {
            id: 'premium',
            name: 'Premium',
            description: 'Our superior package offering solutions to take your interiors to the next level.',
            stars: 2,
            features: [
                'Mid-range pricing',
                'Premium designs',
                'Wide range of accessories'
            ]
        },
        {
            id: 'luxe',
            name: 'Luxe',
            description: 'Our high-end package for the ultimate home interiors experience.',
            stars: 3,
            features: [
                'Elite pricing',
                'Lavish designs',
                'Extensive range of accessories'
            ]
        }
    ];

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleInputChange = (field) => (event) => {
        setFormData({
            ...formData,
            [field]: event.target.value
        });
    };

    const handleRoomQuantityChange = (room, increment) => {
        setFormData({
            ...formData,
            rooms: {
                ...formData.rooms,
                [room]: Math.max(0, formData.rooms[room] + increment)
            }
        });
    };

    const handlePackageChange = (event) => {
        setFormData({
            ...formData,
            selectedPackage: event.target.value
        });
    };

    const handleCheckboxChange = (event) => {
        setFormData({
            ...formData,
            whatsappOptIn: event.target.checked
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Quote form submitted:', formData);
        // Handle form submission here
        alert('Quote request submitted successfully!');
        navigate('/designs/kitchen');
    };

    const renderStepContent = (step) => {
        switch (step) {
            case 0:
                return (
                    <Box>
                        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
                            What's the scope of your project?
                        </Typography>
                        <FormControl component="fieldset">
                            <RadioGroup
                                value={formData.scopeOfWork}
                                onChange={handleInputChange('scopeOfWork')}
                            >
                                <FormControlLabel
                                    value="full-home"
                                    control={<Radio sx={{ color: '#d32f2f', '&.Mui-checked': { color: '#d32f2f' } }} />}
                                    label="Full Home Interior Design"
                                />
                                <FormControlLabel
                                    value="specific-rooms"
                                    control={<Radio sx={{ color: '#d32f2f', '&.Mui-checked': { color: '#d32f2f' } }} />}
                                    label="Specific Rooms Only"
                                />
                                <FormControlLabel
                                    value="consultation"
                                    control={<Radio sx={{ color: '#d32f2f', '&.Mui-checked': { color: '#d32f2f' } }} />}
                                    label="Design Consultation"
                                />
                            </RadioGroup>
                        </FormControl>
                    </Box>
                );

            case 1:
                return (
                    <Box>
                        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
                            Pick the rooms you'd like us to design
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            {Object.entries(formData.rooms).map(([room, quantity]) => (
                                <Box
                                    key={room}
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                        p: 2,
                                        backgroundColor: 'white',
                                        borderRadius: 2,
                                        border: '1px solid #e0e0e0'
                                    }}
                                >
                                    <Typography variant="h6" sx={{ textTransform: 'capitalize' }}>
                                        {room.replace(/([A-Z])/g, ' $1').trim()}
                                    </Typography>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                        <IconButton
                                            onClick={() => handleRoomQuantityChange(room, -1)}
                                            sx={{
                                                backgroundColor: '#d32f2f',
                                                color: 'white',
                                                width: 32,
                                                height: 32,
                                                '&:hover': { backgroundColor: '#b71c1c' }
                                            }}
                                        >
                                            -
                                        </IconButton>
                                        <Box
                                            sx={{
                                                minWidth: 40,
                                                textAlign: 'center',
                                                p: 1,
                                                backgroundColor: 'white',
                                                border: '1px solid #e0e0e0',
                                                borderRadius: 1
                                            }}
                                        >
                                            {quantity}
                                        </Box>
                                        <IconButton
                                            onClick={() => handleRoomQuantityChange(room, 1)}
                                            sx={{
                                                backgroundColor: '#d32f2f',
                                                color: 'white',
                                                width: 32,
                                                height: 32,
                                                '&:hover': { backgroundColor: '#b71c1c' }
                                            }}
                                        >
                                            +
                                        </IconButton>
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                );

            case 2:
                return (
                    <Box>
                        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
                            Pick your package
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 3 }}>
                            {packages.map((pkg) => (
                                <Card
                                    key={pkg.id}
                                    sx={{
                                        flex: 1,
                                        border: formData.selectedPackage === pkg.id ? '2px solid #d32f2f' : '1px solid #e0e0e0',
                                        backgroundColor: pkg.id === 'premium' ? '#fce4ec' : pkg.id === 'luxe' ? '#f5f5f5' : 'white',
                                        cursor: 'pointer',
                                        '&:hover': {
                                            boxShadow: 2
                                        }
                                    }}
                                    onClick={() => setFormData({ ...formData, selectedPackage: pkg.id })}
                                >
                                    <CardContent>
                                        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                            <Radio
                                                checked={formData.selectedPackage === pkg.id}
                                                value={pkg.id}
                                                onChange={handlePackageChange}
                                                sx={{ color: '#d32f2f', '&.Mui-checked': { color: '#d32f2f' } }}
                                            />
                                            <Typography variant="h6" sx={{ fontWeight: 'bold', flexGrow: 1 }}>
                                                {pkg.name}
                                            </Typography>
                                            <Box sx={{ display: 'flex', gap: 0.5 }}>
                                                {[...Array(3)].map((_, index) => (
                                                    index < pkg.stars ? (
                                                        <StarIcon key={index} sx={{ color: '#ffc107', fontSize: 20 }} />
                                                    ) : (
                                                        <StarBorderIcon key={index} sx={{ color: '#e0e0e0', fontSize: 20 }} />
                                                    )
                                                ))}
                                            </Box>
                                        </Box>
                                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                                            {pkg.description}
                                        </Typography>
                                        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                                            {pkg.features.map((feature, index) => (
                                                <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                    <CheckIcon sx={{ color: '#4caf50', fontSize: 16 }} />
                                                    <Typography variant="body2">{feature}</Typography>
                                                </Box>
                                            ))}
                                        </Box>
                                    </CardContent>
                                </Card>
                            ))}
                        </Box>
                    </Box>
                );

            case 3:
                return (
                    <Box>
                        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold', mb: 4 }}>
                            Please share your details so we can send you the estimate
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                            <TextField
                                fullWidth
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleInputChange('name')}
                                required
                            />
                            <TextField
                                fullWidth
                                placeholder="Email ID"
                                type="email"
                                value={formData.email}
                                onChange={handleInputChange('email')}
                                required
                            />
                            <Box sx={{ display: 'flex', gap: 1 }}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        px: 2,
                                        py: 1.5,
                                        border: '1px solid #c4c4c4',
                                        borderRadius: 1,
                                        backgroundColor: '#f5f5f5',
                                        minWidth: '80px',
                                        cursor: 'pointer'
                                    }}
                                >
                                    <Box
                                        sx={{
                                            width: 20,
                                            height: 15,
                                            backgroundColor: '#ff6b6b',
                                            borderRadius: '2px',
                                            mr: 1,
                                            position: 'relative'
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                top: '50%',
                                                left: '50%',
                                                transform: 'translate(-50%, -50%)',
                                                width: 0,
                                                height: 0,
                                                borderLeft: '3px solid transparent',
                                                borderRight: '3px solid transparent',
                                                borderTop: '4px solid white'
                                            }}
                                        />
                                    </Box>
                                    <Typography variant="body2" sx={{ fontSize: '0.875rem' }}>
                                        +91
                                    </Typography>
                                </Box>
                                <TextField
                                    fullWidth
                                    placeholder="Phone number"
                                    type="tel"
                                    value={formData.phone}
                                    onChange={handleInputChange('phone')}
                                    required
                                />
                            </Box>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={formData.whatsappOptIn}
                                        onChange={handleCheckboxChange}
                                        sx={{
                                            color: '#d32f2f',
                                            '&.Mui-checked': { color: '#d32f2f' }
                                        }}
                                    />
                                }
                                label="Send me updates on WhatsApp"
                            />
                            <TextField
                                fullWidth
                                placeholder="Property Name"
                                value={formData.propertyName}
                                onChange={handleInputChange('propertyName')}
                            />
                        </Box>
                    </Box>
                );

            default:
                return 'Unknown step';
        }
    };

    return (
        <Box sx={{ minHeight: '100vh', backgroundColor: '#f5f5f5', py: 4 }}>
            <Container maxWidth="md">
                {/* Progress Bar */}
                <Box sx={{ mb: 4 }}>
                    <Stepper activeStep={activeStep} alternativeLabel>
                        {steps.map((label, index) => (
                            <Step key={label}>
                                <StepLabel
                                    sx={{
                                        '& .MuiStepLabel-label': {
                                            fontSize: '0.75rem',
                                            fontWeight: 'bold'
                                        }
                                    }}
                                >
                                    {label}
                                </StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </Box>

                {/* Main Content Card */}
                <Card sx={{ p: 4, borderRadius: 2, boxShadow: 2 }}>
                    <CardContent>
                        {renderStepContent(activeStep)}
                    </CardContent>
                </Card>

                {/* Navigation Buttons */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
                    <Button
                        onClick={activeStep === 0 ? () => navigate('/designs/kitchen') : handleBack}
                        sx={{
                            color: '#d32f2f',
                            textTransform: 'uppercase',
                            fontWeight: 'bold'
                        }}
                    >
                        Back
                    </Button>
                    {activeStep === steps.length - 1 ? (
                        <Button
                            onClick={handleSubmit}
                            variant="contained"
                            sx={{
                                backgroundColor: '#d32f2f',
                                color: 'white',
                                textTransform: 'uppercase',
                                fontWeight: 'bold',
                                px: 4,
                                '&:hover': {
                                    backgroundColor: '#b71c1c'
                                }
                            }}
                        >
                            Submit
                        </Button>
                    ) : (
                        <Button
                            onClick={handleNext}
                            variant="contained"
                            disabled={
                                (activeStep === 0 && !formData.scopeOfWork) ||
                                (activeStep === 1 && Object.values(formData.rooms).every(qty => qty === 0)) ||
                                (activeStep === 2 && !formData.selectedPackage)
                            }
                            sx={{
                                backgroundColor: '#d32f2f',
                                color: 'white',
                                textTransform: 'uppercase',
                                fontWeight: 'bold',
                                px: 4,
                                '&:hover': {
                                    backgroundColor: '#b71c1c'
                                }
                            }}
                        >
                            Next
                        </Button>
                    )}
                </Box>

                {/* Privacy Policy Link */}
                {activeStep === 3 && (
                    <Box sx={{ textAlign: 'center', mt: 2 }}>
                        <Typography variant="caption" color="text.secondary">
                            By submitting this form, you agree to the{' '}
                            <Link href="#" sx={{ color: '#d32f2f', textDecoration: 'underline' }}>
                                privacy policy
                            </Link>{' '}
                            &{' '}
                            <Link href="#" sx={{ color: '#d32f2f', textDecoration: 'underline' }}>
                                terms and conditions
                            </Link>
                        </Typography>
                    </Box>
                )}
            </Container>
        </Box>
    );
}
