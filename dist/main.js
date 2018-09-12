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
		var e = new Error('Cannot find module "' + req + '".');
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

module.exports = "<nav>\r\n    <app-navbar></app-navbar>>\r\n</nav>\r\n<main>    \r\n<router-outlet></router-outlet>\r\n<!-- <app-splash></app-splash> -->\r\n<!-- <app-results-page></app-results-page> -->\r\n</main>"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _results_page_results_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./results-page/results-page.component */ "./src/app/results-page/results-page.component.ts");
/* harmony import */ var _splash_splash_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./splash/splash.component */ "./src/app/splash/splash.component.ts");
/* harmony import */ var _services_list_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/list.service */ "./src/app/services/list.service.ts");
/* harmony import */ var _services_geolocation_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/geolocation.service */ "./src/app/services/geolocation.service.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
                _results_page_results_page_component__WEBPACK_IMPORTED_MODULE_6__["ResultsPageComponent"],
                _splash_splash_component__WEBPACK_IMPORTED_MODULE_7__["SplashComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _app_routing__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"]
            ],
            providers: [_services_list_service__WEBPACK_IMPORTED_MODULE_8__["ListService"], _services_geolocation_service__WEBPACK_IMPORTED_MODULE_9__["GeolocationService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: router, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "router", function() { return router; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _results_page_results_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./results-page/results-page.component */ "./src/app/results-page/results-page.component.ts");
/* harmony import */ var _splash_splash_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./splash/splash.component */ "./src/app/splash/splash.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var router = [
    { path: '', component: _splash_splash_component__WEBPACK_IMPORTED_MODULE_3__["SplashComponent"] },
    { path: 'results', component: _results_page_results_page_component__WEBPACK_IMPORTED_MODULE_2__["ResultsPageComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(router)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\r\n    background-color: #78ecc2;\r\n    position: fixed;\r\n    overflow: hidden;\r\n    top: 0;\r\n}\r\n\r\n.svglogo {\r\n    width: var(--svg-logo);\r\n    display: block;\r\n    margin-left: 4vw;\r\n    margin-right: auto;\r\n    height: auto;\r\n    padding: 2.5px;\r\n}"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\r\n  <div class=\"nav-wrapper\">\r\n    <a href=\"#!\" class=\"brand-logo\"><img src=\"../../assets/nicecream-logo-white-font.svg\" class=\"svglogo\"/></a>\r\n    <!-- <a href=\"#\" data-target=\"mobile-demo\" class=\"sidenav-trigger\"><i class=\"material-icons\">menu</i></a> -->\r\n    <ul class=\"right hide-on-med-and-down\">\r\n      <!-- <li><a href=\"sass.html\">Sass</a></li>\r\n      <li><a href=\"badges.html\">Components</a></li>\r\n      <li><a href=\"collapsible.html\">Javascript</a></li>\r\n      <li><a href=\"mobile.html\">Mobile</a></li> -->\r\n    </ul>\r\n  </div>\r\n</nav>\r\n\r\n<ul class=\"sidenav\" id=\"mobile-demo\">\r\n  <li><a href=\"sass.html\">Sass</a></li>\r\n  <li><a href=\"badges.html\">Components</a></li>\r\n  <li><a href=\"collapsible.html\">Javascript</a></li>\r\n  <li><a href=\"mobile.html\">Mobile</a></li>\r\n</ul>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
        // (function($){
        //       $(document).ready(function(){
        //           // Write the jQuery function here
        //           $('.sidenav').sidenav();
        //       })
        //   })(jQuery);
        //   $(document).ready(function(){
        //     $('.sidenav').sidenav();
        // });
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/results-page/results-page.component.css":
/*!*********************************************************!*\
  !*** ./src/app/results-page/results-page.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#photo {\r\n    width: 4em;\r\n    height: 4em;\r\n}"

/***/ }),

/***/ "./src/app/results-page/results-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/results-page/results-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table id=\"table\">\r\n  <thead>\r\n    <tr>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let list of lists\">\r\n      <td><img src={{list.image_url}} id=\"photo\"/></td>\r\n      <td>{{list.name}}</td>\r\n      <td>{{list.rating}}</td>\r\n\r\n    </tr>\r\n  </tbody>\r\n</table>"

/***/ }),

/***/ "./src/app/results-page/results-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/results-page/results-page.component.ts ***!
  \********************************************************/
/*! exports provided: ResultsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsPageComponent", function() { return ResultsPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_list_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/list.service */ "./src/app/services/list.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResultsPageComponent = /** @class */ (function () {
    function ResultsPageComponent(listServ) {
        this.listServ = listServ;
    }
    ResultsPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listServ.getAllLists().subscribe(function (res) {
            _this.lists = res;
        });
    };
    ResultsPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-results-page',
            template: __webpack_require__(/*! ./results-page.component.html */ "./src/app/results-page/results-page.component.html"),
            styles: [__webpack_require__(/*! ./results-page.component.css */ "./src/app/results-page/results-page.component.css")]
        }),
        __metadata("design:paramtypes", [_services_list_service__WEBPACK_IMPORTED_MODULE_1__["ListService"]])
    ], ResultsPageComponent);
    return ResultsPageComponent;
}());



/***/ }),

/***/ "./src/app/services/geolocation.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/geolocation.service.ts ***!
  \*************************************************/
