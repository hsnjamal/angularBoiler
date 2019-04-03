import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
//import { LoginService } from '../app/login/login.service';
import {NgxPaginationModule} from 'ngx-pagination';
//import { setTimeout } from 'timers';
const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'home',
    component: HomeComponent

  },
  { path: '**', redirectTo: '/login', pathMatch: 'full' },

  
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,FormsModule, NgxPaginationModule,
    HttpClientModule,
    Ng4LoadingSpinnerModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
      )//LoginService
  ],
  providers: [  HttpClientModule,],
  bootstrap: [AppComponent]
})
export class AppModule { }
