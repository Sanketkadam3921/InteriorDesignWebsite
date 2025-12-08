import React from "react";
import { Box, Typography, styled } from "@mui/material";
import homeIcon from "../../../../../assets/LuxuryInterior4Icons/home-1.svg";
import qualityIcon from "../../../../../assets/LuxuryInterior4Icons/quality.svg";
import modernDesignIcon from "../../../../../assets/LuxuryInterior4Icons/ModernAndStylishDesign.svg";
import ontimeIcon from "../../../../../assets/LuxuryInterior4Icons/Ontime.svg";

const FeatureItemStyled = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  minWidth: "180px",
  flex: "1 1 auto",
  [theme.breakpoints.between("sm", "md")]: {
    minWidth: "140px",
    flex: "1 1 calc(25% - 16px)",
    maxWidth: "200px",
  },
  [theme.breakpoints.down("sm")]: {
    minWidth: "150px",
    flex: "1 1 100%",
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
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "40px",
  height: "40px",
  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    filter: "brightness(0) invert(1)",
  },
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
  "home-1.svg": homeIcon,
  "quality.svg": qualityIcon,
  "ModernAndStylishDesign.svg": modernDesignIcon,
  "Ontime.svg": ontimeIcon,
};

export default function FeatureItem({ icon, text }) {
  const iconSrc = iconMap[icon] || homeIcon;

  return (
    <FeatureItemStyled>
      <HexagonalIcon>
        <IconWrapper>
          <img src={iconSrc} alt={text} />
        </IconWrapper>
      </HexagonalIcon>
      <FeatureText>{text}</FeatureText>
    </FeatureItemStyled>
  );
}












