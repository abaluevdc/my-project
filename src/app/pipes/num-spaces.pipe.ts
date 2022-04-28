import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numSpaces',
})
export class NumSpacesPipe implements PipeTransform {
  transform(value: any): string {

    // if (typeof value !== 'string') {
    //   throw new Error("value is not a number");
    // }

    // console.log('rrr')
    //
    // let parts = value.toString().split('.');
    // parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    // return parts.join('.')


    //todo написать проверку
    // console.log('pipe value', typeof value)

    const result = value.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ');

    // console.log('pipe', typeof result/);

    return result;
  }
}

//
//
// function numberWithSpaces(x) {
//   let parts = x.toString().split('.');
//   parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
//   return parts.join('.');
// }
// let num = this.numberWithSpaces(123456789);
// console.log(num);
