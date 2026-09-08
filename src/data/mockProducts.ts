import { Product } from '../types/marketplace';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'prod-iphone-15-pro',
    name: 'Apple iPhone 15 Pro Max',
    brand: 'Apple',
    category: 'Smartphones',
    rating: 4.9,
    reviewCount: 1420,
    shortSpecs: ['A17 Pro Chip', '256GB Storage', '48MP Main Camera', 'Titanium Frame'],
    description: 'iPhone 15 Pro Max. Forged in titanium and featuring the groundbreaking A17 Pro chip, a customizable Action button, and the most powerful iPhone camera system ever.',
    basePrice: 134900,
    originalPrice: 159900,
    images: [
      'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1695048133021-32b03b22416b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&q=80'
    ],
    inStock: true,
    features: [
      'A17 Pro chip with 6-core GPU',
      'Pro camera system (48MP Main, 12MP Ultra Wide, 12MP 5x Telephoto)',
      'Aerospace-grade titanium design with textured matte glass back',
      'USB-C connector with USB 3 support for blazing speeds'
    ],
    specsTable: {
      'Display': '6.7-inch Super Retina XDR display with ProMotion',
      'Processor': 'A17 Pro chip with 6-core CPU & GPU',
      'Battery': 'Up to 29 hours video playback',
      'Build': 'Titanium enclosure, Ceramic Shield front',
      'Warranty': '1 Year AppleCare Warranty'
    },
    variantGroups: [
      {
        id: 'var-color',
        name: 'Color',
        options: [
          { id: 'col-titanium-natural', name: 'Natural Titanium', value: 'Natural Titanium', priceDelta: 0, available: true, colorHex: '#9F9D98' },
          { id: 'col-titanium-blue', name: 'Blue Titanium', value: 'Blue Titanium', priceDelta: 0, available: true, colorHex: '#2B3846' },
          { id: 'col-titanium-black', name: 'Black Titanium', value: 'Black Titanium', priceDelta: 0, available: true, colorHex: '#262627' },
          { id: 'col-titanium-white', name: 'White Titanium', value: 'White Titanium', priceDelta: 0, available: false, colorHex: '#F0EFEA' }
        ]
      },
      {
        id: 'var-storage',
        name: 'Storage',
        options: [
          { id: 'stg-256gb', name: '256 GB', value: '256GB', priceDelta: 0, available: true },
          { id: 'stg-512gb', name: '512 GB', value: '512GB', priceDelta: 20000, available: true },
          { id: 'stg-1tb', name: '1 TB', value: '1TB', priceDelta: 40000, available: true }
        ]
      }
    ],
    emiPlans: [
      { id: 'emi-3m', tenureMonths: 3, monthlyAmount: 44966, interestRate: 0, isNoCost: true, processingFee: 0, totalPayable: 134900, popularTag: 'Zero Interest' },
      { id: 'emi-6m', tenureMonths: 6, monthlyAmount: 22483, interestRate: 0, isNoCost: true, processingFee: 0, totalPayable: 134900, popularTag: 'Most Popular' },
      { id: 'emi-9m', tenureMonths: 9, monthlyAmount: 14988, interestRate: 0, isNoCost: true, processingFee: 199, totalPayable: 134900 },
      { id: 'emi-12m', tenureMonths: 12, monthlyAmount: 11241, interestRate: 0, isNoCost: true, processingFee: 199, totalPayable: 134900, popularTag: 'Low Monthly' },
      { id: 'emi-18m', tenureMonths: 18, monthlyAmount: 8206, interestRate: 11.5, isNoCost: false, processingFee: 499, totalPayable: 147708 },
      { id: 'emi-24m', tenureMonths: 24, monthlyAmount: 6310, interestRate: 12, isNoCost: false, processingFee: 499, totalPayable: 151440 }
    ]
  },
  {
    id: 'prod-macbook-air-m3',
    name: 'MacBook Air 15" M3 Chip',
    brand: 'Apple',
    category: 'Laptops',
    rating: 4.8,
    reviewCount: 890,
    shortSpecs: ['Apple M3 Chip', '16GB Unified RAM', '512GB SSD', 'Liquid Retina Display'],
    description: 'The 15-inch MacBook Air is impossibly thin and has a stunning Liquid Retina display. Supercharged by the M3 chip, it delivers up to 18 hours of battery life in an ultra-portable design.',
    basePrice: 139900,
    originalPrice: 154900,
    images: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=800&q=80'
    ],
    inStock: true,
    features: [
      'Strikingly thin design with durable aluminum enclosure',
      'Powerful 8-core CPU and up to 10-core GPU in Apple M3',
      '15.3-inch Liquid Retina display with 500 nits brightness',
      'MagSafe 3 charging port, two Thunderbolt ports'
    ],
    specsTable: {
      'Display': '15.3-inch LED-backlit display with IPS technology',
      'Processor': 'Apple M3 chip (8-core CPU, 10-core GPU)',
      'Memory': '16GB unified memory',
      'Storage': '512GB SSD',
      'Weight': '1.51 kg'
    },
    variantGroups: [
      {
        id: 'var-color-mac',
        name: 'Color',
        options: [
          { id: 'mac-space-black', name: 'Midnight', value: 'Midnight', priceDelta: 0, available: true, colorHex: '#1E2530' },
          { id: 'mac-starlight', name: 'Starlight', value: 'Starlight', priceDelta: 0, available: true, colorHex: '#F0E6D2' },
          { id: 'mac-space-gray', name: 'Space Gray', value: 'Space Gray', priceDelta: 0, available: true, colorHex: '#7D7E80' }
        ]
      },
      {
        id: 'var-ram-mac',
        name: 'Unified Memory',
        options: [
          { id: 'ram-16gb', name: '16 GB', value: '16GB', priceDelta: 0, available: true },
          { id: 'ram-24gb', name: '24 GB', value: '24GB', priceDelta: 20000, available: true }
        ]
      }
    ],
    emiPlans: [
      { id: 'emi-mac-3m', tenureMonths: 3, monthlyAmount: 46633, interestRate: 0, isNoCost: true, processingFee: 0, totalPayable: 139900, popularTag: 'Zero Interest' },
      { id: 'emi-mac-6m', tenureMonths: 6, monthlyAmount: 23316, interestRate: 0, isNoCost: true, processingFee: 0, totalPayable: 139900, popularTag: 'Best Value' },
      { id: 'emi-mac-12m', tenureMonths: 12, monthlyAmount: 11658, interestRate: 0, isNoCost: true, processingFee: 199, totalPayable: 139900, popularTag: '0% Interest' },
      { id: 'emi-mac-24m', tenureMonths: 24, monthlyAmount: 6544, interestRate: 12, isNoCost: false, processingFee: 499, totalPayable: 157056 }
    ]
  },
  {
    id: 'prod-samsung-s24-ultra',
    name: 'Samsung Galaxy S24 Ultra 5G',
    brand: 'Samsung',
    category: 'Smartphones',
    rating: 4.7,
    reviewCount: 960,
    shortSpecs: ['Snapdragon 8 Gen 3', '200MP Quad Camera', 'S-Pen Included', 'Galaxy AI'],
    description: 'Welcome to the era of mobile AI. With Galaxy S24 Ultra in your hands, you can unleash whole new levels of creativity, productivity and possibility.',
    basePrice: 129999,
    originalPrice: 144999,
    images: [
      'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1580910051074-3eb694886505?auto=format&fit=crop&w=800&q=80'
    ],
    inStock: true,
    features: [
      'Built-in S Pen writes new chapters for Galaxy note lovers',
      '200MP sensor with AI detail enhancement for nightography',
      'Titanium shield exterior with Corning Gorilla Armor',
      'Real-time Live Translate for phone calls'
    ],
    specsTable: {
      'Display': '6.8-inch Quad HD+ Dynamic AMOLED 2X',
      'Processor': 'Snapdragon 8 Gen 3 for Galaxy',
      'Main Camera': '200MP + 50MP + 12MP + 10MP',
      'Battery': '5000 mAh with 45W Fast Charging',
      'S-Pen': 'Integrated S-Pen included'
    },
    variantGroups: [
      {
        id: 'var-color-s24',
        name: 'Titanium Finish',
        options: [
          { id: 's24-titan-gray', name: 'Titanium Gray', value: 'Titanium Gray', priceDelta: 0, available: true, colorHex: '#808285' },
          { id: 's24-titan-black', name: 'Titanium Black', value: 'Titanium Black', priceDelta: 0, available: true, colorHex: '#1C1D21' },
          { id: 's24-titan-yellow', name: 'Titanium Yellow', value: 'Titanium Yellow', priceDelta: 0, available: true, colorHex: '#E5D6A7' }
        ]
      },
      {
        id: 'var-stg-s24',
        name: 'Storage',
        options: [
          { id: 's24-stg-256', name: '256 GB', value: '256GB', priceDelta: 0, available: true },
          { id: 's24-stg-512', name: '512 GB', value: '512GB', priceDelta: 10000, available: true }
        ]
      }
    ],
    emiPlans: [
      { id: 's24-emi-3m', tenureMonths: 3, monthlyAmount: 43333, interestRate: 0, isNoCost: true, processingFee: 0, totalPayable: 129999, popularTag: '0% Interest' },
      { id: 's24-emi-6m', tenureMonths: 6, monthlyAmount: 21666, interestRate: 0, isNoCost: true, processingFee: 0, totalPayable: 129999, popularTag: 'Popular' },
      { id: 's24-emi-12m', tenureMonths: 12, monthlyAmount: 10833, interestRate: 0, isNoCost: true, processingFee: 199, totalPayable: 129999 },
      { id: 's24-emi-24m', tenureMonths: 24, monthlyAmount: 6081, interestRate: 12, isNoCost: false, processingFee: 499, totalPayable: 145944 }
    ]
  },
  {
    id: 'prod-sony-wh1000xm5',
    name: 'Sony WH-1000XM5 Wireless ANC Headphones',
    brand: 'Sony',
    category: 'Audio & Wearables',
    rating: 4.8,
    reviewCount: 2310,
    shortSpecs: ['Industry-Leading ANC', '30-Hr Battery', 'Speak-to-Chat', 'Hi-Res Audio'],
    description: 'The WH-1000XM5 headphones rewrite the rules for distraction-free listening. Two processors and 8 microphones deliver unprecedented noise canceling and exceptional call quality.',
    basePrice: 29990,
    originalPrice: 34990,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=800&q=80'
    ],
    inStock: true,
    features: [
      'Industry-leading noise canceling optimized automatically',
      'Magnificent sound engineered with new Integrated Processor V1',
      'Crystal clear hands-free calling with 4 beamforming microphones',
      'Up to 30-hour battery life with quick charging (3 min for 3 hours)'
    ],
    specsTable: {
      'Headphone Type': 'Over-Ear Wireless ANC',
      'Battery Life': '30 Hours (ANC ON), 40 Hours (ANC OFF)',
      'Connectivity': 'Bluetooth 5.2 & 3.5mm Audio Cable',
      'Weight': '250 g'
    },
    variantGroups: [
      {
        id: 'var-color-sony',
        name: 'Color',
        options: [
          { id: 'sony-black', name: 'Black', value: 'Black', priceDelta: 0, available: true, colorHex: '#1B1B1B' },
          { id: 'sony-silver', name: 'Silver', value: 'Silver', priceDelta: 0, available: true, colorHex: '#D7D6D2' },
          { id: 'sony-blue', name: 'Midnight Blue', value: 'Midnight Blue', priceDelta: 0, available: true, colorHex: '#1B2A4A' }
        ]
      }
    ],
    emiPlans: [
      { id: 'sony-emi-3m', tenureMonths: 3, monthlyAmount: 9996, interestRate: 0, isNoCost: true, processingFee: 0, totalPayable: 29990, popularTag: 'Zero Cost EMI' },
      { id: 'sony-emi-6m', tenureMonths: 6, monthlyAmount: 4998, interestRate: 0, isNoCost: true, processingFee: 0, totalPayable: 29990, popularTag: '₹4,998/mo' },
      { id: 'sony-emi-9m', tenureMonths: 9, monthlyAmount: 3332, interestRate: 0, isNoCost: true, processingFee: 99, totalPayable: 29990 }
    ]
  },
  {
    id: 'prod-ipad-air-m2',
    name: 'Apple iPad Air 11" M2 Chip',
    brand: 'Apple',
    category: 'Tablets',
    rating: 4.9,
    reviewCount: 620,
    shortSpecs: ['Apple M2 Chip', '128GB Storage', 'Liquid Retina Display', 'Wi-Fi 6E'],
    description: 'Freshly squeezed. iPad Air is powered by the incredibly fast Apple M2 chip. It features a gorgeous Liquid Retina display, a new landscape camera, and fast Wi-Fi 6E.',
    basePrice: 59900,
    originalPrice: 64900,
    images: [
      'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=80'
    ],
    inStock: true,
    features: [
      '11-inch Liquid Retina display with P3 wide color and True Tone',
      'M2 chip with 8-core CPU and 10-core GPU',
      'Landscape 12MP Ultra Wide front camera with Center Stage',
      'Works with Apple Pencil Pro and Magic Keyboard'
    ],
    specsTable: {
      'Display': '11-inch LED backlit Liquid Retina display',
      'Processor': 'Apple M2 Chip',
      'Storage': '128GB',
      'Camera': '12MP Wide back, 12MP Ultra Wide front'
    },
    variantGroups: [
      {
        id: 'var-ipad-color',
        name: 'Color',
        options: [
          { id: 'ipad-space-gray', name: 'Space Gray', value: 'Space Gray', priceDelta: 0, available: true, colorHex: '#525457' },
          { id: 'ipad-blue', name: 'Blue', value: 'Blue', priceDelta: 0, available: true, colorHex: '#A2C4DA' },
          { id: 'ipad-purple', name: 'Purple', value: 'Purple', priceDelta: 0, available: true, colorHex: '#C5C1D8' },
          { id: 'ipad-starlight', name: 'Starlight', value: 'Starlight', priceDelta: 0, available: true, colorHex: '#E5DFD3' }
        ]
      },
      {
        id: 'var-ipad-stg',
        name: 'Storage',
        options: [
          { id: 'ipad-stg-128', name: '128 GB', value: '128GB', priceDelta: 0, available: true },
          { id: 'ipad-stg-256', name: '256 GB', value: '256GB', priceDelta: 10000, available: true }
        ]
      }
    ],
    emiPlans: [
      { id: 'ipad-emi-3m', tenureMonths: 3, monthlyAmount: 19966, interestRate: 0, isNoCost: true, processingFee: 0, totalPayable: 59900, popularTag: 'Zero Interest' },
      { id: 'ipad-emi-6m', tenureMonths: 6, monthlyAmount: 9983, interestRate: 0, isNoCost: true, processingFee: 0, totalPayable: 59900, popularTag: 'Most Popular' },
      { id: 'ipad-emi-12m', tenureMonths: 12, monthlyAmount: 4991, interestRate: 0, isNoCost: true, processingFee: 199, totalPayable: 59900 }
    ]
  },
  {
    id: 'prod-apple-watch-ultra-2',
    name: 'Apple Watch Ultra 2 GPS + Cellular',
    brand: 'Apple',
    category: 'Audio & Wearables',
    rating: 4.9,
    reviewCount: 480,
    shortSpecs: ['49mm Titanium Case', '3000 nits Display', 'Precision Dual-Freq GPS', 'Up to 36-Hr Battery'],
    description: 'The ultimate sports and adventure watch. Featuring a lightweight titanium case, extra-long battery life, the brightest Apple display ever, and Double Tap gesture.',
    basePrice: 89900,
    originalPrice: 94900,
    images: [
      'https://images.unsplash.com/photo-1510017803434-a899398421b3?auto=format&fit=crop&w=800&q=80'
    ],
    inStock: true,
    features: [
      'Rugged 49mm corrosion-resistant titanium case with large Digital Crown',
      'Brightest Always-On Retina display at 3000 nits peak brightness',
      'Double tap gesture to control timer, music, calls without touching screen',
      '100m water resistance and depth gauge'
    ],
    specsTable: {
      'Case Material': 'Titanium',
      'Display Size': '49mm OLED Display',
      'Connectivity': 'GPS + Cellular',
      'Sensors': 'ECG, Blood Oxygen, Heart Rate, Compass'
    },
    variantGroups: [
      {
        id: 'var-watch-loop',
        name: 'Band Type',
        options: [
          { id: 'watch-alpine', name: 'Alpine Loop (Indigo)', value: 'Alpine Loop', priceDelta: 0, available: true },
          { id: 'watch-trail', name: 'Trail Loop (Orange)', value: 'Trail Loop', priceDelta: 0, available: true },
          { id: 'watch-ocean', name: 'Ocean Band (Blue)', value: 'Ocean Band', priceDelta: 0, available: true }
        ]
      }
    ],
    emiPlans: [
      { id: 'watch-emi-3m', tenureMonths: 3, monthlyAmount: 29966, interestRate: 0, isNoCost: true, processingFee: 0, totalPayable: 89900, popularTag: 'Zero Interest' },
      { id: 'watch-emi-6m', tenureMonths: 6, monthlyAmount: 14983, interestRate: 0, isNoCost: true, processingFee: 0, totalPayable: 89900, popularTag: 'Popular' },
      { id: 'watch-emi-12m', tenureMonths: 12, monthlyAmount: 7491, interestRate: 0, isNoCost: true, processingFee: 199, totalPayable: 89900 }
    ]
  },
  {
    id: 'prod-lg-oled-55-c3',
    name: 'LG 55" OLED evo C3 4K Smart TV',
    brand: 'LG',
    category: 'Smart TV & Tech',
    rating: 4.8,
    reviewCount: 310,
    shortSpecs: ['OLED evo 4K', 'α9 AI Processor Gen6', '120Hz Gaming', 'Dolby Vision & Atmos'],
    description: 'The LG OLED evo C3 features self-lit pixels that create infinite contrast and 100% color fidelity. Enhanced by the α9 AI Processor Gen6 for extraordinary picture and audio precision.',
    basePrice: 119990,
    originalPrice: 169990,
    images: [
      'https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=800&q=80'
    ],
    inStock: true,
    features: [
      'LG OLED evo technology with Brightness Booster',
      'α9 AI Processor Gen6 with AI Super Upscaling 4K',
      'Ultimate gaming specs: 0.1ms response time, 120Hz, G-Sync & FreeSync',
      'webOS 23 with Hands-free Voice Control'
    ],
    specsTable: {
      'Screen Size': '55 inches (139 cm)',
      'Display Type': 'OLED evo 4K Ultra HD',
      'Refresh Rate': '120Hz Native',
      'Audio Output': '40W (2.2 Channel Dolby Atmos)'
    },
    variantGroups: [],
    emiPlans: [
      { id: 'tv-emi-3m', tenureMonths: 3, monthlyAmount: 39996, interestRate: 0, isNoCost: true, processingFee: 0, totalPayable: 119990, popularTag: 'Zero Interest' },
      { id: 'tv-emi-6m', tenureMonths: 6, monthlyAmount: 19998, interestRate: 0, isNoCost: true, processingFee: 0, totalPayable: 119990, popularTag: 'No Cost EMI' },
      { id: 'tv-emi-12m', tenureMonths: 12, monthlyAmount: 9999, interestRate: 0, isNoCost: true, processingFee: 199, totalPayable: 119990 }
    ]
  }
];
