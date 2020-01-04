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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-area{\r\n    background-image: url(\"/assets/images/header/header.jpg\");\r\n    background-size: 100% 100%;\r\n    height: 140px;\r\n    /* background-color: #FFA004; */\r\n    overflow: hidden;\r\n}\r\n.logo_area{\r\n    float: left;\r\n    padding-top:22px;\r\n}\r\n.logo_area img{\r\n    width: 340px;\r\n    height: auto;\r\n}\r\n.pc_style{\r\n    padding-top:15px;\r\n}\r\n.contect_text{\r\n    font-weight: 100;\r\n    color: white;\r\n}\r\n.tel_text{\r\n    font-weight: 100;\r\n    color: white;\r\n}\r\n.welcome_text{\r\n    font-weight: 100;\r\n    color: white;\r\n}\r\n.area_text{\r\n    padding-top:30px;\r\n    float: right;\r\n    margin-right: 15px;\r\n}\r\n.qr_area{\r\n    float: right;\r\n}\r\n.qr_area img{\r\n    width: 100px;\r\n}\r\n.header-area .container{\r\n    background: unset;\r\n    text-align: right;\r\n    padding-bottom: 0px;\r\n}\r\n.text_hearder{\r\n    margin-top: 5px;\r\n}\r\n.img_tel{\r\n    margin-left:15px;\r\n}\r\n.img_line{\r\n    margin-left:20px;\r\n}\r\n.area_login{\r\n    display: none;\r\n}\r\n#form3{\r\n    height: 35px;\r\n}\r\n.area_login2{\r\n    float: left;\r\n    position: relative;\r\n    width: 100%;\r\n    margin-top:15px;\r\n    margin-bottom:15px;\r\n    margin-left:30px;\r\n    height: 80px;\r\n}\r\n.form-inline .form-control {\r\n    display: inline-block;\r\n    margin-right: 10px;\r\n    width: 100px;\r\n    height: 30px;\r\n    vertical-align: middle;\r\n}\r\n#inner {\r\n    display: table;\r\n    /* margin: 0 auto; */\r\n}\r\n#inner img{\r\n    width: 300px;\r\n}\r\n#outer {\r\n    width:100%\r\n}\r\n.btn-group-sm>.btn, .btn-sm {\r\n    margin-right: 10px;\r\n}\r\n.m_footer{\r\n    background-color: black;\r\n    background-size: 100% 70px;\r\n    width: 100%;\r\n    height: 60px;\r\n    text-align: center;\r\n    position: fixed;\r\n    z-index: 99;\r\n    bottom: 0;\r\n    padding-top:5px;\r\n}\r\n.sport_img2 img{\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n.casino_img2 img{\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n }\r\n.ibanking img{\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    display: none;\r\n }\r\n.no-padding{\r\n    /* padding:unset; */\r\n    flex-grow: unset;\r\n    flex-basis:unset;\r\n}\r\n@media screen and (min-width: 375px) {\r\n    .sport_img2 img{\r\n        width: 100%;\r\n        margin-bottom: 10px;\r\n        display: block;\r\n        margin-left: auto;\r\n        margin-right: auto;\r\n    }\r\n    .casino_img2 img{\r\n        width: 100%;\r\n        margin-bottom: 10px;\r\n        display: block;\r\n        margin-left: auto;\r\n        margin-right: auto;\r\n     }\r\n}\r\n@media screen and (min-width: 500px) {\r\n    .area_login2{\r\n        height: unset;\r\n    }\r\n    .m_footer{\r\n        display:none;\r\n    }\r\n}\r\n@media screen and (min-width: 640px) {\r\n    .sport_img2 img{\r\n        width: 100%;\r\n        margin-left: auto;\r\n        margin-right: unset;\r\n    }\r\n    .casino_img2 img{\r\n        width: 100%;\r\n        margin-left: auto;\r\n        margin-right: auto;\r\n     }\r\n}\r\n@media screen and (min-width: 768px) {\r\n    .no-padding{\r\n        /* padding:unset; */\r\n    }\r\n    .padding_right0{\r\n        padding-right: 0px;\r\n    }\r\n    .padding_right10{\r\n        padding-right: 10px;\r\n    }\r\n    .padding_lfet0{\r\n        padding-left: 0px;\r\n    }\r\n    .sport_img2 {\r\n        border-top:3px solid #BD9A23;\r\n    }\r\n    .casino_img2 {\r\n        border-top:3px solid #BD9A23;\r\n    }\r\n    .ibanking img{\r\n        display: block;\r\n    }\r\n    .sport_button .no-padding{\r\n        margin-right: 5px;\r\n    }\r\n    .no-padding{\r\n        flex-basis:0;\r\n        flex-grow: 1;\r\n    }\r\n}\r\n@media screen and (min-width: 1000px) {\r\n    .header-area .container{\r\n        padding-bottom: 10px;\r\n    }\r\n    #inner img{\r\n        width: 100%;\r\n    }\r\n    .m_footer{\r\n        display:none;\r\n    }\r\n    .area_login2{\r\n        display: none;\r\n    }\r\n    .area_login{\r\n        float: left;\r\n        position: relative;\r\n        width: 450px;\r\n        margin-top: 38px;\r\n        margin-left: -220px;\r\n        display: block;\r\n    }\r\n}\r\n@media screen and (min-width: 1100px) {\r\n    .area_login{\r\n        float: left;\r\n        position: relative;\r\n        width: 450px;\r\n        margin-top: 38px;\r\n        margin-left: -120px;\r\n        display: block;\r\n    }\r\n}\r\n@media screen and (min-width: 1200px) {\r\n   \r\n    .sport_img2 img{\r\n        width: 100%;\r\n    }\r\n    \r\n    .casino_img2 img{\r\n        width: 100%;\r\n    }\r\n    .register_btn{\r\n        position: absolute;\r\n        right: 110px;\r\n        bottom:25px;\r\n        line-height: 1.3;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5REFBeUQ7SUFDekQsMEJBQTBCO0lBQzFCLGFBQWE7SUFDYiwrQkFBK0I7SUFDL0IsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBR0E7SUFDSSxhQUFhO0FBQ2pCO0FBRUE7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixZQUFZO0lBQ1osc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxjQUFjO0lBQ2Qsb0JBQW9CO0FBQ3hCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSTtBQUNKO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QiwwQkFBMEI7SUFDMUIsV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFdBQVc7SUFDWCxTQUFTO0lBQ1QsZUFBZTtBQUNuQjtBQUdBO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksV0FBVztJQUNYLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtDQUNyQjtBQUNBO0lBQ0csV0FBVztJQUNYLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixhQUFhO0NBQ2hCO0FBQ0E7SUFDRyxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjtBQUNDO0lBQ0c7UUFDSSxXQUFXO1FBQ1gsbUJBQW1CO1FBQ25CLGNBQWM7UUFDZCxpQkFBaUI7UUFDakIsa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsbUJBQW1CO1FBQ25CLGNBQWM7UUFDZCxpQkFBaUI7UUFDakIsa0JBQWtCO0tBQ3JCO0FBQ0w7QUFHQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksWUFBWTtJQUNoQjtBQUNKO0FBQ0E7SUFDSTtRQUNJLFdBQVc7UUFDWCxpQkFBaUI7UUFDakIsbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsaUJBQWlCO1FBQ2pCLGtCQUFrQjtLQUNyQjtBQUNMO0FBQ0E7SUFDSTtRQUNJLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksNEJBQTRCO0lBQ2hDO0lBQ0E7UUFDSSw0QkFBNEI7SUFDaEM7SUFDQTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksWUFBWTtRQUNaLFlBQVk7SUFDaEI7QUFDSjtBQUVBO0lBQ0k7UUFDSSxvQkFBb0I7SUFDeEI7SUFDQTtRQUNJLFdBQVc7SUFDZjtJQUNBO1FBQ0ksWUFBWTtJQUNoQjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksV0FBVztRQUNYLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osZ0JBQWdCO1FBQ2hCLG1CQUFtQjtRQUNuQixjQUFjO0lBQ2xCO0FBQ0o7QUFDQTtJQUNJO1FBQ0ksV0FBVztRQUNYLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osZ0JBQWdCO1FBQ2hCLG1CQUFtQjtRQUNuQixjQUFjO0lBQ2xCO0FBQ0o7QUFDQTs7SUFFSTtRQUNJLFdBQVc7SUFDZjs7SUFFQTtRQUNJLFdBQVc7SUFDZjtJQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLFlBQVk7UUFDWixXQUFXO1FBQ1gsZ0JBQWdCO0lBQ3BCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItYXJlYXtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL2hlYWRlci9oZWFkZXIuanBnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgICBoZWlnaHQ6IDE0MHB4O1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogI0ZGQTAwNDsgKi9cclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLmxvZ29fYXJlYXtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcGFkZGluZy10b3A6MjJweDtcclxufVxyXG4ubG9nb19hcmVhIGltZ3tcclxuICAgIHdpZHRoOiAzNDBweDtcclxuICAgIGhlaWdodDogYXV0bztcclxufVxyXG4ucGNfc3R5bGV7XHJcbiAgICBwYWRkaW5nLXRvcDoxNXB4O1xyXG59XHJcbi5jb250ZWN0X3RleHR7XHJcbiAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi50ZWxfdGV4dHtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLndlbGNvbWVfdGV4dHtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmFyZWFfdGV4dHtcclxuICAgIHBhZGRpbmctdG9wOjMwcHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbn1cclxuLnFyX2FyZWF7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuLnFyX2FyZWEgaW1ne1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG59XHJcbiAgXHJcbi5oZWFkZXItYXJlYSAuY29udGFpbmVye1xyXG4gICAgYmFja2dyb3VuZDogdW5zZXQ7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbn1cclxuLnRleHRfaGVhcmRlcntcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5cclxuLmltZ190ZWx7XHJcbiAgICBtYXJnaW4tbGVmdDoxNXB4O1xyXG59XHJcbi5pbWdfbGluZXtcclxuICAgIG1hcmdpbi1sZWZ0OjIwcHg7XHJcbn1cclxuXHJcblxyXG4uYXJlYV9sb2dpbntcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbiNmb3JtM3tcclxuICAgIGhlaWdodDogMzVweDtcclxufVxyXG4uYXJlYV9sb2dpbjJ7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDoxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbToxNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6MzBweDtcclxuICAgIGhlaWdodDogODBweDtcclxufVxyXG4uZm9ybS1pbmxpbmUgLmZvcm0tY29udHJvbCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcbiNpbm5lciB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIC8qIG1hcmdpbjogMCBhdXRvOyAqL1xyXG59XHJcbiNpbm5lciBpbWd7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbn1cclxuI291dGVyIHtcclxuICAgIHdpZHRoOjEwMCVcclxufVxyXG4uYnRuLWdyb3VwLXNtPi5idG4sIC5idG4tc20ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4ubV9mb290ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSA3MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiA5OTtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHBhZGRpbmctdG9wOjVweDtcclxufVxyXG5cclxuXHJcbi5zcG9ydF9pbWcyIGltZ3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuLmNhc2lub19pbWcyIGltZ3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiB9XHJcbiAuaWJhbmtpbmcgaW1ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiB9XHJcbiAubm8tcGFkZGluZ3tcclxuICAgIC8qIHBhZGRpbmc6dW5zZXQ7ICovXHJcbiAgICBmbGV4LWdyb3c6IHVuc2V0O1xyXG4gICAgZmxleC1iYXNpczp1bnNldDtcclxufVxyXG4gQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzc1cHgpIHtcclxuICAgIC5zcG9ydF9pbWcyIGltZ3tcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIH1cclxuICAgIC5jYXNpbm9faW1nMiBpbWd7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgfVxyXG59XHJcblxyXG4gXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUwMHB4KSB7XHJcbiAgICAuYXJlYV9sb2dpbjJ7XHJcbiAgICAgICAgaGVpZ2h0OiB1bnNldDtcclxuICAgIH1cclxuICAgIC5tX2Zvb3RlcntcclxuICAgICAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNjQwcHgpIHtcclxuICAgIC5zcG9ydF9pbWcyIGltZ3tcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IHVuc2V0O1xyXG4gICAgfVxyXG4gICAgLmNhc2lub19pbWcyIGltZ3tcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAubm8tcGFkZGluZ3tcclxuICAgICAgICAvKiBwYWRkaW5nOnVuc2V0OyAqL1xyXG4gICAgfVxyXG4gICAgLnBhZGRpbmdfcmlnaHQwe1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxuICAgIH1cclxuICAgIC5wYWRkaW5nX3JpZ2h0MTB7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIH1cclxuICAgIC5wYWRkaW5nX2xmZXQwe1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgfVxyXG4gICAgLnNwb3J0X2ltZzIge1xyXG4gICAgICAgIGJvcmRlci10b3A6M3B4IHNvbGlkICNCRDlBMjM7XHJcbiAgICB9XHJcbiAgICAuY2FzaW5vX2ltZzIge1xyXG4gICAgICAgIGJvcmRlci10b3A6M3B4IHNvbGlkICNCRDlBMjM7XHJcbiAgICB9XHJcbiAgICAuaWJhbmtpbmcgaW1ne1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgLnNwb3J0X2J1dHRvbiAubm8tcGFkZGluZ3tcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIH1cclxuICAgIC5uby1wYWRkaW5ne1xyXG4gICAgICAgIGZsZXgtYmFzaXM6MDtcclxuICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMDBweCkge1xyXG4gICAgLmhlYWRlci1hcmVhIC5jb250YWluZXJ7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcbiAgICAjaW5uZXIgaW1ne1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLm1fZm9vdGVye1xyXG4gICAgICAgIGRpc3BsYXk6bm9uZTtcclxuICAgIH1cclxuICAgIC5hcmVhX2xvZ2luMntcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLmFyZWFfbG9naW57XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHdpZHRoOiA0NTBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzOHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMjIwcHg7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTEwMHB4KSB7XHJcbiAgICAuYXJlYV9sb2dpbntcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgd2lkdGg6IDQ1MHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDM4cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0xMjBweDtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAgXHJcbiAgICAuc3BvcnRfaW1nMiBpbWd7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jYXNpbm9faW1nMiBpbWd7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAucmVnaXN0ZXJfYnRue1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogMTEwcHg7XHJcbiAgICAgICAgYm90dG9tOjI1cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMztcclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf=\"showHeader\"  class=\"{{class_checkShow}}\" >\n    <div _ngcontent-wsy-c0=\"\" class=\"header-area\">\n        <div _ngcontent-wsy-c0=\"\" class=\"container\">\n            <div _ngcontent-wsy-c0=\"\" class=\"logo_area\"><img _ngcontent-wsy-c0=\"\" src=\"assets/images/logo/logo.png\"></div>\n            <div _ngcontent-wsy-c0=\"\" class=\"text_hearder\">\n                <div _ngcontent-wsy-c0=\"\" class=\"mobile_style\"></div>\n                <div _ngcontent-wsy-c0=\"\" class=\"pc_style\">\n                    <div _ngcontent-wsy-c0=\"\" class=\"qr_area\"><img _ngcontent-wsy-c0=\"\" src=\"assets/images/footer/qrcode.jpg\"></div>\n                    <div _ngcontent-wsy-c0=\"\" class=\"area_text\">\n                        <div _ngcontent-wsy-c0=\"\" class=\"contect_text\"> ช่องทางการติดต่อ : @Premier999 </div>\n                        <div _ngcontent-wsy-c0=\"\" class=\"tel_text\"> เบอร์โทร : 099-999-9999 </div>\n                        <div _ngcontent-wsy-c0=\"\" class=\"welcome_text\"> WELCOME TO WWW.PREMIER.COM </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <app-navbar *ngIf=\"showHeader\"></app-navbar>\n</div>\n\n<div class=\"content \">\n    <router-outlet></router-outlet>\n</div>\n\n<div _ngcontent-wsy-c0=\"\" class=\"container\">\n    <div _ngcontent-wsy-c0=\"\" class=\"row sport_button\">\n        <div _ngcontent-wsy-c0=\"\" class=\"col no-padding padding_right0 aos-init aos-animate\" data-aos=\"fade-down\" data-aos-delay=\"200\" data-aos-once=\"true\" style=\"overflow: hidden\">\n            <div _ngcontent-wsy-c0=\"\" class=\"sport_img2 tt_l tt_col_c banner_hover Parent fadeInLeft animated\"><img _ngcontent-wsy-c0=\"\" class=\"tt_img_df\" src=\"assets/images/content/banner_football.jpg\"></div>\n        </div>\n        <div _ngcontent-wsy-c0=\"\" class=\"col no-padding padding_lfet0 padding_right10 aos-init aos-animate\" data-aos=\"fade-down\" data-aos-delay=\"200\" data-aos-once=\"true\" style=\"overflow: hidden\">\n            <div _ngcontent-wsy-c0=\"\" class=\"casino_img2 tt_l tt_col_c banner_hover Parent fadeInLeft animated\"><img _ngcontent-wsy-c0=\"\" class=\"tt_img_df\" src=\"assets/images/content/banner_casino.jpg\"></div>\n        </div>\n    </div>\n    <div _ngcontent-wsy-c0=\"\" class=\"row sport_button\">\n        <div _ngcontent-wsy-c0=\"\" class=\"col no-padding padding_right10 aos-init aos-animate\" data-aos=\"fade-up\" data-aos-delay=\"200\" data-aos-once=\"true\" style=\"overflow: hidden\">\n            <div _ngcontent-wsy-c0=\"\" class=\"ibanking tt_l tt_col_c banner_hover Parent fadeInLeft animated\"><img _ngcontent-wsy-c0=\"\" class=\"tt_img_df\" src=\"assets/images/content/ibanking.jpg\"></div>\n        </div>\n    </div>\n</div>\n<div class=\"m_footer col-xs-12\">\n    <div class=\"col-xs-3\" routerLink=\"/home\"><img src=\"assets/images/footer/icon-home.png\"></div>\n    <div class=\"col-xs-3\" ><a href=\"http://line.me/ti/p/~@megarich88\" target=\"_bank\"><img src=\"assets/images/footer/icon-line.png\"></a></div>\n    <div class=\"col-xs-3\" routerLink=\"/promotion\"><img src=\"assets/images/footer/icon_guide.png\"></div>\n    <div class=\"col-xs-3\" routerLink=\"/page/register\" ><img src=\"assets/images/footer/icon_add.png\"></div>\n</div>\n    <app-footer *ngIf=\"showHeader\"></app-footer>\n\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_image_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-image-slider */ "../node_modules/ng-image-slider/fesm5/ng-image-slider.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "../node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var src_app_service_todo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/todo.service */ "./src/app/service/todo.service.ts");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! aos */ "../node_modules/aos/dist/aos.js");
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_7__);








var AppComponent = /** @class */ (function () {
    function AppComponent(todoServcie, _authService, _router, cookie, router) {
        this.todoServcie = todoServcie;
        this._authService = _authService;
        this._router = _router;
        this.cookie = cookie;
        this.router = router;
        this.title = 'casino';
        this.close_popup = "0";
        this.imageObject = [{
                image: '/assets/images/content/slide1.jpg',
                thumbImage: '/assets/images/content/slide2.jpg'
            }, {
                image: '/assets/images/content/slide2.jpg',
                thumbImage: '/assets/images/content/slide1.jpg',
            }, {
                image: '/assets/images/content/slide3.jpg',
                thumbImage: '/assets/images/content/slide3.jpg',
            }
        ];
        this.showHeader = true;
    }
    AppComponent.prototype.prevImageClick = function () {
        this.slider.prev();
    };
    AppComponent.prototype.nextImageClick = function () {
        this.slider.next();
    };
    AppComponent.prototype.closePopup = function () {
        this.cookie.set("close_popup", "1", 1);
        this.close_popup = '1';
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                var check_url = event.url.split("/")[2];
                // if(check_url=='register'||check_url=='dep1osit'||check_url=='withdraw'){
                //   this.showHeader = false;
                //  // this.class_checkShow = "content_100";
                // }else{
                //   this.showHeader = true;
                //  // this.class_checkShow = "container bg_content";
                // // this.class_checkShow = "container bg_content";
                // }
                //  this.showHeader = this.activatedRoute.firstChild.snapshot.data.showHeader !== false;
            }
        });
        this.todoServcie.getSetting().subscribe(function (response) {
            // this.website_title = response.data.website_title;
            // $('title').html(this.website_title);
        });
        aos__WEBPACK_IMPORTED_MODULE_7__["init"]();
        this.todoServcie.getPopup().subscribe(function (response) {
            _this.adjust_page_image_name = response.adjust_page_image_name;
            _this.adjust_page_image_type = response.adjust_page_image_type;
            if (_this.adjust_page_image_name == '' || _this.adjust_page_image_name == null) {
                _this.close_popup = '1';
            }
        });
        var close_popup_value = this.cookie.get("close_popup");
        if (close_popup_value == '1') {
            this.close_popup = '1';
        }
        document.body.classList.add('bg-img');
        if (localStorage.getItem('web_status') == '2') {
            this._router.navigate(['/404']);
            return false;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nav'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ng_image_slider__WEBPACK_IMPORTED_MODULE_4__["NgImageSliderComponent"])
    ], AppComponent.prototype, "slider", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_todo_service__WEBPACK_IMPORTED_MODULE_6__["TodoService"], _service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-pagination */ "../node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_promotion_promotion_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/promotion/promotion.component */ "./src/app/components/promotion/promotion.component.ts");
/* harmony import */ var _components_deposit_deposit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/deposit/deposit.component */ "./src/app/components/deposit/deposit.component.ts");
/* harmony import */ var _components_withdraw_withdraw_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/withdraw/withdraw.component */ "./src/app/components/withdraw/withdraw.component.ts");
/* harmony import */ var _components_howtoplay_howtoplay_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/howtoplay/howtoplay.component */ "./src/app/components/howtoplay/howtoplay.component.ts");
/* harmony import */ var _components_contactus_contactus_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/contactus/contactus.component */ "./src/app/components/contactus/contactus.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_content_bottom_content_bottom_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/content-bottom/content-bottom.component */ "./src/app/components/content-bottom/content-bottom.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _components_news_news_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/news/news.component */ "./src/app/components/news/news.component.ts");
/* harmony import */ var _components_promotion_detail_promotion_detail_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/promotion-detail/promotion-detail.component */ "./src/app/components/promotion-detail/promotion-detail.component.ts");
/* harmony import */ var ng_image_slider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-image-slider */ "../node_modules/ng-image-slider/fesm5/ng-image-slider.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/forms */ "../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _service_todo_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./service/todo.service */ "./src/app/service/todo.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/http */ "../node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_news_detail_news_detail_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/news-detail/news-detail.component */ "./src/app/components/news-detail/news-detail.component.ts");
/* harmony import */ var _components_resultfootball_resultfootball_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/resultfootball/resultfootball.component */ "./src/app/components/resultfootball/resultfootball.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./service/auth.service */ "./src/app/service/auth.service.ts");
/* harmony import */ var _components_error_error_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/error/error.component */ "./src/app/components/error/error.component.ts");
/* harmony import */ var _sanitize_html_pipe__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./sanitize-html.pipe */ "./src/app/sanitize-html.pipe.ts");
/* harmony import */ var ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ng-simple-slideshow */ "../node_modules/ng-simple-slideshow/ng-simple-slideshow.es5.js");
/* harmony import */ var _components_page_page_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/page/page.component */ "./src/app/components/page/page.component.ts");
/* harmony import */ var _components_regComplete_regComplete_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/regComplete/regComplete.component */ "./src/app/components/regComplete/regComplete.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/platform-browser/animations */ "../node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ngx-cookie-service */ "../node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_event_record_event_record_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/event_record/event_record.component */ "./src/app/components/event_record/event_record.component.ts");
/* harmony import */ var _components_manage_data_manage_data_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/manage_data/manage_data.component */ "./src/app/components/manage_data/manage_data.component.ts");
/* harmony import */ var angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! angular-bootstrap-md */ "../node_modules/angular-bootstrap-md/fesm5/angular-bootstrap-md.js");
/* harmony import */ var ngx_color_sketch__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ngx-color/sketch */ "../node_modules/ngx-color/sketch/fesm5/ngx-color-sketch.js");
/* harmony import */ var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ngx-slick-carousel */ "../node_modules/ngx-slick-carousel/fesm5/ngx-slick-carousel.js");



 // <-- import the module






































var appRoutes = [
    { path: "home", component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_26__["AuthGuard"]] },
    { path: "login", component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_36__["loginComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_26__["AuthGuard"]] },
    { path: "event_record", component: _components_event_record_event_record_component__WEBPACK_IMPORTED_MODULE_37__["Event_recordComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_26__["AuthGuard"]] },
    { path: "manage_data", component: _components_manage_data_manage_data_component__WEBPACK_IMPORTED_MODULE_38__["Manage_dataComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_26__["AuthGuard"]] },
    { path: "manage_data/:id", component: _components_manage_data_manage_data_component__WEBPACK_IMPORTED_MODULE_38__["Manage_dataComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_26__["AuthGuard"]] },
    { path: "register", component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_23__["RegisterComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_26__["AuthGuard"]] },
    { path: "promotion", component: _components_promotion_promotion_component__WEBPACK_IMPORTED_MODULE_6__["PromotionComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_26__["AuthGuard"]] },
    { path: "deposit", component: _components_deposit_deposit_component__WEBPACK_IMPORTED_MODULE_7__["DepositComponent"] },
    { path: "withdraw", component: _components_withdraw_withdraw_component__WEBPACK_IMPORTED_MODULE_8__["WithdrawComponent"] },
    { path: "resultfootball", component: _components_resultfootball_resultfootball_component__WEBPACK_IMPORTED_MODULE_25__["ResultfootballComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_26__["AuthGuard"]] },
    { path: "howtoplay", component: _components_howtoplay_howtoplay_component__WEBPACK_IMPORTED_MODULE_9__["HowtoplayComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_26__["AuthGuard"]] },
    { path: "contact", component: _components_contactus_contactus_component__WEBPACK_IMPORTED_MODULE_10__["ContactusComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_26__["AuthGuard"]] },
    { path: "blog", component: _components_news_news_component__WEBPACK_IMPORTED_MODULE_17__["NewsComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_26__["AuthGuard"]] },
    { path: "regComplete", component: _components_regComplete_regComplete_component__WEBPACK_IMPORTED_MODULE_32__["regCompleteComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_26__["AuthGuard"]] },
    { path: "blog", children: [
            { path: "blog-detail/:id", component: _components_news_detail_news_detail_component__WEBPACK_IMPORTED_MODULE_24__["NewsDetailComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_26__["AuthGuard"]] }
        ] },
    { path: "promotion", children: [
            { path: "promotion-detail/:id", component: _components_promotion_detail_promotion_detail_component__WEBPACK_IMPORTED_MODULE_18__["PromotionDetailComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_26__["AuthGuard"]] }
        ] },
    { path: "home", children: [
            { path: "blog-detail/:id", component: _components_news_detail_news_detail_component__WEBPACK_IMPORTED_MODULE_24__["NewsDetailComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_26__["AuthGuard"]] }
        ] },
    { path: "page/:id", component: _components_page_page_component__WEBPACK_IMPORTED_MODULE_31__["PageComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_26__["AuthGuard"]] },
    { path: "404", component: _components_error_error_component__WEBPACK_IMPORTED_MODULE_28__["ErrorComponent"] },
    { path: "", redirectTo: '/home', pathMatch: 'full' },
    { path: "**", component: _components_error_error_component__WEBPACK_IMPORTED_MODULE_28__["ErrorComponent"] },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _components_error_error_component__WEBPACK_IMPORTED_MODULE_28__["ErrorComponent"],
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_23__["RegisterComponent"],
                _components_promotion_promotion_component__WEBPACK_IMPORTED_MODULE_6__["PromotionComponent"],
                _components_deposit_deposit_component__WEBPACK_IMPORTED_MODULE_7__["DepositComponent"],
                _components_withdraw_withdraw_component__WEBPACK_IMPORTED_MODULE_8__["WithdrawComponent"],
                _components_howtoplay_howtoplay_component__WEBPACK_IMPORTED_MODULE_9__["HowtoplayComponent"],
                _components_contactus_contactus_component__WEBPACK_IMPORTED_MODULE_10__["ContactusComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_11__["NavbarComponent"],
                _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_12__["MenuComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_36__["loginComponent"],
                _components_event_record_event_record_component__WEBPACK_IMPORTED_MODULE_37__["Event_recordComponent"],
                _components_manage_data_manage_data_component__WEBPACK_IMPORTED_MODULE_38__["Manage_dataComponent"],
                _components_content_bottom_content_bottom_component__WEBPACK_IMPORTED_MODULE_15__["ContentBottomComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"],
                _components_news_news_component__WEBPACK_IMPORTED_MODULE_17__["NewsComponent"],
                _components_regComplete_regComplete_component__WEBPACK_IMPORTED_MODULE_32__["regCompleteComponent"],
                _components_news_detail_news_detail_component__WEBPACK_IMPORTED_MODULE_24__["NewsDetailComponent"],
                _components_resultfootball_resultfootball_component__WEBPACK_IMPORTED_MODULE_25__["ResultfootballComponent"],
                _sanitize_html_pipe__WEBPACK_IMPORTED_MODULE_29__["sanitizeHtmlPipe"],
                _components_page_page_component__WEBPACK_IMPORTED_MODULE_31__["PageComponent"],
                _components_promotion_detail_promotion_detail_component__WEBPACK_IMPORTED_MODULE_18__["PromotionDetailComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_20__["FormsModule"],
                ngx_color_sketch__WEBPACK_IMPORTED_MODULE_40__["ColorSketchModule"],
                angular_bootstrap_md__WEBPACK_IMPORTED_MODULE_39__["MDBBootstrapModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_20__["ReactiveFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                ng_image_slider__WEBPACK_IMPORTED_MODULE_19__["NgImageSliderModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_22__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_34__["HttpClientModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_3__["NgxPaginationModule"],
                ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_30__["SlideshowModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"].forRoot(appRoutes, { scrollPositionRestoration: 'enabled' }),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_33__["BrowserAnimationsModule"],
                ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_41__["SlickCarouselModule"]
            ],
            exports: [_sanitize_html_pipe__WEBPACK_IMPORTED_MODULE_29__["sanitizeHtmlPipe"]],
            providers: [_service_todo_service__WEBPACK_IMPORTED_MODULE_21__["TodoService"], _auth_guard__WEBPACK_IMPORTED_MODULE_26__["AuthGuard"], _service_auth_service__WEBPACK_IMPORTED_MODULE_27__["AuthService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_35__["CookieService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/auth.service */ "./src/app/service/auth.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
        this.statusWebsite = true;
    }
    AuthGuard.prototype.canActivate = function () {
        var _this = this;
        this._authService.checkStatus().subscribe(function (response) {
            if (response.website_status == '1') {
                _this.statusWebsite = true;
                localStorage.setItem('web_status', "1");
            }
            else {
                _this.statusWebsite = false;
            }
            // return response.website_status;
        });
        if (this.statusWebsite && localStorage.getItem('web_status') != '2') {
            return true;
        }
        else {
            localStorage.setItem('web_status', "2");
            this._router.navigate(['/404']);
            return false;
        }
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/components/contactus/contactus.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/contactus/contactus.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contentPageArea{\r\n    margin-left:0px;\r\n    margin-right: 0px;\r\n    padding: 0px;\r\n    border: 0px solid #D10000;\r\n    margin-top:30px;\r\n    margin-bottom:30px;\r\n    padding:0 50px 0 50px;\r\n}\r\n.image-news{\r\n    background-size: cover;\r\n    background-position: center;\r\n    height: 536px;\r\n    width: 100%;\r\n    background-image: url(/assets/images/news/callcenter.jpg);\r\n}\r\n.cardNews{\r\n    height: 100%;\r\n    border: 2px solid red;\r\n  }\r\n.container{\r\n\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250YWN0dXMvY29udGFjdHVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLFdBQVc7SUFDWCx5REFBeUQ7QUFDN0Q7QUFDQTtJQUNJLFlBQVk7SUFDWixxQkFBcUI7RUFDdkI7QUFDQTs7RUFFQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGFjdHVzL2NvbnRhY3R1cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnRQYWdlQXJlYXtcclxuICAgIG1hcmdpbi1sZWZ0OjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgYm9yZGVyOiAwcHggc29saWQgI0QxMDAwMDtcclxuICAgIG1hcmdpbi10b3A6MzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206MzBweDtcclxuICAgIHBhZGRpbmc6MCA1MHB4IDAgNTBweDtcclxufVxyXG4uaW1hZ2UtbmV3c3tcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDUzNnB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvbmV3cy9jYWxsY2VudGVyLmpwZyk7XHJcbn1cclxuLmNhcmROZXdze1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xyXG4gIH1cclxuICAuY29udGFpbmVye1xyXG5cclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/components/contactus/contactus.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/contactus/contactus.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n<div class=\"contentPageArea\">\n  <div class=\"titleContent\" [innerHTML]=\"todoContactText | sanitizeHtml\"></div>\n</div>\n<!-- <app-content-bottom></app-content-bottom> -->\n</div>"

/***/ }),

/***/ "./src/app/components/contactus/contactus.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/contactus/contactus.component.ts ***!
  \*************************************************************/
/*! exports provided: ContactusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactusComponent", function() { return ContactusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/todo.service */ "./src/app/service/todo.service.ts");



var ContactusComponent = /** @class */ (function () {
    function ContactusComponent(todoServcie) {
        this.todoServcie = todoServcie;
    }
    ContactusComponent.prototype.ngOnInit = function () {
        //call service
        var _this = this;
        this.todoServcie.getTextContext().subscribe(function (response) {
            //this.sanitizedURL = this.sanitizer.bypassSecurityTrustResourceUrl(response.data.contact_text_detail)['changingThisBreaksApplicationSecurity']; 
            //console.log(response.data.contact_text_detail);
            _this.todoContactText = response.data.contact_text_detail;
        });
    };
    ContactusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contactus',
            template: __webpack_require__(/*! ./contactus.component.html */ "./src/app/components/contactus/contactus.component.html"),
            styles: [__webpack_require__(/*! ./contactus.component.css */ "./src/app/components/contactus/contactus.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"]])
    ], ContactusComponent);
    return ContactusComponent;
}());



/***/ }),

/***/ "./src/app/components/content-bottom/content-bottom.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/content-bottom/content-bottom.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contentBotArea{\r\n    float: left;\r\n    width: 100%;\r\n}\r\n.logo-news{\r\n    position: absolute;\r\n    width: 150px;\r\n    height: 150px;\r\n}\r\n.div-image{\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-image: url(/assets/images/content/news.png);\r\n    background-size: 100% 100%;\r\n}\r\n.line-news{\r\n    position: absolute;\r\n    width: 150px;\r\n    height: 150px;\r\n    bottom: 0;\r\n    margin-left: 25%;\r\n    margin-right: auto;\r\n}\r\n.logo-news img{\r\n    width: 100%;\r\n}\r\n.line-news img{\r\n    width: 100%;\r\n}\r\n.titleContentBot{\r\n    background: #F3FBAD;\r\n    color: white;\r\n    padding: 10px;\r\n    margin-top:10px;\r\n    float: left;\r\n    width: 100%;\r\n}\r\n.titleLeft{\r\n    float: left;\r\n    color: white;\r\n    font-size: 1.6em;\r\n\r\n}\r\n.viewmore{\r\n    float: right;\r\n    margin-top:6px;\r\n    color:#E8CF01;\r\n}\r\n.viewmore:hover{\r\n    cursor: pointer;\r\n    text-decoration: underline;\r\n}\r\n.dataContentBot{\r\n    /* min-height: 500px; */\r\n    float: left;\r\n    width: 100%;\r\n}\r\n.bootCols{\r\n    height:100px;\r\n    margin:0;\r\n    box-sizing:border-box;\r\n    padding:5px;\r\n    border:2px solid black;\r\n    background-color:red;\r\n  }\r\n.row{\r\n      margin-left:0px;\r\n      margin-right: 0px;\r\n  }\r\n.newsArea{\r\n      height: auto;\r\n      margin-top: 10px;\r\n      \r\n      padding: 0px;\r\n      min-height: 460px;\r\n      text-overflow: ellipsis;\r\n      overflow: hidden;\r\n      \r\n  }\r\n.newsArea:first-child{\r\n      margin-left:0px;\r\n  }\r\n.image-news{\r\n      height: calc( 100% - 120px  );\r\n      background-size: cover;\r\n      background-position: center;\r\n  }\r\n.view_more:hover{\r\n      \r\n      cursor: pointer;\r\n  }\r\n.text-news{\r\n      padding:10px;\r\n      \r\n      color:white;\r\n      min-height: 35px ;\r\n      height: 35px; \r\n      overflow: hidden;\r\n  }\r\n.des-news{\r\n    padding:10px;\r\n    \r\n    color:white;\r\n    min-height: 35px ;\r\n    height: 80px; \r\n    overflow: hidden;\r\n}\r\n@media screen and (min-width: 1200px) {\r\n\r\n    .newsArea{\r\n        margin-left:15px;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb250ZW50LWJvdHRvbS9jb250ZW50LWJvdHRvbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFdBQVc7QUFDZjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixzREFBc0Q7SUFDdEQsMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osYUFBYTtJQUNiLGVBQWU7SUFDZixXQUFXO0lBQ1gsV0FBVztBQUNmO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjs7QUFFcEI7QUFDQTtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2QsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7QUFFQTtJQUNJLFlBQVk7SUFDWixRQUFRO0lBQ1IscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsb0JBQW9CO0VBQ3RCO0FBQ0E7TUFDSSxlQUFlO01BQ2YsaUJBQWlCO0VBQ3JCO0FBQ0E7TUFDSSxZQUFZO01BQ1osZ0JBQWdCOztNQUVoQixZQUFZO01BQ1osaUJBQWlCO01BQ2pCLHVCQUF1QjtNQUN2QixnQkFBZ0I7O0VBRXBCO0FBQ0E7TUFDSSxlQUFlO0VBQ25CO0FBRUE7TUFDSSw2QkFBNkI7TUFDN0Isc0JBQXNCO01BQ3RCLDJCQUEyQjtFQUMvQjtBQUVBOztNQUVJLGVBQWU7RUFDbkI7QUFDQTtNQUNJLFlBQVk7O01BRVosV0FBVztNQUNYLGlCQUFpQjtNQUNqQixZQUFZO01BQ1osZ0JBQWdCO0VBQ3BCO0FBQ0E7SUFDRSxZQUFZOztJQUVaLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjtBQUVBOztJQUVJO1FBQ0ksZ0JBQWdCO0lBQ3BCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbnRlbnQtYm90dG9tL2NvbnRlbnQtYm90dG9tLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudEJvdEFyZWF7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5sb2dvLW5ld3N7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG59XHJcbi5kaXYtaW1hZ2V7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltYWdlcy9jb250ZW50L25ld3MucG5nKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG59XHJcbi5saW5lLW5ld3N7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG4ubG9nby1uZXdzIGltZ3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5saW5lLW5ld3MgaW1ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnRpdGxlQ29udGVudEJvdHtcclxuICAgIGJhY2tncm91bmQ6ICNGM0ZCQUQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDoxMHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4udGl0bGVMZWZ0e1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDEuNmVtO1xyXG5cclxufVxyXG4udmlld21vcmV7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW4tdG9wOjZweDtcclxuICAgIGNvbG9yOiNFOENGMDE7XHJcbn1cclxuLnZpZXdtb3JlOmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuLmRhdGFDb250ZW50Qm90e1xyXG4gICAgLyogbWluLWhlaWdodDogNTAwcHg7ICovXHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYm9vdENvbHN7XHJcbiAgICBoZWlnaHQ6MTAwcHg7XHJcbiAgICBtYXJnaW46MDtcclxuICAgIGJveC1zaXppbmc6Ym9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6NXB4O1xyXG4gICAgYm9yZGVyOjJweCBzb2xpZCBibGFjaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmVkO1xyXG4gIH1cclxuICAucm93e1xyXG4gICAgICBtYXJnaW4tbGVmdDowcHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gIH1cclxuICAubmV3c0FyZWF7XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgXHJcbiAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgbWluLWhlaWdodDogNDYwcHg7XHJcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICBcclxuICB9XHJcbiAgLm5ld3NBcmVhOmZpcnN0LWNoaWxke1xyXG4gICAgICBtYXJnaW4tbGVmdDowcHg7XHJcbiAgfVxyXG5cclxuICAuaW1hZ2UtbmV3c3tcclxuICAgICAgaGVpZ2h0OiBjYWxjKCAxMDAlIC0gMTIwcHggICk7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLnZpZXdfbW9yZTpob3ZlcntcclxuICAgICAgXHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgLnRleHQtbmV3c3tcclxuICAgICAgcGFkZGluZzoxMHB4O1xyXG4gICAgICBcclxuICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDM1cHggO1xyXG4gICAgICBoZWlnaHQ6IDM1cHg7IFxyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuICAuZGVzLW5ld3N7XHJcbiAgICBwYWRkaW5nOjEwcHg7XHJcbiAgICBcclxuICAgIGNvbG9yOndoaXRlO1xyXG4gICAgbWluLWhlaWdodDogMzVweCA7XHJcbiAgICBoZWlnaHQ6IDgwcHg7IFxyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcblxyXG4gICAgLm5ld3NBcmVhe1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjE1cHg7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/content-bottom/content-bottom.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/content-bottom/content-bottom.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"contentBotArea\">\n    <div class=\"dataContentBot\">\n      <div class=\"row\">\n          <div data-aos=\"fade-right\" data-aos-once=\"true\" data-aos-delay=\"200\" class=\"col-sm newsArea\" *ngFor=\"let todo of todoList;\" [routerLink]=\"['/news/news-detail',todo.adjust_page_title+'-'+todo.adjust_page_id]\">\n          <!-- <div *ngFor=\"let todo of todoList;\" class=\"col-sm newsArea\" [routerLink]=\"['/news/news-detail',todo.content_id]\"> -->\n              <!-- <div class=\"logo-news\">\n                  <img class=\"center\" src=\"/assets/images/logo/logo.png\">\n              </div>\n              <div class=\"line-news\">\n                  <img class=\"center\" src=\"/assets/images/logo/logo.png\">\n              </div> -->\n              <div class=\"image-news\" [ngStyle]=\"{backgroundImage:'url(/upload/files/' + todo.adjust_page_image_name  + '.' + todo.adjust_page_image_type  + ')'}\" >\n                <!-- <div class=\"image-news\" [ngStyle]=\"{backgroundImage:'url(/assets/images/content/pro4.png)'}\" > -->\n                <div class=\"div-image\"></div>\n              </div>\n              <div class=\"text-news\" style=\"color:red; \">\n                    {{todo.adjust_page_title}}\n              </div>\n              <div class=\"des-news\" >\n                  {{todo.adjust_page_short_description}}\n              </div>\n          </div>\n          \n      </div>\n      <div style=\"width: 100%; text-align:center;margin-top:30px;\">\n          <div class=\"btn btn-danger view_more\" style=\"text-align: center;\" routerLink=\"/news\">ดูเพิ่มเติม +</div>\n      </div>\n      \n    </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/content-bottom/content-bottom.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/content-bottom/content-bottom.component.ts ***!
  \***********************************************************************/
/*! exports provided: ContentBottomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentBottomComponent", function() { return ContentBottomComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/todo.service */ "./src/app/service/todo.service.ts");



var ContentBottomComponent = /** @class */ (function () {
    function ContentBottomComponent(todoServcie) {
        this.todoServcie = todoServcie;
    }
    ContentBottomComponent.prototype.ngOnInit = function () {
        var _this = this;
        //call service
        this.todoServcie.getTodoList(2).subscribe(function (response) {
            _this.todoList = response;
        });
    };
    ContentBottomComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-content-bottom',
            template: __webpack_require__(/*! ./content-bottom.component.html */ "./src/app/components/content-bottom/content-bottom.component.html"),
            styles: [__webpack_require__(/*! ./content-bottom.component.css */ "./src/app/components/content-bottom/content-bottom.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"]])
    ], ContentBottomComponent);
    return ContentBottomComponent;
}());



/***/ }),

/***/ "./src/app/components/deposit/deposit.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/deposit/deposit.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".titleContent{\r\n    height: 500px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kZXBvc2l0L2RlcG9zaXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2RlcG9zaXQvZGVwb3NpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlQ29udGVudHtcclxuICAgIGhlaWdodDogNTAwcHg7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/deposit/deposit.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/deposit/deposit.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div _ngcontent-upl-c4=\"\" class=\"container page_content\">\n  <div _ngcontent-upl-c4=\"\" class=\"contentPageArea\" style=\"padding:0px;\">\n    <div  class=\"titleContent mostly-customized-scrollbar\" style=\"height: 500px;\">\n            <div class=\"titleContent\" [innerHTML]=\"data_deatail | sanitizeHtml\"></div>\n    </div>\n  </div>\n </div> "

/***/ }),

/***/ "./src/app/components/deposit/deposit.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/deposit/deposit.component.ts ***!
  \*********************************************************/
/*! exports provided: DepositComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepositComponent", function() { return DepositComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_service_todo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/todo.service */ "./src/app/service/todo.service.ts");




var DepositComponent = /** @class */ (function () {
    function DepositComponent(route, todoServcie) {
        this.route = route;
        this.todoServcie = todoServcie;
    }
    DepositComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.todoServcie.getDataPage('deposit2').subscribe(function (response) {
            _this.data_title = response.data.menu_name;
            _this.data_deatail = response.data.menu_detail;
        });
    };
    DepositComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-deposit',
            template: __webpack_require__(/*! ./deposit.component.html */ "./src/app/components/deposit/deposit.component.html"),
            styles: [__webpack_require__(/*! ./deposit.component.css */ "./src/app/components/deposit/deposit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_service_todo_service__WEBPACK_IMPORTED_MODULE_3__["TodoService"]])
    ], DepositComponent);
    return DepositComponent;
}());



/***/ }),

/***/ "./src/app/components/error/error.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/error/error.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fonterror{\r\n    text-align: center;\r\n    font-size: 4em;\r\n    color: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lcnJvci9lcnJvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9lcnJvci9lcnJvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvbnRlcnJvcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogNGVtO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/error/error.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/error/error.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"fonterror\">\n        ERROR 404\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/error/error.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/error/error.component.ts ***!
  \*****************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var ErrorComponent = /** @class */ (function () {
    function ErrorComponent() {
    }
    ErrorComponent.prototype.ngOnInit = function () {
    };
    ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-error',
            template: __webpack_require__(/*! ./error.component.html */ "./src/app/components/error/error.component.html"),
            styles: [__webpack_require__(/*! ./error.component.css */ "./src/app/components/error/error.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/components/event_record/event_record.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/event_record/event_record.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n#inner {\r\n    display: table;\r\n    margin: 0 auto;\r\n  }\r\n  \r\n  #outer {\r\n    width:100%\r\n  }\r\n  \r\n  .table{\r\n      width: 320px;\r\n  }\r\n  \r\n  .columns {\r\n\tdisplay: flex;\r\n\tflex-flow: row wrap;\r\n\tjustify-content: center;\r\n\tmargin: 5px 0;\r\n}\r\n  \r\n  .column {\r\n\tflex: 1;\r\n\tborder: 1px solid gray;\r\n\tmargin: 2px;\r\n    padding: 10px;\r\n    min-height: 150px;\r\n    text-align: center;\r\n    position: relative;\r\n\t&:first-child { margin-left: 0; }\r\n\t&:last-child { margin-right: 0; }\r\n\t\r\n}\r\n  \r\n  .btn_event{\r\n    margin-top: 40px;\r\n}\r\n  \r\n  .win_game{\r\n    \r\n}\r\n  \r\n  /* @media screen and (max-width: 980px) {\r\n    .columns .column {\r\n          margin-bottom: 5px;\r\n      flex-basis: 40%;\r\n          &:nth-last-child(2) {\r\n              margin-right: 0;\r\n          }\r\n          &:last-child {\r\n              flex-basis: 100%;\r\n              margin: 0;\r\n          }\r\n      }\r\n  } */\r\n  \r\n  @media screen and (max-width: 425px) {\r\n      .columns .column {\r\n          flex-basis: 100%;\r\n          margin: 0 0 5px 0;\r\n      }\r\n  }\r\n  \r\n  @media screen and (min-width: 768px) {\r\n    .table{\r\n        width: 620px;\r\n    }\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ldmVudF9yZWNvcmQvZXZlbnRfcmVjb3JkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksY0FBYztJQUNkLGNBQWM7RUFDaEI7O0VBRUE7SUFDRTtFQUNGOztFQUNBO01BQ0ksWUFBWTtFQUNoQjs7RUFFRjtDQUNDLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsdUJBQXVCO0NBQ3ZCLGFBQWE7QUFDZDs7RUFFQTtDQUNDLE9BQU87Q0FDUCxzQkFBc0I7Q0FDdEIsV0FBVztJQUNSLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtDQUNyQixnQkFBZ0IsY0FBYyxFQUFFO0NBQ2hDLGVBQWUsZUFBZSxFQUFFOztBQUVqQzs7RUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7RUFDQTs7QUFFQTs7RUFFQTs7Ozs7Ozs7Ozs7O0tBWUs7O0VBRUg7TUFDSTtVQUNJLGdCQUFnQjtVQUNoQixpQkFBaUI7TUFDckI7RUFDSjs7RUFFQTtJQUNFO1FBQ0ksWUFBWTtJQUNoQjtFQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ldmVudF9yZWNvcmQvZXZlbnRfcmVjb3JkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuI2lubmVyIHtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gICNvdXRlciB7XHJcbiAgICB3aWR0aDoxMDAlXHJcbiAgfVxyXG4gIC50YWJsZXtcclxuICAgICAgd2lkdGg6IDMyMHB4O1xyXG4gIH1cclxuXHJcbi5jb2x1bW5zIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGZsZXgtZmxvdzogcm93IHdyYXA7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0bWFyZ2luOiA1cHggMDtcclxufVxyXG5cclxuLmNvbHVtbiB7XHJcblx0ZmxleDogMTtcclxuXHRib3JkZXI6IDFweCBzb2xpZCBncmF5O1xyXG5cdG1hcmdpbjogMnB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDE1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdCY6Zmlyc3QtY2hpbGQgeyBtYXJnaW4tbGVmdDogMDsgfVxyXG5cdCY6bGFzdC1jaGlsZCB7IG1hcmdpbi1yaWdodDogMDsgfVxyXG5cdFxyXG59XHJcblxyXG4uYnRuX2V2ZW50e1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxufVxyXG4ud2luX2dhbWV7XHJcbiAgICBcclxufVxyXG5cclxuLyogQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTgwcHgpIHtcclxuICAgIC5jb2x1bW5zIC5jb2x1bW4ge1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICBmbGV4LWJhc2lzOiA0MCU7XHJcbiAgICAgICAgICAmOm50aC1sYXN0LWNoaWxkKDIpIHtcclxuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XHJcbiAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgfSAqL1xyXG4gIFxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNXB4KSB7XHJcbiAgICAgIC5jb2x1bW5zIC5jb2x1bW4ge1xyXG4gICAgICAgICAgZmxleC1iYXNpczogMTAwJTtcclxuICAgICAgICAgIG1hcmdpbjogMCAwIDVweCAwO1xyXG4gICAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgLnRhYmxle1xyXG4gICAgICAgIHdpZHRoOiA2MjBweDtcclxuICAgIH1cclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/components/event_record/event_record.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/event_record/event_record.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n\n<div id=\"outer\">\n    <div class=\"win_game \" id=\"inner\">\n        <table class=\"table\">\n            <thead>\n              <tr>\n                <th scope=\"col\">กิจกรรม</th>\n                <th scope=\"col\">คนร่วมรายการ</th>\n                <th scope=\"col\">คนถูกรางวัล</th>\n                <th scope=\"col\">view</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <th scope=\"row\">1</th>\n                <td>10</td>\n                <td>10</td>\n                <td>คลิก</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">2</th>\n                <td>10</td>\n                <td>100</td>\n                <td>คลิก</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">3</th>\n                <td>10</td>\n                <td>200</td>\n                <td>คลิก</td>\n              </tr>\n            </tbody>\n          </table>\n    </div>\n    <section class=\"columns\">\n        <div class=\"column\">\n            <h2 style=\"text-align: center;\">นับไลค์ (LIKE)</h2>\n            <div class=\"btn_event p-3 mb-2 bg-primary text-white\">100</div>\n          </div>\n          \n          <div class=\"column\">\n            <h2  style=\"text-align: center;\">นับแชร์ (SHARE)</h2>\n            <div class=\"btn_event p-3 mb-2 bg-primary text-white\">20</div>\n          </div>\n          \n          <div class=\"column\">\n            <h2  style=\"text-align: center;\">นับคอมเม้น (COMMENT)</h2>\n            <div class=\"btn_event p-3 mb-2 bg-primary text-white\">10</div>\n          </div>\n    </section>\n\n    <div class=\"win_game \" id=\"inner\">\n        <table class=\"table\" >\n            <thead>\n              <tr>\n                <th scope=\"col\">ชื่อ</th>\n                <th scope=\"col\">ลิ้ง</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <th scope=\"row\">name 1</th>\n                <td>link</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">name 2</th>\n                <td>link</td>\n              </tr>\n              <tr>\n                <th scope=\"row\">name 3</th>\n                <td>link</td>\n              </tr>\n            </tbody>\n          </table>\n    </div>\n</div>\n\n</div>"

/***/ }),

/***/ "./src/app/components/event_record/event_record.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/event_record/event_record.component.ts ***!
  \*******************************************************************/
/*! exports provided: Event_recordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Event_recordComponent", function() { return Event_recordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/todo.service */ "./src/app/service/todo.service.ts");



var Event_recordComponent = /** @class */ (function () {
    function Event_recordComponent(todoServcie) {
        this.todoServcie = todoServcie;
    }
    Event_recordComponent.prototype.ngOnInit = function () {
        //call service
        var _this = this;
        this.todoServcie.getTextContext().subscribe(function (response) {
            //this.sanitizedURL = this.sanitizer.bypassSecurityTrustResourceUrl(response.data.contact_text_detail)['changingThisBreaksApplicationSecurity']; 
            //console.log(response.data.contact_text_detail);
            _this.todoContactText = response.data.contact_text_detail;
        });
    };
    Event_recordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-event_record',
            template: __webpack_require__(/*! ./event_record.component.html */ "./src/app/components/event_record/event_record.component.html"),
            styles: [__webpack_require__(/*! ./event_record.component.css */ "./src/app/components/event_record/event_record.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"]])
    ], Event_recordComponent);
    return Event_recordComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footerArea2{\r\n    background-color: #0C0C0C;\r\n    border-top:3px solid #F8DD30;\r\n    display: none;\r\n}\r\n.link_footer{\r\n    float: left;\r\n}\r\n.links_footer{\r\n    font-weight: 100;\r\n    color: white;\r\n    float: left;\r\n    padding-left:30px;\r\n    padding-right: 30px;\r\n}\r\n.links_footer:hover{\r\n   cursor: pointer;\r\n}\r\n.menu_footer_{\r\n    margin: auto;\r\n    width: 90%;\r\n    padding: 10px;\r\n    margin-top: 40px;\r\n}\r\n.space{\r\n    float: left;\r\n    width:450px;\r\n    height: 1px;\r\n}\r\n.link_footer_right{\r\n    float: right;\r\n}\r\n.logo_footer {\r\n    text-align: center;\r\n    background-image: url('/assets/images/logo/logo_w.png');\r\n    background-position: top;\r\n    background-size: 280px 120px;\r\n    background-repeat: no-repeat;\r\n    float: left;\r\n    margin-top:30px;\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n/* .logo_footer img{\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    width: 30%;\r\n    max-width: 250px;\r\n} */\r\n.container.footer{\r\n    padding-bottom: 0px;\r\n}\r\n.footerArea3{\r\n    float: left;\r\n    background: #171719;\r\n    text-align: center;\r\n    color: white;\r\n    width:100%;\r\n    text-align: center;\r\n}\r\n.footerArea3 .container{\r\n    background: #171719;\r\n}\r\ndiv#centerDiv3 {\r\n    width: 100%;\r\n    text-align: center;\r\n    padding-top: 10px;\r\n    font-size: 12px;\r\n}\r\n.footerArea .container{\r\n    background: unset;\r\n}\r\n.menu_footer{\r\n    color: white;\r\n    float: left;\r\n    text-align: center;\r\n    padding-top:30px;\r\n}\r\ndiv#centerDiv {\r\n    width: 100%;\r\n    text-align: left;\r\n    padding-top: 21px;\r\n}\r\nul.centerUL {\r\n    margin: 2px auto;\r\n    line-height: 1.4;\r\n    padding-left: 0;\r\n    color: white;\r\n    text-align: center;\r\n}\r\nli.menuFooter{\r\n    padding-left:5px;\r\n    padding-right: 5px;\r\n}\r\nli.menuFooter:hover{\r\n    cursor: pointer;\r\n    /* text-decoration: underline; */\r\n}\r\n.centerUL li {\r\n    display: inline;\r\n    text-align: center;\r\n}\r\n.menu_footer{\r\n    float: left;\r\n    margin-top: 15px;\r\n    clear: left;\r\n    \r\n}\r\n.a_link{\r\n    margin-top:15px;\r\n   font-size: 1.5em;\r\n   text-align: left;\r\n   border-bottom: 1px solid white;\r\n}\r\n.linkFooter{\r\n    color: white;\r\n    text-decoration:none;\r\n}\r\n@media screen and (min-width: 768px) {\r\n    \r\n    .tel_icon{\r\n        margin-left:15px;\r\n        float: right;\r\n    }\r\n\r\n    .tel{\r\n        margin-left:15px;\r\n        float: right;\r\n    }\r\n\r\n    .line_icon{\r\n        margin-left:15px;\r\n        float: right;\r\n    }\r\n\r\n    .line{\r\n        margin-left:15px;\r\n        float: right;\r\n    }\r\n\r\n    .tel_area{\r\n        float: left;\r\n        width: 100%;\r\n        margin-top:15px;\r\n    }\r\n    .line_area{\r\n        margin-top:15px;\r\n        float: left;\r\n        width: 100%;\r\n    }\r\n    .tel_image{\r\n        float: left;\r\n    }\r\n    .line_image{\r\n        float: left;\r\n    }\r\n    .detail_left{\r\n        float: right;\r\n        width: 130px;\r\n    }\r\n    .detail_right{\r\n        text-align: right;\r\n        float: right;\r\n        width: calc(100% - 130px);\r\n    }\r\n    .contact_text{\r\n        font-size: 1.2em;\r\n        font-weight: bold;\r\n        text-align: right;\r\n    }\r\n    .container.footer{\r\n        height: 150px;\r\n    }\r\n    .qr_image{\r\n        width: 130px;\r\n        height: 130px;\r\n    }\r\n    .contact_area{\r\n        position: relative;\r\n        float: right;\r\n        top:20px;\r\n        width: 340px;\r\n    }\r\n    .contact_qr_area{\r\n        float: left;\r\n        width: 100%;\r\n    }\r\n    \r\n    .footer_bank{\r\n        position: absolute;\r\n        right: 0px;\r\n        float: left;\r\n        width: 400px;\r\n    }\r\n    .footer_bank img{\r\n        width: 70% !important;\r\n    }\r\n    li.menuFooter{\r\n        padding-left:5px;\r\n        padding-right: 5px;\r\n        font-size: 12px;\r\n    }\r\n    .menu_footer{\r\n        font-size: 14px;\r\n    }\r\n    .menu1{\r\n       margin-right: 10px;\r\n    }\r\n    .menu2{\r\n        margin-right: 10px;\r\n    }\r\n    .menu3{\r\n        margin-right: 10px;\r\n    }\r\n    .menu4{\r\n        margin-right: 12px;\r\n    }\r\n    .menu5{\r\n        margin-right: 12px;\r\n    }\r\n    .menu6{\r\n        margin-right: 12px;\r\n    }\r\n    .menu7{\r\n        margin-right: 10px;\r\n    }\r\n}\r\n.footerArea2{\r\n    float: left;\r\n    width: 100%;\r\n    min-height: 160px;\r\n    \r\n    position: relative;\r\n    padding-bottom: 40px;\r\n}\r\n.footerArea2 .container{\r\n    background-color: unset;\r\n}\r\n@media screen and (min-width: 992px) {\r\n    .footer_bank{\r\n        float: right;\r\n        margin-top: -66px;\r\n        position: relative;\r\n        right: 50px;\r\n    }\r\n    .footer_bank img{\r\n        width: 80% !important;\r\n    }\r\n    li.menuFooter{\r\n        font-size: 1em;\r\n    }\r\n    .menu1{\r\n       margin-right: 20px;\r\n    }\r\n    .menu2{\r\n        margin-right: 20px;\r\n    }\r\n    .menu3{\r\n        margin-right: 20px;\r\n    }\r\n    .menu4{\r\n        margin-right: 20px;\r\n    }\r\n    .menu5{\r\n        margin-right: 20px;\r\n    }\r\n    .menu6{\r\n        margin-right: 20px;\r\n    }\r\n    .menu7{\r\n        margin-right: 10px;\r\n    }\r\n}\r\n@media screen and (min-width: 1200px) {\r\n    \r\n    .footerArea2{\r\n        min-height: 180px;\r\n    }\r\n    .footer_bank{\r\n        float: right;\r\n        margin-top: -66px;\r\n    }\r\n    .menu_footer{\r\n        float: left;\r\n        margin-top: -90px;\r\n        margin-bottom: 8px;\r\n        margin-right: 15px;\r\n        margin-left:135px;\r\n        display: block;\r\n        clear:unset;\r\n    }\r\n    li.menuFooter{\r\n        font-size: 1em;\r\n    }\r\n    .menu1{\r\n        margin-left: 25px;\r\n        margin-right: 40px;\r\n    }\r\n    .menu2{\r\n        margin-right: 40px;\r\n    }\r\n    .menu3{\r\n        margin-right: 40px;\r\n    }\r\n    .menu4{\r\n        margin-right: 40px;\r\n    }\r\n    .menu5{\r\n        margin-right: 40px;\r\n    }\r\n    .menu6{\r\n        margin-right: 30px;\r\n    }\r\n    .menu7{\r\n        margin-right: 30px;\r\n    }\r\n}\r\n@media screen and (min-width: 1300px) {\r\n    \r\n    .space{\r\n        width: 280px;\r\n    }\r\n    .footerArea2{\r\n        display: block;\r\n    }\r\n}\r\n@media screen and (min-width: 1440px) {\r\n    .space{\r\n        width:280px;\r\n    }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsNEJBQTRCO0lBQzVCLGFBQWE7QUFDakI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2QjtBQUVBO0dBQ0csZUFBZTtBQUNsQjtBQUVBO0lBQ0ksWUFBWTtJQUNaLFVBQVU7SUFDVixhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLFdBQVc7QUFDZjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLHVEQUF1RDtJQUN2RCx3QkFBd0I7SUFDeEIsNEJBQTRCO0lBQzVCLDRCQUE0QjtJQUM1QixXQUFXO0lBQ1gsZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0FBQ2hCO0FBQ0E7Ozs7OztHQU1HO0FBRUg7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCO0FBR0E7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsWUFBWTtJQUNaLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtC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SUFDQTtRQUNJLGNBQWM7SUFDbEI7QUFDSjtBQUtBO0lBQ0k7UUFDSSxXQUFXO0lBQ2Y7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlckFyZWEye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBDMEMwQztcclxuICAgIGJvcmRlci10b3A6M3B4IHNvbGlkICNGOEREMzA7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5saW5rX2Zvb3RlcntcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcbi5saW5rc19mb290ZXJ7XHJcbiAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6MzBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi5saW5rc19mb290ZXI6aG92ZXJ7XHJcbiAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm1lbnVfZm9vdGVyX3tcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxufVxyXG4uc3BhY2V7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOjQ1MHB4O1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbn1cclxuLmxpbmtfZm9vdGVyX3JpZ2h0e1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcbi5sb2dvX2Zvb3RlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2xvZ28vbG9nb193LnBuZycpO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAyODBweCAxMjBweDtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi10b3A6MzBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi8qIC5sb2dvX2Zvb3RlciBpbWd7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6IDMwJTtcclxuICAgIG1heC13aWR0aDogMjUwcHg7XHJcbn0gKi9cclxuXHJcbi5jb250YWluZXIuZm9vdGVye1xyXG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcclxufVxyXG4uZm9vdGVyQXJlYTN7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGJhY2tncm91bmQ6ICMxNzE3MTk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5mb290ZXJBcmVhMyAuY29udGFpbmVye1xyXG4gICAgYmFja2dyb3VuZDogIzE3MTcxOTtcclxufVxyXG5kaXYjY2VudGVyRGl2MyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5mb290ZXJBcmVhIC5jb250YWluZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiB1bnNldDtcclxufVxyXG4ubWVudV9mb290ZXJ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOjMwcHg7XHJcbn1cclxuXHJcblxyXG5kaXYjY2VudGVyRGl2IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIHBhZGRpbmctdG9wOiAyMXB4O1xyXG59XHJcbnVsLmNlbnRlclVMIHtcclxuICAgIG1hcmdpbjogMnB4IGF1dG87XHJcbiAgICBsaW5lLWhlaWdodDogMS40O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbmxpLm1lbnVGb290ZXJ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6NXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG59XHJcbmxpLm1lbnVGb290ZXI6aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAvKiB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgKi9cclxufVxyXG4uY2VudGVyVUwgbGkge1xyXG4gICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubWVudV9mb290ZXJ7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBjbGVhcjogbGVmdDtcclxuICAgIFxyXG59XHJcbi5hX2xpbmt7XHJcbiAgICBtYXJnaW4tdG9wOjE1cHg7XHJcbiAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB3aGl0ZTtcclxufVxyXG5cclxuLmxpbmtGb290ZXJ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgXHJcbiAgICAudGVsX2ljb257XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6MTVweDtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnRlbHtcclxuICAgICAgICBtYXJnaW4tbGVmdDoxNXB4O1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgIH1cclxuXHJcbiAgICAubGluZV9pY29ue1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjE1cHg7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIC5saW5le1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjE1cHg7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIC50ZWxfYXJlYXtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW4tdG9wOjE1cHg7XHJcbiAgICB9XHJcbiAgICAubGluZV9hcmVhe1xyXG4gICAgICAgIG1hcmdpbi10b3A6MTVweDtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC50ZWxfaW1hZ2V7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB9XHJcbiAgICAubGluZV9pbWFnZXtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgIH1cclxuICAgIC5kZXRhaWxfbGVmdHtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgd2lkdGg6IDEzMHB4O1xyXG4gICAgfVxyXG4gICAgLmRldGFpbF9yaWdodHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEzMHB4KTtcclxuICAgIH1cclxuICAgIC5jb250YWN0X3RleHR7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxuICAgIC5jb250YWluZXIuZm9vdGVye1xyXG4gICAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICB9XHJcbiAgICAucXJfaW1hZ2V7XHJcbiAgICAgICAgd2lkdGg6IDEzMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTMwcHg7XHJcbiAgICB9XHJcbiAgICAuY29udGFjdF9hcmVhe1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgdG9wOjIwcHg7XHJcbiAgICAgICAgd2lkdGg6IDM0MHB4O1xyXG4gICAgfVxyXG4gICAgLmNvbnRhY3RfcXJfYXJlYXtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmZvb3Rlcl9iYW5re1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogMHB4O1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIHdpZHRoOiA0MDBweDtcclxuICAgIH1cclxuICAgIC5mb290ZXJfYmFuayBpbWd7XHJcbiAgICAgICAgd2lkdGg6IDcwJSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgbGkubWVudUZvb3RlcntcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6NXB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcbiAgICAubWVudV9mb290ZXJ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG4gICAgLm1lbnUxe1xyXG4gICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLm1lbnUye1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIH1cclxuICAgIC5tZW51M3tcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAubWVudTR7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG4gICAgfVxyXG4gICAgLm1lbnU1e1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxuICAgIH1cclxuICAgIC5tZW51NntcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbiAgICB9XHJcbiAgICAubWVudTd7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uZm9vdGVyQXJlYTJ7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogMTYwcHg7XHJcbiAgICBcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xyXG59XHJcbi5mb290ZXJBcmVhMiAuY29udGFpbmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQ7XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAgIC5mb290ZXJfYmFua3tcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTY2cHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHJpZ2h0OiA1MHB4O1xyXG4gICAgfVxyXG4gICAgLmZvb3Rlcl9iYW5rIGltZ3tcclxuICAgICAgICB3aWR0aDogODAlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBsaS5tZW51Rm9vdGVye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgfVxyXG4gICAgLm1lbnUxe1xyXG4gICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLm1lbnUye1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIH1cclxuICAgIC5tZW51M3tcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICB9XHJcbiAgICAubWVudTR7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLm1lbnU1e1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIH1cclxuICAgIC5tZW51NntcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICB9XHJcbiAgICAubWVudTd7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxuICAgIFxyXG4gICAgLmZvb3RlckFyZWEye1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDE4MHB4O1xyXG4gICAgfVxyXG4gICAgLmZvb3Rlcl9iYW5re1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtNjZweDtcclxuICAgIH1cclxuICAgIC5tZW51X2Zvb3RlcntcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtOTBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjEzNXB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGNsZWFyOnVuc2V0O1xyXG4gICAgfVxyXG4gICAgbGkubWVudUZvb3RlcntcclxuICAgICAgICBmb250LXNpemU6IDFlbTtcclxuICAgIH1cclxuICAgIC5tZW51MXtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMjVweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XHJcbiAgICB9XHJcbiAgICAubWVudTJ7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xyXG4gICAgfVxyXG4gICAgLm1lbnUze1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNDBweDtcclxuICAgIH1cclxuICAgIC5tZW51NHtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XHJcbiAgICB9XHJcbiAgICAubWVudTV7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xyXG4gICAgfVxyXG4gICAgLm1lbnU2e1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICAgIH1cclxuICAgIC5tZW51N3tcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEzMDBweCkge1xyXG4gICAgXHJcbiAgICAuc3BhY2V7XHJcbiAgICAgICAgd2lkdGg6IDI4MHB4O1xyXG4gICAgfVxyXG4gICAgLmZvb3RlckFyZWEye1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDQwcHgpIHtcclxuICAgIC5zcGFjZXtcclxuICAgICAgICB3aWR0aDoyODBweDtcclxuICAgIH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div _ngcontent-wkk-c2=\"\" class=\"footerArea2\">\n    <div _ngcontent-wkk-c2=\"\" class=\"container footer\">\n        <div _ngcontent-wkk-c2=\"\" class=\"logo_footer\">\n            <div _ngcontent-wkk-c2=\"\" class=\"menu_footer_\"><span _ngcontent-wkk-c2=\"\" class=\"links_footer\" routerLink=\"/home\" tabindex=\"0\" ng-reflect-router-link=\"/home\">หน้าหลัก</span><span _ngcontent-wkk-c2=\"\" class=\"links_footer\" routerLink=\"/page/register\" tabindex=\"0\" ng-reflect-router-link=\"/page/register\">สมัครสมาชิก</span><span _ngcontent-wkk-c2=\"\" class=\"links_footer\" routerLink=\"/page/deposit\" tabindex=\"0\" ng-reflect-router-link=\"/page/deposit\">ฝาก</span>\n                <div _ngcontent-wkk-c2=\"\" class=\"space\"> </div><span _ngcontent-wkk-c2=\"\" class=\"links_footer\" routerLink=\"/page/withdraw\" tabindex=\"0\" ng-reflect-router-link=\"/page/withdraw\">ถอน</span><span _ngcontent-wkk-c2=\"\" class=\"links_footer\" routerLink=\"/page/agent\" tabindex=\"0\" ng-reflect-router-link=\"/page/agent\">สมัครเอเย่นต์</span><span _ngcontent-wkk-c2=\"\" class=\"links_footer\" routerLink=\"/page/contact\" tabindex=\"0\" ng-reflect-router-link=\"/page/contact\">ติดต่อเรา</span></div>\n        </div>\n    </div>\n</div>\n\n<div _ngcontent-wkk-c2=\"\" class=\"footerArea3\">\n    <div _ngcontent-wkk-c2=\"\" class=\"container\">\n        <div _ngcontent-wkk-c2=\"\" id=\"centerDiv3\"> Copyright 2018 © premier999.com All Rights Reserved. </div>\n        <div _ngcontent-wkk-c2=\"\" id=\"centerDiv3\" style=\"font-size: 10px;\"> การเงินมั่นคง ฝาก-ถอน ออนไลน์รวดเร็วภายใน 5 นาที </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.carousel-item>img{\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.contentArea{\r\n    border: 1px solid #D10000;\r\n    min-height: 952px;\r\n    margin-top:10px;\r\n}\r\n\r\n.top_banner{\r\n    min-height: 154px;\r\n}\r\n\r\n.content_area{\r\n    background-image: url('/assets/images/content/background_content.jpg');\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    width: 100%;\r\n    height: auto;\r\n    padding:0px  15px 15px 15px;\r\n    float: left;\r\n    position: relative;\r\n    border-top:3px solid #BD9A23;\r\n    \r\n}\r\n\r\n.area_1{\r\n    background-image: url('/assets/images/content/bg_1.jpg');\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    width: 100%;\r\n    height: auto;\r\n    padding:15px 15px 15px 15px;\r\n}\r\n\r\n.input_area_1{\r\n    margin-top:15px;\r\n}\r\n\r\n.area_1 .container{\r\n    background: unset;\r\n}\r\n\r\n.area_1 .text_1{\r\n    color: #EDD83B;\r\n    font-size: 1.2em;\r\n    text-align: center;\r\n    text-shadow: 2px 2px #363636;\r\n}\r\n\r\n.area_1  .text_2{\r\n    color: white;\r\n    font-size: 1em;\r\n    text-align: center;\r\n}\r\n\r\n.area_2{\r\n    background-image: url('/assets/images/content/bg_2.jpg');\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-position: center bottom;\r\n    width: 100%;\r\n    min-height: 500px;\r\n    height: auto;\r\n    padding:15px 15px 15px 15px;\r\n}\r\n\r\n.area_2 .container{\r\n    background: unset;\r\n}\r\n\r\n.area_2 .text_1{\r\n    color: #F66900;\r\n    font-size: 1.2em;\r\n    text-align: center;\r\n    text-shadow: 2px 2px #363636;\r\n}\r\n\r\n.area_2  .text_2{\r\n    color: white;\r\n    font-size: 1em;\r\n    text-align: center;\r\n}\r\n\r\n.text_1 .text_white{\r\n    color: white;\r\n}\r\n\r\n.area_3{\r\n    background-image: url('/assets/images/content/bg_3.jpg');\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-position: top center;\r\n    width: 100%;\r\n    min-height: 400px;\r\n    height: auto;\r\n    padding:15px 15px 15px 15px;\r\n}\r\n\r\n.area_3 .container{\r\n    background: unset;\r\n}\r\n\r\n.area_3 .text_1{\r\n    color: black;\r\n    font-size: 1.2em;\r\n    text-align: center;\r\n}\r\n\r\n.area_3  .text_2{\r\n    color: black;\r\n    font-size: 1em;\r\n    text-align: center;\r\n}\r\n\r\n.register_image img{\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    width: 90%;\r\n}\r\n\r\n.register_image {\r\n   margin-top:20px;\r\n}\r\n\r\n.register_button_area img{\r\n    margin-top:15px;\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    width: 60%;\r\n    left: -15px;\r\n    position: relative;\r\n}\r\n\r\n/* .register_button_area img{\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    width: 40%;\r\n    left: -34px;\r\n    position: relative;\r\n} */\r\n\r\n.area_4{\r\n    background-image: url('/assets/images/content/bg_4.jpg');\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-position: top center;\r\n    width: 100%;\r\n    min-height: 624px;\r\n    height: auto;\r\n    padding:15px 15px 15px 15px;\r\n}\r\n\r\n.area_4 .container{\r\n    background: unset;\r\n}\r\n\r\n.area_4 .text_1{\r\n    color: white;\r\n    font-size: 2em;\r\n    text-align: right;\r\n    float: right;\r\n    \r\n}\r\n\r\n.whyplay_area{\r\n    float: right;\r\n    clear: both;\r\n}\r\n\r\n.whyplay_area img{\r\n    width: 100%;\r\n}\r\n\r\n.whyplay_img{\r\n    width: 100%;\r\n    max-width: 300px;\r\n}\r\n\r\n.text_inside{\r\n    float: right;\r\n    position: relative;\r\n    /* bottom: -62px; */\r\n    margin-right: 15px;\r\n}\r\n\r\n.img_inside{\r\n    float: right;\r\n}\r\n\r\n.area_5{\r\n    background-image: url('/assets/images/content/bg_5.jpg');\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-position: top center;\r\n    width: 100%;\r\n    min-height: 450px;\r\n    height: auto;\r\n    padding:15px 15px 15px 15px;\r\n}\r\n\r\n.area_5 .container{\r\n    background: unset;\r\n}\r\n\r\n.area_5 .text_1{\r\n    color: white;\r\n    font-size: 2em;\r\n    text-align: center;\r\n}\r\n\r\n.area_5  .text_2{\r\n    color: white;\r\n    font-size: 1em;\r\n    text-align: center;\r\n}\r\n\r\n.area_6{\r\n    background: #101010;\r\n    width: 100%;\r\n    min-height: 450px;\r\n    height: auto;\r\n    padding:15px 15px 15px 15px;\r\n}\r\n\r\n.area_6 .container{\r\n    background: unset;\r\n}\r\n\r\n.area_btn_transfer{\r\n    margin: auto;\r\n    width: 100%;\r\n    padding: 10px;\r\n}\r\n\r\n.deposit_btn{\r\n    position: relative;\r\n    display: block;\r\n    margin-left: auto;\r\n    width:100%;\r\n}\r\n\r\n.withdraw_btn{\r\n    position: relative;\r\n    display: block;\r\n    margin-right: auto;\r\n    width: 100%;\r\n}\r\n\r\n.deposit_btn img{\r\n    position: relative;\r\n    right: 0;\r\n    width:100%;\r\n    max-width: 400px;\r\n}\r\n\r\n.withdraw_btn img{\r\n    position: relative;\r\n    left: 0;\r\n    width:100%;\r\n    max-width: 400px;\r\n}\r\n\r\n.register_detail{\r\n    display: none; \r\n}\r\n\r\n.text-center-line {\r\n    width: 100%; \r\n    text-align: center; \r\n    border-bottom: 1px solid #18FF00; \r\n    line-height: 0.1em;\r\n    margin: 10px 0 20px; \r\n }\r\n\r\n/* .icon_menu {\r\n    float: left;\r\n    padding-bottom: 30px;\r\n    width: 100%;\r\n    margin-left: 0px;\r\n} */\r\n\r\n.text-center-line span { \r\n     padding:0 10px; \r\n     background-color: black;\r\n     font-style:italic;\r\n }\r\n\r\n.home_slide{\r\n    /* background-image: url('/assets/images/bg_slide/Slide2.jpg');\r\n    background-size: 100% 100%;\r\n    background-repeat: no-repeat; */\r\n    float: left;\r\n    position: relative;\r\n    margin-top: 0px;\r\n    z-index: 1;\r\n    min-height: 150px;\r\n    top: 180px;\r\n}\r\n\r\n.home_slide{\r\n    top:unset;\r\n}\r\n\r\n.slideshow-container{\r\n    height: 200px !important;\r\n}\r\n\r\n.contentHeader{\r\n    background: #D10000;\r\n    color: white;\r\n    padding: 10px;\r\n    font-size: 1.6em;\r\n   \r\n}\r\n\r\n.callcenter{\r\n    background-image: url('/assets/images/content/callcenter.jpg');\r\n    width: 100%;\r\n    height: 150px;\r\n    background-size: 100% 100%;\r\n}\r\n\r\n.area_bank{\r\n    float: left;\r\n    width: 100%;\r\n    height: auto;\r\n    min-height: 140px;\r\n    background-color: #363636;\r\n}\r\n\r\n.img_bank{\r\n    background-image: url('/assets/images/content/banking.png');\r\n    background-repeat: no-repeat;\r\n    height: 100px;\r\n    width: 300px;\r\n    background-size: 100% auto;\r\n    float: left;\r\n    margin-top: 20px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.contentText{\r\n    color: white;\r\n    font-size: 1.1em;\r\n    padding:10px;\r\n}\r\n\r\n.area_text_bank{\r\n    float: left;\r\n    margin-top:30px;\r\n}\r\n\r\n.text_bank{\r\n    font-size: 2em;\r\n    color: white;\r\n    float: left;\r\n}\r\n\r\n.text_bank2{\r\n    font-size: 1em;\r\n    color: white;\r\n    float: left;\r\n    clear: both;\r\n}\r\n\r\n.area_text_des{\r\n    height: auto;\r\n    float: left;\r\n    min-height: 430px;\r\n    background-color: black;\r\n    padding:0 20px 0 20px;\r\n}\r\n\r\n.header1{\r\n    font-size: 2em;\r\n    color: #fff;\r\n    text-align: center;\r\n}\r\n\r\n.header2{\r\n    font-size: 1.5em;\r\n    color: #fff;\r\n    text-align: center;\r\n}\r\n\r\n.text_description{\r\n    color: #fff;\r\n    text-align: center;\r\n}\r\n\r\n.text_description_green{\r\n    margin-top:15px;\r\n    font-size: 1.5em;\r\n    color:#5DD812;\r\n    text-align: center;\r\n}\r\n\r\n.text_description_green2{\r\n    margin-top:48px;\r\n    font-size: 1em;\r\n    color:#5DD812;\r\n    text-align: center;\r\n    font-weight: 100;\r\n    float: left;\r\n}\r\n\r\n.area_line{\r\n    float: left;\r\n    width: 100%;\r\n}\r\n\r\n.phone_image{\r\n    background-image: url('/assets/images/content/tel.png');\r\n    background-repeat: no-repeat;\r\n    height: 59px;\r\n    width: 35px;\r\n    float: left;\r\n    margin-top: 25px;\r\n    margin-bottom: 20px;\r\n    margin-right: 10px;\r\n}\r\n\r\n.line_image{\r\n    background-image: url('/assets/images/content/addfriend.png');\r\n    background-repeat: no-repeat;\r\n    height: 43px;\r\n    width: 169px;\r\n    float: left;\r\n    margin-top: 38px;\r\n    margin-bottom: 20px;\r\n    margin-left:10px;\r\n}\r\n\r\n.area_bottom_menu{\r\n    width: 100%;\r\n    float: left;\r\n    height: auto;\r\n    min-height: 300px;\r\n    border-top: #363636 solid 2px;\r\n    margin-top:15px;\r\n}\r\n\r\n.text_bottom_menu{\r\n    font-size: 2em;\r\n    color: #fff;\r\n    text-align: center;\r\n    margin-top:30px;\r\n    font-weight: 100;\r\n}\r\n\r\n.highlight{\r\n    color:#E8CF01;\r\n}\r\n\r\n.indent{\r\n    text-indent: 30px; margin-top: 0.63em\r\n}\r\n\r\n.indent2{\r\n    text-indent: 0px; margin-top: 1em\r\n}\r\n\r\n.indent3{\r\n    text-indent: 30px; margin-top: 0em\r\n}\r\n\r\n.newsArea{\r\n    height: auto;\r\n    margin-top: 10px;\r\n    /* border: 2px solid red; */\r\n    padding: 0px;\r\n    /* min-height: 300px; */\r\n    text-overflow: ellipsis;\r\n    overflow: hidden;\r\n    padding-left:5px;\r\n    padding-right:5px;\r\n}\r\n\r\n.sportArea{\r\n    height: auto;\r\n    margin-top: 10px;\r\n    /* border: 2px solid red; */\r\n    padding: 0px;\r\n    /* min-height: 300px; */\r\n    text-overflow: ellipsis;\r\n    overflow: hidden;\r\n    padding-left:5px;\r\n    padding-right:5px;\r\n}\r\n\r\n.cardNews{\r\nheight: 100%;\r\nborder: 2px solid #D2AE70;\r\n}\r\n\r\n.image-news{\r\n    height: calc( 100% - 70px );\r\n    background-size: cover;\r\n    background-position: center;\r\n}\r\n\r\n.text-news{\r\n    padding:10px;\r\n    border-top:1px solid #D2AE70;\r\n    color:white;\r\n    min-height: 50px;\r\n    \r\n}\r\n\r\n.home_slide .row {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n     margin-right: unset;\r\n     margin-left: unset;\r\n    width: 100%;\r\n}\r\n\r\n.slide_and_btn .col-8{\r\n    flex:unset;\r\n    max-width: unset;\r\n}\r\n\r\n.slide_and_btn .col-4{\r\n    flex:unset;\r\n    max-width: unset;\r\n    height: 320px;\r\n    \r\n}\r\n\r\n.register_button{\r\n    /* background-image: url('/assets/images/content/register.png'); */\r\n    /* background-repeat: no-repeat;\r\n    background-size: contain; */\r\n    height: auto;\r\n    width: 100%;\r\n    margin-top:15px;\r\n    margin-bottom: 15px;\r\n    /* margin-left:10px; */\r\n}\r\n\r\n.register_button img{\r\n    height: auto;\r\n    width: 100%;\r\n}\r\n\r\n.deposit_button{\r\n    /* background-image: url('/assets/images/content/deposit.png'); */\r\n    /* background-repeat: no-repeat;\r\n    background-size: 100% 100%; */\r\n    height: auto;\r\n    width: 140px;\r\n    clear:left;\r\n    float: left;\r\n    position: absolute;\r\n    /* margin-left:10px; */\r\n}\r\n\r\n.deposit_button img{\r\n    height: auto;\r\n    width: 140px;\r\n}\r\n\r\n.withdrow_button{\r\n    /* background-image: url('/assets/images/content/WITHDRAW.png'); */\r\n    /* background-repeat: no-repeat;\r\n    background-size: 100% 100%; */\r\n    height: auto;\r\n    width: 140px;\r\n    float: left;\r\n    right:15px;\r\n    position: absolute;\r\n}\r\n\r\n.withdrow_button img{\r\n    height: auto;\r\n    width: 140px;\r\n}\r\n\r\n.text_howtoplay{\r\n    color: white;\r\n    font-size:1.5em;\r\n    margin-left:15px;\r\n    margin-right:15px;\r\n    /* margin-top:15px; */\r\n    border-bottom: 3px solid #18FF00;\r\n    margin-top: 15px;\r\n}\r\n\r\n.image_howtoplay{\r\n    width: 100%;\r\n    padding: 0px 15px 0 15px;\r\n    min-height: 100px;\r\n    display: none;\r\n}\r\n\r\n.login_area{\r\n    width:100%;\r\n    margin-bottom: 15px;\r\n    float: left;\r\n}\r\n\r\n.login_btn{\r\n    background-color: #FD8F00;\r\n    color:white;\r\n    width: 140px;\r\n    text-align: center;\r\n    border-radius: 5px;\r\n    font-size: 1.2em;\r\n    margin-left:15px;\r\n    margin-top:15px;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.input-text{\r\n    margin-top:15px;\r\n    margin-left:15px;\r\n    width: calc( 100% - 30px);\r\n}\r\n\r\n.no-padding{\r\n    /* padding:unset; */\r\n    flex-grow: unset;\r\n    flex-basis:unset;\r\n}\r\n\r\n.sport_button{\r\n    margin-top:15px;\r\n    padding-left:15px;\r\n    padding-right: 15px;\r\n}\r\n\r\n.sport_img img{\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n.sport_img2 img{\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n.casino_img img{\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n }\r\n\r\n.casino_img2 img{\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n }\r\n\r\n.live_img img{\r\n    width: 100%;\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n }\r\n\r\n.divMainContent{\r\n    overflow: hidden;\r\n    height: auto;\r\n    margin-top:15px;\r\n    color: #fff;\r\n}\r\n\r\n.h1text{\r\n    font-size: 1.2em;\r\n    color: white;\r\n}\r\n\r\n.detailRight{\r\n    border-top: 3px solid #1D1D1D;\r\n    float: left;\r\n    width: calc( 100% - 30px);\r\n    color:white;\r\n    text-align: center;\r\n    margin-left:15px;\r\n}\r\n\r\n.detailLeft{\r\n\r\n    margin-left:15px;\r\n    width: calc( 100% - 30px);\r\n    margin-top:15px;\r\n    float: left;\r\n}\r\n\r\n.howtoplay_casino_img img{\r\n    width: 100%;\r\n}\r\n\r\n.howtoplay_football_img img{\r\n    margin-top:15px;\r\n    width: 100%;\r\n}\r\n\r\n.banking_area{\r\n    display: none !important;\r\n}\r\n\r\n.tt_img_df.sport{\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    max-width: 300px;\r\n}\r\n\r\n.tt_img_df.casino{\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    max-width: 300px;\r\n}\r\n\r\n.tt_img_df.lotto{\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    max-width: 300px;\r\n}\r\n\r\n.tt_img_df.game{\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    max-width: 300px;\r\n}\r\n\r\n.tt_img_hover.sport{\r\n    width: 100%;min-height: 255px;\r\n}\r\n\r\n.detail_Left{\r\n    width: 100%;\r\n    float: left;\r\n    text-align: center;\r\n}\r\n\r\n.detail_Left img{\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    width: 50%;\r\n}\r\n\r\n.content_text{\r\n    overflow: hidden;\r\n    text-align: center;\r\n    color: #363636;\r\n    font-size: 1.2em;\r\n    font-weight: bold;\r\n    position: relative;\r\n    top: -36px;\r\n    width: 100%;\r\n}\r\n\r\n.LR_area{\r\n    overflow: hidden;\r\n}\r\n\r\n.detail_Right{\r\n    width: 100%;\r\n    float: left;\r\n    color: white;\r\n    font-weight: 100;\r\n}\r\n\r\n.control-group{\r\n    margin-top:15px;\r\n}\r\n\r\n@media screen and (min-width: 375px) {\r\n\r\n    .sport_img img{\r\n        width: 100%;\r\n        margin-bottom: 10px;\r\n        display: block;\r\n        margin-left: auto;\r\n        margin-right: auto;\r\n        max-width: 400px;\r\n    }\r\n    .sport_img2 img{\r\n        width: 100%;\r\n        margin-bottom: 10px;\r\n        display: block;\r\n        margin-left: auto;\r\n        margin-right: auto;\r\n    }\r\n    .casino_img img{\r\n        width: 100%;\r\n        margin-bottom: 10px;\r\n        display: block;\r\n        margin-left: auto;\r\n        margin-right: auto;\r\n        max-width: 400px;\r\n     }\r\n     .casino_img2 img{\r\n        width: 100%;\r\n        margin-bottom: 10px;\r\n        display: block;\r\n        margin-left: auto;\r\n        margin-right: auto;\r\n     }\r\n     .live_img img{\r\n        width: 100%;\r\n        margin-bottom: 10px;\r\n        display: block;\r\n        margin-left: auto;\r\n        margin-right: auto;\r\n        max-width: 400px;\r\n     }\r\n\r\n    .register_button{\r\n        height: auto;\r\n        width:326px;\r\n        margin-left:10px;\r\n    }\r\n\r\n    .deposit_button{\r\n        height: 160px;\r\n        width: 153px;\r\n        margin-left:10px;\r\n    }\r\n    .withdrow_button{\r\n        height: 160px;\r\n        width: 153px;\r\n        margin-right:0px;\r\n    }\r\n    .howtoplay_casino_img img{\r\n        width: 332px;\r\n        margin-left:5px;\r\n    }\r\n    .howtoplay_football_img img{\r\n        width: 332px;\r\n        margin-left:5px;\r\n    }\r\n    \r\n    \r\n}\r\n\r\n@media screen and (min-width: 425px) {\r\n    .register_button{\r\n        height: auto;\r\n        margin-left:35px;\r\n    }\r\n    .howtoplay_casino_img img{\r\n        margin-left: calc( 50% - 166px);\r\n    }\r\n    .howtoplay_football_img img{\r\n        margin-left: calc( 50% - 166px);\r\n    }\r\n    .slide_and_btn .col-4{\r\n        height: 300px;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 500px) {\r\n    .register_button_area img{\r\n        width: 60%;\r\n        left: -25px;\r\n    }\r\n    .deposit_btn{\r\n        width:95%;\r\n    }\r\n    .withdraw_btn{\r\n        margin-right: unset;\r\n        margin-left: auto;\r\n        width: 95%;\r\n    }\r\n    .register_button{\r\n        height: auto;\r\n        margin-left: calc( 50% - 160px);\r\n    }\r\n    .deposit_button{\r\n        height: auto;\r\n        width: 220px;\r\n        margin-left:0px;\r\n        margin-left: calc( 50% - 174px);\r\n    }\r\n    .withdrow_button{\r\n        height: auto;\r\n        width: 220px;\r\n        margin-left:0px;\r\n        margin-right: calc( 50% - 260px);\r\n    }\r\n    .slide_and_btn .col-4{\r\n        height: 300px;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 540px) {\r\n    .deposit_btn{\r\n        width:90%;\r\n    }\r\n    .withdraw_btn{\r\n        margin-right: unset;\r\n        margin-left: auto;\r\n        width: 90%;\r\n    }\r\n    .register_button{\r\n        height: auto;\r\n    }\r\n    .deposit_button{\r\n        height: auto;\r\n        width: 141px;\r\n        margin-left: calc( 50% - 174px);\r\n    }\r\n    .withdrow_button{\r\n        height: auto;\r\n        width: 141px;\r\n        margin-right: calc( 50% - 184px);\r\n    }\r\n    .slide_and_btn .col-4{\r\n        height: 300px;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 580px) {\r\n    .register_button{\r\n       width: 300px;\r\n       height: auto;\r\n       margin-bottom:0px;\r\n    }\r\n    \r\n    .deposit_button{\r\n        height: auto;\r\n        width: 141px;\r\n        margin-top:15px;\r\n        margin-left: calc( 50% - 174px);\r\n    }\r\n    .withdrow_button{\r\n        height: auto;\r\n        width: 141px;\r\n        margin-top:15px;\r\n        margin-right: calc( 50% - 156px);\r\n    }\r\n    .slide_and_btn .col-4{\r\n        height: 300px;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 640px) {\r\n    .deposit_btn{\r\n        width:85%;\r\n    }\r\n    .withdraw_btn{\r\n        margin-right: unset;\r\n        margin-left: auto;\r\n        width: 85%;\r\n    }\r\n    .image_howtoplay{\r\n        padding:unset;\r\n        display: block;\r\n    }\r\n    .text_howtoplay{\r\n        margin-left: 0px;\r\n        margin-right: 0px;\r\n    }\r\n    .login_area{\r\n        margin-left: -15px;\r\n    }\r\n    .container{\r\n        /* max-width: unset; */\r\n        max-width: 640px;\r\n    }\r\n    .home_slide{\r\n        /* padding-left:30px;\r\n        padding-right: 30px;\r\n        padding-top:15px; */\r\n    }\r\n    .home_slide .row {\r\n        display: flex;\r\n        flex-wrap: wrap;\r\n         margin-right: -15px;\r\n         margin-left: -15px;\r\n         width: unset;\r\n    }\r\n    .register_button{\r\n        width: 194px;\r\n        margin-top: 0px;\r\n        height: 71px;\r\n        margin-left:0px;\r\n        float: unset;\r\n    }\r\n    .deposit_button{\r\n        height: auto;\r\n        width: 95px;\r\n        margin-left:0px;\r\n        float: unset;\r\n        position: absolute;\r\n    }\r\n    .deposit_button img{\r\n        height: auto;\r\n        width: 95px;\r\n    }\r\n    .withdrow_button{\r\n        height: auto;\r\n        width: 95px;\r\n        margin-left:10px;\r\n        float: unset;\r\n        position: absolute;\r\n        right: 8px;\r\n        left: 90px;\r\n    }\r\n    .withdrow_button img{\r\n        height: auto;\r\n        width: 95px;\r\n    }\r\n    .slide_and_btn .col-8{\r\n        flex: 0 0 66.666667%;\r\n        max-width: 66.666667%;\r\n        /* padding:unset;  */\r\n    }\r\n    .slide_and_btn .col-4{\r\n        flex: 0 0 33.333333%;\r\n        max-width: 33.333333%;\r\n        height: auto;\r\n        padding:unset;\r\n        /* padding:unset;  */\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 768px) {\r\n    .top_banner{\r\n        min-height: unset;\r\n    }\r\n    .no-padding{\r\n        padding:unset;\r\n    }\r\n    \r\n    .content_text{\r\n        overflow: hidden;\r\n        text-align: center;\r\n        color:#363636;\r\n        font-size: 1.5em;\r\n        font-weight: bold;\r\n        position: relative;\r\n        top: -40px;\r\n        width: 100%;\r\n    }\r\n    .detail_Left img{\r\n        display: block;\r\n        margin-left: auto;\r\n        margin-right: auto;\r\n        width: 100%;\r\n    }\r\n    .header_bar img{\r\n        display: block;\r\n    }\r\n    .register_button_area img{\r\n        width: 40%;\r\n        left: -30px;\r\n    }\r\n    .area_btn_transfer{\r\n        margin: auto;\r\n        width: 100%;\r\n        padding: 10px;\r\n    }\r\n    .deposit_btn{\r\n        position: relative;\r\n        display: block;\r\n        margin-left: auto;\r\n        width:78%;\r\n    }\r\n    .deposit_btn img{\r\n        position: relative;\r\n        right: 0;\r\n        width:100%;\r\n        max-width: 400px;\r\n    }\r\n    .withdraw_btn{\r\n        position: relative;\r\n        display: block;\r\n        margin-left: auto;\r\n        margin-right: unset;\r\n        width: 78%;\r\n    }\r\n    .withdraw_btn img{\r\n        position: relative;\r\n        right: 0;\r\n        width:100%;\r\n        max-width: 400px;\r\n    }\r\n\r\n\r\n    .detail_Left{\r\n        width: 20%;\r\n        float: left;\r\n        text-align: center;\r\n    }\r\n    \r\n    .detail_Right{\r\n        width: calc( 80% - 30px);\r\n        margin-left:30px;\r\n        float: left;\r\n        \r\n    }\r\n\r\n    .sport_img img{\r\n        width: 100%;\r\n        padding-right: 5px;\r\n        margin-left: auto;\r\n        margin-right: unset;\r\n    }\r\n    .sport_img2 img{\r\n        width: 100%;\r\n        padding-right: 5px;\r\n        margin-left: auto;\r\n        margin-right: unset;\r\n    }\r\n    .casino_img img{\r\n        width: 100%;\r\n        padding-right: 5px;\r\n        margin-left: auto;\r\n        margin-right: auto;\r\n     }\r\n     .casino_img2 img{\r\n        width: 100%;\r\n        padding-right: 5px;\r\n        margin-left: auto;\r\n        margin-right: auto;\r\n     }\r\n     .live_img img{\r\n        width: 100%;\r\n        padding-right: 5px;\r\n        margin-left: unset;\r\n        margin-right: unset;\r\n     }\r\n\r\n\r\n\r\n    .detailRight{\r\n        float: right;\r\n        width: calc( 100% - 352px) ;\r\n        padding-top:30px;\r\n        text-align: left;\r\n        font-weight: 100;\r\n        margin-left: 0px;\r\n    }\r\n    .detailLeft{\r\n        float: left;\r\n        width: 332px;\r\n        margin-top: 0px;\r\n        margin-left: 0px;\r\n        \r\n    }\r\n    .banking_area{\r\n        display: block !important;\r\n    }\r\n    .banking_img{\r\n        margin-top:10px;\r\n    }\r\n    .banking_img img{\r\n        width:100%;\r\n    }\r\n    .howtoplay_casino_img{\r\n        float: left;\r\n    }\r\n    .howtoplay_football_img{\r\n        /* margin-top:10px; */\r\n        float: left;\r\n    }\r\n\r\n\r\n    .no-padding{\r\n        flex-basis:0;\r\n        flex-grow: 1;\r\n    }\r\n    .login_btn{\r\n        background-color: #FD8F00;\r\n        color:white;\r\n        width: 140px;\r\n        text-align: center;\r\n        border-radius: 5px;\r\n        font-size: 1.2em;\r\n        margin-left:15px;\r\n        margin-top:15px;\r\n        margin-bottom: 0px;\r\n        float: left;\r\n        height: 38px;\r\n        padding-top:6px;\r\n    }\r\n    \r\n    .input-text{\r\n        margin-top:15px;\r\n        margin-left:15px;\r\n        width: 250px;\r\n        float: left;\r\n    }\r\n\r\n\r\n    .container{\r\n        /* max-width: unset; */\r\n        max-width: 768px;\r\n    }\r\n  \r\n    .register_button{\r\n        width: 230px;\r\n        margin-top:0px;\r\n        height: 85px;\r\n        margin-left:0px;\r\n        float: unset;\r\n    }\r\n    .deposit_button{\r\n        height: auto;\r\n        width: 110px;\r\n        margin-left:0px;\r\n        float: unset;\r\n        position: absolute;\r\n    }\r\n    .deposit_button img{\r\n        width: 110px;\r\n    }\r\n    .withdrow_button{\r\n        height: auto;\r\n        width: 110px;\r\n        margin-left:0px;\r\n        float: unset;\r\n        position: absolute;\r\n        right: 48px;\r\n        left: unset;\r\n    }\r\n    .withdrow_button img{\r\n        width: 110px;\r\n    }\r\n    .slide_and_btn .col-8{\r\n        flex: 0 0 66.666667%;\r\n        max-width: 66.666667%;\r\n        /* padding:unset;  */\r\n    }\r\n    .slide_and_btn .col-4{\r\n        flex: 0 0 33.333333%;\r\n        max-width: 33.333333%;\r\n        height: auto;\r\n        padding:unset;\r\n        /* padding:unset;  */\r\n    }\r\n}\r\n\r\n@media (min-width: 992px){\r\n    .text_howtoplay{\r\n        margin-left:0px;\r\n    }\r\n\r\n    .login_btn{\r\n        width: 240px;\r\n    }\r\n   \r\n    .input-text{\r\n        margin-top:15px;\r\n        margin-left:15px;\r\n        width: 300px;\r\n        float: left;\r\n    }\r\n\r\n\r\n\r\n\r\n    .register_button{\r\n        width: 300px;\r\n        margin-top:0px;\r\n        height: 120px;\r\n        margin-left:0px;\r\n        float: unset;\r\n    }\r\n    .deposit_button{\r\n        height: auto;\r\n        width: 130px;\r\n        margin-left:0px;\r\n        float: unset;\r\n        position: absolute;\r\n        margin-top: 0px;\r\n    }\r\n    .deposit_button img{\r\n        height: auto;\r\n        width: 130px;\r\n    }\r\n    .withdrow_button{\r\n        height: auto;\r\n        width: 130px;\r\n        margin-left:0px;\r\n        float: unset;\r\n        position: absolute;\r\n        margin-top: 0px;\r\n        right: 10px;\r\n    }\r\n    .withdrow_button img{\r\n        height: auto;\r\n        width: 130px;\r\n    }\r\n    .container {\r\n        max-width: 960px;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 1000px) {\r\n    .text_inside{\r\n        bottom: -62px;\r\n    }\r\n    .area_1{\r\n        min-height: 550px;\r\n    }\r\n    .area_2{\r\n        min-height: 550px;\r\n    }\r\n    .area_1 .text_1{\r\n        font-size: 2em;\r\n        line-height: 1.3;\r\n    }\r\n    .area_1  .text_2{\r\n        font-size: 1.2em;\r\n        line-height: 2;\r\n    }\r\n    .area_2 .text_1{\r\n        font-size: 2.5em;\r\n        line-height: 1.3;\r\n        margin-bottom: 20px;\r\n    }\r\n    .area_2 .text_2{\r\n        font-size: 1.5em;\r\n        line-height: 1.8;\r\n    }\r\n    .area_3{\r\n        min-height: 700px;\r\n    }\r\n    .area_3 .text_1{\r\n        font-size: 2.5em;\r\n        line-height: 1.3;\r\n        margin-bottom: 15px;\r\n    }\r\n    \r\n    .area_3 .text_2{\r\n        font-size: 1.2em;\r\n        line-height: 1.8;\r\n    }\r\n    \r\n\r\n    .area_btn_transfer{\r\n        margin: auto;\r\n        width: 100%;\r\n        padding: 10px;\r\n        margin-top: 30px;\r\n    }\r\n    .deposit_btn{\r\n        position: relative;\r\n        display: block;\r\n        margin-left: auto;\r\n        width: 40%;\r\n    }\r\n    .deposit_btn img{\r\n        position: absolute;\r\n        right: 0;\r\n        width:100%;\r\n        max-width: 400px;\r\n    }\r\n    .withdraw_btn{\r\n        position: relative;\r\n        display: block;\r\n        margin-right: auto;\r\n        width: 40%;\r\n    }\r\n    .withdraw_btn img{\r\n        position: relative;\r\n        left: 0;\r\n        width:100%;\r\n        max-width: 400px;\r\n    }\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n    .h1text{\r\n        font-size: 2.2em;\r\n    }\r\n    .detailRight{\r\n        font-size: 1.2em;\r\n    }\r\n    .register_button{\r\n        width: 300px;\r\n        margin-top:0px;\r\n        height: 120px;\r\n        margin-left:0px;\r\n        float: unset;\r\n    }\r\n    .deposit_button{\r\n        height: 130px;\r\n        width: 130px;\r\n        margin-left:0px;\r\n        float: unset;\r\n        position: absolute;\r\n        margin-top: 0px;\r\n    }\r\n    .withdrow_button{\r\n        height: 130px;\r\n        width: 130px;\r\n        margin-left:0px;\r\n        float: unset;\r\n        position: absolute;\r\n        margin-top: 0px;\r\n        right: 16px;\r\n    }\r\n    \r\n    .container {\r\n        max-width: 960px;\r\n    }\r\n    \r\n    .home_slide .row {\r\n        display: flex;\r\n        flex-wrap: wrap;\r\n         margin-right: -15px;\r\n         margin-left: -15px;\r\n         width: unset;\r\n    }\r\n    .slide_and_btn{\r\n        padding-top:15px;\r\n        padding-left:15px;\r\n        padding-bottom: 15px;\r\n        padding-right: 15px;\r\n    }\r\n    .callcenter{\r\n        height: 350px;\r\n    }\r\n    .contentArea{\r\n      margin-top:0px;\r\n    }\r\n    .contentArea{\r\n        border: 1px solid #D10000;\r\n    }\r\n    .img_bank{\r\n        float: left;\r\n        margin-left:40px;\r\n        width: 428px;\r\n    }\r\n    .area_text_bank{\r\n        margin-left:80px;\r\n    }\r\n    .text_description_green2{\r\n        font-size: 1.5em;\r\n    }\r\n    .area_line{\r\n        float: left;\r\n        margin-left: 120px;\r\n        width: 100%;\r\n    }\r\n    \r\n   }\r\n\r\n@media screen and (min-width: 1024px) {\r\n    .register_button_area img{\r\n        width: 30%;\r\n        left: -30px;\r\n    }\r\n   }\r\n\r\n@media screen and (min-width: 1100px) {\r\n    .text_howtoplay{\r\n        margin-top: 0px;\r\n    }\r\n    .home_slide{\r\n        padding: 0px !important;\r\n        /* margin-top: -140px; */\r\n        z-index: 0;\r\n    }\r\n   }\r\n\r\n@media screen and (min-width: 1200px) {\r\n    .tt_img_df.sport{\r\n        width: 100%;\r\n        \r\n    }\r\n    \r\n    .tt_img_df.casino{\r\n        width: 100%;\r\n    }\r\n    \r\n    .tt_img_df.lotto{\r\n        width: 100%;\r\n    }\r\n    \r\n    .tt_img_df.game{\r\n       width: 100%;\r\n    }\r\n\r\n\r\n    .deposit_button img{\r\n        height: auto;\r\n        width: 154px;\r\n    }\r\n    .withdrow_button img{\r\n        height: auto;\r\n        width: 154px;\r\n    }\r\n    .h1text{\r\n        font-size: 2em;\r\n    }\r\n    .detailRight{\r\n        font-size: 1.4em;\r\n    }\r\n    .login_btn{\r\n        width: 320px;\r\n    }\r\n    .sport_img img{\r\n        width: 100%;\r\n        padding-right:5px;\r\n    }\r\n    .sport_img2 {\r\n        border-top:3px solid #BD9A23;\r\n    }\r\n    .sport_img2 img{\r\n        width: 100%;\r\n        padding-right:5px;\r\n    }\r\n    .casino_img img{\r\n        width: 100%;\r\n        padding-right:5px;\r\n    }\r\n    .casino_img2 {\r\n        border-top:3px solid #BD9A23;\r\n    }\r\n    .casino_img2 img{\r\n        width: 100%;\r\n        padding-right:5px;\r\n    }\r\n     .live_img img{\r\n         width: 100%;\r\n         padding-right:5px;\r\n         /* margin-left: 30px; */\r\n         /* float: right; */\r\n     }\r\n   \r\n    .input-text{\r\n        margin-top:15px;\r\n        margin-left:15px;\r\n        width: 308px;\r\n        float: left;\r\n    }\r\n    .register_button{\r\n        /* width: 355px; */\r\n        width: 326px;\r\n        margin-top:0px;\r\n        height: 130px;\r\n        margin-left:0px;\r\n        float: unset;\r\n    }\r\n    .deposit_button{\r\n        height: 150px;\r\n        width: 150px;\r\n        margin-left:0px;\r\n        float: unset;\r\n        position: absolute;\r\n        margin-top: 0px;\r\n    }\r\n    .withdrow_button{\r\n        height: 150px;\r\n        width: 150px;\r\n        margin-left:0px;\r\n        float: unset;\r\n        position: absolute;\r\n        margin-top: 0px;\r\n        right: 2px;\r\n    }\r\n\r\n    .container{\r\n        max-width: 1140px;\r\n    }\r\n    .home_slide{\r\n        padding-left:30px;\r\n        padding-right: 30px;\r\n        /* height: 430px; */\r\n    }\r\n    .contentHeader{\r\n        margin-top:0px;\r\n    }\r\n    .text_description_green2{\r\n        margin-top:30px;\r\n        font-size: 2.5em;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 1440px) {\r\n    .LR_area{\r\n       margin-top: -80px;\r\n    }\r\n    .LR_area .detail_Right{\r\n        margin-top: 80px;\r\n    }\r\n    .home_slide{\r\n        /* height: 430px; */\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 1600px) {\r\n    .home_slide{\r\n        /* border-left: 3px solid #1D1D1D;\r\n        border-right: 3px solid #1D1D1D;\r\n        border-bottom: 3px solid #1D1D1D; */\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHNFQUFzRTtJQUN0RSxzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLFdBQVc7SUFDWCxZQUFZO0lBQ1osMkJBQTJCO0lBQzNCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsNEJBQTRCOztBQUVoQzs7QUFHQTtJQUNJLHdEQUF3RDtJQUN4RCxzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLFdBQVc7SUFDWCxZQUFZO0lBQ1osMkJBQTJCO0FBQy9COztBQUNBO0lBQ0ksZUFBZTtBQUNuQjs7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLDRCQUE0QjtBQUNoQzs7QUFDQTtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksd0RBQXdEO0lBQ3hELHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsa0NBQWtDO0lBQ2xDLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLDJCQUEyQjtBQUMvQjs7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFDQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLDRCQUE0QjtBQUNoQzs7QUFDQTtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksWUFBWTtBQUNoQjs7QUFDQTtJQUNJLHdEQUF3RDtJQUN4RCxzQkFBc0I7SUFDdEIsNEJBQTRCO0lBQzVCLCtCQUErQjtJQUMvQixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLFlBQVk7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LGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osY0FBYztRQUNkLGFBQWE7UUFDYixlQUFlO1FBQ2YsWUFBWTtJQUNoQjtJQUNBO1FBQ0ksYUFBYTtRQUNiLFlBQVk7UUFDWixlQUFlO1FBQ2YsWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixlQUFlO0lBQ25CO0lBQ0E7UUFDSSxhQUFhO1FBQ2IsWUFBWTtRQUNaLGVBQWU7UUFDZixZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLGVBQWU7UUFDZixVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGlCQUFpQjtRQUNqQixtQkFBbUI7UUFDbkIsbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsZ0JBQWdCO0lBQ3BCO0FBQ0o7O0FBQ0E7SUFDSTtPQUNHLGlCQUFpQjtJQUNwQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxtQkFBbUI7SUFDdkI7QUFDSjs7QUFFQTtJQUNJO1FBQ0k7OzJDQUVtQztJQUN2QztBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uY2Fyb3VzZWwtaXRlbT5pbWd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmNvbnRlbnRBcmVhe1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0QxMDAwMDtcclxuICAgIG1pbi1oZWlnaHQ6IDk1MnB4O1xyXG4gICAgbWFyZ2luLXRvcDoxMHB4O1xyXG59XHJcbi50b3BfYmFubmVye1xyXG4gICAgbWluLWhlaWdodDogMTU0cHg7XHJcbn1cclxuXHJcbi5jb250ZW50X2FyZWF7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2NvbnRlbnQvYmFja2dyb3VuZF9jb250ZW50LmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHBhZGRpbmc6MHB4ICAxNXB4IDE1cHggMTVweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYm9yZGVyLXRvcDozcHggc29saWQgI0JEOUEyMztcclxuICAgIFxyXG59XHJcblxyXG5cclxuLmFyZWFfMXtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvY29udGVudC9iZ18xLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHBhZGRpbmc6MTVweCAxNXB4IDE1cHggMTVweDtcclxufVxyXG4uaW5wdXRfYXJlYV8xe1xyXG4gICAgbWFyZ2luLXRvcDoxNXB4O1xyXG59XHJcbi5hcmVhXzEgLmNvbnRhaW5lcntcclxuICAgIGJhY2tncm91bmQ6IHVuc2V0O1xyXG59XHJcblxyXG4uYXJlYV8xIC50ZXh0XzF7XHJcbiAgICBjb2xvcjogI0VERDgzQjtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCAjMzYzNjM2O1xyXG59XHJcbi5hcmVhXzEgIC50ZXh0XzJ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmFyZWFfMntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvY29udGVudC9iZ18yLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgYm90dG9tO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiA1MDBweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHBhZGRpbmc6MTVweCAxNXB4IDE1cHggMTVweDtcclxufVxyXG4uYXJlYV8yIC5jb250YWluZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiB1bnNldDtcclxufVxyXG4uYXJlYV8yIC50ZXh0XzF7XHJcbiAgICBjb2xvcjogI0Y2NjkwMDtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCAjMzYzNjM2O1xyXG59XHJcbi5hcmVhXzIgIC50ZXh0XzJ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4udGV4dF8xIC50ZXh0X3doaXRle1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5hcmVhXzN7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2NvbnRlbnQvYmdfMy5qcGcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogNDAwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBwYWRkaW5nOjE1cHggMTVweCAxNXB4IDE1cHg7XHJcbn1cclxuLmFyZWFfMyAuY29udGFpbmVye1xyXG4gICAgYmFja2dyb3VuZDogdW5zZXQ7XHJcbn1cclxuLmFyZWFfMyAudGV4dF8xe1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uYXJlYV8zICAudGV4dF8ye1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnJlZ2lzdGVyX2ltYWdlIGltZ3tcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogOTAlO1xyXG59XHJcblxyXG4ucmVnaXN0ZXJfaW1hZ2Uge1xyXG4gICBtYXJnaW4tdG9wOjIwcHg7XHJcbn1cclxuLnJlZ2lzdGVyX2J1dHRvbl9hcmVhIGltZ3tcclxuICAgIG1hcmdpbi10b3A6MTVweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgbGVmdDogLTE1cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLyogLnJlZ2lzdGVyX2J1dHRvbl9hcmVhIGltZ3tcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogNDAlO1xyXG4gICAgbGVmdDogLTM0cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn0gKi9cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLmFyZWFfNHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvY29udGVudC9iZ180LmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiA2MjRweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHBhZGRpbmc6MTVweCAxNXB4IDE1cHggMTVweDtcclxufVxyXG4uYXJlYV80IC5jb250YWluZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiB1bnNldDtcclxufVxyXG4uYXJlYV80IC50ZXh0XzF7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgXHJcbn1cclxuLndoeXBsYXlfYXJlYXtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGNsZWFyOiBib3RoO1xyXG59XHJcbi53aHlwbGF5X2FyZWEgaW1ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLndoeXBsYXlfaW1ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG59XHJcbi50ZXh0X2luc2lkZXtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC8qIGJvdHRvbTogLTYycHg7ICovXHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbn1cclxuLmltZ19pbnNpZGV7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5hcmVhXzV7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2NvbnRlbnQvYmdfNS5qcGcnKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogNDUwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBwYWRkaW5nOjE1cHggMTVweCAxNXB4IDE1cHg7XHJcbn1cclxuLmFyZWFfNSAuY29udGFpbmVye1xyXG4gICAgYmFja2dyb3VuZDogdW5zZXQ7XHJcbn1cclxuLmFyZWFfNSAudGV4dF8xe1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmFyZWFfNSAgLnRleHRfMntcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYXJlYV82e1xyXG4gICAgYmFja2dyb3VuZDogIzEwMTAxMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWluLWhlaWdodDogNDUwcHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBwYWRkaW5nOjE1cHggMTVweCAxNXB4IDE1cHg7XHJcbn1cclxuLmFyZWFfNiAuY29udGFpbmVye1xyXG4gICAgYmFja2dyb3VuZDogdW5zZXQ7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi5hcmVhX2J0bl90cmFuc2ZlcntcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG4uZGVwb3NpdF9idG57XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgd2lkdGg6MTAwJTtcclxufVxyXG4ud2l0aGRyYXdfYnRue1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uZGVwb3NpdF9idG4gaW1ne1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcclxufVxyXG4ud2l0aGRyYXdfYnRuIGltZ3tcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi5yZWdpc3Rlcl9kZXRhaWx7XHJcbiAgICBkaXNwbGF5OiBub25lOyBcclxufVxyXG4udGV4dC1jZW50ZXItbGluZSB7XHJcbiAgICB3aWR0aDogMTAwJTsgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMxOEZGMDA7IFxyXG4gICAgbGluZS1oZWlnaHQ6IDAuMWVtO1xyXG4gICAgbWFyZ2luOiAxMHB4IDAgMjBweDsgXHJcbiB9IFxyXG4gXHJcbi8qIC5pY29uX21lbnUge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweDtcclxufSAqL1xyXG5cclxuXHJcbiAudGV4dC1jZW50ZXItbGluZSBzcGFuIHsgXHJcbiAgICAgcGFkZGluZzowIDEwcHg7IFxyXG4gICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgIGZvbnQtc3R5bGU6aXRhbGljO1xyXG4gfVxyXG4uaG9tZV9zbGlkZXtcclxuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvYmdfc2xpZGUvU2xpZGUyLmpwZycpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyAqL1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgbWluLWhlaWdodDogMTUwcHg7XHJcbiAgICB0b3A6IDE4MHB4O1xyXG59XHJcbi5ob21lX3NsaWRle1xyXG4gICAgdG9wOnVuc2V0O1xyXG59XHJcbi5zbGlkZXNob3ctY29udGFpbmVye1xyXG4gICAgaGVpZ2h0OiAyMDBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5jb250ZW50SGVhZGVye1xyXG4gICAgYmFja2dyb3VuZDogI0QxMDAwMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDEuNmVtO1xyXG4gICBcclxufVxyXG4uY2FsbGNlbnRlcntcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvY29udGVudC9jYWxsY2VudGVyLmpwZycpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbn1cclxuLmFyZWFfYmFua3tcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtaW4taGVpZ2h0OiAxNDBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNjM2MzY7XHJcbn1cclxuLmltZ19iYW5re1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9jb250ZW50L2JhbmtpbmcucG5nJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSBhdXRvO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4uY29udGVudFRleHR7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDEuMWVtO1xyXG4gICAgcGFkZGluZzoxMHB4O1xyXG59XHJcbi5hcmVhX3RleHRfYmFua3tcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLXRvcDozMHB4O1xyXG59XHJcbi50ZXh0X2Jhbmt7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcbi50ZXh0X2Jhbmsye1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGNsZWFyOiBib3RoO1xyXG59XHJcblxyXG4uYXJlYV90ZXh0X2Rlc3tcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWluLWhlaWdodDogNDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgIHBhZGRpbmc6MCAyMHB4IDAgMjBweDtcclxufVxyXG4uaGVhZGVyMXtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmhlYWRlcjJ7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnRleHRfZGVzY3JpcHRpb257XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4udGV4dF9kZXNjcmlwdGlvbl9ncmVlbntcclxuICAgIG1hcmdpbi10b3A6MTVweDtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICBjb2xvcjojNUREODEyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi50ZXh0X2Rlc2NyaXB0aW9uX2dyZWVuMntcclxuICAgIG1hcmdpbi10b3A6NDhweDtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgY29sb3I6IzVERDgxMjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG4uYXJlYV9saW5le1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4ucGhvbmVfaW1hZ2V7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2NvbnRlbnQvdGVsLnBuZycpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGhlaWdodDogNTlweDtcclxuICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG4ubGluZV9pbWFnZXtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvY29udGVudC9hZGRmcmllbmQucG5nJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgaGVpZ2h0OiA0M3B4O1xyXG4gICAgd2lkdGg6IDE2OXB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAzOHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OjEwcHg7XHJcbn1cclxuXHJcbi5hcmVhX2JvdHRvbV9tZW51e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1pbi1oZWlnaHQ6IDMwMHB4O1xyXG4gICAgYm9yZGVyLXRvcDogIzM2MzYzNiBzb2xpZCAycHg7XHJcbiAgICBtYXJnaW4tdG9wOjE1cHg7XHJcbn1cclxuLnRleHRfYm90dG9tX21lbnV7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDozMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcclxufVxyXG5cclxuXHJcblxyXG4uaGlnaGxpZ2h0e1xyXG4gICAgY29sb3I6I0U4Q0YwMTtcclxufVxyXG4uaW5kZW50e1xyXG4gICAgdGV4dC1pbmRlbnQ6IDMwcHg7IG1hcmdpbi10b3A6IDAuNjNlbVxyXG59XHJcbi5pbmRlbnQye1xyXG4gICAgdGV4dC1pbmRlbnQ6IDBweDsgbWFyZ2luLXRvcDogMWVtXHJcbn1cclxuLmluZGVudDN7XHJcbiAgICB0ZXh0LWluZGVudDogMzBweDsgbWFyZ2luLXRvcDogMGVtXHJcbn1cclxuXHJcbi5uZXdzQXJlYXtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCByZWQ7ICovXHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAvKiBtaW4taGVpZ2h0OiAzMDBweDsgKi9cclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBhZGRpbmctbGVmdDo1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OjVweDtcclxufVxyXG5cclxuLnNwb3J0QXJlYXtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAvKiBib3JkZXI6IDJweCBzb2xpZCByZWQ7ICovXHJcbiAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAvKiBtaW4taGVpZ2h0OiAzMDBweDsgKi9cclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHBhZGRpbmctbGVmdDo1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OjVweDtcclxufVxyXG5cclxuLmNhcmROZXdze1xyXG5oZWlnaHQ6IDEwMCU7XHJcbmJvcmRlcjogMnB4IHNvbGlkICNEMkFFNzA7XHJcbn1cclxuLmltYWdlLW5ld3N7XHJcbiAgICBoZWlnaHQ6IGNhbGMoIDEwMCUgLSA3MHB4ICk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG59XHJcbi50ZXh0LW5ld3N7XHJcbiAgICBwYWRkaW5nOjEwcHg7XHJcbiAgICBib3JkZXItdG9wOjFweCBzb2xpZCAjRDJBRTcwO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xyXG4gICAgXHJcbn1cclxuXHJcblxyXG4uaG9tZV9zbGlkZSAucm93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtbXMtZmxleC13cmFwOiB3cmFwO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgIG1hcmdpbi1yaWdodDogdW5zZXQ7XHJcbiAgICAgbWFyZ2luLWxlZnQ6IHVuc2V0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zbGlkZV9hbmRfYnRuIC5jb2wtOHtcclxuICAgIGZsZXg6dW5zZXQ7XHJcbiAgICBtYXgtd2lkdGg6IHVuc2V0O1xyXG59XHJcbi5zbGlkZV9hbmRfYnRuIC5jb2wtNHtcclxuICAgIGZsZXg6dW5zZXQ7XHJcbiAgICBtYXgtd2lkdGg6IHVuc2V0O1xyXG4gICAgaGVpZ2h0OiAzMjBweDtcclxuICAgIFxyXG59XHJcblxyXG4ucmVnaXN0ZXJfYnV0dG9ue1xyXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9jb250ZW50L3JlZ2lzdGVyLnBuZycpOyAqL1xyXG4gICAgLyogYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjsgKi9cclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLXRvcDoxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIC8qIG1hcmdpbi1sZWZ0OjEwcHg7ICovXHJcbn1cclxuLnJlZ2lzdGVyX2J1dHRvbiBpbWd7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uZGVwb3NpdF9idXR0b257XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2NvbnRlbnQvZGVwb3NpdC5wbmcnKTsgKi9cclxuICAgIC8qIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTsgKi9cclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHdpZHRoOiAxNDBweDtcclxuICAgIGNsZWFyOmxlZnQ7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIC8qIG1hcmdpbi1sZWZ0OjEwcHg7ICovXHJcbn1cclxuLmRlcG9zaXRfYnV0dG9uIGltZ3tcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHdpZHRoOiAxNDBweDtcclxufVxyXG4ud2l0aGRyb3dfYnV0dG9ue1xyXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9jb250ZW50L1dJVEhEUkFXLnBuZycpOyAqL1xyXG4gICAgLyogYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlOyAqL1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6IDE0MHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICByaWdodDoxNXB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcbi53aXRoZHJvd19idXR0b24gaW1ne1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6IDE0MHB4O1xyXG59XHJcblxyXG4udGV4dF9ob3d0b3BsYXl7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6MS41ZW07XHJcbiAgICBtYXJnaW4tbGVmdDoxNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OjE1cHg7XHJcbiAgICAvKiBtYXJnaW4tdG9wOjE1cHg7ICovXHJcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzE4RkYwMDtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuLmltYWdlX2hvd3RvcGxheXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMHB4IDE1cHggMCAxNXB4O1xyXG4gICAgbWluLWhlaWdodDogMTAwcHg7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5sb2dpbl9hcmVhe1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLmxvZ2luX2J0bntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRDhGMDA7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIHdpZHRoOiAxNDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICBtYXJnaW4tbGVmdDoxNXB4O1xyXG4gICAgbWFyZ2luLXRvcDoxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLmlucHV0LXRleHR7XHJcbiAgICBtYXJnaW4tdG9wOjE1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDoxNXB4O1xyXG4gICAgd2lkdGg6IGNhbGMoIDEwMCUgLSAzMHB4KTtcclxufVxyXG5cclxuLm5vLXBhZGRpbmd7XHJcbiAgICAvKiBwYWRkaW5nOnVuc2V0OyAqL1xyXG4gICAgZmxleC1ncm93OiB1bnNldDtcclxuICAgIGZsZXgtYmFzaXM6dW5zZXQ7XHJcbn1cclxuXHJcbi5zcG9ydF9idXR0b257XHJcbiAgICBtYXJnaW4tdG9wOjE1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6MTVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcbi5zcG9ydF9pbWcgaW1ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG4uc3BvcnRfaW1nMiBpbWd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcbi5jYXNpbm9faW1nIGltZ3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiB9XHJcbiAuY2FzaW5vX2ltZzIgaW1ne1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuIH1cclxuIC5saXZlX2ltZyBpbWd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiB9XHJcblxyXG4uZGl2TWFpbkNvbnRlbnR7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDoxNXB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5oMXRleHR7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5kZXRhaWxSaWdodHtcclxuICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCAjMUQxRDFEO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogY2FsYyggMTAwJSAtIDMwcHgpO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tbGVmdDoxNXB4O1xyXG59XHJcbi5kZXRhaWxMZWZ0e1xyXG5cclxuICAgIG1hcmdpbi1sZWZ0OjE1cHg7XHJcbiAgICB3aWR0aDogY2FsYyggMTAwJSAtIDMwcHgpO1xyXG4gICAgbWFyZ2luLXRvcDoxNXB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuLmhvd3RvcGxheV9jYXNpbm9faW1nIGltZ3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5ob3d0b3BsYXlfZm9vdGJhbGxfaW1nIGltZ3tcclxuICAgIG1hcmdpbi10b3A6MTVweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5iYW5raW5nX2FyZWF7XHJcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50dF9pbWdfZGYuc3BvcnR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcclxufVxyXG5cclxuLnR0X2ltZ19kZi5jYXNpbm97XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcclxufVxyXG5cclxuLnR0X2ltZ19kZi5sb3R0b3tcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG59XHJcblxyXG4udHRfaW1nX2RmLmdhbWV7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcclxufVxyXG5cclxuLnR0X2ltZ19ob3Zlci5zcG9ydHtcclxuICAgIHdpZHRoOiAxMDAlO21pbi1oZWlnaHQ6IDI1NXB4O1xyXG59XHJcblxyXG4uZGV0YWlsX0xlZnR7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5kZXRhaWxfTGVmdCBpbWd7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLmNvbnRlbnRfdGV4dHtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzM2MzYzNjtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogLTM2cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uTFJfYXJlYXtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcblxyXG5cclxuLmRldGFpbF9SaWdodHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXdlaWdodDogMTAwO1xyXG59XHJcbi5jb250cm9sLWdyb3Vwe1xyXG4gICAgbWFyZ2luLXRvcDoxNXB4O1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzNzVweCkge1xyXG5cclxuICAgIC5zcG9ydF9pbWcgaW1ne1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICB9XHJcbiAgICAuc3BvcnRfaW1nMiBpbWd7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICB9XHJcbiAgICAuY2FzaW5vX2ltZyBpbWd7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgICB9XHJcbiAgICAgLmNhc2lub19pbWcyIGltZ3tcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICB9XHJcbiAgICAgLmxpdmVfaW1nIGltZ3tcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgIH1cclxuXHJcbiAgICAucmVnaXN0ZXJfYnV0dG9ue1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICB3aWR0aDozMjZweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDoxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5kZXBvc2l0X2J1dHRvbntcclxuICAgICAgICBoZWlnaHQ6IDE2MHB4O1xyXG4gICAgICAgIHdpZHRoOiAxNTNweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDoxMHB4O1xyXG4gICAgfVxyXG4gICAgLndpdGhkcm93X2J1dHRvbntcclxuICAgICAgICBoZWlnaHQ6IDE2MHB4O1xyXG4gICAgICAgIHdpZHRoOiAxNTNweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6MHB4O1xyXG4gICAgfVxyXG4gICAgLmhvd3RvcGxheV9jYXNpbm9faW1nIGltZ3tcclxuICAgICAgICB3aWR0aDogMzMycHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6NXB4O1xyXG4gICAgfVxyXG4gICAgLmhvd3RvcGxheV9mb290YmFsbF9pbWcgaW1ne1xyXG4gICAgICAgIHdpZHRoOiAzMzJweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDo1cHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0MjVweCkge1xyXG4gICAgLnJlZ2lzdGVyX2J1dHRvbntcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6MzVweDtcclxuICAgIH1cclxuICAgIC5ob3d0b3BsYXlfY2FzaW5vX2ltZyBpbWd7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGNhbGMoIDUwJSAtIDE2NnB4KTtcclxuICAgIH1cclxuICAgIC5ob3d0b3BsYXlfZm9vdGJhbGxfaW1nIGltZ3tcclxuICAgICAgICBtYXJnaW4tbGVmdDogY2FsYyggNTAlIC0gMTY2cHgpO1xyXG4gICAgfVxyXG4gICAgLnNsaWRlX2FuZF9idG4gLmNvbC00e1xyXG4gICAgICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUwMHB4KSB7XHJcbiAgICAucmVnaXN0ZXJfYnV0dG9uX2FyZWEgaW1ne1xyXG4gICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgbGVmdDogLTI1cHg7XHJcbiAgICB9XHJcbiAgICAuZGVwb3NpdF9idG57XHJcbiAgICAgICAgd2lkdGg6OTUlO1xyXG4gICAgfVxyXG4gICAgLndpdGhkcmF3X2J0bntcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IHVuc2V0O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICB9XHJcbiAgICAucmVnaXN0ZXJfYnV0dG9ue1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBtYXJnaW4tbGVmdDogY2FsYyggNTAlIC0gMTYwcHgpO1xyXG4gICAgfVxyXG4gICAgLmRlcG9zaXRfYnV0dG9ue1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICB3aWR0aDogMjIwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6MHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBjYWxjKCA1MCUgLSAxNzRweCk7XHJcbiAgICB9XHJcbiAgICAud2l0aGRyb3dfYnV0dG9ue1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICB3aWR0aDogMjIwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6MHB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogY2FsYyggNTAlIC0gMjYwcHgpO1xyXG4gICAgfVxyXG4gICAgLnNsaWRlX2FuZF9idG4gLmNvbC00e1xyXG4gICAgICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDU0MHB4KSB7XHJcbiAgICAuZGVwb3NpdF9idG57XHJcbiAgICAgICAgd2lkdGg6OTAlO1xyXG4gICAgfVxyXG4gICAgLndpdGhkcmF3X2J0bntcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IHVuc2V0O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICB9XHJcbiAgICAucmVnaXN0ZXJfYnV0dG9ue1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgIH1cclxuICAgIC5kZXBvc2l0X2J1dHRvbntcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgd2lkdGg6IDE0MXB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBjYWxjKCA1MCUgLSAxNzRweCk7XHJcbiAgICB9XHJcbiAgICAud2l0aGRyb3dfYnV0dG9ue1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICB3aWR0aDogMTQxcHg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBjYWxjKCA1MCUgLSAxODRweCk7XHJcbiAgICB9XHJcbiAgICAuc2xpZGVfYW5kX2J0biAuY29sLTR7XHJcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTgwcHgpIHtcclxuICAgIC5yZWdpc3Rlcl9idXR0b257XHJcbiAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICBtYXJnaW4tYm90dG9tOjBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmRlcG9zaXRfYnV0dG9ue1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICB3aWR0aDogMTQxcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDoxNXB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBjYWxjKCA1MCUgLSAxNzRweCk7XHJcbiAgICB9XHJcbiAgICAud2l0aGRyb3dfYnV0dG9ue1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICB3aWR0aDogMTQxcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDoxNXB4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogY2FsYyggNTAlIC0gMTU2cHgpO1xyXG4gICAgfVxyXG4gICAgLnNsaWRlX2FuZF9idG4gLmNvbC00e1xyXG4gICAgICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY0MHB4KSB7XHJcbiAgICAuZGVwb3NpdF9idG57XHJcbiAgICAgICAgd2lkdGg6ODUlO1xyXG4gICAgfVxyXG4gICAgLndpdGhkcmF3X2J0bntcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IHVuc2V0O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiA4NSU7XHJcbiAgICB9XHJcbiAgICAuaW1hZ2VfaG93dG9wbGF5e1xyXG4gICAgICAgIHBhZGRpbmc6dW5zZXQ7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgICAudGV4dF9ob3d0b3BsYXl7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgIH1cclxuICAgIC5sb2dpbl9hcmVhe1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMTVweDtcclxuICAgIH1cclxuICAgIC5jb250YWluZXJ7XHJcbiAgICAgICAgLyogbWF4LXdpZHRoOiB1bnNldDsgKi9cclxuICAgICAgICBtYXgtd2lkdGg6IDY0MHB4O1xyXG4gICAgfVxyXG4gICAgLmhvbWVfc2xpZGV7XHJcbiAgICAgICAgLyogcGFkZGluZy1sZWZ0OjMwcHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDoxNXB4OyAqL1xyXG4gICAgfVxyXG4gICAgLmhvbWVfc2xpZGUgLnJvdyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAtbXMtZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgbWFyZ2luLXJpZ2h0OiAtMTVweDtcclxuICAgICAgICAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xyXG4gICAgICAgICB3aWR0aDogdW5zZXQ7XHJcbiAgICB9XHJcbiAgICAucmVnaXN0ZXJfYnV0dG9ue1xyXG4gICAgICAgIHdpZHRoOiAxOTRweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA3MXB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjBweDtcclxuICAgICAgICBmbG9hdDogdW5zZXQ7XHJcbiAgICB9XHJcbiAgICAuZGVwb3NpdF9idXR0b257XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiA5NXB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjBweDtcclxuICAgICAgICBmbG9hdDogdW5zZXQ7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgfVxyXG4gICAgLmRlcG9zaXRfYnV0dG9uIGltZ3tcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgd2lkdGg6IDk1cHg7XHJcbiAgICB9XHJcbiAgICAud2l0aGRyb3dfYnV0dG9ue1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICB3aWR0aDogOTVweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDoxMHB4O1xyXG4gICAgICAgIGZsb2F0OiB1bnNldDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IDhweDtcclxuICAgICAgICBsZWZ0OiA5MHB4O1xyXG4gICAgfVxyXG4gICAgLndpdGhkcm93X2J1dHRvbiBpbWd7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiA5NXB4O1xyXG4gICAgfVxyXG4gICAgLnNsaWRlX2FuZF9idG4gLmNvbC04e1xyXG4gICAgICAgIGZsZXg6IDAgMCA2Ni42NjY2NjclO1xyXG4gICAgICAgIG1heC13aWR0aDogNjYuNjY2NjY3JTtcclxuICAgICAgICAvKiBwYWRkaW5nOnVuc2V0OyAgKi9cclxuICAgIH1cclxuICAgIC5zbGlkZV9hbmRfYnRuIC5jb2wtNHtcclxuICAgICAgICBmbGV4OiAwIDAgMzMuMzMzMzMzJTtcclxuICAgICAgICBtYXgtd2lkdGg6IDMzLjMzMzMzMyU7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIHBhZGRpbmc6dW5zZXQ7XHJcbiAgICAgICAgLyogcGFkZGluZzp1bnNldDsgICovXHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAudG9wX2Jhbm5lcntcclxuICAgICAgICBtaW4taGVpZ2h0OiB1bnNldDtcclxuICAgIH1cclxuICAgIC5uby1wYWRkaW5ne1xyXG4gICAgICAgIHBhZGRpbmc6dW5zZXQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jb250ZW50X3RleHR7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6IzM2MzYzNjtcclxuICAgICAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB0b3A6IC00MHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLmRldGFpbF9MZWZ0IGltZ3tcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuaGVhZGVyX2JhciBpbWd7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgICAucmVnaXN0ZXJfYnV0dG9uX2FyZWEgaW1ne1xyXG4gICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgICAgbGVmdDogLTMwcHg7XHJcbiAgICB9XHJcbiAgICAuYXJlYV9idG5fdHJhbnNmZXJ7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAuZGVwb3NpdF9idG57XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgIHdpZHRoOjc4JTtcclxuICAgIH1cclxuICAgIC5kZXBvc2l0X2J0biBpbWd7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgIH1cclxuICAgIC53aXRoZHJhd19idG57XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogdW5zZXQ7XHJcbiAgICAgICAgd2lkdGg6IDc4JTtcclxuICAgIH1cclxuICAgIC53aXRoZHJhd19idG4gaW1ne1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC5kZXRhaWxfTGVmdHtcclxuICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmRldGFpbF9SaWdodHtcclxuICAgICAgICB3aWR0aDogY2FsYyggODAlIC0gMzBweCk7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6MzBweDtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAuc3BvcnRfaW1nIGltZ3tcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiB1bnNldDtcclxuICAgIH1cclxuICAgIC5zcG9ydF9pbWcyIGltZ3tcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiB1bnNldDtcclxuICAgIH1cclxuICAgIC5jYXNpbm9faW1nIGltZ3tcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgIH1cclxuICAgICAuY2FzaW5vX2ltZzIgaW1ne1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgfVxyXG4gICAgIC5saXZlX2ltZyBpbWd7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiB1bnNldDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IHVuc2V0O1xyXG4gICAgIH1cclxuXHJcblxyXG5cclxuICAgIC5kZXRhaWxSaWdodHtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoIDEwMCUgLSAzNTJweCkgO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOjMwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICB9XHJcbiAgICAuZGV0YWlsTGVmdHtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICB3aWR0aDogMzMycHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICAuYmFua2luZ19hcmVhe1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAuYmFua2luZ19pbWd7XHJcbiAgICAgICAgbWFyZ2luLXRvcDoxMHB4O1xyXG4gICAgfVxyXG4gICAgLmJhbmtpbmdfaW1nIGltZ3tcclxuICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgfVxyXG4gICAgLmhvd3RvcGxheV9jYXNpbm9faW1ne1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgfVxyXG4gICAgLmhvd3RvcGxheV9mb290YmFsbF9pbWd7XHJcbiAgICAgICAgLyogbWFyZ2luLXRvcDoxMHB4OyAqL1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAubm8tcGFkZGluZ3tcclxuICAgICAgICBmbGV4LWJhc2lzOjA7XHJcbiAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgfVxyXG4gICAgLmxvZ2luX2J0bntcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkQ4RjAwO1xyXG4gICAgICAgIGNvbG9yOndoaXRlO1xyXG4gICAgICAgIHdpZHRoOiAxNDBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6MTVweDtcclxuICAgICAgICBtYXJnaW4tdG9wOjE1cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIGhlaWdodDogMzhweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDo2cHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5pbnB1dC10ZXh0e1xyXG4gICAgICAgIG1hcmdpbi10b3A6MTVweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDoxNXB4O1xyXG4gICAgICAgIHdpZHRoOiAyNTBweDtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLmNvbnRhaW5lcntcclxuICAgICAgICAvKiBtYXgtd2lkdGg6IHVuc2V0OyAqL1xyXG4gICAgICAgIG1heC13aWR0aDogNzY4cHg7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAucmVnaXN0ZXJfYnV0dG9ue1xyXG4gICAgICAgIHdpZHRoOiAyMzBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOjBweDtcclxuICAgICAgICBoZWlnaHQ6IDg1cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6MHB4O1xyXG4gICAgICAgIGZsb2F0OiB1bnNldDtcclxuICAgIH1cclxuICAgIC5kZXBvc2l0X2J1dHRvbntcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgd2lkdGg6IDExMHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjBweDtcclxuICAgICAgICBmbG9hdDogdW5zZXQ7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgfVxyXG4gICAgLmRlcG9zaXRfYnV0dG9uIGltZ3tcclxuICAgICAgICB3aWR0aDogMTEwcHg7XHJcbiAgICB9XHJcbiAgICAud2l0aGRyb3dfYnV0dG9ue1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICB3aWR0aDogMTEwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6MHB4O1xyXG4gICAgICAgIGZsb2F0OiB1bnNldDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgbGVmdDogdW5zZXQ7XHJcbiAgICB9XHJcbiAgICAud2l0aGRyb3dfYnV0dG9uIGltZ3tcclxuICAgICAgICB3aWR0aDogMTEwcHg7XHJcbiAgICB9XHJcbiAgICAuc2xpZGVfYW5kX2J0biAuY29sLTh7XHJcbiAgICAgICAgZmxleDogMCAwIDY2LjY2NjY2NyU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA2Ni42NjY2NjclO1xyXG4gICAgICAgIC8qIHBhZGRpbmc6dW5zZXQ7ICAqL1xyXG4gICAgfVxyXG4gICAgLnNsaWRlX2FuZF9idG4gLmNvbC00e1xyXG4gICAgICAgIGZsZXg6IDAgMCAzMy4zMzMzMzMlO1xyXG4gICAgICAgIG1heC13aWR0aDogMzMuMzMzMzMzJTtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgcGFkZGluZzp1bnNldDtcclxuICAgICAgICAvKiBwYWRkaW5nOnVuc2V0OyAgKi9cclxuICAgIH1cclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpe1xyXG4gICAgLnRleHRfaG93dG9wbGF5e1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjBweDtcclxuICAgIH1cclxuXHJcbiAgICAubG9naW5fYnRue1xyXG4gICAgICAgIHdpZHRoOiAyNDBweDtcclxuICAgIH1cclxuICAgXHJcbiAgICAuaW5wdXQtdGV4dHtcclxuICAgICAgICBtYXJnaW4tdG9wOjE1cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6MTVweDtcclxuICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgLnJlZ2lzdGVyX2J1dHRvbntcclxuICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDowcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMjBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDowcHg7XHJcbiAgICAgICAgZmxvYXQ6IHVuc2V0O1xyXG4gICAgfVxyXG4gICAgLmRlcG9zaXRfYnV0dG9ue1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICB3aWR0aDogMTMwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6MHB4O1xyXG4gICAgICAgIGZsb2F0OiB1bnNldDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgfVxyXG4gICAgLmRlcG9zaXRfYnV0dG9uIGltZ3tcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgd2lkdGg6IDEzMHB4O1xyXG4gICAgfVxyXG4gICAgLndpdGhkcm93X2J1dHRvbntcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgd2lkdGg6IDEzMHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjBweDtcclxuICAgICAgICBmbG9hdDogdW5zZXQ7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICByaWdodDogMTBweDtcclxuICAgIH1cclxuICAgIC53aXRoZHJvd19idXR0b24gaW1ne1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICB3aWR0aDogMTMwcHg7XHJcbiAgICB9XHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDk2MHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDAwcHgpIHtcclxuICAgIC50ZXh0X2luc2lkZXtcclxuICAgICAgICBib3R0b206IC02MnB4O1xyXG4gICAgfVxyXG4gICAgLmFyZWFfMXtcclxuICAgICAgICBtaW4taGVpZ2h0OiA1NTBweDtcclxuICAgIH1cclxuICAgIC5hcmVhXzJ7XHJcbiAgICAgICAgbWluLWhlaWdodDogNTUwcHg7XHJcbiAgICB9XHJcbiAgICAuYXJlYV8xIC50ZXh0XzF7XHJcbiAgICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMztcclxuICAgIH1cclxuICAgIC5hcmVhXzEgIC50ZXh0XzJ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjtcclxuICAgIH1cclxuICAgIC5hcmVhXzIgLnRleHRfMXtcclxuICAgICAgICBmb250LXNpemU6IDIuNWVtO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjM7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIH1cclxuICAgIC5hcmVhXzIgLnRleHRfMntcclxuICAgICAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjg7XHJcbiAgICB9XHJcbiAgICAuYXJlYV8ze1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDcwMHB4O1xyXG4gICAgfVxyXG4gICAgLmFyZWFfMyAudGV4dF8xe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMi41ZW07XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMztcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuYXJlYV8zIC50ZXh0XzJ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS44O1xyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgLmFyZWFfYnRuX3RyYW5zZmVye1xyXG4gICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICB9XHJcbiAgICAuZGVwb3NpdF9idG57XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICB9XHJcbiAgICAuZGVwb3NpdF9idG4gaW1ne1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICB9XHJcbiAgICAud2l0aGRyYXdfYnRue1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgIH1cclxuICAgIC53aXRoZHJhd19idG4gaW1ne1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAuaDF0ZXh0e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMi4yZW07XHJcbiAgICB9XHJcbiAgICAuZGV0YWlsUmlnaHR7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgIH1cclxuICAgIC5yZWdpc3Rlcl9idXR0b257XHJcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6MHB4O1xyXG4gICAgICAgIGhlaWdodDogMTIwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6MHB4O1xyXG4gICAgICAgIGZsb2F0OiB1bnNldDtcclxuICAgIH1cclxuICAgIC5kZXBvc2l0X2J1dHRvbntcclxuICAgICAgICBoZWlnaHQ6IDEzMHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMzBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDowcHg7XHJcbiAgICAgICAgZmxvYXQ6IHVuc2V0O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICB9XHJcbiAgICAud2l0aGRyb3dfYnV0dG9ue1xyXG4gICAgICAgIGhlaWdodDogMTMwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEzMHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjBweDtcclxuICAgICAgICBmbG9hdDogdW5zZXQ7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICByaWdodDogMTZweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA5NjBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmhvbWVfc2xpZGUgLnJvdyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAtbXMtZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgbWFyZ2luLXJpZ2h0OiAtMTVweDtcclxuICAgICAgICAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xyXG4gICAgICAgICB3aWR0aDogdW5zZXQ7XHJcbiAgICB9XHJcbiAgICAuc2xpZGVfYW5kX2J0bntcclxuICAgICAgICBwYWRkaW5nLXRvcDoxNXB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDoxNXB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICB9XHJcbiAgICAuY2FsbGNlbnRlcntcclxuICAgICAgICBoZWlnaHQ6IDM1MHB4O1xyXG4gICAgfVxyXG4gICAgLmNvbnRlbnRBcmVhe1xyXG4gICAgICBtYXJnaW4tdG9wOjBweDtcclxuICAgIH1cclxuICAgIC5jb250ZW50QXJlYXtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjRDEwMDAwO1xyXG4gICAgfVxyXG4gICAgLmltZ19iYW5re1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjQwcHg7XHJcbiAgICAgICAgd2lkdGg6IDQyOHB4O1xyXG4gICAgfVxyXG4gICAgLmFyZWFfdGV4dF9iYW5re1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjgwcHg7XHJcbiAgICB9XHJcbiAgICAudGV4dF9kZXNjcmlwdGlvbl9ncmVlbjJ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIH1cclxuICAgIC5hcmVhX2xpbmV7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEyMHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgIH1cclxuICAgXHJcbiAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gICAgLnJlZ2lzdGVyX2J1dHRvbl9hcmVhIGltZ3tcclxuICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAgIGxlZnQ6IC0zMHB4O1xyXG4gICAgfVxyXG4gICB9XHJcbiAgIFxyXG4gICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMTAwcHgpIHtcclxuICAgIC50ZXh0X2hvd3RvcGxheXtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICB9XHJcbiAgICAuaG9tZV9zbGlkZXtcclxuICAgICAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcclxuICAgICAgICAvKiBtYXJnaW4tdG9wOiAtMTQwcHg7ICovXHJcbiAgICAgICAgei1pbmRleDogMDtcclxuICAgIH1cclxuICAgfVxyXG4gICBcclxuICAgXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gICAgLnR0X2ltZ19kZi5zcG9ydHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnR0X2ltZ19kZi5jYXNpbm97XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC50dF9pbWdfZGYubG90dG97XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC50dF9pbWdfZGYuZ2FtZXtcclxuICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAuZGVwb3NpdF9idXR0b24gaW1ne1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICB3aWR0aDogMTU0cHg7XHJcbiAgICB9XHJcbiAgICAud2l0aGRyb3dfYnV0dG9uIGltZ3tcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgd2lkdGg6IDE1NHB4O1xyXG4gICAgfVxyXG4gICAgLmgxdGV4dHtcclxuICAgICAgICBmb250LXNpemU6IDJlbTtcclxuICAgIH1cclxuICAgIC5kZXRhaWxSaWdodHtcclxuICAgICAgICBmb250LXNpemU6IDEuNGVtO1xyXG4gICAgfVxyXG4gICAgLmxvZ2luX2J0bntcclxuICAgICAgICB3aWR0aDogMzIwcHg7XHJcbiAgICB9XHJcbiAgICAuc3BvcnRfaW1nIGltZ3tcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OjVweDtcclxuICAgIH1cclxuICAgIC5zcG9ydF9pbWcyIHtcclxuICAgICAgICBib3JkZXItdG9wOjNweCBzb2xpZCAjQkQ5QTIzO1xyXG4gICAgfVxyXG4gICAgLnNwb3J0X2ltZzIgaW1ne1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6NXB4O1xyXG4gICAgfVxyXG4gICAgLmNhc2lub19pbWcgaW1ne1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6NXB4O1xyXG4gICAgfVxyXG4gICAgLmNhc2lub19pbWcyIHtcclxuICAgICAgICBib3JkZXItdG9wOjNweCBzb2xpZCAjQkQ5QTIzO1xyXG4gICAgfVxyXG4gICAgLmNhc2lub19pbWcyIGltZ3tcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OjVweDtcclxuICAgIH1cclxuICAgICAubGl2ZV9pbWcgaW1ne1xyXG4gICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgcGFkZGluZy1yaWdodDo1cHg7XHJcbiAgICAgICAgIC8qIG1hcmdpbi1sZWZ0OiAzMHB4OyAqL1xyXG4gICAgICAgICAvKiBmbG9hdDogcmlnaHQ7ICovXHJcbiAgICAgfVxyXG4gICBcclxuICAgIC5pbnB1dC10ZXh0e1xyXG4gICAgICAgIG1hcmdpbi10b3A6MTVweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDoxNXB4O1xyXG4gICAgICAgIHdpZHRoOiAzMDhweDtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgIH1cclxuICAgIC5yZWdpc3Rlcl9idXR0b257XHJcbiAgICAgICAgLyogd2lkdGg6IDM1NXB4OyAqL1xyXG4gICAgICAgIHdpZHRoOiAzMjZweDtcclxuICAgICAgICBtYXJnaW4tdG9wOjBweDtcclxuICAgICAgICBoZWlnaHQ6IDEzMHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OjBweDtcclxuICAgICAgICBmbG9hdDogdW5zZXQ7XHJcbiAgICB9XHJcbiAgICAuZGVwb3NpdF9idXR0b257XHJcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6MHB4O1xyXG4gICAgICAgIGZsb2F0OiB1bnNldDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgfVxyXG4gICAgLndpdGhkcm93X2J1dHRvbntcclxuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDowcHg7XHJcbiAgICAgICAgZmxvYXQ6IHVuc2V0O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgICAgcmlnaHQ6IDJweDtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGFpbmVye1xyXG4gICAgICAgIG1heC13aWR0aDogMTE0MHB4O1xyXG4gICAgfVxyXG4gICAgLmhvbWVfc2xpZGV7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OjMwcHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICAgICAgICAvKiBoZWlnaHQ6IDQzMHB4OyAqL1xyXG4gICAgfVxyXG4gICAgLmNvbnRlbnRIZWFkZXJ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDowcHg7XHJcbiAgICB9XHJcbiAgICAudGV4dF9kZXNjcmlwdGlvbl9ncmVlbjJ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDozMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMi41ZW07XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTQ0MHB4KSB7XHJcbiAgICAuTFJfYXJlYXtcclxuICAgICAgIG1hcmdpbi10b3A6IC04MHB4O1xyXG4gICAgfVxyXG4gICAgLkxSX2FyZWEgLmRldGFpbF9SaWdodHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA4MHB4O1xyXG4gICAgfVxyXG4gICAgLmhvbWVfc2xpZGV7XHJcbiAgICAgICAgLyogaGVpZ2h0OiA0MzBweDsgKi9cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTYwMHB4KSB7XHJcbiAgICAuaG9tZV9zbGlkZXtcclxuICAgICAgICAvKiBib3JkZXItbGVmdDogM3B4IHNvbGlkICMxRDFEMUQ7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAzcHggc29saWQgIzFEMUQxRDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgIzFEMUQxRDsgKi9cclxuICAgIH1cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-slick-carousel class=\"carousel\" \n#slickModal=\"slick-carousel\" \n[config]=\"slideConfig\" >\n    <div ngxSlickItem *ngFor=\"let slide of imageUrls\" class=\"slide\">\n    <img src=\"{{ slide.img }}\" alt=\"\" width=\"100%\">\n    </div>\n</ngx-slick-carousel>\n\n\n<div _ngcontent-wsy-c3=\"\" class=\"\">\n    <div _ngcontent-wsy-c3=\"\" class=\"container\" style=\"background: unset;\">\n        <div _ngcontent-wsy-c3=\"\" class=\"header_bar\"><img _ngcontent-wsy-c3=\"\" src=\"/assets/images/header/header_bar.png\"></div>\n    </div>\n    <div _ngcontent-wsy-c3=\"\" class=\"container\">\n        <div _ngcontent-wsy-c3=\"\" class=\"row sport_button\">\n            <div _ngcontent-wsy-c3=\"\" class=\"col no-padding top_banner aos-init aos-animate\" data-aos=\"fade-right\" data-aos-delay=\"200\" data-aos-once=\"true\" style=\"overflow: hidden; \">\n                <div _ngcontent-wsy-c3=\"\" class=\"sport_img tt_l tt_col_c banner_hover Parent fadeInLeft animated\"><img _ngcontent-wsy-c3=\"\" class=\"tt_img_df\" src=\"assets/images/content/step_1.jpg\"></div>\n            </div>\n            <div _ngcontent-wsy-c3=\"\" class=\"col no-padding top_banner aos-init aos-animate\" data-aos=\"fade-right\" data-aos-delay=\"300\" data-aos-once=\"true\" style=\"overflow: hidden; \">\n                <div _ngcontent-wsy-c3=\"\" class=\"casino_img tt_l tt_col_c banner_hover Parent fadeInLeft animated\"><img _ngcontent-wsy-c3=\"\" class=\"tt_img_df\" src=\"assets/images/content/step_2.jpg\"></div>\n            </div>\n            <div _ngcontent-wsy-c3=\"\" class=\"col no-padding top_banner aos-init aos-animate\" data-aos=\"fade-right\" data-aos-delay=\"400\" data-aos-once=\"true\" style=\"overflow: hidden; \">\n                <div _ngcontent-wsy-c3=\"\" class=\"live_img tt_l tt_col_c banner_hover Parent fadeInLeft animated\"><img _ngcontent-wsy-c3=\"\" class=\"tt_img_df\" src=\"assets/images/content/step_3.jpg\"></div>\n            </div>\n            <div _ngcontent-wsy-c3=\"\" class=\"col no-padding top_banner aos-init aos-animate\" data-aos=\"fade-right\" data-aos-delay=\"500\" data-aos-once=\"true\" style=\"overflow: hidden; \">\n                <div _ngcontent-wsy-c3=\"\" class=\"live_img tt_l tt_col_c banner_hover Parent fadeInLeft animated\"><img _ngcontent-wsy-c3=\"\" class=\"tt_img_df\" src=\"assets/images/content/step_4.jpg\"></div>\n            </div>\n        </div>\n        <div _ngcontent-wsy-c3=\"\" class=\"content_area\">\n            <div _ngcontent-wsy-c3=\"\" class=\"content_header\">&nbsp;</div>\n            <div _ngcontent-wsy-c3=\"\" class=\"content_text\">รวดเร็ว ทันใจ ปลอดภัย 24 ชั่วโมง</div>\n            <div _ngcontent-wsy-c3=\"\" class=\"LR_area\">\n                <div _ngcontent-wsy-c3=\"\" class=\"detail_Left\"><img _ngcontent-wsy-c3=\"\" src=\"assets/images/content/banne_contactr.png\"></div>\n                <div _ngcontent-wsy-c3=\"\" class=\"detail_Right\"> แทงบอลออนไลน์ รูปแบบใหม่ไม่ผ่านเอเย่นต์และให้ราคาน้ำดีที่สุด เปิดบอลให้เล่นเยอะที่สุด มีทั้งบอลเดี่ยว บอลเต็ง บอลชุด บอลสเต็ป แทงบอล Live แทงสเต็ป Live แทงบอลราคาพูลแบบต่างประเทศ พร้อมทั้งรับเดิมพันคาสิโนทุกประเภท สามารถเปิดให้บริการยูสเซอร์โดยไม่ต้องผ่านนายหน้า ทำให้ลูกค้ามั่นใจได้ว่าจะได้ค่าคอมมิชชั่นสูงสุดแน่นอน มีการ เดิมพันที่หลากหลายไม่ว่าจะเป็นฟุตบอล บาสเก็ตบอล เบสบอล เทนนิสไก่ชนและเกมส์ชั้นนำระดับโลกอีกมากมายจาก SAGame , ViVo Game ที่เราได้ยกมาให้ลูกค้าทุกท่านได้เลือกเดิมพันและสนุกกันอีกทั้งด้านบริการต่างๆ เรามีทีมงาน บริการ Call Center ที่ใส่ใจลูกค้าทุกท่าน ไม่ว่าจะแจ้งฝาก-ถอน หรือแจ้งปัญหาการใช้งาน พร้อมระบบใหม่ แจ้งฝาก-ถอน อัตโนมัติปลอดภัย 24 ชั่วโมง </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng_image_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-image-slider */ "../node_modules/ng-image-slider/fesm5/ng-image-slider.js");
/* harmony import */ var src_app_service_todo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/todo.service */ "./src/app/service/todo.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);





// import * as M from '../../../assets/script/materialize/js/materialize.min.js';

var HomeComponent = /** @class */ (function () {
    function HomeComponent(todoServcie, router) {
        this.todoServcie = todoServcie;
        this.router = router;
        this.dp_link = 'https://www.facebook.com/ejan2016/posts/1471403766353958';
        this.text_return = '';
        this.images = [
        // { img: "/assets/images/bg_slide/slide.gif" },  
        //{ img: "/assets/images/bg_slide/slide1.jpg" },
        ];
        this.slideConfig = {
            "slidesToShow": 1,
            "dots": false,
            "infinite": true,
            "autoplay": true,
            "autoplaySpeed": 7000,
            mobileFirst: true,
            centerMode: true,
            arrows: false,
            centerPadding: '0.1px',
        };
        this.height = '';
        this.arrowSize = '30px';
        this.showArrows = false;
        this.disableSwiping = false;
        this.autoPlay = true;
        this.autoPlayInterval = 7000;
        this.stopAutoPlayOnSlide = true;
        this.debug = false;
        this.backgroundSize = '100% 100%';
        this.backgroundPosition = 'top center';
        this.backgroundRepeat = 'no-repeat';
        this.showDots = false;
        this.dotColor = '#FFF';
        this.showCaptions = true;
        this.captionColor = '#FFF';
        this.captionBackground = 'rgba(0, 0, 0, .35)';
        this.lazyLoad = true;
        this.hideOnNoSlides = false;
        this.width = '100%';
        this.fullscreen = false;
        this.imageObject = [{
            // image: '/assets/images/bg_slide/Slide2.jpg',
            // thumbImage: '/assets/images/bg_slide/Slide2.jpg'
            },
        ];
        // imageUrls: (string | IImage)[] = [
        //   { url: '/assets/images/bg_slide/Slide2.jpg' },
        //   // { url: '/assets/images/bg_slide/slide3.jpg' },
        //   // { url: '/assets/images/content/slide3.jpg' }
        // ];
        this.imageUrls = [
        //  { img: "/assets/images/bg_slide/slide1.jpg" },  
        //  { img: "/assets/images/bg_slide/slide2.jpg" },
        ];
        this.options = {
            fullWidth: true
        };
    }
    HomeComponent.prototype.prevImageClick = function () {
        this.slider.prev();
    };
    HomeComponent.prototype.nextImageClick = function () {
        this.slider.next();
    };
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem("login") == "success") {
            this.login_status_check = '1';
        }
        // var elems = document.querySelectorAll('.carousel');
        // var instances = M.Carousel.init(elems,this.options);
        this.todoServcie.getTodoList(0).subscribe(function (response) {
            // console.log(response);
            _this.todoLists = response;
        });
        this.todoServcie.getSlide().subscribe(function (response) {
            var arraySlide = [];
            for (var i = 0; i < response.length; i++) {
                arraySlide.push({ img: '/upload/files/' + response[i].adjust_page_image_name + '.' + response[i].adjust_page_image_type + '?v=1.2' });
                //arraySlide.push({ url: '/upload/files/'+response[i].adjust_page_image_name+'.'+response[i].adjust_page_image_type+'?v=1.2' });
            }
            _this.imageUrls = arraySlide;
        });
    };
    HomeComponent.prototype.contentLoad = function (data) {
        if (data == 'deposit') {
            jquery__WEBPACK_IMPORTED_MODULE_5__("." + data).addClass('active');
            jquery__WEBPACK_IMPORTED_MODULE_5__(".withdraw").removeClass('active');
            jquery__WEBPACK_IMPORTED_MODULE_5__('.deposit_area').css('display', 'block');
            jquery__WEBPACK_IMPORTED_MODULE_5__('.withdraw_area').css('display', 'none');
        }
        if (data != 'deposit') {
            jquery__WEBPACK_IMPORTED_MODULE_5__(".withdraw").addClass('active');
            jquery__WEBPACK_IMPORTED_MODULE_5__(".deposit").removeClass('active');
            jquery__WEBPACK_IMPORTED_MODULE_5__('.deposit_area').css('display', 'none');
            jquery__WEBPACK_IMPORTED_MODULE_5__('.withdraw_area').css('display', 'block');
        }
    };
    ;
    HomeComponent.prototype.onSubmit = function (form) {
        var _this = this;
        if (!validURL(form.value.dp_link)) {
            alert('url ไม่ถูกต้อง');
        }
        else {
            testHoldon('sk-circle', 'กำลังดึงข้อมูล');
            var get_data = "";
            var service = this.todoServcie;
            var image_link = this.image_link;
            var all_likes = this.all_likes;
            var all_comments = this.all_comments;
            var image_post = this.image_post;
            var post_message = this.post_message;
            service.getDataLink(form.value.dp_link).subscribe(function (data) {
                if (data.status_link == false) {
                    alert('ไม่สามารถอ่านข้อมูลโพสที่ต้องการได้ อาจเป็นเพราะโพสที่ระบุไม่ใช่โพสสาธารณะ หรือURLอาจไม่ถูกต้อง');
                    HoldOn.close();
                }
                else {
                    service.saveLink(data[0]['data_text_like_and_share'][0], form.value.dp_link).subscribe(function (data2) {
                        //debugger;
                        _this.dp_id = data2.dp_id;
                        _this.image_link = data2.image_link;
                        _this.all_likes = data2.all_likes;
                        _this.all_comments = data2.all_comments;
                        _this.image_post = data2.image_link;
                        _this.post_message = data2.post_message;
                        _this.name_page = data2.dp_name_page;
                        _this.link_like = data2.dp_link_like;
                        service.getDataLike_from_mysql(_this.dp_id).subscribe(function (data3) {
                            localStorage.setItem('user_like', JSON.stringify(data3));
                            _this.data_user_like = data3;
                        });
                        service.getUserWin(_this.dp_id).subscribe(function (data4) {
                            _this.data_user_win = data4;
                        });
                        HoldOn.close();
                    });
                }
            });
        }
        //  testHoldon('sk-circle','กำลังดึงข้อมูล');
    };
    HomeComponent.prototype.saveLike = function (data, data_id) {
        var _this = this;
        // debugger;
        testHoldon('sk-circle', 'กำลังเซฟข้อมูล');
        var link_like = jquery__WEBPACK_IMPORTED_MODULE_5__(data.currentTarget).attr("id");
        this.todoServcie.getDataLike(link_like, data_id).subscribe(function (data2) {
            var data_id = data2.data_id;
            var string_array_user_like = JSON.stringify(data2.data_user_like);
            _this.todoServcie.saveDataLike(data_id, string_array_user_like).subscribe(function (data3) {
                _this.todoServcie.getDataLike_from_mysql(_this.dp_id).subscribe(function (data3) {
                    localStorage.setItem('user_like', JSON.stringify(data3));
                    _this.data_user_like = data3;
                });
                HoldOn.close();
            });
        });
    };
    HomeComponent.prototype.randomUser = function () {
        console.log(localStorage.getItem('user_like'));
        var objArray = JSON.parse(localStorage.getItem('user_like'));
        var user_win = objArray[Math.floor(Math.random() * objArray.length)];
        console.log(user_win);
        //debugger;
        this.user_win = user_win.user_name;
        this.user_win_id = user_win.user_data;
    };
    HomeComponent.prototype.onSubmitUserWin = function (form) {
        var _this = this;
        // debugger;
        this.todoServcie.saveUserWin(form.value.dp_id, form.value.user_win_id, form.value.user_win).subscribe(function (data) {
            //debugger;
            _this.todoServcie.getUserWin(form.value.dp_id).subscribe(function (data4) {
                _this.data_user_win = data4;
            });
        });
    };
    ;
    HomeComponent.prototype.open_popup = function () {
        // const modalRef = this.modalService.open(NgbdModalContent);
        // modalRef.componentInstance.name = 'World';
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nav'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ng_image_slider__WEBPACK_IMPORTED_MODULE_2__["NgImageSliderComponent"])
    ], HomeComponent.prototype, "slider", void 0);
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_todo_service__WEBPACK_IMPORTED_MODULE_3__["TodoService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/howtoplay/howtoplay.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/howtoplay/howtoplay.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG93dG9wbGF5L2hvd3RvcGxheS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/howtoplay/howtoplay.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/howtoplay/howtoplay.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"headTitle\">\n    ทางเข้าเล่น\n</div>\n<div class=\"contentPageArea\">\n    <div class=\"titleContent\" [innerHTML]=\"todoHowtoplayText | sanitizeHtml\">\n      \n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/components/howtoplay/howtoplay.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/howtoplay/howtoplay.component.ts ***!
  \*************************************************************/
/*! exports provided: HowtoplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HowtoplayComponent", function() { return HowtoplayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/todo.service */ "./src/app/service/todo.service.ts");



var HowtoplayComponent = /** @class */ (function () {
    function HowtoplayComponent(todoServcie) {
        this.todoServcie = todoServcie;
    }
    HowtoplayComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.todoServcie.getTextHowtoplay().subscribe(function (response) {
            //console.log(response.data);
            _this.todoHowtoplayText = response.data.howtoplay_text_detail;
        });
    };
    HowtoplayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-howtoplay',
            template: __webpack_require__(/*! ./howtoplay.component.html */ "./src/app/components/howtoplay/howtoplay.component.html"),
            styles: [__webpack_require__(/*! ./howtoplay.component.css */ "./src/app/components/howtoplay/howtoplay.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"]])
    ], HowtoplayComponent);
    return HowtoplayComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n/* BASIC */\r\n\r\nhtml {\r\n    background-color: #56baed;\r\n  }\r\n\r\nbody {\r\n    font-family: \"Poppins\", sans-serif;\r\n    height: 100vh;\r\n  }\r\n\r\na {\r\n    color: #92badd;\r\n    display:inline-block;\r\n    text-decoration: none;\r\n    font-weight: 400;\r\n  }\r\n\r\nh2 {\r\n    text-align: center;\r\n    font-size: 16px;\r\n    font-weight: 600;\r\n    text-transform: uppercase;\r\n    display:inline-block;\r\n    margin: 40px 8px 10px 8px; \r\n    color: #cccccc;\r\n  }\r\n\r\n/* STRUCTURE */\r\n\r\n.wrapper {\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column; \r\n    justify-content: center;\r\n    width: 100%;\r\n    min-height: 100%;\r\n    padding: 20px;\r\n  }\r\n\r\n#formContent {\r\n    border-radius: 10px 10px 10px 10px;\r\n    background: #fff;\r\n    padding: 30px;\r\n    width: 90%;\r\n    max-width: 450px;\r\n    position: relative;\r\n    padding: 0px;\r\n    box-shadow: 0 30px 60px 0 rgba(0,0,0,0.3);\r\n    text-align: center;\r\n  }\r\n\r\n#formFooter {\r\n    background-color: #f6f6f6;\r\n    border-top: 1px solid #dce8f1;\r\n    padding: 25px;\r\n    text-align: center;\r\n    border-radius: 0 0 10px 10px;\r\n  }\r\n\r\n/* TABS */\r\n\r\nh2.inactive {\r\n    color: #cccccc;\r\n  }\r\n\r\nh2.active {\r\n    color: #0d0d0d;\r\n    border-bottom: 2px solid #5fbae9;\r\n  }\r\n\r\n/* FORM TYPOGRAPHY*/\r\n\r\ninput[type=button], input[type=submit], input[type=reset]  {\r\n    background-color: #56baed;\r\n    border: none;\r\n    color: white;\r\n    padding: 15px 80px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    text-transform: uppercase;\r\n    font-size: 13px;\r\n    box-shadow: 0 10px 30px 0 rgba(95,186,233,0.4);\r\n    border-radius: 5px 5px 5px 5px;\r\n    margin: 5px 20px 40px 20px;\r\n    transition: all 0.3s ease-in-out;\r\n  }\r\n\r\ninput[type=button]:hover, input[type=submit]:hover, input[type=reset]:hover  {\r\n    background-color: #39ace7;\r\n  }\r\n\r\ninput[type=button]:active, input[type=submit]:active, input[type=reset]:active  {\r\n    -webkit-transform: scale(0.95);\r\n    transform: scale(0.95);\r\n  }\r\n\r\ninput[type=text] {\r\n    background-color: #f6f6f6;\r\n    border: none;\r\n    color: #0d0d0d;\r\n    padding: 15px 32px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    font-size: 16px;\r\n    margin: 5px;\r\n    width: 85%;\r\n    border: 2px solid #f6f6f6;\r\n    transition: all 0.5s ease-in-out;\r\n    border-radius: 5px 5px 5px 5px;\r\n  }\r\n\r\ninput[type=text]:focus {\r\n    background-color: #fff;\r\n    border-bottom: 2px solid #5fbae9;\r\n  }\r\n\r\ninput[type=text]:placeholder {\r\n    color: #cccccc;\r\n  }\r\n\r\n/* ANIMATIONS */\r\n\r\n/* Simple CSS3 Fade-in-down Animation */\r\n\r\n.fadeInDown {\r\n    -webkit-animation-name: fadeInDown;\r\n    animation-name: fadeInDown;\r\n    -webkit-animation-duration: 1s;\r\n    animation-duration: 1s;\r\n    -webkit-animation-fill-mode: both;\r\n    animation-fill-mode: both;\r\n  }\r\n\r\n@-webkit-keyframes fadeInDown {\r\n    0% {\r\n      opacity: 0;\r\n      -webkit-transform: translate3d(0, -100%, 0);\r\n      transform: translate3d(0, -100%, 0);\r\n    }\r\n    100% {\r\n      opacity: 1;\r\n      -webkit-transform: none;\r\n      transform: none;\r\n    }\r\n  }\r\n\r\n@keyframes fadeInDown {\r\n    0% {\r\n      opacity: 0;\r\n      -webkit-transform: translate3d(0, -100%, 0);\r\n      transform: translate3d(0, -100%, 0);\r\n    }\r\n    100% {\r\n      opacity: 1;\r\n      -webkit-transform: none;\r\n      transform: none;\r\n    }\r\n  }\r\n\r\n/* Simple CSS3 Fade-in Animation */\r\n\r\n@-webkit-keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\r\n\r\n@keyframes fadeIn { from { opacity:0; } to { opacity:1; } }\r\n\r\n.fadeIn {\r\n    opacity:0;\r\n    -webkit-animation:fadeIn ease-in 1;\r\n    animation:fadeIn ease-in 1;\r\n  \r\n    -webkit-animation-fill-mode:forwards;\r\n    animation-fill-mode:forwards;\r\n  \r\n    -webkit-animation-duration:1s;\r\n    animation-duration:1s;\r\n  }\r\n\r\n.fadeIn.first {\r\n    -webkit-animation-delay: 0.4s;\r\n    animation-delay: 0.4s;\r\n  }\r\n\r\n.fadeIn.second {\r\n    -webkit-animation-delay: 0.6s;\r\n    animation-delay: 0.6s;\r\n  }\r\n\r\n.fadeIn.third {\r\n    -webkit-animation-delay: 0.8s;\r\n    animation-delay: 0.8s;\r\n  }\r\n\r\n.fadeIn.fourth {\r\n    -webkit-animation-delay: 1s;\r\n    animation-delay: 1s;\r\n  }\r\n\r\n/* Simple CSS3 Fade-in Animation */\r\n\r\n.underlineHover:after {\r\n    display: block;\r\n    left: 0;\r\n    bottom: -10px;\r\n    width: 0;\r\n    height: 2px;\r\n    background-color: #56baed;\r\n    content: \"\";\r\n    transition: width 0.2s;\r\n  }\r\n\r\n.underlineHover:hover {\r\n    color: #0d0d0d;\r\n  }\r\n\r\n.underlineHover:hover:after{\r\n    width: 100%;\r\n  }\r\n\r\n/* OTHERS */\r\n\r\n*:focus {\r\n      outline: none;\r\n  }\r\n\r\n#icon {\r\n    width:60%;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxVQUFVOztBQUVWO0lBQ0kseUJBQXlCO0VBQzNCOztBQUVBO0lBQ0Usa0NBQWtDO0lBQ2xDLGFBQWE7RUFDZjs7QUFFQTtJQUNFLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLGdCQUFnQjtFQUNsQjs7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixvQkFBb0I7SUFDcEIseUJBQXlCO0lBQ3pCLGNBQWM7RUFDaEI7O0FBSUEsY0FBYzs7QUFFZDtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGFBQWE7RUFDZjs7QUFFQTtJQUVFLGtDQUFrQztJQUNsQyxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFFWix5Q0FBeUM7SUFDekMsa0JBQWtCO0VBQ3BCOztBQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLDZCQUE2QjtJQUM3QixhQUFhO0lBQ2Isa0JBQWtCO0lBRWxCLDRCQUE0QjtFQUM5Qjs7QUFJQSxTQUFTOztBQUVUO0lBQ0UsY0FBYztFQUNoQjs7QUFFQTtJQUNFLGNBQWM7SUFDZCxnQ0FBZ0M7RUFDbEM7O0FBSUEsbUJBQW1COztBQUVuQjtJQUNFLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIsZUFBZTtJQUVmLDhDQUE4QztJQUU5Qyw4QkFBOEI7SUFDOUIsMEJBQTBCO0lBSzFCLGdDQUFnQztFQUNsQzs7QUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7QUFFQTtJQUVFLDhCQUE4QjtJQUc5QixzQkFBc0I7RUFDeEI7O0FBRUE7SUFDRSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLFdBQVc7SUFDWCxVQUFVO0lBQ1YseUJBQXlCO0lBS3pCLGdDQUFnQztJQUVoQyw4QkFBOEI7RUFDaEM7O0FBRUE7SUFDRSxzQkFBc0I7SUFDdEIsZ0NBQWdDO0VBQ2xDOztBQUVBO0lBQ0UsY0FBYztFQUNoQjs7QUFJQSxlQUFlOztBQUVmLHVDQUF1Qzs7QUFDdkM7SUFDRSxrQ0FBa0M7SUFDbEMsMEJBQTBCO0lBQzFCLDhCQUE4QjtJQUM5QixzQkFBc0I7SUFDdEIsaUNBQWlDO0lBQ2pDLHlCQUF5QjtFQUMzQjs7QUFFQTtJQUNFO01BQ0UsVUFBVTtNQUNWLDJDQUEyQztNQUMzQyxtQ0FBbUM7SUFDckM7SUFDQTtNQUNFLFVBQVU7TUFDVix1QkFBdUI7TUFDdkIsZUFBZTtJQUNqQjtFQUNGOztBQUVBO0lBQ0U7TUFDRSxVQUFVO01BQ1YsMkNBQTJDO01BQzNDLG1DQUFtQztJQUNyQztJQUNBO01BQ0UsVUFBVTtNQUNWLHVCQUF1QjtNQUN2QixlQUFlO0lBQ2pCO0VBQ0Y7O0FBRUEsa0NBQWtDOztBQUNsQyw0QkFBNEIsT0FBTyxTQUFTLEVBQUUsRUFBRSxLQUFLLFNBQVMsRUFBRSxFQUFFOztBQUVsRSxvQkFBb0IsT0FBTyxTQUFTLEVBQUUsRUFBRSxLQUFLLFNBQVMsRUFBRSxFQUFFOztBQUUxRDtJQUNFLFNBQVM7SUFDVCxrQ0FBa0M7SUFFbEMsMEJBQTBCOztJQUUxQixvQ0FBb0M7SUFFcEMsNEJBQTRCOztJQUU1Qiw2QkFBNkI7SUFFN0IscUJBQXFCO0VBQ3ZCOztBQUVBO0lBQ0UsNkJBQTZCO0lBRTdCLHFCQUFxQjtFQUN2Qjs7QUFFQTtJQUNFLDZCQUE2QjtJQUU3QixxQkFBcUI7RUFDdkI7O0FBRUE7SUFDRSw2QkFBNkI7SUFFN0IscUJBQXFCO0VBQ3ZCOztBQUVBO0lBQ0UsMkJBQTJCO0lBRTNCLG1CQUFtQjtFQUNyQjs7QUFFQSxrQ0FBa0M7O0FBQ2xDO0lBQ0UsY0FBYztJQUNkLE9BQU87SUFDUCxhQUFhO0lBQ2IsUUFBUTtJQUNSLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsV0FBVztJQUNYLHNCQUFzQjtFQUN4Qjs7QUFFQTtJQUNFLGNBQWM7RUFDaEI7O0FBRUE7SUFDRSxXQUFXO0VBQ2I7O0FBSUEsV0FBVzs7QUFFWDtNQUNJLGFBQWE7RUFDakI7O0FBRUE7SUFDRSxTQUFTO0VBQ1giLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLyogQkFTSUMgKi9cclxuXHJcbmh0bWwge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU2YmFlZDtcclxuICB9XHJcbiAgXHJcbiAgYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gIH1cclxuICBcclxuICBhIHtcclxuICAgIGNvbG9yOiAjOTJiYWRkO1xyXG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gIH1cclxuICBcclxuICBoMiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luOiA0MHB4IDhweCAxMHB4IDhweDsgXHJcbiAgICBjb2xvcjogI2NjY2NjYztcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgLyogU1RSVUNUVVJFICovXHJcbiAgXHJcbiAgLndyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyBcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgI2Zvcm1Db250ZW50IHtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDEwcHggMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAxMHB4IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBtYXgtd2lkdGg6IDQ1MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDMwcHggNjBweCAwIHJnYmEoMCwwLDAsMC4zKTtcclxuICAgIGJveC1zaGFkb3c6IDAgMzBweCA2MHB4IDAgcmdiYSgwLDAsMCwwLjMpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAjZm9ybUZvb3RlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjZmNmY2O1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkY2U4ZjE7XHJcbiAgICBwYWRkaW5nOiAyNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMTBweDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgLyogVEFCUyAqL1xyXG4gIFxyXG4gIGgyLmluYWN0aXZlIHtcclxuICAgIGNvbG9yOiAjY2NjY2NjO1xyXG4gIH1cclxuICBcclxuICBoMi5hY3RpdmUge1xyXG4gICAgY29sb3I6ICMwZDBkMGQ7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzVmYmFlOTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgLyogRk9STSBUWVBPR1JBUEhZKi9cclxuICBcclxuICBpbnB1dFt0eXBlPWJ1dHRvbl0sIGlucHV0W3R5cGU9c3VibWl0XSwgaW5wdXRbdHlwZT1yZXNldF0gIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NmJhZWQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDgwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDEwcHggMzBweCAwIHJnYmEoOTUsMTg2LDIzMywwLjQpO1xyXG4gICAgYm94LXNoYWRvdzogMCAxMHB4IDMwcHggMCByZ2JhKDk1LDE4NiwyMzMsMC40KTtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCA1cHggNXB4O1xyXG4gICAgbWFyZ2luOiA1cHggMjBweCA0MHB4IDIwcHg7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0W3R5cGU9YnV0dG9uXTpob3ZlciwgaW5wdXRbdHlwZT1zdWJtaXRdOmhvdmVyLCBpbnB1dFt0eXBlPXJlc2V0XTpob3ZlciAge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM5YWNlNztcclxuICB9XHJcbiAgXHJcbiAgaW5wdXRbdHlwZT1idXR0b25dOmFjdGl2ZSwgaW5wdXRbdHlwZT1zdWJtaXRdOmFjdGl2ZSwgaW5wdXRbdHlwZT1yZXNldF06YWN0aXZlICB7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgICAtby10cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOTUpO1xyXG4gIH1cclxuICBcclxuICBpbnB1dFt0eXBlPXRleHRdIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogIzBkMGQwZDtcclxuICAgIHBhZGRpbmc6IDE1cHggMzJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgd2lkdGg6IDg1JTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmNmY2ZjY7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcclxuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggNXB4IDVweDtcclxuICB9XHJcbiAgXHJcbiAgaW5wdXRbdHlwZT10ZXh0XTpmb2N1cyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM1ZmJhZTk7XHJcbiAgfVxyXG4gIFxyXG4gIGlucHV0W3R5cGU9dGV4dF06cGxhY2Vob2xkZXIge1xyXG4gICAgY29sb3I6ICNjY2NjY2M7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIFxyXG4gIC8qIEFOSU1BVElPTlMgKi9cclxuICBcclxuICAvKiBTaW1wbGUgQ1NTMyBGYWRlLWluLWRvd24gQW5pbWF0aW9uICovXHJcbiAgLmZhZGVJbkRvd24ge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmFkZUluRG93bjtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW5Eb3duO1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDFzO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcclxuICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGJvdGg7XHJcbiAgfVxyXG4gIFxyXG4gIEAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW5Eb3duIHtcclxuICAgIDAlIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgIHRyYW5zZm9ybTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBmYWRlSW5Eb3duIHtcclxuICAgIDAlIHtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgIHRyYW5zZm9ybTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLyogU2ltcGxlIENTUzMgRmFkZS1pbiBBbmltYXRpb24gKi9cclxuICBALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluIHsgZnJvbSB7IG9wYWNpdHk6MDsgfSB0byB7IG9wYWNpdHk6MTsgfSB9XHJcbiAgQC1tb3ota2V5ZnJhbWVzIGZhZGVJbiB7IGZyb20geyBvcGFjaXR5OjA7IH0gdG8geyBvcGFjaXR5OjE7IH0gfVxyXG4gIEBrZXlmcmFtZXMgZmFkZUluIHsgZnJvbSB7IG9wYWNpdHk6MDsgfSB0byB7IG9wYWNpdHk6MTsgfSB9XHJcbiAgXHJcbiAgLmZhZGVJbiB7XHJcbiAgICBvcGFjaXR5OjA7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjpmYWRlSW4gZWFzZS1pbiAxO1xyXG4gICAgLW1vei1hbmltYXRpb246ZmFkZUluIGVhc2UtaW4gMTtcclxuICAgIGFuaW1hdGlvbjpmYWRlSW4gZWFzZS1pbiAxO1xyXG4gIFxyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZmlsbC1tb2RlOmZvcndhcmRzO1xyXG4gICAgLW1vei1hbmltYXRpb24tZmlsbC1tb2RlOmZvcndhcmRzO1xyXG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTpmb3J3YXJkcztcclxuICBcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOjFzO1xyXG4gICAgLW1vei1hbmltYXRpb24tZHVyYXRpb246MXM7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246MXM7XHJcbiAgfVxyXG4gIFxyXG4gIC5mYWRlSW4uZmlyc3Qge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuNHM7XHJcbiAgICAtbW96LWFuaW1hdGlvbi1kZWxheTogMC40cztcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMC40cztcclxuICB9XHJcbiAgXHJcbiAgLmZhZGVJbi5zZWNvbmQge1xyXG4gICAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDAuNnM7XHJcbiAgICAtbW96LWFuaW1hdGlvbi1kZWxheTogMC42cztcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMC42cztcclxuICB9XHJcbiAgXHJcbiAgLmZhZGVJbi50aGlyZCB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC44cztcclxuICAgIC1tb3otYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwLjhzO1xyXG4gIH1cclxuICBcclxuICAuZmFkZUluLmZvdXJ0aCB7XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMXM7XHJcbiAgICAtbW96LWFuaW1hdGlvbi1kZWxheTogMXM7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDFzO1xyXG4gIH1cclxuICBcclxuICAvKiBTaW1wbGUgQ1NTMyBGYWRlLWluIEFuaW1hdGlvbiAqL1xyXG4gIC51bmRlcmxpbmVIb3ZlcjphZnRlciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IC0xMHB4O1xyXG4gICAgd2lkdGg6IDA7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NmJhZWQ7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC4ycztcclxuICB9XHJcbiAgXHJcbiAgLnVuZGVybGluZUhvdmVyOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMGQwZDBkO1xyXG4gIH1cclxuICBcclxuICAudW5kZXJsaW5lSG92ZXI6aG92ZXI6YWZ0ZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgLyogT1RIRVJTICovXHJcbiAgXHJcbiAgKjpmb2N1cyB7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfSBcclxuICBcclxuICAjaWNvbiB7XHJcbiAgICB3aWR0aDo2MCU7XHJcbiAgfVxyXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper fadeInDown\">\n  <div id=\"formContent\">\n    <!-- Tabs Titles -->\n\n    <!-- Icon -->\n    <div class=\"fadeIn first\">\n       LOGIN\n    </div>\n\n    <!-- Login Form -->\n    <form (ngSubmit)=\"Validateuser()\">\n      <input type=\"text\" id=\"login\" class=\"fadeIn second\" name=\"login\" placeholder=\"username\">\n      <input type=\"text\" id=\"password\" class=\"fadeIn third\" name=\"login\" placeholder=\"password\">\n      <input type=\"submit\" class=\"fadeIn fourth\" value=\"Log In\">\n    </form>\n\n    <!-- Remind Passowrd -->\n    <div id=\"formFooter\">\n      <a class=\"underlineHover\" href=\"#\">Forgot Password?</a>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: loginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginComponent", function() { return loginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/todo.service */ "./src/app/service/todo.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");




var loginComponent = /** @class */ (function () {
    function loginComponent(router, loginService) {
        this.router = router;
        this.loginService = loginService;
        this.infoMessage = '';
    }
    loginComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem("login") == "success") {
            this.router.navigate(['/home']);
        }
    };
    loginComponent.prototype.Validateuser = function () {
        var _this = this;
        this.loginService.ValidateUser(this.username, this.password).subscribe(function (data) {
            if (data.success == true) {
                // this.router.navigateByUrl('/home');
                _this.loginService.setLoggedIn(true);
                _this.infoMessage = '';
                window.location.reload();
            }
            else {
                _this.infoMessage = 'Login Failed. Please Try Again.';
                _this.router.navigate(['login']);
            }
        });
    };
    loginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_service_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"]])
    ], loginComponent);
    return loginComponent;
}());



/***/ }),

/***/ "./src/app/components/manage_data/manage_data.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/manage_data/manage_data.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n#inner {\r\n    display: table;\r\n    margin: 0 auto;\r\n  }\r\n  \r\n  #outer {\r\n    width:100%\r\n  }\r\n  \r\n  .table{\r\n      width: 320px;\r\n  }\r\n  \r\n  .columns {\r\n\tdisplay: flex;\r\n\tflex-flow: row wrap;\r\n\tjustify-content: center;\r\n\tmargin: 5px 0;\r\n}\r\n  \r\n  .column {\r\n\tflex: 1;\r\n\tborder: 1px solid gray;\r\n\tmargin: 2px;\r\n    padding: 10px;\r\n    min-height: 150px;\r\n    text-align: center;\r\n    position: relative;\r\n\t&:first-child { margin-left: 0; }\r\n\t&:last-child { margin-right: 0; }\r\n\t\r\n}\r\n  \r\n  .btn_event{\r\n    margin-top: 40px;\r\n}\r\n  \r\n  .win_game{\r\n    \r\n}\r\n  \r\n  /* @media screen and (max-width: 980px) {\r\n    .columns .column {\r\n          margin-bottom: 5px;\r\n      flex-basis: 40%;\r\n          &:nth-last-child(2) {\r\n              margin-right: 0;\r\n          }\r\n          &:last-child {\r\n              flex-basis: 100%;\r\n              margin: 0;\r\n          }\r\n      }\r\n  } */\r\n  \r\n  .sidenav {\r\n    height: 100%;\r\n    width: 200px;\r\n    position: relative;\r\n    z-index: 1;\r\n    top: 0;\r\n    left: 0;\r\n    float: left;\r\n    background-color: #111;\r\n    overflow-x: hidden;\r\n    padding-top: 20px;\r\n  }\r\n  \r\n  .sidenav a {\r\n    padding: 6px 6px 6px 32px;\r\n    text-decoration: none;\r\n    font-size: 25px;\r\n    color: white;\r\n    display: block;\r\n  }\r\n  \r\n  .sidenav a:hover {\r\n    color: #f1f1f1;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  .main {\r\n    margin-left: 200px; /* Same as the width of the sidenav */\r\n  }\r\n  \r\n  @media screen and (max-height: 450px) {\r\n    .sidenav {padding-top: 15px;}\r\n    .sidenav a {font-size: 18px;}\r\n  }\r\n  \r\n  @media screen and (max-width: 425px) {\r\n      .columns .column {\r\n          flex-basis: 100%;\r\n          margin: 0 0 5px 0;\r\n      }\r\n  }\r\n  \r\n  @media screen and (min-width: 768px) {\r\n    .table{\r\n        width: 620px;\r\n    }\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYW5hZ2VfZGF0YS9tYW5hZ2VfZGF0YS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLGNBQWM7SUFDZCxjQUFjO0VBQ2hCOztFQUVBO0lBQ0U7RUFDRjs7RUFDQTtNQUNJLFlBQVk7RUFDaEI7O0VBRUY7Q0FDQyxhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLHVCQUF1QjtDQUN2QixhQUFhO0FBQ2Q7O0VBRUE7Q0FDQyxPQUFPO0NBQ1Asc0JBQXNCO0NBQ3RCLFdBQVc7SUFDUixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixrQkFBa0I7Q0FDckIsZ0JBQWdCLGNBQWMsRUFBRTtDQUNoQyxlQUFlLGVBQWUsRUFBRTs7QUFFakM7O0VBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0VBQ0E7O0FBRUE7O0VBRUE7Ozs7Ozs7Ozs7OztLQVlLOztFQUdIO0lBQ0UsWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsWUFBWTtJQUNaLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxjQUFjO0lBQ2QsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGtCQUFrQixFQUFFLHFDQUFxQztFQUMzRDs7RUFFQTtJQUNFLFVBQVUsaUJBQWlCLENBQUM7SUFDNUIsWUFBWSxlQUFlLENBQUM7RUFDOUI7O0VBRUE7TUFDSTtVQUNJLGdCQUFnQjtVQUNoQixpQkFBaUI7TUFDckI7RUFDSjs7RUFFQTtJQUNFO1FBQ0ksWUFBWTtJQUNoQjtFQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tYW5hZ2VfZGF0YS9tYW5hZ2VfZGF0YS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiNpbm5lciB7XHJcbiAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gIH1cclxuICBcclxuICAjb3V0ZXIge1xyXG4gICAgd2lkdGg6MTAwJVxyXG4gIH1cclxuICAudGFibGV7XHJcbiAgICAgIHdpZHRoOiAzMjBweDtcclxuICB9XHJcblxyXG4uY29sdW1ucyB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRmbGV4LWZsb3c6IHJvdyB3cmFwO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdG1hcmdpbjogNXB4IDA7XHJcbn1cclxuXHJcbi5jb2x1bW4ge1xyXG5cdGZsZXg6IDE7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgZ3JheTtcclxuXHRtYXJnaW46IDJweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAxNTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHQmOmZpcnN0LWNoaWxkIHsgbWFyZ2luLWxlZnQ6IDA7IH1cclxuXHQmOmxhc3QtY2hpbGQgeyBtYXJnaW4tcmlnaHQ6IDA7IH1cclxuXHRcclxufVxyXG5cclxuLmJ0bl9ldmVudHtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbn1cclxuLndpbl9nYW1le1xyXG4gICAgXHJcbn1cclxuXHJcbi8qIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk4MHB4KSB7XHJcbiAgICAuY29sdW1ucyAuY29sdW1uIHtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgZmxleC1iYXNpczogNDAlO1xyXG4gICAgICAgICAgJjpudGgtbGFzdC1jaGlsZCgyKSB7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICBmbGV4LWJhc2lzOiAxMDAlO1xyXG4gICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgIH1cclxuICAgICAgfVxyXG4gIH0gKi9cclxuICBcclxuXHJcbiAgLnNpZGVuYXYge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMTE7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLnNpZGVuYXYgYSB7XHJcbiAgICBwYWRkaW5nOiA2cHggNnB4IDZweCAzMnB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC5zaWRlbmF2IGE6aG92ZXIge1xyXG4gICAgY29sb3I6ICNmMWYxZjE7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYWluIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMDBweDsgLyogU2FtZSBhcyB0aGUgd2lkdGggb2YgdGhlIHNpZGVuYXYgKi9cclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDQ1MHB4KSB7XHJcbiAgICAuc2lkZW5hdiB7cGFkZGluZy10b3A6IDE1cHg7fVxyXG4gICAgLnNpZGVuYXYgYSB7Zm9udC1zaXplOiAxOHB4O31cclxuICB9XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNXB4KSB7XHJcbiAgICAgIC5jb2x1bW5zIC5jb2x1bW4ge1xyXG4gICAgICAgICAgZmxleC1iYXNpczogMTAwJTtcclxuICAgICAgICAgIG1hcmdpbjogMCAwIDVweCAwO1xyXG4gICAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgLnRhYmxle1xyXG4gICAgICAgIHdpZHRoOiA2MjBweDtcclxuICAgIH1cclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/components/manage_data/manage_data.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/manage_data/manage_data.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row min-vh-100\"> \n      <aside class=\"col-12 col-md-2 p-0 bg-dark\">\n          <nav class=\"navbar navbar-expand navbar-dark bg-dark flex-md-column flex-row align-items-start py-2\">\n              <div class=\"collapse navbar-collapse\">\n                  <ul class=\"flex-md-column flex-row navbar-nav w-100 justify-content-between\">\n                      <li class=\"nav-item\">\n                          <a class=\"nav-link pl-0 text-nowrap\"  routerLink=\"/manage_data/activity\"><i class=\"fa fa-bullseye fa-fw\"></i> <span class=\"font-weight-bold\">กิจกรรม</span></a>\n                      </li>\n                      <li class=\"nav-item\">\n                          <a class=\"nav-link pl-0\"  routerLink=\"/manage_data/setting\"><i class=\"fa fa-heart-o fa-fw\"></i> <span class=\"d-none d-md-inline\">ตั้งค่า</span></a>\n                      </li>\n                  </ul>\n              </div>\n          </nav>\n      </aside>\n        \n      <main class=\"col bg-faded py-3\" style=\"background: #ccc;\">\n\n          <ng-container *ngIf=\"id=='activity'||id==''||id==null\">\n              <section class=\"columns\">\n                  <div class=\"column\">\n                      <h2 style=\"text-align: center;\">สุ่มรายชื่อ</h2>\n                      <div class=\" btn_event form-check form-check-inline\">\n                        <input class=\"form-check-input\" type=\"checkbox\" id=\"inlineCheckbox1\" value=\"option1\">\n                        <label class=\"form-check-label\" for=\"inlineCheckbox1\">เลือกใช้</label>\n                      </div>\n                    </div>\n                    \n                    <div class=\"column\">\n                      <h2  style=\"text-align: center;\">ลำดับ</h2>\n                      <div class=\" btn_event form-check form-check-inline\">\n                        <input class=\"form-check-input\" type=\"checkbox\" id=\"inlineCheckbox1\" value=\"option1\">\n                        <label class=\"form-check-label\" for=\"inlineCheckbox1\">เลือกใช้</label>\n                      </div>\n                    </div>\n              </section>\n          </ng-container>\n          \n          \n          <ng-container *ngIf=\"id=='setting'\">\n              <section class=\"columns\">\n                  <div class=\"column\">\n                      <div class=\"form-group\">\n                          <label for=\"exampleInputEmail1\">Header</label>\n                          <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Brandname\">\n                          <small id=\"emailHelp\" class=\"form-text text-muted\">....</small>\n                        </div>\n                      <div class=\"custom-file\">\n                        <input type=\"file\" class=\"custom-file-input\" id=\"customFile\">\n                        <label class=\"custom-file-label\" for=\"customFile\">Choose file</label>\n                      </div>\n                      <div class=\"card\">\n                        <div class=\"card-body text-center d-flex justify-content-center align-items-center flex-column\" style=\"width: 500px;\">\n                            <color-sketch (onChange)=\"handleChange($event)\"></color-sketch>\n                        </div>\n                      </div>\n                      <button type=\"button\" class=\"btn_event btn btn-success\">Preview</button>\n                      <br>\n                      <br>\n                      <div class=\"card\" style=\"padding:20px;\">\n                        <div class=\"card-body text-center d-flex justify-content-center align-items-center flex-column\" style=\"text-align: center;border:1px solid black;width: 100%;height: 500px;\" >\n                            PREVIEW\n                        </div>\n                      </div>\n                  </div>\n                  \n              </section>\n          </ng-container>\n          \n\n          \n      </main>\n  </div> \n</div>\n"

/***/ }),

/***/ "./src/app/components/manage_data/manage_data.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/manage_data/manage_data.component.ts ***!
  \*****************************************************************/
/*! exports provided: Manage_dataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Manage_dataComponent", function() { return Manage_dataComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/todo.service */ "./src/app/service/todo.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");




var Manage_dataComponent = /** @class */ (function () {
    function Manage_dataComponent(route, todoServcie) {
        this.route = route;
        this.todoServcie = todoServcie;
    }
    Manage_dataComponent.prototype.ngOnInit = function () {
        //call service
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = params['id'];
        });
    };
    Manage_dataComponent.prototype.rederContent = function () {
        alert();
    };
    Manage_dataComponent.prototype.handleChange = function ($event) {
        console.log($event.color);
        // color = {
        //   hex: '#333',
        //   rgb: {
        //     r: 51,
        //     g: 51,
        //     b: 51,
        //     a: 1,
        //   },
        //   hsl: {
        //     h: 0,
        //     s: 0,
        //     l: .20,
        //     a: 1,
        //   },
        // }
    };
    Manage_dataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-manage_data',
            template: __webpack_require__(/*! ./manage_data.component.html */ "./src/app/components/manage_data/manage_data.component.html"),
            styles: [__webpack_require__(/*! ./manage_data.component.css */ "./src/app/components/manage_data/manage_data.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], src_app_service_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"]])
    ], Manage_dataComponent);
    return Manage_dataComponent;
}());



/***/ }),

/***/ "./src/app/components/menu/menu.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/menu/menu.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home_menu{\r\n    background-color: #111111;\r\n    height: auto;\r\n    min-height: 400px;\r\n    width: 100%;\r\n    float: left;\r\n}\r\n\r\n.menu_title{\r\n    font-size: 1.4em;\r\n    color:white;\r\n}\r\n\r\n.menu_des{\r\n    color:#AB8847;\r\n}\r\n\r\n.icon_menu_btn{\r\n    cursor: pointer;\r\n}\r\n\r\n.icon_menu_btn:hover{\r\n    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */\r\n    filter: grayscale(100%);\r\n}\r\n\r\n.icon_menu_home{\r\n    width: 150px; height:auto;\r\n}\r\n\r\n.home_menu .container{\r\n    background-color: unset;\r\n    text-align: center;\r\n}\r\n\r\n.text_menu{\r\n    padding-top: 30px;\r\n    color: white;\r\n    font-size: 2em;\r\n}\r\n\r\n.text_menu2{\r\n    clear: left;\r\n    font-size: 2em;\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.area_menu{\r\n    width: 100%;\r\n}\r\n\r\n.subMenu{\r\n    flex-direction: row;\r\n    /* display: none; */\r\n    margin-top:15px;\r\n}\r\n\r\n.nav-item-sub{\r\n    /* width: 11.11%; */\r\n    line-height: 1;\r\n}\r\n\r\n.nav-item:hover{\r\n    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */\r\n    filter: grayscale(100%);\r\n    cursor: pointer;\r\n}\r\n\r\n.navbar-nav .nav-link {\r\n    padding-right: 15px;\r\n    padding-left: 15px;\r\n   height: 40px;\r\n   bottom: -5px;\r\n    position: relative;\r\n}\r\n\r\n.nav-item-sub1{\r\n    background-image: url('/assets/images/menu/sport.jpg');\r\n    margin-left: 10px;\r\n    width: 25%;\r\n    height: auto;\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.nav-item-sub2{\r\n    background-image: url('/assets/images/menu/casino.jpg');\r\n    margin-left: 10px;\r\n    width: 25%;\r\n    height: auto;\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.nav-item-sub3{\r\n    background-image: url('/assets/images/menu/game.jpg');\r\n    margin-left: 10px;\r\n    width: 25%;\r\n    height: 220px;\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.nav-item-sub4{\r\n    background-image: url('/assets/images/menu/lotto.jpg');\r\n    margin-left: 10px;\r\n    width: 25%;\r\n    height: auto;\r\n    background-size: contain;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n@media screen and (min-width:300px) and (max-width:500px) {\r\n    .nav-item-sub1{\r\n        background-image: url('/assets/images/menu/sport.jpg');\r\n        margin-left: 10px;\r\n        width: 25%;\r\n        height: auto;\r\n        background-size: contain;\r\n        background-repeat: no-repeat;\r\n    }\r\n    .nav-item-sub2{\r\n        background-image: url('/assets/images/menu/casino.jpg');\r\n        margin-left: 10px;\r\n        width: 25%;\r\n        height: auto;\r\n        background-size: contain;\r\n        background-repeat: no-repeat;\r\n    }\r\n    .nav-item-sub3{\r\n        background-image: url('/assets/images/menu/game.jpg');\r\n        margin-left: 10px;\r\n        width: 25%;\r\n        height: auto;\r\n        background-size: contain;\r\n        background-repeat: no-repeat;\r\n    }\r\n    .nav-item-sub4{\r\n        background-image: url('/assets/images/menu/lotto.jpg');\r\n        margin-left: 10px;\r\n        width: 25%;\r\n        height: auto;\r\n        background-size: contain;\r\n        background-repeat: no-repeat;\r\n    }\r\n}\r\n\r\n.tab-menu .nav-link {\r\n    text-align: center;\r\n    width: 100%;\r\n    font-size: 14px;\r\n    color: #fff;\r\n    font-family: Kanit;\r\n    padding: 15px 0;\r\n    display: block;\r\n    background: #d42027;\r\n    position: relative;\r\n    margin: 0px;\r\n}\r\n\r\n.nav-item:first-child { \r\n    margin-left:0px;\r\n}\r\n\r\n.nav-pills .nav-item+.nav-item, .nav-tabs .nav-item+.nav-item {\r\n    margin-left: .2rem;\r\n}\r\n\r\n.nav-link {\r\n    color:#fff !important;\r\n    font-size: 12px  !important;\r\n    font-family: Kanit !important;\r\n}\r\n\r\n.hot {\r\n    color: #fff;\r\n    background-color: #d42027;\r\n    display: inline-block;\r\n    font-size: 8px;\r\n    padding: 1px 2px;\r\n    border-radius: 2px;\r\n    position: absolute;\r\n    -webkit-animation: blinker 1s linear infinite;\r\n            animation: blinker 1s linear infinite;\r\n    right: 0;\r\n    top: 25px;\r\n}\r\n\r\n.active-menu\r\n{\r\n    background: white;\r\n}\r\n\r\n.active-menu-text{\r\n    color:black !important;\r\n}\r\n\r\n@media screen and (min-width: 500px) and (max-width:639px) {\r\n    .subMenu{\r\n        height: 90px;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 640px) {\r\n    .subMenu{\r\n        height: 106px;\r\n    }\r\n}\r\n\r\n@media screen and (min-width:768px) and (max-width:900px) {\r\n    .subMenu{\r\n        display: flex;\r\n        height: 140px;\r\n    }\r\n}\r\n\r\n@media screen and (min-width:901px) and (max-width:1023px) {\r\n    .subMenu{\r\n        height: 180px;\r\n    }\r\n}\r\n\r\n@media (min-width: 1024px){\r\n    .subMenu{\r\n        display: flex;\r\n        height: 195px;\r\n    }\r\n}\r\n\r\n@media (min-width: 1100px){\r\n    .subMenu{\r\n        display: flex;\r\n        height: 190px;\r\n    }\r\n}\r\n\r\n@media (min-width: 1200px){\r\n    .subMenu{\r\n        display: flex;\r\n        height: 230px;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 1100px) {\r\n    .icon_menu_home{\r\n        width: 200px; height:auto;\r\n    }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZW51L21lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztBQUNmOztBQUNBO0lBQ0ksYUFBYTtBQUNqQjs7QUFDQTtJQUNJLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSwrQkFBK0IsRUFBRSxxQkFBcUI7SUFDdEQsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksWUFBWSxFQUFFLFdBQVc7QUFDN0I7O0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixjQUFjO0FBQ2xCOztBQUNBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCxtQkFBbUI7QUFDdkI7O0FBR0E7SUFDSSxXQUFXO0FBQ2Y7O0FBS0E7SUFDSSxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsY0FBYztBQUNsQjs7QUFDQTtJQUNJLCtCQUErQixFQUFFLHFCQUFxQjtJQUN0RCx1QkFBdUI7SUFDdkIsZUFBZTtBQUNuQjs7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7R0FDbkIsWUFBWTtHQUNaLFlBQVk7SUFDWCxrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxzREFBc0Q7SUFDdEQsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLDRCQUE0QjtBQUNoQzs7QUFDQTtJQUNJLHVEQUF1RDtJQUN2RCxpQkFBaUI7SUFDakIsVUFBVTtJQUNWLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIsNEJBQTRCO0FBQ2hDOztBQUNBO0lBQ0kscURBQXFEO0lBQ3JELGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsYUFBYTtJQUNiLHdCQUF3QjtJQUN4Qiw0QkFBNEI7QUFDaEM7O0FBQ0E7SUFDSSxzREFBc0Q7SUFDdEQsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJO1FBQ0ksc0RBQXNEO1FBQ3RELGlCQUFpQjtRQUNqQixVQUFVO1FBQ1YsWUFBWTtRQUNaLHdCQUF3QjtRQUN4Qiw0QkFBNEI7SUFDaEM7SUFDQTtRQUNJLHVEQUF1RDtRQUN2RCxpQkFBaUI7UUFDakIsVUFBVTtRQUNWLFlBQVk7UUFDWix3QkFBd0I7UUFDeEIsNEJBQTRCO0lBQ2hDO0lBQ0E7UUFDSSxxREFBcUQ7UUFDckQsaUJBQWlCO1FBQ2pCLFVBQVU7UUFDVixZQUFZO1FBQ1osd0JBQXdCO1FBQ3hCLDRCQUE0QjtJQUNoQztJQUNBO1FBQ0ksc0RBQXNEO1FBQ3RELGlCQUFpQjtRQUNqQixVQUFVO1FBQ1YsWUFBWTtRQUNaLHdCQUF3QjtRQUN4Qiw0QkFBNEI7SUFDaEM7QUFDSjs7QUFHQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZUFBZTtJQUNmLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsMkJBQTJCO0lBQzNCLDZCQUE2QjtBQUNqQzs7QUFDQTtJQUNJLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQiw2Q0FBcUM7WUFBckMscUNBQXFDO0lBQ3JDLFFBQVE7SUFDUixTQUFTO0FBQ2I7O0FBRUE7O0lBRUksaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUNBO0lBQ0k7UUFDSSxZQUFZO0lBQ2hCO0FBQ0o7O0FBQ0E7SUFDSTtRQUNJLGFBQWE7SUFDakI7QUFDSjs7QUFDQTtJQUNJO1FBQ0ksYUFBYTtRQUNiLGFBQWE7SUFDakI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjtBQUNKOztBQUNBO0lBQ0k7UUFDSSxhQUFhO1FBQ2IsYUFBYTtJQUNqQjtBQUNKOztBQUNBO0lBQ0k7UUFDSSxhQUFhO1FBQ2IsYUFBYTtJQUNqQjtBQUNKOztBQUNBO0lBQ0k7UUFDSSxhQUFhO1FBQ2IsYUFBYTtJQUNqQjtBQUNKOztBQUdBO0lBQ0k7UUFDSSxZQUFZLEVBQUUsV0FBVztJQUM3QjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tZW51L21lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lX21lbnV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTExMTExO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWluLWhlaWdodDogNDAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcblxyXG4ubWVudV90aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMS40ZW07XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxufVxyXG4ubWVudV9kZXN7XHJcbiAgICBjb2xvcjojQUI4ODQ3O1xyXG59XHJcbi5pY29uX21lbnVfYnRue1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5pY29uX21lbnVfYnRuOmhvdmVye1xyXG4gICAgLXdlYmtpdC1maWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTsgLyogU2FmYXJpIDYuMCAtIDkuMCAqL1xyXG4gICAgZmlsdGVyOiBncmF5c2NhbGUoMTAwJSk7XHJcbn1cclxuXHJcbi5pY29uX21lbnVfaG9tZXtcclxuICAgIHdpZHRoOiAxNTBweDsgaGVpZ2h0OmF1dG87XHJcbn1cclxuLmhvbWVfbWVudSAuY29udGFpbmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdW5zZXQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50ZXh0X21lbnV7XHJcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMmVtO1xyXG59XHJcbi50ZXh0X21lbnUye1xyXG4gICAgY2xlYXI6IGxlZnQ7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcblxyXG4uYXJlYV9tZW51e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi5zdWJNZW51e1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIC8qIGRpc3BsYXk6IG5vbmU7ICovXHJcbiAgICBtYXJnaW4tdG9wOjE1cHg7XHJcbn1cclxuLm5hdi1pdGVtLXN1YntcclxuICAgIC8qIHdpZHRoOiAxMS4xMSU7ICovXHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxufVxyXG4ubmF2LWl0ZW06aG92ZXJ7XHJcbiAgICAtd2Via2l0LWZpbHRlcjogZ3JheXNjYWxlKDEwMCUpOyAvKiBTYWZhcmkgNi4wIC0gOS4wICovXHJcbiAgICBmaWx0ZXI6IGdyYXlzY2FsZSgxMDAlKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ubmF2YmFyLW5hdiAubmF2LWxpbmsge1xyXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgaGVpZ2h0OiA0MHB4O1xyXG4gICBib3R0b206IC01cHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLm5hdi1pdGVtLXN1YjF7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL21lbnUvc3BvcnQuanBnJyk7XHJcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcbi5uYXYtaXRlbS1zdWIye1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9tZW51L2Nhc2luby5qcGcnKTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbn1cclxuLm5hdi1pdGVtLXN1YjN7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL21lbnUvZ2FtZS5qcGcnKTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIGhlaWdodDogMjIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcbi5uYXYtaXRlbS1zdWI0e1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvYXNzZXRzL2ltYWdlcy9tZW51L2xvdHRvLmpwZycpO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDozMDBweCkgYW5kIChtYXgtd2lkdGg6NTAwcHgpIHtcclxuICAgIC5uYXYtaXRlbS1zdWIxe1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvbWVudS9zcG9ydC5qcGcnKTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICB3aWR0aDogMjUlO1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIH1cclxuICAgIC5uYXYtaXRlbS1zdWIye1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvbWVudS9jYXNpbm8uanBnJyk7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgd2lkdGg6IDI1JTtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICB9XHJcbiAgICAubmF2LWl0ZW0tc3ViM3tcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvaW1hZ2VzL21lbnUvZ2FtZS5qcGcnKTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICB3aWR0aDogMjUlO1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIH1cclxuICAgIC5uYXYtaXRlbS1zdWI0e1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9pbWFnZXMvbWVudS9sb3R0by5qcGcnKTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICB3aWR0aDogMjUlO1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi50YWItbWVudSAubmF2LWxpbmsge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtZmFtaWx5OiBLYW5pdDtcclxuICAgIHBhZGRpbmc6IDE1cHggMDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYmFja2dyb3VuZDogI2Q0MjAyNztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG4ubmF2LWl0ZW06Zmlyc3QtY2hpbGQgeyBcclxuICAgIG1hcmdpbi1sZWZ0OjBweDtcclxufVxyXG5cclxuLm5hdi1waWxscyAubmF2LWl0ZW0rLm5hdi1pdGVtLCAubmF2LXRhYnMgLm5hdi1pdGVtKy5uYXYtaXRlbSB7XHJcbiAgICBtYXJnaW4tbGVmdDogLjJyZW07XHJcbn1cclxuXHJcbi5uYXYtbGluayB7XHJcbiAgICBjb2xvcjojZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDEycHggICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LWZhbWlseTogS2FuaXQgIWltcG9ydGFudDtcclxufVxyXG4uaG90IHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q0MjAyNztcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogOHB4O1xyXG4gICAgcGFkZGluZzogMXB4IDJweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGFuaW1hdGlvbjogYmxpbmtlciAxcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMjVweDtcclxufVxyXG5cclxuLmFjdGl2ZS1tZW51XHJcbntcclxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcbi5hY3RpdmUtbWVudS10ZXh0e1xyXG4gICAgY29sb3I6YmxhY2sgIWltcG9ydGFudDtcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MDBweCkgYW5kIChtYXgtd2lkdGg6NjM5cHgpIHtcclxuICAgIC5zdWJNZW51e1xyXG4gICAgICAgIGhlaWdodDogOTBweDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2NDBweCkge1xyXG4gICAgLnN1Yk1lbnV7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDZweDtcclxuICAgIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjc2OHB4KSBhbmQgKG1heC13aWR0aDo5MDBweCkge1xyXG4gICAgLnN1Yk1lbnV7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBoZWlnaHQ6IDE0MHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjkwMXB4KSBhbmQgKG1heC13aWR0aDoxMDIzcHgpIHtcclxuICAgIC5zdWJNZW51e1xyXG4gICAgICAgIGhlaWdodDogMTgwcHg7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCl7XHJcbiAgICAuc3ViTWVudXtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGhlaWdodDogMTk1cHg7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDExMDBweCl7XHJcbiAgICAuc3ViTWVudXtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGhlaWdodDogMTkwcHg7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCl7XHJcbiAgICAuc3ViTWVudXtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGhlaWdodDogMjMwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMTAwcHgpIHtcclxuICAgIC5pY29uX21lbnVfaG9tZXtcclxuICAgICAgICB3aWR0aDogMjAwcHg7IGhlaWdodDphdXRvO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/menu/menu.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/menu/menu.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div  class=\" navbar-collapse\" >\n    <ul class=\"navbar-nav subMenu\">\n      <li   class=\"nav-item nav-item-sub1  \">\n          <a   class=\"nav-link js-scroll-trigger tab-menu\"  ></a>\n      </li>\n      <li   class=\"nav-item nav-item-sub2  \">\n          <a   class=\"nav-link js-scroll-trigger tab-menu\"  ></a>\n      </li>\n      <li   class=\"nav-item nav-item-sub3  \">\n          <a   class=\"nav-link js-scroll-trigger tab-menu\" ></a>\n      </li>\n      <li   class=\"nav-item nav-item-sub4  \">\n          <a   class=\"nav-link js-scroll-trigger tab-menu\"  ></a>\n      </li>\n    </ul>\n</div> -->\n\n<div class=\"home_menu\">\n    <div class=\"container\"> \n        <div class=\"text_menu\">ยินดีต้อนรับเข้าสู่เว็บ <span class=\"text_gold_menu\">CONNER888.COM</span> คาสิโน กีฬา ออนไลน์</div>\n        <div class=\"text_menu2 text_gold_menu\">ดีที่สุดอันดับ 1 ของคนไทย</div>\n\n        <div class=\"area_menu\">\n            <div class=\"row icon_menu\">\n                <div class=\"col-6 icon_menu_btn\" routerLink=\"/page/register\"  ><img src=\"/assets/images/menu/re1.png\"  class=\"icon_menu_home\" >\n                    <div class=\"menu_title\">สมัครสมาชิก</div>\n                    <div class=\"menu_des\">สมัครง่ายไม่ยุ่งยาก แนะนำใส่ข้อมูลจริง</div>\n                </div>\n                <div class=\"col-6 icon_menu_btn\" routerLink=\"/page/howtoplay\"  ><img src=\"/assets/images/menu/re3.png\"  class=\"icon_menu_home\" >\n                    <div class=\"menu_title\">เข้าเล่นเกมส์</div>\n                    <div class=\"menu_des\">สนุกกับเกมส์/คาสิโน/บอล/มวย/หวย</div>\n                </div>\n            </div>\n            <div class=\"row icon_menu\">\n                    <div class=\"col-6 icon_menu_btn\" routerLink=\"/page/deposit\"  ><img src=\"/assets/images/menu/re2.png\"  class=\"icon_menu_home\" >\n                        <div class=\"menu_title\">ทำรายการฝาก</div>\n                        <div class=\"menu_des\">ทำรายการฝากขั้นต่ำ 100 บาท</div>\n                    </div>\n                    <div class=\"col-6 icon_menu_btn\" routerLink=\"/page/withdraw\"  ><img src=\"/assets/images/menu/re4.png\"  class=\"icon_menu_home\" >\n                        <div class=\"menu_title\">ทำรายการถอน</div>\n                        <div class=\"menu_des\">ทำรายการถอนออกขั้นต่ำ 300 บาท</div>\n                    </div>\n            </div>\n        </div>\n        \n    </div>\n</div>\n<!-- routerLink=\"{{todo.tag_nav}}\" -->"

/***/ }),

/***/ "./src/app/components/menu/menu.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/menu/menu.component.ts ***!
  \***************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/components/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/components/menu/menu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/components/news-detail/news-detail.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/news-detail/news-detail.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tileDetail {\r\n    margin-top: 15px;\r\n    margin-left: 15px;\r\n    margin-right: 15px;\r\n    overflow: hidden;\r\n    height: auto;\r\n    border: 1px solid #D10000;\r\n    background: #D10000;\r\n    color: white;\r\n    padding: 10px;\r\n    font-size: 1.2em;\r\n    clear: left;\r\n}\r\n.titlePage{\r\n    margin-top:15px;\r\n    background-color: #1E1E1E;\r\n    color: white;\r\n    padding:15px 0px 15px 15px;\r\n    font-size: 1.2em;\r\n    margin-left: 15px;\r\n    margin-right: 15px;\r\n}\r\n.navLink{\r\n    margin-top: 15px;\r\n    margin-left: 15px;\r\n    margin-right: 15px;\r\n    overflow: hidden;\r\n    height: auto;\r\n    color: white;\r\n    font-size: 1em;\r\n    clear: left;\r\n    font-weight: 100 !important;\r\n}\r\n.navFirst:hover{\r\n    cursor: pointer;\r\n}\r\n.navFirst{\r\n    float: left;\r\n    margin-right: 5px;\r\n    text-decoration: underline;\r\n}\r\n.contentBotArea{\r\n    float: left;\r\n    width: 100%;\r\n}\r\n.titleContent{\r\n    border-top:1px solid #D2AE70;\r\n    padding-top:10px;\r\n}\r\n.titleContentBot{\r\n    background: #D10000;\r\n    color: white;\r\n    padding: 10px;\r\n    margin-top:10px;\r\n    float: left;\r\n    width: 100%;\r\n}\r\n.titleLeft{\r\n    float: left;\r\n    color: white;\r\n    font-size: 1.6em;\r\n\r\n}\r\n.viewmore{\r\n    float: right;\r\n    margin-top:6px;\r\n    color:#E8CF01;\r\n}\r\n.dataContentBot{\r\n    /* min-height: 500px; */\r\n    float: left;\r\n    width: 100%;\r\n}\r\n.bootCols{\r\n    height:100px;\r\n    margin:0;\r\n    box-sizing:border-box;\r\n    padding:5px;\r\n    border:2px solid black;\r\n    background-color:red;\r\n  }\r\n.row{\r\n      margin-left:0px;\r\n      margin-right: 0px;\r\n  }\r\n.newsArea{\r\n      height: auto;\r\n      margin-top: 0px;\r\n      /* border: 2px solid red; */\r\n      padding: 0px;\r\n      min-height: 300px;\r\n      text-overflow: ellipsis;\r\n      overflow: hidden;\r\n      padding-left:5px;\r\n      padding-right:5px;\r\n  }\r\n.cardNews{\r\n    height: 100%;\r\n    border: 2px solid red;\r\n  }\r\n.image-news{\r\n      height: calc( 100% - 70px );\r\n      background-size: cover;\r\n      background-position: center;\r\n  }\r\n.text-news{\r\n      padding:10px;\r\n      border-top:1px solid red;\r\n      color:white;\r\n      min-height: 50px;\r\n      \r\n  }\r\n.image-news{\r\n      margin-bottom: 15px;\r\n  }\r\n.newsArea:hover {\r\n    cursor: unset !important;\r\n    -webkit-filter: unset!important;\r\n    filter: unset!important;\r\n    }\r\n@media screen and (min-width: 1200px) {\r\n\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uZXdzLWRldGFpbC9uZXdzLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osMEJBQTBCO0lBQzFCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFlBQVk7SUFDWixjQUFjO0lBQ2QsV0FBVztJQUNYLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUVBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtJQUNqQiwwQkFBMEI7QUFDOUI7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osYUFBYTtJQUNiLGVBQWU7SUFDZixXQUFXO0lBQ1gsV0FBVztBQUNmO0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjs7QUFFcEI7QUFDQTtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2QsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7QUFFQTtJQUNJLFlBQVk7SUFDWixRQUFRO0lBQ1IscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsb0JBQW9CO0VBQ3RCO0FBQ0E7TUFDSSxlQUFlO01BQ2YsaUJBQWlCO0VBQ3JCO0FBQ0E7TUFDSSxZQUFZO01BQ1osZUFBZTtNQUNmLDJCQUEyQjtNQUMzQixZQUFZO01BQ1osaUJBQWlCO01BQ2pCLHVCQUF1QjtNQUN2QixnQkFBZ0I7TUFDaEIsZ0JBQWdCO01BQ2hCLGlCQUFpQjtFQUNyQjtBQUVBO0lBQ0UsWUFBWTtJQUNaLHFCQUFxQjtFQUN2QjtBQUNBO01BQ0ksMkJBQTJCO01BQzNCLHNCQUFzQjtNQUN0QiwyQkFBMkI7RUFDL0I7QUFDQTtNQUNJLFlBQVk7TUFDWix3QkFBd0I7TUFDeEIsV0FBVztNQUNYLGdCQUFnQjs7RUFFcEI7QUFDQTtNQUNJLG1CQUFtQjtFQUN2QjtBQUNBO0lBQ0Usd0JBQXdCO0lBQ3hCLCtCQUErQjtJQUMvQix1QkFBdUI7SUFDdkI7QUFFSjs7O0FBR0EiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25ld3MtZGV0YWlsL25ld3MtZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGlsZURldGFpbCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0QxMDAwMDtcclxuICAgIGJhY2tncm91bmQ6ICNEMTAwMDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgIGNsZWFyOiBsZWZ0O1xyXG59XHJcbi50aXRsZVBhZ2V7XHJcbiAgICBtYXJnaW4tdG9wOjE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUUxRTFFO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzoxNXB4IDBweCAxNXB4IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbn1cclxuLm5hdkxpbmt7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBjbGVhcjogbGVmdDtcclxuICAgIGZvbnQtd2VpZ2h0OiAxMDAgIWltcG9ydGFudDtcclxufVxyXG4ubmF2Rmlyc3Q6aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5uYXZGaXJzdHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLmNvbnRlbnRCb3RBcmVhe1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnRpdGxlQ29udGVudHtcclxuICAgIGJvcmRlci10b3A6MXB4IHNvbGlkICNEMkFFNzA7XHJcbiAgICBwYWRkaW5nLXRvcDoxMHB4O1xyXG59XHJcblxyXG4udGl0bGVDb250ZW50Qm90e1xyXG4gICAgYmFja2dyb3VuZDogI0QxMDAwMDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOjEwcHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4udGl0bGVMZWZ0e1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDEuNmVtO1xyXG5cclxufVxyXG4udmlld21vcmV7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW4tdG9wOjZweDtcclxuICAgIGNvbG9yOiNFOENGMDE7XHJcbn1cclxuLmRhdGFDb250ZW50Qm90e1xyXG4gICAgLyogbWluLWhlaWdodDogNTAwcHg7ICovXHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYm9vdENvbHN7XHJcbiAgICBoZWlnaHQ6MTAwcHg7XHJcbiAgICBtYXJnaW46MDtcclxuICAgIGJveC1zaXppbmc6Ym9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6NXB4O1xyXG4gICAgYm9yZGVyOjJweCBzb2xpZCBibGFjaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmVkO1xyXG4gIH1cclxuICAucm93e1xyXG4gICAgICBtYXJnaW4tbGVmdDowcHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gIH1cclxuICAubmV3c0FyZWF7XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICAvKiBib3JkZXI6IDJweCBzb2xpZCByZWQ7ICovXHJcbiAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgbWluLWhlaWdodDogMzAwcHg7XHJcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6NXB4O1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OjVweDtcclxuICB9XHJcbiAgXHJcbiAgLmNhcmROZXdze1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgcmVkO1xyXG4gIH1cclxuICAuaW1hZ2UtbmV3c3tcclxuICAgICAgaGVpZ2h0OiBjYWxjKCAxMDAlIC0gNzBweCApO1xyXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC50ZXh0LW5ld3N7XHJcbiAgICAgIHBhZGRpbmc6MTBweDtcclxuICAgICAgYm9yZGVyLXRvcDoxcHggc29saWQgcmVkO1xyXG4gICAgICBjb2xvcjp3aGl0ZTtcclxuICAgICAgbWluLWhlaWdodDogNTBweDtcclxuICAgICAgXHJcbiAgfVxyXG4gIC5pbWFnZS1uZXdze1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIH1cclxuICAubmV3c0FyZWE6aG92ZXIge1xyXG4gICAgY3Vyc29yOiB1bnNldCAhaW1wb3J0YW50O1xyXG4gICAgLXdlYmtpdC1maWx0ZXI6IHVuc2V0IWltcG9ydGFudDtcclxuICAgIGZpbHRlcjogdW5zZXQhaW1wb3J0YW50O1xyXG4gICAgfVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcblxyXG4gICAgXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/news-detail/news-detail.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/news-detail/news-detail.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container container_a\">\n  <div class=\"titlePage\">\n      {{adjust_page_title}}\n  </div>\n  <div class=\"contentPageArea\">\n      <div class=\"row\">\n          <div class=\"col\">\n              \n          </div>\n          <div class=\"col-xl-6 col-md-6 col-sm-12 newsArea image-news\" [ngStyle]=\"{backgroundImage:'url(' + adjust_page_image_url  + ')'}\">\n            </div>\n          <div class=\"col\">\n            \n          </div>\n        </div>\n      \n        <div class=\"titleContent\" [innerHTML]=\"adjust_page_description | sanitizeHtml\"></div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/news-detail/news-detail.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/news-detail/news-detail.component.ts ***!
  \*****************************************************************/
/*! exports provided: NewsDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsDetailComponent", function() { return NewsDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_service_todo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/todo.service */ "./src/app/service/todo.service.ts");




var NewsDetailComponent = /** @class */ (function () {
    function NewsDetailComponent(route, todoServcie) {
        this.route = route;
        this.todoServcie = todoServcie;
    }
    NewsDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = params['id'].split("-")[1];
            // this.id =  params['id'];
            _this.todoServcie.getDetailNews(_this.id).subscribe(function (response) {
                _this.adjust_page_title = response[0].adjust_page_title;
                _this.adjust_page_image_url = 'upload/files/' + response[0].adjust_page_image_name + '.' + response[0].adjust_page_image_type;
                _this.adjust_page_description = response[0].adjust_page_description;
                _this.todoNewsDetail = response[0];
            });
        });
    };
    NewsDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-news-detail',
            template: __webpack_require__(/*! ./news-detail.component.html */ "./src/app/components/news-detail/news-detail.component.html"),
            styles: [__webpack_require__(/*! ./news-detail.component.css */ "./src/app/components/news-detail/news-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_service_todo_service__WEBPACK_IMPORTED_MODULE_3__["TodoService"]])
    ], NewsDetailComponent);
    return NewsDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/news/news.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/news/news.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contentBotArea{\r\n    float: left;\r\n    width: 100%;\r\n}\r\n.titlePage{\r\n    margin-top:15px;\r\n    background-color: #1E1E1E;\r\n    color: white;\r\n    padding:15px 0px 15px 15px;\r\n    font-size: 1.2em;\r\n    margin-left: 15px;\r\n    margin-right: 15px;\r\n}\r\n.titleContentBot{\r\n    background: #D10000;\r\n    color: white;\r\n    padding: 10px;\r\n    margin-top:10px;\r\n    float: left;\r\n    width: 100%;\r\n}\r\n.titleLeft{\r\n    float: left;\r\n    color: white;\r\n    font-size: 1.6em;\r\n\r\n}\r\n.viewmore{\r\n    float: right;\r\n    margin-top:6px;\r\n    color:#E8CF01;\r\n}\r\n.dataContentBot{\r\n    /* min-height: 500px; */\r\n    float: left;\r\n    width: 100%;\r\n}\r\n.bootCols{\r\n    height:100px;\r\n    margin:0;\r\n    box-sizing:border-box;\r\n    padding:5px;\r\n    border:2px solid black;\r\n    background-color:red;\r\n  }\r\n.row{\r\n      margin-left:0px;\r\n      margin-right: 0px;\r\n  }\r\n.newsArea{\r\n      height: auto;\r\n      margin-top: 10px;\r\n      /* border: 2px solid red; */\r\n      padding: 0px;\r\n      min-height: 300px;\r\n      text-overflow: ellipsis;\r\n      overflow: hidden;\r\n      padding-left:5px;\r\n      padding-right:5px;\r\n  }\r\n.cardNews{\r\n    height: 100%;\r\n    border: 2px solid #D2AE70;\r\n  }\r\n.image-news{\r\n      height: calc( 100% - 70px );\r\n      background-size: cover;\r\n      background-position: center;\r\n  }\r\n.text-news{\r\n      padding:10px;\r\n      border-top:1px solid #D2AE70;\r\n      color:white;\r\n      min-height: 50px;\r\n      \r\n  }\r\n.pagination{\r\n        margin-top:15px;\r\n        color: white !important;\r\n    }\r\n.ngx-pagination a, .ngx-pagination button {\r\n        color: white !important;\r\n    }\r\n.ngx-pagination a, .ngx-pagination button {\r\n        color: white !important;\r\n    }\r\n@media screen and (min-width: 1200px) {\r\n\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uZXdzL25ld3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7QUFDQTtJQUNJLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLDBCQUEwQjtJQUMxQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixhQUFhO0lBQ2IsZUFBZTtJQUNmLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCOztBQUVwQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsV0FBVztJQUNYLFdBQVc7QUFDZjtBQUVBO0lBQ0ksWUFBWTtJQUNaLFFBQVE7SUFDUixxQkFBcUI7SUFDckIsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixvQkFBb0I7RUFDdEI7QUFDQTtNQUNJLGVBQWU7TUFDZixpQkFBaUI7RUFDckI7QUFDQTtNQUNJLFlBQVk7TUFDWixnQkFBZ0I7TUFDaEIsMkJBQTJCO01BQzNCLFlBQVk7TUFDWixpQkFBaUI7TUFDakIsdUJBQXVCO01BQ3ZCLGdCQUFnQjtNQUNoQixnQkFBZ0I7TUFDaEIsaUJBQWlCO0VBQ3JCO0FBRUE7SUFDRSxZQUFZO0lBQ1oseUJBQXlCO0VBQzNCO0FBQ0E7TUFDSSwyQkFBMkI7TUFDM0Isc0JBQXNCO01BQ3RCLDJCQUEyQjtFQUMvQjtBQUNBO01BQ0ksWUFBWTtNQUNaLDRCQUE0QjtNQUM1QixXQUFXO01BQ1gsZ0JBQWdCOztFQUVwQjtBQUVFO1FBQ0ksZUFBZTtRQUNmLHVCQUF1QjtJQUMzQjtBQUNBO1FBQ0ksdUJBQXVCO0lBQzNCO0FBQ0E7UUFDSSx1QkFBdUI7SUFDM0I7QUFDSjs7O0FBR0EiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25ld3MvbmV3cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnRCb3RBcmVhe1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4udGl0bGVQYWdle1xyXG4gICAgbWFyZ2luLXRvcDoxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFFMUUxRTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6MTVweCAwcHggMTVweCAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG59XHJcbi50aXRsZUNvbnRlbnRCb3R7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRDEwMDAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbi10b3A6MTBweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnRpdGxlTGVmdHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxLjZlbTtcclxuXHJcbn1cclxuLnZpZXdtb3Jle1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXRvcDo2cHg7XHJcbiAgICBjb2xvcjojRThDRjAxO1xyXG59XHJcbi5kYXRhQ29udGVudEJvdHtcclxuICAgIC8qIG1pbi1oZWlnaHQ6IDUwMHB4OyAqL1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmJvb3RDb2xze1xyXG4gICAgaGVpZ2h0OjEwMHB4O1xyXG4gICAgbWFyZ2luOjA7XHJcbiAgICBib3gtc2l6aW5nOmJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOjVweDtcclxuICAgIGJvcmRlcjoycHggc29saWQgYmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJlZDtcclxuICB9XHJcbiAgLnJvd3tcclxuICAgICAgbWFyZ2luLWxlZnQ6MHB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICB9XHJcbiAgLm5ld3NBcmVhe1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIHJlZDsgKi9cclxuICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICBtaW4taGVpZ2h0OiAzMDBweDtcclxuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIHBhZGRpbmctbGVmdDo1cHg7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6NXB4O1xyXG4gIH1cclxuICBcclxuICAuY2FyZE5ld3N7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjRDJBRTcwO1xyXG4gIH1cclxuICAuaW1hZ2UtbmV3c3tcclxuICAgICAgaGVpZ2h0OiBjYWxjKCAxMDAlIC0gNzBweCApO1xyXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC50ZXh0LW5ld3N7XHJcbiAgICAgIHBhZGRpbmc6MTBweDtcclxuICAgICAgYm9yZGVyLXRvcDoxcHggc29saWQgI0QyQUU3MDtcclxuICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgICAgIFxyXG4gIH1cclxuXHJcbiAgICAucGFnaW5hdGlvbntcclxuICAgICAgICBtYXJnaW4tdG9wOjE1cHg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAubmd4LXBhZ2luYXRpb24gYSwgLm5neC1wYWdpbmF0aW9uIGJ1dHRvbiB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAubmd4LXBhZ2luYXRpb24gYSwgLm5neC1wYWdpbmF0aW9uIGJ1dHRvbiB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG5cclxuICAgIFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/news/news.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/news/news.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container container_a\">\n    <div class=\"titlePage\">\n        บทความ\n    </div>\n  <div class=\"contentPageArea\">\n    <div class=\"titleContent\">\n    <div class=\"dataContentBot\">\n      <div class=\"row\">\n          <!-- <div class=\"col-xl-3 col-md-6 col-sm-12 newsArea\" *ngFor=\"let todo of todoList;\" [routerLink]=\"['news-detail',todo.content_title+'-'+todo.content_id]\"> -->\n          <!-- <div class=\"col-xl-3 col-md-6 col-sm-12 newsArea\" *ngFor=\"let todo of todoList | paginate: { itemsPerPage: 8, currentPage: pageNews }\"  [routerLink]=\"['news-detail',todo.content_id]\"> -->\n            <div class=\"col-xl-3 col-md-6 col-sm-12 newsArea\" *ngFor=\"let todo of todoList | paginate: { itemsPerPage: 8, currentPage: pageNews }\"  [routerLink]=\"['/blog/blog-detail',todo.adjust_page_title+'-'+todo.adjust_page_id]\">\n              <div  class=\"cardNews\">\n                <div class=\"image-news\"  [ngStyle]=\"{backgroundImage:'url(/upload/files/' + todo.adjust_page_image_name  + '.' + todo.adjust_page_image_type  + ')'}\" >\n                </div>\n                <div class=\"text-news\">\n                    {{todo.adjust_page_title}}\n                </div>\n              </div>\n          </div>\n          \n      </div>\n      <div class=\"row\">\n          <div class=\"col\">\n          </div>\n          <div class=\"col-xl-4 col-md-6 col-sm-12\">\n            <pagination-controls class=\"pagination\" (pageChange)=\"pageNews = $event\"></pagination-controls>\n          </div>\n          <div class=\"col\">\n            \n          </div>\n        </div>\n      \n    </div>\n  </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/news/news.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/news/news.component.ts ***!
  \***************************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/todo.service */ "./src/app/service/todo.service.ts");



var NewsComponent = /** @class */ (function () {
    function NewsComponent(todoServcie) {
        this.todoServcie = todoServcie;
        this.pageNews = "";
    }
    NewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        //call service
        this.todoServcie.getTodoList(1).subscribe(function (response) {
            // console.log(response);
            _this.todoList = response;
        });
    };
    NewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-news',
            template: __webpack_require__(/*! ./news.component.html */ "./src/app/components/news/news.component.html"),
            styles: [__webpack_require__(/*! ./news.component.css */ "./src/app/components/news/news.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"]])
    ], NewsComponent);
    return NewsComponent;
}());



/***/ }),

/***/ "./src/app/components/page/page.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/page/page.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".titlePage{\r\n    margin-top: -40px;\r\n    color: #363636;\r\n    font-size: 1.5em;\r\n    position: relative;\r\n    text-align: center;\r\n    font-weight: bolder;\r\n}\r\n.header_page{\r\n    \r\n}\r\n.title_page{\r\n    background-image: url(\"/assets/images/content/tabmenu.png\");\r\n    background-position: center center;\r\n    background-size: cover;\r\n    height: 50px;\r\n    text-align: center;\r\n    font-size: 1.5em;\r\n    padding-top:5px;\r\n    \r\n}\r\n@media screen and (min-width: 320px) {\r\n    .title_page{\r\n        margin-top: 154px;\r\n    }\r\n}\r\n@media screen and (min-width: 375px) {\r\n    .title_page{\r\n        margin-top: 114px;\r\n    }\r\n}\r\n@media screen and (min-width: 500px) {\r\n    .title_page{\r\n        margin-top: 74px;\r\n    }\r\n}\r\n@media screen and (min-width: 1000px) {\r\n    .title_page{\r\n        background-image: url(\"/assets/images/content/tabmenu.png\");\r\n        background-position: center center;\r\n        background-size: cover;\r\n        height: 50px;\r\n        text-align: center;\r\n        font-size: 1.5em;\r\n        padding-top:5px;\r\n        margin-top: 0px;\r\n    }\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wYWdlL3BhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7O0FBRUE7QUFDQTtJQUNJLDJEQUEyRDtJQUMzRCxrQ0FBa0M7SUFDbEMsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGVBQWU7O0FBRW5CO0FBQ0E7SUFDSTtRQUNJLGlCQUFpQjtJQUNyQjtBQUNKO0FBQ0E7SUFDSTtRQUNJLGlCQUFpQjtJQUNyQjtBQUNKO0FBQ0E7SUFDSTtRQUNJLGdCQUFnQjtJQUNwQjtBQUNKO0FBQ0E7SUFDSTtRQUNJLDJEQUEyRDtRQUMzRCxrQ0FBa0M7UUFDbEMsc0JBQXNCO1FBQ3RCLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsZ0JBQWdCO1FBQ2hCLGVBQWU7UUFDZixlQUFlO0lBQ25CO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BhZ2UvcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlUGFnZXtcclxuICAgIG1hcmdpbi10b3A6IC00MHB4O1xyXG4gICAgY29sb3I6ICMzNjM2MzY7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxufVxyXG4uaGVhZGVyX3BhZ2V7XHJcbiAgICBcclxufVxyXG4udGl0bGVfcGFnZXtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL2NvbnRlbnQvdGFibWVudS5wbmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICBwYWRkaW5nLXRvcDo1cHg7XHJcbiAgICBcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkge1xyXG4gICAgLnRpdGxlX3BhZ2V7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTU0cHg7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMzc1cHgpIHtcclxuICAgIC50aXRsZV9wYWdle1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDExNHB4O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDUwMHB4KSB7XHJcbiAgICAudGl0bGVfcGFnZXtcclxuICAgICAgICBtYXJnaW4tdG9wOiA3NHB4O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMDBweCkge1xyXG4gICAgLnRpdGxlX3BhZ2V7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvY29udGVudC90YWJtZW51LnBuZ1wiKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOjVweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICB9XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/components/page/page.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/page/page.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container\" style=\"background: unset;\">\r\n        <div class=\"header_bar\">\r\n                <img src=\"/assets/images/header/header_bar.png\">\r\n        </div>\r\n</div> -->\r\n<!-- <ng-container *ngIf=\"id!='register'&&id!='deposit'&&id!='withdraw'\"> -->\r\n        <div _ngcontent-wkk-c4=\"\" class=\"container\" style=\"background: unset;\"><div _ngcontent-wkk-c4=\"\" class=\"header_bar\"><img _ngcontent-wkk-c4=\"\" src=\"/assets/images/header/header_bar.png\"></div></div>\r\n        \r\n        <div class=\"container \" style=\"border-top: 3px solid #BD9A23;\">\r\n                <div class=\"content_header\" >&nbsp;</div>\r\n                <div class=\"titlePage\">  {{data_title}} </div>\r\n                <div *ngIf=\"id!='contact'\"class=\"contentPageArea\">\r\n                        <div class=\"titleContent\" [innerHTML]=\"data_deatail | sanitizeHtml\"></div>\r\n                </div>\r\n                <div *ngIf=\"id=='contact'\"class=\"contentPageArea\" style=\"border:0px;\">\r\n                        <div *ngIf=\"id=='contact'\" style=\"margin-top:30px;\" [innerHTML]=\"data_deatail | sanitizeHtml\"></div>\r\n                </div>\r\n        </div>\r\n<!-- </ng-container> -->\r\n\r\n<!-- <ng-container *ngIf=\"id=='register'||id=='deposit'||id=='withdraw'\">\r\n        <div style=\"width: 100%;height:105%;\" [innerHTML]=\"data_deatail | sanitizeHtml\"></div>\r\n</ng-container> -->\r\n        \r\n"

/***/ }),

/***/ "./src/app/components/page/page.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/page/page.component.ts ***!
  \***************************************************/
/*! exports provided: PageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageComponent", function() { return PageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_service_todo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/todo.service */ "./src/app/service/todo.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");





var PageComponent = /** @class */ (function () {
    function PageComponent(route, todoServcie) {
        this.route = route;
        this.todoServcie = todoServcie;
        this.data_deatail = "<img src='/assets/images/loading/05.gif'>";
    }
    PageComponent.prototype.intercept = function (req, next) {
        var httpRequest = req.clone({
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Cache-Control': 'no-cache',
                'Pragma': 'no-cache',
                'Expires': 'Sat, 01 Jan 3000 00:00:00 GMT'
            })
        });
        return next.handle(httpRequest);
    };
    PageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            if (_this.value_app != null) {
                _this.id = _this.value_app;
            }
            // this.id =  params['id'];
            _this.todoServcie.getDataPage(_this.id).subscribe(function (response) {
                _this.data_title = response.data.menu_name;
                _this.data_deatail = response.data.menu_detail;
                // if(this.id=='register'||this.id=='deposit'||this.id=='withdraw'){
                //   $("#content_html").replaceWith(response.data.menu_detail);
                // }else{
                //   this.data_title = response.data.menu_name;
                //   this.data_deatail = response.data.menu_detail;
                // }
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('value_app'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], PageComponent.prototype, "value_app", void 0);
    PageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page',
            template: __webpack_require__(/*! ./page.component.html */ "./src/app/components/page/page.component.html"),
            styles: [__webpack_require__(/*! ./page.component.css */ "./src/app/components/page/page.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_service_todo_service__WEBPACK_IMPORTED_MODULE_3__["TodoService"]])
    ], PageComponent);
    return PageComponent;
}());



/***/ }),

/***/ "./src/app/components/promotion-detail/promotion-detail.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/components/promotion-detail/promotion-detail.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tileDetail {\r\n    margin-top: 15px;\r\n    margin-left: 15px;\r\n    margin-right: 15px;\r\n    overflow: hidden;\r\n    height: auto;\r\n    border: 1px solid #D10000;\r\n    background: #D10000;\r\n    color: white;\r\n    padding: 10px;\r\n    font-size: 1.2em;\r\n    clear: left;\r\n}\r\n.container{\r\n    background: rgba(9, 10, 12, 0.77);\r\n}\r\n.titlePromotion{\r\n    background: rgba(55, 57, 59, 0.144);\r\n    margin-bottom: 5px;\r\n}\r\n.contentPageArea{\r\n    background: rgba(51, 51, 51, 0.77);\r\n    margin-left: 30px;\r\n    margin-right: 30px;\r\n    margin-bottom: 30px;\r\n    margin-top:30px ;\r\n}\r\n.bg_color{\r\n    \r\n}\r\n.cycle_red{\r\n    background-color: red;\r\n    border-radius: 50%;\r\n    width: 15px;\r\n    height: 15px;\r\n    margin-right: 5px;\r\n    margin-top: 5px;\r\n    float: left;\r\n}\r\n.titlePage{\r\n    margin-top: -40px;\r\n    color: white;\r\n    font-size: 1.5em;\r\n    position: relative;\r\n    text-align: center;\r\n    font-weight: bolder;\r\n    position: relative;\r\n    z-index: 2;\r\n}\r\n.navLink{\r\n    margin-top: 15px;\r\n    margin-left: 15px;\r\n    margin-right: 15px;\r\n    overflow: hidden;\r\n    height: auto;\r\n    color: white;\r\n    font-size: 1em;\r\n    clear: left;\r\n    font-weight: 100 !important;\r\n}\r\n.img_center{\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    width: 90%;\r\n}\r\n.navFirst:hover{\r\n    cursor: pointer;\r\n}\r\n.navFirst{\r\n    float: left;\r\n    margin-right: 5px;\r\n    /* text-decoration: underline; */\r\n}\r\n.contentBotArea{\r\n    float: left;\r\n    width: 100%;\r\n}\r\n.titleContent{\r\n    border-top:1px solid #D2AE70;\r\n    padding-top:10px;\r\n}\r\n.titleContentBot{\r\n    background: #D10000;\r\n    color: white;\r\n    padding: 10px;\r\n    margin-top:10px;\r\n    float: left;\r\n    width: 100%;\r\n}\r\n.titleLeft{\r\n    float: left;\r\n    color: white;\r\n    font-size: 1.6em;\r\n\r\n}\r\n.viewmore{\r\n    float: right;\r\n    margin-top:6px;\r\n    color:#E8CF01;\r\n}\r\n.dataContentBot{\r\n    /* min-height: 500px; */\r\n    float: left;\r\n    width: 100%;\r\n}\r\n.bootCols{\r\n    height:100px;\r\n    margin:0;\r\n    box-sizing:border-box;\r\n    padding:5px;\r\n    border:2px solid black;\r\n    background-color:red;\r\n  }\r\n.row{\r\n      margin-left:0px;\r\n      margin-right: 0px;\r\n  }\r\n.newsArea{\r\n      height: auto;\r\n      margin-top: 0px;\r\n      /* border: 2px solid red; */\r\n      padding: 0px;\r\n      min-height: 190px;\r\n      text-overflow: ellipsis;\r\n      overflow: hidden;\r\n      padding-left:5px;\r\n      padding-right:5px;\r\n  }\r\n.cardNews{\r\n    height: 100%;\r\n    border: 2px solid red;\r\n  }\r\n.image-news{\r\n      height: calc( 100% - 70px );\r\n      background-size: cover;\r\n      background-position: center;\r\n  }\r\n.text-news{\r\n      padding:10px;\r\n      border-top:1px solid red;\r\n      color:white;\r\n      min-height: 50px;\r\n      \r\n  }\r\n.image-news{\r\n      margin-bottom: 15px;\r\n  }\r\n.newsArea:hover {\r\n    cursor: unset !important;\r\n    -webkit-filter: unset!important;\r\n    filter: unset!important;\r\n    }\r\n.header_page{\r\n        background-image: url(\"/assets/images/content/bgmenu.jpg\");\r\n        background-position: center center;\r\n        background-size: cover;\r\n        height: 170px;\r\n    }\r\n.title_page{\r\n        background-image: url(\"/assets/images/content/tabmenu.png\");\r\n        background-position: center center;\r\n        background-size: cover;\r\n        height: 50px;\r\n        text-align: center;\r\n        font-size: 1.5em;\r\n        padding-top:5px;\r\n        \r\n    }\r\n@media screen and (min-width: 320px) {\r\n            .title_page{\r\n                margin-top: 154px;\r\n            }\r\n        }\r\n@media screen and (min-width: 375px) {\r\n            .title_page{\r\n                margin-top: 114px;\r\n            }\r\n        }\r\n@media screen and (min-width: 500px) {\r\n            .title_page{\r\n                margin-top: 74px;\r\n            }\r\n        }\r\n@media screen and (min-width: 1000px) {\r\n            .title_page{\r\n                background-image: url(\"/assets/images/content/tabmenu.png\");\r\n                background-position: center center;\r\n                background-size: cover;\r\n                height: 50px;\r\n                text-align: center;\r\n                font-size: 1.5em;\r\n                padding-top:5px;\r\n                margin-top: 0px;\r\n            }\r\n        }\r\n@media screen and (min-width: 1200px) {\r\n\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9tb3Rpb24tZGV0YWlsL3Byb21vdGlvbi1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGlDQUFpQztBQUNyQztBQUNBO0lBQ0ksbUNBQW1DO0lBQ25DLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0NBQWtDO0lBQ2xDLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjtBQUNBOztBQUVBO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osWUFBWTtJQUNaLGNBQWM7SUFDZCxXQUFXO0lBQ1gsMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFFQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsZ0NBQWdDO0FBQ3BDO0FBRUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztBQUNmO0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGFBQWE7SUFDYixlQUFlO0lBQ2YsV0FBVztJQUNYLFdBQVc7QUFDZjtBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7O0FBRXBCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osY0FBYztJQUNkLGFBQWE7QUFDakI7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsV0FBVztBQUNmO0FBRUE7SUFDSSxZQUFZO0lBQ1osUUFBUTtJQUNSLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLG9CQUFvQjtFQUN0QjtBQUNBO01BQ0ksZUFBZTtNQUNmLGlCQUFpQjtFQUNyQjtBQUNBO01BQ0ksWUFBWTtNQUNaLGVBQWU7TUFDZiwyQkFBMkI7TUFDM0IsWUFBWTtNQUNaLGlCQUFpQjtNQUNqQix1QkFBdUI7TUFDdkIsZ0JBQWdCO01BQ2hCLGdCQUFnQjtNQUNoQixpQkFBaUI7RUFDckI7QUFFQTtJQUNFLFlBQVk7SUFDWixxQkFBcUI7RUFDdkI7QUFDQTtNQUNJLDJCQUEyQjtNQUMzQixzQkFBc0I7TUFDdEIsMkJBQTJCO0VBQy9CO0FBQ0E7TUFDSSxZQUFZO01BQ1osd0JBQXdCO01BQ3hCLFdBQVc7TUFDWCxnQkFBZ0I7O0VBRXBCO0FBQ0E7TUFDSSxtQkFBbUI7RUFDdkI7QUFDQTtJQUNFLHdCQUF3QjtJQUN4QiwrQkFBK0I7SUFDL0IsdUJBQXVCO0lBQ3ZCO0FBRUE7UUFDSSwwREFBMEQ7UUFDMUQsa0NBQWtDO1FBQ2xDLHNCQUFzQjtRQUN0QixhQUFhO0lBQ2pCO0FBQ0E7UUFDSSwyREFBMkQ7UUFDM0Qsa0NBQWtDO1FBQ2xDLHNCQUFzQjtRQUN0QixZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLGdCQUFnQjtRQUNoQixlQUFlOztJQUVuQjtBQUNJO1lBQ0k7Z0JBQ0ksaUJBQWlCO1lBQ3JCO1FBQ0o7QUFDQTtZQUNJO2dCQUNJLGlCQUFpQjtZQUNyQjtRQUNKO0FBQ0E7WUFDSTtnQkFDSSxnQkFBZ0I7WUFDcEI7UUFDSjtBQUNBO1lBQ0k7Z0JBQ0ksMkRBQTJEO2dCQUMzRCxrQ0FBa0M7Z0JBQ2xDLHNCQUFzQjtnQkFDdEIsWUFBWTtnQkFDWixrQkFBa0I7Z0JBQ2xCLGdCQUFnQjtnQkFDaEIsZUFBZTtnQkFDZixlQUFlO1lBQ25CO1FBQ0o7QUFDUjs7O0FBR0EiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb21vdGlvbi1kZXRhaWwvcHJvbW90aW9uLWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpbGVEZXRhaWwge1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNEMTAwMDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRDEwMDAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICBjbGVhcjogbGVmdDtcclxufVxyXG4uY29udGFpbmVye1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSg5LCAxMCwgMTIsIDAuNzcpO1xyXG59XHJcbi50aXRsZVByb21vdGlvbntcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoNTUsIDU3LCA1OSwgMC4xNDQpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcbi5jb250ZW50UGFnZUFyZWF7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDUxLCA1MSwgNTEsIDAuNzcpO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgbWFyZ2luLXRvcDozMHB4IDtcclxufVxyXG4uYmdfY29sb3J7XHJcbiAgICBcclxufVxyXG4uY3ljbGVfcmVke1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgd2lkdGg6IDE1cHg7XHJcbiAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcbi50aXRsZVBhZ2V7XHJcbiAgICBtYXJnaW4tdG9wOiAtNDBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMjtcclxufVxyXG4ubmF2TGlua3tcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDFlbTtcclxuICAgIGNsZWFyOiBsZWZ0O1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMCAhaW1wb3J0YW50O1xyXG59XHJcbi5pbWdfY2VudGVye1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIHdpZHRoOiA5MCU7XHJcbn1cclxuLm5hdkZpcnN0OmhvdmVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubmF2Rmlyc3R7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgLyogdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7ICovXHJcbn1cclxuXHJcbi5jb250ZW50Qm90QXJlYXtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi50aXRsZUNvbnRlbnR7XHJcbiAgICBib3JkZXItdG9wOjFweCBzb2xpZCAjRDJBRTcwO1xyXG4gICAgcGFkZGluZy10b3A6MTBweDtcclxufVxyXG5cclxuLnRpdGxlQ29udGVudEJvdHtcclxuICAgIGJhY2tncm91bmQ6ICNEMTAwMDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDoxMHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnRpdGxlTGVmdHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxLjZlbTtcclxuXHJcbn1cclxuLnZpZXdtb3Jle1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXRvcDo2cHg7XHJcbiAgICBjb2xvcjojRThDRjAxO1xyXG59XHJcbi5kYXRhQ29udGVudEJvdHtcclxuICAgIC8qIG1pbi1oZWlnaHQ6IDUwMHB4OyAqL1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmJvb3RDb2xze1xyXG4gICAgaGVpZ2h0OjEwMHB4O1xyXG4gICAgbWFyZ2luOjA7XHJcbiAgICBib3gtc2l6aW5nOmJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOjVweDtcclxuICAgIGJvcmRlcjoycHggc29saWQgYmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJlZDtcclxuICB9XHJcbiAgLnJvd3tcclxuICAgICAgbWFyZ2luLWxlZnQ6MHB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICB9XHJcbiAgLm5ld3NBcmVhe1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgLyogYm9yZGVyOiAycHggc29saWQgcmVkOyAqL1xyXG4gICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDE5MHB4O1xyXG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgcGFkZGluZy1sZWZ0OjVweDtcclxuICAgICAgcGFkZGluZy1yaWdodDo1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkTmV3c3tcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcclxuICB9XHJcbiAgLmltYWdlLW5ld3N7XHJcbiAgICAgIGhlaWdodDogY2FsYyggMTAwJSAtIDcwcHggKTtcclxuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIH1cclxuICAudGV4dC1uZXdze1xyXG4gICAgICBwYWRkaW5nOjEwcHg7XHJcbiAgICAgIGJvcmRlci10b3A6MXB4IHNvbGlkIHJlZDtcclxuICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgICAgIFxyXG4gIH1cclxuICAuaW1hZ2UtbmV3c3tcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICB9XHJcbiAgLm5ld3NBcmVhOmhvdmVyIHtcclxuICAgIGN1cnNvcjogdW5zZXQgIWltcG9ydGFudDtcclxuICAgIC13ZWJraXQtZmlsdGVyOiB1bnNldCFpbXBvcnRhbnQ7XHJcbiAgICBmaWx0ZXI6IHVuc2V0IWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAuaGVhZGVyX3BhZ2V7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvY29udGVudC9iZ21lbnUuanBnXCIpO1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICBoZWlnaHQ6IDE3MHB4O1xyXG4gICAgfVxyXG4gICAgLnRpdGxlX3BhZ2V7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvY29udGVudC90YWJtZW51LnBuZ1wiKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOjVweDtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkge1xyXG4gICAgICAgICAgICAudGl0bGVfcGFnZXtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1NHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDM3NXB4KSB7XHJcbiAgICAgICAgICAgIC50aXRsZV9wYWdle1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTE0cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNTAwcHgpIHtcclxuICAgICAgICAgICAgLnRpdGxlX3BhZ2V7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA3NHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMDBweCkge1xyXG4gICAgICAgICAgICAudGl0bGVfcGFnZXtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL2NvbnRlbnQvdGFibWVudS5wbmdcIik7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDo1cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG5cclxuICAgIFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/promotion-detail/promotion-detail.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/promotion-detail/promotion-detail.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\" >\n    <div class=\"content_header\">&nbsp;</div>\n    <div class=\"titlePage\">\n            โปรโมชั่น\n    </div>\n  <div class=\"contentPageArea\">\n      <div class=\"row bg_color\">\n          <div class=\"col\">\n              \n          </div>\n          <div class=\"col-xl-6 col-md-6 col-sm-12 newsArea image-news\">\n            <img class=\"img_center\" src=\"{{adjust_page_image_url}}\" alt=\"\">\n          </div>\n          <div class=\"col\">\n            \n          </div>\n        </div>\n        <div class=\"titlePromotion\"><div class=\"cycle_red\">&nbsp;</div>{{adjust_page_title}}</div>\n        <div class=\"titleContent\" [innerHTML]=\"adjust_page_description | sanitizeHtml\"></div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/promotion-detail/promotion-detail.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/promotion-detail/promotion-detail.component.ts ***!
  \***************************************************************************/
/*! exports provided: PromotionDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromotionDetailComponent", function() { return PromotionDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_service_todo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/todo.service */ "./src/app/service/todo.service.ts");




var PromotionDetailComponent = /** @class */ (function () {
    function PromotionDetailComponent(route, todoServcie) {
        this.route = route;
        this.todoServcie = todoServcie;
    }
    PromotionDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            //this.id =  params['id'].split("-")[1];
            _this.id = params['id'];
            _this.todoServcie.getDetailNews(_this.id).subscribe(function (response) {
                _this.adjust_page_title = response[0].adjust_page_title;
                _this.adjust_page_image_url = 'upload/files/' + response[0].adjust_page_image_name + '.' + response[0].adjust_page_image_type;
                _this.adjust_page_description = response[0].adjust_page_description;
                _this.todoNewsDetail = response[0];
            });
        });
    };
    PromotionDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-promotion-detail',
            template: __webpack_require__(/*! ./promotion-detail.component.html */ "./src/app/components/promotion-detail/promotion-detail.component.html"),
            styles: [__webpack_require__(/*! ./promotion-detail.component.css */ "./src/app/components/promotion-detail/promotion-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_service_todo_service__WEBPACK_IMPORTED_MODULE_3__["TodoService"]])
    ], PromotionDetailComponent);
    return PromotionDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/promotion/promotion.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/promotion/promotion.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".promotion_area{\r\n    height: auto;\r\n    overflow: hidden;\r\n    border-bottom:1px solid black;\r\n    padding:5px;\r\n}\r\n\r\n.promotion_area .detailLeft img{\r\n    float: left;\r\n   width: 100%;\r\n   height: auto;\r\n}\r\n\r\n.promotion_area .detailLeft img:hover{\r\n    cursor: pointer;\r\n}\r\n\r\n.promotion_area .detailLeft{\r\n    float: left;\r\n    width:100%;\r\n    height: 100%;\r\n    \r\n    padding-top: 15px;\r\n    padding-right: 15px;\r\n    padding-bottom: 30px;\r\n}\r\n\r\n.promotion_area .detailRight{\r\n    float: left;\r\n    width:100%;\r\n    height: 100%;\r\n    padding:30px;\r\n    overflow: hidden;\r\n    \r\n}\r\n\r\n.titlePromotion{\r\n    font-size: 1.2em;\r\n}\r\n\r\n.desPromotion{\r\n    font-weight: 100;\r\n    overflow-y: hidden;\r\n    height: calc( 100% - 26px );\r\n}\r\n\r\n.contentBotArea{\r\n    float: left;\r\n    width: 100%;\r\n}\r\n\r\n.titlePage{\r\n    margin-top:-35px;\r\n    color: #363636;\r\n    font-size: 1.2em;\r\n    position: relative;\r\n    text-align: center;\r\n}\r\n\r\n.titleContentBot{\r\n    background: #D10000;\r\n    color: white;\r\n    padding: 10px;\r\n    margin-top:10px;\r\n    float: left;\r\n    width: 100%;\r\n}\r\n\r\n.titleLeft{\r\n    float: left;\r\n    color: white;\r\n    font-size: 1.6em;\r\n\r\n}\r\n\r\n.viewmore{\r\n    float: right;\r\n    margin-top:6px;\r\n    color:#E8CF01;\r\n}\r\n\r\n.dataContentBot{\r\n    /* min-height: 500px; */\r\n    float: left;\r\n    width: 100%;\r\n}\r\n\r\n.bootCols{\r\n    height:100px;\r\n    margin:0;\r\n    box-sizing:border-box;\r\n    padding:5px;\r\n    border:2px solid black;\r\n    background-color:red;\r\n  }\r\n\r\n.row{\r\n      margin-left:0px;\r\n      margin-right: 0px;\r\n  }\r\n\r\n.newsArea{\r\n      height: auto;\r\n      margin-top: 10px;\r\n      /* border: 2px solid red; */\r\n      padding: 0px;\r\n      min-height: 190px;\r\n      text-overflow: ellipsis;\r\n      overflow: hidden;\r\n      padding-left:5px;\r\n      padding-right:5px;\r\n  }\r\n\r\n.cardNews{\r\n    height: 100%;\r\n    border: 2px solid #D2AE70;\r\n  }\r\n\r\n.image-news{\r\n      height: calc( 100% - 70px );\r\n      background-size: cover;\r\n      background-position: center;\r\n  }\r\n\r\n.text-news{\r\n      padding:10px;\r\n      border-top:1px solid #D2AE70;\r\n      color:white;\r\n      min-height: 50px;\r\n      \r\n  }\r\n\r\n.pagination{\r\n        margin-top:15px;\r\n        color: white !important;\r\n    }\r\n\r\n.ngx-pagination a, .ngx-pagination button {\r\n        color: white !important;\r\n    }\r\n\r\n.ngx-pagination a, .ngx-pagination button {\r\n        color: white !important;\r\n    }\r\n\r\n.promotion img{\r\n        width: 100%;\r\n    }\r\n\r\n.promotion_div{\r\n        position: relative;\r\n    }\r\n\r\n.mouse_hover:hover {\r\n        -webkit-transform: scale(1.1, 1.1);\r\n                transform: scale(1.1, 1.1);\r\n        opacity: 1;\r\n    }\r\n\r\n.mouse_hover {\r\n        transition: 0.3s ease;\r\n        cursor: pointer;\r\n    }\r\n\r\n.slides li.carousel-item {\r\n        position: relative;\r\n        margin: 0 0px 0 0;\r\n        overflow: hidden;\r\n        color: #fff;\r\n    }\r\n\r\nli.carousel-item:hover .carousel-heading-hover {\r\n    opacity: 1;\r\n    bottom: 0;\r\n    }\r\n\r\nli.carousel-item:hover .top-carousel-heading {\r\n    opacity: 0\r\n    }\r\n\r\nli.carousel-news-item:hover .carousel-heading-hover {\r\n    opacity: 1;\r\n    bottom: 0;\r\n    }\r\n\r\nli.carousel-news-item:hover .top-carousel-heading {\r\n    opacity: 0\r\n    }\r\n\r\n.carousel-item {\r\n        display: block;\r\n        overflow: hidden;\r\n    }\r\n\r\n.top-carousel-img img {\r\n        /*border: solid 2px #ffbf00;*/\r\n        border-radius: 5px;\r\n        margin-bottom: 10px;\r\n      }\r\n\r\n.top-carousel-title-hover{\r\n        position: relative;\r\n        margin: 0 0px 0 0;\r\n        overflow: hidden;\r\n        color: #fff;\r\n    }\r\n\r\n.top-carousel-title{\r\n        color: #fff;\r\n        font-size: 1.3em;\r\n        margin-bottom: 15px;\r\n    }\r\n\r\n.top-carousel-heading {\r\n        position: absolute;\r\n        bottom: 0;\r\n        padding: 5%;\r\n        text-align: center;\r\n        width: 100%;\r\n        opacity: 1;\r\n        font-size: 12px;\r\n        transition: .5s ease-in-out;\r\n        background-color: rgba(0, 0, 0, 0.52);\r\n        margin-bottom: 10px;\r\n        border-radius: 0px 0px 5px 5px;\r\n      }\r\n\r\n.carousel-heading-hover {\r\n        position: absolute;\r\n        bottom: 100%;\r\n        padding: 15% 5%;\r\n        text-align: center;\r\n        width: 100%;\r\n        height: 100%;\r\n        opacity: 0;\r\n        /* margin-top: 50px; */\r\n        transition: .5s ease-in-out;\r\n        background-color: rgba(0, 0, 0, 0.52);\r\n        margin-bottom: 10px;\r\n        border-radius: unset;\r\n    }\r\n\r\n.product_type_simple {\r\n        color: #ecd542;\r\n        font-size: 25px;\r\n      }\r\n\r\n.header_page{\r\n        background-image: url(\"/assets/images/content/bgmenu.jpg\");\r\n        background-position: center center;\r\n        background-size: cover;\r\n        height: 170px;\r\n    }\r\n\r\n.title_page{\r\n        background-image: url(\"/assets/images/content/tabmenu.png\");\r\n        background-position: center center;\r\n        background-size: cover;\r\n        height: 50px;\r\n        text-align: center;\r\n        font-size: 1.5em;\r\n        padding-top:5px;\r\n        \r\n    }\r\n\r\n@media screen and (min-width: 320px) {\r\n        .title_page{\r\n            margin-top: 154px;\r\n        }\r\n    }\r\n\r\n@media screen and (min-width: 375px) {\r\n        .title_page{\r\n            margin-top: 114px;\r\n        }\r\n    }\r\n\r\n@media screen and (min-width: 500px) {\r\n        .title_page{\r\n            margin-top: 74px;\r\n        }\r\n    }\r\n\r\n@media screen and (min-width: 768px) {\r\n        .promotion_area .detailLeft{\r\n            width:350px;\r\n        }\r\n        .promotion_area .detailRight{\r\n            width: calc(100% - 350px);\r\n        }\r\n    }\r\n\r\n@media screen and (min-width: 1000px) {\r\n        .title_page{\r\n            background-image: url(\"/assets/images/content/tabmenu.png\");\r\n            background-position: center center;\r\n            background-size: cover;\r\n            height: 50px;\r\n            text-align: center;\r\n            font-size: 1.5em;\r\n            padding-top:5px;\r\n            margin-top: 0px;\r\n        }\r\n      }\r\n\r\n@media screen and (min-width: 1024px) {\r\n    .promotion img{\r\n        width: unset;\r\n        margin-left: calc( 50% - 320px );\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 1200px) {\r\n    .promotion img{\r\n        margin-left: calc( 50% - 320px );\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wcm9tb3Rpb24vcHJvbW90aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLDZCQUE2QjtJQUM3QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0dBQ1osV0FBVztHQUNYLFlBQVk7QUFDZjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLFlBQVk7O0lBRVosaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixvQkFBb0I7QUFDeEI7O0FBQ0E7SUFDSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLFlBQVk7SUFDWixZQUFZO0lBQ1osZ0JBQWdCOztBQUVwQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsMkJBQTJCO0FBQy9COztBQUtBO0lBQ0ksV0FBVztJQUNYLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGFBQWE7SUFDYixlQUFlO0lBQ2YsV0FBVztJQUNYLFdBQVc7QUFDZjs7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCOztBQUVwQjs7QUFDQTtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2QsYUFBYTtBQUNqQjs7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFFBQVE7SUFDUixxQkFBcUI7SUFDckIsV0FBVztJQUNYLHNCQUFzQjtJQUN0QixvQkFBb0I7RUFDdEI7O0FBQ0E7TUFDSSxlQUFlO01BQ2YsaUJBQWlCO0VBQ3JCOztBQUNBO01BQ0ksWUFBWTtNQUNaLGdCQUFnQjtNQUNoQiwyQkFBMkI7TUFDM0IsWUFBWTtNQUNaLGlCQUFpQjtNQUNqQix1QkFBdUI7TUFDdkIsZ0JBQWdCO01BQ2hCLGdCQUFnQjtNQUNoQixpQkFBaUI7RUFDckI7O0FBRUE7SUFDRSxZQUFZO0lBQ1oseUJBQXlCO0VBQzNCOztBQUNBO01BQ0ksMkJBQTJCO01BQzNCLHNCQUFzQjtNQUN0QiwyQkFBMkI7RUFDL0I7O0FBQ0E7TUFDSSxZQUFZO01BQ1osNEJBQTRCO01BQzVCLFdBQVc7TUFDWCxnQkFBZ0I7O0VBRXBCOztBQUVFO1FBQ0ksZUFBZTtRQUNmLHVCQUF1QjtJQUMzQjs7QUFDQTtRQUNJLHVCQUF1QjtJQUMzQjs7QUFDQTtRQUNJLHVCQUF1QjtJQUMzQjs7QUFFQTtRQUNJLFdBQVc7SUFDZjs7QUFDQTtRQUNJLGtCQUFrQjtJQUN0Qjs7QUFHQTtRQUNJLGtDQUEwQjtnQkFBMUIsMEJBQTBCO1FBQzFCLFVBQVU7SUFDZDs7QUFFQTtRQUNJLHFCQUFxQjtRQUNyQixlQUFlO0lBQ25COztBQUVBO1FBQ0ksa0JBQWtCO1FBQ2xCLGlCQUFpQjtRQUNqQixnQkFBZ0I7UUFDaEIsV0FBVztJQUNmOztBQUVBO0lBQ0EsVUFBVTtJQUNWLFNBQVM7SUFDVDs7QUFFQTtJQUNBO0lBQ0E7O0FBRUE7SUFDQSxVQUFVO0lBQ1YsU0FBUztJQUNUOztBQUVBO0lBQ0E7SUFDQTs7QUFDQTtRQUNJLGNBQWM7UUFDZCxnQkFBZ0I7SUFDcEI7O0FBQ0E7UUFDSSw2QkFBNkI7UUFDN0Isa0JBQWtCO1FBQ2xCLG1CQUFtQjtNQUNyQjs7QUFFQTtRQUNFLGtCQUFrQjtRQUNsQixpQkFBaUI7UUFDakIsZ0JBQWdCO1FBQ2hCLFdBQVc7SUFDZjs7QUFDQTtRQUNJLFdBQVc7UUFDWCxnQkFBZ0I7UUFDaEIsbUJBQW1CO0lBQ3ZCOztBQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLFNBQVM7UUFDVCxXQUFXO1FBQ1gsa0JBQWtCO1FBQ2xCLFdBQVc7UUFDWCxVQUFVO1FBQ1YsZUFBZTtRQUVmLDJCQUEyQjtRQUMzQixxQ0FBcUM7UUFDckMsbUJBQW1CO1FBQ25CLDhCQUE4QjtNQUNoQzs7QUFDRjtRQUNJLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osZUFBZTtRQUNmLGtCQUFrQjtRQUNsQixXQUFXO1FBQ1gsWUFBWTtRQUNaLFVBQVU7UUFDVixzQkFBc0I7UUFDdEIsMkJBQTJCO1FBQzNCLHFDQUFxQztRQUNyQyxtQkFBbUI7UUFDbkIsb0JBQW9CO0lBQ3hCOztBQUNBO1FBQ0ksY0FBYztRQUNkLGVBQWU7TUFDakI7O0FBS0Y7UUFDSSwwREFBMEQ7UUFDMUQsa0NBQWtDO1FBQ2xDLHNCQUFzQjtRQUN0QixhQUFhO0lBQ2pCOztBQUNBO1FBQ0ksMkRBQTJEO1FBQzNELGtDQUFrQztRQUNsQyxzQkFBc0I7UUFDdEIsWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixnQkFBZ0I7UUFDaEIsZUFBZTs7SUFFbkI7O0FBQ0E7UUFDSTtZQUNJLGlCQUFpQjtRQUNyQjtJQUNKOztBQUNBO1FBQ0k7WUFDSSxpQkFBaUI7UUFDckI7SUFDSjs7QUFDQTtRQUNJO1lBQ0ksZ0JBQWdCO1FBQ3BCO0lBQ0o7O0FBRUE7UUFDSTtZQUNJLFdBQVc7UUFDZjtRQUNBO1lBQ0kseUJBQXlCO1FBQzdCO0lBQ0o7O0FBR0E7UUFDSTtZQUNJLDJEQUEyRDtZQUMzRCxrQ0FBa0M7WUFDbEMsc0JBQXNCO1lBQ3RCLFlBQVk7WUFDWixrQkFBa0I7WUFDbEIsZ0JBQWdCO1lBQ2hCLGVBQWU7WUFDZixlQUFlO1FBQ25CO01BQ0Y7O0FBRU47SUFDSTtRQUNJLFlBQVk7UUFDWixnQ0FBZ0M7SUFDcEM7QUFDSjs7QUFDQTtJQUNJO1FBQ0ksZ0NBQWdDO0lBQ3BDO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Byb21vdGlvbi9wcm9tb3Rpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9tb3Rpb25fYXJlYXtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCBibGFjaztcclxuICAgIHBhZGRpbmc6NXB4O1xyXG59XHJcblxyXG4ucHJvbW90aW9uX2FyZWEgLmRldGFpbExlZnQgaW1ne1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgIHdpZHRoOiAxMDAlO1xyXG4gICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5wcm9tb3Rpb25fYXJlYSAuZGV0YWlsTGVmdCBpbWc6aG92ZXJ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5wcm9tb3Rpb25fYXJlYSAuZGV0YWlsTGVmdHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIFxyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDMwcHg7XHJcbn1cclxuLnByb21vdGlvbl9hcmVhIC5kZXRhaWxSaWdodHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBhZGRpbmc6MzBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBcclxufVxyXG5cclxuLnRpdGxlUHJvbW90aW9ue1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxufVxyXG4uZGVzUHJvbW90aW9ue1xyXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcclxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxuICAgIGhlaWdodDogY2FsYyggMTAwJSAtIDI2cHggKTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuLmNvbnRlbnRCb3RBcmVhe1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnRpdGxlUGFnZXtcclxuICAgIG1hcmdpbi10b3A6LTM1cHg7XHJcbiAgICBjb2xvcjogIzM2MzYzNjtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnRpdGxlQ29udGVudEJvdHtcclxuICAgIGJhY2tncm91bmQ6ICNEMTAwMDA7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDoxMHB4O1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4udGl0bGVMZWZ0e1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDEuNmVtO1xyXG5cclxufVxyXG4udmlld21vcmV7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBtYXJnaW4tdG9wOjZweDtcclxuICAgIGNvbG9yOiNFOENGMDE7XHJcbn1cclxuLmRhdGFDb250ZW50Qm90e1xyXG4gICAgLyogbWluLWhlaWdodDogNTAwcHg7ICovXHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uYm9vdENvbHN7XHJcbiAgICBoZWlnaHQ6MTAwcHg7XHJcbiAgICBtYXJnaW46MDtcclxuICAgIGJveC1zaXppbmc6Ym9yZGVyLWJveDtcclxuICAgIHBhZGRpbmc6NXB4O1xyXG4gICAgYm9yZGVyOjJweCBzb2xpZCBibGFjaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmVkO1xyXG4gIH1cclxuICAucm93e1xyXG4gICAgICBtYXJnaW4tbGVmdDowcHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xyXG4gIH1cclxuICAubmV3c0FyZWF7XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgLyogYm9yZGVyOiAycHggc29saWQgcmVkOyAqL1xyXG4gICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDE5MHB4O1xyXG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgcGFkZGluZy1sZWZ0OjVweDtcclxuICAgICAgcGFkZGluZy1yaWdodDo1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5jYXJkTmV3c3tcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNEMkFFNzA7XHJcbiAgfVxyXG4gIC5pbWFnZS1uZXdze1xyXG4gICAgICBoZWlnaHQ6IGNhbGMoIDEwMCUgLSA3MHB4ICk7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICB9XHJcbiAgLnRleHQtbmV3c3tcclxuICAgICAgcGFkZGluZzoxMHB4O1xyXG4gICAgICBib3JkZXItdG9wOjFweCBzb2xpZCAjRDJBRTcwO1xyXG4gICAgICBjb2xvcjp3aGl0ZTtcclxuICAgICAgbWluLWhlaWdodDogNTBweDtcclxuICAgICAgXHJcbiAgfVxyXG5cclxuICAgIC5wYWdpbmF0aW9ue1xyXG4gICAgICAgIG1hcmdpbi10b3A6MTVweDtcclxuICAgICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5uZ3gtcGFnaW5hdGlvbiBhLCAubmd4LXBhZ2luYXRpb24gYnV0dG9uIHtcclxuICAgICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC5uZ3gtcGFnaW5hdGlvbiBhLCAubmd4LXBhZ2luYXRpb24gYnV0dG9uIHtcclxuICAgICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICAgIH1cclxuXHJcbiAgICAucHJvbW90aW9uIGltZ3tcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC5wcm9tb3Rpb25fZGl2e1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLm1vdXNlX2hvdmVyOmhvdmVyIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSwgMS4xKTtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubW91c2VfaG92ZXIge1xyXG4gICAgICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLnNsaWRlcyBsaS5jYXJvdXNlbC1pdGVtIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgbWFyZ2luOiAwIDBweCAwIDA7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgbGkuY2Fyb3VzZWwtaXRlbTpob3ZlciAuY2Fyb3VzZWwtaGVhZGluZy1ob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBsaS5jYXJvdXNlbC1pdGVtOmhvdmVyIC50b3AtY2Fyb3VzZWwtaGVhZGluZyB7XHJcbiAgICBvcGFjaXR5OiAwXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGxpLmNhcm91c2VsLW5ld3MtaXRlbTpob3ZlciAuY2Fyb3VzZWwtaGVhZGluZy1ob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBsaS5jYXJvdXNlbC1uZXdzLWl0ZW06aG92ZXIgLnRvcC1jYXJvdXNlbC1oZWFkaW5nIHtcclxuICAgIG9wYWNpdHk6IDBcclxuICAgIH1cclxuICAgIC5jYXJvdXNlbC1pdGVtIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgfVxyXG4gICAgLnRvcC1jYXJvdXNlbC1pbWcgaW1nIHtcclxuICAgICAgICAvKmJvcmRlcjogc29saWQgMnB4ICNmZmJmMDA7Ki9cclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnRvcC1jYXJvdXNlbC10aXRsZS1ob3ZlcntcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgbWFyZ2luOiAwIDBweCAwIDA7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICAgIC50b3AtY2Fyb3VzZWwtdGl0bGV7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjNlbTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgfVxyXG4gICAgLnRvcC1jYXJvdXNlbC1oZWFkaW5nIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDUlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IC41cyBlYXNlLWluLW91dDtcclxuICAgICAgICB0cmFuc2l0aW9uOiAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUyKTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggNXB4IDVweDtcclxuICAgICAgfVxyXG4gICAgLmNhcm91c2VsLWhlYWRpbmctaG92ZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZzogMTUlIDUlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAvKiBtYXJnaW4tdG9wOiA1MHB4OyAqL1xyXG4gICAgICAgIHRyYW5zaXRpb246IC41cyBlYXNlLWluLW91dDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTIpO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogdW5zZXQ7XHJcbiAgICB9XHJcbiAgICAucHJvZHVjdF90eXBlX3NpbXBsZSB7XHJcbiAgICAgICAgY29sb3I6ICNlY2Q1NDI7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgLmhlYWRlcl9wYWdle1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL2NvbnRlbnQvYmdtZW51LmpwZ1wiKTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgaGVpZ2h0OiAxNzBweDtcclxuICAgIH1cclxuICAgIC50aXRsZV9wYWdle1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL2NvbnRlbnQvdGFibWVudS5wbmdcIik7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgICAgICBwYWRkaW5nLXRvcDo1cHg7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzMjBweCkge1xyXG4gICAgICAgIC50aXRsZV9wYWdle1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxNTRweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAzNzVweCkge1xyXG4gICAgICAgIC50aXRsZV9wYWdle1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxMTRweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1MDBweCkge1xyXG4gICAgICAgIC50aXRsZV9wYWdle1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA3NHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIC5wcm9tb3Rpb25fYXJlYSAuZGV0YWlsTGVmdHtcclxuICAgICAgICAgICAgd2lkdGg6MzUwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wcm9tb3Rpb25fYXJlYSAuZGV0YWlsUmlnaHR7XHJcbiAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzNTBweCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAwMHB4KSB7XHJcbiAgICAgICAgLnRpdGxlX3BhZ2V7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvaW1hZ2VzL2NvbnRlbnQvdGFibWVudS5wbmdcIik7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuNWVtO1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDo1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gICAgLnByb21vdGlvbiBpbWd7XHJcbiAgICAgICAgd2lkdGg6IHVuc2V0O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBjYWxjKCA1MCUgLSAzMjBweCApO1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gICAgLnByb21vdGlvbiBpbWd7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGNhbGMoIDUwJSAtIDMyMHB4ICk7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/promotion/promotion.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/promotion/promotion.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <div _ngcontent-wkk-c4=\"\" class=\"container\" style=\"background: unset;\"><div _ngcontent-wkk-c4=\"\" class=\"header_bar\"><img _ngcontent-wkk-c4=\"\" src=\"/assets/images/header/header_bar.png\"></div></div>\n  <div  class=\"container \" style=\"border-top: 3px solid #BD9A23;\">\n    <div _ngcontent-wkk-c5=\"\" class=\"content_header\">&nbsp;</div>\n    <div  class=\"titlePage\"> โปรโมชั่น </div>\n      <div  class=\"contentPageArea\">\n          <div  class=\"row \">\n            <ng-container *ngFor=\"let promotion of todoPromotionText; index as i; first as isFirst;let l = count\">\n                            <!-- <div routerLink=\"/promotion/promotion-detail/{{promotion.adjust_page_id}}\"  class=\"col-md-12 hvr-push\" style=\"margin-bottom:15px;padding:25px;\">\n                                <div  class=\"titlePromotion\">{{promotion.adjust_page_title}}</div>\n                                <div  class=\"detailLeft\">\n                                    <img  class=\"attachment-alpha-store-carousel size-alpha-store-carousel wp-post-image\" draggable=\"false\" style=\"width: 100%;\" src=\"/upload/files/{{promotion.adjust_page_image_name}}.{{promotion.adjust_page_image_type}}\">\n                                </div>\n                                <div class=\"titlePromotion\" [innerHTML]=\"promotion.adjust_page_short_description | sanitizeHtml\"></div>\n                            </div> -->\n\n                           <div _ngcontent-wkk-c5=\"\" class=\"promotion_area\">\n                                <div _ngcontent-wkk-c5=\"\" class=\"detailLeft\" tabindex=\"0\" ng-reflect-router-link=\"/promotion/promotion-detail,โป\">\n                                    <img _ngcontent-wkk-c5=\"\" class=\"attachment-alpha-store-carousel size-alpha-store-carousel wp-post-image\" draggable=\"false\" src=\"/upload/files/{{promotion.adjust_page_image_name}}.{{promotion.adjust_page_image_type}}\">\n                                </div>\n                                <div _ngcontent-wkk-c5=\"\" class=\"detailRight\">\n                                    <div _ngcontent-wkk-c5=\"\" class=\"titlePromotion\">{{promotion.adjust_page_title}}</div>\n                                    <div _ngcontent-wkk-c5=\"\" class=\"desPromotion\">\n                                        <div  class=\"titleContent\" style=\"margin-top:30px;\" [innerHTML]=\"promotion.adjust_page_description | sanitizeHtml\"></div>\n                                    </div>\n                                </div>\n                            </div>\n            </ng-container>\n            \n            \n              \n              <!-- <div  class=\"col-md-12\" style=\"margin-bottom:15px;padding:25px;\">\n                  <div  class=\"titlePromotion\">แนะนำเพื่อนใหม่</div>\n                  <div  class=\"detailLeft\"><img  class=\"attachment-alpha-store-carousel size-alpha-store-carousel wp-post-image\" draggable=\"false\" style=\"width: 100%;\" src=\"/upload/files/2019-10-22_09-02-021571731322.jpg\"></div>\n                  <div  class=\"titlePromotion\" style=\"margin-top:15px;\">แนะนำเพื่อนใหม่ สมัครสมาชิก รับ 20% ของยอดฝากเพื่อนทันที ทำยอดเครดิต 3 เท่าของโบนัส ถอนได้ทันที ไม่จำกัดเกมส์เดิมพัน สามารถเล่นได้ทุกเกมส์พนัน</div>\n              </div>\n              \n              <div  class=\"col-md-12\" style=\"margin-bottom:15px;padding:25px;\">\n                  <div  class=\"titlePromotion\">โปรโมชั่นฝาก 1,000 รับเพิ่มอีก 1,000 ทันที</div>\n                  <div  class=\"detailLeft\"><img  class=\"attachment-alpha-store-carousel size-alpha-store-carousel wp-post-image\" draggable=\"false\" style=\"width: 100%;\" src=\"/upload/files/2019-11-14_10-56-581573729018.png\"></div>\n                  <div  class=\"titlePromotion\" style=\"margin-top:15px;\"></div>\n              </div> -->\n          </div>\n      </div>\n  </div>"

/***/ }),

/***/ "./src/app/components/promotion/promotion.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/promotion/promotion.component.ts ***!
  \*************************************************************/
/*! exports provided: PromotionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromotionComponent", function() { return PromotionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/todo.service */ "./src/app/service/todo.service.ts");



var PromotionComponent = /** @class */ (function () {
    function PromotionComponent(todoServcie) {
        this.todoServcie = todoServcie;
    }
    PromotionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.todoServcie.getTextPromotion().subscribe(function (response) {
            _this.todoPromotionText = response;
            //  console.log(this.todoPromotionText);
        });
    };
    PromotionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-promotion',
            template: __webpack_require__(/*! ./promotion.component.html */ "./src/app/components/promotion/promotion.component.html"),
            styles: [__webpack_require__(/*! ./promotion.component.css */ "./src/app/components/promotion/promotion.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"]])
    ], PromotionComponent);
    return PromotionComponent;
}());



/***/ }),

/***/ "./src/app/components/regComplete/regComplete.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/regComplete/regComplete.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contentPageArea{\r\n    margin-left:0px;\r\n    margin-right: 0px;\r\n    padding: 0px;\r\n    border: 0px solid #D10000;\r\n    margin-top:30px;\r\n    margin-bottom:30px;\r\n    padding:0 50px 0 50px;\r\n}\r\n.image-news{\r\n    background-size: cover;\r\n    background-position: center;\r\n    height: 536px;\r\n    width: 100%;\r\n    background-image: url(/assets/images/news/callcenter.jpg);\r\n}\r\n.cardNews{\r\n        height: 100%;\r\n        border: 2px solid red;\r\n    }\r\n.image-regiscomplete{\r\n        margin-top:30px;\r\n        /* background-image: url(/assets/images/content/register-page.jpg);\r\n        background-size: cover;\r\n        background-position: center; */\r\n        height: auto;\r\n        width: 80%;\r\n        margin-left:10%;\r\n        text-align: center;\r\n    }\r\n.titlePage2{\r\n      color: #18FF00;\r\n      font-size: 1.5em;\r\n      text-align: center;\r\n  }\r\n.titlePage{\r\n    margin-top: -40px;\r\n    color: white;\r\n    font-size: 1.5em;\r\n    position: relative;\r\n    text-align: center;\r\n    font-weight: bolder;\r\n    z-index: 2;\r\n}\r\n.qr_area_regiscomplete{\r\n    margin-top:30px;\r\n    width: 250px;\r\n    \r\n  }\r\n.qr_register{\r\n        background-image: url(/assets/images/icon/qr.png?v=1.1);\r\n        background-size: 100% 100%;\r\n        position: absolute;\r\n        width:250px;\r\n        height: 225px;\r\n        top:450px;\r\n        right: 50px;\r\n        z-index: 9;\r\n    }\r\n.image_qr{\r\n        width: 140px;\r\n    }\r\n.qr_area_regiscomplete .detailLeft{\r\n        float: left;\r\n        margin-top:20px;\r\n        width:100%;\r\n    }\r\n.qr_area_regiscomplete .detailRight{\r\n        float: left;\r\n        width:100%;\r\n        margin-top:20px;\r\n    }\r\n.center {\r\n        margin: auto;\r\n        width: 100%;\r\n        padding: 10px;\r\n      }\r\n@media screen and (min-width: 425px) {\r\n        .qr_area_regiscomplete{\r\n            margin-top: 35px;\r\n          }\r\n    }\r\n@media screen and (min-width: 767px) {\r\n        .center {\r\n            width: 40%;\r\n          }\r\n        .qr_area_regiscomplete .detailLeft{\r\n            padding-top:20px;\r\n           float: left;\r\n           text-align: right;\r\n           padding-right: 30px;\r\n            width:45%;\r\n        }\r\n        .qr_area_regiscomplete .detailRight{\r\n           \r\n            width:50%;\r\n        }\r\n    }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdDb21wbGV0ZS9yZWdDb21wbGV0ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLGFBQWE7SUFDYixXQUFXO0lBQ1gseURBQXlEO0FBQzdEO0FBQ0k7UUFDSSxZQUFZO1FBQ1oscUJBQXFCO0lBQ3pCO0FBQ0E7UUFDSSxlQUFlO1FBQ2Y7O3NDQUU4QjtRQUM5QixZQUFZO1FBQ1osVUFBVTtRQUNWLGVBQWU7UUFDZixrQkFBa0I7SUFDdEI7QUFDRjtNQUNJLGNBQWM7TUFDZCxnQkFBZ0I7TUFDaEIsa0JBQWtCO0VBQ3RCO0FBQ0E7SUFDRSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixVQUFVO0FBQ2Q7QUFDRTtJQUNFLGVBQWU7SUFDZixZQUFZOztFQUVkO0FBQ0U7UUFDSSx1REFBdUQ7UUFDdkQsMEJBQTBCO1FBQzFCLGtCQUFrQjtRQUNsQixXQUFXO1FBQ1gsYUFBYTtRQUNiLFNBQVM7UUFDVCxXQUFXO1FBQ1gsVUFBVTtJQUNkO0FBQ0E7UUFDSSxZQUFZO0lBQ2hCO0FBQ0E7UUFDSSxXQUFXO1FBQ1gsZUFBZTtRQUNmLFVBQVU7SUFDZDtBQUNBO1FBQ0ksV0FBVztRQUNYLFVBQVU7UUFDVixlQUFlO0lBQ25CO0FBRUE7UUFDSSxZQUFZO1FBQ1osV0FBVztRQUNYLGFBQWE7TUFDZjtBQUNGO1FBQ0k7WUFDSSxnQkFBZ0I7VUFDbEI7SUFDTjtBQUVBO1FBQ0k7WUFDSSxVQUFVO1VBQ1o7UUFDRjtZQUNJLGdCQUFnQjtXQUNqQixXQUFXO1dBQ1gsaUJBQWlCO1dBQ2pCLG1CQUFtQjtZQUNsQixTQUFTO1FBQ2I7UUFDQTs7WUFFSSxTQUFTO1FBQ2I7SUFDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnQ29tcGxldGUvcmVnQ29tcGxldGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50UGFnZUFyZWF7XHJcbiAgICBtYXJnaW4tbGVmdDowcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICAgIGJvcmRlcjogMHB4IHNvbGlkICNEMTAwMDA7XHJcbiAgICBtYXJnaW4tdG9wOjMwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOjMwcHg7XHJcbiAgICBwYWRkaW5nOjAgNTBweCAwIDUwcHg7XHJcbn1cclxuLmltYWdlLW5ld3N7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiA1MzZweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1hZ2VzL25ld3MvY2FsbGNlbnRlci5qcGcpO1xyXG59XHJcbiAgICAuY2FyZE5ld3N7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcclxuICAgIH1cclxuICAgIC5pbWFnZS1yZWdpc2NvbXBsZXRle1xyXG4gICAgICAgIG1hcmdpbi10b3A6MzBweDtcclxuICAgICAgICAvKiBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvY29udGVudC9yZWdpc3Rlci1wYWdlLmpwZyk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7ICovXHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6MTAlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAudGl0bGVQYWdlMntcclxuICAgICAgY29sb3I6ICMxOEZGMDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLnRpdGxlUGFnZXtcclxuICAgIG1hcmdpbi10b3A6IC00MHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICB6LWluZGV4OiAyO1xyXG59XHJcbiAgLnFyX2FyZWFfcmVnaXNjb21wbGV0ZXtcclxuICAgIG1hcmdpbi10b3A6MzBweDtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIFxyXG4gIH1cclxuICAgIC5xcl9yZWdpc3RlcntcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvaWNvbi9xci5wbmc/dj0xLjEpO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDoyNTBweDtcclxuICAgICAgICBoZWlnaHQ6IDIyNXB4O1xyXG4gICAgICAgIHRvcDo0NTBweDtcclxuICAgICAgICByaWdodDogNTBweDtcclxuICAgICAgICB6LWluZGV4OiA5O1xyXG4gICAgfVxyXG4gICAgLmltYWdlX3Fye1xyXG4gICAgICAgIHdpZHRoOiAxNDBweDtcclxuICAgIH1cclxuICAgIC5xcl9hcmVhX3JlZ2lzY29tcGxldGUgLmRldGFpbExlZnR7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDoyMHB4O1xyXG4gICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICB9XHJcbiAgICAucXJfYXJlYV9yZWdpc2NvbXBsZXRlIC5kZXRhaWxSaWdodHtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6MjBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNlbnRlciB7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgIH1cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQyNXB4KSB7XHJcbiAgICAgICAgLnFyX2FyZWFfcmVnaXNjb21wbGV0ZXtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMzVweDtcclxuICAgICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjdweCkge1xyXG4gICAgICAgIC5jZW50ZXIge1xyXG4gICAgICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIC5xcl9hcmVhX3JlZ2lzY29tcGxldGUgLmRldGFpbExlZnR7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOjIwcHg7XHJcbiAgICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICAgICAgICAgICAgd2lkdGg6NDUlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucXJfYXJlYV9yZWdpc2NvbXBsZXRlIC5kZXRhaWxSaWdodHtcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgd2lkdGg6NTAlO1xyXG4gICAgICAgIH1cclxuICAgIH0iXX0= */"

/***/ }),

/***/ "./src/app/components/regComplete/regComplete.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/regComplete/regComplete.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <div class=\"content_header\">&nbsp;</div>\n  <div class=\"titlePage\">\n      สมัครสมาชิก\n  </div>\n<div class=\"contentPageArea\">\n<div class=\"titlePage2\">สมัครสมาชิกเรียบร้อยแล้ว !</div>\n<a target=\"_bank\" href=\"http://line.me/ti/p/~@megarich88\" style=\"text-decoration: none;color:white;\">\n<div class=\"image-regiscomplete\">\n  <img src=\"/assets/images/content/register-page.jpg?v=1.1\" width=\"100%\" height=\"100%\">\n  <!-- กดที่รูปเพื่อขอรับ<br>\n  รหัสเข้าเล่นและเลขบัญชีสำหรับโอนเงิน -->\n</div>\n</a>\n<div class=\"qr_area_regiscomplete center\" >\n  <div class=\"detailLeft\">\n    <div class=\"text_line\" style=\"font-size: 1.2em;\">หรือติดต่อได้ที่</div>\n    <div class=\"text_line\" style=\"font-weight: 100px;font-size: 14px;\">ID Line: @megarich88</div>\n    <!-- <div class=\"text_line\" style=\"font-weight: 100px;font-size: 14px;\">085-1764289</div> -->\n  </div>\n  <div class=\"detailRight\">\n    <img class=\"image_qr\" src=\"/assets/images/icon/qr.png?v=1.2\">\n  </div>\n</div>\n</div>\n<!-- <app-content-bottom></app-content-bottom> -->\n</div>"

/***/ }),

/***/ "./src/app/components/regComplete/regComplete.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/regComplete/regComplete.component.ts ***!
  \*****************************************************************/
/*! exports provided: regCompleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "regCompleteComponent", function() { return regCompleteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/todo.service */ "./src/app/service/todo.service.ts");



var regCompleteComponent = /** @class */ (function () {
    function regCompleteComponent(todoServcie) {
        this.todoServcie = todoServcie;
    }
    regCompleteComponent.prototype.ngOnInit = function () {
        //call service
        var _this = this;
        this.todoServcie.getTextContext().subscribe(function (response) {
            //this.sanitizedURL = this.sanitizer.bypassSecurityTrustResourceUrl(response.data.contact_text_detail)['changingThisBreaksApplicationSecurity']; 
            //console.log(response.data.contact_text_detail);
            _this.todoContactText = response.data.contact_text_detail;
        });
    };
    regCompleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-regComplete',
            template: __webpack_require__(/*! ./regComplete.component.html */ "./src/app/components/regComplete/regComplete.component.html"),
            styles: [__webpack_require__(/*! ./regComplete.component.css */ "./src/app/components/regComplete/regComplete.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"]])
    ], regCompleteComponent);
    return regCompleteComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contentBotArea{\r\n    float: left;\r\n    width: 100%;\r\n}\r\n\r\n.titlePage{\r\n    margin-top:15px;\r\n    background-color: #1E1E1E;\r\n    color: white;\r\n    padding:15px 0px 15px 15px;\r\n    font-size: 1.2em;\r\n    margin-left: 15px;\r\n    margin-right: 15px;\r\n}\r\n\r\n.titleContentBot{\r\n    background: #D10000;\r\n    color: white;\r\n    padding: 10px;\r\n    margin-top:10px;\r\n    float: left;\r\n    width: 100%;\r\n}\r\n\r\n.titleLeft{\r\n    float: left;\r\n    color: white;\r\n    font-size: 1.6em;\r\n\r\n}\r\n\r\n.viewmore{\r\n    float: right;\r\n    margin-top:6px;\r\n    color:#E8CF01;\r\n}\r\n\r\n.dataContentBot{\r\n    /* min-height: 500px; */\r\n    float: left;\r\n    width: 100%;\r\n}\r\n\r\n.bootCols{\r\n    height:100px;\r\n    margin:0;\r\n    box-sizing:border-box;\r\n    padding:5px;\r\n    border:2px solid black;\r\n    background-color:red;\r\n  }\r\n\r\n.row{\r\n      margin-left:0px;\r\n      margin-right: 0px;\r\n  }\r\n\r\n.newsArea{\r\n      height: auto;\r\n      margin-top: 10px;\r\n      /* border: 2px solid red; */\r\n      padding: 0px;\r\n      min-height: 300px;\r\n      text-overflow: ellipsis;\r\n      overflow: hidden;\r\n      padding-left:5px;\r\n      padding-right:5px;\r\n  }\r\n\r\n.cardNews{\r\n    height: 100%;\r\n    border: 2px solid #D2AE70;\r\n  }\r\n\r\n.image-news{\r\n      height: calc( 100% - 70px );\r\n      background-size: cover;\r\n      background-position: center;\r\n  }\r\n\r\n.text-news{\r\n      padding:10px;\r\n      border-top:1px solid #D2AE70;\r\n      color:white;\r\n      min-height: 50px;\r\n      \r\n  }\r\n\r\n.pagination{\r\n        margin-top:15px;\r\n        color: white !important;\r\n    }\r\n\r\n.ngx-pagination a, .ngx-pagination button {\r\n        color: white !important;\r\n    }\r\n\r\n.ngx-pagination a, .ngx-pagination button {\r\n        color: white !important;\r\n    }\r\n\r\n.promotion img{\r\n        width: 100%;\r\n    }\r\n\r\n.promotion_div{\r\n        position: relative;\r\n    }\r\n\r\n.detail_Left{\r\n        width: 100%;\r\n        float: left;\r\n        text-align: center;\r\n    }\r\n\r\n.detail_Right{\r\n        width: 100%;\r\n        float: left;\r\n    }\r\n\r\n.control-group{\r\n        color: white;\r\n        padding:15px;\r\n    }\r\n\r\n@media screen and (min-width: 1024px) {\r\n    .promotion img{\r\n        width: unset;\r\n        margin-left: calc( 50% - 320px );\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 1200px) {\r\n    .promotion img{\r\n        margin-left: calc( 50% - 320px );\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLDBCQUEwQjtJQUMxQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osYUFBYTtJQUNiLGVBQWU7SUFDZixXQUFXO0lBQ1gsV0FBVztBQUNmOztBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7O0FBRXBCOztBQUNBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCxhQUFhO0FBQ2pCOztBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0lBQ1osUUFBUTtJQUNSLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLG9CQUFvQjtFQUN0Qjs7QUFDQTtNQUNJLGVBQWU7TUFDZixpQkFBaUI7RUFDckI7O0FBQ0E7TUFDSSxZQUFZO01BQ1osZ0JBQWdCO01BQ2hCLDJCQUEyQjtNQUMzQixZQUFZO01BQ1osaUJBQWlCO01BQ2pCLHVCQUF1QjtNQUN2QixnQkFBZ0I7TUFDaEIsZ0JBQWdCO01BQ2hCLGlCQUFpQjtFQUNyQjs7QUFFQTtJQUNFLFlBQVk7SUFDWix5QkFBeUI7RUFDM0I7O0FBQ0E7TUFDSSwyQkFBMkI7TUFDM0Isc0JBQXNCO01BQ3RCLDJCQUEyQjtFQUMvQjs7QUFDQTtNQUNJLFlBQVk7TUFDWiw0QkFBNEI7TUFDNUIsV0FBVztNQUNYLGdCQUFnQjs7RUFFcEI7O0FBRUU7UUFDSSxlQUFlO1FBQ2YsdUJBQXVCO0lBQzNCOztBQUNBO1FBQ0ksdUJBQXVCO0lBQzNCOztBQUNBO1FBQ0ksdUJBQXVCO0lBQzNCOztBQUVBO1FBQ0ksV0FBVztJQUNmOztBQUNBO1FBQ0ksa0JBQWtCO0lBQ3RCOztBQUVBO1FBQ0ksV0FBVztRQUNYLFdBQVc7UUFDWCxrQkFBa0I7SUFDdEI7O0FBRUE7UUFDSSxXQUFXO1FBQ1gsV0FBVztJQUNmOztBQUNBO1FBQ0ksWUFBWTtRQUNaLFlBQVk7SUFDaEI7O0FBQ0o7SUFDSTtRQUNJLFlBQVk7UUFDWixnQ0FBZ0M7SUFDcEM7QUFDSjs7QUFDQTtJQUNJO1FBQ0ksZ0NBQWdDO0lBQ3BDO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudEJvdEFyZWF7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4udGl0bGVQYWdle1xyXG4gICAgbWFyZ2luLXRvcDoxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFFMUUxRTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6MTVweCAwcHggMTVweCAxNXB4O1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG59XHJcbi50aXRsZUNvbnRlbnRCb3R7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRDEwMDAwO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIG1hcmdpbi10b3A6MTBweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnRpdGxlTGVmdHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxLjZlbTtcclxuXHJcbn1cclxuLnZpZXdtb3Jle1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgbWFyZ2luLXRvcDo2cHg7XHJcbiAgICBjb2xvcjojRThDRjAxO1xyXG59XHJcbi5kYXRhQ29udGVudEJvdHtcclxuICAgIC8qIG1pbi1oZWlnaHQ6IDUwMHB4OyAqL1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmJvb3RDb2xze1xyXG4gICAgaGVpZ2h0OjEwMHB4O1xyXG4gICAgbWFyZ2luOjA7XHJcbiAgICBib3gtc2l6aW5nOmJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nOjVweDtcclxuICAgIGJvcmRlcjoycHggc29saWQgYmxhY2s7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJlZDtcclxuICB9XHJcbiAgLnJvd3tcclxuICAgICAgbWFyZ2luLWxlZnQ6MHB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICB9XHJcbiAgLm5ld3NBcmVhe1xyXG4gICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgIC8qIGJvcmRlcjogMnB4IHNvbGlkIHJlZDsgKi9cclxuICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICBtaW4taGVpZ2h0OiAzMDBweDtcclxuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIHBhZGRpbmctbGVmdDo1cHg7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6NXB4O1xyXG4gIH1cclxuICBcclxuICAuY2FyZE5ld3N7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjRDJBRTcwO1xyXG4gIH1cclxuICAuaW1hZ2UtbmV3c3tcclxuICAgICAgaGVpZ2h0OiBjYWxjKCAxMDAlIC0gNzBweCApO1xyXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC50ZXh0LW5ld3N7XHJcbiAgICAgIHBhZGRpbmc6MTBweDtcclxuICAgICAgYm9yZGVyLXRvcDoxcHggc29saWQgI0QyQUU3MDtcclxuICAgICAgY29sb3I6d2hpdGU7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgICAgIFxyXG4gIH1cclxuXHJcbiAgICAucGFnaW5hdGlvbntcclxuICAgICAgICBtYXJnaW4tdG9wOjE1cHg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAubmd4LXBhZ2luYXRpb24gYSwgLm5neC1wYWdpbmF0aW9uIGJ1dHRvbiB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICAubmd4LXBhZ2luYXRpb24gYSwgLm5neC1wYWdpbmF0aW9uIGJ1dHRvbiB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnByb21vdGlvbiBpbWd7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAucHJvbW90aW9uX2RpdntcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB9XHJcblxyXG4gICAgLmRldGFpbF9MZWZ0e1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLmRldGFpbF9SaWdodHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgIH1cclxuICAgIC5jb250cm9sLWdyb3Vwe1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBwYWRkaW5nOjE1cHg7XHJcbiAgICB9XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xyXG4gICAgLnByb21vdGlvbiBpbWd7XHJcbiAgICAgICAgd2lkdGg6IHVuc2V0O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBjYWxjKCA1MCUgLSAzMjBweCApO1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xyXG4gICAgLnByb21vdGlvbiBpbWd7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGNhbGMoIDUwJSAtIDMyMHB4ICk7XHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <iframe frameborder=\"0\" height=\"550px\" scrolling=\"no\" src=\"https://winlot888.com/webbox/?token=1f0fe4af2993e20db6f9685ecdb3a13dffaeca17 \" width=\"100%\"></iframe> -->\r\n<div class=\"container\">\r\n    <div class=\"titlePage\">สมัครสมาชิก</div>\r\n    <form class=\"form-horizontal\" #form='ngForm' (ngSubmit)=\"onSubmit(form)\">\r\n        <fieldset>\r\n          <div class=\"control-group\" >\r\n            <label class=\"control-label\"  for=\"user_name\">ชื่อ</label>\r\n            <div class=\"controls\">\r\n              <input type=\"text\" name=\"user_name\" [(ngModel)]=\"user_name\" placeholder=\"ชื่อ\" class=\"input-xlarge form-control\">\r\n            </div>\r\n          </div>\r\n       \r\n          <div class=\"control-group\">\r\n            <label class=\"control-label\" for=\"user_tel\">เบอร์โทร</label>\r\n            <div class=\"controls\">\r\n              <input type=\"text\" name=\"user_tel\" [(ngModel)]=\"user_tel\"placeholder=\"เบอร์โทร\" class=\"input-xlarge form-control\">\r\n            </div>\r\n          </div>\r\n       \r\n          <div class=\"control-group\">\r\n              <label class=\"control-label\" for=\"user_line\">E-mail</label>\r\n              <div class=\"controls\">\r\n                <input type=\"text\" name=\"email\" [(ngModel)]=\"email\" placeholder=\"E-mail\" class=\"input-xlarge form-control\">\r\n              </div>\r\n            </div>\r\n          <div class=\"control-group\">\r\n            <label class=\"control-label\" for=\"user_line\">ไอดีไลน์</label>\r\n            <div class=\"controls\">\r\n              <input type=\"text\" name=\"user_line\" [(ngModel)]=\"user_line\" placeholder=\"ไอดีไลน์\" class=\"input-xlarge form-control\">\r\n            </div>\r\n          </div>\r\n    \r\n          <div class=\"control-group\">\r\n            <div class=\"controls\">\r\n              <button type=\"submit\" class=\"btn btn-success\">สมัครสมาชิก</button>\r\n            </div>\r\n          </div>\r\n        </fieldset>\r\n      </form>\r\n    \r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/todo.service */ "./src/app/service/todo.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(route, todoServcie) {
        this.route = route;
        this.todoServcie = todoServcie;
        this.data_deatail = "<img src='/assets/images/loading/05.gif'>";
    }
    RegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            // this.id =  params['id'];
            _this.todoServcie.getDataPage("register").subscribe(function (response) {
                _this.data_title = response.data.menu_name;
                _this.data_deatail = response.data.menu_detail;
            });
        });
        //call service
        // this.todoServcie.getTextRegister().subscribe((response)=>{
        //   this.todoRegisterText = response;
        // });
    };
    RegisterComponent.prototype.onSubmit = function (form) {
        this.todoServcie.saveMember(form.value).subscribe(function (data) {
            if (data.success) {
                alert("รอการตอบกลับจากพนักงาน");
            }
            else {
                alert("กรุณาลองอีกครั้ง");
            }
        });
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], src_app_service_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/resultfootball/resultfootball.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/resultfootball/resultfootball.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".titlePage{\r\n    margin-top:15px;\r\n    background-color: #1E1E1E;\r\n    color: white;\r\n    padding:15px 0px 15px 15px;\r\n    font-size: 1.2em;\r\n    margin-left: 15px;\r\n    margin-right: 15px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXN1bHRmb290YmFsbC9yZXN1bHRmb290YmFsbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osMEJBQTBCO0lBQzFCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZXN1bHRmb290YmFsbC9yZXN1bHRmb290YmFsbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlUGFnZXtcclxuICAgIG1hcmdpbi10b3A6MTVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxRTFFMUU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOjE1cHggMHB4IDE1cHggMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMS4yZW07XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/resultfootball/resultfootball.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/resultfootball/resultfootball.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n  <div class=\"titlePage\">ผลบอลสด</div>\n  <div class=\"contentPageArea\">\n    <div class=\"titleContent\">\n      <iframe id=\"iframe2\" src=\"https://www.unogoal.club/free_livescore.aspx\" width=\"100%\" marginwidth=\"0\" height=\"888px\" marginheight=\"0\" frameborder=\"0\" align=\"middle\" scrolling=\"auto\"></iframe>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/resultfootball/resultfootball.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/resultfootball/resultfootball.component.ts ***!
  \***********************************************************************/
/*! exports provided: ResultfootballComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultfootballComponent", function() { return ResultfootballComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");


// import * as $ from 'jquery';
var ResultfootballComponent = /** @class */ (function () {
    function ResultfootballComponent() {
    }
    ResultfootballComponent.prototype.ngOnInit = function () {
        // $(document).ready(function(){
        // });
    };
    ResultfootballComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-resultfootball',
            template: __webpack_require__(/*! ./resultfootball.component.html */ "./src/app/components/resultfootball/resultfootball.component.html"),
            styles: [__webpack_require__(/*! ./resultfootball.component.css */ "./src/app/components/resultfootball/resultfootball.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ResultfootballComponent);
    return ResultfootballComponent;
}());



/***/ }),

/***/ "./src/app/components/withdraw/withdraw.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/withdraw/withdraw.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".titleContent{\r\n    height: 500px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93aXRoZHJhdy93aXRoZHJhdy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvd2l0aGRyYXcvd2l0aGRyYXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZUNvbnRlbnR7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/withdraw/withdraw.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/withdraw/withdraw.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div _ngcontent-upl-c5=\"\" class=\"container page_content\">\n  <div _ngcontent-upl-c5=\"\" class=\"contentPageArea\" style=\"padding:0px;\">\n    <div _ngcontent-upl-c5=\"\" class=\"titleContent\"  style=\"height: 500px;\">\n        <div class=\"titleContent\" [innerHTML]=\"data_deatail | sanitizeHtml\"></div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/withdraw/withdraw.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/withdraw/withdraw.component.ts ***!
  \***********************************************************/
/*! exports provided: WithdrawComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WithdrawComponent", function() { return WithdrawComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/todo.service */ "./src/app/service/todo.service.ts");



var WithdrawComponent = /** @class */ (function () {
    function WithdrawComponent(todoServcie) {
        this.todoServcie = todoServcie;
    }
    WithdrawComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.todoServcie.getDataPage('withdraw2').subscribe(function (response) {
            _this.data_title = response.data.menu_name;
            _this.data_deatail = response.data.menu_detail;
        });
    };
    WithdrawComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-withdraw',
            template: __webpack_require__(/*! ./withdraw.component.html */ "./src/app/components/withdraw/withdraw.component.html"),
            styles: [__webpack_require__(/*! ./withdraw.component.css */ "./src/app/components/withdraw/withdraw.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"]])
    ], WithdrawComponent);
    return WithdrawComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active-menu{\r\n  /* background-color: #ddd; */\r\n  /* text-decoration: underline; */\r\n  color: white !important;\r\n  \r\n}\r\n.topnav{\r\nbackground-color: #83001F;\r\nbackground-size: 100% 60px;\r\npadding-left:0px;\r\npadding-right: 0px;\r\ncolor:white;\r\ndisplay: none;\r\n}\r\n.topnav .container{\r\n  overflow: unset;\r\n}\r\n.topnav_mobile{\r\n  float: left;\r\n  padding:5px;\r\n  text-align: center;\r\n  width: 100%;\r\n}\r\n.btn_mobile{\r\n  margin-right: 5px;\r\n  margin-top:5px;\r\n  width: 110px !important;\r\n  background-color: #FEC965;\r\n  color: wheat;\r\n  font-size: 14px;\r\n  background: rgba(99,26,24,1);\r\n  background: -webkit-gradient(left top, right top, color-stop(0%, rgba(99,26,24,1)), color-stop(35%, rgba(167,57,55,1)), color-stop(65%, rgba(167,57,55,1)), color-stop(100%, rgba(99,26,24,1)));\r\n  background: linear-gradient(to right, rgba(99,26,24,1) 0%, rgba(167,57,55,1) 35%, rgba(167,57,55,1) 65%, rgba(99,26,24,1) 100%);\r\n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#631a18', endColorstr='#631a18', GradientType=1 );\r\n}\r\n@media screen and (min-width: 1000px) {\r\n  .topnav{\r\n    display: block;\r\n  }\r\n  .topnav_mobile{\r\n    display: none;\r\n  }\r\n  .topnav .container{\r\n    width: 960px;\r\n    padding-right: 364px;\r\n  }\r\n}\r\n@media screen and (min-width: 1100px) {\r\n  \r\n  .topnav .container{\r\n    width: 960px;\r\n    padding-right: 364px;\r\n  }\r\n \r\n}\r\n@media screen and (min-width: 1101px) {\r\n  .topnav{\r\n    /* padding-left:30px;\r\n    padding-right: 30px; */\r\n  }\r\n  /* .width_0{\r\n    width: 85px !important;\r\n  }\r\n  .width_2{\r\n    width: 130px !important;\r\n  }\r\n  .width_3{\r\n    width: 120px !important;\r\n  }\r\n  .width_4{\r\n    width: 130px !important;\r\n  } */\r\n  .width_5{\r\n    \r\n  }\r\n  /* .width_6{\r\n    width: 90px !important;\r\n  } */\r\n}\r\n@media screen and (min-width: 1200px) {\r\n  .topnav{\r\n    /* padding-left:100px;\r\n    padding-right: 100px; */\r\n  }\r\n  /* .width_0{\r\n    width: 90px !important;\r\n  }\r\n  .width_2{\r\n    width: 140px !important;\r\n  }\r\n  .width_3{\r\n    width: 102px !important;\r\n  }\r\n  .width_4{\r\n    width: 131px !important;\r\n  } */\r\n  .width_5{\r\n\r\n  }\r\n  /* .width_6{\r\n    width: 90px !important;\r\n  } */\r\n  .topnav .container{\r\n    width: 1140px;\r\n    padding-right: 364px;\r\n  }\r\n}\r\n@media screen and (min-width: 1354px) {\r\n  /* .width_0{\r\n    width: 90px !important;\r\n  }\r\n  .width_2{\r\n    width: 140px !important;\r\n  }\r\n  .width_3{\r\n    width: 130px !important;\r\n  }\r\n  .width_4{\r\n    width: 131px !important;\r\n  } */\r\n  .width_5{\r\n\r\n  }\r\n  /* .width_6{\r\n    width: 155px !important;\r\n  } */\r\n}\r\n@media screen and (min-width: 1400px) {\r\n  .topnav{\r\n    /* padding-left:200px;\r\n    padding-right: 200px; */\r\n  }\r\n  /* .width_0{\r\n    width: 90px !important;\r\n  }\r\n  .width_2{\r\n    width: 127px  !important;\r\n  }\r\n  .width_3{\r\n    width: 120px !important;\r\n  }\r\n  .width_4{\r\n    width: 121px !important;\r\n  } */\r\n  .width_5{\r\n\r\n  }\r\n  /* .width_6{\r\n    width: 90px  !important;\r\n  } */\r\n}\r\n@media screen and (min-width: 1500px) {\r\n  .topnav{\r\n    /* padding-left:200px;\r\n    padding-right: 200px; */\r\n  }\r\n  .topnav .container{\r\n    width: 1140px;\r\n    padding-right: 364px;\r\n  }\r\n}\r\n@media screen and (min-width: 1600px) {\r\n  .topnav{\r\n    /* padding-left:200px;\r\n    padding-right: 200px; */\r\n  }\r\n  .topnav .container{\r\n    width: 1140px;\r\n    padding-right: 364px;\r\n  }\r\n}\r\n@media screen and (min-width: 1700px) {\r\n  .topnav{\r\n    /* padding-left:300px;\r\n    padding-right: 300px; */\r\n  }\r\n}\r\n@media screen and (min-width: 1900px) {\r\n  .topnav{\r\n    /* padding-left:382px;\r\n    padding-right: 382px; */\r\n  }\r\n  /* .width_0{\r\n    width: 96px  !important;\r\n  }\r\n  .width_2{\r\n    width: 139px  !important;\r\n  }\r\n  .width_3{\r\n    width: 120px !important;\r\n  }\r\n  .width_4{\r\n    width: 121px !important;\r\n  } */\r\n  .width_5{\r\n   \r\n    padding-left:0px;\r\n    padding-right: 0px;\r\n  }\r\n  .topnav .container{\r\n    width: 1140px;\r\n    padding-right: 364px;\r\n  }\r\n  \r\n  /* .width_6{\r\n    width: 180px  !important;\r\n  } */\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNEJBQTRCO0VBQzVCLGdDQUFnQztFQUNoQyx1QkFBdUI7O0FBRXpCO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIsMEJBQTBCO0FBQzFCLGdCQUFnQjtBQUNoQixrQkFBa0I7QUFDbEIsV0FBVztBQUNYLGFBQWE7QUFDYjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsV0FBVztBQUNiO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGVBQWU7RUFDZiw0QkFBNEI7RUFFNUIsK0xBQStMO0VBSS9MLCtIQUErSDtFQUMvSCxvSEFBb0g7QUFDdEg7QUFDQTtFQUNFO0lBQ0UsY0FBYztFQUNoQjtFQUNBO0lBQ0UsYUFBYTtFQUNmO0VBQ0E7SUFDRSxZQUFZO0lBQ1osb0JBQW9CO0VBQ3RCO0FBQ0Y7QUFDQTs7RUFFRTtJQUNFLFlBQVk7SUFDWixvQkFBb0I7RUFDdEI7O0FBRUY7QUFDQTtFQUNFO0lBQ0U7MEJBQ3NCO0VBQ3hCO0VBQ0E7Ozs7Ozs7Ozs7O0tBV0c7RUFDSDs7RUFFQTtFQUNBOztLQUVHO0FBQ0w7QUFDQTtFQUNFO0lBQ0U7MkJBQ3VCO0VBQ3pCO0VBQ0E7Ozs7Ozs7Ozs7O0tBV0c7RUFDSDs7RUFFQTtFQUNBOztLQUVHO0VBQ0g7SUFDRSxhQUFhO0lBQ2Isb0JBQW9CO0VBQ3RCO0FBQ0Y7QUFFQTtFQUNFOzs7Ozs7Ozs7OztLQVdHO0VBQ0g7O0VBRUE7RUFDQTs7S0FFRztBQUNMO0FBR0E7RUFDRTtJQUNFOzJCQUN1QjtFQUN6QjtFQUNBOzs7Ozs7Ozs7OztLQVdHO0VBQ0g7O0VBRUE7RUFDQTs7S0FFRztBQUNMO0FBRUE7RUFDRTtJQUNFOzJCQUN1QjtFQUN6QjtFQUNBO0lBQ0UsYUFBYTtJQUNiLG9CQUFvQjtFQUN0QjtBQUNGO0FBRUE7RUFDRTtJQUNFOzJCQUN1QjtFQUN6QjtFQUNBO0lBQ0UsYUFBYTtJQUNiLG9CQUFvQjtFQUN0QjtBQUNGO0FBRUE7RUFDRTtJQUNFOzJCQUN1QjtFQUN6QjtBQUNGO0FBRUE7RUFDRTtJQUNFOzJCQUN1QjtFQUN6QjtFQUNBOzs7Ozs7Ozs7OztLQVdHO0VBQ0g7O0lBRUUsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsYUFBYTtJQUNiLG9CQUFvQjtFQUN0Qjs7RUFFQTs7S0FFRztBQUNMIiwiZmlsZSI6InNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjdGl2ZS1tZW51e1xyXG4gIC8qIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7ICovXHJcbiAgLyogdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7ICovXHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbiAgXHJcbn1cclxuLnRvcG5hdntcclxuYmFja2dyb3VuZC1jb2xvcjogIzgzMDAxRjtcclxuYmFja2dyb3VuZC1zaXplOiAxMDAlIDYwcHg7XHJcbnBhZGRpbmctbGVmdDowcHg7XHJcbnBhZGRpbmctcmlnaHQ6IDBweDtcclxuY29sb3I6d2hpdGU7XHJcbmRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLnRvcG5hdiAuY29udGFpbmVye1xyXG4gIG92ZXJmbG93OiB1bnNldDtcclxufVxyXG5cclxuLnRvcG5hdl9tb2JpbGV7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgcGFkZGluZzo1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5idG5fbW9iaWxle1xyXG4gIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gIG1hcmdpbi10b3A6NXB4O1xyXG4gIHdpZHRoOiAxMTBweCAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRUM5NjU7XHJcbiAgY29sb3I6IHdoZWF0O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDk5LDI2LDI0LDEpO1xyXG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYmEoOTksMjYsMjQsMSkgMCUsIHJnYmEoMTY3LDU3LDU1LDEpIDM1JSwgcmdiYSgxNjcsNTcsNTUsMSkgNjUlLCByZ2JhKDk5LDI2LDI0LDEpIDEwMCUpO1xyXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGVmdCB0b3AsIHJpZ2h0IHRvcCwgY29sb3Itc3RvcCgwJSwgcmdiYSg5OSwyNiwyNCwxKSksIGNvbG9yLXN0b3AoMzUlLCByZ2JhKDE2Nyw1Nyw1NSwxKSksIGNvbG9yLXN0b3AoNjUlLCByZ2JhKDE2Nyw1Nyw1NSwxKSksIGNvbG9yLXN0b3AoMTAwJSwgcmdiYSg5OSwyNiwyNCwxKSkpO1xyXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYmEoOTksMjYsMjQsMSkgMCUsIHJnYmEoMTY3LDU3LDU1LDEpIDM1JSwgcmdiYSgxNjcsNTcsNTUsMSkgNjUlLCByZ2JhKDk5LDI2LDI0LDEpIDEwMCUpO1xyXG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudChsZWZ0LCByZ2JhKDk5LDI2LDI0LDEpIDAlLCByZ2JhKDE2Nyw1Nyw1NSwxKSAzNSUsIHJnYmEoMTY3LDU3LDU1LDEpIDY1JSwgcmdiYSg5OSwyNiwyNCwxKSAxMDAlKTtcclxuICBiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KGxlZnQsIHJnYmEoOTksMjYsMjQsMSkgMCUsIHJnYmEoMTY3LDU3LDU1LDEpIDM1JSwgcmdiYSgxNjcsNTcsNTUsMSkgNjUlLCByZ2JhKDk5LDI2LDI0LDEpIDEwMCUpO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiYSg5OSwyNiwyNCwxKSAwJSwgcmdiYSgxNjcsNTcsNTUsMSkgMzUlLCByZ2JhKDE2Nyw1Nyw1NSwxKSA2NSUsIHJnYmEoOTksMjYsMjQsMSkgMTAwJSk7XHJcbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyM2MzFhMTgnLCBlbmRDb2xvcnN0cj0nIzYzMWExOCcsIEdyYWRpZW50VHlwZT0xICk7XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAwMHB4KSB7XHJcbiAgLnRvcG5hdntcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICAudG9wbmF2X21vYmlsZXtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIC50b3BuYXYgLmNvbnRhaW5lcntcclxuICAgIHdpZHRoOiA5NjBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDM2NHB4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMTAwcHgpIHtcclxuICBcclxuICAudG9wbmF2IC5jb250YWluZXJ7XHJcbiAgICB3aWR0aDogOTYwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzNjRweDtcclxuICB9XHJcbiBcclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMTAxcHgpIHtcclxuICAudG9wbmF2e1xyXG4gICAgLyogcGFkZGluZy1sZWZ0OjMwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4OyAqL1xyXG4gIH1cclxuICAvKiAud2lkdGhfMHtcclxuICAgIHdpZHRoOiA4NXB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC53aWR0aF8ye1xyXG4gICAgd2lkdGg6IDEzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC53aWR0aF8ze1xyXG4gICAgd2lkdGg6IDEyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC53aWR0aF80e1xyXG4gICAgd2lkdGg6IDEzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfSAqL1xyXG4gIC53aWR0aF81e1xyXG4gICAgXHJcbiAgfVxyXG4gIC8qIC53aWR0aF82e1xyXG4gICAgd2lkdGg6IDkwcHggIWltcG9ydGFudDtcclxuICB9ICovXHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgLnRvcG5hdntcclxuICAgIC8qIHBhZGRpbmctbGVmdDoxMDBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwMHB4OyAqL1xyXG4gIH1cclxuICAvKiAud2lkdGhfMHtcclxuICAgIHdpZHRoOiA5MHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC53aWR0aF8ye1xyXG4gICAgd2lkdGg6IDE0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC53aWR0aF8ze1xyXG4gICAgd2lkdGg6IDEwMnB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC53aWR0aF80e1xyXG4gICAgd2lkdGg6IDEzMXB4ICFpbXBvcnRhbnQ7XHJcbiAgfSAqL1xyXG4gIC53aWR0aF81e1xyXG5cclxuICB9XHJcbiAgLyogLndpZHRoXzZ7XHJcbiAgICB3aWR0aDogOTBweCAhaW1wb3J0YW50O1xyXG4gIH0gKi9cclxuICAudG9wbmF2IC5jb250YWluZXJ7XHJcbiAgICB3aWR0aDogMTE0MHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMzY0cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMzU0cHgpIHtcclxuICAvKiAud2lkdGhfMHtcclxuICAgIHdpZHRoOiA5MHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC53aWR0aF8ye1xyXG4gICAgd2lkdGg6IDE0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC53aWR0aF8ze1xyXG4gICAgd2lkdGg6IDEzMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC53aWR0aF80e1xyXG4gICAgd2lkdGg6IDEzMXB4ICFpbXBvcnRhbnQ7XHJcbiAgfSAqL1xyXG4gIC53aWR0aF81e1xyXG5cclxuICB9XHJcbiAgLyogLndpZHRoXzZ7XHJcbiAgICB3aWR0aDogMTU1cHggIWltcG9ydGFudDtcclxuICB9ICovXHJcbn1cclxuXHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNDAwcHgpIHtcclxuICAudG9wbmF2e1xyXG4gICAgLyogcGFkZGluZy1sZWZ0OjIwMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjAwcHg7ICovXHJcbiAgfVxyXG4gIC8qIC53aWR0aF8we1xyXG4gICAgd2lkdGg6IDkwcHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLndpZHRoXzJ7XHJcbiAgICB3aWR0aDogMTI3cHggICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC53aWR0aF8ze1xyXG4gICAgd2lkdGg6IDEyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC53aWR0aF80e1xyXG4gICAgd2lkdGg6IDEyMXB4ICFpbXBvcnRhbnQ7XHJcbiAgfSAqL1xyXG4gIC53aWR0aF81e1xyXG5cclxuICB9XHJcbiAgLyogLndpZHRoXzZ7XHJcbiAgICB3aWR0aDogOTBweCAgIWltcG9ydGFudDtcclxuICB9ICovXHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE1MDBweCkge1xyXG4gIC50b3BuYXZ7XHJcbiAgICAvKiBwYWRkaW5nLWxlZnQ6MjAwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMDBweDsgKi9cclxuICB9XHJcbiAgLnRvcG5hdiAuY29udGFpbmVye1xyXG4gICAgd2lkdGg6IDExNDBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDM2NHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTYwMHB4KSB7XHJcbiAgLnRvcG5hdntcclxuICAgIC8qIHBhZGRpbmctbGVmdDoyMDBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwMHB4OyAqL1xyXG4gIH1cclxuICAudG9wbmF2IC5jb250YWluZXJ7XHJcbiAgICB3aWR0aDogMTE0MHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMzY0cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNzAwcHgpIHtcclxuICAudG9wbmF2e1xyXG4gICAgLyogcGFkZGluZy1sZWZ0OjMwMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMzAwcHg7ICovXHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxOTAwcHgpIHtcclxuICAudG9wbmF2e1xyXG4gICAgLyogcGFkZGluZy1sZWZ0OjM4MnB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMzgycHg7ICovXHJcbiAgfVxyXG4gIC8qIC53aWR0aF8we1xyXG4gICAgd2lkdGg6IDk2cHggICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC53aWR0aF8ye1xyXG4gICAgd2lkdGg6IDEzOXB4ICAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAud2lkdGhfM3tcclxuICAgIHdpZHRoOiAxMjBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAud2lkdGhfNHtcclxuICAgIHdpZHRoOiAxMjFweCAhaW1wb3J0YW50O1xyXG4gIH0gKi9cclxuICAud2lkdGhfNXtcclxuICAgXHJcbiAgICBwYWRkaW5nLWxlZnQ6MHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG4gIH1cclxuICAudG9wbmF2IC5jb250YWluZXJ7XHJcbiAgICB3aWR0aDogMTE0MHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMzY0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIC53aWR0aF82e1xyXG4gICAgd2lkdGg6IDE4MHB4ICAhaW1wb3J0YW50O1xyXG4gIH0gKi9cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"topnav\" id=\"myTopnav\">\n    <div class=\"container\">\n        <ng-container *ngFor=\"let menu of menus; index as i; first as isFirst;let l = count\">\n            <a *ngIf=\"i==0\" [routerLinkActive]=\"['active-menu']\"  [routerLinkActiveOptions]=\"{exact:true}\" routerLink=\"/home\" class=\"cal_{{l+default_menu}} links active \">หน้าแรก</a>\n            \n            <a  [routerLinkActiveOptions]=\"{exact:true}\" [routerLinkActive]=\"['active-menu']\" routerLink=\"/page/{{menu.menu_route}}\" class=\"cal_{{l+default_menu}} links active \">{{menu.menu_name}}</a>\n            <a *ngIf=\"i==2\" [routerLinkActiveOptions]=\"{exact:true}\" [routerLinkActive]=\"['active-menu']\" routerLink=\"/promotion\" class=\"cal_{{l+default_menu}} links active \">โปรโมชั่น</a>\n            \n\n        </ng-container>\n        \n    </div>\n            \n            <!-- <ng-container *ngIf='login_status_check!=\"1\"'>\n                <div class=\"link_nav cal_4\">\n                    <a [routerLinkActive]=\"['active-menu']\"  [routerLinkActiveOptions]=\"{exact:true}\" routerLink=\"/promotion\" class=\" links active \">ค่าบริการ</a>\n                </div>\n                <div class=\"link_nav cal_4\">\n                    <a [routerLinkActive]=\"['active-menu']\"  [routerLinkActiveOptions]=\"{exact:true}\" routerLink=\"/register\" class=\" links active \">สมัครสมาชิก</a>\n                </div>\n                <div class=\"link_nav cal_4\">\n                    <a [routerLinkActive]=\"['active-menu']\"  [routerLinkActiveOptions]=\"{exact:true}\" routerLink=\"/login\" class=\" links active \">เข้าสู่ระบบ</a>\n                </div>\n            </ng-container> -->\n            \n      <!-- <a [routerLinkActive]=\"['active-menu']\" [routerLinkActiveOptions]=\"{exact:true}\" href=\"javascript:void(0);\" class=\"icon\" onclick=\"myFunction()\">\n          <i class=\"fa fa-bars\"></i>\n      </a> -->\n  </div>\n\n  <div class=\"topnav_mobile\" id=\"myTopnav\">\n      <ng-container *ngFor=\"let menu of menus; index as i; first as isFirst;let l = count\">\n          <a [routerLinkActive]=\"['active-menu']\" *ngIf=\"i==0\" [routerLinkActiveOptions]=\"{exact:true}\" routerLink=\"/home\" class=\"btn_mobile btn  links active cal_{{l+2}}\">หน้าหลัก</a>\n          <a [routerLinkActive]=\"['active-menu']\" [routerLinkActiveOptions]=\"{exact:true}\" routerLink=\"/page/{{menu.menu_route}}\" class=\"btn_mobile btn  width_{{i+1}} links active cal_{{l+2}}\">{{menu.menu_name}}</a>\n          <a [routerLinkActive]=\"['active-menu']\" *ngIf=\"i==2\" [routerLinkActiveOptions]=\"{exact:true}\" routerLink=\"/promotion\" class=\"btn_mobile btn  links cal_{{l+2}}\" >โปรโมชั่น</a>\n      </ng-container>\n  </div>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_todo_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/todo.service */ "./src/app/service/todo.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../node_modules/@angular/router/fesm5/router.js");




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router, serviceMenu) {
        this.router = router;
        this.serviceMenu = serviceMenu;
        this.default_menu = 2;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem("login") == "success") {
            this.login_status_check = '1';
        }
        this.serviceMenu.getMenu().subscribe(function (response) {
            _this.menus = response;
        });
    };
    NavbarComponent.prototype.logout = function () {
        this.serviceMenu.setLoggedIn(false);
        localStorage.setItem("login", 'failed');
        this.router.navigate(['/home']);
        window.location.reload();
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_service_todo_service__WEBPACK_IMPORTED_MODULE_2__["TodoService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/sanitize-html.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/sanitize-html.pipe.ts ***!
  \***************************************/
/*! exports provided: sanitizeHtmlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sanitizeHtmlPipe", function() { return sanitizeHtmlPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "../node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var sanitizeHtmlPipe = /** @class */ (function () {
    function sanitizeHtmlPipe(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    sanitizeHtmlPipe.prototype.transform = function (value) {
        return this._sanitizer.bypassSecurityTrustHtml(value);
    };
    sanitizeHtmlPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'sanitizeHtml' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], sanitizeHtmlPipe);
    return sanitizeHtmlPipe;
}());



/***/ }),

/***/ "./src/app/service/auth.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/auth.service.ts ***!
  \*****************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "../node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm5/operators/index.js");




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this._getStatusWebsite = "http://localhost:4800";
        this.statusWebsite = true;
    }
    AuthService.prototype.checkStatus = function () {
        return this.http.get("https://betufa55.com/api/dataAdjust.php?ac=getStatusWebsite").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
        // return this.statusWebsite;
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/service/todo.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/todo.service.ts ***!
  \*****************************************/
/*! exports provided: TodoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoService", function() { return TodoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "../node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "../node_modules/rxjs/_esm5/operators/index.js");





var TodoService = /** @class */ (function () {
    function TodoService(http, http2) {
        this.http = http;
        this.http2 = http2;
        this.loggedInStatus = true;
        this.local = window.location.origin;
    }
    TodoService.prototype.setLoggedIn = function (value) {
        localStorage.setItem("login", 'success');
        this.loggedInStatus = value;
    };
    Object.defineProperty(TodoService.prototype, "isLoggedIn", {
        get: function () {
            return this.loggedInStatus;
        },
        enumerable: true,
        configurable: true
    });
    //private local = "http://localhost:80";
    //private local = "http://betufa55.com"; 
    TodoService.prototype.getTodoList = function (data) {
        if (data == 1) {
            return this.http.get(this.local + "/api/getNews.php?type=1&ac=all").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.json(); }));
        }
        else {
            return this.http.get(this.local + "/api/getNews.php?type=1").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.json(); }));
        }
    };
    TodoService.prototype.getDetailNews = function (id) {
        return this.http.get(this.local + "/api/dataAdjust.php?ac=getDetailNew&id=" + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.json(); }));
    };
    TodoService.prototype.getTextRegister = function () {
        //return this.http.get("http://conner888.com/api/dataAdjust.php?ac=getRegisterText").pipe(map((res)=>res.json()));
        return this.http.get(this.local + "/api/dataAdjust.php?ac=getRegisterText").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.json(); }));
    };
    TodoService.prototype.getTextContext = function () {
        //return this.http.get("http://conner888.com/api/dataAdjust.php?ac=getContactText").pipe(map((res)=>res.json()));
        return this.http.get(this.local + "/api/dataAdjust.php?ac=getContactText").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.json(); }));
    };
    TodoService.prototype.getTextPromotion = function () {
        return this.http.post(this.local + "/api/dataAdjust.php", { ac: "getPromotion", type: 2 }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.json(); }));
    };
    TodoService.prototype.getTextHowtoplay = function () {
        return this.http.get(this.local + "/api/dataAdjust.php?ac=getHowtoplayText").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.json(); }));
    };
    TodoService.prototype.getMenu = function () {
        // return this.http.post<adjustpageData>(this.host_config+'/api/dataAdjust.php',{ac:"saveAdjustPage",data:data});
        return this.http.post(this.local + '/api/dataAdjust.php', { ac: "getMenu", type: '1' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.json(); }));
        ;
    };
    TodoService.prototype.getDataPage = function (data) {
        return this.http.post(this.local + "/api/dataAdjust.php", { ac: "getDataPage", data: data }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.json(); }));
    };
    TodoService.prototype.getSlide = function () {
        // return this.http.post<adjustpageData>(this.host_config+'/api/dataAdjust.php',{ac:"saveAdjustPage",data:data});
        return this.http.post(this.local + '/api/dataAdjust.php', { ac: "getSlide", type: '1' }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.json(); }));
        ;
    };
    TodoService.prototype.getPopup = function () {
        // return this.http.post<adjustpageData>(this.host_config+'/api/dataAdjust.php',{ac:"saveAdjustPage",data:data});
        return this.http.post(this.local + '/api/dataAdjust.php', { ac: "getPopup" }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.json(); }));
        ;
    };
    TodoService.prototype.getSetting = function () {
        return this.http.post(this.local + '/api/dataAdjust.php', { ac: "getSetting" }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.json(); }));
    };
    TodoService.prototype.saveMember = function (data) {
        return this.http2.post(this.local + '/api/dataAdjust.php', { ac: "saveMember", data: data });
    };
    TodoService.prototype.ValidateUser = function (username, password) {
        return this.http2.post(this.local + '/api/dataAdjust.php?ac=login', { username: username, password: password });
        //return {success:true};
    };
    TodoService.prototype.saveLink = function (data, link) {
        return this.http2.post(this.local + '/api_nubshare/dataAdjust.php', { ac: "save_link", data: data, link: link });
    };
    TodoService.prototype.getDataLink = function (link) {
        return this.http2.get('http://localhost:3000/getContent/' + encodeURIComponent(link), {});
    };
    TodoService.prototype.getDataLike = function (link, data_id) {
        return this.http2.post('http://localhost:3000/getLike/' + encodeURIComponent(link), { data_id: data_id });
    };
    TodoService.prototype.getDataLike_from_mysql = function (data_id) {
        return this.http2.post(this.local + '/api_nubshare/dataAdjust.php', { ac: "get_user_like", data_id: data_id });
    };
    TodoService.prototype.saveDataLike = function (data_id, data_array_user_like) {
        return this.http2.post(this.local + '/api_nubshare/dataAdjust.php', { ac: "save_like", data_id: data_id, data_array_user_like: data_array_user_like });
    };
    TodoService.prototype.saveUserWin = function (data_id, user_id, user_name) {
        return this.http2.post(this.local + '/api_nubshare/dataAdjust.php', { ac: "save_user_win", data_id: data_id, user_id: user_id, user_name: user_name });
    };
    TodoService.prototype.getUserWin = function (data_id) {
        return this.http2.post(this.local + '/api_nubshare/dataAdjust.php', { ac: "get_user_win", data_id: data_id });
    };
    TodoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TodoService);
    return TodoService;
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "../node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\dev\dev\premier999\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.495d8c53ea477a0fff16.js.map