# Price Calculators API Documentation

This document describes the price calculation endpoints for the KalaKruti platform, including kitchen, wardrobe, and home interior calculators.

## Base URL
```
https://api.kalakruti.com/v1/calculators
```

## Endpoints

### 1. Kitchen Calculator

**POST** `/kitchen`

Calculate the estimated cost for a modular kitchen design.

#### Request Body
```json
{
  "dimensions": {
    "length": 12,
    "width": 10,
    "height": 7
  },
  "layout": "L-shaped",
  "cabinets": {
    "baseCabinets": 8,
    "wallCabinets": 6,
    "tallCabinets": 2
  },
  "materials": {
    "carcass": "BWR Plywood",
    "shutter": "Laminate",
    "countertop": "Granite",
    "hardware": "Premium"
  },
  "appliances": [
    {
      "type": "built-in-oven",
      "brand": "Bosch",
      "model": "HBA63A252B"
    },
    {
      "type": "induction-cooktop",
      "brand": "Siemens",
      "model": "EH875FE11E"
    },
    {
      "type": "chimney",
      "brand": "Faber",
      "model": "Hood Primeline 60"
    }
  ],
  "finishes": {
    "color": "White",
    "texture": "Matte",
    "edgeProfile": "Standard"
  },
  "location": "Bangalore",
  "installationType": "full-installation"
}
```

#### Response
```json
{
  "success": true,
  "data": {
    "calculation": {
      "id": "calc_kitchen_123",
      "type": "kitchen",
      "totalCost": 485000,
      "breakdown": {
        "cabinets": {
          "baseCabinets": 120000,
          "wallCabinets": 90000,
          "tallCabinets": 60000,
          "subtotal": 270000
        },
        "countertop": {
          "material": 45000,
          "fabrication": 15000,
          "installation": 10000,
          "subtotal": 70000
        },
        "appliances": {
          "built-in-oven": 45000,
          "induction-cooktop": 25000,
          "chimney": 18000,
          "subtotal": 88000
        },
        "hardware": {
          "hinges": 8000,
          "drawerRunners": 12000,
          "handles": 5000,
          "subtotal": 25000
        },
        "installation": {
          "labor": 20000,
          "transportation": 5000,
          "subtotal": 25000
        },
        "miscellaneous": {
          "electrical": 8000,
          "plumbing": 5000,
          "wasteDisposal": 2000,
          "subtotal": 15000
        }
      },
      "area": 120,
      "costPerSqFt": 4042,
      "estimatedDuration": "15-20 days",
      "warranty": {
        "cabinets": "5 years",
        "hardware": "2 years",
        "appliances": "1 year"
      },
      "recommendations": [
        "Consider adding soft-close mechanisms for better user experience",
        "LED under-cabinet lighting would enhance functionality",
        "Pull-out pantry can maximize storage efficiency"
      ],
      "createdAt": "2024-01-01T00:00:00Z"
    }
  },
  "message": "Kitchen cost calculated successfully",
  "timestamp": "2024-01-01T00:00:00Z"
}
```

---

### 2. Wardrobe Calculator

**POST** `/wardrobe`

Calculate the estimated cost for a modular wardrobe design.

#### Request Body
```json
{
  "dimensions": {
    "length": 8,
    "width": 2,
    "height": 8
  },
  "type": "sliding-door",
  "sections": {
    "hanging": 4,
    "shelving": 6,
    "drawers": 4,
    "shoeRack": 1
  },
  "materials": {
    "carcass": "BWR Plywood",
    "shutter": "Laminate",
    "hardware": "Premium",
    "mirror": "Full-length"
  },
  "features": [
    "soft-close",
    "led-lighting",
    "pull-out-trouser-rack",
    "jewelry-drawer"
  ],
  "finishes": {
    "color": "Wood Finish",
    "texture": "Glossy",
    "edgeProfile": "Premium"
  },
  "location": "Mumbai",
  "installationType": "full-installation"
}
```

