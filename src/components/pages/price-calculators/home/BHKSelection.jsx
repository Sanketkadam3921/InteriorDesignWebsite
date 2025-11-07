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
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Divider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
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
    description: "Spacious home with size options available.",
    sizes: [
      { id: "small", label: "Small", description: "Below 1200 sq ft" },
      { id: "large", label: "Large", description: "Above 1200 sq ft" },
    ],
  },
  {
    id: "4bhk",
    title: "4 BHK",
    description: "Luxury home with configurable size options.",
    sizes: [
      { id: "small", label: "Small", description: "Below 1800 sq ft" },
      { id: "large", label: "Large", description: "Above 1800 sq ft" },
    ],
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
  const [selectedSize, setSelectedSize] = useState("");

  const handleBHKChange = (event) => {
    setSelectedBHK(event.target.value);
    setSelectedSize("");
  };

  const handleSizeChange = (event) => setSelectedSize(event.target.value);

  const handleNext = () => {
    if (selectedBHK) {
      const queryParams = new URLSearchParams({
        bhk: selectedBHK,
        size: selectedSize,
      });
      navigate(
        `/price-calculators/home/calculator/rooms?${queryParams.toString()}`
      );
    }
  };

  const selectedOption = bhkOptions.find((b) => b.id === selectedBHK);

  return (
    <Box sx={{ maxWidth: 700, mx: "auto", p: 3 }}>
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
                boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                cursor: "pointer",
                transition: "none",
                "&:hover": { borderColor: theme.palette.primary.main },
                // Center 5 BHK (last item in 2-column grid)
                gridColumn: index === 4 ? { xs: "1", sm: "span 2" } : "auto",
                justifySelf: index === 4 ? { xs: "stretch", sm: "center" } : "stretch",
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

              {/* Accordion for 3BHK & 4BHK */}
              {bhk.sizes && (
                <Accordion
                  disableGutters
                  elevation={0}
                  sx={{
                    backgroundColor: "transparent",
                    borderTop: "1px solid",
                    borderColor: theme.palette.divider,
                    "&:before": { display: "none" },
                  }}
                  expanded={selectedBHK === bhk.id && !!bhk.sizes}
                  onChange={(event, isExpanded) => {
                    // Prevent accordion from toggling - only controlled by selectedBHK
                    event.stopPropagation();
                    if (isExpanded && selectedBHK !== bhk.id) {
                      setSelectedBHK(bhk.id);
                    }
                  }}
                >
                  <AccordionSummary
                    expandIcon={
                      <ExpandMoreIcon
                        sx={{ color: theme.palette.text.secondary }}
                      />
                    }
                    onClick={(e) => {
                      // When clicking accordion header, select the BHK first
                      if (selectedBHK !== bhk.id) {
                        e.stopPropagation();
                        setSelectedBHK(bhk.id);
                      }
                    }}
                    sx={{
                      minHeight: 0,
                      "& .MuiAccordionSummary-content": { my: 0.5 },
                    }}
                  >
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      Select Size
                    </Typography>
                  </AccordionSummary>

                  <AccordionDetails sx={{ pt: 0 }}>
                    <RadioGroup
                      value={selectedSize}
                      onChange={handleSizeChange}
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 1.5,
                        flexWrap: "wrap",
                        pl: 1,
                      }}
                    >
                      {bhk.sizes.map((size) => (
                        <Card
                          key={size.id}
                          sx={{
                            flex: "1 1 45%",
                            borderRadius: 1.5,
                            border:
                              selectedSize === size.id
                                ? `2px solid ${theme.palette.primary.main}`
                                : "1px solid",
                            borderColor:
                              selectedSize === size.id
                                ? theme.palette.primary.main
                                : theme.palette.grey[300],
                            textAlign: "center",
                            boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                            cursor: "pointer",
                            transition: "none",
                            "&:hover": {
                              borderColor: theme.palette.primary.main,
                            },
                          }}
                          onClick={() => setSelectedSize(size.id)}
                        >
                          <CardContent sx={{ p: 1.5 }}>
                            <FormControlLabel
                              value={size.id}
                              control={
                                <Radio
                                  size="small"
                                  sx={{ color: theme.palette.primary.main }}
                                />
                              }
                              label={
                                <Box>
                                  <Typography
                                    variant="body2"
                                    sx={{ fontWeight: 600 }}
                                  >
                                    {size.label}
                                  </Typography>
                                  <Typography
                                    variant="caption"
                                    sx={{ color: theme.palette.text.secondary }}
                                  >
                                    {size.description}
                                  </Typography>
                                </Box>
                              }
                              sx={{ m: 0, width: "100%" }}
                            />
                          </CardContent>
                        </Card>
                      ))}
                    </RadioGroup>
                  </AccordionDetails>
                </Accordion>
              )}
            </Card>
          ))}
        </RadioGroup>
      </FormControl>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: 4,
          pt: 2,
          borderTop: "1px solid",
          borderColor: theme.palette.divider,
        }}
      >
        <Button
          variant="text"
          onClick={() => navigate("/price-calculators/home")}
          sx={{
            color: theme.palette.primary.main,
            textTransform: "none",
            fontWeight: 600,
          }}
        >
          Back
        </Button>

        <Button
          variant="contained"
          onClick={handleNext}
          disabled={
            !selectedBHK ||
            ((selectedBHK === "3bhk" || selectedBHK === "4bhk") &&
              !selectedSize)
          }
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
