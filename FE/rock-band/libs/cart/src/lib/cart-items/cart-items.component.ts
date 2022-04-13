import { Component, Input } from '@angular/core';
import { cartModel } from '@rock-band-ng-store';

@Component({
  selector: 'rock-band-cart-items',
  templateUrl: './cart-items.component.html',
})
export class CartItemsComponent {
  @Input() cartItms?: Array<cartModel.CartProductEntry>;

  constructor() {}
}
