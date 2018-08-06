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

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"about\" class=\"flex-wrapper\">\n    <div class=\"col-xs-12 col-md-9 col-lg-8\">\n        <h2>About Me</h2>\n        <p>Welcome to my page. Its a place where I can encourange, inspire, and motivate others specially to those young one's. Its my pleasure to help others find there encouragement and fulfillment in there works. I also share ideas and techniques from my personal experience of getting you solve your problems. I have the right tools that can be useful in making projects.</p>\n        \n        <p>My name is James Jomuad, I'm a Full Stack web developer. I graduated with a Bachelor's Degree in college. I started my career as a web designer. After a frew months, I was then trained as a Wordpress developer. My basic task was to convert my designed website, from psd to html and integrated the wordpress. At first it was hard but if doing it repeatedly, difficulty level goes low and it last for one year. And then decided for a new opportunity to step up for my career growth.</p>\n\n        <p></p>\n\n        <p>I'm open to Job opportunities, feel free to click the Contact button to get in touch.</p>\n    </div>\n</section>\n"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
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

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



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

module.exports = "<div class=\"container-fluid\">\n  <section class=\"col-sm-3 col-lg-3\">\n    <app-sidebar-left></app-sidebar-left>\n  </section>\n  <section id=\"page-content\" class=\"col-sm-9 col-lg-9\">\n      <div class=\"col-md-12\">\n        <router-outlet></router-outlet>\n      </div>\n  </section>\n</div>\n"

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
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.menus = [
            'Home',
            'About',
            'Works'
        ];
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _sidebar_left_sidebar_left_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sidebar-left/sidebar-left.component */ "./src/app/sidebar-left/sidebar-left.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./project/project.component */ "./src/app/project/project.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _project_single_project_single_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./project-single/project-single.component */ "./src/app/project-single/project-single.component.ts");
/* harmony import */ var _awards_awards_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./awards/awards.component */ "./src/app/awards/awards.component.ts");
/* harmony import */ var _award_single_award_single_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./award-single/award-single.component */ "./src/app/award-single/award-single.component.ts");
/* harmony import */ var _portfolio_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./portfolio.service */ "./src/app/portfolio.service.ts");
/* harmony import */ var _cert_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./cert.service */ "./src/app/cert.service.ts");
/* harmony import */ var _terms_conditions_terms_conditions_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./terms-conditions/terms-conditions.component */ "./src/app/terms-conditions/terms-conditions.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var appRoutes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
        data: { title: 'Home' }
    },
    {
        path: 'projects',
        component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_8__["ProjectsComponent"],
        data: { title: 'Projects' }
    },
    {
        path: 'project/:name',
        component: _project_single_project_single_component__WEBPACK_IMPORTED_MODULE_11__["ProjectSingleComponent"]
    },
    {
        path: 'awards',
        component: _awards_awards_component__WEBPACK_IMPORTED_MODULE_12__["AwardsComponent"]
    },
    {
        path: 'award/:name',
        component: _award_single_award_single_component__WEBPACK_IMPORTED_MODULE_13__["AwardSingleComponent"],
    },
    {
        path: 'about',
        component: _about_about_component__WEBPACK_IMPORTED_MODULE_10__["AboutComponent"],
        data: { title: 'About' }
    },
    {
        path: 'terms-and-conditions',
        component: _terms_conditions_terms_conditions_component__WEBPACK_IMPORTED_MODULE_16__["TermsConditionsComponent"],
        data: { title: 'About' }
    },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _sidebar_left_sidebar_left_component__WEBPACK_IMPORTED_MODULE_7__["SidebarLeftComponent"],
                _projects_projects_component__WEBPACK_IMPORTED_MODULE_8__["ProjectsComponent"],
                _project_project_component__WEBPACK_IMPORTED_MODULE_9__["ProjectComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_10__["AboutComponent"],
                _project_single_project_single_component__WEBPACK_IMPORTED_MODULE_11__["ProjectSingleComponent"],
                _awards_awards_component__WEBPACK_IMPORTED_MODULE_12__["AwardsComponent"],
                _award_single_award_single_component__WEBPACK_IMPORTED_MODULE_13__["AwardSingleComponent"],
                _terms_conditions_terms_conditions_component__WEBPACK_IMPORTED_MODULE_16__["TermsConditionsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes, { useHash: true }),
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"]
            ],
            providers: [_portfolio_service__WEBPACK_IMPORTED_MODULE_14__["PortfolioService"], _cert_service__WEBPACK_IMPORTED_MODULE_15__["CertService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/award-single/award-single.component.css":
/*!*********************************************************!*\
  !*** ./src/app/award-single/award-single.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/award-single/award-single.component.html":
/*!**********************************************************!*\
  !*** ./src/app/award-single/award-single.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>{{Cert.title}}</h1>\n{{Cert.content}}\n\n<section class=\"flex-wrapper\">\n    <div class=\"col-xs-12 col-md-9 col-lg-8\">\n        <img src=\"{{Cert.thumbnail}}\" class=\"img-thumbnail\">\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/award-single/award-single.component.ts":
/*!********************************************************!*\
  !*** ./src/app/award-single/award-single.component.ts ***!
  \********************************************************/
/*! exports provided: AwardSingleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AwardSingleComponent", function() { return AwardSingleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cert_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cert.service */ "./src/app/cert.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AwardSingleComponent = /** @class */ (function () {
    function AwardSingleComponent(route, CertService) {
        var _this = this;
        route.params.subscribe(function (params) {
            console.log(params.name);
            CertService.getCert().subscribe(function (response) {
                _this.Cert = _this.getData(params.name, response.json());
            }, function (error) { return console.log(error); });
        });
    }
    AwardSingleComponent.prototype.ngOnInit = function () { };
    AwardSingleComponent.prototype.getData = function (name, data) {
        return data.filter(function (obj) {
            return obj.route === name;
        })[0];
    };
    AwardSingleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-award-single',
            template: __webpack_require__(/*! ./award-single.component.html */ "./src/app/award-single/award-single.component.html"),
            styles: [__webpack_require__(/*! ./award-single.component.css */ "./src/app/award-single/award-single.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _cert_service__WEBPACK_IMPORTED_MODULE_2__["CertService"]])
    ], AwardSingleComponent);
    return AwardSingleComponent;
}());



/***/ }),

