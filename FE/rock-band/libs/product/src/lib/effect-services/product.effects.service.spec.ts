import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { StoreModule } from '@ngrx/store';

import { Actions } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { ProductEffectServices } from './product.effects.service';

describe('ProductEffectServices', () => {
  let service: ProductEffectServices;
  let httpMock: HttpTestingController;
  let store: MockStore;
  let actions: Actions;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, StoreModule.forRoot({})],
      providers: [
        ProductEffectServices,
        provideMockStore(),
        provideMockActions(() => actions),
      ],
    });
    service = TestBed.inject(ProductEffectServices);
    store = TestBed.inject(MockStore);
    actions = TestBed.inject(Actions);
  });

  it('should be created ProductEffectServices', () => {
    expect(service).toBeTruthy();
  });
});
