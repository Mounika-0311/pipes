import { Component } from '@angular/core';

@Component({
  selector: 'app-jsondata',
  templateUrl: './jsondata.component.html',
  styleUrls: ['./jsondata.component.css']
})
export class JsondataComponent {
  users = [{
    name : 'Mounika',
    city: 'Guntur',
    age : '22',
    gender: 'Female'
  },
  {
    name : 'Saritha',
    city: 'Hyderabad',
    age : '25',
    gender: 'Female'
  },
  {
    name : 'Swapna',
    city: 'visakhapatnam',
    age : '18',
    gender: 'Female'
  },{
    name : 'Jyothi',
    city: 'mumbai',
    age : '32',
    gender: 'Female'
  },
  {
    name : 'Hema',
    city: 'kolkata',
    age : '29',
    gender: 'Female'
  },
  {
    name : 'Sanju',
    city: 'amaravathi',
    age : '50',
    gender: 'Male'
  },
  {
    name : 'Sachin',
    city: 'pune',
    age : '36',
    gender: 'Male'
  },
  {
    name : 'Mahi',
    city: 'chennai',
    age : '45',
    gender: 'Male'
  },
  {
    name : 'Tagore',
    city: 'banglore',
    age : '19',
    gender: 'Male'
  },
  {
    name : 'Sree',
    city: 'vizaj',
    age : '40',
    gender: 'Male'
  }
]
searchTerm: string = '';
}
