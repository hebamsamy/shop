import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'money'
})
export class MoneyPipe implements PipeTransform {

  transform(value: number,to:string): number {
    if(to=="EG")
      return value * 48;
    else
      return value;
  }

}
