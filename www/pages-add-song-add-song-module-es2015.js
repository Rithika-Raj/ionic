(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-add-song-add-song-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-song/add-song.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-song/add-song.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"ios hydrated\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"ios title-ios hydrated\">Add Song</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-list lines=\"full\" class=\"ion-no-margin ion-no-padding ios list-ios list-lines-full list-ios-lines-full hydrated\">\n    <form [formGroup]=\"songForm\" (ngSubmit)=\"onFormSubmit()\">\n      <ion-item>\n        <ion-label position=\"floating\">Name</ion-label>\n        <ion-input formControlName=\"song_name\" type=\"text\" required></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\">Artist</ion-label>\n        <ion-input formControlName=\"artist\" type=\"text\" required>\n        </ion-input>\n      </ion-item>\n\n      <ion-row>\n        <ion-col>\n          <ion-button type=\"submit\" color=\"primary\" shape=\"full\" expand=\"block\">Add Song</ion-button>\n        </ion-col>\n      </ion-row>\n    </form>\n  </ion-list>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/add-song/add-song-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/add-song/add-song-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: AddSongPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSongPageRoutingModule", function() { return AddSongPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _add_song_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-song.page */ "./src/app/pages/add-song/add-song.page.ts");




const routes = [
    {
        path: '',
        component: _add_song_page__WEBPACK_IMPORTED_MODULE_3__["AddSongPage"]
    }
];
let AddSongPageRoutingModule = class AddSongPageRoutingModule {
};
AddSongPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AddSongPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/add-song/add-song.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/add-song/add-song.module.ts ***!
  \***************************************************/
/*! exports provided: AddSongPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSongPageModule", function() { return AddSongPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _add_song_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-song-routing.module */ "./src/app/pages/add-song/add-song-routing.module.ts");
/* harmony import */ var _add_song_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-song.page */ "./src/app/pages/add-song/add-song.page.ts");








let AddSongPageModule = class AddSongPageModule {
};
AddSongPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _add_song_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddSongPageRoutingModule"]
        ],
        declarations: [_add_song_page__WEBPACK_IMPORTED_MODULE_6__["AddSongPage"]]
    })
], AddSongPageModule);



/***/ }),

/***/ "./src/app/pages/add-song/add-song.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/add-song/add-song.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkZC1zb25nL2FkZC1zb25nLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/add-song/add-song.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/add-song/add-song.page.ts ***!
  \*************************************************/
/*! exports provided: AddSongPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSongPage", function() { return AddSongPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_song_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/song.service */ "./src/app/shared/song.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





let AddSongPage = class AddSongPage {
    constructor(songAPI, router, fb, zone) {
        this.songAPI = songAPI;
        this.router = router;
        this.fb = fb;
        this.zone = zone;
        this.songForm = this.fb.group({
            song_name: [''],
            artist: ['']
        });
    }
    ngOnInit() { }
    onFormSubmit() {
        if (!this.songForm.valid) {
            return false;
        }
        else {
            this.songAPI.addSong(this.songForm.value)
                .subscribe((res) => {
                this.zone.run(() => {
                    console.log(res);
                    this.songForm.reset();
                    this.router.navigate(['/home']);
                });
            });
        }
    }
};
AddSongPage.ctorParameters = () => [
    { type: src_app_shared_song_service__WEBPACK_IMPORTED_MODULE_2__["SongService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] }
];
AddSongPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-song',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./add-song.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-song/add-song.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./add-song.page.scss */ "./src/app/pages/add-song/add-song.page.scss")).default]
    })
], AddSongPage);



/***/ })

}]);
//# sourceMappingURL=pages-add-song-add-song-module-es2015.js.map