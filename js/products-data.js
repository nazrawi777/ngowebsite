/**
 * HULEGEB STATIC SITE - PRODUCTS DATA
 * Hand-written JavaScript - No frameworks
 */

const PRODUCTS = [
  {
    slug: "hulegeb-handwoven-carpet",
    title: "Hulegeb Hand-Woven Carpet",
    brand: "Hulegeb",
    sku: "HLG-CARP-001",
    price: 3500,
    compare_at_price: 4200,
    currency: "ETB",
    short_description: "100% natural sheep wool hand-woven carpet. Timeless geometric accents in undyed white and brown with black highlights.",
    description: "<p>Crafted by blind and physically disabled artisans on traditional looms using 100% natural sheep wool and cotton thread. Available in signature sizes and custom orders.</p><ul><li>Materials: 100% sheep wool + cotton thread</li><li>Sizes: 1.5m×2m, 2m×3m, 1m×2m</li><li>Care: spot clean, dry clean recommended</li></ul>",
    inventory: 40,
    default_variant: "size_1-5x2",
    variants: [
      { slug: "size_1-5x2", name: "1.5m × 2m", price: 3500, inventory: 15, hex: null, images: ["front", "45", "back"] },
      { slug: "size_2x3", name: "2m × 3m", price: 6500, inventory: 12, hex: null, images: ["front", "45", "back"] },
      { slug: "size_1x2", name: "1m × 2m", price: 2800, inventory: 13, hex: null, images: ["front", "45", "back"] }
    ],
    sizes: ["1.5x2", "2x3", "1x2"],
    attributes: { material: "100% sheep wool", origin: "Hand-woven, Ethiopia" },
    image: "carpet-front.jpg"
  },
  {
    slug: "hulegeb-doormat",
    title: "Hulegeb Hand-Woven Doormat",
    brand: "Hulegeb",
    sku: "HLG-DOOR-001",
    price: 650,
    currency: "ETB",
    short_description: "Durable doormat in earthy tones with bold black geometric patterns. Best for covered or indoor entrances.",
    description: "<p>Handcrafted from natural sheep hair and cotton thread. Excellent dirt-trapping capability and long-lasting construction.</p><ul><li>Sizes: small, medium, large</li><li>Care: shake out, spot clean</li></ul>",
    inventory: 200,
    default_variant: "small",
    variants: [
      { slug: "small", name: "Small", price: 450, inventory: 80, hex: "#C9B79C", images: ["front", "45"] },
      { slug: "medium", name: "Medium", price: 650, inventory: 80, hex: "#C9B79C", images: ["front", "45"] },
      { slug: "large", name: "Large", price: 950, inventory: 40, hex: "#C9B79C", images: ["front", "45"] }
    ],
    sizes: ["small", "medium", "large"],
    attributes: { material: "sheep hair + cotton", function: "entryway scraping" },
    image: "doormat-front.jpg"
  },
  {
    slug: "hulegeb-mop",
    title: "Hulegeb Artisan Mop",
    brand: "Hulegeb",
    sku: "HLG-MOP-001",
    price: 450,
    currency: "ETB",
    short_description: "Durable cleaning mop with 1.3m wooden handle and absorbent braided or fringed head.",
    description: "<p>Available types: Braided White Mop, Braided Black Mop, Fringed Black Mop. Handle 1.3m, head width 27cm. Suitable for daily cleaning.</p>",
    inventory: 150,
    default_variant: "braided-white",
    variants: [
      { slug: "braided-white", name: "Braided White Mop", price: 450, inventory: 60, hex: "#FFFFFF", images: ["front", "45"] },
      { slug: "braided-black", name: "Braided Black Mop", price: 450, inventory: 50, hex: "#111111", images: ["front", "45"] },
      { slug: "fringed-black", name: "Fringed Black Mop", price: 500, inventory: 40, hex: "#111111", images: ["front", "45"] }
    ],
    attributes: { handle_length_m: 1.3, head_width_cm: 27, material: "wood + cotton thread" },
    image: "mop-white.jpg"
  },
  {
    slug: "hulegeb-broom",
    title: "Hulegeb Heavy-Duty Broom",
    brand: "Hulegeb",
    sku: "HLG-BRMW-001",
    price: 700,
    currency: "ETB",
    short_description: "Extra-long handle broom made from natural fiber and libeng material for large-area cleaning.",
    description: "<p>Designed for compounds, agricultural areas, and facility maintenance. Handle length 1.3m, durable broom head.</p>",
    inventory: 120,
    default_variant: "standard",
    variants: [
      { slug: "standard", name: "Standard Broom", price: 700, inventory: 120, hex: "#8B6B4A", images: ["front", "45"] }
    ],
    attributes: { handle_length_m: 1.3, material: "fiber + libeng" },
    image: "broom-front.jpg"
  },
  {
    slug: "hulegeb-glass-wash-brush",
    title: "Hulegeb Glass Washing Brush",
    brand: "Hulegeb",
    sku: "HLG-GBR-001",
    price: 220,
    currency: "ETB",
    short_description: "50cm total length glass washing brush with textured 16cm head; available in yellow, green, red.",
    description: "<p>Durable twisted metal handle and textured head for streak-free glass cleaning. Available in vibrant yellow, green, and red.</p>",
    inventory: 300,
    default_variant: "yellow",
    variants: [
      { slug: "yellow", name: "Yellow", price: 220, inventory: 100, hex: "#FFD200", images: ["front", "45"] },
      { slug: "green", name: "Green", price: 220, inventory: 100, hex: "#00A86B", images: ["front", "45"] },
      { slug: "red", name: "Red", price: 220, inventory: 100, hex: "#E53935", images: ["front", "45"] }
    ],
    attributes: { length_cm: 50, brush_head_cm: 16, handle: "twisted metal wire" },
    image: "glass-brush-yellow.jpg"
  },
  {
    slug: "hulegeb-small-brush",
    title: "Hulegeb Small Brush",
    brand: "Hulegeb",
    sku: "HLG-SBR-001",
    price: 120,
    currency: "ETB",
    short_description: "Compact 10.5cm brush for fine-detail cleaning. Colors: red, yellow, green.",
    description: "<p>Great for polishing, dusting delicate surfaces, or gentle scrubbing. Handcrafted from durable fibers and liben.</p>",
    inventory: 400,
    default_variant: "red",
    variants: [
      { slug: "red", name: "Red", price: 120, inventory: 140, hex: "#E53935", images: ["front"] },
      { slug: "yellow", name: "Yellow", price: 120, inventory: 130, hex: "#FFD200", images: ["front"] },
      { slug: "green", name: "Green", price: 120, inventory: 130, hex: "#00A86B", images: ["front"] }
    ],
    attributes: { length_cm: 10.5, width_cm: 5, material: "fiber + liben" },
    image: "small-brush-red.jpg"
  },
  {
    slug: "hulegeb-large-brush",
    title: "Hulegeb Large Brush",
    brand: "Hulegeb",
    sku: "HLG-LBR-001",
    price: 260,
    currency: "ETB",
    short_description: "Robust large brush for floors and outdoor spaces. Colors: red, yellow, green.",
    description: "<p>27cm length and 7.5cm width. Durable liben and fiber construction for demanding tasks.</p>",
    inventory: 220,
    default_variant: "red",
    variants: [
      { slug: "red", name: "Red", price: 260, inventory: 80, hex: "#E53935", images: ["front", "45"] },
      { slug: "yellow", name: "Yellow", price: 260, inventory: 70, hex: "#FFD200", images: ["front", "45"] },
      { slug: "green", name: "Green", price: 260, inventory: 70, hex: "#00A86B", images: ["front", "45"] }
    ],
    attributes: { length_cm: 27, width_cm: 7.5, material: "fiber + liben" },
    image: "large-brush-red.jpg"
  },
  {
    slug: "hulegeb-furniture-custom",
    title: "Hulegeb Custom Furniture (Tables, Chairs, Shelves)",
    brand: "Hulegeb",
    sku: "HLG-FURN-001",
    price: 7500,
    currency: "ETB",
    short_description: "Custom furniture built from sustainably sourced solid woods or engineered board. Request custom dimensions and finishes.",
    description: "<p>Each furniture piece is made-to-order. Provide dimensions and preferred finish in the custom order form. Traditional joinery and modern techniques ensure durability.</p>",
    inventory: 20,
    default_variant: "oak_standard",
    variants: [
      { slug: "oak_standard", name: "Oak - Standard", price: 7500, inventory: 6, hex: "#8B5A2B", images: ["front", "45", "back"] },
      { slug: "walnut_standard", name: "Walnut - Standard", price: 8500, inventory: 6, hex: "#5C4033", images: ["front", "45", "back"] },
      { slug: "custom_quote", name: "Custom (Request Quote)", price: 0, inventory: 8, hex: null, images: ["front"] }
    ],
    attributes: { materials: "solid wood / engineered board", joinery: "traditional + modern" },
    image: "furniture-oak.jpg"
  },
  {
    slug: "hulegeb-bedding-fabric-meter",
    title: "Hulegeb Handwoven Fabric (per meter)",
    brand: "Hulegeb",
    sku: "HLG-FAB-001",
    price: 220,
    currency: "ETB",
    short_description: "Handwoven fabric sold by the meter. 1m×9m rolls available. Use for bedding, drapes, or custom projects.",
    description: "<p>Versatile fabric in traditional patterns and modern designs. Sold by the meter; rolls and bulk pricing available.</p>",
    inventory: 1000,
    default_variant: "per_meter",
    variants: [
      { slug: "per_meter", name: "Per Meter", price: 220, inventory: 1000, hex: "#D8C9B3", images: ["front"] }
    ],
    attributes: { width_m: 1, roll_length_m: 9, material: "cotton / blended fabrics" },
    image: "fabric-front.jpg"
  },
  {
    slug: "hulegeb-drapes-1x9m",
    title: "Hulegeb Handwoven Drapes (1m × 9m)",
    brand: "Hulegeb",
    sku: "HLG-DRP-001",
    price: 1800,
    currency: "ETB",
    short_description: "1m×9m handwoven drapes in Ethiopian motifs or contemporary patterns. Customizable.",
    description: "<p>Artisan-woven drapes suitable for windows and interiors. Provide custom finishes or request tailoring service.</p>",
    inventory: 150,
    default_variant: "standard",
    variants: [
      { slug: "standard", name: "Standard 1m×9m", price: 1800, inventory: 150, hex: "#D8C9B3", images: ["front", "45"] }
    ],
    attributes: { size: "1m x 9m", material: "handwoven cotton" },
    image: "drapes-front.jpg"
  },
  {
    slug: "hulegeb-towel-roll",
    title: "Hulegeb Handwoven Towel (per meter or rolls)",
    brand: "Hulegeb",
    sku: "HLG-TWL-001",
    price: 90,
    currency: "ETB",
    short_description: "Handwoven towel sold per meter; rolls available: 190m, 200m, 250m, 300m.",
    description: "<p>Durable towel fabric in traditional and contemporary patterns. Available in various lengths.</p>",
    inventory: 2000,
    default_variant: "per_meter",
    variants: [
      { slug: "per_meter", name: "Per Meter", price: 90, inventory: 1500, hex: "#FFFFFF", images: ["front"] },
      { slug: "roll_190", name: "Roll 190m", price: 16000, inventory: 50, hex: "#FFFFFF", images: ["front"] },
      { slug: "roll_200", name: "Roll 200m", price: 16500, inventory: 40, hex: "#FFFFFF", images: ["front"] }
    ],
    attributes: { material: "cotton / blends", use: "towel / clothing" },
    image: "towel-front.jpg"
  }
];

