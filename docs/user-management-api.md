# User Management API Documentation

This document describes the user management endpoints for the KalaKruti platform, including profile management, preferences, and user interactions.

## Base URL
```
https://api.kalakruti.com/v1/users
```

## Endpoints

### 1. Get User Profile

**GET** `/profile`

Get current user's profile information.

#### Headers
```
Authorization: Bearer <user_token>
```

#### Response
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "user_123",
      "name": "John Doe",
      "email": "john.doe@example.com",
      "phone": "9876543210",
      "role": "customer",
      "isVerified": true,
      "profile": {
        "avatar": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200",
        "bio": "Interior design enthusiast",
        "location": "Bangalore",
        "dateOfBirth": "1990-05-15",
        "gender": "male"
      },
      "preferences": {
        "notifications": {
          "email": true,
          "sms": false,
          "push": true,
          "whatsapp": true
        },
        "newsletter": true,
        "designStyle": "modern",
        "budgetRange": "25-35",
        "projectType": "full-home",
        "language": "en"
      },
      "account": {
        "createdAt": "2024-01-01T00:00:00Z",
        "lastLogin": "2024-01-15T10:30:00Z",
        "loginCount": 45,
        "status": "active"
      },
      "statistics": {
        "totalProjects": 2,
        "totalEnquiries": 5,
        "totalCalculations": 12,
        "favoriteDesigns": 8
      }
    }
  },
  "message": "Profile retrieved successfully",
  "timestamp": "2024-01-01T00:00:00Z"
}
```

---

### 2. Update User Profile

**PATCH** `/profile`

Update user profile information.

#### Headers
```
Authorization: Bearer <user_token>
```

#### Request Body
```json
{
  "name": "John Smith",
  "phone": "9876543211",
  "profile": {
    "bio": "Passionate about modern interior design",
    "location": "Mumbai",
    "dateOfBirth": "1990-05-15",
    "gender": "male"
  }
}
```

#### Response
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "user_123",
      "name": "John Smith",
      "email": "john.doe@example.com",
      "phone": "9876543211",
      "profile": {
        "bio": "Passionate about modern interior design",
        "location": "Mumbai",
        "dateOfBirth": "1990-05-15",
        "gender": "male"
      },
      "updatedAt": "2024-01-01T00:00:00Z"
    }
  },
  "message": "Profile updated successfully",
  "timestamp": "2024-01-01T00:00:00Z"
}
```

---

### 3. Update User Preferences

**PATCH** `/preferences`

Update user preferences and settings.

#### Headers
```
Authorization: Bearer <user_token>
```

#### Request Body
```json
{
  "notifications": {
    "email": true,
    "sms": true,
    "push": false,
    "whatsapp": true
  },
  "newsletter": false,
  "designStyle": "contemporary",
  "budgetRange": "30-40",
  "projectType": "kitchen",
  "language": "en"
}
```

#### Response
```json
{
  "success": true,
  "data": {
    "preferences": {
      "notifications": {
        "email": true,
        "sms": true,
        "push": false,
        "whatsapp": true
      },
      "newsletter": false,
      "designStyle": "contemporary",
      "budgetRange": "30-40",
      "projectType": "kitchen",
      "language": "en"
    }
  },
  "message": "Preferences updated successfully",
  "timestamp": "2024-01-01T00:00:00Z"
}
```

---

### 4. Upload Profile Avatar

**POST** `/profile/avatar`

Upload or update user profile avatar.

#### Headers
```
Authorization: Bearer <user_token>
Content-Type: multipart/form-data
```

#### Request Body
```
avatar: [file] (image file, max 5MB, formats: jpg, png, gif)
```

#### Response
```json
{
  "success": true,
  "data": {
    "avatar": {
      "url": "https://api.kalakruti.com/uploads/avatars/user_123_avatar.jpg",
      "thumbnail": "https://api.kalakruti.com/uploads/avatars/thumb_user_123_avatar.jpg",
      "uploadedAt": "2024-01-01T00:00:00Z"
    }
  },
  "message": "Avatar uploaded successfully",
  "timestamp": "2024-01-01T00:00:00Z"
}
```

