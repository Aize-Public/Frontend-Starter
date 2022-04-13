import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RockUiModule } from '@rock-band-rock-ui';
import { ProductPipesModule } from './common/pipes/pipes.module';
import { ProductItemsComponent } from './product-items/product-items.component';
import { ProductsComponent } from './products/products.component';
import { ProductService } from './services/product.service';
import { ProductEffectServices } from './effect-services/product.effects.service';

@NgModule({
  imports: [CommonModule, HttpClientModule, RockUiModule, ProductPipesModule],
  declarations: [ProductItemsComponent, ProductsComponent],
  exports: [ProductItemsComponent, ProductsComponent],
  providers: [ProductService, ProductEffectServices],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProductModule {}
