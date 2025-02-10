export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  dimensions: string;
  materials: string[];
  images: string[];
  inStock: boolean;
  colors: string[];
  rating: number;
}

export interface TeamMember {
  name: string;
  position: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  comment: string;
  rating: number;
  image: string;
}