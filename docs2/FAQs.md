FAQ Module — API Documentation

##  Overview
The FAQ (Frequently Asked Questions) module provides structured question–answer data for different interior design categories.  
Each category (e.g., *Kitchen*, *Living Room*, *Bedroom*) has its own list of FAQs, along with a general section for common queries.

###  Base URL
https://yourdomain.com/api/faqs

1. GET `/faqs/categories`

### Description
Fetch a list of all FAQ categories available on the website.

### Request
Method: `GET`  
Payload: None


# Example Request
GET /api/faqs/categories


# Example Response
json
[
  { "key": "general", "displayName": "General Questions" },
  { "key": "master-bedroom", "displayName": "Master Bedroom" },
  { "key": "kitchen", "displayName": "Kitchen" },
  { "key": "bathroom", "displayName": "Bathroom" },
  { "key": "living-room", "displayName": "Living Room" },
  { "key": "wardrobe", "displayName": "Wardrobe" },
  { "key": "pooja-room", "displayName": "Pooja Room" },
  { "key": "false-ceiling", "displayName": "False Ceiling" },
  { "key": "kids-bedroom", "displayName": "Kids Bedroom" }
]


Response Codes
Code	 Meaning
200	     Successfully fetched FAQ categories
500	     Server error







2. GET /faqs/:category


Description-
Fetch all FAQs for a specific category (e.g., kitchen, bathroom, living-room).
If the category doesn’t exist, return an empty array or error message.

Path Parameters
Name	    Type		Description
category	String		FAQ category key (e.g., kitchen, living-room, wardrobe)


Example Request
GET /api/faqs/kitchen


Example Response
[
  {
    "id": "kitchen-1",
    "question": "What is the best layout for a modular kitchen?",
    "answer": "The best layout depends on your space and cooking habits. Popular layouts include L-shaped, U-shaped, and galley kitchens. We consider your workflow, storage needs, and available space to recommend the optimal layout."
  }
]

Response Codes
Code	 Meaning
200	     Successfully fetched FAQs for the category
404	     Category not found
500	     Server error