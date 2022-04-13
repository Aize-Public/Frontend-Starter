import { Component, Input } from '@angular/core';
import { productModel } from '@rock-band-ng-store';

@Component({
  selector: 'rock-band-product-items',
  templateUrl: './product-items.component.html',
})
export class ProductItemsComponent {
  @Input() productItm: Array<productModel.Product> | undefined | null;
}
