import { createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { CartActions } from '../actions';
import { CartProductEntry, ServiceError } from '../models/cart.model';

export interface CartState extends EntityState<CartProductEntry> {
  cartError?: Partial<ServiceError>;
}

export const cartAdapter: EntityAdapter<CartProductEntry> =
  createEntityAdapter<CartProductEntry>({
    selectId: (cartProductEntry: CartProductEntry) => cartProductEntry.id,
  });

export const initialCartState = cartAdapter.getInitialState({
  cartError: {},
});

const hasListLoaded = (state: CartState) => {
  return {
    ...state,
    cartError: '',
  };
};

export const cartReducer = createReducer(
  initialCartState,
  on(CartActions.loadProductInCartSuccessFul, (state: CartState, { data }) => {
    return cartAdapter.addMany(data, hasListLoaded(state));
  }),
  on(
    CartActions.loadProductInCartFailure,
    (state: CartState, { cartError }) => {
      return {
        ...state,
        cartError: cartError,
      };
    }
  ),
  on(
    CartActions.addProductToCartSuccessFul,
    (state: CartState, { productItem }) => {
      return cartAdapter.addOne(productItem, {
        ...state,
        cartError: '',
      });
    }
  ),
  on(CartActions.addProductToCartFailure, (state: CartState, { cartError }) => {
    return {
      ...state,
      cartError,
    };
  })
);

export const { selectAll } = cartAdapter.getSelectors();
