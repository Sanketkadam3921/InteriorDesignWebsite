import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Card,
  CardContent,
  Alert,
  Snackbar,
  useTheme,
  Divider,
  styled
} from '@mui/material';
import {
  Send as SendIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
  LocationOn as LocationIcon
} from '@mui/icons-material';
import themeNeutral from '../../../themeNeutral';
import contactBg from '../../../assets/contact.jpg';

// 🔴 Styled TextField — makes default required asterisk red
const RedAsteriskTextField = styled(TextField)({
  "& .MuiFormLabel-asterisk": {
    color: "red",
  },
});

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
    const phoneRegex = /^[6-9]\d{9}$/;
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
    let processedValue = name === 'phone' ? value.replace(/\D/g, '') : value;
    setFormData({ ...formData, [name]: processedValue });
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
    const hasErrors = Object.values(newErrors).some((error) => error);
    if (hasErrors) return;
    setIsSubmitting(true);

    try {
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
    } catch {
      setShowError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  // ---------------- Contact Info ----------------
  const contactInfo = [
    { icon: <PhoneIcon />, title: 'Phone', details: '+91 8669868947' },
    { icon: <EmailIcon />, title: 'Email', details: 'care@kalakruti.com' },
    { icon: <LocationIcon />, title: 'Address', details: 'Pune, Maharashtra' }
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', lg: 'row' },
        minHeight: '100vh',
        background: `linear-gradient(135deg, ${theme.palette.background.default}, #f9f9f9)`
      }}
    >
      {/* Left Section */}
      <Box
        sx={{
          flex: { xs: 'none', lg: '0 0 55%' },
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          px: { xs: 2, sm: 4, md: 8 },
          py: { xs: 4, md: 6 }
        }}
      >
        <Card
          sx={{
            width: '100%',
            maxWidth: 600,
            p: { xs: 3, md: 5 },
            borderRadius: 4,
            boxShadow: '0 8px 24px rgba(0,0,0,0.08)'
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 700,
              mb: 1,
              color: theme.palette.primary.main,
              textAlign: 'center'
            }}
          >
            Get in Touch
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ color: 'text.secondary', textAlign: 'center', mb: 4 }}
          >
            We’d love to discuss your design ideas and help you bring them to life.
          </Typography>

          <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <RedAsteriskTextField
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={!!errors.name}
              helperText={errors.name}
              fullWidth
              required
            />
            <RedAsteriskTextField
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email}
              fullWidth
              required
            />
            <RedAsteriskTextField
              label="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              error={!!errors.phone}
              helperText={errors.phone}
              fullWidth
              inputProps={{ maxLength: 10 }}
              required
            />
            <TextField
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              fullWidth
            />
            <RedAsteriskTextField
              label="Your Message"
              name="message"
              multiline
              rows={4}
              value={formData.message}
              onChange={handleChange}
              error={!!errors.message}
              helperText={errors.message}
              fullWidth
              required
            />
            <Button
              type="submit"
              variant="contained"
              disabled={isSubmitting}
              endIcon={<SendIcon />}
              sx={{
                py: 1.5,
                borderRadius: 2,
                textTransform: 'none',
                fontWeight: 600,
                background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                '&:hover': { opacity: 0.9 }
              }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </Box>
        </Card>
      </Box>

      {/* Right Section */}
     {/* Right Section */}
<Box
  sx={{
    flex: { xs: 'none', lg: '0 0 45%' },
    position: 'relative',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    px: { xs: 2, sm: 4, md: 6 },
    py: { xs: 6, md: 8 },
    overflow: 'hidden',
 backgroundImage: ` url(${contactBg})`,
 // <-- put your image path here
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
>
  <Box
    sx={{
      maxWidth: 420,
      textAlign: { xs: 'center', lg: 'left' },
      zIndex: 2,
    }}
  >
    <Typography
      variant="h3"
      sx={{
        fontWeight: 700,
        mb: 3,
        color: '#fff',
        textShadow: '0 2px 6px rgba(0,0,0,0.3)',
      }}
    >
      Kalakruti Studio
    </Typography>

    <Typography
      sx={{
        mb: 4,
        lineHeight: 1.8,
        opacity: 0.9,
        color: '#f2f2f2',
        textShadow: '0 1px 4px rgba(0,0,0,0.3)',
      }}
    >
      A space where design meets creativity. Reach out for your next renovation,
      interior project, or to discuss your dream home design.
    </Typography>

    <Divider sx={{ mb: 3, bgcolor: 'rgba(255,255,255,0.3)' }} />

    {contactInfo.map((info, i) => (
      <Box key={i} sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Box
          sx={{
            mr: 2,
            width: 45,
            height: 45,
            borderRadius: '50%',
            backgroundColor: 'rgba(255,255,255,0.25)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backdropFilter: 'blur(4px)',
          }}
        >
          {React.cloneElement(info.icon, { sx: { color: '#fff', fontSize: 22 } })}
        </Box>
        <Box>
          <Typography sx={{ fontWeight: 600, color: '#fff' }}>{info.title}</Typography>
          <Typography sx={{ opacity: 0.85, color: '#e0e0e0' }}>{info.details}</Typography>
        </Box>
      </Box>
    ))}
  </Box>

  {/* Optional subtle overlay for depth */}
  <Box
    sx={{
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to right, rgba(0,0,0,0.4), rgba(0,0,0,0.6))',
      zIndex: 1,
    }}
  />
</Box>


      {/* Snackbars */}
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
    </Box>
  );
}
