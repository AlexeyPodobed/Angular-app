import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  MatDialogModule,
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { OneMovieComponent } from './one-movie/one-movie.component';
import { ContentComponent } from './content/content.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { PlayermodalComponent } from './playermodal/playermodal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddMovieModalComponent } from './add-movie-modal/add-movie-modal.component';
import { from } from 'rxjs';
import { HttpClient } from 'selenium-webdriver/http';

@NgModule({
  declarations: [
    AppComponent,
    MainComponentComponent,
    HeaderComponent,
    SliderComponent,
    MovieListComponent,
    OneMovieComponent,
    ContentComponent,
    AddMovieComponent,
    PlayermodalComponent,
    AddMovieModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    HttpClientModule,
    MatSelectModule
  ],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
    {
      provide: MatDialogRef,
      useValue: {}
    }
  ],
  entryComponents: [PlayermodalComponent, AddMovieModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
