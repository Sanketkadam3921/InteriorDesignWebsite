// import React from "react";
// import { Box, Container, Typography, Button, useTheme } from "@mui/material";
// import { useNavigate } from "react-router-dom";
// import wardrobeHero from "../../../../assets/Wardrobe.jpg"

// export default function WardrobeHeroSection() {
//     const theme = useTheme();
//     const navigate = useNavigate();

//     return (
//         <Box
//             sx={{
//                 position: "relative",
//                 height: "80vh",
//                 overflow: "hidden",
//                 backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${wardrobeHero})`, // ✅ Use imported image
//                 backgroundSize: "cover",
//                 backgroundPosition: "center",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 color: "white",
//                 textAlign: "center",
//             }}
//         >
//             <Container maxWidth="md">
//                 <Typography
//                     variant="h3"
//                     component="h1"
//                     gutterBottom
//                     sx={{
//                         fontWeight: "bold",
//                         color: theme.palette.text.light,
//                         fontFamily: theme.typography.fontFamily,
//                     }}
//                 >
//                     Design Your Perfect Wardrobe
//                 </Typography>

//                 <Typography
//                     variant="h5"
//                     gutterBottom
//                     sx={{
//                         mb: 4,
//                         color: theme.palette.text.light,
//                         fontFamily: theme.typography.fontFamily,
//                     }}
//                 >
//                     Get an instant quote for your modular wardrobe with our smart calculator
//                 </Typography>

//                 <Button
//                     variant="contained"
//                     size="large"
//                     onClick={() =>
//                         navigate("/price-calculators/wardrobe/calculator/length")
//                     }
//                     sx={{
//                         px: 4,
//                         py: 2,
//                         backgroundColor: theme.palette.primary.main,
//                         color: theme.palette.primary.contrastText,
//                         "&:hover": {
//                             backgroundColor: theme.palette.primary.dark,
//                             transform: "translateY(-2px)",
//                         },
//                     }}
//                 >
//                     Get Started
//                 </Button>
//             </Container>
//         </Box>
//     );
// }
