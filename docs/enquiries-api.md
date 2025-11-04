# Enquiries & Contact API Documentation

This document describes the contact and enquiry management endpoints for the KalaKruti platform, including contact forms, quote requests, and lead management.

## Base URL
```
https://api.kalakruti.com/v1/enquiries
```

## Endpoints

### 1. Submit Contact Form

**POST** `/contact`

Submit a general contact form inquiry.

#### Request Body
```json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "phone": "9876543210",
  "address": "123 Main Street, Bangalore, Karnataka 560001",
  "message": "I'm interested in getting a quote for my 3BHK apartment renovation. Could you please provide more information about your services and pricing?",
  "source": "website",
  "preferredContact": "email"
}
```

#### Response
```json
{
  "success": true,
  "data": {
    "enquiry": {
      "id": "enq_123",
      "type": "contact",
      "name": "John Doe",
      "email": "john.doe@example.com",
      "phone": "9876543210",
      "address": "123 Main Street, Bangalore, Karnataka 560001",
      "message": "I'm interested in getting a quote for my 3BHK apartment renovation. Could you please provide more information about your services and pricing?",
      "source": "website",
      "preferredContact": "email",
      "status": "new",
      "priority": "medium",
      "assignedTo": null,
      "createdAt": "2024-01-01T00:00:00Z"
    }
  },
  "message": "Contact form submitted successfully. We'll get back to you within 24 hours.",
  "timestamp": "2024-01-01T00:00:00Z"
}
```

---

### 2. Submit Quote Request

**POST** `/quote`

Submit a detailed quote request for project estimation.

#### Request Body
```json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "phone": "9876543210",
  "propertyName": "Sharma Residence",
  "propertyType": "apartment",
  "propertyAddress": "123 Main Street, Bangalore, Karnataka 560001",
  "projectType": "full-home",
  "bhk": "3-BHK",
  "area": 1200,
  "budget": "25-35",
  "timeline": "3-6 months",
  "requirements": [
    "Kitchen renovation",
    "Living room design",
    "Master bedroom makeover"
  ],
  "designStyle": "modern",
  "specialRequirements": "Need wheelchair accessibility in master bedroom",
  "whatsappUpdates": true,
  "preferredContactTime": "evening",
  "source": "website"
}
```

#### Response
```json
{
  "success": true,
  "data": {
    "enquiry": {
      "id": "enq_124",
      "type": "quote",
      "name": "John Doe",
      "email": "john.doe@example.com",
      "phone": "9876543210",
      "propertyName": "Sharma Residence",
      "propertyType": "apartment",
      "propertyAddress": "123 Main Street, Bangalore, Karnataka 560001",
      "projectType": "full-home",
      "bhk": "3-BHK",
      "area": 1200,
      "budget": "25-35",
      "timeline": "3-6 months",
      "requirements": [
        "Kitchen renovation",
        "Living room design",
        "Master bedroom makeover"
      ],
      "designStyle": "modern",
      "specialRequirements": "Need wheelchair accessibility in master bedroom",
      "whatsappUpdates": true,
      "preferredContactTime": "evening",
      "source": "website",
      "status": "new",
      "priority": "high",
      "estimatedValue": 3000000,
      "assignedTo": null,
      "createdAt": "2024-01-01T00:00:00Z"
    }
  },
  "message": "Quote request submitted successfully. Our team will contact you within 2 hours for a detailed discussion.",
  "timestamp": "2024-01-01T00:00:00Z"
}
```

---

### 3. Get Enquiry Status

**GET** `/{enquiryId}/status`

Get the current status of an enquiry.

#### Path Parameters
- `enquiryId`: The unique identifier of the enquiry

#### Response
```json
{
  "success": true,
  "data": {
    "enquiry": {
      "id": "enq_123",
      "type": "contact",
      "status": "in-progress",
      "priority": "medium",
      "assignedTo": {
        "id": "user_456",
        "name": "Sarah Johnson",
        "role": "sales-executive",
        "phone": "+91-9876543210"
      },
      "timeline": {
        "createdAt": "2024-01-01T00:00:00Z",
        "firstContact": "2024-01-01T10:00:00Z",
        "lastUpdate": "2024-01-02T14:30:00Z",
        "expectedResolution": "2024-01-05T00:00:00Z"
      },
      "updates": [
        {
          "id": "update_1",
          "message": "Initial enquiry received",
          "timestamp": "2024-01-01T00:00:00Z",
          "type": "system"
        },
        {
          "id": "update_2",
          "message": "Assigned to sales executive",
          "timestamp": "2024-01-01T09:00:00Z",
          "type": "assignment"
        },
        {
          "id": "update_3",
          "message": "Initial contact made with customer",
          "timestamp": "2024-01-01T10:00:00Z",
          "type": "contact"
        }
      ]
    }
  },
  "message": "Enquiry status retrieved successfully",
  "timestamp": "2024-01-01T00:00:00Z"
}
```

---

### 4. Get All Enquiries (Admin)

**GET** `/`

Get a paginated list of all enquiries (admin endpoint).

#### Headers
```
Authorization: Bearer <admin_token>
```