---

### 5. Get User Projects

**GET** `/projects`

Get user's project history and interactions.

#### Headers
```
Authorization: Bearer <user_token>
```

#### Query Parameters
- `type` (optional): Filter by project type (`enquiry`, `quote`, `calculation`)
- `status` (optional): Filter by status
- `page` (optional): Page number (default: 1)
- `limit` (optional): Items per page (default: 20)

#### Response
```json
{
  "success": true,
  "data": {
    "projects": [
      {
        "id": "enq_123",
        "type": "quote",
        "title": "3BHK Apartment Renovation",
        "status": "in-progress",
        "createdAt": "2024-01-01T00:00:00Z",
        "lastUpdate": "2024-01-15T10:30:00Z",
        "assignedTo": {
          "name": "Sarah Johnson",
          "role": "sales-executive"
        },
        "estimatedValue": 2500000
      },
      {
        "id": "calc_kitchen_124",
        "type": "calculation",
        "title": "Kitchen Design Calculation",
        "status": "completed",
        "createdAt": "2024-01-10T00:00:00Z",
        "totalCost": 485000,
        "area": 120
      }
    ]
  },
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 5,
    "totalPages": 1
  },
  "message": "User projects retrieved successfully",
  "timestamp": "2024-01-01T00:00:00Z"
}
```

---

### 6. Get Favorite Designs

**GET** `/favorites`

Get user's favorite designs.

#### Headers
```
Authorization: Bearer <user_token>
```

#### Query Parameters
- `category` (optional): Filter by design category
- `page` (optional): Page number (default: 1)
- `limit` (optional): Items per page (default: 20)

#### Response
```json
{
  "success": true,
  "data": {
    "favorites": [
      {
        "id": "fav_1",
        "design": {
          "id": "kitchen-1",
          "name": "Modern Modular Kitchen with Island",
          "category": "kitchen",
          "image": "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300",
          "price": "₹4,50,000",
          "style": "Modern"
        },
        "addedAt": "2024-01-01T00:00:00Z"
      },
      {
        "id": "fav_2",
        "design": {
          "id": "master-bedroom-1",
          "name": "Luxury Master Bedroom Suite",
          "category": "master-bedroom",
          "image": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300",
          "price": "₹4,50,000",
          "style": "Luxury"
        },
        "addedAt": "2024-01-02T00:00:00Z"
      }
    ]
  },
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 8,
    "totalPages": 1
  },
  "message": "Favorite designs retrieved successfully",
  "timestamp": "2024-01-01T00:00:00Z"
}
```

---

### 7. Add to Favorites

**POST** `/favorites`

Add a design to user's favorites.

#### Headers
```
Authorization: Bearer <user_token>
```

#### Request Body
```json
{
  "designId": "kitchen-1",
  "category": "kitchen"
}
```

#### Response
```json
{
  "success": true,
  "data": {
    "favorite": {
      "id": "fav_3",
      "designId": "kitchen-1",
      "category": "kitchen",
      "addedAt": "2024-01-01T00:00:00Z"
    }
  },
  "message": "Design added to favorites successfully",
  "timestamp": "2024-01-01T00:00:00Z"
}
```

---

### 8. Remove from Favorites

**DELETE** `/favorites/{favoriteId}`

Remove a design from user's favorites.

#### Headers
```
Authorization: Bearer <user_token>
```

#### Path Parameters
- `favoriteId`: The favorite item identifier

#### Response
```json
{
  "success": true,
  "message": "Design removed from favorites successfully",
  "timestamp": "2024-01-01T00:00:00Z"
}
```

---

### 9. Get User Activity

**GET** `/activity`

Get user's activity history.

#### Headers
```
Authorization: Bearer <user_token>
```

#### Query Parameters
- `type` (optional): Filter by activity type
- `dateFrom` (optional): Start date (ISO 8601)
- `dateTo` (optional): End date (ISO 8601)
- `page` (optional): Page number (default: 1)
- `limit` (optional): Items per page (default: 20)

