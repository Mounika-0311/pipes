import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipesTask';

   //normal pipe
   title1= "normal pipe";

   Amount = 2000.122;

   percentagedata = '0.86';

   jsonObject = {"name": "mouni"}

   sdgrate = 55.58

   currentDate= new Date();
  
   filteredString : string = '';
  users = [{
      name : 'mounika',
      city: 'Guntur',
      age : '22'
    },
    {
      name : 'saritha',
      city: 'Hyderabad',
      age : '25'
    }
  ]

   appStatus=new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve('user data received');
    },3000);
   });

   customdata = {
    name : 'Archents',
    city: 'vizag',
  }
}
