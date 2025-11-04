# Master Bedroom Designs

This folder contains all master bedroom related data and components.

## Structure

```
master-bedroom/
├── index.js                 # Main export file
├── masterBedroomData.js     # All master bedroom data
└── README.md               # This documentation
```

## Data Structure

### masterBedroomDesigns
Array of master bedroom design objects with the following properties:
- `id`: Unique identifier
- `name`: Design name
- `image`: Image URL
- `description`: Short description
- `style`: Design style (Luxury, Modern, Scandinavian, etc.)
- `price`: Price in INR
- `area`: Area in square feet

### masterBedroomDesignDetails
Object containing detailed information for each design:
- `id`: Unique identifier
- `title`: Design title
- `category`: Design category
- `style`: Design style
- `price`: Price in INR
- `image`: Main image URL
- `description`: Short description
- `longDescription`: Detailed description
- `images`: Array of image URLs
- `features`: Array of design features
- `specifications`: Object with technical specifications

### masterBedroomConfig
Configuration object containing:
- `categoryKey`: URL parameter key
- `displayName`: Display name for the category
- `description`: Category description

## Usage

```javascript
import { 
    masterBedroomDesigns, 
    masterBedroomDesignDetails, 
    masterBedroomConfig 
} from './master-bedroom';
```

## Available Designs

1. **Luxury Master Bedroom Suite** - ₹4,50,000
2. **Modern Minimalist Master Bedroom** - ₹3,20,000
3. **Scandinavian Master Bedroom** - ₹2,80,000
4. **Contemporary Master Bedroom** - ₹3,80,000
5. **Classic Traditional Master Bedroom** - ₹4,20,000
6. **Industrial Master Bedroom** - ₹3,50,000
