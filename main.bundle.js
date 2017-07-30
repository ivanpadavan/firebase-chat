webpackJsonp([1,4],{

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(289);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpenChatService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OpenChatService = (function () {
    function OpenChatService(http) {
        var _this = this;
        this.http = http;
        this.openedChats = [];
        this.drivers = [];
        this.http
            .get('http://transport.poseidongroup.ru/cars')
            .subscribe(function (res) {
            _this.drivers = res.json().map(function (x) { return Object.assign(new __WEBPACK_IMPORTED_MODULE_2__app_component__["b" /* Driver */](), x); });
            _this.drivers.sort(function (a, b) { return a.fullName > b.fullName ? -1 : 1; });
        });
    }
    OpenChatService.prototype.openChat = function (user) {
        var driver = this.drivers.filter(function (x) { return x.token === user; })[0];
        if (!this.openedChats.find(function (value) { return value.id === user; })) {
            this.openedChats.push({ id: user, name: driver.fullName });
        }
    };
    OpenChatService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], OpenChatService);
    return OpenChatService;
    var _a;
}());
//# sourceMappingURL=/home/user/WebstormProjects/firebase-chat/src/open-chat.service.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_open_chat_service__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_new_message_directive__ = __webpack_require__(290);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Driver; });
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




var Driver = (function () {
    function Driver() {
    }
    Object.defineProperty(Driver.prototype, "fullName", {
        get: function () {
            var isFull = [this.lastName, this.firstName]
                .map(function (x) { return x.length; })
                .reduce(function (acc, val) { return acc && val; });
            var name = "" + this.lastName + (isFull ? ' ' : '') + this.firstName;
            return name.length ? name : 'Безымянный водитель';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Driver.prototype, "lastName", {
        get: function () {
            return this.lname_driver || '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Driver.prototype, "firstName", {
        get: function () {
            return this.fname_driver || '';
        },
        enumerable: true,
        configurable: true
    });
    return Driver;
}());
var AppComponent = (function () {
    function AppComponent(af, chatService) {
        this.af = af;
        this.chatService = chatService;
        this.showSidebar = true;
        this.id = '';
    }
    Object.defineProperty(AppComponent.prototype, "isUnread", {
        get: function () {
            return this.vc.map(function (x) { return x.isUnread; }).reduce(function (a, b) { return a || b; }, false);
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.ngOnInit = function () {
        this.af.auth.login({ email: 'operator@operator.com', password: 'operator' });
        this.users$ = this.af.database.object('/users');
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setInterval(function () {
            var elem = document.querySelector('.togBtn');
            if (elem) {
                _this.isUnread ?
                    elem.classList.add('un_readed') :
                    elem.classList.remove('un_readed');
            }
        }, 1000);
    };
    AppComponent.prototype.openChat = function (user) {
        this.chatService.openChat(user);
        this.id = user;
    };
    AppComponent.prototype.closeChat = function (user, index) {
        this.chatService.openedChats.splice(index, 1);
        if (this.id === user.id) {
            var len = this.chatService.openedChats.length;
            if (len === 0) {
                this.id = '';
            }
            else {
                this.id = len === index ?
                    this.chatService.openedChats[index - 1].id :
                    this.chatService.openedChats[index].id;
            }
        }
    };
    AppComponent.prototype.getName = function (user) {
        var driver = this.chatService.drivers.filter(function (x) { return x.token === user; })[0];
        return driver.fullName;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* ViewChildren */])(__WEBPACK_IMPORTED_MODULE_3__directives_new_message_directive__["a" /* NewMessageDirective */]), 
        __metadata('design:type', Array)
    ], AppComponent.prototype, "vc", void 0);
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(501),
            styles: [__webpack_require__(494)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_open_chat_service__["a" /* OpenChatService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_open_chat_service__["a" /* OpenChatService */]) === 'function' && _b) || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/user/WebstormProjects/firebase-chat/src/app.component.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_open_chat_service__ = __webpack_require__(186);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewMessageDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewMessageDirective = (function () {
    function NewMessageDirective(el, af, chatService) {
        this.el = el;
        this.af = af;
        this.chatService = chatService;
        this.isUnread = false;
    }
    NewMessageDirective.prototype.ngOnChanges = function (changes) {
        var _this = this;
        this.af.database.object("users/" + this.id).subscribe(function (res) {
            var lastOpened = +new Date(res.lastOpened || 0);
            var lastMessage = +new Date(res.lastMessage || 0);
            _this.isUnread = lastOpened < lastMessage;
            if (_this.isUnread) {
                _this.el.nativeElement.classList.add('un_readed');
                if (_this.chatService.openedChats.length) {
                    _this.chatService.openChat(_this.id);
                }
            }
            else {
                _this.el.nativeElement.classList.remove('un_readed');
            }
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', String)
    ], NewMessageDirective.prototype, "id", void 0);
    NewMessageDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* Directive */])({
            selector: '[newMessage]'
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ElementRef */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_open_chat_service__["a" /* OpenChatService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_open_chat_service__["a" /* OpenChatService */]) === 'function' && _c) || Object])
    ], NewMessageDirective);
    return NewMessageDirective;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/user/WebstormProjects/firebase-chat/src/new-message.directive.js.map

/***/ }),

