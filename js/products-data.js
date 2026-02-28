/**
 * HULEGEB STATIC SITE - PRODUCTS DATA
 * Hand-written JavaScript - No frameworks
 */

const PRODUCTS = [

  {
    slug: "Crimson-Track Brush",
    title: "Crimson-Track Brush",
    brand: "Crimson-Track Brush",
    sku: "HLG-DOOR-001",
    price: 650,
    currency: "ETB",
    description: "<p>Fabric Type	Hand woven Cotton Fabric.</p><ul><li>Base Material	Natural Light Wood / Beech-wood</li><li>Bristles color	Vibrant Red / Crimson</li><li>Design 	Strip brush format, Compact profile, Linear geometry</li><li>Best Use	Specialized cleaning, </li><li>Style	Polished wood surface, Synthetic bristles</li><li>Dimension	(5×7×115 cm)</li></ul>",
    inventory: 200,
    default_variant: "small",
    variants: [
      { slug: "small", name: "Small", price: 450, inventory: 80, hex: "#C9B79C", images: ["front", "45"] },
      { slug: "medium", name: "Medium", price: 650, inventory: 80, hex: "#C9B79C", images: ["front", "45"] },
      { slug: "large", name: "Large", price: 950, inventory: 40, hex: "#C9B79C", images: ["front", "45"] }
    ],
    sizes: ["small", "medium", "large"],
    attributes: { material: "sheep hair + cotton", function: "entryway scraping" },
    images: [
      "https://i.postimg.cc/WzKT9nPp/image.png",
     
    
    ],
  },
  {
    slug: "Artisan-Block Brush",
    title: "Artisan-Block Brush",
    brand: "Artisan-Block Brush",
    sku: "HLG-MOP-001",
    price: 450,
    currency: "ETB",
    description: "<p>Design	Hand woven Cotton Fabric</p><ul><li>	Base Material	Natural Light Wood / Beech-wood</li><li>Bristles color	Dense Red</li><li>Design 	Handheld block design, Natural wood finish</li><li>Best Use	Heavy-duty scrubbing</li><li>Style	Polished wood surface, Synthetic bristles</li><li>Dimension	7×8.5×23 cm</li></ul>",
    inventory: 150,
    default_variant: "braided-white",
    variants: [
      { slug: "braided-white", name: "Braided White Mop", price: 450, inventory: 60, hex: "#FFFFFF", images: ["front", "45"] },
      { slug: "braided-black", name: "Braided Black Mop", price: 450, inventory: 50, hex: "#111111", images: ["front", "45"] },
      { slug: "fringed-black", name: "Fringed Black Mop", price: 500, inventory: 40, hex: "#111111", images: ["front", "45"] }
    ],
    attributes: { handle_length_m: 1.3, head_width_cm: 27, material: "wood + cotton thread" },
    image: "https://i.postimg.cc/XqNk2fkt/image.png"
  },
  {
    slug: "Bottle Brush",
    title: "Bottle Brush",
    brand: "Bottle Brush",
    sku: "HLG-BRMW-001",
    price: 700,
    currency: "ETB",
    short_description: "Extra-long handle broom made from natural fiber and libeng material for large-area cleaning.",
    description: "<p>Design	Hand woven Cotton Fabric</p><ul><li>Handle	Metallic Silver</li><li>Bristles color	Bright Yellow</li><li>Design 	Flexible tube design, Chain handle, Cylindrical bristle profile</li><li>Style	Flexible tube, Chain handle, Twisted wire core</li></ul>",
    inventory: 120,
    default_variant: "standard",
    variants: [
      { slug: "standard", name: "Standard Broom", price: 700, inventory: 120, hex: "#8B6B4A", images: ["front", "45"] }
    ],
    attributes: { handle_length_m: 1.3, material: "fiber + libeng" },
    image: "https://i.postimg.cc/MpztX8BX/image.png"
  },
  {
    slug: "Green-Globe Brush",
    title: "Green-Globe Brush",
    brand: "Hulegeb",
    sku: "HLG-GBR-001",
    price: 220,
    currency: "ETB",
    short_description: "50cm total length glass washing brush with textured 16cm head; available in yellow, green, red.",
    description: "<p>Material	Synthetic bristles, Twisted wire core, Heavy-duty link</p><ul><li>Handle	Metallic Silver (Steel chain)</li><li>Bristles color	Vibrant Green</li><li>Design 	Spherical brush head, Chain-link handle, Slender profile</li><li>Best Use	Bottle and flask cleaning</li><li>Best Use	Bottle and flask cleaning</li><li>Style	Flexible tube, Chain handle, Twisted wire core</li></ul>",
    inventory: 300,
    default_variant: "yellow",
    variants: [
      { slug: "yellow", name: "Yellow", price: 220, inventory: 100, hex: "#FFD200", images: ["front", "45"] },
      { slug: "green", name: "Green", price: 220, inventory: 100, hex: "#00A86B", images: ["front", "45"] },
      { slug: "red", name: "Red", price: 220, inventory: 100, hex: "#E53935", images: ["front", "45"] }
    ],
    attributes: { length_cm: 50, brush_head_cm: 16, handle: "twisted metal wire" },
    image: "https://i.postimg.cc/3NgV5FM5/image.png"(we will continue)
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
  const product = PRODUCTS.find(p => p.slug === slug);
  if (!product) return "";

  // 1. If 'image' exists (the single string), use it.
  if (product.image) return product.image;

  // 2. If 'images' exists (the list), use the first one in the list.
  if (product.images && product.images.length > 0) return product.images[0];

  return ""; 
}
// Export for use in other files
window.PRODUCTS = PRODUCTS;
window.IMPACT_DATA = IMPACT_DATA;
window.ARTISAN_PROFILE = ARTISAN_PROFILE;
window.formatPrice = formatPrice;
window.getProductBySlug = getProductBySlug;
window.getVariantBySlug = getVariantBySlug;
window.getProductImage = getProductImage;
