# Content Management API Documentation

This document describes the content management endpoints for the KalaKruti platform, including FAQ management, blog/magazine content, and testimonials.

## Base URL
```
https://api.kalakruti.com/v1/content
```

## Endpoints

### 1. Get All FAQs

**GET** `/faq`

Get all frequently asked questions organized by category.

#### Query Parameters
- `category` (optional): Filter by FAQ category
- `search` (optional): Search in questions and answers
- `page` (optional): Page number (default: 1)
- `limit` (optional): Items per page (default: 50, max: 100)

#### Response
```json
{
  "success": true,
  "data": {
    "faqs": {
      "general": [
        {
          "id": "general-1",
          "question": "How long does the design process take?",
          "answer": "The design process typically takes 2-4 weeks depending on the complexity of the project. This includes initial consultation, design development, revisions, and final approval.",
          "category": "general",
          "tags": ["timeline", "process", "duration"],
          "isActive": true,
          "order": 1,
          "createdAt": "2024-01-01T00:00:00Z",
          "updatedAt": "2024-01-01T00:00:00Z"
        },
        {
          "id": "general-2",
          "question": "What is included in the design package?",
          "answer": "Our design package includes 3D visualizations, detailed floor plans, material specifications, color schemes, furniture layouts, and a comprehensive project timeline.",
          "category": "general",
          "tags": ["package", "inclusions", "services"],
          "isActive": true,
          "order": 2,
          "createdAt": "2024-01-01T00:00:00Z",
          "updatedAt": "2024-01-01T00:00:00Z"
        }
      ],
      "kitchen": [
        {
          "id": "kitchen-1",
          "question": "What are the different types of kitchen layouts?",
          "answer": "The main kitchen layouts include L-shaped, U-shaped, straight-line, and island kitchens. Each layout offers different advantages in terms of space utilization and workflow efficiency.",
          "category": "kitchen",
          "tags": ["layout", "design", "types"],
          "isActive": true,
          "order": 1,
          "createdAt": "2024-01-01T00:00:00Z",
          "updatedAt": "2024-01-01T00:00:00Z"
        }
      ],
      "master-bedroom": [
        {
          "id": "master-bedroom-1",
          "question": "What are the key elements to consider for a master bedroom design?",
          "answer": "Key elements include proper lighting, storage solutions, comfortable furniture placement, color schemes that promote relaxation, and adequate space for movement and activities.",
          "category": "master-bedroom",
          "tags": ["elements", "design", "bedroom"],
          "isActive": true,
          "order": 1,
          "createdAt": "2024-01-01T00:00:00Z",
          "updatedAt": "2024-01-01T00:00:00Z"
        }
      ]
    },
    "categories": [
      {
        "id": "general",
        "name": "General Questions",
        "count": 15,
        "description": "Common questions about our services and process"
      },
      {
        "id": "kitchen",
        "name": "Kitchen",
        "count": 12,
        "description": "Kitchen design and renovation questions"
      },
      {
        "id": "master-bedroom",
        "name": "Master Bedroom",
        "count": 8,
        "description": "Master bedroom design questions"
      }
    ]
  },
  "message": "FAQs retrieved successfully",
  "timestamp": "2024-01-01T00:00:00Z"
}
```

---

### 2. Get FAQs by Category

**GET** `/faq/{category}`

Get FAQs for a specific category.

#### Path Parameters
- `category`: The FAQ category identifier

#### Response
```json
{
  "success": true,
  "data": {
    "category": {
      "id": "kitchen",
      "name": "Kitchen",
      "description": "Kitchen design and renovation questions"
    },
    "faqs": [
      {
        "id": "kitchen-1",
        "question": "What are the different types of kitchen layouts?",
        "answer": "The main kitchen layouts include L-shaped, U-shaped, straight-line, and island kitchens. Each layout offers different advantages in terms of space utilization and workflow efficiency.",
        "category": "kitchen",
        "tags": ["layout", "design", "types"],
        "isActive": true,
        "order": 1,
        "createdAt": "2024-01-01T00:00:00Z",
        "updatedAt": "2024-01-01T00:00:00Z"
      },
      {
        "id": "kitchen-2",
        "question": "What materials are best for kitchen cabinets?",
        "answer": "Popular cabinet materials include BWR plywood for durability, MDF for smooth finishes, and solid wood for premium looks. The choice depends on budget, style preferences, and maintenance requirements.",
        "category": "kitchen",
        "tags": ["materials", "cabinets", "durability"],
        "isActive": true,
        "order": 2,
        "createdAt": "2024-01-01T00:00:00Z",
        "updatedAt": "2024-01-01T00:00:00Z"
      }
    ]
  },
  "message": "Category FAQs retrieved successfully",
  "timestamp": "2024-01-01T00:00:00Z"
}
```

