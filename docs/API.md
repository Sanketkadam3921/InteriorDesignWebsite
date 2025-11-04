# KalaKruti API Documentation Structure

This document outlines the structure and organization of API documentation for the KalaKruti interior design platform.

## Documentation Structure

### 1. **Authentication & Authorization APIs**
- User registration and login
- JWT token management
- Role-based access control
- Password reset functionality

### 2. **Projects APIs**
- **Delivered Projects**: Completed project listings and details
- **Featured Projects**: Highlighted project showcases
- **Upcoming Projects**: Projects in pipeline
- **Project Gallery**: Image collections and media management

### 3. **Designs APIs**
- **Design Categories**: All design categories (kitchen, bedroom, living room, etc.)
- **Design Listings**: Category-specific design collections
- **Design Details**: Individual design specifications and features
- **Design Search & Filtering**: Advanced search capabilities

### 4. **Enquiries & Contact APIs**
- **Contact Form**: General inquiries and support
- **Quote Requests**: Project quotation submissions
- **Enquiry Management**: Lead tracking and follow-up

### 5. **Price Calculator APIs**
- **Kitchen Calculator**: Modular kitchen pricing
- **Wardrobe Calculator**: Wardrobe design pricing
- **Home Calculator**: Full home interior pricing
- **Component Pricing**: Individual component costs

### 6. **Content Management APIs**
- **FAQ Management**: Frequently asked questions
- **Blog/Magazine**: Content publishing and management
- **Testimonials**: Customer feedback and reviews

### 7. **User Management APIs**
- **Profile Management**: User account information
- **Preferences**: Design preferences and saved items
- **Project History**: User's project interactions

## API Standards

### Base URL
```
Production: https://api.kalakruti.com/v1
Development: https://dev-api.kalakruti.com/v1
```

### Authentication
- JWT Bearer tokens for authenticated endpoints
- API keys for public endpoints
- Rate limiting: 1000 requests per hour per API key

### Response Format
```json
{
  "success": true,
  "data": {},
  "message": "Success message",
  "timestamp": "2024-01-01T00:00:00Z",
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 100,
    "totalPages": 5
  }
}
```

### Error Format
```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid input data",
    "details": {
      "field": "email",
      "reason": "Invalid email format"
    }
  },
  "timestamp": "2024-01-01T00:00:00Z"
}
```

## Documentation Files

The following markdown files will be created in this directory:

1. `authentication-api.md` - Authentication and authorization endpoints
2. `projects-api.md` - Project management endpoints
3. `designs-api.md` - Design catalog endpoints
4. `enquiries-api.md` - Contact and enquiry endpoints
5. `calculators-api.md` - Price calculation endpoints
6. `content-api.md` - Content management endpoints
7. `user-management-api.md` - User account endpoints

Each file will include:
- Endpoint descriptions
- Request/response schemas
- Example requests and responses
- Error codes and handling
- Rate limiting information
