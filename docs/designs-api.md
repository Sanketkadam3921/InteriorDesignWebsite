# Designs API Documentation

This document describes the design catalog endpoints for the KalaKruti platform, including design categories, listings, and detailed specifications.

## Base URL
```
https://api.kalakruti.com/v1/designs
```

## Endpoints

### 1. Get All Design Categories

**GET** `/categories`

Get a list of all available design categories.

#### Response
```json
{
  "success": true,
  "data": {
    "categories": [
      {
        "id": "kitchen",
        "name": "Kitchen",
        "displayName": "Kitchen",
        "description": "Explore our curated collection of modular kitchen design concepts",
        "icon": "kitchen",
        "color": "#FF6B6B",
        "featured": true,
        "totalDesigns": 25,
        "image": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop"
      },
      {
        "id": "master-bedroom",
        "name": "Master Bedroom",
        "displayName": "Master Bedroom",
        "description": "Luxurious master bedroom designs for ultimate comfort",
        "icon": "bedroom",
        "color": "#4ECDC4",
        "featured": true,
        "totalDesigns": 20,
        "image": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop"
      },
      {
        "id": "living-room",
        "name": "Living Room",
        "displayName": "Living Room",
        "description": "Contemporary living room designs for modern homes",
        "icon": "living-room",
        "color": "#45B7D1",
        "featured": false,
        "totalDesigns": 18,
        "image": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop"
      }
    ]
  },
  "message": "Design categories retrieved successfully",
  "timestamp": "2024-01-01T00:00:00Z"
}
```

---

### 2. Get Designs by Category

**GET** `/{categoryId}`

Get all designs for a specific category.

#### Path Parameters
- `categoryId`: The category identifier (e.g., `kitchen`, `master-bedroom`)

#### Query Parameters
- `page` (optional): Page number (default: 1)
- `limit` (optional): Items per page (default: 20, max: 100)
- `style` (optional): Filter by design style
- `priceRange` (optional): Filter by price range (e.g., "3-5")
- `area` (optional): Filter by area range
- `sort` (optional): Sort by `price`, `area`, `popularity`, `newest` (default: `popularity`)

#### Response
```json
{
  "success": true,
  "data": {
    "category": {
      "id": "kitchen",
      "name": "Kitchen",
      "displayName": "Kitchen",
      "description": "Explore our curated collection of modular kitchen design concepts"
    },
    "designs": [
      {
        "id": "kitchen-1",
        "name": "Modern Modular Kitchen with Island",
        "image": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500",
        "description": "A contemporary modular kitchen featuring a central island and breakfast counter",
        "style": "Modern",
        "price": "₹4,50,000",
        "area": "120 sq ft",
        "features": [
          "Central island",
          "Breakfast counter",
          "Premium finishes",
          "Smart storage"
        ],
        "isFeatured": true,
        "createdAt": "2024-01-01T00:00:00Z"
      },
      {
        "id": "kitchen-2",
        "name": "Compact U-Shaped Kitchen",
        "image": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500",
        "description": "An efficient U-shaped kitchen design that maximizes storage and functionality",
        "style": "Contemporary",
        "price": "₹3,20,000",
        "area": "80 sq ft",
        "features": [
          "U-shaped layout",
          "Pull-out pantry",
          "Corner storage",
          "Modern appliances"
        ],
        "isFeatured": false,
        "createdAt": "2024-01-01T00:00:00Z"
      }
    ]
  },
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 25,
    "totalPages": 2
  },
  "filters": {
    "availableStyles": ["Modern", "Contemporary", "Traditional", "Minimalist"],
    "priceRanges": ["1-2", "2-3", "3-5", "5-10"],
    "areaRanges": ["50-80", "80-120", "120-200", "200+"]
  },
  "message": "Designs retrieved successfully",
  "timestamp": "2024-01-01T00:00:00Z"
}
```

---

### 3. Get Design Details