#### Response
```json
{
  "success": true,
  "data": {
    "calculation": {
      "id": "calc_wardrobe_124",
      "type": "wardrobe",
      "totalCost": 185000,
      "breakdown": {
        "carcass": {
          "material": 60000,
          "fabrication": 20000,
          "subtotal": 80000
        },
        "shutters": {
          "material": 35000,
          "fabrication": 15000,
          "subtotal": 50000
        },
        "hardware": {
          "slidingTracks": 15000,
          "hinges": 5000,
          "drawerRunners": 8000,
          "handles": 3000,
          "subtotal": 31000
        },
        "features": {
          "softClose": 8000,
          "ledLighting": 12000,
          "pullOutRack": 5000,
          "jewelryDrawer": 3000,
          "subtotal": 28000
        },
        "installation": {
          "labor": 10000,
          "transportation": 3000,
          "subtotal": 13000
        },
        "miscellaneous": {
          "electrical": 2000,
          "mirror": 1000,
          "subtotal": 3000
        }
      },
      "area": 16,
      "costPerSqFt": 11563,
      "estimatedDuration": "10-12 days",
      "warranty": {
        "carcass": "5 years",
        "hardware": "2 years",
        "features": "1 year"
      },
      "recommendations": [
        "Consider adding a tie and belt organizer",
        "LED lighting with motion sensor for convenience",
        "Full-length mirror on one door panel"
      ],
      "createdAt": "2024-01-01T00:00:00Z"
    }
  },
  "message": "Wardrobe cost calculated successfully",
  "timestamp": "2024-01-01T00:00:00Z"
}
```

---

### 3. Home Calculator

**POST** `/home`

Calculate the estimated cost for full home interior design.

#### Request Body
```json
{
  "propertyDetails": {
    "type": "apartment",
    "bhk": "3-BHK",
    "totalArea": 1200,
    "location": "Bangalore"
  },
  "rooms": [
    {
      "type": "living-room",
      "area": 300,
      "requirements": ["tv-unit", "sofa-set", "coffee-table", "lighting"]
    },
    {
      "type": "kitchen",
      "area": 120,
      "requirements": ["modular-kitchen", "appliances", "lighting"]
    },
    {
      "type": "master-bedroom",
      "area": 200,
      "requirements": ["wardrobe", "bed", "dressing-table", "lighting"]
    },
    {
      "type": "bedroom-2",
      "area": 150,
      "requirements": ["wardrobe", "bed", "study-table", "lighting"]
    },
    {
      "type": "bedroom-3",
      "area": 120,
      "requirements": ["wardrobe", "bed", "lighting"]
    },
    {
      "type": "bathroom-1",
      "area": 60,
      "requirements": ["vanity", "shower", "tiles", "fixtures"]
    },
    {
      "type": "bathroom-2",
      "area": 50,
      "requirements": ["vanity", "shower", "tiles", "fixtures"]
    }
  ],
  "materials": {
    "flooring": "Vitrified Tiles",
    "paint": "Premium Emulsion",
    "doors": "Engineered Wood",
    "windows": "UPVC"
  },
  "style": "modern",
  "budget": "25-35",
  "timeline": "3-4 months"
}
```

#### Response
```json
{
  "success": true,
  "data": {
    "calculation": {
      "id": "calc_home_125",
      "type": "home",
      "totalCost": 2850000,
      "breakdown": {
        "rooms": {
          "living-room": 450000,
          "kitchen": 485000,
          "master-bedroom": 350000,
          "bedroom-2": 280000,
          "bedroom-3": 220000,
          "bathroom-1": 180000,
          "bathroom-2": 150000,
          "subtotal": 2115000
        },
        "commonAreas": {
          "flooring": 180000,
          "paint": 120000,
          "doors": 80000,
          "windows": 60000,
          "lighting": 50000,
          "subtotal": 490000
        },
        "services": {
          "design": 50000,
          "projectManagement": 80000,
          "qualityAssurance": 30000,
          "subtotal": 160000
        },
        "miscellaneous": {
          "transportation": 25000,
          "wasteDisposal": 15000,
          "permits": 10000,
          "subtotal": 50000
        }
      },
      "area": 1200,
      "costPerSqFt": 2375,
      "estimatedDuration": "3-4 months",
      "warranty": {
        "furniture": "5 years",
        "electrical": "2 years",
        "plumbing": "2 years",
        "paint": "1 year"
      },
      "recommendations": [
        "Consider smart home automation for modern living",
        "Add storage solutions in common areas",
        "Energy-efficient lighting throughout the home"
      ],
      "createdAt": "2024-01-01T00:00:00Z"
    }
  },
  "message": "Home interior cost calculated successfully",
  "timestamp": "2024-01-01T00:00:00Z"
}
```

