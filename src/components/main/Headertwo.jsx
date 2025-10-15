import React, { useState, useEffect } from 'react';
import {
    Box,
    Button,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    Typography,
    Paper,
    Grid,
    Card,
    CardContent,
    CardMedia,
    Collapse,
    ListItemButton,
    Divider,
    useTheme
} from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";

export default function Headertwo() {
    const location = useLocation();
    const navigate = useNavigate();
    const theme = useTheme();
    const [isMobile, setIsMobile] = useState(window.innerWidth < 960);

    const [mobileOpen, setMobileOpen] = useState(false);
    const [offeringsOpen, setOfferingsOpen] = useState(false);
    const [expandedSections, setExpandedSections] = useState({});
    const [mobileOfferingsOpen, setMobileOfferingsOpen] = useState(false);
    const [mobilePriceCalcOpen, setMobilePriceCalcOpen] = useState(false);

    const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
    const handleOfferingsToggle = () => setOfferingsOpen(!offeringsOpen);

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

    const navItems = [
        { label: 'How it works', path: '/how-it-works' },
        { label: 'Offerings', path: '/offerings', hasDropdown: true },
        { label: 'Price Calculators', path: '/price-calculators', dropdown: priceCalculatorsDropdown },
        { label: 'Modular Journey', path: '/modular-journey' },
    ];

    useEffect(() => {
        if (location.pathname === '/offerings') {
            setOfferingsOpen(true);
        } else {
            setOfferingsOpen(false);
        }
    }, [location.pathname]);

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
                            primary="How it works"
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
                            borderRadius: 1,
                            mb: 0.5,
                            backgroundColor: location.pathname === '/offerings' ? '#f0f0f0' : 'transparent',
                            '&:hover': { backgroundColor: '#f5f5f5' }
                        }}
                    >
                        <ListItemText
                            primary="Offerings"
                            primaryTypographyProps={{
                                fontWeight: location.pathname === '/offerings' ? 'bold' : '500',
                                color: location.pathname === '/offerings' ? '#1976d2' : '#333'
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
                            <Card
                                key={index}
                                onClick={() => handleMobileNavClick(offering.path)}
                                sx={{
                                    mb: 1.5,
                                    cursor: 'pointer',
                                    display: 'flex',
                                    height: '70px',
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                                    '&:hover': { boxShadow: '0 4px 12px rgba(0,0,0,0.12)' }
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    sx={{ width: '60px', objectFit: 'cover' }}
                                    image={offering.image}
                                    alt={offering.title}
                                />
                                <CardContent sx={{ p: 1.5, flex: 1 }}>
                                    <Typography variant="body2" sx={{ fontWeight: 'bold', fontSize: '0.85rem' }}>
                                        {offering.title}
                                    </Typography>
                                    <Typography variant="caption" sx={{ color: '#666', fontSize: '0.75rem' }}>
                                        {offering.subtitle}
                                    </Typography>
                                </CardContent>
                            </Card>
                        ))}

                        <Typography variant="caption" sx={{ color: '#666', fontWeight: 'bold', display: 'block', mb: 1, mt: 2 }}>
                            KITCHEN
                        </Typography>
                        {offeringsData.kitchen.map((item, index) => (
                            <ListItemButton
                                key={index}
                                onClick={() => handleMobileNavClick(item.path)}
                                sx={{ borderRadius: 1, py: 0.8, pl: 1 }}
                            >
                                <ListItemText
                                    primary={item.label}
                                    primaryTypographyProps={{ fontSize: '0.85rem' }}
                                />
                            </ListItemButton>
                        ))}

                        <Typography variant="caption" sx={{ color: '#666', fontWeight: 'bold', display: 'block', mb: 1, mt: 2 }}>
                            WARDROBE
                        </Typography>
                        {offeringsData.wardrobe.map((item, index) => (
                            <ListItemButton
                                key={index}
                                onClick={() => handleMobileNavClick(item.path)}
                                sx={{ borderRadius: 1, py: 0.8, pl: 1 }}
                            >
                                <ListItemText
                                    primary={item.label}
                                    primaryTypographyProps={{ fontSize: '0.85rem' }}
                                />
                            </ListItemButton>
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
            </List>
        </Box>
    );

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#fff',
                    borderRadius: isMobile ? 0 : '8px',
                    boxShadow: isMobile ? '0 -2px 10px rgba(0,0,0,0.08)' : '0 4px 16px rgba(0,0,0,0.08)',
                    py: 1.5,
                    px: { xs: 2, md: 4 },
                    width: '100%',
                    position: 'fixed',
                    top: isMobile ? 'auto' : '110px',
                    bottom: isMobile ? '0px' : 'auto',
                    left: 0,
                    right: 0,
                    zIndex: 1299,
                }}
            >
                {isMobile ? (
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                        <Typography variant="body2" sx={{ color: '#333', fontWeight: '500' }}>
                            Navigation
                        </Typography>
                        <IconButton
                            onClick={handleDrawerToggle}
                            sx={{
                                color: '#333',
                                '&:hover': { backgroundColor: '#f5f5f5' },
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>
                ) : (
                    <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 1 }}>
                        {navItems.map((item) =>
                            item.dropdown ? (
                                <Dropdown
                                    key={item.label}
                                    trigger={["hover"]}
                                    getPopupContainer={() => document.body}
                                    overlayStyle={{ zIndex: 2000 }}
                                    dropdownRender={() => (
                                        <Box
                                            sx={{
                                                display: "flex",
                                                flexDirection: "column",
                                                gap: 1,
                                                p: 2,
                                                backgroundColor: "#fff",
                                                borderRadius: 2,
                                                boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                                                minWidth: 250,
                                            }}
                                        >
                                            {item.dropdown.map((sub, index) => (
                                                <Box
                                                    key={index}
                                                    component={Link}
                                                    to={sub.path}
                                                    sx={{
                                                        textDecoration: "none",
                                                        color: '#333',
                                                        fontSize: "0.9rem",
                                                        py: 0.8,
                                                        px: 1.5,
                                                        borderRadius: 1,
                                                        "&:hover": {
                                                            color: '#1976d2',
                                                            backgroundColor: '#f5f5f5',
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
                                            fontWeight: location.pathname.startsWith(item.path) ? "bold" : "500",
                                            color: location.pathname.startsWith(item.path) ? '#1976d2' : '#333',
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
                                <Button
                                    key={item.label}
                                    onClick={handleOfferingsToggle}
                                    sx={{
                                        color: location.pathname === item.path ? '#1976d2' : '#333',
                                        fontWeight: location.pathname === item.path ? 'bold' : '500',
                                        mx: 2,
                                        textTransform: 'none',
                                        fontSize: '1rem',
                                        '&:hover': { backgroundColor: '#f5f5f5' },
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 0.5
                                    }}
                                >
                                    {item.label}
                                    {offeringsOpen ? (
                                        <ExpandLessIcon fontSize="small" />
                                    ) : (
                                        <ExpandMoreIcon fontSize="small" />
                                    )}
                                </Button>
                            ) : (
                                <Button
                                    key={item.label}
                                    component={Link}
                                    to={item.path}
                                    sx={{
                                        color: location.pathname === item.path ? '#1976d2' : '#333',
                                        fontWeight: location.pathname === item.path ? 'bold' : '500',
                                        mx: 2,
                                        textTransform: 'none',
                                        fontSize: '1rem',
                                        '&:hover': { backgroundColor: '#f5f5f5' },
                                    }}
                                >
                                    {item.label}
                                </Button>
                            )
                        )}

                        {/* Offerings Dropdown - Desktop */}
                        {offeringsOpen && (
                            <Paper
                                sx={{
                                    position: 'absolute',
                                    top: '100%',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    mt: 1,
                                    width: '90vw',
                                    maxWidth: '1200px',
                                    borderRadius: 2,
                                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12)',
                                    zIndex: 1300,
                                    overflow: 'hidden'
                                }}
                                onMouseLeave={() => setOfferingsOpen(false)}
                            >
                                <Box sx={{ p: 4 }}>
                                    <Grid container spacing={4}>
                                        <Grid item xs={12} md={6}>
                                            <Typography variant="overline" sx={{ color: '#666', fontWeight: 'bold' }}>
                                                EXPLORE OFFERINGS
                                            </Typography>
                                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mt: 1 }}>
                                                {offeringsData.exploreOfferings.map((offering, index) => (
                                                    <Card
                                                        key={index}
                                                        component={Link}
                                                        to={offering.path}
                                                        sx={{
                                                            textDecoration: 'none',
                                                            height: '80px',
                                                            display: 'flex',
                                                            flexDirection: 'row',
                                                            alignItems: 'center',
                                                            transition: 'transform 0.2s ease-in-out',
                                                            '&:hover': {
                                                                transform: 'translateY(-2px)',
                                                                boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                                                            }
                                                        }}
                                                    >
                                                        <CardMedia
                                                            component="img"
                                                            sx={{
                                                                width: '60px',
                                                                height: '60px',
                                                                objectFit: 'cover',
                                                                borderRadius: 1,
                                                                ml: 1.5
                                                            }}
                                                            image={offering.image}
                                                            alt={offering.title}
                                                        />
                                                        <CardContent sx={{ p: 1.5, flex: 1 }}>
                                                            <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                                                                {offering.title}
                                                            </Typography>
                                                            <Typography variant="body2" sx={{ color: '#666' }}>
                                                                {offering.subtitle}
                                                            </Typography>
                                                        </CardContent>
                                                    </Card>
                                                ))}
                                            </Box>
                                        </Grid>

                                        <Grid item xs={12} md={3}>
                                            <Typography variant="overline" sx={{ color: '#666', fontWeight: 'bold' }}>
                                                KITCHEN
                                            </Typography>
                                            <List sx={{ p: 0 }}>
                                                {offeringsData.kitchen.map((item, index) => (
                                                    <ListItem key={index} sx={{ p: 0, mb: 1 }}>
                                                        <Box sx={{ width: '100%' }}>
                                                            <ListItemButton
                                                                component={item.hasSubmenu ? 'div' : Link}
                                                                to={item.hasSubmenu ? undefined : item.path}
                                                                onClick={item.hasSubmenu ? () => handleSectionToggle(`kitchen-${index}`) : undefined}
                                                                sx={{
                                                                    borderRadius: 1,
                                                                    '&:hover': {
                                                                        backgroundColor: theme.palette.action.hover
                                                                    }
                                                                }}
                                                            >
                                                                <ListItemText
                                                                    primary={item.label}
                                                                    sx={{
                                                                        '& .MuiListItemText-primary': {
                                                                            fontSize: '0.9rem',
                                                                            color: 'text.primary'
                                                                        }
                                                                    }}
                                                                />
                                                                {item.hasSubmenu && (
                                                                    expandedSections[`kitchen-${index}`] ?
                                                                        <ExpandLessIcon fontSize="small" color="action" /> :
                                                                        <ExpandMoreIcon fontSize="small" color="action" />
                                                                )}
                                                            </ListItemButton>

                                                            {/* Suboptions */}
                                                            {item.hasSubmenu && item.suboptions && (
                                                                <Collapse in={expandedSections[`kitchen-${index}`]} timeout="auto" unmountOnExit>
                                                                    <List component="div" disablePadding sx={{ pl: 2 }}>
                                                                        {item.suboptions.map((suboption, subIndex) => (
                                                                            <Box key={subIndex} sx={{ p: 0, mb: 0.5 }}>
                                                                                <ListItemButton
                                                                                    component={Link}
                                                                                    to={suboption.path}
                                                                                    sx={{
                                                                                        borderRadius: 1,
                                                                                        py: 0.5,
                                                                                        '&:hover': {
                                                                                            backgroundColor: theme.palette.action.hover
                                                                                        }
                                                                                    }}
                                                                                >
                                                                                    <ListItemText
                                                                                        primary={suboption.label}
                                                                                        sx={{
                                                                                            '& .MuiListItemText-primary': {
                                                                                                fontSize: '0.8rem',
                                                                                                color: 'text.secondary',
                                                                                                pl: 1
                                                                                            }
                                                                                        }}
                                                                                    />
                                                                                </ListItemButton>
                                                                            </Box>
                                                                        ))}
                                                                    </List>
                                                                </Collapse>
                                                            )}
                                                        </Box>
                                                    </ListItem>
                                                ))}
                                            </List>
                                        </Grid>

                                        <Grid item xs={12} md={3}>
                                            <Typography variant="overline" sx={{ color: '#666', fontWeight: 'bold' }}>
                                                WARDROBE
                                            </Typography>
                                            <List sx={{ p: 0 }}>
                                                {offeringsData.wardrobe.map((item, index) => (
                                                    <ListItem key={index} sx={{ p: 0, mb: 1 }}>
                                                        <Box sx={{ width: '100%' }}>
                                                            <ListItemButton
                                                                component={item.hasSubmenu ? 'div' : Link}
                                                                to={item.hasSubmenu ? undefined : item.path}
                                                                onClick={item.hasSubmenu ? () => handleSectionToggle(`wardrobe-${index}`) : undefined}
                                                                sx={{
                                                                    borderRadius: 1,
                                                                    '&:hover': {
                                                                        backgroundColor: theme.palette.action.hover
                                                                    }
                                                                }}
                                                            >
                                                                <ListItemText
                                                                    primary={item.label}
                                                                    sx={{
                                                                        '& .MuiListItemText-primary': {
                                                                            fontSize: '0.9rem',
                                                                            color: 'text.primary'
                                                                        }
                                                                    }}
                                                                />
                                                                {item.hasSubmenu && (
                                                                    expandedSections[`wardrobe-${index}`] ?
                                                                        <ExpandLessIcon fontSize="small" color="action" /> :
                                                                        <ExpandMoreIcon fontSize="small" color="action" />
                                                                )}
                                                            </ListItemButton>

                                                            {/* Suboptions */}
                                                            {item.hasSubmenu && item.suboptions && (
                                                                <Collapse in={expandedSections[`wardrobe-${index}`]} timeout="auto" unmountOnExit>
                                                                    <List component="div" disablePadding sx={{ pl: 2 }}>
                                                                        {item.suboptions.map((suboption, subIndex) => (
                                                                            <Box key={subIndex} sx={{ p: 0, mb: 0.5 }}>
                                                                                <ListItemButton
                                                                                    component={Link}
                                                                                    to={suboption.path}
                                                                                    sx={{
                                                                                        borderRadius: 1,
                                                                                        py: 0.5,
                                                                                        '&:hover': {
                                                                                            backgroundColor: theme.palette.action.hover
                                                                                        }
                                                                                    }}
                                                                                >
                                                                                    <ListItemText
                                                                                        primary={suboption.label}
                                                                                        sx={{
                                                                                            '& .MuiListItemText-primary': {
                                                                                                fontSize: '0.8rem',
                                                                                                color: 'text.secondary',
                                                                                                pl: 1
                                                                                            }
                                                                                        }}
                                                                                    />
                                                                                </ListItemButton>
                                                                            </Box>
                                                                        ))}
                                                                    </List>
                                                                </Collapse>
                                                            )}
                                                        </Box>
                                                    </ListItem>
                                                ))}
                                            </List>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Paper>
                        )}
                    </Box>
                )}
            </Box>

            {/* Mobile Drawer */}
            {isMobile && (
                <Drawer
                    variant="temporary"
                    anchor="bottom"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{ keepMounted: true }}
                    sx={{
                        display: { xs: 'block', md: 'none' },
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
            )}
        </>
    );
}