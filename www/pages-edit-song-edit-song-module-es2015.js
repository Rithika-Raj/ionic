(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-edit-song-edit-song-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit-song/edit-song.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit-song/edit-song.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar class=\"ios hydrated\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n    <ion-title class=\"ios title-ios hydrated\">Add Song</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-list lines=\"full\" class=\"ion-no-margin ion-no-padding ios list-ios list-lines-full list-ios-lines-full hydrated\">\n    <form [formGroup]=\"updateSongForm\" (ngSubmit)=\"updateForm()\">\n      <ion-item>\n        <ion-label position=\"floating\">Song name</ion-label>\n        <ion-input formControlName=\"song_name\" type=\"text\" required></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\">Artist</ion-label>\n        <ion-input formControlName=\"artist\" type=\"text\" required>\n        </ion-input>\n      </ion-item>\n\n      <ion-row>\n        <ion-col>\n          <ion-button type=\"submit\" color=\"primary\" shape=\"full\" expand=\"block\">Update Song</ion-button>\n        </ion-col>\n      </ion-row>\n    </form>\n  </ion-list>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/edit-song/edit-song-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/edit-song/edit-song-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: EditSongPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditSongPageRoutingModule", function() { return EditSongPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _edit_song_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-song.page */ "./src/app/pages/edit-song/edit-song.page.ts");




const routes = [
    {
        path: '',
        component: _edit_song_page__WEBPACK_IMPORTED_MODULE_3__["EditSongPage"]
    }
];
let EditSongPageRoutingModule = class EditSongPageRoutingModule {
};
EditSongPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditSongPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/edit-song/edit-song.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/edit-song/edit-song.module.ts ***!
  \*****************************************************/
/*! exports provided: EditSongPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditSongPageModule", function() { return EditSongPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _edit_song_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-song-routing.module */ "./src/app/pages/edit-song/edit-song-routing.module.ts");
/* harmony import */ var _edit_song_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-song.page */ "./src/app/pages/edit-song/edit-song.page.ts");








let EditSongPageModule = class EditSongPageModule {
};
EditSongPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _edit_song_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditSongPageRoutingModule"]
        ],
        declarations: [_edit_song_page__WEBPACK_IMPORTED_MODULE_6__["EditSongPage"]]
    })
], EditSongPageModule);



/***/ }),

/***/ "./src/app/pages/edit-song/edit-song.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/edit-song/edit-song.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2VkaXQtc29uZy9lZGl0LXNvbmcucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/edit-song/edit-song.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/edit-song/edit-song.page.ts ***!
  \***************************************************/
/*! exports provided: EditSongPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditSongPage", function() { return EditSongPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_song_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/song.service */ "./src/app/shared/song.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





let EditSongPage = class EditSongPage {
    constructor(songAPI, actRoute, router, fb) {
        this.songAPI = songAPI;
        this.actRoute = actRoute;
        this.router = router;
        this.fb = fb;
        this.id = this.actRoute.snapshot.paramMap.get('id');
    }
    ngOnInit() {
        this.getSongData(this.id);
        this.updateSongForm = this.fb.group({
            song_name: [''],
            artist: ['']
        });
    }
    getSongData(id) {
        this.songAPI.getSong(id).subscribe(res => {
            this.updateSongForm.setValue({
                song_name: res['song_name'],
                artist: res['artist']
            });
        });
    }
    updateForm() {
        if (!this.updateSongForm.valid) {
            return false;
        }
        else {
            this.songAPI.updateSong(this.id, this.updateSongForm.value)
                .subscribe((res) => {
                console.log(res);
                this.updateSongForm.reset();
                this.router.navigate(['/home']);
            });
        }
    }
};
EditSongPage.ctorParameters = () => [
    { type: src_app_shared_song_service__WEBPACK_IMPORTED_MODULE_2__["SongService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
EditSongPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-song',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./edit-song.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit-song/edit-song.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./edit-song.page.scss */ "./src/app/pages/edit-song/edit-song.page.scss")).default]
    })
], EditSongPage);



/***/ })

}]);
//# sourceMappingURL=pages-edit-song-edit-song-module-es2015.js.map