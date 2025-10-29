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
    Collapse,
    ListItemButton,
    Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import logo from "../../assets/LogoKalaKruti.png";

// Ant Design imports
import { Dropdown, Button, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [mobileOfferingsOpen, setMobileOfferingsOpen] = useState(false);
    const [mobilePriceCalcOpen, setMobilePriceCalcOpen] = useState(false);
    const [expandedSections, setExpandedSections] = useState({});
    const theme = useTheme();
    // ✅ Treat anything up to 1100px (including iPad Pro) as mobile
    const isMobile = useMediaQuery("(max-width:1100px)");
    const location = useLocation();
    const navigate = useNavigate();

    const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

    const handleSectionToggle = (section) => {
        setExpandedSections(prev => ({
            ...prev,
            [section]: !prev[section]
        }));
    };

    const offeringsData = {
        exploreOfferings: [
            {
                title: "Modular Interiors",
                subtitle: "Kitchens, wardrobes and storage",
                image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=500&q=80",
                path: "/designs/modular-interiors"
            },
            {
                title: "Full Home Interiors",
                subtitle: "End-to-end home interiors",
                image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=500&q=80",
                path: "/designs/full-home-interiors"
            },
            {
                title: "Luxury interiors",
                subtitle: "Homes that redefine elegance",
                image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=500&q=80",
                path: "/designs/luxury-interiors"
            }
        ],
        kitchen: [
            { label: "Know Your Kitchen", path: "/kitchen/know-your-kitchen" },
            { label: "Kitchen Price Calculator", path: "/price-calculators/kitchen" },
            {
                label: "Kitchen Components",
                path: "/kitchen/components",
                hasSubmenu: true,
                suboptions: [
                    { label: "Cabinets", path: "/kitchen/components/cabinets" },
                    { label: "Handles", path: "/kitchen/components/handles" },
                    { label: "Finishes", path: "/kitchen/components/finishes" }
                ]
            }
        ],
        wardrobe: [
            { label: "Know Your Wardrobe", path: "/wardrobe/know-your-wardrobe" },
            { label: "Wardrobe Price Calculator", path: "/price-calculators/wardrobe" },
            {
                label: "Wardrobe Components",
                path: "/wardrobe/components",
                hasSubmenu: true,
                suboptions: [
                    { label: "Cabinets", path: "/wardrobe/components/cabinets" },
                    { label: "Handles", path: "/wardrobe/components/handles" },
                    { label: "Finishes", path: "/wardrobe/components/finishes" }
                ]
            }
        ]
    };

    const priceCalculatorsDropdown = [
        { label: 'Home Interior Calculator', path: '/price-calculators/home' },
        { label: 'Kitchen Calculator', path: '/price-calculators/kitchen' },
        { label: 'Wardrobe Calculator', path: '/price-calculators/wardrobe' },
    ];

    const navigationItems = [
        { label: "Home", path: "/" },
        { label: "Projects", path: "/projects" },
        {
            label: "Designs",
            path: "/designs",
            dropdown: [
                { label: "Kitchen Designs", path: "/designs/kitchen" },
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
                { label: "KalaKruti Studio Designs", path: "/designs/homes-livspace" },
                { label: "Home Office Designs", path: "/designs/home-office" },
                { label: "Home Wallpaper Designs", path: "/designs/wallpaper" },
                { label: "Tile Designs", path: "/designs/tile" },
                { label: "Study Room Designs", path: "/designs/study-room" },
                { label: "Space Saving Designs", path: "/designs/space-saving" },
                { label: "Door Designs", path: "/designs/door" },
                { label: "Crockery Unit Designs", path: "/designs/crockery-unit" },
            ],
        },
        { label: 'Process', path: '/how-it-works' },
        { label: 'Offerings', hasDropdown: true },
        { label: 'Price Calculators', path: '/price-calculators', dropdown: priceCalculatorsDropdown },
        // { label: "FAQs", path: "/faq" },
        { label: "Contact", path: "/contact" },
        { label: "About Us", path: "/aboutus" },
    ];

    const handleMobileNavClick = (path) => {
        navigate(path);
        setMobileOpen(false);
        setMobileOfferingsOpen(false);
        setMobilePriceCalcOpen(false);
    };

    const drawer = (
        <Box sx={{ width: '100%', height: '100%', pt: 2, pb: 10, overflowY: 'auto' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 3, mb: 2 }}>
                <Typography variant="h6" sx={{ color: '#333', fontWeight: 'bold' }}>
                    Menu
                </Typography>
                <IconButton onClick={handleDrawerToggle} sx={{ color: '#333' }}>
                    <CloseIcon />
                </IconButton>
            </Box>

            <Divider sx={{ mb: 1 }} />

            <List sx={{ px: 2, pb: 8 }}>
                {/* Home */}
                <ListItem disablePadding>
                    <ListItemButton
                        onClick={() => handleMobileNavClick('/')}
                        sx={{
                            borderRadius: 1,
                            mb: 0.5,
                            backgroundColor: location.pathname === '/' ? '#f0f0f0' : 'transparent',
                            '&:hover': { backgroundColor: '#f5f5f5' }
                        }}
                    >
                        <ListItemText
                            primary="Home"
                            primaryTypographyProps={{
                                fontWeight: location.pathname === '/' ? 'bold' : '500',
                                color: location.pathname === '/' ? '#1976d2' : '#333'
                            }}
                        />
                    </ListItemButton>
                </ListItem>

                {/* Projects */}
                <ListItem disablePadding>
                    <ListItemButton
                        onClick={() => handleMobileNavClick('/projects')}
                        sx={{
                            borderRadius: 1,
                            mb: 0.5,
                            backgroundColor: location.pathname === '/projects' ? '#f0f0f0' : 'transparent',
                            '&:hover': { backgroundColor: '#f5f5f5' }
                        }}
                    >
                        <ListItemText
                            primary="Projects"
                            primaryTypographyProps={{
                                fontWeight: location.pathname === '/projects' ? 'bold' : '500',
                                color: location.pathname === '/projects' ? '#1976d2' : '#333'
                            }}
                        />
                    </ListItemButton>
                </ListItem>

                {/* Designs */}
                <ListItem disablePadding>
                    <ListItemButton
                        onClick={() => handleMobileNavClick('/designs')}
                        sx={{
                            borderRadius: 1,
                            mb: 0.5,
                            backgroundColor: location.pathname.startsWith('/designs') ? '#f0f0f0' : 'transparent',
                            '&:hover': { backgroundColor: '#f5f5f5' }
                        }}
                    >
                        <ListItemText
                            primary="Designs"
                            primaryTypographyProps={{
                                fontWeight: location.pathname.startsWith('/designs') ? 'bold' : '500',
                                color: location.pathname.startsWith('/designs') ? '#1976d2' : '#333'
                            }}
                        />
                    </ListItemButton>
                </ListItem>

                {/* How it works */}
                <ListItem disablePadding>
                    <ListItemButton
                        onClick={() => handleMobileNavClick('/how-it-works')}
                        sx={{
                            borderRadius: 1,
                            mb: 0.5,
                            backgroundColor: location.pathname === '/how-it-works' ? '#f0f0f0' : 'transparent',
                            '&:hover': { backgroundColor: '#f5f5f5' }
                        }}
                    >
                        <ListItemText
                            primary="Process"
                            primaryTypographyProps={{
                                fontWeight: location.pathname === '/how-it-works' ? 'bold' : '500',
                                color: location.pathname === '/how-it-works' ? '#1976d2' : '#333'
                            }}
                        />
                    </ListItemButton>
                </ListItem>

                {/* Offerings with Dropdown */}
                <ListItem disablePadding>
                    <ListItemButton
                        onClick={() => setMobileOfferingsOpen(!mobileOfferingsOpen)}
                        sx={{
                            mb: 0.5,
                            border: "none", // ✅ ensures no visible edge
                            outline: "none", // ✅ removes focus outlines
                            boxShadow: "none", // ✅ removes elevation shadows
                            backgroundColor:
                                location.pathname === "/offerings" ? "#f0f0f0" : "transparent",
                            borderRadius: 1.5,
                            "&:hover": {
                                backgroundColor: "#f5f5f5",
                                boxShadow: "none",
                            },
                            "&:focus": {
                                outline: "none",
                                boxShadow: "none",
                            },
                            "&::before": { display: "none" }, // ✅ in case ListItemButton adds pseudo-element borders
                        }}
                    >
                        <ListItemText
                            primary="Offerings"
                            primaryTypographyProps={{
                                fontWeight: location.pathname === "/offerings" ? "bold" : 500,
                                color: location.pathname === "/offerings" ? "#1976d2" : "#333",
                            }}
                        />
                        {mobileOfferingsOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </ListItemButton>
                </ListItem>


                <Collapse in={mobileOfferingsOpen} timeout="auto" unmountOnExit>
                    <Box sx={{ pl: 2, pr: 1 }}>
                        <Typography variant="caption" sx={{ color: '#666', fontWeight: 'bold', display: 'block', mb: 1, mt: 1 }}>
                            EXPLORE OFFERINGS
                        </Typography>
                        {offeringsData.exploreOfferings.map((offering, index) => (
                            <Box
                                key={index}
                                onClick={() => handleMobileNavClick(offering.path)}
                                sx={{
                                    mb: 1.5,
                                    cursor: 'pointer',
                                    display: 'flex',
                                    height: '70px',
                                    borderRadius: 1,
                                    backgroundColor: '#fff',
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                                    '&:hover': { boxShadow: '0 4px 12px rgba(0,0,0,0.12)' }
                                }}
                            >
                                <Box
                                    component="img"
                                    sx={{ width: '60px', height: '60px', objectFit: 'cover', borderRadius: '8px 0 0 8px' }}
                                    src={offering.image}
                                    alt={offering.title}
                                />
                                <Box sx={{ p: 1.5, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'bold', fontSize: '0.85rem', mb: 0.5 }}>
                                        {offering.title}
                                    </Typography>
                                    <Typography variant="caption" sx={{ color: '#666', fontSize: '0.75rem' }}>
                                        {offering.subtitle}
                                    </Typography>
                                </Box>
                            </Box>
                        ))}

                        <Typography variant="caption" sx={{ color: '#666', fontWeight: 'bold', display: 'block', mb: 1, mt: 2 }}>
                            KITCHEN
                        </Typography>
                        {offeringsData.kitchen.map((item, index) => (
                            <Box key={index} sx={{ mb: 0.5 }}>
                                <ListItemButton
                                    component={item.hasSubmenu ? 'div' : Link}
                                    to={item.hasSubmenu ? undefined : item.path}
                                    onClick={item.hasSubmenu ? () => handleSectionToggle(`mobile-kitchen-${index}`) : () => handleMobileNavClick(item.path)}
                                    sx={{
                                        borderRadius: 1,
                                        py: 0.8,
                                        pl: 1,
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center'
                                    }}
                                >
                                    <ListItemText
                                        primary={item.label}
                                        primaryTypographyProps={{ fontSize: '0.85rem' }}
                                    />
                                    {item.hasSubmenu && (
                                        expandedSections[`mobile-kitchen-${index}`] ?
                                            <ExpandLessIcon fontSize="small" /> :
                                            <ExpandMoreIcon fontSize="small" />
                                    )}
                                </ListItemButton>

                                {/* Suboptions */}
                                {item.hasSubmenu && item.suboptions && (
                                    <Collapse in={expandedSections[`mobile-kitchen-${index}`]} timeout="auto" unmountOnExit>
                                        <Box sx={{ pl: 2 }}>
                                            {item.suboptions.map((suboption, subIndex) => (
                                                <ListItemButton
                                                    key={subIndex}
                                                    component={Link}
                                                    to={suboption.path}
                                                    onClick={() => handleMobileNavClick(suboption.path)}
                                                    sx={{
                                                        borderRadius: 1,
                                                        py: 0.5,
                                                        pl: 2,
                                                        backgroundColor: location.pathname === suboption.path ? '#e3f2fd' : 'transparent'
                                                    }}
                                                >
                                                    <ListItemText
                                                        primary={suboption.label}
                                                        primaryTypographyProps={{
                                                            fontSize: '0.8rem',
                                                            color: location.pathname === suboption.path ? '#1976d2' : '#666'
                                                        }}
                                                    />
                                                </ListItemButton>
                                            ))}
                                        </Box>
                                    </Collapse>
                                )}
                            </Box>
                        ))}

                        <Typography variant="caption" sx={{ color: '#666', fontWeight: 'bold', display: 'block', mb: 1, mt: 2 }}>
                            WARDROBE
                        </Typography>
                        {offeringsData.wardrobe.map((item, index) => (
                            <Box key={index} sx={{ mb: 0.5 }}>
                                <ListItemButton
                                    component={item.hasSubmenu ? 'div' : Link}
                                    to={item.hasSubmenu ? undefined : item.path}
                                    onClick={item.hasSubmenu ? () => handleSectionToggle(`mobile-wardrobe-${index}`) : () => handleMobileNavClick(item.path)}
                                    sx={{
                                        borderRadius: 1,
                                        py: 0.8,
                                        pl: 1,
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center'
                                    }}
                                >
                                    <ListItemText
                                        primary={item.label}
                                        primaryTypographyProps={{ fontSize: '0.85rem' }}
                                    />
                                    {item.hasSubmenu && (
                                        expandedSections[`mobile-wardrobe-${index}`] ?
                                            <ExpandLessIcon fontSize="small" /> :
                                            <ExpandMoreIcon fontSize="small" />
                                    )}
                                </ListItemButton>

                                {/* Suboptions */}
                                {item.hasSubmenu && item.suboptions && (
                                    <Collapse in={expandedSections[`mobile-wardrobe-${index}`]} timeout="auto" unmountOnExit>
                                        <Box sx={{ pl: 2 }}>
                                            {item.suboptions.map((suboption, subIndex) => (
                                                <ListItemButton
                                                    key={subIndex}
                                                    component={Link}
                                                    to={suboption.path}
                                                    onClick={() => handleMobileNavClick(suboption.path)}
                                                    sx={{
                                                        borderRadius: 1,
                                                        py: 0.5,
                                                        pl: 2,
                                                        backgroundColor: location.pathname === suboption.path ? '#e3f2fd' : 'transparent'
                                                    }}
                                                >
                                                    <ListItemText
                                                        primary={suboption.label}
                                                        primaryTypographyProps={{
                                                            fontSize: '0.8rem',
                                                            color: location.pathname === suboption.path ? '#1976d2' : '#666'
                                                        }}
                                                    />
                                                </ListItemButton>
                                            ))}
                                        </Box>
                                    </Collapse>
                                )}
                            </Box>
                        ))}
                    </Box>
                </Collapse>

                {/* Price Calculators with Dropdown */}
                <ListItem disablePadding>
                    <ListItemButton
                        onClick={() => setMobilePriceCalcOpen(!mobilePriceCalcOpen)}
                        sx={{
                            borderRadius: 1,
                            mb: 0.5,
                            backgroundColor: location.pathname.startsWith('/price-calculators') ? '#f0f0f0' : 'transparent',
                            '&:hover': { backgroundColor: '#f5f5f5' }
                        }}
                    >
                        <ListItemText
                            primary="Price Calculators"
                            primaryTypographyProps={{
                                fontWeight: location.pathname.startsWith('/price-calculators') ? 'bold' : '500',
                                color: location.pathname.startsWith('/price-calculators') ? '#1976d2' : '#333'
                            }}
                        />
                        {mobilePriceCalcOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                    </ListItemButton>
                </ListItem>

                <Collapse in={mobilePriceCalcOpen} timeout="auto" unmountOnExit>
                    <Box sx={{ pl: 2 }}>
                        {priceCalculatorsDropdown.map((item, index) => (
                            <ListItemButton
                                key={index}
                                onClick={() => handleMobileNavClick(item.path)}
                                sx={{
                                    borderRadius: 1,
                                    py: 1,
                                    backgroundColor: location.pathname === item.path ? '#e3f2fd' : 'transparent'
                                }}
                            >
                                <ListItemText
                                    primary={item.label}
                                    primaryTypographyProps={{
                                        fontSize: '0.9rem',
                                        color: location.pathname === item.path ? '#1976d2' : '#333'
                                    }}
                                />
                            </ListItemButton>
                        ))}
                    </Box>
                </Collapse>

                {/* Modular Journey */}
                <ListItem disablePadding>
                    <ListItemButton
                        onClick={() => handleMobileNavClick('/modular-journey')}
                        sx={{
                            borderRadius: 1,
                            mb: 0.5,
                            backgroundColor: location.pathname === '/modular-journey' ? '#f0f0f0' : 'transparent',
                            '&:hover': { backgroundColor: '#f5f5f5' }
                        }}
                    >
                        <ListItemText
                            primary="Modular Journey"
                            primaryTypographyProps={{
                                fontWeight: location.pathname === '/modular-journey' ? 'bold' : '500',
                                color: location.pathname === '/modular-journey' ? '#1976d2' : '#333'
                            }}
                        />
                    </ListItemButton>
                </ListItem>

                {/* FAQs */}
                <ListItem disablePadding>
                    <ListItemButton
                        onClick={() => handleMobileNavClick('/faq')}
                        sx={{
                            borderRadius: 1,
                            mb: 0.5,
                            backgroundColor: location.pathname === '/faq' ? '#f0f0f0' : 'transparent',
                            '&:hover': { backgroundColor: '#f5f5f5' }
                        }}
                    >
                        <ListItemText
                            primary="FAQs"
                            primaryTypographyProps={{
                                fontWeight: location.pathname === '/faq' ? 'bold' : '500',
                                color: location.pathname === '/faq' ? '#1976d2' : '#333'
                            }}
                        />
                    </ListItemButton>
                </ListItem>

                {/* Contact */}
                <ListItem disablePadding>
                    <ListItemButton
                        onClick={() => handleMobileNavClick('/contact')}
                        sx={{
                            borderRadius: 1,
                            mb: 0.5,
                            backgroundColor: location.pathname === '/contact' ? '#f0f0f0' : 'transparent',
                            '&:hover': { backgroundColor: '#f5f5f5' }
                        }}
                    >
                        <ListItemText
                            primary="Contact"
                            primaryTypographyProps={{
                                fontWeight: location.pathname === '/contact' ? 'bold' : '500',
                                color: location.pathname === '/contact' ? '#1976d2' : '#333'
                            }}
                        />
                    </ListItemButton>
                </ListItem>

                {/* About Us */}
                <ListItem disablePadding>
                    <ListItemButton
                        onClick={() => handleMobileNavClick('/aboutus')}
                        sx={{
                            borderRadius: 1,
                            mb: 0.5,
                            backgroundColor: location.pathname === '/aboutus' ? '#f0f0f0' : 'transparent',
                            '&:hover': { backgroundColor: '#f5f5f5' }
                        }}
                    >
                        <ListItemText
                            primary="About Us"
                            primaryTypographyProps={{
                                fontWeight: location.pathname === '/aboutus' ? 'bold' : '500',
                                color: location.pathname === '/aboutus' ? '#1976d2' : '#333'
                            }}
                        />
                    </ListItemButton>
                </ListItem>
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
                        minHeight: { xs: 60, sm: 65, md: 70 },
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
                                        height: 40,
                                        width: 40,
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
                                        fontSize: "1.2rem",
                                        letterSpacing: "0.1em",
                                        lineHeight: 1,
                                    }}
                                >
                                    KALAKRUTI
                                </Typography>
                                <Typography
                                    sx={{
                                        color: theme.palette.primary.dark,
                                        fontSize: "0.6rem",
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
                                <MenuIcon sx={{ fontSize: 24 }} />
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
                                        height: 60,
                                        width: 60,
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
                                            fontSize: "1.6rem",
                                            letterSpacing: "0.1em",
                                            lineHeight: 1,
                                        }}
                                    >
                                        KALAKRUTI
                                    </Typography>
                                    <Typography
                                        sx={{
                                            color: theme.palette.primary.dark,
                                            fontSize: "0.8rem",
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
                                    ) : item.hasDropdown ? (
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
                                                    {/* Explore Offerings Section */}
                                                    <Box sx={{ gridColumn: "1 / 2" }}>
                                                        <Typography variant="overline" sx={{ color: '#666', fontWeight: 'bold', fontSize: '0.7rem', mb: 1, display: 'block' }}>
                                                            EXPLORE OFFERINGS
                                                        </Typography>
                                                        {offeringsData.exploreOfferings.map((offering, index) => (
                                                            <Box
                                                                key={index}
                                                                component={Link}
                                                                to={offering.path}
                                                                sx={{
                                                                    textDecoration: "none",
                                                                    color: theme.palette.text.primary,
                                                                    fontSize: "0.9rem",
                                                                    fontWeight: 400,
                                                                    py: 0.8,
                                                                    px: 1.5,
                                                                    borderRadius: 1,
                                                                    transition: "all 0.2s ease",
                                                                    display: 'flex',
                                                                    alignItems: 'center',
                                                                    gap: 1,
                                                                    mb: 1,
                                                                    "&:hover": {
                                                                        color: theme.palette.primary.main,
                                                                        backgroundColor: theme.palette.action.hover,
                                                                    },
                                                                }}
                                                            >
                                                                <Box
                                                                    component="img"
                                                                    src={offering.image}
                                                                    alt={offering.title}
                                                                    sx={{
                                                                        width: 30,
                                                                        height: 30,
                                                                        borderRadius: 0.5,
                                                                        objectFit: 'cover'
                                                                    }}
                                                                />
                                                                <Box>
                                                                    <Typography variant="body2" sx={{ fontWeight: 'bold', fontSize: '0.85rem', lineHeight: 1.2 }}>
                                                                        {offering.title}
                                                                    </Typography>
                                                                    <Typography variant="caption" sx={{ color: '#666', fontSize: '0.7rem', lineHeight: 1.2 }}>
                                                                        {offering.subtitle}
                                                                    </Typography>
                                                                </Box>
                                                            </Box>
                                                        ))}
                                                    </Box>

                                                    {/* Kitchen Section */}
                                                    <Box sx={{ gridColumn: "2 / 3" }}>
                                                        <Typography variant="overline" sx={{ color: '#666', fontWeight: 'bold', fontSize: '0.7rem', mb: 1, display: 'block' }}>
                                                            KITCHEN
                                                        </Typography>
                                                        {offeringsData.kitchen.map((item, index) => (
                                                            <Box key={index} sx={{ mb: 0.5 }}>
                                                                <Box
                                                                    component={item.hasSubmenu ? 'div' : Link}
                                                                    to={item.hasSubmenu ? undefined : item.path}
                                                                    onClick={item.hasSubmenu ? () => handleSectionToggle(`kitchen-${index}`) : undefined}
                                                                    sx={{
                                                                        textDecoration: "none",
                                                                        color: theme.palette.text.primary,
                                                                        fontSize: "0.9rem",
                                                                        fontWeight: 400,
                                                                        py: 0.8,
                                                                        px: 1.5,
                                                                        borderRadius: 1,
                                                                        transition: "all 0.2s ease",
                                                                        display: 'flex',
                                                                        alignItems: 'center',
                                                                        justifyContent: 'space-between',
                                                                        cursor: item.hasSubmenu ? 'pointer' : 'default',
                                                                        "&:hover": {
                                                                            color: theme.palette.primary.main,
                                                                            backgroundColor: theme.palette.action.hover,
                                                                        },
                                                                    }}
                                                                >
                                                                    <span>{item.label}</span>
                                                                    {item.hasSubmenu && (
                                                                        expandedSections[`kitchen-${index}`] ?
                                                                            <ExpandLessIcon fontSize="small" /> :
                                                                            <ExpandMoreIcon fontSize="small" />
                                                                    )}
                                                                </Box>

                                                                {/* Suboptions */}
                                                                {item.hasSubmenu && item.suboptions && (
                                                                    <Collapse in={expandedSections[`kitchen-${index}`]} timeout="auto" unmountOnExit>
                                                                        <Box sx={{ pl: 2 }}>
                                                                            {item.suboptions.map((suboption, subIndex) => (
                                                                                <Box
                                                                                    key={subIndex}
                                                                                    component={Link}
                                                                                    to={suboption.path}
                                                                                    sx={{
                                                                                        textDecoration: "none",
                                                                                        color: theme.palette.text.secondary,
                                                                                        fontSize: "0.8rem",
                                                                                        fontWeight: 400,
                                                                                        py: 0.5,
                                                                                        px: 1.5,
                                                                                        borderRadius: 1,
                                                                                        transition: "all 0.2s ease",
                                                                                        display: 'block',
                                                                                        mb: 0.3,
                                                                                        "&:hover": {
                                                                                            color: theme.palette.primary.main,
                                                                                            backgroundColor: theme.palette.action.hover,
                                                                                        },
                                                                                    }}
                                                                                >
                                                                                    {suboption.label}
                                                                                </Box>
                                                                            ))}
                                                                        </Box>
                                                                    </Collapse>
                                                                )}
                                                            </Box>
                                                        ))}
                                                    </Box>

                                                    {/* Wardrobe Section */}
                                                    <Box sx={{ gridColumn: "3 / 4" }}>
                                                        <Typography variant="overline" sx={{ color: '#666', fontWeight: 'bold', fontSize: '0.7rem', mb: 1, display: 'block' }}>
                                                            WARDROBE
                                                        </Typography>
                                                        {offeringsData.wardrobe.map((item, index) => (
                                                            <Box key={index} sx={{ mb: 0.5 }}>
                                                                <Box
                                                                    component={item.hasSubmenu ? 'div' : Link}
                                                                    to={item.hasSubmenu ? undefined : item.path}
                                                                    onClick={item.hasSubmenu ? () => handleSectionToggle(`wardrobe-${index}`) : undefined}
                                                                    sx={{
                                                                        textDecoration: "none",
                                                                        color: theme.palette.text.primary,
                                                                        fontSize: "0.9rem",
                                                                        fontWeight: 400,
                                                                        py: 0.8,
                                                                        px: 1.5,
                                                                        borderRadius: 1,
                                                                        transition: "all 0.2s ease",
                                                                        display: 'flex',
                                                                        alignItems: 'center',
                                                                        justifyContent: 'space-between',
                                                                        cursor: item.hasSubmenu ? 'pointer' : 'default',
                                                                        "&:hover": {
                                                                            color: theme.palette.primary.main,
                                                                            backgroundColor: theme.palette.action.hover,
                                                                        },
                                                                    }}
                                                                >
                                                                    <span>{item.label}</span>
                                                                    {item.hasSubmenu && (
                                                                        expandedSections[`wardrobe-${index}`] ?
                                                                            <ExpandLessIcon fontSize="small" /> :
                                                                            <ExpandMoreIcon fontSize="small" />
                                                                    )}
                                                                </Box>

                                                                {/* Suboptions */}
                                                                {item.hasSubmenu && item.suboptions && (
                                                                    <Collapse in={expandedSections[`wardrobe-${index}`]} timeout="auto" unmountOnExit>
                                                                        <Box sx={{ pl: 2 }}>
                                                                            {item.suboptions.map((suboption, subIndex) => (
                                                                                <Box
                                                                                    key={subIndex}
                                                                                    component={Link}
                                                                                    to={suboption.path}
                                                                                    sx={{
                                                                                        textDecoration: "none",
                                                                                        color: theme.palette.text.secondary,
                                                                                        fontSize: "0.8rem",
                                                                                        fontWeight: 400,
                                                                                        py: 0.5,
                                                                                        px: 1.5,
                                                                                        borderRadius: 1,
                                                                                        transition: "all 0.2s ease",
                                                                                        display: 'block',
                                                                                        mb: 0.3,
                                                                                        "&:hover": {
                                                                                            color: theme.palette.primary.main,
                                                                                            backgroundColor: theme.palette.action.hover,
                                                                                        },
                                                                                    }}
                                                                                >
                                                                                    {suboption.label}
                                                                                </Box>
                                                                            ))}
                                                                        </Box>
                                                                    </Collapse>
                                                                )}
                                                            </Box>
                                                        ))}
                                                    </Box>
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
                anchor="bottom"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{ keepMounted: true }}
                sx={{
                    display: isMobile ? 'block' : 'none', // ← Use your custom breakpoint
                    '& .MuiDrawer-paper': {
                        boxSizing: 'border-box',
                        height: 'auto',
                        maxHeight: '85vh',
                        borderTopLeftRadius: 16,
                        borderTopRightRadius: 16,
                        backgroundColor: '#fff',
                        boxShadow: '0 -8px 32px rgba(0, 0, 0, 0.12)',
                        overflow: 'auto',
                        paddingBottom: '80px'
                    },
                }}
            >
                {drawer}
            </Drawer>
        </AppBar>
    );
}