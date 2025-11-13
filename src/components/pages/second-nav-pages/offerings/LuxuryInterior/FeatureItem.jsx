import React from "react";
import { Box, Typography, styled } from "@mui/material";
import SettingsIcon from "@mui/icons-material/Settings";
import BuildIcon from "@mui/icons-material/Build";
import PaletteIcon from "@mui/icons-material/Palette";
import StarIcon from "@mui/icons-material/Star";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

const FeatureItemStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  minWidth: "180px",
  [theme.breakpoints.down("md")]: {
    minWidth: "150px",
  },
}));

const HexagonalIcon = styled(Box)(({ theme }) => ({
  width: "80px",
  height: "80px",
  position: "relative",
  marginBottom: theme.spacing(2),
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: theme.palette.secondary.main,
    clipPath: "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)",
    border: `2px solid ${theme.palette.secondary.dark}`,
    zIndex: 1,
  },
  "&::after": {
    content: '""',
    position: "absolute",
    top: "8px",
    left: "8px",
    right: "8px",
    bottom: "8px",
    backgroundColor: theme.palette.secondary.dark,
    clipPath: "polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)",
    zIndex: 2,
  },
}));

const IconWrapper = styled(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 3,
  color: "white",
  fontSize: "24px",
});

const FeatureText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: "0.9rem",
  fontWeight: "500",
  lineHeight: 1.4,
  [theme.breakpoints.down("md")]: {
    fontSize: "0.85rem",
  },
}));

const iconMap = {
  Settings: SettingsIcon,
  Build: BuildIcon,
  Palette: PaletteIcon,
  Star: StarIcon,
  LocalShipping: LocalShippingIcon,
};

export default function FeatureItem({ icon, text }) {
  const IconComponent = iconMap[icon] || SettingsIcon;

  return (
    <FeatureItemStyled>
      <HexagonalIcon>
        <IconWrapper>
          <IconComponent />
        </IconWrapper>
      </HexagonalIcon>
      <FeatureText>{text}</FeatureText>
    </FeatureItemStyled>
  );
}



