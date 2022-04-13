import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';
import { ProductService } from '../services/product.service';
import { ProductActions, productModel } from '@rock-band-ng-store';

@Injectable({
  providedIn: 'root',
})
export class ProductEffectServices {
  constructor(private _actions: Actions, private _httpTrans: ProductService) {}

  // dispatch Load products and on success http call dispatch next successful action
  loadProductEffect = createEffect(() => {
    return this._actions.pipe(
      ofType(ProductActions.loadProducts),
      // ConcatMap for call API once
      concatMap((): Observable<productModel.Product[]> => {
        return this._httpTrans.loadProducts();
      }),
      map((prods: productModel.Product[]) =>
        ProductActions.loadProductsSuccessFul({ data: prods })
      ),
      catchError(() => {
        return of(
          ProductActions.loadProductsFailure({
            productLoadingError: 'Error on loading products!',
          })
        );
      })
    );
  });
}
