import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productFilter',
})
export class ProductFilterPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (!Array.isArray(value)) return null;
    if (!args) return value;
    args = args.trim().toLowerCase();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return value.filter((val: any) =>
      val.name.toLowerCase().includes(args.toLowerCase())
    );
  }
}
