import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { keyframes } from "@mui/system";

export default function Testimonials() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const testimonials = [
    {
      name: "Rohan & Priya Mehta",
      location: "Pune",
      quote:
        "Livspace turned our small 2BHK into a luxurious and cozy home! The design team was professional, attentive, and incredibly creative. The estimation process was smooth and transparent.",
    },
    {
      name: "Aditi Sharma",
      location: "Mumbai",
      quote:
        "The modular kitchen estimator helped us budget our renovation perfectly. The team executed the design beautifully — our kitchen is now the heart of our home!",
    },
    {
      name: "Vikram Desai",
      location: "Mumbai",
      quote:
        "I was amazed by how precise the wardrobe estimator was! The final cost was nearly identical to the estimate. Great attention to detail and craftsmanship by the team.",
    },
    {
      name: "Sneha Kadam",
      location: "Pune",
      quote:
        "From consultation to delivery, everything was perfectly managed. The designs are stunning, and the quality is top-notch. Highly recommend this team for modern interiors.",
    },
  ];

  // Create multiple duplicates for truly endless seamless loop
  // We create 3 sets so when animation moves 33.33%, it seamlessly loops
  const duplicatedTestimonials = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ];

  // Smooth endless scrolling animation
  // Moves exactly 33.33% (one set out of three), creating seamless infinite loop
  // When it reaches 33.33% and loops back to 0%, the content is identical
  const scroll = keyframes`
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(-33.333%);
        }
    `;

  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        backgroundColor: theme.palette.grey[50],
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg">
        {/* Title Section */}
        <Box textAlign="center" mb={6}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              color: theme.palette.text.primary,
              fontSize: { xs: "2rem", md: "2.5rem" },
              mb: 2,
            }}
          >
            What Our Clients Say
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: theme.palette.text.secondary,
              maxWidth: 700,
              mx: "auto",
              lineHeight: 1.7,
              fontSize: { xs: "1rem", md: "1.1rem" },
            }}
          >
            Hear from homeowners who transformed their spaces with our design
            expertise.
          </Typography>
        </Box>

        {/* Auto-scrolling Section */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            overflow: "hidden",
            py: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: 3,
              width: "max-content",
              animation: `${scroll} ${
                isMobile ? "40s" : "60s"
              } linear infinite`,
              "&:hover": {
                animationPlayState: "paused",
              },
            }}
          >
            {duplicatedTestimonials.map((t, i) => (
              <Box
                key={i}
                sx={{
                  flex: "0 0 auto",
                  width: { xs: "280px", sm: "360px", md: "450px" },
                }}
              >
                <Card
                  elevation={0}
                  sx={{
                    borderRadius: 3,
                    p: { xs: 3, md: 4 },
                    height: "100%",
                    backgroundColor: theme.palette.background.paper,
                    border: `1px solid ${theme.palette.divider}`,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                    position: "relative",
                    "&:hover": {
                      boxShadow: "0 12px 40px rgba(0,0,0,0.08)",
                      transform: "translateY(-6px)",
                      borderColor: theme.palette.primary.light,
                    },
                  }}
                >
                  {/* Quote Icon */}
                  <Box
                    sx={{
                      position: "absolute",
                      top: 16,
                      right: 16,
                      opacity: 0.1,
                    }}
                  >
                    <FormatQuoteIcon
                      sx={{
                        fontSize: { xs: 48, md: 64 },
                        color: theme.palette.primary.main,
                      }}
                    />
                  </Box>

                  <CardContent sx={{ p: 0 }}>
                    <Typography
                      variant="body1"
                      sx={{
                        color: theme.palette.text.secondary,
                        lineHeight: 1.8,
                        fontSize: { xs: "0.95rem", md: "1.05rem" },
                        fontStyle: "italic",
                        mb: 4,
                        position: "relative",
                        zIndex: 1,
                      }}
                    >
                      "{t.quote}"
                    </Typography>

                    <Box
                      sx={{
                        pt: 3,
                        borderTop: `1px solid ${theme.palette.divider}`,
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          color: theme.palette.text.primary,
                          fontSize: { xs: "1rem", md: "1.1rem" },
                          mb: 0.5,
                        }}
                      >
                        {t.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: theme.palette.text.secondary,
                          fontSize: "0.9rem",
                        }}
                      >
                        {t.location}
                      </Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Box>

          {/* Gradient overlays for smooth edges */}
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: { xs: "60px", md: "100px" },
              height: "100%",
              background: `linear-gradient(to right, ${theme.palette.grey[50]}, transparent)`,
              pointerEvents: "none",
              zIndex: 1,
            }}
          />
          <Box
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
              width: { xs: "60px", md: "100px" },
              height: "100%",
              background: `linear-gradient(to left, ${theme.palette.grey[50]}, transparent)`,
              pointerEvents: "none",
              zIndex: 1,
            }}
          />
        </Box>

        {/* Instruction text */}
        <Box textAlign="center" mt={4}>
          <Typography
            variant="body2"
            sx={{
              color: theme.palette.text.secondary,
              fontSize: "0.875rem",
              fontStyle: "italic",
            }}
          >
            {isMobile ? "Tap any card to pause" : ""}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
