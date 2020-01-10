import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { MovieModel } from 'src/app/models/movie.model';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  selectedGanre = new FormControl();
  @Output() selectEvent = new EventEmitter<string>();

  @Output() ganres: MovieModel[] = [
    {
      Genred: 'Комедія',
      viewValue: 'Comedy',
      TitleAlt: '',
      Description: '',
      srcImage: '',
      RunTime: NaN
    },
    {
      Genred: 'Триллер',
      viewValue: 'Triller',
      TitleAlt: '',
      Description: '',
      srcImage: '',
      RunTime: NaN
    },
    {
      Genred: 'Пригоди',
      viewValue: 'Adventure',
      TitleAlt: '',
      Description: '',
      srcImage: '',
      RunTime: NaN
    },
    {
      Genred: 'Фентезі',
      viewValue: 'Fantasy',
      TitleAlt: '',
      Description: '',
      srcImage: '',
      RunTime: NaN
    },
    {
      Genred: 'Сімейний',
      viewValue: 'Family',
      TitleAlt: '',
      Description: '',
      srcImage: '',
      RunTime: NaN
    },
    {
      Genred: 'Драма',
      viewValue: 'Drama',
      TitleAlt: '',
      Description: '',
      srcImage: '',
      RunTime: NaN
    },
    {
      Genred: 'all',
      viewValue: 'All',
      TitleAlt: '',
      Description: '',
      srcImage: '',
      RunTime: NaN
    }
  ];

  constructor() {}

  ngOnInit() {}

  selectGenre(selectedValue: string) {
    this.selectEvent.emit(selectedValue);
    console.log('HEADER COMPONENT', selectedValue);
  }
}
