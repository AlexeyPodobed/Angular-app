import { Component, OnInit, Output, Input } from '@angular/core';
import { MovieModel } from 'src/app/models/movie.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
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
      Genred: 'Жахи',
      viewValue: 'Horor',
      TitleAlt: '',
      Description: '',
      srcImage: '',
      RunTime: NaN
    }
  ];

  constructor() {}

  ngOnInit() {}
}
