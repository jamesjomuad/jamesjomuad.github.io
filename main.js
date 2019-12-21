(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/about/about.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/about/about.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br id=\"about\">\n<div class=\"container\">\n  <!-- Section About -->\n  <section class=\"section my-5 pb-4\">\n    <!-- Section title -->\n    <h1 class=\"section-heading text-center mb-5 mt-5 pt-4 wow fadeIn\" style=\"visibility: visible; animation-name: fadeIn;\">Who am I?</h1>\n\n    <!-- First row -->\n    <div class=\"row wow fadeIn\" data-wow-delay=\"0.2s\" style=\"visibility: visible; animation-name: fadeIn; animation-delay: 0.2s;\">\n\n      <!-- Place for photo -->\n      <div class=\"col-lg-5 mb-2\">\n        <img src=\"assets/images/about.jpg\" alt=\"James Jomuad\" class=\"img-fluid z-depth-1\">\n      </div>\n\n      <!-- Text content -->\n      <div class=\"col-lg-7 pb-4\">\n        <p class=\"lead\">I'm a Full Stack Web developer with almost 8+ years of experience.</p>\n        <blockquote><p>I have worked in different types of industries, but I focused on web application/software development. I am passionate about creating website and worked on its design. I have done 400 wordpress themes on the previous years. I take my inspiration and passion from my environments &amp; colleague. I'm eager to learn new technologies in the internet. I can bring things from nothing into something.</p><p>PHP, NodeJs, Git and LAMP stack is one of my current expertise right now. With a strong core skills in Laravel, Octobercms, HTML5, Javascript, Angular JS, XML, JSON, MySQL and OOP principles.  Doing the development in agile and scrum.</p></blockquote>\n      </div>\n\n    </div>\n    <!-- /.First row -->\n  </section>\n  <!-- /.Section About -->\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mdb-navbar SideClass=\"navbar fixed-top navbar-expand-lg navbar-dark ie-nav rgba-red-strong\" [containerInside]=\"false\">\r\n  <links class=\"d-flex justify-content-center\">\r\n    <ul class=\"navbar-nav nav nav-pills\">\r\n      <li class=\"nav-item waves-light mx-2\" [ngClass]=\"{'active': navActive=='/' || navActive=='/#home'}\" mdbWavesEffect>\r\n          <a class=\"nav-link\" href=\"/#/#home\" >Home</a>\r\n      </li>\r\n      <li class=\"nav-item waves-light mx-2\" [ngClass]=\"{'active': navActive=='/#about'}\" mdbWavesEffect>\r\n          <a class=\"nav-link\" href=\"/#/#about\">About</a>\r\n      </li>\r\n      <li class=\"nav-item waves-light mx-2\" [ngClass]=\"{'active': navActive=='/#skills'}\" mdbWavesEffect>\r\n          <a class=\"nav-link\" href=\"/#/#skills\">Skills</a>\r\n      </li>\r\n      <li class=\"nav-item waves-light mx-2\" [ngClass]=\"{'active': navActive=='/#works'}\" mdbWavesEffect>\r\n          <a class=\"nav-link\" href=\"/#/#works\">Works</a>\r\n      </li>\r\n      <li class=\"nav-item waves-light mx-2\" [ngClass]=\"{'active': navActive=='/#certificates'}\" mdbWavesEffect>\r\n        <a class=\"nav-link\" href=\"/#/#certificates\">Certificates</a>\r\n      </li>\r\n      <li class=\"nav-item waves-light mx-2\" [ngClass]=\"{'active': navActive=='/#contact'}\" mdbWavesEffect>\r\n        <a class=\"nav-link\" href=\"/#/#contact\">Contact</a>\r\n      </li>\r\n    </ul>\r\n  </links>\r\n  <div class=\"clearfix p-3\">&nbsp;</div>\r\n</mdb-navbar>\r\n\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/awards/awards.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/awards/awards.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"certificates\"></div>\n<div class=\"view intro jarallax\" style=\"background-image: url(https://mdbootstrap.com/img/Photos/Others/background.jpg); background-attachment: fixed; min-height: 500px\">\n  <div class=\"full-bg-img mask rgba-purple-slight\">\n\n    <div class=\"container-fluid\">\n      <div class=\"row pt-5 mt-4\">\n        <div class=\"col-md-12\">\n            <h2 class=\"text-center text-uppercase mb-5 pb-3 mt-4 wow fadeIn\" data-wow-delay=\"0.2s\" style=\"visibility: visible; animation-name: fadeIn; animation-delay: 0.2s;\">Certificates/<strong>Awards</strong></h2>\n            <!-- <p class=\"text-center w-responsive mx-auto wow fadeIn my-5\" style=\"visibility: visible; animation-name: fadeIn;\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia iste provident, voluptatum voluptatibus aut modi aspernatur autem impedit, eius, debitis earum voluptatem. Quaerat hic aspernatur laborum magni earum. At, officiis!</p> -->\n        </div>\n      </div>\n      <div class=\"owl-carousel\" #carousel>\n        <div *ngFor=\"let award of awards\">\n          <a href=\"{{award.thumbnail}}\" class=\"fancybox\" data-fancybox=\"gallery\">\n            <img src=\"{{ award.thumbnail }}\" class=\"img-responsive img-fluid z-depth-1 m-4\">\n          </a>\n        </div>\n      </div>\n    </div>\n    <div class=\"clearfix mb-5\"></div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/contact/contact.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/contact/contact.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!-- Contact Section -->\n<div id=\"contact\" class=\"container\">\n\n<!--Section: Contact v.2-->\n<section class=\"section contact-section mt-4 mb-5\">\n    <!--Section heading-->\n    <h2 class=\"text-center text-uppercase my-5 pt-5 wow fadeIn\" data-wow-delay=\"0.2s\" style=\"visibility: visible; animation-name: fadeIn; animation-delay: 0.2s;\">Hire <strong>me</strong></h2>\n\n    <div class=\"row wow fadeIn\" data-wow-delay=\"0.4s\" style=\"visibility: visible; animation-name: fadeIn; animation-delay: 0.4s;\">\n        <!--First column-->\n        <div class=\"col-md-8 mb-5\">\n            <form #contact=\"ngForm\">\n                <!--First row-->\n                <div class=\"row\">\n\n                    <!--First column-->\n                    <div class=\"col-md-6\">\n                        <div class=\"md-form mb-0\">\n                            <div class=\"md-form mb-0\">\n                                <input type=\"text\" id=\"form41\" class=\"form-control\" name=\"name\" placeholder=\"Name\" ngModel>\n                                <!-- <label for=\"form41\" class=\"\">Your name</label> -->\n                            </div>\n                        </div>\n                    </div>\n                    <!--Second column-->\n                    <div class=\"col-md-6\">\n                        <div class=\"md-form mb-0\">\n                            <div class=\"md-form mb-0\">\n                                <input type=\"text\" id=\"form52\" class=\"form-control\" name=\"email\" placeholder=\"Email\" ngModel>\n                                <!-- <label for=\"form52\" class=\"\">Your email</label> -->\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <!--/.First row-->\n\n                <!--Third row-->\n                <div class=\"row\">\n                    <!--First column-->\n                    <div class=\"col-md-12\">\n                        <div class=\"md-form mb-0\">\n                            <textarea type=\"text\" id=\"form76\" class=\"md-textarea form-control\" rows=\"3\" placeholder=\"Your message\" name=\"body\" ngModel></textarea>\n                            <!-- <label for=\"form76\">Your message</label> -->\n                        </div>\n                    </div>\n                </div>\n                <!--/.Third row-->\n\n                <div class=\"text-center text-md-left mt-4\">\n                    <button class=\"btn btn-primary waves-effect waves-light\" type=\"button\" (click)=\"contactMe(contact.value)\">Send</button>\n                </div>\n            </form>\n        </div>\n        <!--.First column-->\n\n        <!--Second column-->\n        <div class=\"col-md-4\">\n            <ul class=\"contact-icons list-unstyled text-center\">\n                <li>\n                    <a href=\"#\" onclick=\"event.preventDefault()\" ><i class=\"fas fa-map-marker-alt fa-2x\"></i></a>\n                    <p>Cebu City, Philippines</p>\n                </li>\n                <li>\n                    <a href=\"#\" onclick=\"event.preventDefault()\" ><i class=\"fas fa-phone fa-2x\"></i></a>\n                    <p>+63 995 096 1902</p>\n                </li>\n                <li>\n                    <a href=\"mailto:st.james.jomuad@gmail.com\"><i class=\"fas fa-envelope fa-2x\"></i></a>\n                    <p>st.james.jomuad@gmail.com</p>\n                </li>\n            </ul>\n        </div>\n        <!--.Second column-->\n    </div>\n\n</section>\n<!--/Section: Contact v.2-->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/header/header.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"home\" class=\"view intro jarallax\" style=\"background-image: url(/assets/images/banner-1.jpg); background-attachment: fixed; height: 1200px;\">\n<div class=\"full-bg-img mask pattern-2\">\n    <div class=\"container\">\n    <div class=\"d-flex align-items-center d-flex justify-content-center\" style=\"height: 1200px\">\n        <div class=\"row\">\n        <div class=\"col-md-12 wow fadeIn mb-3\">\n            <div class=\"intro-info-content text-center\">\n            <h2 class=\"h1 display-1 mb-2 wow fadeInDown\" data-wow-delay=\"0.3s\">\n                <span class=\"white-text\">JAMES</span> \n                <a class=\"blue-text font-bold\"> JOMUAD</a>\n            </h2>\n            <h5 class=\"font-up mb-3 mt-1 font-bold wow fadeIn text-info\" data-wow-delay=\"0.4s\">\n                <i class=\"fa fa-less-than\"></i>\n                <i class=\"fa fa-hashtag\"></i>\n                <b class=\"orange-text\"> Full Stack Web Developer </b>\n                <i class=\"fa fa-greater-than\"></i>\n            </h5>\n            <a mdbBtn href=\"/#/#contact\" color=\"light-blue\" size=\"lg\" class=\"wow fadeIn waves-light\" mdbWavesEffect data-wow-delay=\"0.4s\">Hire Me</a>\n            <a mdbBtn href=\"#about\" color=\"indigo\" size=\"lg\" class=\"wow fadeIn waves-light\" mdbWavesEffect data-wow-delay=\"0.4s\">About me</a></div>\n        </div>\n        </div>\n    </div>\n    </div>\n</div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<app-about></app-about>\n\n<app-skills></app-skills>\n\n<app-works></app-works>\n\n<app-awards></app-awards>\n\n<app-contact></app-contact>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/page-not-found/page-not-found.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/page-not-found/page-not-found.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"home\" class=\"view intro jarallax\" style=\"background-image: url(/assets/images/404.jpg); background-attachment: fixed; height: 1500px;\">\n    <div class=\"full-bg-img\">\n        <div class=\"container\">\n        <div class=\"d-flex align-items-center d-flex justify-content-center\" style=\"height: 1200px\">\n            <div class=\"row\">\n                <div class=\"col-md-12 wow fadeIn mb-3\">\n                    <div class=\"intro-info-content text-center\">\n                        <h1 class=\"h1 orange-text\"> <span class=\"blue-text\">4</span>0<span class=\"blue-text\">4</span> </h1>\n                        <h3 class=\"white-text\">This page could not be found!</h3>\n                    </div>\n                </div>\n            </div>\n        </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/skills/skills.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/skills/skills.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br id=\"skills\">\n<div class=\"view intro jarallax\" style=\"background-image: url(/assets/images/skills.jpg); background-attachment: fixed;  background-size: cover; min-height: 700px\">\n  <div class=\"full-bg-img mask rgba-white-strong\">\n      <div class=\"container py-4 pt-4\">\n          <section>\n              <!-- First row -->\n              <div class=\"row py-5\">\n\n                  <!--First column-->\n                  <div class=\"col-lg-6 col-md-12 mb-3 wow fadeIn\" data-wow-delay=\"0.5s\" style=\"visibility: visible; animation-name: fadeIn; animation-delay: 0.4s;\">\n                    <!--Section heading-->\n                    <div class=\"d-flex justify-content-start\">\n                        <h4 class=\"text-center text-uppercase mb-5 pb-3 mt-4 wow fadeIn\" data-wow-delay=\"0.4s\" style=\"visibility: visible; animation-name: fadeIn; animation-delay: 0.2s;\">My <strong>experience</strong></h4>\n                    </div>\n\n                    <!--Company Timeline-->\n                    <section style=\"overflow:auto;max-height:450px;\">\n                      <!-- ng Loop -->\n                      <blockquote *ngFor=\"let xp of experience\" class=\"blockquote bq-warning mb-4\">\n                          <div class=\"row\"> <i class=\"fas fa-briefcase fa-x mb-1 mr-3 ml-3\" aria-hidden=\"true\"></i>\n                            <h5 class=\"font-weight-bold mb-3\">{{xp.title}}</h5>\n                          </div>\n                          <p class=\"font-weight-bold ml-1 dark-grey-text p-0 m-0\">{{xp.company}}</p>\n                          <p class=\"font-weight-bold ml-1 dark-grey-text p-0 m-0\">{{xp.date}}</p>\n                          <p *ngIf=\"xp.description\" [innerHtml]=\"xp.description\" class=\"mb-0 ml-1 light-grey-text\"></p>\n                      </blockquote>\n                    </section>\n                  </div>\n\n                  <!-- Skillsets -->\n                  <div class=\"col-lg-5 offset-lg-1 col-md-12 mb-4 wow fadeIn\" data-wow-delay=\"0.5s\" style=\"visibility: visible; animation-name: fadeIn; animation-delay: 0.4s;\">\n                      <!--Second heading-->\n                      <div class=\"d-flex justify-content-start\">\n                          <h4 class=\"text-center text-uppercase mb-5 pb-3 mt-4 wow fadeIn\" data-wow-delay=\"0.2s\" style=\"visibility: visible; animation-name: fadeIn; animation-delay: 0.2s;\">Development <strong>Skills</strong></h4>\n                      </div>\n                      <!--Description-->\n                      <section class=\"pr-4\" style=\"overflow:auto;max-height:450px;\">\n                        <div *ngFor=\"let skill of skillset\">\n                          <p class=\"black-text text-uppercase font-weight-bold pt-3\" align=\"justify\">{{skill.title}}</p>\n                          <div class=\"progress\">\n                            <div class=\"progress-bar\" role=\"progressbar\"  [style.width.%]=\"skill.percent\"></div>\n                          </div>\n                        </div>\n                      </section>\n                  </div>\n                  <!--/Second column-->\n              </div>\n              <!--/First row-->\n          </section>\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/work/work.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/work/work.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"view intro\" style=\"min-height: 700px\">\n    <div class=\"full-bg-img rgba-red-strong\">\n        <div class=\"container pb-5\">\n            <div class=\"row py-5\">\n                <div class=\"col-lg-12\">\n                    <h1 class=\"text-center text-uppercase mt-5 py-5 wow fadeIn\" data-wow-delay=\"0.2s\" style=\"visibility: visible; animation-name: fadeIn; animation-delay: 0.2s;\">\n                        {{work.name}}\n                    </h1>\n                    <div *ngIf=\"work.description\" [innerHtml]=\"work.description\"></div>\n                </div>\n            </div>\n\n            <div *ngIf=\"work.technology\">\n                <hr>\n                <mdb-badge *ngFor=\"let tech of work.technology\" pill=\"true\" primary=\"true\" class=\"mx-1\">{{tech}}</mdb-badge>\n                <hr class=\"mb-5\">\n            </div>\n            \n\n            <div class=\"row wow fadeIn\" data-wow-delay=\"0.4s\">\n                <div *ngFor=\"let thumb of work.thumbnails\" class=\"col-md-4 p-2 workthumb\">\n                    <a href=\"{{thumb}}\" class=\"fancybox\" data-fancybox=\"gallery\">\n                        <img src=\"{{ thumb }}\" class=\"img-fluid z-depth-1\">\n                    </a>\n                </div>\n            </div>\n\n            <div class=\"clearfix m-4\"></div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/works/works.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/works/works.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"works\"></div>\n<div class=\"view intro\" style=\"min-height: 700px\">\n  <div class=\"full-bg-img rgba-purple-slight\">\n    <div class=\"container pb-5\">\n      <div class=\"row py-5\">\n        <div class=\"col-lg-12\">\n          <h2 class=\"text-center text-uppercase mt-4 wow fadeIn\" data-wow-delay=\"0.2s\" style=\"visibility: visible; animation-name: fadeIn; animation-delay: 0.2s;\">My <strong>Works</strong></h2>\n          <!-- <p class=\"text-center w-responsive mx-auto wow fadeIn my-5\" style=\"visibility: visible; animation-name: fadeIn;\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia iste provident, voluptatum voluptatibus aut modi aspernatur autem impedit, eius, debitis earum voluptatem. Quaerat hic aspernatur laborum magni earum. At, officiis!</p> -->\n        </div>\n      </div>\n\n      <div class=\"row wow fadeIn\" data-wow-delay=\"0.4s\" style=\"overflow: auto; max-height: 775px;\">\n        <div *ngFor=\"let work of works\" class=\"col-md-4 p-2 work\">\n          <a href=\"/#/work/{{work.route}}\" data-size=\"1600x1067\">\n            <img src=\"{{ getThumb(work.thumbnails) }}\" class=\"img-fluid z-depth-1\">\n            <div class=\"middle\">\n              <h3 class=\"black-text\">{{ work.name }}</h3>\n            </div>\n          </a>\n        </div>\n      </div>\n      <div class=\"clearfix m-4\"></div>\n    </div>\n  </div>\n</div>"

/***/ }),

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