#### Response
```json
{
  "success": true,
  "data": {
    "activities": [
      {
        "id": "activity_1",
        "type": "enquiry_created",
        "description": "Submitted quote request for 3BHK apartment renovation",
        "entityId": "enq_123",
        "entityType": "enquiry",
        "createdAt": "2024-01-01T00:00:00Z"
      },
      {
        "id": "activity_2",
        "type": "calculation_saved",
        "description": "Saved kitchen design calculation",
        "entityId": "calc_kitchen_124",
        "entityType": "calculation",
        "createdAt": "2024-01-10T00:00:00Z"
      },
      {
        "id": "activity_3",
        "type": "favorite_added",
        "description": "Added 'Modern Modular Kitchen' to favorites",
        "entityId": "kitchen-1",
        "entityType": "design",
        "createdAt": "2024-01-05T00:00:00Z"
      }
    ]
  },
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 15,
    "totalPages": 1
  },
  "message": "User activity retrieved successfully",
  "timestamp": "2024-01-01T00:00:00Z"
}
```

---

### 10. Get User Statistics

**GET** `/stats`

Get user's statistics and analytics.

#### Headers
```
Authorization: Bearer <user_token>
```

#### Response
```json
{
  "success": true,
  "data": {
    "statistics": {
      "account": {
        "memberSince": "2024-01-01T00:00:00Z",
        "totalLogins": 45,
        "lastLogin": "2024-01-15T10:30:00Z",
        "accountStatus": "active"
      },
      "interactions": {
        "totalEnquiries": 5,
        "totalQuotes": 3,
        "totalCalculations": 12,
        "totalFavorites": 8,
        "totalProjects": 2
      },
      "preferences": {
        "favoriteCategory": "kitchen",
        "favoriteStyle": "modern",
        "averageBudget": "25-35",
        "preferredContactTime": "evening"
      },
      "engagement": {
        "articlesRead": 15,
        "designsViewed": 45,
        "calculationsPerformed": 12,
        "favoritesAdded": 8
      },
      "recentActivity": {
        "lastEnquiry": "2024-01-01T00:00:00Z",
        "lastCalculation": "2024-01-10T00:00:00Z",
        "lastFavorite": "2024-01-05T00:00:00Z"
      }
    }
  },
  "message": "User statistics retrieved successfully",
  "timestamp": "2024-01-01T00:00:00Z"
}
```

---

### 11. Delete User Account

**DELETE** `/account`

Delete user account and all associated data.

#### Headers
```
Authorization: Bearer <user_token>
```

#### Request Body
```json
{
  "password": "CurrentPassword123!",
  "reason": "No longer need the service",
  "confirmation": "DELETE"
}
```

#### Response
```json
{
  "success": true,
  "message": "Account deleted successfully. All data has been removed.",
  "timestamp": "2024-01-01T00:00:00Z"
}
```

---

### 12. Export User Data

**GET** `/export`

Export user's personal data in JSON format.

#### Headers
```
Authorization: Bearer <user_token>
```

#### Response
```json
{
  "success": true,
  "data": {
    "downloadUrl": "https://api.kalakruti.com/v1/users/export/download/user_data_123.json",
    "expiresAt": "2024-01-02T00:00:00Z",
    "dataTypes": [
      "profile",
      "preferences",
      "enquiries",
      "calculations",
      "favorites",
      "activity"
    ]
  },
  "message": "User data export generated successfully",
  "timestamp": "2024-01-01T00:00:00Z"
}
```

---

### 13. Get All Users (Admin)

**GET** `/`

Get a paginated list of all users (admin endpoint).

#### Headers
```
Authorization: Bearer <admin_token>
```

#### Query Parameters
- `role` (optional): Filter by user role
- `status` (optional): Filter by account status
- `verified` (optional): Filter by verification status
- `dateFrom` (optional): Filter from registration date
- `dateTo` (optional): Filter to registration date
- `page` (optional): Page number (default: 1)
- `limit` (optional): Items per page (default: 20, max: 100)
- `sort` (optional): Sort by `created`, `lastLogin`, `name` (default: `created`)

