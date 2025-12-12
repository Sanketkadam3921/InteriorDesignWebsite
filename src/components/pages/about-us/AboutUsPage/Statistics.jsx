import React, { useState, useEffect, useRef } from "react";
import { Box, Container, Typography, Grid, useTheme } from "@mui/material";
import { STATISTICS } from "./constants";

function AnimatedNumber({ value, suffix, label }) {
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);
  const isDecimal = value % 1 !== 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateNumber();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [hasAnimated]);

  const animateNumber = () => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = value / steps;
    const stepDuration = duration / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setDisplayValue(value);
        clearInterval(timer);
      } else {
        // Handle decimal values (like 4.7)
        if (suffix === "" && isDecimal) {
          setDisplayValue(Math.round(current * 10) / 10);
        } else {
          setDisplayValue(Math.floor(current));
        }
      }
    }, stepDuration);
  };

  return (
    <Box
      ref={ref}
      sx={{
        textAlign: "center",
        p: 3,
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontSize: { xs: "2rem", md: "3rem" },
          fontWeight: 700,
          color: "white",
          mb: 1,
        }}
      >
        {suffix === "" && isDecimal
          ? displayValue.toFixed(1)
          : Math.floor(displayValue)}
        {suffix}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          color: "rgba(255, 255, 255, 0.9)",
          fontSize: { xs: "0.85rem", md: "0.95rem" },
          lineHeight: 1.5,
        }}
      >
        {label}
      </Typography>
    </Box>
  );
}

export default function Statistics() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        backgroundColor: theme.palette.primary.main,
        color: "white",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={4}
          justifyContent="center"
          alignItems="center"
          sx={{
            flexWrap: {
              xs: "wrap", // mobile → wraps (2 per row)
              sm: "nowrap",
              md: "nowrap", // desktop/tablet → single row
            },
          }}
        >
          {STATISTICS.map((stat) => (
            <Grid item xs="auto" key={stat.id}>
              <AnimatedNumber
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}


