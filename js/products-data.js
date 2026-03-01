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
    image: "https://i.postimg.cc/3xVY5tGb/image.png"
  },
  {
    slug: "Red Bristle Brush",
    title: "Red Bristle Brush",
    brand: "Hulegeb",
    sku: "HLG-SBR-001",
    price: 120,
    currency: "ETB",
    short_description: "Compact 10.5cm brush for fine-detail cleaning. Colors: red, yellow, green.",
   description: "<p>Red Bristle Brush</p><ul><li>Handle	Metallic Silver / Gray (Metal)</li><li>Bristles color	Vibrant Red</li><li>Design 	Long-handle configuration, Block brush head, Ergonomic reach</li><li>Best Use	Bottle and flask cleaning, Floor scrubbing</li><li>Style	Flexible tube, Chain handle, Twisted wire core</li></ul>",
    inventory: 400,
    default_variant: "red",
    variants: [
      { slug: "red", name: "Red", price: 120, inventory: 140, hex: "#E53935", images: ["front"] },
      { slug: "yellow", name: "Yellow", price: 120, inventory: 130, hex: "#FFD200", images: ["front"] },
      { slug: "green", name: "Green", price: 120, inventory: 130, hex: "#00A86B", images: ["front"] }
    ],
    attributes: { length_cm: 10.5, width_cm: 5, material: "fiber + liben" },
    image: "https://i.postimg.cc/VsgwLfMC/image.png"
  },
  {
    slug: "Toilet Scrub Brush",
    title: "Toilet Scrub Brush",
    brand: "Hulegeb",
    sku: "HLG-LBR-001",
    price: 260,
    currency: "ETB",
    short_description: "Robust large brush for floors and outdoor spaces. Colors: red, yellow, green.",
    description: "<p>Toilet Scrub Brush</p><ul><li>Material	Hardwood handle, synthetic bristles, Strong anchoring</li><liHandle	Natural Wood / Light Brown</li><li>Bristles color	Yellow and Blue, Red</li><li>Design 	Round brush head, Ergonomic wooden, Compact profile</li><li>Best Use	Toilet and bathroom cleaning</li><li>Style	Polished wood</li></ul>",
   inventory: 220,
    default_variant: "red",
    variants: [
      { slug: "red", name: "Red", price: 260, inventory: 80, hex: "#E53935", images: ["front", "45"] },
      { slug: "yellow", name: "Yellow", price: 260, inventory: 70, hex: "#FFD200", images: ["front", "45"] },
      { slug: "green", name: "Green", price: 260, inventory: 70, hex: "#00A86B", images: ["front", "45"] }
    ],
    attributes: { length_cm: 27, width_cm: 7.5, material: "fiber + liben" },
    image: "https://i.postimg.cc/Njt3vZJP/image.png"
  },
  {
    slug: "Green Bristle Sweep",
    title: "Green Bristle Sweep",
    brand: "Hulegeb",
    sku: "HLG-FURN-001",
    price: 7500,
    currency: "ETB",
    short_description: "Custom furniture built from sustainably sourced solid woods or engineered board. Request custom dimensions and finishes.",
   description: "<p>Green Bristle Sweep</p><ul><li>Fabric Type	Hand woven Cotton Fabric</li><Handle Color	Natural Wood / Brown with Silver Hardware</li><li>Bristles	Vibrant Green</li><li>Finish	Dense Bristle, Smooth wood, functional aesthetic</li><li>Best Use	Machine Cleaning, heavy duty cleaning</li><li>Style	Long-handle, Broad brush head, Industrial style</li><li>Dimension	Custom order (1.7×6×240 (cm))</li></ul>",
    inventory: 20,
    default_variant: "oak_standard",
    variants: [
      { slug: "oak_standard", name: "Oak - Standard", price: 7500, inventory: 6, hex: "#8B5A2B", images: ["front", "45", "back"] },
      { slug: "walnut_standard", name: "Walnut - Standard", price: 8500, inventory: 6, hex: "#5C4033", images: ["front", "45", "back"] },
      { slug: "custom_quote", name: "Custom (Request Quote)", price: 0, inventory: 8, hex: null, images: ["front"] }
    ],
    attributes: { materials: "solid wood / engineered board", joinery: "traditional + modern" },
    image: "https://i.postimg.cc/Sx2brcPC/image.png"
  },
  {
    slug: "Precision Strip Brush",
    title: "Precision Strip Brush",
    brand: "Hulegeb",
    sku: "HLG-FAB-001",
    price: 220,
    currency: "ETB",
    short_description: "Handwoven fabric sold by the meter. 1m×9m rolls available. Use for bedding, drapes, or custom projects.",
   description: "<p>Precision Strip Brush</p><ul><li>Fabric Type	Hand woven Cotton Fabric</li><li>Base Material	Natural Light Wood Beech wood tone</li><li>Bristles color	Deep Blue / Royal Blue</li><li>Design 	Minimalist Geometry, Long Narrow profile</li><li>Best Use	Specialized industrial tool</li><li>Style	Long-handle, Broad brush head, Industrial style</li></ul>",
   inventory: 1000,
    default_variant: "per_meter",
    variants: [
      { slug: "per_meter", name: "Per Meter", price: 220, inventory: 1000, hex: "#D8C9B3", images: ["front"] }
    ],
    attributes: { width_m: 1, roll_length_m: 9, material: "cotton / blended fabrics" },
    image: "https://i.postimg.cc/bv1cXppy/image.png"
  },
  {
    slug: "Gold Utility Brush",
    title: "Gold Utility Brush",
    brand: "Hulegeb",
    sku: "HLG-DRP-001",
    price: 1800,
    currency: "ETB",
    short_description: "1m×9m handwoven drapes in Ethiopian motifs or contemporary patterns. Customizable.",
    description: "<p>Gold Utility Brush</p><ul><li>Material	Soft synthetic, Polished wood body, Durable anchoring</li><li>Handle Base	Natural Wood / Light Brown</li><li>Bristles color	Soft Yellow / Goldenrod</li><li>Design 	Handheld utility, Wooden block base, Ergonomic form</li><li>Best Use	Delicate scrubbing, Dusting and sweeping</li><li>Style	Warm and approachable, soft yellow</li></ul>",
   inventory: 150,
    default_variant: "standard",
    variants: [
      { slug: "standard", name: "Standard 1m×9m", price: 1800, inventory: 150, hex: "#D8C9B3", images: ["front", "45"] }
    ],
    attributes: { size: "1m x 9m", material: "handwoven cotton" },
    image: "https://i.postimg.cc/wvkCv21Z/image.png"
  },
  {
    slug: "classic-sweep-broom",
    title: "Classic-Sweep Broom",
    brand: "Hulegeb",
    sku: "HLG-BRM-001",
    price: 1800,
    currency: "ETB",
    short_description: "1m×9m handwoven drapes in Ethiopian motifs or contemporary patterns. Customizable.",
    description: "<p>Classic-Sweep Broom</p><ul><li>Material: Wood, synthetic bristles, Secure connection</li><li>Handle: Solid wood handle</li><li>Bristles color: Vibrant Red</li><li>Design: Smooth, Long-handle, Rectangular brush, Classic silhouette</li><li>Best Use: To wash indoor and outdoor</li><li>Style: Dense bristle packing, Robust assembly, Rectangular brush head</li><li>Dimension: 2.5×23×130 cm</li></ul>",
    inventory: 150,
    default_variant: "standard",
    variants: [
      { slug: "standard", name: "Standard 1m×9m", price: 1800, inventory: 150, hex: "#D8C9B3", images: ["front", "45"] }
    ],
    attributes: { size: "1m x 9m", material: "handwoven cotton" },
    image: "https://i.postimg.cc/KjqC7YrV/image.png"
  },
  {
    slug: "zone-broom",
    title: "Zone Broom",
    brand: "Hulegeb",
    sku: "HLG-BRM-002",
    price: 1800,
    currency: "ETB",
    short_description: "1m×9m handwoven drapes in Ethiopian motifs or contemporary patterns. Customizable.",
    description: "<p>Zone Broom</p><ul><li>Material: Wooden handles, Synthetic bristles, Sturdy construction</li><li>Handle: Natural Wood / Light Brown (Both)</li><li>Bristles color: Deep Red and Vibrant Yellow bristles</li><li>Design: Pair configuration, Ergonomic length, Symmetrical layout</li><li>Best Use: Indoor/Outdoor sweeping</li><li>Style: Dense bristle packing, Robust assembly, Rectangular brush head</li><li>Dimension: 2.5×23×130 cm</li></ul>",
    inventory: 150,
    default_variant: "standard",
    variants: [
      { slug: "standard", name: "Standard 1m×9m", price: 1800, inventory: 150, hex: "#D8C9B3", images: ["front", "45"] }
    ],
    attributes: { size: "1m x 9m", material: "handwoven cotton" },
    image: "https://i.postimg.cc/rFsBVSMv/image.png"
  },
  {
    slug: "yellow-grapples-broom",
    title: "Yellow Grapples Broom",
    brand: "Hulegeb",
    sku: "HLG-BRM-003",
    price: 1800,
    currency: "ETB",
    short_description: "1m×9m handwoven drapes in Ethiopian motifs or contemporary patterns. Customizable.",
    description: "<p>Yellow Grapples Broom</p><ul><li>Material: Soft synthetic, Polished wood body, Sleek Silver</li><li>Handle Base: Natural Wood handle</li><li>Bristle Color: Yellow bristles</li><li>Design: Handheld block, Unified shape, Bristle profile</li><li>Best Use: Color-coded cleaning, Detail scrubbing, sweeping Accessories</li><li>Style: Warm and approachable, soft yellow</li></ul>",
    inventory: 150,
    default_variant: "standard",
    variants: [
      { slug: "standard", name: "Standard 1m×9m", price: 1800, inventory: 150, hex: "#D8C9B3", images: ["front", "45"] }
    ],
    attributes: { size: "1m x 9m", material: "handwoven cotton" },
    image: "https://i.postimg.cc/HLwKZz9V/image.png"
  },
  {
    slug: "red-grapples-broom",
    title: "Red Grapples Broom",
    brand: "Hulegeb",
    sku: "HLG-BRM-004",
    price: 1800,
    currency: "ETB",
    short_description: "1m×9m handwoven drapes in Ethiopian motifs or contemporary patterns. Customizable.",
    description: "<p>Red Grapples Broom</p><ul><li>Material: Soft synthetic, Polished wood body, Sleek Silver</li><li>Handle Base: Natural Wood handle</li><li>Bristle Color: Deep Red bristles</li><li>Design: Handheld block, Unified shape, Bristle profile</li><li>Best Use: Color-coded cleaning, Detail scrubbing, sweeping Accessories</li><li>Style: Warm and approachable, soft yellow</li></ul>",
    inventory: 150,
    default_variant: "standard",
    variants: [
      { slug: "standard", name: "Standard 1m×9m", price: 1800, inventory: 150, hex: "#D8C9B3", images: ["front", "45"] }
    ],
    attributes: { size: "1m x 9m", material: "handwoven cotton" },
    image: "https://i.postimg.cc/PxK7hqcP/image.png"
  },
  {
    slug: "white-braid-mop",
    title: "White Braid Mop",
    brand: "Hulegeb",
    sku: "HLG-MOP-005",
    price: 1800,
    currency: "ETB",
    short_description: "1m×9m handwoven drapes in Ethiopian motifs or contemporary patterns. Customizable.",
    description: "<p>White Braid Mop</p><ul><li>Material: Wooden handles, Sturdy construction</li><li>Handle: Natural Wood</li><li>Color: Light Beige / Natural White cotton strands</li><li>Design: Braided mop head, Long wooden</li><li>Best Use: Indoor/Outdoor sweeping</li><li>Style: Dense bristle packing, Robust assembly, Rectangular brush head</li><li>Dimension: D- 2.5 L-130</li></ul>",
    inventory: 150,
    default_variant: "standard",
    variants: [
      { slug: "standard", name: "Standard 1m×9m", price: 1800, inventory: 150, hex: "#D8C9B3", images: ["front", "45"] }
    ],
    attributes: { size: "1m x 9m", material: "handwoven cotton" },
    image: "https://i.postimg.cc/wMGbyGgh/image.png"
  },
  {
    slug: "black-braid-mop",
    title: "Black Braid mop",
    brand: "Hulegeb",
    sku: "HLG-MOP-006",
    price: 1800,
    currency: "ETB",
    short_description: "1m×9m handwoven drapes in Ethiopian motifs or contemporary patterns. Customizable.",
    description: "<p>Black Braid mop</p><ul><li>Material: Wooden handles, Sturdy construction</li><li>Handle: Solid wood</li><li>Color: Deep Black</li><li>Design: Braided mop head, Long wooden</li><li>Best Use: Indoor/Outdoor sweeping</li><li>Style: Dense bristle packing, Robust assembly, Rectangular brush head</li><li>Dimension: D- 2.5 L-130</li></ul>",
    inventory: 150,
    default_variant: "standard",
    variants: [
      { slug: "standard", name: "Standard 1m×9m", price: 1800, inventory: 150, hex: "#D8C9B3", images: ["front", "45"] }
    ],
    attributes: { size: "1m x 9m", material: "handwoven cotton" },
    image: "https://i.postimg.cc/fTVPnDvD/image.png"
  },
  {
    slug: "fringed-mop",
    title: "Fringed Mop",
    brand: "Hulegeb",
    sku: "HLG-MOP-007",
    price: 1800,
    currency: "ETB",
    short_description: "1m×9m handwoven drapes in Ethiopian motifs or contemporary patterns. Customizable.",
    description: "<p>Fringed Mop</p><ul><li>Material: Wooden handles, Sturdy construction</li><li>Handle: Natural Wood</li><li>Color: Deep Black</li><li>Design: Fringed mop head</li><li>Best Use: Indoor/Outdoor sweeping</li><li>Style: Dense bristle packing, Robust assembly, Rectangular brush head</li><li>Dimension: 2.5×23×130 cm</li></ul>",
    inventory: 150,
    default_variant: "standard",
    variants: [
      { slug: "standard", name: "Standard 1m×9m", price: 1800, inventory: 150, hex: "#D8C9B3", images: ["front", "45"] }
    ],
    attributes: { size: "1m x 9m", material: "handwoven cotton" },
    image: "https://i.postimg.cc/pL81rC74/image.png"
  },
  {
    slug: "diamond-lattice-rugs",
    title: "Diamond Lattice Rugs",
    brand: "Hulegeb",
    sku: "HLG-CPT-008",
    price: 1800,
    currency: "ETB",
    short_description: "1m×9m handwoven drapes in Ethiopian motifs or contemporary patterns. Customizable.",
    description: "<p>Diamond Lattice Rugs</p><ul><li>Material: Soft synthetic, Polished wood body, Sleek Silver</li><li>Pattern colors: Contrasting Black and White</li><li>Color: Light Brown / Beige</li><li>Texture: Flat-weave, Hand-woven craft, Flexible drape</li><li>Best Use: Floor Layer</li><li>Style: Diamond geometric pattern, Decorative fringe</li></ul>",
    inventory: 150,
    default_variant: "standard",
    variants: [
      { slug: "standard", name: "Standard 1m×9m", price: 1800, inventory: 150, hex: "#D8C9B3", images: ["front", "45"] }
    ],
    attributes: { size: "1m x 9m", material: "handwoven cotton" },
    image: "https://i.postimg.cc/pL81rC74/image.png"
  },
  {
    slug: "dense-diamond-lattice-rugs",
    title: "Dense Diamond Lattice Rugs",
    brand: "Hulegeb",
    sku: "HLG-CPT-009",
    price: 1800,
    currency: "ETB",
    short_description: "1m×9m handwoven drapes in Ethiopian motifs or contemporary patterns. Customizable.",
    description: "<p>Dense Diamond Lattice Rugs</p><ul><li>Material: Soft synthetic, Polished wood body, Sleek Silver</li><li>Pattern colors: Contrasting Black and White</li><li>Color: Light Brown / Beige</li><li>Texture: Flat-weave, Hand-woven craft, Flexible drape</li><li>Best Use: Floor Layer</li><li>Style: Diamond geometric pattern, Decorative fringe</li></ul>",
    inventory: 150,
    default_variant: "standard",
    variants: [
      { slug: "standard", name: "Standard 1m×9m", price: 1800, inventory: 150, hex: "#D8C9B3", images: ["front", "45"] }
    ],
    attributes: { size: "1m x 9m", material: "handwoven cotton" },
    image: "https://i.postimg.cc/9fY8tMcw/image.png"
  },
  {
    slug: "neutral-border-rugs",
    title: "Neutral Border Rugs",
    brand: "Hulegeb",
    sku: "HLG-CPT-010",
    price: 1800,
    currency: "ETB",
    short_description: "1m×9m handwoven drapes in Ethiopian motifs or contemporary patterns. Customizable.",
    description: "<p>Neutral Border Rugs</p><ul><li>Material: Soft synthetic, Polished wood body, Sleek Silver</li><li>Pattern colors: Deep Black, Brown and Light Tan</li><li>Color: Light Beige / Natural Cream</li><li>Texture: Thick pile / Dense weave, Soft yet durable</li><li>Best Use: Living room centerpiece</li><li>Style: Rectangle pattern, Decorative fringe</li></ul>",
    inventory: 150,
    default_variant: "standard",
    variants: [
      { slug: "standard", name: "Standard 1m×9m", price: 1800, inventory: 150, hex: "#D8C9B3", images: ["front", "45"] }
    ],
    attributes: { size: "1m x 9m", material: "handwoven cotton" },
    image: "https://i.postimg.cc/pL81rC74/image.png"
  },
  {
    slug: "dense-neutral-border-rugs",
    title: "Dense Neutral Border Rugs",
    brand: "Hulegeb",
    sku: "HLG-CPT-011",
    price: 1800,
    currency: "ETB",
    short_description: "1m×9m handwoven drapes in Ethiopian motifs or contemporary patterns. Customizable.",
    description: "<p>Dense Neutral Border Rugs</p><ul><li>Material: Soft synthetic, Polished wood body, Sleek Silver</li><li>Pattern colors: Deep Black, Brown and Light Tan</li><li>Color: Light Beige / Natural Cream</li><li>Texture: Thick pile / Dense weave, Soft yet durable</li><li>Best Use: Living room centerpiece</li><li>Style: Rectangle pattern, Decorative fringe</li></ul>",
    inventory: 150,
    default_variant: "standard",
    variants: [
      { slug: "standard", name: "Standard 1m×9m", price: 1800, inventory: 150, hex: "#D8C9B3", images: ["front", "45"] }
    ],
    attributes: { size: "1m x 9m", material: "handwoven cotton" },
    image: "https://i.postimg.cc/9fY8tMcw/image.png"
  },
  {
    slug: "gondar-mist-rugs",
    title: "Gondar Mist Rugs",
    brand: "Hulegeb",
    sku: "HLG-CPT-012",
    price: 1800,
    currency: "ETB",
    short_description: "1m×9m handwoven drapes in Ethiopian motifs or contemporary patterns. Customizable.",
    description: "<p>Gondar Mist Rugs</p><ul><li>Pattern: Solid field, Minimalist aesthetic, Versatile look, Simple elegance</li><li>Visual Tone: Neutral, modern</li><li>Color: Soft Light Gray</li><li>Texture: Soft and cozy, Medium weight, Breathable</li><li>Best Use: Floor Layer, Cool Climate Comfort</li><li>Style: Diamond geometric pattern, Decorative fringe</li></ul>",
    inventory: 150,
    default_variant: "standard",
    variants: [
      { slug: "standard", name: "Standard 1m×9m", price: 1800, inventory: 150, hex: "#D8C9B3", images: ["front", "45"] }
    ],
    attributes: { size: "1m x 9m", material: "handwoven cotton" },
    image: "https://i.postimg.cc/fR4BGXLL/image.png"
  },
  {
    slug: "dense-mist-rugs",
    title: "Dense Mist Rugs",
    brand: "Hulegeb",
    sku: "HLG-CPT-013",
    price: 1800,
    currency: "ETB",
    short_description: "1m×9m handwoven drapes in Ethiopian motifs or contemporary patterns. Customizable.",
    description: "<p>Dense Mist Rugs</p><ul><li>Pattern: Solid field, Minimalist aesthetic, Versatile look, Simple elegance</li><li>Visual Tone: Neutral, modern</li><li>Color: Soft Light Gray</li><li>Texture: Soft and cozy, Medium weight, Breathable</li><li>Best Use: Floor Layer, Cool Climate Comfort</li><li>Style: Diamond geometric pattern, Decorative fringe</li></ul>",
    inventory: 150,
    default_variant: "standard",
    variants: [
      { slug: "standard", name: "Standard 1m×9m", price: 1800, inventory: 150, hex: "#D8C9B3", images: ["front", "45"] }
    ],
    attributes: { size: "1m x 9m", material: "handwoven cotton" },
    image: "https://i.postimg.cc/fR4BGXLL/image.png"
  },
  {
    slug: "abyssinian-cloud-cotton-mats",
    title: "Abyssinian Cloud Cotton mats",
    brand: "Hulegeb",
    sku: "HLG-MAT-014",
    price: 1800,
    currency: "ETB",
    short_description: "1m×9m handwoven drapes in Ethiopian motifs or contemporary patterns. Customizable.",
    description: "<p>Abyssinian Cloud Cotton mats</p><ul><li>Pattern: Solid / Plain, Stacked presentation, Commercial layout</li><li>Visual Tone: Neutral, modern</li><li>Color: Pure White / Snow White</li><li>Texture: Plush / Terry, Thick weave, Soft hand feel</li><li>Best Use: Bath and Spa use, Hospitality industry</li><li>Style: Uniform cut, Bordered edges</li></ul>",
    inventory: 150,
    default_variant: "standard",
    variants: [
      { slug: "standard", name: "Standard 1m×9m", price: 1800, inventory: 150, hex: "#D8C9B3", images: ["front", "45"] }
    ],
    attributes: { size: "1m x 9m", material: "handwoven cotton" },
    image: "https://i.postimg.cc/0QNfY0tZ/image.png"
  },
  {
    slug: "cream-knot-mats",
    title: "Cream Knot Mats",
    brand: "Hulegeb",
    sku: "HLG-MAT-015",
    price: 1800,
    currency: "ETB",
    short_description: "1m×9m handwoven drapes in Ethiopian motifs or contemporary patterns. Customizable.",
    description: "<p>Cream Knot Mats</p><ul><li>Pattern: Earthy Brown with subtle dark outlines</li><li>Visual Tone: warm brown geometric</li><li>Color: Soft Cream / Natural Ivory</li><li>Texture: Plush / Terry, Thick weave, Soft hand feel</li><li>Best Use: Home décor</li><li>Style: Fringed edges, Balanced spacing</li></ul>",
    inventory: 150,
    default_variant: "standard",
    variants: [
      { slug: "standard", name: "Standard 1m×9m", price: 1800, inventory: 150, hex: "#D8C9B3", images: ["front", "45"] }
    ],
    attributes: { size: "1m x 9m", material: "handwoven cotton" },
    image: "https://i.postimg.cc/c12pJvCG/image.png"
  },
  {
    slug: "cream-knot-mats-variant",
    title: "Cream Knot Mats",
    brand: "Hulegeb",
    sku: "HLG-MAT-016",
    price: 1800,
    currency: "ETB",
    short_description: "1m×9m handwoven drapes in Ethiopian motifs or contemporary patterns. Customizable.",
    description: "<p>Cream Knot Mats</p><ul><li>Pattern: Earthy Brown with subtle dark outlines</li><li>Visual Tone: warm brown geometric</li><li>Color: Soft Cream / Natural Ivory</li><li>Texture: Plush / Terry, Thick weave, Soft hand feel</li><li>Best Use: Home décor</li><li>Style: Fringed edges, Balanced spacing</li></ul>",
    inventory: 150,
    default_variant: "standard",
    variants: [
      { slug: "standard", name: "Standard 1m×9m", price: 1800, inventory: 150, hex: "#D8C9B3", images: ["front", "45"] }
    ],
    attributes: { size: "1m x 9m", material: "handwoven cotton" },
    image: "https://i.postimg.cc/c12pJvCG/image.png"
  },
  {
    slug: "midnight-weave-doormats",
    title: "Midnight Weave Doormats",
    brand: "Hulegeb",
    sku: "HLG-DOR-017",
    price: 1800,
    currency: "ETB",
    short_description: "1m×9m handwoven drapes in Ethiopian motifs or contemporary patterns. Customizable.",
    description: "<p>Midnight Weave Doormats</p><ul><li>Design: Rectangular mat format, Fringed ends, Vertical woven band detail</li><li>Visual Tone: warm brown geometric</li><li>Color: Deep Charcoal Black / Dark Navy Blue</li><li>Texture: Plush / Terry, Thick weave, Soft hand feel</li><li>Best Use: Entryway or bedside mat</li><li>Style: Fringed edges, Balanced spacing</li><li>Dimension: 0.5×50×80 cm</li></ul>",
    inventory: 150,
    default_variant: "standard",
    variants: [
      { slug: "standard", name: "Standard 1m×9m", price: 1800, inventory: 150, hex: "#D8C9B3", images: ["front", "45"] }
    ],
    attributes: { size: "1m x 9m", material: "handwoven cotton" },
    image: "https://i.postimg.cc/ncqPcTN4/image.png"
  },
  {
    slug: "desert-heritage-doormats",
    title: "Desert Heritage Doormats",
    brand: "Hulegeb",
    sku: "HLG-DOR-018",
    price: 1800,
    currency: "ETB",
    short_description: "1m×9m handwoven drapes in Ethiopian motifs or contemporary patterns. Customizable.",
    description: "<p>Desert Heritage Doormats</p><ul><li>Design: Rectangular mat format, Fringed ends, Panel and motif variation</li><li>Visual Tone: Warm Brown, Cocoa Brown</li><li>Color: Natural Beige / Sand</li><li>Texture: Plush / Terry, Thick weave, Soft hand feel</li><li>Best Use: Living room or bedroom mat</li><li>Style: Fringed edges, Balanced spacing</li><li>Dimension: 0.5×50×80 cm</li></ul>",
    inventory: 150,
    default_variant: "standard",
    variants: [
      { slug: "standard", name: "Standard 1m×9m", price: 1800, inventory: 150, hex: "#D8C9B3", images: ["front", "45"] }
    ],
    attributes: { size: "1m x 9m", material: "handwoven cotton" },
    image: "https://i.postimg.cc/kXNTdGtp/image.png"
  },
  {
    slug: "collar-whisper",
    title: "Collar Whisper",
    brand: "Hulegeb",
    sku: "HLG-FAB-019",
    price: 1800,
    currency: "ETB",
    short_description: "1m×9m handwoven drapes in Ethiopian motifs or contemporary patterns. Customizable.",
    description: "<p>Collar Whisper</p><ul><li>Fabric Type: Hand woven Cotton Fabric</li><li>Color: Cream/Off white with collar accent stripe</li><li>Texture: Soft, Breathable, Lightweight</li><li>Best Use: Gabi, Netela, scarf, table linen, home decor</li><li>Style: Elegant Minimal, Traditional- Modern Blend</li></ul>",
    inventory: 150,
    default_variant: "standard",
    variants: [
      { slug: "standard", name: "Standard 1m×9m", price: 1800, inventory: 150, hex: "#D8C9B3", images: ["front", "45"] }
    ],
    attributes: { size: "1m x 9m", material: "handwoven cotton" },
    image: "https://i.postimg.cc/13JMfdB4/image.png"
  },
  {
    slug: "royal-heritage-gold-stripe",
    title: "Royal Heritage Gold Stripe",
    brand: "Hulegeb",
    sku: "HLG-FAB-020",
    price: 1800,
    currency: "ETB",
    short_description: "1m×9m handwoven drapes in Ethiopian motifs or contemporary patterns. Customizable.",
    description: "<p>Royal Heritage Gold Stripe</p><ul><li>Fabric Type: Hand woven cotton thread</li><li>Color: Deep marrow/burgundy/ gold /mustard yellow</li><li>Texture: Medium weight, durable</li><li>Best Use: Gabi, cultural wear, decorative</li><li>Style: Rich, ceremonial, heritage-inspire</li></ul>",
    inventory: 150,
    default_variant: "standard",
    variants: [
      { slug: "standard", name: "Standard 1m×9m", price: 1800, inventory: 150, hex: "#D8C9B3", images: ["front", "45"] }
    ],
    attributes: { size: "1m x 9m", material: "handwoven cotton" },
    image: "https://i.postimg.cc/RVmTGmbn/image.png"
  },
  {
    slug: "golden-sand-heritage-stripe",
    title: "Golden sand Heritage Stripe",
    brand: "Hulegeb",
    sku: "HLG-FAB-021",
    price: 1800,
    currency: "ETB",
    short_description: "1m×9m handwoven drapes in Ethiopian motifs or contemporary patterns. Customizable.",
    description: "<p>Golden sand Heritage Stripe</p><ul><li>Fabric Type: Hand woven cotton thread</li><li>Color: Cream / off-white base golden stripe</li><li>Texture: Soft, Breathable, medium weight</li><li>Best Use: Gabi, netela, kuta, table textile, home decor</li><li>Style: Warm, earthy, heritage-inspire</li></ul>",
    inventory: 150,
    default_variant: "standard",
    variants: [
      { slug: "standard", name: "Standard 1m×9m", price: 1800, inventory: 150, hex: "#D8C9B3", images: ["front", "45"] }
    ],
    attributes: { size: "1m x 9m", material: "handwoven cotton" },
    image: "https://i.postimg.cc/K8vDSNb1/image.png"
  },
  {
    slug: "ash-grey-classic-border",
    title: "Ash Grey Classic Border",
    brand: "Hulegeb",
    sku: "HLG-FAB-022",
    price: 1800,
    currency: "ETB",
    short_description: "1m×9m handwoven drapes in Ethiopian motifs or contemporary patterns. Customizable.",
    description: "<p>Ash Grey Classic Border</p><ul><li>Fabric Type: Hand woven cotton thread</li><li>Color: Light grey/soft ash</li><li>Texture: Medium weight, smooth, Breathable</li><li>Best Use: Gabi, Netela, scarf, formal traditional wear</li><li>Style: Subtle, classic, elegant heritage</li></ul>",
    inventory: 150,
    default_variant: "standard",
    variants: [
      { slug: "standard", name: "Standard 1m×9m", price: 1800, inventory: 150, hex: "#D8C9B3", images: ["front", "45"] }
    ],
    attributes: { size: "1m x 9m", material: "handwoven cotton" },
    image: "https://i.postimg.cc/yNDhW8k1/image.png"
  },
  {
    slug: "unity-heritage",
    title: "Unity Heritage",
    brand: "Hulegeb",
    sku: "HLG-FAB-023",
    price: 1800,
    currency: "ETB",
    short_description: "1m×9m handwoven drapes in Ethiopian motifs or contemporary patterns. Customizable.",
    description: "<p>Unity Heritage</p><ul><li>Fabric Type: Hand woven cotton thread</li><li>Color: Bright white base</li><li>Stripe: Green, yellow, red</li><li>Texture: Soft, lightweight, breathable</li><li>Best Use: Gabi, Netela, Cultural wear, Ceremonial textile</li><li>Style: Cultural, Symbolic, vibrant heritage</li></ul>",
    inventory: 150,
    default_variant: "standard",
    variants: [
      { slug: "standard", name: "Standard 1m×9m", price: 1800, inventory: 150, hex: "#D8C9B3", images: ["front", "45"] }
    ],
    attributes: { size: "1m x 9m", material: "handwoven cotton" },
    image: "https://i.postimg.cc/43Hts2S4/image.png"
  },
  {
    slug: "golden-sun-heritage-weave",
    title: "Golden Sun Heritage Weave",
    brand: "Hulegeb",
    sku: "HLG-FAB-024",
    price: 1800,
    currency: "ETB",
    short_description: "1m×9m handwoven drapes in Ethiopian motifs or contemporary patterns. Customizable.",
    description: "<p>Golden Sun Heritage Weave</p><ul><li>Fabric Type: Hand woven cotton thread</li><li>Color: Golden Yellow/Mustard</li><li>Texture: soft, smooth, lightweight</li><li>Best Use: Gabi, Netela, Scarf, Shawl, Ceremonial Textile</li><li>Style: Bright, elegant, timeless traditional</li></ul>",
    inventory: 150,
    default_variant: "standard",
    variants: [
      { slug: "standard", name: "Standard 1m×9m", price: 1800, inventory: 150, hex: "#D8C9B3", images: ["front", "45"] }
    ],
    attributes: { size: "1m x 9m", material: "handwoven cotton" },
    image: "https://i.postimg.cc/P5PvQFhJ/image.png"
  },
  {
    slug: "meskel-check-heritage-cloth",
    title: "Meskel Check Heritage Cloth",
    brand: "Hulegeb",
    sku: "HLG-FAB-025",
    price: 1800,
    currency: "ETB",
    short_description: "1m×9m handwoven drapes in Ethiopian motifs or contemporary patterns. Customizable.",
    description: "<p>Meskel Check Heritage Cloth</p><ul><li>Fabric Type: Hand woven cotton thread</li><li>Color: Deep Red, Cream</li><li>Stripe: Light Brown / Beige tones</li><li>Texture: Medium-weight with a firm yet flexible feel</li><li>Best Use: table covers, scarves, wraps, and decorative textiles</li><li>Style: Evenly spaced horizontal and vertical lines</li></ul>",
    inventory: 150,
    default_variant: "standard",
    variants: [
      { slug: "standard", name: "Standard 1m×9m", price: 1800, inventory: 150, hex: "#D8C9B3", images: ["front", "45"] }
    ],
    attributes: { size: "1m x 9m", material: "handwoven cotton" },
    image: "https://i.postimg.cc/vm5B0JKr/image.png"
  },
  {
    slug: "buna-stripe-vibrant",
    title: "Buna Stripe Vibrant",
    brand: "Hulegeb",
    sku: "HLG-FAB-026",
    price: 1800,
    currency: "ETB",
    short_description: "1m×9m handwoven drapes in Ethiopian motifs or contemporary patterns. Customizable.",
    description: "<p>Buna Stripe Vibrant</p><ul><li>Fabric Type: Hand woven cotton thread</li><li>Color: Green, Orange, White</li><li>Stripe: Yellow hints within the weave</li><li>Texture: Lightweight to medium-weight fabric</li><li>Best Use: scarves, shawls, runners, and light throws</li><li>Style: Dense, rhythmic line repetition, Clean and vibrant design</li></ul>",
    inventory: 150,
    default_variant: "standard",
    variants: [
      { slug: "standard", name: "Standard 1m×9m", price: 1800, inventory: 150, hex: "#D8C9B3", images: ["front", "45"] }
    ],
    attributes: { size: "1m x 9m", material: "handwoven cotton" },
    image: "https://i.postimg.cc/NFjjf5jS/image.png"
  },
  {
    slug: "nile-horizon-stripe",
    title: "Nile Horizon Stripe",
    brand: "Hulegeb",
    sku: "HLG-FAB-027",
    price: 1800,
    currency: "ETB",
    short_description: "1m×9m handwoven drapes in Ethiopian motifs or contemporary patterns. Customizable.",
    description: "<p>Nile Horizon Stripe</p><ul><li>Fabric Type: Hand woven cotton thread</li><li>Color: White / Off-white</li><li>Stripe: Blue, Olive Green, Black</li><li>Texture: Medium-weight fabric with a soft, absorbent feel</li><li>Best Use: towels, scarves, wraps, table runners, and utility textiles</li><li>Style: Horizontal stripe pattern concentrated near one edge</li></ul>",
    inventory: 150,
    default_variant: "standard",
    variants: [
      { slug: "standard", name: "Standard 1m×9m", price: 1800, inventory: 150, hex: "#D8C9B3", images: ["front", "45"] }
    ],
    attributes: { size: "1m x 9m", material: "handwoven cotton" },
    image: "https://i.postimg.cc/X7XYRGhW/image.png"
  },
  {
    slug: "classic-golden-horizon-stripe",
    title: "Classic Golden Horizon Stripe",
    brand: "Hulegeb",
    sku: "HLG-FAB-028",
    price: 1800,
    currency: "ETB",
    short_description: "1m×9m handwoven drapes in Ethiopian motifs or contemporary patterns. Customizable.",
    description: "<p>Classic Golden Horizon Stripe</p><ul><li>Fabric Type: Hand woven cotton thread</li><li>Color: Natural Cotton White</li><li>Stripe: Golden Yellow</li><li>Texture: soft, Medium-weight fabric, Soft yet durable</li><li>Best Use: traditional shawls, prayer cloths, table covers</li><li>Style: Bright, elegant, neat</li></ul>",
    inventory: 150,
    default_variant: "standard",
    variants: [
      { slug: "standard", name: "Standard 1m×9m", price: 1800, inventory: 150, hex: "#D8C9B3", images: ["front", "45"] }
    ],
    attributes: { size: "1m x 9m", material: "handwoven cotton" },
    image: "https://i.postimg.cc/0N15KtNk/image.png"
  },
  {
    slug: "golden-sunrise-multistripe",
    title: "Golden Sunrise Multistripe",
    brand: "Hulegeb",
    sku: "HLG-FAB-029",
    price: 1800,
    currency: "ETB",
    short_description: "1m×9m handwoven drapes in Ethiopian motifs or contemporary patterns. Customizable.",
    description: "<p>Golden Sunrise Multistripe</p><ul><li>Fabric Type: Hand woven cotton thread</li><li>Color: Warm Yellow</li><li>Stripe: Light Blue, Brown, Mustard</li><li>Texture: Fine multicolor, Lightweight to medium-weight</li><li>Best Use: for scarves, shawls, wraps, table covers, or decorative textiles</li><li>Style: Bright, elegant, neat, Soft unfinished woven edge</li></ul>",
    inventory: 150,
    default_variant: "standard",
    variants: [
      { slug: "standard", name: "Standard 1m×9m", price: 1800, inventory: 150, hex: "#D8C9B3", images: ["front", "45"] }
    ],
    attributes: { size: "1m x 9m", material: "handwoven cotton" },
    image: "https://i.postimg.cc/W322Xhry/image.png"
  },
  {
    slug: "vibrant-heritage-striped",
    title: "Vibrant Heritage Striped",
    brand: "Hulegeb",
    sku: "HLG-FAB-030",
    price: 1800,
    currency: "ETB",
    short_description: "1m×9m handwoven drapes in Ethiopian motifs or contemporary patterns. Customizable.",
    description: "<p>Vibrant Heritage Striped</p><ul><li>Fabric Type: Hand woven cotton thread</li><li>Color: Vibrant Red, Deep Green, and Golden Yellow</li><li>Stripe: Multicolored stripes</li><li>Texture: Visible weave structure indicating traditional loom work</li><li>Best Use: shawl, table runner, or wall hanging</li><li>Style: Colorful, geometric rhythm, neat, Soft unfinished woven edge</li></ul>",
    inventory: 150,
    default_variant: "standard",
    variants: [
      { slug: "standard", name: "Standard 1m×9m", price: 1800, inventory: 150, hex: "#D8C9B3", images: ["front", "45"] }
    ],
    attributes: { size: "1m x 9m", material: "handwoven cotton" },
    image: "https://i.postimg.cc/gJNG5mH6/image.png"
  },
  {
    slug: "rainbow-hand-woven",
    title: "Rainbow hand-woven",
    brand: "Hulegeb",
    sku: "HLG-FAB-031",
    price: 1800,
    currency: "ETB",
    short_description: "1m×9m handwoven drapes in Ethiopian motifs or contemporary patterns. Customizable.",
    description: "<p>Rainbow hand-woven</p><ul><li>Fabric Type: Hand woven cotton thread</li><li>Color: Vibrant Red, Deep Green, and Golden Yellow</li><li>Stripe: Soft Pink, Orange, and Clean White</li><li>Texture: Visible weave structure indicating traditional loom work</li><li>Best Use: shawl, blanket, or decorative throw</li><li>Style: Colorful, geometric rhythm, neat, Soft unfinished woven edge</li></ul>",
    inventory: 150,
    default_variant: "standard",
    variants: [
      { slug: "standard", name: "Standard 1m×9m", price: 1800, inventory: 150, hex: "#D8C9B3", images: ["front", "45"] }
    ],
    attributes: { size: "1m x 9m", material: "handwoven cotton" },
    image: "https://i.postimg.cc/hvYcDswR/image.png"
  },
  {
    slug: "wolo-green-field",
    title: "Wolo Green Field",
    brand: "Hulegeb",
    sku: "HLG-FAB-032",
    price: 1800,
    currency: "ETB",
    short_description: "1m×9m handwoven drapes in Ethiopian motifs or contemporary patterns. Customizable.",
    description: "<p>Wolo Green Field</p><ul><li>Fabric Type: Hand woven cotton thread</li><li>Color: Deep Emerald Green</li><li>Stripe: Vibrant Red and Golden Yellow</li><li>Texture: Soft, Clear separation, Medium Weight</li><li>Best Use: shawl, table runner, or wall hanging</li><li>Style: Colorful, geometric rhythm, neat, Soft unfinished woven edge</li></ul>",
    inventory: 150,
    default_variant: "standard",
    variants: [
      { slug: "standard", name: "Standard 1m×9m", price: 1800, inventory: 150, hex: "#D8C9B3", images: ["front", "45"] }
    ],
    attributes: { size: "1m x 9m", material: "handwoven cotton" },
    image: "https://i.postimg.cc/FsfhWtdh/image.png"
  },
  {
    slug: "addis-sunshine",
    title: "Addis Sunshine",
    brand: "Hulegeb",
    sku: "HLG-FAB-033",
    price: 1800,
    currency: "ETB",
    short_description: "1m×9m handwoven drapes in Ethiopian motifs or contemporary patterns. Customizable.",
    description: "<p>Addis Sunshine</p><ul><li>Fabric Type: Hand woven cotton thread</li><li>Color: Bright Golden Yellow</li><li>Stripe: Deep Red and Vibrant Green</li><li>Texture: Soft, breathable, and lightweight</li><li>Best Use: church services</li><li>Style: Colorful, neat, Soft unfinished woven edge</li></ul>",
    inventory: 150,
    default_variant: "standard",
    variants: [
      { slug: "standard", name: "Standard 1m×9m", price: 1800, inventory: 150, hex: "#D8C9B3", images: ["front", "45"] }
    ],
    attributes: { size: "1m x 9m", material: "handwoven cotton" },
    image: "https://i.postimg.cc/JhQ8DMgd/image.png"
  },
  {
    slug: "gray-tibeb",
    title: "Gray Tibeb",
    brand: "Hulegeb",
    sku: "HLG-FAB-034",
    price: 1800,
    currency: "ETB",
    short_description: "1m×9m handwoven drapes in Ethiopian motifs or contemporary patterns. Customizable.",
    description: "<p>Gray Tibeb</p><ul><li>Fabric Type: Hand woven cotton thread</li><li>Color: Soft Light Gray</li><li>Stripe: Royal Blue, Golden Yellow, and Black</li><li>Texture: Soft, breathable, and lightweight</li><li>Best Use: Shawl, scarf</li><li>Style: Colorful, neat, Soft unfinished woven edge</li></ul>",
    inventory: 150,
    default_variant: "standard",
    variants: [
      { slug: "standard", name: "Standard 1m×9m", price: 1800, inventory: 150, hex: "#D8C9B3", images: ["front", "45"] }
    ],
    attributes: { size: "1m x 9m", material: "handwoven cotton" },
    image: "https://i.postimg.cc/RhWxDf0L/image.png"
  },
  {
    slug: "royal-tricolor",
    title: "Royal Tricolor",
    brand: "Hulegeb",
    sku: "HLG-FAB-035",
    price: 1800,
    currency: "ETB",
    short_description: "1m×9m handwoven drapes in Ethiopian motifs or contemporary patterns. Customizable.",
    description: "<p>Royal Tricolor</p><ul><li>Fabric Type: Hand woven cotton thread</li><li>Color: Crisp White / Natural Cotton</li><li>Stripe: Vibrant Red, Golden Yellow, and Deep Green</li><li>Texture: Medium-weight fabric with a soft, breathable feel</li><li>Best Use: Shawl, scarf, Gabi</li><li>Style: Colorful, neat Edge, Soft unfinished tight weave</li></ul>",
    inventory: 150,
    default_variant: "standard",
    variants: [
      { slug: "standard", name: "Standard 1m×9m", price: 1800, inventory: 150, hex: "#D8C9B3", images: ["front", "45"] }
    ],
    attributes: { size: "1m x 9m", material: "handwoven cotton" },
    image: "https://i.postimg.cc/dQfYTWWN/image.png"
  },
  {
    slug: "blue-nile-bundle",
    title: "Blue Nile Bundle",
    brand: "Hulegeb",
    sku: "HLG-FAB-036",
    price: 1800,
    currency: "ETB",
    short_description: "1m×9m handwoven drapes in Ethiopian motifs or contemporary patterns. Customizable.",
    description: "<p>Blue Nile Bundle</p><ul><li>Fabric Type: Hand woven cotton thread</li><li>Color: Indigo Blue, Earthy Brown, and Natural White</li><li>Stripe: Various colored stripes</li><li>Texture: Medium-weight, durable</li><li>Best Use: Shawl, scarf, Gabi</li><li>Style: Colorful, neat Edge, Soft unfinished tight weave</li></ul>",
    inventory: 150,
    default_variant: "standard",
    variants: [
      { slug: "standard", name: "Standard 1m×9m", price: 1800, inventory: 150, hex: "#D8C9B3", images: ["front", "45"] }
    ],
    attributes: { size: "1m x 9m", material: "handwoven cotton" },
    image: "https://i.postimg.cc/ZRqGW364/image.png"
  },
  {
    slug: "jano-grid",
    title: "Jano Grid",
    brand: "Hulegeb",
    sku: "HLG-FAB-037",
    price: 1800,
    currency: "ETB",
    short_description: "1m×9m handwoven drapes in Ethiopian motifs or contemporary patterns. Customizable.",
    description: "<p>Jano Grid</p><ul><li>Fabric Type: Hand woven cotton thread</li><li>Color: Golden Yellow, Earthy Brown, and Deep</li><li>Stripe: Various colored stripes</li><li>Texture: Substantial-weight, grid pattern</li><li>Best Use: Home decor</li><li>Style: Intricate weaving, with a structured geometric appearance</li></ul>",
    inventory: 150,
    default_variant: "standard",
    variants: [
      { slug: "standard", name: "Standard 1m×9m", price: 1800, inventory: 150, hex: "#D8C9B3", images: ["front", "45"] }
    ],
    attributes: { size: "1m x 9m", material: "handwoven cotton" },
    image: "https://i.postimg.cc/ZRqGW364/image.png"
  },
  {
    slug: "classic-blue",
    title: "Classic Blue",
    brand: "Hulegeb",
    sku: "HLG-FAB-038",
    price: 1800,
    currency: "ETB",
    short_description: "1m×9m handwoven drapes in Ethiopian motifs or contemporary patterns. Customizable.",
    description: "<p>Classic Blue</p><ul><li>Fabric Type: Hand woven cotton thread</li><li>Color: Crisp White / Natural Cotton</li><li>Stripe: Deep Blue (or Indigo)</li><li>Texture: Multipurpose soft, Lightweight and breathable</li><li>Best Use: Shawl, scarf, gabi</li><li>Style: Clean, fresh, and classic with a high-contrast border</li></ul>",
    inventory: 150,
    default_variant: "standard",
    variants: [
      { slug: "standard", name: "Standard 1m×9m", price: 1800, inventory: 150, hex: "#D8C9B3", images: ["front", "45"] }
    ],
    attributes: { size: "1m x 9m", material: "handwoven cotton" },
    image: "https://i.postimg.cc/C53XrQXh/image.png"
  },
  {
    slug: "rift-valley",
    title: "Rift Valley",
    brand: "Hulegeb",
    sku: "HLG-FAB-039",
    price: 1800,
    currency: "ETB",
    short_description: "1m×9m handwoven drapes in Ethiopian motifs or contemporary patterns. Customizable.",
    description: "<p>Rift Valley</p><ul><li>Fabric Type: Hand woven cotton thread</li><li>Color: Light Brown / Tan (Natural Earth Tone)</li><li>Stripe: Soft Pink, Light Blue, and White</li><li>Texture: Rusting cotton, medium weight, loose weave</li><li>Best Use: Light blanket, shawl, or wrap</li><li>Style: Clean, fresh, and classic with a high-contrast border</li></ul>",
    inventory: 150,
    default_variant: "standard",
    variants: [
      { slug: "standard", name: "Standard 1m×9m", price: 1800, inventory: 150, hex: "#D8C9B3", images: ["front", "45"] }
    ],
    attributes: { size: "1m x 9m", material: "handwoven cotton" },
    image: "https://i.postimg.cc/Qd3xH4Cr/image.png"
  },
  {
    slug: "tana-golden-blue",
    title: "Tana Golden Blue",
    brand: "Hulegeb",
    sku: "HLG-FAB-040",
    price: 1800,
    currency: "ETB",
    short_description: "1m×9m handwoven drapes in Ethiopian motifs or contemporary patterns. Customizable.",
    description: "<p>Tana Golden Blue</p><ul><li>Fabric Type: Hand woven cotton thread</li><li>Color: Crisp White / Natural Cotton</li><li>Stripe: Royal Blue and Golden Yellow</li><li>Texture: Fine, Lightweight and breathable</li><li>Best Use: Netela, Gabi, shawl, or wrap</li><li>Style: Clean, fresh, and classic with a high-contrast border</li></ul>",
    inventory: 150,
    default_variant: "standard",
    variants: [
      { slug: "standard", name: "Standard 1m×9m", price: 1800, inventory: 150, hex: "#D8C9B3", images: ["front", "45"] }
    ],
    attributes: { size: "1m x 9m", material: "handwoven cotton" },
    image: "https://i.postimg.cc/7LBxtqVD/image.png"
  },
  {
    slug: "fikir-blue-line",
    title: "Fikir Blue Line",
    brand: "Hulegeb",
    sku: "HLG-FAB-041",
    price: 1800,
    currency: "ETB",
    short_description: "1m×9m handwoven drapes in Ethiopian motifs or contemporary patterns. Customizable.",
    description: "<p>Fikir Blue Line</p><ul><li>Fabric Type: Hand woven cotton thread</li><li>Color: Crisp White / Natural Cotton</li><li>Stripe: Deep Blue (Indigo)</li><li>Texture: Lightweight and breathable</li><li>Best Use: Light blanket, shawl, Gabi, Netela</li><li>Style: Clean, fresh, and classic with a high-contrast border</li></ul>",
    inventory: 150,
    default_variant: "standard",
    variants: [
      { slug: "standard", name: "Standard 1m×9m", price: 1800, inventory: 150, hex: "#D8C9B3", images: ["front", "45"] }
    ],
    attributes: { size: "1m x 9m", material: "handwoven cotton" },
    image: "https://i.postimg.cc/wjgg614v/image.png"
  },
  {
    slug: "dallol-vibrant-orange",
    title: "Dallol Vibrant Orange",
    brand: "Hulegeb",
    sku: "HLG-FAB-042",
    price: 1800,
    currency: "ETB",
    short_description: "1m×9m handwoven drapes in Ethiopian motifs or contemporary patterns. Customizable.",
    description: "<p>Dallol Vibrant Orange</p><ul><li>Fabric Type: Hand woven cotton thread</li><li>Color: Crisp White / Natural Cotton</li><li>Stripe: Vibrant Orange</li><li>Texture: Soft, breathable, lightweight</li><li>Best Use: Light blanket, shawl, or wrap</li><li>Style: Neat, Clean, fresh, and classic with a high-contrast border</li></ul>",
    inventory: 150,
    default_variant: "standard",
    variants: [
      { slug: "standard", name: "Standard 1m×9m", price: 1800, inventory: 150, hex: "#D8C9B3", images: ["front", "45"] }
    ],
    attributes: { size: "1m x 9m", material: "handwoven cotton" },
    image: "https://i.postimg.cc/LXYMyLhp/image.png"
  },
  {
    slug: "saba-pure-white",
    title: "Saba Pure White",
    brand: "Hulegeb",
    sku: "HLG-FAB-043",
    price: 1800,
    currency: "ETB",
    short_description: "1m×9m handwoven drapes in Ethiopian motifs or contemporary patterns. Customizable.",
    description: "<p>Saba Pure White</p><ul><li>Fabric Type: Hand woven cotton thread</li><li>Color: Pure White / Natural Cotton</li><li>Stripe: Clean, bright, and minimalist</li><li>Texture: Soft, Lightweight, airy and breathable</li><li>Best Use: Netela, shawl, or wrap</li><li>Style: Clean, fresh, and classic with a high-contrast border</li></ul>",
    inventory: 150,
    default_variant: "standard",
    variants: [
      { slug: "standard", name: "Standard 1m×9m", price: 1800, inventory: 150, hex: "#D8C9B3", images: ["front", "45"] }
    ],
    attributes: { size: "1m x 9m", material: "handwoven cotton" },
    image: "https://i.postimg.cc/0yVRPcJW/image.png"
  },
  {
    slug: "adey-bloom",
    title: "Adey Bloom",
    brand: "Hulegeb",
    sku: "HLG-FAB-044",
    price: 1800,
    currency: "ETB",
    short_description: "1m×9m handwoven drapes in Ethiopian motifs or contemporary patterns. Customizable.",
    description: "<p>Adey Bloom</p><ul><li>Fabric Type: Hand woven cotton thread</li><li>Color: Crisp White</li><li>Stripe: Vibrant Golden Yellow</li><li>Texture: Soft, Lightweight, airy and breathable</li><li>Best Use: Netela, shawl, or wrap</li><li>Style: Clean, fresh, and elegance and suitable for daily wear</li></ul>",
    inventory: 150,
    default_variant: "standard",
    variants: [
      { slug: "standard", name: "Standard 1m×9m", price: 1800, inventory: 150, hex: "#D8C9B3", images: ["front", "45"] }
    ],
    attributes: { size: "1m x 9m", material: "handwoven cotton" },
    image: "https://i.postimg.cc/j5JG6T3c/image.png"
  },
  {
    slug: "abyssinian-rose",
    title: "Abyssinian Rose",
    brand: "Hulegeb",
    sku: "HLG-FAB-045",
    price: 1800,
    currency: "ETB",
    short_description: "1m×9m handwoven drapes in Ethiopian motifs or contemporary patterns. Customizable.",
    description: "<p>Abyssinian Rose</p><ul><li>Fabric Type: Hand woven cotton thread</li><li>Color: Soft Beige / Light Cream (Natural Cotton)</li><li>Stripe: Delicate Pastel Pink</li><li>Texture: Lightweight and breathable</li><li>Best Use: Scarf or shawl, Home décor</li><li>Style: Casual elegance and suitable for daily wear</li></ul>",
    inventory: 150,
    default_variant: "standard",
    variants: [
      { slug: "standard", name: "Standard 1m×9m", price: 1800, inventory: 150, hex: "#D8C9B3", images: ["front", "45"] }
    ],
    attributes: { size: "1m x 9m", material: "handwoven cotton" },
    image: "https://i.postimg.cc/BbTkyg0k/image.png"
  },
  {
    slug: "green-lion-heritage",
    title: "Green Lion Heritage",
    brand: "Hulegeb",
    sku: "HLG-FAB-046",
    price: 1800,
    currency: "ETB",
    short_description: "1m×9m handwoven drapes in Ethiopian motifs or contemporary patterns. Customizable.",
    description: "<p>Green Lion Heritage</p><ul><li>Fabric Type: Hand woven cotton thread</li><li>Color: Crisp White / Natural Cotton</li><li>Stripe: Vibrant Red and Deep Green</li><li>Texture: Lightweight and breathable soft to touch</li><li>Best Use: Scarf, Netela shawl, Home décor</li><li>Style: Casual elegance and suitable for daily wear</li></ul>",
    inventory: 150,
    default_variant: "standard",
    variants: [
      { slug: "standard", name: "Standard 1m×9m", price: 1800, inventory: 150, hex: "#D8C9B3", images: ["front", "45"] }
    ],
    attributes: { size: "1m x 9m", material: "handwoven cotton" },
    image: "https://i.postimg.cc/3rXq3nsy/image.png"
  },
  {
    slug: "wello-sunset",
    title: "Wello Sunset",
    brand: "Hulegeb",
    sku: "HLG-FAB-047",
    price: 1800,
    currency: "ETB",
    short_description: "1m×9m handwoven drapes in Ethiopian motifs or contemporary patterns. Customizable.",
    description: "<p>Wello Sunset</p><ul><li>Fabric Type: Hand woven cotton thread</li><li>Color: Crisp White / Natural Cotton</li><li>Stripe: Vibrant Orange</li><li>Texture: Soft, breathable, and lightweight, smooth</li><li>Best Use: Scarf, Netela shawl, Home décor</li><li>Style: Decorative tassels, Neat trimming, Traditional detail</li></ul>",
    inventory: 150,
    default_variant: "standard",
    variants: [
      { slug: "standard", name: "Standard 1m×9m", price: 1800, inventory: 150, hex: "#D8C9B3", images: ["front", "45"] }
    ],
    attributes: { size: "1m x 9m", material: "handwoven cotton" },
    image: "https://i.postimg.cc/0QgtswZ4/image.png"
  },
  {
    slug: "arisi-highland-green",
    title: "Arisi Highland Green",
    brand: "Hulegeb",
    sku: "HLG-FAB-048",
    price: 1800,
    currency: "ETB",
    short_description: "1m×9m handwoven drapes in Ethiopian motifs or contemporary patterns. Customizable.",
    description: "<p>Arisi Highland Green</p><ul><li>Fabric Type: Hand woven cotton thread</li><li>Color: Pure White / Natural Cotton</li><li>Stripe: Deep Green and Royal Blue</li><li>Texture: Soft, Even weave, Breathable fabric</li><li>Best Use: Scarf, Netela shawl, Home décor</li><li>Style: Dual-stripe pattern, Balanced geometry, Harmonious contrast</li></ul>",
    inventory: 150,
    default_variant: "standard",
    variants: [
      { slug: "standard", name: "Standard 1m×9m", price: 1800, inventory: 150, hex: "#D8C9B3", images: ["front", "45"] }
    ],
    attributes: { size: "1m x 9m", material: "handwoven cotton" },
    image: "https://i.postimg.cc/Fsg1g52D/image.png"
  },
  {
    slug: "enku-yellow",
    title: "Enku Yellow",
    brand: "Hulegeb",
    sku: "HLG-FAB-049",
    price: 1800,
    currency: "ETB",
    short_description: "1m×9m handwoven drapes in Ethiopian motifs or contemporary patterns. Customizable.",
    description: "<p>Enku Yellow</p><ul><li>Fabric Type: Hand woven cotton thread</li><li>Color: Crisp White / Natural Cotton</li><li>Stripe: Vibrant Yellow</li><li>Texture: Soft, Even weave, Breathable fabric</li><li>Best Use: Scarf, Netela shawl, Home décor</li><li>Style: Artisanal detail, Balanced geometry, Neat edges</li></ul>",
    inventory: 150,
    default_variant: "standard",
    variants: [
      { slug: "standard", name: "Standard 1m×9m", price: 1800, inventory: 150, hex: "#D8C9B3", images: ["front", "45"] }
    ],
    attributes: { size: "1m x 9m", material: "handwoven cotton" },
    image: "https://i.postimg.cc/Y2QSMBqM/image.png"
  },
  {
    slug: "axum-royal-blue",
    title: "Axum Royal Blue",
    brand: "Hulegeb",
    sku: "HLG-FAB-050",
    price: 1800,
    currency: "ETB",
    short_description: "1m×9m handwoven drapes in Ethiopian motifs or contemporary patterns. Customizable.",
    description: "<p>Axum Royal Blue</p><ul><li>Fabric Type: Hand woven cotton thread</li><li>Color: Pure White / Natural Cotton</li><li>Stripe: Royal Blue</li><li>Texture: Hand-woven, Breathable weave, Smooth finish, Loom-crafted</li><li>Best Use: Scarf, Netela shawl, Home décor</li><li>Style: Artisanal detail, Balanced geometry, Neat edges</li></ul>",
    inventory: 150,
    default_variant: "standard",
    variants: [
      { slug: "standard", name: "Standard 1m×9m", price: 1800, inventory: 150, hex: "#D8C9B3", images: ["front", "45"] }
    ],
    attributes: { size: "1m x 9m", material: "handwoven cotton" },
    image: "https://i.postimg.cc/L5VRfRnZ/image.png"
  },
  {
    slug: "highland-mist",
    title: "Highland Mist",
    brand: "Hulegeb",
    sku: "HLG-BDC-051",
    price: 1800,
    currency: "ETB",
    short_description: "1m×9m handwoven drapes in Ethiopian motifs or contemporary patterns. Customizable.",
    description: "<p>Highland Mist</p><ul><li>Fabric Type: Hand woven Cotton Fabric</li><li>Color: Soft Heathered Gray / Charcoal and Natural White blend</li><li>Stripe: Whites breaking through the gray</li><li>Texture: Thicker, blanket-like cloth, Soft yet dense</li><li>Best Use: Bedding and curtain</li><li>Style: Elegant Minimal, Traditional- Modern Blend</li></ul>",
    inventory: 150,
    default_variant: "standard",
    variants: [
      { slug: "standard", name: "Standard 1m×9m", price: 1800, inventory: 150, hex: "#D8C9B3", images: ["front", "45"] }
    ],
    attributes: { size: "1m x 9m", material: "handwoven cotton" },
    image: "https://i.postimg.cc/8PPg327H/image.png"
  },
  {
    slug: "buna-earth-brown",
    title: "Buna Earth Brown",
    brand: "Hulegeb",
    sku: "HLG-BDC-052",
    price: 1800,
    currency: "ETB",
    short_description: "1m×9m handwoven drapes in Ethiopian motifs or contemporary patterns. Customizable.",
    description: "<p>Buna Earth Brown</p><ul><li>Fabric Type: Hand woven Cotton Fabric</li><li>Color: Rich Earthy Brown / Tan</li><li>Stripe: Light Natural Stripes (Beige/White)</li><li>Texture: Medium-weight fabric with a sturdy, tactile feel</li><li>Best Use: Bedding and curtain</li><li>Style: Durable, Traditional- Modern Blend, Home décor</li></ul>",
    inventory: 150,
    default_variant: "standard",
    variants: [
      { slug: "standard", name: "Standard 1m×9m", price: 1800, inventory: 150, hex: "#D8C9B3", images: ["front", "45"] }
    ],
    attributes: { size: "1m x 9m", material: "handwoven cotton" },
    image: "https://i.postimg.cc/Rhgy40WW/image.png"
  },
  {
    slug: "golden-morning",
    title: "Golden Morning",
    brand: "Hulegeb",
    sku: "HLG-BDC-053",
    price: 1800,
    currency: "ETB",
    short_description: "1m×9m handwoven drapes in Ethiopian motifs or contemporary patterns. Customizable.",
    description: "<p>Golden Morning</p><ul><li>Fabric Type: Hand woven Cotton Fabric</li><li>Color: Pale Yellow / Soft Butter</li><li>Stripe: Brighter Yellow and Clean White</li><li>Texture: Smooth surface, Natural drape, Fresh finish</li><li>Best Use: Bedding and curtain</li><li>Style: Durable, Traditional- Modern Blend, Home décor</li></ul>",
    inventory: 150,
    default_variant: "standard",
    variants: [
      { slug: "standard", name: "Standard 1m×9m", price: 1800, inventory: 150, hex: "#D8C9B3", images: ["front", "45"] }
    ],
    attributes: { size: "1m x 9m", material: "handwoven cotton" },
    image: "https://i.postimg.cc/3rtcydwB/image.png"
  },
  {
    slug: "buna-indigo",
    title: "Buna Indigo",
    brand: "Hulegeb",
    sku: "HLG-BDC-054",
    price: 1800,
    currency: "ETB",
    short_description: "1m×9m handwoven drapes in Ethiopian motifs or contemporary patterns. Customizable.",
    description: "<p>Buna</p><ul><li>Fabric Type: Hand woven Cotton Fabric</li><li>Color: Crisp White / Natural Cotton</li><li>Stripe: Deep Indigo Blue and Earthy Brown</li><li>Texture: Light to medium weight, Loom-finished</li><li>Best Use: Bedding and curtain</li><li>Style: Durable, Traditional- Modern Blend, Home décor</li></ul>",
    inventory: 150,
    default_variant: "standard",
    variants: [
      { slug: "standard", name: "Standard 1m×9m", price: 1800, inventory: 150, hex: "#D8C9B3", images: ["front", "45"] }
    ],
    attributes: { size: "1m x 9m", material: "handwoven cotton" },
    image: "https://i.postimg.cc/qRk1qTV5/image.png"
  },
  {
    slug: "desta-stripe",
    title: "Desta Stripe",
    brand: "Hulegeb",
    sku: "HLG-BDC-055",
    price: 1800,
    currency: "ETB",
    short_description: "1m×9m handwoven drapes in Ethiopian motifs or contemporary patterns. Customizable.",
    description: "<p>Desta Stripe</p><ul><li>Fabric Type: Hand woven Cotton Fabric</li><li>Color: Vibrant Yellow and Red</li><li>Stripe: Multicolored stripes including Green and other tones</li><li>Texture: Visible weave, Soft yet sturdy, Natural finish</li><li>Best Use: Bedding and curtain</li><li>Style: Durable, Traditional- Modern Blend, Home décor</li></ul>",
    inventory: 150,
    default_variant: "standard",
    variants: [
      { slug: "standard", name: "Standard 1m×9m", price: 1800, inventory: 150, hex: "#D8C9B3", images: ["front", "45"] }
    ],
    attributes: { size: "1m x 9m", material: "handwoven cotton" },
    image: "https://i.postimg.cc/65DzRRxR/image.png"
  },
  {
    slug: "harar-earth",
    title: "Harar Earth",
    brand: "Hulegeb",
    sku: "HLG-BDC-056",
    price: 1800,
    currency: "ETB",
    short_description: "1m×9m handwoven drapes in Ethiopian motifs or contemporary patterns. Customizable.",
    description: "<p>Harar Earth</p><ul><li>Fabric Type: Hand woven Cotton Fabric</li><li>Color: Earthy Brown and Natural White</li><li>Stripe: Multicolored stripes including Green and other tones</li><li>Texture: Soft and breathable, slight relief, adding tactile depth</li><li>Best Use: Home décor, Bedding and curtain</li><li>Style: Durable, Traditional- Modern Blend</li></ul>",
    inventory: 150,
    default_variant: "standard",
    variants: [
      { slug: "standard", name: "Standard 1m×9m", price: 1800, inventory: 150, hex: "#D8C9B3", images: ["front", "45"] }
    ],
    attributes: { size: "1m x 9m", material: "handwoven cotton" },
    image: "https://i.postimg.cc/LsSTQpXd/image.png"
  },
  {
    slug: "tizita-soft-stripe",
    title: "Tizita Soft Stripe",
    brand: "Hulegeb",
    sku: "HLG-BDC-057",
    price: 1800,
    currency: "ETB",
    short_description: "1m×9m handwoven drapes in Ethiopian motifs or contemporary patterns. Customizable.",
    description: "<p>Tizita Soft Stripe</p><ul><li>Fabric Type: Hand woven Cotton Fabric</li><li>Color: Light Beige / Pale Yellow</li><li>Stripe: Soft Yellow (monochromatic stripe)</li><li>Texture: Smooth finish, Natural feel, Soft drape</li><li>Best Use: Home décor, Bedding and curtain</li><li>Style: Durable, Traditional- Modern Blend</li></ul>",
    inventory: 150,
    default_variant: "standard",
    variants: [
      { slug: "standard", name: "Standard 1m×9m", price: 1800, inventory: 150, hex: "#D8C9B3", images: ["front", "45"] }
    ],
    attributes: { size: "1m x 9m", material: "handwoven cotton" },
    image: "https://i.postimg.cc/3NkC0rL0/image.png"
  },
  {
    slug: "vertical-mist",
    title: "Vertical Mist",
    brand: "Hulegeb",
    sku: "HLG-BDC-058",
    price: 1800,
    currency: "ETB",
    short_description: "1m×9m handwoven drapes in Ethiopian motifs or contemporary patterns. Customizable.",
    description: "<p>Vertical Mist</p><ul><li>Fabric Type: Hand woven Cotton Fabric</li><li>Color: Natural White / Light Beige</li><li>Stripe: Darker lines creating the stripe effect</li><li>Texture: Even weave, Lightweight and breathable</li><li>Best Use: Home décor, Bedding and curtain, Versatile decor</li><li>Style: Raw edges Traditional Casual finish</li></ul>",
    inventory: 150,
    default_variant: "standard",
    variants: [
      { slug: "standard", name: "Standard 1m×9m", price: 1800, inventory: 150, hex: "#D8C9B3", images: ["front", "45"] }
    ],
    attributes: { size: "1m x 9m", material: "handwoven cotton" },
    image: "https://i.postimg.cc/MGtysfNs/image.png"
  },
  {
    slug: "golden-mountain",
    title: "Golden Mountain",
    brand: "Hulegeb",
    sku: "HLG-BDC-059",
    price: 1800,
    currency: "ETB",
    short_description: "1m×9m handwoven drapes in Ethiopian motifs or contemporary patterns. Customizable.",
    description: "<p>Golden Mountain</p><ul><li>Fabric Type: Hand woven Cotton Fabric</li><li>Color: Warm Yellow / Gold</li><li>Stripe: Light Brown (Tan) and White</li><li>Texture: Medium-weight, Sturdy, Flexible drape, Natural finish</li><li>Best Use: Home décor, Bedding and curtain, Versatile decor</li><li>Style: Raw edges Traditional Casual finish</li></ul>",
    inventory: 150,
    default_variant: "standard",
    variants: [
      { slug: "standard", name: "Standard 1m×9m", price: 1800, inventory: 150, hex: "#D8C9B3", images: ["front", "45"] }
    ],
    attributes: { size: "1m x 9m", material: "handwoven cotton" },
    image: "https://i.postimg.cc/cJ1D4WNr/image.png"
  },
  {
    slug: "stone-plain",
    title: "Stone Plain",
    brand: "Hulegeb",
    sku: "HLG-BDC-060",
    price: 1800,
    currency: "ETB",
    short_description: "1m×9m handwoven drapes in Ethiopian motifs or contemporary patterns. Customizable.",
    description: "<p>Stone Plain</p><ul><li>Fabric Type: Hand woven Cotton Fabric</li><li>Color: Light Brown / Warm Tan</li><li>Visual tone: Earthy, neutral, and organic with a natural aesthetic</li><li>Texture: Tighter, smoother weave, Soft and supple, Medium weight</li><li>Best Use: Home décor, Bedding and curtain, Versatile decor</li><li>Style: Raw edges Traditional Casual finish</li></ul>",
    inventory: 150,
    default_variant: "standard",
    variants: [
      { slug: "standard", name: "Standard 1m×9m", price: 1800, inventory: 150, hex: "#D8C9B3", images: ["front", "45"] }
    ],
    attributes: { size: "1m x 9m", material: "handwoven cotton" },
    image: "https://i.postimg.cc/vBc3fvTV/image.png"
  },
  {
    slug: "gamo-fine-grid",
    title: "Gamo Fine Grid",
    brand: "Hulegeb",
    sku: "HLG-BDC-061",
    price: 1800,
    currency: "ETB",
    short_description: "1m×9m handwoven drapes in Ethiopian motifs or contemporary patterns. Customizable.",
    description: "<p>Gamo Fine Grid</p><ul><li>Fabric Type: Hand woven Cotton Fabric</li><li>Color: Soft Natural White / Pale Cream</li><li>Visual tone: Clean, airy, and fresh with a minimalist appeal</li><li>Texture: Lighter weight, Soft and breathable, Smooth finish</li><li>Best Use: Home décor, Bedding and curtain, Versatile decor</li><li>Style: Slightly rough edges</li></ul>",
    inventory: 150,
    default_variant: "standard",
    variants: [
      { slug: "standard", name: "Standard 1m×9m", price: 1800, inventory: 150, hex: "#D8C9B3", images: ["front", "45"] }
    ],
    attributes: { size: "1m x 9m", material: "handwoven cotton" },
    image: "https://i.postimg.cc/pT4kZn53/image.png"
  },
  {
    slug: "blue-nile-stripe-textile",
    title: "Blue Nile Stripe",
    brand: "Hulegeb",
    sku: "HLG-BDC-062",
    price: 1800,
    currency: "ETB",
    short_description: "1m×9m handwoven drapes in Ethiopian motifs or contemporary patterns. Customizable.",
    description: "<p>Blue Nile Stripe</p><ul><li>Fabric Type: Hand woven Cotton Fabric</li><li>Color: Crisp White / Natural Cotton</li><li>Stripe: Royal Blue and Golden Yellow</li><li>Texture: Soft and breathable, Natural finish</li><li>Best Use: Home décor, Bedding and curtain, Versatile decor</li><li>Style: Slightly rough edges</li></ul>",
    inventory: 150,
    default_variant: "standard",
    variants: [
      { slug: "standard", name: "Standard 1m×9m", price: 1800, inventory: 150, hex: "#D8C9B3", images: ["front", "45"] }
    ],
    attributes: { size: "1m x 9m", material: "handwoven cotton" },
    image: "https://i.postimg.cc/1t6V5TRb/image.png"
  },
  {
    slug: "yellow-thorn",
    title: "Yellow Thorn",
    brand: "Hulegeb",
    sku: "HLG-BDC-063",
    price: 1800,
    currency: "ETB",
    short_description: "1m×9m handwoven drapes in Ethiopian motifs or contemporary patterns. Customizable.",
    description: "<p>Yellow Thorn</p><ul><li>Fabric Type: Hand woven Cotton Fabric</li><li>Color: Crisp White / Natural Cotton</li><li>Accent colors: Royal Blue and Golden Yellow</li><li>Texture: Lightweight and breathable, Natural finish</li><li>Best Use: Home décor, Bedding and curtain, Versatile decor</li><li>Style: Fringe detail, Natural raw edges, Comfortable feel</li></ul>",
    inventory: 150,
    default_variant: "standard",
    variants: [
      { slug: "standard", name: "Standard 1m×9m", price: 1800, inventory: 150, hex: "#D8C9B3", images: ["front", "45"] }
    ],
    attributes: { size: "1m x 9m", material: "handwoven cotton" },
    image: "https://i.postimg.cc/HW86L3FR/image.png"
  },
  {
    slug: "sunshine-yellow",
    title: "Sunshine Yellow",
    brand: "Hulegeb",
    sku: "HLG-BDC-064",
    price: 1800,
    currency: "ETB",
    short_description: "1m×9m handwoven drapes in Ethiopian motifs or contemporary patterns. Customizable.",
    description: "<p>Sunshine Yellow</p><ul><li>Fabric Type: Hand woven Cotton Fabric</li><li>Color: Vibrant Yellow and Crisp White</li><li>Visual Tone: Sunny, bright, and cheerful</li><li>Texture: Breathable weave, Soft</li><li>Best Use: Home décor, Bedding and curtain, Versatile decor</li><li>Style: Broad horizontal stripes, flexibility, Casual elegance</li></ul>",
    inventory: 150,
    default_variant: "standard",
    variants: [
      { slug: "standard", name: "Standard 1m×9m", price: 1800, inventory: 150, hex: "#D8C9B3", images: ["front", "45"] }
    ],
    attributes: { size: "1m x 9m", material: "handwoven cotton" },
    image: "https://i.postimg.cc/HW86L3FR/image.png"
  },
  {
    slug: "white-harvest",
    title: "White Harvest",
    brand: "Hulegeb",
    sku: "HLG-BDC-065",
    price: 1800,
    currency: "ETB",
    short_description: "1m×9m handwoven drapes in Ethiopian motifs or contemporary patterns. Customizable.",
    description: "<p>White Harvest</p><ul><li>Fabric Type: Hand woven Cotton Fabric</li><li>Color: White, blue and red</li><li>Visual Tone: Warm, organic, and rustic</li><li>Texture: Medium-weight, grid weave, substantial, durable</li><li>Best Use: Home décor, Bedding and curtain, Versatile decor</li><li>Style: Broad horizontal stripes, flexibility, Casual elegance</li></ul>",
    inventory: 150,
    default_variant: "standard",
    variants: [
      { slug: "standard", name: "Standard 1m×9m", price: 1800, inventory: 150, hex: "#D8C9B3", images: ["front", "45"] }
    ],
    attributes: { size: "1m x 9m", material: "handwoven cotton" },
    image: "https://i.postimg.cc/8PhwRcpY/image.png"
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