/***/ 319:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 319;


/***/ }),

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(407);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(431);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/user/WebstormProjects/firebase-chat/src/main.js.map

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pipes_keys_pipe__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_message_component_message_component__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_chat_component__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__directives_new_message_directive__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_open_chat_service__ = __webpack_require__(186);
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












var firebaseTestConfig = {
    apiKey: "AIzaSyDEFJPpyGALNqn4quypS4Wfd4J43IxnNdI",
    authDomain: "test-f37a3.firebaseapp.com",
    databaseURL: "https://test-f37a3.firebaseio.com",
    storageBucket: "test-f37a3.appspot.com",
    messagingSenderId: "615862229636",
};
var firebaseProdConfig = {
    apiKey: "AIzaSyBr2ccbjy9BptDsbAvUaWPk-V01D4J0WJs",
    authDomain: "transport-d5932.firebaseapp.com",
    databaseURL: "https://transport-d5932.firebaseio.com",
    storageBucket: "transport-d5932.appspot.com",
    messagingSenderId: "498701825296"
};
var firebaseAuthConfig = {
    provider: __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AuthProviders */].Password,
    method: __WEBPACK_IMPORTED_MODULE_5_angularfire2__["b" /* AuthMethods */].Password,
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__pipes_keys_pipe__["a" /* KeysPipe */],
                __WEBPACK_IMPORTED_MODULE_8__components_chat_component__["a" /* ChatComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_message_component_message_component__["a" /* MessageComponent */],
                __WEBPACK_IMPORTED_MODULE_10__directives_new_message_directive__["a" /* NewMessageDirective */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5_angularfire2__["c" /* AngularFireModule */].initializeApp(window.location.host === 'transport.poseidongroup.ru' ? firebaseProdConfig : firebaseTestConfig, firebaseAuthConfig),
            ],
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_9__angular_common__["a" /* LocationStrategy */],
                    useClass: __WEBPACK_IMPORTED_MODULE_9__angular_common__["b" /* HashLocationStrategy */],
                },
                __WEBPACK_IMPORTED_MODULE_11__services_open_chat_service__["a" /* OpenChatService */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/user/WebstormProjects/firebase-chat/src/app.module.js.map

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_take__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_take__);
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
    function ChatComponent(af, http) {
        this.af = af;
        this.http = http;
        this.newMessage = '';
    }
    ChatComponent.prototype.ngOnChanges = function () {
        var _this = this;
        this.chat$ = this.af.database.list("/messages/" + this.id, {
            query: {
                limitToLast: 100,
                orderByChild: 'date'
            }
        });
        this.chat$.take(1).subscribe(function (res) {
            _this.af.database.object("users/" + _this.id).update({
                lastOpened: (new Date).toISOString()
            });
        });
    };
    ChatComponent.prototype.send = function () {
        var _this = this;
        if (!this.newMessage.length)
            return;
        this.af.database.list("/messages/" + this.id).push({ name: 'operator', text: this.newMessage, date: (new Date).toISOString() });
        this.af.database.object("users/" + this.id + "/pushToken").subscribe(function (token) {
            _this.http.post("https://fcm.googleapis.com/fcm/send", {
                to: token.$value,
                "notification": { title: "New msg",
                    body: _this.newMessage,
                    sound: 'default' }
            }, new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* RequestOptions */]({ headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Headers */]({
                    'Content-Type': 'application/json',
                    'Authorization': "key=" + (window.location.host === 'transport.poseidongroup.ru' ?
                        'AAAAj2Q_2oQ:APA91bEFo5fq5aSoyfy2A_jJ8y_imc7sUcRGBViemnaqITQ24iUE7dJ3s0_oZ_FtKQcNFeeDcyO2mr9DLzEra3Ozx6gDFYJ110FlYVNxSiPiPfnJIyGtc8U_PBCUFgVqR_xyrU6zAHr8' :
                        'AAAAdBzx9RA:APA91bEYwKUSkAGnPAbhGQqy5d-DDVwfnUuB3BU7zkwwnFQqmMuHxbTscPiZHU5jfumbrkKbegAXFz3xMLb5JMlp0YH32lMwXp0aohzSWfV3ZYg_bIhw9Bat9TeYv1TMoc1a27zEOGIh')
                }) })).subscribe(function (res) { return _this.newMessage = ''; });
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', String)
    ], ChatComponent.prototype, "id", void 0);
    ChatComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Component */])({
            selector: 'chat',
            template: "\n  <div style=\"height: calc(100% - 30px); overflow-y: auto\" id=\"scrollable\">\n        <div *ngFor=\"let message of chat$ | async\">\n          <message [me]=\"message.name == 'operator'\"\n                   [text]=\"message.text\"\n                   [imageURL]=\"message.imageURL\"\n                   [date]=\"message.date\"></message>\n          <div style=\"clear: both\"></div>\n        </div>\n      </div>\n\n    <div style=\"display: flex; height: 30px\">\n      <input type=\"text\" style=\"flex-grow: 1\" [(ngModel)]=\"newMessage\" (keyup.enter)=\"send()\">\n      <button class=\"btn btn-primary\" style=\"border-radius: 0; line-height: 1;\" (click)=\"send()\" [disabled]=\"!newMessage\">\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C</button>\n    </div>"
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === 'function' && _b) || Object])
    ], ChatComponent);
    return ChatComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/user/WebstormProjects/firebase-chat/src/chat.component.js.map