---

### 4. Get Material Options

**GET** `/materials/{category}`

Get available material options for a specific category.

#### Path Parameters
- `category`: Material category (`carcass`, `shutter`, `countertop`, `hardware`, `flooring`, `paint`)

#### Query Parameters
- `location` (optional): Location for pricing
- `budget` (optional): Budget range filter

#### Response
```json
{
  "success": true,
  "data": {
    "category": "carcass",
    "materials": [
      {
        "id": "carcass_1",
        "name": "BWR Plywood",
        "description": "Boiling Water Resistant plywood for moisture resistance",
        "grade": "Premium",
        "pricePerSqFt": 120,
        "features": [
          "Moisture resistant",
          "Termite proof",
          "Long lasting"
        ],
        "warranty": "5 years",
        "image": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300"
      },
      {
        "id": "carcass_2",
        "name": "MDF",
        "description": "Medium Density Fiberboard for smooth finish",
        "grade": "Standard",
        "pricePerSqFt": 80,
        "features": [
          "Smooth finish",
          "Easy to paint",
          "Cost effective"
        ],
        "warranty": "3 years",
        "image": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=300"
      }
    ]
  },
  "message": "Material options retrieved successfully",
  "timestamp": "2024-01-01T00:00:00Z"
}
```

---

### 5. Get Appliance Options

**GET** `/appliances/{type}`

Get available appliances for a specific type.

#### Path Parameters
- `type`: Appliance type (`built-in-oven`, `induction-cooktop`, `chimney`, `dishwasher`, `refrigerator`)

#### Query Parameters
- `budget` (optional): Budget range filter
- `brand` (optional): Brand filter

#### Response
```json
{
  "success": true,
  "data": {
    "type": "built-in-oven",
    "appliances": [
      {
        "id": "oven_1",
        "name": "Bosch HBA63A252B",
        "brand": "Bosch",
        "model": "HBA63A252B",
        "capacity": "60L",
        "price": 45000,
        "features": [
          "Convection cooking",
          "Self-cleaning",
          "Digital display",
          "Timer function"
        ],
        "warranty": "1 year",
        "energyRating": "A++",
        "image": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300"
      },
      {
        "id": "oven_2",
        "name": "Siemens HB36AB520B",
        "brand": "Siemens",
        "model": "HB36AB520B",
        "capacity": "36L",
        "price": 35000,
        "features": [
          "Convection cooking",
          "Catalytic cleaning",
          "Digital display",
          "Child lock"
        ],
        "warranty": "1 year",
        "energyRating": "A++",
        "image": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=300"
      }
    ]
  },
  "message": "Appliance options retrieved successfully",
  "timestamp": "2024-01-01T00:00:00Z"
}
```

---

### 6. Save Calculation

**POST** `/save`

Save a calculation for future reference.

#### Headers
```
Authorization: Bearer <user_token>
```

#### Request Body
```json
{
  "calculationId": "calc_kitchen_123",
  "name": "My Kitchen Design",
  "notes": "Budget-friendly modern kitchen with island"
}
```

#### Response
```json
{
  "success": true,
  "data": {
    "savedCalculation": {
      "id": "saved_123",
      "calculationId": "calc_kitchen_123",
      "name": "My Kitchen Design",
      "notes": "Budget-friendly modern kitchen with island",
      "userId": "user_456",
      "createdAt": "2024-01-01T00:00:00Z"
    }
  },
  "message": "Calculation saved successfully",
  "timestamp": "2024-01-01T00:00:00Z"
}
```

---

### 7. Get Saved Calculations

**GET** `/saved`

Get user's saved calculations.

#### Headers
```
Authorization: Bearer <user_token>
```

#### Query Parameters
- `type` (optional): Filter by calculation type
- `page` (optional): Page number
- `limit` (optional): Items per page

#### Response
```json
{
  "success": true,
  "data": {
    "calculations": [
      {
        "id": "saved_123",
        "calculationId": "calc_kitchen_123",
        "name": "My Kitchen Design",
        "type": "kitchen",
        "totalCost": 485000,
        "area": 120,
        "createdAt": "2024-01-01T00:00:00Z"
      }
    ]
  },
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 5,
    "totalPages": 1
  },
  "message": "Saved calculations retrieved successfully",
  "timestamp": "2024-01-01T00:00:00Z"
}
```

