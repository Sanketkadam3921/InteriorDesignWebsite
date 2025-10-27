import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Drawer,
    Box,
    useMediaQuery,
    useTheme,
    Container,
    List,
    ListItem,
    ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../assets/LogoKalaKruti.png";

// Ant Design imports
import { Dropdown, Button, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const location = useLocation();
    const navigate = useNavigate();

    const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

    const navigationItems = [
        { label: "Home", path: "/" },
        { label: "Projects", path: "/projects" },
        {
            label: "Designs",
            path: "/designs",
            dropdown: [
                { label: "Modular Kitchen Designs", path: "/designs/kitchen" },
                { label: "Wardrobe Designs", path: "/designs/wardrobe" },
                { label: "Bathroom Designs", path: "/designs/bathroom" },
                { label: "Master Bedroom Designs", path: "/designs/master-bedroom" },
                { label: "Living Room Designs", path: "/designs/living-room" },
                { label: "Pooja Room Designs", path: "/designs/pooja-room" },
                { label: "TV Unit Designs", path: "/designs/tv-unit" },
                { label: "False Ceiling Designs", path: "/designs/false-ceiling" },
                { label: "Kids Bedroom Designs", path: "/designs/kids-bedroom" },
                { label: "Dining Room Designs", path: "/designs/dining-room" },
                { label: "Foyer Designs", path: "/designs/foyer" },
                { label: "Homes by KalaKruti Studio", path: "/designs/homes-livspace" },
                { label: "Home Office Designs", path: "/designs/home-office" },
                { label: "Home Wallpaper Designs", path: "/designs/wallpaper" },
                { label: "Tile Designs", path: "/designs/tile" },
                { label: "Study Room Designs", path: "/designs/study-room" },
                { label: "Space Saving Designs", path: "/designs/space-saving" },
                { label: "Door Designs", path: "/designs/door" },
                { label: "Crockery Unit Designs", path: "/designs/crockery-unit" },
            ],
        },
        { label: "FAQs", path: "/faq" },
        { label: "Contact", path: "/contact" },
        { label: "About Us", path: "/aboutus" },
    ];

    const drawer = (
        <Box sx={{ width: 250 }}>
            <Box
                component={Link}
                to="/"
                sx={{
                    display: "flex",
                    alignItems: "center",
                    textDecoration: "none",
                    p: 2,
                    transition: "transform 0.2s ease",
                    "&:hover": { transform: "scale(1.02)" },
                }}
                onClick={handleDrawerToggle}
            >
                <Box

                    sx={{
                        height: 50,
                        width: 50,

                    }}
                />

                <Box sx={{ display: "flex", flexDirection: "column", ml: 2 }}>
                    <Typography
                        sx={{
                            color: theme.palette.secondary.main,
                            fontWeight: "bold",
                            fontSize: "1.8rem",
                            letterSpacing: "0.1em",
                        }}
                    >
                    </Typography>
                    <Typography
                        sx={{
                            color: theme.palette.secondary.main,
                            fontSize: "0.9rem",
                            letterSpacing: "0.2em",
                            lineHeight: 1,
                        }}
                    >
                    </Typography>
                </Box>
            </Box>

            <List>
                {navigationItems.map((item) => (
                    <Box key={item.label}>
                        <ListItem
                            component={Link}
                            to={item.path}
                            onClick={handleDrawerToggle}
                            sx={{
                                color:
                                    location.pathname === item.path ||
                                        (item.dropdown &&
                                            location.pathname.startsWith(item.path))
                                        ? theme.palette.primary.main
                                        : "inherit",
                                "&:hover": {
                                    backgroundColor: theme.palette.action.hover,
                                },
                            }}
                        >
                            <ListItemText primary={item.label} />
                        </ListItem>
                    </Box>
                ))}
            </List>
        </Box>
    );

    return (
        <AppBar
            position="fixed"
            elevation={0}
            sx={{
                backgroundColor: theme.palette.background.paper,
                color: theme.palette.text.primary,
                borderBottom: `1px solid ${theme.palette.divider}`,
                boxShadow: theme.shadows[2],
                zIndex: 1300,
            }}
        >
            <Container maxWidth="false">
                <Toolbar
                    disableGutters
                    sx={{
                        justifyContent: "space-between",
                        alignItems: "center",
                        px: { xs: 2, sm: 0, md: 0 },
                        py: { xs: 0, sm: 0.5, md: 1 },
                        minHeight: { xs: 70, sm: 80, md: 100 },
                    }}
                >
                    {/* Mobile Layout */}
                    {isMobile ? (
                        <>
                            {/* Logo - Left */}
                            <Box
                                component={Link}
                                to="/"
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    textDecoration: "none",
                                    "&:hover": { transform: "scale(1.02)" },
                                    transition: "transform 0.2s ease",
                                }}
                            >
                                <Box
                                    component="img"
                                    src={logo}
                                    alt="Kalakruti Logo"
                                    sx={{
                                        height: 50,
                                        width: 50,
                                        objectFit: "contain",
                                        filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.1))",
                                        transition: "transform 0.2s ease",
                                        "&:hover": { transform: "scale(1.05)" },
                                    }}
                                />
                            </Box>

                            {/* Name - Center */}
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    textAlign: "center",
                                    flex: 1,
                                }}
                            >
                                <Typography
                                    sx={{
                                        color: theme.palette.primary.dark,
                                        fontWeight: "bold",
                                        fontSize: "1.4rem",
                                        letterSpacing: "0.1em",
                                        lineHeight: 1,
                                    }}
                                >
                                    KALAKRUTI
                                </Typography>
                                <Typography
                                    sx={{
                                        color: theme.palette.primary.dark,
                                        fontSize: "0.7rem",
                                        letterSpacing: "0.2em",
                                        lineHeight: 1.1,
                                    }}
                                >
                                    STUDIO
                                </Typography>
                            </Box>

                            {/* Hamburger - Right */}
                            <IconButton
                                color="inherit"
                                edge="end"
                                onClick={handleDrawerToggle}
                                sx={{
                                    color: theme.palette.text.primary,
                                    flexShrink: 0,
                                    "&:hover": {
                                        backgroundColor: theme.palette.action.hover,
                                    },
                                }}
                            >
                                <MenuIcon sx={{ fontSize: 28 }} />
                            </IconButton>
                        </>
                    ) : (
                        <>
                            {/* Desktop Logo + Name */}
                            <Box
                                component={Link}
                                to="/"
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    textDecoration: "none",
                                    transformOrigin: "left center",
                                    gap: 2.5,
                                    "&:hover": { transform: "scale(1.02)" },
                                    transition: "transform 0.2s ease",
                                }}
                            >
                                {/* Logo */}
                                <Box
                                    component="img"
                                    src={logo}
                                    alt="Kalakruti Logo"
                                    sx={{
                                        height: 100,
                                        width: 100,
                                        objectFit: "contain",
                                        filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.1))",
                                        transition: "transform 0.2s ease",
                                        "&:hover": { transform: "scale(1.05)" },
                                    }}
                                />

                                {/* Text */}
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        textAlign: "center",
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            color: theme.palette.primary.dark,
                                            fontWeight: "bold",
                                            fontSize: "2.2rem",
                                            letterSpacing: "0.1em",
                                            lineHeight: 1,
                                        }}
                                    >
                                        KALAKRUTI
                                    </Typography>
                                    <Typography
                                        sx={{
                                            color: theme.palette.primary.dark,
                                            fontSize: "1rem",
                                            letterSpacing: "0.2em",
                                            lineHeight: 1.1,
                                        }}
                                    >
                                        STUDIO
                                    </Typography>
                                </Box>
                            </Box>

                            {/* Desktop Navigation */}
                            <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                                {navigationItems.map((item) =>
                                    item.dropdown ? (
                                        <Dropdown
                                            key={item.label}
                                            trigger={["hover"]}
                                            getPopupContainer={() => document.body}
                                            overlayStyle={{ zIndex: 9999 }}
                                            dropdownRender={() => (
                                                <Box
                                                    sx={{
                                                        display: "grid",
                                                        gridTemplateColumns: "repeat(3, 1fr)",
                                                        gap: 1,
                                                        p: 2,
                                                        backgroundColor: "#fff",
                                                        borderRadius: 2,
                                                        boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                                                        minWidth: 600,
                                                    }}
                                                >
                                                    {item.dropdown.map((sub, index) => (
                                                        <Box
                                                            key={index}
                                                            component={Link}
                                                            to={sub.path}
                                                            sx={{
                                                                textDecoration: "none",
                                                                color: theme.palette.text.primary,
                                                                fontSize: "0.9rem",
                                                                fontWeight: 400,
                                                                py: 0.8,
                                                                px: 1.5,
                                                                borderRadius: 1,
                                                                transition: "all 0.2s ease",
                                                                "&:hover": {
                                                                    color: theme.palette.primary.main,
                                                                    backgroundColor:
                                                                        theme.palette.action.hover,
                                                                },
                                                            }}
                                                        >
                                                            {sub.label}
                                                        </Box>
                                                    ))}
                                                </Box>
                                            )}
                                        >
                                            <Button
                                                type="text"
                                                onClick={() => navigate(item.path)}
                                                style={{
                                                    fontWeight: location.pathname.startsWith(item.path)
                                                        ? "bold"
                                                        : "500",
                                                    color: location.pathname.startsWith(item.path)
                                                        ? theme.palette.primary.main
                                                        : theme.palette.text.primary,
                                                    fontSize: "1rem",
                                                    padding: "8px 16px",
                                                    borderRadius: 4,
                                                }}
                                            >
                                                <Space>
                                                    {item.label}
                                                    <DownOutlined style={{ fontSize: "12px", marginLeft: 4 }} />
                                                </Space>
                                            </Button>
                                        </Dropdown>
                                    ) : (
                                        <Box
                                            key={item.label}
                                            component={Link}
                                            to={item.path}
                                            sx={{
                                                textDecoration: "none",
                                                color:
                                                    location.pathname === item.path
                                                        ? theme.palette.primary.main
                                                        : theme.palette.text.primary,
                                                fontWeight:
                                                    location.pathname === item.path ? "bold" : "500",
                                                fontSize: "1rem",
                                                padding: "8px 16px",
                                                borderRadius: 1,
                                                "&:hover": {
                                                    backgroundColor: theme.palette.action.hover,
                                                },
                                            }}
                                        >
                                            {item.label}
                                        </Box>
                                    )
                                )}
                            </Box>
                        </>
                    )}

                </Toolbar>
            </Container>

            {/* Mobile Drawer */}
            <Drawer
                variant="temporary"
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{ keepMounted: true }}
                sx={{
                    display: { xs: "block", md: "none" },
                    "& .MuiDrawer-paper": {
                        boxSizing: "border-box",
                        width: 280,
                        backgroundColor: theme.palette.background.paper,
                        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12)",
                    },
                }}
            >
                {drawer}
            </Drawer>
        </AppBar>
    );
}