import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { appReducers } from './app.state';

import { AppComponent } from './app.component';
import { TodosModule } from './pages/todos.module';

import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule
    , ReactiveFormsModule
    , TodosModule
    , StoreModule.forRoot(appReducers)
    , StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
