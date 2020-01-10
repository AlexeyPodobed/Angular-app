import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MovieModel } from 'src/app/models/movie.model';
import { Observable, from } from 'rxjs';

@Component({
  selector: 'app-add-movie-modal',
  templateUrl: './add-movie-modal.component.html',
  styleUrls: ['./add-movie-modal.component.css']
})
export class AddMovieModalComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<AddMovieModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MovieModel
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {}
}
