// src/themeModernSlateMono.jsx
import { createTheme } from "@mui/material/styles";

const themeModernSlateMono = createTheme({
    palette: {
        // Primary — Silver Gray
        primary: {
            main: "#B1B6B8",
            light: "#C8CCCE",
            dark: "#949A9C",
            contrastText: "#2E3234",
        },

        // Secondary — Cadet Gray (cooler blue-gray tone)
        secondary: {
            main: "#92A3AB",
            light: "#AEBCC1",
            dark: "#6E7C82",
            contrastText: "#FFFFFF",
        },

        background: {
            default: "#F6F7F7", // soft neutral gray-white
            paper: "#FFFFFF",
        },

        text: {
            primary: "#2E3234", // dark for readability
            secondary: "#5C6366", // muted for subtext
        },

        divider: "rgba(146,163,171,0.25)",

        action: {
            hover: "rgba(146,163,171,0.08)",
            selected: "rgba(146,163,171,0.12)",
        },
    },

    // 🎯 Single Font Family for all elements
    typography: {
        fontFamily: `"Poppins", "Arial", sans-serif`,
        h1: {
            fontWeight: 700,
            color: "#2E3234",
            letterSpacing: "-0.5px",
        },
        h2: {
            fontWeight: 600,
            color: "#2E3234",
        },
        h3: {
            fontWeight: 600,
            color: "#505B5F",
        },
        h4: {
            fontWeight: 500,
            color: "#505B5F",
        },
        h5: {
            fontWeight: 500,
            color: "#505B5F",
        },
        h6: {
            fontWeight: 500,
            color: "#6B7073",
        },
        body1: {
            fontSize: "1rem",
            lineHeight: 1.7,
            color: "#2E3234",
        },
        body2: {
            fontSize: "0.95rem",
            color: "#5C6366",
        },
        button: {
            textTransform: "none",
            fontWeight: 600,
            letterSpacing: "0.5px",
            color: "#2E3234",
        },
    },

    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 10,
                    fontWeight: 600,
                    padding: "10px 20px",
                    transition: "all 0.3s ease",
                    fontFamily: "Poppins",
                },
                containedPrimary: {
                    backgroundColor: "#B1B6B8",
                    color: "#2E3234",
                    "&:hover": {
                        backgroundColor: "#A0A5A7",
                        transform: "translateY(-2px)",
                    },
                },
                containedSecondary: {
                    backgroundColor: "#92A3AB",
                    color: "#FFFFFF",
                    "&:hover": {
                        backgroundColor: "#7D8E96",
                        transform: "translateY(-2px)",
                    },
                },
                outlined: {
                    borderColor: "#92A3AB",
                    color: "#505B5F",
                    "&:hover": {
                        backgroundColor: "rgba(146,163,171,0.08)",
                        borderColor: "#6E7C82",
                    },
                },
            },
        },

        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 14,
                    boxShadow: "0 6px 18px rgba(0,0,0,0.05)",
                    backgroundColor: "#FFFFFF",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                        transform: "translateY(-4px)",
                        boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                    },
                    fontFamily: "Poppins",
                },
            },
        },

        MuiAppBar: {
            styleOverrides: {
                root: {
                    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                    backgroundColor: "#FFFFFF",
                    color: "#2E3234",
                    fontFamily: "Poppins",
                },
            },
        },

        MuiTypography: {
            styleOverrides: {
                root: {
                    color: "#2E3234",
                    fontFamily: "Poppins",
                },
            },
        },

        MuiDivider: {
            styleOverrides: {
                root: {
                    backgroundColor: "rgba(146,163,171,0.25)",
                },
            },
        },

        MuiContainer: {
            styleOverrides: {
                root: {
                    backgroundColor: "transparent",
                    fontFamily: "Poppins",
                },
            },
        },
    },
});

export default themeModernSlateMono;
