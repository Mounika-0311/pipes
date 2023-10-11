import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jsondatapipe'
})
export class JsondatapipePipe implements PipeTransform {

  transform(value: any[], searchText: string): any[] {
    if (!value || !searchText) {
      return value;
    }

    searchText = searchText.toLowerCase();

    return value.filter(item => item.name.toLowerCase().includes(searchText));
  }
}

