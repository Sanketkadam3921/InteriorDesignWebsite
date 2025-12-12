import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import themeNeutral from "../../../../themeNeutral";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import HomeIcon from "@mui/icons-material/Home";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import ScheduleIcon from "@mui/icons-material/Schedule";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";
import BuildIcon from "@mui/icons-material/Build";

// Icon mapping
const iconMap = {
  Home: HomeIcon,
  DesignServices: DesignServicesIcon,
  VerifiedUser: VerifiedUserIcon,
  Schedule: ScheduleIcon,
  PriceCheck: PriceCheckIcon,
  Build: BuildIcon,
};

export default function WhyChooseItem({ title, icon, iconUrl }) {
  const IconComponent = iconMap[icon] || DesignServicesIcon;
  const isImageIcon = !!iconUrl;

  const splitTitle = title.split(" ");
  const firstWord = splitTitle[0];
  const restOfTitle = splitTitle.slice(1).join(" ");

  return (
    <Card
      sx={{
        height: { xs: 220, sm: 240, md: 260 }, // consistent height
        width: { xs: 280, sm: 280, md: 300 }, // fixed width for mobile
        maxWidth: { xs: 280, sm: 280, md: 300 }, // fixed maxWidth for mobile
        borderRadius: 3,
        overflow: "hidden",
        boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
        display: "flex",
        flexDirection: "column",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.15)",
        },
      }}
    >
      <CardContent
        sx={{
          p: { xs: 2.5, sm: 3, md: 3.5 },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <Box sx={{ mb: 2 }}>
          {isImageIcon ? (
            <Box
              component="img"
              src={iconUrl}
              alt={title}
              sx={{
                width: { xs: 40, sm: 48, md: 56 },
                height: { xs: 40, sm: 48, md: 56 },
                objectFit: "contain",
              }}
            />
          ) : (
            <IconComponent
              sx={{
                fontSize: { xs: 40, sm: 48, md: 56 },
                color: themeNeutral.palette.primary.main,
              }}
            />
          )}
        </Box>

        <Typography
          variant="h6"
          component="h3"
          sx={{
            fontWeight: "bold",
            color: themeNeutral.palette.text.primary,
            textAlign: "center",
            fontSize: { xs: "1rem", sm: "1.1rem", md: "1.2rem" },
            lineHeight: 1.3,
          }}
        >
          {firstWord}
          {restOfTitle && (
            <>
              <br />
              {restOfTitle}
            </>
          )}
        </Typography>
      </CardContent>
    </Card>
  );
}


