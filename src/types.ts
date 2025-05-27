export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  discount: number;
  image: string;
  images?: string[];
  rating: number;
  reviewCount: number;
  shortDescription: string;
  description: string;
  highlights?: string[];
  specifications?: { name: string; value: string }[];
}