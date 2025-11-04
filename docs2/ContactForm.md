# Contact Module — API Documentation

##  Overview
This module allows users to submit inquiries, feedback, or consultation requests via the website’s contact form.  
The API validates the user’s input, processes it (stores in DB or sends an email notification), and returns success/error feedback.


# Base URL
https://yourdomain.com/api/contact


# POST `/contact`

### Description
Submits the Contact Form details entered by a user on the website.



# Request Structure

Method: `POST`  
Endpoint: `/api/contact`  
Content-Type: `application/json`


# Request Payload

| Field     | Type   | Required  | Description                   |     Validation Rules                                    |
|--------   |------  |-----------|-------------------------------|---------------------------------------------------------|
| `name`    | String | Yes       | Full name of the sender       | Must contain only letters and spaces; min. 2 characters |
| `email`   | String | Yes       | Sender’s email address        | Must be a valid email format (e.g., `user@example.com`) |
| `phone`   | String | Yes       | 10-digit mobile number        | Must be exactly 10 digits; numeric only                 |
| `address` | String | No        | Address or city name          | Optional                                                |
| `message` | String | Yes       | Message or inquiry content    | Must be at least 10 characters long                     |



# Example Request

http
POST /api/contact
Content-Type: application/json
Request Body:

json
{
  "name": "Sanket Kadam",
  "email": "sanket@example.com",
  "phone": "9876543210",
  "address": "Pune, Maharashtra",
  "message": "I would like to discuss modular kitchen design ideas for my new flat."
}


Example Successful Response 
json
{
  "success": true,
  "message": "Your message has been received. Our team will contact you soon."
}
HTTP Status: 200 OK



Example Validation Error Response
json
{
  "success": false,
  "errors": {
    "name": "Full name is required",
    "email": "Please enter a valid email address",
    "phone": "Phone number must be exactly 10 digits",
    "message": "Message must be at least 10 characters"
  }
}
HTTP Status: 400 Bad Request



Example Server Error Response
json
{
  "success": false,
  "message": "Failed to send your message. Please try again later."
}
HTTP Status: 500 Internal Server Error




Response Schema
Field	Type	Description
success	Boolean	Indicates if the request was processed successfully
message	String	General success or error message
errors	Object	Field-level validation errors (only present on validation failure)