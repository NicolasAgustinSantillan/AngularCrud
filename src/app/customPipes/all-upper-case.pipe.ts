import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'allUpperCase'
})
export class AllUpperCasePipe implements PipeTransform {

  transform(word: string): string {
    return word.toUpperCase();
  }

}
