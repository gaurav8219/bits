import { Product } from '../types';

export const laptops: Product[] = [
  {
    id: 'laptop-1',
    name: 'MacBook Pro 14" M3 Pro',
    brand: 'Apple',
    category: 'laptops',
    price: 199900,
    discount: 5,
    image: 'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    images: [
      'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    rating: 4.8,
    reviewCount: 245,
    shortDescription: 'Powerful M3 Pro chip, 14-inch Liquid Retina XDR display, 16GB RAM, 512GB SSD',
    description: 'The MacBook Pro 14" with M3 Pro chip delivers exceptional performance for demanding tasks like photo editing, 3D modeling, and software development. The stunning Liquid Retina XDR display offers extreme dynamic range with up to 1000 nits sustained brightness. With 16GB of unified memory and 512GB SSD, you will have plenty of space for your projects and files.',
    highlights: [
      'Apple M3 Pro chip with 10-core CPU and 16-core GPU',
      '14-inch Liquid Retina XDR display',
      '16GB unified memory',
      '512GB SSD storage',
      'Up to 18 hours of battery life',
      'Three Thunderbolt 4 ports, HDMI port, SDXC card slot'
    ],
    specifications: [
      { name: 'Processor', value: 'Apple M3 Pro (10-core CPU, 16-core GPU)' },
      { name: 'Memory', value: '16GB unified RAM' },
      { name: 'Storage', value: '512GB SSD' },
      { name: 'Display', value: '14.2-inch Liquid Retina XDR display (3024 x 1964)' },
      { name: 'Battery', value: 'Up to 18 hours' },
      { name: 'Operating System', value: 'macOS Sonoma' },
      { name: 'Weight', value: '1.55 kg' },
      { name: 'Dimensions', value: '31.26 x 22.12 x 1.55 cm' }
    ]
  },
  {
    id: 'laptop-2',
    name: 'Dell XPS 15',
    brand: 'Dell',
    category: 'laptops',
    price: 149900,
    discount: 10,
    image: 'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    images: [
      'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    rating: 4.6,
    reviewCount: 189,
    shortDescription: 'Intel Core i7, 15.6" 4K OLED display, 16GB RAM, 1TB SSD, NVIDIA RTX 3050 Ti',
    description: 'The Dell XPS 15 combines stunning design with powerful performance. Featuring a 15.6-inch 4K OLED display with InfinityEdge, this laptop delivers vibrant colors and deep blacks. Powered by an Intel Core i7 processor and NVIDIA RTX 3050 Ti graphics, it handles demanding tasks with ease. The premium build quality includes a CNC machined aluminum chassis and carbon fiber palm rest.',
    highlights: [
      'Intel Core i7-12700H processor',
      '15.6-inch 4K OLED touch display',
      '16GB DDR5 RAM',
      '1TB NVMe SSD',
      'NVIDIA GeForce RTX 3050 Ti (4GB GDDR6)',
      'Backlit keyboard with fingerprint reader'
    ],
    specifications: [
      { name: 'Processor', value: 'Intel Core i7-12700H (14 cores, up to 4.7GHz)' },
      { name: 'Memory', value: '16GB DDR5-4800MHz' },
      { name: 'Storage', value: '1TB M.2 PCIe NVMe SSD' },
      { name: 'Display', value: '15.6-inch 4K UHD+ (3840 x 2400) OLED touch display' },
      { name: 'Graphics', value: 'NVIDIA GeForce RTX 3050 Ti (4GB GDDR6)' },
      { name: 'Battery', value: '86Whr, up to 13 hours' },
      { name: 'Operating System', value: 'Windows 11 Home' },
      { name: 'Weight', value: '1.96 kg' }
    ]
  },
  {
    id: 'laptop-3',
    name: 'Lenovo ThinkPad X1 Carbon',
    brand: 'Lenovo',
    category: 'laptops',
    price: 129900,
    discount: 15,
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4.7,
    reviewCount: 156,
    shortDescription: 'Intel Core i7, 14" WQUXGA display, 16GB RAM, 1TB SSD, Windows 11 Pro',
    description: 'The ThinkPad X1 Carbon is designed for professionals who need reliability, security, and performance in a lightweight package. This 14-inch ultrabook features a stunning WQUXGA display, powerful Intel Core i7 processor, and the legendary ThinkPad keyboard. With military-grade durability and enterprise-level security features, it is the perfect business laptop.',
    highlights: [
      'Intel Core i7-1270P processor',
      '14-inch WQUXGA (3840 x 2400) IPS display',
      '16GB LPDDR5 RAM',
      '1TB PCIe SSD',
      'Intel Iris Xe Graphics',
      'Dolby Atmos speaker system'
    ]
  },
  {
    id: 'laptop-4',
    name: 'HP Spectre x360',
    brand: 'HP',
    category: 'laptops',
    price: 139900,
    discount: 8,
    image: 'https://images.pexels.com/photos/812264/pexels-photo-812264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4.5,
    reviewCount: 132,
    shortDescription: 'Intel Core i7, 13.5" 3K2K OLED display, 16GB RAM, 1TB SSD, 2-in-1 convertible',
    description: 'The HP Spectre x360 is a premium 2-in-1 convertible laptop with a stunning 13.5-inch 3K2K OLED display. Its gem-cut design and dual-chamfered edges make it stand out from the crowd. With Intel Core i7 performance and versatile 360-degree hinge, it adapts to your needs whether you are working, creating, or consuming content.',
    highlights: [
      'Intel Core i7-1255U processor',
      '13.5-inch 3K2K (3000 x 2000) OLED touch display',
      '16GB LPDDR4x RAM',
      '1TB PCIe NVMe SSD',
      'Intel Iris Xe Graphics',
      '360-degree hinge for laptop, tablet, tent and stand modes'
    ]
  },
  {
    id: 'laptop-5',
    name: 'ASUS ROG Zephyrus G14',
    brand: 'ASUS',
    category: 'laptops',
    price: 159900,
    discount: 12,
    image: 'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4.8,
    reviewCount: 210,
    shortDescription: 'AMD Ryzen 9, 14" QHD 165Hz display, 16GB RAM, 1TB SSD, RTX 4060',
    description: 'The ASUS ROG Zephyrus G14 is a compact gaming powerhouse featuring AMD Ryzen 9 processor and NVIDIA RTX 4060 graphics. Despite its 14-inch form factor, it delivers exceptional gaming performance with a 165Hz QHD display. The AniMe Matrix LED display on the lid allows for personalization, while the quad-speaker system provides immersive audio.',
    highlights: [
      'AMD Ryzen 9 7940HS processor',
      '14-inch QHD (2560 x 1440) 165Hz display with Adaptive-Sync',
      '16GB DDR5 RAM',
      '1TB PCIe 4.0 NVMe SSD',
      'NVIDIA GeForce RTX 4060 (8GB GDDR6)',
      'AniMe Matrix LED display on lid'
    ]
  },
  {
    id: 'laptop-6',
    name: 'Microsoft Surface Laptop 5',
    brand: 'Microsoft',
    category: 'laptops',
    price: 119900,
    discount: 0,
    image: 'https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4.4,
    reviewCount: 98,
    shortDescription: 'Intel Core i5, 13.5" PixelSense display, 8GB RAM, 512GB SSD',
    description: 'The Microsoft Surface Laptop 5 combines sleek design with everyday performance. Its 13.5-inch PixelSense touchscreen display offers vibrant colors and supports both touch and Surface Pen input. The Alcantara fabric keyboard provides a comfortable typing experience, while the all-day battery life keeps you productive on the go.',
    highlights: [
      'Intel Core i5-1235U processor',
      '13.5-inch PixelSense Display (2256 x 1504)',
      '8GB LPDDR5x RAM',
      '512GB SSD',
      'Intel Iris Xe Graphics',
      'Alcantara fabric keyboard deck'
    ]
  }
];

