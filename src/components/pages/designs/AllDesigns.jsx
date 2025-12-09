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
      id: "kitchen",
      title: "Kitchen Designs",
      description:
        "Functional and beautiful kitchens with smart storage solutions",
      image:
        "https://plus.unsplash.com/premium_photo-1683141179507-734e6157ddba?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1631",
      count: 10,
    },
    {
      id: "wardrobe",
      title: "Wardrobe Designs",
      description: "Customized wardrobes with optimal storage and style",
      image:
        "https://images.unsplash.com/photo-1672137233327-37b0c1049e77?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074",
      count: 10,
    },
    {
      id: "bathroom",
      title: "Bathroom Designs",
      description: "Luxurious and practical bathroom designs for daily comfort",
      image:
        "https://images.unsplash.com/photo-1651951646668-46562cfb4518?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1482",
      count: 10,
    },
    {
      id: "master-bedroom",
      title: "Master Bedroom Designs",
      description: "Elegant master bedroom designs for peaceful rest",
      image:
        "https://plus.unsplash.com/premium_photo-1675616563084-eadb7ee3338f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
      count: 10,
    },
    {
      id: "living-room",
      title: "Living Room Designs",
      description: "Inviting living spaces for relaxation and entertainment",
      image:
        "https://images.unsplash.com/photo-1600121848594-d8644e57abab?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
      count: 10,
    },
    {
      id: "pooja-room",
      title: "Pooja Room Designs",
      description: "Sacred spaces designed with tradition and elegance",
      image:
        "https://i.pinimg.com/736x/c5/85/de/c585def942f5f23bc3001f1162a517de.jpg",
      count: 10,
    },
    {
      id: "tv-unit",
      title: "TV Unit Designs",
      description: "Stylish TV units that enhance your entertainment area",
      image:
        "https://images.unsplash.com/photo-1586024486164-ce9b3d87e09f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=978",
      count: 10,
    },
    {
      id: "false-ceiling",
      title: "False Ceiling Designs",
      description: "Modern ceiling designs that add dimension and style",
      image:
        "https://i.pinimg.com/736x/e6/f4/ee/e6f4ee2fdb627f5b60d3e3ce6edd6419.jpg",
      count: 10,
    },
    {
      id: "kids-bedroom",
      title: "Kids Bedroom Designs",
      description: "Fun and functional spaces for children to grow and play",
      image:
        "https://plus.unsplash.com/premium_photo-1684164600683-6ecb6c9c0eb7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470",
      count: 10,
    },

    {
      id: "dining-room",
      title: "Dining Room Designs",
      description: "Elegant dining spaces for memorable meals and gatherings",
      image:
        "https://i.pinimg.com/1200x/4f/6f/d9/4f6fd955337c70ba16586bbe50aaa787.jpg",
      count: 10,
    },
    {
      id: "foyer",
      title: "Foyer Designs",
      description:
        "Make a stunning first impression with elegant foyer designs",
      image:
        "https://i.pinimg.com/736x/dc/a5/57/dca557cb74df5384a5c89b4a2dc9d199.jpg",
      count: 7,
    },
    {
      id: "homes-livspace",
      title: "KalaKruti Studio Designs",
      description: "Complete home interior solutions from KalaKruti Studio",
      image:
        "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=500",
      count: 20,
    },
    {
      id: "home-office",
      title: "Home Office Designs",
      description: "Productive workspaces designed for focus and creativity",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=500",
      count: 10,
    },

    {
      id: "wallpaper",
      title: "Home Wallpaper Designs",
      description: "Stunning wallpaper designs to transform your walls",
      image:
        "https://i.pinimg.com/1200x/c9/b7/3f/c9b73fa070844a55f2db06b8fc15d0fa.jpg",
      count: 10,
    },

    {
      id: "study-room",
      title: "Study Room Designs",
      description: "Focused study spaces for learning and concentration",
      image:
        "https://plus.unsplash.com/premium_photo-1720707755672-fa44f1711954?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1074",
      count: 10,
    },

    {
      id: "space-saving",
      title: "Space Saving Designs",
      description: "Smart solutions to maximize your living space",
      image:
        "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=500",
      count: 10,
    },
    {
      id: "door",
      title: "Door Designs",
      description: "Stylish door designs for every room in your home",
      image:
        "https://i.pinimg.com/736x/ce/27/6d/ce276d9ec8bb0f071f070dbc34ca4ac7.jpg",
      count: 10,
    },

    {
      id: "crockery-unit",
      title: "Crockery Unit Designs",
      description: "Display and storage solutions for your dinnerware",
      image:
        "https://i.pinimg.com/736x/24/e0/f6/24e0f640fb8d889590458d05cdf68184.jpg",
      count: 10,
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
          variant="h3"
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
              sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}
            >
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  color: theme.palette.text.primary,
                  fontWeight: 600,
                  fontSize: "1.1rem",
                  minHeight: "48px",
                }}
              >
                {category.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ mb: 2, flexGrow: 1 }}
              >
                {category.description}
              </Typography>
              <Button
                variant="outlined"
                fullWidth
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/designs/${category.id}`);
                }}
                sx={{
                  borderColor: theme.palette.primary.main,
                  color: theme.palette.primary.main,
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
          Need Help Choosing?
        </Typography>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{ mb: 3, maxWidth: "600px", mx: "auto" }}
        >
          Our design experts can help you choose the perfect style for your
          space. Get personalized recommendations tailored to your needs.
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
