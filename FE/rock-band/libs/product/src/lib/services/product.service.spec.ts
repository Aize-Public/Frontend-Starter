import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ProductModuleConfig, ProductModuleConfigToken, ProductService } from './product.service';

describe('ProductService', () => {
  let service: ProductService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductService,
        {
          provide: ProductModuleConfigToken,
          useValue: <Partial<ProductModuleConfig>>{
            apiURL: 'http://localhost:8080/products?_page=1&_limit=6',
          },
        }
      ],
    });
    service = TestBed.inject(ProductService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created ProductService', () => {
    expect(service).toBeTruthy();
  });

  it('should be get products', () => {
    const envUrl = 'http://localhost:8080/products?_page=1&_limit=6';

    const res: any = [
      {
        id: 1,
        name: 'Ergonomic Concrete Cheese',
        description:
          'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
      },
      {
        id: 2,
        name: 'Refined Steel Cheese',
        description:
          'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
      },
      {
        id: 3,
        name: 'Restructure Steel Towels',
        description: 'The automobile layout consists of a front-engine design',
      },
      {
        id: 4,
        name: 'Ergonomic Concrete Cheese',
        description:
          'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients',
      },
      {
        id: 5,
        name: 'Refined Steel Cheese',
        description:
          'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
      },
      {
        id: 6,
        name: 'Restructure Steel Towels',
        description: 'The automobile layout consists of a front-engine design',
      },
    ];

    let response: any = [];
    service.loadProducts().subscribe((res) => {
      response = res;
    });

    const req = httpMock.expectOne({ url: envUrl });
    req.flush(res);

    expect(req.request.method).toEqual('GET');
    expect(response.length).toBe(6);
    expect(response).toEqual(res);
    httpMock.verify();
  });
});
