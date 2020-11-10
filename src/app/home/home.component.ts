import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // TODO: create an array of elements to show on home page

  constructor() { }

  ngOnInit(): void {
  }

  goBack(): void {
    // TODO: get first element before current
  }

  goNext(): void {
    // TODO: get first element after current
  }

}
