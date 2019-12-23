import { Component, OnInit, Input } from '@angular/core';
import { MovieModel } from 'src/app/models/movie.model';
import { Observable, from } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  constructor(private httpService: HttpService) {}
  public moviesArr: MovieModel[] = [];
  public selectedMoviesArr: MovieModel[] = [];
  @Input() ganres: MovieModel[];
  getContent() {
    const response = this.httpService.sendGetRequest(
      'http://localhost:3000/films'
    );
    response.subscribe((moviesArr: any) => {
      this.moviesArr = moviesArr.list;
      this.selectedMoviesArr = moviesArr.list;
    });
  }

  ganresFilter() {
    this.selectedMoviesArr = [];
    const filteredArray = [];
    this.moviesArr.forEach(value => {
      if (value.Genred === '') {
        filteredArray.push(value);
      }
    });
    this.selectedMoviesArr = [...filteredArray];
  }

  test() {
    this.moviesArr.push({
      Description: 'newfilm',
      Genred: 'Porno',
      RunTime: 1444,
      TitleAlt: 'Polnaya huyna',
      srcImage: 'empty',
      viewValue: ''
    });
    console.log('ADDED NEW FILM');
  }

  ngOnInit() {
    this.getContent();
  }
}
