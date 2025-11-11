import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
  useTheme,
  Stack,
  Divider,
  Paper,
} from "@mui/material";
import {
  Engineering,
  AutoFixHigh,
  Speed,
  Security,
  CheckCircle,
  ArrowForward,
  Build,
  Science,
  LocalShipping,
  Construction,
} from "@mui/icons-material";

export default function ModularJourney() {
  const theme = useTheme();

  const highlights = [
    {
      icon: (
        <Engineering sx={{ fontSize: 40, color: theme.palette.primary.main }} />
      ),
      title: "Precision Engineering",
      description:
        "Engineered for accuracy and built for perfection — every component is crafted using automated manufacturing systems.",
      metrics: "99.99% Build Accuracy",
    },
    {
      icon: (
        <Science sx={{ fontSize: 40, color: theme.palette.secondary.main }} />
      ),
      title: "4-Sigma Process",
      description:
        "Our design-to-manufacture process ensures 99.99% build accuracy, minimizing errors and ensuring consistency.",
      metrics: "54,000 Cabinets/Month",
    },
    {
      icon: <Speed sx={{ fontSize: 40, color: theme.palette.success.main }} />,
      title: "High-Volume Capacity",
      description:
        "High-volume capacity ensures timely delivery and industry-leading scalability for large-scale projects.",
      metrics: "10-Year Warranty",
    },
  ];

  const durabuildFeatures = [
    {
      icon: <Build />,
      title: "Advanced Connector Mechanism",
      description:
        "Robust cabinet structure with precision-engineered connectors for maximum stability.",
    },
    {
      icon: <Security />,
      title: "Enhanced Stability",
      description:
        "Chipboard screws with PVC sockets ensure long-lasting structural integrity.",
    },
    {
      icon: <CheckCircle />,
      title: "Soft-Closing Hinges",
      description:
        "Reduces vibration and wear while providing smooth, silent operation.",
    },
    {
      icon: <Construction />,
      title: "Heavy-Duty Support",
      description:
        "PVC legs supporting up to 350kg load capacity for maximum durability.",
    },
    {
      icon: <LocalShipping />,
      title: "Moisture Protection",
      description:
        "Design gap from wall prevents dampness transfer and maintains cabinet integrity.",
    },
  ];

  const manufacturingSteps = [
    {
      step: "01",
      title: "Design Excellence",
      subtitle: "From Vision to Blueprint",
      description:
        "Your dream begins with design. Our proprietary tools convert 2D to 3D designs for complete visualization, ensuring what you see is what you get.",
      features: [
        "3D Visualization",
        "Real-time Rendering",
        "Material Selection",
      ],
    },
    {
      step: "02",
      title: "Material Selection",
      subtitle: "Quality at the Source",
      description:
        "Only the best raw materials are sourced and tested for moisture, strength, and emissions — certified by NABL-accredited labs.",
      features: ["NABL Certification", "Quality Testing", "Emission Standards"],
    },
    {
      step: "03",
      title: "Precision Manufacturing",
      subtitle: "Automated Excellence",
      description:
        "Machine-readable files guide automated production lines with QR-coded panels for zero error and perfect alignment.",
      features: [
        "QR-Coded Panels",
        "Zero Error Production",
        "Perfect Alignment",
      ],
    },
    {
      step: "04",
      title: "Quality Assurance",
      subtitle: "Perfection Through Inspection",
      description:
        "Every panel undergoes a meticulous quality check for finish, dimensions, and color accuracy before packaging.",
      features: [
        "Multi-point Inspection",
        "Color Accuracy",
        "Dimension Verification",
      ],
    },
    {
      step: "05",
      title: "Secure Packaging",
      subtitle: "Protection Guaranteed",
      description:
        "Each component is flat-packed with bubble wrap, edge protectors, and durability-tested packaging to ensure safe transit.",
      features: ["Flat-pack Design", "Edge Protection", "Durability Testing"],
    },
    {
      step: "06",
      title: "Professional Installation",
      subtitle: "Swift & Efficient",
      description:
        "Our trained professionals assemble your modular interiors quickly and efficiently — turning designs into livable spaces.",
      features: ["Trained Professionals", "Quick Assembly", "Final Inspection"],
    },
  ];

  return (
    <Box sx={{ backgroundColor: theme.palette.background.default }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: `linear-gradient(135deg, rgba(25, 118, 210, 0.9), rgba(156, 39, 176, 0.8)), url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400') center/cover`,
          color: "white",
          py: { xs: 8, md: 12 },
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", position: "relative", zIndex: 2 }}>
            <Chip
              label="Innovation in Manufacturing"
              sx={{
                backgroundColor: "rgba(255,255,255,0.2)",
                color: "white",
                mb: 3,
                fontWeight: 600,
              }}
            />
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                mb: 3,
                fontSize: { xs: "2.5rem", md: "3.5rem" },
                lineHeight: 1.2,
              }}
            >
              The Modular Journey
            </Typography>
            <Typography
              variant="h5"
              sx={{
                maxWidth: 800,
                mx: "auto",
                lineHeight: 1.6,
                color: "rgba(255,255,255,0.9)",
                fontWeight: 400,
              }}
            >
              Experience how technology, design, and precision engineering come
              together to create high-quality, error-free modular interiors —
              designed, built, and installed with perfection.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Key Highlights Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h4"
            fontWeight={700}
            sx={{ color: theme.palette.text.primary, mb: 2 }}
          >
            Why Choose Our Modular Process?
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ maxWidth: 600, mx: "auto" }}
          >
            Three pillars that define our commitment to excellence
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {highlights.map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  borderRadius: 3,
                  height: "100%",
                  textAlign: "center",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
                  transition: "all 0.3s ease",
                  border: "1px solid rgba(0,0,0,0.05)",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 16px 48px rgba(0,0,0,0.12)",
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ mb: 3 }}>{item.icon}</Box>
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: 700,
                      mb: 2,
                      color: theme.palette.text.primary,
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: theme.palette.text.secondary,
                      lineHeight: 1.7,
                      mb: 3,
                    }}
                  >
                    {item.description}
                  </Typography>
                  <Chip
                    label={item.metrics}
                    sx={{
                      backgroundColor: theme.palette.primary.main,
                      color: "white",
                      fontWeight: 600,
                    }}
                  />
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* DuraBuild Section */}
      <Box
        sx={{ backgroundColor: theme.palette.grey[50], py: { xs: 8, md: 10 } }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: "center", mb: 6 }}>
            <Typography
              variant="h4"
              fontWeight={700}
              sx={{ color: theme.palette.text.primary, mb: 2 }}
            >
              DuraBuild™ Cabinets
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ maxWidth: 800, mx: "auto", mb: 2 }}
            >
              Built for a Lifetime
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ maxWidth: 600, mx: "auto" }}
            >
              Our modular products come with a 10-year warranty — a result of
              rigorous R&D and precision manufacturing that ensures durability
              and strength you can rely on.
            </Typography>
          </Box>

          <Grid container spacing={3}>
            {durabuildFeatures.map((feature, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Paper
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    height: "100%",
                    border: "1px solid rgba(0,0,0,0.05)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  <Stack direction="row" spacing={2} alignItems="flex-start">
                    <Box
                      sx={{
                        backgroundColor: theme.palette.primary.main,
                        color: "white",
                        borderRadius: 2,
                        p: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      {feature.icon}
                    </Box>
                    <Box>
                      <Typography
                        variant="h6"
                        fontWeight={600}
                        sx={{ mb: 1, color: theme.palette.text.primary }}
                      >
                        {feature.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ lineHeight: 1.6 }}
                      >
                        {feature.description}
                      </Typography>
                    </Box>
                  </Stack>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Manufacturing Process Section */}
      <Container maxWidth="lg" sx={{ py: { xs: 8, md: 10 } }}>
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h4"
            fontWeight={700}
            sx={{ color: theme.palette.text.primary, mb: 2 }}
          >
            The Manufacturing Process
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ maxWidth: 800, mx: "auto" }}
          >
            Behind the Scenes — Every cabinet, panel, and surface goes through a
            carefully orchestrated process combining advanced automation and
            human craftsmanship.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {manufacturingSteps.map((step, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card
                sx={{
                  borderRadius: 3,
                  p: 4,
                  height: "100%",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
                  border: "1px solid rgba(0,0,0,0.05)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    boxShadow: "0 12px 40px rgba(0,0,0,0.12)",
                    transform: "translateY(-4px)",
                  },
                }}
              >
                <Box sx={{ mb: 3 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 800,
                      color: theme.palette.primary.main,
                      mb: 1,
                      fontSize: "1.2rem",
                    }}
                  >
                    {step.step}
                  </Typography>
                  <Typography
                    variant="h5"
                    fontWeight={700}
                    sx={{ color: theme.palette.text.primary, mb: 1 }}
                  >
                    {step.title}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    sx={{ mb: 2, fontWeight: 500 }}
                  >
                    {step.subtitle}
                  </Typography>
                </Box>

                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ lineHeight: 1.7, mb: 3 }}
                >
                  {step.description}
                </Typography>

                <Divider sx={{ my: 2 }} />

                <Box>
                  <Typography
                    variant="subtitle2"
                    fontWeight={600}
                    sx={{ mb: 1, color: theme.palette.text.primary }}
                  >
                    Key Features:
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                    {step.features.map((feature, featureIndex) => (
                      <Chip
                        key={featureIndex}
                        label={feature}
                        size="small"
                        variant="outlined"
                        sx={{
                          borderColor: theme.palette.primary.main,
                          color: theme.palette.primary.main,
                        }}
                      />
                    ))}
                  </Stack>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* CTA Section */}
      <Box
        sx={{
          background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
          color: "white",
          textAlign: "center",
          py: { xs: 8, md: 10 },
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              mb: 3,
              fontSize: { xs: "2rem", md: "2.8rem" },
            }}
          >
            Ready to Begin Your Modular Journey?
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "rgba(255,255,255,0.9)",
              mb: 4,
              lineHeight: 1.6,
              fontWeight: 400,
            }}
          >
            Let's transform your ideas into a space that's functional,
            beautiful, and built to last. Experience the difference of precision
            manufacturing.
          </Typography>
          <Button
            variant="contained"
            size="large"
            endIcon={<ArrowForward />}
            sx={{
              backgroundColor: "white",
              color: theme.palette.primary.main,
              fontWeight: 700,
              px: 4,
              py: 1.5,
              borderRadius: 3,
              fontSize: "1.1rem",
              textTransform: "none",
              boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
              "&:hover": {
                backgroundColor: theme.palette.grey[100],
                transform: "translateY(-2px)",
                boxShadow: "0 12px 32px rgba(0,0,0,0.2)",
              },
            }}
            onClick={() => (window.location.href = "/contact")}
          >
            Book Free Consultation
          </Button>
        </Container>
      </Box>
    </Box>
  );
}
