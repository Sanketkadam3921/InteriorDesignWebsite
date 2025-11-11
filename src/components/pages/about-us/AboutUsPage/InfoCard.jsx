import { Box, Typography, Paper } from "@mui/material";

export default function InfoCard({ title, description, titleColor }) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 4,
        borderRadius: 3,
        background: "linear-gradient(135deg, #ffffff, #fafafa)",
        boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
        transition: "all 0.3s ease",
        cursor: "default",
        "&:hover": {
          boxShadow: "0 12px 28px rgba(0,0,0,0.12)",
          transform: "translateY(-4px)",
        },
      }}
    >
      {/* Title */}
      <Typography
        variant="h6"
        sx={{
          fontWeight: 700,
          color: titleColor || "#333",
          mb: 1,
        }}
      >
        {title}
      </Typography>

      {/* Accent line */}
      <Box
        sx={{
          width: 40,
          height: 3,
          backgroundColor: "#8d8883ff",
          borderRadius: 2,
          mb: 2,
        }}
      />

      {/* Description */}
      <Typography
        variant="body1"
        sx={{
          color: "#555",
          lineHeight: 1.7,
          fontSize: "15.5px",
        }}
      >
        {description}
      </Typography>
    </Paper>
  );
}
