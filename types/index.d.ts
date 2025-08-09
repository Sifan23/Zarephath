export interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
  price: string | string[];
  rating: number;
  images: string[];
  size?: string[];
  benefits?: string;
}