---

### 3. Search FAQs

**GET** `/faq/search`

Search FAQs by question or answer content.

#### Query Parameters
- `q` (required): Search query
- `category` (optional): Filter by category
- `page` (optional): Page number
- `limit` (optional): Items per page

#### Response
```json
{
  "success": true,
  "data": {
    "faqs": [
      {
        "id": "kitchen-1",
        "question": "What are the different types of kitchen layouts?",
        "answer": "The main kitchen layouts include L-shaped, U-shaped, straight-line, and island kitchens...",
        "category": "kitchen",
        "tags": ["layout", "design", "types"],
        "relevanceScore": 0.95,
        "matchedText": "kitchen layouts"
      }
    ],
    "totalResults": 5,
    "searchQuery": "kitchen layouts"
  },
  "message": "FAQ search completed successfully",
  "timestamp": "2024-01-01T00:00:00Z"
}
```

---

### 4. Get Blog Articles

**GET** `/blog`

Get blog articles and magazine content.

#### Query Parameters
- `category` (optional): Filter by article category
- `tag` (optional): Filter by tag
- `featured` (optional): Filter featured articles only
- `page` (optional): Page number (default: 1)
- `limit` (optional): Items per page (default: 10, max: 50)
- `sort` (optional): Sort by `published`, `updated`, `popularity` (default: `published`)

#### Response
```json
{
  "success": true,
  "data": {
    "articles": [
      {
        "id": "blog-1",
        "title": "10 Modern Kitchen Design Trends for 2024",
        "slug": "modern-kitchen-design-trends-2024",
        "excerpt": "Discover the latest kitchen design trends that are shaping modern homes in 2024, from smart storage solutions to sustainable materials.",
        "content": "The kitchen has evolved from a simple cooking space to the heart of the home...",
        "author": {
          "id": "author-1",
          "name": "Sarah Johnson",
          "bio": "Interior Design Expert with 10+ years experience",
          "avatar": "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100"
        },
        "category": "kitchen",
        "tags": ["kitchen", "trends", "modern", "2024"],
        "featuredImage": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800",
        "isFeatured": true,
        "isPublished": true,
        "publishedAt": "2024-01-01T00:00:00Z",
        "updatedAt": "2024-01-01T00:00:00Z",
        "readTime": 5,
        "views": 1250,
        "likes": 45
      },
      {
        "id": "blog-2",
        "title": "Small Space Living: Maximizing Your 2BHK",
        "slug": "small-space-living-maximizing-2bhk",
        "excerpt": "Learn how to make the most of your 2BHK apartment with smart design solutions and space-saving furniture.",
        "content": "Living in a small space doesn't mean compromising on style or functionality...",
        "author": {
          "id": "author-2",
          "name": "Mike Chen",
          "bio": "Space Planning Specialist",
          "avatar": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100"
        },
        "category": "space-planning",
        "tags": ["small-space", "2bhk", "space-planning", "furniture"],
        "featuredImage": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800",
        "isFeatured": false,
        "isPublished": true,
        "publishedAt": "2024-01-02T00:00:00Z",
        "updatedAt": "2024-01-02T00:00:00Z",
        "readTime": 7,
        "views": 890,
        "likes": 32
      }
    ]
  },
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 50,
    "totalPages": 5
  },
  "categories": [
    {
      "id": "kitchen",
      "name": "Kitchen",
      "count": 15
    },
    {
      "id": "bedroom",
      "name": "Bedroom",
      "count": 12
    },
    {
      "id": "space-planning",
      "name": "Space Planning",
      "count": 8
    }
  ],
  "message": "Blog articles retrieved successfully",
  "timestamp": "2024-01-01T00:00:00Z"
}
```