/***/ "./src/app/awards/awards.component.css":
/*!*********************************************!*\
  !*** ./src/app/awards/awards.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#awards{}\r\n\r\n#awards .well{\r\n    background: #fff;\r\n    min-height: 250px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border: 15px double #333;\r\n    flex-direction: column;\r\n}\r\n\r\n#awards .well a{\r\n    display: block;\r\n    text-align: center;\r\n}"

/***/ }),

/***/ "./src/app/awards/awards.component.html":
/*!**********************************************!*\
  !*** ./src/app/awards/awards.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"awards\">\n  <div class=\"page-header\">\n    <h1>Awards/Certificates</h1>\n  </div>\n\n  <div class=\"row\">\n      <div class=\"col-md-4\" *ngFor=\"let Cert of Certs\">\n          <div class=\"well\">\n            <h4><a routerLink=\"{{'/award/'+Cert.route}}\">{{Cert.title}}</a></h4>\n            <i>{{Cert.date}}</i>\n          </div>\n      </div>\n  </div>\n  \n</div>\n"

/***/ }),

/***/ "./src/app/awards/awards.component.ts":
/*!********************************************!*\
  !*** ./src/app/awards/awards.component.ts ***!
  \********************************************/
/*! exports provided: AwardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AwardsComponent", function() { return AwardsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _cert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cert.service */ "./src/app/cert.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AwardsComponent = /** @class */ (function () {
    function AwardsComponent(CertService) {
        this.CertService = CertService;
    }
    AwardsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.CertService
            .getCert()
            .subscribe(function (response) {
            _this.Certs = response.json();
        }, function (error) { return console.log(error); });
    };
    AwardsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-awards',
            template: __webpack_require__(/*! ./awards.component.html */ "./src/app/awards/awards.component.html"),
            styles: [__webpack_require__(/*! ./awards.component.css */ "./src/app/awards/awards.component.css")]
        }),
        __metadata("design:paramtypes", [_cert_service__WEBPACK_IMPORTED_MODULE_1__["CertService"]])
    ], AwardsComponent);
    return AwardsComponent;
}());



/***/ }),

/***/ "./src/app/cert.service.ts":
/*!*********************************!*\
  !*** ./src/app/cert.service.ts ***!
  \*********************************/
