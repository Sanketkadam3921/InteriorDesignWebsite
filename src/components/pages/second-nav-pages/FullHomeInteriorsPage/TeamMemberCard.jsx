import React from "react";
import { Card, CardContent, Box, Typography, useTheme } from "@mui/material";

export default function TeamMemberCard({
  icon,
  title,
  subtitle,
  description,
  education,
  experience,
  projectsManaged,
  skills,
}) {
  const theme = useTheme();

  return (
    <Card
      sx={{
        height: "100%",
        borderRadius: 2,
        overflow: "hidden",
        boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.15)",
        },
      }}
    >
      <CardContent
        sx={{ p: 4, height: "100%", display: "flex", flexDirection: "column" }}
      >
        {/* Icon */}
        <Box
          sx={{
            width: 80,
            height: 80,
            borderRadius: "50%",
            backgroundColor: "#f5f5f5",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 3,
            mx: "auto",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              width: 60,
              height: 60,
              borderRadius: "50%",
              backgroundColor: theme.palette.primary.main,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "1.5rem",
            }}
          >
            {icon}
          </Box>
        </Box>

        {/* Title and Subtitle */}
        <Typography
          variant="h5"
          component="h3"
          sx={{
            fontWeight: "bold",
            color: theme.palette.text.primary,
            mb: 1,
            textAlign: "center",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: theme.palette.text.secondary,
            mb: 2,
            textAlign: "center",
            fontSize: "1rem",
            fontWeight: "normal",
          }}
        >
          {subtitle}
        </Typography>

        {/* Description */}
        <Typography
          variant="body1"
          sx={{
            color: theme.palette.text.secondary,
            lineHeight: 1.6,
            mb: 3,
            textAlign: "center",
          }}
        >
          {description}
        </Typography>

        {/* Details */}
        <Box sx={{ flex: 1 }}>
          <Box sx={{ mb: 2 }}>
            <Typography
              variant="body2"
              sx={{ fontWeight: "bold", color: "#505B5F", mb: 0.5 }}
            >
              Education:
            </Typography>
            <Typography variant="body2" sx={{ color: "#666" }}>
              {education}
            </Typography>
          </Box>

          <Box sx={{ mb: 2 }}>
            <Typography
              variant="body2"
              sx={{ fontWeight: "bold", color: "#505B5F", mb: 0.5 }}
            >
              Typical Experience:
            </Typography>
            <Typography variant="body2" sx={{ color: "#666" }}>
              {experience}
            </Typography>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography
              variant="body2"
              sx={{ fontWeight: "bold", color: "#505B5F", mb: 0.5 }}
            >
              Projects Managed:
            </Typography>
            <Typography variant="body2" sx={{ color: "#666" }}>
              {projectsManaged}
            </Typography>
          </Box>

          <Box>
            <Typography
              variant="body2"
              sx={{ fontWeight: "bold", color: "#505B5F", mb: 1 }}
            >
              Top Skills:
            </Typography>
            <Box component="ul" sx={{ pl: 2, m: 0 }}>
              {skills.map((skill, index) => (
                <Typography
                  key={index}
                  component="li"
                  variant="body2"
                  sx={{ color: "#666", mb: index < skills.length - 1 ? 0.5 : 0 }}
                >
                  {skill}
                </Typography>
              ))}
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}