**GET** `/{categoryId}/{designId}`

Get detailed information about a specific design.

#### Path Parameters
- `categoryId`: The category identifier
- `designId`: The design identifier

#### Response
```json
{
  "success": true,
  "data": {
    "design": {
      "id": "kitchen-1",
      "title": "Modern Modular Kitchen with Island and Breakfast Counter",
      "category": "kitchen",
      "style": "Modern",
      "price": "₹4,50,000",
      "area": "120 sq ft",
      "image": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800",
      "description": "A contemporary modular kitchen featuring a central island, breakfast counter, and premium finishes for the perfect cooking and dining experience.",
      "longDescription": "This modern modular kitchen represents the perfect blend of functionality and aesthetics. The central island serves as both a prep area and casual dining space, while the breakfast counter creates an inviting atmosphere for morning meals. Premium materials and finishes ensure durability and elegance...",
      "specifications": {
        "dimension": "12x10 feet",
        "color": "White, Gray, Wood",
        "furniture": "Modular Cabinets, Island, Breakfast Counter",
        "lighting": "LED Under-cabinet, Pendant Lights",
        "materials": "Laminate, Granite, Stainless Steel",
        "appliances": "Built-in Oven, Induction Cooktop, Dishwasher"
      },
      "sections": [
        {
          "title": "Kitchen Layout",
          "items": [
            "L-shaped layout maximizes space efficiency and workflow",
            "Central island provides additional prep space and storage",
            "Breakfast counter creates casual dining area within the kitchen",
            "Ample counter space for multiple cooking activities"
          ]
        },
        {
          "title": "Storage Solutions",
          "items": [
            "Floor-to-ceiling cabinets maximize vertical storage",
            "Pull-out drawers and organizers for easy access",
            "Island includes built-in wine rack and utensil storage",
            "Pantry-style storage for bulk items and appliances"
          ]
        },
        {
          "title": "Premium Features",
          "items": [
            "Granite countertops provide durability and elegance",
            "Stainless steel appliances create a professional look",
            "Soft-close cabinet doors and drawers for quiet operation",
            "LED lighting system ensures proper illumination for cooking"
          ]
        }
      ],
      "features": [
        "Central island with seating",
        "Breakfast counter",
        "Premium granite countertops",
        "Soft-close mechanisms",
        "LED under-cabinet lighting",
        "Built-in wine rack",
        "Pull-out pantry",
        "Modern appliances"
      ],
      "idealFor": "Cooking enthusiasts and families who love to entertain",
      "images": [
        {
          "id": "img_1",
          "url": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800",
          "thumbnail": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=200",
          "alt": "Modern kitchen with island",
          "category": "overview"
        },
        {
          "id": "img_2",
          "url": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800",
          "thumbnail": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200",
          "alt": "Kitchen island detail",
          "category": "island"
        },
        {
          "id": "img_3",
          "url": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800",
          "thumbnail": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=200",
          "alt": "Storage solutions",
          "category": "storage"
        }
      ],
      "relatedDesigns": [
        {
          "id": "kitchen-2",
          "name": "Compact U-Shaped Kitchen",
          "image": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=300",
          "price": "₹3,20,000",
          "style": "Contemporary"
        },
        {
          "id": "kitchen-3",
          "name": "Luxury Kitchen with Marble Finishes",
          "image": "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=300",
          "price": "₹6,50,000",
          "style": "Luxury"
        }
      ],
      "createdAt": "2024-01-01T00:00:00Z",
      "updatedAt": "2024-01-01T00:00:00Z"
    }
  },
  "message": "Design details retrieved successfully",
  "timestamp": "2024-01-01T00:00:00Z"
}
```

---

### 4. Search Designs

**GET** `/search`

Search designs across all categories with advanced filtering.

