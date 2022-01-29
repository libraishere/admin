import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

}
