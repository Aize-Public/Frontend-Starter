import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';
import { CartActions, cartModel } from '@rock-band-ng-store';
import { CartService } from '../services/cart.service';

@Injectable({
  providedIn: 'root',
})
export class CartEffectServices {
  constructor(private _actions: Actions, private _httpCart: CartService) {}

  // dispatch Load Cart and on success http call dispatch next successful action
  loadCartProductsEffect = createEffect(() => {
    return this._actions.pipe(
      ofType(CartActions.loadProductInCart),
      // ConcatMap for call API once
      concatMap((): Observable<cartModel.CartProductEntry[]> => {
        return this._httpCart.loadProductInCart();
      }),
      map((prods: cartModel.CartProductEntry[]) =>
        CartActions.loadProductInCartSuccessFul({ data: prods })
      ),
      catchError(() => {
        return of(
          CartActions.loadProductInCartFailure({
            cartError: { message: 'Error on loading products!' },
          })
        );
      })
    );
  });
}