#### Query Parameters
- `q` (required): Search query
- `category` (optional): Filter by category
- `style` (optional): Filter by design style
- `minPrice` (optional): Minimum price
- `maxPrice` (optional): Maximum price
- `minArea` (optional): Minimum area
- `maxArea` (optional): Maximum area
- `features` (optional): Comma-separated list of features
- `page` (optional): Page number
- `limit` (optional): Items per page

#### Response
```json
{
  "success": true,
  "data": {
    "designs": [
      {
        "id": "kitchen-1",
        "name": "Modern Modular Kitchen with Island",
        "category": "kitchen",
        "image": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300",
        "description": "A contemporary modular kitchen featuring a central island and breakfast counter",
        "style": "Modern",
        "price": "₹4,50,000",
        "area": "120 sq ft",
        "relevanceScore": 0.95,
        "matchedFeatures": ["island", "modern", "storage"]
      }
    ],
    "filters": {
      "applied": {
        "q": "modern kitchen island",
        "category": "kitchen",
        "style": "Modern"
      },
      "available": {
        "categories": ["kitchen", "bedroom", "living-room"],
        "styles": ["Modern", "Contemporary", "Traditional"],
        "priceRanges": ["1-2", "2-3", "3-5", "5-10"]
      }
    }
  },
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 15,
    "totalPages": 1
  },
  "message": "Search completed successfully",
  "timestamp": "2024-01-01T00:00:00Z"
}
```

---

### 5. Get Featured Designs

**GET** `/featured`

Get featured designs across all categories.

#### Query Parameters
- `limit` (optional): Number of designs to return (default: 10, max: 50)
- `category` (optional): Filter by specific category

#### Response
```json
{
  "success": true,
  "data": {
    "designs": [
      {
        "id": "kitchen-1",
        "name": "Modern Modular Kitchen with Island",
        "category": "kitchen",
        "image": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500",
        "description": "A contemporary modular kitchen featuring a central island and breakfast counter",
        "style": "Modern",
        "price": "₹4,50,000",
        "area": "120 sq ft",
        "isFeatured": true,
        "featuredAt": "2024-01-01T00:00:00Z"
      },
      {
        "id": "master-bedroom-1",
        "name": "Luxury Master Bedroom Suite",
        "category": "master-bedroom",
        "image": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500",
        "description": "A luxurious master bedroom with walk-in closet and en-suite bathroom",
        "style": "Luxury",
        "price": "₹4,50,000",
        "area": "200 sq ft",
        "isFeatured": true,
        "featuredAt": "2024-01-01T00:00:00Z"
      }
    ]
  },
  "message": "Featured designs retrieved successfully",
  "timestamp": "2024-01-01T00:00:00Z"
}
```

---

### 6. Get Design Components

**GET** `/{categoryId}/components`

Get available components and customization options for a design category.

#### Path Parameters
- `categoryId`: The category identifier

#### Response
```json
{
  "success": true,
  "data": {
    "category": "kitchen",
    "components": {
      "cabinets": [
        {
          "id": "cabinet-1",
          "name": "Base Cabinet",
          "type": "storage",
          "materials": ["Laminate", "Wood", "Acrylic"],
          "colors": ["White", "Gray", "Wood Finish"],
          "priceRange": "₹15,000 - ₹25,000"
        },
        {
          "id": "cabinet-2",
          "name": "Wall Cabinet",
          "type": "storage",
          "materials": ["Laminate", "Wood", "Glass"],
          "colors": ["White", "Gray", "Wood Finish"],
          "priceRange": "₹12,000 - ₹20,000"
        }
      ],
      "countertops": [
        {
          "id": "countertop-1",
          "name": "Granite Countertop",
          "type": "surface",
          "materials": ["Granite"],
          "colors": ["Black", "White", "Gray", "Brown"],
          "priceRange": "₹200 - ₹500 per sq ft"
        },
        {
          "id": "countertop-2",
          "name": "Quartz Countertop",
          "type": "surface",
          "materials": ["Quartz"],
          "colors": ["White", "Gray", "Beige"],
          "priceRange": "₹300 - ₹600 per sq ft"
        }
      ],
      "appliances": [
        {
          "id": "appliance-1",
          "name": "Built-in Oven",
          "type": "cooking",
          "brands": ["Bosch", "Siemens", "Whirlpool"],
          "priceRange": "₹25,000 - ₹50,000"
        },
        {
          "id": "appliance-2",
          "name": "Induction Cooktop",
          "type": "cooking",
          "brands": ["Bosch", "Siemens", "Whirlpool"],
          "priceRange": "₹15,000 - ₹30,000"
        }
      ]
    }
  },
  "message": "Design components retrieved successfully",
  "timestamp": "2024-01-01T00:00:00Z"
}
```

