import { createFeatureSelector, createSelector } from '@ngrx/store';
import { cartStore } from '../reducers';

export const selectCartState =
  createFeatureSelector<cartStore.CartState>('cart');

export const cartSelectAll = createSelector(
  selectCartState,
  cartStore.selectAll
);
