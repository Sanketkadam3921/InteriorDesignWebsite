import React from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Link,
  IconButton,
  useTheme,
} from "@mui/material";
import {
  Facebook,
  Instagram,
  LinkedIn,
  YouTube,
  Phone,
  Email,
} from "@mui/icons-material";
import { Link as RouterLink } from "react-router-dom";

// Reusable section container
const SectionWrapper = ({ children }) => (
  <Box
    sx={{
      pl: {
        xs: 0, // Mobile: no padding
        sm: 0, // iPad Air/Mini: no padding
        md: 1, // iPad Pro: small padding
        lg: 4, // Desktop: original padding
      },
      pr: {
        xs: 0, // Mobile: no padding
        sm: 0, // iPad Air/Mini: no padding
        md: 1, // iPad Pro: small padding
        lg: 1, // Desktop: original padding
      },
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start", // ✅ always left-aligned
      textAlign: "left", // ✅ text left-aligned
    }}
  >
    {children}
  </Box>
);

const LinkGroup = ({ title, children }) => {
  const theme = useTheme();
  return (
    <Grid
      item
      xs={12}
      sm={6} // iPad Air/Mini: 2 columns per row (600px-1023px)
      md={3} // iPad Pro: All 4 link columns in single row (1024px-1199px) - 3 * 4 = 12
      lg={2.4} // Desktop: Original layout (1200px+)
    >
      <SectionWrapper>
        <Typography
          variant="h6"
          sx={{
            color: theme.palette.secondary.contrastText,
            fontWeight: 600,
            fontSize: { xs: "1.1rem", sm: "1.15rem", md: "1.2rem" },
            mb: 3,
            letterSpacing: "0.05em",
          }}
        >
          {title}
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {children}
        </Box>
      </SectionWrapper>
    </Grid>
  );
};

const NavLink = ({ to, label }) => {
  const theme = useTheme();
  return (
    <Link
      component={RouterLink}
      to={to}
      sx={{
        color: theme.palette.secondary.contrastText,
        textDecoration: "none",
        fontSize: { xs: "1rem", md: "1.1rem" },
        opacity: 0.8,
        py: 0.5,
        "&:hover": { opacity: 1, textDecoration: "underline" },
      }}
    >
      {label}
    </Link>
  );
};

