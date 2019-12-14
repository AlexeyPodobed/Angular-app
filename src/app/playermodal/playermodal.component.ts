import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MovieModel } from 'src/app/models/movie.model';

@Component({
  selector: 'app-playermodal',
  templateUrl: './playermodal.component.html',
  styleUrls: ['./playermodal.component.css']
})
export class PlayermodalComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<PlayermodalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MovieModel
  ) {
    console.log('DD', data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {}
}
