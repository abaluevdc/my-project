import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numSpaces'
})
export class NumSpacesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
