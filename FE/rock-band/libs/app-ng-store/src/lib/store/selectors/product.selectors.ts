import { createFeatureSelector, createSelector } from '@ngrx/store';
import { productStore } from '../reducers';

export const selectProductState =
  createFeatureSelector<productStore.ProductState>('products');

export const productSelectAll = createSelector(
  selectProductState,
  productStore.selectAll
);
