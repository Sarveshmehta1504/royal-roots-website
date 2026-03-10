// js/models/GalleryModel.js

export class GalleryModel {
  constructor() {
    // Generate 20 predefined gallery items
    this.items = [
      { id: 1, name: 'Modern Culinary Space', location: 'Mumbai', category: 'kitchen', products: 'Platinum Grade Plywood, Glossy Acrylic', image: 'assets/gallery/kitchen-1.jpg' },
      { id: 2, name: 'Royal Suite Bedroom', location: 'Delhi', category: 'bedroom', products: 'Gold Grade Plywood, Teak Veneer', image: 'assets/gallery/bedroom-1.jpg' },
      { id: 3, name: 'Corporate Boardroom', location: 'Bangalore', category: 'commercial', products: 'Vertical Louvers, Platinum Plywood', image: 'assets/gallery/commercial-1.jpg' },
      { id: 4, name: 'Minimalist Wardrobe', location: 'Pune', category: 'wardrobe', products: 'Silver Grade Plywood, Matte Laminate', image: 'assets/gallery/wardrobe-1.jpg' },
      { id: 5, name: 'Luxury Villa Living', location: 'Hyderabad', category: 'living', products: 'Oak Veneer, Horizontal Louvers', image: 'assets/gallery/living-1.jpg' },
      { id: 6, name: 'Boutique Hotel Lobby', location: 'Jaipur', category: 'commercial', products: 'Gurjan Veneer, Gold Grade Plywood', image: 'assets/gallery/commercial-2.jpg' },
      { id: 7, name: 'Contemporary Kitchen', location: 'Ahmedabad', category: 'kitchen', products: 'Platinum Grade Plywood, Marble Laminate', image: 'assets/gallery/kitchen-2.jpg' },
      { id: 8, name: 'Master Bedroom Accents', location: 'Chandigarh', category: 'bedroom', products: 'Vertical Louvers, Acrylic Sheets', image: 'assets/gallery/bedroom-2.jpg' },
      { id: 9, name: 'Retail Showroom Display', location: 'Surat', category: 'commercial', products: 'Silver Grade Plywood, Glossy Acrylic', image: 'assets/gallery/commercial-3.jpg' },
      { id: 10, name: 'Walk-in Closet', location: 'Chennai', category: 'wardrobe', products: 'Gold Grade Plywood, Textured Laminate', image: 'assets/gallery/wardrobe-2.jpg' },
      { id: 11, name: 'Eco-Friendly Living Room', location: 'Kochi', category: 'living', products: 'Teak Veneer, Platinum Plywood', image: 'assets/gallery/living-2.jpg' },
      { id: 12, name: 'High-end Restaurant', location: 'Goa', category: 'commercial', products: 'Horizontal Louvers, Dark Laminate', image: 'assets/gallery/commercial-4.jpg' },
      { id: 13, name: 'Island Kitchen Setup', location: 'Gurgaon', category: 'kitchen', products: 'Platinum Grade, Marble Acrylic', image: 'assets/gallery/kitchen-3.jpg' },
      { id: 14, name: 'Kids Bedroom Study', location: 'Lucknow', category: 'bedroom', products: 'Silver Grade Plywood, vibrant Laminates', image: 'assets/gallery/bedroom-3.jpg' },
      { id: 15, name: 'Tech Office Workspace', location: 'Noida', category: 'commercial', products: 'Gold Grade Plywood, Matte Acrylic', image: 'assets/gallery/commercial-5.jpg' },
      { id: 16, name: 'Designer Sliding Wardrobe', location: 'Kolkata', category: 'wardrobe', products: 'Platinum Grade Plywood, Glossy Laminate', image: 'assets/gallery/wardrobe-3.jpg' },
      { id: 17, name: 'Apartment TV Unit', location: 'Indore', category: 'living', products: 'Oak Veneer, Vertical Louvers', image: 'assets/gallery/living-3.jpg' },
      { id: 18, name: 'Lobby Accent Wall', location: 'Bhopal', category: 'commercial', products: 'Gurjan Veneer, Horizontal Louvers', image: 'assets/gallery/commercial-6.jpg' },
      { id: 19, name: 'Open Plan Kitchen', location: 'Nagpur', category: 'kitchen', products: 'Gold Grade Plywood, Acrylic Sheets', image: 'assets/gallery/kitchen-4.jpg' },
      { id: 20, name: 'Luxury Guest Room', location: 'Ludhiana', category: 'bedroom', products: 'Platinum Grade Plywood, Teak Veneer', image: 'assets/gallery/bedroom-4.jpg' }
    ];
  }

  getAllItems() {
    return this.items;
  }
}