/***/ "./src/app/about/about.component.scss":
/*!********************************************!*\
  !*** ./src/app/about/about.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5zY3NzIn0= */"

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
            template: __webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/index.js!./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (max-width: 990px) {\n  .navbar-nav.nav {\n    width: 100%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXHdhbXBcXHd3d1xcamFtZXNqb211YWQuZ2l0aHViLmRldi9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0k7SUFDRSxXQUFXLEVBQUEsRUFDWiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSAobWF4LXdpZHRoOiA5OTBweCkge1xyXG4gICAgLm5hdmJhci1uYXYubmF2IHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbn0iXX0= */"

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
/* harmony import */ var ngx_wow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-wow */ "./node_modules/ngx-wow/esm5/ngx-wow.es5.js");
/* harmony import */ var jarallax__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jarallax */ "./node_modules/jarallax/index.js");
/* harmony import */ var jarallax__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jarallax__WEBPACK_IMPORTED_MODULE_3__);
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
    /*
    * Constructor Method
    */
    function AppComponent(router, wowService) {
        var _this = this;
        this.router = router;
        this.wowService = wowService;
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                _this.navActive = event.url;
            }
        });
    }
    /*
    * Init Method
    */
    AppComponent.prototype.ngOnInit = function () { };
    /*
    * After View Method
    */
    AppComponent.prototype.ngAfterViewInit = function () {
        jarallax(document.querySelectorAll('.jarallax'), { speed: 0.2 });
        this.wowService.init();
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: ngx_wow__WEBPACK_IMPORTED_MODULE_2__["NgwWowService"] }
    ]; };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], ngx_wow__WEBPACK_IMPORTED_MODULE_2__["NgwWowService"]])
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
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-bootstrap-md */ "./node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _skills_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./skills.service */ "./src/app/skills.service.ts");
/* harmony import */ var _work_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./work.service */ "./src/app/work.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ngx_wow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-wow */ "./node_modules/ngx-wow/esm5/ngx-wow.es5.js");
/* harmony import */ var _awards_awards_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./awards/awards.component */ "./src/app/awards/awards.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _skills_skills_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./skills/skills.component */ "./src/app/skills/skills.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _works_works_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./works/works.component */ "./src/app/works/works.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _work_work_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./work/work.component */ "./src/app/work/work.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















