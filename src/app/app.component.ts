import { Component } from '@angular/core';
import {Router} from "@angular/router";
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

 // static apiURL="http://localhost:8000/gehvara/";



constructor(private spinnerService: Ng4LoadingSpinnerService,private router: Router) { }

ngOnInit() {
  this.spinnerService.show();
  if(localStorage.getItem('user')==null){
    this.router.navigate(['login']);

  }
  else{
    this.router.navigate(['home']);
  }
  this.spinnerService.hide();
}
}