export const accessories: Product[] = [
  {
    id: 'acc-1',
    name: 'Logitech MX Master 3S',
    brand: 'Logitech',
    category: 'accessories',
    price: 9999,
    discount: 0,
    image: 'https://images.pexels.com/photos/5082577/pexels-photo-5082577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4.9,
    reviewCount: 312,
    shortDescription: 'Wireless mouse with ultra-fast scrolling and 8K DPI tracking',
    description: 'The Logitech MX Master 3S is the ultimate productivity mouse with an electromagnetic scroll wheel for ultra-fast scrolling. With 8K DPI tracking on any surface including glass, quiet clicks, and customizable buttons, it is designed for maximum efficiency. Connect to up to 3 devices via Bluetooth or the included USB receiver.',
    highlights: [
      'Electromagnetic MagSpeed scrolling',
      '8K DPI tracking on any surface including glass',
      'Quiet clicks - 90% less click noise',
      'Connect up to 3 devices via Bluetooth or USB receiver',
      'Ergonomic design with thumb rest',
      'Up to 70 days battery life on a full charge'
    ]
  },
  {
    id: 'acc-2',
    name: 'Sony WH-1000XM5',
    brand: 'Sony',
    category: 'accessories',
    price: 29990,
    discount: 10,
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4.8,
    reviewCount: 278,
    shortDescription: 'Wireless noise cancelling headphones with 30-hour battery life',
    description: 'The Sony WH-1000XM5 headphones offer industry-leading noise cancellation with eight microphones and two processors. Enjoy exceptional sound quality with the new 30mm driver unit and LDAC support for high-resolution audio. The lightweight design with soft fit leather provides all-day comfort, while the 30-hour battery life keeps the music going.',
    highlights: [
      'Industry-leading noise cancellation',
      'Crystal clear hands-free calling',
      'Up to 30 hours of battery life',
      'Quick charge (3 min charge for 3 hours playback)',
      'Multipoint connection - connect to two devices simultaneously',
      'Touch controls and speak-to-chat technology'
    ]
  },
  {
    id: 'acc-3',
    name: 'Samsung T7 Portable SSD - 1TB',
    brand: 'Samsung',
    category: 'accessories',
    price: 10999,
    discount: 15,
    image: 'https://images.pexels.com/photos/4792729/pexels-photo-4792729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4.7,
    reviewCount: 189,
    shortDescription: 'Portable SSD with read speeds up to 1,050 MB/s and fingerprint security',
    description: 'The Samsung T7 Portable SSD delivers fast performance in a pocket-sized design. With read speeds up to 1,050 MB/s and write speeds up to 1,000 MB/s, it is nearly twice as fast as the previous T5 model. The shock-resistant design protects data from drops up to 2 meters, while the optional password protection and AES 256-bit hardware encryption keep your data secure.',
    highlights: [
      'Read speeds up to 1,050 MB/s, write speeds up to 1,000 MB/s',
      'USB 3.2 Gen 2 interface (backward compatible)',
      'Compact and portable design',
      'Shock-resistant metal case (drops up to 2m)',
      'Password protection with AES 256-bit hardware encryption',
      'Compatible with PC, Mac, Android devices'
    ]
  },
  {
    id: 'acc-4',
    name: 'Anker 737 Power Bank (PowerCore 24K)',
    brand: 'Anker',
    category: 'accessories',
    price: 14999,
    discount: 5,
    image: 'https://images.pexels.com/photos/4195326/pexels-photo-4195326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4.6,
    reviewCount: 142,
    shortDescription: '24,000mAh power bank with 140W total output and smart digital display',
    description: 'The Anker 737 Power Bank (PowerCore 24K) is a high-capacity portable charger with 24,000mAh capacity and 140W total output. It features two USB-C ports and one USB-A port to charge multiple devices simultaneously. The smart digital display shows real-time data including input/output power, charging time remaining, and battery level percentage.',
    highlights: [
      '24,000mAh capacity',
      '140W total output',
      'Smart digital display',
      'Two USB-C ports and one USB-A port',
      'Bi-directional fast charging',
      'ActiveShield 2.0 temperature monitoring'
    ]
  },
  {
    id: 'acc-5',
    name: 'LG 27UP850-W 27" 4K Monitor',
    brand: 'LG',
    category: 'accessories',
    price: 39999,
    discount: 12,
    image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4.5,
    reviewCount: 87,
    shortDescription: '27" 4K UHD IPS monitor with USB-C connectivity and HDR400',
    description: 'The LG 27UP850-W is a 27-inch 4K UHD (3840 x 2160) IPS monitor designed for professionals. It features USB-C connectivity with 96W power delivery to charge your laptop while displaying content. With VESA DisplayHDR 400 certification, DCI-P3 95% color gamut, and factory color calibration, it delivers accurate colors for photo and video editing.',
    highlights: [
      '27-inch 4K UHD (3840 x 2160) IPS display',
      'VESA DisplayHDR 400 certified',
      'USB-C with 96W Power Delivery',
      'DCI-P3 95% color gamut',
      'AMD FreeSync technology',
      'Height, tilt and pivot adjustable stand'
    ]
  },
  {
    id: 'acc-6',
    name: 'Keychron K2 Mechanical Keyboard',
    brand: 'Keychron',
    category: 'accessories',
    price: 7999,
    discount: 0,
    image: 'https://images.pexels.com/photos/3937174/pexels-photo-3937174.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4.7,
    reviewCount: 156,
    shortDescription: 'Wireless mechanical keyboard with RGB backlight and hot-swappable switches',
    description: 'The Keychron K2 is a 75% layout wireless mechanical keyboard compatible with Mac, Windows, and Android. It connects via Bluetooth to up to 3 devices or can be used wired via USB-C. With hot-swappable Gateron G Pro switches, you can customize your typing experience without soldering. The RGB backlight offers 15+ lighting effects for an enhanced typing experience.',
    highlights: [
      '75% layout with function keys and navigation cluster',
      'Connect up to 3 devices via Bluetooth 5.1',
      'Hot-swappable switches - change switches without soldering',
      'RGB backlight with 15+ lighting effects',
      '4000mAh battery for up to 240 hours of use (backlight off)',
      'Mac and Windows compatible with keycap options for both'
    ]
  }
];

