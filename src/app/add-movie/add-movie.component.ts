import { Component, OnInit, Input, Inject } from '@angular/core';

import { MovieModel } from 'src/app/models/movie.model';
import { MatDialog } from '@angular/material/dialog';

import { AddMovieModalComponent } from 'src/app/add-movie-modal/add-movie-modal.component';
import { from } from 'rxjs';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  @Input() addMovie: MovieModel;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    this.dialog.open(AddMovieModalComponent, {
      data: this.addMovie
    });
  }

  ngOnInit() {}
}
