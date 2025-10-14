import React, { useState } from 'react';
import {
    Box,
    Container,
    Typography,
    TextField,
    Button,
    Card,
    CardContent,
    Alert,
    Snackbar,
    useTheme
} from '@mui/material';
import {
    Send as SendIcon,
    Phone as PhoneIcon,
    Email as EmailIcon,
    LocationOn as LocationIcon
} from '@mui/icons-material';
import themeNeutral from '../../../themeNeutral';

export default function ContactForm() {
    const theme = useTheme();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        message: ''
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [showError, setShowError] = useState(false);

    // ---------------- Validation Functions ----------------
    const validateName = (name) => {
        if (!name.trim()) return 'Full name is required';
        if (!/^[a-zA-Z\s]+$/.test(name.trim())) return 'Only letters and spaces are allowed';
        if (name.trim().length < 2) return 'Full name must be at least 2 characters';
        return '';
    };

    const validateEmail = (email) => {
        if (!email.trim()) return 'Email is required';
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email.trim())) return 'Please enter a valid email address';
        return '';
    };

    const validatePhone = (phone) => {
        if (!phone.trim()) return 'Phone number is required';
        const phoneRegex = /^[6-9]\d{9}$/; // Indian format: starts with 6-9, 10 digits total
        if (!phoneRegex.test(phone)) return 'Enter a valid 10-digit phone number';
        return '';
    };

    const validateMessage = (message) => {
        if (!message.trim()) return 'Message is required';
        if (message.trim().length < 10) return 'Message must be at least 10 characters';
        return '';
    };

    // ---------------- Handle Change ----------------
    const handleChange = (e) => {
        const { name, value } = e.target;
        let processedValue = value;

        if (name === 'phone') {
            processedValue = value.replace(/\D/g, ''); // allow only digits
        }

        setFormData({ ...formData, [name]: processedValue });

        // Real-time field validation
        let error = '';
        if (name === 'name') error = validateName(processedValue);
        if (name === 'email') error = validateEmail(processedValue);
        if (name === 'phone') error = validatePhone(processedValue);
        if (name === 'message') error = validateMessage(processedValue);

        setErrors({ ...errors, [name]: error });
    };

    // ---------------- Handle Submit ----------------
    const handleSubmit = async (e) => {
        e.preventDefault();

        const newErrors = {
            name: validateName(formData.name),
            email: validateEmail(formData.email),
            phone: validatePhone(formData.phone),
            message: validateMessage(formData.message)
        };

        setErrors(newErrors);

        // If any error exists, stop submission
        const hasErrors = Object.values(newErrors).some((error) => error);
        if (hasErrors) return;

        setIsSubmitting(true);

        try {
            // simulate API call
            await new Promise((resolve) => setTimeout(resolve, 1000));

            setShowSuccess(true);
            setFormData({
                name: '',
                email: '',
                phone: '',
                address: '',
                message: ''
            });
            setErrors({});
        } catch (err) {
            setShowError(true);
        } finally {
            setIsSubmitting(false);
        }
    };

    // ---------------- Contact Info Section ----------------
    const contactInfo = [
        {
            icon: <PhoneIcon sx={{ fontSize: 24, color: theme.palette.primary.contrastText }} />,
            title: 'Phone',
            details: '+91 98765 43210'
        },
        {
            icon: <EmailIcon sx={{ fontSize: 24, color: theme.palette.primary.contrastText }} />,
            title: 'Email',
            details: 'info@kalakruti.com'
        },
        {
            icon: <LocationIcon sx={{ fontSize: 24, color: theme.palette.primary.contrastText }} />,
            title: 'Address',
            details: '123 Design Street, Creative City, CC 12345'
        }
    ];

    return (
        <>
            <Box
                sx={{
                    minHeight: 'auto',
                    display: 'flex',
                    flexDirection: { xs: 'column', lg: 'row' }
                }}
            >
                {/* Left Section - Contact Form */}
                <Box
                    sx={{
                        flex: { xs: 'none', lg: '0 0 50%' },
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        p: { xs: 3, md: 4 },
                        backgroundColor: theme.palette.background.default
                    }}
                >
                    <Card
                        sx={{
                            p: { xs: 3, md: 4 },
                            maxWidth: 600,
                            width: '100%',
                            borderRadius: 3,
                            boxShadow: theme.shadows[4],
                            backgroundColor: theme.palette.background.paper
                        }}
                    >
                        <Typography variant="h5" sx={{ mb: 1, fontWeight: 'bold' }}>
                            We'd love to hear from you!
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            sx={{ mb: 3, color: theme.palette.text.secondary }}
                        >
                            Let's get in touch
                        </Typography>

                        <Box
                            component="form"
                            onSubmit={handleSubmit}
                            sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
                        >
                            {/* Name & Email */}
                            <Box
                                sx={{
                                    display: 'flex',
                                    gap: 2,
                                    flexDirection: { xs: 'column', sm: 'row' }
                                }}
                            >
                                <TextField
                                    fullWidth
                                    label="Full Name*"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    error={!!errors.name}
                                    helperText={errors.name}
                                />
                                <TextField
                                    fullWidth
                                    label="Email*"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    error={!!errors.email}
                                    helperText={errors.email}
                                />
                            </Box>

                            {/* Phone & Address */}
                            <Box
                                sx={{
                                    display: 'flex',
                                    gap: 2,
                                    flexDirection: { xs: 'column', sm: 'row' }
                                }}
                            >
                                <TextField
                                    fullWidth
                                    label="Phone Number*"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    error={!!errors.phone}
                                    helperText={errors.phone}
                                    inputProps={{
                                        maxLength: 10,
                                        inputMode: 'numeric',
                                        pattern: '[0-9]*'
                                    }}
                                />
                                <TextField
                                    fullWidth
                                    label="Address"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                />
                            </Box>

                            {/* Message */}
                            <TextField
                                fullWidth
                                label="Your Message*"
                                name="message"
                                multiline
                                rows={3}
                                value={formData.message}
                                onChange={handleChange}
                                error={!!errors.message}
                                helperText={errors.message}
                            />

                            {/* Submit */}
                            <Button
                                type="submit"
                                variant="contained"
                                size="large"
                                disabled={isSubmitting}
                                sx={{
                                    borderRadius: 2,
                                    textTransform: 'none',
                                    fontWeight: 600,
                                    py: 1.5
                                }}
                                endIcon={<SendIcon />}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </Button>
                        </Box>
                    </Card>
                </Box>

                {/* Right Section - Contact Info */}
                <Box
                    sx={{
                        flex: { xs: 'none', lg: '0 0 50%' },
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        p: { xs: 3, md: 4 },
                        background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`
                    }}
                >
                    <Card
                        sx={{
                            p: { xs: 3, md: 4 },
                            borderRadius: 3,
                            maxWidth: 600,
                            width: '100%',
                            boxShadow: theme.shadows[6],
                            background: themeNeutral.palette.secondary.main,
                            color: theme.palette.primary.contrastText
                        }}
                    >
                        <CardContent>
                            <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3 }}>
                                Contact Us
                            </Typography>
                            {contactInfo.map((info, i) => (
                                <Box
                                    key={i}
                                    sx={{ display: 'flex', alignItems: 'center', mb: 2 }}
                                >
                                    <Box
                                        sx={{
                                            mr: 2,
                                            width: 40,
                                            height: 40,
                                            borderRadius: '50%',
                                            backgroundColor: 'rgba(255,255,255,0.2)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        {info.icon}
                                    </Box>
                                    <Typography>{info.details}</Typography>
                                </Box>
                            ))}
                        </CardContent>
                    </Card>
                </Box>
            </Box>

            {/* Snackbar Notifications */}
            <Snackbar
                open={showSuccess}
                autoHideDuration={5000}
                onClose={() => setShowSuccess(false)}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <Alert severity="success" onClose={() => setShowSuccess(false)}>
                    Message sent successfully! We'll get back to you soon.
                </Alert>
            </Snackbar>

            <Snackbar
                open={showError}
                autoHideDuration={5000}
                onClose={() => setShowError(false)}
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            >
                <Alert severity="error" onClose={() => setShowError(false)}>
                    Failed to send message. Please try again.
                </Alert>
            </Snackbar>
        </>
    );
}
