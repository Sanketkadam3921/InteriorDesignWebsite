# Projects API Documentation

This document describes the project management endpoints for the KalaKruti platform, including delivered, featured, and upcoming projects.

## Base URL
```
https://api.kalakruti.com/v1/projects
```

## Endpoints

### 1. Get All Projects

**GET** `/`

Get a paginated list of all projects with optional filtering.

#### Query Parameters
- `type` (optional): `delivered`, `featured`, `upcoming`
- `page` (optional): Page number (default: 1)
- `limit` (optional): Items per page (default: 20, max: 100)
- `location` (optional): Filter by location
- `bhk` (optional): Filter by BHK type (1-BHK, 2-BHK, 3-BHK, 4-BHK)
- `budget` (optional): Filter by budget range (e.g., "20-30")
- `style` (optional): Filter by design style
- `sort` (optional): Sort by `date`, `budget`, `area` (default: `date`)

#### Response
```json
{
  "success": true,
  "data": {
    "projects": [
      {
        "id": "delivered-1",
        "title": "Contemporary 3BHK Apartment Design with Beige Wall Panel",
        "location": "Subishi Iris Villas",
        "scope": "Full Home, Kitchen, Swing",
        "bhk": "3-BHK",
        "pricing": "20 - 30 Lakhs",
        "image": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=400&fit=crop",
        "status": "COMPLETED",
        "createdAt": "2024-01-01T00:00:00Z"
      }
    ]
  },
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 150,
    "totalPages": 8
  },
  "message": "Projects retrieved successfully",
  "timestamp": "2024-01-01T00:00:00Z"
}
```

---

### 2. Get Delivered Projects

**GET** `/delivered`

Get a list of completed/delivered projects.

#### Query Parameters
- `page` (optional): Page number (default: 1)
- `limit` (optional): Items per page (default: 20)
- `location` (optional): Filter by location
- `bhk` (optional): Filter by BHK type
- `budget` (optional): Filter by budget range

#### Response
```json
{
  "success": true,
  "data": {
    "projects": [
      {
        "id": "delivered-1",
        "title": "Contemporary 3BHK Apartment Design with Beige Wall Panel",
        "location": "Subishi Iris Villas",
        "scope": "Full Home, Kitchen, Swing",
        "bhk": "3-BHK",
        "pricing": "20 - 30 Lakhs",
        "image": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=400&fit=crop",
        "images": [
          "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&fit=crop",
          "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&fit=crop"
        ],
        "status": "COMPLETED",
        "completedAt": "2024-01-01T00:00:00Z",
        "createdAt": "2024-01-01T00:00:00Z"
      }
    ]
  },
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 50,
    "totalPages": 3
  },
  "message": "Delivered projects retrieved successfully",
  "timestamp": "2024-01-01T00:00:00Z"
}
```

---

### 3. Get Featured Projects

**GET** `/featured`

Get a list of featured/highlighted projects.

#### Response
```json
{
  "success": true,
  "data": {
    "projects": [
      {
        "id": "featured-1",
        "title": "Luxury Penthouse with Panoramic City Views",
        "location": "Sobha Neopolis",
        "scope": "Full Home, Kitchen, Penthouse",
        "bhk": "4-BHK",
        "pricing": "60 - 80 Lakhs",
        "image": "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=500&h=400&fit=crop",
        "images": [
          "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&fit=crop",
          "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&fit=crop"
        ],
        "status": "FEATURED",
        "isCompleted": true,
        "featuredAt": "2024-01-01T00:00:00Z",
        "createdAt": "2024-01-01T00:00:00Z"
      }
    ]
  },
  "message": "Featured projects retrieved successfully",
  "timestamp": "2024-01-01T00:00:00Z"
}
```

---

### 4. Get Upcoming Projects

**GET** `/upcoming`

Get a list of upcoming projects in pipeline.

#### Response
```json
{
  "success": true,
  "data": {
    "projects": [
      {
        "id": "upcoming-1",
        "title": "Modern Villa with Smart Home Features",
        "location": "Whitefield",
        "scope": "Full Home, Smart Home",
        "bhk": "4-BHK",
        "pricing": "45 - 60 Lakhs",
        "image": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&h=400&fit=crop",
        "status": "UPCOMING",
        "expectedCompletion": "2024-06-01T00:00:00Z",
        "progress": 25,
        "createdAt": "2024-01-01T00:00:00Z"
      }
    ]
  },
  "message": "Upcoming projects retrieved successfully",
  "timestamp": "2024-01-01T00:00:00Z"
}
```

---

### 5. Get Project Details

**GET** `/{projectId}`

Get detailed information about a specific project.

#### Path Parameters
- `projectId`: The unique identifier of the project

#### Response
```json
{
  "success": true,
  "data": {
    "project": {
      "id": "delivered-1",
      "title": "Contemporary 3BHK Apartment Design with Beige Wall Panel",
      "description": "A stunning contemporary apartment featuring modern design elements and elegant beige wall panels",
      "location": "Subishi Iris Villas, Bangalore",
      "budget": "₹25 Lakhs",
      "area": "1200 sq ft",
      "style": "Contemporary",
      "scope": "Full Home, Kitchen, Swing",
      "bhk": "3-BHK",
      "pricing": "20 - 30 Lakhs",
      "status": "COMPLETED",
      "images": [
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&fit=crop",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&fit=crop",
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&fit=crop"
      ],
      "longDescription": "This contemporary 3BHK apartment showcases the perfect blend of modern design and functionality. The living room features a stunning beige wall panel that serves as the focal point, complemented by carefully selected furniture and lighting...",
      "features": [
        "Modern modular kitchen",
        "Built-in storage solutions",
        "Premium finishes",
        "Smart home integration"
      ],
      "specifications": {
        "area": "1200 sq ft",
        "bedrooms": 3,
        "bathrooms": 2,
        "balconies": 2,
        "parking": 1
      },
      "timeline": {
        "startDate": "2023-10-01T00:00:00Z",
        "completionDate": "2024-01-01T00:00:00Z",
        "duration": "3 months"
      },
      "client": {
        "name": "Mr. & Mrs. Sharma",
        "feedback": "Excellent work! The team was professional and delivered beyond our expectations."
      },
      "createdAt": "2024-01-01T00:00:00Z",
      "updatedAt": "2024-01-01T00:00:00Z"
    }
  },
  "message": "Project details retrieved successfully",
  "timestamp": "2024-01-01T00:00:00Z"
}
```

