"use client";
import mobile from "../public/images/products/1.webp";
import laptop from "../public/images/products/2.webp";
import electric from "../public/images/products/3.webp";
import watch from "../public/images/products/6.webp";
import smartwatch from "../public/images/products/8.webp";
import tv from "../public/images/products/tv.webp";
import panjabi from "../public/images/products/panjabi.jpg";
import sandal from "../public/images/products/sandal.jpg";
import saree from "../public/images/products/saree.jpg";
import air_cooler from "../public/images/products/air-cooler.png";
import sandal2 from "../public/images/products/sandal2.jpeg";
import saree3 from "../public/images/products/saree3.jpg";
// import img1 from "../public/images/banners/1.png";
// import img2 from "../public/images/banners/2.png";
// import img3 from "../public/images/banners/3.png";
// import img4 from "../public/images/banners/4.png";
// import img5 from "../public/images/banners/5.png";
// import img6 from "../public/images/banners/6.png";
// import img7 from "../public/images/banners/7.png";
import banner2 from "../public/images/banners/2.jpg";
import bag from "../public/images/products/bag.jpg";
import speaker from "../public/images/products/speaker.webp";
import bedsheet from "../public/images/products/bedsheet.webp";
import pant from "../public/images/products/1.jpg";
import co_ords from "../public/images/products/2.jpg";
import lamp from "../public/images/products/lamp.jpg";
import panjabi2 from "../public/images/products/panjabi2.jpg";
import saree4 from "../public/images/products/saree3.jpg";
import saree2 from "../public/images/products/saree2.jpg";
import nakshi1 from "../public/images/products/nakshi.jpg";
import nakshi from "../public/images/products/nakshi2.jpg";
import kurti from "../public/images/products/kurti.jpg";
import kurti1 from "../public/images/products/kurti1.jpg";
import shirt from "../public/images/products/shirt.jpg";
import vase from "../public/images/products/vase.jpg";
import vase1 from "../public/images/products/vase1.jpg";
import dinner_set from "../public/images/products/dinner-set.jpg";
import scarf from "../public/images/products/scarf.jpg";
import clay from "../public/images/products/clay.webp";
import clock from "../public/images/products/clock.webp";
import bag1 from "../public/images/products/bag1.webp";
import bag2 from "../public/images/products/bag2.webp";
import saree5 from "../public/images/products/saree5.webp";
import basket from "../public/images/products/basket.webp";
import basket1 from "../public/images/products/basket1.webp";
import basket2 from "../public/images/products/basket2.webp";
import buds from "../public/images/products/buds.webp";
import panjabi3 from "../public/images/products/panjabi3.webp";
import panjabi4 from "../public/images/products/panjabi4.webp";
import wallet from "../public/images/products/wallet.webp";
import wallet1 from "../public/images/products/wallet1.webp";
import jeans from "../public/images/products/jeans.webp";
import laptop_sleeve from "../public/images/products/lp_bag.webp";
import cookware from "../public/images/products/cook.webp";
import laptop1 from "../public/images/products/laptop.png";
import fridge from "../public/images/products/fridge.png";
import rice_cooker from "../public/images/products/rice_cooker.jpeg";
import saree6 from "../public/images/matifashionhouse/5.jpg";
import saree7 from "../public/images/matifashionhouse/6.jpg";

import ornaments from "@/public/images/banners/ornaments.jpg";
import handicrafts from "@/public/images/banners/handicrafts.jpg";
import organicFood from "@/public/images/banners/organic-food.webp";
import ecoProducts from "@/public/images/banners/eco-products.webp";

// export const banners = [
//   {
//     image: img1,
//     title: "Big Festive Sale",
//     subtitle: "Up to 60% off on electronics",
//     cta: "Shop Now",
//   },
//   {
//     image: img2,
//     title: "Exclusive Fashion Deals",
//     subtitle: "Trendy styles for all seasons",
//     cta: "Explore",
//   },
//   {
//     image: img3,
//     title: "New Arrivals 2025",
//     subtitle: "Check out the latest products",
//     cta: "Discover",
//   },
//   {
//     image: img4,
//     title: "Big Festive Sale",
//     subtitle: "Up to 60% off on electronics",
//     cta: "Shop Now",
//   },
//   {
//     image: img5,
//     title: "Exclusive Fashion Deals",
//     subtitle: "Trendy styles for all seasons",
//     cta: "Explore",
//   },
//   {
//     image: img6,
//     title: "New Arrivals 2025",
//     subtitle: "Check out the latest products",
//     cta: "Discover",
//   },
//   {
//     image: img7,
//     title: "New Arrivals 2025",
//     subtitle: "Check out the latest products",
//     cta: "Discover",
//   },
// ];

