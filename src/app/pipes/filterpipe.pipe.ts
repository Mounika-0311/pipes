import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterpipe'
})
export class FilterpipePipe implements PipeTransform {

  transform(value: any, filterString : string){
    if(value.length === 0 || filterString === ''){
      return value;
    }
    const users = [];
    for( const user of value){
      if (user['name']=== filterString){
        users.push(user);
      }
    }
    return users;
  }

}
