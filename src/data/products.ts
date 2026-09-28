import { Product } from '../types';

export const PRODUCTS: Product[] = [
  // 1. Pipe-Cleaner Flowers
  {
    id: 'flower-lavender-stem',
    name: 'French Lavender Velvet Stem Trio',
    category: 'flowers',
    categoryLabel: 'Pipe-Cleaner Flowers',
    price: 18,
    originalPrice: 22,
    description: 'Delicate trio of French lavender stalks hand-curled with soft lilac chenille. Never drops petals or dries out.',
    details: [
      'Set of 3 individual bendable stems (approx. 28cm length)',
      'High-density plush velvet wire that holds posture forever',
      'Pairs beautifully in minimalist ceramic vases or bud bottles',
      'Hypoallergenic & dust-repellent finish'
    ],
    dimensions: '28cm x 4cm per stem',
    materials: 'Premium velvet chenille stems, wrapped floral wire core',
    colors: [
      { name: 'Soft Lilac', hex: '#C8B6FF' },
      { name: 'Deep Violet', hex: '#8F7193' },
      { name: 'Dusty Rose', hex: '#E29578' },
      { name: 'Pastel Sage', hex: '#B5C99A' }
    ],
    image: '/src/assets/images/product_single_flowers_1790585753377.jpg',
    rating: 4.9,
    reviewsCount: 42,
    isBestseller: true,
    occasions: ['Birthdays', 'Friendship gifts', 'Special celebrations'],
    stockStatus: 'in_stock'
  },
  {
    id: 'flower-chamomile-daisy',
    name: 'Sunny Chamomile Daisy Stems',
    category: 'flowers',
    categoryLabel: 'Pipe-Cleaner Flowers',
    price: 14,
    description: 'Charming pair of cheerful chamomile daisies with soft fluffy white petals and sunshine golden centers.',
    details: [
      'Set of 2 handcrafted blooming daisies with bendable leaves',
      'Petals sculpted one-by-one for organic, lifelike fullness',
      'Perfect desk companion or addition to existing floral vases'
    ],
    dimensions: '25cm length, 7cm blossom diameter',
    materials: 'High-grade velvet chenille, malleable galvanized core wire',
    colors: [
      { name: 'Classic White & Gold', hex: '#FFFDF9' },
      { name: 'Blush Cream', hex: '#FDE2E4' },
      { name: 'Buttercup Yellow', hex: '#FFE5A0' }
    ],
    image: '/src/assets/images/product_single_flowers_1790585753377.jpg',
    rating: 4.8,
    reviewsCount: 29,
    occasions: ['Friendship gifts', 'Birthdays', 'Festivals'],
    stockStatus: 'in_stock'
  },
  {
    id: 'flower-blush-tulip-single',
    name: 'Artisan Dutch Tulip Solo Bloom',
    category: 'flowers',
    categoryLabel: 'Pipe-Cleaner Flowers',
    price: 12,
    description: 'A singular statement Dutch tulip with sculptural cupped petals and graceful sage foliage.',
    details: [
      'Sculpted 6-petal cupped structure with hidden wire armature',
      'Includes 2 textured sage green leaves that can be curved freely',
      'Great for single-stem gift giving or place setting decor'
    ],
    dimensions: '30cm height, 6.5cm cup width',
    materials: 'Dense plush chenille, silk floral tape stem wrap',
    colors: [
      { name: 'Sakura Pink', hex: '#FFB7C5' },
      { name: 'Cream Peach', hex: '#FFD3B6' },
      { name: 'Pure White', hex: '#F9F9F8' },
      { name: 'Lavender Mist', hex: '#D8B4E2' }
    ],
    image: '/src/assets/images/product_single_flowers_1790585753377.jpg',
    rating: 5.0,
    reviewsCount: 38,
    isNew: true,
    occasions: ['Valentine’s Day', 'Anniversaries', 'Birthdays'],
    stockStatus: 'in_stock'
  },

  // 2. Handmade Bouquets
  {
    id: 'bouquet-cotton-candy-tulip',
    name: 'Pastel Dreamscape Everlasting Bouquet',
    category: 'bouquets',
    categoryLabel: 'Handmade Bouquets',
    price: 58,
    originalPrice: 68,
    description: 'Our signature handcrafted 12-stem bouquet featuring pastel pink tulips, chamomile daisies, and delicate lavender.',
    details: [
      'Contains 12 handcrafted velvet stems: 6 tulips, 3 daisies, 3 lavender stalks',
      'Wrapped in layered Korean translucent matte paper and heavy silk satin ribbon',
      'Includes complimentary mini handwritten calligraphy gift card',
      'Zero maintenance: never fades, never wilts, allergen-free'
    ],
    dimensions: '42cm height x 28cm diameter',
    materials: 'Plush velvet chenille, florist paper wrapping, premium satin ribbon',
    colors: [
      { name: 'Blush & Lilac Ombré', hex: '#F4C2C2' },
      { name: 'Peaches & Cream', hex: '#FFE5D9' },
      { name: 'Sweet Meadow (Yellow & Green)', hex: '#E2ECE9' },
      { name: 'Monochrome Sakura', hex: '#FFCCD5' }
    ],
    image: '/src/assets/images/product_tulip_bouquet_1790585719349.jpg',
    rating: 5.0,
    reviewsCount: 114,
    isBestseller: true,
    occasions: ['Valentine’s Day', 'Anniversaries', 'Graduation', 'Birthdays'],
    stockStatus: 'in_stock'
  },
  {
    id: 'bouquet-graduation-tassel',
    name: 'Graduation Blossom Keepsake Bouquet',
    category: 'bouquets',
    categoryLabel: 'Handmade Bouquets',
    price: 49,
    description: 'Specially created celebration bouquet with bright everlasting sunflowers, celebratory mortarboard charm, and pastel daisies.',
    details: [
      '9 crafted blooms featuring cheerful sunflowers, chamomile, and accent foliage',
      'Includes a mini pipe-cleaner graduation cap charm with tassel',
      'Durable packaging designed to survive photo sessions and travel',
      'A forever keepsake of proud achievement'
    ],
    dimensions: '38cm height x 24cm diameter',
    materials: 'Velvet chenille, miniature fabric mortarboard, satin streamers',
    colors: [
      { name: 'Sunflower Sunshine', hex: '#FFC857' },
      { name: 'Sky Blue & White', hex: '#A0C4FF' },
      { name: 'Blush Pink & Rose', hex: '#FFB4A2' }
    ],
    image: '/src/assets/images/product_tulip_bouquet_1790585719349.jpg',
    rating: 4.9,
    reviewsCount: 67,
    occasions: ['Graduation', 'Special celebrations', 'Friendship gifts'],
    stockStatus: 'made_to_order'
  },
  {
    id: 'bouquet-mini-petite',
    name: 'Petite 5-Stem Desk Meadow Bouquet',
    category: 'bouquets',
    categoryLabel: 'Handmade Bouquets',
    price: 32,
    description: 'Compact and delightful 5-stem arrangement tied with rustic raffia and a pastel organza bow. Perfect for bedside or office.',
    details: [
      '5 assorted flowers: 2 tulips, 2 daisies, 1 eucalyptus foliage stalk',
      'Self-standing wrap base option available',
      'Ideal budget-friendly celebration gift'
    ],
    dimensions: '26cm height x 16cm diameter',
    materials: 'Velvet chenille, kraft paper, organza ribbon',
    colors: [
      { name: 'Pastel Garden', hex: '#D8E2DC' },
      { name: 'Pink Sunset', hex: '#FFE5D9' },
      { name: 'Lavender Haze', hex: '#E8DFF5' }
    ],
    image: '/src/assets/images/product_tulip_bouquet_1790585719349.jpg',
    rating: 4.9,
    reviewsCount: 51,
    occasions: ['Birthdays', 'Friendship gifts', 'Festivals'],
    stockStatus: 'in_stock'
  },

  // 3. Cute Keychains
  {
    id: 'keychain-fuzzy-bear',
    name: 'Fluffy Teddy Bear Blossom Keychain',
    category: 'keychains',
    categoryLabel: 'Cute Keychains',
    price: 15,
    originalPrice: 18,
    description: 'Extremely soft handcrafted fuzzy teddy bear charm holding a micro pipe-cleaner tulip, finished with gold swivel hardware.',
    details: [
      'Double-twisted velvet chenille for an ultra-fluffy teddy bear finish',
      'High-grade anti-tarnish gold lobster clasp and swivel ring',
      'Choice of tiny flower held by the bear (tulip, daisy, or heart)',
      'Lightweight and durable on bags, keys, or backpacks'
    ],
    dimensions: '8.5cm x 5.5cm charm',
    materials: 'High-density fuzzy chenille, brass alloy hardware clasp',
    colors: [
      { name: 'Warm Biscuit Tan', hex: '#DDB892' },
      { name: 'Milky White', hex: '#F8F9FA' },
      { name: 'Baby Pink', hex: '#FAD2E1' },
      { name: 'Mocha Brown', hex: '#7F5539' }
    ],
    image: '/src/assets/images/product_cute_keychains_1790585743089.jpg',
    rating: 4.9,
    reviewsCount: 88,
    isBestseller: true,
    occasions: ['Friendship gifts', 'Birthdays', 'Valentine’s Day'],
    stockStatus: 'in_stock'
  },
  {
    id: 'keychain-smiling-daisy',
    name: 'Smiling Daisy Pastel Bag Charm',
    category: 'keychains',
    categoryLabel: 'Cute Keychains',
    price: 12,
    description: 'Adorably cheerful smiling daisy charm with dangling pastel leaves and a custom engraved wooden initial token.',
    details: [
      'Sculpted 3D petals with hand-embroidered smiling face center',
      'Optional personalized laser-engraved letter charm included',
      'Reinforced core wire resists bending during daily bag wear'
    ],
    dimensions: '7cm flower diameter, 12cm total drop length',
    materials: 'Velvet chenille, natural birch initial disc, metal alloy ring',
    colors: [
      { name: 'Daisy Sunshine', hex: '#FEE440' },
      { name: 'Blush Sakura', hex: '#F72585' },
      { name: 'Mint Meadow', hex: '#9BF6FF' },
      { name: 'Lavender Whisper', hex: '#BDB2FF' }
    ],
    image: '/src/assets/images/product_cute_keychains_1790585743089.jpg',
    rating: 4.8,
    reviewsCount: 45,
    occasions: ['Friendship gifts', 'Birthdays', 'Festivals'],
    stockStatus: 'in_stock'
  },
  {
    id: 'keychain-sweet-strawberry-duo',
    name: 'Sweet Berry & Flower Charm Pair',
    category: 'keychains',
    categoryLabel: 'Cute Keychains',
    price: 16,
    description: 'Twinning pair of mini pipe-cleaner strawberry and blossoms with dainty golden bell and pastel bead accents.',
    details: [
      'Features 1 plump sculpted berry + 1 miniature matching flower',
      'Includes subtle gentle chime bell that can be detached',
      'Handcrafted gift box included with every keychain order'
    ],
    dimensions: '6cm x 4cm',
    materials: 'Velvet chenille, metallic accents, lobster claw clasp',
    colors: [
      { name: 'Ripe Strawberry Pink', hex: '#E63946' },
      { name: 'Cream Peach Duo', hex: '#F4A261' },
      { name: 'Sweet Cherry Purple', hex: '#9D4EDD' }
    ],
    image: '/src/assets/images/product_cute_keychains_1790585743089.jpg',
    rating: 4.9,
    reviewsCount: 33,
    occasions: ['Valentine’s Day', 'Friendship gifts', 'Birthdays'],
    stockStatus: 'in_stock'
  },

  // 4. Decorative Lamps
  {
    id: 'lamp-sunflower-bell-jar',
    name: 'Sunflower Sanctuary Glass Cloche Lamp',
    category: 'lamps',
    categoryLabel: 'Decorative Lamps',
    price: 64,
    originalPrice: 75,
    description: 'Enchanting tabletop night lamp featuring a vibrant pipe-cleaner sunflower bed wrapped in warm fairy lights under a crystal glass dome.',
    details: [
      'High-clarity borosilicate glass cloche dome with solid beechwood base',
      'Integrated warm-white fairy micro-LEDs (soft 2700K ambient glow)',
      'Powered via 3x AAA batteries (included) or USB toggle cable',
      'Hidden discreet on/off switch on the base bottom'
    ],
    dimensions: '22cm height x 12cm diameter base',
    materials: 'Handcrafted chenille sunflower, borosilicate glass, solid beech, micro LEDs',
    colors: [
      { name: 'Golden Sunshine Glow', hex: '#F9A03F' },
      { name: 'Blush Sunset Tulip', hex: '#F28482' },
      { name: 'Pastel Lilac Dream', hex: '#9A8C98' }
    ],
    image: '/src/assets/images/product_sunflower_lamp_1790585731582.jpg',
    rating: 5.0,
    reviewsCount: 76,
    isBestseller: true,
    occasions: ['Birthdays', 'Anniversaries', 'Special celebrations', 'Festivals'],
    stockStatus: 'in_stock'
  },
  {
    id: 'lamp-tulip-garden-cloche',
    name: 'Everlasting Tulip Meadow Ambient Lamp',
    category: 'lamps',
    categoryLabel: 'Decorative Lamps',
    price: 68,
    description: 'Dreamy arrangement of 5 glowing pastel tulips and baby’s breath tucked inside an illuminated glass cloche.',
    details: [
      '5 handmade pipe-cleaner tulips in assorted pastel hues',
      'Moss-textured velvet ground bed with tiny sparkle dew accents',
      'Fairy lights woven through stems for a magical fairytale bedroom glow',
      'Arrives in padded gift box with protective foam cushion'
    ],
    dimensions: '24cm height x 14cm diameter base',
    materials: 'Velvet chenille, borosilicate glass, beechwood, warm LED garland',
    colors: [
      { name: 'Mixed Pastel Tulip Mix', hex: '#F7CAD0' },
      { name: 'All-Pink Fairytale', hex: '#FFAFCC' },
      { name: 'Lavender & Cream', hex: '#CDB4DB' }
    ],
    image: '/src/assets/images/product_sunflower_lamp_1790585731582.jpg',
    rating: 4.9,
    reviewsCount: 62,
    isNew: true,
    occasions: ['Valentine’s Day', 'Anniversaries', 'Birthdays'],
    stockStatus: 'in_stock'
  },
  {
    id: 'lamp-cloud-flower-bedside',
    name: 'Fluffy Cloud Flower Bedside Light',
    category: 'lamps',
    categoryLabel: 'Decorative Lamps',
    price: 45,
    description: 'Whimsical cloud base handcrafted with soft cotton and chenille, sprouting 3 glowing pastel flower blossoms.',
    details: [
      'Soft silicone cloud base with plush velvet pipe-cleaner blooms',
      'Gentle tap-to-dim warm light switch with 3 brightness levels',
      'Rechargeable via included Type-C cable (up to 14 hours battery life)'
    ],
    dimensions: '18cm x 15cm x 12cm',
    materials: 'Velvet chenille flowers, soft matte silicone base, rechargeable LED',
    colors: [
      { name: 'Sakura Cloud Pink', hex: '#FFCCD5' },
      { name: 'Vanilla Cloud Cream', hex: '#FFF1E6' },
      { name: 'Mint Sky Cloud', hex: '#D8F3DC' }
    ],
    image: '/src/assets/images/product_sunflower_lamp_1790585731582.jpg',
    rating: 4.8,
    reviewsCount: 39,
    occasions: ['Birthdays', 'Friendship gifts', 'Festivals'],
    stockStatus: 'made_to_order'
  },

  // 5. Customized Gifts
  {
    id: 'gift-bespoke-keepsake-hamper',
    name: 'Signature Bespoke Keepsake Gift Hamper',
    category: 'gifts',
    categoryLabel: 'Customized Gifts',
    price: 85,
    originalPrice: 98,
    description: 'The ultimate luxury handmade gifting experience. Curated with a custom bouquet, plush bear keychain, fairy lights, and personalized note.',
    details: [
      'Custom 7-stem handcrafted everlasting bouquet in your choice of color palette',
      'Matching fluffy teddy bear bag charm with gold monogram initial tag',
      'Warm LED string light battery garland woven into presentation box',
      'Personalized embossed calligraphy message card tucked inside',
      'Luxury rigid gift box tied with oversized double-face satin ribbon'
    ],
    dimensions: '32cm x 24cm x 14cm rigid presentation box',
    materials: 'Velvet chenille crafts, soy aroma wax pouch, luxury rigid box, satin ribbon',
    colors: [
      { name: 'Blush & Champagne Rose', hex: '#FAD2E1' },
      { name: 'Lavender & Cream Silk', hex: '#E2ECE9' },
      { name: 'Golden Sunlight & Honey', hex: '#FFE5A0' },
      { name: 'Custom Palette (Tell Us)', hex: '#D4A373' }
    ],
    image: '/src/assets/images/product_gift_box_1790585765482.jpg',
    rating: 5.0,
    reviewsCount: 95,
    isBestseller: true,
    occasions: ['Valentine’s Day', 'Anniversaries', 'Birthdays', 'Special celebrations'],
    stockStatus: 'in_stock'
  },
  {
    id: 'gift-graduation-memory-box',
    name: 'Graduation Floral Memory Gift Box',
    category: 'gifts',
    categoryLabel: 'Customized Gifts',
    price: 52,
    description: 'Commemorative gift box featuring a pipe-cleaner sunflower, graduate teddy bear charm, custom year banner (e.g. Class of 2026), and greeting card.',
    details: [
      'Personalized with graduate’s name and graduation year banner',
      'Features graduation sunflower + matching bear keychain',
      'Includes LED string lights for breathtaking unboxing video moment'
    ],
    dimensions: '28cm x 20cm x 10cm',
    materials: 'Plush velvet chenille, gold foiled lettering, crinkle packing kraft',
    colors: [
      { name: 'Celebration Gold & Black', hex: '#E9C46A' },
      { name: 'Pastel Blue & White', hex: '#A8DADC' },
      { name: 'Blush Pink & White', hex: '#F4ACB7' }
    ],
    image: '/src/assets/images/product_gift_box_1790585765482.jpg',
    rating: 4.9,
    reviewsCount: 48,
    occasions: ['Graduation', 'Special celebrations'],
    stockStatus: 'made_to_order'
  },
  {
    id: 'gift-anniversary-velvet-set',
    name: 'Everlasting Love Story Gift Set',
    category: 'gifts',
    categoryLabel: 'Customized Gifts',
    price: 72,
    description: 'Romantic duet set crafted for milestones. Two sculpted velvet roses intertwined, engraved love padlock charm, and fairy light glow.',
    details: [
      'Pair of intertwined eternal roses sculpted with velvety red & cream chenille',
      'Customized wooden heart plaque with couple initials & anniversary date',
      'Pre-assembled with warm twinkle fairy lights inside clear acetate presentation case'
    ],
    dimensions: '26cm x 18cm x 12cm',
    materials: 'Plush chenille roses, engraved basswood plaque, warm LEDs, velvet ribbon',
    colors: [
      { name: 'Crimson Rose & Cream', hex: '#D62828' },
      { name: 'Dusty Pink & Lavender', hex: '#E7C6FF' },
      { name: 'Pure White & Peach', hex: '#FDE2E4' }
    ],
    image: '/src/assets/images/product_gift_box_1790585765482.jpg',
    rating: 5.0,
    reviewsCount: 54,
    occasions: ['Anniversaries', 'Valentine’s Day', 'Special celebrations'],
    stockStatus: 'made_to_order'
  }
];

