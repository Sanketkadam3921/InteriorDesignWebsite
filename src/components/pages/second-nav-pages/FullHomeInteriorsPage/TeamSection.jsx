import React from "react";
import { Container, Box, Typography, useTheme } from "@mui/material";
import { TEAM_DATA } from "./constants";
import TeamMemberCard from "./TeamMemberCard";

export default function TeamSection() {
  const theme = useTheme();

  return (
    <Container maxWidth="lg" sx={{ pt: 2, pb: 6, px: { xs: 2, md: 4 } }}>
      <Box
        sx={{
          backgroundColor: theme.palette.background.default,
          borderRadius: 3,
          p: { xs: 3, md: 5 },
          mx: { xs: -2, md: 0 },
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
        }}
      >
        <Box sx={{ textAlign: "left", mb: 6 }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontSize: { xs: "2rem", md: "2.5rem" },
              fontWeight: "bold",
              color: theme.palette.text.primary,
              mb: 2,
            }}
          >
            {TEAM_DATA.title}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1rem", md: "1.1rem" },
              color: theme.palette.text.secondary,
              lineHeight: 1.6,
              maxWidth: "800px",
            }}
          >
            {TEAM_DATA.description}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            gap: { xs: 3, md: 4 },
            justifyContent: "center",
            alignItems: "stretch",
            flexWrap: { xs: "wrap", md: "nowrap" },
            "& > *": {
              flex: { xs: "1 1 100%", md: "1 1 400px" },
              maxWidth: { xs: "100%", md: "500px" },
              minWidth: { xs: "300px", md: "350px" },
            },
          }}
        >
          {TEAM_DATA.members.map((member) => (
            <TeamMemberCard
              key={member.id}
              icon={member.icon}
              title={member.title}
              subtitle={member.subtitle}
              description={member.description}
              education={member.education}
              experience={member.experience}
              projectsManaged={member.projectsManaged}
              skills={member.skills}
            />
          ))}
        </Box>
      </Box>
    </Container>
  );
}

