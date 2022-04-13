import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'rock-product-thumb',
  templateUrl: './product-thumb.component.html',
})
export class ProductThumbComponent {
  @Input() imgSrc?: string;
  @Input() title?: string;
  @Output() ctaHandler: EventEmitter<any> = new EventEmitter();

  addToCartHandler(event: Event): void {
    this.ctaHandler.emit(event);
  }
}
