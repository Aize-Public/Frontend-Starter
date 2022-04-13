import { ProductFilterPipe } from './product-filter.pipe';

describe('ProductFilterPipe', () => {
  const qFilterPipe = new ProductFilterPipe();
  const responseList = [
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
  ];
  const filteredList = [
    {
      id: 2,
      name: 'Refined Steel Cheese',
      description:
        'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive',
    },
  ];
  it('create an instance', () => {
    expect(qFilterPipe).toBeTruthy();
  });
  it('Filter the array with refi string', () => {
    const transformedArray = qFilterPipe.transform(responseList, 'refi');
    expect(transformedArray).toEqual(filteredList);
  });

  it('Empty Array Filter should return same array with empty filter string', () => {
    const transformedArray = qFilterPipe.transform(responseList);
    expect(transformedArray).toEqual(responseList);
  });
  it('Filter should return null when sending string value to filter', () => {
    const str = 'something';
    const transformedArray = qFilterPipe.transform(str, 'e');
    expect(transformedArray).toBeNull();
  });
});