// Featured Products
export const featuredProducts = [
  {
    id: 1,
    name: "Walton Primo H10 Smartphone",
    slug: "walton-primo-h10-smartphone",
    brand: "Walton",
    rating: 4.7,
    reviewsCount: 132,
    price: 15999,
    oldPrice: 17999,
    discount: 11,
    category: "Electronics",
    colors: [{ name: "Black" }, { name: "Blue" }, { name: "Silver" }],
    sizes: [],
    images: [mobile, mobile, mobile],
    description:
      "Walton Primo H10 offers a sleek design with a powerful processor and vivid HD display, ideal for multitasking.",
    stock: 45,
    isFeatured: true,
  },
  {
    id: 2,
    name: "Sonar Bangla Premium Analog Watch",
    slug: "sonar-bangla-premium-analog-watch",
    brand: "Sonar Bangla",
    rating: 4.6,
    reviewsCount: 84,
    price: 2890,
    oldPrice: 3490,
    discount: 17,
    category: "Accessories",
    colors: [{ name: "Black" }, { name: "Brown" }],
    sizes: [],
    images: [smartwatch, watch],
    description:
      "Elegant Bangladeshi-crafted analog watch with premium leather strap and minimalist design.",
    stock: 88,
    isFeatured: true,
  },
  {
    id: 3,
    name: "Vision 43 Smart Android LED TV",
    slug: "vision-43-smart-android-led-tv",
    brand: "Vision",
    rating: 4.8,
    reviewsCount: 102,
    price: 30990,
    oldPrice: 34990,
    discount: 11,
    category: "Home Appliances",
    colors: [{ name: "Black" }],
    sizes: ["43 Inch"],
    images: [tv, tv],
    description:
      "Full HD Android TV with smart voice control and crystal clear picture quality for your living room.",
    stock: 60,
    isFeatured: true,
  },
  {
    id: 4,
    name: "Walton Prelude N50 Laptop (Bangladesh Edition)",
    slug: "walton-prelude-n50-laptop-bangladesh-edition",
    brand: "Walton",
    rating: 4.9,
    reviewsCount: 94,
    price: 49990,
    oldPrice: 54990,
    discount: 9,
    category: "Computers",
    colors: [{ name: "Silver" }, { name: "Gray" }],
    sizes: [],
    images: [laptop1, laptop],
    description:
      "Bangladesh edition Walton Prelude N50 features a powerful CPU, SSD storage, and long-lasting battery.",
    stock: 25,
    isFeatured: true,
  },
  {
    id: 5,
    name: "Aarong Handcrafted Nakshi Kantha",
    slug: "aarong-handcrafted-nakshi-kantha",
    brand: "Aarong",
    rating: 4.9,
    reviewsCount: 220,
    price: 5490,
    oldPrice: 5990,
    discount: 8,
    category: "Handicrafts",
    colors: [{ name: "Multi-color" }],
    sizes: ["Queen", "Single"],
    images: [nakshi, nakshi1],
    description:
      "Traditional hand-stitched Nakshi Kantha made by rural Bangladeshi artisans using organic cotton.",
    stock: 42,
    isFeatured: true,
  },
  {
    id: 6,
    name: "Rang Boho Cotton Saree",
    slug: "rang-boho-cotton-saree",
    brand: "Rang",
    rating: 4.8,
    reviewsCount: 145,
    price: 2890,
    oldPrice: 3290,
    discount: 12,
    category: "Fashion",
    colors: [{ name: "Red" }, { name: "Mustard" }],
    sizes: [],
    images: [saree, saree],
    description:
      "A vibrant cotton saree inspired by Bangladeshi boho art, lightweight and perfect for summer.",
    stock: 60,
    isFeatured: true,
  },
  {
    id: 7,
    name: "Banglar Mrittika Clay Tea Set",
    slug: "banglar-mrittika-clay-tea-set",
    brand: "Banglar Mrittika",
    rating: 4.7,
    reviewsCount: 64,
    price: 1250,
    oldPrice: 1490,
    discount: 16,
    category: "Handicrafts",
    colors: [{ name: "Terracotta" }],
    sizes: ["6 pcs set"],
    images: [clay, clay],
    description:
      "Handmade clay tea set crafted with natural terracotta clay for an authentic Bangladeshi touch.",
    stock: 80,
    isFeatured: true,
  },
  {
    id: 8,
    name: "Jamuna Air Fryer 4.5L",
    slug: "jamuna-air-fryer-45l",
    brand: "Jamuna",
    rating: 4.7,
    reviewsCount: 76,
    price: 6900,
    oldPrice: 8490,
    discount: 19,
    category: "Kitchen Appliances",
    colors: [{ name: "Black" }, { name: "White" }],
    sizes: [],
    images: [electric, electric],
    description:
      "A 4.5L digital air fryer with rapid hot air circulation for healthy, oil-free cooking.",
    stock: 35,
    isFeatured: true,
  },
  {
    id: 9,
    name: "Deshi Craft Bamboo Lamp",
    slug: "deshi-craft-bamboo-lamp",
    brand: "Deshi Craft",
    rating: 4.8,
    reviewsCount: 91,
    price: 1590,
    oldPrice: 1890,
    discount: 15,
    category: "Home Decor",
    colors: [{ name: "Natural" }],
    sizes: [],
    images: [lamp, lamp],
    description:
      "Eco-friendly handcrafted bamboo lamp perfect for a warm, rustic interior ambiance.",
    stock: 47,
    isFeatured: true,
  },
  {
    id: 10,
    name: "Remi Cotton Pant",
    slug: "remi-cotton-pant",
    brand: "Feather Dolls",
    rating: 4.7,
    reviewsCount: 76,
    price: 1490,
    oldPrice: 1790,
    discount: 17,
    category: "Fashion",
    colors: [{ name: "Black" }, { name: "Beige" }],
    sizes: ["M", "L", "XL"],
    images: [pant, pant],
    description:
      "Soft cotton pants made in Bangladesh, ideal for comfort and daily wear in tropical weather.",
    stock: 35,
    isFeatured: true,
  },
  {
    id: 11,
    name: "Karukrit Wooden Wall Clock",
    slug: "karukrit-wooden-wall-clock",
    brand: "Karukrit",
    rating: 4.9,
    reviewsCount: 58,
    price: 1790,
    oldPrice: 2190,
    discount: 18,
    category: "Home Decor",
    colors: [{ name: "Natural Wood" }],
    sizes: [],
    images: [clock, clock],
    description:
      "Beautifully handcrafted wooden wall clock featuring rural art carvings from northern Bangladesh.",
    stock: 28,
    isFeatured: true,
  },
  {
    id: 12,
    name: "Bibiana Silk Panjabi",
    slug: "bibiana-silk-panjabi",
    brand: "Bibiana",
    rating: 4.8,
    reviewsCount: 110,
    price: 3490,
    oldPrice: 3890,
    discount: 10,
    category: "Fashion",
    colors: [{ name: "White" }, { name: "Navy" }],
    sizes: ["M", "L", "XL"],
    images: [panjabi2, panjabi],
    description:
      "Elegant silk Panjabi crafted by Bibiana, blending traditional design with modern tailoring.",
    stock: 55,
    isFeatured: true,
  },
  {
    id: 13,
    name: "Banglar Handloom Jute Bag",
    slug: "banglar-handloom-jute-bag",
    brand: "Banglar Handloom",
    rating: 4.6,
    reviewsCount: 74,
    price: 850,
    oldPrice: 1050,
    discount: 19,
    category: "Accessories",
    colors: [{ name: "Beige" }, { name: "Maroon" }],
    sizes: [],
    images: [bag1, bag2],
    description:
      "Stylish eco-friendly jute handbag made by rural women under fair-trade conditions.",
    stock: 95,
    isFeatured: true,
  },
  {
    id: 14,
    name: "Jamdani Heritage Saree",
    slug: "jamdani-heritage-saree",
    brand: "Heritage Weaves",
    rating: 4.9,
    reviewsCount: 130,
    price: 6890,
    oldPrice: 7490,
    discount: 8,
    category: "Fashion",
    colors: [{ name: "Sky Blue" }, { name: "Off White" }],
    sizes: [],
    images: [saree4, saree2],
    description:
      "Authentic handwoven Jamdani saree from Narayanganj looms — a timeless expression of Bangladeshi artistry.",
    stock: 40,
    isFeatured: true,
  },
  {
    id: 15,
    name: "Co-Ords Embroidery Remi cotton",
    slug: "co-ords-mbroidery-emi-cotton",
    brand: "Feather Dolls",
    rating: 4.7,
    reviewsCount: 98,
    price: 2390,
    oldPrice: 2690,
    discount: 11,
    category: "Fashion",
    colors: [{ name: "Dark Blue" }, { name: "Light Blue" }],
    sizes: ["30", "32", "34", "36"],
    images: [co_ords, co_ords],
    description:
      "Locally produced durable denim jeans with perfect fit and high-quality stitching made in Bangladesh.",
    stock: 65,
    isFeatured: true,
  },
];

