import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const bhkOptions = [
  {
    id: "1bhk",
    title: "1 BHK",
    description: "Compact home suitable for individuals or small families.",
  },
  {
    id: "2bhk",
    title: "2 BHK",
    description: "Perfect for small to medium-sized families.",
  },
  {
    id: "3bhk",
    title: "3 BHK",
    description: "Spacious home for medium-sized families.",
  },
  {
    id: "4bhk",
    title: "4 BHK",
    description: "Luxury home for large families.",
  },
  {
    id: "5bhk",
    title: "5 BHK+",
    description: "Premium large family home.",
  },
];

export default function BHKSelection() {
  const theme = useTheme();
  const navigate = useNavigate();
  const [selectedBHK, setSelectedBHK] = useState("");

  const handleBHKChange = (event) => {
    setSelectedBHK(event.target.value);
  };

  const handleNext = () => {
    if (selectedBHK) {
      const queryParams = new URLSearchParams({
        bhk: selectedBHK,
      });
      navigate(
        `/price-calculators/home/calculator/package?${queryParams.toString()}`
      );
    }
  };

  return (
    <Box
      sx={{
        maxWidth: 700,
        mx: "auto",
        p: 3,
        display: "flex",
        flexDirection: "column",
        minHeight: "calc(100vh - 200px)",
        pb: 10,
        mb: 8,
      }}
    >
      <Typography
        variant="h5"
        sx={{
          textAlign: "center",
          mb: 1,
          fontWeight: 600,
          color: theme.palette.text.primary,
        }}
      >
        Select Your BHK Type
      </Typography>

      <Typography
        variant="body2"
        sx={{
          textAlign: "center",
          mb: 4,
          color: theme.palette.text.secondary,
        }}
      >
        Choose the configuration of your home
      </Typography>

      <Box
        sx={{
          backgroundColor: theme.palette.primary.light + '25',
          borderRadius: 2,
          p: 3,
          mb: 2,
          border: '1px solid',
          borderColor: theme.palette.primary.light + '40',
        }}
      >
        <FormControl fullWidth>
        <RadioGroup
          value={selectedBHK}
          onChange={handleBHKChange}
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" },
            gap: 1.5,
          }}
        >
          {bhkOptions.map((bhk, index) => (
            <Card
              key={bhk.id}
              sx={{
                borderRadius: 2,
                border:
                  selectedBHK === bhk.id
                    ? `2px solid ${theme.palette.primary.main}`
                    : "1px solid",
                borderColor:
                  selectedBHK === bhk.id
                    ? theme.palette.primary.main
                    : theme.palette.grey[300],
                backgroundColor: theme.palette.background.paper,
                boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                cursor: "pointer",
                transition: "none",
                "&:hover": { borderColor: theme.palette.primary.main },
                // Center 5 BHK (last item in 2-column grid)
                gridColumn: index === 4 ? { xs: "1", sm: "span 2" } : "auto",
                justifySelf:
                  index === 4 ? { xs: "stretch", sm: "center" } : "stretch",
                maxWidth: index === 4 ? { xs: "100%", sm: "50%" } : "100%",
              }}
              onClick={() => setSelectedBHK(bhk.id)}
            >
              <CardContent sx={{ p: 2 }}>
                <FormControlLabel
                  value={bhk.id}
                  control={
                    <Radio
                      size="small"
                      sx={{ color: theme.palette.primary.main }}
                    />
                  }
                  label={
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                        {bhk.title}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{ color: theme.palette.text.secondary }}
                      >
                        {bhk.description}
                      </Typography>
                    </Box>
                  }
                  sx={{ m: 0, width: "100%" }}
                />
              </CardContent>
            </Card>
          ))}
        </RadioGroup>
      </FormControl>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          maxWidth: 700,
          mx: "auto",
          pt: 2,
          pb: 2,
          px: 3,
          borderTop: "1px solid",
          borderColor: theme.palette.divider,
          backgroundColor: theme.palette.background.default,
          zIndex: 1000,
          boxShadow: "0 -2px 8px rgba(0,0,0,0.1)",
        }}
      >
        <Button
          variant="outlined"
          onClick={() => navigate("/")}
          sx={{
            color: theme.palette.primary.main,
            borderColor: theme.palette.primary.main,
            textTransform: "none",
            fontWeight: 600,
            "&:hover": {
              borderColor: theme.palette.primary.dark,
              backgroundColor: theme.palette.primary.light + "15",
            },
          }}
        >
          Back
        </Button>

        <Button
          variant="contained"
          onClick={handleNext}
          disabled={!selectedBHK}
          sx={{
            px: 4,
            textTransform: "none",
            fontWeight: 600,
          }}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
}