export const featuredDeals: Product[] = [
  {
    id: 'laptop-2',
    name: 'Dell XPS 15',
    brand: 'Dell',
    category: 'laptops',
    price: 149900,
    discount: 10,
    image: 'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4.6,
    reviewCount: 189,
    shortDescription: 'Intel Core i7, 15.6" 4K OLED display, 16GB RAM, 1TB SSD, NVIDIA RTX 3050 Ti',
    description: 'The Dell XPS 15 combines stunning design with powerful performance. Featuring a 15.6-inch 4K OLED display with InfinityEdge, this laptop delivers vibrant colors and deep blacks. Powered by an Intel Core i7 processor and NVIDIA RTX 3050 Ti graphics, it handles demanding tasks with ease.'
  },
  {
    id: 'laptop-3',
    name: 'Lenovo ThinkPad X1 Carbon',
    brand: 'Lenovo',
    category: 'laptops',
    price: 129900,
    discount: 15,
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4.7,
    reviewCount: 156,
    shortDescription: 'Intel Core i7, 14" WQUXGA display, 16GB RAM, 1TB SSD, Windows 11 Pro',
    description: 'The ThinkPad X1 Carbon is designed for professionals who need reliability, security, and performance in a lightweight package.'
  },
  {
    id: 'acc-2',
    name: 'Sony WH-1000XM5',
    brand: 'Sony',
    category: 'accessories',
    price: 29990,
    discount: 10,
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4.8,
    reviewCount: 278,
    shortDescription: 'Wireless noise cancelling headphones with 30-hour battery life',
    description: 'The Sony WH-1000XM5 headphones offer industry-leading noise cancellation with eight microphones and two processors.'
  },
  {
    id: 'acc-5',
    name: 'LG 27UP850-W 27" 4K Monitor',
    brand: 'LG',
    category: 'accessories',
    price: 39999,
    discount: 12,
    image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    rating: 4.5,
    reviewCount: 87,
    shortDescription: '27" 4K UHD IPS monitor with USB-C connectivity and HDR400',
    description: 'The LG 27UP850-W is a 27-inch 4K UHD (3840 x 2160) IPS monitor designed for professionals.'
  }
];