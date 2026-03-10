// js/models/ProductModel.js

export class ProductModel {
  constructor() {
    this.products = {
      plywood: {
        id: 'plywood',
        name: 'Plywood & Blockboards',
        description: 'Premium quality plywood for all your interior and exterior needs.',
        grades: [
          {
            id: 'silver',
            name: 'Silver Grade',
            standard: 'IS: 303',
            warranty: '10 Years',
            coreType: 'Hardwood Core',
            idealApplications: 'Furniture, Wardrobes, Beds',
            features: ['Borer Proof', 'Termite Resistant', 'High Bending Strength'],
            availableThicknesses: ['6mm', '8mm', '12mm', '15mm', '18mm']
          },
          {
            id: 'gold',
            name: 'Gold Grade',
            standard: 'IS: 710',
            warranty: '25 Years',
            coreType: 'Gurjan Core',
            idealApplications: 'Kitchens, Bathrooms, High Moisture Areas',
            features: ['100% Boiling Water Proof', 'Borer & Termite Proof', 'High Caliber Calibration'],
            availableThicknesses: ['6mm', '8mm', '12mm', '15mm', '16mm', '18mm', '19mm']
          },
          {
            id: 'platinum',
            name: 'Platinum Grade',
            standard: 'IS: 10701',
            warranty: 'Lifetime',
            coreType: 'Imported Hardwood/Gurjan',
            idealApplications: 'Premium Interiors, Fire-Prone Zones, Structural Use',
            features: ['Fire Retardant', '100% BWP', 'Zero Gap Assembly', 'Lifetime Guarantee'],
            availableThicknesses: ['4mm', '6mm', '9mm', '12mm', '16mm', '19mm', '25mm']
          }
        ]
      },
      laminates: {
        id: 'laminates',
        name: 'Decorative Laminates',
        description: 'Explore over 500+ exclusive designs.',
        features: ['Scratch Resistant', 'Anti-Bacterial', 'Easy to Clean', 'Vibrant Colors'],
        thickness: ['0.8mm', '1.0mm']
      },
      acrylic: {
        id: 'acrylic',
        name: 'Premium Acrylic Sheets',
        description: 'High-gloss, matte, and marble finishes for modern interiors.',
        features: ['High Gloss Level', 'UV Resistant', 'Seamless Finish'],
        thickness: ['1.5mm', '2.0mm']
      },
      veneer: {
        id: 'veneer',
        name: 'Natural Veneers',
        description: 'Exquisite Gurjan, Teak, and Oak selections.',
        features: ['Natural Wood Grain', 'Eco-friendly', 'Premium Aesthetics']
      },
      louvers: {
        id: 'louvers',
        name: 'Wall Louvers',
        description: 'Horizontal and vertical fluted panels for accent walls.',
        features: ['Easy Installation', 'Moisture Resistant', 'Modern Architectural Look']
      }
    };
  }

  getProduct(id) {
    return this.products[id];
  }

  getAllProducts() {
    return Object.values(this.products);
  }
}
