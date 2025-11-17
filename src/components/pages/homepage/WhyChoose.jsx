import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
  useTheme,
} from "@mui/material";
import { keyframes } from "@emotion/react";

// Animation for smooth left → right scrolling
const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

// ✅ Authentic version for a Pune-based startup
const items = [
  {
    text: "Based in Pune and Mumbai",
    icon: "https://cdn-icons-png.flaticon.com/512/535/535239.png", // 🏙️ City icon
  },
  {
    text: "Trusted by 50+ homeowners",
    icon: "https://cdn-icons-png.flaticon.com/128/1769/1769041.png", // 👩‍🎨 User icon
  },
  {
    text: "End-to-end interior solutions",
    icon: "https://cdn-icons-png.flaticon.com/128/340/340313.png", // 🛋️ Interior icon
  },
  {
    text: "Experienced design team",
    icon: "https://cdn-icons-png.flaticon.com/128/6012/6012670.png", // 👩‍💻 Team icon
  },
  {
    text: "Premium quality materials",
    icon: "https://i.pinimg.com/736x/38/b0/fa/38b0fa9f2d5156973f3167e50aa515e7.jpg", // 🪵 Material icon
  },
  {
    text: "On-time project delivery",
    icon: "https://cdn-icons-png.flaticon.com/128/13670/13670554.png", // ⏱️ Clock/EMI icon
  },
];

export default function WhyChooseUs() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: 6,
        background: theme.palette.background.default,
        overflow: "hidden",
      }}
    >
      {/* Heading */}
      <Typography
        variant="h4"
        fontWeight={700}
        mb={6}
        textAlign="center"
        color="text.primary"
      >
        Why choose us
      </Typography>

      {/* Scrolling Row */}
      <Box
        sx={{
          overflow: "hidden",
          position: "relative",
          "&::before, &::after": {
            content: '""',
            position: "absolute",
            top: 0,
            bottom: 0,
            width: "100px",
            zIndex: 2,
            pointerEvents: "none",
          },
          "&::before": {
            left: 0,
            background: `linear-gradient(to right, ${theme.palette.background.default}, transparent)`,
          },
          "&::after": {
            right: 0,
            background: `linear-gradient(to left, ${theme.palette.background.default}, transparent)`,
          },
        }}
      >
        <Box
          sx={{
            display: "inline-flex",
            gap: 3,
            animation: `${scroll} 40s linear infinite`,
            "@media (hover: hover)": {
              "&:hover": {
                animationPlayState: "paused",
              },
            },
          }}
        >
          {/* Duplicate items for infinite scroll */}
          {[...items, ...items].map((item, i) => (
            <Card
              key={i}
              sx={{
                minWidth: 320,
                minHeight: 140,
                flexShrink: 0,
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                borderRadius: 3,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
                },
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2.5,
                  p: 4,
                  height: "100%",
                }}
              >
                {/* Icon in Avatar */}
                <Avatar
                  src={item.icon}
                  alt={item.text}
                  sx={{
                    width: 72,
                    height: 72,
                    backgroundColor: theme.palette.background.default,
                    border: `1px solid ${theme.palette.text.secondary}`,
                    boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
                    p: 2,
                  }}
                />

                {/* Text */}
                <Typography variant="h6" fontWeight={600} color="text.primary">
                  {item.text}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
