import { createAction, props } from '@ngrx/store';
import { CartProductEntry, ServiceError } from '../models/cart.model';

export const loadProductInCart = createAction(
  '[Load Cart Resolver] Load Products'
);

export const loadProductInCartSuccessFul = createAction(
  '[Load Cart Effect] Loaded Selected Products',
  props<{ data: CartProductEntry[] }>()
);

export const loadProductInCartFailure = createAction(
  '[Load Cart Effect] Loading Failed',
  props<{ cartError: Partial<ServiceError> }>()
);

// export const addBulkProductToCartSuccessFul = createAction(
//   '[Add Bulk Product to Cart] Add Products Successful',
//   props<{ productItems: Product[] }>()
// );

// export const addBulkProductToCartFailure = createAction(
//   '[Add Bulk Product to Cart] Add Products Failure',
//   props<{ cartError: string }>()
// );

export const addProductToCartSuccessFul = createAction(
  '[Add Product to Cart] Add Product Successful',
  props<{ productItem: CartProductEntry }>()
);

export const addProductToCartFailure = createAction(
  '[Add Product to Cart] Add Product Failure',
  props<{ cartError: string }>()
);
