import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RockUiModule } from '@rock-band-rock-ui';
import { CartItemsComponent } from './cart-items/cart-items.component';
import { CartComponent } from './cart/cart.component';
import { CartService } from './services/cart.service';
import { CartEffectServices } from './effect-services/cart.effects.service';

@NgModule({
  imports: [CommonModule, HttpClientModule, RockUiModule],
  declarations: [CartItemsComponent, CartComponent],
  exports: [CartItemsComponent, CartComponent],
  providers: [CartService, CartEffectServices],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CartModule {}
