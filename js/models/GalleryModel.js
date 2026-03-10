// js/models/GalleryModel.js

export class GalleryModel {
  constructor() {
    // Generate 20 predefined gallery items per spec: 8 Residential, 4 Commercial, 4 Hospitality, 2 Healthcare, 2 Industrial
    this.items = [
      // Residential (8)
      { id: 1, category: 'residential', categoryLabel: 'Residential', name: 'Luxury Villa Interiors', location: 'Sindhu Bhavan Road, Ahmedabad', products: 'Platinum Grade Plywood, Gurjan Veneer', image: 'assets/gallery/res-1.jpg' },
      { id: 2, category: 'residential', categoryLabel: 'Residential', name: '4 BHK Apartment Modular Kitchen', location: 'Science City, Ahmedabad', products: 'Gold Grade Plywood, Glossy Acrylic', image: 'assets/gallery/res-2.jpg' },
      { id: 3, category: 'residential', categoryLabel: 'Residential', name: 'Modern Penthouse Living', location: 'SG Highway, Ahmedabad', products: 'Silver Grade Plywood, Decorative Laminates', image: 'assets/gallery/res-3.jpg' },
      { id: 4, category: 'residential', categoryLabel: 'Residential', name: 'Minimalist Wardrobe Design', location: 'Bopal, Ahmedabad', products: 'Platinum Grade Plywood, Vertical Louvers', image: 'assets/gallery/res-4.jpg' },
      { id: 5, category: 'residential', categoryLabel: 'Residential', name: 'Classic Bungalow Woodwork', location: 'Navrangpura, Ahmedabad', products: 'Gold Grade Plywood, Teak Veneer', image: 'assets/gallery/res-5.jpg' },
      { id: 6, category: 'residential', categoryLabel: 'Residential', name: 'Contemporary Duplex Accents', location: 'Thaltej, Ahmedabad', products: 'Platinum Grade Plywood, Horizontal Louvers', image: 'assets/gallery/res-6.jpg' },
      { id: 7, category: 'residential', categoryLabel: 'Residential', name: 'Designer Island Kitchen', location: 'Vastrapur, Ahmedabad', products: 'Platinum Grade Plywood, Marble Acrylic', image: 'assets/gallery/res-7.jpg' },
      { id: 8, category: 'residential', categoryLabel: 'Residential', name: 'Master Bedroom Suite', location: 'Prahlad Nagar, Ahmedabad', products: 'Gold Grade Plywood, Textured Laminate', image: 'assets/gallery/res-8.jpg' },
      
      // Commercial (4)
      { id: 9, category: 'commercial', categoryLabel: 'Commercial', name: 'Tech Startup Workspace', location: 'SG Highway, Ahmedabad', products: 'Silver Grade Plywood, Matte Laminate', image: 'assets/gallery/com-1.jpg' },
      { id: 10, category: 'commercial', categoryLabel: 'Commercial', name: 'Corporate Headquarters', location: 'Ashram Road, Ahmedabad', products: 'Platinum Grade Plywood, Vertical Louvers', image: 'assets/gallery/com-2.jpg' },
      { id: 11, category: 'commercial', categoryLabel: 'Commercial', name: 'Boutique Retail Store Display', location: 'CG Road, Ahmedabad', products: 'Gold Grade Plywood, Glossy Acrylic', image: 'assets/gallery/com-3.jpg' },
      { id: 12, category: 'commercial', categoryLabel: 'Commercial', name: 'Modern Co-working Space', location: 'Makarba, Ahmedabad', products: 'Silver Grade Plywood, Birch Veneer', image: 'assets/gallery/com-4.jpg' },
      
      // Hospitality (4)
      { id: 13, category: 'hospitality', categoryLabel: 'Hospitality', name: 'Luxury Resort Grand Lobby', location: 'Udaipur Highway, Gujarat', products: 'Platinum Grade Plywood, Gurjan Veneer', image: 'assets/gallery/hosp-1.jpg' },
      { id: 14, category: 'hospitality', categoryLabel: 'Hospitality', name: 'Fine Dining Restaurant', location: 'Bodakdev, Ahmedabad', products: 'Gold Grade Plywood, Horizontal Louvers', image: 'assets/gallery/hosp-2.jpg' },
      { id: 15, category: 'hospitality', categoryLabel: 'Hospitality', name: 'Boutique Hotel Premium Suites', location: 'Paldi, Ahmedabad', products: 'Platinum Grade Plywood, High-Gloss Laminate', image: 'assets/gallery/hosp-3.jpg' },
      { id: 16, category: 'hospitality', categoryLabel: 'Hospitality', name: 'Artisan Cafe Interiors', location: 'Vastrapur, Ahmedabad', products: 'Silver Grade Plywood, Matte Laminates', image: 'assets/gallery/hosp-4.jpg' },
      
      // Healthcare (2)
      { id: 17, category: 'healthcare', categoryLabel: 'Healthcare', name: 'Multispecialty Hospital Reception', location: 'SG Highway, Ahmedabad', products: 'Platinum Grade BWP Plywood, Anti-bacterial Laminate', image: 'assets/gallery/health-1.jpg' },
      { id: 18, category: 'healthcare', categoryLabel: 'Healthcare', name: 'Premium Dental Clinic', location: 'Satellite, Ahmedabad', products: 'Gold Grade Plywood, Solid Color Acrylic', image: 'assets/gallery/health-2.jpg' },
      
      // Industrial (2)
      { id: 19, category: 'industrial', categoryLabel: 'Industrial', name: 'Pharma Lab Storage Cabinets', location: 'Changodar, Gujarat', products: 'Platinum BWP Plywood, High-Pressure Laminate', image: 'assets/gallery/ind-1.jpg' },
      { id: 20, category: 'industrial', categoryLabel: 'Industrial', name: 'Corporate Factory Office', location: 'Sanand, Gujarat', products: 'Gold Grade Plywood, Standard Laminate', image: 'assets/gallery/ind-2.jpg' }
    ];
  }

  getAllItems() {
    return this.items;
  }
}
