# FAQ System

This folder contains the FAQ (Frequently Asked Questions) system for the interior design application.

## Structure

```
faq/
├── index.js              # Main export file
├── faqData.js            # All FAQ data organized by category
├── FAQ.jsx               # Standalone FAQ page component
├── CategoryFAQ.jsx       # FAQ component for design category pages
└── README.md             # This documentation
```

## Components

### FAQ.jsx
Standalone FAQ page that displays all FAQs with category tabs. Accessible at `/faq`.

**Features:**
- Category-based tabs for easy navigation
- Accordion-style FAQ display
- Responsive design
- Contact CTA section

### CategoryFAQ.jsx
Embedded FAQ component for design category pages. Shows category-specific FAQs plus general FAQs.

**Features:**
- Automatically shows relevant FAQs for the current category
- Includes general FAQs as fallback
- Clean accordion design
- Integrates seamlessly with category pages

## Data Structure

### faqData.js
Contains all FAQ data organized by category:

```javascript
{
  "general": [
    {
      id: "general-1",
      question: "How long does the design process take?",
      answer: "The design process typically takes 2-4 weeks..."
    }
  ],
  "master-bedroom": [
    {
      id: "master-bedroom-1", 
      question: "What are the key elements to consider for a master bedroom design?",
      answer: "Key elements include proper lighting, storage solutions..."
    }
  ],
  // ... other categories
}
```

### faqConfig.js
Configuration object containing:
- Page title and description
- Available categories list
- Display names for each category

## Usage

### In Design Category Pages
```jsx
import CategoryFAQ from "../faq/CategoryFAQ";

// In your component
<CategoryFAQ category="master-bedroom" />
```

### As Standalone Page
```jsx
import FAQ from "../pages/faq/FAQ";

// Route: /faq
<Route path="faq" element={<FAQ />} />
```

## Available Categories

The FAQ system supports all design categories:
- General Questions
- Master Bedroom
- Kitchen
- Bathroom
- Living Room
- Wardrobe
- Pooja Room
- TV Unit
- False Ceiling
- Kids Bedroom
- Balcony
- Dining Room
- Foyer
- Homes by Livspace
- Home Office
- Guest Bedroom
- Window
- Flooring
- Wall Decor
- Wall Paint
- Home Wallpaper
- Tile
- Study Room
- Kitchen Sinks
- Space Saving
- Door
- Staircase
- Crockery Unit
- Home Bar

## Adding New FAQs

1. Open `faqData.js`
2. Add new FAQ objects to the appropriate category array
3. Each FAQ should have:
   - `id`: Unique identifier
   - `question`: The question text
   - `answer`: The answer text

## Features

- **Category-specific FAQs**: Each design category has relevant questions
- **General FAQs**: Fallback questions for all categories
- **Responsive Design**: Works on all device sizes
- **Accordion Interface**: Clean, expandable FAQ display
- **Easy Navigation**: Category tabs for quick access
- **Contact Integration**: Direct link to contact page
