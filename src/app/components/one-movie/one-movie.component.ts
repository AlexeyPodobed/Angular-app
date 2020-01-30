import { Component, OnInit, Output, Input, EventEmitter } from "@angular/core";
import { MovieModel } from "src/app/models/movie.model";
import { MatDialog } from "@angular/material/dialog";
import { PlayermodalComponent } from "src/app/components/playermodal/playermodal.component";

@Component({
  selector: "app-one-movie",
  templateUrl: "./one-movie.component.html",
  styleUrls: ["./one-movie.component.css"]
})
export class OneMovieComponent implements OnInit {
  @Input() oneMovie: MovieModel;
  @Output() deleteEvent = new EventEmitter<any>();

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const openedDialog = this.dialog.open(PlayermodalComponent, {
      data: this.oneMovie
    });
    openedDialog.afterClosed().subscribe(result => {
      if (result && result.isSuccess) {
        this.deleteEvent.emit(result.value);
      }
    });
  }

  ngOnInit() {}
}
