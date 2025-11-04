Interior Design Website — API Documentation
Module: Wardrobe Price Calculator (Main APIs)

Base URL

https://yourdomain.com/price-calculators/wardrobe/calculator

1 GET /estimate

Description
Calculates the wardrobe price estimate based on all user selections passed as query parameters.

This endpoint (or route) powers the final preview step of the calculator, where the total price is displayed.

Request

Method: GET
Endpoint:

/price-calculators/wardrobe/calculator/estimate


Query Parameters

Parameter	Type	Example	Description
height	    string	7ft	    Wardrobe height
type	    string	swing	Wardrobe door type
finish	    string	acrylic	Finish type
material	string	mdf	    Core material
accessories	string  Loft    Optional accessories
timeline	string	6months	Project timeline


Example Request
GET /price-calculators/wardrobe/calculator/estimate?height=7ft&type=swing&finish=acrylic&material=mdf&accessories=loft,single-drawer&timeline=6months

Response
{
  "estimatedPrice": 314000,
  "currency": "INR",
  "calculation": {
    "basePrice": 150000,
    "typeMultiplier": 0.9,
    "finishMultiplier": 1.8,
    "materialMultiplier": 1.0,
    "accessoriesTotal": 27000
  },
  "note": "Final price may vary based on exact measurements and design choices."
}

Response Codes
Code	   Meaning
200	     Successfully calculated estimate
400	     Missing or invalid parameters
500	     Internal calculation error




2 POST /estimate/submit


Description
Submits the user’s contact details and calculated wardrobe estimate for backend processing (e.g., saving a lead, sending a confirmation email).

Request

Method: POST
Endpoint:

/price-calculators/wardrobe/calculator/estimate/submit


Request Body

{
  "name": "Sanket Kadam",
  "email": "sanket@example.com",
  "phone": "+91XXXXXXXXXX",
  "propertyName": "Skyline Apartments",
  "estimatedPrice": 314000,
  "config": {
    "height": "7ft",
    "type": "swing",
    "finish": "acrylic",
    "material": "mdf",
    "accessories": ["loft", "single-drawer"],
    "timeline": "6months"
  }
}

Example Response
{
  "status": "success",
  "message": "Estimate submitted successfully. Our design team will contact you soon.",
  "leadId": "WD-20251013-0147"
}

Response  Codes
Code	    Meaning
200	      Estimate submitted successfully
400	      Validation error (missing fields)
500	      Internal server error