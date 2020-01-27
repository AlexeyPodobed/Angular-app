import { Component, OnInit, Input, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MovieModel } from 'src/app/models/movie.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-playermodal',
  templateUrl: './playermodal.component.html',
  styleUrls: ['./playermodal.component.css']
})
export class PlayermodalComponent implements OnInit {
  @Input() moviesArr: MovieModel;
  @Input() selectedMoviesArr: MovieModel;
  ID: MovieModel;
  constructor(
    private httpService: HttpService,
    public dialogRef: MatDialogRef<PlayermodalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MovieModel
  ) {}

  onNoClick() {
    this.dialogRef.close();
  }

  deleteContent() {
    console.log('DSDS ', this.dialogRef.componentInstance.data);
    this.httpService
      .sendDelateRequest(
        'http://localhost:3000/films',
        this.dialogRef.componentInstance.data.ID
      )
      .subscribe((result: any) => {
        console.log('THIS ', this.dialogRef.componentInstance.data);
        this.dialogRef.close({
          isSuccess: true,
          value: result.ID
        });
        console.log('nnn', result.ID);
      });
  }

  ngOnInit() {}
}