---

### 8. Get Calculation History

**GET** `/history`

Get user's calculation history.

#### Headers
```
Authorization: Bearer <user_token>
```

#### Query Parameters
- `type` (optional): Filter by calculation type
- `dateFrom` (optional): Start date
- `dateTo` (optional): End date
- `page` (optional): Page number
- `limit` (optional): Items per page

#### Response
```json
{
  "success": true,
  "data": {
    "calculations": [
      {
        "id": "calc_kitchen_123",
        "type": "kitchen",
        "totalCost": 485000,
        "area": 120,
        "createdAt": "2024-01-01T00:00:00Z"
      }
    ]
  },
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 15,
    "totalPages": 1
  },
  "message": "Calculation history retrieved successfully",
  "timestamp": "2024-01-01T00:00:00Z"
}
```

---

### 9. Get Calculator Statistics

**GET** `/stats`

Get calculator usage statistics.

#### Response
```json
{
  "success": true,
  "data": {
    "statistics": {
      "totalCalculations": 1500,
      "kitchenCalculations": 800,
      "wardrobeCalculations": 400,
      "homeCalculations": 300,
      "averageCost": {
        "kitchen": 420000,
        "wardrobe": 180000,
        "home": 2800000
      },
      "popularMaterials": {
        "carcass": ["BWR Plywood", "MDF"],
        "shutter": ["Laminate", "Acrylic"],
        "countertop": ["Granite", "Quartz"]
      },
      "popularBrands": {
        "appliances": ["Bosch", "Siemens", "Whirlpool"],
        "hardware": ["Hettich", "Blum", "Grass"]
      },
      "byLocation": {
        "Bangalore": 450,
        "Mumbai": 380,
        "Delhi": 320,
        "Chennai": 200,
        "Others": 150
      }
    }
  },
  "message": "Calculator statistics retrieved successfully",
  "timestamp": "2024-01-01T00:00:00Z"
}
```

---

## Error Codes

| Code | Description |
|------|-------------|
| `INVALID_DIMENSIONS` | Invalid room dimensions provided |
| `INVALID_MATERIAL` | Invalid material selection |
| `INVALID_APPLIANCE` | Invalid appliance selection |
| `CALCULATION_NOT_FOUND` | Calculation not found |
| `SAVE_FAILED` | Failed to save calculation |
| `UNAUTHORIZED` | User authentication required |
| `RATE_LIMIT_EXCEEDED` | Too many calculation requests |

## Rate Limiting

- Calculator endpoints: 50 requests per hour per user
- Material/Appliance lookups: 200 requests per hour per user
- Save operations: 20 requests per hour per user

## Validation Rules

### Kitchen Calculator
- `dimensions.length`: Required, 6-20 feet
- `dimensions.width`: Required, 6-15 feet
- `dimensions.height`: Required, 7-9 feet
- `layout`: Required, one of: `L-shaped`, `U-shaped`, `Straight`, `Island`
- `cabinets.baseCabinets`: Required, 1-20 units
- `cabinets.wallCabinets`: Required, 0-15 units

### Wardrobe Calculator
- `dimensions.length`: Required, 4-12 feet
- `dimensions.width`: Required, 1.5-3 feet
- `dimensions.height`: Required, 6-9 feet
- `type`: Required, one of: `sliding-door`, `hinged-door`, `open`
- `sections.hanging`: Required, 1-10 units

### Home Calculator
- `propertyDetails.totalArea`: Required, 500-5000 sq ft
- `propertyDetails.bhk`: Required, one of: `1-BHK`, `2-BHK`, `3-BHK`, `4-BHK`, `5-BHK+`
- `rooms`: Required, at least 1 room
- `rooms[].area`: Required, positive number

## Notes

- All prices are in Indian Rupees (INR)
- Dimensions are in feet
- Areas are in square feet
- Calculations are estimates and may vary based on actual requirements
- Prices may vary by location and market conditions
- Warranty terms are subject to manufacturer policies
- All timestamps are in ISO 8601 format (UTC)
