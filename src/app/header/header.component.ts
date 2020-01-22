import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { SelectModel } from 'src/app/models/movie.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  selectedGanre = new FormControl();
  @Output() selectEvent = new EventEmitter<string>();

  @Output() ganres: SelectModel[] = [
    {
      Genred: 'Комедія',
      viewValue: 'Comedy'
    },
    {
      Genred: 'Триллер',
      viewValue: 'Triller'
    },
    {
      Genred: 'Пригоди',
      viewValue: 'Adventure'
    },
    {
      Genred: 'Фентезі',
      viewValue: 'Fantasy'
    },
    {
      Genred: 'Сімейний',
      viewValue: 'Family'
    },
    {
      Genred: 'Драма',
      viewValue: 'Drama'
    },
    {
      Genred: 'all',
      viewValue: 'All'
    }
  ];

  constructor() {}

  ngOnInit() {}

  selectGenre(selectedValue: string) {
    this.selectEvent.emit(selectedValue);
    console.log('HEADER COMPONENT', selectedValue);
  }
}
