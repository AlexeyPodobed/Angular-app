import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MovieModel } from 'src/app/models/movie.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private http: HttpClient) {}

  sendGetRequest(url: string) {
    return this.http.get(url);
  }
}
