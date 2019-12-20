import { Component, OnInit } from '@angular/core';
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

  getContent() {
    const response = this.httpService.sendGetRequest(
      'http://localhost:3000/films'
    );
    response.subscribe((moviesArr: any) => {
      this.moviesArr = moviesArr.list;
      this.selectedMoviesArr = moviesArr.list;
      console.log('m', this.selectedMoviesArr);
    });
  }
  ganresFilter() {
    this.selectedMoviesArr = [];
    this.moviesArr.forEach(function(value, key) {
      if (value.Genred === 'Жахи') {
        this.selectedMoviesArr.push(value);
      }
      console.log(this.selectedMoviesArr, 'fil');
      return this.selectedMoviesArr;
    });
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
