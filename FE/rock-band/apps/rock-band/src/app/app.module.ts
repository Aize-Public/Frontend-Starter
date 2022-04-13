import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CartComponent, CartEffectServices, CartModule, CartModuleConfig, CartModuleConfigToken } from '@rock-band-cart';
import { cartStore, productStore } from '@rock-band-ng-store';
import { ProductEffectServices, ProductModule, ProductModuleConfig, ProductModuleConfigToken, ProductsComponent } from '@rock-band-product';
import { PageNotFoundComponent, RockUiModule } from '@rock-band-rock-ui';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    outlet: 'productOutlet',
  },
  {
    path: '',
    component: CartComponent,
    outlet: 'cartOutlet',
  },
  {
    path: '404',
    component: PageNotFoundComponent,
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
];


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { enableTracing: false }),
    RockUiModule,
    ProductModule,
    CartModule,
    StoreModule.forRoot({
      cart: cartStore.cartReducer,
      products: productStore.productReducer,
    }),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([ProductEffectServices, CartEffectServices]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [
    {
      provide: CartModuleConfigToken,
      useValue: <Partial<CartModuleConfig>>{
        apiURL: environment.cartApiUrl,
      },
    },
    {
      provide: ProductModuleConfigToken,
      useValue: <Partial<ProductModuleConfig>>{
        apiURL: environment.productApiUrl,
      },
    },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
