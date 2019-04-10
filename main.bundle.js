webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-wrapper\">\n  <app-aside></app-aside>\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ".main-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  height: 100%; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.models.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Form; });
var Form = /** @class */ (function () {
    function Form() {
    }
    return Form;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_aside_aside_component__ = __webpack_require__("./src/app/components/aside/aside.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_profile_profile_component__ = __webpack_require__("./src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_access_access_component__ = __webpack_require__("./src/app/components/access/access.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routes__ = __webpack_require__("./src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_profile_movies_movies_component__ = __webpack_require__("./src/app/components/profile/movies/movies.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_profile_contact_contact_component__ = __webpack_require__("./src/app/components/profile/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_profile_alert_alert_component__ = __webpack_require__("./src/app/components/profile/alert/alert.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_aside_aside_component__["a" /* AsideComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_access_access_component__["a" /* AccessComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_profile_movies_movies_component__["a" /* MoviesComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_profile_contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_profile_alert_alert_component__["a" /* AlertComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_routes__["a" /* ROUTES */])
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_profile_profile_component__ = __webpack_require__("./src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_access_access_component__ = __webpack_require__("./src/app/components/access/access.component.ts");


var ROUTES = [
    { path: 'profile', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_0__components_profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'access', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_1__components_access_access_component__["a" /* AccessComponent */] },
    { path: '', pathMatch: 'full', redirectTo: 'profile' },
    { path: '**', pathMatch: 'full', redirectTo: 'profile' },
];


/***/ }),

/***/ "./src/app/components/access/access.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"access-wrapper\">\n  <div class=\"access-content\">\n    <h2>Reques Access</h2>\n    <div class=\"form-wrapper\">\n      <h3>Fill the next form to request your access</h3>\n      <span>5/25/2018</span>\n        <form>\n          <div class=\"user-img\">\n            c\n          </div>\n          <div class=\"basicInfo-wrapper\">\n            <div class=\"input-wrapper\">\n              <label>Requestor name: {{ name }} </label>\n              <input (keyup)=\"values($event)\" id=\"name\"  id=\"name\" placeholder=\"Jonh Doe\"/>\n            </div>\n            <div class=\"input-wrapper\">\n              <label>Requestor email: {{ email }} </label>\n              <input (keyup)=\"values($event)\" id=\"email\" type=\"email\" placeholder=\"jonhdoe@unknown.com\"/>\n            </div>\n            <div class=\"input-wrapper\">\n              <label>Confirm email: {{ confirm }} </label>\n              <input (keyup)=\"values($event)\" id=\"confirm\" type=\"email\"  placeholder=\"\" />\n            </div>\n            <div class=\"custom-select input-wrapper\">\n                <label>Plan type: {{ select }} </label>\n                <div class=\"select-div\"></div>\n                <select (change)=\"values($event)\" id=\"select\" name=\"select\">\n                    <option value=\"1\">Plan 1</option>\n                    <option value=\"2\">Plan 2</option>\n                    <option value=\"3\">Plan 3</option>\n                </select>\n            </div>\n            <div class=\"button\">\n              <button (click)=\"save()\">Save</button>\n            </div>\n          </div>\n        </form>\n        <div *ngIf=\"json\" class=\"json\">\n          {{ form | json }}\n        </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/access/access.component.scss":
/***/ (function(module, exports) {

module.exports = ".access-wrapper {\n  width: 100%;\n  padding: 32px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n  justify-content: center; }\n  .access-wrapper .access-content {\n    width: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n  .access-wrapper .access-content h2 {\n      font-weight: 100;\n      font-family: sans-serif;\n      margin-bottom: 48px; }\n  .access-wrapper .access-content .form-wrapper {\n      width: 100%;\n      max-width: 1000px;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-orient: vertical;\n      -webkit-box-direction: normal;\n          -ms-flex-direction: column;\n              flex-direction: column;\n      height: auto;\n      -webkit-box-align: start;\n          -ms-flex-align: start;\n              align-items: flex-start;\n      background-color: white;\n      -webkit-box-shadow: 0px 0px 4px -1.5px rgba(0, 0, 0, 0.75);\n      box-shadow: 0px 0px 4px -1.5px rgba(0, 0, 0, 0.75); }\n  .access-wrapper .access-content .form-wrapper h3 {\n        font-family: sans-serif;\n        margin-bottom: 0;\n        font-size: 24px;\n        font-weight: 400;\n        margin-left: 64px;\n        margin-top: 40px; }\n  .access-wrapper .access-content .form-wrapper span {\n        color: #00bcd4;\n        font-family: sans-serif;\n        margin-bottom: 24px;\n        margin-left: 425px;\n        margin-top: 8px; }\n  .access-wrapper .access-content .form-wrapper form {\n        width: 100%;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex; }\n  .access-wrapper .access-content .form-wrapper form .user-img {\n          background-color: #bfbfbf;\n          border-radius: 75px;\n          width: 75px;\n          height: 75px;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-pack: center;\n              -ms-flex-pack: center;\n                  justify-content: center;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center;\n          margin-left: 128px;\n          margin-top: 24px;\n          margin-right: 16px; }\n  .access-wrapper .access-content .form-wrapper form .basicInfo-wrapper {\n          margin-top: 16px;\n          width: 100%;\n          max-width: 550px; }\n  .button {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 100%;\n  max-width: 148px;\n  margin-bottom: 32px; }\n  .button button {\n    height: 40px;\n    width: 75px;\n    background-color: white;\n    border: none;\n    -webkit-box-shadow: 0px 0px 4px -1.5px rgba(0, 0, 0, 0.75);\n    box-shadow: 0px 0px 4px -1.5px rgba(0, 0, 0, 0.75); }\n  .custom-select {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n  .custom-select .select-div {\n    width: 10px;\n    height: 10px;\n    border-bottom: 2px solid gray;\n    border-right: 2px solid gray;\n    top: 23px;\n    left: 95%;\n    position: relative;\n    -webkit-transform: rotate(45deg);\n    transform: rotate(45deg); }\n  @media screen and (max-width: 400px) {\n      .custom-select .select-div {\n        left: 90%; } }\n  .custom-select label {\n    margin-bottom: 0;\n    color: #00bcd4;\n    width: 100%; }\n  .custom-select select {\n    width: 100%;\n    height: 40px;\n    -webkit-appearance: none;\n    margin-bottom: 16px;\n    background-color: white;\n    border: none;\n    padding: 0 8px;\n    color: gray; }\n  .input-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 100%;\n  max-width: 250px;\n  padding: 8px 24px; }\n  .input-wrapper label {\n    margin-bottom: 8px;\n    color: gray;\n    font-family: sans-serif; }\n  .input-wrapper input {\n    height: 24px;\n    border: 0px transparent solid;\n    border-bottom: 3px #eaeaea solid;\n    font-family: sans-serif; }\n  .input-wrapper input::-webkit-input-placeholder {\n    color: gray;\n    font-size: 20px; }\n  .input-wrapper input:-moz-placeholder {\n    color: gray;\n    font-size: 20px; }\n  .input-wrapper input:-ms-input-placeholder {\n    color: gray;\n    font-size: 20px; }\n  .json {\n  margin: 16px; }\n"

/***/ }),

/***/ "./src/app/components/access/access.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccessComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_models__ = __webpack_require__("./src/app/app.models.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AccessComponent = /** @class */ (function () {
    function AccessComponent() {
        this.form = new __WEBPACK_IMPORTED_MODULE_1__app_models__["a" /* Form */]();
        this.json = false;
    }
    AccessComponent.prototype.ngOnInit = function () {
    };
    AccessComponent.prototype.values = function (event) {
        console.log(event);
        if (event.target.id === 'name') {
            this.name = event.srcElement.value;
        }
        else if (event.target.id === 'email') {
            this.email = event.srcElement.value;
        }
        else if (event.target.id === 'confirm') {
            this.confirm = event.srcElement.value;
        }
        else if (event.target.id === 'select') {
            this.select = event.srcElement.value;
        }
    };
    AccessComponent.prototype.save = function () {
        this.form.name = this.name;
        this.form.email = this.email;
        this.form.confirm = this.confirm;
        this.form.select = this.select;
        console.log(this.form);
        this.json = true;
    };
    AccessComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-access',
            template: __webpack_require__("./src/app/components/access/access.component.html"),
            styles: [__webpack_require__("./src/app/components/access/access.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AccessComponent);
    return AccessComponent;
}());



/***/ }),

/***/ "./src/app/components/aside/aside.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"aside-wrapper\">\n  <ul>\n    <li><img src=\"./../../../assets/Images/logo.PNG\"/></li>\n    <li [routerLink]=\"['/profile']\" >Profile</li>\n    <li [routerLink]=\"['/access']\" >Request Access</li>\n  </ul>\n</div>"

/***/ }),

/***/ "./src/app/components/aside/aside.component.scss":
/***/ (function(module, exports) {

module.exports = ".aside-wrapper {\n  height: 100vh;\n  width: 100%;\n  max-width: 300px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: end;\n      -ms-flex-pack: end;\n          justify-content: flex-end;\n  background-color: #142638; }\n  .aside-wrapper ul {\n    list-style: none;\n    padding: 0;\n    margin: 0; }\n  .aside-wrapper ul li {\n      padding: 16px 16px;\n      color: white;\n      font-family: sans-serif; }\n  .aside-wrapper ul li img {\n        width: 200px;\n        height: auto; }\n  .aside-wrapper ul li:first-child {\n      padding: 0 16px; }\n  .aside-wrapper ul li:nth-child(2):hover {\n      background-color: #2f2f3e;\n      cursor: pointer; }\n  .aside-wrapper ul li:nth-child(3):hover {\n      background-color: #2f2f3e;\n      cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/components/aside/aside.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsideComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AsideComponent = /** @class */ (function () {
    function AsideComponent() {
    }
    AsideComponent.prototype.ngOnInit = function () {
    };
    AsideComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-aside',
            template: __webpack_require__("./src/app/components/aside/aside.component.html"),
            styles: [__webpack_require__("./src/app/components/aside/aside.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AsideComponent);
    return AsideComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/alert/alert.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"{'alert-success': alertSuccess, 'alert-error': alertError, 'alert' : widthAlert}\" class=\"alert-message-wrapper\">\n  <div class=\"main-wrapper\">\n      <div>\n          <p *ngIf=\"alertSuccess\"> {{ alertTextRight }} </p>\n          <p *ngIf=\"alertError\"> {{ alertTextError }} </p>\n      </div>\n      <div class=\"close-modal\" (click)=\"clickClose()\"><i class=\"fas fa-times\"></i></div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/profile/alert/alert.component.scss":
/***/ (function(module, exports) {

module.exports = ".alert-message-wrapper {\n  position: fixed;\n  bottom: 2rem;\n  left: calc( 50% + 125px);\n  padding: 1rem 1.5rem;\n  -webkit-animation: fromBottomAlert .25s;\n          animation: fromBottomAlert .25s;\n  max-width: 1200px;\n  width: calc( (100% - 225px) / 2);\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  z-index: 99999;\n  border-radius: 10px; }\n  .alert-message-wrapper .main-wrapper {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    width: 100%; }\n  .alert-message-wrapper .main-wrapper p {\n      text-transform: uppercase;\n      font-weight: bold; }\n  .alert-message-wrapper .close-modal {\n    position: relative;\n    top: unset;\n    right: unset;\n    width: 18px;\n    height: 18px; }\n  .alert-message-wrapper .close-modal:before, .alert-message-wrapper .close-modal:after {\n      width: 3px; }\n  .alert {\n  left: 50% !important;\n  max-width: 720px !important; }\n  .alert-success {\n  background-color: #00bcd4;\n  color: black; }\n  .alert-success .close-modal:before, .alert-success .close-modal:after {\n    background-color: black; }\n  .alert-error {\n  background-color: #00bcd4;\n  color: white; }\n  .alert-error .close-modal:before, .alert-error .close-modal:after {\n    background-color: white; }\n  @-webkit-keyframes fromBottomAlert {\n  from {\n    margin-bottom: -55px; }\n  to {\n    margin-bottom: 0px; } }\n  @keyframes fromBottomAlert {\n  from {\n    margin-bottom: -55px; }\n  to {\n    margin-bottom: 0px; } }\n  @media only screen and (max-width: 768px) {\n  .alert-message-wrapper {\n    left: 50%;\n    width: 95%; } }\n"

/***/ }),

/***/ "./src/app/components/profile/alert/alert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AlertComponent = /** @class */ (function () {
    function AlertComponent() {
        this.closeAlert = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    AlertComponent.prototype.ngOnInit = function () {
    };
    AlertComponent.prototype.clickClose = function () {
        this.restartAlert();
        this.closeAlert.emit(true);
    };
    AlertComponent.prototype.automaticClose = function () {
        var _this = this;
        setTimeout(function () {
            _this.clickClose();
        }, 3000);
    };
    AlertComponent.prototype.restartAlert = function () {
        this.alertError = false;
        this.alertSuccess = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], AlertComponent.prototype, "alertSuccess", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], AlertComponent.prototype, "alertError", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], AlertComponent.prototype, "alertTextRight", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], AlertComponent.prototype, "alertTextError", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], AlertComponent.prototype, "widthAlert", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], AlertComponent.prototype, "timeAlert", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], AlertComponent.prototype, "closeAlert", void 0);
    AlertComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-alert',
            template: __webpack_require__("./src/app/components/profile/alert/alert.component.html"),
            styles: [__webpack_require__("./src/app/components/profile/alert/alert.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"Form\" (ngSubmit)=\"form()\">\n  <div class=\"basicInfo-wrapper\">\n    <div class=\"input-wrapper\">\n      <label>Alias</label>\n      <input formControlName=\"name\"  id=\"name\" placeholder=\"Name 1\"/>\n    </div>\n    <div class=\"input-wrapper\">\n      <label>Street Address</label>\n      <input formControlName=\"address\"  id=\"address\" placeholder=\"East Hobart Street #118\" />\n    </div>\n    <div class=\"radioButtons\">\n      <div class=\"radio-wrapper\">\n        <div class=\"container\" >\n          <input type=\"radio\" (click)=\"radio($event)\" id=\"work\" name=\"pedido1\" value=\"{{ value }}\">\n          <span id=\"workSpan\" class=\"radio\"></span>\n        </div>\n        <label>Work</label>\n      </div>\n      <div class=\"radio-wrapper\">\n        <div class=\"container\">\n          <input type=\"radio\" (click)=\"radio($event)\" id=\"home\" name=\"pedido1\" value=\"{{ value }}\">\n          <span id=\"homeSpan\" class=\"radio white\"></span>\n        </div>\n        <label>Home</label>\n      </div>\n    </div>\n  </div>\n  <div class=\"specificInfo-wrapper\">\n    <div class=\"name-wrapper \">\n        <div class=\"input-wrapper second-inputs\">\n          <label>First Name</label>\n          <input formControlName=\"name1\" id=\"name1\" placeholder=\"Name 2\"/>\n        </div>\n        <div class=\"input-wrapper second-inputs\">\n          <label>Second Name</label>\n          <input formControlName=\"name2\" id=\"name2\" placeholder=\"Name 3\"/>\n        </div>\n        <div class=\"input-wrapper second-inputs\">\n          <label>Last Name</label>\n          <input formControlName=\"name3\" id=\"name3\" placeholder=\"Name 4\"/>\n        </div>\n    </div>\n    <div class=\"geographicInfo-wrapper\">\n        <div class=\"input-wrapper second-inputs maxWidth\">\n          <label>Contact Name</label>\n          <input formControlName=\"name4\" id=\"name4\" placeholder=\"Some dude\"/>\n        </div>\n        <div class=\"city-wrapper\">\n            <div class=\"input-wrapper second-inputs third-input\">\n              <label>City</label>\n              <input formControlName=\"city\" id=\"city\" placeholder=\"Lowel\"/>\n            </div>\n            <div class=\"input-wrapper second-inputs third-input\">\n              <label>Country</label>\n              <input formControlName=\"country\" id=\"country\" placeholder=\"USA\"/>\n            </div>\n            <div class=\"input-wrapper second-inputs third-input\">\n              <label>Phone</label>\n              <input formControlName=\"phone\" id=\"phone\" placeholder=\"xxx-xxx-xxxx\"/>\n            </div>\n        </div>\n        <div class=\"city-wrapper\">\n            <div class=\"input-wrapper second-inputs third-input\">\n              <label>State</label>\n              <input formControlName=\"state\" id=\"state\" placeholder=\"NH\"/>\n            </div>\n            <div class=\"input-wrapper second-inputs third-input\">\n              <label>Zip Code</label>\n              <input formControlName=\"zip\" id=\"zip\" placeholder=\"452165\"/>\n            </div>\n            <div class=\"button\">\n              <button>Save</button>\n            </div>\n        </div>\n    </div>\n  </div>\n</form>\n\n<app-alert *ngIf=\"showAlert\" (closeAlert)=\"closeAlert()\" [alertTextRight]=\"alertTextRight\" [alertTextError]=\"alertTextError\" [alertError]=\"alertError\" [alertSuccess]=\"alertSuccess\" [widthAlert]=\"true\" [timeAlert]=\"TimeAlert\"></app-alert>"

/***/ }),

/***/ "./src/app/components/profile/contact/contact.component.scss":
/***/ (function(module, exports) {

module.exports = "form {\n  width: 100%; }\n\n.basicInfo-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  border-bottom: 2px #eaeaea solid;\n  margin-bottom: 16px; }\n\n.basicInfo-wrapper .radioButtons {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: distribute;\n        justify-content: space-around;\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: flex-end;\n    width: 100%;\n    max-width: 250px;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    padding: 24px; }\n\n.basicInfo-wrapper .radioButtons .radio-wrapper {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: end;\n          -ms-flex-pack: end;\n              justify-content: end;\n      -webkit-box-align: center;\n      -ms-flex-align: center;\n      align-items: center;\n      width: 70px; }\n\n.specificInfo-wrapper {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  margin-top: 48px;\n  margin-bottom: 24px; }\n\n.specificInfo-wrapper .name-wrapper {\n    width: 35%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n\n.specificInfo-wrapper .geographicInfo-wrapper {\n    width: 65%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n\n.specificInfo-wrapper .geographicInfo-wrapper .city-wrapper {\n      width: 100%;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex; }\n\n.container {\n  cursor: pointer;\n  width: 16px;\n  height: 16px;\n  border-radius: 16px;\n  border: 1px gray solid;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  margin-right: 8px; }\n\n.container .radio {\n    background-color: #00bcd4;\n    display: block;\n    width: 12px;\n    height: 12px;\n    margin-left: -16px;\n    border-radius: 12px; }\n\n.container .white {\n    background-color: white !important; }\n\n.container input {\n    opacity: 0;\n    width: 16px;\n    margin: 0;\n    height: 16px; }\n\n.input-wrapper {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 100%;\n  max-width: 250px;\n  padding: 24px; }\n\n.input-wrapper label {\n    margin-bottom: 8px;\n    color: gray;\n    font-family: sans-serif; }\n\n.input-wrapper input {\n    height: 24px;\n    border: 0px transparent solid;\n    border-bottom: 3px #eaeaea solid;\n    font-family: sans-serif; }\n\n.input-wrapper input::-webkit-input-placeholder {\n    color: gray;\n    font-size: 20px; }\n\n.input-wrapper input:-moz-placeholder {\n    color: gray;\n    font-size: 20px; }\n\n.input-wrapper input:-ms-input-placeholder {\n    color: gray;\n    font-size: 20px; }\n\n.second-inputs {\n  padding: 8px 24px; }\n\n.third-input {\n  max-width: 100px; }\n\n.button {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  width: 100%;\n  max-width: 148px; }\n\n.button button {\n    height: 40px;\n    width: 75px;\n    background-color: white;\n    border: none;\n    -webkit-box-shadow: 0px 0px 4px -1.5px rgba(0, 0, 0, 0.75);\n    box-shadow: 0px 0px 4px -1.5px rgba(0, 0, 0, 0.75); }\n\n.maxWidth {\n  max-width: 400px; }\n\n.error {\n  border-bottom: 2px red solid !important; }\n"

/***/ }),

/***/ "./src/app/components/profile/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
        this.value = true;
        this.Form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            'name': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
            'address': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
            'name1': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
            'name2': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](''),
            'name3': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required),
            'name4': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](''),
            'city': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](''),
            'country': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].maxLength(3)),
            'phone': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].pattern('^(\d{10})|(([\(]?([0-9]{3})[\)]?)?[ \.\-]?([0-9]{3})[ \.\-]([0-9]{4}))$')]),
            'state': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].maxLength(2)),
            'zip': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('')
        });
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.closeAlert = function () {
        this.showAlert = false;
    };
    ContactComponent.prototype.form = function () {
        console.log('entro');
        if (this.Form.valid) {
            // Ready to post
            console.log(this.Form);
            console.log('valid');
            this.showAlert = true;
            this.alertError = true;
            this.TimeAlert = false;
            this.alertTextError = 'se hizo correctamente';
        }
        else {
            console.log('invalid');
            // Invalid login form
            this.showAlert = true;
            this.alertError = true;
            this.TimeAlert = false;
            this.alertTextError = 'algo salio mal';
            if (this.Form.controls['name'].invalid) {
                console.log('invalid1');
                var element = document.getElementById("name");
                element.classList.add("error");
            }
            if (this.Form.controls['address'].invalid) {
                console.log('invalid2');
                var element = document.getElementById("address");
                element.classList.add("error");
            }
            if (this.Form.controls['name1'].invalid) {
                console.log('invalid3');
                var element = document.getElementById("name1");
                element.classList.add("error");
            }
            if (this.Form.controls['name3'].invalid) {
                console.log('invalid4');
                var element = document.getElementById("name3");
                element.classList.add("error");
            }
            if (this.Form.controls['country'].invalid) {
                console.log('invalid5');
                var element = document.getElementById("country");
                element.classList.add("error");
            }
            if (this.Form.controls['state'].invalid) {
                console.log('invalid6');
                var element = document.getElementById("state");
                element.classList.add("error");
            }
            if (this.Form.controls['phone'].invalid) {
                console.log('invalid7');
                var element = document.getElementById("phone");
                element.classList.add("error");
            }
        }
    };
    ContactComponent.prototype.radio = function (event) {
        if (event.target.id === 'home') {
            this.value = false;
            var element = document.getElementById("homeSpan");
            element.classList.remove("white");
            var element1 = document.getElementById("workSpan");
            element1.classList.add("white");
        }
        else if (event.target.id === 'work') {
            this.value = true;
            var element = document.getElementById("homeSpan");
            element.classList.add("white");
            var element1 = document.getElementById("workSpan");
            element1.classList.remove("white");
        }
        console.log(this.value);
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("./src/app/components/profile/contact/contact.component.html"),
            styles: [__webpack_require__("./src/app/components/profile/contact/contact.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/movies/movies.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"headers\">\n  <div class=\"header black\">Title</div>\n  <div class=\"header black\">Director</div>\n  <div class=\"header black\">Year</div>\n</div>\n<div *ngFor=\"let movie of movies\" class=\"headers\">\n    <div class=\"header\">\n      {{ movie.title }}\n    </div>\n    <div class=\"header\">\n      {{ movie.director }}\n    </div>\n    <div class=\"header\">\n      {{ movie.year }}\n    </div>\n</div>\n<div class=\"circle\"><i class=\"fas fa-plus\"></i></div>"

/***/ }),

/***/ "./src/app/components/profile/movies/movies.component.scss":
/***/ (function(module, exports) {

module.exports = ".headers {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  border: 0px transparent solid;\n  border-bottom: 1px #eaeaea solid;\n  width: 100%;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n  .headers .header {\n    width: 33%;\n    padding: 16px 24px;\n    font-family: sans-serif; }\n  .headers .black {\n    font-weight: 900; }\n  .circle {\n  background-color: #00bcd4;\n  color: white;\n  border-radius: 50px;\n  height: 50px;\n  width: 50px;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  font-size: 16px;\n  cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/components/profile/movies/movies.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoviesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_movies_service__ = __webpack_require__("./src/app/services/movies.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MoviesComponent = /** @class */ (function () {
    function MoviesComponent(Movies) {
        this.Movies = Movies;
        this.movies = this.Movies.returnMovies();
    }
    MoviesComponent.prototype.ngOnInit = function () {
    };
    MoviesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_movies_service__["a" /* MoviesService */]],
            selector: 'app-movies',
            template: __webpack_require__("./src/app/components/profile/movies/movies.component.html"),
            styles: [__webpack_require__("./src/app/components/profile/movies/movies.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_movies_service__["a" /* MoviesService */]])
    ], MoviesComponent);
    return MoviesComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"profile-wrapper\">\n    <div class=\"profile-content\">\n      <h2 *ngIf=\"contact\">Contact Information</h2>\n      <h2 *ngIf=\"movie\">Profile</h2>\n      <div class=\"content\">\n        <div class=\"sidebar-wrapper white-wrapper\">\n          <div class=\"img-wrapper\">\n            <img src=\"../../../assets/Images/user.PNG\"/>\n            <label>Jonh Doe</label>\n          </div>\n          <ul>\n            <li (click)=\"contact = true; movie = false;\" >Contact Information</li>\n            <li (click)=\"contact = false; movie = true;\">My movies</li>\n            <li>My books</li>\n          </ul>\n        </div>\n        <app-contact *ngIf=\"contact\" class=\"info-wrapper white-wrapper\">\n  \n        </app-contact>\n        <app-movies *ngIf=\"movie\" class=\"movies-wrapper white-wrapper\">\n         \n        </app-movies>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/components/profile/profile.component.scss":
/***/ (function(module, exports) {

module.exports = ".profile-wrapper {\n  width: 100%;\n  padding: 32px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n  .profile-wrapper .profile-content {\n    width: 100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: start;\n        -ms-flex-pack: start;\n            justify-content: flex-start;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column; }\n  .profile-wrapper .profile-content h2 {\n      font-weight: 100;\n      font-family: sans-serif;\n      margin-bottom: 48px; }\n  .profile-wrapper .profile-content .content {\n      width: 100%;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-pack: baseline;\n          -ms-flex-pack: baseline;\n              justify-content: baseline; }\n  .profile-wrapper .profile-content .content .white-wrapper {\n        background-color: white;\n        -webkit-box-shadow: 0px 0px 4px -1.5px rgba(0, 0, 0, 0.75);\n        box-shadow: 0px 0px 4px -1.5px rgba(0, 0, 0, 0.75); }\n  .profile-wrapper .profile-content .content .sidebar-wrapper {\n        width: 100%;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        max-width: 200px;\n        height: -webkit-fit-content;\n        height: -moz-fit-content;\n        height: fit-content;\n        margin-right: 48px; }\n  .profile-wrapper .profile-content .content .sidebar-wrapper .img-wrapper {\n          border: 0px transparent solid;\n          border-bottom: 2px #eaeaea solid;\n          width: 100%;\n          display: -webkit-box;\n          display: -ms-flexbox;\n          display: flex;\n          -webkit-box-align: center;\n              -ms-flex-align: center;\n                  align-items: center; }\n  .profile-wrapper .profile-content .content .sidebar-wrapper .img-wrapper img {\n            width: 50px;\n            padding: 12px; }\n  .profile-wrapper .profile-content .content .sidebar-wrapper .img-wrapper label {\n            font-family: sans-serif; }\n  .profile-wrapper .profile-content .content .sidebar-wrapper ul {\n          list-style: none;\n          padding: 0; }\n  .profile-wrapper .profile-content .content .sidebar-wrapper ul li {\n            padding: 12px;\n            font-family: sans-serif; }\n  .profile-wrapper .profile-content .content .sidebar-wrapper ul li:hover {\n            background-color: #eaeaea;\n            cursor: pointer; }\n  .profile-wrapper .profile-content .content .sidebar-wrapper ul li:last-child:hover {\n            background-color: transparent; }\n  .profile-wrapper .profile-content .content .movies-wrapper {\n        width: 100%;\n        max-width: 800px;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        padding: 24px;\n        height: 65vh;\n        -webkit-box-align: end;\n            -ms-flex-align: end;\n                align-items: flex-end; }\n  .profile-wrapper .profile-content .content .info-wrapper {\n        width: 100%;\n        max-width: 800px;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n        -webkit-box-orient: vertical;\n        -webkit-box-direction: normal;\n            -ms-flex-direction: column;\n                flex-direction: column;\n        height: auto;\n        -webkit-box-align: end;\n            -ms-flex-align: end;\n                align-items: flex-end; }\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
        this.movie = false;
        this.contact = true;
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/components/profile/profile.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/services/movies.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoviesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MoviesService = /** @class */ (function () {
    function MoviesService() {
        this.movies = [
            {
                title: 'The Wizard of Oz',
                director: 'Victor Fleming',
                year: '1939',
            },
            {
                title: 'The Third Man',
                director: 'Carol Reed',
                year: '1949',
            },
            {
                title: 'Citizen Kane',
                director: 'Orson Welles',
                year: '1941',
            },
        ];
        console.log(this.movies);
    }
    MoviesService.prototype.returnMovies = function () {
        return this.movies;
    };
    MoviesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], MoviesService);
    return MoviesService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map