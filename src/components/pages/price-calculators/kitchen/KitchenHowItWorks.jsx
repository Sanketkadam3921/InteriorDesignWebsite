import React from "react";

export default function KitchenHowItWorks() {
    return null;
}

// import React from "react";
// import { Box, Container, Typography, Link, useTheme } from "@mui/material";
// import { useNavigate } from "react-router-dom";

// export default function KitchenHowItWorks() {
//     const theme = useTheme();
//     const navigate = useNavigate();

//     return (
//         <Box
//             sx={{
//                 py: { xs: 6, md: 10 },
//                 backgroundColor: theme.palette.background.default,
//             }}
//         >
//             <Container maxWidth="lg">
//                 {/* Unified text block for consistent width */}
//                 <Box
//                     sx={{
//                         mx: "auto",
//                         textAlign: "left", // uniform alignment
//                     }}
//                 >
//                     {/* Title */}
//                     <Typography
//                         variant="h4"
//                         sx={{
//                             fontWeight: 700,
//                             mb: 2,
//                             color: theme.palette.text.primary,
//                             fontSize: { xs: "1.8rem", md: "2.2rem" },
//                             fontFamily: theme.typography.fontFamily,
//                         }}
//                     >
//                         How Does The Modular Kitchen Price Estimator Work
//                     </Typography>

//                     {/* Description */}
//                     <Typography
//                         variant="body1"
//                         sx={{
//                             color: theme.palette.text.secondary,
//                             mb: 4,
//                             lineHeight: 1.8,
//                             fontSize: { xs: "1rem", md: "1.1rem" },
//                             fontFamily: theme.typography.fontFamily,
//                         }}
//                     >
//                         Our modular kitchen price estimator considers the shape and area of your kitchen,
//                         the materials used, and the package you choose to calculate real-time pricing.
//                         By answering these simple questions, we’ll understand the scope of work and provide
//                         an accurate estimate tailored to your needs.
//                     </Typography>

//                     {/* Section: Kitchen Shape & Layout */}
//                     <Typography
//                         variant="h6"
//                         sx={{
//                             fontWeight: 600,
//                             color: theme.palette.text.primary,
//                             mb: 0.5,
//                             fontFamily: theme.typography.fontFamily,
//                         }}
//                     >
//                         Kitchen Shape & Layout
//                     </Typography>
//                     <Typography
//                         variant="body2"
//                         sx={{
//                             color: theme.palette.text.secondary,
//                             mb: 3,
//                             lineHeight: 1.8,
//                             fontFamily: theme.typography.fontFamily,
//                         }}
//                     >
//                         The shape of your kitchen (L-shaped, U-shaped, or Straight) helps us understand
//                         the layout and workflow. This determines the number of cabinets, countertops,
//                         and storage solutions required for your space.
//                     </Typography>

//                     {/* Section: Measurements & Area */}
//                     <Typography
//                         variant="h6"
//                         sx={{
//                             fontWeight: 600,
//                             color: theme.palette.text.primary,
//                             mb: 0.5,
//                             fontFamily: theme.typography.fontFamily,
//                         }}
//                     >
//                         Measurements & Area
//                     </Typography>
//                     <Typography
//                         variant="body2"
//                         sx={{
//                             color: theme.palette.text.secondary,
//                             mb: 3,
//                             lineHeight: 1.8,
//                             fontFamily: theme.typography.fontFamily,
//                         }}
//                     >
//                         Based on the size of your kitchen, our calculator estimates the cost per sq. ft.
//                         for the selected materials and services. Accurate measurements ensure precise
//                         pricing for both materials and labor, minimizing any unexpected costs.
//                     </Typography>

//                     {/* Section: Package Selection */}
//                     <Typography
//                         variant="h6"
//                         sx={{
//                             fontWeight: 600,
//                             color: theme.palette.text.primary,
//                             mb: 0.5,
//                             fontFamily: theme.typography.fontFamily,
//                         }}
//                     >
//                         Package Selection
//                     </Typography>
//                     <Typography
//                         variant="body2"
//                         sx={{
//                             color: theme.palette.text.secondary,
//                             mb: 5,
//                             lineHeight: 1.8,
//                             fontFamily: theme.typography.fontFamily,
//                         }}
//                     >
//                         Choose from our curated range of packages that include various materials, finishes,
//                         and accessories. Each package is designed to fit different lifestyles and budgets —
//                         ensuring you receive the perfect balance of quality and value.
//                     </Typography>

//                     {/* Calculate Now Link */}
//                     <Link
//                         component="button"
//                         underline="none"
//                         onClick={() =>
//                             navigate("/price-calculators/kitchen/calculator/layout")
//                         }
//                         sx={{
//                             color: theme.palette.primary.main,
//                             fontWeight: 600,
//                             fontSize: "1rem",
//                             display: "inline-flex",
//                             alignItems: "center",
//                             gap: 0.5,
//                             transition: "color 0.2s ease",
//                             fontFamily: theme.typography.fontFamily,
//                             "&:hover": {
//                                 color: theme.palette.primary.dark,
//                                 textDecoration: "underline",
//                             },
//                         }}
//                     >
//                         Calculate Now →
//                     </Link>
//                 </Box>
//             </Container>
//         </Box>
//     );
// }
