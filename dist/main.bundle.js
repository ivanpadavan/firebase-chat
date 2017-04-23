webpackJsonp([1,4],{

/***/ 346:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 346;


/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(469);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/user/WebstormProjects/firebase-chat/src/main.js.map

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(203);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
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
    function AppComponent(af) {
        this.af = af;
        this.newMessage = '';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.af.auth.login();
        this.users$ = this.af.database.object('/users');
    };
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(539),
            styles: [__webpack_require__(532)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=/home/user/WebstormProjects/firebase-chat/src/app.component.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pipes_keys_pipe__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_message_component_message_component__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_chat_component__ = __webpack_require__(466);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var firebaseConfig = {
    apiKey: "AIzaSyDEFJPpyGALNqn4quypS4Wfd4J43IxnNdI",
    authDomain: "test-f37a3.firebaseapp.com",
    databaseURL: "https://test-f37a3.firebaseio.com",
    storageBucket: "test-f37a3.appspot.com",
    messagingSenderId: "615862229636"
};
var firebaseAuthConfig = {
    provider: __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AuthProviders */].Password,
    method: __WEBPACK_IMPORTED_MODULE_5_angularfire2__["b" /* AuthMethods */].Password,
};
var routes = [
    { path: "chat/:id", component: __WEBPACK_IMPORTED_MODULE_9__components_chat_component__["a" /* ChatComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__pipes_keys_pipe__["a" /* KeysPipe */],
                __WEBPACK_IMPORTED_MODULE_9__components_chat_component__["a" /* ChatComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_message_component_message_component__["a" /* MessageComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_router__["a" /* RouterModule */].forRoot(routes),
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5_angularfire2__["c" /* AngularFireModule */].initializeApp(firebaseConfig, firebaseAuthConfig),
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/user/WebstormProjects/firebase-chat/src/app.module.js.map

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(290);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChatComponent = (function () {
    function ChatComponent(route, af, http) {
        this.route = route;
        this.af = af;
        this.http = http;
        this.newMessage = '';
    }
    ChatComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.chat$ = _this.af.database.object("/messages/" + _this.id);
        });
    };
    ChatComponent.prototype.send = function () {
        var _this = this;
        this.af.database.list("/messages/" + this.id).push({ name: 'operator', text: this.newMessage, date: (new Date).toISOString() });
        this.af.database.object("users/" + this.id + "/pushToken").subscribe(function (token) {
            _this.http.post("https://fcm.googleapis.com/fcm/send", {
                to: token.$value,
                "notification": { title: "New msg",
                    body: _this.newMessage,
                    sound: 'default' }
            }, new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* RequestOptions */]({ headers: new __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Headers */]({
                    'Content-Type': 'application/json',
                    'Authorization': 'key=AAAAj2Q_2oQ:APA91bEFo5fq5aSoyfy2A_jJ8y_imc7sUcRGBViemnaqITQ24iUE7dJ3s0_oZ_FtKQcNFeeDcyO2mr9DLzEra3Ozx6gDFYJ110FlYVNxSiPiPfnJIyGtc8U_PBCUFgVqR_xyrU6zAHr8'
                }) })).subscribe(function (res) { return _this.newMessage = ''; });
        });
    };
    ChatComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'chat',
            template: "\n  <div style=\"height: calc(100% - 30px); overflow-y: auto\" id=\"scrollable\">\n      <h2>Chat</h2>\n        <div *ngFor=\"let message of chat$ | async | keys\">\n          <message [me]=\"(chat$ | async)[message].name == 'operator'\"\n                   [text]=\"(chat$ | async)[message].text\"\n                   [imageURL]=\"(chat$ | async)[message].imageURL\"\n                   [date]=\"(chat$ | async)[message].date\"></message>\n          <div style=\"clear: both\"></div>\n        </div>\n      </div>\n\n    <div style=\"display: flex; height: 30px\">\n      <input type=\"text\" style=\"flex-grow: 1\" [(ngModel)]=\"newMessage\" (keyup.enter)=\"send()\">\n      <button class=\"btn btn-primary\" (click)=\"send()\" [disabled]=\"!newMessage\">Send</button>\n    </div>"
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2__["d" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angularfire2__["d" /* AngularFire */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* Http */]) === 'function' && _c) || Object])
    ], ChatComponent);
    return ChatComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/user/WebstormProjects/firebase-chat/src/chat.component.js.map

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MessageComponent = (function () {
    function MessageComponent() {
    }
    MessageComponent.prototype.ngAfterViewInit = function () {
        var node = document.getElementById('scrollable');
        node.scrollTop = node.scrollHeight;
    };
    MessageComponent.prototype.openInNewTab = function (url) {
        var win = window.open(url, '_blank');
        win.focus();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Input */])(), 
        __metadata('design:type', Boolean)
    ], MessageComponent.prototype, "me", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Input */])(), 
        __metadata('design:type', String)
    ], MessageComponent.prototype, "text", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Input */])(), 
        __metadata('design:type', String)
    ], MessageComponent.prototype, "date", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* Input */])(), 
        __metadata('design:type', String)
    ], MessageComponent.prototype, "imageURL", void 0);
    MessageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'message',
            template: __webpack_require__(540),
            styles: [__webpack_require__(533)]
        }), 
        __metadata('design:paramtypes', [])
    ], MessageComponent);
    return MessageComponent;
}());
//# sourceMappingURL=/home/user/WebstormProjects/firebase-chat/src/message.component.js.map

