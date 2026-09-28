export type ProductCategory = 'all' | 'flowers' | 'bouquets' | 'keychains' | 'lamps' | 'gifts';

export interface ProductColor {
  name: string;
  hex: string;
  bgClass?: string;
}

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  categoryLabel: string;
  price: number;
  originalPrice?: number;
  description: string;
  details: string[];
  dimensions?: string;
  materials: string;
  colors: ProductColor[];
  image: string;
  rating: number;
  reviewsCount: number;
  isBestseller?: boolean;
  isNew?: boolean;
  occasions?: string[];
  stockStatus: 'in_stock' | 'made_to_order' | 'limited';
}

export interface CartItem {
  id: string; // unique item key
  product: Product;
  selectedColor: ProductColor;
  quantity: number;
  customEngraving?: string;
}

export interface CustomOrderData {
  id: string;
  customerName: string;
  contactNumber: string;
  email: string;
  productType: 'Bouquet' | 'Flower Stem' | 'Cute Keychain' | 'Decorative Lamp' | 'Customized Gift Set';
  preferredColors: string[];
  bouquetSize?: string;
  personalizedName?: string;
  lampDesign?: string;
  giftCombination?: string;
  occasion: string;
  customRequirements: string;
  quantity: number;
  referenceImageName?: string;
  referenceImageData?: string;
  estimatedPrice: number;
  createdAt: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  title: string;
  comment: string;
  productBought: string;
  occasion: string;
  date: string;
  verified: boolean;
  avatarBg: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: ProductCategory;
  categoryLabel: string;
  image: string;
  description: string;
  tags: string[];
}
