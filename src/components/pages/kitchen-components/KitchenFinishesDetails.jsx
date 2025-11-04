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

export default function KitchenFinishesDetail() {
    const navigate = useNavigate();
    const theme = useTheme();
    const { id, category } = useParams();
    const [selectedImage, setSelectedImage] = useState(0);
    const [expandedDescription, setExpandedDescription] = useState(false);

    // Enhanced finishes data with detailed information
    const finishesData = {
        laminates: [
            {
                id: 1,
                title: "Wood Grain Laminate",
                category: "LAMINATES - WOOD GRAIN",
                description: "Premium wood grain laminate finish that mimics natural wood textures with excellent durability.",
                shortOverview: "Premium wood grain laminate finish that mimics natural wood textures with excellent durability and aesthetic appeal.",
                fullDescription: "This premium wood grain laminate offers the beauty of natural wood with enhanced durability and easy maintenance. The textured surface provides an authentic wood feel while being resistant to scratches, stains, and moisture. Perfect for creating a warm, natural ambiance in your kitchen.",
                keyHighlights: [
                    "Authentic wood grain texture",
                    "Scratch and stain resistant",
                    "Moisture resistant",
                    "Easy maintenance and cleaning"
                ],
                specs: {
                    range: "Premium",
                    grade: "Premium",
                    finishType: "Wood Grain Laminate",
                    inStock: "Yes",
                    thickness: "1mm"
                },
                careNotes: [
                    "Wipe with damp cloth and mild detergent",
                    "Avoid abrasive cleaners",
                    "Regular dusting recommended"
                ],
                leadTime: "In-stock. Standard dispatch in 3–5 days. 1-year warranty on finish.",
                images: [
                    "https://img.freepik.com/free-photo/brown-wood-textured-background-with-design-space_53876-160425.jpg?semt=ais_hybrid&w=740&q=80",
                    "https://materialdepot-images-hbh2cjbvbtfmanhx.z02.azurefd.net/V000664/4142-a-8-cappuccino-8-ft-x-4-ft-texture-finish-decorative-laminate-1-mm/4142-a-8-cappuccino-8-ft-x-4-ft-texture-finish-decorative-laminate-1-mm/1.png?width=500"
                ],
                tags: ["Premium", "Wood Finish"]
            },
            {
                id: 2,
                title: "Solid Color Laminate",
                category: "LAMINATES - SOLID COLOR",
                description: "Modern solid color laminates available in various shades to match your kitchen theme.",
                shortOverview: "Modern solid color laminates available in various shades to match your kitchen theme and design preferences.",
                fullDescription: "This solid color laminate offers a clean, modern look with a wide range of color options to perfectly match your kitchen design. The smooth surface is easy to clean and maintain, while providing excellent durability against daily wear and tear.",
                keyHighlights: [
                    "Wide range of color options",
                    "Modern clean appearance",
                    "Easy to clean surface",
                    "Excellent durability"
                ],
                specs: {
                    range: "Standard",
                    grade: "Standard",
                    finishType: "Solid Color Laminate",
                    inStock: "Yes",
                    thickness: "1mm"
                },
                careNotes: [
                    "Wipe with damp cloth and mild detergent",
                    "Avoid harsh chemicals",
                    "Regular cleaning recommended"
                ],
                leadTime: "In-stock. Standard dispatch in 3–5 days. 1-year warranty on finish.",
                images: [
                    "https://materialdepot-images-hbh2cjbvbtfmanhx.z02.azurefd.net/V000664/4142-a-8-cappuccino-8-ft-x-4-ft-texture-finish-decorative-laminate-1-mm/4142-a-8-cappuccino-8-ft-x-4-ft-texture-finish-decorative-laminate-1-mm/1.png?width=500",
                    "https://m.media-amazon.com/images/I/31LJxNUv0eL._UF1000,1000_QL80_.jpg"
                ],
                tags: ["Modern", "Color Options"]
            },
            {
                id: 3,
                title: "Textured Laminate",
                category: "LAMINATES - TEXTURED",
                description: "Textured laminate finishes that add depth and character to your kitchen cabinets.",
                shortOverview: "Textured laminate finishes that add depth and character to your kitchen cabinets with enhanced visual appeal.",
                fullDescription: "This textured laminate finish adds depth and character to your kitchen cabinets with its unique surface texture. The textured surface not only enhances the visual appeal but also provides better grip and hides minor scratches and fingerprints effectively.",
                keyHighlights: [
                    "Unique textured surface",
                    "Enhanced visual appeal",
                    "Better grip and handling",
                    "Hides minor scratches"
                ],
                specs: {
                    range: "Premium",
                    grade: "Premium",
                    finishType: "Textured Laminate",
                    inStock: "Yes",
                    thickness: "1mm"
                },
                careNotes: [
                    "Clean with soft cloth and mild detergent",
                    "Avoid abrasive cleaning materials",
                    "Regular dusting with soft brush"
                ],
                leadTime: "In-stock. Standard dispatch in 3–5 days. 1-year warranty on finish.",
                images: [
                    "https://m.media-amazon.com/images/I/31LJxNUv0eL._UF1000,1000_QL80_.jpg",
                    "https://royaletouche.gumlet.io/wp-content/uploads/2023/02/04171422/CRYSTAL_1284_A4_Image.jpg?compress=true&quality=80&w=600&dpr=2.6"
                ],
                tags: ["Textured", "Premium"]
            },
            {
                id: 4,
                title: "High Gloss Laminate",
                category: "LAMINATES - HIGH GLOSS",
                description: "High gloss laminate finish that provides a sleek, modern look with easy maintenance.",
                shortOverview: "High gloss laminate finish that provides a sleek, modern look with easy maintenance and reflective surface.",
                fullDescription: "This high gloss laminate finish provides a sleek, modern appearance with its reflective surface that enhances light in your kitchen. The glossy finish is easy to clean and maintain, making it perfect for contemporary kitchen designs that require a sophisticated look.",
                keyHighlights: [
                    "Sleek modern appearance",
                    "Reflective surface",
                    "Easy to clean and maintain",
                    "Contemporary design appeal"
                ],
                specs: {
                    range: "Premium",
                    grade: "Premium",
                    finishType: "High Gloss Laminate",
                    inStock: "Yes",
                    thickness: "1mm"
                },
                careNotes: [
                    "Clean with glass cleaner for best results",
                    "Avoid abrasive materials",
                    "Regular dusting with microfiber cloth"
                ],
                leadTime: "In-stock. Standard dispatch in 3–5 days. 1-year warranty on finish.",
                images: [
                    "https://royaletouche.gumlet.io/wp-content/uploads/2023/02/04171422/CRYSTAL_1284_A4_Image.jpg?compress=true&quality=80&w=600&dpr=2.6",
                    "https://5.imimg.com/data5/GR/LD/MY-9022244/matte-laminate-sheet.jpg"
                ],
                tags: ["High Gloss", "Modern"]
            },
            {
                id: 5,
                title: "Matt Finish Laminate",
                category: "LAMINATES - MATT FINISH",
                description: "Matt finish laminate that offers a sophisticated, non-reflective surface.",
                shortOverview: "Matt finish laminate that offers a sophisticated, non-reflective surface with elegant appearance.",
                fullDescription: "This matt finish laminate provides a sophisticated, non-reflective surface that adds elegance to your kitchen design. The matt finish reduces glare and fingerprints while maintaining a clean, modern appearance that complements various kitchen styles.",
                keyHighlights: [
                    "Sophisticated non-reflective surface",
                    "Reduces glare and fingerprints",
                    "Elegant appearance",
                    "Complements various kitchen styles"
                ],
                specs: {
                    range: "Standard",
                    grade: "Standard",
                    finishType: "Matt Finish Laminate",
                    inStock: "Yes",
                    thickness: "1mm"
                },
                careNotes: [
                    "Wipe with damp cloth and mild detergent",
                    "Avoid harsh chemicals",
                    "Regular dusting recommended"
                ],
                leadTime: "In-stock. Standard dispatch in 3–5 days. 1-year warranty on finish.",
                images: [
                    "https://5.imimg.com/data5/GR/LD/MY-9022244/matte-laminate-sheet.jpg",
                    "https://cdn.ready-market.com.tw/aed8e971/Templates/pic/lcm-A138-top-2.jpg?v=f152ef27"
                ],
                tags: ["Matt Finish", "Elegant"]
            },
            {
                id: 6,
                title: "Metallic Laminate",
                category: "LAMINATES - METALLIC",
                description: "Metallic laminate finishes that add a contemporary touch to your kitchen design.",
                shortOverview: "Metallic laminate finishes that add a contemporary touch to your kitchen design with modern appeal.",
                fullDescription: "This metallic laminate finish adds a contemporary touch to your kitchen design with its metallic appearance. The finish provides a modern, sophisticated look that enhances the overall aesthetic of your kitchen while being easy to maintain and clean.",
                keyHighlights: [
                    "Contemporary metallic appearance",
                    "Modern sophisticated look",
                    "Easy to maintain and clean",
                    "Enhances kitchen aesthetic"
                ],
                specs: {
                    range: "Premium",
                    grade: "Premium",
                    finishType: "Metallic Laminate",
                    inStock: "Yes",
                    thickness: "1mm"
                },
                careNotes: [
                    "Clean with soft cloth and mild detergent",
                    "Avoid abrasive materials",
                    "Regular dusting with microfiber cloth"
                ],
                leadTime: "In-stock. Standard dispatch in 3–5 days. 1-year warranty on finish.",
                images: [
                    "https://cdn.ready-market.com.tw/aed8e971/Templates/pic/lcm-A138-top-2.jpg?v=f152ef27",
                    "https://img.freepik.com/free-photo/brown-wood-textured-background-with-design-space_53876-160425.jpg?semt=ais_hybrid&w=740&q=80"
                ],
                tags: ["Metallic", "Contemporary"]
            }
        ],
        acrylic: [
            {
                id: 1,
                title: "High Gloss Acrylic",
                category: "ACRYLIC - HIGH GLOSS",
                description: "Premium high gloss acrylic finish that provides a mirror-like reflective surface.",
                shortOverview: "Premium high gloss acrylic finish that provides a mirror-like reflective surface with excellent durability.",
                fullDescription: "This premium high gloss acrylic finish provides a mirror-like reflective surface that enhances the visual appeal of your kitchen. The glossy finish is highly durable and resistant to scratches, making it perfect for high-traffic kitchen areas.",
                keyHighlights: [
                    "Mirror-like reflective surface",
                    "Highly durable finish",
                    "Scratch resistant",
                    "Perfect for high-traffic areas"
                ],
                specs: {
                    range: "Premium",
                    grade: "Premium",
                    finishType: "High Gloss Acrylic",
                    inStock: "Yes",
                    thickness: "2mm"
                },
                careNotes: [
                    "Clean with glass cleaner for best results",
                    "Avoid abrasive materials",
                    "Regular dusting with microfiber cloth"
                ],
                leadTime: "In-stock. Standard dispatch in 3–5 days. 1-year warranty on finish.",
                images: [
                    "https://image.made-in-china.com/229f0j00mQKUVoZnwlkA/%E5%89%AA%E5%BD%B1%C2%B7%E6%8B%8D%E6%8B%8D-20240426.mp4.webp",
                    "https://i.pinimg.com/564x/9e/7a/be/9e7abe4f7deebfbd441e7935b6553e90.jpg"
                ],
                tags: ["High Gloss", "Premium"]
            },
            {
                id: 2,
                title: "Matt Acrylic",
                category: "ACRYLIC - MATT",
                description: "Matt acrylic finish that offers a smooth, non-reflective surface with modern appeal.",
                shortOverview: "Matt acrylic finish that offers a smooth, non-reflective surface with modern appeal and elegant appearance.",
                fullDescription: "This matt acrylic finish provides a smooth, non-reflective surface that offers a modern and elegant appearance. The matt finish reduces glare and fingerprints while maintaining a sophisticated look that complements contemporary kitchen designs.",
                keyHighlights: [
                    "Smooth non-reflective surface",
                    "Modern elegant appearance",
                    "Reduces glare and fingerprints",
                    "Sophisticated contemporary look"
                ],
                specs: {
                    range: "Standard",
                    grade: "Standard",
                    finishType: "Matt Acrylic",
                    inStock: "Yes",
                    thickness: "2mm"
                },
                careNotes: [
                    "Wipe with damp cloth and mild detergent",
                    "Avoid harsh chemicals",
                    "Regular dusting recommended"
                ],
                leadTime: "In-stock. Standard dispatch in 3–5 days. 1-year warranty on finish.",
                images: [
                    "https://i.pinimg.com/564x/9e/7a/be/9e7abe4f7deebfbd441e7935b6553e90.jpg",
                    "https://i.pinimg.com/736x/c2/c7/5b/c2c75bf50e263c265bed11c15562e8d9.jpg"
                ],
                tags: ["Matt Finish", "Modern"]
            },
            {
                id: 3,
                title: "Solid Color Acrylic",
                category: "ACRYLIC - SOLID COLOR",
                description: "Vibrant solid color acrylic finishes available in a wide range of colors.",
                shortOverview: "Vibrant solid color acrylic finishes available in a wide range of colors for modern kitchen designs.",
                fullDescription: "This solid color acrylic finish offers vibrant colors in a wide range of options to perfectly match your kitchen design. The acrylic material provides excellent durability and a smooth finish that's easy to clean and maintain.",
                keyHighlights: [
                    "Wide range of vibrant colors",
                    "Excellent durability",
                    "Smooth finish",
                    "Easy to clean and maintain"
                ],
                specs: {
                    range: "Standard",
                    grade: "Standard",
                    finishType: "Solid Color Acrylic",
                    inStock: "Yes",
                    thickness: "2mm"
                },
                careNotes: [
                    "Wipe with damp cloth and mild detergent",
                    "Avoid harsh chemicals",
                    "Regular cleaning recommended"
                ],
                leadTime: "In-stock. Standard dispatch in 3–5 days. 1-year warranty on finish.",
                images: [
                    "https://i.pinimg.com/736x/c2/c7/5b/c2c75bf50e263c265bed11c15562e8d9.jpg",
                    "https://i.pinimg.com/564x/9e/7a/be/9e7abe4f7deebfbd441e7935b6553e90.jpg"
                ],
                tags: ["Color Options", "Vibrant"]
            },
            {
                id: 4,
                title: "Textured Acrylic",
                category: "ACRYLIC - TEXTURED",
                description: "Textured acrylic finishes that add visual interest and depth to cabinet surfaces.",
                shortOverview: "Textured acrylic finishes that add visual interest and depth to cabinet surfaces with enhanced appeal.",
                fullDescription: "This textured acrylic finish adds visual interest and depth to your cabinet surfaces. The textured surface provides enhanced grip and hides minor scratches while creating a unique aesthetic that stands out in modern kitchen designs.",
                keyHighlights: [
                    "Visual interest and depth",
                    "Enhanced grip",
                    "Hides minor scratches",
                    "Unique aesthetic appeal"
                ],
                specs: {
                    range: "Standard",
                    grade: "Standard",
                    finishType: "Textured Acrylic",
                    inStock: "Yes",
                    thickness: "2mm"
                },
                careNotes: [
                    "Clean with soft cloth and mild detergent",
                    "Avoid abrasive materials",
                    "Regular dusting with soft brush"
                ],
                leadTime: "In-stock. Standard dispatch in 3–5 days. 1-year warranty on finish.",
                images: [
                    "https://i.pinimg.com/736x/c2/c7/5b/c2c75bf50e263c265bed11c15562e8d9.jpg",
                    "https://i.pinimg.com/564x/9e/7a/be/9e7abe4f7deebfbd441e7935b6553e90.jpg"
                ],
                tags: ["Textured", "Visual Interest"]
            },
            {
                id: 5,
                title: "Metallic Acrylic",
                category: "ACRYLIC - METALLIC",
                description: "Metallic acrylic finishes that provide a luxurious, contemporary appearance.",
                shortOverview: "Metallic acrylic finishes that provide a luxurious, contemporary appearance with modern appeal.",
                fullDescription: "This metallic acrylic finish provides a luxurious, contemporary appearance that enhances the overall aesthetic of your kitchen. The metallic finish adds a sophisticated touch while being easy to maintain and clean.",
                keyHighlights: [
                    "Luxurious contemporary appearance",
                    "Sophisticated metallic finish",
                    "Easy to maintain and clean",
                    "Modern aesthetic appeal"
                ],
                specs: {
                    range: "Premium",
                    grade: "Premium",
                    finishType: "Metallic Acrylic",
                    inStock: "Yes",
                    thickness: "2mm"
                },
                careNotes: [
                    "Clean with soft cloth and mild detergent",
                    "Avoid abrasive materials",
                    "Regular dusting with microfiber cloth"
                ],
                leadTime: "In-stock. Standard dispatch in 3–5 days. 1-year warranty on finish.",
                images: [
                    "https://cloudfrontgharpediabucket.gharpedia.com/uploads/2023/04/Frameless-Glass-Partition-07-0503070034.jpg",
                    "https://i.pinimg.com/564x/9e/7a/be/9e7abe4f7deebfbd441e7935b6553e90.jpg"
                ],
                tags: ["Metallic", "Luxury"]
            },
            {
                id: 6,
                title: "Transparent Acrylic",
                category: "ACRYLIC - TRANSPARENT",
                description: "Transparent acrylic finishes that allow the underlying material to show through.",
                shortOverview: "Transparent acrylic finishes that allow the underlying material to show through with unique appeal.",
                fullDescription: "This transparent acrylic finish allows the underlying material to show through, creating a unique and modern aesthetic. The transparent finish provides protection while maintaining the natural beauty of the base material.",
                keyHighlights: [
                    "Transparent finish",
                    "Shows underlying material",
                    "Unique modern aesthetic",
                    "Protects base material"
                ],
                specs: {
                    range: "Standard",
                    grade: "Standard",
                    finishType: "Transparent Acrylic",
                    inStock: "Yes",
                    thickness: "2mm"
                },
                careNotes: [
                    "Clean with soft cloth and mild detergent",
                    "Avoid harsh chemicals",
                    "Regular dusting recommended"
                ],
                leadTime: "In-stock. Standard dispatch in 3–5 days. 1-year warranty on finish.",
                images: [
                    "https://i.pinimg.com/564x/9e/7a/be/9e7abe4f7deebfbd441e7935b6553e90.jpg",
                    "https://cloudfrontgharpediabucket.gharpedia.com/uploads/2023/04/Frameless-Glass-Partition-07-0503070034.jpg"
                ],
                tags: ["Transparent", "Unique"]
            }
        ],
        membrane: [
            {
                id: 1,
                title: "Soft Touch Membrane",
                category: "MEMBRANE - SOFT TOUCH",
                description: "Soft touch membrane finish that provides a luxurious, tactile experience.",
                shortOverview: "Soft touch membrane finish that provides a luxurious, tactile experience with premium feel.",
                fullDescription: "This soft touch membrane finish provides a luxurious, tactile experience that enhances the overall feel of your kitchen cabinets. The soft touch surface offers a premium feel while being highly durable and resistant to wear and tear.",
                keyHighlights: [
                    "Luxurious tactile experience",
                    "Premium soft touch feel",
                    "Highly durable",
                    "Resistant to wear and tear"
                ],
                specs: {
                    range: "Premium",
                    grade: "Premium",
                    finishType: "Soft Touch Membrane",
                    inStock: "Yes",
                    thickness: "0.8mm"
                },
                careNotes: [
                    "Clean with soft cloth and mild detergent",
                    "Avoid abrasive materials",
                    "Regular dusting recommended"
                ],
                leadTime: "In-stock. Standard dispatch in 3–5 days. 1-year warranty on finish.",
                images: [
                    "https://assets-news.housing.com/news/wp-content/uploads/2022/03/17140031/Tall-unit-kitchen-cabinet-ideas-Why-are-they-popular-in-modern-kitchens-02.jpg",
                    "https://suntechinteriors.com/wp-content/uploads/photo-gallery/imported_from_media_libray/wooden-tall-units-for-kitchen-1.jpg?bwg=1641281851"
                ],
                tags: ["Soft Touch", "Luxury"]
            },
            {
                id: 2,
                title: "High Gloss Membrane",
                category: "MEMBRANE - HIGH GLOSS",
                description: "High gloss membrane finish that creates a sleek, modern appearance.",
                shortOverview: "High gloss membrane finish that creates a sleek, modern appearance with reflective surface.",
                fullDescription: "This high gloss membrane finish creates a sleek, modern appearance with its reflective surface that enhances light in your kitchen. The glossy finish is highly durable and provides excellent protection while maintaining a sophisticated look.",
                keyHighlights: [
                    "Sleek modern appearance",
                    "Reflective surface",
                    "Highly durable",
                    "Excellent protection"
                ],
                specs: {
                    range: "Premium",
                    grade: "Premium",
                    finishType: "High Gloss Membrane",
                    inStock: "Yes",
                    thickness: "0.8mm"
                },
                careNotes: [
                    "Clean with glass cleaner for best results",
                    "Avoid abrasive materials",
                    "Regular dusting with microfiber cloth"
                ],
                leadTime: "In-stock. Standard dispatch in 3–5 days. 1-year warranty on finish.",
                images: [
                    "https://suntechinteriors.com/wp-content/uploads/photo-gallery/imported_from_media_libray/wooden-tall-units-for-kitchen-1.jpg?bwg=1641281851",
                    "https://assets-news.housing.com/news/wp-content/uploads/2022/03/17140031/Tall-unit-kitchen-cabinet-ideas-Why-are-they-popular-in-modern-kitchens-02.jpg"
                ],
                tags: ["High Gloss", "Modern"]
            },
            {
                id: 3,
                title: "Matt Membrane",
                category: "MEMBRANE - MATT",
                description: "Matt membrane finish that offers a sophisticated, non-reflective surface.",
                shortOverview: "Matt membrane finish that offers a sophisticated, non-reflective surface with elegant appearance.",
                fullDescription: "This matt membrane finish provides a sophisticated, non-reflective surface that adds elegance to your kitchen design. The matt finish reduces glare and fingerprints while maintaining a clean, modern appearance that complements various kitchen styles.",
                keyHighlights: [
                    "Sophisticated non-reflective surface",
                    "Reduces glare and fingerprints",
                    "Elegant appearance",
                    "Complements various kitchen styles"
                ],
                specs: {
                    range: "Standard",
                    grade: "Standard",
                    finishType: "Matt Membrane",
                    inStock: "Yes",
                    thickness: "0.8mm"
                },
                careNotes: [
                    "Wipe with damp cloth and mild detergent",
                    "Avoid harsh chemicals",
                    "Regular dusting recommended"
                ],
                leadTime: "In-stock. Standard dispatch in 3–5 days. 1-year warranty on finish.",
                images: [
                    "https://m.media-amazon.com/images/I/51YOCXTO6WL.jpg",
                    "https://suntechinteriors.com/wp-content/uploads/photo-gallery/imported_from_media_libray/wooden-tall-units-for-kitchen-1.jpg?bwg=1641281851"
                ],
                tags: ["Matt Finish", "Sophisticated"]
            },
            {
                id: 4,
                title: "Textured Membrane",
                category: "MEMBRANE - TEXTURED",
                description: "Textured membrane finishes that add depth and character to cabinet surfaces.",
                shortOverview: "Textured membrane finishes that add depth and character to cabinet surfaces with enhanced appeal.",
                fullDescription: "This textured membrane finish adds depth and character to your cabinet surfaces. The textured surface provides enhanced grip and hides minor scratches while creating a unique aesthetic that stands out in modern kitchen designs.",
                keyHighlights: [
                    "Adds depth and character",
                    "Enhanced grip",
                    "Hides minor scratches",
                    "Unique aesthetic appeal"
                ],
                specs: {
                    range: "Premium",
                    grade: "Premium",
                    finishType: "Textured Membrane",
                    inStock: "Yes",
                    thickness: "0.8mm"
                },
                careNotes: [
                    "Clean with soft cloth and mild detergent",
                    "Avoid abrasive materials",
                    "Regular dusting with soft brush"
                ],
                leadTime: "In-stock. Standard dispatch in 3–5 days. 1-year warranty on finish.",
                images: [
                    "https://suntechinteriors.com/wp-content/uploads/photo-gallery/imported_from_media_libray/wooden-tall-units-for-kitchen-1.jpg?bwg=1641281851",
                    "https://assets-news.housing.com/news/wp-content/uploads/2022/03/17140031/Tall-unit-kitchen-cabinet-ideas-Why-are-they-popular-in-modern-kitchens-02.jpg"
                ],
                tags: ["Textured", "Character"]
            },
            {
                id: 5,
                title: "Color Membrane",
                category: "MEMBRANE - COLOR",
                description: "Vibrant color membrane finishes available in various shades and tones.",
                shortOverview: "Vibrant color membrane finishes available in various shades and tones for modern kitchen designs.",
                fullDescription: "This color membrane finish offers vibrant colors in various shades and tones to perfectly match your kitchen design. The membrane material provides excellent durability and a smooth finish that's easy to clean and maintain.",
                keyHighlights: [
                    "Vibrant color options",
                    "Various shades and tones",
                    "Excellent durability",
                    "Easy to clean and maintain"
                ],
                specs: {
                    range: "Standard",
                    grade: "Standard",
                    finishType: "Color Membrane",
                    inStock: "Yes",
                    thickness: "0.8mm"
                },
                careNotes: [
                    "Wipe with damp cloth and mild detergent",
                    "Avoid harsh chemicals",
                    "Regular cleaning recommended"
                ],
                leadTime: "In-stock. Standard dispatch in 3–5 days. 1-year warranty on finish.",
                images: [
                    "https://m.media-amazon.com/images/I/51YOCXTO6WL.jpg",
                    "https://suntechinteriors.com/wp-content/uploads/photo-gallery/imported_from_media_libray/wooden-tall-units-for-kitchen-1.jpg?bwg=1641281851"
                ],
                tags: ["Color Options", "Vibrant"]
            },
            {
                id: 6,
                title: "Wood Grain Membrane",
                category: "MEMBRANE - WOOD GRAIN",
                description: "Wood grain membrane finish that mimics natural wood textures with enhanced durability.",
                shortOverview: "Wood grain membrane finish that mimics natural wood textures with enhanced durability and aesthetic appeal.",
                fullDescription: "This wood grain membrane finish mimics natural wood textures with enhanced durability and aesthetic appeal. The finish provides the beauty of natural wood while being highly resistant to scratches, stains, and moisture, making it perfect for high-traffic kitchen areas.",
                keyHighlights: [
                    "Mimics natural wood textures",
                    "Enhanced durability",
                    "Resistant to scratches and stains",
                    "Moisture resistant"
                ],
                specs: {
                    range: "Premium",
                    grade: "Premium",
                    finishType: "Wood Grain Membrane",
                    inStock: "Yes",
                    thickness: "0.8mm"
                },
                careNotes: [
                    "Wipe with damp cloth and mild detergent",
                    "Avoid abrasive cleaners",
                    "Regular dusting recommended"
                ],
                leadTime: "In-stock. Standard dispatch in 3–5 days. 1-year warranty on finish.",
                images: [
                    "https://assets-news.housing.com/news/wp-content/uploads/2022/03/17140031/Tall-unit-kitchen-cabinet-ideas-Why-are-they-popular-in-modern-kitchens-02.jpg",
                    "https://suntechinteriors.com/wp-content/uploads/photo-gallery/imported_from_media_libray/wooden-tall-units-for-kitchen-1.jpg?bwg=1641281851"
                ],
                tags: ["Wood Grain", "Durable"]
            }
        ],
        puPoint: [
            {
                id: 1,
                title: "High Gloss PU",
                category: "PU POINT - HIGH GLOSS",
                description: "High gloss PU finish that provides excellent durability and a mirror-like surface.",
                shortOverview: "High gloss PU finish that provides excellent durability and a mirror-like surface with premium appeal.",
                fullDescription: "This high gloss PU finish provides excellent durability and a mirror-like surface that enhances the visual appeal of your kitchen. The PU coating offers superior protection against scratches, stains, and moisture while maintaining a sophisticated appearance.",
                keyHighlights: [
                    "Excellent durability",
                    "Mirror-like surface",
                    "Superior protection",
                    "Sophisticated appearance"
                ],
                specs: {
                    range: "Premium",
                    grade: "Premium",
                    finishType: "High Gloss PU",
                    inStock: "Yes",
                    thickness: "0.5mm"
                },
                careNotes: [
                    "Clean with glass cleaner for best results",
                    "Avoid abrasive materials",
                    "Regular dusting with microfiber cloth"
                ],
                leadTime: "In-stock. Standard dispatch in 3–5 days. 1-year warranty on finish.",
                images: [
                    "https://s3-blog.homelane.com/design-ideas-pre/wp-content/uploads/2021/08/budget-friendly-modular-kitchen.jpg",
                    "https://huvu.in/wp-content/uploads/2024/08/Breakfast-Counter.webp"
                ],
                tags: ["High Gloss", "Durable"]
            },
            {
                id: 2,
                title: "Matt PU Finish",
                category: "PU POINT - MATT",
                description: "Matt PU finish that offers a smooth, non-reflective surface with modern appeal.",
                shortOverview: "Matt PU finish that offers a smooth, non-reflective surface with modern appeal and elegant appearance.",
                fullDescription: "This matt PU finish provides a smooth, non-reflective surface that offers a modern and elegant appearance. The matt finish reduces glare and fingerprints while maintaining a sophisticated look that complements contemporary kitchen designs.",
                keyHighlights: [
                    "Smooth non-reflective surface",
                    "Modern elegant appearance",
                    "Reduces glare and fingerprints",
                    "Sophisticated contemporary look"
                ],
                specs: {
                    range: "Standard",
                    grade: "Standard",
                    finishType: "Matt PU Finish",
                    inStock: "Yes",
                    thickness: "0.5mm"
                },
                careNotes: [
                    "Wipe with damp cloth and mild detergent",
                    "Avoid harsh chemicals",
                    "Regular dusting recommended"
                ],
                leadTime: "In-stock. Standard dispatch in 3–5 days. 1-year warranty on finish.",
                images: [
                    "https://huvu.in/wp-content/uploads/2024/08/Breakfast-Counter.webp",
                    "https://s3-blog.homelane.com/design-ideas-pre/wp-content/uploads/2021/08/budget-friendly-modular-kitchen.jpg"
                ],
                tags: ["Matt Finish", "Modern"]
            },
            {
                id: 3,
                title: "Satin PU Finish",
                category: "PU POINT - SATIN",
                description: "Satin PU finish that provides a subtle sheen between matt and gloss finishes.",
                shortOverview: "Satin PU finish that provides a subtle sheen between matt and gloss finishes with elegant appeal.",
                fullDescription: "This satin PU finish provides a subtle sheen that falls between matt and gloss finishes, offering an elegant and sophisticated appearance. The satin finish provides excellent durability while maintaining a refined look that complements various kitchen styles.",
                keyHighlights: [
                    "Subtle sheen finish",
                    "Elegant sophisticated appearance",
                    "Excellent durability",
                    "Refined look"
                ],
                specs: {
                    range: "Standard",
                    grade: "Standard",
                    finishType: "Satin PU Finish",
                    inStock: "Yes",
                    thickness: "0.5mm"
                },
                careNotes: [
                    "Wipe with damp cloth and mild detergent",
                    "Avoid harsh chemicals",
                    "Regular dusting recommended"
                ],
                leadTime: "In-stock. Standard dispatch in 3–5 days. 1-year warranty on finish.",
                images: [
                    "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2017/8/15/1/IO_Suzanne-Childress_Avenue-Arts-Crafts_3.jpg.rend.hgtvcom.616.924.85.suffix/1502820159839.webp",
                    "https://huvu.in/wp-content/uploads/2024/08/Breakfast-Counter.webp"
                ],
                tags: ["Satin", "Subtle Sheen"]
            },
            {
                id: 4,
                title: "Textured PU",
                category: "PU POINT - TEXTURED",
                description: "Textured PU finish that adds visual interest and depth to cabinet surfaces.",
                shortOverview: "Textured PU finish that adds visual interest and depth to cabinet surfaces with enhanced appeal.",
                fullDescription: "This textured PU finish adds visual interest and depth to your cabinet surfaces. The textured surface provides enhanced grip and hides minor scratches while creating a unique aesthetic that stands out in modern kitchen designs.",
                keyHighlights: [
                    "Visual interest and depth",
                    "Enhanced grip",
                    "Hides minor scratches",
                    "Unique aesthetic appeal"
                ],
                specs: {
                    range: "Standard",
                    grade: "Standard",
                    finishType: "Textured PU",
                    inStock: "Yes",
                    thickness: "0.5mm"
                },
                careNotes: [
                    "Clean with soft cloth and mild detergent",
                    "Avoid abrasive materials",
                    "Regular dusting with soft brush"
                ],
                leadTime: "In-stock. Standard dispatch in 3–5 days. 1-year warranty on finish.",
                images: [
                    "https://huvu.in/wp-content/uploads/2024/08/Breakfast-Counter.webp",
                    "https://s3-blog.homelane.com/design-ideas-pre/wp-content/uploads/2021/08/budget-friendly-modular-kitchen.jpg"
                ],
                tags: ["Textured", "Visual Interest"]
            },
            {
                id: 5,
                title: "Color PU Finish",
                category: "PU POINT - COLOR",
                description: "Vibrant color PU finishes available in a wide range of colors and shades.",
                shortOverview: "Vibrant color PU finishes available in a wide range of colors and shades for modern kitchen designs.",
                fullDescription: "This color PU finish offers vibrant colors in a wide range of options to perfectly match your kitchen design. The PU coating provides excellent durability and a smooth finish that's easy to clean and maintain.",
                keyHighlights: [
                    "Wide range of vibrant colors",
                    "Excellent durability",
                    "Smooth finish",
                    "Easy to clean and maintain"
                ],
                specs: {
                    range: "Standard",
                    grade: "Standard",
                    finishType: "Color PU Finish",
                    inStock: "Yes",
                    thickness: "0.5mm"
                },
                careNotes: [
                    "Wipe with damp cloth and mild detergent",
                    "Avoid harsh chemicals",
                    "Regular cleaning recommended"
                ],
                leadTime: "In-stock. Standard dispatch in 3–5 days. 1-year warranty on finish.",
                images: [
                    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                    "https://huvu.in/wp-content/uploads/2024/08/Breakfast-Counter.webp"
                ],
                tags: ["Color Options", "Vibrant"]
            },
            {
                id: 6,
                title: "Wood Grain PU",
                category: "PU POINT - WOOD GRAIN",
                description: "Wood grain PU finish that mimics natural wood textures with enhanced protection.",
                shortOverview: "Wood grain PU finish that mimics natural wood textures with enhanced protection and aesthetic appeal.",
                fullDescription: "This wood grain PU finish mimics natural wood textures with enhanced protection and aesthetic appeal. The finish provides the beauty of natural wood while being highly resistant to scratches, stains, and moisture, making it perfect for high-traffic kitchen areas.",
                keyHighlights: [
                    "Mimics natural wood textures",
                    "Enhanced protection",
                    "Resistant to scratches and stains",
                    "Moisture resistant"
                ],
                specs: {
                    range: "Premium",
                    grade: "Premium",
                    finishType: "Wood Grain PU",
                    inStock: "Yes",
                    thickness: "0.5mm"
                },
                careNotes: [
                    "Wipe with damp cloth and mild detergent",
                    "Avoid abrasive cleaners",
                    "Regular dusting recommended"
                ],
                leadTime: "In-stock. Standard dispatch in 3–5 days. 1-year warranty on finish.",
                images: [
                    "https://huvu.in/wp-content/uploads/2024/08/Breakfast-Counter.webp",
                    "https://s3-blog.homelane.com/design-ideas-pre/wp-content/uploads/2021/08/budget-friendly-modular-kitchen.jpg"
                ],
                tags: ["Wood Grain", "Protection"]
            }
        ],
        glass: [
            {
                id: 1,
                title: "Clear Glass",
                category: "GLASS - CLEAR",
                description: "Crystal clear glass finish that provides a modern, transparent look.",
                shortOverview: "Crystal clear glass finish that provides a modern, transparent look with elegant appeal.",
                fullDescription: "This crystal clear glass finish provides a modern, transparent look that enhances the visual appeal of your kitchen. The clear glass allows for easy visibility of contents while maintaining a sophisticated and elegant appearance.",
                keyHighlights: [
                    "Crystal clear transparency",
                    "Modern elegant appearance",
                    "Easy visibility of contents",
                    "Sophisticated look"
                ],
                specs: {
                    range: "Premium",
                    grade: "Premium",
                    finishType: "Clear Glass",
                    inStock: "Yes",
                    thickness: "6mm"
                },
                careNotes: [
                    "Clean with glass cleaner",
                    "Avoid abrasive materials",
                    "Regular dusting with microfiber cloth"
                ],
                leadTime: "In-stock. Standard dispatch in 3–5 days. 1-year warranty on finish.",
                images: [
                    "https://s3-blog.homelane.com/design-ideas-pre/wp-content/uploads/2021/08/budget-friendly-modular-kitchen.jpg",
                    "https://huvu.in/wp-content/uploads/2024/08/Breakfast-Counter.webp"
                ],
                tags: ["Clear", "Modern"]
            },
            {
                id: 2,
                title: "Frosted Glass",
                category: "GLASS - FROSTED",
                description: "Frosted glass finish that provides privacy while maintaining a modern aesthetic.",
                shortOverview: "Frosted glass finish that provides privacy while maintaining a modern aesthetic and elegant appeal.",
                fullDescription: "This frosted glass finish provides privacy while maintaining a modern aesthetic and elegant appeal. The frosted surface offers a sophisticated look while ensuring contents remain partially concealed.",
                keyHighlights: [
                    "Privacy protection",
                    "Modern aesthetic",
                    "Sophisticated look",
                    "Partially concealed contents"
                ],
                specs: {
                    range: "Standard",
                    grade: "Standard",
                    finishType: "Frosted Glass",
                    inStock: "Yes",
                    thickness: "6mm"
                },
                careNotes: [
                    "Clean with glass cleaner",
                    "Avoid abrasive materials",
                    "Regular dusting with microfiber cloth"
                ],
                leadTime: "In-stock. Standard dispatch in 3–5 days. 1-year warranty on finish.",
                images: [
                    "https://huvu.in/wp-content/uploads/2024/08/Breakfast-Counter.webp",
                    "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2017/8/15/1/IO_Suzanne-Childress_Avenue-Arts-Crafts_3.jpg.rend.hgtvcom.616.924.85.suffix/1502820159839.webp"
                ],
                tags: ["Frosted", "Privacy"]
            },
            {
                id: 3,
                title: "Tinted Glass",
                category: "GLASS - TINTED",
                description: "Tinted glass finish available in various colors to match your kitchen theme.",
                shortOverview: "Tinted glass finish available in various colors to match your kitchen theme and design preferences.",
                fullDescription: "This tinted glass finish is available in various colors to perfectly match your kitchen theme and design preferences. The tinted surface provides a unique aesthetic while maintaining the transparency of glass.",
                keyHighlights: [
                    "Various color options",
                    "Matches kitchen theme",
                    "Unique aesthetic",
                    "Maintains transparency"
                ],
                specs: {
                    range: "Standard",
                    grade: "Standard",
                    finishType: "Tinted Glass",
                    inStock: "Yes",
                    thickness: "6mm"
                },
                careNotes: [
                    "Clean with glass cleaner",
                    "Avoid abrasive materials",
                    "Regular dusting with microfiber cloth"
                ],
                leadTime: "In-stock. Standard dispatch in 3–5 days. 1-year warranty on finish.",
                images: [
                    "https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2017/8/15/1/IO_Suzanne-Childress_Avenue-Arts-Crafts_3.jpg.rend.hgtvcom.616.924.85.suffix/1502820159839.webp",
                    "https://huvu.in/wp-content/uploads/2024/08/Breakfast-Counter.webp"
                ],
                tags: ["Tinted", "Color Options"]
            },
            {
                id: 4,
                title: "Textured Glass",
                category: "GLASS - TEXTURED",
                description: "Textured glass finish that adds visual interest and depth to cabinet doors.",
                shortOverview: "Textured glass finish that adds visual interest and depth to cabinet doors with enhanced appeal.",
                fullDescription: "This textured glass finish adds visual interest and depth to your cabinet doors. The textured surface provides enhanced grip and hides minor scratches while creating a unique aesthetic that stands out in modern kitchen designs.",
                keyHighlights: [
                    "Visual interest and depth",
                    "Enhanced grip",
                    "Hides minor scratches",
                    "Unique aesthetic appeal"
                ],
                specs: {
                    range: "Premium",
                    grade: "Premium",
                    finishType: "Textured Glass",
                    inStock: "Yes",
                    thickness: "6mm"
                },
                careNotes: [
                    "Clean with soft cloth and mild detergent",
                    "Avoid abrasive materials",
                    "Regular dusting with soft brush"
                ],
                leadTime: "In-stock. Standard dispatch in 3–5 days. 1-year warranty on finish.",
                images: [
                    "https://huvu.in/wp-content/uploads/2024/08/Breakfast-Counter.webp",
                    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                ],
                tags: ["Textured", "Visual Interest"]
            },
            {
                id: 5,
                title: "Mirror Glass",
                category: "GLASS - MIRROR",
                description: "Mirror glass finish that creates a reflective surface for a luxurious look.",
                shortOverview: "Mirror glass finish that creates a reflective surface for a luxurious look and elegant appeal.",
                fullDescription: "This mirror glass finish creates a reflective surface that provides a luxurious look and elegant appeal. The mirror finish enhances light in your kitchen while creating a sophisticated and modern appearance.",
                keyHighlights: [
                    "Reflective surface",
                    "Luxurious look",
                    "Enhances light",
                    "Sophisticated appearance"
                ],
                specs: {
                    range: "Premium",
                    grade: "Premium",
                    finishType: "Mirror Glass",
                    inStock: "Yes",
                    thickness: "6mm"
                },
                careNotes: [
                    "Clean with glass cleaner",
                    "Avoid abrasive materials",
                    "Regular dusting with microfiber cloth"
                ],
                leadTime: "In-stock. Standard dispatch in 3–5 days. 1-year warranty on finish.",
                images: [
                    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
                    "https://huvu.in/wp-content/uploads/2024/08/Breakfast-Counter.webp"
                ],
                tags: ["Mirror", "Luxury"]
            },
            {
                id: 6,
                title: "Back Painted Glass",
                category: "GLASS - BACK PAINTED",
                description: "Back painted glass finish that provides a solid color appearance with glass durability.",
                shortOverview: "Back painted glass finish that provides a solid color appearance with glass durability and modern appeal.",
                fullDescription: "This back painted glass finish provides a solid color appearance with glass durability and modern appeal. The finish offers the best of both worlds - the aesthetic of solid color with the durability and elegance of glass.",
                keyHighlights: [
                    "Solid color appearance",
                    "Glass durability",
                    "Modern appeal",
                    "Best of both worlds"
                ],
                specs: {
                    range: "Standard",
                    grade: "Standard",
                    finishType: "Back Painted Glass",
                    inStock: "Yes",
                    thickness: "6mm"
                },
                careNotes: [
                    "Clean with glass cleaner",
                    "Avoid abrasive materials",
                    "Regular dusting with microfiber cloth"
                ],
                leadTime: "In-stock. Standard dispatch in 3–5 days. 1-year warranty on finish.",
                images: [
                    "https://huvu.in/wp-content/uploads/2024/08/Breakfast-Counter.webp",
                    "https://s3-blog.homelane.com/design-ideas-pre/wp-content/uploads/2021/08/budget-friendly-modular-kitchen.jpg"
                ],
                tags: ["Back Painted", "Durable"]
            }
        ]
    };

    // Get the current product data
    const currentProduct = finishesData[category]?.find(item => item.id === parseInt(id));

    if (!currentProduct) {
        return (
            <Container maxWidth="lg" sx={{ py: 4 }}>
                <Typography variant="h4">Product not found</Typography>
                <Button onClick={() => navigate('/kitchen/components/finishes')} sx={{ mt: 2 }}>
                    Back to Finishes
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
                        onClick={() => navigate('/kitchen/components/finishes')}
                    >
                        {category === 'laminates' ? 'Laminates' :
                            category === 'acrylic' ? 'Acrylic' :
                                category === 'membrane' ? 'Membrane' :
                                    category === 'puPoint' ? 'Pu Point' : 'Glass'}
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
                                    <SpecChip label={`Finish Type: ${currentProduct.specs.finishType}`} />
                                    <SpecChip label={`In-Stock: ${currentProduct.specs.inStock}`} />
                                    <SpecChip label={`Thickness: ${currentProduct.specs.thickness}`} />
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
                                        <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.85rem' }}>Finish Type:</Typography>
                                        <Typography variant="body2" fontWeight="medium" sx={{ fontSize: '0.85rem' }}>{currentProduct.specs.finishType}</Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 0.5 }}>
                                        <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.85rem' }}>In-Stock:</Typography>
                                        <Typography variant="body2" fontWeight="medium" sx={{ fontSize: '0.85rem' }}>{currentProduct.specs.inStock}</Typography>
                                    </Box>
                                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 0.5 }}>
                                        <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.85rem' }}>Thickness:</Typography>
                                        <Typography variant="body2" fontWeight="medium" sx={{ fontSize: '0.85rem' }}>{currentProduct.specs.thickness}</Typography>
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