/*! exports provided: GeolocationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeolocationService", function() { return GeolocationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GeolocationService = /** @class */ (function () {
    function GeolocationService() {
    }
    GeolocationService.prototype.getGeoLocation = function () {
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (observer) {
            console.log('Geolocation working!');
            var options = {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0
            };
            var success = function (pos) {
                var crd = pos.coords;
                console.log("Longitude : " + crd.longitude);
                console.log("Latitude : " + crd.latitude);
                var location = {
                    "latitude": crd.latitude,
                    "longitude": crd.longitude
                };
                console.log(location.latitude);
                observer.next(location);
                observer.complete();
            };
            var error = function (err) {
                console.warn("ERROR(" + err.code + "): " + err.message);
                observer.error(err);
                observer.complete();
            };
            navigator.geolocation.getCurrentPosition(success, error, options);
        });
    };
    GeolocationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], GeolocationService);
    return GeolocationService;
}());



/***/ }),

/***/ "./src/app/services/list.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/list.service.ts ***!
  \******************************************/
/*! exports provided: ListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListService", function() { return ListService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_geolocation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/geolocation.service */ "./src/app/services/geolocation.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ListService = /** @class */ (function () {
    function ListService(http, geoServ) {
        this.http = http;
        this.geoServ = geoServ;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].baseUrl;
        this.serverApi = this.baseUrl;
    }
    ListService.prototype.getAllLists = function () {
        var _this = this;
        return this.geoServ.getGeoLocation().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function (_a) {
            var latitude = _a.latitude, longitude = _a.longitude;
            return _this.http.get(_this.serverApi + "/yelp/?lat=" + latitude + "&long=" + longitude);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (res) { return res.businesses; }));
    };
    ListService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _services_geolocation_service__WEBPACK_IMPORTED_MODULE_2__["GeolocationService"]])
    ], ListService);
    return ListService;
}());



/***/ }),

