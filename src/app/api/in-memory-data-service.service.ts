import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { MovieModel } from 'src/app/models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataServiceService implements InMemoryDbService {
  createDb() {
    const moviesArr: MovieModel[] = [
      {
        Title: 'Joker',
        Rating: 2.1,
        imgUrl:
          'https://image.tmdb.org/t/p/w185_and_h278_bestv2/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg'
      },
      {
        Title: 'Joker2',
        Rating: 5.1,
        imgUrl:
          'https://image.tmdb.org/t/p/w185_and_h278_bestv2/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg'
      },
      {
        Title: 'Joker3',
        Rating: 1.1,
        imgUrl:
          'https://image.tmdb.org/t/p/w185_and_h278_bestv2/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg'
      },
      {
        Title: 'Joker4',
        Rating: 9.1,
        imgUrl:
          'https://image.tmdb.org/t/p/w185_and_h278_bestv2/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg'
      }
    ];

    return { moviesArr };
  }

  constructor() {}
}