// import { $ } from 'jquery';
var appRoutes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_17__["HomeComponent"],
        data: { title: 'Home' }
    },
    {
        path: 'works',
        component: _works_works_component__WEBPACK_IMPORTED_MODULE_15__["WorksComponent"],
        data: { title: 'Works' }
    },
    {
        path: 'work/:route',
        component: _work_work_component__WEBPACK_IMPORTED_MODULE_18__["WorkComponent"]
    },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_16__["PageNotFoundComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _awards_awards_component__WEBPACK_IMPORTED_MODULE_10__["AwardsComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_11__["ContactComponent"],
                _skills_skills_component__WEBPACK_IMPORTED_MODULE_12__["SkillsComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_13__["AboutComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"],
                _works_works_component__WEBPACK_IMPORTED_MODULE_15__["WorksComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_16__["PageNotFoundComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_17__["HomeComponent"],
                _work_work_component__WEBPACK_IMPORTED_MODULE_18__["WorkComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes, { useHash: true, anchorScrolling: 'enabled' }),
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_3__["MDBBootstrapModule"].forRoot(),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                ngx_wow__WEBPACK_IMPORTED_MODULE_9__["NgwWowModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ],
            providers: [_skills_service__WEBPACK_IMPORTED_MODULE_6__["SkillsService"], _work_service__WEBPACK_IMPORTED_MODULE_7__["WorkService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/awards/awards.component.scss":
/*!**********************************************!*\
  !*** ./src/app/awards/awards.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F3YXJkcy9hd2FyZHMuY29tcG9uZW50LnNjc3MifQ== */"

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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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
    function AwardsComponent(http) {
        this.http = http;
        this.awards = [];
    }
    AwardsComponent.prototype.ngOnInit = function () { };
    AwardsComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.http.get('./assets/awards.json').subscribe(function (response) {
            _this.awards = response;
            setTimeout(function () {
                $('.owl-carousel').owlCarousel({
                    loop: true,
                    margin: 25,
                    nav: true,
                    items: 4,
                    lazyLoad: true,
                    responsiveClass: true,
                    responsive: {
                        0: {
                            items: 1,
                            nav: true
                        },
                        600: {
                            items: 3,
                            nav: false
                        },
                        1000: {
                            items: 5,
                            nav: true,
                            loop: false
                        }
                    }
                });
            }, 1000);
        }, function (error) { return console.log(error); });
    };
    AwardsComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    AwardsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-awards',
            template: __webpack_require__(/*! raw-loader!./awards.component.html */ "./node_modules/raw-loader/index.js!./src/app/awards/awards.component.html"),
            styles: [__webpack_require__(/*! ./awards.component.scss */ "./src/app/awards/awards.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AwardsComponent);
    return AwardsComponent;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.scss":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () { };
    ContactComponent.prototype.ngAfterViewInit = function () { };
    ContactComponent.prototype.contactMe = function (form) {
        var mail = jquery__WEBPACK_IMPORTED_MODULE_1__('[href*="mailto"]').attr('href') + "?";
        mail += [
            'subject=',
            form.name,
            ' - ',
            form.email,
            '&body=',
            form.body
        ].join('');
        document.location.href = mail;
        console.log(mail);
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/index.js!./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/contact/contact.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
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

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

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
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        jarallax(document.querySelectorAll('.jarallax'), { speed: 0.2 });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIn0= */"

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
/* harmony import */ var jarallax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jarallax */ "./node_modules/jarallax/index.js");
/* harmony import */ var jarallax__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jarallax__WEBPACK_IMPORTED_MODULE_1__);
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
        jarallax(document.querySelectorAll('.jarallax'), { speed: 0.2 });
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! raw-loader!./page-not-found.component.html */ "./node_modules/raw-loader/index.js!./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.scss */ "./src/app/page-not-found/page-not-found.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/skills.service.ts":
/*!***********************************!*\
  !*** ./src/app/skills.service.ts ***!
  \***********************************/
/*! exports provided: SkillsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsService", function() { return SkillsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SkillsService = /** @class */ (function () {
    function SkillsService(http) {
        this.http = http;
    }
    SkillsService.prototype.get = function () {
        return this.http.get('./assets/skills.json');
    };
    SkillsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    SkillsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SkillsService);
    return SkillsService;
}());



/***/ }),

/***/ "./src/app/skills/skills.component.scss":
/*!**********************************************!*\
  !*** ./src/app/skills/skills.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NraWxscy9za2lsbHMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/skills/skills.component.ts":
/*!********************************************!*\
  !*** ./src/app/skills/skills.component.ts ***!
  \********************************************/
/*! exports provided: SkillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkillsComponent", function() { return SkillsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _skills_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../skills.service */ "./src/app/skills.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SkillsComponent = /** @class */ (function () {
    function SkillsComponent(skills) {
        this.skills = skills;
        this.experience = [];
        this.skillset = [];
    }
    /*
    * Init Method
    */
    SkillsComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get skills from json file
        this.skills.get()
            .subscribe(function (data) {
            _this.experience = data.experience;
            _this.skillset = data.skillset;
        });
    };
    SkillsComponent.ctorParameters = function () { return [
        { type: _skills_service__WEBPACK_IMPORTED_MODULE_1__["SkillsService"] }
    ]; };
    SkillsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-skills',
            template: __webpack_require__(/*! raw-loader!./skills.component.html */ "./node_modules/raw-loader/index.js!./src/app/skills/skills.component.html"),
            styles: [__webpack_require__(/*! ./skills.component.scss */ "./src/app/skills/skills.component.scss")]
        }),
        __metadata("design:paramtypes", [_skills_service__WEBPACK_IMPORTED_MODULE_1__["SkillsService"]])
    ], SkillsComponent);
    return SkillsComponent;
}());