#### Response
```json
{
  "success": true,
  "data": {
    "users": [
      {
        "id": "user_123",
        "name": "John Doe",
        "email": "john.doe@example.com",
        "phone": "9876543210",
        "role": "customer",
        "isVerified": true,
        "status": "active",
        "createdAt": "2024-01-01T00:00:00Z",
        "lastLogin": "2024-01-15T10:30:00Z",
        "statistics": {
          "totalEnquiries": 5,
          "totalCalculations": 12,
          "totalFavorites": 8
        }
      }
    ]
  },
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 150,
    "totalPages": 8
  },
  "message": "Users retrieved successfully",
  "timestamp": "2024-01-01T00:00:00Z"
}
```

---

### 14. Get User Details (Admin)

**GET** `/{userId}`

Get detailed information about a specific user (admin endpoint).

#### Headers
```
Authorization: Bearer <admin_token>
```

#### Path Parameters
- `userId`: The user identifier

#### Response
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "user_123",
      "name": "John Doe",
      "email": "john.doe@example.com",
      "phone": "9876543210",
      "role": "customer",
      "isVerified": true,
      "status": "active",
      "profile": {
        "location": "Bangalore",
        "dateOfBirth": "1990-05-15",
        "gender": "male"
      },
      "preferences": {
        "designStyle": "modern",
        "budgetRange": "25-35",
        "projectType": "full-home"
      },
      "account": {
        "createdAt": "2024-01-01T00:00:00Z",
        "lastLogin": "2024-01-15T10:30:00Z",
        "loginCount": 45,
        "ipAddress": "192.168.1.1"
      },
      "statistics": {
        "totalEnquiries": 5,
        "totalCalculations": 12,
        "totalFavorites": 8,
        "totalProjects": 2
      },
      "enquiries": [
        {
          "id": "enq_123",
          "type": "quote",
          "status": "in-progress",
          "createdAt": "2024-01-01T00:00:00Z"
        }
      ]
    }
  },
  "message": "User details retrieved successfully",
  "timestamp": "2024-01-01T00:00:00Z"
}
```

---

## Error Codes

| Code | Description |
|------|-------------|
| `USER_NOT_FOUND` | User with specified ID not found |
| `INVALID_AVATAR` | Invalid avatar file format or size |
| `FAVORITE_NOT_FOUND` | Favorite item not found |
| `VALIDATION_ERROR` | Input validation failed |
| `UNAUTHORIZED` | User authentication required |
| `FORBIDDEN` | Admin access required |
| `ACCOUNT_DELETION_FAILED` | Account deletion failed |

## Rate Limiting

- Profile endpoints: 100 requests per hour per user
- Favorites endpoints: 200 requests per hour per user
- Activity endpoints: 100 requests per hour per user
- Admin endpoints: 1000 requests per hour per admin user

## Validation Rules

### Profile Updates
- `name`: 2-50 characters, letters and spaces only
- `phone`: Exactly 10 digits
- `dateOfBirth`: Valid date, must be 18+ years old
- `gender`: One of: `male`, `female`, `other`, `prefer-not-to-say`

### Avatar Upload
- File size: Maximum 5MB
- File formats: JPG, PNG, GIF
- Image dimensions: 100x100 to 2000x2000 pixels

### Preferences
- `designStyle`: One of: `modern`, `contemporary`, `traditional`, `minimalist`
- `budgetRange`: Format: `min-max` (e.g., "25-35")
- `projectType`: One of: `full-home`, `kitchen`, `bedroom`, `living-room`

## Notes

- All timestamps are in ISO 8601 format (UTC)
- User data is encrypted and stored securely
- Account deletion is permanent and irreversible
- Data exports are available for download for 24 hours
- Admin endpoints require appropriate role permissions
- User activity is tracked for analytics and support purposes
