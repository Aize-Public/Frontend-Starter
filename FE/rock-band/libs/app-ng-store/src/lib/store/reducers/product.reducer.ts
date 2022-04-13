import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { Product, ProductData } from '../models/product.model';
import { ProductActions } from '../actions';

export interface ProductState extends EntityState<Product> {
  productError?: string;
}

export const productAdapter: EntityAdapter<Product> =
  createEntityAdapter<Product>({
    selectId: (prd) => prd.id + '-' + prd.name.replace(/ /g, ''),
  });

export const initialProductState = productAdapter.getInitialState({
  productError: '',
});

const hasListLoaded = (state: ProductState) => {
  return {
    ...state,
    productError: '',
  };
};

export const productReducer = createReducer(
  initialProductState,
  on(
    ProductActions.loadProductsSuccessFul,
    (state: ProductState, action: ProductData) => {
      return productAdapter.addMany(action.data, hasListLoaded(state));
    }
  ),
  on(
    ProductActions.loadProductsFailure,
    (state: ProductState, { productLoadingError }) => {
      return {
        ...state,
        productError: productLoadingError,
      };
    }
  )
);

export const { selectAll } = productAdapter.getSelectors();
