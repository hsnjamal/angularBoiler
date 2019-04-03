import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home/home.service';
import { HttpClient } from '@angular/common/http';
import { AppComponent } from '../app.component';
import { Router } from "@angular/router";
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import * as $ from 'jquery';
// import 'datatables.net';
// import * as buttons from 'jquery';
import { ChangeDetectorRef } from '@angular/core';
// import { setTimeout } from 'timers';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [HomeService]
})
export class HomeComponent {
  // filterData:any=[];
  isEdit: boolean = false;
  id;
  gender;
  height;
  age;
  hairType;
  eyeColor;
  search;
  // images;
  pName;
  pNic;
  pLang;
  pFname;
  pMname;
  pNation;
  pLoc;
  pMissdate;//= this.pMissdate=="undefined"? "" : "O";
  pMail;
  pMob1;
  pMob2;
  pBodycolor;
  faceShape;
  pBodytype;
  pMoreinfo;
  pContactinfo;
  hairColor;
  pstatus;
  show: boolean = false;
  rowindex;
  p: number = 1;
  editStatus: any = [];
  getservice: any = [];
  listdata: any = [];
  updateStatus: any = [];
  deleteStatus: any = [];
  myVar;
  imageUrl = AppComponent.apiURL;
  constructor(private spinnerService: Ng4LoadingSpinnerService, private chRef: ChangeDetectorRef, private _HomeService: HomeService, private router: Router) {

    this.getrecords();
    // $(document).ready( function () {

    // } );


    //this.updatestatus(data);
  }

  cancelEdit() {

    this.show = !(this.show);
    this.isEdit = !(this.isEdit);
  }



  edit(row, index) {
    this.show = true;
    this.isEdit = true;
    this.rowindex = index;
    this.id = row.ID;



    this.height = row.HEIGHTAPPROX;
    this.age = row.AGEAPPROX;
    this.hairType = row.HAIRTYPE;
    this.eyeColor = row.EYECOLOR;
    // this.images=row.IMAGE;
    this.pName = row.NAME;
    this.pNic = row.NICKNAME;
    this.pLang = row.LANGUAGE;
    this.pFname = row.FATHERNAME;
    this.pMname = row.MOTHERNAME;
    this.pNation = row.NATIONALITY;
    this.pLoc = row.MISSINGLOCATION;
    this.pMissdate = row.MISSINGSINCE;
    this.pMail = row.MAILID;
    this.pMob1 = row.MOBILE1;
    this.pMob2 = row.MOBILE2;
    this.pBodycolor = row.BODYCOLOR;
    this.faceShape = row.FACESHAPE;
    this.pBodytype = row.BODYTYPE;
    this.pMoreinfo = row.MOREINFO;
    this.pContactinfo = row.YOURINFO;
    this.hairColor = row.HAIRCOLOR;


    this.pstatus = row.STATUS;
    this.gender = row.GENDER;
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

    // $("#jstatus option[value='"+row.GENDER+"']").prop('selected', true);
    // $('#jstatus option[value=Female]').prop('selected', true);
    //$('[name=gender]').val( row.GENDER);//To select Blue
    console.log(this.gender, this.pstatus);
    //  var a = $('#info').val();

  }

  print() { console.log(this.pName); }

  postedit() {
    this.spinnerService.show();
    let body: FormData = new FormData();
    //var body ;//= new URLSearchParams();
    body.append('id', this.id);
    // body.append('image', this.images);
    body.append('name', this.pName);
    body.append('nickName', this.pNic);
    body.append('gender', this.gender);
    body.append('language', this.pLang);
    body.append('fatherName', this.pFname);
    body.append('motherName', this.pMname);
    body.append('nationality', this.pNation);
    body.append('missingLocation', this.pLoc);
    body.append('missingSince', this.pMissdate);
    body.append('mailId', this.pMail);
    body.append('mobile1', this.pMob1);
    body.append('mobile2', this.pMob2);
    body.append('bodyColor', this.pBodycolor);
    body.append('faceShape', this.faceShape);
    body.append('ageapprox', this.age);
    body.append('heightApprox', this.height);
    body.append('eyeColor', this.eyeColor);
    body.append('hairType', this.hairType);
    body.append('hairColor', this.hairColor);
    body.append('bodyType', this.pBodytype);
    body.append('moreInfo', this.pMoreinfo);
    body.append('yourInfo', this.pContactinfo);
    // body.append('status', this.pstatus);


    this._HomeService.postedit(body).subscribe(data => {
      this.editStatus = data;

      if (this.editStatus.status == "true") {
        //  console.log( this.listdata[this.rowindex].HEIGHTAPPROX) ;
        // bind
        this.listdata[this.rowindex].HEIGHTAPPROX = this.height;
        this.listdata[this.rowindex].AGEAPPROX = this.age;
        this.listdata[this.rowindex].HAIRTYPE = this.hairType;
        this.listdata[this.rowindex].EYECOLOR = this.eyeColor;
        this.listdata[this.rowindex].NAME = this.pName;
        this.listdata[this.rowindex].NICKNAME = this.pNic;
        this.listdata[this.rowindex].LANGUAGE = this.pLang;
        this.listdata[this.rowindex].FATHERNAME = this.pFname;
        this.listdata[this.rowindex].MOTHERNAME = this.pMname;
        this.listdata[this.rowindex].NATIONALITY = this.pNation;
        this.listdata[this.rowindex].MISSINGLOCATION = this.pLoc;
        this.listdata[this.rowindex].MISSINGSINCE = this.pMissdate;
        this.listdata[this.rowindex].MAILID = this.pMail;
        this.listdata[this.rowindex].MOBILE1 = this.pMob1;
        this.listdata[this.rowindex].MOBILE2 = this.pMob2;
        this.listdata[this.rowindex].BODYCOLOR = this.pBodycolor;
        this.listdata[this.rowindex].FACESHAPE = this.faceShape;
        this.listdata[this.rowindex].BODYTYPE = this.pBodytype;
        this.listdata[this.rowindex].MOREINFO = this.pMoreinfo;
        this.listdata[this.rowindex].YOURINFO = this.pContactinfo;
        this.listdata[this.rowindex].HAIRCOLOR = this.hairColor;
        this.listdata[this.rowindex].GENDER = this.gender;

        //bind end
        this.spinnerService.hide(); this.isEdit = false; this.show = !this.show;
      }
      else {
        console.log("Error");
        this.spinnerService.hide(); this.isEdit = false;
      }



    }, (err) => {
      this.spinnerService.hide(); this.isEdit = false;
      console.log(err);
    });

  }