// New Arrival Products
export const newArrivalProducts = [
  {
    id: 1,
    name: "Aarong Cotton Printed Kurti",
    slug: "aarong-cotton-printed-kurti",
    brand: "Aarong",
    category: "Fashion",
    rating: 4.8,
    reviewsCount: 88,
    price: 1850,
    discount: 10,
    colors: [{ name: "Blue" }, { name: "Maroon" }],
    sizes: ["S", "M", "L", "XL"],
    images: [kurti, kurti],
    description:
      "Beautiful hand-printed cotton kurti made by Bangladeshi artisans, perfect for casual and festive wear.",
    stock: 65,
    isNew: true,
  },
  {
    id: 2,
    name: "Rang Handwoven Cotton Shirt",
    slug: "rang-handwoven-cotton-shirt",
    brand: "Rang",
    category: "Fashion",
    rating: 4.7,
    reviewsCount: 52,
    price: 1550,
    colors: [{ name: "White" }, { name: "Sky Blue" }],
    sizes: ["M", "L", "XL"],
    images: [shirt, shirt],
    description:
      "Soft and breathable handwoven cotton shirt crafted with care for all-day comfort.",
    stock: 40,
    isNew: true,
  },
  {
    id: 3,
    name: "Walton Smart Bluetooth Speaker S5",
    slug: "walton-smart-bluetooth-speaker-s5",
    brand: "Walton",
    category: "Electronics",
    rating: 4.8,
    reviewsCount: 142,
    price: 2590,
    discount: 12,
    colors: [{ name: "Black" }, { name: "Gray" }],
    sizes: [],
    images: [speaker, speaker],
    description:
      "Compact wireless Bluetooth speaker with deep bass and long battery life, made in Bangladesh.",
    stock: 70,
    isNew: true,
  },
  {
    id: 4,
    name: "Jamuna Smart Rice Cooker 2.2L",
    slug: "jamuna-smart-rice-cooker-22l",
    brand: "Jamuna",
    category: "Home Appliances",
    rating: 4.6,
    reviewsCount: 64,
    price: 2890,
    discount: 15,
    colors: [{ name: "Red" }, { name: "Silver" }],
    sizes: [],
    images: [rice_cooker, rice_cooker],
    description:
      "Energy-efficient rice cooker with smart heating technology and automatic keep-warm function.",
    stock: 50,
    isNew: true,
  },
  {
    id: 5,
    name: "Kay Kraft Silk Sharee with Golden Border",
    slug: "kay-kraft-silk-sharee-with-golden-border",
    brand: "Kay Kraft",
    category: "Fashion",
    rating: 4.9,
    reviewsCount: 92,
    price: 4890,
    colors: [{ name: "Red" }, { name: "Green" }],
    sizes: [],
    images: [saree5, saree],
    description:
      "Elegant silk sharee with golden border detailing, handcrafted by Bangladeshi weavers.",
    stock: 45,
    isNew: true,
  },
  {
    id: 6,
    name: "Deshi Craft Bamboo Storage Basket Set",
    slug: "deshi-craft-bamboo-storage-basket-set",
    brand: "Deshi Craft",
    category: "Home Decor",
    rating: 4.7,
    reviewsCount: 73,
    price: 990,
    discount: 8,
    colors: [{ name: "Natural" }],
    sizes: ["Small", "Medium", "Large"],
    images: [basket, basket1, basket2],
    description:
      "Eco-friendly handwoven bamboo baskets ideal for home storage and decoration.",
    stock: 85,
    isNew: true,
  },
  {
    id: 7,
    name: "Bengal Beats Wireless Earbuds",
    slug: "bengal-beats-wireless-earbuds",
    brand: "Bengal Beats",
    category: "Electronics",
    rating: 4.8,
    reviewsCount: 130,
    price: 2990,
    discount: 10,
    colors: [{ name: "Black" }, { name: "White" }],
    sizes: [],
    images: [buds, buds],
    description:
      "True wireless earbuds with noise reduction and 20-hour playback, designed in Bangladesh.",
    stock: 90,
    isNew: true,
  },
  {
    id: 8,
    name: "Karukrit Clay Flower Vase",
    slug: "karukrit-clay-flower-vase",
    brand: "Karukrit",
    category: "Handicrafts",
    rating: 4.9,
    reviewsCount: 54,
    price: 1150,
    colors: [{ name: "Terracotta" }],
    sizes: [],
    images: [vase, vase1],
    description:
      "Handcrafted clay vase made by local artisans from Kushtia, ideal for floral or dry arrangements.",
    stock: 35,
    isNew: true,
  },
  {
    id: 9,
    name: "Bibiana Linen Panjabi",
    slug: "bibiana-linen-panjabi",
    brand: "Bibiana",
    category: "Fashion",
    rating: 4.8,
    reviewsCount: 99,
    price: 2590,
    colors: [{ name: "Cream" }, { name: "Olive" }],
    sizes: ["M", "L", "XL"],
    images: [panjabi3, panjabi4],
    description:
      "Soft linen Panjabi with minimalist embroidery, perfect for cultural and festive occasions.",
    stock: 60,
    isNew: true,
  },
  {
    id: 10,
    name: "Noksha Leather Handmade Wallet",
    slug: "noksha-leather-handmade-wallet",
    brand: "Noksha",
    category: "Accessories",
    rating: 4.9,
    reviewsCount: 78,
    price: 890,
    colors: [{ name: "Brown" }, { name: "Black" }],
    sizes: [],
    images: [wallet, wallet1],
    description:
      "Premium handcrafted leather wallet made from local cowhide with fine stitching.",
    stock: 100,
    isNew: true,
  },
  {
    id: 11,
    name: "Banglar Handloom Jute Laptop Sleeve",
    slug: "banglar-handloom-jute-laptop-sleeve",
    brand: "Banglar Handloom",
    category: "Accessories",
    rating: 4.7,
    reviewsCount: 60,
    price: 1350,
    colors: [{ name: "Natural" }, { name: "Gray" }],
    sizes: ["13 inch", "15 inch"],
    images: [laptop_sleeve, laptop_sleeve],
    description:
      "Eco-friendly jute laptop sleeve with padded interior for stylish, sustainable protection.",
    stock: 75,
    isNew: true,
  },
  {
    id: 12,
    name: "Meena Home Ceramic Dinner Set (12 pcs)",
    slug: "meena-home-ceramic-dinner-set-12pcs",
    brand: "Meena Home",
    category: "Home & Kitchen",
    rating: 4.8,
    reviewsCount: 122,
    price: 3490,
    discount: 12,
    colors: [{ name: "White" }],
    sizes: ["12 pcs"],
    images: [dinner_set, dinner_set],
    description:
      "Durable ceramic dinner set designed in Bangladesh with elegant minimalist style.",
    stock: 48,
    isNew: true,
  },
  {
    id: 13,
    name: "Prohori Handmade Canvas Backpack",
    slug: "prohori-handmade-canvas-backpack",
    brand: "Prohori",
    category: "Accessories",
    rating: 4.7,
    reviewsCount: 85,
    price: 2490,
    colors: [{ name: "Khaki" }, { name: "Navy" }],
    sizes: [],
    images: [bag, bag],
    description:
      "Locally made durable canvas backpack with ample storage for daily use or travel.",
    stock: 80,
    isNew: true,
  },
  {
    id: 14,
    name: "Heritage Weaves Jamdani Scarf",
    slug: "heritage-weaves-jamdani-scarf",
    brand: "Heritage Weaves",
    category: "Fashion",
    rating: 4.9,
    reviewsCount: 71,
    price: 1750,
    colors: [{ name: "Off White" }, { name: "Blue" }],
    sizes: [],
    images: [scarf, scarf],
    description:
      "Exquisite Jamdani scarf handwoven by artisans from Narayanganj with intricate patterns.",
    stock: 45,
    isNew: true,
  },
  {
    id: 15,
    name: "Batik Bangladesh Cotton Bed Sheet Set",
    slug: "batik-bangladesh-cotton-bed-sheet-set",
    brand: "Batik Bangladesh",
    category: "Home & Living",
    rating: 4.8,
    reviewsCount: 90,
    price: 2290,
    discount: 10,
    colors: [{ name: "Blue" }, { name: "Gray" }],
    sizes: ["King", "Queen"],
    images: [bedsheet, bedsheet],
    description:
      "Soft, breathable cotton bedsheet set with Batik-style designs made by Bangladeshi artisans.",
    stock: 55,
    isNew: true,
  },
];

