"use client";
import mobile from "../public/images/products/1.webp";
import laptop from "../public/images/products/2.webp";
import electric from "../public/images/products/3.webp";
import womenCloth from "../public/images/products/4.webp";
import footwear from "../public/images/products/5.webp";
import watch from "../public/images/products/6.webp";
import others from "../public/images/products/7.webp";
import smartwatch from "../public/images/products/8.webp";
import tv from "../public/images/products/tv.webp";
import panjabi from "../public/images/products/panjabi.jpg";
import sandal from "../public/images/products/sandal.jpg";
import saree from "../public/images/products/saree.jpg";
import air_cooler from "../public/images/products/air-cooler.png";
import rice_cocker from "../public/images/products/rice-cocker.jpg";
import fridge from "../public/images/products/fridge.jpg";
import ata from "../public/images/products/ata.png";
import oil from "../public/images/products/oil.webp";
import sugar from "../public/images/products/sugar.webp";
import sandal2 from "../public/images/products/sandal2.jpeg";
import saree3 from "../public/images/products/saree3.jpg";
import img1 from "../public/images/banners/1.png";
import img2 from "../public/images/banners/2.png";
import img3 from "../public/images/banners/3.png";
import img4 from "../public/images/banners/4.png";
import img5 from "../public/images/banners/5.png";
import img6 from "../public/images/banners/6.png";
import img7 from "../public/images/banners/7.png";
import furniture from "../public/images/banners/furniture.jpg";
import banner2 from "../public/images/banners/2.jpg";
import gadget from "../public/images/banners/gadget.jpg";
import bag from "../public/images/products/bag.jpg";
import sunglass from "../public/images/products/bag.jpg";
import headphone from "../public/images/products/bag.jpg";
import speaker from "../public/images/products/speaker.webp";
import bedsheet from "../public/images/products/bedsheet.webp";
import cswatch from "../public/images/products/watch.webp";
import dress from "../public/images/products/dress.jpg";
import band from "../public/images/products/band.jpg";

export const categories = [
  {
    name: "Electronics",
    slug: "electronics",
    image: electric,
  },
  {
    name: "Fashion",
    slug: "fashion",
    image: womenCloth,
  },
  {
    name: "Computer",
    slug: "computer",
    image: laptop,
  },
  {
    name: "Watch",
    slug: "watch",
    image: watch,
  },
  {
    name: "Furniture",
    slug: "furniture",
    image: others,
  },
  {
    name: "Smartphone",
    slug: "smart-phone",
    image: mobile,
  },
  {
    name: "Footwear",
    slug: "foot-wear",
    image: footwear,
  },
  {
    name: "Computer",
    slug: "computer",
    image: laptop,
  },
  {
    name: "Watch",
    slug: "watch",
    image: watch,
  },
  {
    name: "Furniture",
    slug: "furniture",
    image: others,
  },
  {
    name: "Smartphone",
    slug: "smart-phone",
    image: mobile,
  },
  {
    name: "Footwear",
    slug: "foot-wear",
    image: footwear,
  },
  {
    name: "Smart Watch",
    slug: "smart-watch",
    image: smartwatch,
  },
  {
    name: "Smart Watch",
    slug: "smart-watch",
    image: smartwatch,
  },
  {
    name: "Smart Watch",
    slug: "smart-watch",
    image: smartwatch,
  },
  {
    name: "Smart Watch",
    slug: "smart-watch",
    image: smartwatch,
  },
  {
    name: "Smart Watch",
    slug: "smart-watch",
    image: smartwatch,
  },
  {
    name: "Smart Watch",
    slug: "smart-watch",
    image: smartwatch,
  },
  {
    name: "Electronics",
    slug: "electronics",
    image: electric,
  },
  {
    name: "Fashion",
    slug: "fashion",
    image: womenCloth,
  },
];

