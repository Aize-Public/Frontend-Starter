import { ActionReducerMap } from '@ngrx/store';

import { CartState } from './cart.reducer';
import { ProductState } from './product.reducer';

export interface AppState {
  products?: ProductState;
  cart?: CartState;
}

export const appReducer: ActionReducerMap<AppState> = {};