// Top Rated Products
export const topRatedProducts = [
  {
    id: 2,
    name: "Aarong Premium Cotton Panjabi",
    slug: "aarong-premium-cotton-panjabi",
    brand: "Aarong",
    category: "Fashion",
    rating: 4.9,
    reviewsCount: 234,
    price: 2490,
    colors: [{ name: "White" }, { name: "Beige" }],
    sizes: ["38", "40", "42", "44"],
    images: [panjabi, panjabi2],
    description:
      "Premium quality Aarong Panjabi made with breathable cotton fabric for comfort and elegance.",
    stock: 120,
    isTopRated: true,
  },
  {
    id: 3,
    name: "Rang Handwoven Cotton Saree",
    slug: "rang-handwoven-cotton-saree",
    brand: "Rang",
    category: "Fashion",
    rating: 4.8,
    reviewsCount: 180,
    price: 2990,
    images: [saree, saree3],
    description:
      "Elegant handwoven saree in pure cotton fabric dyed with natural colors from Bangladeshi weavers.",
    stock: 60,
    isTopRated: true,
  },
  {
    id: 4,
    name: "Vision Smart Refrigerator 240L",
    slug: "vision-smart-refrigerator-240l",
    brand: "Vision",
    category: "Home Appliances",
    rating: 4.9,
    reviewsCount: 130,
    price: 32990,
    images: [fridge, fridge],
    description:
      "Energy-efficient smart refrigerator with digital cooling control — proudly made in Bangladesh.",
    stock: 50,
    isTopRated: true,
  },
  {
    id: 5,
    name: "Karukrit Clay Table Lamp",
    slug: "karukrit-clay-table-lamp",
    brand: "Karukrit",
    category: "Home Decor",
    rating: 4.8,
    reviewsCount: 97,
    price: 1590,
    images: [lamp, lamp],
    description:
      "Handcrafted clay lamp made by rural artisans with traditional Bangladeshi motifs.",
    stock: 45,
    isTopRated: true,
  },
  {
    id: 6,
    name: "Apex Men's Leather Sandal",
    slug: "apex-mens-leather-sandal",
    brand: "Apex",
    category: "Footwear",
    rating: 4.9,
    reviewsCount: 87,
    price: 1890,
    images: [sandal2, sandal],
    description:
      "Comfortable genuine leather sandal designed for all-day wear and modern appeal.",
    stock: 55,
    isTopRated: true,
  },
  {
    id: 7,
    name: "Bibiana Silk Embroidered Kurti",
    slug: "bibiana-silk-embroidered-kurti",
    brand: "Bibiana",
    category: "Fashion",
    rating: 4.9,
    reviewsCount: 110,
    price: 3290,
    images: [kurti1, kurti],
    description:
      "Premium Bibiana silk kurti with hand embroidery inspired by traditional Bangladeshi artistry.",
    stock: 70,
    isTopRated: true,
  },
  {
    id: 8,
    name: "Handcrafted Silk Saree – Classic Edition",
    slug: "handcrafted-silk-saree-classic-edition",
    brand: "Karchupi",
    category: "Fashion",
    rating: 4.8,
    reviewsCount: 142,
    price: 4290,
    images: [saree6, saree7],
    description:
      "Luxurious handcrafted silk saree with intricate embroidery — perfect for festive occasions.",
    stock: 40,
    isTopRated: true,
  },
  {
    id: 9,
    name: "Jamuna Air Fryer 4.5L",
    slug: "jamuna-air-fryer-45l",
    brand: "Jamuna",
    category: "Kitchen Appliances",
    rating: 4.8,
    reviewsCount: 105,
    price: 6900,
    images: [air_cooler, air_cooler],
    description:
      "4.5L digital air fryer with rapid air circulation technology for oil-free healthy cooking.",
    stock: 60,
    isTopRated: true,
  },
  {
    id: 10,
    name: "Deshi Denim Classic Jeans",
    slug: "deshi-denim-classic-jeans",
    brand: "Deshi Denim",
    category: "Fashion",
    rating: 4.8,
    reviewsCount: 160,
    price: 2290,
    images: [jeans, jeans],
    description:
      "Locally made stretch-fit jeans with durable denim fabric and fine finishing.",
    stock: 100,
    isTopRated: true,
  },
  {
    id: 11,
    name: "Banglar Handloom Jute Shoulder Bag",
    slug: "banglar-handloom-jute-shoulder-bag",
    brand: "Banglar Handloom",
    category: "Accessories",
    rating: 4.7,
    reviewsCount: 92,
    price: 950,
    images: [bag, bag],
    description:
      "Eco-friendly jute shoulder bag crafted by Bangladeshi rural artisans with vibrant prints.",
    stock: 120,
    isTopRated: true,
  },
  {
    id: 12,
    name: "Prohori Canvas Laptop Backpack",
    slug: "prohori-canvas-laptop-backpack",
    brand: "Prohori",
    category: "Accessories",
    rating: 4.8,
    reviewsCount: 138,
    price: 2450,
    images: [laptop_sleeve, laptop_sleeve],
    description:
      "Durable canvas backpack designed for modern users, made by local Bangladeshi producers.",
    stock: 75,
    isTopRated: true,
  },
  {
    id: 13,
    name: "Aadi Terracotta Flower Pot Set",
    slug: "aadi-terracotta-flower-pot-set",
    brand: "Aadi",
    category: "Handicrafts",
    rating: 4.9,
    reviewsCount: 65,
    price: 1250,
    images: [clay, clay],
    description:
      "Set of handcrafted terracotta pots featuring traditional rural Bangladeshi patterns.",
    stock: 55,
    isTopRated: true,
  },
  {
    id: 14,
    name: "RFL Nonstick Cookware Set (5 pcs)",
    slug: "rfl-nonstick-cookware-set-5pcs",
    brand: "RFL",
    category: "Kitchen Appliances",
    rating: 4.8,
    reviewsCount: 115,
    price: 3990,
    images: [cookware, cookware],
    description:
      "Durable non-stick cookware set designed for modern Bangladeshi kitchens.",
    stock: 90,
    isTopRated: true,
  },
  {
    id: 15,
    name: "Heritage Weaves Jamdani Dupatta",
    slug: "heritage-weaves-jamdani-dupatta",
    brand: "Heritage Weaves",
    category: "Fashion",
    rating: 4.9,
    reviewsCount: 88,
    price: 1890,
    images: [scarf, scarf],
    description:
      "Exquisite handwoven Jamdani dupatta made by Narayanganj artisans with traditional motifs.",
    stock: 65,
    isTopRated: true,
  },
];