/***/ }),

/***/ 429:
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', Boolean)
    ], MessageComponent.prototype, "me", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', String)
    ], MessageComponent.prototype, "text", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', String)
    ], MessageComponent.prototype, "date", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Input */])(), 
        __metadata('design:type', String)
    ], MessageComponent.prototype, "imageURL", void 0);
    MessageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Component */])({
            selector: 'message',
            template: __webpack_require__(502),
            styles: [__webpack_require__(495)]
        }), 
        __metadata('design:paramtypes', [])
    ], MessageComponent);
    return MessageComponent;
}());
//# sourceMappingURL=/home/user/WebstormProjects/firebase-chat/src/message.component.js.map

/***/ }),

/***/ 430:
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Pipe */])({
            name: 'keys'
        }), 
        __metadata('design:paramtypes', [])
    ], KeysPipe);
    return KeysPipe;
}());
//# sourceMappingURL=/home/user/WebstormProjects/firebase-chat/src/keys.pipe.js.map

/***/ }),

/***/ 431:
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

/***/ 494:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(128)();
// imports


// module
exports.push([module.i, ":host {\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n.sidebar {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: 100%;\n  max-width: 0;\n  white-space: nowrap;\n  border-left: 1px solid transparent;\n  -webkit-transition: all .35s cubic-bezier(0.36, 1.36, 1, 1);\n  transition: all .35s cubic-bezier(0.36, 1.36, 1, 1);\n}\n\n\n.sidebar.opened {\n  max-width: 50%;\n  border-color: #ddd;\n}\n\n.toggle {\n  visibility: hidden;\n  background-color: rgba(0, 0, 0, 0);\n}\n.toggle_label {\n  float: right;\n  margin: 5px;\n  font-size: 30px;\n  cursor: pointer;\n  /*color: #fafafa;*/\n  color: #777;\n  text-align: right;\n  display: inline-block;\n  font-family: 'Glyphicons Halflings';\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.toggle_label:after {\n  content: \"\\E236\";\n}\n\n.nav-tabs {\n  /*background-color: #135073;\n  border-bottom-width: 0;*/\n}\n\n.nav-pills {\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n\n.close-chat {\n  top: -10px;\n  left: 12px;\n  cursor: pointer;\n}\n\n.tab-content {\n  height: calc(100% - 42px);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n\nli.active a, .tab-content {\n  /*background-color: #fafafa;*/\n}\n\n.nav-pills>li>a, .nav-tabs>li>a {\n  border-radius: 0;\n  /*color: #fafafa;*/\n}\n.nav-pills>li>a:hover {\n  /*background-color: #114362;*/\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 495:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(128)();
// imports


// module
exports.push([module.i, ".msg {\n  font-size: 14px;\n  margin-top: 5px;\n  margin-bottom: 20px;\n}\n\n.msg_text {\n  width: 100%;\n  max-width: 300px;\n  word-wrap: break-word;\n  text-align: center;\n}\n\n.me .msg_text {\n  background-color: #30A9FF;\n  color: white;\n  padding: 8px;\n  border-radius: 15px;\n\n}\n\n.them .msg_text {\n  background-color: #e0e0e0;\n  color: #333;\n  padding: 7px;\n  border-radius: 15px;\n}\n\n.authorimg {\n  margin: 0 5px 5px 5px;\n  width: 30px;\n  height: 30px;\n  border-radius: 15px;\n}\n\n.msg_timestamp {\n  color: gray;\n  font-size: 11px;\n  margin: 0 12px;\n}\n\n.me .msg_timestamp {\n  text-align: right;\n  float: right;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 501:
/***/ (function(module, exports) {

module.exports = "<!-- TAB NAVIGATION -->\n    <ul class=\"nav nav-tabs\" role=\"tablist\">\n\n      <li *ngFor=\"let user of chatService.openedChats; let i = index\"\n          [ngClass]=\"{'active': user.id === id}\"\n          (click)=\"id = user.id\"\n          style=\"float: none; border: 1px #dddddd solid; border-radius: 5px; background-color: white\">\n        <a newMessage [id]=\"user.id\">\n          {{user.name}}\n          <span class=\"glyphicon glyphicon-remove close-chat\"\n          (click)=\"closeChat(user, i)\"\n          ></span>\n        </a>\n      </li>\n\n      <label for=\"toggle\" class=\"toggle_label\"></label>\n      <input type=\"checkbox\" class=\"toggle\" id=\"toggle\" [(ngModel)]=\"showSidebar\">\n    </ul>\n    <!-- TAB CONTENT -->\n    <div class=\"tab-content\">\n      <div style=\"flex-grow: 1; height: 100%; background-color: white\" (click)=\"showSidebar = false\"\n           [ngStyle]=\"{\n           'z-index': chatService.openedChats?.length ? 2 : 0\n           }\">\n\n        <chat *ngIf=\"id\" [id]=\"id\"></chat>\n      </div>\n      <div class=\"sidebar\" [ngClass]=\"{'opened': showSidebar, 'closed': !showSidebar}\">\n        <ul class=\"nav nav-pills nav-stacked\" >\n          <li *ngFor=\"let user of users$ | async | keys\"\n              style=\"cursor: pointer\"\n              (click)=\"openChat(user)\">\n            <a newMessage [id]=\"user\" [innerHtml]=\"getName(user)\"></a>\n          </li>\n        </ul>\n      </div>\n\n    </div>\n"

/***/ }),

/***/ 502:
/***/ (function(module, exports) {

module.exports = "<div>\n\n  <div *ngIf=\"me == false\" style=\"float: left\" class=\"msg them\">\n      <div>\n        <div *ngIf=\"text\" [innerHtml]=\"text\"  class=\"msg_text\"></div>\n        <img *ngIf=\"imageURL\" [src]=\"imageURL\" style=\"cursor: pointer\" (click)=\"openInNewTab(imageURL)\"  class=\"msg_text\" />\n      </div>\n      <span class=\"msg_timestamp\" [innerHtml]=\"date | date : 'medium'\"></span>\n  </div>\n\n  <div *ngIf=\"me == true\" style=\"float: right\" class=\"msg me\">\n    <div>\n      <div *ngIf=\"text\" [innerHtml]=\"text\"  class=\"msg_text\"></div>\n      <img *ngIf=\"imageURL\" [src]=\"imageURL\" style=\"cursor: pointer\" (click)=\"openInNewTab(imageURL)\" class=\"msg_text\" />\n    </div>\n    <span class=\"msg_timestamp\" [innerHtml]=\"date | date : 'medium'\"></span>\n  </div>\n\n</div>\n"

/***/ }),

/***/ 529:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(320);


/***/ })

},[529]);
//# sourceMappingURL=main.bundle.js.map