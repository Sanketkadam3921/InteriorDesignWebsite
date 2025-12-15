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

const IconCircle = styled(Box)(({ theme }) => ({
  width: 72,
  height: 72,
  borderRadius: "50%",
  backgroundColor: theme.palette.background.default,
  border: `2px solid ${theme.palette.primary.main}`,
  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(1.25),
  marginBottom: theme.spacing(2),
  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
}));

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
      <IconCircle>
        <img src={iconSrc} alt={text} />
      </IconCircle>
      <FeatureText>{text}</FeatureText>
    </FeatureItemStyled>
  );
}












