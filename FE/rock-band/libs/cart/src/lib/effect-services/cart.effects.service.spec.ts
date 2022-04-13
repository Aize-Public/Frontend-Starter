import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { CartEffectServices } from './cart.effects.service';
import { StoreModule } from '@ngrx/store';

import { Actions } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

describe('CartEffectServices', () => {
  let service: CartEffectServices;
  let httpMock: HttpTestingController;
  let store: MockStore;
  let actions: Actions;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, StoreModule.forRoot({})],
      providers: [
        CartEffectServices,
        provideMockStore(),
        provideMockActions(() => actions),
      ],
    });
    service = TestBed.inject(CartEffectServices);
    store = TestBed.inject(MockStore);
    actions = TestBed.inject(Actions);
  });

  it('should be created CartEffectServices', () => {
    expect(service).toBeTruthy();
  });
});
