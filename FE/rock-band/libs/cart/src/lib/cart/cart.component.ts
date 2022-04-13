import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  appStore,
  CartActions,
  cartSelectors,
  cartModel,
} from '@rock-band-ng-store';
import { Observable, Subject, Subscription, takeUntil } from 'rxjs';

@Component({
  selector: 'rock-band-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit, OnDestroy {
  isCartLoading = true;
  cartItm$: Observable<cartModel.CartProductEntry[]> | undefined;
  temp$: Subscription | undefined;
  cartItms?: cartModel.CartProductEntry[];

  private readonly destroy$ = new Subject();

  constructor(private _store: Store<appStore.AppState>) {}
  ngOnInit(): void {
    this._store.dispatch(CartActions.loadProductInCart());
    this.temp$ = this._store
      .select(cartSelectors.cartSelectAll)
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe((rs) => {
        if (rs.length) {
          this.cartItms = rs;
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next(0);
    this.destroy$.complete();
  }
}
