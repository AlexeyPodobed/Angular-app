import { NgxPaginationModule } from 'ngx-pagination';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { MainComponentComponent } from './components/main-component/main-component.component';
import { HeaderComponent } from './components/header/header.component';

import { MovieListComponent } from './components/movie-list/movie-list.component';
import { OneMovieComponent } from './components/one-movie/one-movie.component';
import { ContentComponent } from './components/content/content.component';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { PlayermodalComponent } from './components/playermodal/playermodal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddMovieModalComponent } from './components/add-movie-modal/add-movie-modal.component';
import { from } from 'rxjs';
import { HttpClient } from 'selenium-webdriver/http';
import { SliderComponent } from './components/slider/slider.component';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MainComponentComponent,
    HeaderComponent,

    MovieListComponent,
    OneMovieComponent,
    ContentComponent,
    AddMovieComponent,
    PlayermodalComponent,
    AddMovieModalComponent,
    SliderComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    HttpClientModule,
    MatSelectModule,

    ReactiveFormsModule,

    NgxPaginationModule
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
