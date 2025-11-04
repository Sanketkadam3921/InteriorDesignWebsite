Kitchen Price Calculator — API Documentation 

Base URL
https://yourdomain.com/api/kitchen


1. GET /estimate

Description
Calculates and returns an estimated kitchen cost based on:
The chosen layout (L-shaped, U-shaped, Straight, Parallel)
User-provided measurements (A, B, C)
The selected kitchen package (Essentials, Premium, Luxe)
This endpoint is called automatically when the user reaches the “Estimate” page in the 4-step calculator flow.

Query Parameters

Parameter	  Type		        Example	       Description
layout	    string		      "l-shaped"	   Selected kitchen layout
A	          number		       4.5	         Primary dimension (ft)
B	          number		       4.9	         Secondary dimension (if applicable)
C	          number		       5.0	         Third dimension (U-shaped layouts only)
package	    string		       "premium"	   Kitchen package selected by the user (essentials, premium, luxe)


Example Request
GET /api/kitchen/estimate?layout=l-shaped&A=4.5&B=5&package=luxe

Example Response
{
  "layout": "l-shaped",
  "A": 4.5,
  "B": 5,
  "packageType": "luxe",
  "basePrice": 215000,
  "layoutMultiplier": 1.2,
  "packageMultiplier": 1.8,
  "totalPrice": 258000,
  "message": "Estimate calculated successfully"
}

Response Codes
Code	   Meaning
200	     Estimate calculated successfully
400	     Missing or invalid parameters
500	     Internal server error







2. POST /estimate/submit

Description
Stores the user’s contact details and selected kitchen configuration for follow-up or quotation generation.
Triggered when the user submits the final estimate form.

Request Body
{
  "name": "Sanket Kadam",
  "email": "sanket@example.com",
  "phone": "9876543210",
  "city": "Pune",
  "message": "Looking for a premium kitchen setup.",
  "estimateDetails": {
    "layout": "l-shaped",
    "A": 4.5,
    "B": 5,
    "packageType": "premium",
    "totalPrice": 185000
  }
}


Example Response
{
  "success": true,
  "message": "Thank you Sanket! Your kitchen estimate has been recorded. Our team will reach out shortly.",
  "leadId": "KITCHEN-2025-00314"
}

Response Codes
Code	Meaning
201	    Estimate submitted successfully
400	    Validation failed (missing or invalid input)
500	    Internal server error while saving submission