---

### 7. Get Design Styles

**GET** `/styles`

Get all available design styles across categories.

#### Response
```json
{
  "success": true,
  "data": {
    "styles": [
      {
        "id": "modern",
        "name": "Modern",
        "description": "Clean lines, minimal ornamentation, and focus on function",
        "characteristics": [
          "Clean lines",
          "Minimal decoration",
          "Neutral colors",
          "Open spaces"
        ],
        "popularIn": ["kitchen", "living-room", "bedroom"],
        "image": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop"
      },
      {
        "id": "contemporary",
        "name": "Contemporary",
        "description": "Current design trends with a focus on comfort and style",
        "characteristics": [
          "Current trends",
          "Comfortable furniture",
          "Mixed materials",
          "Flexible layouts"
        ],
        "popularIn": ["kitchen", "living-room", "bedroom"],
        "image": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=300&fit=crop"
      },
      {
        "id": "traditional",
        "name": "Traditional",
        "description": "Classic design elements with rich details and warm colors",
        "characteristics": [
          "Classic elements",
          "Rich details",
          "Warm colors",
          "Ornate furniture"
        ],
        "popularIn": ["living-room", "bedroom", "dining-room"],
        "image": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop"
      }
    ]
  },
  "message": "Design styles retrieved successfully",
  "timestamp": "2024-01-01T00:00:00Z"
}
```

---

### 8. Get Design Statistics

**GET** `/stats`

Get design catalog statistics and analytics.

#### Response
```json
{
  "success": true,
  "data": {
    "statistics": {
      "totalDesigns": 500,
      "totalCategories": 25,
      "featuredDesigns": 50,
      "averagePrice": 350000,
      "byCategory": {
        "kitchen": 80,
        "master-bedroom": 60,
        "living-room": 55,
        "bathroom": 45,
        "wardrobe": 40
      },
      "byStyle": {
        "Modern": 150,
        "Contemporary": 120,
        "Traditional": 100,
        "Minimalist": 80,
        "Luxury": 50
      },
      "priceDistribution": {
        "1-2": 100,
        "2-3": 150,
        "3-5": 120,
        "5-10": 80,
        "10+": 50
      }
    }
  },
  "message": "Design statistics retrieved successfully",
  "timestamp": "2024-01-01T00:00:00Z"
}
```

---

## Error Codes

| Code | Description |
|------|-------------|
| `CATEGORY_NOT_FOUND` | Design category not found |
| `DESIGN_NOT_FOUND` | Design not found |
| `INVALID_CATEGORY` | Invalid category identifier |
| `INVALID_FILTER` | Invalid filter parameter |
| `SEARCH_QUERY_REQUIRED` | Search query parameter is required |
| `COMPONENTS_NOT_AVAILABLE` | Components not available for category |

## Rate Limiting

- All endpoints: 1000 requests per hour per API key
- Search endpoint: 500 requests per hour per API key

## Notes

- All prices are in Indian Rupees (INR)
- Area measurements are in square feet
- Image URLs are CDN-optimized with automatic resizing
- Design IDs are unique across all categories
- All timestamps are in ISO 8601 format (UTC)
- Featured designs are updated weekly
