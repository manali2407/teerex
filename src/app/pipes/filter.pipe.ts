import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(data: any, key: string, value: string): any {
    if(!data || data.length === 0) {
      return [];
    }

    return data.filter((item:any) => item[key].toLowerCase().includes(value.toLocaleLowerCase()));

  // transform(value: any): any[] {
  // debugger
  //   const resultArray = [];
  //   // if (value.length === 0 || filterString === '' || propName === '') {
  //   //   return value;
  //   // }
  // //  // debugger
  // //   for (const item of value) {
  // //     if (item[propName] === filterString) {
  // //       resultArray.push(item)
  // //     }

  // //   }


  //   return value;
  // }

  }
}
