import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { MovieModel } from 'src/app/models/movie.model';
import { HttpService } from 'src/app/services/http.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit, OnChanges {
  constructor(private httpService: HttpService) {}
  public moviesArr: MovieModel[] = [];
  public selectedMoviesArr: MovieModel[] = [];
  @Input() selectedGenre: string;
  valueToUse: string;

  page = 1;
  count = 9;

  getContent() {
    const response = this.httpService.sendGetRequest(
      'http://localhost:3000/films'
    );
    response.subscribe((moviesArr: any) => {
      this.moviesArr = moviesArr.list;
      this.selectedMoviesArr = moviesArr.list;
    });
  }
  pushMovieToArray(createdMovie: MovieModel) {
    this.moviesArr.push(createdMovie);
    this.selectedMoviesArr = this.moviesArr;
    if (this.selectedGenre === createdMovie.Genred) {
      this.selectedMoviesArr.push(createdMovie);
    }
  }
  deleteMovieFromArray(movieId: string) {
    this.selectedMoviesArr = this.selectedMoviesArr.filter(
      movie => movie.ID !== movieId
    );
  }
  ganresFilter(choosedGanre: string) {
    this.selectedMoviesArr = [];
    let filteredArray = [];
    if (choosedGanre === 'all') {
      filteredArray = this.moviesArr;
    } else {
      this.moviesArr.forEach(value => {
        if (value.Genred === choosedGanre) {
          filteredArray.push(value);
        }
      });
    }
    this.selectedMoviesArr = [...filteredArray];
  }

  ngOnInit() {
    this.getContent();
  }
  ngOnChanges(changes: any) {
    if (
      changes &&
      changes.selectedGenre &&
      changes.selectedGenre.currentValue
    ) {
      this.valueToUse = changes.selectedGenre.currentValue;
      this.ganresFilter(this.valueToUse);
    }
  }
}
