import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  useTheme,
  useMediaQuery,
  IconButton,
  Paper,
  styled,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Breadcrumbs,
  Stack,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  FormControlLabel,
  Checkbox
} from '@mui/material';
import { Link } from 'react-router-dom';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ChatIcon from '@mui/icons-material/Chat';
import HomeIcon from '@mui/icons-material/Home';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ConstructionIcon from '@mui/icons-material/Construction';
import RoofingIcon from '@mui/icons-material/Roofing';
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';
import PlumbingIcon from '@mui/icons-material/Plumbing';
import PaletteIcon from '@mui/icons-material/Palette';
import HandymanIcon from '@mui/icons-material/Handyman';
import CloseIcon from '@mui/icons-material/Close';
import themeNeutral from '../../../../themeNeutral';

// Styled components for custom styling
const HeroSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '70vh',
  minHeight: '400px',
  backgroundImage: `url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')`,
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
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    zIndex: 1,
  },
}));

const ChatWidget = styled(Box)(({ theme }) => ({
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  zIndex: 1000,
  display: 'flex',
  alignItems: 'flex-end',
  gap: '10px',
}));

const ChatBubble = styled(Paper)(({ theme }) => ({
  backgroundColor: 'white',
  padding: '16px',
  borderRadius: '20px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
  maxWidth: '280px',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '10px',
    right: '-8px',
    width: 0,
    height: 0,
    borderLeft: '8px solid white',
    borderTop: '8px solid transparent',
    borderBottom: '8px solid transparent',
  },
}));

const ChatIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: themeNeutral.palette.primary.main,
  color: 'white',
  width: '60px',
  height: '60px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
  '&:hover': {
    backgroundColor: themeNeutral.palette.primary.dark,
  },
}));

const SliderContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  borderRadius: '12px',
}));

const SliderTrack = styled(Box)(({ theme }) => ({
  display: 'flex',
  transition: 'transform 0.3s ease-in-out',
  gap: '20px',
}));

const SliderCard = styled(Card)(({ theme }) => ({
  minWidth: '350px',
  height: '380px',
  borderRadius: '12px',
  overflow: 'hidden',
  position: 'relative',
  cursor: 'pointer',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  [theme.breakpoints.down('sm')]: {
    minWidth: '280px',
    height: '280px',
  },
  [theme.breakpoints.down('xs')]: {
    minWidth: '260px',
    height: '260px',
  },
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15)',
  },
}));

const PriceBadge = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '16px',
  left: '16px',
  backgroundColor: themeNeutral.palette.primary.main, // Grey color to match other buttons
  color: 'white',
  padding: '8px 12px',
  borderRadius: '20px',
  fontSize: '0.85rem',
  fontWeight: '600',
  zIndex: 2,
}));

const RoomTypeOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  background: 'linear-gradient(transparent, rgba(0, 0, 0, 0.7))',
  padding: '20px 16px 16px',
  color: 'white',
  fontSize: '1.2rem',
  fontWeight: 'bold',
  zIndex: 2,
}));

const SliderNavigation = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  backgroundColor: 'white',
  color: themeNeutral.palette.text.primary,
  width: '48px',
  height: '48px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
  zIndex: 3,
  '&:hover': {
    backgroundColor: '#f5f5f5',
    transform: 'translateY(-50%) scale(1.05)',
  },
}));

const SliderNavigationLeft = styled(SliderNavigation)(({ theme }) => ({
  left: '10px',
}));

const SliderNavigationRight = styled(SliderNavigation)(({ theme }) => ({
  right: '10px',
}));

const ComparisonTable = styled(Box)(({ theme }) => ({
  backgroundColor: '#f8f9fa',
  borderRadius: '12px',
  padding: { xs: '12px', md: '16px' },
  border: '1px solid #d1d5db',
  overflowX: 'auto',
  width: '100%',
  '&::-webkit-scrollbar': {
    height: '8px',
  },
  '&::-webkit-scrollbar-track': {
    backgroundColor: '#f1f1f1',
    borderRadius: '4px',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: themeNeutral.palette.primary.main,
    borderRadius: '4px',
    '&:hover': {
      backgroundColor: themeNeutral.palette.primary.dark,
    },
  },
}));

const TableHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  marginBottom: '12px',
  minWidth: '600px',
  [theme.breakpoints.down('sm')]: {
    minWidth: '500px',
  },
}));

const HeaderCell = styled(Box)(({ theme }) => ({
  flex: 1,
  padding: '12px',
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: '1.1rem',
  borderRadius: '8px',
  margin: '0 6px',
  minWidth: '180px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.9rem',
    padding: '8px 6px',
    minWidth: '140px',
    margin: '0 4px',
  },
}));

const KalaKrutiHeader = styled(HeaderCell)(({ theme }) => ({
  backgroundColor: '#f8f9fa',
  color: themeNeutral.palette.text.primary,
  border: '1px solid #d1d5db',
}));

const TypicalHeader = styled(HeaderCell)(({ theme }) => ({
  backgroundColor: '#f8f9fa',
  color: themeNeutral.palette.text.primary,
  border: '1px solid #d1d5db',
}));

const ComparisonRow = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  marginBottom: '12px',
  padding: '12px 0',
  borderBottom: '1px dashed #d1d5db',
  minWidth: '600px',
  [theme.breakpoints.down('sm')]: {
    minWidth: '500px',
    padding: '8px 0',
  },
  '&:last-child': {
    borderBottom: 'none',
  },
}));