/***/ }),

/***/ "./src/app/work.service.ts":
/*!*********************************!*\
  !*** ./src/app/work.service.ts ***!
  \*********************************/
/*! exports provided: WorkService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkService", function() { return WorkService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WorkService = /** @class */ (function () {
    function WorkService(http) {
        this.http = http;
    }
    WorkService.prototype.get = function () {
        return this.http.get('./assets/works.json');
    };
    WorkService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    WorkService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], WorkService);
    return WorkService;
}());



/***/ }),

/***/ "./src/app/work/work.component.scss":
/*!******************************************!*\
  !*** ./src/app/work/work.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".workthumb img {\n  height: 250px;\n  width: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: top;\n     object-position: top; }\n\n.container a {\n  color: #ffc8b8; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29yay9EOlxcd2FtcFxcd3d3XFxqYW1lc2pvbXVhZC5naXRodWIuZGV2L3NyY1xcYXBwXFx3b3JrXFx3b3JrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBYTtFQUNiLFdBQVc7RUFDWCxvQkFBaUI7S0FBakIsaUJBQWlCO0VBQ2pCLHVCQUFvQjtLQUFwQixvQkFBb0IsRUFBQTs7QUFFeEI7RUFBYSxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC93b3JrL3dvcmsuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud29ya3RodW1iIGltZ3tcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgb2JqZWN0LXBvc2l0aW9uOiB0b3A7XHJcbn1cclxuLmNvbnRhaW5lciBhe2NvbG9yOiAjZmZjOGI4O30iXX0= */"