#### Query Parameters
- `type` (optional): Filter by enquiry type (`contact`, `quote`)
- `status` (optional): Filter by status (`new`, `in-progress`, `resolved`, `closed`)
- `priority` (optional): Filter by priority (`low`, `medium`, `high`, `urgent`)
- `assignedTo` (optional): Filter by assigned user
- `dateFrom` (optional): Filter from date (ISO 8601)
- `dateTo` (optional): Filter to date (ISO 8601)
- `page` (optional): Page number (default: 1)
- `limit` (optional): Items per page (default: 20, max: 100)
- `sort` (optional): Sort by `created`, `updated`, `priority` (default: `created`)

#### Response
```json
{
  "success": true,
  "data": {
    "enquiries": [
      {
        "id": "enq_123",
        "type": "contact",
        "name": "John Doe",
        "email": "john.doe@example.com",
        "phone": "9876543210",
        "status": "in-progress",
        "priority": "medium",
        "assignedTo": {
          "id": "user_456",
          "name": "Sarah Johnson"
        },
        "createdAt": "2024-01-01T00:00:00Z",
        "lastUpdate": "2024-01-02T14:30:00Z"
      }
    ]
  },
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 150,
    "totalPages": 8
  },
  "filters": {
    "availableStatuses": ["new", "in-progress", "resolved", "closed"],
    "availablePriorities": ["low", "medium", "high", "urgent"],
    "availableTypes": ["contact", "quote"]
  },
  "message": "Enquiries retrieved successfully",
  "timestamp": "2024-01-01T00:00:00Z"
}
```

---

### 5. Update Enquiry Status (Admin)

**PATCH** `/{enquiryId}/status`

Update the status of an enquiry (admin endpoint).

#### Headers
```
Authorization: Bearer <admin_token>
```

#### Path Parameters
- `enquiryId`: The unique identifier of the enquiry

#### Request Body
```json
{
  "status": "in-progress",
  "priority": "high",
  "assignedTo": "user_456",
  "notes": "Customer is very interested in full home renovation. Follow up within 24 hours."
}
```

#### Response
```json
{
  "success": true,
  "data": {
    "enquiry": {
      "id": "enq_123",
      "status": "in-progress",
      "priority": "high",
      "assignedTo": {
        "id": "user_456",
        "name": "Sarah Johnson"
      },
      "notes": "Customer is very interested in full home renovation. Follow up within 24 hours.",
      "updatedAt": "2024-01-01T00:00:00Z"
    }
  },
  "message": "Enquiry status updated successfully",
  "timestamp": "2024-01-01T00:00:00Z"
}
```

---

### 6. Add Enquiry Update (Admin)

**POST** `/{enquiryId}/updates`

Add an update/note to an enquiry (admin endpoint).

#### Headers
```
Authorization: Bearer <admin_token>
```

#### Path Parameters
- `enquiryId`: The unique identifier of the enquiry

#### Request Body
```json
{
  "message": "Called customer and discussed requirements. Scheduled site visit for tomorrow.",
  "type": "contact",
  "isInternal": false
}
```

#### Response
```json
{
  "success": true,
  "data": {
    "update": {
      "id": "update_4",
      "enquiryId": "enq_123",
      "message": "Called customer and discussed requirements. Scheduled site visit for tomorrow.",
      "type": "contact",
      "isInternal": false,
      "createdBy": {
        "id": "user_456",
        "name": "Sarah Johnson"
      },
      "createdAt": "2024-01-01T00:00:00Z"
    }
  },
  "message": "Enquiry update added successfully",
  "timestamp": "2024-01-01T00:00:00Z"
}
```

---

### 7. Get Enquiry Details (Admin)

**GET** `/{enquiryId}`

Get detailed information about a specific enquiry (admin endpoint).

#### Headers
```
Authorization: Bearer <admin_token>
```

#### Path Parameters
- `enquiryId`: The unique identifier of the enquiry

#### Response
```json
{
  "success": true,
  "data": {
    "enquiry": {
      "id": "enq_123",
      "type": "contact",
      "name": "John Doe",
      "email": "john.doe@example.com",
      "phone": "9876543210",
      "address": "123 Main Street, Bangalore, Karnataka 560001",
      "message": "I'm interested in getting a quote for my 3BHK apartment renovation...",
      "source": "website",
      "preferredContact": "email",
      "status": "in-progress",
      "priority": "medium",
      "assignedTo": {
        "id": "user_456",
        "name": "Sarah Johnson",
        "role": "sales-executive",
        "phone": "+91-9876543210",
        "email": "sarah@kalakruti.com"
      },
      "timeline": {
        "createdAt": "2024-01-01T00:00:00Z",
        "firstContact": "2024-01-01T10:00:00Z",
        "lastUpdate": "2024-01-02T14:30:00Z",
        "expectedResolution": "2024-01-05T00:00:00Z"
      },
      "updates": [
        {
          "id": "update_1",
          "message": "Initial enquiry received",
          "timestamp": "2024-01-01T00:00:00Z",
          "type": "system",
          "createdBy": {
            "id": "system",
            "name": "System"
          }
        },
        {
          "id": "update_2",
          "message": "Assigned to sales executive",
          "timestamp": "2024-01-01T09:00:00Z",
          "type": "assignment",
          "createdBy": {
            "id": "admin_123",
            "name": "Admin User"
          }
        }
      ],
      "relatedEnquiries": [
        {
          "id": "enq_125",
          "type": "quote",
          "createdAt": "2024-01-02T00:00:00Z",
          "status": "new"
        }
      ],
      "conversionData": {
        "leadScore": 75,
        "conversionProbability": 0.6,
        "estimatedValue": 2500000,
        "followUpRequired": true,
        "nextFollowUpDate": "2024-01-03T00:00:00Z"
      }
    }
  },
  "message": "Enquiry details retrieved successfully",
  "timestamp": "2024-01-01T00:00:00Z"
}
```

