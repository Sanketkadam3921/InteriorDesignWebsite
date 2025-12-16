import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  useTheme,
} from "@mui/material";
import { WHY_CHOOSE_ITEMS, CLOSING_LINE } from "./constants";

export default function WhyChooseOurStudio() {
  const theme = useTheme();

  return (
    <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: "background.default" }}>
      <Container maxWidth="xl">
        <Typography
          variant="h3"
          component="h2"
          sx={{
            fontSize: { xs: "1.8rem", md: "2.4rem" },
            fontWeight: 700,
            color: theme.palette.text.primary,
            textAlign: "center",
            mb: 2,
          }}
        >
          Why Choose Our Studio?
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: "1rem", md: "1.1rem" },
            color: theme.palette.text.secondary,
            textAlign: "center",
            mb: 6,
            maxWidth: "800px",
            mx: "auto",
          }}
        >
          At KalaKruti Studio, we blend creative vision with strategic thinking
          to transform every space into a meaningful interior design story.
          Here's what sets us apart:
        </Typography>

        <Grid container spacing={4} display="flex" justifyContent="center">
          {WHY_CHOOSE_ITEMS.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Card
                sx={{
                  height: "100%",
                  width: "300px",
                  borderRadius: 3,
                  boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                  },
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      color: theme.palette.primary.main,
                      mb: 2,
                      fontSize: { xs: "1.1rem", md: "1.2rem" },
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: theme.palette.text.secondary,
                      lineHeight: 1.7,
                      fontSize: { xs: "0.9rem", md: "0.95rem" },
                    }}
                  >
                    {item.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 8, textAlign: "center" }}>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1rem", md: "1.1rem" },
              color: theme.palette.text.secondary,
              fontStyle: "italic",
              lineHeight: 1.8,
              maxWidth: "900px",
              mx: "auto",
            }}
          >
            "{CLOSING_LINE}"
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}






