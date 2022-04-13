import { TestBed, tick } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { CartModuleConfig, CartModuleConfigToken, CartService } from './cart.service';
import { of } from 'rxjs';

describe('CartService', () => {
  let service: CartService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CartService, 
        {
        provide: CartModuleConfigToken,
        useValue: <Partial<CartModuleConfig>>{
          apiURL: 'http://localhost:8080/carts',
        },
      }],
    });
    service = TestBed.inject(CartService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created CartService', () => {
    expect(service).toBeTruthy();
  });

  it('should be get products', () => {
    const envUrl = 'http://localhost:8080/carts';

    const res: any = [
      {
        id: 1,
        products: [
          {
            id: 242,
            quantity: 4,
            name: 'Tasty Soft Pants',
          },
          {
            id: 53,
            quantity: 3,
            name: 'Tasty Soft Towels',
          },
          {
            id: 881,
            quantity: 4,
            name: 'Awesome Granite Bike',
          },
        ],
      },
    ];

    let response: any = [];
    service.loadProductInCart().subscribe((res) => {
      response = res;
    });

    const req = httpMock.expectOne({ url: envUrl });
    req.flush(res);

    expect(req.request.method).toEqual('GET');
    expect(response.length).toBe(1);
    expect(response).toEqual(res);
    httpMock.verify();
  });
});