/***/ }),

/***/ 468:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeysPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var KeysPipe = (function () {
    function KeysPipe() {
    }
    KeysPipe.prototype.transform = function (value, args) {
        var keys = [];
        for (var key in value) {
            keys.push(key);
            if (key == "$value")
                return [];
        }
        return keys;
    };
    KeysPipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* Pipe */])({
            name: 'keys'
        }), 
        __metadata('design:paramtypes', [])
    ], KeysPipe);
    return KeysPipe;
}());
//# sourceMappingURL=/home/user/WebstormProjects/firebase-chat/src/keys.pipe.js.map

/***/ }),

/***/ 469:
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
//# sourceMappingURL=/home/user/WebstormProjects/firebase-chat/src/environment.js.map

/***/ }),

/***/ 532:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(140)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 533:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(140)();
// imports


// module
exports.push([module.i, ".msg {\n  font-size: 14px;\n  margin-top: 5px;\n  margin-bottom: 20px;\n}\n\n.msg_text {\n  width: 100%;\n  max-width: 300px;\n  text-align: center;\n}\n\n.me .msg_text {\n  background-color: #30A9FF;\n  color: white;\n  padding: 8px;\n  border-radius: 15px;\n\n}\n\n.them .msg_text {\n  background-color: #e0e0e0;\n  color: #333;\n  padding: 7px;\n  border-radius: 15px;\n}\n\n.authorimg {\n  margin: 0 5px 5px 5px;\n  width: 30px;\n  height: 30px;\n  border-radius: 15px;\n}\n\n.msg_timestamp {\n  color: gray;\n  font-size: 11px;\n  margin: 0 12px;\n}\n\n.me .msg_timestamp {\n  text-align: right;\n  float: right;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 539:
/***/ (function(module, exports) {

module.exports = "<!-- TAB NAVIGATION -->\n<ul class=\"nav nav-tabs\" role=\"tablist\" style=\"height: 42px\">\n  <li *ngFor=\"let user of users$ | async | keys; let i = index\"\n      [routerLink]=\"['./chat',user]\" routerLinkActive=\"active\" style=\"cursor: pointer\">\n    <!--<a [innerHtml]=\"(users$ | async)[user].name\"></a>-->\n    <a [innerHtml]=\"i+1\"></a>\n  </li>\n</ul>\n<!-- TAB CONTENT -->\n<div style=\"height: calc(100% - 42px)\">\n  <router-outlet></router-outlet>\n</div>\n\n"

/***/ }),

/***/ 540:
/***/ (function(module, exports) {

module.exports = "<div>\n\n  <div *ngIf=\"me == false\" style=\"float: left\" class=\"msg them\">\n      <div>\n        <div *ngIf=\"text\" [innerHtml]=\"text\"  class=\"msg_text\"></div>\n        <img *ngIf=\"imageURL\" [src]=\"imageURL\" style=\"cursor: pointer\" (click)=\"openInNewTab(imageURL)\"  class=\"msg_text\" />\n      </div>\n      <span class=\"msg_timestamp\" [innerHtml]=\"date | date : 'medium'\"></span>\n  </div>\n\n  <div *ngIf=\"me == true\" style=\"float: right\" class=\"msg me\">\n    <div>\n      <div *ngIf=\"text\" [innerHtml]=\"text\"  class=\"msg_text\"></div>\n      <img *ngIf=\"imageURL\" [src]=\"imageURL\" style=\"cursor: pointer\" (click)=\"openInNewTab(imageURL)\" class=\"msg_text\" />\n    </div>\n    <span class=\"msg_timestamp\" [innerHtml]=\"date | date : 'medium'\"></span>\n  </div>\n\n</div>\n"

/***/ }),

/***/ 564:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(347);


/***/ })

},[564]);
//# sourceMappingURL=main.bundle.js.map