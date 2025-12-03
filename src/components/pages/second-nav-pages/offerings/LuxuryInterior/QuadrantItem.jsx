import React from "react";
import { Box, Typography, styled } from "@mui/material";

const QuadrantItemStyled = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4),
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  minHeight: "250px",
  position: "relative",
  [theme.breakpoints.down("lg")]: {
    padding: theme.spacing(3),
    minHeight: "220px",
  },
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2),
    minHeight: "180px",
  },
}));

const QuadrantTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontWeight: "bold",
  marginBottom: theme.spacing(1),
  fontSize: "1.2rem",
  [theme.breakpoints.down("md")]: {
    fontSize: "1.1rem",
    marginBottom: theme.spacing(0.5),
  },
}));

const QuadrantDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  lineHeight: 1.4,
  fontSize: "0.95rem",
  marginTop: theme.spacing(0.5),
  [theme.breakpoints.down("md")]: {
    fontSize: "0.9rem",
    lineHeight: 1.3,
    marginTop: theme.spacing(0.25),
  },
}));

export default function QuadrantItem({ title, description }) {
  return (
    <QuadrantItemStyled>
      <QuadrantTitle variant="h6">{title}</QuadrantTitle>
      <QuadrantDescription variant="body1">{description}</QuadrantDescription>
    </QuadrantItemStyled>
  );
}










