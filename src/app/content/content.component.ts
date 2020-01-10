import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { MovieModel } from 'src/app/models/movie.model';
import { Observable, from } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit, OnChanges {
  constructor(private httpService: HttpService) {
    if (this.selectedGenre) {
      console.log('V', this.selectedGenre);
    }
  }
  public moviesArr: MovieModel[] = [];
  public selectedMoviesArr: MovieModel[] = [];
  @Input() ganres: MovieModel[];
  @Input() selectedGenre: string;
  valueToUse: 'string';
  getContent() {
    const response = this.httpService.sendGetRequest(
      'http://localhost:3000/films'
    );
    response.subscribe((moviesArr: any) => {
      this.moviesArr = moviesArr.list;
      this.selectedMoviesArr = moviesArr.list;
    });
  }
  postContent() {
    this.httpService
      .sendPostRequest('http://localhost:3000/films', {
        Description: 'newfilm',
        Genred: 'Porno',
        RunTime: 1444,
        TitleAlt: 'Polnaya huyna',
        srcImage: 'empty',
        viewValue: ''
      })
      .subscribe((data: MovieModel[]) => {
        console.log(data);
      });
  }

  // test() {
  //   this.moviesArr.push({
  //     Description: 'newfilm',
  //     Genred: 'Porno',
  //     RunTime: 1444,
  //     TitleAlt: 'Polnaya huyna',
  //     srcImage: 'empty',
  //     viewValue: ''
  //   });
  //   console.log('ADDED NEW FILM', this.moviesArr);
  // }
  ganresFilter(val) {
    this.selectedMoviesArr = [];
    const filteredArray = [];
    this.moviesArr.forEach(value => {
      if (value.Genred === val) {
        filteredArray.push(value);
      }
    });
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

      // CALL HERE CORRECT METHOD
      console.log(
        'CONTENT COMPONENT, VALUE HAS BEEN CHANGED:',
        this.valueToUse
      );
    }
  }
}
