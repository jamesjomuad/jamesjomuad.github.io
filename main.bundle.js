webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/ProjectResolver.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectResolver; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__portfolio_service__ = __webpack_require__("../../../../../src/app/portfolio.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectResolver = (function () {
    function ProjectResolver(projectService) {
        this.projectService = projectService;
    }
    ProjectResolver.prototype.resolve = function (route) {
        return this.projectService.getProject(route.params['name']);
    };
    return ProjectResolver;
}());
ProjectResolver = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__portfolio_service__["a" /* PortfolioService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__portfolio_service__["a" /* PortfolioService */]) === "function" && _a || Object])
], ProjectResolver);

var _a;
//# sourceMappingURL=ProjectResolver.js.map

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"about\" class=\"flex-wrapper flex-column\">\n    <div class=\"col-xs-12 col-md-9 col-lg-8\">\n        <h2>About Me</h2>\n        <p>Welcome to my page. Its a place where I can encourange, inspire, and motivate others specially to those young one's. Its my pleasure to help others find there encouragement and fulfillment in there works. I also share ideas and techniques from my personal experience of getting you solve your problems. I have the right tools that can be useful in making projects.</p>\n        \n        <p>My name is James Jomuad, I'm a Full Stack web developer. I graduated with a Bachelor's Degree in college.</p>\n\n        <p>I'm open to Job opportunities, feel free to click the Contact button now before you forget.</p>\n    </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-about',
        template: __webpack_require__("../../../../../src/app/about/about.component.html"),
    }),
    __metadata("design:paramtypes", [])
], AboutComponent);

//# sourceMappingURL=about.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body{\r\n    background: #FB4748;\r\n}\r\n\r\n\r\n#page-content {\r\n    width: 80%;\r\n    position: absolute;\r\n    min-height: 300px;\r\n    right: 0;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"sidebar-wrapper\">\n    <app-sidebar-left></app-sidebar-left>\n</div>\n\n\n<section id=\"page-content\">\n    <router-outlet></router-outlet>\n</section>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent() {
        this.menus = [
            'Home',
            'About',
            'Works'
        ];
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sidebar_left_sidebar_left_component__ = __webpack_require__("../../../../../src/app/sidebar-left/sidebar-left.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__projects_projects_component__ = __webpack_require__("../../../../../src/app/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__project_project_component__ = __webpack_require__("../../../../../src/app/project/project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__project_single_project_single_component__ = __webpack_require__("../../../../../src/app/project-single/project-single.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__portfolio_service__ = __webpack_require__("../../../../../src/app/portfolio.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ProjectResolver__ = __webpack_require__("../../../../../src/app/ProjectResolver.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */],
        data: { title: 'Home' }
    },
    {
        path: 'projects',
        component: __WEBPACK_IMPORTED_MODULE_8__projects_projects_component__["a" /* ProjectsComponent */],
        data: { title: 'Projects' }
    },
    {
        path: 'project/:name',
        component: __WEBPACK_IMPORTED_MODULE_11__project_single_project_single_component__["a" /* ProjectSingleComponent */]
    },
    {
        path: 'about',
        component: __WEBPACK_IMPORTED_MODULE_10__about_about_component__["a" /* AboutComponent */],
        data: { title: 'About' }
    },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_5__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_7__sidebar_left_sidebar_left_component__["a" /* SidebarLeftComponent */],
            __WEBPACK_IMPORTED_MODULE_8__projects_projects_component__["a" /* ProjectsComponent */],
            __WEBPACK_IMPORTED_MODULE_9__project_project_component__["a" /* ProjectComponent */],
            __WEBPACK_IMPORTED_MODULE_10__about_about_component__["a" /* AboutComponent */],
            __WEBPACK_IMPORTED_MODULE_11__project_single_project_single_component__["a" /* ProjectSingleComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_12__portfolio_service__["a" /* PortfolioService */], __WEBPACK_IMPORTED_MODULE_13__ProjectResolver__["a" /* ProjectResolver */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "[app-home]{}\r\n\r\n.banner{\r\n    padding: 100px;\r\n    border-top: 1px solid #fff;\r\n    border-bottom: 1px solid #fff;\r\n    /*background: #00C9FF;\r\n    background: -webkit-linear-gradient(to right, #92FE9D, #00C9FF);\r\n    background: linear-gradient(to right, #92FE9D, #00C9FF);*/\r\n}\r\n\r\n.banner blockquote{\r\n    position: relative;\r\n    border: none;\r\n}\r\n.banner blockquote::before{\r\n    content: open-quote;\r\n    color: #469eea;\r\n    font-size: 50px;\r\n    height: 20px;\r\n    position: absolute;\r\n    margin: -25px 0 0 -20px;\r\n}\r\n.banner blockquote::after{\r\n    content: close-quote;\r\n    color: #469eea;\r\n    font-size: 50px;\r\n    height: 20px;\r\n    position: absolute;\r\n    margin: -20px 0 0 -20px;\r\n    right: 0;\r\n}\r\n\r\n.banner h5{\r\n    font-weight: bold;\r\n    margin: 15px 0;\r\n}\r\n\r\n.banner h2 .text-primary{\r\n    font-size: 50px;\r\n    height: 100vh;\r\n    text-shadow: 0 1px #fff;\r\n    font-weight: bold;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"flex-wrapper banner\">\n    <div>\n        <h2>I am <span class=\"text-primary\">James Jomuad</span></h2>\n        <h5>Full Stack Web Developer</h5>\n\n        <blockquote>\n            <p>I have worked in different types of industries, but I focused on web application/software development. Its been 5 years in my career as a web developer. I am passionate about creating website and worked on its design. I take my inspiration and passion from my environments & colleague. Music boost my productivity and helped me fucos on my work with matching coffee.</p>\n            <p>I'm open to Job opportunities, feel free to contact me.</p>\n        </blockquote>\n    </div>\n</header>\n\n<section class=\"featured\">\n    <div class=\"container\">\n        <h2><b>Featured</b></h2>\n\n        <div *ngIf=\"features\">\n            <ul>\n                <li *ngFor=\"let project of features\">\n                    <app-project [project]=\"project\"></app-project>\n                </li>\n            </ul>\n        </div>\n    </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__portfolio_service__ = __webpack_require__("../../../../../src/app/portfolio.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
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
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__portfolio_service__["a" /* PortfolioService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__portfolio_service__["a" /* PortfolioService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page-404{\r\n    font-size: 40px;\r\n    padding: 20px;\r\n    text-align: center;\r\n    font-family: 'Raleway', sans-serif;\r\n    height: 100vh;\r\n    -webkit-box-align: center;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    background: url(/assets/images/bug.png) no-repeat right bottom #ffffff;\r\n    color: #000000;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-404\">\n    <div class=\"title\">Sorry, the page you are looking for could not be found.</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    return PageNotFoundComponent;
}());
PageNotFoundComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-page-not-found',
        template: __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.html"),
        styles: [__webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PageNotFoundComponent);

//# sourceMappingURL=page-not-found.component.js.map

/***/ }),

/***/ "../../../../../src/app/portfolio.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortfolioService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PortfolioService = (function () {
    function PortfolioService(http) {
        this.http = http;
    }
    PortfolioService.prototype.getPortfolio = function () {
        return this.http.get('assets/json/projects.json');
    };
    PortfolioService.prototype.getProject = function (name) {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
            return _this.http.get('assets/json/projects.json');
        });
    };
    return PortfolioService;
}());
PortfolioService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], PortfolioService);

