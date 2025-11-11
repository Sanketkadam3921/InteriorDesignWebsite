import React from "react";
import { Box, Typography, Button, styled } from "@mui/material";
import { Link } from "react-router-dom";
import { REFERRAL_DATA } from "./constants";

const ReferralSectionStyled = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(8, 0),
  position: "relative",
  [theme.breakpoints.down("lg")]: {
    padding: theme.spacing(5, 0),
  },
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(4, 0),
  },
}));

const ReferralContainer = styled(Box)(({ theme }) => ({
  maxWidth: "1200px",
  margin: "0 auto",
  padding: theme.spacing(0, 4),
  position: "relative",
  width: "100%",
  overflow: "hidden",
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(0, 2),
    maxWidth: "100%",
  },
}));

const DecorativeBorder = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  bottom: 0,
  width: "60px",
  zIndex: 1,
  "&.left": {
    left: 0,
    background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 100'%3E%3Cdefs%3E%3Cpattern id='diamond' x='0' y='0' width='20' height='20' patternUnits='userSpaceOnUse'%3E%3Cpath d='M10 0L20 10L10 20L0 10Z' fill='none' stroke='${theme.palette.primary.main.replace("#", "%23")}' stroke-width='1'/%3E%3Ccircle cx='10' cy='10' r='2' fill='${theme.palette.primary.main.replace("#", "%23")}'/%3E%3Cpath d='M10 2L12 6L10 10L8 6Z' fill='${theme.palette.primary.main.replace("#", "%23")}'/%3E%3Cpath d='M10 10L12 14L10 18L8 14Z' fill='${theme.palette.primary.main.replace("#", "%23")}'/%3E%3Cpath d='M2 10L6 8L10 10L6 12Z' fill='${theme.palette.primary.main.replace("#", "%23")}'/%3E%3Cpath d='M18 10L14 8L10 10L14 12Z' fill='${theme.palette.primary.main.replace("#", "%23")}'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23diamond)'/%3E%3C/svg%3E") repeat-y`,
    backgroundSize: "60px 20px",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  "&.right": {
    right: 0,
    background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 60 100'%3E%3Cdefs%3E%3Cpattern id='diamond' x='0' y='0' width='20' height='20' patternUnits='userSpaceOnUse'%3E%3Cpath d='M10 0L20 10L10 20L0 10Z' fill='none' stroke='${theme.palette.primary.main.replace("#", "%23")}' stroke-width='1'/%3E%3Ccircle cx='10' cy='10' r='2' fill='${theme.palette.primary.main.replace("#", "%23")}'/%3E%3Cpath d='M10 2L12 6L10 10L8 6Z' fill='${theme.palette.primary.main.replace("#", "%23")}'/%3E%3Cpath d='M10 10L12 14L10 18L8 14Z' fill='${theme.palette.primary.main.replace("#", "%23")}'/%3E%3Cpath d='M2 10L6 8L10 10L6 12Z' fill='${theme.palette.primary.main.replace("#", "%23")}'/%3E%3Cpath d='M18 10L14 8L10 10L14 12Z' fill='${theme.palette.primary.main.replace("#", "%23")}'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23diamond)'/%3E%3C/svg%3E") repeat-y`,
    backgroundSize: "60px 20px",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
}));

const ReferralContent = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  padding: theme.spacing(6, 8),
  position: "relative",
  zIndex: 2,
  [theme.breakpoints.down("md")]: {
    padding: theme.spacing(4, 2),
  },
}));

const ReferralText = styled(Typography)(({ theme }) => ({
  fontFamily: "serif",
  color: theme.palette.text.primary,
  fontSize: "2.5rem",
  fontWeight: "400",
  lineHeight: 1.3,
  marginBottom: theme.spacing(4),
  [theme.breakpoints.down("md")]: {
    fontSize: "2rem",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.5rem",
  },
}));

const ReferralButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(2, 4),
  borderRadius: "8px",
  fontSize: "1.1rem",
  fontWeight: "bold",
  textTransform: "none",
  fontFamily: "sans-serif",
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
    transform: "translateY(-2px)",
    boxShadow: `0 4px 12px ${theme.palette.primary.main}30`,
  },
  transition: "all 0.3s ease",
}));

export default function ReferralSection() {
  return (
    <ReferralSectionStyled>
      <ReferralContainer>
        <DecorativeBorder className="left" />
        <DecorativeBorder className="right" />

        <ReferralContent>
          <ReferralText>{REFERRAL_DATA.text}</ReferralText>
          <ReferralButton component={Link} to={REFERRAL_DATA.ctaLink} size="large">
            {REFERRAL_DATA.ctaText}
          </ReferralButton>
        </ReferralContent>
      </ReferralContainer>
    </ReferralSectionStyled>
  );
}

