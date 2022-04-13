import { Product } from './product.model';

export interface CartProductItem {
  id: number;
  quantity: number;
  name: string;
}
export interface CartProductEntry {
  id: number;
  products: CartProductItem[];
}

export interface ServiceError {
  message: string;
  code: number;
}