/*! exports provided: CertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CertService", function() { return CertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CertService = /** @class */ (function () {
    function CertService(http) {
        this.http = http;
    }
    CertService.prototype.getCert = function () {
        return this.http.get('assets/json/cert.json');
    };
    CertService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], CertService);
    return CertService;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".banner{\r\n    justify-content: center;\r\n}\r\n\r\n\r\n.banner blockquote{\r\n    position: relative;\r\n    border: none;\r\n}\r\n\r\n\r\n.banner blockquote::before{\r\n    content: open-quote;\r\n    color: #469eea;\r\n    font-size: 50px;\r\n    height: 20px;\r\n    position: absolute;\r\n    margin: -25px 0 0 -20px;\r\n}\r\n\r\n\r\n.banner blockquote::after{\r\n    content: close-quote;\r\n    color: #469eea;\r\n    font-size: 50px;\r\n    height: 20px;\r\n    position: absolute;\r\n    margin: -20px 0 0 -20px;\r\n    right: 0;\r\n}\r\n\r\n\r\n.banner h5{\r\n    font-weight: bold;\r\n    margin: 15px 0;\r\n}\r\n\r\n\r\n.banner h2 .text-primary{\r\n    font-size: 50px;\r\n    height: 100vh;\r\n    text-shadow: 0 1px #fff;\r\n    font-weight: bold;\r\n}\r\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"flex-wrapper banner\">\n    <div class=\"col-xs-12 col-md-9 col-lg-8\">\n        <h2>I am <span class=\"text-primary\">James Jomuad</span></h2>\n        <h5>Full Stack Web Developer</h5>\n\n        <blockquote>\n            <p>I have worked in different types of industries, but I focused on web application/software development. Its been 5 years in my career as a web developer. I am passionate about creating website and worked on its design. I take my inspiration and passion from my environments & colleague. Music boost my productivity and helped me fucos on my work with matching coffee. I can bring things from nothing into something.</p>\n            \n            <p>Laravel and Linux server is one of my current expertise right now. With a strong core skills in PHP, HTML5, Javascript, Angular JS, XML, JSON, MySQL and follow strict OOP principles.</p>\n\n            <p>I'm open to Job opportunities, feel free to contact me.</p>\n        </blockquote>\n    </div>\n</header>\n\n<section class=\"featured\">\n    <div class=\"container-fluid\">\n        <h2><b>Featured</b></h2>\n\n        <div *ngIf=\"features\">\n            <div class=\"row\">\n                <div class=\"col-md-4 project\" *ngFor=\"let project of features\">\n                    <app-project [project]=\"project\"></app-project>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n"

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
/* harmony import */ var _portfolio_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../portfolio.service */ "./src/app/portfolio.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(portfolioService) {
        this.portfolioService = portfolioService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.portfolioService
            .getPortfolio()
            .subscribe(function (response) { return _this.onProject(response); }, function (error) { return console.log(error); });
    };
    HomeComponent.prototype.onProject = function (res) {
        // get the first 6 project
        this.features = res.json().slice(0, 9);
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_portfolio_service__WEBPACK_IMPORTED_MODULE_1__["PortfolioService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-404{\r\n    font-size: 40px;\r\n    padding: 20px;\r\n    text-align: center;\r\n    font-family: 'Raleway', sans-serif;\r\n    height: 100vh;\r\n    align-items: center;\r\n    display: flex;\r\n    background: url(/assets/images/bug.png) no-repeat right bottom #ffffff;\r\n    color: #000000;\r\n}"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-404\">\n    <div class=\"title\">Sorry, the page you are looking for could not be found.</div>\n</div>"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
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

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/portfolio.service.ts":
/*!**************************************!*\
  !*** ./src/app/portfolio.service.ts ***!
  \**************************************/
/*! exports provided: PortfolioService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioService", function() { return PortfolioService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PortfolioService = /** @class */ (function () {
    function PortfolioService(http) {
        this.http = http;
    }
    PortfolioService.prototype.getPortfolio = function () {
        return this.http.get('assets/json/projects.json');
    };
    PortfolioService.prototype.getProject = function (name) {
        var _this = this;
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (observer) {
            return _this.http.get('assets/json/projects.json');
        });
    };
    PortfolioService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], PortfolioService);
    return PortfolioService;
}());



/***/ }),

/***/ "./src/app/project-single/project-single.component.css":
/*!*************************************************************!*\
  !*** ./src/app/project-single/project-single.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cover{background-size: cover!important;}\r\n.label-info { margin-right: 5px;}"

/***/ }),

