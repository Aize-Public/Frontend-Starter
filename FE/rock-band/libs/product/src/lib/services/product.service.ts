import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { productModel } from '@rock-band-ng-store';

export interface ProductModuleConfig {
  apiURL: string;
}

export const ProductModuleConfigToken = new InjectionToken<ProductModuleConfig>(
  'Product Module Config Token'
);

export const DEFAULT_PRODUCT_MODULE_CONFIG: ProductModuleConfig = {
  apiURL: '',
};

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  readonly productServiceConfig: ProductModuleConfig;
  constructor(
    private readonly http: HttpClient,
    @Optional()
    @Inject(ProductModuleConfigToken)
    serviceConfig: ProductModuleConfig | null
  ) {
    this.productServiceConfig = {
      ...DEFAULT_PRODUCT_MODULE_CONFIG,
      ...serviceConfig,
    };
  }

  loadProducts(): Observable<productModel.Product[]> {
    return this.http
      .get<productModel.Product[]>(this.productServiceConfig.apiURL)
      .pipe(
        map((res) => res)
        // catchError(() => {
        //   return throwError('Error on loading products!');
        // })
      );
  }
}
