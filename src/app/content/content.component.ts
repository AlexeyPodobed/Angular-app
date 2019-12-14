import { Component, OnInit } from '@angular/core';
import { MovieModel } from 'src/app/models/movie.model';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { MovieListComponent } from '../movie-list/movie-list.component';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  public moviesArr: MovieModel[];

  constructor(private http: HttpClient) {}

  getContent() {
    this.http.get<any[]>('http://localhost:3000/films').subscribe(moviesArr => {
      this.moviesArr = moviesArr;
      console.log(moviesArr, 'data');
    });
  }
  ngOnInit() {
    const result = this.getContent();
  }
}

//   public moviesArr: MovieModel[];

//   constructor(private http: HttpClient) {}

//   private contentUrl = 'http://localhost:3000/films';

//   public getContent(): Promise<Array<any>> {
//     const response = this.http.get<any[]>(this.contentUrl);
//     return response.toPromise();
//   }
//   ngOnInit() {
//     const result = this.getContent();
//     result.then(data => {
//       this.moviesArr = data;
//       console.log('data:', data);
//     });
//   }
// }
