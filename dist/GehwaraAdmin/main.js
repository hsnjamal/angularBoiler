(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<router-outlet></router-outlet>\n<ng4-loading-spinner > </ng4-loading-spinner>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(spinnerService, router) {
        this.spinnerService = spinnerService;
        this.router = router;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.spinnerService.show();
        if (localStorage.getItem('user') == null) {
            this.router.navigate(['login']);
        }
        else {
            this.router.navigate(['home']);
        }
        this.spinnerService.hide();
    };
    // static apiURL="http://localhost:8000/gehvara/";
    AppComponent.apiURL = "http://www.gehwara.com/";
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_2__["Ng4LoadingSpinnerService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









//import { LoginService } from '../app/login/login.service';

//import { setTimeout } from 'timers';
var appRoutes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    {
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]
    },
    { path: '**', redirectTo: '/login', pathMatch: 'full' },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["NgxPaginationModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_8__["Ng4LoadingSpinnerModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
                ) //LoginService
            ],
            providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* th,td{\r\n\r\n\r\n\r\n    border:1px solid black;\r\n\r\n\r\n} */\r\n\r\n\r\n/* .btn{\r\nwidth: 24%;\r\ndisplay: block;\r\nbackground: #3d2151;\r\ncolor: #fff;\r\npadding: 9px 10px;\r\nborder: none;\r\nfont-size: 18px;\r\ntext-align: center;\r\nmargin-top: 5px;\r\nmargin: 40px auto 30px;\r\n} */\r\n\r\n\r\n.editbtn{\r\n\r\n\r\n    background-color: #fcd028;\r\n    color: white;\r\n    margin-top: 31px;\r\n    width: 317px;\r\n    padding: 8px;\r\n}\r\n\r\n\r\n.btn_table{\r\n\r\n    background-color: #fcd028;\r\n    color: white;\r\n\r\n}\r\n\r\n\r\n#myTable {\r\n  font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\r\n  border-collapse: collapse;\r\n  width: 100%;\r\n}\r\n\r\n\r\n#myTable td, #myTable th {\r\n  border: 1px solid #ddd;\r\n  padding: 8px;\r\n}\r\n\r\n\r\n#myTable tr:nth-child(even){background-color: #f2f2f2;}\r\n\r\n\r\n#myTable tr:hover {background-color: #ddd;}\r\n\r\n\r\n#myTable th {\r\n  padding-top: 12px;\r\n  padding-bottom: 12px;\r\n  text-align: center;\r\n  background-color: #fcd028;\r\n  color: white;\r\n}\r\n\r\n\r\n/* \r\nbody>div{\r\n\r\n\r\n\r\n    background-color: #ddd;\r\n}\r\n\r\n\r\nbody>form{\r\n\r\n\r\n\r\n    background-color: #ddd;\r\n} */\r\n\r\n\r\n/* \r\nbody:not(table) {\r\n    background: #ddd;\r\n} */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n  <title>Document</title>\n  <!-- <link rel=\"stylesheet\" href=\"//cdn.datatables.net/1.10.19/css/jquery.dataTables.min.css\">\n    <script src=\"//cdn.datatables.net/1.10.19/js/jquery.dataTables.min.js\"></script> -->\n</head>\n\n<body>\n\n    <button (click)=\"logout()\" style=\"float:right\" class=\"col-sm-4 btn btn-default btn_table\" >LOGOUT</button>\n  <div class=\"row\">\n    <div class=\"col-sm-8 form-group\">\n      <label for=\"search\"> Search</label>\n      <input type=\"text\" [(ngModel)]=\"search\" name=\"search\" (ngModelChange)=\"Search($event)\" id=\"myInput\" class=\"form-control\">\n\n     \n\n    </div>\n  </div>\n  <!-- <button (click)=\"logout()\">LOGOUT</button>\n\n\n<input type=\"text\" [(ngModel)]=\"search\"  (ngModelChange)=\"Search($event)\" id=\"myInput\"> -->\n\n\n  <form *ngIf=\"show;\">\n    <input type=\"hidden\" [(ngModel)]=\"id\" name=\"id\" placeholder=\"\">\n    <input type=\"hidden\" [(ngModel)]=\"images\" name=\"images\" placeholder=\"\">\n\n\n    <div class=\"row\">\n      <div class=\"col-sm-3 form-group\">\n        <label for=\"Name\"> Name</label>\n        <input class=\"form-control\" type=\"text\" [(ngModel)]=\"pName\" name=\"pName\" placeholder=\"\">\n      </div>\n      <div class=\"col-sm-3 form-group\">\n        <label for=\"pNic\">Nick Name</label>\n        <input class=\"form-control\" type=\"text\" [(ngModel)]=\"pNic\" placeholder=\"\" name=\"pNic\">\n      </div>\n\n      <div class=\"col-sm-3 form-group\">\n        <label for=\"pLang\">Language</label>\n        <input class=\"form-control\" type=\"text\" [(ngModel)]=\"pLang\" placeholder=\"\" name=\"pLang\">\n      </div>\n\n      <div class=\"col-sm-3 form-group\">\n        <label for=\"pFname\">Father Name </label>\n        <input class=\"form-control\" type=\"text\" [(ngModel)]=\"pFname\" placeholder=\"\" name=\"pFname\">\n      </div>\n\n    </div>\n\n\n\n    <div class=\"row\">\n      <div class=\"col-sm-3 form-group\">\n        <label for=\"pMname\t\">Mother Name </label>\n        <input class=\"form-control\" type=\"text\" [(ngModel)]=\"pMname\" placeholder=\"\" name=\"pMname\">\n      </div>\n      <div class=\"col-sm-3 form-group\">\n        <label for=\"pLoc\">Missing Location</label>\n        <input class=\"form-control\" type=\"text\" [(ngModel)]=\"pLoc\" placeholder=\"\" name=\"pLoc\">\n      </div>\n\n      <div class=\"col-sm-3 form-group\">\n        <label for=\"pNation\">Nationality</label>\n        <input class=\"form-control\" type=\"text\" [(ngModel)]=\"pNation\" placeholder=\"\" name=\"pNation\">\n      </div>\n\n      <div class=\"col-sm-3 form-group\">\n        <label for=\"pMissdate\">Missing Since</label>\n        <input class=\"form-control\" type=\"text\" [(ngModel)]=\"pMissdate\" placeholder=\"\" name=\"pMissdate\">\n      </div>\n\n    </div>\n\n\n\n\n\n    <!-- <label for=\"Name\">Name</label>\n<input type=\"text\"[(ngModel)]=\"pName\" name=\"pName\" placeholder=\"\">\n\n<label for=\"pNic\">Nick Name</label>\n<input type=\"text\"[(ngModel)]=\"pNic\" placeholder=\"\" name=\"pNic\"> -->\n\n\n    <div class=\"row\">\n\n      <div class=\"col-sm-3 form-group\">\n        <label for=\"pMail\t\">Mail Id </label>\n        <input type=\"text\" [(ngModel)]=\"pMail\" placeholder=\"\" name=\"pMail\" class=\"form-control\">\n      </div>\n\n      <div class=\"col-sm-3 form-group\">\n        <label for=\"pMob1\t\">Mobile 1 </label>\n        <input type=\"text\" [(ngModel)]=\"pMob1\" placeholder=\"\" name=\"pMob1\" class=\"form-control\">\n      </div>\n\n      <div class=\"col-sm-3 form-group\">\n        <label for=\"pMob2\">Mobile 2</label>\n        <input type=\"text\" [(ngModel)]=\"pMob2\" placeholder=\"\" name=\"pMob2\" class=\"form-control\">\n      </div>\n\n      <div class=\"col-sm-3 form-group\">\n        <label for=\"pBodycolor\">Body Color</label>\n        <input type=\"text\" [(ngModel)]=\"pBodycolor\" placeholder=\"\" name=\"pBodycolor\" class=\"form-control\">\n      </div>\n\n\n\n    </div>\n\n\n\n    <div class=\"row\">\n\n      <div class=\"col-sm-3 form-group\">\n        <label for=\"faceShape\">Face Shape</label>\n        <!-- <input type=\"text\"[(ngModel)]=\"faceShape\" placeholder=\"\" name=\"faceShape\"> -->\n\n        <select [(ngModel)]=\"faceShape\" name=\"faceShape\" class=\"form-control\">\n          <option value=\"Long\">Long</option>\n          <option value=\"Oval\">Oval</option>\n          <option value=\"Square\">Square</option>\n          <option value=\"Wrinkled\">Wrinkled</option>\n          <option value=\"other\">other</option>\n\n\n        </select>\n      </div>\n\n      <div class=\"col-sm-3 form-group\">\n        <label for=\"age\">Age Approx</label>\n        <!-- <input type=\"text\"[(ngModel)]=\"age\" placeholder=\"\" name=\"age\"> -->\n\n        <select [(ngModel)]=\"age\" name=\"age\" class=\"form-control\">\n          <option value=\"New Born\">New Born</ option>\n            <option value=\"2-5 Years\">2-5 Years</ option>\n              <option value=\"5-10 Years\">5-10 Years</ option>\n                <option value=\"10-15 Years\">10-15 Years</ option>\n                  <option value=\"15-20 Years\">15-20 Years</ option>\n                    <option value=\"20-25 Years\">20-25 Years</ option>\n                      <option value=\"25-30 Years\">25-30 Years</ option>\n                        <option value=\"30-35 Years\">30-35 Years</ option>\n                          <option value=\"35-40 Years\">35-40 Years</ option>\n                            <option value=\"40-45 Years\">40-45 Years</ option>\n                              <option value=\"45-50 Years\">45-50 Years</ option>\n                                <option value=\"50-55 Years\">50-55 Years</ option>\n                                  <option value=\"55-60 Years\">55-60 Years</ option>\n                                    <option value=\"60-65 Years\">60-65 Years</ option>\n                                      <option value=\"65-70 Years\">65-70 Years</ option>\n                                        <option value=\"70 and above\">70 and above Years</ option>\n        </select>\n      </div>\n\n      <div class=\"col-sm-3 form-group\">\n        <label for=\"height\">Height Approx</label>\n        <!-- <input type=\"text\"[(ngModel)]=\"height\" placeholder=\"\" name=\"height\"> -->\n\n        <select [(ngModel)]=\"height\" name=\"height\" class=\"form-control\">\n          <option value=\"2-3 ft\">2-3 ft.</option>\n          <option value=\"3-4 ft\">3-4 ft.</option>\n          <option value=\"4-5 ft\">4-5 ft.</option>\n          <option value=\"5-6 ft\">5-6 ft.</option>\n          <option value=\"6-Above ft\">6-Above ft.</option>\n\n        </select>\n      </div>\n\n      <div class=\"col-sm-3 form-group\">\n\n        <label for=\"eyeColor\">Eye Color</label>\n        <!-- <input type=\"text\"[(ngModel)]=\"eyeColor\" placeholder=\"\" name=\"eyeColor\"> -->\n\n        <select [(ngModel)]=\"eyeColor\" name=\"eyeColor\" class=\"form-control\">\n          <option value=\"Blue\">Blue</option>\n          <option value=\"Brown\">Brown</option>\n          <option value=\"Normal\">Normal</option>\n          <option value=\"Reddish\">Reddish</option>\n          <option value=\"Slit\">Slit</option>\n\n        </select>\n      </div>\n\n    </div>\n\n\n    <div class=\"row\">\n\n      <div class=\"col-sm-3 form-group\">\n        <label for=\"hairType\">Hair Type</label>\n        <!-- <input type=\"text\"[(ngModel)]=\"hairType\" placeholder=\"\" name=\"hairType\"> -->\n\n\n        <select [(ngModel)]=\"hairType\" name=\"hairType\" class=\"form-control\">\n          <option value=\"Curly\">Curly</option>\n          <option value=\"Long\">Long</option>\n          <option value=\"Normal\">Normal</option>\n          <option value=\"Straight Hair\">Straight Hair</option>\n\n\n        </select>\n      </div>\n\n      <div class=\"col-sm-3 form-group\">\n        <label for=\"hairColor\">Hair Color</label>\n        <!-- <input type=\"text\"[(ngModel)]=\"hairColor\" placeholder=\"\" name=\"hairColor\"> -->\n        <select [(ngModel)]=\"hairColor\" name=\"hairColor\" class=\"form-control\">\n          <option value=\"Black\">Black</option>\n          <option value=\"Brown\">Brown</option>\n          <option value=\"Gray\">Gray</option>\n          <option value=\"White\">White</option>\n\n\n        </select>\n      </div>\n\n      <div class=\"col-sm-3 form-group\">\n        <label for=\"pBodytype\">Body Type</label>\n        <input type=\"text\" [(ngModel)]=\"pBodytype\" placeholder=\"\" name=\"pBodytype\" class=\"form-control\">\n      </div>\n\n      <div class=\"col-sm-3 form-group\">\n        <label for=\"pMoreinfo\">More Info</label>\n        <input type=\"text\" [(ngModel)]=\"pMoreinfo\" placeholder=\"\" name=\"pMoreinfo\" class=\"form-control\">\n      </div>\n    </div>\n\n\n\n\n\n\n    <div class=\"row\">\n\n      <div class=\"col-sm-3 form-group\">\n        <label for=\"pContactinfo\">Your Info</label>\n        <input type=\"text\" [(ngModel)]=\"pContactinfo\" placeholder=\"\" name=\"pContactinfo\" class=\"form-control\">\n      </div>\n      <div class=\"col-sm-3 form-group\">\n        <label for=\"gender\">Gender</label>\n\n        <select [(ngModel)]=\"gender\" name=\"gender\" class=\"form-control\">\n\n          <option value=\"Male\">Male</option>\n          <option value=\"Female\">Female</option>\n\n        </select>\n      </div>\n\n      <div class=\"col-sm-3 form-group\">\n          <button (click)=\"postedit()\" class=\"btn btn-default editbtn\">Save Changes</button>\n\n        </div>\n\n\n        <div class=\"col-sm-3 form-group\">\n          <button (click)=\"cancelEdit()\" class=\"btn btn-default editbtn\">Cancel</button>\n\n        </div>\n    </div>\n\n    <!-- <div class=\"row\">\n      <div class=\"col-sm-12 form-group\">\n        <button (click)=\"postedit()\" class=\"btn btn-default \">Save Changes</button>\n        <button (click)=\"cancelEdit()\" class=\"btn btn-default\">Cancel</button>\n\n      </div>\n\n      \n      \n\n    </div> -->\n\n\n\n  </form>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n  <!-- <label for=\"pstatus\">Status</label> -->\n\n  <!-- <select [(ngModel)]=\"pstatus\"  name=\"pstatus\">\n    \n    <option value=\"ACTIVE\">ACTIVE</option>\n    <option value=\"INACTIVE\">INACTIVE</option>\n    \n  </select> -->\n\n  <!-- <select [(ngModel)]=\"pstatus\"  name=\"pstatus\">\n    \n      <option value=\"ACTIVE\">ACTIVE</option>\n      <option value=\"INACTIVE\">INACTIVE</option>\n      \n    </select> -->\n\n\n\n\n\n\n  <table style=\"border:2px solid black\" id=\"myTable\">\n\n    <thead>\n      <tr>\n        <th>ID</th>\n        <th>Image</th>\n        <th>Name</th>\n        <th>Nick Name</th>\n        <th>Gender</th>\n        <th>Language</th>\n        <th>Father Name</th>\n        <th>Mother Name</th>\n        <th>Nationality</th>\n        <th>Missing Location</th>\n        <th>Missing Since</th>\n        <th>Mail Id</th>\n        <th>Mobile 1</th>\n        <th>Mobile 2</th>\n        <th>Body Color</th>\n        <th>Face Shape</th>\n        <th>Age Approx</th>\n        <th>Height Approx</th>\n        <th>Eye Color</th>\n        <th>Hair Type</th>\n        <th>Hair Color</th>\n        <th>Body Type</th>\n        <th>More Info</th>\n        <th>Your Info</th>\n        <th>Status</th>\n        <th colspan=\"3\"align=\"center\">Options</th>\n\n      </tr>\n    </thead>\n    <!-- *ngFor=\"let item of items; index as i; trackBy: trackByFn\" | paginate: { itemsPerPage: 5, currentPage: p };-->\n    <tbody>\n      <tr *ngFor=\"let data of listdata; let i = index\">\n        <td>{{data.ID}}</td>\n        <td>\n            <!-- \"../../assets/images/img_avatar2.png\" [hidden]=\"!loaded\" -->\n          <!-- <img src=\"{{imageUrl+data.IMAGE}}\" style=\"width:85px;\"> -->\n          <img  src=\"../../assets/images/empty-image.png\"  (load)=\"loaded = false\" [hidden]=\"loaded\" style=\"width:85px;\" >\n          <img   src=\"{{imageUrl+data.IMAGE}}\"  (load)=\"loaded = true\"  alt=\"\"  style=\"width:85px;\">\n        </td>\n        <td>{{data.NAME == \"undefined\" ? \"Not Available\":data.NAME == \"\" ? \"Not Available\":data.NAME == \"null\" ? \"Not Available\":data.NAME}}</td>\n        <td>{{data.NICKNAME == \"undefined\" ? \"Not Available\":data.NICKNAME == \"\" ? \"Not Available\":data.NICKNAME == \"null\" ? \"Not Available\":data.NICKNAME}}</td>\n        <td>{{data.GENDER == \"undefined\" ? \"Not Available\":data.GENDER == \"\" ? \"Not Available\":data.GENDER == \"null\" ? \"Not Available\":data.GENDER}}</td>\n        <td>{{data.LANGUAGE == \"undefined\" ? \"Not Available\":data.LANGUAGE == \"\" ? \"Not Available\":data.LANGUAGE == \"null\" ? \"Not Available\":data.LANGUAGE}}</td>\n        <td>{{data.FATHERNAME  == \"undefined\" ? \"Not Available\":data.FATHERNAME == \"\" ? \"Not Available\":data.FATHERNAME == \"null\" ? \"Not Available\":data.FATHERNAME}}</td>\n        <td>{{data.MOTHERNAME == \"undefined\" ? \"Not Available\":data.MOTHERNAME == \"\" ? \"Not Available\":data.MOTHERNAME == \"null\" ? \"Not Available\":data.MOTHERNAME}}</td>\n        <td>{{data.NATIONALITY == \"undefined\" ? \"Not Available\":data.NATIONALITY == \"\" ? \"Not Available\":data.NATIONALITY == \"null\" ? \"Not Available\":data.NATIONALITY}}</td>\n\n        <td>{{data.MISSINGLOCATION == \"undefined\" ? \"Not Available\":data.MISSINGLOCATION == \"\" ? \"Not Available\":data.MISSINGLOCATION == \"null\" ? \"Not Available\":data.MISSINGLOCATION}}</td>\n        <td>{{data.MISSINGSINCE == \"undefined\" ? \"Not Available\":data.MISSINGSINCE == \"\" ? \"Not Available\":data.MISSINGSINCE == \"null\" ? \"Not Available\":data.MISSINGSINCE == \"undefined\" ? \"Not Available\":data.MISSINGSINCE == \"\" ? \"Not Available\":data.MISSINGSINCE == \"null\" ? \"Not Available\":data.MISSINGSINCE}}</td>\n        <td>{{data.MAILID == \"undefined\" ? \"Not Available\":data.MAILID == \"\" ? \"Not Available\":data.MAILID == \"null\" ? \"Not Available\":data.MAILID}}</td>\n        <td>{{data.MOBILE1 == \"undefined\" ? \"Not Available\":data.MOBILE1 == \"\" ? \"Not Available\":data.MOBILE1 == \"null\" ? \"Not Available\":data.MOBILE1}}</td>\n        <td>{{data.MOBILE2 == \"undefined\" ? \"Not Available\":data.MOBILE2 == \"\" ? \"Not Available\":data.MOBILE2 == \"null\" ? \"Not Available\":data.MOBILE2}}</td>\n        <td>{{data.BODYCOLOR == \"undefined\" ? \"Not Available\":data.BODYCOLOR == \"\" ? \"Not Available\":data.BODYCOLOR == \"null\" ? \"Not Available\":data.BODYCOLOR}}</td>\n        <td>{{data.FACESHAPE == \"undefined\" ? \"Not Available\":data.FACESHAPE == \"\" ? \"Not Available\":data.FACESHAPE == \"null\" ? \"Not Available\":data.FACESHAPE}}</td>\n        <td>{{data.AGEAPPROX == \"undefined\" ? \"Not Available\":data.AGEAPPROX == \"\" ? \"Not Available\":data.AGEAPPROX == \"null\" ? \"Not Available\":data.AGEAPPROX}}</td>\n        <td>{{data.HEIGHTAPPROX == \"undefined\" ? \"Not Available\":data.HEIGHTAPPROX == \"\" ? \"Not Available\":data.HEIGHTAPPROX == \"null\" ? \"Not Available\":data.HEIGHTAPPROX}}</td>\n        <td>{{data.EYECOLOR == \"undefined\" ? \"Not Available\":data.EYECOLOR == \"\" ? \"Not Available\":data.EYECOLOR == \"null\" ? \"Not Available\":data.EYECOLOR}}</td>\n        <td>{{data.HAIRTYPE == \"undefined\" ? \"Not Available\":data.HAIRTYPE == \"\" ? \"Not Available\":data.HAIRTYPE == \"null\" ? \"Not Available\":data.HAIRTYPE}}</td>\n        <td>{{data.HAIRCOLOR == \"undefined\" ? \"Not Available\":data.HAIRCOLOR == \"\" ? \"Not Available\":data.HAIRCOLOR == \"null\" ? \"Not Available\":data.HAIRCOLOR}}</td>\n        <td>{{data.BODYTYPE == \"undefined\" ? \"Not Available\":data.BODYTYPE == \"\" ? \"Not Available\":data.BODYTYPE == \"null\" ? \"Not Available\":data.BODYTYPE}}</td>\n        <td>{{data.MOREINFO == \"undefined\" ? \"Not Available\":data.MOREINFO == \"\" ? \"Not Available\":data.MOREINFO == \"null\" ? \"Not Available\":data.MOREINFO}}</td>\n        <td>{{data.YOURINFO == \"undefined\" ? \"Not Available\":data.YOURINFO == \"\" ? \"Not Available\":data.YOURINFO == \"null\" ? \"Not Available\":data.YOURINFO}}</td>\n        <td>{{data.STATUS}}</td>\n        <td>\n          <button (click)=\" updatestatus(data.ID,i)\"  class=\"btn btn-default btn_table\">Active</button>\n        </td>\n        <td>\n          <button (click)=\" deleterecord(data,i)\"  class=\"btn btn-default btn_table\">Delete</button>\n        </td>\n        <td>\n          <button (click)=\" edit(data,i)\"  class=\"btn btn-default btn_table\">Edit</button>\n        </td>\n\n      </tr>\n\n    </tbody>\n\n\n\n\n\n  </table>\n\n  <!-- <pagination-controls (pageChange)=\"p = $event\"></pagination-controls> -->\n</body>\n\n</html>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _home_home_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../home/home.service */ "./src/app/home/home.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import 'datatables.net';
// import * as buttons from 'jquery';

// import { setTimeout } from 'timers';
var HomeComponent = /** @class */ (function () {
    function HomeComponent(spinnerService, chRef, _HomeService, router) {
        this.spinnerService = spinnerService;
        this.chRef = chRef;
        this._HomeService = _HomeService;
        this.router = router;
        // filterData:any=[];
        this.isEdit = false;
        this.show = false;
        this.p = 1;
        this.editStatus = [];
        this.getservice = [];
        this.listdata = [];
        this.updateStatus = [];
        this.deleteStatus = [];
        this.imageUrl = _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"].apiURL;
        this.getrecords();
        // $(document).ready( function () {
        // } );
        //this.updatestatus(data);
    }
    HomeComponent.prototype.cancelEdit = function () {
        this.show = !(this.show);
        this.isEdit = !(this.isEdit);
    };
    HomeComponent.prototype.edit = function (row, index) {
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
    };
    HomeComponent.prototype.print = function () { console.log(this.pName); };
    HomeComponent.prototype.postedit = function () {
        var _this = this;
        this.spinnerService.show();
        var body = new FormData();
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
        this._HomeService.postedit(body).subscribe(function (data) {
            _this.editStatus = data;
            if (_this.editStatus.status == "true") {
                //  console.log( this.listdata[this.rowindex].HEIGHTAPPROX) ;
                // bind
                _this.listdata[_this.rowindex].HEIGHTAPPROX = _this.height;
                _this.listdata[_this.rowindex].AGEAPPROX = _this.age;
                _this.listdata[_this.rowindex].HAIRTYPE = _this.hairType;
                _this.listdata[_this.rowindex].EYECOLOR = _this.eyeColor;
                _this.listdata[_this.rowindex].NAME = _this.pName;
                _this.listdata[_this.rowindex].NICKNAME = _this.pNic;
                _this.listdata[_this.rowindex].LANGUAGE = _this.pLang;
                _this.listdata[_this.rowindex].FATHERNAME = _this.pFname;
                _this.listdata[_this.rowindex].MOTHERNAME = _this.pMname;
                _this.listdata[_this.rowindex].NATIONALITY = _this.pNation;
                _this.listdata[_this.rowindex].MISSINGLOCATION = _this.pLoc;
                _this.listdata[_this.rowindex].MISSINGSINCE = _this.pMissdate;
                _this.listdata[_this.rowindex].MAILID = _this.pMail;
                _this.listdata[_this.rowindex].MOBILE1 = _this.pMob1;
                _this.listdata[_this.rowindex].MOBILE2 = _this.pMob2;
                _this.listdata[_this.rowindex].BODYCOLOR = _this.pBodycolor;
                _this.listdata[_this.rowindex].FACESHAPE = _this.faceShape;
                _this.listdata[_this.rowindex].BODYTYPE = _this.pBodytype;
                _this.listdata[_this.rowindex].MOREINFO = _this.pMoreinfo;
                _this.listdata[_this.rowindex].YOURINFO = _this.pContactinfo;
                _this.listdata[_this.rowindex].HAIRCOLOR = _this.hairColor;
                _this.listdata[_this.rowindex].GENDER = _this.gender;
                //bind end
                _this.spinnerService.hide();
                _this.isEdit = false;
                _this.show = !_this.show;
            }
            else {
                console.log("Error");
                _this.spinnerService.hide();
                _this.isEdit = false;
            }
        }, function (err) {
            _this.spinnerService.hide();
            _this.isEdit = false;
            console.log(err);
        });
    };
    HomeComponent.prototype.logout = function () {
        this.spinnerService.show();
        localStorage.removeItem('user');
        this.router.navigate(['login']);
        this.spinnerService.hide();
        clearInterval(this.myVar);
    };
    HomeComponent.prototype.deleterecord = function (data, index) {
        var _this = this;
        this.spinnerService.show();
        this.isEdit = true;
        this._HomeService.deleterecord(data).subscribe(function (data) {
            _this.deleteStatus = data;
            if (_this.deleteStatus.status == "true") {
                console.log(_this.deleteStatus);
                _this.listdata.splice(index, 1);
                _this.spinnerService.hide();
                _this.isEdit = false;
            }
            else {
                console.log("Error");
                _this.spinnerService.hide();
                _this.isEdit = false;
            }
        }, function (err) { _this.spinnerService.hide(); _this.isEdit = false; });
    };
    HomeComponent.prototype.updatestatus = function (data, index) {
        var _this = this;
        this.spinnerService.show();
        this.isEdit = true;
        this._HomeService.updatestatus(data).subscribe(function (data) {
            _this.updateStatus = data;
            if (_this.updateStatus.status == "true") {
                console.log(_this.updateStatus);
                _this.listdata[index].STATUS = "ACTIVE";
                _this.spinnerService.hide();
                _this.isEdit = false;
            }
            else {
                console.log("Error");
                _this.spinnerService.hide();
                _this.isEdit = false;
            }
        }, function (err) { _this.spinnerService.hide(); _this.isEdit = false; });
    };
    HomeComponent.prototype.initializeItems = function () {
        // this.listdata = this.filterData;
    };
    HomeComponent.prototype.Search = function (ev) {
        // this.initializeItems();
        // const val = ev;
        // // if the value is an empty string don't filter the items
        // if (val && val.trim() != '') {
        //   this.listdata = this.listdata.filter((item) => {
        //     return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
        //   })
        // }
        jquery__WEBPACK_IMPORTED_MODULE_5__("#myInput").on("keyup", function () {
            var value = jquery__WEBPACK_IMPORTED_MODULE_5__(this).val().toLowerCase();
            jquery__WEBPACK_IMPORTED_MODULE_5__("#myTable tr").filter(function () {
                jquery__WEBPACK_IMPORTED_MODULE_5__(this).toggle(jquery__WEBPACK_IMPORTED_MODULE_5__(this).text().toLowerCase().indexOf(value) > -1);
            });
        });
    };
    HomeComponent.prototype.getrecords = function () {
        var _this = this;
        this.spinnerService.show();
        // debugger;
        this._HomeService.getrecords().subscribe(function (data) {
            //console.log(data);
            _this.getservice = data;
            //  debugger;
            if (_this.getservice.status == "true") {
                // for(var i =0 ; i < this.getservice[0].length ; i ++ )
                // {
                //   this.listdata.push(this.getservice[0][i]);
                // }
                _this.listdata = _this.getservice[0];
                setTimeout(function () {
                    _this.spinnerService.hide();
                }, 1000);
                //setTimeout
                console.log(_this.listdata);
                //  this.filterData= this.listdata;
                // this.chRef.detectChanges();
                // $('#myTable').DataTable();
            }
            else {
                console.log("Error");
                _this.spinnerService.hide();
            }
        }, function (err) {
            _this.spinnerService.hide();
        });
        //console.log(this.listdata);
        // this.router.navigate(['home']);
    };
    HomeComponent.prototype.getdatabyid = function (id) {
        // this.spinnerService.show();
        var _this = this;
        this._HomeService.getdatabyid(id).subscribe(function (data) {
            //console.log(data);
            _this.getservice = data;
            if (_this.getservice.status == "true") {
                // console.log(this.getservice[0][0].ID);
                // this.listdata.push(this.getservice[0]);
                //  this.listdata=this.getservice[0];
                _this.spinnerService.show();
                for (var i = _this.getservice[0].length - 1; i >= 0; i--) {
                    _this.listdata.unshift(_this.getservice[0][i]);
                }
                setTimeout(function () {
                    _this.spinnerService.hide();
                }, 1000);
                console.log(_this.listdata);
                //   setTimeout(() => {
                // }, 2000);
            }
            else if (_this.getservice.status == "false") {
                setTimeout(function () {
                    _this.spinnerService.hide();
                }, 1000); /*this.presentToast("No New Record Found");*/
            }
        }, function (err) { _this.spinnerService.hide(); });
    };
    HomeComponent.prototype.ngOnInit = function () {
        // debugger;
        var _this = this;
        this.myVar = setInterval(function () {
            if (!_this.isEdit) {
                console.log("test");
                _this.getdatabyid(_this.listdata[0].ID);
            }
        }, 60000);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")],
            providers: [_home_home_service__WEBPACK_IMPORTED_MODULE_1__["HomeService"]]
        }),
        __metadata("design:paramtypes", [ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_4__["Ng4LoadingSpinnerService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _home_home_service__WEBPACK_IMPORTED_MODULE_1__["HomeService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/home.service.ts":
/*!**************************************!*\
  !*** ./src/app/home/home.service.ts ***!
  \**************************************/
/*! exports provided: HomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeService", function() { return HomeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import {Http,Response } from '@angular/http';  

// import 'rxjs/add/operator/map'; 
var HomeService = /** @class */ (function () {
    function HomeService(http) {
        this.http = http;
    }
    HomeService.prototype.getrecords = function () {
        return this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"].apiURL + "getdet.php");
    };
    HomeService.prototype.updatestatus = function (id) {
        var body = new FormData();
        body.append('id', id);
        return this.http.post(_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"].apiURL + "updatestatus.php", body);
    };
    HomeService.prototype.postedit = function (body) {
        return this.http.post(_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"].apiURL + "updatedet.php", body);
    };
    HomeService.prototype.getdatabyid = function (id) {
        return this.http.get(_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"].apiURL + "getbyid.php?id=" + id);
    };
    HomeService.prototype.deleterecord = function (data) {
        var body = new FormData();
        body.append('id', data.ID);
        body.append('imagePath', data.IMAGE);
        return this.http.post(_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"].apiURL + "deleterecord.php", body);
    };
    HomeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HomeService);
    return HomeService;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\r\n    border: 3px solid #f1f1f1;\r\n}\r\n\r\n/* Full-width inputs */\r\n\r\ninput[type=text], input[type=password] {\r\n    width: 100%;\r\n    padding: 12px 20px;\r\n    margin: 8px 0;\r\n    display: inline-block;\r\n    border: 1px solid #ccc;\r\n    box-sizing: border-box;\r\n}\r\n\r\n/* Set a style for all buttons */\r\n\r\nbutton {\r\n    background-color: #fcd028;\r\n    color: white;\r\n    padding: 14px 20px;\r\n    margin: 8px 0;\r\n    border: none;\r\n    cursor: pointer;\r\n    width: 100%;\r\n}\r\n\r\n/* Add a hover effect for buttons */\r\n\r\nbutton:hover {\r\n    opacity: 0.8;\r\n}\r\n\r\n/* Extra style for the cancel button (red) */\r\n\r\n.cancelbtn {\r\n    width: auto;\r\n    padding: 10px 18px;\r\n    background-color: #f44336;\r\n}\r\n\r\n/* Center the avatar image inside this container */\r\n\r\n.imgcontainer {\r\n    text-align: center;\r\n    margin: 24px 0 12px 0;\r\n}\r\n\r\n/* Avatar image */\r\n\r\nimg.avatar {\r\n    width: 40%;\r\n    border-radius: 50%;\r\n}\r\n\r\n/* Add padding to containers */\r\n\r\n.container {\r\n    padding: 16px;\r\n}\r\n\r\n/* The \"Forgot password\" text */\r\n\r\nspan.psw {\r\n    float: right;\r\n    padding-top: 16px;\r\n}\r\n\r\n/* Change styles for span and cancel button on extra small screens */\r\n\r\n@media screen and (max-width: 300px) {\r\n    span.psw {\r\n        display: block;\r\n        float: none;\r\n    }\r\n    .cancelbtn {\r\n        width: 100%;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form >\n  <div class=\"imgcontainer\">\n    <img src=\"../../assets/images/img_avatar2.png\" alt=\"Avatar\" class=\"avatar\">\n  </div>\n\n  <div class=\"container\">\n    <label for=\"uname\"><b>Username</b></label>\n    <input type=\"text\" placeholder=\"Enter Username\" name=\"uname\"  [(ngModel)]=\"userName\" >\n\n    <label for=\"psw\"><b>Password</b></label>\n    <input type=\"password\" placeholder=\"Enter Password\" name=\"psw\"  [(ngModel)]=\"password\">\n\n   <button (click)=\"login()\">login</button>\n   \n  </div>\n  <p style=\"color:red\" *ngIf=\"error\"> Login Failed. Please try again. </p>\n \n</form>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login/login.service */ "./src/app/login/login.service.ts");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng4-loading-spinner */ "./node_modules/ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(spinnerService, router, _LoginService) {
        this.spinnerService = spinnerService;
        this.router = router;
        this._LoginService = _LoginService;
        this.getservice = [];
        this.listdata = [];
        this.error = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.spinnerService.show();
        this._LoginService.login(this.userName, this.password).subscribe(function (data) {
            //console.log(data);
            _this.getservice = data;
            //  debugger;
            if (_this.getservice.status == "true") {
                localStorage.setItem('user', _this.userName);
                _this.spinnerService.hide();
                _this.router.navigate(['home']);
                // console.log(this.getservice[0][0].ID);
                // this.listdata.push(this.getservice[0]);
                // console.log(this.listdata);
                //     for(var i =0 ; i < this.getservice[0].length ; i ++ )
                //     {
                //       this.listdata.push(this.getservice[0][i]);
                //  console.log(this.listdata);
                //     }
            }
            else {
                console.log("Error");
                _this.error = true;
                _this.spinnerService.hide();
            }
        }, function (err) {
            _this.spinnerService.hide();
            _this.error = true;
        });
        //console.log(this.listdata);
        // this.router.navigate(['home']);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")],
            providers: [_login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]]
        }),
        __metadata("design:paramtypes", [ng4_loading_spinner__WEBPACK_IMPORTED_MODULE_3__["Ng4LoadingSpinnerService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _login_login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/login.service.ts":
/*!****************************************!*\
  !*** ./src/app/login/login.service.ts ***!
  \****************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import {Http,Response } from '@angular/http';  

// import 'rxjs/add/operator/map'; 
var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
    }
    LoginService.prototype.login = function (user, pass) {
        var body = new FormData();
        body.append('email', user);
        body.append('pass', pass);
        return this.http.post(_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"].apiURL + "adminlogin.php", body);
    };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Hasan\ionic\GehwaraAdmin\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map