# Authentication API Documentation

This document describes the authentication and authorization endpoints for the KalaKruti platform.

## Base URL
```
https://api.kalakruti.com/v1/auth
```

## Endpoints

### 1. User Registration

**POST** `/register`

Register a new user account.

#### Request Body
```json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "phone": "9876543210",
  "password": "SecurePassword123!",
  "confirmPassword": "SecurePassword123!",
  "acceptTerms": true
}
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
      "isVerified": false,
      "createdAt": "2024-01-01T00:00:00Z"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "refreshToken": "refresh_token_here"
  },
  "message": "User registered successfully. Please verify your email.",
  "timestamp": "2024-01-01T00:00:00Z"
}
```

#### Error Responses
```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid input data",
    "details": {
      "email": "Email already exists",
      "password": "Password must be at least 8 characters"
    }
  },
  "timestamp": "2024-01-01T00:00:00Z"
}
```

---

### 2. User Login

**POST** `/login`

Authenticate user and return access token.

#### Request Body
```json
{
  "email": "john.doe@example.com",
  "password": "SecurePassword123!"
}
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
      "lastLogin": "2024-01-01T00:00:00Z"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "refreshToken": "refresh_token_here",
    "expiresIn": 3600
  },
  "message": "Login successful",
  "timestamp": "2024-01-01T00:00:00Z"
}
```

---

### 3. Refresh Token

**POST** `/refresh`

Get a new access token using refresh token.

#### Request Body
```json
{
  "refreshToken": "refresh_token_here"
}
```

#### Response
```json
{
  "success": true,
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "expiresIn": 3600
  },
  "message": "Token refreshed successfully",
  "timestamp": "2024-01-01T00:00:00Z"
}
```

---

### 4. Logout

**POST** `/logout`

Invalidate user session and tokens.

#### Headers
```
Authorization: Bearer <access_token>
```

#### Response
```json
{
  "success": true,
  "message": "Logged out successfully",
  "timestamp": "2024-01-01T00:00:00Z"
}
```

---

### 5. Forgot Password

**POST** `/forgot-password`

Send password reset email to user.

#### Request Body
```json
{
  "email": "john.doe@example.com"
}
```

#### Response
```json
{
  "success": true,
  "message": "Password reset email sent successfully",
  "timestamp": "2024-01-01T00:00:00Z"
}
```

---

### 6. Reset Password

**POST** `/reset-password`

Reset user password using reset token.

#### Request Body
```json
{
  "token": "reset_token_here",
  "password": "NewSecurePassword123!",
  "confirmPassword": "NewSecurePassword123!"
}
```

#### Response
```json
{
  "success": true,
  "message": "Password reset successfully",
  "timestamp": "2024-01-01T00:00:00Z"
}
```

---

### 7. Verify Email

**POST** `/verify-email`

Verify user email address.

#### Request Body
```json
{
  "token": "verification_token_here"
}
```

#### Response
```json
{
  "success": true,
  "message": "Email verified successfully",
  "timestamp": "2024-01-01T00:00:00Z"
}
```

---

### 8. Resend Verification Email

**POST** `/resend-verification`

Resend email verification link.

#### Request Body
```json
{
  "email": "john.doe@example.com"
}
```

#### Response
```json
{
  "success": true,
  "message": "Verification email sent successfully",
  "timestamp": "2024-01-01T00:00:00Z"
}
```

---

### 9. Change Password

**POST** `/change-password`

Change user password (authenticated endpoint).

#### Headers
```
Authorization: Bearer <access_token>
```

#### Request Body
```json
{
  "currentPassword": "CurrentPassword123!",
  "newPassword": "NewSecurePassword123!",
  "confirmPassword": "NewSecurePassword123!"
}
```

#### Response
```json
{
  "success": true,
  "message": "Password changed successfully",
  "timestamp": "2024-01-01T00:00:00Z"
}
```

---

### 10. Get User Profile

**GET** `/profile`

Get current user profile information.

#### Headers
```
Authorization: Bearer <access_token>
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
      "preferences": {
        "notifications": true,
        "newsletter": false,
        "designStyle": "modern"
      },
      "createdAt": "2024-01-01T00:00:00Z",
      "lastLogin": "2024-01-01T00:00:00Z"
    }
  },
  "message": "Profile retrieved successfully",
  "timestamp": "2024-01-01T00:00:00Z"
}
```

---

## Error Codes

| Code | Description |
|------|-------------|
| `INVALID_CREDENTIALS` | Invalid email or password |
| `EMAIL_NOT_VERIFIED` | Email address not verified |
| `ACCOUNT_LOCKED` | Account temporarily locked |
| `TOKEN_EXPIRED` | Access token has expired |
| `TOKEN_INVALID` | Invalid or malformed token |
| `VALIDATION_ERROR` | Input validation failed |
| `EMAIL_EXISTS` | Email address already registered |
| `WEAK_PASSWORD` | Password does not meet requirements |
| `RATE_LIMIT_EXCEEDED` | Too many requests |

## Rate Limiting

- Registration: 5 requests per hour per IP
- Login: 10 requests per hour per IP
- Password reset: 3 requests per hour per email
- Other endpoints: 100 requests per hour per user

## Security Notes

- All passwords must be hashed using bcrypt
- JWT tokens expire after 1 hour
- Refresh tokens expire after 30 days
- All sensitive endpoints require HTTPS
- Rate limiting is enforced to prevent brute force attacks
