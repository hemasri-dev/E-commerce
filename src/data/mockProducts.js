export const mockProducts = [
  // Existing Electronics
  { id: 1, name: "Premium Wireless Headphones", price: 299.99, category: "Electronics", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80&crop=edges", description: "High-fidelity sound with active noise cancellation." },
  { id: 4, name: "Mechanical Gaming Keyboard", price: 129.99, category: "Electronics", image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=500&q=80", description: "Tactile switches with customizable RGB lighting." },
  { id: 9, name: "Professional Camera Lens", price: 899.99, category: "Electronics", image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&q=80", description: "Capture stunning portraits with beautiful bokeh and edge-to-edge sharpness." },
  
  // Existing Accessories
  { id: 2, name: "Minimalist Smartwatch", price: 199.50, category: "Accessories", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80", description: "Track your fitness and stay connected on the go." },
  { id: 6, name: "Leather Weekend Bag", price: 185.00, category: "Accessories", image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80", description: "Spacious and durable bag for your weekend getaways." },
  { id: 7, name: "Sleek Water Bottle", price: 35.00, category: "Accessories", image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&q=80", description: "Insulated stainless steel bottle keeps drinks cold for 24 hours." },
  
  // Existing Furniture
  { id: 3, name: "Ergonomic Office Chair", price: 450.00, category: "Furniture", image: "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=500&q=80", description: "Designed for all-day comfort and superb lumbar support." },
  { id: 12, name: "Modern Desk Lamp", price: 65.00, category: "Furniture", image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&q=80", description: "Minimalist desk lamp with adjustable brightness and color temperature." },
  
  // Existing Home
  { id: 5, name: "Ceramic Coffee Mug", price: 24.00, category: "Home", image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=500&q=80", description: "Handcrafted ceramic mug, perfect for your morning brew." },
  { id: 8, name: "Cozy Cotton Throw Pillow", price: 45.00, category: "Home", image: "https://images.unsplash.com/photo-1584063255673-c62534571ef9?w=500&q=80", description: "Soft, textured cotton pillow that adds a pop of color to any room." },
  { id: 11, name: "Natural Wax Candle", price: 28.50, category: "Home", image: "https://images.unsplash.com/photo-1603006905393-2ceca24ed52e?w=500&q=80", description: "Hand-poured candle with a soothing lavender and sandalwood scent." },
  { id: 16, name: "Woven Storage Basket", price: 38.00, category: "Home", image: "https://images.unsplash.com/photo-1510074377623-8cf13fb86c08?w=500&q=80", description: "Hand-woven seagrass basket perfect for stylish home organization." },
  { id: 17, name: "Abstract Line Art Print", price: 42.00, category: "Home", image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=500&q=80", description: "Minimalist framed art print to bring sophisticated style to your walls." },
  { id: 18, name: "Ceramic Vases Set", price: 85.00, category: "Home", image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=500&q=80", description: "Set of 3 matte ceramic vases, beautiful with or without botanicals." },

  // Existing Apparel
  { id: 10, name: "Classic Denim Jacket", price: 110.00, category: "Apparel", image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=500&q=80", description: "Timeless denim jacket, perfect for layering in any season." },
  { id: 13, name: "Essential Cotton T-Shirt", price: 22.00, category: "Apparel", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80", description: "Ultra-soft, breathable 100% organic cotton t-shirt for everyday wear." },
  { id: 14, name: "Vintage Oversized Hoodie", price: 55.00, category: "Apparel", image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&q=80", description: "Comfortable over-sized fit hoodie with premium fleece lining." },
  { id: 15, name: "Tailored Chino Pants", price: 68.00, category: "Apparel", image: "https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500&q=80", description: "Versatile chino pants that transition seamlessly from the office to the weekend." },

  // NEW Electronics
  { id: 19, name: "Ultra-Slim 4K Monitor", price: 349.00, category: "Electronics", image: "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?w=500&q=80", description: "Stunning 27-inch 4K resolution display with immersive color accuracy." },
  { id: 20, name: "Wireless Charging Pad", price: 45.00, category: "Electronics", image: "https://images.unsplash.com/photo-1622445275463-afa2ab738c34?w=500&q=80", description: "Fast-charging wireless pad featuring a sleek, low-profile design." },
  
  // NEW Accessories
  { id: 21, name: "Classic Polarized Sunglasses", price: 89.99, category: "Accessories", image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&q=80", description: "UV400 polarized lenses that reduce glare while offering timeless style." },
  { id: 22, name: "Genuine Leather Wallet", price: 64.00, category: "Accessories", image: "https://images.unsplash.com/photo-1627123424364-d621b1b31eec?w=500&q=80", description: "Slim bifold wallet crafted from full-grain leather with RFID blocking." },

  // NEW Furniture
  { id: 23, name: "Mid-Century TV Console", price: 320.00, category: "Furniture", image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=500&q=80", description: "Beautiful walnut finish console table with ample hidden storage." },
  { id: 24, name: "Velvet Accent Chair", price: 275.00, category: "Furniture", image: "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?w=500&q=80", description: "Plush velvet upholstery providing a luxurious touch to your living room." }
];

export const getCategories = () => {
  return ["All", ...new Set(mockProducts.map(p => p.category))];
};