/***/ }),

/***/ "./src/app/work/work.component.ts":
/*!****************************************!*\
  !*** ./src/app/work/work.component.ts ***!
  \****************************************/
/*! exports provided: WorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkComponent", function() { return WorkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _work_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../work.service */ "./src/app/work.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var WorkComponent = /** @class */ (function () {
    function WorkComponent(route, workService) {
        var _this = this;
        this.workService = workService;
        this.work = [];
        route.params.subscribe(function (params) {
            _this.workService.get().subscribe(function (response) {
                _this.work = _this.getProject(params.route, response);
            }, function (error) { return console.log(error); });
        });
    }
    WorkComponent.prototype.ngOnInit = function () { };
    WorkComponent.prototype.ngAfterViewInit = function () {
        jquery__WEBPACK_IMPORTED_MODULE_3__(document).ready(function () {
            jquery__WEBPACK_IMPORTED_MODULE_3__("a.fancybox").fancybox({
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
    WorkComponent.prototype.getProject = function (name, data) {
        return data.filter(function (obj) {
            return obj.route === name;
        })[0];
    };
    WorkComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _work_service__WEBPACK_IMPORTED_MODULE_2__["WorkService"] }
    ]; };
    WorkComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-work',
            template: __webpack_require__(/*! raw-loader!./work.component.html */ "./node_modules/raw-loader/index.js!./src/app/work/work.component.html"),
            styles: [__webpack_require__(/*! ./work.component.scss */ "./src/app/work/work.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _work_service__WEBPACK_IMPORTED_MODULE_2__["WorkService"]])
    ], WorkComponent);
    return WorkComponent;
}());