const CategoryCell = styled(Box)(({ theme }) => ({
  flex: '0 0 180px',
  fontWeight: 'bold',
  fontSize: '1rem',
  color: themeNeutral.palette.text.primary,
  textAlign: 'left',
  paddingLeft: '16px',
  paddingRight: '20px',
  marginRight: '12px',
  minWidth: '180px',
  [theme.breakpoints.down('sm')]: {
    flex: '0 0 140px',
    minWidth: '140px',
    fontSize: '0.85rem',
    paddingLeft: '12px',
    paddingRight: '12px',
    marginRight: '8px',
  },
}));

const ContentCell = styled(Box)(({ theme }) => ({
  flex: 1,
  padding: '0 6px',
  minWidth: '180px',
  [theme.breakpoints.down('sm')]: {
    minWidth: '140px',
    padding: '0 3px',
  },
}));

const BulletPoint = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  marginBottom: '6px',
  '&:last-child': {
    marginBottom: 0,
  },
}));

const RedBullet = styled(Box)(({ theme }) => ({
  width: '8px',
  height: '8px',
  borderRadius: '50%',
  backgroundColor: themeNeutral.palette.primary.main,
  marginRight: '12px',
  marginTop: '6px',
  flexShrink: 0,
}));

const GrayBullet = styled(Box)(({ theme }) => ({
  width: '8px',
  height: '8px',
  borderRadius: '50%',
  backgroundColor: themeNeutral.palette.text.primary,
  marginRight: '12px',
  marginTop: '6px',
  flexShrink: 0,
}));

const BulletText = styled(Typography)(({ theme }) => ({
  fontSize: '0.95rem',
  color: themeNeutral.palette.text.primary,
  lineHeight: 1.5,
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.85rem',
    lineHeight: 1.4,
  },
}));

const ServiceCard = styled(Card)(({ theme }) => ({
  backgroundColor: 'white',
  borderRadius: '12px',
  padding: '24px',
  textAlign: 'center',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  border: '1px solid #d1d5db',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
  },
}));

const ServiceIconContainer = styled(Box)(({ theme }) => ({
  width: '150px',
  height: '120px',
  borderRadius: '50%',
  backgroundColor: '#f8f9fa',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto 16px',
  position: 'relative',
  border: '1px solid #d1d5db',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '-8px',
    left: '-8px',
    right: '-8px',
    bottom: '-8px',
    borderRadius: '50%',
    backgroundColor: '#f0f0f0',
    zIndex: -1,
  },
}));

const ServiceIcon = styled(Box)(({ theme }) => ({
  fontSize: '3.5rem',
  color: themeNeutral.palette.primary.main,
}));

const ServiceTitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.1rem',
  fontWeight: '600',
  color: themeNeutral.palette.text.primary,
  textAlign: 'center',
}));

const CustomisedSection = styled(Box)(({ theme }) => ({
  width: '100%',
  backgroundColor: '#f8f8f8',
  padding: '40px 0',
  display: 'flex',
  alignItems: 'center',
  minHeight: '400px',
}));

const CustomisedContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '60px',
  width: '100%',
  maxWidth: '100%',
  margin: '0',
  padding: '0 40px',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    gap: '30px',
    textAlign: 'center',
    padding: '0 20px',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '0 20px',
    gap: '20px',
  },
}));

const CustomisedText = styled(Box)(({ theme }) => ({
  flex: 1,
  maxWidth: 'none',
}));

const CustomisedIllustration = styled(Box)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '400px',
  position: 'relative',
  [theme.breakpoints.down('md')]: {
    minHeight: '300px',
    marginTop: '20px',
    display: 'flex', // Ensure it's visible on mobile
    width: '100%',
  },
}));

const IdeasSection = styled(Box)(({ theme }) => ({
  width: '100%',
  padding: '60px 0',
  backgroundColor: 'white',
}));

const IdeasContent = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '100%',
  margin: '0',
  padding: '0 20px',
  [theme.breakpoints.down('sm')]: {
    padding: '0 20px',
  },
  [theme.breakpoints.down('xs')]: {
    padding: '0 20px',
  },
}));

const IdeasHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '40px',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    gap: '20px',
    textAlign: 'center',
  },
}));

const IdeasText = styled(Box)(({ theme }) => ({
  flex: 1,
}));

const GalleryContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  borderRadius: '12px',
}));

const GalleryTrack = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: '20px',
  transition: 'transform 0.3s ease-in-out',
}));

const GalleryCard = styled(Card)(({ theme }) => ({
  minWidth: '350px',
  height: '280px',
  borderRadius: '12px',
  overflow: 'hidden',
  position: 'relative',
  cursor: 'pointer',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  [theme.breakpoints.down('sm')]: {
    minWidth: '280px',
    height: '220px',
  },
  [theme.breakpoints.down('xs')]: {
    minWidth: '260px',
    height: '200px',
  },
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15)',
  },
}));

const GalleryNavigation = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  backgroundColor: 'white',
  color: themeNeutral.palette.text.primary,
  width: '48px',
  height: '48px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
  zIndex: 3,
  '&:hover': {
    backgroundColor: '#f5f5f5',
    transform: 'translateY(-50%) scale(1.05)',
  },
}));

const GalleryNavigationLeft = styled(GalleryNavigation)(({ theme }) => ({
  left: '10px',
}));

const GalleryNavigationRight = styled(GalleryNavigation)(({ theme }) => ({
  right: '10px',
}));

// Gallery data
const galleryData = [
  {
    id: 1,
    title: 'Modern Kitchen',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Dark aesthetic with marble countertops and gold accents'
  },
  {
    id: 2,
    title: 'Contemporary Bedroom',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Geometric accent wall with modern furniture'
  },
  {
    id: 3,
    title: 'Bright Living Room',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Vibrant abstract art with royal blue sofa'
  }
];