// Impact metrics data
const IMPACT_DATA = {
  jobsCreated: { value: 127, label: "Jobs Created", target: 150 },
  hoursTraining: { value: 4850, label: "Training Hours", target: 6000 },
  productsSold: { value: 2340, label: "Products Sold", target: 3000 },
  communitiesServed: { value: 12, label: "Communities", target: 15 }
};

// Artisan profile for modal
const ARTISAN_PROFILE = {
  name: "Desta Bekele",
  role: "Master Carpet Weaver",
  yearsExperience: 8,
  productsCreated: 156,
  story: "Desta lost his sight at age 12 but discovered weaving at the Hulegeb training center. Today, he leads our carpet workshop and has trained 23 new artisans. His intricate geometric patterns have become signature designs that customers request by name."
};

// Helper functions
function formatPrice(price, currency = 'ETB') {
  if (price === 0) return 'Request a Quote';
  return `${price.toLocaleString()} ${currency}`;
}

function getProductBySlug(slug) {
  return PRODUCTS.find(p => p.slug === slug);
}

function getVariantBySlug(product, variantSlug) {
  return product.variants.find(v => v.slug === variantSlug);
}

function getProductImage(slug) {
  const imageMap = {
    'hulegeb-handwoven-carpet': 'assets/carpet-front.jpg',
    'hulegeb-doormat': 'assets/doormat-front.jpg',
    'hulegeb-mop': 'assets/mop-white.jpg',
    'hulegeb-broom': 'assets/broom-front.jpg',
    'hulegeb-glass-wash-brush': 'assets/glass-brush-yellow.jpg',
    'hulegeb-small-brush': 'assets/small-brush-red.jpg',
    'hulegeb-large-brush': 'assets/large-brush-red.jpg',
    'hulegeb-furniture-custom': 'assets/furniture-oak.jpg',
    'hulegeb-bedding-fabric-meter': 'assets/fabric-front.jpg',
    'hulegeb-drapes-1x9m': 'assets/drapes-front.jpg',
    'hulegeb-towel-roll': 'assets/towel-front.jpg'
  };
  return imageMap[slug] || 'assets/carpet-front.jpg';
}

// Export for use in other files
window.PRODUCTS = PRODUCTS;
window.IMPACT_DATA = IMPACT_DATA;
window.ARTISAN_PROFILE = ARTISAN_PROFILE;
window.formatPrice = formatPrice;
window.getProductBySlug = getProductBySlug;
window.getVariantBySlug = getVariantBySlug;
window.getProductImage = getProductImage;
