import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custompipe'
})
export class CustompipesPipe implements PipeTransform {

  // handling the input 
  transform(value: string, city: string): string {
    // const[rate]=args;
    // return value *rate;
    return 'city Name = ' + city;
  }

}
