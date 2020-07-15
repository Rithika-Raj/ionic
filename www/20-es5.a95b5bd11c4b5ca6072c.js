function _classCallCheck(e,i){if(!(e instanceof i))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,i){for(var n=0;n<i.length;n++){var t=i[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}function _createClass(e,i,n){return i&&_defineProperties(e.prototype,i),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{F4UR:function(e,i,n){"use strict";n.r(i),n.d(i,"LoginPageModule",(function(){return d}));var t,o,r=n("ofXK"),a=n("3Pt+"),s=n("tyNb"),l=n("TEn/"),b=n("fXoL"),c=n("lGQG"),u=[{path:"",component:(t=function(){function e(i,n){_classCallCheck(this,e),this.formBuilder=i,this.authService=n}return _createClass(e,[{key:"ngOnInit",value:function(){this.credentialsForm=this.formBuilder.group({email:["",[a.k.required,a.k.email]],password:["",[a.k.required,a.k.minLength(6)]]})}},{key:"onSubmit",value:function(){this.authService.login(this.credentialsForm.value).subscribe()}},{key:"register",value:function(){var e=this;this.authService.register(this.credentialsForm.value).subscribe((function(i){e.authService.login(e.credentialsForm.value).subscribe()}))}}]),e}(),t.\u0275fac=function(e){return new(e||t)(b.Jb(a.a),b.Jb(c.a))},t.\u0275cmp=b.Db({type:t,selectors:[["app-login"]],decls:18,vars:3,consts:[["color","primary"],["padding",""],[3,"formGroup","ngSubmit"],["position","floating"],["type","email","formControlName","email"],["type","password","formControlName","password"],["expand","full","type","submit",3,"disabled"],["expand","full","type","button",3,"disabled","click"]],template:function(e,i){1&e&&(b.Mb(0,"ion-header"),b.Mb(1,"ion-toolbar",0),b.Mb(2,"ion-title"),b.dc(3,"Login"),b.Lb(),b.Lb(),b.Lb(),b.Mb(4,"ion-content",1),b.Mb(5,"form",2),b.Tb("ngSubmit",(function(){return i.onSubmit()})),b.Mb(6,"ion-item"),b.Mb(7,"ion-label",3),b.dc(8,"Email"),b.Lb(),b.Kb(9,"ion-input",4),b.Lb(),b.Mb(10,"ion-item"),b.Mb(11,"ion-label",3),b.dc(12,"Password"),b.Lb(),b.Kb(13,"ion-input",5),b.Lb(),b.Mb(14,"ion-button",6),b.dc(15,"Login"),b.Lb(),b.Mb(16,"ion-button",7),b.Tb("click",(function(){return i.register()})),b.dc(17,"Register"),b.Lb(),b.Lb(),b.Lb()),2&e&&(b.zb(5),b.Xb("formGroup",i.credentialsForm),b.zb(9),b.Xb("disabled",!i.credentialsForm.valid),b.zb(2),b.Xb("disabled",!i.credentialsForm.valid))},directives:[l.k,l.u,l.t,l.h,a.l,a.h,a.c,l.n,l.o,l.m,l.z,a.g,a.b,l.e],styles:[""]}),t)}],d=((o=function e(){_classCallCheck(this,e)}).\u0275mod=b.Hb({type:o}),o.\u0275inj=b.Gb({factory:function(e){return new(e||o)},imports:[[r.b,a.d,l.v,a.i,s.h.forChild(u)]]}),o)}}]);