import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Container,
  Avatar,
  useTheme,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useNavigate } from "react-router-dom"; // ✅ Import navigation hook

// ✅ Image icons (you can replace these with your brand ones later)
const estimateOptions = [
  {
    id: "home",
    title: "Full Home Interior",
    description: "Know the estimated price for your full home interiors.",
    icon: "https://cdn-icons-png.flaticon.com/128/263/263115.png", // 🏠 Home icon
    path: "/price-calculators/home/calculator/bhk",
  },
  {
    id: "kitchen",
    title: "Kitchen",
    description:
      "Get an approximate costing for your kitchen interior, tailored to your layout.",
    icon: "https://cdn-icons-png.flaticon.com/128/2851/2851928.png", // 🍳 Kitchen icon
    path: "/price-calculators/kitchen/calculator/layout",
  },
  {
    id: "wardrobe",
    title: "Wardrobe",
    description:
      "Our estimate for your dream wardrobe design with modern storage options.",
    icon: "https://cdn-icons-png.flaticon.com/128/2337/2337984.png", // 🚪 Wardrobe icon
    path: "/price-calculators/wardrobe/calculator/length",
  },
];

export default function Estimate() {
  const theme = useTheme();
  const navigate = useNavigate(); // ✅ Initialize navigation

  return (
    <Box sx={{ py: 8, backgroundColor: theme.palette.background.paper }}>
      <Container maxWidth="lg">
        {/* Heading */}
        <Box sx={{ textAlign: "center", mb: 2 }}>
          <Typography
            variant="h3"
            fontWeight={700}
            color="text.primary"
            sx={{
              fontSize: { xs: "1.8rem", md: "3rem" }, // 👈 smaller text for mobile
            }}
          >
            Calculate the estimate
          </Typography>
        </Box>

        {/* Subheading */}
        <Typography
          variant="h6"
          textAlign="center"
          color="text.secondary"
          mb={8}
          fontWeight={400}
        >
          Calculate the approximate cost of doing up your home interiors
        </Typography>

        {/* Estimate Steps Row */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "center",
            gap: { xs: 6, md: 4 },
            position: "relative",
          }}
        >
          {estimateOptions.map((option, index) => (
            <Box
              key={option.id}
              sx={{
                flex: 1,
                maxWidth: 340,
                textAlign: "center",
                position: "relative",
              }}
            >
              {/* Icon with connector line */}
              <Box
                sx={{
                  position: "relative",
                  mb: 3,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  "&::after": {
                    content: index < estimateOptions.length - 1 ? '""' : "none",
                    position: "absolute",
                    top: "50%",
                    right: "-50%",
                    width: "100%",
                    height: "2px",
                    backgroundColor: theme.palette.text.secondary,
                    transform: "translateY(-50%)",
                    zIndex: 0,
                    display: { xs: "none", md: "block" },
                  },
                }}
              >
                <Avatar
                  src={option.icon}
                  alt={option.title}
                  sx={{
                    width: 90,
                    height: 90,
                    backgroundColor: theme.palette.background.default,
                    border: `1px solid ${theme.palette.text.secondary}`,
                    boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
                    p: 2,
                    zIndex: 1,
                  }}
                />
              </Box>

              {/* Card Content */}
              <Card
                sx={{
                  boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                  borderRadius: 3,
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                  },
                }}
              >
                <CardContent
                  sx={{
                    p: 4,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  {/* Title */}
                  <Typography
                    variant="h5"
                    fontWeight={700}
                    mb={2}
                    color="text.primary"
                  >
                    {option.title}
                  </Typography>

                  {/* Description */}
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    mb={4}
                    sx={{ lineHeight: 1.6 }}
                  >
                    {option.description}
                  </Typography>

                  {/* Button with Navigation */}
                  <Button
                    variant="contained"
                    endIcon={<ChevronRightIcon />}
                    onClick={() => navigate(option.path)} // ✅ Navigate to calculator
                    sx={{
                      backgroundColor: theme.palette.primary.main,
                      color: theme.palette.primary.contrastText,
                      py: 1.5,
                      px: 4,
                      borderRadius: 50,
                      textTransform: "uppercase",
                      fontWeight: 600,
                      fontSize: "0.95rem",
                      letterSpacing: "0.5px",
                      boxShadow: `0 4px 12px ${theme.palette.primary.main}30`,
                      "&:hover": {
                        backgroundColor: theme.palette.primary.dark,
                        boxShadow: `0 6px 16px ${theme.palette.primary.main}40`,
                      },
                    }}
                  >
                    Calculate
                  </Button>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
