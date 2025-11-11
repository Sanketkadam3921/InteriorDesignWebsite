import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  useTheme,
} from "@mui/material";

export default function TimelineItem({ year, title, description }) {
  const theme = useTheme();

  return (
    <Grid item xs={12} md={6}>
      <Card
        elevation={4}
        sx={{
          borderRadius: 4,
          overflow: "hidden",
          background: `linear-gradient(135deg, ${theme.palette.background.paper}, ${theme.palette.action.hover})`,
          transition: "0.3s ease",
          "&:hover": {
            transform: "translateY(-6px)",
            boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
          },
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            alignItems: "flex-start",
            p: 3,
          }}
        >
          {/* YEAR BADGE */}
          <Box
            sx={{
              width: 65,
              height: 65,
              borderRadius: "50%",
              background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mr: 3,
              flexShrink: 0,
              boxShadow: `0 6px 16px rgba(0,0,0,0.25)`,
            }}
          >
            <Typography
              variant="h6"
              sx={{ color: "white", fontWeight: "bold" }}
            >
              {year}
            </Typography>
          </Box>

          {/* TEXT CONTENT */}
          <Box>
            <Typography
              variant="h6"
              sx={{
                color: "primary.main",
                fontWeight: 700,
                mb: 1,
                fontSize: { xs: "1.1rem", md: "1.25rem" },
              }}
            >
              {title}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                fontSize: { xs: "0.95rem", md: "1rem" },
                lineHeight: 1.7,
              }}
            >
              {description}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );
}
