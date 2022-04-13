import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { cartModel } from '@rock-band-ng-store';

export interface CartModuleConfig {
  apiURL: string;
}

export const CartModuleConfigToken = new InjectionToken<CartModuleConfig>(
  'Cart Module Config Token'
);

export const DEFAULT_CART_MODULE_CONFIG: CartModuleConfig = {
  apiURL: '',
};

@Injectable({
  providedIn: 'root',
})
export class CartService {
  readonly cartServiceConfig: CartModuleConfig;
  constructor(
    private readonly http: HttpClient,
    @Optional()
    @Inject(CartModuleConfigToken)
    serviceConfig: CartModuleConfig | null
  ) {
    this.cartServiceConfig = {
      ...DEFAULT_CART_MODULE_CONFIG,
      ...serviceConfig,
    };
  }

  loadProductInCart(): Observable<cartModel.CartProductEntry[]> {
    return this.http
      .get<cartModel.CartProductEntry[]>(this.cartServiceConfig.apiURL)
      .pipe(
        map((res) => res)
        // catchError(() => {
        //   return of({ message: 'Error on loading products!'});
        // })
      );
  }
}