---

### 6. Get Project Gallery

**GET** `/{projectId}/gallery`

Get all images and media for a specific project.

#### Path Parameters
- `projectId`: The unique identifier of the project

#### Query Parameters
- `type` (optional): Filter by media type (`image`, `video`, `360`)
- `category` (optional): Filter by room/area category

#### Response
```json
{
  "success": true,
  "data": {
    "gallery": {
      "projectId": "delivered-1",
      "images": [
        {
          "id": "img_1",
          "url": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&fit=crop",
          "thumbnail": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=200&fit=crop",
          "alt": "Living room with beige wall panel",
          "category": "living-room",
          "isPrimary": true,
          "uploadedAt": "2024-01-01T00:00:00Z"
        },
        {
          "id": "img_2",
          "url": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&fit=crop",
          "thumbnail": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=200&fit=crop",
          "alt": "Modern kitchen design",
          "category": "kitchen",
          "isPrimary": false,
          "uploadedAt": "2024-01-01T00:00:00Z"
        }
      ],
      "videos": [
        {
          "id": "vid_1",
          "url": "https://example.com/video1.mp4",
          "thumbnail": "https://example.com/video1-thumb.jpg",
          "title": "Project Walkthrough",
          "duration": 120,
          "uploadedAt": "2024-01-01T00:00:00Z"
        }
      ],
      "totalImages": 15,
      "totalVideos": 2
    }
  },
  "message": "Project gallery retrieved successfully",
  "timestamp": "2024-01-01T00:00:00Z"
}
```

---

### 7. Search Projects

**GET** `/search`

Search projects with advanced filtering options.

#### Query Parameters
- `q` (required): Search query
- `type` (optional): Project type filter
- `location` (optional): Location filter
- `minBudget` (optional): Minimum budget
- `maxBudget` (optional): Maximum budget
- `minArea` (optional): Minimum area in sq ft
- `maxArea` (optional): Maximum area in sq ft
- `bhk` (optional): BHK filter
- `style` (optional): Design style filter
- `page` (optional): Page number
- `limit` (optional): Items per page

#### Response
```json
{
  "success": true,
  "data": {
    "projects": [
      {
        "id": "delivered-1",
        "title": "Contemporary 3BHK Apartment Design with Beige Wall Panel",
        "location": "Subishi Iris Villas",
        "scope": "Full Home, Kitchen, Swing",
        "bhk": "3-BHK",
        "pricing": "20 - 30 Lakhs",
        "image": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=400&fit=crop",
        "status": "COMPLETED",
        "relevanceScore": 0.95
      }
    ],
    "filters": {
      "applied": {
        "type": "delivered",
        "location": "Bangalore",
        "minBudget": 2000000,
        "maxBudget": 3000000
      },
      "available": {
        "locations": ["Bangalore", "Mumbai", "Delhi"],
        "styles": ["Contemporary", "Modern", "Traditional"],
        "bhkTypes": ["1-BHK", "2-BHK", "3-BHK", "4-BHK"]
      }
    }
  },
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 25,
    "totalPages": 2
  },
  "message": "Search completed successfully",
  "timestamp": "2024-01-01T00:00:00Z"
}
```

---

### 8. Get Project Statistics

**GET** `/stats`

Get project statistics and analytics.

#### Response
```json
{
  "success": true,
  "data": {
    "statistics": {
      "totalProjects": 150,
      "deliveredProjects": 120,
      "featuredProjects": 15,
      "upcomingProjects": 15,
      "totalArea": 180000,
      "averageBudget": 3500000,
      "completionRate": 95.5,
      "clientSatisfaction": 4.8,
      "byLocation": {
        "Bangalore": 45,
        "Mumbai": 35,
        "Delhi": 30,
        "Chennai": 25,
        "Others": 15
      },
      "byBHK": {
        "1-BHK": 20,
        "2-BHK": 40,
        "3-BHK": 60,
        "4-BHK": 30
      },
      "byStyle": {
        "Contemporary": 50,
        "Modern": 45,
        "Traditional": 30,
        "Minimalist": 25
      }
    }
  },
  "message": "Statistics retrieved successfully",
  "timestamp": "2024-01-01T00:00:00Z"
}
```

---

## Error Codes

| Code | Description |
|------|-------------|
| `PROJECT_NOT_FOUND` | Project with specified ID not found |
| `INVALID_PROJECT_TYPE` | Invalid project type specified |
| `INVALID_FILTER` | Invalid filter parameter |
| `GALLERY_NOT_FOUND` | Project gallery not found |
| `SEARCH_QUERY_REQUIRED` | Search query parameter is required |

## Rate Limiting

- All endpoints: 1000 requests per hour per API key
- Search endpoint: 500 requests per hour per API key

## Notes

- All image URLs are CDN-optimized and include automatic resizing
- Project statuses: `UPCOMING`, `IN_PROGRESS`, `COMPLETED`, `FEATURED`
- Budget ranges are in Indian Rupees (INR)
- Area measurements are in square feet
- All timestamps are in ISO 8601 format (UTC)
