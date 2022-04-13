import { createAction, props } from '@ngrx/store';
import { Product } from '../models/product.model';

export const loadProducts = createAction(
  '[Load Products Resolver] Load Products'
);

export const loadProductsSuccessFul = createAction(
  '[Load Products Effect] Loaded Selected Products',
  props<{ data: Product[] }>()
);

export const loadProductsFailure = createAction(
  '[Load Products Effect] Loading Failed',
  props<{ productLoadingError: string }>()
);