---

### 8. Get Enquiry Statistics (Admin)

**GET** `/stats`

Get enquiry statistics and analytics (admin endpoint).

#### Headers
```
Authorization: Bearer <admin_token>
```

#### Query Parameters
- `dateFrom` (optional): Start date for statistics (ISO 8601)
- `dateTo` (optional): End date for statistics (ISO 8601)

#### Response
```json
{
  "success": true,
  "data": {
    "statistics": {
      "totalEnquiries": 500,
      "newEnquiries": 25,
      "inProgressEnquiries": 45,
      "resolvedEnquiries": 400,
      "closedEnquiries": 30,
      "conversionRate": 0.15,
      "averageResponseTime": 2.5,
      "byType": {
        "contact": 300,
        "quote": 200
      },
      "byStatus": {
        "new": 25,
        "in-progress": 45,
        "resolved": 400,
        "closed": 30
      },
      "byPriority": {
        "low": 100,
        "medium": 250,
        "high": 120,
        "urgent": 30
      },
      "bySource": {
        "website": 350,
        "phone": 80,
        "referral": 50,
        "social-media": 20
      },
      "byMonth": {
        "2024-01": 45,
        "2024-02": 52,
        "2024-03": 48,
        "2024-04": 55
      },
      "topAssignedUsers": [
        {
          "id": "user_456",
          "name": "Sarah Johnson",
          "enquiryCount": 45,
          "conversionRate": 0.18
        },
        {
          "id": "user_789",
          "name": "Mike Chen",
          "enquiryCount": 38,
          "conversionRate": 0.16
        }
      ]
    }
  },
  "message": "Enquiry statistics retrieved successfully",
  "timestamp": "2024-01-01T00:00:00Z"
}
```

---

### 9. Export Enquiries (Admin)

**GET** `/export`

Export enquiries to CSV/Excel format (admin endpoint).

#### Headers
```
Authorization: Bearer <admin_token>
```

#### Query Parameters
- `format` (optional): Export format (`csv`, `excel`) - default: `csv`
- `type` (optional): Filter by enquiry type
- `status` (optional): Filter by status
- `dateFrom` (optional): Start date
- `dateTo` (optional): End date

#### Response
```json
{
  "success": true,
  "data": {
    "downloadUrl": "https://api.kalakruti.com/v1/enquiries/export/download/export_123.csv",
    "expiresAt": "2024-01-02T00:00:00Z",
    "recordCount": 150
  },
  "message": "Export file generated successfully",
  "timestamp": "2024-01-01T00:00:00Z"
}
```

---

## Error Codes

| Code | Description |
|------|-------------|
| `ENQUIRY_NOT_FOUND` | Enquiry with specified ID not found |
| `INVALID_ENQUIRY_TYPE` | Invalid enquiry type specified |
| `INVALID_STATUS` | Invalid status value |
| `VALIDATION_ERROR` | Input validation failed |
| `UNAUTHORIZED` | Admin access required |
| `RATE_LIMIT_EXCEEDED` | Too many requests |

## Rate Limiting

- Contact form: 5 submissions per hour per IP
- Quote requests: 3 submissions per hour per IP
- Admin endpoints: 1000 requests per hour per admin user
- Status checks: 100 requests per hour per user

## Validation Rules

### Contact Form
- `name`: Required, 2-50 characters, letters and spaces only
- `email`: Required, valid email format
- `phone`: Required, exactly 10 digits
- `message`: Required, 10-1000 characters

### Quote Request
- `name`: Required, 2-50 characters
- `email`: Required, valid email format
- `phone`: Required, exactly 10 digits
- `propertyType`: Required, one of: `apartment`, `villa`, `independent-house`
- `projectType`: Required, one of: `full-home`, `kitchen`, `bedroom`, `living-room`
- `bhk`: Required, one of: `1-BHK`, `2-BHK`, `3-BHK`, `4-BHK`, `5-BHK+`
- `area`: Required, positive number
- `budget`: Required, format: `min-max` (e.g., "25-35")

## Notes

- All timestamps are in ISO 8601 format (UTC)
- Enquiry IDs are prefixed with `enq_`
- Admin endpoints require appropriate role permissions
- WhatsApp updates are sent automatically if enabled
- Lead scoring is calculated based on project value and requirements
- Export files are available for download for 24 hours