/***/ }),

/***/ "./src/app/works/works.component.scss":
/*!********************************************!*\
  !*** ./src/app/works/works.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".work img {\n  opacity: 1;\n  display: block;\n  width: 100%;\n  height: auto;\n  transition: .5s ease;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  height: 240px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  -o-object-position: top;\n     object-position: top; }\n\n.work:hover img {\n  opacity: 0.3; }\n\n.middle {\n  transition: .5s ease;\n  opacity: 0;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  text-align: center; }\n\n.work:hover .middle {\n  opacity: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29ya3MvRDpcXHdhbXBcXHd3d1xcamFtZXNqb211YWQuZ2l0aHViLmRldi9zcmNcXGFwcFxcd29ya3NcXHdvcmtzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBVTtFQUNWLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixtQ0FBMkI7VUFBM0IsMkJBQTJCO0VBQzNCLGFBQWE7RUFDYixvQkFBaUI7S0FBakIsaUJBQWlCO0VBQ2pCLHVCQUFvQjtLQUFwQixvQkFBb0IsRUFBQTs7QUFFeEI7RUFDSSxZQUFZLEVBQUE7O0FBRWhCO0VBQ0ksb0JBQW9CO0VBQ3BCLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCx3Q0FBZ0M7VUFBaEMsZ0NBQWdDO0VBQ2hDLG9DQUFvQztFQUNwQyxrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC93b3Jrcy93b3Jrcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53b3JrIGltZyB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHRyYW5zaXRpb246IC41cyBlYXNlO1xyXG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgaGVpZ2h0OiAyNDBweDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgb2JqZWN0LXBvc2l0aW9uOiB0b3A7XHJcbn1cclxuLndvcms6aG92ZXIgaW1nIHtcclxuICAgIG9wYWNpdHk6IDAuMztcclxufVxyXG4ubWlkZGxlIHtcclxuICAgIHRyYW5zaXRpb246IC41cyBlYXNlO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLndvcms6aG92ZXIgLm1pZGRsZSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/works/works.component.ts":
/*!******************************************!*\
  !*** ./src/app/works/works.component.ts ***!
  \******************************************/
/*! exports provided: WorksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorksComponent", function() { return WorksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _work_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../work.service */ "./src/app/work.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WorksComponent = /** @class */ (function () {
    function WorksComponent(work) {
        this.work = work;
        this.works = [];
    }
    WorksComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Get Works from json file
        this.work.get()
            .subscribe(function (data) {
            _this.works = data;
        });
    };
    WorksComponent.prototype.getThumb = function (thumbnails) {
        if (typeof thumbnails === 'undefined')
            return false;
        if (typeof thumbnails === 'object') {
            return thumbnails[0];
        }
        return thumbnails;
    };
    WorksComponent.ctorParameters = function () { return [
        { type: _work_service__WEBPACK_IMPORTED_MODULE_1__["WorkService"] }
    ]; };
    WorksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-works',
            template: __webpack_require__(/*! raw-loader!./works.component.html */ "./node_modules/raw-loader/index.js!./src/app/works/works.component.html"),
            styles: [__webpack_require__(/*! ./works.component.scss */ "./src/app/works/works.component.scss")]
        }),
        __metadata("design:paramtypes", [_work_service__WEBPACK_IMPORTED_MODULE_1__["WorkService"]])
    ], WorksComponent);
    return WorksComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\wamp\www\jamesjomuad.github.dev\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map