/***/ "./src/app/project-single/project-single.component.html":
/*!**************************************************************!*\
  !*** ./src/app/project-single/project-single.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section *ngIf=\"project\">\n    <h1>{{project.name}}</h1>\n    <a *ngIf=\"project.url\" href=\"{{project.url}}\" target=\"_blank\">Project Link</a>\n    <br>\n    <div *ngIf=\"project.description\" [innerHTML]=\"project.description\">\n        <br>\n    </div>\n    \n    <div *ngIf=\"project.technology\">\n        <h4>Technology:</h4>\n        <span class='label label-info' *ngFor=\"let tech of project.technology\">{{tech}}</span> &nbsp;\n        <br>\n        <br>\n    </div>\n    \n    <div class=\"row\" *ngIf='project.thumbnails'>\n        <!-- if array -->\n        <ng-container *ngIf='isObject(project.thumbnails)'>\n            <div class=\"col-xs-6 col-md-3\" *ngFor=\"let thumbnail of project.thumbnails\">\n                <a href=\"{{thumbnail}}\" target=\"_blank\" class=\"thumbnail\" data-fancybox=\"gallery\">\n                    <div class=\"cover\" style=\"height: 200px;\" [style.background]=\"'url('+thumbnail+')'\"></div>\n                </a>\n            </div>\n        </ng-container>\n        <!-- If string -->\n        <ng-container *ngIf='!isObject(project.thumbnails)'>\n            <div class=\"col-xs-6 col-md-3\">\n                <a href=\"{{project.thumbnails}}\" target=\"_blank\" class=\"thumbnail\" data-fancybox=\"gallery\">\n                    <div class=\"cover\" style=\"height: 200px;\" [style.background]=\"'url('+project.thumbnails+')'\"></div>\n                </a>\n            </div>\n        </ng-container>\n    </div>\n\n    <div  *ngIf=\"project.tag\">\n        <h4>Tags:</h4>\n        <span class=\"badge\">{{project.tag}}</span>\n    </div>\n    <br>\n</section>"

/***/ }),

/***/ "./src/app/project-single/project-single.component.ts":
/*!************************************************************!*\
  !*** ./src/app/project-single/project-single.component.ts ***!
  \************************************************************/
/*! exports provided: ProjectSingleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectSingleComponent", function() { return ProjectSingleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _portfolio_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../portfolio.service */ "./src/app/portfolio.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectSingleComponent = /** @class */ (function () {
    function ProjectSingleComponent(route, Project) {
        var _this = this;
        route.params.subscribe(function (params) {
            Project.getPortfolio()
                .subscribe(function (response) {
                _this.project = _this.getProject(params.name, response.json());
                console.log(typeof _this.project.thumbnails === 'object');
            }, function (error) { return console.log(error); });
        });
    }
    ProjectSingleComponent.prototype.ngOnInit = function () { };
    ProjectSingleComponent.prototype.ngAfterViewInit = function () {
        $(document).ready(function () {
            $("a.thumbnail").fancybox({
                buttons: [
                    "share",
                    "slideShow",
                    "fullScreen",
                    "thumbs",
                    "close"
                ],
                thumbs: {
                    autoStart: true
                }
            });
        });
    };
    ProjectSingleComponent.prototype.getProject = function (name, data) {
        return data.filter(function (obj) {
            return obj.route === name;
        })[0];
    };
    ProjectSingleComponent.prototype.isObject = function (val) {
        return typeof val === 'object';
    };
    ProjectSingleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project-single',
            template: __webpack_require__(/*! ./project-single.component.html */ "./src/app/project-single/project-single.component.html"),
            styles: [__webpack_require__(/*! ./project-single.component.css */ "./src/app/project-single/project-single.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _portfolio_service__WEBPACK_IMPORTED_MODULE_2__["PortfolioService"]])
    ], ProjectSingleComponent);
    return ProjectSingleComponent;
}());



/***/ }),

/***/ "./src/app/project/project.component.css":
/*!***********************************************!*\
  !*** ./src/app/project/project.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/project/project.component.html":
/*!************************************************!*\
  !*** ./src/app/project/project.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Template @home -->\n<ng-container *ngIf=\"currentRoute==='/'\">\n    <div class=\"wrap\" [style.background]=\"setFeatureBackground(project.thumbnails)\">\n        <div class=\"inner\">\n            <a href=\"#\" class=\"type\"><small>{{project.tag}}</small></a>\n            <a routerLink=\"{{'/project/'+project.route}}\" class=\"title\">{{project.name}}</a>\n        </div>\n    </div>\n</ng-container>"

/***/ }),