export default function Footer() {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{ mt: "auto", position: "relative", overflow: "hidden" }}
    >
      <Box
        sx={{
          backgroundColor: theme.palette.primary.dark,
          color: theme.palette.secondary.contrastText,
          py: {
            xs: 8, // Mobile: padding
            sm: 8, // iPad Air/Mini: padding
            md: 8, // iPad Pro: padding
            lg: 10, // Desktop: original padding
          },
          position: "relative",
        }}
      >
        {/* Decorative SVG */}
        <Box
          sx={{
            position: "absolute",
            bottom: -100,
            left: -80,
            zIndex: 0,
            opacity: 0.15,
          }}
        >
          <svg
            width="220"
            height="230"
            viewBox="0 0 217 229"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-64 140.5C-64 62.904 -1.096 1.90666e-05 76.5 1.22829e-05C154.096 5.49924e-06 217 62.904 217 140.5C217 218.096 154.096 281 76.5 281C-1.09598 281 -64 218.096 -64 140.5Z"
              fill="url(#paint0_linear_1179_5)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1179_5"
                x1="76.5"
                y1={281}
                x2="76.5"
                y2="1.22829e-05"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  stopColor={theme.palette.primary.light}
                  stopOpacity="0.15"
                />
                <stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
              </linearGradient>
            </defs>
          </svg>
        </Box>

        <Container
          maxWidth="xl"
          sx={{
            position: "relative",
            zIndex: 2,
            px: {
              xs: 3, // Mobile: padding
              sm: 3, // iPad Air/Mini: padding
              md: 4, // iPad Pro: padding
              lg: 6, // Desktop: original padding
            },
          }}
        >
          <Grid
            container
            spacing={{
              xs: 5, // Mobile: larger spacing
              sm: 2.2, // iPad Air/Mini: medium spacing
              md: 3, // iPad Pro: spacing for 4 columns in row
              lg: 8, // Desktop: original spacing
            }}
            direction={{
              xs: "column", // Mobile: stack vertically
              sm: "row", // iPad Air/Mini: horizontal
              md: "row", // iPad Pro: horizontal
              lg: "row", // Desktop: horizontal
            }}
            alignItems="flex-start"
            textAlign="left"
            sx={{
              flexWrap: {
                xs: "nowrap", // Mobile: no wrap (already column direction)
                sm: "nowrap", // iPad Air/Mini: wrap (2 columns)
                md: "nowrap", // iPad Pro: no wrap (all in row)
                lg: "nowrap", // Desktop: no wrap
              },
            }}
          >
            {/* Logo + Social Media */}
            <Grid
              item
              xs={12}
              sm={12} // iPad Air/Mini: Full width
              md={12} // iPad Pro: Full width (4 link columns in row below)
              lg={2.4} // Desktop: Original layout
            >
              <SectionWrapper>
                <Box sx={{ mb: 2, py: 0.5 }} textAlign="center">
                  <Typography
                    variant="h4"
                    sx={{
                      color: theme.palette.secondary.contrastText,
                      fontWeight: "bold",
                      fontSize: {
                        xs: "1 rem",
                        sm: "1rem",
                        md: "1.2rem",
                        lg: "1.7rem",
                      },
                      letterSpacing: "0.1em",
                      mb: 1,
                    }}
                  >
                    KALAKRUTI
                  </Typography>
                  <Typography
                    sx={{
                      color: theme.palette.secondary.contrastText,
                      fontSize: {
                        xs: "1.1rem",
                        sm: "0.9rem",
                        md: "1.2rem",
                        lg: "1.2rem",
                      },
                      letterSpacing: "0.2em",
                      opacity: 0.8,
                    }}
                  >
                    STUDIO
                  </Typography>
                </Box>

                <Box
                  sx={{ display: "flex", gap: 2, justifyContent: "flex-start" }}
                >
                  {[
                    {
                      icon: <Instagram />,
                      href: "https://www.instagram.com/_kalakruti_studio_/",
                    },
                  ].map((item, index) => (
                    <IconButton
                      key={index}
                      component="a"
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        color: theme.palette.secondary.contrastText,
                        border: "1px solid rgba(255,255,255,0.2)",
                        ml: 3,
                        "&:hover": {
                          backgroundColor: "rgba(255,255,255,0.1)",
                          borderColor: theme.palette.primary.main,
                        },
                      }}
                    >
                      {item.icon}
                    </IconButton>
                  ))}
                </Box>
              </SectionWrapper>
            </Grid>

            {/* Offerings & Inspiration */}
            <LinkGroup title="OFFERINGS ">
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "4px" }}
              >
                <NavLink to="/designs" label="Designs" />
                <NavLink
                  to="/designs/modular-interiors"
                  label="Modular Interiors"
                />
                <NavLink
                  to="/designs/full-home-interiors"
                  label="Full Home Interiors"
                />
                <NavLink
                  to="/designs/luxury-interiors"
                  label="Luxury Interiors"
                />
                <NavLink to="/renovations" label="Renovations" />
              </Box>
            </LinkGroup>

            {/* Tools */}
            <LinkGroup title="TOOLS">
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "4px" }}
              >
                <NavLink to="/#price-calculator" label="Price Calculator" />
                <NavLink to="/enquiries/quote-form" label="Get Quote" />
              </Box>
            </LinkGroup>

            {/* Company */}
            <LinkGroup title="COMPANY">
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "4px" }}
              >
                <NavLink to="/how-it-works" label="Process" />
                <NavLink to="/faq" label="FAQs" />
                <NavLink to="/aboutus" label="About Us" />
                <NavLink to="/projects" label="Projects" />
                <NavLink to="/contact" label="Contact Us" />
              </Box>
            </LinkGroup>

            {/* Contact */}
            <LinkGroup title="CONTACT US">
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Phone sx={{ fontSize: "1.3rem", opacity: 0.8 }} />
                <Link href="tel:+91-9876543210" sx={linkStyle(theme)}>
                  +91 8767374324
                </Link>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Email sx={{ fontSize: "1.3rem", opacity: 0.8 }} />
                <Link
                  href="mailto:kalakrutistudio.office@gmail.com"
                  sx={linkStyle(theme)}
                >
                  kalakrutistudio.office@gmail.com{" "}
                </Link>
              </Box>
            </LinkGroup>
          </Grid>

          {/* Copyright */}
          <Box
            sx={{
              borderTop: "1px solid rgba(255,255,255,0.2)",
              mt: {
                xs: 6, // Mobile: margin
                sm: 6, // iPad Air/Mini: margin
                md: 5, // iPad Pro: margin
                lg: 6, // Desktop: original margin
              },
              pt: {
                xs: 4, // Mobile: padding
                sm: 4, // iPad Air/Mini: padding
                md: 4, // iPad Pro: padding
                lg: 4, // Desktop: original padding
              },
              textAlign: "center",
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: theme.palette.secondary.contrastText,
                opacity: 0.8,
                fontSize: {
                  xs: "0.9rem",
                  sm: "0.95rem",
                  md: "1rem",
                  lg: "1rem",
                },
                mb: {
                  xs: -4,
                  sm: -4,
                  md: -5,
                  lg: -6,
                },
              }}
            >
              © 2025 Kalakruti Studio. All rights reserved.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

// Global reusable link style
const linkStyle = (theme) => ({
  color: theme.palette.secondary.contrastText,
  textDecoration: "none",
  fontSize: { xs: "1rem", md: "1.1rem" },
  opacity: 0.8,
  "&:hover": { opacity: 1, textDecoration: "underline" },
});
