import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MovieModel } from 'src/app/models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) {}

  sendGetRequest(url: string) {
    return this.http.get(url);
  }
  sendPostRequest(url: string, movie: MovieModel) {
    return this.http.post(url, { movie });
  }
  sendDelateRequest(url: string, movieId: string) {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      body: { id: movieId }
    };

    return this.http.delete(url, httpOptions);
  }
}
