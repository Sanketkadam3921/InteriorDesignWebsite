import React from "react";
import { Box, Typography, styled } from "@mui/material";

const QuadrantItemStyled = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3.5),
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  textAlign: "left",
  minHeight: "220px",
  position: "relative",
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius * 2,
  boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
  border: `1px solid ${theme.palette.divider}`,
  [theme.breakpoints.down("lg")]: {
    padding: theme.spacing(3),
  },
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2.5),
    minHeight: "unset",
  },
}));

const QuadrantTitle = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontWeight: "bold",
  marginBottom: theme.spacing(1.5),
  fontSize: "1.25rem",
  [theme.breakpoints.down("md")]: {
    fontSize: "1.1rem",
    marginBottom: theme.spacing(1),
  },
}));

const QuadrantDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
  lineHeight: 1.6,
  fontSize: "1rem",
  [theme.breakpoints.down("md")]: {
    fontSize: "0.9rem",
    lineHeight: 1.4,
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












