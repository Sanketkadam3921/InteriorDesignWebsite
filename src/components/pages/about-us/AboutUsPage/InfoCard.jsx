import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

export default function InfoCard({ title, description, titleColor = "primary.main" }) {
  return (
    <Card sx={{ height: "100%", p: 3 }}>
      <CardContent>
        <Typography
          variant="h5"
          gutterBottom
          sx={{ color: titleColor, fontWeight: "bold" }}
        >
          {title}
        </Typography>
        <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

