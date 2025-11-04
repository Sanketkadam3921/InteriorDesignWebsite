import React, { useState } from 'react';
import {
    Box,
    Container,
    Typography,
    Button,
    Chip,
    Breadcrumbs,
    Link,
    useTheme,
    styled,
    IconButton,
    Divider,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Collapse
} from '@mui/material';
import {
    ArrowBack,
    Home,
    Kitchen,
    ArrowForward,
    ArrowBackIos,
    ExpandMore,
    ExpandLess,
    Download,
    Chat,
    Add
} from '@mui/icons-material';
import { useNavigate, useParams } from 'react-router-dom';

// Styled components
const ProductImageContainer = styled(Box)(({ theme }) => ({
    position: 'relative',
    width: '100%',
    height: '400px',
    borderRadius: '8px',
    backgroundColor: '#f5f5f5',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    textAlign: 'center'
}));

const ThumbnailContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: '8px',
    marginTop: '16px',
    justifyContent: 'center',
    '& .thumbnail': {
        width: '80px',
        height: '60px',
        borderRadius: '4px',
        overflow: 'hidden',
        cursor: 'pointer',
        border: '2px solid transparent',
        transition: 'border-color 0.2s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5f5f5',
        '&.active': {
            borderColor: theme.palette.primary.main,
        },
        '& img': {
            maxWidth: '100%',
            maxHeight: '100%',
            objectFit: 'contain',
        }
    }
}));

const InfoPanel = styled(Box)(({ theme }) => ({
    backgroundColor: '#f8f9fa',
    padding: '16px',
    borderRadius: '8px',
    border: '1px solid #e9ecef',
}));

const SpecChip = styled(Chip)(({ theme }) => ({
    margin: '4px 8px 4px 0',
    fontSize: '0.75rem',
    height: '28px',
    backgroundColor: '#e3f2fd',
    color: theme.palette.primary.main,
    border: '1px solid #bbdefb',
}));

