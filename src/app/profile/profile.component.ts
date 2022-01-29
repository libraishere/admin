import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  profileData = [
    {
      "label":"Full Name",
      "value": "Erica Rowan"
    },
    {
      "label":"Email",
      "value": "info@myadmin.com"
    },
    {
      "label":"Mobile",
      "value": "+1 234 768 3453"
    },
    {
      "label":"Country",
      "value": "USA"
    },
    {
      "label":"Address",
      "value": "1595 Dunlevie Rd, Allenhurst, Georgia(GA), 31301"
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
