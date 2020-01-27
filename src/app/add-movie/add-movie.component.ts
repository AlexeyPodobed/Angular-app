import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { MovieModel } from 'src/app/models/movie.model';
import { MatDialog } from '@angular/material/dialog';

import { AddMovieModalComponent } from 'src/app/add-movie-modal/add-movie-modal.component';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {
  @Output() createEvent = new EventEmitter<any>();

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const openedDialog = this.dialog.open(AddMovieModalComponent, {
      data: {}
    });

    openedDialog.afterClosed().subscribe(result => {
      if (result && result.isSuccess) {
        this.createEvent.emit(result.value);
      }
    });
  }
  ngOnInit() {}
}