export const OCCASIONS_DATA = [
  {
    id: 'birthdays',
    name: 'Birthdays',
    emoji: '🎂',
    subtitle: 'Bright & joyful forever blooms',
    description: 'Bring a radiant smile with cheerful everlasting bouquets, adorable teddy keychains, and luminous flower lamps.'
  },
  {
    id: 'anniversaries',
    name: 'Anniversaries',
    emoji: '💕',
    subtitle: 'A love that never fades or wilts',
    description: 'Symbolize everlasting devotion with hand-sculpted velvet roses, custom engraved love plaques, and cloche lamps.'
  },
  {
    id: 'valentines',
    name: "Valentine's Day",
    emoji: '💐',
    subtitle: 'Handcrafted romance in pastel bliss',
    description: 'Skip wilted flowers. Gift a permanent romantic keepsake bouquet wrapped in luxurious satin and calligraphy.'
  },
  {
    id: 'festivals',
    name: 'Festivals',
    emoji: '✨',
    subtitle: 'Warm festive glowing decor',
    description: 'Adorn festive tables and homes with fairy light floral lamps and vibrant handcrafted flower stems.'
  },
  {
    id: 'friendship',
    name: 'Friendship Gifts',
    emoji: '🫶',
    subtitle: 'Twinning charms & cheerful daisies',
    description: 'Show your bestie you care with matching smiling daisy keychains, mini desk bouquets, and sweet notes.'
  },
  {
    id: 'graduation',
    name: 'Graduation',
    emoji: '🎓',
    subtitle: 'Celebrate proud milestones',
    description: 'Everlasting graduation sunflower bouquets with mortarboard charms that look picture-perfect forever.'
  },
  {
    id: 'celebrations',
    name: 'Special Celebrations',
    emoji: '🎉',
    subtitle: 'Bespoke gifts tailored to any moment',
    description: 'Baby showers, housewarmings, promotions, or self-love treats customized in your favorite pastel palette.'
  }
];