export default function KitchenCabinetDetail() {
    const navigate = useNavigate();
    const theme = useTheme();
    const { id, category } = useParams();
    const [selectedImage, setSelectedImage] = useState(0);
    const [expandedDescription, setExpandedDescription] = useState(false);

    // Enhanced cabinet data with detailed information
    const cabinetData = {
        baseUnits: [
            {
                id: 1,
                title: "Sink Unit",
                category: "BASE SINK UNITS - WB",
                description: "Specialized base cabinet designed to house your kitchen sink with proper plumbing access.",
                shortOverview: "A durable under-sink base unit with easy access doors—ideal for water lines and cleaning supplies.",
                fullDescription: "Designed for standard kitchen sinks, this unit offers a durable laminate exterior and a moisture-sealed interior. Compatible with most plumbing layouts, the wide door opening allows easy access to pipes and cleaning supplies. Includes soft-close hinges and adjustable legs for uneven floors.",
                keyHighlights: [
                    "Engineered wood with laminate finish",
                    "Moisture-resistant carcass",
                    "Soft-close hinges",
                    "Easy wipe-clean surfaces"
                ],
                specs: {
                    range: "Aarambh by KalaKruti",
                    grade: "Premium",
                    cabinetType: "Sink Unit",
                    inStock: "Yes",
                    hardware: "Hettich Hinges"
                },
                careNotes: [
                    "Wipe with a damp cloth; avoid harsh chemicals",
                    "Professional installation recommended; check plumbing clearance",
                    "Allow 5–7 mm tolerance around sink cut-out"
                ],
                leadTime: "In-stock. Standard dispatch in 3–5 days. 1-year warranty on hardware.",
                images: [
                    "https://images.livspace-cdn.com/w:654/h:450/plain/https://imgs.livspace.com/2625972-original/short-base-unit.jpg",
                    "https://images.livspace-cdn.com/w:654/h:450/plain/https://imgs.livspace.com/2626143-original/base-unit-3-ss-drawers-2m-1l.jpg",
                    "https://images.livspace-cdn.com/w:654/h:450/plain/https://imgs.livspace.com/2630147-original/short-base-unit.jpg"
                ],
                tags: ["Aarambh by KalaKruti", "Premium"]
            },
            {
                id: 2,
                title: "Blind Corner Unit, 1 Shelf",
                category: "BASE CORNER UNITS - WB",
                description: "Smart corner solutions with single shelf for organized storage in corner spaces.",
                shortOverview: "Maximize corner space with this smart storage solution featuring a single shelf for organized corner storage.",
                fullDescription: "This corner unit is designed to make the most of your kitchen's corner space. Featuring a single shelf system, it provides organized storage while maintaining easy access to items. The unit includes soft-close mechanisms and is built with moisture-resistant materials for long-lasting performance.",
                keyHighlights: [
                    "Corner space optimization",
                    "Single shelf configuration",
                    "Soft-close mechanisms",
                    "Moisture-resistant construction"
                ],
                specs: {
                    range: "Semi Modular Metal",
                    grade: "Standard",
                    cabinetType: "Corner Unit",
                    inStock: "Yes",
                    hardware: "Standard Hinges"
                },
                careNotes: [
                    "Regular dusting with dry cloth",
                    "Avoid excessive moisture exposure",
                    "Check shelf alignment periodically"
                ],
                leadTime: "In-stock. Standard dispatch in 3–5 days. 1-year warranty on hardware.",
                images: [
                    "https://images.livspace-cdn.com/w:654/h:450/plain/https://imgs.livspace.com/2626143-original/base-unit-3-ss-drawers-2m-1l.jpg",
                    "https://images.livspace-cdn.com/w:654/h:450/plain/https://imgs.livspace.com/2625972-original/short-base-unit.jpg"
                ],
                tags: ["Semi Modular Metal"]
            },
            {
                id: 3,
                title: "Blind Corner Unit, 2 Dee Trays",
                category: "BASE CORNER UNITS - WB",
                description: "Advanced corner solutions with two Dee-shaped pull-out trays for maximum corner utilization.",
                shortOverview: "Advanced corner storage with two Dee-shaped pull-out trays for maximum space utilization and easy access.",
                fullDescription: "This advanced corner unit features two Dee-shaped pull-out trays that maximize corner space utilization. The innovative design allows for easy access to items stored in the corner while maintaining organized storage. Built with premium materials and soft-close mechanisms for smooth operation.",
                keyHighlights: [
                    "Two Dee-shaped pull-out trays",
                    "Maximum corner space utilization",
                    "Premium construction materials",
                    "Soft-close mechanisms"
                ],
                specs: {
                    range: "Premium",
                    grade: "Premium",
                    cabinetType: "Corner Unit",
                    inStock: "Yes",
                    hardware: "Premium Hinges"
                },
                careNotes: [
                    "Regular cleaning with mild detergent",
                    "Check tray alignment and smooth operation",
                    "Avoid overloading trays"
                ],
                leadTime: "In-stock. Standard dispatch in 3–5 days. 1-year warranty on hardware.",
                images: [
                    "https://images.livspace-cdn.com/w:654/h:450/plain/https://imgs.livspace.com/2630147-original/short-base-unit.jpg",
                    "https://images.livspace-cdn.com/w:654/h:450/plain/https://imgs.livspace.com/2626143-original/base-unit-3-ss-drawers-2m-1l.jpg"
                ],
                tags: ["Premium"]
            },
            {
                id: 4,
                title: "Sink Unit",
                category: "BASE SINK UNITS - WB",
                description: "Specialized base cabinet designed to house your kitchen sink with proper plumbing access.",
                shortOverview: "A durable under-sink base unit with easy access doors—ideal for water lines and cleaning supplies.",
                fullDescription: "This premium sink unit is designed for standard kitchen sinks with enhanced durability features. The moisture-sealed interior protects against water damage while the wide door opening provides easy access to plumbing and cleaning supplies. Features adjustable legs for uneven floors.",
                keyHighlights: [
                    "Moisture-sealed interior",
                    "Wide door opening for easy access",
                    "Adjustable legs for uneven floors",
                    "Premium laminate finish"
                ],
                specs: {
                    range: "Aarambh by KalaKruti",
                    grade: "Premium",
                    cabinetType: "Sink Unit",
                    inStock: "Yes",
                    hardware: "Hettich Hinges"
                },
                careNotes: [
                    "Wipe with a damp cloth; avoid harsh chemicals",
                    "Professional installation recommended; check plumbing clearance",
                    "Allow 5–7 mm tolerance around sink cut-out"
                ],
                leadTime: "In-stock. Standard dispatch in 3–5 days. 1-year warranty on hardware.",
                images: [
                    "https://images.livspace-cdn.com/w:654/h:450/plain/https://imgs.livspace.com/2625972-original/short-base-unit.jpg",
                    "https://images.livspace-cdn.com/w:654/h:450/plain/https://imgs.livspace.com/2626143-original/base-unit-3-ss-drawers-2m-1l.jpg"
                ],
                tags: ["Aarambh by KalaKruti", "Premium"]
            },
            {
                id: 5,
                title: "Blind Corner Unit, 1 Shelf",
                category: "BASE CORNER UNITS - WB",
                description: "Smart corner solutions with single shelf for organized storage in corner spaces.",
                shortOverview: "Maximize corner space with this smart storage solution featuring a single shelf for organized corner storage.",
                fullDescription: "This corner unit maximizes your kitchen's corner space with a single shelf configuration. The design provides organized storage while maintaining easy access to items. Built with moisture-resistant materials and soft-close mechanisms for long-lasting performance.",
                keyHighlights: [
                    "Single shelf corner configuration",
                    "Moisture-resistant construction",
                    "Soft-close mechanisms",
                    "Easy access design"
                ],
                specs: {
                    range: "Semi Modular Metal",
                    grade: "Standard",
                    cabinetType: "Corner Unit",
                    inStock: "Yes",
                    hardware: "Standard Hinges"
                },
                careNotes: [
                    "Regular dusting with dry cloth",
                    "Avoid excessive moisture exposure",
                    "Check shelf alignment periodically"
                ],
                leadTime: "In-stock. Standard dispatch in 3–5 days. 1-year warranty on hardware.",
                images: [
                    "https://images.livspace-cdn.com/w:654/h:450/plain/https://imgs.livspace.com/2626143-original/base-unit-3-ss-drawers-2m-1l.jpg",
                    "https://images.livspace-cdn.com/w:654/h:450/plain/https://imgs.livspace.com/2625972-original/short-base-unit.jpg"
                ],
                tags: ["Semi Modular Metal"]
            },
            {
                id: 6,
                title: "Blind Corner Unit, 2 Dee Trays",
                category: "BASE CORNER UNITS - WB",
                description: "Advanced corner solutions with two Dee-shaped pull-out trays for maximum corner utilization.",
                shortOverview: "Advanced corner storage with two Dee-shaped pull-out trays for maximum space utilization and easy access.",
                fullDescription: "This premium corner unit features two Dee-shaped pull-out trays designed for maximum corner space utilization. The innovative design provides easy access to items while maintaining organized storage. Built with premium materials and smooth-operating mechanisms.",
                keyHighlights: [
                    "Two Dee-shaped pull-out trays",
                    "Maximum corner space utilization",
                    "Premium construction materials",
                    "Smooth-operating mechanisms"
                ],
                specs: {
                    range: "Premium",
                    grade: "Premium",
                    cabinetType: "Corner Unit",
                    inStock: "Yes",
                    hardware: "Premium Hinges"
                },
                careNotes: [
                    "Regular cleaning with mild detergent",
                    "Check tray alignment and smooth operation",
                    "Avoid overloading trays"
                ],
                leadTime: "In-stock. Standard dispatch in 3–5 days. 1-year warranty on hardware.",
                images: [
                    "https://images.livspace-cdn.com/w:654/h:450/plain/https://imgs.livspace.com/2630147-original/short-base-unit.jpg",
                    "https://images.livspace-cdn.com/w:654/h:450/plain/https://imgs.livspace.com/2626143-original/base-unit-3-ss-drawers-2m-1l.jpg"
                ],
                tags: ["Premium"]
            }
        ],
        wallUnits: [
            {
                id: 1,
                title: "Glass Door Wall Unit",
                category: "WALL UNITS - GLASS",
                description: "Upper-level cabinets with glass doors to showcase your beautiful dinnerware and glassware.",
                shortOverview: "Elegant wall storage with glass doors to display your finest dinnerware and glassware collection.",
                fullDescription: "This premium wall unit features tempered glass doors that allow you to showcase your beautiful dinnerware and glassware while keeping them protected from dust. The unit includes LED lighting options and adjustable shelves to accommodate items of various sizes.",
                keyHighlights: [
                    "Tempered glass doors",
                    "LED lighting compatible",
                    "Adjustable shelves",
                    "Premium finish options"
                ],
                specs: {
                    range: "Premium",
                    grade: "Premium",
                    cabinetType: "Wall Unit",
                    inStock: "Yes",
                    hardware: "Premium Hinges"
                },
                careNotes: [
                    "Clean glass with glass cleaner",
                    "Dust shelves regularly",
                    "Check lighting connections"
                ],
                leadTime: "In-stock. Standard dispatch in 3–5 days. 1-year warranty on hardware.",
                images: [
                    "https://cloudfrontgharpediabucket.gharpedia.com/uploads/2023/04/Frameless-Glass-Partition-07-0503070034.jpg",
                    "https://i.pinimg.com/564x/9e/7a/be/9e7abe4f7deebfbd441e7935b6553e90.jpg"
                ],
                tags: ["Premium", "Glass Doors"]
            },
            {
                id: 2,
                title: "Solid Door Wall Unit",
                category: "WALL UNITS - SOLID",
                description: "Traditional wall cabinets with solid doors for concealed storage of kitchen items.",
                shortOverview: "Classic wall storage with solid doors for concealed storage of kitchen essentials and cookware.",
                fullDescription: "This traditional wall unit features solid doors that provide concealed storage for kitchen essentials and cookware. The unit offers ample storage space with adjustable shelves and is built with durable materials for long-lasting performance.",
                keyHighlights: [
                    "Solid door construction",
                    "Concealed storage design",
                    "Adjustable shelves",
                    "Durable materials"
                ],
                specs: {
                    range: "Standard",
                    grade: "Standard",
                    cabinetType: "Wall Unit",
                    inStock: "Yes",
                    hardware: "Standard Hinges"
                },
                careNotes: [
                    "Wipe with damp cloth",
                    "Regular dusting of shelves",
                    "Check door alignment"
                ],
                leadTime: "In-stock. Standard dispatch in 3–5 days. 1-year warranty on hardware.",
                images: [
                    "https://i.pinimg.com/564x/9e/7a/be/9e7abe4f7deebfbd441e7935b6553e90.jpg",
                    "https://cloudfrontgharpediabucket.gharpedia.com/uploads/2023/04/Frameless-Glass-Partition-07-0503070034.jpg"
                ],
                tags: ["Standard"]
            },
            {
                id: 3,
                title: "Open Wall Shelving",
                category: "WALL UNITS - OPEN",
                description: "Open wall shelves for easy access to frequently used items and decorative display.",
                shortOverview: "Modern open shelving for easy access to frequently used items and stylish decorative display.",
                fullDescription: "This modern open shelving unit provides easy access to frequently used items while creating a stylish decorative display. The open design allows for quick access to everyday items and creates an airy, modern look in your kitchen.",
                keyHighlights: [
                    "Open design for easy access",
                    "Modern aesthetic appeal",
                    "Quick access to items",
                    "Decorative display capability"
                ],
                specs: {
                    range: "Modern",
                    grade: "Standard",
                    cabinetType: "Open Shelving",
                    inStock: "Yes",
                    hardware: "Standard Brackets"
                },
                careNotes: [
                    "Regular dusting required",
                    "Keep items organized",
                    "Check bracket stability"
                ],
                leadTime: "In-stock. Standard dispatch in 3–5 days. 1-year warranty on hardware.",
                images: [
                    "https://i.pinimg.com/736x/c2/c7/5b/c2c75bf50e263c265bed11c15562e8d9.jpg",
                    "https://i.pinimg.com/564x/9e/7a/be/9e7abe4f7deebfbd441e7935b6553e90.jpg"
                ],
                tags: ["Modern", "Open Design"]
            },
            {
                id: 4,
                title: "Open Wall Shelving",
                category: "WALL UNITS - OPEN",
                description: "Open wall shelves for easy access to frequently used items and decorative display.",
                shortOverview: "Modern open shelving for easy access to frequently used items and stylish decorative display.",
                fullDescription: "This contemporary open shelving unit combines functionality with modern design. The open structure provides easy access to frequently used items while creating an attractive display area for decorative pieces and everyday essentials.",
                keyHighlights: [
                    "Contemporary open design",
                    "Functional and decorative",
                    "Easy item access",
                    "Modern kitchen aesthetic"
                ],
                specs: {
                    range: "Modern",
                    grade: "Standard",
                    cabinetType: "Open Shelving",
                    inStock: "Yes",
                    hardware: "Standard Brackets"
                },
                careNotes: [
                    "Regular dusting required",
                    "Keep items organized",
                    "Check bracket stability"
                ],
                leadTime: "In-stock. Standard dispatch in 3–5 days. 1-year warranty on hardware.",
                images: [
                    "https://i.pinimg.com/736x/c2/c7/5b/c2c75bf50e263c265bed11c15562e8d9.jpg",
                    "https://i.pinimg.com/564x/9e/7a/be/9e7abe4f7deebfbd441e7935b6553e90.jpg"
                ],
                tags: ["Modern", "Open Design"]
            },
            {
                id: 5,
                title: "Glass Door Wall Unit",
                category: "WALL UNITS - GLASS",
                description: "Upper-level cabinets with glass doors to showcase your beautiful dinnerware and glassware.",
                shortOverview: "Elegant wall storage with glass doors to display your finest dinnerware and glassware collection.",
                fullDescription: "This elegant wall unit features premium tempered glass doors that showcase your beautiful dinnerware and glassware collection. The unit includes LED lighting options and adjustable shelves to accommodate items of various sizes while maintaining a sophisticated appearance.",
                keyHighlights: [
                    "Premium tempered glass doors",
                    "LED lighting integration",
                    "Adjustable shelf system",
                    "Sophisticated appearance"
                ],
                specs: {
                    range: "Premium",
                    grade: "Premium",
                    cabinetType: "Wall Unit",
                    inStock: "Yes",
                    hardware: "Premium Hinges"
                },
                careNotes: [
                    "Clean glass with glass cleaner",
                    "Dust shelves regularly",
                    "Check lighting connections"
                ],
                leadTime: "In-stock. Standard dispatch in 3–5 days. 1-year warranty on hardware.",
                images: [
                    "https://cloudfrontgharpediabucket.gharpedia.com/uploads/2023/04/Frameless-Glass-Partition-07-0503070034.jpg",
                    "https://i.pinimg.com/564x/9e/7a/be/9e7abe4f7deebfbd441e7935b6553e90.jpg"
                ],
                tags: ["Premium", "Glass Doors"]
            },
            {
                id: 6,
                title: "Solid Door Wall Unit",
                category: "WALL UNITS - SOLID",
                description: "Traditional wall cabinets with solid doors for concealed storage of kitchen items.",
                shortOverview: "Classic wall storage with solid doors for concealed storage of kitchen essentials and cookware.",
                fullDescription: "This classic wall unit provides concealed storage with solid doors, perfect for keeping kitchen essentials and cookware organized and out of sight. The unit features adjustable shelves and is built with quality materials for durability.",
                keyHighlights: [
                    "Classic solid door design",
                    "Concealed storage solution",
                    "Adjustable shelf system",
                    "Quality construction materials"
                ],
                specs: {
                    range: "Standard",
                    grade: "Standard",
                    cabinetType: "Wall Unit",
                    inStock: "Yes",
                    hardware: "Standard Hinges"
                },
                careNotes: [
                    "Wipe with damp cloth",
                    "Regular dusting of shelves",
                    "Check door alignment"
                ],
                leadTime: "In-stock. Standard dispatch in 3–5 days. 1-year warranty on hardware.",
                images: [
                    "https://i.pinimg.com/564x/9e/7a/be/9e7abe4f7deebfbd441e7935b6553e90.jpg",
                    "https://cloudfrontgharpediabucket.gharpedia.com/uploads/2023/04/Frameless-Glass-Partition-07-0503070034.jpg"
                ],
                tags: ["Standard"]
            }
        ],
        tallUnits: [
            {
                id: 1,
                title: "Pantry Tall Unit",
                category: "TALL UNITS - PANTRY",
                description: "Full-height cabinets perfect for pantry storage with multiple shelves and compartments.",
                shortOverview: "Maximize vertical storage with this full-height pantry unit featuring multiple shelves and compartments.",
                fullDescription: "This tall pantry unit is designed to maximize your kitchen's vertical storage space. With multiple adjustable shelves and specialized compartments, it's perfect for storing dry goods, canned items, and kitchen essentials. Features include soft-close doors and interior lighting options.",
                keyHighlights: [
                    "Full-height design",
                    "Multiple adjustable shelves",
                    "Specialized compartments",
                    "Interior lighting options"
                ],
                specs: {
                    range: "Premium",
                    grade: "Premium",
                    cabinetType: "Tall Unit",
                    inStock: "Yes",
                    hardware: "Premium Hinges"
                },
                careNotes: [
                    "Wipe exterior with damp cloth",
                    "Clean shelves regularly",
                    "Check door alignment"
                ],
                leadTime: "In-stock. Standard dispatch in 3–5 days. 1-year warranty on hardware.",
                images: [
                    "https://assets-news.housing.com/news/wp-content/uploads/2022/03/17140031/Tall-unit-kitchen-cabinet-ideas-Why-are-they-popular-in-modern-kitchens-02.jpg",
                    "https://suntechinteriors.com/wp-content/uploads/photo-gallery/imported_from_media_libray/wooden-tall-units-for-kitchen-1.jpg?bwg=1641281851"
                ],
                tags: ["Premium", "Pantry Storage"]
            },
            {
                id: 2,
                title: "Appliance Tall Unit",
                category: "TALL UNITS - APPLIANCE",
                description: "Tall cabinets designed to house large appliances like ovens, microwaves, and refrigerators.",
                shortOverview: "Full-height storage designed to house large appliances like ovens, microwaves, and refrigerators.",
                fullDescription: "This tall appliance unit is specifically designed to house large kitchen appliances like ovens, microwaves, and refrigerators. The unit provides proper ventilation and easy access while maintaining a clean, integrated look in your kitchen design.",
                keyHighlights: [
                    "Appliance housing design",
                    "Proper ventilation system",
                    "Easy access configuration",
                    "Integrated kitchen look"
                ],
                specs: {
                    range: "Premium",
                    grade: "Premium",
                    cabinetType: "Tall Unit",
                    inStock: "Yes",
                    hardware: "Premium Hinges"
                },
                careNotes: [
                    "Check appliance ventilation",
                    "Regular cleaning of surfaces",
                    "Monitor appliance clearance"
                ],
                leadTime: "In-stock. Standard dispatch in 3–5 days. 1-year warranty on hardware.",
                images: [
                    "https://suntechinteriors.com/wp-content/uploads/photo-gallery/imported_from_media_libray/wooden-tall-units-for-kitchen-1.jpg?bwg=1641281851",
                    "https://assets-news.housing.com/news/wp-content/uploads/2022/03/17140031/Tall-unit-kitchen-cabinet-ideas-Why-are-they-popular-in-modern-kitchens-02.jpg"
                ],
                tags: ["Appliance Housing"]
            },
            {
                id: 3,
                title: "Utility Tall Unit",
                category: "TALL UNITS - UTILITY",
                description: "Multi-purpose tall cabinets for cleaning supplies, brooms, and other utility items.",
                shortOverview: "Multi-purpose tall storage for cleaning supplies, brooms, and other utility items with organized compartments.",
                fullDescription: "This utility tall unit provides organized storage for cleaning supplies, brooms, and other utility items. The unit features multiple compartments and specialized storage solutions to keep your cleaning supplies organized and easily accessible.",
                keyHighlights: [
                    "Multi-purpose storage design",
                    "Organized compartments",
                    "Specialized storage solutions",
                    "Easy access configuration"
                ],
                specs: {
                    range: "Standard",
                    grade: "Standard",
                    cabinetType: "Tall Unit",
                    inStock: "Yes",
                    hardware: "Standard Hinges"
                },
                careNotes: [
                    "Regular cleaning of compartments",
                    "Check door alignment",
                    "Organize items regularly"
                ],
                leadTime: "In-stock. Standard dispatch in 3–5 days. 1-year warranty on hardware.",
                images: [
                    "https://m.media-amazon.com/images/I/51YOCXTO6WL.jpg",
                    "https://suntechinteriors.com/wp-content/uploads/photo-gallery/imported_from_media_libray/wooden-tall-units-for-kitchen-1.jpg?bwg=1641281851"
                ],
                tags: ["Utility Storage"]
            },
            {
                id: 4,
                title: "Appliance Tall Unit",
                category: "TALL UNITS - APPLIANCE",
                description: "Tall cabinets designed to house large appliances like ovens, microwaves, and refrigerators.",
                shortOverview: "Full-height storage designed to house large appliances like ovens, microwaves, and refrigerators.",
                fullDescription: "This premium tall appliance unit is engineered to house large kitchen appliances with proper ventilation and easy access. The unit maintains a seamless integrated look while providing functional storage for your major kitchen appliances.",
                keyHighlights: [
                    "Premium appliance housing",
                    "Engineered ventilation system",
                    "Seamless integrated design",
                    "Functional storage solution"
                ],
                specs: {
                    range: "Premium",
                    grade: "Premium",
                    cabinetType: "Tall Unit",
                    inStock: "Yes",
                    hardware: "Premium Hinges"
                },
                careNotes: [
                    "Check appliance ventilation",
                    "Regular cleaning of surfaces",
                    "Monitor appliance clearance"
                ],
                leadTime: "In-stock. Standard dispatch in 3–5 days. 1-year warranty on hardware.",
                images: [
                    "https://suntechinteriors.com/wp-content/uploads/photo-gallery/imported_from_media_libray/wooden-tall-units-for-kitchen-1.jpg?bwg=1641281851",
                    "https://assets-news.housing.com/news/wp-content/uploads/2022/03/17140031/Tall-unit-kitchen-cabinet-ideas-Why-are-they-popular-in-modern-kitchens-02.jpg"
                ],
                tags: ["Appliance Housing"]
            },
            {
                id: 5,
                title: "Utility Tall Unit",
                category: "TALL UNITS - UTILITY",
                description: "Multi-purpose tall cabinets for cleaning supplies, brooms, and other utility items.",
                shortOverview: "Multi-purpose tall storage for cleaning supplies, brooms, and other utility items with organized compartments.",
                fullDescription: "This versatile utility tall unit offers comprehensive storage for cleaning supplies, brooms, and utility items. The design includes multiple compartments and specialized storage areas to keep everything organized and within easy reach.",
                keyHighlights: [
                    "Versatile storage design",
                    "Comprehensive compartment system",
                    "Specialized storage areas",
                    "Easy reach configuration"
                ],
                specs: {
                    range: "Standard",
                    grade: "Standard",
                    cabinetType: "Tall Unit",
                    inStock: "Yes",
                    hardware: "Standard Hinges"
                },
                careNotes: [
                    "Regular cleaning of compartments",
                    "Check door alignment",
                    "Organize items regularly"
                ],
                leadTime: "In-stock. Standard dispatch in 3–5 days. 1-year warranty on hardware.",
                images: [
                    "https://m.media-amazon.com/images/I/51YOCXTO6WL.jpg",
                    "https://suntechinteriors.com/wp-content/uploads/photo-gallery/imported_from_media_libray/wooden-tall-units-for-kitchen-1.jpg?bwg=1641281851"
                ],
                tags: ["Utility Storage"]
            },
            {
                id: 6,
                title: "Pantry Tall Unit",
                category: "TALL UNITS - PANTRY",
                description: "Full-height cabinets perfect for pantry storage with multiple shelves and compartments.",
                shortOverview: "Maximize vertical storage with this full-height pantry unit featuring multiple shelves and compartments.",
                fullDescription: "This premium tall pantry unit maximizes your kitchen's vertical storage potential. Featuring multiple adjustable shelves and specialized compartments, it's ideal for storing dry goods, canned items, and kitchen essentials with soft-close doors and interior lighting.",
                keyHighlights: [
                    "Premium vertical storage",
                    "Multiple adjustable shelves",
                    "Specialized compartment design",
                    "Soft-close doors with lighting"
                ],
                specs: {
                    range: "Premium",
                    grade: "Premium",
                    cabinetType: "Tall Unit",
                    inStock: "Yes",
                    hardware: "Premium Hinges"
                },
                careNotes: [
                    "Wipe exterior with damp cloth",
                    "Clean shelves regularly",
                    "Check door alignment"
                ],
                leadTime: "In-stock. Standard dispatch in 3–5 days. 1-year warranty on hardware.",
                images: [
                    "https://assets-news.housing.com/news/wp-content/uploads/2022/03/17140031/Tall-unit-kitchen-cabinet-ideas-Why-are-they-popular-in-modern-kitchens-02.jpg",
                    "https://suntechinteriors.com/wp-content/uploads/photo-gallery/imported_from_media_libray/wooden-tall-units-for-kitchen-1.jpg?bwg=1641281851"
                ],
                tags: ["Premium", "Pantry Storage"]
            }
        ],
        midTallUnits: [
            {
                id: 1,
                title: "Mid-Height Storage Unit",
                category: "MID TALL UNITS - STORAGE",
                description: "Medium-height cabinets perfect for countertop appliances and additional storage.",
                shortOverview: "Versatile mid-height storage perfect for countertop appliances and additional kitchen storage needs.",
                fullDescription: "This mid-height storage unit provides the perfect balance between accessibility and storage capacity. Ideal for housing countertop appliances like microwaves, toasters, and coffee makers while providing additional storage space below. Features adjustable shelves and soft-close mechanisms.",
                keyHighlights: [
                    "Mid-height accessibility",
                    "Appliance housing design",
                    "Adjustable shelves",
                    "Soft-close mechanisms"
                ],
                specs: {
                    range: "Standard",
                    grade: "Standard",
                    cabinetType: "Mid Tall Unit",
                    inStock: "Yes",
                    hardware: "Standard Hinges"
                },
                careNotes: [
                    "Regular cleaning with mild detergent",
                    "Check appliance ventilation",
                    "Maintain shelf alignment"
                ],
                leadTime: "In-stock. Standard dispatch in 3–5 days. 1-year warranty on hardware.",
                images: [
                    "https://s3-blog.homelane.com/design-ideas-pre/wp-content/uploads/2021/08/budget-friendly-modular-kitchen.jpg",
                    "https://huvu.in/wp-content/uploads/2024/08/Breakfast-Counter.webp"
                ],
                tags: ["Standard", "Storage"]
            },
            {
                id: 2,
                title: "Breakfast Nook Unit",
                category: "MID TALL UNITS - DINING",
                description: "Mid-height cabinets designed for breakfast nooks and casual dining areas.",
                shortOverview: "Perfect mid-height solution for breakfast nooks and casual dining areas with elegant design.",
                fullDescription: "This breakfast nook unit is designed for casual dining areas and breakfast nooks. The mid-height design provides comfortable seating while offering storage space below. Features elegant design elements and practical storage solutions for dining essentials.",
                keyHighlights: [
                    "Breakfast nook design",
                    "Comfortable seating height",
                    "Elegant design elements",
                    "Practical storage solutions"
                ],
                specs: {
                    range: "Premium",
                    grade: "Premium",
                    cabinetType: "Mid Tall Unit",
                    inStock: "Yes",
                    hardware: "Premium Hinges"
                },
                careNotes: [
                    "Regular cleaning of surfaces",
                    "Check seating stability",
                    "Maintain finish quality"
                ],
                leadTime: "In-stock. Standard dispatch in 3–5 days. 1-year warranty on hardware.",
                images: [
                    "https://huvu.in/wp-content/uploads/2024/08/Breakfast-Counter.webp",
                    "https://s3-blog.homelane.com/design-ideas-pre/wp-content/uploads/2021/08/budget-friendly-modular-kitchen.jpg"
                ],
                tags: ["Premium", "Dining"]
            },
            {
                id: 3,
                title: "Appliance Mid Unit",
                category: "MID TALL UNITS - APPLIANCE",
                description: "Specialized mid-height units for housing countertop appliances with easy access.",
                shortOverview: "Specialized mid-height storage for countertop appliances with easy access and organized compartments.",
                fullDescription: "This specialized mid-height unit is designed for countertop appliances with easy access and organized compartments. The design provides the perfect height for daily use while offering additional storage space below for related items.",
                keyHighlights: [
                    "Specialized appliance housing",
                    "Easy access design",
                    "Organized compartments",
                    "Perfect daily-use height"
                ],
                specs: {
                    range: "Standard",
                    grade: "Standard",
                    cabinetType: "Mid Tall Unit",
                    inStock: "Yes",
                    hardware: "Standard Hinges"
                },
                careNotes: [
                    "Check appliance ventilation",
                    "Regular cleaning of surfaces",
                    "Maintain compartment organization"
                ],
                leadTime: "In-stock. Standard dispatch in 3–5 days. 1-year warranty on hardware.",
                images: [
                    "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2017/8/15/1/IO_Suzanne-Childress_Avenue-Arts-Crafts_3.jpg.rend.hgtvcom.616.924.85.suffix/1502820159839.webp",
                    "https://huvu.in/wp-content/uploads/2024/08/Breakfast-Counter.webp"
                ],
                tags: ["Appliance Storage"]
            },
            {
                id: 4,
                title: "Breakfast Nook Unit",
                category: "MID TALL UNITS - DINING",
                description: "Mid-height cabinets designed for breakfast nooks and casual dining areas.",
                shortOverview: "Perfect mid-height solution for breakfast nooks and casual dining areas with elegant design.",
                fullDescription: "This contemporary breakfast nook unit combines functionality with elegant design for casual dining areas. The mid-height configuration provides comfortable seating while offering practical storage solutions for dining essentials and decorative items.",
                keyHighlights: [
                    "Contemporary breakfast nook design",
                    "Functional and elegant combination",
                    "Comfortable seating configuration",
                    "Practical storage for dining essentials"
                ],
                specs: {
                    range: "Premium",
                    grade: "Premium",
                    cabinetType: "Mid Tall Unit",
                    inStock: "Yes",
                    hardware: "Premium Hinges"
                },
                careNotes: [
                    "Regular cleaning of surfaces",
                    "Check seating stability",
                    "Maintain finish quality"
                ],
                leadTime: "In-stock. Standard dispatch in 3–5 days. 1-year warranty on hardware.",
                images: [
                    "https://huvu.in/wp-content/uploads/2024/08/Breakfast-Counter.webp",
                    "https://s3-blog.homelane.com/design-ideas-pre/wp-content/uploads/2021/08/budget-friendly-modular-kitchen.jpg"
                ],
                tags: ["Premium", "Dining"]
            },
            {
                id: 5,
                title: "Appliance Mid Unit",
                category: "MID TALL UNITS - APPLIANCE",
                description: "Specialized mid-height units for housing countertop appliances with easy access.",
                shortOverview: "Specialized mid-height storage for countertop appliances with easy access and organized compartments.",
                fullDescription: "This advanced mid-height appliance unit provides specialized storage for countertop appliances with enhanced accessibility. The design features organized compartments and easy access mechanisms, making it perfect for daily kitchen operations.",
                keyHighlights: [
                    "Advanced appliance storage design",
                    "Enhanced accessibility features",
                    "Organized compartment system",
                    "Daily kitchen operation optimized"
                ],
                specs: {
                    range: "Standard",
                    grade: "Standard",
                    cabinetType: "Mid Tall Unit",
                    inStock: "Yes",
                    hardware: "Standard Hinges"
                },
                careNotes: [
                    "Check appliance ventilation",
                    "Regular cleaning of surfaces",
                    "Maintain compartment organization"
                ],
                leadTime: "In-stock. Standard dispatch in 3–5 days. 1-year warranty on hardware.",
                images: [
                    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                    "https://huvu.in/wp-content/uploads/2024/08/Breakfast-Counter.webp"
                ],
                tags: ["Appliance Storage"]
            },
            {
                id: 6,
                title: "Appliance Mid Unit",
                category: "MID TALL UNITS - APPLIANCE",
                description: "Specialized mid-height units for housing countertop appliances with easy access.",
                shortOverview: "Specialized mid-height storage for countertop appliances with easy access and organized compartments.",
                fullDescription: "This premium mid-height appliance unit offers specialized storage for countertop appliances with superior accessibility and organization. The design combines functionality with modern aesthetics, providing the perfect solution for contemporary kitchen layouts.",
                keyHighlights: [
                    "Premium appliance storage design",
                    "Superior accessibility features",
                    "Modern aesthetic integration",
                    "Contemporary kitchen layout optimized"
                ],
                specs: {
                    range: "Premium",
                    grade: "Premium",
                    cabinetType: "Mid Tall Unit",
                    inStock: "Yes",
                    hardware: "Premium Hinges"
                },
                careNotes: [
                    "Check appliance ventilation",
                    "Regular cleaning of surfaces",
                    "Maintain compartment organization"
                ],
                leadTime: "In-stock. Standard dispatch in 3–5 days. 1-year warranty on hardware.",
                images: [
                    "https://huvu.in/wp-content/uploads/2024/08/Breakfast-Counter.webp",
                    "https://s3-blog.homelane.com/design-ideas-pre/wp-content/uploads/2021/08/budget-friendly-modular-kitchen.jpg"
                ],
                tags: ["Appliance Storage"]
            }
        ]
    };

    // Get the current product data
    const currentProduct = cabinetData[category]?.find(item => item.id === parseInt(id));

    if (!currentProduct) {
        return (
            <Container maxWidth="lg" sx={{ py: 4 }}>
                <Typography variant="h4">Product not found</Typography>
                <Button onClick={() => navigate('/kitchen/components/cabinets')} sx={{ mt: 2 }}>
                    Back to Cabinets
                </Button>
            </Container>
        );
    }

    const handleImageChange = (index) => {
        setSelectedImage(index);
    };

    const toggleDescription = () => {
        setExpandedDescription(!expandedDescription);
    };

    return (
        <Box sx={{ minHeight: '100vh', backgroundColor: '#fafafa' }}>
            <Container maxWidth="lg" sx={{ py: 4 }}>
                {/* Breadcrumbs */}
                <Breadcrumbs sx={{ mb: 3 }}>
                    <Link
                        component="button"
                        variant="body2"
                        onClick={() => navigate('/')}
                        sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}
                    >
                        <Home fontSize="small" />
                        Home
                    </Link>
                    <Link
                        component="button"
                        variant="body2"
                        onClick={() => navigate('/offerings')}
                    >
                        Interiors
                    </Link>
                    <Link
                        component="button"
                        variant="body2"
                        onClick={() => navigate('/kitchen/components/cabinets')}
                    >
                        {category === 'baseUnits' ? 'Base units' :
                            category === 'wallUnits' ? 'Wall units' :
                                category === 'tallUnits' ? 'Tall units' : 'Mid Tall units'}
                    </Link>
                    <Typography color="text.primary">{currentProduct.title}</Typography>
                </Breadcrumbs>

                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
                    {/* Left Column - Images */}
                    <Box sx={{ flex: { xs: '1', md: '0 0 60%' }, maxWidth: { xs: '100%', md: '60%' } }}>
                        <ProductImageContainer>
                            <img
                                src={currentProduct.images[selectedImage]}
                                alt={currentProduct.title}
                                style={{
                                    maxWidth: '100%',
                                    maxHeight: '100%',
                                    objectFit: 'contain',
                                    display: 'block',
                                    margin: '0 auto'
                                }}
                            />
                            <IconButton
                                sx={{
                                    position: 'absolute',
                                    right: 16,
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    backgroundColor: 'rgba(255,255,255,0.9)',
                                    '&:hover': {
                                        backgroundColor: 'rgba(255,255,255,1)',
                                    }
                                }}
                                onClick={() => setSelectedImage((selectedImage + 1) % currentProduct.images.length)}
                            >
                                <ArrowForward />
                            </IconButton>
                        </ProductImageContainer>

                        <ThumbnailContainer>
                            {currentProduct.images.map((image, index) => (
                                <Box
                                    key={index}
                                    className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                                    onClick={() => handleImageChange(index)}
                                >
                                    <img src={image} alt={`${currentProduct.title} ${index + 1}`} />
                                </Box>
                            ))}
                        </ThumbnailContainer>
                    </Box>

                    {/* Right Column - Product Information */}
                    <Box sx={{ flex: { xs: '1', md: '0 0 40%' }, maxWidth: { xs: '100%', md: '40%' } }}>
                        <Box sx={{ mb: 3 }}>
                            {/* Category Overline */}
                            <Typography
                                variant="caption"
                                sx={{
                                    textTransform: 'uppercase',
                                    color: theme.palette.text.secondary,
                                    fontSize: '0.75rem',
                                    letterSpacing: '0.5px'
                                }}
                            >
                                {currentProduct.category}
                            </Typography>

                            {/* Title */}
                            <Typography
                                variant="h4"
                                component="h1"
                                sx={{
                                    mt: 1,
                                    mb: 2,
                                    fontWeight: 'bold',
                                    color: theme.palette.text.primary,
                                    fontSize: { xs: '1.5rem', md: '2rem' }
                                }}
                            >
                                | {currentProduct.title}
                            </Typography>

                            {/* Short Overview */}
                            <Typography
                                variant="body1"
                                sx={{
                                    mb: 2,
                                    lineHeight: 1.6,
                                    color: theme.palette.text.primary
                                }}
                            >
                                {currentProduct.shortOverview}
                            </Typography>

                            {/* Disclaimer */}
                            <Typography
                                variant="body2"
                                sx={{
                                    mb: 3,
                                    color: theme.palette.text.secondary,
                                    fontSize: '0.8rem'
                                }}
                            >
                                Actual sample & digital images might differ due to varying light and screen settings.
                            </Typography>

                            {/* Key Highlights */}
                            <Box sx={{ mb: 3 }}>
                                <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold' }}>
                                    Key Highlights
                                </Typography>
                                <List dense>
                                    {currentProduct.keyHighlights.map((highlight, index) => (
                                        <ListItem key={index} sx={{ py: 0.5, px: 0 }}>
                                            <ListItemIcon sx={{ minWidth: '20px' }}>
                                                <Box
                                                    sx={{
                                                        width: '4px',
                                                        height: '4px',
                                                        borderRadius: '50%',
                                                        backgroundColor: theme.palette.primary.main
                                                    }}
                                                />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={highlight}
                                                primaryTypographyProps={{ fontSize: '0.9rem' }}
                                            />
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>

                            {/* Specs Preview */}
                            <Box sx={{ mb: 3 }}>
                                <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold' }}>
                                    Specifications
                                </Typography>
                                <Box>
                                    <SpecChip label={`Cabinet Type: ${currentProduct.specs.cabinetType}`} />
                                    <SpecChip label={`In-Stock: ${currentProduct.specs.inStock}`} />
                                    <SpecChip label={`Hardware: ${currentProduct.specs.hardware}`} />
                                </Box>
                            </Box>

                            {/* Full Description */}
                            <Box sx={{ mb: 3 }}>
                                <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold' }}>
                                    Full Description
                                </Typography>
                                <Collapse in={expandedDescription} collapsedSize={120}>
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            lineHeight: 1.6,
                                            color: theme.palette.text.primary
                                        }}
                                    >
                                        {currentProduct.fullDescription}
                                    </Typography>
                                </Collapse>
                                <Button
                                    onClick={toggleDescription}
                                    size="small"
                                    sx={{
                                        mt: 1,
                                        textTransform: 'none',
                                        color: theme.palette.primary.main
                                    }}
                                >
                                    {expandedDescription ? 'Read less' : 'Read more'}
                                    {expandedDescription ? <ExpandLess /> : <ExpandMore />}
                                </Button>
                            </Box>

                            {/* Care & Installation Notes */}
                            <Box sx={{ mb: 3 }}>
                                <Typography variant="h6" sx={{ mb: 1, fontWeight: 'bold', fontSize: '1rem' }}>
                                    Care & Installation Notes
                                </Typography>
                                <List dense>
                                    {currentProduct.careNotes.map((note, index) => (
                                        <ListItem key={index} sx={{ py: 0.5, px: 0 }}>
                                            <ListItemIcon sx={{ minWidth: '20px' }}>
                                                <Box
                                                    sx={{
                                                        width: '4px',
                                                        height: '4px',
                                                        borderRadius: '50%',
                                                        backgroundColor: theme.palette.text.secondary
                                                    }}
                                                />
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={note}
                                                primaryTypographyProps={{ fontSize: '0.85rem' }}
                                            />
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>

                            {/* Lead Time / Warranty */}
                            <Typography
                                variant="body2"
                                sx={{
                                    mb: 3,
                                    color: theme.palette.text.secondary,
                                    fontSize: '0.8rem'
                                }}
                            >
                                {currentProduct.leadTime}
                            </Typography>

                            {/* Product Information Panel */}
                            <InfoPanel>
                                <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
                                    Product Information
                                </Typography>

                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 0.5 }}>
                                        <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.85rem' }}>Range:</Typography>
                                        <Typography variant="body2" fontWeight="medium" sx={{ fontSize: '0.85rem' }}>{currentProduct.specs.range}</Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 0.5 }}>
                                        <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.85rem' }}>Grade:</Typography>
                                        <Typography variant="body2" fontWeight="medium" sx={{ fontSize: '0.85rem' }}>{currentProduct.specs.grade}</Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 0.5 }}>
                                        <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.85rem' }}>Cabinet Type:</Typography>
                                        <Typography variant="body2" fontWeight="medium" sx={{ fontSize: '0.85rem' }}>{currentProduct.specs.cabinetType}</Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 0.5 }}>
                                        <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.85rem' }}>In-Stock:</Typography>
                                        <Typography variant="body2" fontWeight="medium" sx={{ fontSize: '0.85rem' }}>{currentProduct.specs.inStock}</Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 0.5 }}>
                                        <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.85rem' }}>Hardware Name:</Typography>
                                        <Typography variant="body2" fontWeight="medium" sx={{ fontSize: '0.85rem' }}>{currentProduct.specs.hardware}</Typography>
                                    </Box>
                                </Box>
                            </InfoPanel>

                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}
