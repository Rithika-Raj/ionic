function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-inside-inside-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inside/inside.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inside/inside.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesInsideInsidePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-title>MY APP</ion-title>\n  </ion-toolbar>\n</ion-header>\n \n<ion-content padding>\n  Welcome to the members only area!\n \n  <p>{{ data }}</p>\n \n  <ion-button expand=\"full\" (click)=\"loadSpecialInfo()\">Load Special Info</ion-button>\n  <ion-button expand=\"full\" (click)=\"logout()\">Logout</ion-button>\n  <ion-button expand=\"full\" (click)=\"clearToken()\">Clear JWT</ion-button>\n \n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/inside/inside-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/inside/inside-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: InsidePageRoutingModule */

  /***/
  function srcAppPagesInsideInsideRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InsidePageRoutingModule", function () {
      return InsidePageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _inside_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./inside.page */
    "./src/app/pages/inside/inside.page.ts");

    var routes = [{
      path: '',
      component: _inside_page__WEBPACK_IMPORTED_MODULE_3__["InsidePage"]
    }];

    var InsidePageRoutingModule = function InsidePageRoutingModule() {
      _classCallCheck(this, InsidePageRoutingModule);
    };

    InsidePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], InsidePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/inside/inside.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/inside/inside.module.ts ***!
    \***********************************************/

  /*! exports provided: InsidePageModule */

  /***/
  function srcAppPagesInsideInsideModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InsidePageModule", function () {
      return InsidePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _inside_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./inside-routing.module */
    "./src/app/pages/inside/inside-routing.module.ts");
    /* harmony import */


    var _inside_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./inside.page */
    "./src/app/pages/inside/inside.page.ts");

    var InsidePageModule = function InsidePageModule() {
      _classCallCheck(this, InsidePageModule);
    };

    InsidePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _inside_routing_module__WEBPACK_IMPORTED_MODULE_5__["InsidePageRoutingModule"]],
      declarations: [_inside_page__WEBPACK_IMPORTED_MODULE_6__["InsidePage"]]
    })], InsidePageModule);
    /***/
  },

  /***/
  "./src/app/pages/inside/inside.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/pages/inside/inside.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesInsideInsidePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luc2lkZS9pbnNpZGUucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/pages/inside/inside.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/inside/inside.page.ts ***!
    \*********************************************/

  /*! exports provided: InsidePage */

  /***/
  function srcAppPagesInsideInsidePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InsidePage", function () {
      return InsidePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/storage */
    "./node_modules/@ionic/storage/__ivy_ngcc__/fesm2015/ionic-storage.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var InsidePage = /*#__PURE__*/function () {
      function InsidePage(authService, storage, toastController) {
        _classCallCheck(this, InsidePage);

        this.authService = authService;
        this.storage = storage;
        this.toastController = toastController;
        this.data = '';
      }

      _createClass(InsidePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "loadSpecialInfo",
        value: function loadSpecialInfo() {
          var _this = this;

          this.authService.getSpecialData().subscribe(function (res) {
            _this.data = res['msg'];
          });
        }
      }, {
        key: "logout",
        value: function logout() {
          this.authService.logout();
        }
      }, {
        key: "clearToken",
        value: function clearToken() {
          // ONLY FOR TESTING!
          this.storage.remove('access_token');
          var toast = this.toastController.create({
            message: 'JWT removed',
            duration: 3000
          });
          toast.then(function (toast) {
            return toast.present();
          });
        }
      }]);

      return InsidePage;
    }();

    InsidePage.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
      }, {
        type: _ionic_storage__WEBPACK_IMPORTED_MODULE_3__["Storage"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"]
      }];
    };

    InsidePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-inside',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./inside.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inside/inside.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./inside.page.scss */
      "./src/app/pages/inside/inside.page.scss"))["default"]]
    })], InsidePage);
    /***/
  }
}]);
//# sourceMappingURL=pages-inside-inside-module-es5.js.map