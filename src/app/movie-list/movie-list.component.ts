import { Component, OnInit } from '@angular/core';
import { MovieModel } from 'src/app/models/movie.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {
  // constructor(private http: HttpClient) {}
  //   private contentUrl = 'http://localhost:3000/films';
  //   public getContent(): Promise<Array<any>> {
  //     const response = this.http.get<any[]>(this.contentUrl);
  //     return response.toPromise();
  //   }
  //   ngOnInit() {
  //     const result = this.getContent();
  //     result.then(data => {
  //       console.log('data:', data);
  //     });
  //   }
  // }
}

//   public moviesArr: MovieModel[] = [
//     {
//       Title: 'Joker',
//       Rating: 2.1,
//       imgUrl:
//         'https://image.tmdb.org/t/p/w185_and_h278_bestv2/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg'
//     },
//     {
//       Title: 'Joker2',
//       Rating: 5.1,
//       imgUrl:
//         'https://image.tmdb.org/t/p/w185_and_h278_bestv2/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg'
//     },
//     {
//       Title: 'Joker3',
//       Rating: 1.1,
//       imgUrl:
//         'https://image.tmdb.org/t/p/w185_and_h278_bestv2/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg'
//     },
//     {
//       Title: 'Joker4',
//       Rating: 9.1,
//       imgUrl:
//         'https://image.tmdb.org/t/p/w185_and_h278_bestv2/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg'
//     }
//   ];

//   ngOnInit() {}
// }
