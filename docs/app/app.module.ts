import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgImageFullscreenViewModule } from 'ng-image-fullscreen-view';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { AppHome } from './home/app.component';

import { Header } from './components/header';
import { Footer } from './components/footer';
import { Card } from './components/card';
import { AppModulePopUp } from './components/DialogModule/AppModule';

const routes: Routes = [{ path: '', component: AppHome }];

@NgModule({
  declarations: [AppComponent, AppHome, Header, Footer, Card, AppModulePopUp],
  imports: [
    BrowserModule,
    NgImageFullscreenViewModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
