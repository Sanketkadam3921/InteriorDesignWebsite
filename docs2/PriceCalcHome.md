Interior Design Website — API Documentation
Module: Home Price Calculator


Base URL
https://domain/price-calculators/home/calculator

1. POST /estimate
Description

Calculate the estimated price of an interior design project based on the selected home configuration, room count, size, and package type.
This endpoint performs all cost calculations and returns the total price with a detailed breakdown.

Request Payload
{
  "bhk": "3bhk",
  "size": "large",
  "package": "luxe",
  "rooms": {
    "livingRoom": 1,
    "kitchen": 1,
    "bedroom": 3,
    "bathroom": 2,
    "dining": 0
  }
}

Example Request
POST /price-calculators/home/calculator/estimate

Example Response
{
  "status": "success",
  "bhk": "3bhk",
  "size": "large",
  "package": "luxe",
  "estimatedPrice": 2095200,
  "breakdown": {
    "livingRoom": 150000,
    "kitchen": 200000,
    "bedroom": 360000,
    "bathroom": 160000,
    "dining": 0
  },
  "packageMultiplier": 1.8,
  "sizeMultiplier": 1.2
}

Response Codes
Code	Meaning
200	    Successfully calculated estimate
400	    Invalid or missing input fields
422	    Invalid room counts or package type
500	    Internal server error during calculation








2. POST /submit

Description
Submit the user’s contact information and their generated estimate for follow-up.
This can later be connected to email notifications or stored in a database.

Request Payload
{
  "name": "Sanket Kadam",
  "email": "sanket@example.com",
  "phone": "9876543210",
  "propertyName": "Skyline Residency",
  "estimate": {
    "bhk": "3bhk",
    "size": "large",
    "package": "luxe",
    "estimatedPrice": 2095200,
    "rooms": {
      "livingRoom": 1,
      "kitchen": 1,
      "bedroom": 3,
      "bathroom": 2,
      "dining": 0
    }
  }
}

Example Request
POST /price-calculators/home/calculator/submit

Example Response
{
  "status": "success",
  "message": "Thank you! Your estimate has been received.",
  "estimatedPrice": 2095200
}

Response Codes
Code	Meaning
200	    Estimate submitted successfully
400	    Missing or invalid user details
422	    Malformed estimate data
500	    Internal server error 