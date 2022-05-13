import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pricecard';
  data = [
    {
      title : "Free",
      price : 0,
      isDefault : false,
      features : [
        {
          name : "10 users included",
          isEnable : true
        },
        {
          name : "2 GB of storage",
          isEnable : true
        },
        {
          name : "Email support",
          isEnable : true
        },
        {
          name : "Help center access",
          isEnable : true
        }
      ]
    },
    {
      title : "Plus",
      price : 20,
      isDefault : true,
      features : [
        {
          name : "20 users included",
          isEnable : true
        },
        {
          name : "10 GB of storage",
          isEnable : true
        },
        {
          name : "Priority Email support",
          isEnable : true
        },
        {
          name : "Help center access",
          isEnable : true
        }
      ]
    },
    {
      title : "Pro",
      price : 40,
      isDefault : false,
      features : [
        {
          name : "30 users included",
          isEnable : true
        },
        {
          name : "15 GB of storage",
          isEnable : true
        },
        {
          name : "Phone and email support",
          isEnable : true
        },
        {
          name : "Help center access",
          isEnable : true
        }
      ]
    },
  ]
  value=""
}
