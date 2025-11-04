import React, { useState, useEffect } from 'react';
import {
    Box,
    Typography,
    Card,
    CardContent,
    Button,
    TextField,
    FormControlLabel,
    Checkbox,
    useTheme,
    Snackbar,
    Alert,
    styled,
} from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

// 🔴 Red asterisk for required fields
const RedAsteriskTextField = styled(TextField)({
    '& .MuiFormLabel-asterisk': {
        color: 'red',
    },
});

export default function WardrobeEstimateForm() {
    const theme = useTheme();
    const navigate = useNavigate();
    const location = useLocation();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        propertyName: '',
        whatsappUpdates: false,
    });

    const [errors, setErrors] = useState({});
    const [toast, setToast] = useState({ open: false, message: '', severity: 'success' });
    const [estimatedPrice, setEstimatedPrice] = useState(0);

    // 💰 Calculate estimated price
    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const height = searchParams.get('height');
        const type = searchParams.get('type');
        const finish = searchParams.get('finish');
        const material = searchParams.get('material');
        const accessories = searchParams.get('accessories');

        const heightPrices = {
            '4ft': 80000,
            '6ft': 120000,
            '7ft': 150000,
            '9ft': 200000,
        };

        const typeMultipliers = {
            sliding: 1.0,
            swing: 0.9,
        };

        const finishMultipliers = {
            laminate: 1.0,
            membrane: 1.3,
            acrylic: 1.8,
        };

        const materialMultipliers = {
            mdf: 1.0,
            hdf: 1.2,
        };

        const accessoriesPrices = {
            loft: 15000,
            'single-drawer': 12000,
            'half-drawer-1': 8000,
            'half-drawer-2': 15000,
            'wicker-pullout': 10000,
        };

        let totalPrice = heightPrices[height] || 150000;
        totalPrice *= typeMultipliers[type] || 1.0;
        totalPrice *= finishMultipliers[finish] || 1.0;
        totalPrice *= materialMultipliers[material] || 1.0;

        if (accessories) {
            const selectedAccessories = accessories.split(',');
            selectedAccessories.forEach((a) => {
                if (accessoriesPrices[a]) totalPrice += accessoriesPrices[a];
            });
        }

        setEstimatedPrice(Math.round(totalPrice));
    }, [location.search]);

    // 🧩 Validation rules
    const validateField = (field, value) => {
        let error = '';

        switch (field) {
            case 'name':
                if (!value.trim()) error = 'Name is required';
                else if (!/^[A-Za-z\s]+$/.test(value))
                    error = 'Only letters and spaces allowed';
                break;

            case 'email':
                if (!value.trim()) error = 'Email is required';
                else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
                    error = 'Enter a valid email address';
                break;

            case 'phone':
                if (!value.trim()) error = 'Phone number is required';
                else if (!/^[6-9]\d{9}$/.test(value))
                    error = 'Enter a valid 10-digit Indian number';
                break;

            case 'propertyName':
                if (!value.trim()) error = 'Property name is required';
                else if (!/^[A-Za-z0-9\s]+$/.test(value))
                    error = 'Only letters and numbers allowed';
                break;

            default:
                break;
        }

        setErrors((prev) => ({ ...prev, [field]: error }));
    };

    // 🧠 Restrict invalid characters live
    const handleInputChange = (field) => (event) => {
        let value =
            event.target.type === 'checkbox'
                ? event.target.checked
                : event.target.value;

        switch (field) {
            case 'name':
                value = value.replace(/[^A-Za-z\s]/g, '');
                break;
            case 'phone':
                value = value.replace(/\D/g, '').slice(0, 10);
                break;
            case 'propertyName':
                value = value.replace(/[^A-Za-z0-9\s]/g, '');
                break;
            default:
                break;
        }

        setFormData((prev) => ({ ...prev, [field]: value }));
        validateField(field, value);
    };

    const isFormValid = () =>
        Object.values(formData).every((v) =>
            typeof v === 'boolean' ? true : v.trim() !== ''
        ) && Object.values(errors).every((err) => !err);

    // 📨 Handle Submit
    const handleSubmit = (event) => {
        event.preventDefault();

        Object.entries(formData).forEach(([key, value]) =>
            validateField(key, value)
        );

        if (!isFormValid()) {
            setToast({
                open: true,
                message: 'Please fill all required fields correctly.',
                severity: 'error',
            });
            return;
        }

        setToast({
            open: true,
            message: `Thank you ${formData.name}! Your wardrobe estimate is ₹${estimatedPrice.toLocaleString()}. We’ll contact you soon.`,
            severity: 'success',
        });

        setTimeout(() => {
            navigate('/price-calculators/wardrobe');
        }, 2000);
    };

    const handleBack = () => {
        const searchParams = new URLSearchParams(location.search);
        const queryParams = new URLSearchParams({
            height: searchParams.get('height'),
            type: searchParams.get('type'),
            finish: searchParams.get('finish'),
            material: searchParams.get('material'),
            accessories: searchParams.get('accessories'),
        });
        navigate(
            `/price-calculators/wardrobe/calculator/timeline?${queryParams.toString()}`
        );
    };

    return (
        <Box sx={{ maxWidth: 600, mx: 'auto', p: 3 }}>
            <Typography
                variant="h4"
                sx={{
                    textAlign: 'center',
                    mb: 2,
                    fontWeight: 'bold',
                    color: theme.palette.text.primary,
                }}
            >
                Your wardrobe estimate is almost ready
            </Typography>

            <Card sx={{ mb: 4 }}>
                <CardContent sx={{ p: 3 }}>
                    <form onSubmit={handleSubmit} noValidate>
                        <RedAsteriskTextField
                            fullWidth
                            label="Name"
                            value={formData.name}
                            onChange={handleInputChange('name')}
                            margin="normal"
                            required
                            size="small"
                            error={!!errors.name}
                            helperText={errors.name}
                        />

                        <RedAsteriskTextField
                            fullWidth
                            label="Email ID"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange('email')}
                            margin="normal"
                            required
                            size="small"
                            error={!!errors.email}
                            helperText={errors.email}
                        />

                        <RedAsteriskTextField
                            fullWidth
                            label="Phone Number"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange('phone')}
                            margin="normal"
                            required
                            size="small"
                            error={!!errors.phone}
                            helperText={errors.phone}
                        />


                        <RedAsteriskTextField
                            fullWidth
                            label="Property Name"
                            value={formData.propertyName}
                            onChange={handleInputChange('propertyName')}
                            margin="normal"
                            required
                            size="small"
                            error={!!errors.propertyName}
                            helperText={errors.propertyName}
                        />

                        {/* 💰 Estimated Price */}
                        <Box
                            sx={{
                                textAlign: 'center',
                                p: 3,
                                backgroundColor:
                                    theme.palette.primary.light + '20',
                                borderRadius: 2,
                                mb: 3,
                            }}
                        >
                            <Typography
                                variant="h6"
                                sx={{
                                    color: theme.palette.text.secondary,
                                    mb: 1,
                                }}
                            >
                                Estimated Wardrobe Price
                            </Typography>
                            <Typography
                                variant="h3"
                                sx={{
                                    fontWeight: 'bold',
                                    color: theme.palette.primary.main,
                                }}
                            >
                                ₹{estimatedPrice.toLocaleString()}
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{
                                    color: theme.palette.text.secondary,
                                    mt: 1,
                                }}
                            >
                                *Final price may vary based on specific
                                requirements
                            </Typography>
                        </Box>

                        {/* Legal Text */}
                        <Typography
                            variant="body2"
                            sx={{
                                color: theme.palette.text.secondary,
                                mb: 2,
                                textAlign: 'center',
                            }}
                        >
                            By submitting this form, you agree to the{' '}
                            <Typography
                                component="span"
                                sx={{
                                    color: theme.palette.primary.main,
                                    textDecoration: 'underline',
                                    cursor: 'pointer',
                                }}
                            >
                                privacy policy
                            </Typography>{' '}
                            &{' '}
                            <Typography
                                component="span"
                                sx={{
                                    color: theme.palette.primary.main,
                                    textDecoration: 'underline',
                                    cursor: 'pointer',
                                }}
                            >
                                terms and conditions
                            </Typography>
                        </Typography>
                    </form>
                </CardContent>
            </Card>

            {/* Navigation Buttons */}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    mt: 4,
                    pt: 3,
                    borderTop: '1px solid',
                    borderColor: 'divider',
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
                    BACK
                </Button>

                <Button
                    variant="contained"
                    onClick={handleSubmit}
                    disabled={!isFormValid()}
                    sx={{
                        px: 4,
                        textTransform: 'none',
                        fontWeight: 600,
                    }}
                >
                    SUBMIT
                </Button>
            </Box>

            {/* ✅ Toast Notification */}
            <Snackbar
                open={toast.open}
                autoHideDuration={3000}
                onClose={() => setToast({ ...toast, open: false })}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert
                    onClose={() => setToast({ ...toast, open: false })}
                    severity={toast.severity}
                    sx={{ width: '100%' }}
                >
                    {toast.message}
                </Alert>
            </Snackbar>
        </Box>
    );
}