/***/ "./src/app/splash/splash.component.css":
/*!*********************************************!*\
  !*** ./src/app/splash/splash.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".test {\r\n    display: none;\r\n}\r\n\r\n#gobutton {\r\n    border-radius: 50%;\r\n}\r\n\r\n* {\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\nhtml, body {\r\n    height: 100%; \r\n    width: 100%;\r\n    overflow: hidden;\r\n    position: fixed;\r\n    top: 0%;\r\n    left: 0%;\r\n}\r\n\r\n#letter {\r\n    font-size: 60px;\r\n    border:10px solid var(--button-color);\r\n    border-radius: 50%;\r\n    font-family: Helvetica;\r\n    font-weight: Bold;\r\n    color: white;\r\n    width: 300px;\r\n    height: 300px;\r\n    background-color: var(--button-color);\r\n    text-align: center;\r\n    vertical-align: middle;\r\n    line-height: 120px;\r\n    position: fixed;\r\n    top:55%;\r\n    left: 50%;\r\n    margin-top: -180px;\r\n    margin-left: -150px;\r\n    opacity: 1;\r\n    z-index: -1;\r\n}\r\n\r\n#animation {\r\n    position: fixed;\r\n    width: 100%;\r\n    height: 100%;\r\n    top: 0%;\r\n    left: 0%;\r\n    margin-top: -20px;\r\n    -webkit-transform: scale( 1.2);\r\n}\r\n\r\n.bowl {\r\n    width: 200px;\r\n    height: 150px;\r\n    overflow: hidden;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    animation: bowl 8s cubic-bezier(.89, .14, .5, 1.18) 0s infinite normal forwards;\r\n    -webkit-animation: bowl 8s cubic-bezier(.89, .14, .5, 1.18) 0s infinite normal forwards;\r\n    -webkit-transform: translate( -100px, 30px);\r\n    transform: translate( -100px, 30px);\r\n    z-index: 10;\r\n}\r\n\r\n.bowl:before {\r\n    width: 200px;\r\n    height: 200px;\r\n    border-radius: 250px;\r\n    background-color:#68a2ff;\r\n    position: absolute;\r\n    top: -125px;\r\n    left: 0px;\r\n    content: \"\";\r\n}\r\n\r\n.bites {\r\n    position: absolute;\r\n    z-index: 8;\r\n    top: 50%;\r\n    left: 50%;\r\n    margin-top: 4px;\r\n}\r\n\r\n.bites div {\r\n    position: absolute;\r\n    width: 70px;\r\n    height: 70px;\r\n    border-radius: 90px;\r\n    background-color: var(--button-color);\r\n}\r\n\r\n.bites div:nth-of-type(1) {\r\n    margin-left: -40px;\r\n    margin-top: -80px;\r\n    animation: bite1 8s ease-out 0.5s infinite normal forwards;\r\n    -webkit-animation: bite1 8s ease-out 0.5s infinite normal forwards;\r\n}\r\n\r\n.bites div:nth-of-type(2) {\r\n    margin-left: 10px;\r\n    margin-top: -70px;\r\n    animation: bite2 8s ease-out 0.5s infinite normal forwards;\r\n    -webkit-animation: bite2 8s ease-out 0.5s infinite normal forwards;\r\n}\r\n\r\n.bites div:nth-of-type(3) {\r\n    margin-left: -90px;\r\n    margin-top: -60px;\r\n    animation: bite3 8s ease-out 0.5s infinite normal forwards;\r\n    -webkit-animation: bite3 8s ease-out 0.5s infinite normal forwards;\r\n}\r\n\r\n.bites div:nth-of-type(4) {\r\n    margin-left: -20px;\r\n    margin-top: -40px;\r\n    animation: bite4 8s ease-out 0.5s infinite normal forwards;\r\n    -webkit-animation: bite4 8s ease-out 0.5s infinite normal forwards;\r\n}\r\n\r\n.bites div:nth-of-type(5) {\r\n    margin-left: -40px;\r\n    margin-top: -30px;\r\n    animation: bite5 8s ease-out 0.5s infinite normal forwards;\r\n    -webkit-animation: bite5 8s ease-out 0.5s infinite normal forwards;\r\n}\r\n\r\n.bites div:nth-of-type(6) {\r\n    margin-left: -95px;\r\n    margin-top: -20px;\r\n    animation: bite6 8s ease-out 0.5s infinite normal forwards;\r\n    -webkit-animation: bite6 8s ease-out 0.5s infinite normal forwards;\r\n}\r\n\r\n.bites div:nth-of-type(7) {\r\n    margin-left: 25px;\r\n    margin-top: -20px;\r\n    animation: bite7 8s ease-out 0.5s infinite normal forwards;\r\n    -webkit-animation: bite7 8s ease-out 0.5s infinite normal forwards;\r\n}\r\n\r\n.scoop {\r\n    position: fixed;\r\n    top: 50%;\r\n    left: 50%;\r\n    width: 60px;\r\n    height: 60px;\r\n    border-radius: 60px;\r\n}\r\n\r\n.chocolate {\r\n    background-color: rgba(143, 112, 95, 1);\r\n}\r\n\r\n.strawberry {\r\n    background-color: rgba(255, 162, 185, 1);\r\n}\r\n\r\n.vanilla {\r\n    background-color: #68ffbb;\r\n}\r\n\r\n.scoop:nth-of-type(1) {\r\n    animation: scoop1 8s cubic-bezier(.89, .14, .5, 1.18) 0s infinite normal forwards;\r\n    -webkit-animation: scoop1 8s cubic-bezier(.89, .14, .5, 1.18) 0s infinite normal forwards;\r\n    -webkit-transform: translate( -90px, 0px);\r\n    transform: translate( -90px, 0px);\r\n    z-index: 6;\r\n}\r\n\r\n.scoop:nth-of-type(2) {\r\n    animation: scoop2 8s cubic-bezier(.89, .14, .5, 1.18) 0s infinite normal forwards;\r\n    -webkit-animation: scoop2 8s cubic-bezier(.89, .14, .5, 1.18) 0s infinite normal forwards;\r\n    -webkit-transform: translate( -50px, -5px);\r\n    transform: translate( -50px, -5px);\r\n    z-index: 7;\r\n}\r\n\r\n.scoop:nth-of-type(3) {\r\n    z-index: 5;\r\n    animation: scoop3 8s cubic-bezier(.89, .14, .5, 1.18) 0s infinite normal forwards;\r\n    -webkit-animation: scoop3 8s cubic-bezier(.89, .14, .5, 1.18) 0s infinite normal forwards;\r\n    -webkit-transform: translate( -10px, -10px);\r\n    transform: translate( -10px, -10px);\r\n}\r\n\r\n.scoop:nth-of-type(4) {\r\n    animation: scoop4 8s cubic-bezier(.89, .14, .5, 1.18) 0s infinite normal forwards;\r\n    -webkit-animation: scoop4 8s cubic-bezier(.89, .14, .5, 1.18) 0s infinite normal forwards;\r\n    -webkit-transform: translate( 26px, 0px);\r\n    transform: translate( 26px, 0px);\r\n    z-index: 4;\r\n}\r\n\r\n.scoop:nth-of-type(5) {\r\n    animation: scoop5 8s cubic-bezier(.89, .14, .5, 1.18) 0s infinite normal forwards;\r\n    -webkit-animation: scoop5 8s cubic-bezier(.89, .14, .5, 1.18) 0s infinite normal forwards;\r\n    -webkit-transform: translate( 10px, -30px);\r\n    transform: translate( 10px, -30px);\r\n    z-index: 2;\r\n}\r\n\r\n.scoop:nth-of-type(6) {\r\n    animation: scoop6 8s cubic-bezier(.89, .14, .5, 1.18) 0s infinite normal forwards;\r\n    -webkit-animation: scoop6 8s cubic-bezier(.89, .14, .5, 1.18) 0s infinite normal forwards;\r\n    -webkit-transform: translate( -20px, -40px);\r\n    transform: translate( -20px, -40px);\r\n    z-index: 3;\r\n}\r\n\r\n.scoop:nth-of-type(7) {\r\n    animation: scoop7 8s cubic-bezier(.89, .14, .5, 1.18) 0s infinite normal forwards;\r\n    -webkit-animation: scoop7 8s cubic-bezier(.89, .14, .5, 1.18) 0s infinite normal forwards;\r\n    -webkit-transform: translate( -50px, -35px);\r\n    transform: translate( -50px, -35px);\r\n    z-index: 1;\r\n}\r\n\r\n.cherry {\r\n    position: absolute;\r\n    animation: cherry 8s cubic-bezier(.89, .14, .5, 1.18) 0s infinite normal forwards;\r\n    -webkit-animation: cherry 8s cubic-bezier(.89, .14, .5, 1.18) 0s infinite normal forwards;\r\n    width: 15px;\r\n    height: 15px;\r\n    background-color: red;\r\n    border-radius: 10px;\r\n    -webkit-transform: translate( 0px, -48px);\r\n    transform: translate( 0px, -48px);\r\n    overflow: visible;\r\n    top: 50%;\r\n    left: 50%;\r\n    z-index: 1;\r\n}\r\n\r\n.cherry:after {\r\n    position: absolute;\r\n    border-top: 2px solid rgba(65, 32, 3, 1);\r\n    border-right: 2px solid rgba(65, 32, 3, 1);\r\n    width: 5px;\r\n    height: 12px;\r\n    margin-top: -12px;\r\n    margin-left: 1px;\r\n    border-top-right-radius: 20px;\r\n    z-index: -1;\r\n    content: \"\";\r\n}\r\n\r\n@keyframes cherry {\r\n    100% {\r\n        margin-top: 0px;\r\n    }\r\n    0% {\r\n        margin-top: -50%;\r\n    }\r\n    70% {\r\n        margin-top: 0px;\r\n    }\r\n    65% {\r\n        margin-top: -50%;\r\n    }\r\n}\r\n\r\n@-webkit-keyframes cherry {\r\n    100% {\r\n        margin-top: 0px;\r\n    }\r\n    0% {\r\n        margin-top: -50%;\r\n    }\r\n    70% {\r\n        margin-top: 0px;\r\n    }\r\n    65% {\r\n        margin-top: -50%;\r\n    }\r\n}\r\n\r\n@keyframes scoop7 {\r\n    57% {\r\n        margin-top: -50%;\r\n    }\r\n    64% {\r\n        margin-top: 0px;\r\n    }\r\n    100% {\r\n        margin-top: 0px;\r\n    }\r\n    0% {\r\n        margin-top: -50%;\r\n    }\r\n    72% {\r\n        margin-top: 0px;\r\n    }\r\n    71% {\r\n        margin-top: 2px;\r\n    }\r\n}\r\n\r\n@-webkit-keyframes scoop7 {\r\n    57% {\r\n        margin-top: -50%;\r\n    }\r\n    64% {\r\n        margin-top: 0px;\r\n    }\r\n    100% {\r\n        margin-top: 0px;\r\n    }\r\n    0% {\r\n        margin-top: -50%;\r\n    }\r\n    72% {\r\n        margin-top: 0px;\r\n    }\r\n    71% {\r\n        margin-top: 2px;\r\n    }\r\n}\r\n\r\n@keyframes scoop6 {\r\n    56% {\r\n        margin-top: -50%;\r\n    }\r\n    61% {\r\n        margin-top: 0px;\r\n    }\r\n    64% {\r\n        margin-top: 8px;\r\n    }\r\n    65% {\r\n        margin-top: 0px;\r\n    }\r\n    100% {\r\n        margin-top: 0px;\r\n    }\r\n    0% {\r\n        margin-top: -50%;\r\n    }\r\n    72% {\r\n        margin-top: 0px;\r\n    }\r\n    71% {\r\n        margin-top: 1px;\r\n    }\r\n}\r\n\r\n@-webkit-keyframes scoop6 {\r\n    56% {\r\n        margin-top: -50%;\r\n    }\r\n    61% {\r\n        margin-top: 0px;\r\n    }\r\n    64% {\r\n        margin-top: 8px;\r\n    }\r\n    65% {\r\n        margin-top: 0px;\r\n    }\r\n    100% {\r\n        margin-top: 0px;\r\n    }\r\n    0% {\r\n        margin-top: -50%;\r\n    }\r\n    72% {\r\n        margin-top: 0px;\r\n    }\r\n    71% {\r\n        margin-top: 1px;\r\n    }\r\n}\r\n\r\n@keyframes scoop5 {\r\n    50% {\r\n        margin-top: -50%;\r\n    }\r\n    56% {\r\n        margin-top: 0px;\r\n    }\r\n    60% {\r\n        margin-top: 7px;\r\n    }\r\n    61% {\r\n        margin-top: 0px;\r\n    }\r\n    64% {\r\n        margin-top: 8px;\r\n    }\r\n    65% {\r\n        margin-top: 0px;\r\n    }\r\n    100% {\r\n        margin-top: 0px;\r\n    }\r\n    0% {\r\n        margin-top: -50%;\r\n    }\r\n    72% {\r\n        margin-top: 0px;\r\n    }\r\n    71% {\r\n        margin-top: 1px;\r\n    }\r\n}\r\n\r\n@-webkit-keyframes scoop5 {\r\n    50% {\r\n        margin-top: -50%;\r\n    }\r\n    56% {\r\n        margin-top: 0px;\r\n    }\r\n    60% {\r\n        margin-top: 7px;\r\n    }\r\n    61% {\r\n        margin-top: 0px;\r\n    }\r\n    64% {\r\n        margin-top: 8px;\r\n    }\r\n    65% {\r\n        margin-top: 0px;\r\n    }\r\n    100% {\r\n        margin-top: 0px;\r\n    }\r\n    0% {\r\n        margin-top: -50%;\r\n    }\r\n    72% {\r\n        margin-top: 0px;\r\n    }\r\n    71% {\r\n        margin-top: 1px;\r\n    }\r\n}\r\n\r\n@keyframes scoop4 {\r\n    55% {\r\n        margin-top: 0px;\r\n    }\r\n    40% {\r\n        margin-top: -50%;\r\n    }\r\n    47% {\r\n        margin-top: 0px;\r\n    }\r\n    56% {\r\n        margin-top: 5px;\r\n    }\r\n    57% {\r\n        margin-top: 0px;\r\n    }\r\n    60% {\r\n        margin-top: 7px;\r\n    }\r\n    61% {\r\n        margin-top: 0px;\r\n    }\r\n    64% {\r\n        margin-top: 8px;\r\n    }\r\n    65% {\r\n        margin-top: 0px;\r\n    }\r\n    100% {\r\n        margin-top: 0px;\r\n    }\r\n    0% {\r\n        margin-top: -50%;\r\n    }\r\n    72% {\r\n        margin-top: 0px;\r\n    }\r\n    71% {\r\n        margin-top: 1px;\r\n    }\r\n}\r\n\r\n@-webkit-keyframes scoop4 {\r\n    55% {\r\n        margin-top: 0px;\r\n    }\r\n    40% {\r\n        margin-top: -50%;\r\n    }\r\n    47% {\r\n        margin-top: 0px;\r\n    }\r\n    56% {\r\n        margin-top: 5px;\r\n    }\r\n    57% {\r\n        margin-top: 0px;\r\n    }\r\n    60% {\r\n        margin-top: 7px;\r\n    }\r\n    61% {\r\n        margin-top: 0px;\r\n    }\r\n    64% {\r\n        margin-top: 8px;\r\n    }\r\n    65% {\r\n        margin-top: 0px;\r\n    }\r\n    100% {\r\n        margin-top: 0px;\r\n    }\r\n    0% {\r\n        margin-top: -50%;\r\n    }\r\n    72% {\r\n        margin-top: 0px;\r\n    }\r\n    71% {\r\n        margin-top: 1px;\r\n    }\r\n}\r\n\r\n@keyframes scoop3 {\r\n    35% {\r\n        margin-top: -50%;\r\n    }\r\n    42% {\r\n        margin-top: 0px;\r\n    }\r\n    48% {\r\n        margin-top: 0px;\r\n    }\r\n    55% {\r\n        margin-top: 0px;\r\n    }\r\n    46% {\r\n        margin-top: 0px;\r\n    }\r\n    47% {\r\n        margin-top: 6px;\r\n    }\r\n    56% {\r\n        margin-top: 5px;\r\n    }\r\n    57% {\r\n        margin-top: 0px;\r\n    }\r\n    60% {\r\n        margin-top: 7px;\r\n    }\r\n    61% {\r\n        margin-top: 0px;\r\n    }\r\n    64% {\r\n        margin-top: 8px;\r\n    }\r\n    65% {\r\n        margin-top: 0px;\r\n    }\r\n    100% {\r\n        margin-top: 0px;\r\n    }\r\n    0% {\r\n        margin-top: -50%;\r\n    }\r\n    72% {\r\n        margin-top: 0px;\r\n    }\r\n    71% {\r\n        margin-top: 1px;\r\n    }\r\n}\r\n\r\n@-webkit-keyframes scoop3 {\r\n    35% {\r\n        margin-top: -50%;\r\n    }\r\n    42% {\r\n        margin-top: 0px;\r\n    }\r\n    48% {\r\n        margin-top: 0px;\r\n    }\r\n    55% {\r\n        margin-top: 0px;\r\n    }\r\n    46% {\r\n        margin-top: 0px;\r\n    }\r\n    47% {\r\n        margin-top: 6px;\r\n    }\r\n    56% {\r\n        margin-top: 5px;\r\n    }\r\n    57% {\r\n        margin-top: 0px;\r\n    }\r\n    60% {\r\n        margin-top: 7px;\r\n    }\r\n    61% {\r\n        margin-top: 0px;\r\n    }\r\n    64% {\r\n        margin-top: 8px;\r\n    }\r\n    65% {\r\n        margin-top: 0px;\r\n    }\r\n    100% {\r\n        margin-top: 0px;\r\n    }\r\n    0% {\r\n        margin-top: -50%;\r\n    }\r\n    72% {\r\n        margin-top: 0px;\r\n    }\r\n    71% {\r\n        margin-top: 1px;\r\n    }\r\n}\r\n\r\n@keyframes scoop2 {\r\n    31% {\r\n        margin-top: -50%;\r\n    }\r\n    38% {\r\n        margin-top: 0px;\r\n    }\r\n    43% {\r\n        margin-top: 0px;\r\n    }\r\n    41% {\r\n        margin-top: 0px;\r\n    }\r\n    42% {\r\n        margin-top: 8px;\r\n    }\r\n    48% {\r\n        margin-top: 0px;\r\n    }\r\n    55% {\r\n        margin-top: 0px;\r\n    }\r\n    46% {\r\n        margin-top: 0px;\r\n    }\r\n    47% {\r\n        margin-top: 6px;\r\n    }\r\n    56% {\r\n        margin-top: 5px;\r\n    }\r\n    57% {\r\n        margin-top: 0px;\r\n    }\r\n    60% {\r\n        margin-top: 7px;\r\n    }\r\n    61% {\r\n        margin-top: 0px;\r\n    }\r\n    64% {\r\n        margin-top: 8px;\r\n    }\r\n    65% {\r\n        margin-top: 0px;\r\n    }\r\n    100% {\r\n        margin-top: 0px;\r\n    }\r\n    0% {\r\n        margin-top: -50%;\r\n    }\r\n    72% {\r\n        margin-top: 0px;\r\n    }\r\n    71% {\r\n        margin-top: 1px;\r\n    }\r\n}\r\n\r\n@-webkit-keyframes scoop2 {\r\n    31% {\r\n        margin-top: -50%;\r\n    }\r\n    38% {\r\n        margin-top: 0px;\r\n    }\r\n    43% {\r\n        margin-top: 0px;\r\n    }\r\n    41% {\r\n        margin-top: 0px;\r\n    }\r\n    42% {\r\n        margin-top: 8px;\r\n    }\r\n    48% {\r\n        margin-top: 0px;\r\n    }\r\n    55% {\r\n        margin-top: 0px;\r\n    }\r\n    46% {\r\n        margin-top: 0px;\r\n    }\r\n    47% {\r\n        margin-top: 6px;\r\n    }\r\n    56% {\r\n        margin-top: 5px;\r\n    }\r\n    57% {\r\n        margin-top: 0px;\r\n    }\r\n    60% {\r\n        margin-top: 7px;\r\n    }\r\n    61% {\r\n        margin-top: 0px;\r\n    }\r\n    64% {\r\n        margin-top: 8px;\r\n    }\r\n    65% {\r\n        margin-top: 0px;\r\n    }\r\n    100% {\r\n        margin-top: 0px;\r\n    }\r\n    0% {\r\n        margin-top: -50%;\r\n    }\r\n    72% {\r\n        margin-top: 0px;\r\n    }\r\n    71% {\r\n        margin-top: 1px;\r\n    }\r\n}\r\n\r\n@keyframes scoop1 {\r\n    24% {\r\n        margin-top: -50%;\r\n    }\r\n    31% {\r\n        margin-top: 0px;\r\n    }\r\n    39% {\r\n        margin-top: 0px;\r\n    }\r\n    37% {\r\n        margin-top: 0px;\r\n    }\r\n    38% {\r\n        margin-top: 6px;\r\n    }\r\n    43% {\r\n        margin-top: 0px;\r\n    }\r\n    41% {\r\n        margin-top: 0px;\r\n    }\r\n    42% {\r\n        margin-top: 8px;\r\n    }\r\n    48% {\r\n        margin-top: 0px;\r\n    }\r\n    55% {\r\n        margin-top: 0px;\r\n    }\r\n    46% {\r\n        margin-top: 0px;\r\n    }\r\n    47% {\r\n        margin-top: 6px;\r\n    }\r\n    56% {\r\n        margin-top: 5px;\r\n    }\r\n    57% {\r\n        margin-top: 0px;\r\n    }\r\n    60% {\r\n        margin-top: 7px;\r\n    }\r\n    61% {\r\n        margin-top: 0px;\r\n    }\r\n    64% {\r\n        margin-top: 8px;\r\n    }\r\n    65% {\r\n        margin-top: 0px;\r\n    }\r\n    100% {\r\n        margin-top: 0px;\r\n    }\r\n    0% {\r\n        margin-top: -50%;\r\n    }\r\n    72% {\r\n        margin-top: 0px;\r\n    }\r\n    71% {\r\n        margin-top: 1px;\r\n    }\r\n}\r\n\r\n@-webkit-keyframes scoop1 {\r\n    24% {\r\n        margin-top: -50%;\r\n    }\r\n    31% {\r\n        margin-top: 0px;\r\n    }\r\n    39% {\r\n        margin-top: 0px;\r\n    }\r\n    37% {\r\n        margin-top: 0px;\r\n    }\r\n    38% {\r\n        margin-top: 6px;\r\n    }\r\n    43% {\r\n        margin-top: 0px;\r\n    }\r\n    41% {\r\n        margin-top: 0px;\r\n    }\r\n    42% {\r\n        margin-top: 8px;\r\n    }\r\n    48% {\r\n        margin-top: 0px;\r\n    }\r\n    55% {\r\n        margin-top: 0px;\r\n    }\r\n    46% {\r\n        margin-top: 0px;\r\n    }\r\n    47% {\r\n        margin-top: 6px;\r\n    }\r\n    56% {\r\n        margin-top: 5px;\r\n    }\r\n    57% {\r\n        margin-top: 0px;\r\n    }\r\n    60% {\r\n        margin-top: 7px;\r\n    }\r\n    61% {\r\n        margin-top: 0px;\r\n    }\r\n    64% {\r\n        margin-top: 8px;\r\n    }\r\n    65% {\r\n        margin-top: 0px;\r\n    }\r\n    100% {\r\n        margin-top: 0px;\r\n    }\r\n    0% {\r\n        margin-top: -50%;\r\n    }\r\n    72% {\r\n        margin-top: 0px;\r\n    }\r\n    71% {\r\n        margin-top: 1px;\r\n    }\r\n}\r\n\r\n@keyframes bowl {\r\n    31% {\r\n        margin-top: 0px;\r\n    }\r\n    29% {\r\n        margin-top: 0px;\r\n    }\r\n    30% {\r\n        margin-top: 12px;\r\n    }\r\n    39% {\r\n        margin-top: 0px;\r\n    }\r\n    37% {\r\n        margin-top: 0px;\r\n    }\r\n    38% {\r\n        margin-top: 6px;\r\n    }\r\n    43% {\r\n        margin-top: 0px;\r\n    }\r\n    41% {\r\n        margin-top: 0px;\r\n    }\r\n    42% {\r\n        margin-top: 8px;\r\n    }\r\n    48% {\r\n        margin-top: 0px;\r\n    }\r\n    55% {\r\n        margin-top: 0px;\r\n    }\r\n    46% {\r\n        margin-top: 0px;\r\n    }\r\n    47% {\r\n        margin-top: 6px;\r\n    }\r\n    56% {\r\n        margin-top: 5px;\r\n    }\r\n    57% {\r\n        margin-top: 0px;\r\n    }\r\n    60% {\r\n        margin-top: 7px;\r\n    }\r\n    61% {\r\n        margin-top: 0px;\r\n    }\r\n    64% {\r\n        margin-top: 8px;\r\n    }\r\n    65% {\r\n        margin-top: 0px;\r\n    }\r\n    100% {\r\n        margin-top: 0px;\r\n    }\r\n    0% {\r\n        margin-top: 0px;\r\n    }\r\n    72% {\r\n        margin-top: 0px;\r\n    }\r\n    71% {\r\n        margin-top: 1px;\r\n    }\r\n}\r\n\r\n@-webkit-keyframes bowl {\r\n    31% {\r\n        margin-top: 0px;\r\n    }\r\n    29% {\r\n        margin-top: 0px;\r\n    }\r\n    30% {\r\n        margin-top: 12px;\r\n    }\r\n    39% {\r\n        margin-top: 0px;\r\n    }\r\n    37% {\r\n        margin-top: 0px;\r\n    }\r\n    38% {\r\n        margin-top: 6px;\r\n    }\r\n    43% {\r\n        margin-top: 0px;\r\n    }\r\n    41% {\r\n        margin-top: 0px;\r\n    }\r\n    42% {\r\n        margin-top: 8px;\r\n    }\r\n    48% {\r\n        margin-top: 0px;\r\n    }\r\n    55% {\r\n        margin-top: 0px;\r\n    }\r\n    46% {\r\n        margin-top: 0px;\r\n    }\r\n    47% {\r\n        margin-top: 6px;\r\n    }\r\n    56% {\r\n        margin-top: 5px;\r\n    }\r\n    57% {\r\n        margin-top: 0px;\r\n    }\r\n    60% {\r\n        margin-top: 7px;\r\n    }\r\n    61% {\r\n        margin-top: 0px;\r\n    }\r\n    64% {\r\n        margin-top: 8px;\r\n    }\r\n    65% {\r\n        margin-top: 0px;\r\n    }\r\n    100% {\r\n        margin-top: 0px;\r\n    }\r\n    0% {\r\n        margin-top: 0px;\r\n    }\r\n    72% {\r\n        margin-top: 0px;\r\n    }\r\n    71% {\r\n        margin-top: 1px;\r\n    }\r\n}\r\n\r\n@keyframes bite1 {\r\n    0% {\r\n        -webkit-transform: scale(0);\r\n        transform: scale(0);\r\n    }\r\n    76% {\r\n        -webkit-transform: scale(1);\r\n        transform: scale(1);\r\n    }\r\n    75% {\r\n        -webkit-transform: scale(0);\r\n        transform: scale(0);\r\n    }\r\n}\r\n\r\n@-webkit-keyframes bite1 {\r\n    0% {\r\n        -webkit-transform: scale(0);\r\n        transform: scale(0);\r\n    }\r\n    76% {\r\n        -webkit-transform: scale(1);\r\n        transform: scale(1);\r\n    }\r\n    75% {\r\n        -webkit-transform: scale(0);\r\n        transform: scale(0);\r\n    }\r\n}\r\n\r\n@keyframes bite2 {\r\n    0% {\r\n        -webkit-transform: scale(0);\r\n        transform: scale(0);\r\n    }\r\n    77% {\r\n        -webkit-transform: scale(1);\r\n        transform: scale(1);\r\n    }\r\n    76% {\r\n        -webkit-transform: scale(0);\r\n        transform: scale(0);\r\n    }\r\n}\r\n\r\n@-webkit-keyframes bite2 {\r\n    0% {\r\n        -webkit-transform: scale(0);\r\n        transform: scale(0);\r\n    }\r\n    77% {\r\n        -webkit-transform: scale(1);\r\n        transform: scale(1);\r\n    }\r\n    76% {\r\n        -webkit-transform: scale(0);\r\n        transform: scale(0);\r\n    }\r\n}\r\n\r\n@keyframes bite3 {\r\n    0% {\r\n        -webkit-transform: scale(0);\r\n        transform: scale(0);\r\n    }\r\n    78% {\r\n        -webkit-transform: scale(1);\r\n        transform: scale(1);\r\n    }\r\n    77% {\r\n        -webkit-transform: scale(0);\r\n        transform: scale(0);\r\n    }\r\n}\r\n\r\n@-webkit-keyframes bite3 {\r\n    0% {\r\n        -webkit-transform: scale(0);\r\n        transform: scale(0);\r\n    }\r\n    78% {\r\n        -webkit-transform: scale(1);\r\n        transform: scale(1);\r\n    }\r\n    77% {\r\n        -webkit-transform: scale(0);\r\n        transform: scale(0);\r\n    }\r\n}\r\n\r\n@keyframes bite4 {\r\n    0% {\r\n        -webkit-transform: scale(0);\r\n        transform: scale(0);\r\n    }\r\n    79% {\r\n        -webkit-transform: scale(1);\r\n        transform: scale(1);\r\n    }\r\n    78% {\r\n        -webkit-transform: scale(0);\r\n        transform: scale(0);\r\n    }\r\n}\r\n\r\n@-webkit-keyframes bite4 {\r\n    0% {\r\n        -webkit-transform: scale(0);\r\n        transform: scale(0);\r\n    }\r\n    79% {\r\n        -webkit-transform: scale(1);\r\n        transform: scale(1);\r\n    }\r\n    78% {\r\n        -webkit-transform: scale(0);\r\n        transform: scale(0);\r\n    }\r\n}\r\n\r\n@keyframes bite5 {\r\n    0% {\r\n        -webkit-transform: scale(0);\r\n        transform: scale(0);\r\n    }\r\n    80% {\r\n        -webkit-transform: scale(1);\r\n        transform: scale(1);\r\n    }\r\n    79% {\r\n        -webkit-transform: scale(0);\r\n        transform: scale(0);\r\n    }\r\n}\r\n\r\n@-webkit-keyframes bite5 {\r\n    0% {\r\n        -webkit-transform: scale(0);\r\n        transform: scale(0);\r\n    }\r\n    80% {\r\n        -webkit-transform: scale(1);\r\n        transform: scale(1);\r\n    }\r\n    79% {\r\n        -webkit-transform: scale(0);\r\n        transform: scale(0);\r\n    }\r\n}\r\n\r\n@keyframes bite6 {\r\n    0% {\r\n        -webkit-transform: scale(0);\r\n        transform: scale(0);\r\n    }\r\n    81% {\r\n        -webkit-transform: scale(1);\r\n        transform: scale(1);\r\n    }\r\n    80% {\r\n        -webkit-transform: scale(0);\r\n        transform: scale(0);\r\n    }\r\n}\r\n\r\n@-webkit-keyframes bite6 {\r\n    0% {\r\n        -webkit-transform: scale(0);\r\n        transform: scale(0);\r\n    }\r\n    81% {\r\n        -webkit-transform: scale(1);\r\n        transform: scale(1);\r\n    }\r\n    80% {\r\n        -webkit-transform: scale(0);\r\n        transform: scale(0);\r\n    }\r\n}\r\n\r\n@keyframes bite7 {\r\n    0% {\r\n        -webkit-transform: scale(0);\r\n        transform: scale(0);\r\n    }\r\n    82% {\r\n        -webkit-transform: scale(1);\r\n        transform: scale(1);\r\n    }\r\n    81% {\r\n        -webkit-transform: scale(0);\r\n        transform: scale(0);\r\n    }\r\n}\r\n\r\n@-webkit-keyframes bite7 {\r\n    0% {\r\n        -webkit-transform: scale(0);\r\n        transform: scale(0);\r\n    }\r\n    82% {\r\n        -webkit-transform: scale(1);\r\n        transform: scale(1);\r\n    }\r\n    81% {\r\n        -webkit-transform: scale(0);\r\n        transform: scale(0);\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/splash/splash.component.html":
/*!**********************************************!*\
  !*** ./src/app/splash/splash.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- [routerLink]=\"['/results']\" -->\r\n<a id=\"loadbutton\" (click)=\"showLoading()\" >\r\n  \r\n  <div id=\"icecream-bowl\">\r\n    <div id=\"letter\"><i id=\"test1\">click me</i></div>\r\n\r\n    <div id=\"animation\" class=\"test\">\r\n      <div class=\"chocolate scoop\"></div>\r\n      <div class=\"vanilla scoop\"></div>\r\n      <div class=\"strawberry scoop\"></div>\r\n      <div class=\"chocolate scoop\"></div>\r\n      <div class=\"vanilla scoop\"></div>\r\n      <div class=\"chocolate scoop\"></div>\r\n      <div class=\"strawberry scoop\"></div>\r\n      <div class=\"cherry\"></div>\r\n      <div class=\"bites\">\r\n        <div></div>\r\n        <div></div>\r\n        <div></div>\r\n        <div></div>\r\n        <div></div>\r\n        <div></div>\r\n        <div></div>\r\n      </div>\r\n      <div class=\"bowl\"></div>\r\n    </div>\r\n  </div>\r\n\r\n</a>"

/***/ }),