var _a;
//# sourceMappingURL=portfolio.service.js.map

/***/ }),

/***/ "../../../../../src/app/project-single/project-single.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cover{background-size: cover!important;}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/project-single/project-single.component.html":
/***/ (function(module, exports) {

module.exports = "<section *ngIf=\"project\" class=\"container\">\n    <h2>{{project.name}}</h2>\n    <br>\n    <div *ngIf=\"project.description\">\n        <h4>Description</h4>\n        <p>{{project.description}}</p>\n    </div>\n    <br>\n\n    <div class=\"row\">\n        <!-- if array -->\n        <ng-container *ngIf='isObject(project.thumbnails)'>\n            <div class=\"col-xs-6 col-md-3\" *ngFor=\"let thumbnail of project.thumbnails\">\n                <a href=\"{{thumbnail}}\" target=\"_blank\" class=\"thumbnail\">\n                    <div class=\"cover\" style=\"height: 200px;\" [style.background]=\"'url('+thumbnail+')'\"></div>\n                </a>\n            </div>\n        </ng-container>\n        <!-- If string -->\n        <ng-container *ngIf='!isObject(project.thumbnails)'>\n            <div class=\"col-xs-6 col-md-3\">\n                <a href=\"{{project.thumbnails}}\" target=\"_blank\" class=\"thumbnail\">\n                    <div class=\"cover\" style=\"height: 200px;\" [style.background]=\"'url('+project.thumbnails+')'\"></div>\n                </a>\n            </div>\n        </ng-container>\n    </div>\n\n    <div>\n        <h4>Tags:</h4>\n        <span class=\"badge\">{{project.tag}}</span>\n    </div>\n\n</section>"

/***/ }),

/***/ "../../../../../src/app/project-single/project-single.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectSingleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__portfolio_service__ = __webpack_require__("../../../../../src/app/portfolio.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectSingleComponent = (function () {
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
    ProjectSingleComponent.prototype.getProject = function (name, data) {
        return data.filter(function (obj) {
            return obj.route === name;
        })[0];
    };
    ProjectSingleComponent.prototype.isObject = function (val) {
        return typeof val === 'object';
    };
    return ProjectSingleComponent;
}());
ProjectSingleComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-project-single',
        template: __webpack_require__("../../../../../src/app/project-single/project-single.component.html"),
        styles: [__webpack_require__("../../../../../src/app/project-single/project-single.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__portfolio_service__["a" /* PortfolioService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__portfolio_service__["a" /* PortfolioService */]) === "function" && _b || Object])
], ProjectSingleComponent);

