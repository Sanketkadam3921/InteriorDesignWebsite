// src/themeNeutral.jsx
import { createTheme } from "@mui/material/styles";

const themeNeutral = createTheme({
    palette: {
        // 🌑 Primary: strong neutral dark gray (used for accents, buttons)
        primary: {
            main: "#505B5F", // Davy's Gray
            light: "#6A7579",
            dark: "#363C3F",
            contrastText: "#FFFFFF",
        },

        // 🌫️ Secondary: lighter neutral tone (used for subtle contrast, cards)
        secondary: {
            main: "#B1B6B8", // Silver Gray
            light: "#C8CCCE",
            dark: "#949A9C",
            contrastText: "#FFFFFF",
        },

        // 🎨 Backgrounds
        background: {
            default: "#F7F8F8", // very light gray background
            paper: "#FFFFFF",   // clean white for cards and modals
        },

        // 🖋️ Text colors
        text: {
            primary: "#2E3234", // deep neutral text for readability
            secondary: "#6B7073", // muted text for subheadings
            light: "#F5F5F5", // for text on dark surfaces
        },

        // Neutral palette for accents and borders
        neutral: {
            lightGray: "#D8DBDC",
            mediumGray: "#B1B6B8",
            darkGray: "#505B5F",
            offWhite: "#EAEAEA",
        },

        divider: "rgba(80,91,95,0.2)",

        action: {
            hover: "rgba(80,91,95,0.08)",
            selected: "rgba(80,91,95,0.12)",
        },
    },

    typography: {
        fontFamily: `"Poppins", "Roboto", "Arial", sans-serif`,
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
            fontSize: "3rem",
            "@media (max-width:600px)": { fontSize: "1.8rem" },
        },
        h4: {
            fontWeight: 500,
            color: "#505B5F",
            fontSize: "2rem",
            "@media (max-width:600px)": { fontSize: "1.4rem" },
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
            fontFamily: `"Roboto", "Arial", sans-serif`,
            fontSize: "1rem",
            lineHeight: 1.7,
            color: "#2E3234",
        },
        body2: {
            fontFamily: `"Roboto", "Arial", sans-serif`,
            fontSize: "0.95rem",
            color: "#6B7073",
        },
        button: {
            textTransform: "none",
            fontWeight: 600,
            letterSpacing: "0.5px",
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
                },
                contained: {
                    backgroundColor: "#505B5F",
                    color: "#FFFFFF",
                    "&:hover": {
                        backgroundColor: "#3E4447",
                        transform: "translateY(-2px)",
                    },
                },
                outlined: {
                    borderColor: "#505B5F",
                    color: "#505B5F",
                    "&:hover": {
                        backgroundColor: "rgba(80,91,95,0.08)",
                        borderColor: "#3E4447",
                    },
                },
            },
        },

        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 14,
                    boxShadow: "0 6px 20px rgba(0,0,0,0.05)",
                    backgroundColor: "#FFFFFF",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    "&:hover": {
                        transform: "translateY(-4px)",
                        boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
                    },
                },
            },
        },

        MuiAppBar: {
            styleOverrides: {
                root: {
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                    backgroundColor: "#FFFFFF",
                    color: "#2E3234",
                },
            },
        },

        MuiTypography: {
            styleOverrides: {
                root: {
                    color: "#2E3234",
                },
            },
        },

        MuiDivider: {
            styleOverrides: {
                root: {
                    backgroundColor: "rgba(80,91,95,0.2)",
                },
            },
        },

        MuiContainer: {
            styleOverrides: {
                root: {
                    backgroundColor: "transparent",
                },
            },
        },
    },
});

export default themeNeutral;