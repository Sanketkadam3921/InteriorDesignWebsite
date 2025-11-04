# API Documentation – Design Category Endpoints

---

## Get All Designs in a Category

### Endpoint
1. GET /api/designs/:categoryId

### Description
Fetches all design items belonging to a specific design category (e.g., Kitchen, Living Room, Bathroom).  
Each design entry contains summary details like name, style, area, and thumbnail image.

### Request Example
GET /api/designs/kitchen


### Path Parameters

| Parameter | Type   | Required  | Description                                                                       |
|-----------|--------|-----------|-------------                                                                      |
|categoryId |`string'| Yes       | The unique identifier of the design category e.g., `kitchen`, `living-room`|

---

### Successful Response (200 OK)
json
{
  "success": true,
  "category": "kitchen",
  "categoryName": "Modular Kitchen Designs",
  "totalDesigns": 3,
  "data": [
    {
      "id": "kitchen-101",
      "name": "Modern L-Shaped Kitchen",
      "style": "Contemporary",
      "price": "₹3.5 Lakhs",
      "area": "120 sq ft",
      "image": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=500",
      "description": "A sleek, efficient modular L-shaped kitchen with granite countertops and under-cabinet lighting."
    },
    {
      "id": "kitchen-102",
      "name": "Minimalist White Modular Kitchen",
      "style": "Minimalist",
      "price": "₹2.8 Lakhs",
      "area": "100 sq ft",
      "image": "https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=500",
      "description": "An elegant all-white modular kitchen design with smart storage and glossy finishes."
    }
  ]
}


Error Responses
404 Not Found
{
  "success": false,
  "message": "Category not found."
}


500 Internal Server Error
{
  "success": false,
  "message": "Failed to fetch designs for the specified category."
}


Response Fields
Field	            Type	Description
success	            boolean	Indicates whether the request was successful.
category	        string	ID of the category queried.
categoryName	    string	Display name of the category.
totalDesigns	    number	Total number of designs available in the category.
data	            array	List of designs belonging to the category.
data[].id	        string	Unique design ID.
data[].name	        string	Display name of the design.
data[].style	    string	The style or theme of the design.
data[].price	    string	Approximate design cost.
data[].area	        string	Covered area (if applicable).
data[].image	    string	Thumbnail or featured image URL.
data[].description	string	Short description of the design.














2. Get Design Details
Endpoint

GET /api/designs/:categoryId/:designId

Description
Fetches detailed information about a single design item within a category.
Includes specifications, multiple images, and highlight sections for the design.

Request Example

GET /api/designs/kitchen/kitchen-101

Parameter	Type	Required	Description
categoryId	string	Yes	        The slug of the category the design belongs to (e.g., kitchen, living-room).
designId	string	Yes	        The unique ID of the design item (e.g., kitchen-101).

Successful Response (200 OK)

{
  "success": true,
  "data": {
    "id": "kitchen-101",
    "title": "Modern L-Shaped Kitchen",
    "category": "kitchen",
    "style": "Contemporary",
    "price": "₹3.5 Lakhs",
    "image": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
    "description": "A sleek and efficient L-shaped kitchen layout featuring high-gloss finishes, granite countertops, and modular storage cabinets.",
    "images": [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
      "https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=800"
    ],
    "specifications": {
      "Material": "Laminate + Granite",
      "Finish": "Glossy White",
      "Storage": "Upper & Lower Cabinets",
      "Lighting": "Under Cabinet LED Strip"
    },
    "sections": [
      {
        "title": "Highlights",
        "items": [
          "Ergonomic L-shaped layout",
          "Soft-close drawers",
          "Water-resistant finish"
        ]
      },
      {
        "title": "Customization Options",
        "items": [
          "Color palette",
          "Countertop material",
          "Cabinet handle design"
        ]
      }
    ]
  }
}


Error Responses
404 Design Not Found
json
{
  "success": false,
  "message": "Design not found."
}


404 Category Not Found
json
{
  "success": false,
  "message": "Category not found."
}

500 Internal Server Error
json
{
  "success": false,
  "message": "Failed to fetch design details."
}
