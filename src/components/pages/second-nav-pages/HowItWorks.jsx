import React, { useState } from "react";
import {
    Box,
    Container,
    Typography,
    Button,
    Breadcrumbs,
    Link,
    useTheme,
    useMediaQuery,
    IconButton,
    Paper,
    Stack,
    Grid,
    Divider,
    Avatar,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ChatIcon from "@mui/icons-material/Chat";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import HomeIcon from "@mui/icons-material/Home";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CloseIcon from "@mui/icons-material/Close";
import QuoteForm from "../enquiries/QuoteForm";
import Modal from "@mui/material/Modal";

// Styled components for custom styling
const HeroSection = styled(Box)(({ theme }) => ({
    position: "relative",
    width: "100%",
    height: "60vh",
    minHeight: "400px",
    backgroundImage: `url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "&::before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        zIndex: 1,
    },
}));

const BreadcrumbContainer = styled(Box)(({ theme }) => ({
    position: "absolute",
    top: "20px",
    left: "20px",
    zIndex: 2,
    [theme.breakpoints.down("sm")]: {
        top: "10px",
        left: "10px",
    },
}));

const FloatingWidget = styled(Box)(({ theme }) => ({
    position: "fixed",
    zIndex: 1000,
    [theme.breakpoints.down("sm")]: {
        "& .MuiIconButton-root": {
            width: "40px",
            height: "40px",
        },
    },
}));

const StepContainer = styled(Box)(({ theme }) => ({
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: theme.spacing(2, 0),
    [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        "& .step-arrow": {
            transform: "rotate(90deg)",
            margin: theme.spacing(1, 0),
        },
    },
}));

const StepCircle = styled(Box)(({ theme }) => ({
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    backgroundColor: "#f5f5f5",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    margin: theme.spacing(1),
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    [theme.breakpoints.down("sm")]: {
        width: "100px",
        height: "100px",
    },
}));

const StepNumber = styled(Typography)(({ theme }) => ({
    position: "absolute",
    bottom: "-10px",
    left: "-10px",
    fontSize: "2rem",
    fontWeight: 700,
    color: theme.palette.grey[400],
    zIndex: 1,
}));

const StepArrow = styled(Box)(({ theme }) => ({
    width: "60px",
    height: "2px",
    backgroundColor: theme.palette.grey[400],
    position: "relative",
    margin: theme.spacing(0, 2),
    "&::after": {
        content: '""',
        position: "absolute",
        right: "-8px",
        top: "-6px",
        width: 0,
        height: 0,
        borderLeft: `8px solid ${theme.palette.grey[400]}`,
        borderTop: "6px solid transparent",
        borderBottom: "6px solid transparent",
    },
    [theme.breakpoints.down("md")]: {
        transform: "rotate(90deg)",
        margin: theme.spacing(1, 0),
    },
}));

const CTAButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    color: "white",
    padding: theme.spacing(2, 4),
    fontSize: "1.1rem",
    fontWeight: 600,
    borderRadius: "25px",
    textTransform: "none",
    "&:hover": {
        backgroundColor: theme.palette.primary.dark,
        transform: "translateY(-2px)",
        boxShadow: "0 8px 20px rgba(80, 91, 95, 0.3)",
    },
    transition: "all 0.3s ease",
}));


const ProcessStep = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "flex-start",
    marginBottom: theme.spacing(3),
    position: "relative",
    "&:not(:last-child)::after": {
        content: '""',
        position: "absolute",
        left: "12px",
        top: "35px",
        bottom: "-24px",
        width: "2px",
        background: `repeating-linear-gradient(
            to bottom,
            ${theme.palette.grey[400]} 0px,
            ${theme.palette.grey[400]} 4px,
            transparent 4px,
            transparent 8px
        )`,
    },
}));

const StepBullet = styled(Box)(({ theme }) => ({
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    backgroundColor: theme.palette.text.primary,
    marginRight: theme.spacing(2),
    flexShrink: 0,
    marginTop: "2px",
}));

const FormButton = styled(Button)(({ theme }) => ({
    border: `2px solid ${theme.palette.primary.main}`,
    backgroundColor: "white",
    color: theme.palette.primary.main,
    padding: theme.spacing(1, 2.5),
    fontSize: "0.8rem",
    fontWeight: 600,
    borderRadius: "6px",
    textTransform: "none",
    "&:hover": {
        backgroundColor: theme.palette.primary.main,
        color: "white",
        transform: "translateY(-1px)",
        boxShadow: "0 4px 12px rgba(80, 91, 95, 0.2)",
    },
    transition: "all 0.3s ease",
}));

export default function HowItWorks() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const isSmallMobile = useMediaQuery(theme.breakpoints.down("sm"));
    const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false);

    const handleOpenQuoteForm = () => {
        setIsQuoteFormOpen(true);
    };

    const handleCloseQuoteForm = () => {
        setIsQuoteFormOpen(false);
    };

    const steps = [
        {
            id: 1,
            title: "Meet a designer",
            icon: "https://cdn-icons-png.flaticon.com/128/7164/7164002.png",
            description: "Connect with our expert designers",
        },
        {
            id: 2,
            title: "Book a renovation",
            icon: "https://cdn-icons-png.flaticon.com/128/2910/2910768.png",
            description: "Schedule your consultation",
        },
        {
            id: 3,
            title: "Execution begins",
            icon: "https://cdn-icons-png.flaticon.com/128/9640/9640682.png",
            description: "Start the design process",
        },
        {
            id: 4,
            title: "Final installations",
            icon: "https://cdn-icons-png.flaticon.com/128/4961/4961619.png",
            description: "Complete your dream home",
        },
        {
            id: 5,
            title: "Move in",
            icon: "https://cdn-icons-png.flaticon.com/128/9320/9320557.png",
            description: "Enjoy your new space",
        },
    ];

    return (
        <div style={{ overflowX: "hidden", width: "100%" }}>
            {/* Hero Section with Full-Width Image */}
            <HeroSection>
                {/* Breadcrumb Navigation 
                <BreadcrumbContainer>
                    <Breadcrumbs
                        separator="/"
                        sx={{
                            "& .MuiBreadcrumbs-separator": {
                                color: "white",
                            },
                        }}
                    >
                        <Link
                            href="/"
                            sx={{
                                color: "white",
                                textDecoration: "none",
                                display: "flex",
                                alignItems: "center",
                                "&:hover": {
                                    textDecoration: "underline",
                                },
                            }}
                        >
                            <HomeIcon sx={{ mr: 0.5, fontSize: 16 }} />
                            Home
                        </Link>
                        <Link
                            href="/designs"
                            sx={{
                                color: "white",
                                textDecoration: "none",
                                display: "flex",
                                alignItems: "center",
                                "&:hover": {
                                    textDecoration: "underline",
                                },
                            }}
                        >
                            <DesignServicesIcon sx={{ mr: 0.5, fontSize: 16 }} />
                            Interiors
                        </Link>
                        <Typography
                            sx={{
                                color: "white",
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            <PlayArrowIcon sx={{ mr: 0.5, fontSize: 16 }} />
                            How it works
                        </Typography>
                    </Breadcrumbs>
                </BreadcrumbContainer>*/}
            </HeroSection>

            {/* Main Content Section */}
            <Box sx={{
                py: { xs: 6, md: 10 },
                textAlign: "left",
                backgroundColor: theme.palette.background.paper,
                px: { xs: 3, sm: 4, md: 6 }
            }}>
                <Container maxWidth="lg" sx={{ px: 0 }}>
                    {/* Title Section */}
                    <Box sx={{ textAlign: "center", mb: 4 }}>
                        <Typography
                            variant="h2"
                            component="h1"
                            sx={{
                                fontSize: { xs: "2rem", md: "2.5rem" },
                                fontWeight: 700,
                                color: theme.palette.text.primary,
                                mb: 2,
                                fontFamily: theme.typography.fontFamily,
                            }}
                        >
                            HOW IT WORKS
                        </Typography>
                    </Box>

                    {/* Steps Section */}
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'stretch',
                            flexWrap: 'wrap',
                            gap: { xs: 3, md: 5 },
                            mb: 4,
                        }}
                    >
                        {steps.map((step, index) => (
                            <Box
                                key={step.id}
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    flex: { xs: '1 1 40%', md: '1 1 15%' },
                                    backgroundColor: theme.palette.background.paper,
                                    borderRadius: 2,
                                    boxShadow: '0 3px 8px rgba(0,0,0,0.08)',
                                    p: 2.5,
                                    position: 'relative',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateY(-4px)',
                                        boxShadow: '0 5px 14px rgba(0,0,0,0.12)',
                                    },
                                }}
                            >
                                {/* Step Number Badge */}
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: 10,
                                        left: 10,
                                        width: 28,
                                        height: 28,
                                        borderRadius: '50%',
                                        backgroundColor: theme.palette.primary.main,
                                        color: theme.palette.primary.contrastText,
                                        fontWeight: 600,
                                        fontSize: '0.9rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
                                    }}
                                >
                                    {index + 1}
                                </Box>

                                {/* Icon */}
                                <Avatar
                                    src={step.icon}
                                    alt={step.title}
                                    sx={{
                                        width: 65,
                                        height: 65,
                                        border: `2px solid ${theme.palette.primary.main}`,
                                        backgroundColor: '#fff',
                                        mb: 1.5,
                                        boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
                                        p: 1.5,
                                    }}
                                />

                                {/* Title */}
                                <Typography
                                    variant="subtitle1"
                                    sx={{
                                        fontWeight: 600,
                                        color: theme.palette.text.primary,
                                        fontFamily: theme.typography.fontFamily,
                                        fontSize: { xs: '0.95rem', md: '1rem' },
                                    }}
                                >
                                    {step.title}
                                </Typography>
                            </Box>
                        ))}
                    </Box>

                    {/* Call to Action Button */}
                    <Box sx={{ textAlign: "center" }}>
                        <CTAButton
                            variant="contained"
                            size="large"
                            sx={{
                                px: 6,
                                py: 1.5,
                                fontSize: '1rem',
                                fontWeight: 600,
                                borderRadius: 8,
                                textTransform: 'none',
                                whiteSpace: 'nowrap',
                                '&:hover': {
                                    backgroundColor: theme.palette.primary.dark,
                                    transform: 'translateY(-2px)',
                                },
                            }}
                        >
                            BOOK FREE CONSULTATION
                        </CTAButton>
                    </Box>
                </Container>
            </Box>

            {/* Meet Your Designer Section */}
            <Box sx={{
                py: { xs: 6, md: 10 },
                backgroundColor: theme.palette.background.default,
                textAlign: "left",
                px: { xs: 3, sm: 4, md: 6 }
            }}>
                <Container maxWidth="lg" sx={{ px: 0 }}>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: { xs: 4, md: 6 },
                            minHeight: "300px",
                            [theme.breakpoints.down("md")]: {
                                flexDirection: "column",
                                textAlign: "center",
                            },
                        }}
                    >
                        {/* Left Side - Illustration */}
                        <Box
                            sx={{
                                flex: "0 0 50%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                [theme.breakpoints.down("md")]: {
                                    flex: "none",
                                    width: "100%",
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    width: "100%",
                                    maxWidth: "350px",
                                    height: "250px",
                                    borderRadius: "12px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    position: "relative",
                                    overflow: "hidden",
                                    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
                                }}
                            >
                                <img
                                    src="https://img.freepik.com/premium-vector/business-scene-with-three-people-meeting_81698-5022.jpg"
                                    alt="Business meeting with designers"
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        borderRadius: "12px",
                                    }}
                                />
                            </Box>
                        </Box>

                        {/* Right Side - Process Steps */}
                        <Box
                            sx={{
                                flex: "0 0 50%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                [theme.breakpoints.down("md")]: {
                                    flex: "none",
                                    width: "100%",
                                },
                            }}
                        >
                            <Typography
                                variant="h3"
                                component="h2"
                                sx={{
                                    fontSize: { xs: "1.5rem", md: "1.8rem" },
                                    fontWeight: 700,
                                    color: theme.palette.text.primary,
                                    mb: 3,
                                }}
                            >
                                Meet your designer
                            </Typography>

                            {/* Step 1 */}
                            <ProcessStep>
                                <StepBullet />
                                <Box sx={{ flex: 1 }}>
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            fontWeight: 600,
                                            color: theme.palette.text.primary,
                                            mb: 1,
                                            fontSize: { xs: "1rem", md: "1.1rem" },
                                        }}
                                    >
                                        It all begins with a form
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            color: theme.palette.text.secondary,
                                            mb: 2,
                                            lineHeight: 1.6,
                                            fontSize: { xs: "0.85rem", md: "0.9rem" },
                                        }}
                                    >
                                        Let's get acquainted. The more we learn about you, the better we can design your home.
                                    </Typography>
                                    <FormButton variant="outlined" onClick={handleOpenQuoteForm}>
                                        FILL YOUR FORM
                                    </FormButton>
                                </Box>
                            </ProcessStep>

                            {/* Step 2 */}
                            <ProcessStep>
                                <StepBullet />
                                <Box sx={{ flex: 1 }}>
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            fontWeight: 600,
                                            color: theme.palette.text.primary,
                                            mb: 1,
                                            fontSize: { xs: "1rem", md: "1.1rem" },
                                        }}
                                    >
                                        Get free consultation
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            color: theme.palette.text.secondary,
                                            lineHeight: 1.6,
                                            fontSize: { xs: "0.85rem", md: "0.9rem" },
                                        }}
                                    >
                                        Talk to your designer and get personalised designs and quote for your dream home.
                                    </Typography>
                                </Box>
                            </ProcessStep>
                        </Box>
                    </Box>
                </Container>
            </Box>

            {/* Book Kalakruti Section */}
            <Box sx={{
                py: { xs: 6, md: 10 },
                backgroundColor: theme.palette.background.paper,
                textAlign: "left",
                px: { xs: 3, sm: 4, md: 6 }
            }}>
                <Container maxWidth="lg" sx={{ px: 0 }}>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: { xs: 4, md: 6 },
                            minHeight: "400px",
                            [theme.breakpoints.down("md")]: {
                                flexDirection: "column",
                                textAlign: "center",
                            },
                        }}
                    >
                        {/* Left Side - Book Illustration */}
                        <Box
                            sx={{
                                flex: "0 0 50%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                [theme.breakpoints.down("md")]: {
                                    flex: "none",
                                    width: "100%",
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    width: "100%",
                                    maxWidth: "280px",
                                    height: "250px",
                                    borderRadius: "12px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    position: "relative",
                                    overflow: "hidden",
                                    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
                                }}
                            >
                                <img
                                    src="https://img.freepik.com/vecteurs-libre/assurance-qualite-contrat-affaire-certificat-garantie_335657-3140.jpg?semt=ais_hybrid&w=740&q=80"
                                    alt="Book Kalakruti illustration"
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        borderRadius: "12px",
                                    }}
                                />
                            </Box>
                        </Box>

                        {/* Right Side - Process Steps */}
                        <Box
                            sx={{
                                flex: "0 0 50%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                [theme.breakpoints.down("md")]: {
                                    flex: "none",
                                    width: "100%",
                                },
                            }}
                        >
                            <Typography
                                variant="h3"
                                component="h2"
                                sx={{
                                    fontSize: { xs: "1.3rem", md: "1.5rem" },
                                    fontWeight: 700,
                                    color: theme.palette.text.primary,
                                    mb: 3,
                                }}
                            >
                                Book Kalakruti
                            </Typography>

                            {/* Step 1 */}
                            <ProcessStep>
                                <StepBullet />
                                <Box sx={{ flex: 1 }}>
                                    <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                                        <Typography
                                            variant="h5"
                                            sx={{
                                                fontWeight: 600,
                                                color: theme.palette.text.primary,
                                                fontSize: { xs: "0.9rem", md: "1rem" },
                                                mr: 1,
                                            }}
                                        >
                                            Pay the booking amount to seal the deal
                                        </Typography>
                                        <Box
                                            sx={{
                                                backgroundColor: "#4CAF50",
                                                color: "white",
                                                px: 1,
                                                py: 0.5,
                                                borderRadius: "4px",
                                                fontSize: "0.7rem",
                                                fontWeight: 600,
                                                textTransform: "uppercase",
                                            }}
                                        >
                                            MILESTONE
                                        </Box>
                                    </Box>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            color: theme.palette.text.secondary,
                                            mb: 2,
                                            lineHeight: 1.6,
                                            fontSize: { xs: "0.8rem", md: "0.85rem" },
                                        }}
                                    >
                                        Once you're happy with what we've proposed, pay 10% of the final quote or Rs.25000 (whichever is higher) to book us.
                                    </Typography>
                                </Box>
                            </ProcessStep>

                            {/* Step 2 */}
                            <ProcessStep>
                                <StepBullet />
                                <Box sx={{ flex: 1 }}>
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            fontWeight: 600,
                                            color: theme.palette.text.primary,
                                            mb: 1,
                                            fontSize: { xs: "0.9rem", md: "1rem" },
                                        }}
                                    >
                                        Finalise your home design
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            color: theme.palette.text.secondary,
                                            lineHeight: 1.6,
                                            fontSize: { xs: "0.8rem", md: "0.85rem" },
                                        }}
                                    >
                                        It's time to deep dive into the nitty-gritties & pick your favorite materials, finishes, etc. Interim payments will be requested based on project scope, value, and timelines during the booking and design phase.
                                    </Typography>
                                </Box>
                            </ProcessStep>
                        </Box>
                    </Box>
                </Container>
            </Box>

            {/* Place the Order Section */}
            <Box sx={{
                py: { xs: 6, md: 10 },
                backgroundColor: theme.palette.background.default,
                textAlign: "left",
                px: { xs: 3, sm: 4, md: 6 }
            }}>
                <Container maxWidth="lg" sx={{ px: 0 }}>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: { xs: 4, md: 6 },
                            minHeight: "400px",
                            [theme.breakpoints.down("md")]: {
                                flexDirection: "column",
                                textAlign: "center",
                            },
                        }}
                    >
                        {/* Left Side - Illustration */}
                        <Box
                            sx={{
                                flex: "0 0 50%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                [theme.breakpoints.down("md")]: {
                                    flex: "none",
                                    width: "100%",
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    width: "100%",
                                    maxWidth: "350px",
                                    height: "250px",
                                    borderRadius: "12px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    position: "relative",
                                    overflow: "hidden",
                                    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
                                }}
                            >
                                <img
                                    src="https://img.freepik.com/premium-vector/business-women-discussing-documents-table_23-2148614321.jpg"
                                    alt="Place the order illustration"
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        borderRadius: "12px",
                                    }}
                                />
                            </Box>
                        </Box>

                        {/* Right Side - Process Steps */}
                        <Box
                            sx={{
                                flex: "0 0 50%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                [theme.breakpoints.down("md")]: {
                                    flex: "none",
                                    width: "100%",
                                },
                            }}
                        >
                            <Typography
                                variant="h3"
                                component="h2"
                                sx={{
                                    fontSize: { xs: "1.5rem", md: "1.8rem" },
                                    fontWeight: 700,
                                    color: theme.palette.text.primary,
                                    mb: 3,
                                }}
                            >
                                Place the order
                            </Typography>

                            {/* Step 1 */}
                            <ProcessStep>
                                <StepBullet />
                                <Box sx={{ flex: 1 }}>
                                    <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                                        <Typography
                                            variant="h5"
                                            sx={{
                                                fontWeight: 600,
                                                color: theme.palette.text.primary,
                                                mb: 1,
                                                fontSize: { xs: "1rem", md: "1.1rem" },
                                                mr: 1,
                                            }}
                                        >
                                            Confirm your order with 60% payment
                                        </Typography>
                                        <Box
                                            sx={{
                                                backgroundColor: "#4CAF50",
                                                color: "white",
                                                px: 1,
                                                py: 0.5,
                                                borderRadius: "4px",
                                                fontSize: "0.7rem",
                                                fontWeight: 600,
                                                textTransform: "uppercase",
                                            }}
                                        >
                                            MILESTONE
                                        </Box>
                                    </Box>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            color: theme.palette.text.secondary,
                                            mb: 2,
                                            lineHeight: 1.6,
                                            fontSize: { xs: "0.85rem", md: "0.9rem" },
                                        }}
                                    >
                                        Finalise the design by making a cumulative 60% payment, and your project is now off to a good start.
                                    </Typography>
                                </Box>
                            </ProcessStep>

                            {/* Step 2 */}
                            <ProcessStep>
                                <StepBullet />
                                <Box sx={{ flex: 1 }}>
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            fontWeight: 600,
                                            color: theme.palette.text.primary,
                                            mb: 1,
                                            fontSize: { xs: "1rem", md: "1.1rem" },
                                        }}
                                    >
                                        Work commences
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            color: theme.palette.text.secondary,
                                            lineHeight: 1.6,
                                            fontSize: { xs: "0.85rem", md: "0.9rem" },
                                        }}
                                    >
                                        Civil work begins on site. Keep a tab on your project status on 'My Account'.
                                    </Typography>
                                </Box>
                            </ProcessStep>
                        </Box>
                    </Box>
                </Container>
            </Box>

            {/* Success Banner */}
            <Box
                sx={{
                    width: "100%",
                    backgroundColor: theme.palette.primary.main,
                    padding: theme.spacing(4, 0),
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                    }}
                >
                    {/* Checkmark Icon */}
                    <CheckCircleIcon
                        sx={{
                            fontSize: "40px",
                            color: "white",
                        }}
                    />

                    {/* Success Message */}
                    <Typography
                        variant="h5"
                        sx={{
                            color: "white",
                            fontWeight: 700,
                            fontSize: { xs: "1.2rem", md: "1.5rem" },
                            textAlign: "center",
                        }}
                    >
                        You're half way there. Your orders are raised!
                    </Typography>
                </Box>
            </Box>

            {/* Final Installations Section */}
            <Box sx={{
                py: { xs: 6, md: 10 },
                backgroundColor: theme.palette.background.paper,
                textAlign: "left",
                px: { xs: 3, sm: 4, md: 6 }
            }}>
                <Container maxWidth="lg" sx={{ px: 0 }}>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: { xs: 4, md: 6 },
                            minHeight: "400px",
                            [theme.breakpoints.down("md")]: {
                                flexDirection: "column",
                                textAlign: "center",
                            },
                        }}
                    >
                        {/* Left Side - Installation Illustration */}
                        <Box
                            sx={{
                                flex: "0 0 50%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                [theme.breakpoints.down("md")]: {
                                    flex: "none",
                                    width: "100%",
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    width: "100%",
                                    maxWidth: "280px",
                                    height: "250px",
                                    borderRadius: "12px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    position: "relative",
                                    overflow: "hidden",
                                    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
                                }}
                            >
                                <img
                                    src="https://img.freepik.com/premium-vector/construction-worker-installing-furniture_23-2148614322.jpg"
                                    alt="Final installations illustration"
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        borderRadius: "12px",
                                    }}
                                />
                            </Box>
                        </Box>

                        {/* Right Side - Process Steps */}
                        <Box
                            sx={{
                                flex: "0 0 50%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                [theme.breakpoints.down("md")]: {
                                    flex: "none",
                                    width: "100%",
                                },
                            }}
                        >
                            <Typography
                                variant="h3"
                                component="h2"
                                sx={{
                                    fontSize: { xs: "1.3rem", md: "1.5rem" },
                                    fontWeight: 700,
                                    color: theme.palette.text.primary,
                                    mb: 3,
                                }}
                            >
                                Final installations
                            </Typography>

                            {/* Step 1 */}
                            <ProcessStep>
                                <StepBullet />
                                <Box sx={{ flex: 1 }}>
                                    <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
                                        <Typography
                                            variant="h5"
                                            sx={{
                                                fontWeight: 600,
                                                color: theme.palette.text.primary,
                                                fontSize: { xs: "0.9rem", md: "1rem" },
                                                mr: 1,
                                            }}
                                        >
                                            Pay 100% at intimation of material dispatch
                                        </Typography>
                                        <Box
                                            sx={{
                                                backgroundColor: "#4CAF50",
                                                color: "white",
                                                px: 1,
                                                py: 0.5,
                                                borderRadius: "4px",
                                                fontSize: "0.7rem",
                                                fontWeight: 600,
                                                textTransform: "uppercase",
                                            }}
                                        >
                                            MILESTONE
                                        </Box>
                                    </Box>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            color: theme.palette.text.secondary,
                                            mb: 2,
                                            lineHeight: 1.6,
                                            fontSize: { xs: "0.8rem", md: "0.85rem" },
                                        }}
                                    >
                                        Once the materials are ready for dispatch, you'll be intimated. Make the balance payment and we'll head to the last leg of your project.
                                    </Typography>
                                </Box>
                            </ProcessStep>

                            {/* Step 2 */}
                            <ProcessStep>
                                <StepBullet />
                                <Box sx={{ flex: 1 }}>
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            fontWeight: 600,
                                            color: theme.palette.text.primary,
                                            mb: 1,
                                            fontSize: { xs: "0.9rem", md: "1rem" },
                                        }}
                                    >
                                        Installation
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            color: theme.palette.text.secondary,
                                            lineHeight: 1.6,
                                            fontSize: { xs: "0.8rem", md: "0.85rem" },
                                        }}
                                    >
                                        Orders get delivered on-site and installation happens as per design
                                    </Typography>
                                </Box>
                            </ProcessStep>
                        </Box>
                    </Box>
                </Container>
            </Box>

            {/* Success Banner */}
            <Box
                sx={{
                    width: "100%",
                    backgroundColor: theme.palette.primary.main,
                    padding: theme.spacing(4, 0),
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                    }}
                >
                    {/* Checkmark Icon */}
                    <CheckCircleIcon
                        sx={{
                            fontSize: "40px",
                            color: "white",
                        }}
                    />

                    {/* Success Message */}
                    <Typography
                        variant="h5"
                        sx={{
                            color: "white",
                            fontWeight: 700,
                            fontSize: { xs: "1.2rem", md: "1.5rem" },
                            textAlign: "center",
                        }}
                    >
                        Hurrah! Complete payment has been made!
                    </Typography>
                </Box>
            </Box>

            {/* Move In Section */}
            <Box sx={{
                py: { xs: 6, md: 10 },
                backgroundColor: theme.palette.background.default,
                textAlign: "left",
                px: { xs: 3, sm: 4, md: 6 }
            }}>
                <Container maxWidth="lg" sx={{ px: 0 }}>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: { xs: 4, md: 6 },
                            minHeight: "400px",
                            [theme.breakpoints.down("md")]: {
                                flexDirection: "column",
                                textAlign: "center",
                            },
                        }}
                    >
                        {/* Left Side - Illustration */}
                        <Box
                            sx={{
                                flex: "0 0 50%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                [theme.breakpoints.down("md")]: {
                                    flex: "none",
                                    width: "100%",
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    width: "100%",
                                    maxWidth: "350px",
                                    height: "250px",
                                    borderRadius: "12px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    position: "relative",
                                    overflow: "hidden",
                                    boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
                                }}
                            >
                                <img
                                    src="https://png.pngtree.com/thumb_back/fh260/background/20230705/pngtree-vibrant-nursery-interior-3d-render-of-front-view-image_3740158.jpg"
                                    alt="Move in illustration"
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        borderRadius: "12px",
                                    }}
                                />
                            </Box>
                        </Box>

                        {/* Right Side - Content */}
                        <Box
                            sx={{
                                flex: "0 0 50%",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                [theme.breakpoints.down("md")]: {
                                    flex: "none",
                                    width: "100%",
                                },
                            }}
                        >
                            <Typography
                                variant="h3"
                                component="h2"
                                sx={{
                                    fontSize: { xs: "1.5rem", md: "1.8rem" },
                                    fontWeight: 700,
                                    color: theme.palette.text.primary,
                                    mb: 3,
                                }}
                            >
                                Move in!
                            </Typography>

                            <Typography
                                variant="body1"
                                sx={{
                                    color: theme.palette.text.secondary,
                                    lineHeight: 1.6,
                                    fontSize: { xs: "0.9rem", md: "1rem" },
                                }}
                            >
                                Your dream home is now a reality! It's time to make new memories! Do avail the free professional photoshoot session of your #LivspaceHome.
                            </Typography>
                        </Box>
                    </Box>
                </Container>
            </Box>

            {/* Understand Your Order Types Section */}
            <Box sx={{
                py: { xs: 6, md: 10 },
                backgroundColor: theme.palette.background.paper,
                textAlign: "left",
                px: { xs: 3, sm: 4, md: 6 }
            }}>
                <Container maxWidth="lg" sx={{ px: 0 }}>
                    <Box sx={{ textAlign: "center", mb: 6 }}>
                        <Typography
                            variant="h2"
                            component="h2"
                            sx={{
                                fontSize: { xs: "1.8rem", md: "2.2rem" },
                                fontWeight: 700,
                                color: theme.palette.text.primary,
                                mb: 3,
                            }}
                        >
                            Understand your order types
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                color: theme.palette.text.secondary,
                                fontSize: { xs: "0.9rem", md: "1rem" },
                                lineHeight: 1.6,
                                maxWidth: "800px",
                                mx: "auto",
                            }}
                        >
                            We know our payments can seem complex. But they're really not. We've staggered them through your home interiors journey, so that you make small payments depending on how your project has progressed.
                        </Typography>
                    </Box>



                    {/* Order Types Table */}
                    <Box
                        sx={{
                            overflow: "auto",
                            borderRadius: "12px",
                            boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
                            border: "1px solid #e0e0e0",
                            // Enhanced scrollbar styling for better visibility
                            '&::-webkit-scrollbar': {
                                height: '12px',
                                width: '12px',
                            },
                            '&::-webkit-scrollbar-track': {
                                backgroundColor: '#f1f1f1',
                                borderRadius: '6px',
                            },
                            '&::-webkit-scrollbar-thumb': {
                                backgroundColor: theme.palette.primary.main,
                                borderRadius: '6px',
                                border: '2px solid #f1f1f1',
                                '&:hover': {
                                    backgroundColor: theme.palette.primary.dark,
                                },
                            },
                            '&::-webkit-scrollbar-corner': {
                                backgroundColor: '#f1f1f1',
                            },
                            // Firefox scrollbar styling
                            scrollbarWidth: 'thin',
                            scrollbarColor: `${theme.palette.primary.main} #f1f1f1`,
                            // Add visual indicator for mobile
                            position: 'relative',
                            '&::after': {
                                content: '""',
                                position: 'absolute',
                                top: 0,
                                right: 0,
                                bottom: 0,
                                width: '20px',
                                background: 'linear-gradient(to left, rgba(0,0,0,0.1), transparent)',
                                pointerEvents: 'none',
                                zIndex: 1,
                                [theme.breakpoints.up('md')]: {
                                    display: 'none',
                                },
                            },
                        }}
                    >
                        <Box
                            component="table"
                            sx={{
                                width: "100%",
                                minWidth: "800px", // Ensure table has minimum width for horizontal scroll
                                borderCollapse: "collapse",
                                backgroundColor: theme.palette.background.paper,
                            }}
                        >
                            {/* Table Header */}
                            <Box
                                component="thead"
                                sx={{
                                    backgroundColor: "#f8f9fa",
                                }}
                            >
                                <Box
                                    component="tr"
                                    sx={{
                                        borderBottom: "2px solid #e0e0e0",
                                    }}
                                >
                                    <Box
                                        component="th"
                                        sx={{
                                            padding: theme.spacing(2),
                                            textAlign: "left",
                                            fontWeight: 600,
                                            color: theme.palette.text.primary,
                                            fontSize: { xs: "0.8rem", md: "0.9rem" },
                                            borderRight: "1px solid #e0e0e0",
                                            minWidth: "120px",
                                        }}
                                    >
                                        Order type
                                    </Box>
                                    <Box
                                        component="th"
                                        sx={{
                                            padding: theme.spacing(2),
                                            textAlign: "left",
                                            fontWeight: 600,
                                            color: theme.palette.text.primary,
                                            fontSize: { xs: "0.8rem", md: "0.9rem" },
                                            borderRight: "1px solid #e0e0e0",
                                            minWidth: "200px",
                                        }}
                                    >
                                        Overview of work involved
                                    </Box>
                                    <Box
                                        component="th"
                                        sx={{
                                            padding: theme.spacing(2),
                                            textAlign: "left",
                                            fontWeight: 600,
                                            color: theme.palette.text.primary,
                                            fontSize: { xs: "0.8rem", md: "0.9rem" },
                                            borderRight: "1px solid #e0e0e0",
                                            minWidth: "200px",
                                        }}
                                    >
                                        Execution milestone (Make 100% payment)
                                    </Box>
                                    <Box
                                        component="th"
                                        sx={{
                                            padding: theme.spacing(2),
                                            textAlign: "left",
                                            fontWeight: 600,
                                            color: theme.palette.text.primary,
                                            fontSize: { xs: "0.8rem", md: "0.9rem" },
                                            minWidth: "200px",
                                        }}
                                    >
                                        Handover
                                    </Box>
                                </Box>
                            </Box>

                            {/* Table Body */}
                            <Box component="tbody">
                                {/* Row 1 */}
                                <Box
                                    component="tr"
                                    sx={{
                                        borderBottom: "1px solid #e0e0e0",
                                        "&:hover": {
                                            backgroundColor: "#f8f9fa",
                                        },
                                    }}
                                >
                                    <Box
                                        component="td"
                                        sx={{
                                            padding: theme.spacing(2),
                                            fontWeight: 600,
                                            color: theme.palette.text.primary,
                                            fontSize: { xs: "0.8rem", md: "0.9rem" },
                                            borderRight: "1px solid #e0e0e0",
                                        }}
                                    >
                                        Order type 1
                                    </Box>
                                    <Box
                                        component="td"
                                        sx={{
                                            padding: theme.spacing(2),
                                            color: theme.palette.text.secondary,
                                            fontSize: { xs: "0.8rem", md: "0.9rem" },
                                            borderRight: "1px solid #e0e0e0",
                                        }}
                                    >
                                        Civil & MEP (Mechanical, Electrical & Plumbing)
                                    </Box>
                                    <Box
                                        component="td"
                                        sx={{
                                            padding: theme.spacing(2),
                                            color: theme.palette.text.secondary,
                                            fontSize: { xs: "0.8rem", md: "0.9rem" },
                                            borderRight: "1px solid #e0e0e0",
                                        }}
                                    >
                                        MEP base work & POP (Plaster Of Paris) completion
                                    </Box>
                                    <Box
                                        component="td"
                                        sx={{
                                            padding: theme.spacing(2),
                                            color: theme.palette.text.secondary,
                                            fontSize: { xs: "0.8rem", md: "0.9rem" },
                                        }}
                                    >
                                        MEP fixtures & fittings, final painting & handover
                                    </Box>
                                </Box>

                                {/* Row 2 */}
                                <Box
                                    component="tr"
                                    sx={{
                                        borderBottom: "1px solid #e0e0e0",
                                        "&:hover": {
                                            backgroundColor: "#f8f9fa",
                                        },
                                    }}
                                >
                                    <Box
                                        component="td"
                                        sx={{
                                            padding: theme.spacing(2),
                                            fontWeight: 600,
                                            color: theme.palette.text.primary,
                                            fontSize: { xs: "0.8rem", md: "0.9rem" },
                                            borderRight: "1px solid #e0e0e0",
                                        }}
                                    >
                                        Order type 1
                                    </Box>
                                    <Box
                                        component="td"
                                        sx={{
                                            padding: theme.spacing(2),
                                            color: theme.palette.text.secondary,
                                            fontSize: { xs: "0.8rem", md: "0.9rem" },
                                            borderRight: "1px solid #e0e0e0",
                                        }}
                                    >
                                        Custom furniture (workshop)
                                    </Box>
                                    <Box
                                        component="td"
                                        sx={{
                                            padding: theme.spacing(2),
                                            color: theme.palette.text.secondary,
                                            fontSize: { xs: "0.8rem", md: "0.9rem" },
                                            borderRight: "1px solid #e0e0e0",
                                        }}
                                    >
                                        Carcass quality check completion
                                    </Box>
                                    <Box
                                        component="td"
                                        sx={{
                                            padding: theme.spacing(2),
                                            color: theme.palette.text.secondary,
                                            fontSize: { xs: "0.8rem", md: "0.9rem" },
                                        }}
                                    >
                                        Installation and handover
                                    </Box>
                                </Box>

                                {/* Row 3 */}
                                <Box
                                    component="tr"
                                    sx={{
                                        borderBottom: "1px solid #e0e0e0",
                                        "&:hover": {
                                            backgroundColor: "#f8f9fa",
                                        },
                                    }}
                                >
                                    <Box
                                        component="td"
                                        sx={{
                                            padding: theme.spacing(2),
                                            fontWeight: 600,
                                            color: theme.palette.text.primary,
                                            fontSize: { xs: "0.8rem", md: "0.9rem" },
                                            borderRight: "1px solid #e0e0e0",
                                        }}
                                    >
                                        Order type 1
                                    </Box>
                                    <Box
                                        component="td"
                                        sx={{
                                            padding: theme.spacing(2),
                                            color: theme.palette.text.secondary,
                                            fontSize: { xs: "0.8rem", md: "0.9rem" },
                                            borderRight: "1px solid #e0e0e0",
                                        }}
                                    >
                                        Custom furniture (on-site)
                                    </Box>
                                    <Box
                                        component="td"
                                        sx={{
                                            padding: theme.spacing(2),
                                            color: theme.palette.text.secondary,
                                            fontSize: { xs: "0.8rem", md: "0.9rem" },
                                            borderRight: "1px solid #e0e0e0",
                                        }}
                                    >
                                        Wood framework completion
                                    </Box>
                                    <Box
                                        component="td"
                                        sx={{
                                            padding: theme.spacing(2),
                                            color: theme.palette.text.secondary,
                                            fontSize: { xs: "0.8rem", md: "0.9rem" },
                                        }}
                                    >
                                        Installation and handover
                                    </Box>
                                </Box>

                                {/* Row 4 */}
                                <Box
                                    component="tr"
                                    sx={{
                                        "&:hover": {
                                            backgroundColor: "#f8f9fa",
                                        },
                                    }}
                                >
                                    <Box
                                        component="td"
                                        sx={{
                                            padding: theme.spacing(2),
                                            fontWeight: 600,
                                            color: theme.palette.text.primary,
                                            fontSize: { xs: "0.8rem", md: "0.9rem" },
                                            borderRight: "1px solid #e0e0e0",
                                        }}
                                    >
                                        Order type 2
                                    </Box>
                                    <Box
                                        component="td"
                                        sx={{
                                            padding: theme.spacing(2),
                                            color: theme.palette.text.secondary,
                                            fontSize: { xs: "0.8rem", md: "0.9rem" },
                                            borderRight: "1px solid #e0e0e0",
                                        }}
                                    >
                                        Catalogue products
                                    </Box>
                                    <Box
                                        component="td"
                                        sx={{
                                            padding: theme.spacing(2),
                                            color: theme.palette.text.secondary,
                                            fontSize: { xs: "0.8rem", md: "0.9rem" },
                                            borderRight: "1px solid #e0e0e0",
                                        }}
                                    >
                                        NA
                                    </Box>
                                    <Box
                                        component="td"
                                        sx={{
                                            padding: theme.spacing(2),
                                            color: theme.palette.text.secondary,
                                            fontSize: { xs: "0.8rem", md: "0.9rem" },
                                        }}
                                    >
                                        Make 100% payment for door delivery & installation
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>

            {/* The Team Section */}
            <Box sx={{
                py: { xs: 6, md: 10 },
                backgroundColor: theme.palette.background.default,
                textAlign: "left",
                px: { xs: 3, sm: 4, md: 6 }
            }}>
                <Container maxWidth="lg" sx={{ px: 0 }}>
                    <Box sx={{ textAlign: "center", mb: 6 }}>
                        <Typography
                            variant="h2"
                            component="h2"
                            sx={{
                                fontSize: { xs: "1.8rem", md: "2.2rem" },
                                fontWeight: 700,
                                color: theme.palette.text.primary,
                                mb: 3,
                            }}
                        >
                            The Team
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                color: theme.palette.text.secondary,
                                fontSize: { xs: "0.9rem", md: "1rem" },
                                lineHeight: 1.6,
                                maxWidth: "600px",
                                mx: "auto",
                            }}
                        >
                            Get to know the team that'll be with you every step of the way.
                        </Typography>
                    </Box>

                    {/* Team Members Flexbox Layout */}
                    <Box
                        sx={{
                            display: "flex",
                            gap: 4,
                            justifyContent: "center",
                            alignItems: "stretch",
                            [theme.breakpoints.down("md")]: {
                                flexDirection: "column",
                                gap: 3,
                            },
                        }}
                    >
                        {/* Design Lead */}
                        <Box
                            sx={{
                                flex: "1",
                                textAlign: "center",
                                padding: theme.spacing(3),
                                backgroundColor: theme.palette.background.paper,
                                borderRadius: "12px",
                                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                minHeight: "350px",
                            }}
                        >
                            {/* Illustration */}
                            <Box
                                sx={{
                                    width: "120px",
                                    height: "120px",
                                    borderRadius: "50%",
                                    backgroundColor: "#f5f5f5",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    mb: 3,
                                    overflow: "hidden",
                                }}
                            >
                                <img
                                    src="https://img.freepik.com/premium-vector/woman-designer-working-computer_23-2148614324.jpg"
                                    alt="Design Lead"
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                    }}
                                />
                            </Box>

                            {/* Role Title */}
                            <Typography
                                variant="h5"
                                sx={{
                                    fontWeight: 600,
                                    color: theme.palette.text.primary,
                                    mb: 2,
                                    fontSize: { xs: "1rem", md: "1.1rem" },
                                }}
                            >
                                The Design Lead (DL)
                            </Typography>

                            {/* Description */}
                            <Typography
                                variant="body2"
                                sx={{
                                    color: theme.palette.text.secondary,
                                    lineHeight: 1.6,
                                    fontSize: { xs: "0.85rem", md: "0.9rem" },
                                }}
                            >
                                The Design Lead gets to know your requirements and your lifestyle intimately to ensure your home is a reflection of who you are.
                            </Typography>
                        </Box>

                        {/* Business Manager */}
                        <Box
                            sx={{
                                flex: "1",
                                textAlign: "center",
                                padding: theme.spacing(3),
                                backgroundColor: theme.palette.background.paper,
                                borderRadius: "12px",
                                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                minHeight: "350px",
                            }}
                        >
                            {/* Illustration */}
                            <Box
                                sx={{
                                    width: "120px",
                                    height: "120px",
                                    borderRadius: "50%",
                                    backgroundColor: "#f5f5f5",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    mb: 3,
                                    overflow: "hidden",
                                }}
                            >
                                <img
                                    src="https://img.freepik.com/premium-vector/business-manager-working-office_23-2148614325.jpg"
                                    alt="Business Manager"
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                    }}
                                />
                            </Box>

                            {/* Role Title */}
                            <Typography
                                variant="h5"
                                sx={{
                                    fontWeight: 600,
                                    color: theme.palette.text.primary,
                                    mb: 2,
                                    fontSize: { xs: "1rem", md: "1.1rem" },
                                }}
                            >
                                The Business Manager (BM)
                            </Typography>

                            {/* Description */}
                            <Typography
                                variant="body2"
                                sx={{
                                    color: theme.palette.text.secondary,
                                    lineHeight: 1.6,
                                    fontSize: { xs: "0.85rem", md: "0.9rem" },
                                }}
                            >
                                To ensure your home journey is smooth sailing, your Business Manager oversees the entire design process and ensures there are no hiccups.
                            </Typography>
                        </Box>

                        {/* Project Manager */}
                        <Box
                            sx={{
                                flex: "1",
                                textAlign: "center",
                                padding: theme.spacing(3),
                                backgroundColor: theme.palette.background.paper,
                                borderRadius: "12px",
                                boxShadow: "0 4px 16px rgba(0, 0, 0, 0.08)",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                minHeight: "350px",
                            }}
                        >
                            {/* Illustration */}
                            <Box
                                sx={{
                                    width: "120px",
                                    height: "120px",
                                    borderRadius: "50%",
                                    backgroundColor: "#f5f5f5",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    mb: 3,
                                    overflow: "hidden",
                                }}
                            >
                                <img
                                    src="https://img.freepik.com/premium-vector/construction-project-manager-hard-hat_23-2148614326.jpg"
                                    alt="Project Manager"
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                    }}
                                />
                            </Box>

                            {/* Role Title */}
                            <Typography
                                variant="h5"
                                sx={{
                                    fontWeight: 600,
                                    color: theme.palette.text.primary,
                                    mb: 2,
                                    fontSize: { xs: "1rem", md: "1.1rem" },
                                }}
                            >
                                The Project Manager (PM)
                            </Typography>

                            {/* Description */}
                            <Typography
                                variant="body2"
                                sx={{
                                    color: theme.palette.text.secondary,
                                    lineHeight: 1.6,
                                    fontSize: { xs: "0.85rem", md: "0.9rem" },
                                }}
                            >
                                Your Project execution. They make it their life's mission to get your home ready in time.
                            </Typography>
                        </Box>
                    </Box>
                </Container>
            </Box>

            {/* Quote Form Section */}
            <QuoteForm />

            {/* Quote Form Modal */}
            <Modal
                open={isQuoteFormOpen}
                onClose={handleCloseQuoteForm}
                aria-labelledby="quote-form-modal"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    p: 2,
                }}
            >
                <Box
                    sx={{
                        width: { xs: '95%', sm: '90%', md: '80%', lg: '70%' },
                        maxWidth: '800px',
                        maxHeight: '90vh',
                        overflow: 'auto',
                        backgroundColor: 'white',
                        borderRadius: 2,
                        boxShadow: 24,
                        outline: 'none',
                        position: 'relative',
                    }}
                >
                    {/* Cancel Button */}
                    <IconButton
                        onClick={handleCloseQuoteForm}
                        sx={{
                            position: 'absolute',
                            top: 8,
                            right: 8,
                            zIndex: 1,
                            backgroundColor: theme.palette.primary.main,
                            color: theme.palette.primary.contrastText,
                            '&:hover': {
                                backgroundColor: theme.palette.primary.dark,
                                transform: 'scale(1.05)',
                            },
                            width: 36,
                            height: 36,
                            transition: 'all 0.2s ease-in-out',
                            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
                        }}
                        aria-label="close"
                    >
                        <CloseIcon sx={{ fontSize: 20 }} />
                    </IconButton>

                    <QuoteForm />
                </Box>
            </Modal>
        </div>
    );
}