export const bannerData = [
  {
    id: 1,
    image: banner2,
    title: "Proudly Bangladeshi Fashion",
    description:
      "Explore elegant sarees and contemporary wear crafted by local designers and women entrepreneurs.",
    ctaText: "Shop Local Fashion",
    ctaLink: "/shop/fashion",
  },
  {
    id: 2,
    image: ornaments,
    title: "Handcrafted Ornaments & Jewelry",
    description:
      "Discover unique jewelry made by Bangladeshi artisans — colorful, cultural, and beautifully handmade.",
    ctaText: "Explore Jewelry",
    ctaLink: "/shop/ornaments",
  },
  {
    id: 3,
    image: handicrafts,
    title: "Authentic Handicrafts of Bangladesh",
    description:
      "Bring home the beauty of local craftsmanship — from clay pottery to bamboo décor, made with passion.",
    ctaText: "Shop Handicrafts",
    ctaLink: "/shop/handicrafts",
  },
  {
    id: 4,
    image: organicFood,
    title: "Taste of Organic Bangladesh",
    description:
      "Enjoy pure honey, homemade snacks, and organic staples from local food producers and small farms.",
    ctaText: "Shop Organic Foods",
    ctaLink: "/shop/foods",
  },
  {
    id: 5,
    image: ecoProducts,
    title: "Sustainable Living with Local Products",
    description:
      "Support eco-friendly Bangladeshi brands making jute bags, natural fiber goods, and green essentials.",
    ctaText: "Shop Eco Products",
    ctaLink: "/shop/eco-products",
  },
];