/***/ "./src/app/project/project.component.ts":
/*!**********************************************!*\
  !*** ./src/app/project/project.component.ts ***!
  \**********************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectComponent = /** @class */ (function () {
    function ProjectComponent(route) {
        this.currentRoute = route.url;
    }
    ProjectComponent.prototype.ngOnInit = function () { };
    ProjectComponent.prototype.getUrl = function (url) {
        if (!url)
            return '#';
        return 'project/' + url;
    };
    ProjectComponent.prototype.setFeatureBackground = function (thumbnails) {
        if (typeof thumbnails === 'undefined')
            return false;
        if (typeof thumbnails === 'object') {
            return 'url(' + (thumbnails[0]) + ')';
            ;
        }
        return 'url(' + (thumbnails) + ')';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProjectComponent.prototype, "project", void 0);
    ProjectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-project',
            template: __webpack_require__(/*! ./project.component.html */ "./src/app/project/project.component.html"),
            styles: [__webpack_require__(/*! ./project.component.css */ "./src/app/project/project.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ProjectComponent);
    return ProjectComponent;
}());



/***/ }),

/***/ "./src/app/projects/projects.component.css":
/*!*************************************************!*\
  !*** ./src/app/projects/projects.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".project .cover{\r\n    background-size: cover!important;\r\n    width: 100%;\r\n    height: 28.5vh;\r\n    overflow: hidden;\r\n}\r\n\r\n.project .title{\r\n    text-decoration: none;\r\n    color: #fff;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    height: 100%;\r\n    background: rgba(24, 29, 45, 0.8);\r\n}\r\n\r\n.project:hover .title{\r\n    background: none!important;\r\n    transition: all 0.3s ease-in-out;\r\n}\r\n\r\n.project .grad{\r\n    background: #1A2980;\r\n    background: linear-gradient(to right, #26D0CE, #1A2980);    \r\n}"

/***/ }),

/***/ "./src/app/projects/projects.component.html":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"row\" *ngIf=\"projects\">\n    <div class=\"col-sm-6 col-md-4 col-lg-3 project\" *ngFor=\"let project of projects\">\n        <div class=\"cover {{setBG(project.thumbnails)?'':'grad'}}\" [style.background]=\"setBG(project.thumbnails)\">\n            <a class=\"title\" routerLink=\"{{'/project/'+project.route}}\">{{project.name}}</a>\n        </div>\n    </div>\n</section>\n"

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _portfolio_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../portfolio.service */ "./src/app/portfolio.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent(portfolioService) {
        this.portfolioService = portfolioService;
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.portfolioService
            .getPortfolio()
            .subscribe(function (response) { return _this.onProject(response); }, function (error) { return console.log(error); });
    };
    ProjectsComponent.prototype.onProject = function (res) {
        this.projects = res.json();
    };
    ProjectsComponent.prototype.setBG = function (thumbnails) {
        if (typeof thumbnails === 'undefined')
            return false;
        if (typeof thumbnails === 'object') {
            return 'url(' + (thumbnails[0]) + ')';
            ;
        }
        return 'url(' + (thumbnails) + ')';
    };
    ProjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.css */ "./src/app/projects/projects.component.css")]
        }),
        __metadata("design:paramtypes", [_portfolio_service__WEBPACK_IMPORTED_MODULE_1__["PortfolioService"]])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/sidebar-left/sidebar-left.component.html":
/*!**********************************************************!*\
  !*** ./src/app/sidebar-left/sidebar-left.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-side\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <button class=\"navbar-toggle\" data-target=\".navbar-collapse\" data-toggle=\"collapse\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n    </div>\n    <div class=\"navbar-collapse collapse\" aria-expanded=\"false\" style=\"height: 1px;\">\n      <ul class=\"nav navbar-nav\">\n        <li>\n          <div class=\"profile\">\n            <div class=\"text-center\">\n              <img src=\"/assets/images/profile.png\" alt=\"Profile image\" />\n            </div>\n          </div>\n        </li>\n        <li routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\"><a routerLink=\"/\">Home</a></li>\n        <li routerLinkActive=\"active\"><a routerLink=\"/projects\">Works</a></li>\n        <li [routerLinkActive]=\"['active']\"><a routerLink=\"/awards\">Awards</a></li>\n        <li routerLinkActive=\"active\"><a routerLink=\"/about\">About Me</a></li>\n        <li><a class=\"contact\" href=\"mailTo:st.james.jomuad@gmail.com\">Contact Me</a></li>\n        <li routerLinkActive=\"active\"><a routerLink=\"/terms-and-conditions\">Terms & Conditions</a></li>\n      </ul>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/sidebar-left/sidebar-left.component.ts":
/*!********************************************************!*\
  !*** ./src/app/sidebar-left/sidebar-left.component.ts ***!
  \********************************************************/
