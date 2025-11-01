Interior Design Website — API Documentation

Module: Projects

Base URL
https://yourdomain.com/api/projects


. GET /projects/delivered
Description
Fetch all delivered (completed) projects.

Request Payload
No request payload.

Example Request
GET /api/projects/delivered


Example Response
json
[
  {
    "id": "delivered-1",
    "title": "Contemporary 3BHK Apartment Design with Beige Wall Panel",
    "location": "Subishi Iris Villas, Bangalore",
    "scope": "Full Home, Kitchen, Swing",
    "bhk": "3-BHK",
    "pricing": "20 - 30 Lakhs",
    "image": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&fit=crop",
    "status": "COMPLETED",
    "type": "delivered"
  }
]


Response Codes
Code	   Meaning
200	     Successfully fetched all delivered projects
404	     No delivered projects found
500	     Server error






4. GET /projects/delivered/:id
Description
Fetch detailed information about a specific delivered project.

Path Parameters
Name	Type		Description
id	    String		ID of the delivered project (e.g., delivered-1)

Request Payload
No request payload.

Example Request
GET /api/projects/delivered/delivered-1


Example Response
json
{
  "id": "delivered-1",
  "title": "Contemporary 3BHK Apartment Design with Beige Wall Panel",
  "description": "A stunning contemporary apartment featuring modern design elements and elegant beige wall panels.",
  "location": "Subishi Iris Villas, Bangalore",
  "budget": "₹25 Lakhs",
  "area": "1200 sq ft",
  "style": "Contemporary",
  "scope": "Full Home, Kitchen, Swing",
  "bhk": "3-BHK",
  "pricing": "20 - 30 Lakhs",
  "images": [
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&fit=crop",
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&fit=crop"
  ],
  "longDescription": "This contemporary 3BHK apartment showcases the perfect blend of modern design and functionality..."
}


Response Codes
Code	   Meaning
200	     Successfully fetched delivered project details
404	     Delivered project not found
500	     Server error








5. GET /projects/upcoming
Description
Fetch all upcoming projects that are in progress or planned.

Request Payload
No request payload.

Example Request
GET /api/projects/upcoming


Example Response
json
[
  {
    "id": "upcoming-1",
    "title": "Luxury 4BHK Villa with Modern Kitchen Design",
    "location": "Prestige Heights, Bangalore",
    "scope": "Full Home, Kitchen, Wardrobe",
    "bhk": "4-BHK",
    "pricing": "40 - 50 Lakhs",
    "status": "UPCOMING",
    "type": "upcoming",
    "expectedCompletion": "Q2 2024",
    "image": "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=500&fit=crop"
  }
]


Response Codes
Code	   Meaning
200	     Successfully fetched all upcoming projects
404	     No upcoming projects found
500	     Server error










6. GET /projects/upcoming/:id
Description
Fetch detailed information about a specific upcoming project.

Path Parameters
Name	Type		    Description
id	    String	        ID of the upcoming project (e.g., upcoming-1)

Request Payload
No request payload.

Example Request
GET /api/projects/upcoming/upcoming-1

Example Response
json
{
  "id": "upcoming-1",
  "title": "Luxury 4BHK Villa with Modern Kitchen Design",
  "description": "An upcoming luxury villa featuring state-of-the-art kitchen design and premium amenities.",
  "location": "Prestige Heights, Bangalore",
  "budget": "₹45 Lakhs",
  "area": "2000 sq ft",
  "style": "Luxury Modern",
  "scope": "Full Home, Kitchen, Wardrobe",
  "bhk": "4-BHK",
  "pricing": "40 - 50 Lakhs",
  "expectedCompletion": "Q2 2024",
  "images": [
    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&fit=crop",
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&fit=crop"
  ],
  "longDescription": "This upcoming luxury 4BHK villa represents the pinnacle of modern living..."
}


Response Codes
Code	   Meaning
200	     Successfully fetched upcoming project details
404	     Upcoming project not found
500	     Server error

