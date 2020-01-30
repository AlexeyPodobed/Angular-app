import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MovieModel } from 'src/app/models/movie.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-playermodal',
  templateUrl: './playermodal.component.html',
  styleUrls: ['./playermodal.component.css']
})
export class PlayermodalComponent implements OnInit {
  constructor(
    private httpService: HttpService,
    public dialogRef: MatDialogRef<PlayermodalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MovieModel
  ) {}

  onNoClick() {
    this.dialogRef.close();
  }

  deleteContent() {
    this.httpService
      .sendDelateRequest(
        'http://localhost:3000/films',
        this.dialogRef.componentInstance.data.ID
      )
      .subscribe((result: any) => {
        this.dialogRef.close({
          isSuccess: true,
          value: this.dialogRef.componentInstance.data.ID
        });
      });
  }

  ngOnInit() {}
}