/*! exports provided: SidebarLeftComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarLeftComponent", function() { return SidebarLeftComponent; });
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

var SidebarLeftComponent = /** @class */ (function () {
    function SidebarLeftComponent() {
    }
    SidebarLeftComponent.prototype.ngOnInit = function () {
    };
    SidebarLeftComponent.prototype.onClick = function (event) {
        console.log(event);
    };
    SidebarLeftComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar-left',
            template: __webpack_require__(/*! ./sidebar-left.component.html */ "./src/app/sidebar-left/sidebar-left.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], SidebarLeftComponent);
    return SidebarLeftComponent;
}());



/***/ }),

/***/ "./src/app/terms-conditions/terms-conditions.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/terms-conditions/terms-conditions.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/terms-conditions/terms-conditions.component.html":
/*!******************************************************************!*\
  !*** ./src/app/terms-conditions/terms-conditions.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"flex-wrapper\">\n  <section class=\"col-md-8\">\n    <h2>Terms of Service</h2>\n    \n    <h3>Terms</h3>\n    <p>By accessing the website, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.</p>\n    \n    <h3>Use License</h3>\n    <ol type=\"a\">\n       <li>Permission is granted to temporarily download one copy of the materials (information or software) on jamesjomuad.github.io's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:\n       <ol type=\"i\">\n           <li>modify or copy the materials;</li>\n           <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>\n           <li>attempt to decompile or reverse engineer any software contained on jamesjomuad.github.io's website;</li>\n           <li>remove any copyright or other proprietary notations from the materials; or</li>\n           <li>transfer the materials to another person or \"mirror\" the materials on any other server.</li>\n       </ol>\n        </li>\n       <li>This license shall automatically terminate if you violate any of these restrictions and may be terminated by jamesjomuad.github.io at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.</li>\n    </ol>\n    \n    <h3>Disclaimer</h3>\n    <ol type=\"a\">\n       <li>The materials on jamesjomuad.github.io's website are provided on an 'as is' basis. jamesjomuad.github.io makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</li>\n       <li>Further, jamesjomuad.github.io does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.</li>\n    </ol>\n  \n    <h3>Limitations</h3>\n    <p>In no event shall jamesjomuad.github.io or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on jamesjomuad.github.io's website, even if jamesjomuad.github.io or a jamesjomuad.github.io authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.</p>\n    \n    <h3>Accuracy of materials</h3>\n    <p>The materials appearing on jamesjomuad.github.io website could include technical, typographical, or photographic errors. jamesjomuad.github.io does not warrant that any of the materials on its website are accurate, complete or current. jamesjomuad.github.io may make changes to the materials contained on its website at any time without notice. However jamesjomuad.github.io does not make any commitment to update the materials.</p>\n   \n    <h3>Links</h3>\n    <p>jamesjomuad.github.io has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by jamesjomuad.github.io of the site. Use of any such linked website is at the user's own risk.</p>\n   \n    <h3>Modifications</h3>\n    <p>jamesjomuad.github.io may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.</p>\n   \n    <h3>Your acceptance of these terms</h3>\n    <p>By using this Site, you signify your acceptance of this policy and terms of service. If you do not agree to this policy, please do not use our Site. Your continued use of the Site following the posting of changes to this policy will be deemed your acceptance of those changes.</p>\n  \n    <h3>Governing Law</h3>\n    <p>These terms and conditions are governed by and construed in accordance with the laws of Philippines and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>\n  </section>\n  \n</div>"

/***/ }),

/***/ "./src/app/terms-conditions/terms-conditions.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/terms-conditions/terms-conditions.component.ts ***!
  \****************************************************************/
/*! exports provided: TermsConditionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsConditionsComponent", function() { return TermsConditionsComponent; });
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

var TermsConditionsComponent = /** @class */ (function () {
    function TermsConditionsComponent() {
    }
    TermsConditionsComponent.prototype.ngOnInit = function () {
    };
    TermsConditionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-terms-conditions',
            template: __webpack_require__(/*! ./terms-conditions.component.html */ "./src/app/terms-conditions/terms-conditions.component.html"),
            styles: [__webpack_require__(/*! ./terms-conditions.component.css */ "./src/app/terms-conditions/terms-conditions.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TermsConditionsComponent);
    return TermsConditionsComponent;
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
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp\htdocs\jamesjomuad.github.io\project-VI\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map