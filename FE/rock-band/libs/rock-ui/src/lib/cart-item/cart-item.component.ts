import { Component, Input } from '@angular/core';

@Component({
  selector: 'rock-cart-item',
  templateUrl: './cart-item.component.html',
})
export class CartItemComponent {
  @Input() label?: string = 'Product Name';
  @Input() inlineText?: string = 'Price';
}
