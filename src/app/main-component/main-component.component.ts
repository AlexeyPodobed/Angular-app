import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
  selectedGenre: string;

  constructor() {}

  ngOnInit() {}

  siblingSelection(value: string) {
    console.log('MAIN COMPONENT:', value);
    this.selectedGenre = value;
  }
}
