import { Component, OnInit} from '@angular/core';
import { transition } from '@angular/animations';
import {Router} from "@angular/router";
import { HomeComponent } from '../home/home.component';
import { LoginService } from '../login/login.service';
import { HttpClient } from '@angular/common/http';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { log } from 'util';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginService] 
})
export class LoginComponent implements OnInit {

  constructor( private spinnerService: Ng4LoadingSpinnerService,private router: Router,private _LoginService: LoginService) { }
  userName;
  password;
  getservice:any=[];
  listdata:any=[];
  error:boolean=false;
  ngOnInit() {
  }

 
  login()
  { 
    this.spinnerService.show();
    this._LoginService.login(this.userName,this.password).subscribe(data => {
   
   debugger;
      console.log(data);
      this.getservice = data;
    //  debugger;
      if(this.getservice.status=="true")
      {
        localStorage.setItem('user', this.userName);
        this.spinnerService.hide();
        this.router.navigate(['home']);
      // console.log(this.getservice[0][0].ID);
      // this.listdata.push(this.getservice[0]);
      // console.log(this.listdata);
  
  //     for(var i =0 ; i < this.getservice[0].length ; i ++ )
  
  //     {
  //       this.listdata.push(this.getservice[0][i]);
  //  console.log(this.listdata);
  //     }
    
     
    }

    else{console.log("Error"); 
    this.error=true;
    this.spinnerService.hide();
  }
    }, (err) => {
      console.log('====================================');
      console.log(err);
      console.log('====================================');
      this.spinnerService.hide();
      this.error=true;
  
  
  });
    
 
    //console.log(this.listdata);
    // this.router.navigate(['home']);
  
  }

}
