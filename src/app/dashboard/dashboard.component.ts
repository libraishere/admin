import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  userId: any;
  id: any;
  title:any;
  desc:any;
  data: any = [];
  p: number = 1;

  tableData = [
    {
      "sno":"1",
      "firstname":"Deshmukh",
      "lastname":"Prohaska",
      "username":"@Genelia",
      "role":"Admin"
    },
    {
      "sno":"2",
      "firstname":"Deshmukh",
      "lastname":"Gaylord",
      "username":"@Ritesh",
      "role":"member"
    },
    {
      "sno":"3",
      "firstname":"Sanghani",
      "lastname":"Gusikowski",
      "username":"@Govinda",
      "role":"developer"
    },
    {
      "sno":"4",
      "firstname":"Roshan",
      "lastname":"Rogahn",
      "username":"@Hritik",
      "role":"supporter"
    },
    {
      "sno":"5",
      "firstname":"Joshi",
      "lastname":"Hickle",
      "username":"@Maruti",
      "role":"member"
    },
    {
      "sno":"6",
      "firstname":"Nigam",
      "lastname":"Eichmann",
      "username":"@Sonu",
      "role":"supporter"
    },
  ]

  constructor(private http: HttpClient) { 
    
  }

  ngOnInit(): void {
    this.getData();
    // this.userId = userId;
  }

  getData() {
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(res => {
      this.data = res;
      console.log('data response', this.data);
    });
  }
  

}
