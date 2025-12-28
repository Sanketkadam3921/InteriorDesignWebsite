import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function AllDesigns() {
  const navigate = useNavigate();
  const theme = useTheme();

  const designCategories = [
    {
      id: "foyer",
      title: "Foyer Designs",
      description:
        "Make a stunning first impression with elegant foyer designs",
      image:
        "https://ik.imagekit.io/bowr9614/AllDesigns/FoyerDesigns/drive-download-20251208T054641Z-1-001/IMG_5656.JPG?updatedAt=1765174234392",
      count: 7,
    },
    {
      id: "living-room",
      title: "Living Room Designs",
      description: "Inviting living spaces for relaxation and entertainment",
      image:
        "https://ik.imagekit.io/bowr9614/AllDesigns/LivingRoom/drive-download-20251208T054515Z-1-001/IMG_5590.JPG?updatedAt=1765174414841",
      count: 10,
    },
    {
      id: "tv-unit",
      title: "TV Unit Designs",
      description: "Stylish TV units that enhance your entertainment area",
      image:
        "https://ik.imagekit.io/bowr9614/AllDesigns/TvUnitDesigns/drive-download-20251208T054315Z-1-001/IMG_5613.JPG?updatedAt=1765174366109",
      count: 10,
    },
    {
      id: "pooja-room",
      title: "Pooja Room Designs",
      description: "Sacred spaces designed with tradition and elegance",
      image:
        "https://ik.imagekit.io/bowr9614/AllDesigns/PoojaRoom/drive-download-20251208T055104Z-1-001/IMG_5602.JPG?updatedAt=1765174392145",
      count: 10,
    },
    {
      id: "dining-room",
      title: "Dining Room Designs",
      description: "Elegant dining spaces for memorable meals and gatherings",
      image:
        "https://ik.imagekit.io/bowr9614/AllDesigns/DiningRoomDesigns/drive-download-20251208T055338Z-1-001/IMG_5639.JPG?updatedAt=1765174264437",
      count: 10,
    },
    {
      id: "kitchen",
      title: "Kitchen Designs",
      description:
        "Functional and beautiful kitchens with smart storage solutions",
      image:
        "https://ik.imagekit.io/bowr9614/AllDesigns/Kitchen/drive-download-20251208T055141Z-1-001/IMG_5547.JPG?updatedAt=1765174520323",
      count: 10,
    },
    {
      id: "crockery-unit",
      title: "Crockery Unit Designs",
      description: "Display and storage solutions for your dinnerware",
      image:
        "https://ik.imagekit.io/bowr9614/AllDesigns/CrockeryUnitDesigns/drive-download-20251208T054757Z-1-001/IMG_5703.JPG?updatedAt=1765173940012",
      count: 10,
    },
    {
      id: "kids-bedroom",
      title: "Kids Bedroom Designs",
      description: "Fun and functional spaces for children to grow and play",
      image:
        "https://ik.imagekit.io/bowr9614/AllDesigns/KidsBedroomDesigns/drive-download-20251208T054603Z-1-001/IMG_5630.JPG?updatedAt=1765174313647",
      count: 10,
    },
    {
      id: "master-bedroom",
      title: "Master Bedroom Designs",
      description: "Elegant master bedroom designs for peaceful rest",
      image:
        "https://ik.imagekit.io/bowr9614/AllDesigns/MasterBedroom/drive-download-20251208T054434Z-1-001/IMG_5584.JPG?updatedAt=1765174441359",
      count: 10,
    },
    {
      id: "wardrobe",
      title: "Wardrobe Designs",
      description: "Customized wardrobes with optimal storage and style",
      image:
        "https://ik.imagekit.io/bowr9614/AllDesigns/Wardrobe/drive-download-20251208T054224Z-1-001/IMG_5565.JPG?updatedAt=1765174491853",
      count: 10,
    },
    {
      id: "study-room",
      title: "Study Room Designs",
      description: "Focused study spaces for learning and concentration",
      image:
        "https://ik.imagekit.io/bowr9614/AllDesigns/StudyRoomDesigns/drive-download-20251208T054353Z-1-001/IMG_5677.JPG?updatedAt=1765174137497",
      count: 10,
    },
    {
      id: "bathroom",
      title: "Bathroom Designs",
      description: "Luxurious and practical bathroom designs for daily comfort",
      image:
        "https://ik.imagekit.io/bowr9614/AllDesigns/Bathroom/drive-download-20251208T055412Z-1-001/IMG_5570.JPG?updatedAt=1765174468360",
      count: 10,
    },
    {
      id: "home-office",
      title: "Home Office Designs",
      description: "Productive workspaces designed for focus and creativity",
      image:
        "https://ik.imagekit.io/bowr9614/AllDesigns/HomeOfficeDesigns/drive-download-20251208T055210Z-1-001/IMG_5658.JPG?updatedAt=1765174208162",
      count: 10,
    },
    {
      id: "false-ceiling",
      title: "False Ceiling Designs",
      description: "Modern ceiling designs that add dimension and style",
      image:
        "https://ik.imagekit.io/bowr9614/AllDesigns/FalseCeilingDesigns/FalseCeilingDesigns/IMG_5618.JPG?updatedAt=1765174342449",
      count: 10,
    },
    {
      id: "wallpaper",
      title: "Home Wallpaper Designs",
      description: "Stunning wallpaper designs to transform your walls",
      image:
        "https://ik.imagekit.io/bowr9614/AllDesigns/HomeWallpaperDesigns/drive-download-20251208T055459Z-3-001/IMG_5681.JPG?updatedAt=1765174177705",
      count: 10,
    },
    {
      id: "space-saving",
      title: "Space Saving Designs",
      description: "Smart solutions to maximize your living space",
      image:
        "https://ik.imagekit.io/bowr9614/AllDesigns/SpaceSavingDesigns/drive-download-20251208T055034Z-1-001/IMG_5709.JPG?updatedAt=1765174015208",
      count: 10,
    },
    {
      id: "door",
      title: "Door Designs",
      description: "Stylish door designs for every room in your home",
      image:
        "https://ik.imagekit.io/bowr9614/AllDesigns/DoorDesigns/drive-download-20251208T054716Z-1-001/IMG_4488.JPG?updatedAt=1765173967437",
      count: 10,
    },
    {
      id: "homes-livspace",
      title: "KalaKruti Studio Designs",
      description: "Complete home interior solutions from KalaKruti Studio",
      image:
        "https://ik.imagekit.io/bowr9614/Homes%20By%20KalaKruti/IMG_4411.JPG?updatedAt=1765185733225",
      count: 20,
    },
  ];

  return (
    <Container
      maxWidth="xl"
      sx={{
        py: { xs: 4, sm: 3, md: 4 },
      }}
    >
      {/* Header Section */}
      <Box sx={{ mb: 6, textAlign: "left" }}>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: 700,
            color: theme.palette.text.primary,
          }}
        >
          Interior Design Gallery
        </Typography>
        <Typography
          variant="h6"
          color="text.secondary"
          sx={{ maxWidth: "800px" }}
        >
          Explore our comprehensive collection of interior design categories.
          From kitchens to living rooms, find inspiration for every space in
          your home.
        </Typography>
      </Box>

      {/* Design Categories Grid (CSS Grid for Equal Height) */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
          },
          gap: 3,
          mt: 2,
          width: "100%",
          "& > *": {
            minHeight: "430px",
          },
        }}
      >
        {designCategories.map((category) => (
          <Card
            key={category.id}
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "100%",
              cursor: "pointer",
              transition: "all 0.3s ease-in-out",
              boxShadow: theme.shadows[2],
              "&:hover": {
                transform: "translateY(-8px)",
                boxShadow: theme.shadows[8],
              },
            }}
            onClick={() => navigate(`/designs/${category.id}`)}
          >
            <CardMedia
              component="img"
              height="220"
              image={category.image}
              alt={category.title}
              sx={{ objectFit: "cover" }}
            />
            <CardContent
              sx={{
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
                p: 3,
              }}
            >
              {/* Fixed Header Section */}
              <Box sx={{ mb: 2 }}>
                <Typography
                  variant="h6"
                  sx={{
                    color: theme.palette.text.primary,
                    fontWeight: 600,
                    fontSize: "1.1rem",
                    minHeight: "48px",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    lineHeight: 1.3,
                  }}
                >
                  {category.title}
                </Typography>
              </Box>

              {/* Flexible Description Section */}
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  flexGrow: 1,
                  mb: 2,
                  minHeight: "60px",
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                  lineHeight: 1.6,
                }}
              >
                {category.description}
              </Typography>

              {/* Fixed Button at Bottom */}
              <Button
                variant="outlined"
                fullWidth
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/designs/${category.id}`);
                }}
                sx={{
                  mt: "auto",
                  borderColor: theme.palette.primary.main,
                  color: theme.palette.primary.main,
                  py: 1.2,
                  borderRadius: "20px",
                  textTransform: "none",
                  fontWeight: 600,
                  "&:hover": {
                    borderColor: theme.palette.primary.dark,
                    backgroundColor: theme.palette.action.hover,
                  },
                }}
              >
                View Designs
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          textAlign: "center",
          py: 6,
          mt: 6,
          backgroundColor: theme.palette.background.default,
          borderRadius: 2,
          border: `1px solid ${theme.palette.divider}`,
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            fontWeight: 600,
            color: theme.palette.text.primary,
          }}
        >
          Not sure where to start?
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mb: 3, maxWidth: "600px", mx: "auto" }}
        >
          Our team will help you discover a style that works perfectly for you.
        </Typography>
        <Button
          variant="contained"
          size="large"
          onClick={() => navigate("/contact")}
          sx={{
            px: 4,
            py: 1.5,
            fontSize: "1.1rem",
            backgroundColor: theme.palette.primary.main,
            "&:hover": {
              backgroundColor: theme.palette.primary.dark,
            },
          }}
        >
          Get Design Consultation
        </Button>
      </Box>
    </Container>
  );
}