var _a, _b;
//# sourceMappingURL=project-single.component.js.map

/***/ }),

/***/ "../../../../../src/app/project/project.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/project/project.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Template @home -->\n<ng-container *ngIf=\"currentRoute==='/'\">\n    <div class=\"wrap\" [style.background]=\"setFeatureBackground(project.thumbnails)\">\n        <div class=\"inner\">\n            <a href=\"#\" class=\"type\"><small>{{project.tag}}</small></a>\n            <a routerLink=\"{{'/project/'+project.route}}\" class=\"title\">{{project.name}}</a>\n        </div>\n    </div>\n</ng-container>"

/***/ }),

/***/ "../../../../../src/app/project/project.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectComponent = (function () {
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
    return ProjectComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], ProjectComponent.prototype, "project", void 0);
ProjectComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-project',
        template: __webpack_require__("../../../../../src/app/project/project.component.html"),
        styles: [__webpack_require__("../../../../../src/app/project/project.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], ProjectComponent);

var _a;
//# sourceMappingURL=project.component.js.map

/***/ }),

/***/ "../../../../../src/app/projects/projects.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".project{\r\n    background-size: cover!important;\r\n    border: 1px solid #fff;\r\n    width: 25%;\r\n    float: left;\r\n    height: 33.3vh;\r\n    min-height: 200px;\r\n    min-width: 299.84px;\r\n    position: relative;\r\n}\r\n.project .cover{\r\n    background: rgba(0, 0, 0, 0.7);\r\n    height: 100%;\r\n    position: absolute;\r\n    width: 100%;\r\n}\r\n.project:last-child{}\r\n.project .title{\r\n    text-decoration: none;\r\n    color: #fff;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    height: 100%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/projects/projects.component.html":
/***/ (function(module, exports) {

module.exports = "<section *ngIf=\"projects\">\n    <div class=\"project\" *ngFor=\"let project of projects\"  [style.background]=\"setFeatureBackground(project.thumbnails)\">\n        <div class=\"cover\">\n            <a class=\"title\" routerLink=\"{{'/project/'+project.route}}\">{{project.name}}</a>\n        </div>\n    </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/projects/projects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__portfolio_service__ = __webpack_require__("../../../../../src/app/portfolio.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectsComponent = (function () {
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
    ProjectsComponent.prototype.setFeatureBackground = function (thumbnails) {
        if (typeof thumbnails === 'undefined')
            return false;
        if (typeof thumbnails === 'object') {
            return 'url(' + (thumbnails[0]) + ')';
            ;
        }
        return 'url(' + (thumbnails) + ')';
    };
    return ProjectsComponent;
}());
ProjectsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-projects',
        template: __webpack_require__("../../../../../src/app/projects/projects.component.html"),
        styles: [__webpack_require__("../../../../../src/app/projects/projects.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__portfolio_service__["a" /* PortfolioService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__portfolio_service__["a" /* PortfolioService */]) === "function" && _a || Object])
], ProjectsComponent);

var _a;
//# sourceMappingURL=projects.component.js.map

/***/ }),

/***/ "../../../../../src/app/sidebar-left/sidebar-left.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".profile{}\r\n.profile img{\r\n    border-radius: 100%;\r\n    margin: 50px 15px;\r\n    width: 130px;\r\n    border: 5px solid #fff;\r\n    box-shadow: 0px 2px 5px #aaa;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sidebar-left/sidebar-left.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"profile\">\n    <div class=\"text-center\">\n        <img src=\"/assets/images/profile.png\" alt=\"Profile image\"/>\n    </div>\n</div>\n\n<ul class=\"sidebar-nav\">\n    <li><a routerLink=\"/\">Home</a></li>\n    <li routerLinkActive=\"active\"><a routerLink=\"/projects\">Works</a></li>\n    <!-- <li [routerLinkActive]=\"['active']\"><a routerLink=\"/awards\">Awards</a></li> -->\n    <!-- <li [routerLinkActive]=\"['active']\"><a routerLink=\"/skills\">Skills</a></li> -->\n    <li routerLinkActive=\"active\"><a routerLink=\"/about\">About Me</a></li>\n    <li><a class=\"contact\" href=\"mailTo:st.james.jomuad@gmail.com\">Contact Me</a></li>\n</ul>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/sidebar-left/sidebar-left.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarLeftComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarLeftComponent = (function () {
    function SidebarLeftComponent() {
    }
    SidebarLeftComponent.prototype.ngOnInit = function () {
    };
    SidebarLeftComponent.prototype.onClick = function (event) {
        console.log(event);
    };
    return SidebarLeftComponent;
}());
SidebarLeftComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-sidebar-left',
        template: __webpack_require__("../../../../../src/app/sidebar-left/sidebar-left.component.html"),
        styles: [__webpack_require__("../../../../../src/app/sidebar-left/sidebar-left.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SidebarLeftComponent);

//# sourceMappingURL=sidebar-left.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map