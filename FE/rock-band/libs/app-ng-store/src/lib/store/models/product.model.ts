export interface Product {
  id: number;
  name: string;
  price: number;
  description?: string;
  defaultImage?: string;
  images?: Array<string>;
  discount?: number;
}

export interface ProductData {
  data: Product[];
}