/***/ "./src/app/splash/splash.component.ts":
/*!********************************************!*\
  !*** ./src/app/splash/splash.component.ts ***!
  \********************************************/
/*! exports provided: SplashComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashComponent", function() { return SplashComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_geolocation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/geolocation.service */ "./src/app/services/geolocation.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SplashComponent = /** @class */ (function () {
    function SplashComponent(geoServ, router) {
        this.geoServ = geoServ;
        this.router = router;
    }
    SplashComponent.prototype.ngOnInit = function () {
    };
    SplashComponent.prototype.getAlert = function () {
        console.log('test');
        this.geoServ.getGeoLocation();
    };
    SplashComponent.prototype.showLoading = function () {
        var _this = this;
        $('#test1').fadeOut();
        $('.test').delay(1000).fadeIn();
        setTimeout(function () {
            _this.router.navigate(["/results"]);
        }, 8500);
    };
    SplashComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-splash',
            template: __webpack_require__(/*! ./splash.component.html */ "./src/app/splash/splash.component.html"),
            styles: [__webpack_require__(/*! ./splash.component.css */ "./src/app/splash/splash.component.css")]
        }),
        __metadata("design:paramtypes", [_services_geolocation_service__WEBPACK_IMPORTED_MODULE_1__["GeolocationService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SplashComponent);
    return SplashComponent;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    baseUrl: 'http://localhost:3000'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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

module.exports = __webpack_require__(/*! C:\Users\jaime\Desktop\Projects\Web Development\nicecream\nicecream-src\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map