---

### 5. Get Blog Article Details

**GET** `/blog/{articleId}`

Get detailed information about a specific blog article.

#### Path Parameters
- `articleId`: The article identifier or slug

#### Response
```json
{
  "success": true,
  "data": {
    "article": {
      "id": "blog-1",
      "title": "10 Modern Kitchen Design Trends for 2024",
      "slug": "modern-kitchen-design-trends-2024",
      "excerpt": "Discover the latest kitchen design trends that are shaping modern homes in 2024, from smart storage solutions to sustainable materials.",
      "content": "The kitchen has evolved from a simple cooking space to the heart of the home. In 2024, we're seeing exciting trends that combine functionality with aesthetic appeal...",
      "author": {
        "id": "author-1",
        "name": "Sarah Johnson",
        "bio": "Interior Design Expert with 10+ years experience",
        "avatar": "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100",
        "socialLinks": {
          "twitter": "@sarahjohnson",
          "linkedin": "sarah-johnson-design"
        }
      },
      "category": "kitchen",
      "tags": ["kitchen", "trends", "modern", "2024"],
      "featuredImage": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800",
      "gallery": [
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800",
        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800",
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800"
      ],
      "isFeatured": true,
      "isPublished": true,
      "publishedAt": "2024-01-01T00:00:00Z",
      "updatedAt": "2024-01-01T00:00:00Z",
      "readTime": 5,
      "views": 1250,
      "likes": 45,
      "comments": [
        {
          "id": "comment-1",
          "author": "John Doe",
          "content": "Great article! These trends are exactly what I was looking for.",
          "createdAt": "2024-01-01T10:00:00Z"
        }
      ],
      "relatedArticles": [
        {
          "id": "blog-3",
          "title": "Kitchen Storage Solutions That Work",
          "slug": "kitchen-storage-solutions",
          "featuredImage": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300"
        }
      ]
    }
  },
  "message": "Blog article retrieved successfully",
  "timestamp": "2024-01-01T00:00:00Z"
}
```

---

### 6. Get Testimonials

**GET** `/testimonials`

Get customer testimonials and reviews.

#### Query Parameters
- `featured` (optional): Filter featured testimonials only
- `rating` (optional): Filter by minimum rating (1-5)
- `projectType` (optional): Filter by project type
- `page` (optional): Page number (default: 1)
- `limit` (optional): Items per page (default: 10, max: 50)

#### Response
```json
{
  "success": true,
  "data": {
    "testimonials": [
      {
        "id": "testimonial-1",
        "customer": {
          "name": "Mr. & Mrs. Sharma",
          "location": "Bangalore",
          "projectType": "Full Home",
          "avatar": "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100"
        },
        "rating": 5,
        "title": "Exceptional Service and Beautiful Results",
        "content": "KalaKruti transformed our 3BHK apartment beyond our expectations. The team was professional, punctual, and delivered exactly what they promised. The attention to detail and quality of work is outstanding.",
        "project": {
          "id": "project-1",
          "title": "Contemporary 3BHK Apartment Design",
          "type": "Full Home",
          "area": "1200 sq ft",
          "budget": "₹25 Lakhs",
          "image": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300"
        },
        "isFeatured": true,
        "isVerified": true,
        "createdAt": "2024-01-01T00:00:00Z"
      },
      {
        "id": "testimonial-2",
        "customer": {
          "name": "Priya Patel",
          "location": "Mumbai",
          "projectType": "Kitchen",
          "avatar": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100"
        },
        "rating": 5,
        "title": "Perfect Kitchen Makeover",
        "content": "Our modular kitchen renovation was completed on time and within budget. The design team understood our needs perfectly and created a functional yet beautiful space.",
        "project": {
          "id": "project-2",
          "title": "Modern Modular Kitchen",
          "type": "Kitchen",
          "area": "120 sq ft",
          "budget": "₹4.5 Lakhs",
          "image": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300"
        },
        "isFeatured": false,
        "isVerified": true,
        "createdAt": "2024-01-02T00:00:00Z"
      }
    ]
  },
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 25,
    "totalPages": 3
  },
  "statistics": {
    "averageRating": 4.8,
    "totalTestimonials": 25,
    "ratingDistribution": {
      "5": 20,
      "4": 4,
      "3": 1,
      "2": 0,
      "1": 0
    }
  },
  "message": "Testimonials retrieved successfully",
  "timestamp": "2024-01-01T00:00:00Z"
}
```