  logout() {

    this.spinnerService.show();
    localStorage.removeItem('user');
    this.router.navigate(['login']);
    this.spinnerService.hide();
    clearInterval(this.myVar);
  }


  deleterecord(data, index) {

    this.spinnerService.show(); this.isEdit = true;
    this._HomeService.deleterecord(data).subscribe(data => {
      this.deleteStatus = data;

      if (this.deleteStatus.status == "true") {
        console.log(this.deleteStatus);
        this.listdata.splice(index, 1);
        this.spinnerService.hide();
        this.isEdit = false;
      }
      else {
        console.log("Error");
        this.spinnerService.hide(); this.isEdit = false;
      }



    }, (err) => { this.spinnerService.hide(); this.isEdit = false; });


  }


  updatestatus(data, index) {
    this.spinnerService.show();
    this.isEdit = true;
    this._HomeService.updatestatus(data).subscribe(data => {
      this.updateStatus = data;

      if (this.updateStatus.status == "true") {
        console.log(this.updateStatus);
        this.listdata[index].STATUS = "ACTIVE";
        this.spinnerService.hide();
        this.isEdit = false;

      }
      else {
        console.log("Error");
        this.spinnerService.hide();
        this.isEdit = false;
      }


    }, (err) => { this.spinnerService.hide(); this.isEdit = false; });


  }
  initializeItems() {

    // this.listdata = this.filterData;
  }

  Search(ev: any) {

    // this.initializeItems();
    // const val = ev;

    // // if the value is an empty string don't filter the items
    // if (val && val.trim() != '') {

    //   this.listdata = this.listdata.filter((item) => {
    //     return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
    //   })
    // }



    $("#myInput").on("keyup", function () {
      var value = $(this).val().toLowerCase();
      $("#myTable tr").filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });







  }


  getrecords() {
    this.spinnerService.show();
    // debugger;
    this._HomeService.getrecords().subscribe(data => {


      //console.log(data);
      this.getservice = data;
      //  debugger;
      if (this.getservice.status == "true") {

        // for(var i =0 ; i < this.getservice[0].length ; i ++ )

        // {
        //   this.listdata.push(this.getservice[0][i]);

        // }
        this.listdata = this.getservice[0];
        setTimeout(() => {
          this.spinnerService.hide();
        }, 1000);
        //setTimeout
        console.log(this.listdata);
        //  this.filterData= this.listdata;
        // this.chRef.detectChanges();
        // $('#myTable').DataTable();
      }

      else {
        console.log("Error");
        this.spinnerService.hide();
      }

    }, (err) => {
      this.spinnerService.hide();
    });

    //console.log(this.listdata);
    // this.router.navigate(['home']);

  }

  getdatabyid(id) {

    // this.spinnerService.show();

    this._HomeService.getdatabyid(id).subscribe(data => {


      //console.log(data);
      this.getservice = data;
      if (this.getservice.status == "true") {
        // console.log(this.getservice[0][0].ID);
        // this.listdata.push(this.getservice[0]);
        //  this.listdata=this.getservice[0];
        this.spinnerService.show();
        for (var i = this.getservice[0].length - 1; i >= 0; i--) {
          this.listdata.unshift(this.getservice[0][i]);

        }
        setTimeout(() => {
          this.spinnerService.hide();
        }, 1000);
        console.log(this.listdata);

        //   setTimeout(() => {

        // }, 2000);
      }
      else if (this.getservice.status == "false") {
        setTimeout(() => {
          this.spinnerService.hide();
        }, 1000); /*this.presentToast("No New Record Found");*/
      }

    }, (err) => { this.spinnerService.hide(); });



  }





  ngOnInit() {
    // debugger;


    this.myVar = setInterval(() => {
      if (!this.isEdit) {
        console.log("test");
        this.getdatabyid(this.listdata[0].ID);
      }
    }, 60000);

  }


}