// Service data
const serviceData = [
  {
    id: 1,
    title: 'Civil work',
    icon: ConstructionIcon,
  },
  {
    id: 2,
    title: 'False ceiling',
    icon: RoofingIcon,
  },
  {
    id: 3,
    title: 'Electrical',
    icon: ElectricalServicesIcon,
  },
  {
    id: 4,
    title: 'Plumbing',
    icon: PlumbingIcon,
  },
  {
    id: 5,
    title: 'Painting',
    icon: PaletteIcon,
  },
  {
    id: 6,
    title: 'Carpentry',
    icon: HandymanIcon,
  }
];

// Combined comparison data
const comparisonData = [
  {
    category: 'PRICE',
    kalakruti: [
      'No hidden costs',
      'Easy EMIs'
    ],
    typical: [
      '45% hike between first quote & final cost'
    ]
  },
  {
    category: 'CONVENIENCE',
    kalakruti: [
      'One-stop shop for all interior needs'
    ],
    typical: [
      'Approx 27 market trips to find everything'
    ]
  },
  {
    category: 'DESIGN',
    kalakruti: [
      'Personalised designs with 3D visuals'
    ],
    typical: [
      'Cookie-cutter designs with 2D visuals'
    ]
  },
  {
    category: 'TIMELINES',
    kalakruti: [
      '45-day installation³',
      'Regular updates with project tracking'
    ],
    typical: [
      'Unreliable timelines',
      'No communication on updates/ delays'
    ]
  },
  {
    category: 'QUALITY',
    kalakruti: [
      'Branded materials',
      '146 quality checks'
    ],
    typical: [
      'Inferior materials used to cut costs',
      'No quality checks'
    ]
  },
  {
    category: 'WARRANTY',
    kalakruti: [
      'Flat 10 year warranty*',
      'India\'s first & only on-site service warranty'
    ],
    typical: [
      'No warranty offered for products or services'
    ]
  },
  {
    category: 'AFTER-SALES SUPPORT',
    kalakruti: [
      'Dedicated team for prompt response & support'
    ],
    typical: [
      'No after-sales support'
    ]
  }
];

// Slider data
const sliderData = [
  {
    id: 1,
    roomType: '2BHK',
    price: '3.57L*',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Perfect for small families with modern amenities'
  },
  {
    id: 2,
    roomType: '3BHK',
    price: '4.23L*',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Spacious living with premium finishes and smart design'
  },
  {
    id: 3,
    roomType: '4BHK',
    price: '4.81L*',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    description: 'Luxury living with premium materials and exclusive features'
  },
  {
    id: 4,
    roomType: '5BHK',
    price: '5.45L*',
    image: 'https://media.cgtrader.com/variants/6sCjurebTfXCMszgrDJUwCNb/78add9c2f02fbd73a43ffb3970be38683c5f15eff6ca849dc78c644f4ff9ce1b/Interior%20Living%20Room%20Scene%2016_%20preview01.webp',
    description: 'Ultimate luxury with premium finishes and exclusive amenities'
  }
];

