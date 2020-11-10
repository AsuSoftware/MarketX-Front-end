import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  languageOptionState = false;

  constructor() { }

  ngOnInit(): void {
  }

  languageOption(): void {
    this.languageOptionState = !this.languageOptionState;
  }

}
