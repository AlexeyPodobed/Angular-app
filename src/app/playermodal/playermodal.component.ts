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
  private httpService: HttpService;
  @Input() moviesArr: MovieModel;
  @Input() selectedMoviesArr: MovieModel;
  constructor(
    public dialogRef: MatDialogRef<PlayermodalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MovieModel
  ) {}

  // onNoClick(): void {
  //   this.dialogRef.close();
  // }

  deleteContent(movieId: string) {
    this.httpService
      .sendDelateRequest('http://localhost:3000/films', movieId)
      .subscribe(result => {
        this.dialogRef.close();
        console.log('RR ', result);
      });
  }

  ngOnInit() {}
}
