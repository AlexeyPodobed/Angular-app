import {
  Component,
  OnInit,
  Input,
  Inject,
  Output,
  EventEmitter
} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MovieModel, SelectModel } from 'src/app/models/movie.model';
import { Observable, from } from 'rxjs';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-add-movie-modal',
  templateUrl: './add-movie-modal.component.html',
  styleUrls: ['./add-movie-modal.component.css']
})
export class AddMovieModalComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<AddMovieModalComponent>,
    @Inject(MAT_DIALOG_DATA)
    public inputValue: any,
    private httpService: HttpService
  ) {}
  public formValue: FormGroup;

  ganres: SelectModel[] = [
    {
      Genred: 'Комедія',
      viewValue: 'Comedy'
    },
    {
      Genred: 'Триллер',
      viewValue: 'Triller'
    },
    {
      Genred: 'Пригоди',
      viewValue: 'Adventure'
    },
    {
      Genred: 'Фентезі',
      viewValue: 'Fantasy'
    },
    {
      Genred: 'Сімейний',
      viewValue: 'Family'
    },
    {
      Genred: 'Драма',
      viewValue: 'Drama'
    }
  ];

  onSubmit() {
    if (this.formValue.valid) {
      const createdMovie: MovieModel = {
        Description: this.formValue.value.Description,
        Genred: this.formValue.value.Genred,
        RunTime: this.formValue.value.RunTime,
        TitleAlt: this.formValue.value.TitleAlt,
        srcImage: this.formValue.value.srcImage
      };

      this.httpService
        .sendPostRequest('http://localhost:3000/films', createdMovie)
        .subscribe((response: any) => {
          this.dialogRef.close({ isSuccess: true, value: response.movie });
        });
    }
  }

  ngOnInit() {
    this.formValue = new FormGroup({
      TitleAlt: new FormControl('', Validators.required),
      srcImage: new FormControl('', Validators.required),
      Genred: new FormControl('', Validators.required),
      RunTime: new FormControl('', Validators.required),
      Description: new FormControl('', [
        Validators.required,
        Validators.maxLength(1000)
      ])
    });
  }
}