---

### 7. Submit Testimonial

**POST** `/testimonials`

Submit a new customer testimonial.

#### Request Body
```json
{
  "customer": {
    "name": "John Doe",
    "email": "john.doe@example.com",
    "phone": "9876543210",
    "location": "Delhi"
  },
  "project": {
    "id": "project-123",
    "type": "Full Home"
  },
  "rating": 5,
  "title": "Amazing Experience",
  "content": "The team at KalaKruti delivered exceptional results. Our home looks beautiful and the process was smooth from start to finish.",
  "images": [
    "https://example.com/before.jpg",
    "https://example.com/after.jpg"
  ],
  "consent": {
    "publish": true,
    "contact": true
  }
}
```

#### Response
```json
{
  "success": true,
  "data": {
    "testimonial": {
      "id": "testimonial-3",
      "customer": {
        "name": "John Doe",
        "location": "Delhi",
        "projectType": "Full Home"
      },
      "rating": 5,
      "title": "Amazing Experience",
      "content": "The team at KalaKruti delivered exceptional results. Our home looks beautiful and the process was smooth from start to finish.",
      "project": {
        "id": "project-123",
        "type": "Full Home"
      },
      "isFeatured": false,
      "isVerified": false,
      "status": "pending",
      "createdAt": "2024-01-01T00:00:00Z"
    }
  },
  "message": "Testimonial submitted successfully. It will be reviewed before publishing.",
  "timestamp": "2024-01-01T00:00:00Z"
}
```

---

### 8. Get Content Statistics

**GET** `/stats`

Get content statistics and analytics.

#### Response
```json
{
  "success": true,
  "data": {
    "statistics": {
      "faqs": {
        "total": 150,
        "byCategory": {
          "general": 25,
          "kitchen": 20,
          "bedroom": 15,
          "bathroom": 12,
          "living-room": 10
        },
        "mostViewed": [
          {
            "id": "general-1",
            "question": "How long does the design process take?",
            "views": 1250
          }
        ]
      },
      "blog": {
        "totalArticles": 50,
        "published": 45,
        "draft": 5,
        "featured": 10,
        "totalViews": 25000,
        "averageReadTime": 6,
        "byCategory": {
          "kitchen": 15,
          "bedroom": 12,
          "space-planning": 8,
          "trends": 10,
          "tips": 5
        }
      },
      "testimonials": {
        "total": 25,
        "featured": 10,
        "verified": 20,
        "averageRating": 4.8,
        "byProjectType": {
          "full-home": 15,
          "kitchen": 6,
          "bedroom": 4
        }
      }
    }
  },
  "message": "Content statistics retrieved successfully",
  "timestamp": "2024-01-01T00:00:00Z"
}
```

---

## Error Codes

| Code | Description |
|------|-------------|
| `FAQ_NOT_FOUND` | FAQ with specified ID not found |
| `CATEGORY_NOT_FOUND` | FAQ category not found |
| `ARTICLE_NOT_FOUND` | Blog article not found |
| `TESTIMONIAL_NOT_FOUND` | Testimonial not found |
| `INVALID_RATING` | Invalid rating value |
| `VALIDATION_ERROR` | Input validation failed |
| `UNAUTHORIZED` | Admin access required for some operations |

## Rate Limiting

- FAQ endpoints: 1000 requests per hour per API key
- Blog endpoints: 500 requests per hour per API key
- Testimonial submission: 5 submissions per hour per IP
- Content statistics: 100 requests per hour per user

## Notes

- All timestamps are in ISO 8601 format (UTC)
- FAQ categories are dynamically generated from available content
- Blog articles support markdown formatting
- Testimonials require moderation before publishing
- Content is cached for performance optimization
- Search functionality uses full-text search capabilities
