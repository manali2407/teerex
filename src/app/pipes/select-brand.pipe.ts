import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'selectBrand',
  standalone: true
})
export class SelectBrandPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