export default function BookOnlineConsultation() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentGallerySlide, setCurrentGallerySlide] = useState(0);
  const [quoteDialogOpen, setQuoteDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    propertyName: '',
    whatsappUpdates: true
  });

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleNextSlide = () => {
    setCurrentSlide((prev) => {
      const nextSlide = prev + 1;
      if (nextSlide >= sliderData.length) {
        // When reaching the end, instantly reset to 0 without transition
        setTimeout(() => {
          setCurrentSlide(0);
        }, 0);
        return sliderData.length; // Show duplicate first card
      }
      return nextSlide;
    });
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => {
      if (prev === 0) {
        // When at first slide, go to duplicate last card
        return sliderData.length - 1;
      }
      return prev - 1;
    });
  };

  const handleNextGallerySlide = () => {
    setCurrentGallerySlide((prev) => {
      const nextSlide = prev + 1;
      if (nextSlide >= galleryData.length) {
        // When reaching the end, instantly reset to 0 without transition
        setTimeout(() => {
          setCurrentGallerySlide(0);
        }, 0);
        return galleryData.length; // Show duplicate first card
      }
      return nextSlide;
    });
  };

  const handlePrevGallerySlide = () => {
    setCurrentGallerySlide((prev) => {
      if (prev === 0) {
        // When at first slide, go to duplicate last card
        return galleryData.length - 1;
      }
      return prev - 1;
    });
  };

  const handleOpenQuoteDialog = () => {
    setQuoteDialogOpen(true);
  };

  const handleCloseQuoteDialog = () => {
    setQuoteDialogOpen(false);
  };

  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // You can add API call or other logic here
    handleCloseQuoteDialog();
  };

  return (
    <Box sx={{
      overflowX: 'hidden',
      width: '100%',
      minHeight: '100vh',
      position: 'relative'
    }}>
      {/* Hero Section */}
      <HeroSection>
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
              fontSize: { xs: '1.8rem', md: '2.5rem', lg: '3rem' },
              fontWeight: 'bold',
              lineHeight: 1.2,
              mb: 4,
              color: 'white',
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            }}
          >
            Let's get started with your dream interiors
          </Typography>

        </Box>
      </HeroSection>

      {/* Main Content Section */}
      <Container maxWidth="lg" sx={{
        py: { xs: 4, md: 6 },
        px: { xs: 2, sm: 3, md: 4 },
        mx: { xs: 'auto', md: 'auto' },
        width: { xs: '100%', sm: '90%', md: '85%', lg: '80%' }
      }}>
        {/* Main Content */}
        <Box sx={{ maxWidth: '100%' }}>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontSize: { xs: '1.8rem', md: '2.5rem' },
              fontWeight: 'bold',
              color: themeNeutral.palette.text.primary,
              lineHeight: 1.2,
              mb: 3,
            }}
          >
            Homes for every budget
          </Typography>

          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            gap: { xs: 2, md: 3 },
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between'
          }}>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '1rem', md: '1.1rem' },
                color: themeNeutral.palette.text.secondary,
                lineHeight: 1.6,
                flex: 1,
                maxWidth: { xs: '100%', md: '500px' },
              }}
            >
              Our interior designers work with you keeping in mind your requirements and budget.
            </Typography>

            <Button
              variant="contained"
              onClick={handleOpenQuoteDialog}
              sx={{
                backgroundColor: themeNeutral.palette.primary.main,
                color: 'white',
                fontSize: '1rem',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                px: 4,
                py: 1.5,
                borderRadius: '25px',
                boxShadow: '0 4px 12px rgba(80, 91, 95, 0.3)',
                flexShrink: 0,
                '&:hover': {
                  backgroundColor: themeNeutral.palette.primary.dark,
                  boxShadow: '0 6px 16px rgba(80, 91, 95, 0.4)',
                },
                '&:active': {
                  transform: 'translateY(1px)',
                },
              }}
            >
              GET FREE QUOTE
            </Button>
          </Box>
        </Box>
      </Container>



      {/* Home Configuration Slider Section */}
      <Container maxWidth="lg" sx={{
        py: { xs: 2, md: 3 },
        px: { xs: 2, sm: 3, md: 4 },
        mx: { xs: 'auto', md: 'auto' },
        width: { xs: '100%', sm: '90%', md: '85%', lg: '80%' }
      }}>

        <SliderContainer>
          <SliderTrack
            sx={{
              transform: `translateX(-${(currentSlide + 2) * (isMobile ? 300 : 370)}px)`,
              transition: currentSlide === sliderData.length ? 'none' : 'transform 0.3s ease-in-out',
              [theme.breakpoints.down('xs')]: {
                transform: `translateX(-${(currentSlide + 2) * 280}px)`,
              },
            }}
          >
            {/* Multiple duplicate cards at the beginning to fill viewport */}
            <SliderCard>
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  backgroundImage: `url(${sliderData[sliderData.length - 1].image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              >
                <PriceBadge>
                  Starting at {sliderData[sliderData.length - 1].price}
                </PriceBadge>

                <RoomTypeOverlay>
                  {sliderData[sliderData.length - 1].roomType}
                </RoomTypeOverlay>
              </Box>
            </SliderCard>

            <SliderCard>
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  backgroundImage: `url(${sliderData[sliderData.length - 2].image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              >
                <PriceBadge>
                  Starting at {sliderData[sliderData.length - 2].price}
                </PriceBadge>

                <RoomTypeOverlay>
                  {sliderData[sliderData.length - 2].roomType}
                </RoomTypeOverlay>
              </Box>
            </SliderCard>

            {sliderData.map((item) => (
              <SliderCard key={item.id}>
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${item.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }}
                >
                  <PriceBadge>
                    Starting at {item.price}
                  </PriceBadge>

                  <RoomTypeOverlay>
                    {item.roomType}
                  </RoomTypeOverlay>
                </Box>
              </SliderCard>
            ))}

            {/* Multiple duplicate cards at the end to fill viewport */}
            <SliderCard>
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  backgroundImage: `url(${sliderData[0].image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              >
                <PriceBadge>
                  Starting at {sliderData[0].price}
                </PriceBadge>

                <RoomTypeOverlay>
                  {sliderData[0].roomType}
                </RoomTypeOverlay>
              </Box>
            </SliderCard>

            <SliderCard>
              <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  backgroundImage: `url(${sliderData[1].image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                }}
              >
                <PriceBadge>
                  Starting at {sliderData[1].price}
                </PriceBadge>

                <RoomTypeOverlay>
                  {sliderData[1].roomType}
                </RoomTypeOverlay>
              </Box>
            </SliderCard>
          </SliderTrack>

          <SliderNavigationLeft onClick={handlePrevSlide}>
            <ArrowBackIosIcon />
          </SliderNavigationLeft>

          <SliderNavigationRight onClick={handleNextSlide}>
            <ArrowForwardIosIcon />
          </SliderNavigationRight>
        </SliderContainer>

        {/* Disclaimer Text */}
        <Box sx={{ textAlign: 'left', mt: 3 }}>
          <Typography
            variant="body2"
            sx={{
              fontSize: '0.9rem',
              color: themeNeutral.palette.text.primary,

            }}
          >
            *The prices include only modular interiors for new homes.
          </Typography>
        </Box>
      </Container>


      {/* The Livspace Edge Comparison Section */}
      <Container maxWidth="lg" sx={{
        py: { xs: 4, md: 6 },
        backgroundColor: '#f8f9fa',
        px: { xs: 2, sm: 3, md: 4 },
        mx: { xs: 'auto', md: 'auto' },
        width: { xs: '100%', sm: '90%', md: '85%', lg: '80%' }
      }}>
        <Box sx={{ mb: 4, textAlign: 'center' }}>
          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontSize: { xs: '1.8rem', md: '2.5rem' },
              fontWeight: 'bold',
              color: themeNeutral.palette.text.primary,
              lineHeight: 1.3,
              mb: 2,
            }}
          >
            The KalaKruti Edge
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '1rem', md: '1.1rem' },
              color: themeNeutral.palette.text.secondary,
              lineHeight: 1.7,
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            Your dream home interiors should be a happy experience, not a stressful one. From design to execution, we'll handle it all for you.
          </Typography>
        </Box>

        {/* Combined Comparison Table */}
        <ComparisonTable sx={{ mb: 4 }}>
          <TableHeader>
            <Box sx={{ flex: '0 0 180px' }}></Box>
            <KalaKrutiHeader>KalaKruti</KalaKrutiHeader>
            <TypicalHeader>Typical experience</TypicalHeader>
          </TableHeader>

          {comparisonData.map((row, index) => (
            <ComparisonRow key={index}>
              <CategoryCell>{row.category}</CategoryCell>
              <ContentCell>
                {row.kalakruti.map((item, itemIndex) => (
                  <BulletPoint key={itemIndex}>
                    <RedBullet />
                    <BulletText>{item}</BulletText>
                  </BulletPoint>
                ))}
              </ContentCell>
              <ContentCell>
                {row.typical.map((item, itemIndex) => (
                  <BulletPoint key={itemIndex}>
                    <GrayBullet />
                    <BulletText>{item}</BulletText>
                  </BulletPoint>
                ))}
              </ContentCell>
            </ComparisonRow>
          ))}
        </ComparisonTable>

        {/* CTA Button */}
        <Box sx={{ textAlign: 'center' }}>
          <Button
            variant="contained"
            onClick={handleOpenQuoteDialog}
            sx={{
              backgroundColor: themeNeutral.palette.primary.main,
              color: 'white',
              fontSize: '1rem',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              px: 4,
              py: 1.5,
              borderRadius: '25px',
              boxShadow: `0 4px 12px ${themeNeutral.palette.primary.main}30`,
              '&:hover': {
                backgroundColor: themeNeutral.palette.primary.dark,
                boxShadow: `0 6px 16px ${themeNeutral.palette.primary.main}40`,
              },
              '&:active': {
                transform: 'translateY(1px)',
              },
            }}
          >
            GET FREE CONSULTATION
          </Button>
        </Box>
      </Container>

      {/* Services Section */}
      <Container maxWidth="lg" sx={{
        py: { xs: 4, md: 6 },
        px: { xs: 2, sm: 3, md: 4 },
        mx: { xs: 'auto', md: 'auto' },
        width: { xs: '100%', sm: '90%', md: '85%', lg: '80%' }
      }}>
        {/* Section Title with Button */}
        <Box sx={{ maxWidth: '100%', mb: 4 }}>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            gap: { xs: 2, md: 3 },
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between'
          }}>
            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontSize: { xs: '1.8rem', md: '2.5rem' },
                fontWeight: 'bold',
                color: themeNeutral.palette.text.primary,
                lineHeight: 1.3,
                flex: 1,
                maxWidth: { xs: '100%', md: '500px' },
              }}
            >
              We offer unparalleled services
            </Typography>

            <Box sx={{ textAlign: 'center' }}>
              <Button
                variant="contained"
                onClick={handleOpenQuoteDialog}
                sx={{
                  backgroundColor: themeNeutral.palette.primary.main,
                  color: 'white',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  px: 4,
                  py: 1.5,
                  borderRadius: '25px',
                  boxShadow: `0 4px 12px ${themeNeutral.palette.primary.main}30`,
                  '&:hover': {
                    backgroundColor: themeNeutral.palette.primary.dark,
                    boxShadow: `0 6px 16px ${themeNeutral.palette.primary.main}40`,
                  },
                  '&:active': {
                    transform: 'translateY(1px)',
                  },
                }}
              >
                GET FREE Quote
              </Button>
            </Box>
          </Box>
        </Box>

        {/* Service Cards */}
        <Grid container spacing={{ xs: 2, md: 3 }} justifyContent="center">
          {serviceData.map((service) => {
            const IconComponent = service.icon;
            return (
              <Grid item xs={6} sm={4} md={4} lg={4} key={service.id}>
                <ServiceCard sx={{ height: '100%' }}>
                  <ServiceIconContainer>
                    <ServiceIcon>
                      <IconComponent />
                    </ServiceIcon>
                  </ServiceIconContainer>
                  <ServiceTitle>
                    {service.title}
                  </ServiceTitle>
                </ServiceCard>
              </Grid>
            );
          })}
        </Grid>
      </Container>

      {/* Testimonials Section */}
      <Container maxWidth="lg" sx={{
        py: { xs: 3, md: 4 },
        px: { xs: 2, sm: 3, md: 4 },
        mx: { xs: 'auto', md: 'auto' },
        width: { xs: '100%', sm: '90%', md: '85%', lg: '80%' }
      }}>
        <Box sx={{
          backgroundColor: '#f8f9fa',
          borderRadius: 2,
          p: 4,
          mb: 3
        }}>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontSize: { xs: '1.8rem', md: '2.5rem' },
                fontWeight: 'bold',
                color: '#505B5F',
                mb: 2
              }}
            >
              Here's what our homeowners have to say
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              gap: { xs: 2, md: 4 },
              justifyContent: 'center',
              alignItems: 'stretch',
              flexWrap: { xs: 'wrap', md: 'nowrap' },
              '& > *': {
                flex: { xs: '1 1 100%', sm: '1 1 300px', md: '1 1 300px' },
                maxWidth: { xs: '100%', sm: '400px', md: '400px' },
                minWidth: { xs: '280px', sm: '280px', md: '280px' }
              }
            }}
          >
            {/* Testimonial Card 1 */}
            <Card
              sx={{
                borderRadius: 2,
                overflow: 'hidden',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
                },
              }}
            >
              <Box sx={{ position: 'relative' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                  alt="Customer testimonial"
                  sx={{ objectFit: 'cover' }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 12,
                    right: 12,
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: 'white',
                      transform: 'scale(1.1)',
                    }
                  }}
                >
                  <Box
                    sx={{
                      width: 0,
                      height: 0,
                      borderLeft: `12px solid ${themeNeutral.palette.primary.main}`,
                      borderTop: '8px solid transparent',
                      borderBottom: '8px solid transparent',
                      marginLeft: '3px'
                    }}
                  />
                </Box>
              </Box>
              <CardContent sx={{ p: 3 }}>
                <Typography
                  variant="body1"
                  sx={{
                    color: '#666',
                    lineHeight: 1.6,
                    mb: 3,
                    fontStyle: 'italic',
                    fontSize: '0.95rem'
                  }}
                >
                  "Hats off to the entire team at KalaKruti. They finished the project ahead of time. They said 45 days but finished it much earlier."
                </Typography>
                <Box sx={{ borderTop: '1px solid #eee', pt: 2 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 'bold',
                      color: '#505B5F',
                      mb: 0.5,
                      fontSize: '1rem'
                    }}
                  >
                    Rohit Paul & Shveta
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: '#666', fontSize: '0.9rem' }}
                  >
                    Modular kitchen, Gurugram
                  </Typography>
                </Box>
              </CardContent>
            </Card>

            {/* Testimonial Card 2 */}
            <Card
              sx={{
                borderRadius: 2,
                overflow: 'hidden',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
                },
              }}
            >
              <Box sx={{ position: 'relative' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                  alt="Customer testimonial"
                  sx={{ objectFit: 'cover' }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 12,
                    right: 12,
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: 'white',
                      transform: 'scale(1.1)',
                    }
                  }}
                >
                  <Box
                    sx={{
                      width: 0,
                      height: 0,
                      borderLeft: `12px solid ${themeNeutral.palette.primary.main}`,
                      borderTop: '8px solid transparent',
                      borderBottom: '8px solid transparent',
                      marginLeft: '3px'
                    }}
                  />
                </Box>
              </Box>
              <CardContent sx={{ p: 3 }}>
                <Typography
                  variant="body1"
                  sx={{
                    color: '#666',
                    lineHeight: 1.6,
                    mb: 3,
                    fontStyle: 'italic',
                    fontSize: '0.95rem'
                  }}
                >
                  "Our experience with KalaKruti was nice - thanks to the project managers. They worked so much on this project, and finished it on time."
                </Typography>
                <Box sx={{ borderTop: '1px solid #eee', pt: 2 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 'bold',
                      color: '#505B5F',
                      mb: 0.5,
                      fontSize: '1rem'
                    }}
                  >
                    Swati & Gaurav
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: '#666', fontSize: '0.9rem' }}
                  >
                    2 BHK, Bangalore
                  </Typography>
                </Box>
              </CardContent>
            </Card>

            {/* Testimonial Card 3 */}
            <Card
              sx={{
                borderRadius: 2,
                overflow: 'hidden',
                boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
                },
              }}
            >
              <Box sx={{ position: 'relative' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                  alt="Customer testimonial"
                  sx={{ objectFit: 'cover' }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 12,
                    right: 12,
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: 'white',
                      transform: 'scale(1.1)',
                    }
                  }}
                >
                  <Box
                    sx={{
                      width: 0,
                      height: 0,
                      borderLeft: `12px solid ${themeNeutral.palette.primary.main}`,
                      borderTop: '8px solid transparent',
                      borderBottom: '8px solid transparent',
                      marginLeft: '3px'
                    }}
                  />
                </Box>
              </Box>
              <CardContent sx={{ p: 3 }}>
                <Typography
                  variant="body1"
                  sx={{
                    color: '#666',
                    lineHeight: 1.6,
                    mb: 3,
                    fontStyle: 'italic',
                    fontSize: '0.95rem'
                  }}
                >
                  "This house is a part of me. We reached out to KalaKruti and they designed the house that we really wanted."
                </Typography>
                <Box sx={{ borderTop: '1px solid #eee', pt: 2 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 'bold',
                      color: '#505B5F',
                      mb: 0.5,
                      fontSize: '1rem'
                    }}
                  >
                    Priya Sharma
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: '#666', fontSize: '0.9rem' }}
                  >
                    4 BHK interiors, Gurugram
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Container>

      {/* Customised Services Section */}
      <CustomisedSection>
        <CustomisedContent>
          <CustomisedText>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontSize: { xs: '1.8rem', md: '2.5rem' },
                fontWeight: 'bold',
                color: themeNeutral.palette.text.primary,
                lineHeight: 1.2,
                mb: 3,
              }}
            >
              Customised services
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: '1rem', md: '1.1rem' },
                color: themeNeutral.palette.text.secondary,
                lineHeight: 1.7,
                mb: 4,
              }}
            >
              Can't find what you're looking for? We'll design your home the way you like, keeping your needs and budget in mind.
            </Typography>

            <Button
              variant="contained"
              onClick={handleOpenQuoteDialog}
              sx={{
                backgroundColor: themeNeutral.palette.primary.main,
                color: 'white',
                fontSize: '1rem',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                px: 4,
                py: 1.5,
                borderRadius: '25px',
                boxShadow: `0 4px 12px ${themeNeutral.palette.primary.main}30`,
                '&:hover': {
                  backgroundColor: themeNeutral.palette.primary.dark,
                  boxShadow: `0 6px 16px ${themeNeutral.palette.primary.main}40`,
                },
                '&:active': {
                  transform: 'translateY(1px)',
                },
              }}
            >
              GET FREE CONSULTATION
            </Button>
          </CustomisedText>

          <CustomisedIllustration>
            <Box
              sx={{
                width: '100%',
                maxWidth: { xs: '100%', md: 'none' },
                height: { xs: '250px', md: '350px' },
                minHeight: { xs: '250px', md: '350px' },
                backgroundImage: `url('https://img.freepik.com/premium-vector/business-scene-with-three-people-meeting_81698-5022.jpg')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                borderRadius: '12px',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                position: 'relative',
                display: 'block',
                [theme.breakpoints.down('md')]: {
                  width: '100%',
                  maxWidth: '100%',
                  minWidth: '100%',
                },
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(0, 0, 0, 0.1)',
                  borderRadius: '12px',
                },
              }}
            />
          </CustomisedIllustration>
        </CustomisedContent>
      </CustomisedSection>

      {/* Ideas to Inspire Section */}
      <IdeasSection>
        <IdeasContent>
          <IdeasHeader>
            <IdeasText>
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontSize: { xs: '1.8rem', md: '2.5rem' },
                  fontWeight: 'bold',
                  color: themeNeutral.palette.text.primary,
                  lineHeight: 1.2,
                  mb: 2,
                }}
              >
                Ideas to inspire
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  color: themeNeutral.palette.text.secondary,
                  lineHeight: 1.7,
                }}
              >
                Beautiful and practical designs for every room, carefully-crafted for you
              </Typography>
            </IdeasText>

            <Button
              variant="contained"
              onClick={handleOpenQuoteDialog}
              sx={{
                backgroundColor: themeNeutral.palette.primary.main,
                color: 'white',
                fontSize: '1rem',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                px: 4,
                py: 1.5,
                borderRadius: '25px',
                boxShadow: `0 4px 12px ${themeNeutral.palette.primary.main}30`,
                flexShrink: 0,
                '&:hover': {
                  backgroundColor: themeNeutral.palette.primary.dark,
                  boxShadow: `0 6px 16px ${themeNeutral.palette.primary.main}40`,
                },
                '&:active': {
                  transform: 'translateY(1px)',
                },
              }}
            >
              GET FREE QUOTE
            </Button>
          </IdeasHeader>

          <GalleryContainer>
            <GalleryTrack
              sx={{
                transform: `translateX(-${(currentGallerySlide + 2) * (isMobile ? 300 : 370)}px)`,
                transition: currentGallerySlide === galleryData.length ? 'none' : 'transform 0.3s ease-in-out',
                [theme.breakpoints.down('xs')]: {
                  transform: `translateX(-${(currentGallerySlide + 2) * 280}px)`,
                },
              }}
            >
              {/* Multiple duplicate cards at the beginning to fill viewport */}
              <GalleryCard>
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${galleryData[galleryData.length - 1].image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }}
                />
              </GalleryCard>

              <GalleryCard>
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${galleryData[galleryData.length - 2].image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }}
                />
              </GalleryCard>

              {galleryData.map((item) => (
                <GalleryCard key={item.id}>
                  <Box
                    sx={{
                      position: 'relative',
                      width: '100%',
                      height: '100%',
                      backgroundImage: `url(${item.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat',
                    }}
                  />
                </GalleryCard>
              ))}

              {/* Multiple duplicate cards at the end to fill viewport */}
              <GalleryCard>
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${galleryData[0].image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }}
                />
              </GalleryCard>

              <GalleryCard>
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${galleryData[1].image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                  }}
                />
              </GalleryCard>
            </GalleryTrack>

            <GalleryNavigationLeft onClick={handlePrevGallerySlide}>
              <ArrowBackIosIcon />
            </GalleryNavigationLeft>

            <GalleryNavigationRight onClick={handleNextGallerySlide}>
              <ArrowForwardIosIcon />
            </GalleryNavigationRight>
          </GalleryContainer>
        </IdeasContent>
      </IdeasSection>

      {/* Quote Form Dialog */}
      <Dialog
        open={quoteDialogOpen}
        onClose={handleCloseQuoteDialog}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 3,
            overflow: 'hidden',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
            backgroundColor: themeNeutral.palette.background.paper,
            position: 'relative'
          }
        }}
      >
        {/* Close Button */}
        <IconButton
          onClick={handleCloseQuoteDialog}
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            zIndex: 10,
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            color: themeNeutral.palette.text.primary,
            width: 36,
            height: 36,
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
            '&:hover': {
              backgroundColor: 'white',
              transform: 'scale(1.05)',
            },
            transition: 'all 0.2s ease-in-out'
          }}
        >
          <CloseIcon sx={{ fontSize: '20px' }} />
        </IconButton>

        <Box sx={{ display: 'flex', minHeight: '400px' }}>
          {/* Left Side - Form */}
          <Box
            sx={{
              flex: 1,
              p: { xs: 3, md: 5 },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              backgroundColor: themeNeutral.palette.neutral.lightGray
            }}
          >
            <Typography
              variant="h3"
              component="h2"
              sx={{
                fontWeight: 'bold',
                mb: 2,
                fontSize: { xs: '1.4rem', md: '1.8rem' },
                lineHeight: 1.2,
                color: themeNeutral.palette.text.primary,
                pr: 5 // Add right padding to avoid overlap with close button
              }}
            >
              Designs for Every Budget
            </Typography>

            <Typography
              variant="h6"
              sx={{
                mb: 4,
                opacity: 0.9,
                fontSize: { xs: '0.9rem', md: '1rem' },
                lineHeight: 1.4,
                color: themeNeutral.palette.text.secondary,
                pr: 5 // Add right padding to avoid overlap with close button
              }}
            >
              Get your dream home today. Let our experts help you
            </Typography>

            <Box component="form" onSubmit={handleFormSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField
                fullWidth
                name="name"
                value={formData.name}
                onChange={handleFormChange}
                placeholder="Name"
                variant="outlined"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: 'white',
                    borderRadius: 2,
                    '& fieldset': {
                      border: 'none'
                    },
                    '&:hover fieldset': {
                      border: 'none'
                    },
                    '&.Mui-focused fieldset': {
                      border: `2px solid ${themeNeutral.palette.primary.main}`
                    }
                  },
                  '& .MuiInputBase-input': {
                    py: 1.5,
                    px: 2,
                    fontSize: '1rem'
                  }
                }}
              />

              <TextField
                fullWidth
                name="email"
                value={formData.email}
                onChange={handleFormChange}
                placeholder="Email"
                type="email"
                variant="outlined"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: 'white',
                    borderRadius: 2,
                    '& fieldset': {
                      border: 'none'
                    },
                    '&:hover fieldset': {
                      border: 'none'
                    },
                    '&.Mui-focused fieldset': {
                      border: `2px solid ${themeNeutral.palette.primary.main}`
                    }
                  },
                  '& .MuiInputBase-input': {
                    py: 1.5,
                    px: 2,
                    fontSize: '1rem'
                  }
                }}
              />

              <Box sx={{ display: 'flex', gap: 1 }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    px: 2,
                    py: 1.5,
                    border: 'none',
                    borderRadius: 2,
                    backgroundColor: 'white',
                    minWidth: '90px',
                    cursor: 'pointer'
                  }}
                >
                  <Box
                    sx={{
                      width: 20,
                      height: 15,
                      backgroundColor: themeNeutral.palette.primary.main,
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
                  <Typography variant="body2" sx={{ fontSize: '0.875rem', color: themeNeutral.palette.text.primary }}>
                    +91
                  </Typography>
                </Box>
                <TextField
                  fullWidth
                  name="phone"
                  value={formData.phone}
                  onChange={handleFormChange}
                  placeholder="Phone Number"
                  type="tel"
                  variant="outlined"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      backgroundColor: 'white',
                      borderRadius: 2,
                      '& fieldset': {
                        border: 'none'
                      },
                      '&:hover fieldset': {
                        border: 'none'
                      },
                      '&.Mui-focused fieldset': {
                        border: `2px solid ${themeNeutral.palette.primary.main}`
                      }
                    },
                    '& .MuiInputBase-input': {
                      py: 1.5,
                      px: 2,
                      fontSize: '1rem'
                    }
                  }}
                />
              </Box>

              <FormControlLabel
                control={
                  <Checkbox
                    name="whatsappUpdates"
                    checked={formData.whatsappUpdates}
                    onChange={handleFormChange}
                    sx={{
                      color: themeNeutral.palette.primary.main,
                      '&.Mui-checked': {
                        color: themeNeutral.palette.primary.main
                      },
                      padding: '4px',
                      '& .MuiSvgIcon-root': {
                        fontSize: '1.2rem'
                      }
                    }}
                  />
                }
                label="Send me updates on WhatsApp"
                sx={{
                  color: themeNeutral.palette.text.primary,
                  alignItems: 'center',
                  margin: 0,
                  marginTop: '4px',
                  '& .MuiFormControlLabel-label': {
                    fontSize: '0.9rem',
                    marginLeft: '8px',
                    lineHeight: 1.4,
                    color: themeNeutral.palette.text.secondary,
                    marginTop: '2px'
                  }
                }}
              />

              <TextField
                fullWidth
                name="propertyName"
                value={formData.propertyName}
                onChange={handleFormChange}
                placeholder="Property Name"
                variant="outlined"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: 'white',
                    borderRadius: 2,
                    '& fieldset': {
                      border: 'none'
                    },
                    '&:hover fieldset': {
                      border: 'none'
                    },
                    '&.Mui-focused fieldset': {
                      border: `2px solid ${themeNeutral.palette.primary.main}`
                    }
                  },
                  '& .MuiInputBase-input': {
                    py: 1.5,
                    px: 2,
                    fontSize: '1rem'
                  }
                }}
              />

              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  backgroundColor: themeNeutral.palette.primary.main,
                  color: 'white',
                  fontSize: '1rem',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  px: 4,
                  py: 1.5,
                  borderRadius: '25px',
                  boxShadow: `0 4px 12px ${themeNeutral.palette.primary.main}30`,
                  mt: 2,
                  '&:hover': {
                    backgroundColor: themeNeutral.palette.primary.dark,
                    boxShadow: `0 6px 16px ${themeNeutral.palette.primary.main}40`,
                  },
                  '&:active': {
                    transform: 'translateY(1px)',
                  },
                  transition: 'all 0.3s ease-in-out'
                }}
              >
                Get Free Quote
              </Button>
            </Box>
          </Box>

          {/* Right Side - Image */}
          <Box
            sx={{
              flex: 1,
              display: { xs: 'none', md: 'block' },
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <Box
              component="img"
              src="https://d2emch4msrhe87.cloudfront.net/image/data/modular%20kitchen/22.jpg"
              alt="Modern Kitchen Design"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center'
              }}
            />
            {/* Gradient overlay for better text contrast if needed */}
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(45deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.05) 100%)'
              }}
            />
          </Box>
        </Box>
      </Dialog>

    </Box>
  )
}