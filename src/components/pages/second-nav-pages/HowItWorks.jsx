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
  backgroundImage: `url('https://ik.imagekit.io/bowr9614/Process/ProcessHeroSection.jpg')`,
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
      title: "Meeting",
      icon: "https://i.pinimg.com/736x/b8/1e/75/b81e750277ed829e23591d9645d408da.jpg",
      description:
        "Our journey begins with an in-depth consultation where we take the time to truly understand you — your vision, lifestyle, and aesthetic preferences. During this discussion, we explore your functional needs, budget expectations, and desired ambiance for the space. Whether you have a clear idea or are seeking expert guidance, our team helps you define your goals and design direction. This meeting sets the foundation for a smooth and successful design process, ensuring every decision aligns with your personality and comfort.",
      image:
        "https://plus.unsplash.com/premium_photo-1661503228332-03778ab6d6a1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
    },
    {
      id: 2,
      title: "Client Visit",
      icon: "https://cdn-icons-png.flaticon.com/128/2196/2196647.png",
      description:
        "After understanding your vision, our design experts visit your location to experience the space firsthand. We carefully analyze your home or office layout, lighting conditions, wall structure, and existing décor elements. This visit helps us identify design opportunities, technical constraints, and creative possibilities unique to your space. We also discuss material options, color palettes, and potential layouts, ensuring that our design reflects both functionality and style. The goal is to turn your environment into a space that feels distinctly yours.",
      image:
        "https://i.pinimg.com/1200x/ae/85/cb/ae85cbd92bb4e13215bcf2cd57920534.jpg",
    },
    {
      id: 3,
      title: "Measurement",
      icon: "https://cdn-icons-png.flaticon.com/128/335/335446.png",
      description:
        "Accuracy is key to a flawless design. Our team takes precise, on-site measurements of your space — from wall lengths and ceiling heights to window placements and utility points. These details allow us to create a technical blueprint that guides every step of design and execution. This meticulous process ensures that furniture, cabinetry, and décor elements fit perfectly within your space, eliminating errors and avoiding costly modifications later. It's the backbone of our promise for a seamless transformation.",
      image:
        "https://plus.unsplash.com/premium_photo-1672256330251-a0432595f9cc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1469",
    },
    {
      id: 4,
      title: "Quotation",
      icon: "https://cdn-icons-png.flaticon.com/128/12320/12320857.png",
      description:
        "Transparency and trust are at the heart of our process. Based on the finalized design plan and measurements, we provide a detailed quotation outlining costs, material choices, and a clear project timeline. Every aspect — from furniture and finishes to labor and installation — is itemized to help you make informed decisions. We walk you through the quotation, clarifying every detail so there are no hidden surprises. You'll have a complete understanding of how your investment translates into quality and craftsmanship.",
      image:
        "https://plus.unsplash.com/premium_photo-1661375171387-a40f423f465d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
    },
    {
      id: 5,
      title: "Payment",
      icon: "https://cdn-icons-png.flaticon.com/128/1019/1019709.png",
      description:
        "Once you approve the quotation, our skilled design and execution team begins bringing your dream space to life. We manage every stage — from sourcing premium materials and coordinating with contractors to overseeing on-site work with precision. Our team ensures that each element aligns with the approved design plan while maintaining the highest standards of quality. Regular updates keep you informed at every milestone. The result? A beautifully crafted space that captures your vision, elevates your lifestyle, and feels like home the moment you step in.",
      image:
        "https://plus.unsplash.com/premium_photo-1682086494580-e84624f7cb51?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
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
      <Box
        sx={{
          py: { xs: 6, md: 10 },
          textAlign: "left",
          backgroundColor: theme.palette.background.paper,
          px: { xs: 3, sm: 4, md: 6 },
        }}
      >
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
              display: "flex",
              justifyContent: "center",
              alignItems: "stretch",
              flexWrap: "wrap",
              gap: { xs: 3, md: 5 },
              mb: 4,
            }}
          >
            {steps.map((step, index) => (
              <Box
                key={step.id}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  flex: { xs: "1 1 40%", md: "1 1 15%" },
                  backgroundColor: theme.palette.background.paper,
                  borderRadius: 2,
                  boxShadow: "0 3px 8px rgba(0,0,0,0.08)",
                  p: 2.5,
                  position: "relative",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 5px 14px rgba(0,0,0,0.12)",
                  },
                }}
              >
                {/* Step Number Badge */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 10,
                    left: 10,
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.primary.contrastText,
                    fontWeight: 600,
                    fontSize: "0.9rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
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
                    backgroundColor: "#fff",
                    mb: 1.5,
                    boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
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
                    fontSize: { xs: "0.95rem", md: "1rem" },
                  }}
                >
                  {step.title}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* Call to Action Button */}
          {/* <Box sx={{ textAlign: "center" }}>
            <CTAButton
              variant="contained"
              size="large"
              sx={{
                px: 6,
                py: 1.5,
                fontSize: "1rem",
                fontWeight: 600,
                borderRadius: 8,
                textTransform: "none",
                whiteSpace: "nowrap",
                "&:hover": {
                  backgroundColor: theme.palette.primary.dark,
                  transform: "translateY(-2px)",
                },
              }}
            >
              BOOK FREE CONSULTATION
            </CTAButton>
          </Box> */}
        </Container>
      </Box>

      {/* Process Steps Sections */}
      {steps.map((step, index) => (
        <Box
          key={step.id}
          sx={{
            py: { xs: 6, md: 10 },
            backgroundColor:
              index % 2 === 0
                ? theme.palette.background.default
                : theme.palette.background.paper,
            textAlign: "left",
            px: { xs: 3, sm: 4, md: 6 },
          }}
        >
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
              {/* Left Side - Illustration (alternates based on index) */}
              <Box
                sx={{
                  flex: "0 0 50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  order: index % 2 === 0 ? 1 : 2,
                  [theme.breakpoints.down("md")]: {
                    flex: "none",
                    width: "100%",
                    order: 1,
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
                    src={step.image}
                    alt={`${step.title} illustration`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "12px",
                    }}
                  />
                </Box>
              </Box>

              {/* Right Side - Process Step Content */}
              <Box
                sx={{
                  flex: "0 0 50%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  order: index % 2 === 0 ? 2 : 1,
                  [theme.breakpoints.down("md")]: {
                    flex: "none",
                    width: "100%",
                    order: 2,
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
                  {step.title}
                </Typography>

                <ProcessStep>
                  <StepBullet />
                  <Box sx={{ flex: 1 }}>
                    <Typography
                      variant="body1"
                      sx={{
                        color: theme.palette.text.secondary,
                        lineHeight: 1.6,
                        fontSize: { xs: "0.9rem", md: "1rem" },
                      }}
                    >
                      {step.description}
                    </Typography>
                  </Box>
                </ProcessStep>
              </Box>
            </Box>
          </Container>
        </Box>
      ))}

      {/* Success Banner */}

      {/* Main Content Section */}
      <Box
        sx={{
          py: { xs: 6, md: 10 },
          textAlign: "left",
          backgroundColor: theme.palette.background.paper,
          px: { xs: 3, sm: 4, md: 1 },
        }}
      >
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
              Working Process
            </Typography>
          </Box>

          {/* Steps Section */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "stretch",
              flexWrap: "wrap",
              gap: { xs: 3, md: 5 },
              mb: 4,
            }}
          >
            {[
              {
                id: 1,
                title: "Civil Work",
                icon: "https://cdn-icons-png.flaticon.com/128/17059/17059652.png",
                description: "Foundation, masonry, and structural tasks.",
              },
              {
                id: 2,
                title: "Electrical Work",
                icon: "https://cdn-icons-png.flaticon.com/128/10396/10396674.png",
                description:
                  "Wiring, lighting, and power setup for your space.",
              },
              {
                id: 3,
                title: "Ceiling Work",
                icon: "https://cdn-icons-png.flaticon.com/128/7444/7444083.png",
                description: "False ceiling and lighting panel installations.",
              },
              {
                id: 4,
                title: "Furniture",
                icon: "https://cdn-icons-png.flaticon.com/128/2590/2590393.png",
                description:
                  "Customized furniture built and installed with precision.",
              },
              {
                id: 5,
                title: "Hand Over",
                icon: "https://cdn-icons-png.flaticon.com/128/8083/8083015.png",
                description:
                  "Final inspection and handover of your dream interior.",
              },
            ].map((step, index) => (
              <Box
                key={step.id}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  flex: { xs: "1 1 40%", md: "1 1 15%" },
                  backgroundColor: theme.palette.background.paper,
                  borderRadius: 2,
                  boxShadow: "0 3px 8px rgba(0,0,0,0.08)",
                  p: 2.5,
                  position: "relative",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 5px 14px rgba(0,0,0,0.12)",
                  },
                }}
              >
                {/* Step Number Badge */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 10,
                    left: 10,
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.primary.contrastText,
                    fontWeight: 600,
                    fontSize: "0.9rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
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
                    backgroundColor: "#fff",
                    mb: 1.5,
                    boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
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
                    fontSize: { xs: "0.95rem", md: "1rem" },
                  }}
                >
                  {step.title}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* Call to Action Button */}
          <Box sx={{ textAlign: "center" }}></Box>
        </Container>
      </Box>

      {/* Understand Your Order Types Section */}

      {/* The Team Section */}

      {/* Quote Form Section */}

      {/* Quote Form Modal */}
      <Modal
        open={isQuoteFormOpen}
        onClose={handleCloseQuoteForm}
        aria-labelledby="quote-form-modal"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 2,
        }}
      >
        <Box
          sx={{
            width: { xs: "95%", sm: "90%", md: "80%", lg: "70%" },
            maxWidth: "800px",
            maxHeight: "90vh",
            overflow: "auto",
            backgroundColor: "white",
            borderRadius: 2,
            boxShadow: 24,
            outline: "none",
            position: "relative",
          }}
        >
          {/* Cancel Button */}
          <IconButton
            onClick={handleCloseQuoteForm}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              zIndex: 1,
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
              "&:hover": {
                backgroundColor: theme.palette.primary.dark,
                transform: "scale(1.05)",
              },
              width: 36,
              height: 36,
              transition: "all 0.2s ease-in-out",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
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