export const banners = [
  {
    image: img1,
    title: "Big Festive Sale",
    subtitle: "Up to 60% off on electronics",
    cta: "Shop Now",
  },
  {
    image: img2,
    title: "Exclusive Fashion Deals",
    subtitle: "Trendy styles for all seasons",
    cta: "Explore",
  },
  {
    image: img3,
    title: "New Arrivals 2025",
    subtitle: "Check out the latest products",
    cta: "Discover",
  },
  {
    image: img4,
    title: "Big Festive Sale",
    subtitle: "Up to 60% off on electronics",
    cta: "Shop Now",
  },
  {
    image: img5,
    title: "Exclusive Fashion Deals",
    subtitle: "Trendy styles for all seasons",
    cta: "Explore",
  },
  {
    image: img6,
    title: "New Arrivals 2025",
    subtitle: "Check out the latest products",
    cta: "Discover",
  },
  {
    image: img7,
    title: "New Arrivals 2025",
    subtitle: "Check out the latest products",
    cta: "Discover",
  },
];

export const products = [
  {
    id: "P-1001",
    basicInfo: {
      name: "North Star Green Woven",
      sku: "NSGW",
      status: "active",
      brand: "Bata",
      category: "Fashion",
      childCategory: "Formal Shoes",
      subcategory: "Men’s Shoes",
      vendor: {
        id: "V-1002",
        name: "Fashion World",
        email: "contact@fashionworld.com",
        avatar: "https://i.pravatar.cc/150?img=2",
      },
    },
    meta: {
      metaTitle: "North Star Green Woven - Bata",
      metaDescription:
        "Premium leather formal shoes for men, perfect for office and formal occasions.",
      metaKeywords: "Bata, Formal Shoes, Men's Shoes",
      shortDesc:
        "Elegant green woven leather shoes designed for modern professionals.",
      longDesc:
        "<p>These North Star formal shoes are handcrafted with precision and premium materials. Perfect for office wear and special occasions.</p>",
    },
    colorImages: {
      "Green Woven": [
        {
          id: "a05692bb-9fdf-4f2c-b5e7-704acccd265b",
          preview: "/images/products/green-woven-1.jpg",
        },
      ],
      Black: [
        {
          id: "b1729bb-9fdf-4f2c-b5e7-704acccd265b",
          preview: "/images/products/black-shoe-1.jpg",
        },
      ],
    },
    featured: "/images/products/green-woven-thumb.jpg",
    images: [],
    variantMeta: {
      selectedAttributes: ["color", "size"],
      selectedValues: {
        color: ["Green Woven", "Black"],
        size: ["8", "9", "10"],
      },
    },
    variants: [
      {
        id: "VAR-NSGW-8",
        sku: "NSGW-GREENWOVEN-8",
        price: 2359,
        discount: 2,
        stock: 120,
      },
      {
        id: "VAR-NSGW-9",
        sku: "NSGW-GREENWOVEN-9",
        price: 2460,
        discount: 2,
        stock: 140,
      },
      {
        id: "VAR-NSBK-9",
        sku: "NSGW-BLACK-9",
        price: 2450,
        discount: 0,
        stock: 90,
      },
    ],
  },

  {
    id: "P-1002",
    basicInfo: {
      name: "Aarong Premium Cotton Panjabi",
      sku: "AAR-PAN-202",
      status: "active",
      brand: "Aarong",
      category: "Fashion",
      childCategory: "Ethnic Wear",
      subcategory: "Men’s Clothing",
      vendor: {
        id: "V-1003",
        name: "Aarong Official",
        email: "support@aarong.com",
        avatar: "https://i.pravatar.cc/150?img=3",
      },
    },
    meta: {
      metaTitle: "Aarong Cotton Panjabi - Premium Men's Collection",
      metaDescription:
        "Soft and breathable cotton panjabi, designed for comfort and tradition.",
      metaKeywords: "Aarong, Panjabi, Men Fashion",
      shortDesc: "Traditional elegance meets modern comfort.",
      longDesc:
        "<p>Made from 100% organic cotton, Aarong's Panjabi is perfect for casual or festive wear.</p>",
    },
    colorImages: {},
    featured: "/images/products/aarong-panjabi-thumb.jpg",
    images: [
      "/images/products/aarong-panjabi-1.jpg",
      "/images/products/aarong-panjabi-2.jpg",
    ],
    variantMeta: {
      selectedAttributes: ["size"],
      selectedValues: { size: ["M", "L", "XL"] },
    },
    variants: [
      { id: "VAR-AAR-M", sku: "AAR-M", price: 1950, discount: 10, stock: 50 },
      { id: "VAR-AAR-L", sku: "AAR-L", price: 1990, discount: 8, stock: 40 },
      { id: "VAR-AAR-XL", sku: "AAR-XL", price: 2050, discount: 5, stock: 35 },
    ],
  },

  {
    id: "P-1003",
    basicInfo: {
      name: "JBL Pro Bluetooth Speaker",
      sku: "JBL-SPK-PRO",
      status: "active",
      brand: "JBL",
      category: "Electronics",
      childCategory: "Speakers",
      subcategory: "Portable Speakers",
      vendor: {
        id: "V-1004",
        name: "TechBazaar BD",
        email: "sales@techbazaar.com",
        avatar: "https://i.pravatar.cc/150?img=4",
      },
    },
    meta: {
      metaTitle: "JBL Pro Bluetooth Speaker",
      metaDescription:
        "Portable wireless speaker with deep bass and waterproof design.",
      metaKeywords: "JBL, Bluetooth Speaker, Electronics",
      shortDesc: "Compact, powerful, and ready for travel.",
      longDesc:
        "<p>Enjoy superior sound quality with JBL’s portable Bluetooth speaker. Featuring 12-hour battery life and IPX7 waterproofing.</p>",
    },
    colorImages: {
      Black: [{ id: "C-JBL-01", preview: "/images/products/jbl-black.jpg" }],
      Blue: [{ id: "C-JBL-02", preview: "/images/products/jbl-blue.jpg" }],
    },
    featured: "/images/products/jbl-black-thumb.jpg",
    images: [],
    variantMeta: {
      selectedAttributes: ["color"],
      selectedValues: { color: ["Black", "Blue"] },
    },
    variants: [
      {
        id: "VAR-JBL-BLK",
        sku: "JBL-BLK",
        price: 3490,
        discount: 5,
        stock: 60,
      },
      {
        id: "VAR-JBL-BLU",
        sku: "JBL-BLU",
        price: 3590,
        discount: 0,
        stock: 50,
      },
    ],
  },

  {
    id: "P-1004",
    basicInfo: {
      name: "Jamuna Air Fryer 4.5L",
      sku: "JAM-AF-45L",
      status: "active",
      brand: "Jamuna",
      category: "Home Appliances",
      childCategory: "Kitchen Appliances",
      subcategory: "Air Fryers",
      vendor: {
        id: "V-1005",
        name: "Appliance Mart",
        email: "info@appliancemart.com",
        avatar: "https://i.pravatar.cc/150?img=5",
      },
    },
    meta: {
      metaTitle: "Jamuna Air Fryer 4.5L - Oil Free Cooking",
      metaDescription:
        "Cook your favorite food with 85% less oil using Jamuna’s air fryer.",
      metaKeywords: "Jamuna, Air Fryer, Kitchen Appliances",
      shortDesc: "Healthy oil-free cooking at your fingertips.",
      longDesc:
        "<p>Features adjustable temperature, digital controls, and easy-clean non-stick tray.</p>",
    },
    colorImages: {},
    featured: "/images/products/jamuna-airfryer-thumb.jpg",
    images: [
      "/images/products/jamuna-airfryer-1.jpg",
      "/images/products/jamuna-airfryer-2.jpg",
    ],
    variantMeta: {
      selectedAttributes: [],
      selectedValues: {},
    },
    variants: [
      {
        id: "VAR-JAM-45L",
        sku: "JAM-AF-45L",
        price: 6900,
        discount: 10,
        stock: 80,
      },
    ],
  },

  {
    id: "P-1005",
    basicInfo: {
      name: "Karchupi Party Saree",
      sku: "KAR-SAR-055",
      status: "active",
      brand: "Karchupi",
      category: "Fashion",
      childCategory: "Traditional Wear",
      subcategory: "Women’s Saree",
      vendor: {
        id: "V-1006",
        name: "Trendy Collection",
        email: "support@trendycollection.com",
        avatar: "https://i.pravatar.cc/150?img=6",
      },
    },
    meta: {
      metaTitle: "Karchupi Handcrafted Party Saree",
      metaDescription:
        "Exclusive handcrafted saree made from premium silk with elegant embroidery.",
      metaKeywords: "Saree, Silk, Handcrafted, Women Fashion",
      shortDesc: "A touch of elegance for every festive moment.",
      longDesc:
        "<p>Made from premium silk, this Karchupi saree features intricate embroidery and comes with an unstitched blouse piece.</p>",
    },
    colorImages: {
      Red: [{ id: "C-KAR-RED", preview: "/images/products/karchupi-red.jpg" }],
      Blue: [
        { id: "C-KAR-BLU", preview: "/images/products/karchupi-blue.jpg" },
      ],
    },
    featured: "/images/products/karchupi-red-thumb.jpg",
    images: [],
    variantMeta: {
      selectedAttributes: ["color"],
      selectedValues: { color: ["Red", "Blue"] },
    },
    variants: [
      {
        id: "VAR-KAR-RED",
        sku: "KAR-RED",
        price: 4290,
        discount: 10,
        stock: 30,
      },
      {
        id: "VAR-KAR-BLU",
        sku: "KAR-BLU",
        price: 4190,
        discount: 12,
        stock: 25,
      },
    ],
  },

  {
    id: "P-1006",
    basicInfo: {
      name: "ChefPro Digital Rice Cooker 2.2L",
      sku: "CHEF-RICE-22",
      status: "active",
      brand: "ChefPro",
      category: "Kitchen Appliances",
      childCategory: "Cooking",
      subcategory: "Rice Cookers",
      vendor: {
        id: "V-1007",
        name: "Kitchen Spot",
        email: "help@kitchenspot.com",
        avatar: "https://i.pravatar.cc/150?img=7",
      },
    },
    meta: {
      metaTitle: "ChefPro 2.2L Digital Rice Cooker",
      metaDescription:
        "Smart rice cooker with one-touch cooking and digital control panel.",
      metaKeywords: "Rice Cooker, Kitchen Appliances, ChefPro",
      shortDesc: "Cook smart with precision and style.",
      longDesc:
        "<p>Comes with a non-stick pot, keep-warm feature, and auto shut-off for safety.</p>",
    },
    colorImages: {},
    featured: "/images/products/chefpro-cooker-thumb.jpg",
    images: [
      "/images/products/chefpro-cooker-1.jpg",
      "/images/products/chefpro-cooker-2.jpg",
    ],
    variantMeta: { selectedAttributes: [], selectedValues: {} },
    variants: [
      { id: "VAR-CHEF-1", sku: "CHEF-22", price: 4290, discount: 5, stock: 60 },
    ],
  },

  {
    id: "P-1007",
    basicInfo: {
      name: "UrbanEase Leather Office Bag",
      sku: "URB-BAG-010",
      status: "active",
      brand: "UrbanEase",
      category: "Accessories",
      childCategory: "Office",
      subcategory: "Bags",
      vendor: {
        id: "V-1008",
        name: "Urban Hub",
        email: "info@urbanhub.com",
        avatar: "https://i.pravatar.cc/150?img=8",
      },
    },
    meta: {
      metaTitle: "UrbanEase Leather Office Bag - Premium Collection",
      metaDescription:
        "Genuine leather office bag with laptop compartment and multiple pockets.",
      metaKeywords: "Leather Bag, Accessories, UrbanEase",
      shortDesc: "Style and durability in one.",
      longDesc:
        "<p>Crafted from 100% genuine leather, suitable for professionals and executives.</p>",
    },
    colorImages: {},
    featured: "/images/products/urban-bag-thumb.jpg",
    images: [
      "/images/products/urban-bag-1.jpg",
      "/images/products/urban-bag-2.jpg",
    ],
    variantMeta: { selectedAttributes: [], selectedValues: {} },
    variants: [
      {
        id: "VAR-URB-1",
        sku: "URB-BAG-010",
        price: 3250,
        discount: 12,
        stock: 42,
      },
    ],
  },

  {
    id: "P-1008",
    basicInfo: {
      name: "Walton Prelude N50 Laptop",
      sku: "WAL-LAP-N50",
      status: "active",
      brand: "Walton",
      category: "Electronics",
      childCategory: "Computers",
      subcategory: "Laptops",
      vendor: {
        id: "V-1009",
        name: "TechLine BD",
        email: "support@techline.com",
        avatar: "https://i.pravatar.cc/150?img=9",
      },
    },
    meta: {
      metaTitle: "Walton Prelude N50 - 8GB/512GB SSD",
      metaDescription:
        "High-performance Bangladeshi laptop for professionals and students.",
      metaKeywords: "Laptop, Walton, Electronics",
      shortDesc: "Compact design, powerful performance.",
      longDesc:
        "<p>Equipped with Intel i5 processor, 8GB RAM, and fast SSD storage.</p>",
    },
    colorImages: {},
    featured: "/images/products/walton-laptop-thumb.jpg",
    images: [
      "/images/products/walton-laptop-1.jpg",
      "/images/products/walton-laptop-2.jpg",
    ],
    variantMeta: { selectedAttributes: [], selectedValues: {} },
    variants: [
      {
        id: "VAR-WAL-1",
        sku: "WAL-LAP-N50",
        price: 49990,
        discount: 10,
        stock: 20,
      },
    ],
  },

  {
    id: "P-1009",
    basicInfo: {
      name: "Velora Women’s Floral Midi Dress",
      sku: "VEL-DRS-021",
      status: "active",
      brand: "Velora",
      category: "Fashion",
      childCategory: "Women’s Wear",
      subcategory: "Dresses",
      vendor: {
        id: "V-1010",
        name: "StyleZone",
        email: "contact@stylezone.com",
        avatar: "https://i.pravatar.cc/150?img=10",
      },
    },
    meta: {
      metaTitle: "Velora Floral Midi Dress",
      metaDescription:
        "Stylish and breathable floral print midi dress for women.",
      metaKeywords: "Dress, Women Fashion, Floral",
      shortDesc: "Chic design with summer vibes.",
      longDesc:
        "<p>Made from high-quality rayon fabric with elegant floral prints, ideal for casual outings.</p>",
    },
    colorImages: {
      Pink: [{ id: "C-VEL-PNK", preview: "/images/products/velora-pink.jpg" }],
    },
    featured: "/images/products/velora-pink-thumb.jpg",
    images: [],
    variantMeta: {
      selectedAttributes: ["size"],
      selectedValues: { size: ["S", "M", "L"] },
    },
    variants: [
      { id: "VAR-VEL-S", sku: "VEL-S", price: 2790, discount: 0, stock: 30 },
      { id: "VAR-VEL-M", sku: "VEL-M", price: 2890, discount: 5, stock: 25 },
      { id: "VAR-VEL-L", sku: "VEL-L", price: 2990, discount: 5, stock: 20 },
    ],
  },

  {
    id: "P-1010",
    basicInfo: {
      name: "Vision 43” Smart Android LED TV",
      sku: "VIS-TV-43A",
      status: "active",
      brand: "Vision",
      category: "Home Appliances",
      childCategory: "Television",
      subcategory: "Smart TV",
      vendor: {
        id: "V-1011",
        name: "GadgetWorld",
        email: "sales@gadgetworld.com",
        avatar: "https://i.pravatar.cc/150?img=11",
      },
    },
    meta: {
      metaTitle: "Vision 43” Smart Android TV",
      metaDescription:
        "Full HD Smart Android TV with built-in Wi-Fi and Dolby Sound.",
      metaKeywords: "Vision, Smart TV, Electronics",
      shortDesc: "Entertainment redefined with smart technology.",
      longDesc:
        "<p>Enjoy Netflix, YouTube, and more on the big screen with Vision’s 43” Smart Android TV.</p>",
    },
    colorImages: {},
    featured: "/images/products/vision-tv-thumb.jpg",
    images: [
      "/images/products/vision-tv-1.jpg",
      "/images/products/vision-tv-2.jpg",
    ],
    variantMeta: { selectedAttributes: [], selectedValues: {} },
    variants: [
      {
        id: "VAR-VIS-43",
        sku: "VIS-TV-43A",
        price: 30990,
        discount: 8,
        stock: 15,
      },
    ],
  },
];

export const bannerData = [
  {
    id: 1,
    image: banner2,
    title: "Style That Speaks",
    description:
      "Discover the latest fashion trends and timeless classics for men, women, and kids.",
    ctaText: "Shop Fashion",
    ctaLink: "/shop/fashion",
  },
  {
    id: 2,
    image: furniture,
    title: "Elegant Living, Simplified",
    description:
      "Modern furniture and décor that elevate your home with a touch of sophistication.",
    ctaText: "Explore Home",
    ctaLink: "/shop/home",
  },
  {
    id: 3,
    image: gadget,
    title: "Smart Tech for Smart Living",
    description:
      "Upgrade your life with the latest gadgets, electronics, and accessories.",
    ctaText: "Shop Electronics",
    ctaLink: "/shop/electronics",
  },
];
