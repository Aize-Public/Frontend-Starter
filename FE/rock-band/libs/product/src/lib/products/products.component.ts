import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  appStore,
  productModel,
  ProductActions,
  productSelector,
} from '@rock-band-ng-store';
import { map, Observable, tap } from 'rxjs';

@Component({
  selector: 'rock-band-products',
  templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit {
  isProductLoading = true;
  productItm$?: Observable<productModel.Product[]>;
  query?: string;

  constructor(private _store: Store<appStore.AppState>) {}

  ngOnInit(): void {
    this._store.dispatch(ProductActions.loadProducts());

    this.productItm$ = this._store
      .select(productSelector.productSelectAll)
      .pipe(
        tap((res) => {
          if (res.length) {
            this.isProductLoading = false;
          }
        })
      );
  }

  searchProductHandler(event: any) {
    this.query = event.currentTarget.value;
  }
}
