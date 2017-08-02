webpackJsonp([4],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./auth/auth.module": [
		"../../../../../src/app/auth/auth.module.ts",
		3
	],
	"./blog/blog.module": [
		"../../../../../src/app/blog/blog.module.ts"
	],
	"./checkout/checkout.module": [
		"../../../../../src/app/checkout/checkout.module.ts",
		0
	],
	"./dashboard/dashboard.module": [
		"../../../../../src/app/dashboard/dashboard.module.ts"
	],
	"./home/index": [
		"../../../../../src/app/home/index.ts"
	],
	"./product/index": [
		"../../../../../src/app/product/index.ts",
		2
	],
	"./user/index": [
		"../../../../../src/app/user/index.ts",
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"default\" *ngIf=\"currentUrl\">\r\n  <section>\r\n    <app-header *ngIf=\"currentUrl && !isCheckoutRoute() && !isAdminRoute()\"></app-header>\r\n    <app-checkout-header [currentStep]=\"currentStep\" *ngIf=\"currentUrl && isCheckoutRoute()\"></app-checkout-header>\r\n     <app-dash-header *ngIf=\"currentUrl && isAdminRoute()\"></app-dash-header>  \r\n    <app-loading-indicator></app-loading-indicator>\r\n    <app-notification></app-notification>\r\n\r\n    <main *ngIf=\"currentUrl && !isAdminRoute()\" class=\"body container\">\r\n      <router-outlet></router-outlet>\r\n    </main>\r\n    <div *ngIf=\"currentUrl && isAdminRoute()\" class=\"dash\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n\r\n    <app-checkout-footer *ngIf=\"currentUrl && isCheckoutRoute()\"></app-checkout-footer>\r\n    <app-footer *ngIf=\"currentUrl && !isCheckoutRoute() && !isAdminRoute()\"></app-footer>\r\n  </section>\r\n</div>\r\n<!-- <div class=\"default\" *ngIf=\"currentUrl && isAdminRoute()\">\r\n  <router-outlet></router-outlet>\r\n</div> -->"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "main {\n  padding-top: 110px;\n  padding-bottom: 30px;\n  padding-right: 50px;\n  padding-left: 50px; }\n\n.dash {\n  padding-top: 0px;\n  padding-left: 250px;\n  background-color: #efefef; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_reducers_selectors__ = __webpack_require__("../../../../../src/app/auth/reducers/selectors.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_services_checkout_service__ = __webpack_require__("../../../../../src/app/core/services/checkout.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
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
    function AppComponent(router, checkoutService, store) {
        var _this = this;
        this.router = router;
        this.checkoutService = checkoutService;
        this.store = store;
        this.checkoutUrls = ['/checkout/cart', '/checkout/address', '/checkout/payment'];
        this.adminUrl = ['/admin', '/admin/orders', '/admin/products', '/admin/user', '/admin/crop-account', '/admin/campaign', '/admin/coupon', '/admin/report', '/admin/configuration'];
        router
            .events
            .filter(function (e) { return e instanceof __WEBPACK_IMPORTED_MODULE_4__angular_router__["d" /* NavigationEnd */]; })
            .subscribe(function (e) {
            _this.currentUrl = e.url;
            _this.findCurrentStep(_this.currentUrl);
            window.scrollTo(0, 0);
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store.select(__WEBPACK_IMPORTED_MODULE_0__auth_reducers_selectors__["a" /* getAuthStatus */]).
            subscribe(function () {
            _this.orderSub$ = _this.checkoutService.fetchCurrentOrder()
                .subscribe();
        });
    };
    AppComponent.prototype.isCheckoutRoute = function () {
        if (!this.currentUrl) {
            return false;
        }
        var index = this.checkoutUrls.indexOf(this.currentUrl);
        if (index >= 0) {
            return true;
        }
        else {
            return false;
        }
    };
    AppComponent.prototype.isAdminRoute = function () {
        if (!this.currentUrl) {
            return false;
        }
        var index = this.adminUrl.indexOf(this.currentUrl);
        if (index >= 0) {
            return true;
        }
        else {
            return false;
        }
    };
    AppComponent.prototype.findCurrentStep = function (currentRoute) {
        var currRouteFragments = currentRoute.split('/');
        var length = currRouteFragments.length;
        this.currentStep = currentRoute.split('/')[length - 1];
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.orderSub$.unsubscribe();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["F" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__core_services_checkout_service__["a" /* CheckoutService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_services_checkout_service__["a" /* CheckoutService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_index__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_index__ = __webpack_require__("../../../../../src/app/home/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__layout_index__ = __webpack_require__("../../../../../src/app/layout/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__core_index__ = __webpack_require__("../../../../../src/app/core/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__blog_blog_module__ = __webpack_require__("../../../../../src/app/blog/blog.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__dashboard_dashboard_module__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__app_reducers__ = __webpack_require__("../../../../../src/app/app.reducers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__layout_checkout_header_checkout_header_component__ = __webpack_require__("../../../../../src/app/layout/checkout-header/checkout-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__layout_checkout_footer_checkout_footer_component__ = __webpack_require__("../../../../../src/app/layout/checkout-footer/checkout-footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_rxjs_add_operator_finally__ = __webpack_require__("../../../../rxjs/add/operator/finally.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_rxjs_add_operator_finally___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_24_rxjs_add_operator_finally__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__layout_dash_header_dash_header_component__ = __webpack_require__("../../../../../src/app/layout/dash-header/dash-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__layout_dash_footer_dash_footer_component__ = __webpack_require__("../../../../../src/app/layout/dash-footer/dash-footer.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// Components

// Routes

// Modules







// import { MaterialModule } from '@angular/material';




// adding rx operators









var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_17__layout_checkout_header_checkout_header_component__["a" /* CheckoutHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_18__layout_checkout_footer_checkout_footer_component__["a" /* CheckoutFooterComponent */],
            __WEBPACK_IMPORTED_MODULE_26__layout_dash_header_dash_header_component__["a" /* DashHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_27__layout_dash_footer_dash_footer_component__["a" /* DashFooterComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_routes__["a" /* routes */]),
            __WEBPACK_IMPORTED_MODULE_13__ngrx_store__["a" /* StoreModule */].provideStore(__WEBPACK_IMPORTED_MODULE_16__app_reducers__["a" /* reducer */]),
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_14__dashboard_dashboard_module__["DashboardModule"],
            __WEBPACK_IMPORTED_MODULE_9__home_index__["HomeModule"],
            __WEBPACK_IMPORTED_MODULE_10__layout_index__["a" /* LayoutModule */],
            __WEBPACK_IMPORTED_MODULE_11__core_index__["a" /* CoreModule */],
            __WEBPACK_IMPORTED_MODULE_12__blog_blog_module__["BlogModule"],
            __WEBPACK_IMPORTED_MODULE_8__shared_index__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_15__angular_platform_browser_animations__["a" /* NoopAnimationsModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.reducers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_reducers_search_reducers__ = __webpack_require__("../../../../../src/app/home/reducers/search.reducers.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_reducers_product_reducer__ = __webpack_require__("../../../../../src/app/product/reducers/product-reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_reducers_user_reducer__ = __webpack_require__("../../../../../src/app/user/reducers/user.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__checkout_reducers_checkout_reducer__ = __webpack_require__("../../../../../src/app/checkout/reducers/checkout.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_reducers_auth_reducer__ = __webpack_require__("../../../../../src/app/auth/reducers/auth.reducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngrx_core_compose__ = __webpack_require__("../../../../@ngrx/core/compose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngrx_core_compose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__ngrx_core_compose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngrx_store_freeze__ = __webpack_require__("../../../../ngrx-store-freeze/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngrx_store_freeze___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ngrx_store_freeze__);
/* unused harmony export developmentReducer */
/* harmony export (immutable) */ __webpack_exports__["a"] = reducer;






/**
 * combineReducers is another useful metareducer that takes a map of reducer
 * functions and creates a new reducer that stores the gathers the values
 * of each reducer and stores them using the reducer's key. Think of it
 * almost like a database, where every reducer is a table in the db.
 *
 * More: https://egghead.io/lessons/javascript-redux-implementing-combinereducers-from-scratch
 */

/**
 * The compose function is one of our most handy tools. In basic terms, you give
 * it any number of functions and it returns a function. This new function
 * takes a value and chains it through every composed function, returning
 * the output.
 *
 * More: https://drboolean.gitbooks.io/mostly-adequate-guide/content/ch5.html
 */

/**
 * storeFreeze prevents state from being mutated. When mutation occurs, an
 * exception will be thrown. This is useful during development mode to
 * ensure that none of the reducers accidentally mutates the state.
 */

var reducers = {
    products: __WEBPACK_IMPORTED_MODULE_2__product_reducers_product_reducer__["a" /* productReducer */],
    auth: __WEBPACK_IMPORTED_MODULE_5__auth_reducers_auth_reducer__["a" /* authReducer */],
    checkout: __WEBPACK_IMPORTED_MODULE_4__checkout_reducers_checkout_reducer__["a" /* checkoutReducer */],
    users: __WEBPACK_IMPORTED_MODULE_3__user_reducers_user_reducer__["a" /* userReducer */],
    search: __WEBPACK_IMPORTED_MODULE_0__home_reducers_search_reducers__["a" /* searchReducer */]
};
var developmentReducer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__ngrx_core_compose__["compose"])(__WEBPACK_IMPORTED_MODULE_8_ngrx_store_freeze__["storeFreeze"], __WEBPACK_IMPORTED_MODULE_6__ngrx_store__["d" /* combineReducers */])(reducers);
;
var productionReducer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__ngrx_store__["d" /* combineReducers */])(reducers);
/**
 *
 *
 * @export
 * @param {*} state
 * @param {*} action
 * @returns
 */
function reducer(state, action) {
    if (__WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].production) {
        return productionReducer(state, action);
    }
    else {
        return developmentReducer(state, action);
    }
}
//# sourceMappingURL=app.reducers.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_guards_auth_guard__ = __webpack_require__("../../../../../src/app/core/guards/auth.guard.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });

var routes = [
    {
        path: '',
        loadChildren: './blog/blog.module#BlogModule'
    },
    {
        path: 'admin',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
    },
    {
        path: 'blog',
        loadChildren: './blog/blog.module#BlogModule'
    },
    {
        path: 'home',
        loadChildren: './home/index#HomeModule'
    },
    {
        path: 'checkout',
        loadChildren: './checkout/checkout.module#CheckoutModule'
    },
    {
        path: 'user',
        loadChildren: './user/index#UserModule',
        canActivate: [__WEBPACK_IMPORTED_MODULE_0__core_guards_auth_guard__["a" /* CanActivateViaAuthGuard */]]
    },
    {
        path: 'product',
        loadChildren: './product/index#ProductModule'
    },
    {
        path: 'auth',
        loadChildren: './auth/auth.module#AuthModule'
    }
];
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/auth/actions/auth.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthActions; });
var AuthActions = (function () {
    function AuthActions() {
    }
    AuthActions.prototype.authorize = function () {
        return { type: AuthActions.AUTHORIZE };
    };
    AuthActions.prototype.login = function () {
        return { type: AuthActions.LOGIN };
    };
    AuthActions.prototype.loginSuccess = function () {
        return { type: AuthActions.LOGIN_SUCCESS };
    };
    AuthActions.prototype.logout = function () {
        return { type: AuthActions.LOGOUT };
    };
    AuthActions.prototype.logoutSuccess = function () {
        return { type: AuthActions.LOGOUT_SUCCESS };
    };
    return AuthActions;
}());

AuthActions.LOGIN = 'LOGIN';
AuthActions.LOGIN_SUCCESS = 'LOGIN_SUCCESS';
AuthActions.LOGOUT = 'LOGOUT';
AuthActions.LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
AuthActions.AUTHORIZE = 'AUTHORIZE';
//# sourceMappingURL=auth.actions.js.map

/***/ }),

/***/ "../../../../../src/app/auth/effects/auth.effects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_services_auth_service__ = __webpack_require__("../../../../../src/app/core/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions_auth_actions__ = __webpack_require__("../../../../../src/app/auth/actions/auth.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationEffects; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthenticationEffects = (function () {
    function AuthenticationEffects(actions$, authService, authActions) {
        var _this = this;
        this.actions$ = actions$;
        this.authService = authService;
        this.authActions = authActions;
        // tslint:disable-next-line:member-ordering
        this.Authorized$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_3__actions_auth_actions__["a" /* AuthActions */].AUTHORIZE)
            .switchMap(function () { return _this.authService.authorized(); })
            .filter(function (data) { return !data.error && data.count; })
            .map(function () { return _this.authActions.loginSuccess(); });
    }
    return AuthenticationEffects;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"]) === "function" && _a || Object)
], AuthenticationEffects.prototype, "Authorized$", void 0);
AuthenticationEffects = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["c" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["c" /* Actions */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__core_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_services_auth_service__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__actions_auth_actions__["a" /* AuthActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__actions_auth_actions__["a" /* AuthActions */]) === "function" && _d || Object])
], AuthenticationEffects);

var _a, _b, _c, _d;
//# sourceMappingURL=auth.effects.js.map

/***/ }),

/***/ "../../../../../src/app/auth/reducers/auth.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_auth_actions__ = __webpack_require__("../../../../../src/app/auth/actions/auth.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_state__ = __webpack_require__("../../../../../src/app/auth/reducers/auth.state.ts");
/* unused harmony export initialState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return authReducer; });


var initialState = new __WEBPACK_IMPORTED_MODULE_1__auth_state__["a" /* AuthStateRecord */]();
var authReducer = function (state, _a) {
    if (state === void 0) { state = initialState; }
    var type = _a.type, payload = _a.payload;
    switch (type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_auth_actions__["a" /* AuthActions */].LOGIN_SUCCESS:
            return state.merge({ isAuthenticated: true });
        case __WEBPACK_IMPORTED_MODULE_0__actions_auth_actions__["a" /* AuthActions */].LOGOUT_SUCCESS:
            return state.merge({ isAuthenticated: false });
        default:
            return state;
    }
};
//# sourceMappingURL=auth.reducer.js.map

/***/ }),

/***/ "../../../../../src/app/auth/reducers/auth.state.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable__ = __webpack_require__("../../../../immutable/dist/immutable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_immutable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthStateRecord; });

var AuthStateRecord = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Record"])({
    isAuthenticated: false
});
//# sourceMappingURL=auth.state.js.map

/***/ }),

/***/ "../../../../../src/app/auth/reducers/selectors.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect__ = __webpack_require__("../../../../reselect/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_reselect__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getAuthStatus; });

// Base product state function
function getAuthState(state) {
    return state.auth;
}
// ******************** Individual selectors ***************************
var fetchAuthStatus = function (state) {
    return state.isAuthenticated;
};
// *************************** PUBLIC API's ****************************
var getAuthStatus = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getAuthState, fetchAuthStatus);
//# sourceMappingURL=selectors.js.map

/***/ }),

/***/ "../../../../../src/app/blog/aboutus/aboutus.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>About Us</h1>\n<h3>Welcome to a New Era of Streamlined Denture Fabrication</h3>\n<p>\nOne of the greatest challenges in dentistry involves the vast population of adults around the world who are partly or completely edentulous. Some of the greatest challenges in treating these patients include complicated procedures, human error, numerous visits and hidden costs associated with traditional denture procedures. Denture procedures are generally time-consuming and tedious. Because conventional dentures are handfabricated, human error can occur in every step of the process. Other challenges with conventional denture procedures are geographical, logistical, financial or procedural by nature. Patients who need dentures also find it difficult to arrange multiple office visits under the conventional five-visit procedure.\n</p>\n<p>\nTo solve these inherent challenges and more, in 2007, seven dental professionals gathered together to find an answer to solve the range of problems inherent to conventional denture procedures. After extensive research and numerous studies, these doctors pioneered the world’s first computer-aided design (CAD) and computer-aided manufacturing (CAM) technology solution to make modern denture procedures highly accurate, efficient and predictable. After testing this new method over the course of two years, they obtained the first license in the world to use a computerized 3-Dimensional structuring method to produce dentures.\n</p>\n<p>\nWith DENTCA CAD/CAM dentures, only two patient visits are really needed. The first visit consists of taking the impression and recording the VD, CR, and bite all on the same tray all in approximately 60 minutes or less. Then, DENTCA’s digital process takes care of the rest.\n</p>\n<div class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n  <img src=\"assets/dentca-history.png\" style=\"width:800px; height: 1100px;\">\n</div>"

/***/ }),

/***/ "../../../../../src/app/blog/aboutus/aboutus.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\n  margin-bottom: 10px;\n  color: #444444; }\n\nh3 {\n  margin-bottom: 30px;\n  color: #444444; }\n\np {\n  margin-bottom: 20px;\n  color: #444444; }\n\n.himag {\n  width: 800;\n  height: 1100; }\n\ndiv {\n  text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/blog/aboutus/aboutus.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutusComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutusComponent = (function () {
    function AboutusComponent() {
    }
    AboutusComponent.prototype.ngOnInit = function () {
    };
    return AboutusComponent;
}());
AboutusComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Component */])({
        selector: 'app-aboutus',
        template: __webpack_require__("../../../../../src/app/blog/aboutus/aboutus.component.html"),
        styles: [__webpack_require__("../../../../../src/app/blog/aboutus/aboutus.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], AboutusComponent);

//# sourceMappingURL=aboutus.component.js.map

/***/ }),

/***/ "../../../../../src/app/blog/blog.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/blog/blog.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/blog/blog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlogComponent = (function () {
    function BlogComponent() {
    }
    BlogComponent.prototype.ngOnInit = function () {
    };
    return BlogComponent;
}());
BlogComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Component */])({
        selector: 'app-blog',
        template: __webpack_require__("../../../../../src/app/blog/blog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/blog/blog.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], BlogComponent);

//# sourceMappingURL=blog.component.js.map

/***/ }),

/***/ "../../../../../src/app/blog/blog.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__blog_routes__ = __webpack_require__("../../../../../src/app/blog/blog.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__aboutus_aboutus_component__ = __webpack_require__("../../../../../src/app/blog/aboutus/aboutus.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dentca_3d_dentca_3d_component__ = __webpack_require__("../../../../../src/app/blog/dentca-3d/dentca-3d.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__resources_resources_component__ = __webpack_require__("../../../../../src/app/blog/resources/resources.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__news_news_component__ = __webpack_require__("../../../../../src/app/blog/news/news.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__blog_component__ = __webpack_require__("../../../../../src/app/blog/blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_components_map_map_component__ = __webpack_require__("../../../../../src/app/shared/components/map/map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__welcome_welcome_component__ = __webpack_require__("../../../../../src/app/blog/welcome/welcome.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogModule", function() { return BlogModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var BlogModule = (function () {
    function BlogModule() {
    }
    return BlogModule;
}());
BlogModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["e" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_3__blog_routes__["a" /* BlogRoutes */])
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__blog_component__["a" /* BlogComponent */],
            __WEBPACK_IMPORTED_MODULE_4__aboutus_aboutus_component__["a" /* AboutusComponent */],
            __WEBPACK_IMPORTED_MODULE_5__dentca_3d_dentca_3d_component__["a" /* Dentca3dComponent */],
            __WEBPACK_IMPORTED_MODULE_6__resources_resources_component__["a" /* ResourcesComponent */],
            __WEBPACK_IMPORTED_MODULE_7__news_news_component__["a" /* NewsComponent */],
            __WEBPACK_IMPORTED_MODULE_9__shared_components_map_map_component__["a" /* MapComponent */],
            __WEBPACK_IMPORTED_MODULE_10__welcome_welcome_component__["a" /* WelcomeComponent */],
        ]
    })
], BlogModule);

//# sourceMappingURL=blog.module.js.map

/***/ }),

/***/ "../../../../../src/app/blog/blog.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__aboutus_aboutus_component__ = __webpack_require__("../../../../../src/app/blog/aboutus/aboutus.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dentca_3d_dentca_3d_component__ = __webpack_require__("../../../../../src/app/blog/dentca-3d/dentca-3d.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resources_resources_component__ = __webpack_require__("../../../../../src/app/blog/resources/resources.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__news_news_component__ = __webpack_require__("../../../../../src/app/blog/news/news.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__welcome_welcome_component__ = __webpack_require__("../../../../../src/app/blog/welcome/welcome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__blog_component__ = __webpack_require__("../../../../../src/app/blog/blog.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogRoutes; });






var BlogRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_5__blog_component__["a" /* BlogComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_4__welcome_welcome_component__["a" /* WelcomeComponent */] },
            { path: 'aboutus', component: __WEBPACK_IMPORTED_MODULE_0__aboutus_aboutus_component__["a" /* AboutusComponent */] },
            { path: 'dentca-3d', component: __WEBPACK_IMPORTED_MODULE_1__dentca_3d_dentca_3d_component__["a" /* Dentca3dComponent */] },
            { path: 'resources', component: __WEBPACK_IMPORTED_MODULE_2__resources_resources_component__["a" /* ResourcesComponent */] },
            { path: 'news', component: __WEBPACK_IMPORTED_MODULE_3__news_news_component__["a" /* NewsComponent */] }
        ]
    },
];
//# sourceMappingURL=blog.routes.js.map

/***/ }),

/***/ "../../../../../src/app/blog/dentca-3d/dentca-3d.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Dentca Center Location</h1>\n\n<app-map></app-map>"

/***/ }),

/***/ "../../../../../src/app/blog/dentca-3d/dentca-3d.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/blog/dentca-3d/dentca-3d.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dentca3dComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Dentca3dComponent = (function () {
    function Dentca3dComponent() {
    }
    Dentca3dComponent.prototype.ngOnInit = function () {
    };
    return Dentca3dComponent;
}());
Dentca3dComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Component */])({
        selector: 'app-dentca-3d',
        template: __webpack_require__("../../../../../src/app/blog/dentca-3d/dentca-3d.component.html"),
        styles: [__webpack_require__("../../../../../src/app/blog/dentca-3d/dentca-3d.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], Dentca3dComponent);

//# sourceMappingURL=dentca-3d.component.js.map

/***/ }),

/***/ "../../../../../src/app/blog/news/news.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>News and Events</h1>\n<p>\n  news works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/blog/news/news.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/blog/news/news.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewsComponent = (function () {
    function NewsComponent() {
    }
    NewsComponent.prototype.ngOnInit = function () {
    };
    return NewsComponent;
}());
NewsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Component */])({
        selector: 'app-news',
        template: __webpack_require__("../../../../../src/app/blog/news/news.component.html"),
        styles: [__webpack_require__("../../../../../src/app/blog/news/news.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], NewsComponent);

//# sourceMappingURL=news.component.js.map

/***/ }),

/***/ "../../../../../src/app/blog/resources/resources.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>Turning Videos</h1>\n<div class=\"row\">\n  <div class=\"col-sm-4 col-md-4 resource-padding-20\">\n    <div class=\"resource-content\">\n      <img src=\"assets/module1-Intro.jpg\" width=\"100%\">\n      <div class=\"resource-info\">\n        <p style=\"font-size: 19px\"><b>Module1-Intro to DENTCA</b></p>\n        <p style=\"font-size: 15px\"> Introduction to the DENTCA System</p>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-4 col-md-4 resource-padding-20\">\n    <div class=\"resource-content\">\n      <img src=\"assets/Module2_TraySelection_0.jpg\" width=\"100%\">\n      <div class=\"resource-info\">\n        <p style=\"font-size: 19px\"><b>Module2-Tray Selection</b></p>\n        <p style=\"font-size: 15px\">Seleting the correct tray size...</p>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-4 col-md-4 resource-padding-20\">\n    <div class=\"resource-content\">\n      <img src=\"assets/Module3_Impression_0.jpg\" width=\"100%\">\n      <div class=\"resource-info\">\n        <p style=\"font-size: 19px\"><b>Module3-Impression Making</b></p>\n        <p style=\"font-size: 15px\">Impression taking using the DENTCA trays</p>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"row\">\n  <div class=\"col-sm-4 col-md-4 resource-padding-20\">\n    <div class=\"resource-content\">\n      <img src=\"assets/Module4_biteReg.jpg\" width=\"100%\">\n      <div class=\"resource-info\">\n        <p style=\"font-size: 19px\"><b>Module4-Bite Registration</b></p>\n        <p style=\"font-size: 15px\">Bite Registration</p>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-4 col-md-4 resource-padding-20\">\n    <div class=\"resource-content\">\n      <img src=\"assets/Module5_Tryin.jpg\" width=\"100%\">\n      <div class=\"resource-info\">\n        <p style=\"font-size: 19px\"><b>Module5-Try in Session</b></p>\n        <p style=\"font-size: 15px\">Try-in seesion using the 3D printed prototype</p>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-sm-4 col-md-4 resource-padding-20\">\n    <div class=\"resource-content\">\n      <img src=\"assets/Module6_Delivery.jpg\" width=\"100%\">\n      <div class=\"resource-info\">\n        <p style=\"font-size: 19px\"><b>Module6-Final Delivery</b></p>\n        <p style=\"font-size: 15px\">Final denture delivery</p>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-sm-4 col-md-4 resource-padding-20\">\n      <div class=\"resource-content\">\n        <img src=\"assets/Module7_SingleArch.jpg\" width=\"100%\">\n        <div class=\"resource-info\">\n          <p style=\"font-size: 19px\"><b>Module7-Single Arch Denture</b></p>\n          <p style=\"font-size: 15px\">Single Arch dentures</p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-sm-4 col-md-4 resource-padding-20\">\n      <div class=\"resource-content\">\n        <img src=\"assets/Module8_overdentures.jpg\" width=\"100%\">\n        <div class=\"resource-info\">\n          <p style=\"font-size: 19px\"><b>Module8-Implant Overdentures</b></p>\n          <p style=\"font-size: 15px\">Bite registration</p>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/blog/resources/resources.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".resource-padding-20 {\n  padding: 20px; }\n\n.resource-content {\n  padding: 10px;\n  border: solid 1px grey;\n  border-radius: 6px; }\n\n.resource-content::after,\n.resource-content::before {\n  content: '';\n  height: 3px;\n  border-radius: 0 0 4px 4px;\n  border: solid 1px grey;\n  border-top: 0;\n  position: absolute; }\n\n.resource-content::after {\n  bottom: 18px;\n  left: 22px;\n  right: 22px; }\n\n.resource-content::before {\n  bottom: 16px;\n  left: 25px;\n  right: 25px; }\n\n.resource-info {\n  padding-top: 10px; }\n\np {\n  color: #444444; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/blog/resources/resources.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResourcesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResourcesComponent = (function () {
    function ResourcesComponent() {
    }
    ResourcesComponent.prototype.ngOnInit = function () {
    };
    return ResourcesComponent;
}());
ResourcesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Component */])({
        selector: 'app-resources',
        template: __webpack_require__("../../../../../src/app/blog/resources/resources.component.html"),
        styles: [__webpack_require__("../../../../../src/app/blog/resources/resources.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ResourcesComponent);

//# sourceMappingURL=resources.component.js.map

/***/ }),

/***/ "../../../../../src/app/blog/welcome/welcome.component.html":
/***/ (function(module, exports) {

module.exports = "<img src=\"assets/banner03.jpg\" style=\"width:100%\" />\n<div class=\"content-middle\">\n    <div class=\"row\">\n        <div class=\"col-lg-5 col-md-5\">\n            <div class=\"welcome\">\n                <h1>Welcome to <b>DENTCA</b></h1>\n                <p>\n                    DENTCA provides high quality, 100% accurate dentures using award-winning computer-aided design (CAD) and computer-aided manufacturing\n                    (CAM) with state-of-the-art 3D printing technology. Research has shown our advanced 3D software provides\n                    increased accuracy, creates more comfortable dentures for patients, and allows you to complete a full\n                    denture case 2.5x faster.\n                </p>\n            </div>\n        </div>\n        <div class=\"col-lg-7 col-md-7\">\n            <div class=\"notice\">\n                <h1>2 Steps! 2 Visits! 2 Easy!</h1>\n                <p>\n                    Step 1: Spend 45 minutes to take an impression of your patient's mouth using DENTCA’s patented tray system. Send us the impression.\n                </p>\n                <p>\n                    Step 2: Approximately 5 days after we receive your impression, your final denture will be shipped out.** Your patient will\n                    return home with a new smile on their face in only 2 visits and less than 1 hour of chair time!\n                </p>\n                <p>\n                    **If you choose the free try-in option, the try-in will be shipped out 3 days after we receive your impression\n                </p>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"content-img\">\n    <img src=\"assets/for_patient.png\" style=\"width:100%\" />\n    <div style=\"height:3px\"></div>\n    <img src=\"assets/for_dentist.png\" style=\"width:100%\" />\n</div>"

/***/ }),

/***/ "../../../../../src/app/blog/welcome/welcome.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\n  font-size: 30px; }\n\np {\n  font-size: 17px; }\n\n.content-middle {\n  padding-top: 20px; }\n\n.welcome {\n  height: 310px;\n  padding: 20px;\n  color: #333;\n  border: outset #6FB539 4px;\n  border-width: 2px;\n  border-color: #6FB539; }\n\n.welcome h1 {\n  text-align: center; }\n\n.notice {\n  height: 310px;\n  background-color: #6FB539;\n  color: white;\n  padding: 20px; }\n\n.notice h1 {\n  text-align: center; }\n\n.content-img {\n  padding-top: 20px;\n  padding-bottom: 10px; }\n\n@media (max-width: 1200px) {\n  .welcome {\n    height: 350px; }\n  .notice {\n    height: 350px; } }\n\n@media (max-width: 990px) {\n  .welcome {\n    height: 100%; }\n  .notice {\n    height: 100%; } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/blog/welcome/welcome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WelcomeComponent = (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    return WelcomeComponent;
}());
WelcomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Component */])({
        selector: 'app-welcome',
        template: __webpack_require__("../../../../../src/app/blog/welcome/welcome.component.html"),
        styles: [__webpack_require__("../../../../../src/app/blog/welcome/welcome.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], WelcomeComponent);

//# sourceMappingURL=welcome.component.js.map

/***/ }),

/***/ "../../../../../src/app/checkout/actions/checkout.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutActions; });
var CheckoutActions = (function () {
    function CheckoutActions() {
    }
    CheckoutActions.prototype.fetchCurrentOrder = function () {
        return { type: CheckoutActions.FETCH_CURRENT_ORDER };
    };
    CheckoutActions.prototype.fetchCurrentOrderSuccess = function (order) {
        return {
            type: CheckoutActions.FETCH_CURRENT_ORDER_SUCCESS,
            payload: order
        };
    };
    CheckoutActions.prototype.addToCart = function (variant_id) {
        return {
            type: CheckoutActions.ADD_TO_CART,
            payload: variant_id
        };
    };
    CheckoutActions.prototype.addToCartSuccess = function (lineItem) {
        return {
            type: CheckoutActions.ADD_TO_CART_SUCCESS,
            payload: lineItem
        };
    };
    CheckoutActions.prototype.removeLineItem = function (lineItemId) {
        return {
            type: CheckoutActions.REMOVE_LINE_ITEM,
            payload: lineItemId
        };
    };
    CheckoutActions.prototype.removeLineItemSuccess = function (lineItem) {
        return {
            type: CheckoutActions.REMOVE_LINE_ITEM_SUCCESS,
            payload: lineItem
        };
    };
    CheckoutActions.prototype.changeLineItemQuantity = function (quantity, lineItemId) {
        return {
            type: CheckoutActions.CHANGE_LINE_ITEM_QUANTITY,
            payload: { quantity: quantity, lineItemId: lineItemId }
        };
    };
    CheckoutActions.prototype.placeOrder = function () {
        return { type: CheckoutActions.PLACE_ORDER };
    };
    CheckoutActions.prototype.changeOrderState = function () {
        return { type: CheckoutActions.CHANGE_ORDER_STATE };
    };
    CheckoutActions.prototype.changeOrderStateSuccess = function (order) {
        return {
            type: CheckoutActions.CHANGE_ORDER_STATE_SUCCESS,
            payload: order
        };
    };
    CheckoutActions.prototype.updateOrder = function () {
        return { type: CheckoutActions.UPDATE_ORDER };
    };
    CheckoutActions.prototype.updateOrderSuccess = function (order) {
        return {
            type: CheckoutActions.UPDATE_ORDER_SUCCESS,
            payload: order
        };
    };
    CheckoutActions.prototype.orderCompleteSuccess = function () {
        return { type: CheckoutActions.ORDER_COMPLETE_SUCCESS };
    };
    return CheckoutActions;
}());

CheckoutActions.FETCH_CURRENT_ORDER = 'FETCH_CURRENT_ORDER';
CheckoutActions.FETCH_CURRENT_ORDER_SUCCESS = 'FETCH_CURRENT_ORDER_SUCCESS';
CheckoutActions.ADD_TO_CART = 'ADD_TO_CART';
CheckoutActions.ADD_TO_CART_SUCCESS = 'ADD_TO_CART_SUCCESS';
CheckoutActions.REMOVE_LINE_ITEM = 'REMOVE_LINE_ITEM';
CheckoutActions.REMOVE_LINE_ITEM_SUCCESS = 'REMOVE_LINE_ITEM_SUCCESS';
CheckoutActions.CHANGE_LINE_ITEM_QUANTITY = 'CHANGE_LINE_ITEM_QUANTITY';
CheckoutActions.PLACE_ORDER = 'PLACE_ORDER';
CheckoutActions.CHANGE_ORDER_STATE = 'CHANGE_ORDER_STATE';
CheckoutActions.CHANGE_ORDER_STATE_SUCCESS = 'CHANGE_ORDER_STATE_SUCCESS';
CheckoutActions.UPDATE_ORDER = 'UPDATE_ORDER';
CheckoutActions.UPDATE_ORDER_SUCCESS = 'UPDATE_ORDER_SUCCESS';
CheckoutActions.ORDER_COMPLETE_SUCCESS = 'ORDER_COMPLETE_SUCCESS';
//# sourceMappingURL=checkout.actions.js.map

/***/ }),

/***/ "../../../../../src/app/checkout/effects/checkout.effects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_services_checkout_service__ = __webpack_require__("../../../../../src/app/core/services/checkout.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_checkout_actions__ = __webpack_require__("../../../../../src/app/checkout/actions/checkout.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutEffects; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CheckoutEffects = (function () {
    function CheckoutEffects(actions$, checkoutService, actions) {
        var _this = this;
        this.actions$ = actions$;
        this.checkoutService = checkoutService;
        this.actions = actions;
        // tslint:disable-next-line:member-ordering
        this.AddToCart$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_1__actions_checkout_actions__["a" /* CheckoutActions */].ADD_TO_CART)
            .switchMap(function (action) {
            return _this.checkoutService.createNewLineItem(action.payload);
        })
            .map(function (lineItem) { return _this.actions.addToCartSuccess(lineItem); });
    }
    return CheckoutEffects;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", Object)
], CheckoutEffects.prototype, "AddToCart$", void 0);
CheckoutEffects = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["c" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["c" /* Actions */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__core_services_checkout_service__["a" /* CheckoutService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__core_services_checkout_service__["a" /* CheckoutService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__actions_checkout_actions__["a" /* CheckoutActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__actions_checkout_actions__["a" /* CheckoutActions */]) === "function" && _c || Object])
], CheckoutEffects);

var _a, _b, _c;
// @Effect()
// FetchCurrentOrder$ = this.actions$
// .ofType(CartActions.FETCH_CURRENT_ORDER)
// .switchMap((action: Action) => {
//   return this.cartService.fetchCurrentOrder();
// })
// .map((order: Order) => {
//   return this.cartActions.fetchCurrentOrderSuccess(order);
// });
// Use this effect once angular releases RC4
// @Effect()
//   RemoveLineItem$ = this.actions$
//   .ofType(CartActions.REMOVE_LINE_ITEM)
//   .switchMap((action: Action) => {
//     return this.cartService.deleteLineItem(action.payload);
//   })
//   .map(() => this.cartActions.removeLineItemSuccess());
//# sourceMappingURL=checkout.effects.js.map

/***/ }),

/***/ "../../../../../src/app/checkout/reducers/checkout.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_checkout_actions__ = __webpack_require__("../../../../../src/app/checkout/actions/checkout.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__checkout_state__ = __webpack_require__("../../../../../src/app/checkout/reducers/checkout.state.ts");
/* unused harmony export initialState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return checkoutReducer; });


var initialState = new __WEBPACK_IMPORTED_MODULE_1__checkout_state__["a" /* CheckoutStateRecord */]();
var checkoutReducer = function (state, _a) {
    if (state === void 0) { state = initialState; }
    var type = _a.type, payload = _a.payload;
    var _lineItems, _lineItemEntities, _lineItemIds, _lineItem, _lineItemEntity, _lineItemId, _totalCartItems = 0, _totalCartValue, _ship_address, _bill_address, _orderState;
    switch (type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_checkout_actions__["a" /* CheckoutActions */].FETCH_CURRENT_ORDER_SUCCESS:
            var _orderNumber = payload.number;
            _lineItems = payload.line_items;
            _lineItemIds = _lineItems.map(function (lineItem) { return lineItem.id; });
            _totalCartItems = payload.total_quantity;
            _totalCartValue = parseFloat(payload.total);
            _ship_address = payload.ship_address;
            _bill_address = payload.bill_address;
            _orderState = payload.state;
            _lineItemEntities = _lineItems.reduce(function (lineItems, lineItem) {
                return Object.assign(lineItems, (_a = {},
                    _a[lineItem.id] = lineItem,
                    _a));
                var _a;
            }, {});
            return state.merge({
                orderNumber: _orderNumber,
                orderState: _orderState,
                lineItemIds: _lineItemIds,
                lineItemEntities: _lineItemEntities,
                totalCartItems: _totalCartItems,
                totalCartValue: _totalCartValue,
                shipAddress: _ship_address,
                billAddress: _bill_address
            });
        case __WEBPACK_IMPORTED_MODULE_0__actions_checkout_actions__["a" /* CheckoutActions */].ADD_TO_CART_SUCCESS:
            _lineItem = payload;
            _lineItemId = _lineItem.id;
            // return the same state if the item is already included.
            if (state.lineItemIds.includes(_lineItemId)) {
                return state;
            }
            _totalCartItems = state.totalCartItems + _lineItem.quantity;
            _totalCartValue = state.totalCartValue + parseFloat(_lineItem.total);
            _lineItemEntity = (_b = {}, _b[_lineItemId] = _lineItem, _b);
            _lineItemIds = state.lineItemIds.push(_lineItemId);
            return state.merge({
                lineItemIds: _lineItemIds,
                lineItemEntities: state.lineItemEntities.merge(_lineItemEntity),
                totalCartItems: _totalCartItems,
                totalCartValue: _totalCartValue
            });
        case __WEBPACK_IMPORTED_MODULE_0__actions_checkout_actions__["a" /* CheckoutActions */].REMOVE_LINE_ITEM_SUCCESS:
            _lineItem = payload;
            _lineItemId = _lineItem.id;
            var index = state.lineItemIds.indexOf(_lineItemId);
            if (index >= 0) {
                _lineItemIds = state.lineItemIds.splice(index, 1);
                _lineItemEntities = state.lineItemEntities.delete(_lineItemId);
                _totalCartItems = state.totalCartItems - _lineItem.quantity;
                _totalCartValue = state.totalCartValue - parseFloat(_lineItem.total);
            }
            return state.merge({
                lineItemIds: _lineItemIds,
                lineItemEntities: _lineItemEntities,
                totalCartItems: _totalCartItems,
                totalCartValue: _totalCartValue
            });
        // case CheckoutActions.CHANGE_LINE_ITEM_QUANTITY:
        //   const quantity = payload.quantity;
        //   lineItemId = payload.lineItemId;
        //   _lineItemEntities = state.lineItemEntities;
        //   _lineItemEntities[lineItemId][quantity] = quantity;
        //   return state.merge({
        //     lineItemEntities: _lineItemEntities
        //   }) as CheckoutState;
        // case CheckoutActions.CHANGE_ORDER_STATE:
        case __WEBPACK_IMPORTED_MODULE_0__actions_checkout_actions__["a" /* CheckoutActions */].CHANGE_ORDER_STATE_SUCCESS:
            _orderState = payload.state;
            return state.merge({
                orderState: _orderState
            });
        case __WEBPACK_IMPORTED_MODULE_0__actions_checkout_actions__["a" /* CheckoutActions */].UPDATE_ORDER_SUCCESS:
            _ship_address = payload.ship_address;
            _bill_address = payload.bill_address;
            return state.merge({
                shipAddress: _ship_address,
                billAddress: _bill_address
            });
        case __WEBPACK_IMPORTED_MODULE_0__actions_checkout_actions__["a" /* CheckoutActions */].ORDER_COMPLETE_SUCCESS:
            return initialState;
        default:
            return state;
    }
    var _b;
};
//# sourceMappingURL=checkout.reducer.js.map

/***/ }),

/***/ "../../../../../src/app/checkout/reducers/checkout.state.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable__ = __webpack_require__("../../../../immutable/dist/immutable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_immutable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutStateRecord; });

var CheckoutStateRecord = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Record"])({
    orderNumber: null,
    orderState: null,
    lineItemIds: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["List"])([]),
    lineItemEntities: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({}),
    totalCartItems: 0,
    totalCartValue: 0,
    billAddress: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["fromJS"])({}),
    shipAddress: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["fromJS"])({})
});
//# sourceMappingURL=checkout.state.js.map

/***/ }),

/***/ "../../../../../src/app/checkout/reducers/selectors.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect__ = __webpack_require__("../../../../reselect/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_reselect__);
/* unused harmony export getCheckoutState */
/* unused harmony export fetchLineItems */
/* unused harmony export fetchOrderNumber */
/* unused harmony export fetchTotalCartItems */
/* unused harmony export fetchTotalCartValue */
/* unused harmony export fetchShipAddress */
/* unused harmony export fetchBillAddress */
/* unused harmony export fetchOrderState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getLineItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getOrderNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getTotalCartItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getTotalCartValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getShipAddress; });
/* unused harmony export getBillAddress */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getOrderState; });

// Base Cart State function
function getCheckoutState(state) {
    return state.checkout;
}
// ******************** Individual selectors ***************************
function fetchLineItems(state) {
    var ids = state.lineItemIds.toJS();
    var lineItemEntitites = state.lineItemEntities.toJS();
    return ids.map(function (id) { return lineItemEntitites[id]; });
}
function fetchOrderNumber(state) {
    return state.orderNumber;
}
function fetchTotalCartItems(state) {
    return state.totalCartItems;
}
function fetchTotalCartValue(state) {
    return state.totalCartValue;
}
function fetchShipAddress(state) {
    return state.shipAddress ? state.shipAddress.toJS() : state.shipAddress;
}
function fetchBillAddress(state) {
    return state.billAddress ? state.billAddress.toJS() : state.billAddress;
}
function fetchOrderState(state) {
    return state.orderState;
}
// *************************** PUBLIC API's ****************************
var getLineItems = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getCheckoutState, fetchLineItems);
var getOrderNumber = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getCheckoutState, fetchOrderNumber);
var getTotalCartItems = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getCheckoutState, fetchTotalCartItems);
var getTotalCartValue = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getCheckoutState, fetchTotalCartValue);
var getShipAddress = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getCheckoutState, fetchShipAddress);
var getBillAddress = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getCheckoutState, fetchBillAddress);
var getOrderState = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getCheckoutState, fetchOrderState);
//# sourceMappingURL=selectors.js.map

/***/ }),

/***/ "../../../../../src/app/core/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_reducers_selectors__ = __webpack_require__("../../../../../src/app/auth/reducers/selectors.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanActivateViaAuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CanActivateViaAuthGuard = (function () {
    function CanActivateViaAuthGuard(store, router) {
        this.store = store;
        this.router = router;
    }
    CanActivateViaAuthGuard.prototype.canActivate = function (route, state) {
        var _this = this;
        this.subscription = this.store
            .select(__WEBPACK_IMPORTED_MODULE_3__auth_reducers_selectors__["a" /* getAuthStatus */])
            .subscribe(function (isAuthenticated) {
            _this.isAuthenticated = isAuthenticated;
            if (!isAuthenticated) {
                _this.router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url } });
            }
        });
        return this.isAuthenticated;
    };
    CanActivateViaAuthGuard.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return CanActivateViaAuthGuard;
}());
CanActivateViaAuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], CanActivateViaAuthGuard);

var _a, _b;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/core/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__checkout_effects_checkout_effects__ = __webpack_require__("../../../../../src/app/checkout/effects/checkout.effects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__checkout_actions_checkout_actions__ = __webpack_require__("../../../../../src/app/checkout/actions/checkout.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_checkout_service__ = __webpack_require__("../../../../../src/app/core/services/checkout.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__("../../../../../src/app/core/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_http__ = __webpack_require__("../../../../../src/app/core/services/http.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_product_service__ = __webpack_require__("../../../../../src/app/core/services/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__auth_actions_auth_actions__ = __webpack_require__("../../../../../src/app/auth/actions/auth.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_variant_retriver_service__ = __webpack_require__("../../../../../src/app/core/services/variant-retriver.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_variant_parser_service__ = __webpack_require__("../../../../../src/app/core/services/variant-parser.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__auth_effects_auth_effects__ = __webpack_require__("../../../../../src/app/auth/effects/auth.effects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__product_effects_product_effects__ = __webpack_require__("../../../../../src/app/product/effects/product.effects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__user_actions_user_actions__ = __webpack_require__("../../../../../src/app/user/actions/user.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__user_effects_user_effects__ = __webpack_require__("../../../../../src/app/user/effects/user.effects.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__user_services_user_service__ = __webpack_require__("../../../../../src/app/user/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__guards_auth_guard__ = __webpack_require__("../../../../../src/app/core/guards/auth.guard.ts");
/* unused harmony export httpInterceptor */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// Components
// Services






// import { ProductDummyService } from './services/product-dummy.service';







function httpInterceptor(backend, defaultOptions) {
    return new __WEBPACK_IMPORTED_MODULE_6__services_http__["a" /* HttpService */](backend, defaultOptions);
}
var CoreModule = (function () {
    function CoreModule() {
    }
    return CoreModule;
}());
CoreModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["b" /* NgModule */])({
        declarations: [],
        exports: [],
        imports: [
            // Were not working on modules sice update to rc-5
            // TO BE moved to respective modules.
            __WEBPACK_IMPORTED_MODULE_11__ngrx_effects__["a" /* EffectsModule */].run(__WEBPACK_IMPORTED_MODULE_12__auth_effects_auth_effects__["a" /* AuthenticationEffects */]),
            __WEBPACK_IMPORTED_MODULE_11__ngrx_effects__["a" /* EffectsModule */].run(__WEBPACK_IMPORTED_MODULE_13__product_effects_product_effects__["a" /* ProductEffects */]),
            __WEBPACK_IMPORTED_MODULE_11__ngrx_effects__["a" /* EffectsModule */].run(__WEBPACK_IMPORTED_MODULE_0__checkout_effects_checkout_effects__["a" /* CheckoutEffects */]),
            __WEBPACK_IMPORTED_MODULE_11__ngrx_effects__["a" /* EffectsModule */].run(__WEBPACK_IMPORTED_MODULE_15__user_effects_user_effects__["a" /* UserEffects */])
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_10__services_variant_parser_service__["a" /* VariantParserService */],
            __WEBPACK_IMPORTED_MODULE_9__services_variant_retriver_service__["a" /* VariantRetriverService */],
            __WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */],
            {
                provide: __WEBPACK_IMPORTED_MODULE_6__services_http__["a" /* HttpService */],
                useFactory: httpInterceptor,
                deps: [__WEBPACK_IMPORTED_MODULE_4__angular_http__["f" /* XHRBackend */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* RequestOptions */]]
            },
            __WEBPACK_IMPORTED_MODULE_2__services_checkout_service__["a" /* CheckoutService */],
            // ProductDummyService,
            __WEBPACK_IMPORTED_MODULE_7__services_product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_8__auth_actions_auth_actions__["a" /* AuthActions */],
            __WEBPACK_IMPORTED_MODULE_1__checkout_actions_checkout_actions__["a" /* CheckoutActions */],
            __WEBPACK_IMPORTED_MODULE_14__user_actions_user_actions__["a" /* UserActions */],
            __WEBPACK_IMPORTED_MODULE_16__user_services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_17__guards_auth_guard__["a" /* CanActivateViaAuthGuard */]
        ]
    })
], CoreModule);

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/core/models/product.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Product; });
/*
 * Product model
 * Detailed info http://guides.spreecommerce.org/developer/products.html
 * Public API's http://guides.spreecommerce.org/api/products.html
 */
var Product = (function () {
    function Product() {
    }
    return Product;
}());

//# sourceMappingURL=product.js.map

/***/ }),

/***/ "../../../../../src/app/core/pipes/humanize.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HumanizePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// tslint:disable-next-line:use-pipe-transform-interface
var HumanizePipe = (function () {
    function HumanizePipe() {
    }
    /**
     *
     *
     * @param {any} value
     * @returns
     *
     * @memberof HumanizePipe
     */
    HumanizePipe.prototype.transform = function (value) {
        var updated_val = value;
        if (typeof (value) === 'string') {
            updated_val = value.replace(/\_/g, ' ');
        }
        return updated_val;
    };
    return HumanizePipe;
}());
HumanizePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Pipe */])({ name: 'humanize' })
], HumanizePipe);

;
//# sourceMappingURL=humanize.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/core/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http__ = __webpack_require__("../../../../../src/app/core/services/http.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_actions_auth_actions__ = __webpack_require__("../../../../../src/app/auth/actions/auth.actions.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = (function () {
    /**
     * Creates an instance of AuthService.
     * @param {HttpService} http
     * @param {AuthActions} actions
     * @param {Store<AppState>} store
     *
     * @memberof AuthService
     */
    function AuthService(http, actions, store) {
        this.http = http;
        this.actions = actions;
        this.store = store;
    }
    /**
     *
     *
     * @param {any} data
     * @returns {Observable<any>}
     *
     * @memberof AuthService
     */
    AuthService.prototype.login = function (data) {
        var _this = this;
        return this.http.post('spree/login.json', { spree_user: data }).map(function (res) {
            data = res.json();
            if (!data.error) {
                // Setting token after login
                _this.setTokenInLocalStorage(data);
                _this.store.dispatch(_this.actions.loginSuccess());
            }
            else {
                _this.http.loading.next({
                    loading: false,
                    hasError: true,
                    hasMsg: 'Please enter valid Credentials'
                });
            }
            return data;
        });
        // catch should be handled here with the http observable
        // so that only the inner obs dies and not the effect Observable
        // otherwise no further login requests will be fired
        // MORE INFO https://youtu.be/3LKMwkuK0ZE?t=24m29s
    };
    /**
     *
     *
     * @param {any} data
     * @returns {Observable<any>}
     *
     * @memberof AuthService
     */
    AuthService.prototype.register = function (data) {
        var _this = this;
        return this.http.post('api/account', { spree_user: data }).map(function (res) {
            data = res.json();
            if (!data.errors) {
                // Setting token after login
                _this.setTokenInLocalStorage(res.json());
                _this.store.dispatch(_this.actions.loginSuccess());
            }
            else {
                _this.http.loading.next({
                    loading: false,
                    hasError: true,
                    hasMsg: 'Please enter valid Credentials'
                });
            }
            return res.json();
        });
        // catch should be handled here with the http observable
        // so that only the inner obs dies and not the effect Observable
        // otherwise no further login requests will be fired
        // MORE INFO https://youtu.be/3LKMwkuK0ZE?t=24m29s
    };
    /**
     *
     *
     * @returns {Observable<any>}
     *
     * @memberof AuthService
     */
    AuthService.prototype.authorized = function () {
        return this.http
            .get('spree/api/v1/users')
            .map(function (res) { return res.json(); });
        // catch should be handled here with the http observable
        // so that only the inner obs dies and not the effect Observable
        // otherwise no further login requests will be fired
        // MORE INFO https://youtu.be/3LKMwkuK0ZE?t=24m29s
    };
    /**
     *
     *
     * @returns
     *
     * @memberof AuthService
     */
    AuthService.prototype.logout = function () {
        var _this = this;
        return this.http.get('spree/logout.json')
            .map(function (res) {
            // Setting token after login
            localStorage.removeItem('user');
            _this.store.dispatch(_this.actions.logoutSuccess());
            return res.json();
        });
    };
    /**
     *
     *
     * @private
     * @param {any} user_data
     *
     * @memberof AuthService
     */
    AuthService.prototype.setTokenInLocalStorage = function (user_data) {
        var jsonData = JSON.stringify(user_data);
        localStorage.setItem('user', jsonData);
    };
    return AuthService;
}());
AuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__http__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__http__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__auth_actions_auth_actions__["a" /* AuthActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__auth_actions_auth_actions__["a" /* AuthActions */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */]) === "function" && _c || Object])
], AuthService);

var _a, _b, _c;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/services/checkout.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__checkout_reducers_selectors__ = __webpack_require__("../../../../../src/app/checkout/reducers/selectors.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__checkout_actions_checkout_actions__ = __webpack_require__("../../../../../src/app/checkout/actions/checkout.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__http__ = __webpack_require__("../../../../../src/app/core/services/http.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CheckoutService = (function () {
    /**
     * Creates an instance of CheckoutService.
     * @param {HttpService} http
     * @param {CheckoutActions} actions
     * @param {Store<AppState>} store
     *
     * @memberof CheckoutService
     */
    function CheckoutService(http, actions, store) {
        var _this = this;
        this.http = http;
        this.actions = actions;
        this.store = store;
        this.store.select(__WEBPACK_IMPORTED_MODULE_0__checkout_reducers_selectors__["a" /* getOrderNumber */])
            .subscribe(function (number) { return _this.orderNumber = number; });
    }
    //  Change below methods once angular releases RC4, so that this methods can be called from effects
    //  Follow this linke to know more about this issue https://github.com/angular/angular/issues/12869
    /**
     *
     *
     * @param {number} variant_id
     * @returns
     *
     * @memberof CheckoutService
     */
    CheckoutService.prototype.createNewLineItem = function (variant_id) {
        return this.http.post("spree/api/v1/orders/" + this.orderNumber + "/line_items?order_token=" + this.getOrderToken(), {
            line_item: {
                variant_id: variant_id,
                quantity: 1
            }
        }).map(function (res) {
            var lineItem = res.json();
            return lineItem;
        });
    };
    /**
     *
     *
     * @returns
     *
     * @memberof CheckoutService
     */
    CheckoutService.prototype.fetchCurrentOrder = function () {
        var _this = this;
        return this.http.get('spree/api/v1/orders/current').map(function (res) {
            var order = res.json();
            if (order) {
                var token = order.token;
                _this.setOrderTokenInLocalStorage({ order_token: token });
                return _this.store.dispatch(_this.actions.fetchCurrentOrderSuccess(order));
            }
            else {
                _this.createEmptyOrder()
                    .subscribe();
            }
        });
    };
    /**
     *
     *
     * @param {any} orderNumber
     * @returns
     *
     * @memberof CheckoutService
     */
    CheckoutService.prototype.getOrder = function (orderNumber) {
        return this.http.get("spree/api/v1/orders/" + orderNumber + ".json").map(function (res) {
            var order = res.json();
            return order;
        });
    };
    /**
     *
     *
     * @returns
     *
     * @memberof CheckoutService
     */
    CheckoutService.prototype.createEmptyOrder = function () {
        var _this = this;
        var user = JSON.parse(localStorage.getItem('user'));
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Headers */]({
            'Content-Type': 'text/plain',
            'X-Spree-Token': user && user.spree_api_key
        });
        return this.http.post('spree/api/v1/orders.json', {}, { headers: headers }).map(function (res) {
            var order = res.json();
            var token = order.token;
            _this.setOrderTokenInLocalStorage({ order_token: token });
            return _this.store.dispatch(_this.actions.fetchCurrentOrderSuccess(order));
        });
    };
    /**
     *
     *
     * @param {LineItem} lineItem
     * @returns
     *
     * @memberof CheckoutService
     */
    CheckoutService.prototype.deleteLineItem = function (lineItem) {
        var _this = this;
        return this.http.delete("spree/api/v1/orders/" + this.orderNumber + "/line_items/" + lineItem.id + "?order_token=" + this.getOrderToken())
            .map(function () {
            _this.store.dispatch(_this.actions.removeLineItemSuccess(lineItem));
        });
    };
    /**
     *
     *
     * @returns
     *
     * @memberof CheckoutService
     */
    CheckoutService.prototype.changeOrderState = function () {
        var _this = this;
        return this.http.put("spree/api/v1/checkouts/" + this.orderNumber + "/next.json?order_token=" + this.getOrderToken(), {}).map(function (res) {
            var order = res.json();
            _this.store.dispatch(_this.actions.changeOrderStateSuccess(order));
        });
    };
    /**
     *
     *
     * @param {any} params
     * @returns
     *
     * @memberof CheckoutService
     */
    CheckoutService.prototype.updateOrder = function (params) {
        var _this = this;
        return this.http.put("spree/api/v1/checkouts/" + this.orderNumber + ".json?order_token=" + this.getOrderToken(), params).map(function (res) {
            var order = res.json();
            _this.store.dispatch(_this.actions.updateOrderSuccess(order));
        });
    };
    /**
     *
     *
     * @returns
     *
     * @memberof CheckoutService
     */
    CheckoutService.prototype.availablePaymentMethods = function () {
        return this.http.get("spree/api/v1/orders/" + this.orderNumber + "/payments/new?order_token=" + this.getOrderToken()).map(function (res) {
            var payments = res.json();
            return payments;
        });
    };
    /**
     *
     *
     * @param {any} paymentModeId
     * @param {any} paymentAmount
     * @returns
     *
     * @memberof CheckoutService
     */
    CheckoutService.prototype.createNewPayment = function (paymentModeId, paymentAmount) {
        var _this = this;
        return this.http.post("spree/api/v1/orders/" + this.orderNumber + "/payments?order_token=" + this.getOrderToken(), {
            payment: {
                payment_method_id: paymentModeId,
                amount: paymentAmount
            }
        }).map(function (res) {
            _this.changeOrderState()
                .subscribe();
        });
    };
    /**
     *
     *
     * @private
     * @returns
     *
     * @memberof CheckoutService
     */
    CheckoutService.prototype.getOrderToken = function () {
        var order = JSON.parse(localStorage.getItem('order'));
        var token = order.order_token;
        return token;
    };
    /**
     *
     *
     * @private
     * @param {any} token
     *
     * @memberof CheckoutService
     */
    CheckoutService.prototype.setOrderTokenInLocalStorage = function (token) {
        var jsonData = JSON.stringify(token);
        localStorage.setItem('order', jsonData);
    };
    return CheckoutService;
}());
CheckoutService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__http__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__http__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__checkout_actions_checkout_actions__["a" /* CheckoutActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__checkout_actions_checkout_actions__["a" /* CheckoutActions */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ngrx_store__["b" /* Store */]) === "function" && _c || Object])
], CheckoutService);

var _a, _b, _c;
//# sourceMappingURL=checkout.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/services/http.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Http Intercepter Service
 * TODO: Add Loader and Toasty Service currently using console log
 * for showing errors and response and request completion;
 */





var HttpService = (function (_super) {
    __extends(HttpService, _super);
    function HttpService(backend, defaultOptions) {
        var _this = _super.call(this, backend, defaultOptions) || this;
        _this.loading = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
        return _this;
    }
    /**
     * Performs any type of http request.
     * @param url
     * @param options
     * @returns {Observable<Response>}
     */
    HttpService.prototype.request = function (url, options) {
        return _super.prototype.request.call(this, url, options);
    };
    /**
     * Performs a request with `get` http method.
     * @param url
     * @param options
     * @returns {Observable<>}
     */
    HttpService.prototype.get = function (url, options) {
        var _this = this;
        this.requestInterceptor();
        return _super.prototype.get.call(this, this.getFullUrl(url), this.requestOptions(options))
            .catch(this.onCatch.bind(this))
            .do(function (res) {
            _this.onSubscribeSuccess(res);
        }, function (error) {
            _this.onSubscribeError(error);
        })
            .finally(function () {
            _this.onFinally();
        });
    };
    HttpService.prototype.getLocal = function (url, options) {
        return _super.prototype.get.call(this, url, options);
    };
    /**
     * Performs a request with `post` http method.
     * @param url
     * @param body
     * @param options
     * @returns {Observable<>}
     */
    HttpService.prototype.post = function (url, body, options) {
        var _this = this;
        this.requestInterceptor();
        return _super.prototype.post.call(this, this.getFullUrl(url), body, this.requestOptions(options))
            .catch(this.onCatch.bind(this))
            .do(function (res) {
            _this.onSubscribeSuccess(res);
        }, function (error) {
            _this.onSubscribeError(error);
        })
            .finally(function () {
            _this.onFinally();
        });
    };
    /**
     * Performs a request with `put` http method.
     * @param url
     * @param body
     * @param options
     * @returns {Observable<>}
     */
    HttpService.prototype.put = function (url, body, options) {
        var _this = this;
        this.requestInterceptor();
        return _super.prototype.put.call(this, this.getFullUrl(url), body, this.requestOptions(options))
            .catch(this.onCatch.bind(this))
            .do(function (res) {
            _this.onSubscribeSuccess(res);
        }, function (error) {
            _this.onSubscribeError(error);
        })
            .finally(function () {
            _this.onFinally();
        });
    };
    /**
     * Performs a request with `delete` http method.
     * @param url
     * @param options
     * @returns {Observable<>}
     */
    HttpService.prototype.delete = function (url, options) {
        var _this = this;
        this.requestInterceptor();
        return _super.prototype.delete.call(this, this.getFullUrl(url), this.requestOptions(options))
            .catch(this.onCatch.bind(this))
            .do(function (res) {
            _this.onSubscribeSuccess(res);
        }, function (error) {
            _this.onSubscribeError(error);
        })
            .finally(function () {
            _this.onFinally();
        });
    };
    /**
     * Request options.
     * @param options
     * @returns {RequestOptionsArgs}
     */
    HttpService.prototype.requestOptions = function (options) {
        if (options == null) {
            options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]();
        }
        if (options.headers == null) {
            var user = localStorage.getItem('user') != "undefined" ? JSON.parse(localStorage.getItem('user')) : null;
            options.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({
                'Content-Type': 'application/json',
                'X-Spree-Token': user && user.spree_api_key
            });
        }
        return options;
    };
    /**
     * Build API url.
     * @param url
     * @returns {string}
     */
    HttpService.prototype.getFullUrl = function (url) {
        return __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].API_ENDPOINT + url;
    };
    /**
     * Request interceptor.
     */
    HttpService.prototype.requestInterceptor = function () {
        console.log('Sending Request');
        // this.loaderService.showPreloader();
        this.loading.next({
            loading: true, hasError: false, hasMsg: ''
        });
    };
    /**
     * Response interceptor.
     */
    HttpService.prototype.responseInterceptor = function () {
        console.log('Request Complete');
        // this.loaderService.hidePreloader();
    };
    /**
     * Error handler.
     * @param error
     * @param caught
     * @returns {ErrorObservable}
     */
    HttpService.prototype.onCatch = function (error, caught) {
        console.log('Something went terrible wrong and error is', error);
        // this.loaderService.popError();
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(error);
    };
    /**
     * onSubscribeSuccess
     * @param res
     */
    HttpService.prototype.onSubscribeSuccess = function (res) {
        this.loading.next({
            loading: false, hasError: false, hasMsg: ''
        });
    };
    /**
     * onSubscribeError
     * @param error
     */
    HttpService.prototype.onSubscribeError = function (error) {
        console.log('Something Went wrong while subscribing', error);
        // this.loaderService.popError();
        this.loading.next({
            loading: false, hasError: true, hasMsg: 'Something went wrong'
        });
    };
    /**
     * onFinally
     */
    HttpService.prototype.onFinally = function () {
        this.responseInterceptor();
    };
    return HttpService;
}(__WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]));
HttpService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* ConnectionBackend */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* ConnectionBackend */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* RequestOptions */]) === "function" && _b || Object])
], HttpService);

var _a, _b;
//# sourceMappingURL=http.js.map

/***/ }),

/***/ "../../../../../src/app/core/services/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__http__ = __webpack_require__("../../../../../src/app/core/services/http.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductService = (function () {
    /**
     * Creates an instance of ProductService.
     * @param {HttpService} http
     *
     * @memberof ProductService
     */
    function ProductService(http) {
        this.http = http;
    }
    /**
     *
     *
     * @param {string} id
     * @returns {Observable<any>}
     *
     * @memberof ProductService
     */
    ProductService.prototype.getProduct = function (id) {
        return this.http.get("/spree/api/v1/products/" + id)
            .map(function (res) { return res.json(); });
    };
    /**
     *
     *
     * @returns {*}
     *
     * @memberof ProductService
     */
    ProductService.prototype.getTaxonomies = function () {
        return this.http.get("/spree/api/v1/taxonomies?set=nested")
            .map(function (res) { return res.json(); });
    };
    /**
     *
     *
     * @returns {*}
     *
     * @memberof ProductService
     */
    ProductService.prototype.getProducts = function () {
        return this.http.get("/spree/api/v1/products")
            .map(function (res) { return res.json(); });
    };
    return ProductService;
}());
ProductService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__http__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__http__["a" /* HttpService */]) === "function" && _a || Object])
], ProductService);

var _a;
//# sourceMappingURL=product.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/services/variant-parser.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VariantParserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VariantParserService = (function () {
    function VariantParserService() {
    }
    /**
     *
     *
     * @param {Variant[]} variants
     * @param {OptionType[]} optionTypes
     * @returns
     *
     * @memberof VariantParserService
     */
    VariantParserService.prototype.getOptionsToDisplay = function (variants, optionTypes) {
        var _this = this;
        var optionTypesHash = {};
        /**Iterate over optionTypes say [tsize, tcolor] */
        optionTypes.forEach(function (optionType) {
            /**For each optionType iterate over each variant in varaints */
            variants.forEach(function (variant) {
                /**For option values like [small, Red] etc in varaint iterate over each option value */
                _this.currVariantOptionValues = variant.option_values;
                variant.option_values.forEach(function (optionValue) {
                    /**
                    * This loop runs for 750 times for 2 optiontypes and optionsvalues 3 and 5
                    * Refactor this latter;
                    */
                    /**Check if optionvalue's type i.e smalls type is tsize and then procced else not
                     * i.e for tsize option type color option value like green will be ignored.
                     */
                    if (optionValue.option_type_name === optionType.name) {
                        Object.assign(optionTypesHash, _this.singleOptionTypeHashMaker(optionValue, optionTypesHash, optionType, variant));
                    }
                });
            });
        });
        return optionTypesHash;
    };
    /**Create a single custom option type
     *
     * @param: optionValue, optionTypesHash(final hash to return), optionType(i.e tsize, tcolor, etc),
     * variant(i.e current variant from which option value is to retrived e.g: (s-small, green))
     *
     * @return: {tsize: {small: {etc etc etc}}};
     */
    VariantParserService.prototype.singleOptionTypeHashMaker = function (optionValue, optionTypesHash, optionType, variant) {
        var optionTypeName = optionType.name;
        if (optionTypesHash[optionTypeName] != null) {
            // This will become value of op["tsize"] i.e {small: {etc, etc}};
            optionTypesHash[optionTypeName] = Object.assign({}, optionTypesHash[optionTypeName], this.optionMaker(optionValue, optionTypesHash, optionType, variant));
            return optionTypesHash;
        }
        else {
            var singleOption = {};
            // e.g: singleOption["tsize"] = {small: {etc, etc}};
            singleOption[optionTypeName] = this.optionMaker(optionValue, optionTypesHash, optionType, variant);
            return singleOption;
        }
    };
    /**
     * Here we make optionvalue of option Type
     * say optionType is tsize  i.e key then here we making value of that option OptionType
     * like { small: {optionvalue: {}, variant_ids: [1,2,3,4]}};
     */
    VariantParserService.prototype.optionMaker = function (optionValue, optionTypesHash, optionType, variant) {
        var name = optionValue.name;
        var optionInnerValue = {};
        // e.g: optionInnverValue['small'] = {option_value: {etc ,etc}, variant_ids: [1,2,3,4]}
        optionInnerValue[name] = this.optionInnerValueMaker(optionValue, optionTypesHash, optionType, variant);
        return optionInnerValue;
    };
    /**
     * Creates Inner Values of optionValue
     * like { option_value: {}, varaint_ids: [1,2,3,4]};
     */
    VariantParserService.prototype.optionInnerValueMaker = function (optionValue, optionTypesHash, optionType, variant) {
        return Object.assign({}, {
            optionValue: optionValue,
            variantIds: this.variantIdsMaker(optionValue, optionTypesHash, optionType, variant)
        });
    };
    /**
     * Checks if the optionType  and the optionvalue of that type exist in OptionTypesHash
     * i.e "tsize" exists in the main hash that we are creating and corresponding "small" value exists too
     * then take arr of the variant ids and push a new id in it and return;
     * else create a new array of the varaint id and return;
     */
    VariantParserService.prototype.variantIdsMaker = function (optionValue, optionTypesHash, optionType, variant) {
        var currespondingOptionValues = this.getOtherOptionValues(optionValue, optionType);
        if (optionTypesHash[optionType.name] != null && optionTypesHash[optionType.name][optionValue.name] != null) {
            var variantArr = optionTypesHash[optionType.name][optionValue.name].variantIds;
            variantArr.push((_a = {}, _a[variant.id] = currespondingOptionValues, _a));
            return variantArr;
        }
        else {
            return Array.of((_b = {}, _b[variant.id] = currespondingOptionValues, _b));
        }
        var _a, _b;
    };
    /**
     *
     *
     * @param {any} optionValue
     * @param {any} currOptionType
     * @returns
     *
     * @memberof VariantParserService
     */
    VariantParserService.prototype.getOtherOptionValues = function (optionValue, currOptionType) {
        var correspondingOptionValues = [];
        for (var i = 0; i < this.currVariantOptionValues.length; i++) {
            if (this.currVariantOptionValues[i].option_type_name !== currOptionType.name) {
                correspondingOptionValues.push((_a = {}, _a[this.currVariantOptionValues[i].option_type_name] = this.currVariantOptionValues[i].name, _a));
            }
        }
        return correspondingOptionValues;
        var _a;
    };
    return VariantParserService;
}());
VariantParserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], VariantParserService);

//# sourceMappingURL=variant-parser.service.js.map

/***/ }),

/***/ "../../../../../src/app/core/services/variant-retriver.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VariantRetriverService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VariantRetriverService = (function () {
    function VariantRetriverService() {
        this.customSelectedOptions = {};
        this.currentVariantIds = [];
        this.variantId = null;
        this.variant = null;
    }
    /**
     * Note: Params could have been taken in constructor
     * due to prod-build error for constructor,
     * currently taking params from function;
     * TODO: fix this issue
     * @param:
     * currentSelectedOptions: { tsize: "small", tcolor: "red" }
     * customOptionTypesHash: {tshirt-size: Object, tshirt-color: Object}
     * currSelectedOption: { key: "Small", value: Object } => One that is recently selected;
     * product: Product
     */
    VariantRetriverService.prototype.getVariant = function (currentSelectedOptions, customOptionTypesHash, currSelectedOption, product) {
        // Set Variables
        this.currentSelectedOptions = currentSelectedOptions;
        this.customOptionTypesHash = customOptionTypesHash;
        this.currSelectedOption = currSelectedOption;
        this.product = product;
        this.setCurrentSelectedOptions();
        this.createCustomSelectedOptions();
        this.setCombinedVariantIds();
        this.getVariantId();
        this.parseVariantId();
        this.getVariantFromProduct();
        this.setCorrespondingOptions();
        return {
            newSelectedoptions: this.currentSelectedOptions,
            variant: this.variant,
            newCorrespondingOptions: this.newCorrespondingOptions
        };
    };
    /**
     * This sets current selected Options by user say (small, red, full-sleves)
     * { tsize: 'small', tcolor: 'red' }
     * if new currSelectedOptionType is tcolor and the value is blue the
     * previous one will get overidden
     * like { tsize: 'small', tcolor: 'red' } => { tsize: 'small', tcolor: 'blue' }
     *
     */
    VariantRetriverService.prototype.setCurrentSelectedOptions = function () {
        var currSelectedOptionType = this.currSelectedOption.value
            .optionValue
            .option_type_name;
        this.currentSelectedOptions[currSelectedOptionType] = this.currSelectedOption.key;
    };
    /**
     * It creates Custom selected Options extracting the options selected by user from
     *  customOptionTypesHash
     * say user selected {tsize: 'small'} this will extract the red option from
     * the global option types hash {'tsize': [small: {etc..}, large: {etc..}, medium: {etc..}]}
     *
     */
    VariantRetriverService.prototype.createCustomSelectedOptions = function () {
        /**
         * currentSelectedOptions: {tsize: 'small', tcolor: 'red'}
         * currentSelectedOptions: {} at first.. keeps
         * filling up on iteration of currentSelectedOptions
         *
         * this.customOptionTypesHash[key][this.currentSelectedOptions[key]] =
         * { optionValue: SomeObject, varaintIds: {etc etc} }
         *
         *
         ** */
        for (var key in this.currentSelectedOptions) {
            if (this.currentSelectedOptions.hasOwnProperty(key)) {
                this.customSelectedOptions[this.currentSelectedOptions[key]] =
                    this.customOptionTypesHash[key][this.currentSelectedOptions[key]];
            }
        }
        ;
    };
    /**
     * Makes a currentVaraintIds from the set of customSelectedOptions
     * {'small': {OptionValue: Object, variantIds: [etc etc]}, 'red': {...}}
     * @return: array of arrays of varaintIds
     * e.g: [[1,2,3,4], [7,8,9,1]]
     */
    VariantRetriverService.prototype.setCombinedVariantIds = function () {
        var temp = [];
        for (var key in this.customSelectedOptions) {
            // First key may be 'small' so varaiant Ids of small should be.
            // inside temp  = [vIds of small];
            if (this.customSelectedOptions.hasOwnProperty(key)) {
                // Make temp empty for each key;
                temp = [];
                this.customSelectedOptions[key].variantIds.forEach(function (obj) {
                    temp.push(Object.keys(obj)[0]);
                });
                this.currentVariantIds
                    .push(temp);
            }
        }
    };
    /**
     * Gets a Unique variantId from the selectedOptions by user
     * by intersecting the arrays in currentvaraintIds
     * Example: [[1,2,3,4], [1,5,6,7]]
     * returns [1] from which we take first index so it is 1;
     * if the array only contains [[2,3,4]] then it will return
     * the first element i.e 2;
     */
    VariantRetriverService.prototype.getVariantId = function () {
        // As scoped variable is not accessible
        // inside filter function hence the tempArr declaration;
        var tempArr = this.currentVariantIds;
        this.variantId = tempArr.shift().filter(function (v) {
            return tempArr.every(function (a) {
                return a.indexOf(v) !== -1;
            });
        })[0];
    };
    /**
     * Parses Varaint Id if null then sets the first
     * variantId in the array as the varaintId to return;
     */
    VariantRetriverService.prototype.parseVariantId = function () {
        if (this.variantId === null || this.variantId === undefined) {
            this.variantId = this.currSelectedOption.value.variantIds[0];
        }
    };
    /**
     * Gets the Varaint From the Product by using the varaintId;
     * else returns null if not present;
     */
    VariantRetriverService.prototype.getVariantFromProduct = function () {
        var _this = this;
        var result = this.product.variants
            .filter(function (v) { return v.id === parseInt(_this.variantId, 10); });
        this.variant = result ? result[0] : null;
    };
    /**
     *
     *
     *
     * @memberof VariantRetriverService
     */
    VariantRetriverService.prototype.setCorrespondingOptions = function () {
        var vIds = this.currSelectedOption.value.variantIds;
        var newObj = {};
        vIds.forEach(function (obj) {
            for (var key in obj) {
                if (obj.hasOwnProperty(key)) {
                    obj[key].forEach(function (oType) {
                        for (var jkey in oType) {
                            if (newObj[jkey] !== undefined) {
                                newObj[jkey].push(oType[jkey]);
                            }
                            else {
                                newObj[jkey] = Array.of(oType[jkey]);
                            }
                        }
                    });
                }
            }
        });
        this.newCorrespondingOptions = newObj;
    };
    return VariantRetriverService;
}());
VariantRetriverService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], VariantRetriverService);

//# sourceMappingURL=variant-retriver.service.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dash-campaign/dash-campaign.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"table\">\n    <div class=\"table-header\">\n      <h2>Campaign</h2>\n    </div>\n    <div class=\"table-content\">\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dash-campaign/dash-campaign.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Structure */\n.container {\n  padding: 50px;\n  height: 800px; }\n\n.table {\n  display: inline-block;\n  position: relative;\n  width: 100%;\n  height: 500px;\n  margin: 25px 0;\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);\n  border-radius: 3px;\n  color: rgba(0, 0, 0, 0.87);\n  background: #fff; }\n\n.table-header {\n  width: 200px;\n  margin-left: 55px;\n  margin-top: -20px;\n  padding-top: 2px;\n  padding-right: 12px;\n  padding-bottom: 15px;\n  border-radius: 3px;\n  text-align: center;\n  background-color: #6FB524;\n  box-shadow: 0 12px 20px -10px rgba(111, 181, 36, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(111, 181, 36, 0.2); }\n\nh2 {\n  color: white;\n  font-size: 20px; }\n\np {\n  color: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dash-campaign/dash-campaign.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashCampaignComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashCampaignComponent = (function () {
    function DashCampaignComponent() {
    }
    DashCampaignComponent.prototype.ngOnInit = function () {
    };
    return DashCampaignComponent;
}());
DashCampaignComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Component */])({
        selector: 'app-dash-campaign',
        template: __webpack_require__("../../../../../src/app/dashboard/dash-campaign/dash-campaign.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dash-campaign/dash-campaign.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], DashCampaignComponent);

//# sourceMappingURL=dash-campaign.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dash-configuration/dash-configuration.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"table\">\n    <div class=\"table-content\">\n      <md-tab-group>\n        <md-tab label=\"Company\">Company</md-tab>\n        <md-tab label=\"Sale Tax\">Sale Tax</md-tab>\n        <md-tab label=\"Shipping\">Shipping</md-tab>\n        <md-tab label=\"Banner\">Banner</md-tab>\n        <md-tab label=\"Page\">Page</md-tab>\n        <md-tab label=\"Video\">Video</md-tab>\n        <md-tab label=\"Site Menu\">Site Menu</md-tab>\n        <md-tab label=\"Application\">Application</md-tab>\n        <md-tab label=\"Operators\">Operators</md-tab>\n        <md-tab label=\"Maintenance\">Maintenance</md-tab>\n      </md-tab-group>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dash-configuration/dash-configuration.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Structure */\n.container {\n  padding: 50px;\n  height: 800px; }\n\n.table {\n  display: inline-block;\n  position: relative;\n  width: 100%;\n  height: 500px;\n  margin: 25px 0;\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);\n  border-radius: 3px;\n  color: rgba(0, 0, 0, 0.87);\n  background: #fff; }\n\n.table-content {\n  margin-left: 15px;\n  margin-right: 15px;\n  margin-top: -20px; }\n\nh2 {\n  color: white;\n  font-size: 20px; }\n\np {\n  color: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dash-configuration/dash-configuration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashConfigurationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashConfigurationComponent = (function () {
    function DashConfigurationComponent() {
    }
    DashConfigurationComponent.prototype.ngOnInit = function () {
    };
    return DashConfigurationComponent;
}());
DashConfigurationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Component */])({
        selector: 'app-dash-configuration',
        template: __webpack_require__("../../../../../src/app/dashboard/dash-configuration/dash-configuration.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dash-configuration/dash-configuration.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], DashConfigurationComponent);

//# sourceMappingURL=dash-configuration.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dash-coupon/dash-coupon.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"table\">\n    <div class=\"table-header\">\n      <h2>Coupon</h2>\n    </div>\n    <div class=\"table-content\">\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dash-coupon/dash-coupon.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Structure */\n.container {\n  padding: 50px;\n  height: 800px; }\n\n.table {\n  display: inline-block;\n  position: relative;\n  width: 100%;\n  height: 500px;\n  margin: 25px 0;\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);\n  border-radius: 3px;\n  color: rgba(0, 0, 0, 0.87);\n  background: #fff; }\n\n.table-header {\n  width: 200px;\n  margin-left: 55px;\n  margin-top: -20px;\n  padding-top: 2px;\n  padding-right: 12px;\n  padding-bottom: 15px;\n  border-radius: 3px;\n  text-align: center;\n  background-color: #6FB524;\n  box-shadow: 0 12px 20px -10px rgba(111, 181, 36, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(111, 181, 36, 0.2); }\n\nh2 {\n  color: white;\n  font-size: 20px; }\n\np {\n  color: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dash-coupon/dash-coupon.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashCouponComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashCouponComponent = (function () {
    function DashCouponComponent() {
    }
    DashCouponComponent.prototype.ngOnInit = function () {
    };
    return DashCouponComponent;
}());
DashCouponComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Component */])({
        selector: 'app-dash-coupon',
        template: __webpack_require__("../../../../../src/app/dashboard/dash-coupon/dash-coupon.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dash-coupon/dash-coupon.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], DashCouponComponent);

//# sourceMappingURL=dash-coupon.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dash-crop-account/dash-crop-account.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"table\">\n    <div class=\"table-content\">\n      <md-tab-group>\n        <md-tab label=\"Product Price Set\">Product Price Set</md-tab>\n        <md-tab label=\"Shopping Price Set\">Shipping Price Set</md-tab>\n      </md-tab-group>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dash-crop-account/dash-crop-account.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Structure */\n.container {\n  padding: 50px;\n  height: 800px; }\n\n.table {\n  display: inline-block;\n  position: relative;\n  width: 100%;\n  height: 500px;\n  margin: 25px 0;\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);\n  border-radius: 3px;\n  color: rgba(0, 0, 0, 0.87);\n  background: #fff; }\n\n.table-content {\n  margin-left: 15px;\n  margin-right: 15px;\n  margin-top: -20px; }\n\nh2 {\n  color: white;\n  font-size: 20px; }\n\np {\n  color: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dash-crop-account/dash-crop-account.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashCropAccountComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashCropAccountComponent = (function () {
    function DashCropAccountComponent() {
    }
    DashCropAccountComponent.prototype.ngOnInit = function () {
    };
    return DashCropAccountComponent;
}());
DashCropAccountComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Component */])({
        selector: 'app-dash-crop-account',
        template: __webpack_require__("../../../../../src/app/dashboard/dash-crop-account/dash-crop-account.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dash-crop-account/dash-crop-account.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], DashCropAccountComponent);

//# sourceMappingURL=dash-crop-account.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dash-orders/dash-orders.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"table\">\n    <div class=\"table-content\">\n      <md-tab-group>\n        <md-tab label=\"Orders\">Content 1</md-tab>\n        <md-tab label=\"Shopping Carts\">Content 2</md-tab>\n      </md-tab-group>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dash-orders/dash-orders.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Structure */\n.container {\n  padding: 50px;\n  height: 800px; }\n\n.table {\n  display: inline-block;\n  position: relative;\n  width: 100%;\n  height: 500px;\n  margin: 25px 0;\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);\n  border-radius: 3px;\n  color: rgba(0, 0, 0, 0.87);\n  background: #fff; }\n\n.table-content {\n  margin-left: 15px;\n  margin-right: 15px;\n  margin-top: -20px; }\n\nh2 {\n  color: white;\n  font-size: 20px; }\n\np {\n  color: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dash-orders/dash-orders.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashOrdersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashOrdersComponent = (function () {
    function DashOrdersComponent() {
    }
    DashOrdersComponent.prototype.ngOnInit = function () {
    };
    return DashOrdersComponent;
}());
DashOrdersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Component */])({
        selector: 'app-dash-orders',
        template: __webpack_require__("../../../../../src/app/dashboard/dash-orders/dash-orders.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dash-orders/dash-orders.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], DashOrdersComponent);

//# sourceMappingURL=dash-orders.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dash-products/dash-products.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"table\">\n    <div class=\"table-header\">\n      <h2>Configure Products Order</h2>\n      <p>[Underconstruction page] Please don't order yet. Thank you for your cooperation.</p>\n    </div>\n    <div class=\"table-content\">\n       <li *ngFor=\"let product of products$ | async\">\n        asdf\n      </li> \n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dash-products/dash-products.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Structure */\n.container {\n  padding: 50px;\n  height: 800px; }\n\n.table {\n  display: inline-block;\n  position: relative;\n  width: 100%;\n  height: 500px;\n  margin: 25px 0;\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);\n  border-radius: 3px;\n  color: rgba(0, 0, 0, 0.87);\n  background: #fff; }\n\n.table-header {\n  margin-left: 15px;\n  margin-right: 15px;\n  margin-top: -20px;\n  padding-top: 15px;\n  padding-right: 15px;\n  padding-bottom: 15px;\n  padding-left: 30px;\n  border-radius: 3px;\n  background-color: #6FB524;\n  box-shadow: 0 12px 20px -10px rgba(111, 181, 36, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(111, 181, 36, 0.2); }\n\nh2 {\n  color: white;\n  font-size: 20px; }\n\np {\n  color: white; }\n\n.example-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  max-height: 500px;\n  min-width: 300px; }\n\n.example-header {\n  min-height: 64px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  padding-left: 24px;\n  font-size: 20px; }\n\n.example-header {\n  min-height: 64px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: baseline;\n      -ms-flex-align: baseline;\n          align-items: baseline;\n  padding: 8px 24px 0;\n  font-size: 20px;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\n.mat-input-container {\n  font-size: 14px;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  margin-left: 32px; }\n\n.mat-table {\n  overflow: auto; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dash-products/dash-products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__product_reducers_selectors__ = __webpack_require__("../../../../../src/app/product/reducers/selectors.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_actions_product_actions__ = __webpack_require__("../../../../../src/app/product/actions/product-actions.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashProductsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashProductsComponent = (function () {
    // products: Product[];
    function DashProductsComponent(store, actions) {
        this.store = store;
        this.actions = actions;
        // Get all products for the product list component
        this.store.dispatch(this.actions.getAllProducts());
        this.products$ = this.store.select(__WEBPACK_IMPORTED_MODULE_1__product_reducers_selectors__["a" /* getProducts */]);
    }
    DashProductsComponent.prototype.ngOnInit = function () {
        // console.log(this.products);
    };
    return DashProductsComponent;
}());
DashProductsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Component */])({
        selector: 'app-dash-products',
        template: __webpack_require__("../../../../../src/app/dashboard/dash-products/dash-products.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dash-products/dash-products.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__product_actions_product_actions__["a" /* ProductActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__product_actions_product_actions__["a" /* ProductActions */]) === "function" && _b || Object])
], DashProductsComponent);

var _a, _b;
//# sourceMappingURL=dash-products.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dash-report/dash-report.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"table\">\n    <div class=\"table-content\">\n      <md-tab-group>\n        <md-tab label=\"Order Summary\">Order Summary</md-tab>\n        <md-tab label=\"Annual Order\">Annual Order</md-tab>\n        <md-tab label=\"Corporate Order\">Corporate Order</md-tab>\n        <md-tab label=\"Order Status\">Order Status</md-tab>\n      </md-tab-group>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dash-report/dash-report.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Structure */\n.container {\n  padding: 50px;\n  height: 800px; }\n\n.table {\n  display: inline-block;\n  position: relative;\n  width: 100%;\n  height: 500px;\n  margin: 25px 0;\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);\n  border-radius: 3px;\n  color: rgba(0, 0, 0, 0.87);\n  background: #fff; }\n\n.table-content {\n  margin-left: 15px;\n  margin-right: 15px;\n  margin-top: -20px; }\n\nh2 {\n  color: white;\n  font-size: 20px; }\n\np {\n  color: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dash-report/dash-report.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashReportComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashReportComponent = (function () {
    function DashReportComponent() {
    }
    DashReportComponent.prototype.ngOnInit = function () {
    };
    return DashReportComponent;
}());
DashReportComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Component */])({
        selector: 'app-dash-report',
        template: __webpack_require__("../../../../../src/app/dashboard/dash-report/dash-report.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dash-report/dash-report.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], DashReportComponent);

//# sourceMappingURL=dash-report.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dash-user/dash-user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"table\">\n    <div class=\"table-header\">\n      <h2>User List</h2>\n    </div>\n    <div class=\"table-content\">\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dash-user/dash-user.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Structure */\n.container {\n  padding: 50px;\n  height: 800px; }\n\n.table {\n  display: inline-block;\n  position: relative;\n  width: 100%;\n  height: 500px;\n  margin: 25px 0;\n  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.14);\n  border-radius: 3px;\n  color: rgba(0, 0, 0, 0.87);\n  background: #fff; }\n\n.table-header {\n  width: 200px;\n  margin-left: 55px;\n  margin-top: -20px;\n  padding-top: 2px;\n  padding-right: 12px;\n  padding-bottom: 15px;\n  border-radius: 3px;\n  text-align: center;\n  background-color: #6FB524;\n  box-shadow: 0 12px 20px -10px rgba(111, 181, 36, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(111, 181, 36, 0.2); }\n\nh2 {\n  color: white;\n  font-size: 20px; }\n\np {\n  color: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dash-user/dash-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashUserComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashUserComponent = (function () {
    function DashUserComponent() {
    }
    DashUserComponent.prototype.ngOnInit = function () {
    };
    return DashUserComponent;
}());
DashUserComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Component */])({
        selector: 'app-dash-user',
        template: __webpack_require__("../../../../../src/app/dashboard/dash-user/dash-user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dash-user/dash-user.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], DashUserComponent);

//# sourceMappingURL=dash-user.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  padding: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_routes__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dash_orders_dash_orders_component__ = __webpack_require__("../../../../../src/app/dashboard/dash-orders/dash-orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dash_products_dash_products_component__ = __webpack_require__("../../../../../src/app/dashboard/dash-products/dash-products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dash_user_dash_user_component__ = __webpack_require__("../../../../../src/app/dashboard/dash-user/dash-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dash_crop_account_dash_crop_account_component__ = __webpack_require__("../../../../../src/app/dashboard/dash-crop-account/dash-crop-account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dash_campaign_dash_campaign_component__ = __webpack_require__("../../../../../src/app/dashboard/dash-campaign/dash-campaign.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__dash_coupon_dash_coupon_component__ = __webpack_require__("../../../../../src/app/dashboard/dash-coupon/dash-coupon.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__dash_report_dash_report_component__ = __webpack_require__("../../../../../src/app/dashboard/dash-report/dash-report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__dash_configuration_dash_configuration_component__ = __webpack_require__("../../../../../src/app/dashboard/dash-configuration/dash-configuration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__core_services_product_service__ = __webpack_require__("../../../../../src/app/core/services/product.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var DashboardModule = (function () {
    function DashboardModule() {
    }
    return DashboardModule;
}());
DashboardModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["e" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_material__["a" /* MaterialModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__dashboard_routes__["a" /* DashRoutes */])
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_6__dash_orders_dash_orders_component__["a" /* DashOrdersComponent */],
            __WEBPACK_IMPORTED_MODULE_7__dash_products_dash_products_component__["a" /* DashProductsComponent */],
            __WEBPACK_IMPORTED_MODULE_8__dash_user_dash_user_component__["a" /* DashUserComponent */],
            __WEBPACK_IMPORTED_MODULE_9__dash_crop_account_dash_crop_account_component__["a" /* DashCropAccountComponent */],
            __WEBPACK_IMPORTED_MODULE_10__dash_campaign_dash_campaign_component__["a" /* DashCampaignComponent */],
            __WEBPACK_IMPORTED_MODULE_11__dash_coupon_dash_coupon_component__["a" /* DashCouponComponent */],
            __WEBPACK_IMPORTED_MODULE_12__dash_report_dash_report_component__["a" /* DashReportComponent */],
            __WEBPACK_IMPORTED_MODULE_13__dash_configuration_dash_configuration_component__["a" /* DashConfigurationComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_14__core_services_product_service__["a" /* ProductService */]
        ]
    })
], DashboardModule);

//# sourceMappingURL=dashboard.module.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dash_orders_dash_orders_component__ = __webpack_require__("../../../../../src/app/dashboard/dash-orders/dash-orders.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dash_products_dash_products_component__ = __webpack_require__("../../../../../src/app/dashboard/dash-products/dash-products.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dash_user_dash_user_component__ = __webpack_require__("../../../../../src/app/dashboard/dash-user/dash-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dash_crop_account_dash_crop_account_component__ = __webpack_require__("../../../../../src/app/dashboard/dash-crop-account/dash-crop-account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dash_campaign_dash_campaign_component__ = __webpack_require__("../../../../../src/app/dashboard/dash-campaign/dash-campaign.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dash_coupon_dash_coupon_component__ = __webpack_require__("../../../../../src/app/dashboard/dash-coupon/dash-coupon.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dash_report_dash_report_component__ = __webpack_require__("../../../../../src/app/dashboard/dash-report/dash-report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dash_configuration_dash_configuration_component__ = __webpack_require__("../../../../../src/app/dashboard/dash-configuration/dash-configuration.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashRoutes; });









var DashRoutes = [
    {
        path: 'admin',
        component: __WEBPACK_IMPORTED_MODULE_0__dashboard_component__["a" /* DashboardComponent */],
        children: [
            { path: 'orders', component: __WEBPACK_IMPORTED_MODULE_1__dash_orders_dash_orders_component__["a" /* DashOrdersComponent */] },
            { path: 'products', component: __WEBPACK_IMPORTED_MODULE_2__dash_products_dash_products_component__["a" /* DashProductsComponent */] },
            { path: 'user', component: __WEBPACK_IMPORTED_MODULE_3__dash_user_dash_user_component__["a" /* DashUserComponent */] },
            { path: 'crop-account', component: __WEBPACK_IMPORTED_MODULE_4__dash_crop_account_dash_crop_account_component__["a" /* DashCropAccountComponent */] },
            { path: 'campaign', component: __WEBPACK_IMPORTED_MODULE_5__dash_campaign_dash_campaign_component__["a" /* DashCampaignComponent */] },
            { path: 'coupon', component: __WEBPACK_IMPORTED_MODULE_6__dash_coupon_dash_coupon_component__["a" /* DashCouponComponent */] },
            { path: 'report', component: __WEBPACK_IMPORTED_MODULE_7__dash_report_dash_report_component__["a" /* DashReportComponent */] },
            { path: 'configuration', component: __WEBPACK_IMPORTED_MODULE_8__dash_configuration_dash_configuration_component__["a" /* DashConfigurationComponent */] }
        ]
    },
];
//# sourceMappingURL=dashboard.routes.js.map

/***/ }),

/***/ "../../../../../src/app/home/breadcrumb/components/breadcrumb/breadcrumb.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"bread_crumb\">\r\n  <li *ngFor=\"let breadcrumb of breadcrumbs; let i = index;\">\r\n    <a *ngIf=\"i != breadcrumbs.length - 1; else elseBlock\" href=\"#\" class=\"crumb\">\r\n      <span>{{breadcrumb}}</span>\r\n    </a>\r\n    <ng-template #elseBlock>{{breadcrumb}}</ng-template>\r\n  </li>\r\n</ul>"

/***/ }),

/***/ "../../../../../src/app/home/breadcrumb/components/breadcrumb/breadcrumb.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bread_crumb {\n  color: red;\n  position: relative;\n  margin: 25px 0;\n  font-size: 13px;\n  background-color: white !important; }\n  .bread_crumb li {\n    font-size: 13px;\n    display: inline-block;\n    float: left;\n    margin-right: 5px;\n    color: #696b79;\n    text-transform: capitalize; }\n    .bread_crumb li a {\n      color: #696b79; }\n  .bread_crumb li:after {\n    font-size: 10px;\n    content: '/';\n    margin-left: 5px; }\n  .bread_crumb li:last-child {\n    font-weight: 500;\n    margin-right: 0;\n    font-family: Whitney-semi-bold; }\n  .bread_crumb li:last-child:after {\n    content: '';\n    margin-right: 0; }\n\nul.bread_crumb:before, ul.bread_crumb:after {\n  content: \"\";\n  display: table; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/breadcrumb/components/breadcrumb/breadcrumb.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BreadcrumbComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BreadcrumbComponent = (function () {
    function BreadcrumbComponent() {
        // breadcrumbs: string[] = ['Home', 'Clothing', 'Shirts', 'Men Casual Shirts']
        this.breadcrumbs = ['Home', 'Categories'];
    }
    BreadcrumbComponent.prototype.ngOnInit = function () {
    };
    return BreadcrumbComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], BreadcrumbComponent.prototype, "taxonomies", void 0);
BreadcrumbComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Component */])({
        selector: 'app-breadcrumb',
        template: __webpack_require__("../../../../../src/app/home/breadcrumb/components/breadcrumb/breadcrumb.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/breadcrumb/components/breadcrumb/breadcrumb.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], BreadcrumbComponent);

//# sourceMappingURL=breadcrumb.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/content/content-header/content-header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content\">\r\n  <div itemprop=\"name\" class=\"queried-for\">\r\n    <h4 title=\"men casual shirts\" class=\"q\">Displaying available products</h4>\r\n    <span>&nbsp;</span>\r\n  </div>\r\n\r\n  <div class=\"options\">\r\n    <ul class=\"img-size\">\r\n      <label>View:</label>\r\n      <li (click)=\"toggleView('COMPACT')\" [ngClass]=\"{'big': true, 'selected': isBigSelected()}\"></li>\r\n      <li (click)=\"toggleView('COZY')\" [ngClass]=\"{'small': true, 'selected': isSmallSelected()}\"></li>\r\n    </ul>\r\n    <ul class=\"sort\">\r\n      <label>Sort:</label>\r\n      <li data-sortkey=\":popularity\">Popular</li>\r\n      <li data-sortkey=\":new\">New</li>\r\n      <li data-sortkey=\":discount\">Discount</li>\r\n      <label>Price: \r\n        <li data-sortkey=\":low\">Low</li>\r\n        <li data-sortkey=\":high\">High</li>\r\n      </label>\r\n    </ul>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/content/content-header/content-header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".content {\n  background-color: #fff;\n  width: 759px;\n  display: inline-block;\n  vertical-align: top; }\n  .content .queried-for {\n    display: inline;\n    overflow: hidden;\n    font-size: 18px;\n    font-weight: 500;\n    text-transform: capitalize;\n    color: #282c3f;\n    width: 50%; }\n    .content .queried-for .q {\n      font-weight: 900;\n      display: inline-block;\n      text-overflow: ellipsis;\n      vertical-align: top;\n      overflow: hidden;\n      white-space: nowrap;\n      max-width: 67%; }\n    .content .queried-for span {\n      line-height: 39px;\n      color: #282c3f;\n      font-weight: 400;\n      font-size: 18px;\n      font-style: normal; }\n  .content .options {\n    position: relative;\n    float: right;\n    text-align: right;\n    margin: 12px 0 0 5px;\n    display: inline-block; }\n    .content .options ul.img-size {\n      display: inline-block;\n      margin-right: 10px; }\n      .content .options ul.img-size label {\n        color: #696b79;\n        font-weight: 400; }\n      .content .options ul.img-size li {\n        list-style: none;\n        display: inline-block;\n        cursor: pointer;\n        margin: 0 4px -2px;\n        width: 19px;\n        height: 13px;\n        background: url(" + __webpack_require__("../../../../../src/assets/search-sprite.d5ab50f1b815dfaf3976c6ce2e19d24670e5ba0b.png") + ") no-repeat transparent; }\n        .content .options ul.img-size li.big {\n          background-position: -284px -160px; }\n          .content .options ul.img-size li.big.selected {\n            cursor: default;\n            background-position: -284px -180px; }\n        .content .options ul.img-size li.small {\n          background-position: -311px -160px; }\n          .content .options ul.img-size li.small.selected {\n            background-position: -311px -180px;\n            cursor: default; }\n    .content .options ul.sort {\n      display: inline-block;\n      position: relative;\n      color: #282c3f; }\n      .content .options ul.sort label {\n        margin-left: 5px;\n        font-weight: 400; }\n      .content .options ul.sort label:first-child {\n        color: #3e4152; }\n      .content .options ul.sort li {\n        display: inline-block;\n        margin-left: 5px;\n        text-decoration: none;\n        cursor: pointer; }\n      .content .options ul.sort li:after {\n        content: ' ';\n        display: inline-block;\n        height: 11px;\n        width: 1px;\n        border-left: 1px solid #3e4152;\n        margin-left: 5px;\n        margin-bottom: -1px; }\n      .content .options ul.sort label {\n        font-weight: 400;\n        margin-left: 5px; }\n        .content .options ul.sort label li:first-child {\n          margin-left: 0; }\n        .content .options ul.sort label li:after {\n          content: none; }\n    .content .options ul.sort:before, .content .options ul.sort:after {\n      content: \"\";\n      display: table; }\n  .content .options:before, .content .options:after {\n    content: \"\";\n    display: table; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/content/content-header/content-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentHeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContentHeaderComponent = (function () {
    function ContentHeaderComponent() {
        this.toggleSize = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* EventEmitter */]();
        this.selectedSize = 'COZY';
    }
    ContentHeaderComponent.prototype.ngOnInit = function () {
    };
    ContentHeaderComponent.prototype.toggleView = function (view) {
        this.selectedSize = view;
        this.toggleSize.emit({ size: view });
    };
    ContentHeaderComponent.prototype.isSmallSelected = function () {
        return this.selectedSize === 'COZY';
    };
    ContentHeaderComponent.prototype.isBigSelected = function () {
        return this.selectedSize === 'COMPACT';
    };
    return ContentHeaderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Output */])(),
    __metadata("design:type", Object)
], ContentHeaderComponent.prototype, "toggleSize", void 0);
ContentHeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Component */])({
        selector: 'app-content-header',
        template: __webpack_require__("../../../../../src/app/home/content/content-header/content-header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/content/content-header/content-header.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ContentHeaderComponent);

//# sourceMappingURL=content-header.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/content/content.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContentComponent = (function () {
    function ContentComponent() {
        this.toggleLayout = { size: 'COZY' };
    }
    ContentComponent.prototype.ngOnInit = function () {
    };
    ContentComponent.prototype.toggleSize = function (layoutInfo) {
        this.toggleLayout = layoutInfo;
    };
    return ContentComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Array)
], ContentComponent.prototype, "products", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], ContentComponent.prototype, "taxonIds", void 0);
ContentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Component */])({
        selector: 'app-content',
        template: "\n    <app-content-header (toggleSize)=\"toggleSize($event)\"></app-content-header>\n    <app-filter-summary></app-filter-summary>\n    <app-customize></app-customize>\n    <app-product-list [(toggleLayout)]='toggleLayout' [products]='products' [taxonIds]=\"taxonIds\"></app-product-list>\n  ",
    }),
    __metadata("design:paramtypes", [])
], ContentComponent);

//# sourceMappingURL=content.js.map

/***/ }),

/***/ "../../../../../src/app/home/content/customize/customize.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"customize\">\r\n  <!--<ul class=\"properties\">\r\n    <li data-order=\"0\" data-filter=\"size_facet\" style=\"\" class=\"selected\">Sizes</li>\r\n    <li data-order=\"2\" data-filter=\"tag_coupon\" style=\"display: none\">Offers</li>\r\n    <li data-order=\"3\" data-filter=\"age_facet\" style=\"display: none\">Age</li>\r\n    <li data-order=\"4\" data-filter=\"Shirt_Length_article_attr\" style=\"\">Shirt Length</li>\r\n    <li data-order=\"5\" data-filter=\"Sleeve_Length_article_attr\" style=\"\">Sleeve Length</li>\r\n    <li data-order=\"6\" data-filter=\"Hemline_article_attr\" style=\"\">Hemline</li>\r\n    <li data-order=\"7\" data-filter=\"Pattern_article_attr\" style=\"\">Pattern</li>\r\n    <li data-order=\"8\" data-filter=\"Collar_article_attr\" style=\"\">Collar</li>\r\n    <li data-order=\"9\" data-filter=\"Fabric_article_attr\" style=\"\">Fabric</li>\r\n    <li data-order=\"10\" data-filter=\"Pattern_Size_article_attr\" style=\"\">Pattern Size</li>\r\n    <li data-order=\"11\" data-filter=\"Weave_Pattern_article_attr\" style=\"\">Weave Pattern</li>\r\n    <li data-order=\"12\" data-filter=\"Print_or_Pattern_Type_article_attr\" style=\"\">Print or Pattern Type</li>\r\n    <li data-order=\"13\" data-filter=\"Occasion_article_attr\" style=\"\">Occasion</li>\r\n    <li data-order=\"14\" data-filter=\"Fit_article_attr\" style=\"\">Fit</li>\r\n  </ul>-->\r\n  <div class=\"allOptions\">\r\n    <!--<ul data-filter=\"size_facet\" style=\"\" class=\"options\">\r\n      <li data-filter=\"size_facet\" data-option=\"38\" data-num=\"456\" data-colorhex=\"38\" class=\"option\">\r\n        <label title=\"38\" class=\"selected\">\r\n          <input type=\"checkbox\" data-filter=\"size_facet\" data-option=\"38\" class=\"checkbox\">38<span class=\"num\">(456)</span>\r\n          </label>\r\n      </li>\r\n      <li data-filter=\"size_facet\" data-option=\"39\" data-num=\"387\" data-colorhex=\"39\" class=\"option\">\r\n        <label title=\"39\" class=\"selected\">\r\n          <input type=\"checkbox\" data-filter=\"size_facet\" data-option=\"39\" class=\"checkbox\">39<span class=\"num\">(387)</span>\r\n        </label>\r\n      </li>\r\n      <li data-filter=\"size_facet\" data-option=\"40\" data-num=\"1020\" data-colorhex=\"40\" class=\"option\">\r\n        <label title=\"40\">\r\n          <input type=\"checkbox\" data-filter=\"size_facet\" data-option=\"40\" class=\"checkbox\">40<span class=\"num\">(1020)</span>\r\n        </label>\r\n      </li>\r\n      <li data-filter=\"size_facet\" data-option=\"42\" data-num=\"1082\" data-colorhex=\"42\" class=\"option\">\r\n        <label title=\"42\">\r\n          <input type=\"checkbox\" data-filter=\"size_facet\" data-option=\"42\" class=\"checkbox\">42<span class=\"num\">(1082)</span>\r\n        </label>\r\n      </li>\r\n      <li data-filter=\"size_facet\" data-option=\"43\" data-num=\"1\" data-colorhex=\"43\" class=\"option\">\r\n        <label title=\"43\">\r\n          <input type=\"checkbox\" data-filter=\"size_facet\" data-option=\"43\" class=\"checkbox\">43<span class=\"num\">(1)</span>\r\n        </label>\r\n      </li>\r\n      <li data-filter=\"size_facet\" data-option=\"44\" data-num=\"1318\" data-colorhex=\"44\" class=\"option\"><label title=\"44\"><input type=\"checkbox\" data-filter=\"size_facet\" data-option=\"44\" class=\"checkbox\">44<span class=\"num\">(1318)</span></label>\r\n      </li>\r\n      <li data-filter=\"size_facet\" data-option=\"45\" data-num=\"1\" data-colorhex=\"45\" class=\"option\"><label title=\"45\"><input type=\"checkbox\" data-filter=\"size_facet\" data-option=\"45\" class=\"checkbox\">45<span class=\"num\">(1)</span></label>\r\n      </li>\r\n      <li data-filter=\"size_facet\" data-option=\"46\" data-num=\"184\" data-colorhex=\"46\" class=\"option\"><label title=\"46\"><input type=\"checkbox\" data-filter=\"size_facet\" data-option=\"46\" class=\"checkbox\">46<span class=\"num\">(184)</span></label>\r\n      </li>\r\n    </ul>-->\r\n    <!-- Add provision for more filter options later after this -->\r\n    <!--<ul data-filter=\"Shirt_Length_article_attr\" style=\"display:none;\" class=\"options\">\r\n      <li data-filter=\"Shirt_Length_article_attr\" data-option=\"regular\" data-num=\"1662\" data-colorhex=\"regular\" class=\"option\">\r\n        <label title=\"regular\">\r\n          <input type=\"checkbox\" data-filter=\"Shirt_Length_article_attr\" data-option=\"regular\" class=\"checkbox\">regular<span class=\"num\">(1662)</span>\r\n        </label>\r\n      </li>\r\n    </ul>-->\r\n     \r\n  </div>    \r\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/content/customize/customize.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".customize ul.properties {\n  margin-left: -40px;\n  display: block;\n  position: relative; }\n  .customize ul.properties li {\n    position: relative;\n    cursor: pointer;\n    font-size: 14px;\n    float: left;\n    margin-right: 32px;\n    margin-bottom: 5px;\n    border-bottom: 2px solid #fff;\n    display: inline-block;\n    color: #696b79;\n    list-style: none; }\n    .customize ul.properties li.selected:after {\n      height: 2px;\n      width: 100%;\n      position: absolute;\n      background-color: #20bd99;\n      content: ' ';\n      top: 108%;\n      left: 0; }\n  .customize ul.properties li:not(.selected):hover:after {\n    height: 2px;\n    width: 100%;\n    position: absolute;\n    background-color: #696b79;\n    content: ' ';\n    top: 108%;\n    left: 0; }\n\n.customize ul.properties:before, .customize ul.properties:after {\n  content: \"\";\n  display: table;\n  clear: both; }\n\n.customize .allOptions {\n  display: block;\n  margin-top: 12px;\n  position: relative;\n  padding-top: 10px;\n  border-top: 1px dotted #d4d5d9; }\n  .customize .allOptions ul.options {\n    padding-left: 0px;\n    text-align: right;\n    margin: 5px 0 0 5px;\n    text-transform: capitalize;\n    display: block;\n    border-bottom: 1px dotted #d4d5d9;\n    max-height: 76px;\n    position: relative;\n    padding-bottom: 5px;\n    margin-bottom: 15px;\n    overflow: hidden;\n    float: none; }\n    .customize .allOptions ul.options li {\n      margin: 0 2px 2px 0;\n      display: inline-block;\n      width: 120px;\n      font-size: 14px;\n      text-align: left;\n      color: #3e4152;\n      float: left;\n      list-style: none; }\n      .customize .allOptions ul.options li label {\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis;\n        position: relative;\n        cursor: pointer;\n        display: block;\n        font-weight: 400;\n        height: 19px;\n        line-height: 19px;\n        vertical-align: top; }\n        .customize .allOptions ul.options li label.selected:before {\n          background-position: -237px -138px; }\n        .customize .allOptions ul.options li label input.checkbox, .customize .allOptions ul.options li label input.radio {\n          display: inline-block !important;\n          visibility: hidden;\n          margin: 0 12px 0 0;\n          width: 8px;\n          height: 8px; }\n        .customize .allOptions ul.options li label .num {\n          display: none; }\n      .customize .allOptions ul.options li label:before {\n        background: url(" + __webpack_require__("../../../../../src/assets/search-sprite.d5ab50f1b815dfaf3976c6ce2e19d24670e5ba0b.png") + ") no-repeat -237px -110px transparent;\n        content: ' ';\n        height: 13px;\n        width: 13px;\n        display: block;\n        visibility: visible;\n        top: 4px;\n        position: absolute; }\n      .customize .allOptions ul.options li label:not(.selected):hover:before {\n        background-position: -237px -124px; }\n  .customize .allOptions ul.options:before, .customize .allOptions ul.options:after {\n    content: \"\";\n    display: table; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/content/customize/customize.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomizeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CustomizeComponent = (function () {
    function CustomizeComponent() {
    }
    CustomizeComponent.prototype.ngOnInit = function () {
    };
    return CustomizeComponent;
}());
CustomizeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Component */])({
        selector: 'app-customize',
        template: __webpack_require__("../../../../../src/app/home/content/customize/customize.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/content/customize/customize.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], CustomizeComponent);

//# sourceMappingURL=customize.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/content/filter-summary/filter-summary.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"filter-summary\">\r\n  <div class=\"filter\">\r\n    <div \r\n      *ngFor=\"let filter of filters$ | async\" \r\n      class=\"option\"\r\n      (click)=\"removeFilter(filter)\">{{ filter.name }}\r\n    </div>\r\n    <!--<div data-filter=\"brands_filter_facet\" data-option=\"Wills Lifestyle\" data-colorhex=\"\" class=\"option\">Wills Lifestyle</div>-->\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/home/content/filter-summary/filter-summary.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".filter-summary {\n  margin: 10px 0 5px;\n  height: 20px; }\n  .filter-summary .filter {\n    margin-right: 10px;\n    float: left; }\n    .filter-summary .filter .option {\n      display: block;\n      float: left;\n      position: relative;\n      background-color: #eaeaec;\n      text-transform: capitalize;\n      color: #3e4152;\n      padding: 2px 10px 2px 25px;\n      margin: 0 5px 5px 0;\n      cursor: pointer;\n      transition: all .2s ease-out; }\n    .filter-summary .filter .option:hover {\n      background: #d4d5d9;\n      text-decoration: line-through; }\n    .filter-summary .filter .option:before {\n      content: ' ';\n      background: url(" + __webpack_require__("../../../../../src/assets/search-sprite.d5ab50f1b815dfaf3976c6ce2e19d24670e5ba0b.png") + ") no-repeat -281px -70px;\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 10px;\n      height: 10px;\n      top: 7px;\n      left: 8px; }\n  .filter-summary .filter:before, .filter-summary .filter:after {\n    content: \"\";\n    display: table; }\n\n.filter-summary:before, .filter-summary:after {\n  content: \"\";\n  display: table; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/content/filter-summary/filter-summary.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reducers_search_actions__ = __webpack_require__("../../../../../src/app/home/reducers/search.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reducers_selectors__ = __webpack_require__("../../../../../src/app/home/reducers/selectors.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterSummaryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FilterSummaryComponent = (function () {
    function FilterSummaryComponent(store, search) {
        this.store = store;
        this.search = search;
        this.filters$ = this.store.select(__WEBPACK_IMPORTED_MODULE_1__reducers_selectors__["a" /* getFilters */]);
    }
    FilterSummaryComponent.prototype.ngOnInit = function () {
    };
    FilterSummaryComponent.prototype.removeFilter = function (removedFilter) {
        this.store.dispatch(this.search.removeFilter(removedFilter));
    };
    return FilterSummaryComponent;
}());
FilterSummaryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["F" /* Component */])({
        selector: 'app-filter-summary',
        template: __webpack_require__("../../../../../src/app/home/content/filter-summary/filter-summary.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/content/filter-summary/filter-summary.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__reducers_search_actions__["a" /* SearchActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__reducers_search_actions__["a" /* SearchActions */]) === "function" && _b || Object])
], FilterSummaryComponent);

var _a, _b;
//# sourceMappingURL=filter-summary.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/content/product-list/product-filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
  * Filter the products based on selected taxons in the sidebar
  * @name filter
  * @param selectedTaxonids
  */
var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (products, selectedTaxonIds) {
        var selectedIds = selectedTaxonIds;
        if (!products)
            return [];
        if (!selectedIds || selectedIds.length === 0)
            return products;
        return products.filter(function (product) {
            var productPresent = false;
            selectedIds.forEach(function (id) {
                if (product.taxon_ids.findIndex(function (taxon_id) { return taxon_id === id; }) !== -1) {
                    productPresent = true;
                }
            });
            return productPresent;
        });
    };
    return FilterPipe;
}());
FilterPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Pipe */])({
        name: 'filter'
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])()
], FilterPipe);

//# sourceMappingURL=product-filter.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/home/content/product-list/product-list-item/product-list-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"product-tile\">\r\n  <p> Product id: {{ product.id }} </p>\r\n  <p> Product Name : {{ product.name }} </p>\r\n  <p> Product Price : {{ product.price }} </p>\r\n  <img [src]=\"getProductImageUrl(product.master.images[0]?.large_url)\">\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/content/product-list/product-list-item/product-list-item.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".product-tile {\n  margin: 10px;\n  border: solid 1px gray; }\n  .product-tile img {\n    -o-object-fit: cover;\n       object-fit: cover;\n    width: 100%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/content/product-list/product-list-item/product-list-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_models_product__ = __webpack_require__("../../../../../src/app/core/models/product.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductListItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductListItemComponent = (function () {
    function ProductListItemComponent() {
    }
    ProductListItemComponent.prototype.ngOnInit = function () {
    };
    ProductListItemComponent.prototype.getProductImageUrl = function (url) {
        return __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].API_ENDPOINT + url;
    };
    return ProductListItemComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_models_product__["a" /* Product */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_models_product__["a" /* Product */]) === "function" && _a || Object)
], ProductListItemComponent.prototype, "product", void 0);
ProductListItemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["F" /* Component */])({
        selector: 'app-product-list-item',
        template: __webpack_require__("../../../../../src/app/home/content/product-list/product-list-item/product-list-item.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/content/product-list/product-list-item/product-list-item.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ProductListItemComponent);

var _a;
//# sourceMappingURL=product-list-item.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/content/product-list/product-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row-base\" style=\"display: -webkit-flex\">\r\n  <section>  \r\n    <ul class=\"results-base\">\r\n      <p *ngIf=\"products.length === 0\">No Products found for this category</p>\r\n      <li *ngFor=\"let product of products | filter : selectedTaxonIds\" class=\"product-base\" [style.margin]=\"getMargin()\">\r\n        <div class=\"product-thumbShim\"></div>\r\n        <a [routerLink]=\"['/product/', product.slug]\">\r\n          <img class=\"product-thumb\"\r\n               alt=\"{{product.name}}\" \r\n               [src]=\"getProductImageUrl(product.master.images[0]?.large_url)\">\r\n          <div class=\"product-productMetaInfo\">\r\n            <div class=\"product-brand\">{{ product.name }}</div>\r\n            <h2 class=\"product-product\">{{ product.description }}</h2>\r\n            <div class=\"product-price\">\r\n              <span>\r\n                <!-- Discounted price -->\r\n                <span class=\"product-discountedPrice\">$ {{ product.price }}</span>\r\n                <!-- Original price -->\r\n                <!--<span class=\"product-strike\"> react-text: 485 Rs.  /react-text  react-text: 486 1699 /react-text </span>-->\r\n              </span>\r\n              <!--Percentage off --><!--<span class=\"product-discountPercentage\">(40% OFF)</span>-->\r\n            </div>\r\n            <!-- Product Size --><!--<div class=\"product-sizes\">Sizes: S, M, L, XL, XXL</div>-->\r\n          </div>\r\n        </a>\r\n        <div class=\"product-sizeDisplayDiv\">\r\n          <div class=\"product-sizeDisplayHeader\">\r\n            <span>Select a size</span>\r\n            <span class=\"myntraweb-sprite product-sizeDisplayRemoveMark sprites-remove\"></span>\r\n          </div>\r\n          <div class=\"product-sizeButtonsContaier\">\r\n            <button class=\"product-sizeButton\">S</button>\r\n            <button class=\"product-sizeButton\">M</button>\r\n            <button class=\"product-sizeButton\">L</button>\r\n            <button class=\"product-sizeButton\">XL</button>\r\n            <button class=\"product-sizeButton\">XXL</button>\r\n          </div>\r\n        </div>\r\n        <div class=\"product-actions\">\r\n          <span class=\"product-actionsButton product-wishlist coming-soon\">save</span>\r\n          <span class=\"product-actionsButton product-addToBag\">\r\n            <span (click)=\"addToCart(product)\">Add to bag</span>\r\n          </span>\r\n        </div>\r\n      </li>\r\n    </ul>\r\n  </section>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/home/content/product-list/product-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul {\n  margin-left: -36px; }\n  ul li .product-thumbShim {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 101%;\n    height: 100%;\n    background-color: #282c3f;\n    transition: visibility 0s,opacity .5s linear;\n    visibility: hidden;\n    opacity: 0; }\n  ul li.product-base {\n    width: 180px;\n    height: 332px;\n    text-align: center;\n    position: relative;\n    vertical-align: top;\n    overflow: hidden;\n    display: inline-block;\n    transition: all 500ms; }\n    ul li.product-base a {\n      text-decoration: none;\n      background-color: transparent;\n      color: #282c3f; }\n      ul li.product-base a .product-thumb {\n        height: 240px;\n        display: block;\n        background-color: transparent;\n        opacity: 1;\n        width: 100%;\n        -o-object-fit: contain;\n           object-fit: contain; }\n      ul li.product-base a .product-productMetaInfo {\n        position: relative;\n        z-index: 2;\n        background: #fff;\n        height: 100%;\n        padding: 0 5px; }\n        ul li.product-base a .product-productMetaInfo .product-brand, ul li.product-base a .product-productMetaInfo .product-product {\n          overflow: hidden;\n          text-overflow: ellipsis;\n          white-space: nowrap;\n          font-size: 13px;\n          font-weight: 500;\n          line-height: 14px;\n          color: #282c3f;\n          text-transform: capitalize;\n          margin-top: 10px; }\n        ul li.product-base a .product-productMetaInfo .product-price {\n          font-size: 13px;\n          line-height: 15px;\n          color: #282c3f;\n          margin: 10px 0 0;\n          white-space: nowrap;\n          font-weight: 500; }\n        ul li.product-base a .product-productMetaInfo .product-sizes {\n          font-size: 11px;\n          display: none;\n          color: #3e4152;\n          overflow: hidden;\n          white-space: nowrap;\n          text-overflow: ellipsis;\n          margin-top: 6px; }\n    ul li.product-base .product-sizeDisplayDiv {\n      z-index: 1;\n      width: 100%;\n      max-width: 100%;\n      position: absolute;\n      bottom: 91px;\n      background: #fff;\n      margin-bottom: -161px;\n      transition: all .2s ease-out; }\n      ul li.product-base .product-sizeDisplayDiv .product-sizeDisplayHeader {\n        border-bottom: 1px solid #eaeaec;\n        border-top: 1px solid #eaeaec;\n        padding: 8px;\n        text-align: left;\n        font-size: 14px;\n        color: #535766; }\n    ul li.product-base .product-sizeButtonsContaier {\n      text-align: center;\n      padding: 10px;\n      overflow-y: scroll;\n      box-sizing: border-box;\n      max-height: 108px; }\n      ul li.product-base .product-sizeButtonsContaier .product-sizeButton {\n        border-radius: 20px;\n        margin: 5px;\n        min-width: 34px;\n        height: 34px;\n        background-color: #fff;\n        border: 1px solid #696e79;\n        outline: none;\n        font-size: 12px;\n        color: #696e79;\n        box-sizing: border-box;\n        padding: 5px; }\n    ul li.product-base .product-actions {\n      position: absolute;\n      left: 0;\n      bottom: 40px;\n      border-bottom: 1px solid #eaeaec;\n      border-top: 1px solid #eaeaec;\n      background: #fff;\n      width: 100%; }\n      ul li.product-base .product-actions .product-actionsButton {\n        line-height: 20px;\n        margin: 10px 0;\n        font-weight: 800;\n        font-size: 11px;\n        color: #526cd0;\n        text-transform: uppercase;\n        display: inline-block;\n        cursor: pointer; }\n        ul li.product-base .product-actions .product-actionsButton.product-wishlist {\n          float: left;\n          width: 40%; }\n        ul li.product-base .product-actions .product-actionsButton.product-addToBag {\n          width: 60%;\n          float: left; }\n          ul li.product-base .product-actions .product-actionsButton.product-addToBag span {\n            border-left: 1px dotted #d4d5d9;\n            display: block; }\n  ul li .product-thumbShim {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 101%;\n    height: 100%;\n    background-color: #282c3f;\n    transition: visibility 0s,opacity .5s linear;\n    visibility: hidden;\n    opacity: 0; }\n  ul li.product-base:hover {\n    outline: 1px solid #eaeaec;\n    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05); }\n    ul li.product-base:hover .product-actions {\n      z-index: 10; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/content/product-list/product-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_services_checkout_service__ = __webpack_require__("../../../../../src/app/core/services/checkout.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__checkout_actions_checkout_actions__ = __webpack_require__("../../../../../src/app/checkout/actions/checkout.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductListComponent = (function () {
    function ProductListComponent(checkoutService, store, checkoutActions) {
        this.checkoutService = checkoutService;
        this.store = store;
        this.checkoutActions = checkoutActions;
    }
    ProductListComponent.prototype.ngOnInit = function () { };
    ProductListComponent.prototype.getProductImageUrl = function (url) {
        return __WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].API_ENDPOINT + url;
    };
    ProductListComponent.prototype.addToCart = function (product) {
        var variant_id = product.master.id;
        this.store.dispatch(this.checkoutActions.addToCart(variant_id));
    };
    ProductListComponent.prototype.getMargin = function () {
        return this.toggleLayout.size === 'COZY' ? '0 15px 20px 0' : '0 80px 20px 0';
    };
    return ProductListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], ProductListComponent.prototype, "products", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["O" /* Input */])('taxonIds'),
    __metadata("design:type", Object)
], ProductListComponent.prototype, "selectedTaxonIds", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], ProductListComponent.prototype, "toggleLayout", void 0);
ProductListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["F" /* Component */])({
        selector: 'app-product-list',
        template: __webpack_require__("../../../../../src/app/home/content/product-list/product-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/content/product-list/product-list.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__core_services_checkout_service__["a" /* CheckoutService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__core_services_checkout_service__["a" /* CheckoutService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__checkout_actions_checkout_actions__["a" /* CheckoutActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__checkout_actions_checkout_actions__["a" /* CheckoutActions */]) === "function" && _c || Object])
], ProductListComponent);

var _a, _b, _c;
//# sourceMappingURL=product-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = " <app-breadcrumb [taxonomies]=\"taxonomies$ | async\"></app-breadcrumb>\r\n<div class=\"col-xs-12\">\r\n    <!-- <div class=\"col-xs-3\">\r\n        <app-taxons [taxonomies]=\"taxonomies$ | async\"></app-taxons>\r\n    </div> -->\r\n    <div class=\"col-xs-12\">\r\n        <app-content [products]=\"products$ | async\" [taxonIds]=\"selectedTaxonIds$ | async\">\r\n        </app-content>\r\n    </div>\r\n</div> \r\n\r\n<!-- <h1>home</h1> -->"

/***/ }),

/***/ "../../../../../src/app/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reducers_selectors__ = __webpack_require__("../../../../../src/app/home/reducers/selectors.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__product_actions_product_actions__ = __webpack_require__("../../../../../src/app/product/actions/product-actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_reducers_selectors__ = __webpack_require__("../../../../../src/app/product/reducers/selectors.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
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
    function HomeComponent(store, actions) {
        this.store = store;
        this.actions = actions;
        // Get all products for the product list component
        this.store.dispatch(this.actions.getAllProducts());
        this.store.dispatch(this.actions.getAllTaxonomies());
        this.products$ = this.store.select(__WEBPACK_IMPORTED_MODULE_2__product_reducers_selectors__["a" /* getProducts */]);
        this.taxonomies$ = this.store.select(__WEBPACK_IMPORTED_MODULE_2__product_reducers_selectors__["b" /* getTaxonomies */]);
        this.selectedTaxonIds$ = this.store.select(__WEBPACK_IMPORTED_MODULE_0__reducers_selectors__["b" /* getSelectedTaxonIds */]);
    }
    HomeComponent.prototype.ngOnInit = function () { };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["F" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__product_actions_product_actions__["a" /* ProductActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__product_actions_product_actions__["a" /* ProductActions */]) === "function" && _b || Object])
], HomeComponent);

var _a, _b;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeRoutes; });

var HomeRoutes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_0__home_component__["a" /* HomeComponent */] },
];
//# sourceMappingURL=home.routes.js.map

/***/ }),

/***/ "../../../../../src/app/home/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_actions_product_actions__ = __webpack_require__("../../../../../src/app/product/actions/product-actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducers_search_actions__ = __webpack_require__("../../../../../src/app/home/reducers/search.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_index__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__breadcrumb_components_breadcrumb_breadcrumb_component__ = __webpack_require__("../../../../../src/app/home/breadcrumb/components/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__content_product_list_product_list_component__ = __webpack_require__("../../../../../src/app/home/content/product-list/product-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__content_product_list_product_list_item_product_list_item_component__ = __webpack_require__("../../../../../src/app/home/content/product-list/product-list-item/product-list-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__content_filter_summary_filter_summary_component__ = __webpack_require__("../../../../../src/app/home/content/filter-summary/filter-summary.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__content_customize_customize_component__ = __webpack_require__("../../../../../src/app/home/content/customize/customize.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__content_content_header_content_header_component__ = __webpack_require__("../../../../../src/app/home/content/content-header/content-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__content_content__ = __webpack_require__("../../../../../src/app/home/content/content.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__sidebar_taxons_taxons_component__ = __webpack_require__("../../../../../src/app/home/sidebar/taxons/taxons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__sidebar_filter_filter_component__ = __webpack_require__("../../../../../src/app/home/sidebar/filter/filter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__home_routes__ = __webpack_require__("../../../../../src/app/home/home.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__content_product_list_product_filter_pipe__ = __webpack_require__("../../../../../src/app/home/content/product-list/product-filter.pipe.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// Components

// Breadcrumb components

// Content components






// Sidebar components


// Routes


var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            // components
            __WEBPACK_IMPORTED_MODULE_5__home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_7__content_product_list_product_list_component__["a" /* ProductListComponent */],
            __WEBPACK_IMPORTED_MODULE_8__content_product_list_product_list_item_product_list_item_component__["a" /* ProductListItemComponent */],
            __WEBPACK_IMPORTED_MODULE_13__sidebar_taxons_taxons_component__["a" /* TaxonsComponent */],
            __WEBPACK_IMPORTED_MODULE_14__sidebar_filter_filter_component__["a" /* FilterComponent */],
            __WEBPACK_IMPORTED_MODULE_6__breadcrumb_components_breadcrumb_breadcrumb_component__["a" /* BreadcrumbComponent */],
            __WEBPACK_IMPORTED_MODULE_11__content_content_header_content_header_component__["a" /* ContentHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_10__content_customize_customize_component__["a" /* CustomizeComponent */],
            __WEBPACK_IMPORTED_MODULE_9__content_filter_summary_filter_summary_component__["a" /* FilterSummaryComponent */],
            __WEBPACK_IMPORTED_MODULE_12__content_content__["a" /* ContentComponent */],
            // pipes
            __WEBPACK_IMPORTED_MODULE_16__content_product_list_product_filter_pipe__["a" /* FilterPipe */],
        ],
        exports: [],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_15__home_routes__["a" /* HomeRoutes */]),
            __WEBPACK_IMPORTED_MODULE_4__shared_index__["a" /* SharedModule */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_2__product_actions_product_actions__["a" /* ProductActions */],
            __WEBPACK_IMPORTED_MODULE_3__reducers_search_actions__["a" /* SearchActions */]
        ]
    })
], HomeModule);

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/home/reducers/search.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchActions; });
var SearchActions = (function () {
    function SearchActions() {
    }
    /**
     * @method getAllFtilers
     * Fetches all the filters that have been getSelectedProduct
     * Used in filterSummaryComponent
     */
    SearchActions.prototype.getAllFiltes = function () {
        return { type: SearchActions.GET_ALL_FILTERS };
    };
    /**
     * @method addFilter
     * @param taxon Class Taxon
     * Get's triggered on checking the checkboxes in TaxonsComponent.
     */
    SearchActions.prototype.addFilter = function (taxon) {
        return {
            type: SearchActions.ADD_FILTER,
            payload: taxon
        };
    };
    /**
     * @method removeFilter
     * @param taxon
     * Get's triggered at 2 places:-
     * 1. When user unchecks the checkbox.
     * 2. When user clears the selected filtes in filterSummaryComponent
     */
    SearchActions.prototype.removeFilter = function (taxon) {
        return {
            type: SearchActions.REMOVE_FILTER,
            payload: taxon
        };
    };
    return SearchActions;
}());

SearchActions.GET_ALL_FILTERS = 'GET_ALL_FILTERS';
SearchActions.ADD_FILTER = 'ADD_FILTER';
SearchActions.REMOVE_FILTER = 'REMOVE_FILTER';
//# sourceMappingURL=search.actions.js.map

/***/ }),

/***/ "../../../../../src/app/home/reducers/search.reducers.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__search_actions__ = __webpack_require__("../../../../../src/app/home/reducers/search.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__search_state__ = __webpack_require__("../../../../../src/app/home/reducers/search.state.ts");
/* unused harmony export initialState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return searchReducer; });


var initialState = new __WEBPACK_IMPORTED_MODULE_1__search_state__["a" /* SearchStateRecord */]();
var searchReducer = function (state, _a) {
    if (state === void 0) { state = initialState; }
    var type = _a.type, payload = _a.payload;
    switch (type) {
        case __WEBPACK_IMPORTED_MODULE_0__search_actions__["a" /* SearchActions */].ADD_FILTER:
            var filterAlreadyPresent_1 = false;
            state.selectedFilters.forEach(function (filter) {
                var filterId = filter['id'];
                if (filterId === payload.id) {
                    filterAlreadyPresent_1 = true;
                }
            });
            if (filterAlreadyPresent_1) {
                return state;
            }
            else {
                var _selectedFilters_1 = state.selectedFilters.concat([payload]);
                var _selectedTaxonIds_1 = state.selectedTaxonIds.concat(payload.id);
                return state.merge({
                    selectedFilters: _selectedFilters_1,
                    selectedTaxonIds: _selectedTaxonIds_1
                });
            }
        case __WEBPACK_IMPORTED_MODULE_0__search_actions__["a" /* SearchActions */].REMOVE_FILTER:
            var removeIndex_1 = -1;
            state.selectedFilters.forEach(function (filter, index) {
                var filterId = filter['id'];
                if (filterId === payload.id) {
                    removeIndex_1 = index;
                }
            });
            var _selectedFilters = state.selectedFilters.remove(removeIndex_1);
            var taxonRemoveIndex = state.selectedTaxonIds.findIndex(function (filterId) { return payload.id === filterId; });
            var _selectedTaxonIds = state.selectedTaxonIds.remove(taxonRemoveIndex);
            return state.merge({
                selectedFilters: _selectedFilters,
                selectedTaxonIds: _selectedTaxonIds
            });
        default:
            return state;
    }
};
//# sourceMappingURL=search.reducers.js.map

/***/ }),

/***/ "../../../../../src/app/home/reducers/search.state.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable__ = __webpack_require__("../../../../immutable/dist/immutable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_immutable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchStateRecord; });
/** Search state
 * [{
 *   name: 'Bag',
 *   taxonId: 1
 * }, {
 *   name: 'T-shirts',
 *   taxonId: 9
 * }]
 *
*/

var SearchStateRecord = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Record"])({
    selectedFilters: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["List"])([]),
    selectedTaxonIds: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["List"])([])
});
//# sourceMappingURL=search.state.js.map

/***/ }),

/***/ "../../../../../src/app/home/reducers/selectors.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect__ = __webpack_require__("../../../../reselect/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_reselect__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getFilters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getSelectedTaxonIds; });

/******************* Base Search State ******************/
function getSearchState(state) {
    return state.search;
}
;
/******************* Individual selectors ******************/
function fetchSelectedFilters(state) {
    return state.selectedFilters.toJS();
}
;
function fetchSelectedTaxonIds(state) {
    return state.selectedTaxonIds.toJS();
}
/******************* Public Selector API's ******************/
var getFilters = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getSearchState, fetchSelectedFilters);
var getSelectedTaxonIds = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getSearchState, fetchSelectedTaxonIds);
//# sourceMappingURL=selectors.js.map

/***/ }),

/***/ "../../../../../src/app/home/sidebar/filter/filter.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  filter works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/sidebar/filter/filter.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/sidebar/filter/filter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FilterComponent = (function () {
    function FilterComponent() {
    }
    FilterComponent.prototype.ngOnInit = function () {
    };
    return FilterComponent;
}());
FilterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Component */])({
        selector: 'app-filter',
        template: __webpack_require__("../../../../../src/app/home/sidebar/filter/filter.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/sidebar/filter/filter.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], FilterComponent);

//# sourceMappingURL=filter.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/sidebar/taxons/taxons.component.html":
/***/ (function(module, exports) {

module.exports = "<h4 class=\"heading\">Category</h4>\r\n<div class=\"filter-box\">\r\n  <ul class=\"taxonomy\" *ngFor=\"let taxonomy of taxonomies\">\r\n    <li *ngFor=\"let taxon of taxonomy.root.taxons\" class=\"filter\"> \r\n      <label class=\"vertical-filters-label common-customCheckbox\">  \r\n        <input type=\"checkbox\" [checked]=\"isChecked(taxon)\" (click)=\"taxonSelected(taxon, $event.target.checked)\">  {{taxon.name}}\r\n        <div class=\"common-checkboxIndicator\" ></div>\r\n      </label>\r\n    </li>\r\n  </ul>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/sidebar/taxons/taxons.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".heading {\n  text-transform: uppercase;\n  font-weight: 900;\n  padding: 5px 22px 5px 2px;\n  color: #282c3f; }\n\n.filter-box {\n  margin-bottom: 20px;\n  padding-bottom: 20px;\n  border-bottom: 1px solid #e9e9ed;\n  position: relative; }\n  .filter-box ul.taxonomy {\n    margin-left: -37px;\n    list-style: none; }\n    .filter-box ul.taxonomy li.filter {\n      font-size: 14px;\n      margin-bottom: 7px;\n      font-size: 18px; }\n      .filter-box ul.taxonomy li.filter label.vertical-filters-label {\n        display: block;\n        font-size: 16px;\n        width: 95%;\n        white-space: nowrap;\n        cursor: pointer;\n        overflow: hidden;\n        text-overflow: ellipsis;\n        min-height: 17px;\n        color: #282c3f;\n        position: relative; }\n        .filter-box ul.taxonomy li.filter label.vertical-filters-label input {\n          margin: 0 10px 0 0;\n          visibility: hidden; }\n        .filter-box ul.taxonomy li.filter label.vertical-filters-label .common-checkboxIndicator {\n          box-sizing: border-box;\n          position: absolute;\n          top: 6px;\n          left: 0;\n          width: 16px;\n          height: 16px;\n          border: 1px solid #c3c2c9;\n          background: #fff;\n          border-radius: 2px; }\n        .filter-box ul.taxonomy li.filter label.vertical-filters-label .common-checkboxIndicator:after {\n          display: block;\n          content: \"\";\n          position: absolute;\n          top: 4px;\n          left: 4px;\n          z-index: 1;\n          width: 8px;\n          height: 5px;\n          border: 2px solid #fff;\n          border-color: #fff;\n          border-top-style: none;\n          border-right-style: none;\n          transition: all .3s ease-in-out;\n          -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg); }\n        .filter-box ul.taxonomy li.filter label.vertical-filters-label input:checked ~ .common-checkboxIndicator {\n          border: 2px;\n          background: #526cd0; }\n        .filter-box ul.taxonomy li.filter label.vertical-filters-label input[type=checkbox]:checked {\n          content: \"\\2713\";\n          text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);\n          font-size: 15px;\n          color: #f3f3f3;\n          text-align: center;\n          line-height: 15px; }\n      .filter-box ul.taxonomy li.filter label:before {\n        border-radius: 3px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/sidebar/taxons/taxons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reducers_search_actions__ = __webpack_require__("../../../../../src/app/home/reducers/search.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reducers_selectors__ = __webpack_require__("../../../../../src/app/home/reducers/selectors.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaxonsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TaxonsComponent = (function () {
    function TaxonsComponent(store, actions, ref) {
        var _this = this;
        this.store = store;
        this.actions = actions;
        this.ref = ref;
        this.selectedFilters = [];
        this.searchFilters$ = this.store.select(__WEBPACK_IMPORTED_MODULE_1__reducers_selectors__["a" /* getFilters */]);
        this.searchFilters$.subscribe(function (data) {
            _this.selectedFilters = data;
        });
    }
    TaxonsComponent.prototype.ngOnInit = function () {
    };
    TaxonsComponent.prototype.isChecked = function (taxon) {
        var result = false;
        this.selectedFilters.forEach(function (filter) {
            if (filter.id === taxon.id) {
                result = true;
            }
        });
        return result;
    };
    TaxonsComponent.prototype.taxonSelected = function (taxon, checked) {
        if (checked) {
            this.store.dispatch(this.actions.addFilter(taxon));
        }
        else {
            this.store.dispatch(this.actions.removeFilter(taxon));
        }
    };
    return TaxonsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], TaxonsComponent.prototype, "taxonomies", void 0);
TaxonsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["F" /* Component */])({
        selector: 'app-taxons',
        template: __webpack_require__("../../../../../src/app/home/sidebar/taxons/taxons.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/sidebar/taxons/taxons.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["b" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__reducers_search_actions__["a" /* SearchActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__reducers_search_actions__["a" /* SearchActions */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_core__["R" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_core__["R" /* ChangeDetectorRef */]) === "function" && _c || Object])
], TaxonsComponent);

var _a, _b, _c;
//# sourceMappingURL=taxons.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/checkout-footer/checkout-footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"checkout-footer\">\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/layout/checkout-footer/checkout-footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".checkout-footer {\n  background: #fff;\n  border-top: 1px solid #f5f5f6; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/checkout-footer/checkout-footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutFooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CheckoutFooterComponent = (function () {
    function CheckoutFooterComponent() {
    }
    CheckoutFooterComponent.prototype.ngOnInit = function () {
    };
    return CheckoutFooterComponent;
}());
CheckoutFooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Component */])({
        selector: 'app-checkout-footer',
        template: __webpack_require__("../../../../../src/app/layout/checkout-footer/checkout-footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/checkout-footer/checkout-footer.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], CheckoutFooterComponent);

//# sourceMappingURL=checkout-footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/checkout-header/checkout-header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"checkout-header\">\r\n  <div class=\"full-container\">\r\n    <a class=\"navbar-brand\" routerLink=\"/\"><img src=\"assets/logo.png\" alt=\"Angular Spree\"></a>\r\n    <ol class=\"checkout-steps\">\r\n      <li class=\"step step1\">\r\n        <a [ngClass]=\"{'can-click': checkIfClickable('cart'), 'active': isActiveRoute('cart')}\" [routerLink]=\"getRouterLink('cart')\">Bag</a>\r\n      </li>\r\n      <li class=\"divider\"></li>\r\n      <li class=\"step step2\">\r\n        <a [ngClass]=\"{'can-click': checkIfClickable('address'), 'active': isActiveRoute('address')}\" [routerLink]=\"getRouterLink('address')\">Delivery</a>\r\n      </li>\r\n      <li class=\"divider\"></li>\r\n      <li class=\"step step3\">\r\n        <a [ngClass]=\"{'can-click': checkIfClickable('payment'), 'active': isActiveRoute('payment')}\" [routerLink]=\"getRouterLink('payment')\">Payment</a>\r\n      </li>\r\n    </ol>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/layout/checkout-header/checkout-header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".checkout-header {\n  padding: 20px 0;\n  height: 78px;\n  border-bottom: 1px solid #f5f5f6;\n  width: 100%;\n  z-index: 1;\n  background: #fff; }\n  .checkout-header .full-container {\n    max-width: 980px;\n    margin: 0 auto; }\n    .checkout-header .full-container .navbar-brand {\n      padding: 0px;\n      display: inline-block; }\n      .checkout-header .full-container .navbar-brand img {\n        height: 46px;\n        margin-top: -4px; }\n    .checkout-header .full-container .checkout-steps {\n      margin-left: 25%;\n      margin-top: 8px;\n      margin-bottom: 8px;\n      width: 40%;\n      display: inline-block;\n      padding: 0px; }\n      .checkout-header .full-container .checkout-steps .step {\n        display: inline-block;\n        background: #fff;\n        padding: 0px; }\n        .checkout-header .full-container .checkout-steps .step a {\n          color: #535766;\n          text-transform: uppercase;\n          font-size: 12px;\n          font-weight: 600;\n          font-family: \"Whitney-semi-bold\";\n          letter-spacing: 3px;\n          text-decoration: none;\n          cursor: text; }\n        .checkout-header .full-container .checkout-steps .step .can-click {\n          cursor: pointer; }\n        .checkout-header .full-container .checkout-steps .step .active {\n          color: #20bd99;\n          border-bottom: 2px solid #20bd99;\n          padding-bottom: 5px; }\n      .checkout-header .full-container .checkout-steps .step1 {\n        margin-right: 5px; }\n      .checkout-header .full-container .checkout-steps .step2 {\n        margin: 0 5px; }\n      .checkout-header .full-container .checkout-steps .step3 {\n        margin-left: 5px; }\n      .checkout-header .full-container .checkout-steps .divider {\n        width: 10%;\n        border-top: 1px dashed #94969f;\n        height: 5px;\n        display: inline-block !important;\n        background: #fff;\n        color: #535766 !important;\n        padding: 0 !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/checkout-header/checkout-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutHeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CheckoutHeaderComponent = (function () {
    function CheckoutHeaderComponent(router) {
        this.router = router;
        this.checkoutStep = ['cart', 'address', 'payment'];
    }
    CheckoutHeaderComponent.prototype.ngOnInit = function () {
    };
    CheckoutHeaderComponent.prototype.isActiveRoute = function (step) {
        if (!this.currentStep) {
            return false;
        }
        if (step === this.currentStep) {
            return true;
        }
        else {
            return false;
        }
    };
    CheckoutHeaderComponent.prototype.checkIfClickable = function (clickStep) {
        return this.isLinkAccessible(clickStep);
    };
    CheckoutHeaderComponent.prototype.getRouterLink = function (step) {
        var isAccessible = this.isLinkAccessible(step);
        var link = [];
        if (isAccessible) {
            link = ['/checkout', step];
        }
        return link;
    };
    CheckoutHeaderComponent.prototype.isLinkAccessible = function (step) {
        if (!this.currentStep) {
            return false;
        }
        var currentStepIndex = this.checkoutStep.indexOf(this.currentStep);
        var stepIndex = this.checkoutStep.indexOf(step);
        if (stepIndex <= currentStepIndex) {
            return true;
        }
        else {
            return false;
        }
    };
    return CheckoutHeaderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], CheckoutHeaderComponent.prototype, "currentStep", void 0);
CheckoutHeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Component */])({
        selector: 'app-checkout-header',
        template: __webpack_require__("../../../../../src/app/layout/checkout-header/checkout-header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/checkout-header/checkout-header.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], CheckoutHeaderComponent);

var _a;
//# sourceMappingURL=checkout-header.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/dash-footer/dash-footer.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  dash-footer works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/layout/dash-footer/dash-footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/dash-footer/dash-footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashFooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashFooterComponent = (function () {
    function DashFooterComponent() {
    }
    DashFooterComponent.prototype.ngOnInit = function () {
    };
    return DashFooterComponent;
}());
DashFooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Component */])({
        selector: 'app-dash-footer',
        template: __webpack_require__("../../../../../src/app/layout/dash-footer/dash-footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/dash-footer/dash-footer.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], DashFooterComponent);

//# sourceMappingURL=dash-footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/dash-header/dash-header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar navbar-inverse navbar-fixed-left\">\n  <a class=\"navbar-brand nav-title\" href=\"#\">Dentca Admin</a>\n  <ul class=\"nav navbar-nav\">\n   <li><a routerLink=\"/admin/orders\"><p>Orders</p></a></li>\n   <li><a routerLink=\"/admin/products\"><p>Products</p></a></li>\n   <li><a routerLink=\"/admin/user\"><p>User</p></a></li>\n   <li><a routerLink=\"/admin/crop-account\"><p>Crop Account</p></a></li>\n   <li><a routerLink=\"/admin/campaign\"><p>Campaign</p></a></li>\n   <li><a routerLink=\"/admin/coupon\"><p>Coupon</p></a></li>\n   <li><a routerLink=\"/admin/report\"><p>Report</p></a></li>\n   <li><a routerLink=\"/admin/configuration\"><p>Configuration</p></a></li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/layout/dash-header/dash-header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar-fixed-left {\n  width: 250px;\n  position: fixed;\n  border-radius: 0;\n  height: 100%;\n  background-color: white;\n  border-width: 0px;\n  box-shadow: 0 8px 10px -5px rgba(0, 0, 0, 0.2), 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12); }\n\n.navbar-fixed-left .navbar-nav > li {\n  float: none;\n  /* Cancel default li float: left */\n  width: 139px; }\n\n.navbar-fixed-left + .container {\n  padding-left: 250px; }\n\n/* On using dropdown menu (To right shift popuped) */\n.navbar-fixed-left .navbar-nav > li > .dropdown-menu {\n  margin-top: -50px;\n  margin-left: 250px; }\n\n.navbar-fixed-left .nav-title {\n  width: 100%;\n  height: 70px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  text-align: center;\n  font-size: 25px;\n  color: #444; }\n\n.navbar-fixed-left .nav-title:hover {\n  color: #444;\n  cursor: pointer; }\n\n.navbar-fixed-left .nav-title::after {\n  content: '';\n  position: absolute;\n  top: 70px;\n  right: 10%;\n  height: 1px;\n  width: 80%;\n  background-color: rgba(180, 180, 180, 0.3); }\n\n.navbar-fixed-left .navbar-nav li {\n  text-align: center;\n  width: 250px; }\n\n.navbar-fixed-left .navbar-nav a {\n  width: 230px;\n  height: 50px;\n  margin: 10px;\n  color: #555; }\n\n.navbar-fixed-left .navbar-nav a:hover {\n  color: white;\n  background-color: #6FB524;\n  box-shadow: 0 12px 20px -10px rgba(111, 181, 36, 0.28), 0 4px 20px 0px rgba(0, 0, 0, 0.12), 0 7px 8px -5px rgba(111, 181, 36, 0.2); }\n\n.navbar-fixed-left .navbar-nav a:active {\n  color: white;\n  background-color: #6FB524; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/dash-header/dash-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_reducers_search_actions__ = __webpack_require__("../../../../../src/app/home/reducers/search.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_reducers_selectors__ = __webpack_require__("../../../../../src/app/product/reducers/selectors.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__checkout_reducers_selectors__ = __webpack_require__("../../../../../src/app/checkout/reducers/selectors.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_reducers_selectors__ = __webpack_require__("../../../../../src/app/auth/reducers/selectors.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_services_auth_service__ = __webpack_require__("../../../../../src/app/core/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__auth_actions_auth_actions__ = __webpack_require__("../../../../../src/app/auth/actions/auth.actions.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashHeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var DashHeaderComponent = (function () {
    function DashHeaderComponent(store, authService, authActions, searchActions, router) {
        this.store = store;
        this.authService = authService;
        this.authActions = authActions;
        this.searchActions = searchActions;
        this.router = router;
        this.taxonList = [{
                "id": 4,
                "name": "Mugs",
                "pretty_name": "Categories -> Mugs",
                "permalink": "categories/mugs",
                "parent_id": 1,
                "taxonomy_id": 1,
                "taxons": null
            },
            {
                "id": 3,
                "name": "Bags",
                "pretty_name": "Categories -> Bags",
                "permalink": "categories/bags",
                "parent_id": 1,
                "taxonomy_id": 1,
                "taxons": null
            }, {
                "id": 8,
                "name": "Ruby",
                "pretty_name": "Brand -> Ruby",
                "permalink": "brand/ruby",
                "parent_id": 2,
                "taxonomy_id": 2,
                "taxons": null
            }, {
                "id": 9,
                "name": "Apache",
                "pretty_name": "Brand -> Apache",
                "permalink": "brand/apache",
                "parent_id": 2,
                "taxonomy_id": 2,
                "taxons": null
            }, {
                "id": 10,
                "name": "Spree",
                "pretty_name": "Brand -> Spree",
                "permalink": "brand/spree",
                "parent_id": 2,
                "taxonomy_id": 2,
                "taxons": null
            }, {
                "id": 11,
                "name": "Rails",
                "pretty_name": "Brand -> Rails",
                "permalink": "brand/rails",
                "parent_id": 2,
                "taxonomy_id": 2,
                "taxons": null
            }];
        this.taxonomies$ = this.store.select(__WEBPACK_IMPORTED_MODULE_2__product_reducers_selectors__["b" /* getTaxonomies */]);
    }
    DashHeaderComponent.prototype.ngOnInit = function () {
        this.store.dispatch(this.authActions.authorize());
        this.isAuthenticated = this.store.select(__WEBPACK_IMPORTED_MODULE_6__auth_reducers_selectors__["a" /* getAuthStatus */]);
        this.totalCartItems = this.store.select(__WEBPACK_IMPORTED_MODULE_3__checkout_reducers_selectors__["c" /* getTotalCartItems */]);
    };
    DashHeaderComponent.prototype.selectTaxon = function (taxon) {
        this.router.navigateByUrl('/');
        this.store.dispatch(this.searchActions.addFilter(taxon));
    };
    return DashHeaderComponent;
}());
DashHeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["F" /* Component */])({
        selector: 'app-dash-header',
        template: __webpack_require__("../../../../../src/app/layout/dash-header/dash-header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/dash-header/dash-header.component.scss")],
        changeDetection: __WEBPACK_IMPORTED_MODULE_4__angular_core__["_16" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ngrx_store__["b" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__core_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__core_services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_8__auth_actions_auth_actions__["a" /* AuthActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__auth_actions_auth_actions__["a" /* AuthActions */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__home_reducers_search_actions__["a" /* SearchActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__home_reducers_search_actions__["a" /* SearchActions */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _e || Object])
], DashHeaderComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=dash-header.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer>\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <!-- row -->\r\n            <div class=\"col-lg-9 col-md-9 col-sm-9 col-xs-12\">\r\n                <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-2\">\r\n                    <!-- widgets column left -->\r\n                    <ul class=\"list-unstyled clear-margins\">\r\n                        <!-- widgets -->\r\n                        <li class=\"widget-container widget_nav_menu\">\r\n                            <!-- widgets list -->\r\n                            <h1 class=\"title-widget\">Company</h1>\r\n                            <ul>\r\n                                <li><a href=\"#\"> About Us</a></li>\r\n                            </ul>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n                <!-- widgets column left end -->\r\n                <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-2\">\r\n                    <!-- widgets column left -->\r\n                    <ul class=\"list-unstyled clear-margins\">\r\n                        <!-- widgets -->\r\n                        <li class=\"widget-container widget_nav_menu\">\r\n                            <!-- widgets list -->\r\n                            <h1 class=\"title-widget\">Products</h1>\r\n                            <ul>\r\n                                <li><a href=\"#\">  Starter Kit</a></li>\r\n                                <li><a href=\"#\">  Tray</a></li>\r\n                                <li><a href=\"#\">  Lip Ruler</a></li>\r\n                                <li><a href=\"#\">  Jaw Gauge</a></li>\r\n                                <li><a href=\"#\">  EZ-Tracer</a></li>\r\n                            </ul>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n                <!-- widgets column left end -->\r\n                <div class=\"col-lg-4 col-md-4 col-sm-4 col-xs-4\">\r\n                    <!-- widgets column left -->\r\n                    <ul class=\"list-unstyled clear-margins\">\r\n                        <!-- widgets -->\r\n                        <li class=\"widget-container widget_nav_menu\">\r\n                            <!-- widgets list -->\r\n                            <h1 class=\"title-widget\">Traing Video</h1>\r\n                            <ul>\r\n                                <li><a href=\"#\"> Module1 - Introduction</a></li>\r\n                                <li><a href=\"#\"> Module2 - Tray Selection</a></li>\r\n                                <li><a href=\"#\"> Module3 - Impression Making</a></li>\r\n                                <li><a href=\"#\"> Module4 - Bite Registration</a></li>\r\n                                <li><a href=\"#\"> Module5 - Tray in Session</a></li>\r\n                                <li><a href=\"#\"> Module6 - Final Delivery</a></li>\r\n                                <li><a href=\"#\"> Module7 - Single Arch Denture</a></li>\r\n                                <li><a href=\"#\"> Module8 - Implant Overdentures</a></li>\r\n                            </ul>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n                <!-- widgets column left end -->\r\n                <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-2\"  style=\"margin-top: 20px\">\r\n                    <!-- widgets column left -->\r\n                    <ul class=\"list-unstyled clear-margins\">\r\n                        <!-- widgets -->\r\n                        <li class=\"widget-container widget_nav_menu\">\r\n                            <!-- widgets list -->\r\n                            <a class=\"title-widget\" style=\"cursor: pointer\">Contact Us</a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n                <div class=\"col-lg-2 col-md-2 col-sm-2 col-xs-2\"  style=\"margin-top: 20px\">\r\n                    <!-- widgets column left -->\r\n                    <ul class=\"list-unstyled clear-margins\">\r\n                        <!-- widgets -->\r\n                        <li class=\"widget-container widget_nav_menu\">\r\n                            <!-- widgets list -->\r\n                            <a class=\"title-widget\" style=\"cursor: pointer\">Cart</a>\r\n                        </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-12\" style=\"text-align: right;\">\r\n                <div class=\"social-icons\">\r\n                    <ul class=\"nomargin\">\r\n                        <a href=\"https://www.facebook.com/bootsnipp\"><i class=\"fa fa-facebook fa-3x social-fb\" id=\"social\"></i></a>\r\n                        <a href=\"https://twitter.com/bootsnipp\"><i class=\"fa fa-twitter fa-3x social-tw\" id=\"social\"></i></a>\r\n                        <a href=\"https://plus.google.com/+Bootsnipp-page\"><i class=\"fa fa-google-plus fa-3x social-gp\" id=\"social\"></i></a>\r\n                        <a href=\"mailto:bootsnipp@gmail.com\"><i class=\"fa fa-envelope fa-3x social-em\" id=\"social\"></i></a>\r\n                    </ul>\r\n                </div>\r\n                <div class=\"copyright\">\r\n                    Copyright © 2016 <b>DENTCA</b>, Inc. All Rights Reserved\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</footer>"

/***/ }),

/***/ "../../../../../src/app/layout/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "footer {\n  margin-top: 50px;\n  padding-top: 50px;\n  border-top: 1px solid #f5f5f6;\n  background-color: #f5f5f6; }\n\n.title-widget {\n  font-size: 15px;\n  font-family: Whitney-semi-bold !important; }\n\nul li {\n  list-style-type: none;\n  padding-top: 7px; }\n\nul {\n  padding-left: 0px; }\n\n.nomargin {\n  font-size: 10px;\n  color: #6FB524; }\n\n.nomargin a {\n  padding-left: 10px;\n  color: #6FB524; }\n\n.nomargin a:hover {\n  color: #3d8300; }\n\nul li a {\n  color: #555555;\n  text-align: right; }\n\nul li a:hover {\n  color: #3d8300; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/layout/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/footer/footer.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <nav class=\"navbar navbar-default navbar-fixed-top\">\r\n    <div class=\"container\">\r\n\r\n      <div class=\"navbar-header\">\r\n        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\"\r\n          aria-expanded=\"false\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n        <a class=\"navbar-brand\" routerLink=\"/\"><img src=\"assets/logo.png\" alt=\"Angular Spree\"></a>\r\n      </div>\r\n\r\n      <!-- Collect the nav links, forms, and other content for toggling -->\r\n      <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n        <ul class=\"nav navbar-nav\">\r\n          <!-- <li *ngFor=\"let taxon of taxonList\" class=\"\">\r\n          <a (click)=\"selectTaxon(taxon)\" href=\"javascript:void(0)\">{{taxon.name}}\r\n            <span class=\"sr-only\">(current)</span>\r\n          </a>\r\n        </li>  -->\r\n          <li class=\"dropdown\" dropdown>\r\n            <a class=\"dropdown-toggle\" dropdownToggle>\r\n            <i class=\"\" style=\"font-style:normal !important\">Company</i>\r\n             <span class=\"caret\"></span> \r\n          </a>\r\n            <ul class=\"dropdown-menu\" *dropdownMenu>\r\n              <li><a routerLink=\"/blog/aboutus\">About Us</a></li>\r\n              <li><a routerLink=\"/blog/dentca-3d\">Dentca-3D</a></li>\r\n            </ul>\r\n          </li>\r\n          <li class=\"dropdown\" dropdown>\r\n            <a class=\"dropdown-toggle\" dropdownToggle>\r\n            <i class=\"\" style=\"font-style:normal !important\">Porduct</i>\r\n             <span class=\"caret\"></span> \r\n          </a>\r\n            <ul class=\"dropdown-menu\" *dropdownMenu>\r\n              <li><a routerLink=\"/home\">CAD CAM Denture</a></li>\r\n              <li><a routerLink=\"/home\">Dentca-3D</a></li>\r\n            </ul>\r\n          </li>\r\n          <li class=\"\"><a routerLink=\"/blog/resources\">Resources</a></li>\r\n          <li class=\"\"><a routerLink=\"/blog/news\">News and Events</a></li>\r\n        </ul>\r\n\r\n        <app-profile-dropdown [totalCartItems]=\"totalCartItems | async\" [isAuthenticated]=\"isAuthenticated | async\"></app-profile-dropdown>\r\n\r\n        <!-- <div class=\"desktop-query\">\r\n        <input placeholder=\"Search\" class=\"desktop-searchBar\">\r\n        <a class=\"desktop-submit\">\r\n          <span class=\"web-sprite desktop-iconSearch sprites-search\"></span>\r\n        </a>\r\n      </div> -->\r\n      </div>\r\n    </div>\r\n  </nav>\r\n<div>"

/***/ }),

/***/ "../../../../../src/app/layout/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar {\n  height: 78px;\n  border-bottom: 1px solid #f5f5f6; }\n\n.navbar-brand {\n  margin-top: -8%; }\n  .navbar-brand img {\n    height: 46px; }\n\n#navbar-search-input {\n  display: inline-block;\n  font-size: 16px;\n  height: 20px;\n  line-height: 24px;\n  width: 235px;\n  color: #696e79;\n  box-sizing: content-box;\n  padding: 8px 10px 10px;\n  margin: 0;\n  outline: 0;\n  border: 1px solid #d5d6d9;\n  border-radius: 4px 0 0 4px;\n  border-right: 0;\n  background: #f5f5f6; }\n  #navbar-search-input:focus {\n    background-color: #fff;\n    border-color: #14cda8;\n    box-shadow: none; }\n\n.input-group-addon {\n  background: #f5f5f6; }\n\na {\n  cursor: pointer !important; }\n\n.desktop-query {\n  width: 300px;\n  float: right;\n  line-height: 0;\n  margin: 4px 10px 20px 0; }\n  .desktop-query input.desktop-searchBar {\n    font-family: Whitney;\n    display: inline-block;\n    float: left;\n    font-size: 16px;\n    height: 20px;\n    line-height: 24px;\n    width: 235px;\n    color: #696e79;\n    box-sizing: content-box;\n    padding: 8px 10px 10px;\n    margin: 0;\n    outline: 0;\n    border: 1px solid #d5d6d9;\n    border-radius: 4px 0 0 4px;\n    border-right: 0;\n    background: #f5f5f6; }\n    .desktop-query input.desktop-searchBar:focus, .desktop-query input.desktop-searchBar:focus + a.desktop-submit {\n      background-color: #fff;\n      border-color: #14cda8; }\n  .desktop-query a.desktop-submit {\n    box-sizing: content-box;\n    display: inline-block;\n    height: 28px;\n    width: 40px;\n    text-align: center;\n    padding: 8px 0 2px;\n    background: #f5f5f6;\n    border: 1px solid #d4d5d9;\n    border-left: none;\n    border-radius: 0 4px 4px 0; }\n    .desktop-query a.desktop-submit .desktop-iconSearch {\n      display: inline-block; }\n    .desktop-query a.desktop-submit .sprites-search {\n      width: 21px;\n      height: 21px; }\n    .desktop-query a.desktop-submit .web-sprite {\n      background: url(" + __webpack_require__("../../../../../src/assets/search-sprite.d5ab50f1b815dfaf3976c6ce2e19d24670e5ba0b.png") + ");\n      background-position: -209px -148px;\n      display: inline-block; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_reducers_search_actions__ = __webpack_require__("../../../../../src/app/home/reducers/search.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_reducers_selectors__ = __webpack_require__("../../../../../src/app/product/reducers/selectors.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__checkout_reducers_selectors__ = __webpack_require__("../../../../../src/app/checkout/reducers/selectors.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_reducers_selectors__ = __webpack_require__("../../../../../src/app/auth/reducers/selectors.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_services_auth_service__ = __webpack_require__("../../../../../src/app/core/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__auth_actions_auth_actions__ = __webpack_require__("../../../../../src/app/auth/actions/auth.actions.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var HeaderComponent = (function () {
    function HeaderComponent(store, authService, authActions, searchActions, router) {
        this.store = store;
        this.authService = authService;
        this.authActions = authActions;
        this.searchActions = searchActions;
        this.router = router;
        this.taxonList = [{
                "id": 4,
                "name": "Mugs",
                "pretty_name": "Categories -> Mugs",
                "permalink": "categories/mugs",
                "parent_id": 1,
                "taxonomy_id": 1,
                "taxons": null
            },
            {
                "id": 3,
                "name": "Bags",
                "pretty_name": "Categories -> Bags",
                "permalink": "categories/bags",
                "parent_id": 1,
                "taxonomy_id": 1,
                "taxons": null
            }, {
                "id": 8,
                "name": "Ruby",
                "pretty_name": "Brand -> Ruby",
                "permalink": "brand/ruby",
                "parent_id": 2,
                "taxonomy_id": 2,
                "taxons": null
            }, {
                "id": 9,
                "name": "Apache",
                "pretty_name": "Brand -> Apache",
                "permalink": "brand/apache",
                "parent_id": 2,
                "taxonomy_id": 2,
                "taxons": null
            }, {
                "id": 10,
                "name": "Spree",
                "pretty_name": "Brand -> Spree",
                "permalink": "brand/spree",
                "parent_id": 2,
                "taxonomy_id": 2,
                "taxons": null
            }, {
                "id": 11,
                "name": "Rails",
                "pretty_name": "Brand -> Rails",
                "permalink": "brand/rails",
                "parent_id": 2,
                "taxonomy_id": 2,
                "taxons": null
            }];
        this.taxonomies$ = this.store.select(__WEBPACK_IMPORTED_MODULE_2__product_reducers_selectors__["b" /* getTaxonomies */]);
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.store.dispatch(this.authActions.authorize());
        this.isAuthenticated = this.store.select(__WEBPACK_IMPORTED_MODULE_6__auth_reducers_selectors__["a" /* getAuthStatus */]);
        this.totalCartItems = this.store.select(__WEBPACK_IMPORTED_MODULE_3__checkout_reducers_selectors__["c" /* getTotalCartItems */]);
    };
    HeaderComponent.prototype.selectTaxon = function (taxon) {
        this.router.navigateByUrl('/');
        this.store.dispatch(this.searchActions.addFilter(taxon));
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["F" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/layout/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/header/header.component.scss")],
        changeDetection: __WEBPACK_IMPORTED_MODULE_4__angular_core__["_16" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ngrx_store__["b" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__core_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__core_services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_8__auth_actions_auth_actions__["a" /* AuthActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__auth_actions_auth_actions__["a" /* AuthActions */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__home_reducers_search_actions__["a" /* SearchActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__home_reducers_search_actions__["a" /* SearchActions */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === "function" && _e || Object])
], HeaderComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/header/profile-dropdown/profile-dropdown.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav navbar-nav navbar-right\">\r\n  <li class=\"dropdown\" dropdown *ngIf=\"!isAuthenticated\">\r\n    <a class=\"dropdown-toggle\" dropdownToggle>\r\n      <i class=\"fa fa-user\" aria-hidden=\"true\"></i>\r\n      <span class=\"caret\"></span>\r\n    </a>\r\n\r\n    <ul class=\"dropdown-menu\" *dropdownMenu>\r\n      <li><a [routerLink]=\"['/auth']\">Sign Up</a></li>\r\n      <li role=\"separator\" class=\"divider\"></li>\r\n      <li><a [routerLink]=\"['/auth', 'login']\">Login</a></li>\r\n    </ul>\r\n  </li>\r\n\r\n  <li class=\"dropdown\" dropdown *ngIf=\"isAuthenticated\">\r\n    <a class=\"dropdown-toggle\" dropdownToggle>\r\n      <i class=\"fa fa-user\" aria-hidden=\"true\"></i>\r\n      <span class=\"caret\"></span>\r\n    </a>\r\n    <ul class=\"dropdown-menu\" *dropdownMenu>\r\n      <li><a routerLink=\"/user\">My Profile</a></li>\r\n      <li><a routerLink=\"/user/orders\">My Orders</a></li>\r\n      <li role=\"separator\" class=\"divider\"></li>\r\n      <li><a routerLink=\"/user/addresses\">Saved Addresses</a></li>\r\n      <li role=\"separator\" class=\"divider\"></li>\r\n      <li><a href=\"#\">Edit Profile</a></li>\r\n      <li><a (click)=\"logout()\">Logout</a></li>\r\n    </ul>\r\n  </li>\r\n\r\n  <li class=\"cart\" [routerLink]=\"['checkout','cart']\">\r\n    <a>\r\n      <i class=\"fa fa-shopping-bag\" aria-hidden=\"true\"></i> cart\r\n      <span class=\"badge badge-danger\">{{totalCartItems}}</span></a>\r\n  </li>\r\n</ul>"

/***/ }),

/***/ "../../../../../src/app/layout/header/profile-dropdown/profile-dropdown.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".fa {\n  font-size: 2rem; }\n\n.nav .open > a, .nav .open > a:focus, .nav .open > a:hover {\n  background-color: transparent; }\n\n.cart {\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/layout/header/profile-dropdown/profile-dropdown.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_auth_service__ = __webpack_require__("../../../../../src/app/core/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileDropdownComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileDropdownComponent = (function () {
    function ProfileDropdownComponent(authService) {
        this.authService = authService;
    }
    ProfileDropdownComponent.prototype.ngOnInit = function () {
    };
    ProfileDropdownComponent.prototype.logout = function () {
        this.authService.logout().subscribe(function (data) { return console.log(data); });
    };
    return ProfileDropdownComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Boolean)
], ProfileDropdownComponent.prototype, "isAuthenticated", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Number)
], ProfileDropdownComponent.prototype, "totalCartItems", void 0);
ProfileDropdownComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Component */])({
        selector: 'app-profile-dropdown',
        template: __webpack_require__("../../../../../src/app/layout/header/profile-dropdown/profile-dropdown.component.html"),
        styles: [__webpack_require__("../../../../../src/app/layout/header/profile-dropdown/profile-dropdown.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], ProfileDropdownComponent);

var _a;
//# sourceMappingURL=profile-dropdown.component.js.map

/***/ }),

/***/ "../../../../../src/app/layout/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__header_header_component__ = __webpack_require__("../../../../../src/app/layout/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__footer_footer_component__ = __webpack_require__("../../../../../src/app/layout/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_profile_dropdown_profile_dropdown_component__ = __webpack_require__("../../../../../src/app/layout/header/profile-dropdown/profile-dropdown.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_index__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LayoutModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// Components



// Modules


var LayoutModule = (function () {
    function LayoutModule() {
    }
    return LayoutModule;
}());
LayoutModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        declarations: [
            // components
            __WEBPACK_IMPORTED_MODULE_1__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_2__footer_footer_component__["a" /* FooterComponent */],
            // sub components
            __WEBPACK_IMPORTED_MODULE_3__header_profile_dropdown_profile_dropdown_component__["a" /* ProfileDropdownComponent */]
            // pipes
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_2__footer_footer_component__["a" /* FooterComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__shared_index__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */]
        ]
    })
], LayoutModule);

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/product/actions/product-actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductActions; });
var ProductActions = (function () {
    function ProductActions() {
    }
    ProductActions.prototype.getAllProducts = function () {
        return { type: ProductActions.GET_ALL_PRODUCTS };
    };
    ProductActions.prototype.getProductDetail = function (id) {
        return {
            type: ProductActions.GET_PRODUCT_DETAIL,
            payload: id
        };
    };
    // change products type to Product[]
    ProductActions.prototype.getAllProductsSuccess = function (products) {
        return {
            type: ProductActions.GET_ALL_PRODUCTS_SUCCESS,
            payload: products
        };
    };
    ProductActions.prototype.getProductDetailSuccess = function (product) {
        return {
            type: ProductActions.GET_PRODUCT_DETAIL_SUCCESS,
            payload: product
        };
    };
    ProductActions.prototype.clearSelectedProduct = function () {
        return { type: ProductActions.CLEAR_SELECTED_PRODUCT };
    };
    ProductActions.prototype.getAllTaxonomies = function () {
        return { type: ProductActions.GET_ALL_TAXONOMIES };
    };
    ProductActions.prototype.getAllTaxonomiesSuccess = function (taxonomies) {
        return {
            type: ProductActions.GET_ALL_TAXONOMIES_SUCCESS,
            payload: taxonomies
        };
    };
    return ProductActions;
}());

ProductActions.GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';
ProductActions.GET_ALL_PRODUCTS_SUCCESS = 'GET_ALL_PRODUCTS_SUCCESS';
ProductActions.GET_PRODUCT_DETAIL = 'GET_PRODUCT_DETAIL';
ProductActions.GET_PRODUCT_DETAIL_SUCCESS = 'GET_PRODUCT_DETAIL_SUCCESS';
ProductActions.CLEAR_SELECTED_PRODUCT = 'CLEAR_SELECTED_PRODUCT';
ProductActions.GET_ALL_TAXONOMIES = 'GET_ALL_TAXONOMIES';
ProductActions.GET_ALL_TAXONOMIES_SUCCESS = 'GET_ALL_TAXONOMIES_SUCCESS';
//# sourceMappingURL=product-actions.js.map

/***/ }),

/***/ "../../../../../src/app/product/effects/product.effects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_product_actions__ = __webpack_require__("../../../../../src/app/product/actions/product-actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_services_product_service__ = __webpack_require__("../../../../../src/app/core/services/product.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductEffects; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductEffects = (function () {
    function ProductEffects(actions$, productService, productActions) {
        var _this = this;
        this.actions$ = actions$;
        this.productService = productService;
        this.productActions = productActions;
        // tslint:disable-next-line:member-ordering
        this.GetAllProducts$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_0__actions_product_actions__["a" /* ProductActions */].GET_ALL_PRODUCTS)
            .switchMap(function (action) { return _this.productService.getProducts(); })
            .map(function (data) { return _this.productActions.getAllProductsSuccess({ products: data }); });
        this.GetAllTaxonomies$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_0__actions_product_actions__["a" /* ProductActions */].GET_ALL_TAXONOMIES)
            .switchMap(function (action) { return _this.productService.getTaxonomies(); })
            .map(function (data) { return _this.productActions.getAllTaxonomiesSuccess({ taxonomies: data }); });
        this.GetProductDetail$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_0__actions_product_actions__["a" /* ProductActions */].GET_PRODUCT_DETAIL)
            .switchMap(function (action) { return _this.productService.getProduct(action.payload); })
            .map(function (data) { return _this.productActions.getProductDetailSuccess(data); });
    }
    return ProductEffects;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"]) === "function" && _a || Object)
], ProductEffects.prototype, "GetAllProducts$", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"]) === "function" && _b || Object)
], ProductEffects.prototype, "GetAllTaxonomies$", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"]) === "function" && _c || Object)
], ProductEffects.prototype, "GetProductDetail$", void 0);
ProductEffects = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["c" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_effects__["c" /* Actions */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__core_services_product_service__["a" /* ProductService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__core_services_product_service__["a" /* ProductService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__actions_product_actions__["a" /* ProductActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__actions_product_actions__["a" /* ProductActions */]) === "function" && _f || Object])
], ProductEffects);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=product.effects.js.map

/***/ }),

/***/ "../../../../../src/app/product/reducers/product-reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions_product_actions__ = __webpack_require__("../../../../../src/app/product/actions/product-actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__product_state__ = __webpack_require__("../../../../../src/app/product/reducers/product-state.ts");
/* unused harmony export initialState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return productReducer; });


var initialState = new __WEBPACK_IMPORTED_MODULE_1__product_state__["a" /* ProductStateRecord */]();
var productReducer = function (state, _a) {
    if (state === void 0) { state = initialState; }
    var type = _a.type, payload = _a.payload;
    switch (type) {
        case __WEBPACK_IMPORTED_MODULE_0__actions_product_actions__["a" /* ProductActions */].GET_PRODUCT_DETAIL_SUCCESS:
            return state.merge({
                selectedProduct: payload
            });
        case __WEBPACK_IMPORTED_MODULE_0__actions_product_actions__["a" /* ProductActions */].GET_ALL_PRODUCTS_SUCCESS:
            var _products = payload.products.products;
            var productIds = _products.map(function (product) { return product.id; });
            var productEntities = _products.reduce(function (products, product) {
                return Object.assign(products, (_a = {},
                    _a[product.id] = product,
                    _a));
                var _a;
            }, {});
            return state.merge({
                productIds: productIds,
                productEntities: productEntities
            });
        case __WEBPACK_IMPORTED_MODULE_0__actions_product_actions__["a" /* ProductActions */].GET_ALL_TAXONOMIES_SUCCESS:
            var _taxonomies = payload.taxonomies.taxonomies;
            return state.merge({
                taxonomies: _taxonomies
            });
        default:
            return state;
    }
};
//# sourceMappingURL=product-reducer.js.map

/***/ }),

/***/ "../../../../../src/app/product/reducers/product-state.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable__ = __webpack_require__("../../../../immutable/dist/immutable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_immutable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductStateRecord; });

var ProductStateRecord = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Record"])({
    productIds: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["List"])([]),
    productEntities: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({}),
    selectedProductId: null,
    selectedProduct: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({}),
    taxonomies: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["List"])([])
});
//# sourceMappingURL=product-state.js.map

/***/ }),

/***/ "../../../../../src/app/product/reducers/selectors.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect__ = __webpack_require__("../../../../reselect/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_reselect__);
/* unused harmony export getProductState */
/* unused harmony export fetchProducts */
/* unused harmony export fetchAllTaxonomies */
/* unused harmony export getSelectedProduct */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getTaxonomies; });

// Base product state selector function
function getProductState(state) {
    return state.products;
}
// ******************** Individual selectors ***************************
function fetchProducts(state) {
    var ids = state.productIds.toJS();
    var productEntities = state.productEntities.toJS();
    return ids.map(function (id) { return productEntities[id]; });
}
function fetchAllTaxonomies(state) {
    return state.taxonomies.toJS();
}
var fetchSelectedProduct = function (state) {
    return state.selectedProduct;
};
// *************************** PUBLIC API's ****************************
var getSelectedProduct = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getProductState, fetchSelectedProduct);
var getProducts = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getProductState, fetchProducts);
var getTaxonomies = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(getProductState, fetchAllTaxonomies);
//# sourceMappingURL=selectors.js.map

/***/ }),

/***/ "../../../../../src/app/shared/components/loading-indicator/loading-indicator.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"loading\" [hidden]=\"!(loading$ | async)?.loading\"> \r\n  <!--<div class=\"spinner\"></div>-->\r\n  <div class='spinner triangles'>\r\n    <div class='tri invert'></div>\r\n    <div class='tri invert'></div>\r\n    <div class='tri'></div>\r\n    <div class='tri invert'></div>\r\n    <div class='tri invert'></div>\r\n    <div class='tri'></div>\r\n    <div class='tri invert'></div>\r\n    <div class='tri'></div>\r\n    <div class='tri invert'></div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/shared/components/loading-indicator/loading-indicator.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".default .navbar-fixed-top {\n  min-height: 70px;\n  padding: 15px;\n  background-color: rgba(255, 255, 255, 0.98);\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08); }\n  .default .navbar-fixed-top .navbar-nav > li .active > a {\n    border-bottom: 3px solid #a1e756; }\n  .default .navbar-fixed-top .navbar-nav > li > a {\n    font-weight: 500;\n    min-height: 50px;\n    font-family: Whitney-semi-bold !important;\n    font-size: 15px; }\n    .default .navbar-fixed-top .navbar-nav > li > a:hover {\n      border-bottom: 3px solid #6FB524; }\n\n.default .badge-danger {\n  background-color: #6FB524; }\n\n.default .badge-warning {\n  background-color: #d58512; }\n\n.default .badge-success {\n  background-color: #398439; }\n\n.default .badge-info {\n  background-color: #269abc; }\n\n.default .badge-inverse {\n  background-color: #333333; }\n\n@-webkit-keyframes notify-bounce-in-down {\n  0% {\n    top: -1000px; }\n  10% {\n    top: 100px; }\n  15% {\n    opacity: 1;\n    top: 80px; }\n  60% {\n    opacity: 1;\n    top: 80px; }\n  65% {\n    opacity: 1;\n    top: 100px; }\n  100% {\n    opacity: 0;\n    top: -1000px; } }\n\n@keyframes notify-bounce-in-down {\n  0% {\n    top: -1000px; }\n  10% {\n    top: 100px; }\n  15% {\n    opacity: 1;\n    top: 80px; }\n  60% {\n    opacity: 1;\n    top: 80px; }\n  65% {\n    opacity: 1;\n    top: 100px; }\n  100% {\n    opacity: 0;\n    top: -1000px; } }\n\n.default .notify-container {\n  position: fixed;\n  top: 122px;\n  color: #fff;\n  width: 100%;\n  max-width: 980px;\n  margin: 0 auto;\n  left: 0;\n  right: 0;\n  min-height: 50px;\n  z-index: 8;\n  text-align: center;\n  opacity: 0; }\n  .default .notify-container.in {\n    -webkit-animation-duration: 5s;\n    animation-duration: 5s;\n    -webkit-animation-fill-mode: both;\n    animation-fill-mode: both;\n    -webkit-animation-name: notify-bounce-in-down;\n    animation-name: notify-bounce-in-down; }\n\n.default .notify-error {\n  background-color: #ff5722; }\n\n.default .notify-content {\n  max-width: 380px;\n  width: 80%;\n  padding: 10px 20px;\n  border-radius: 3px;\n  box-shadow: 0 2px 10px rgba(40, 44, 64, 0.2);\n  margin: 0 auto; }\n\n.default .notify-error-message {\n  font-size: 16px;\n  font-weight: 500;\n  position: relative; }\n\n.default .notify-icon {\n  border: 2px solid #fff;\n  padding: 0 7px;\n  border-radius: 20px;\n  position: absolute;\n  top: 12px;\n  left: 0;\n  margin-top: -10px;\n  width: 27px; }\n\n.default .notify-icon-text {\n  margin-left: 40px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  text-align: left; }\n\n.default input:focus, .default button:focus {\n  outline: none; }\n\n.default .panel {\n  box-shadow: 0 0 4px rgba(40, 44, 63, 0.08); }\n\n.default .strong {\n  font-family: Whitney-semi-bold;\n  font-weight: 800; }\n\n.loading {\n  height: 100vh;\n  width: 100vw;\n  background: rgba(255, 255, 255, 0.78);\n  position: fixed;\n  left: 0px;\n  top: 85px;\n  z-index: 999; }\n  .loading .spinner {\n    height: 11px;\n    width: 43px;\n    margin: auto;\n    display: block;\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    z-index: 999; }\n\n@-webkit-keyframes pulse {\n  0% {\n    opacity: 1; }\n  16.666% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n@keyframes pulse {\n  0% {\n    opacity: 1; }\n  16.666% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\nbody {\n  background: #e4e4e5; }\n\n.triangles {\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  height: 81px;\n  width: 90px;\n  position: absolute;\n  left: 50%;\n  top: 50%; }\n\n.tri {\n  position: absolute;\n  -webkit-animation: pulse 750ms ease-in infinite;\n  animation: pulse 750ms ease-in infinite;\n  border-top: 27px solid #6FB524;\n  border-left: 15px solid transparent;\n  border-right: 15px solid transparent;\n  border-bottom: 0px; }\n\n.tri.invert {\n  border-top: 0px;\n  border-bottom: 27px solid #6FB524;\n  border-left: 15px solid transparent;\n  border-right: 15px solid transparent; }\n\n.tri:nth-child(1) {\n  left: 30px; }\n\n.tri:nth-child(2) {\n  left: 15px;\n  top: 27px;\n  -webkit-animation-delay: -125ms;\n  animation-delay: -125ms; }\n\n.tri:nth-child(3) {\n  left: 30px;\n  top: 27px; }\n\n.tri:nth-child(4) {\n  left: 45px;\n  top: 27px;\n  -webkit-animation-delay: -625ms;\n  animation-delay: -625ms; }\n\n.tri:nth-child(5) {\n  top: 54px;\n  -webkit-animation-delay: -250ms;\n  animation-delay: -250ms; }\n\n.tri:nth-child(6) {\n  top: 54px;\n  left: 15px;\n  -webkit-animation-delay: -250ms;\n  animation-delay: -250ms; }\n\n.tri:nth-child(7) {\n  top: 54px;\n  left: 30px;\n  -webkit-animation-delay: -375ms;\n  animation-delay: -375ms; }\n\n.tri:nth-child(8) {\n  top: 54px;\n  left: 45px;\n  -webkit-animation-delay: -500ms;\n  animation-delay: -500ms; }\n\n.tri:nth-child(9) {\n  top: 54px;\n  left: 60px;\n  -webkit-animation-delay: -500ms;\n  animation-delay: -500ms; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/loading-indicator/loading-indicator.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_http__ = __webpack_require__("../../../../../src/app/core/services/http.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingIndicatorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoadingIndicatorComponent = (function () {
    function LoadingIndicatorComponent(httpInterceptor) {
        this.httpInterceptor = httpInterceptor;
        this.loading$ = this.httpInterceptor.loading;
    }
    LoadingIndicatorComponent.prototype.ngOnInit = function () {
    };
    return LoadingIndicatorComponent;
}());
LoadingIndicatorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Component */])({
        selector: 'app-loading-indicator',
        template: __webpack_require__("../../../../../src/app/shared/components/loading-indicator/loading-indicator.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/components/loading-indicator/loading-indicator.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_services_http__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_services_http__["a" /* HttpService */]) === "function" && _a || Object])
], LoadingIndicatorComponent);

var _a;
//# sourceMappingURL=loading-indicator.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/components/map/map.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"map\"></div>"

/***/ }),

/***/ "../../../../../src/app/shared/components/map/map.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#map {\n  height: 500px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/map/map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MapComponent = (function () {
    function MapComponent() {
    }
    MapComponent.prototype.ngOnInit = function () {
        var directionsService = new google.maps.DirectionsService;
        var directionsDisplay = new google.maps.DirectionsRenderer;
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 7,
            center: { lat: 41.85, lng: -87.65 }
        });
        directionsDisplay.setMap(map);
        calculateAndDisplayRoute(directionsService, directionsDisplay);
        function calculateAndDisplayRoute(directionsService, directionsDisplay) {
            var waypts = [];
            var checkboxArray = [
                'winnipeg', 'regina', 'calgary'
            ];
            for (var i = 0; i < checkboxArray.length; i++) {
                waypts.push({
                    location: checkboxArray[i],
                    stopover: true
                });
            }
            directionsService.route({
                origin: { lat: 41.85, lng: -87.65 },
                destination: { lat: 49.3, lng: -123.12 },
                waypoints: waypts,
                optimizeWaypoints: true,
                travelMode: 'DRIVING'
            }, function (response, status) {
                if (status === 'OK') {
                    directionsDisplay.setDirections(response);
                }
                else {
                    window.alert('Directions request failed due to ' + status);
                }
            });
        }
    };
    return MapComponent;
}());
MapComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Component */])({
        selector: 'app-map',
        template: __webpack_require__("../../../../../src/app/shared/components/map/map.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/components/map/map.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], MapComponent);

//# sourceMappingURL=map.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/components/notification/notification.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"notify-container in\" *ngIf=\"loading.hasError\">\r\n  <div class=\"notify-error notify-content\">\r\n    <div class=\"notify-error-message\">\r\n      <span class=\"notify-icon\">!</span>\r\n      <p class=\"notify-icon-text\">\r\n        {{loading.hasMsg}}\r\n      </p>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/components/notification/notification.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/components/notification/notification.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_http__ = __webpack_require__("../../../../../src/app/core/services/http.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotificationComponent = (function () {
    function NotificationComponent(httpInterceptor) {
        var _this = this;
        this.httpInterceptor = httpInterceptor;
        this.notiSubs = this.httpInterceptor.loading.subscribe(function (data) { return _this.loading = data; });
    }
    NotificationComponent.prototype.ngOnInit = function () {
    };
    NotificationComponent.prototype.ngOnDestroy = function () {
        // this.notiSubs.unsubscribe();
    };
    return NotificationComponent;
}());
NotificationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Component */])({
        selector: 'app-notification',
        template: __webpack_require__("../../../../../src/app/shared/components/notification/notification.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/components/notification/notification.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_services_http__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_services_http__["a" /* HttpService */]) === "function" && _a || Object])
], NotificationComponent);

var _a;
//# sourceMappingURL=notification.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipes_keys_pipe__ = __webpack_require__("../../../../../src/app/shared/pipes/keys.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_pipes_humanize_pipe__ = __webpack_require__("../../../../../src/app/core/pipes/humanize.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_loading_indicator_loading_indicator_component__ = __webpack_require__("../../../../../src/app/shared/components/loading-indicator/loading-indicator.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_dropdown__ = __webpack_require__("../../../../ngx-bootstrap/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_notification_notification_component__ = __webpack_require__("../../../../../src/app/shared/components/notification/notification.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// Pipes


// components

// imports



var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            // components
            __WEBPACK_IMPORTED_MODULE_4__components_loading_indicator_loading_indicator_component__["a" /* LoadingIndicatorComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_notification_notification_component__["a" /* NotificationComponent */],
            // pipes
            __WEBPACK_IMPORTED_MODULE_2__pipes_keys_pipe__["a" /* KeysPipe */],
            __WEBPACK_IMPORTED_MODULE_3__core_pipes_humanize_pipe__["a" /* HumanizePipe */]
        ],
        exports: [
            // components
            __WEBPACK_IMPORTED_MODULE_4__components_loading_indicator_loading_indicator_component__["a" /* LoadingIndicatorComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_notification_notification_component__["a" /* NotificationComponent */],
            // modules
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["e" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* ReactiveFormsModule */],
            // pipes
            __WEBPACK_IMPORTED_MODULE_2__pipes_keys_pipe__["a" /* KeysPipe */],
            __WEBPACK_IMPORTED_MODULE_3__core_pipes_humanize_pipe__["a" /* HumanizePipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["d" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["e" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */].forRoot()
        ]
    })
], SharedModule);

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/shared/pipes/keys.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KeysPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var KeysPipe = (function () {
    function KeysPipe() {
    }
    KeysPipe.prototype.transform = function (value, args) {
        var keys = [];
        for (var key in value) {
            if (value.hasOwnProperty(key)) {
                // keys.push(key);
                keys.push({ key: key, value: value[key] });
            }
        }
        return keys;
    };
    return KeysPipe;
}());
KeysPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_11" /* Pipe */])({
        name: 'keys'
    })
], KeysPipe);

//# sourceMappingURL=keys.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/user/actions/user.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserActions; });
var UserActions = (function () {
    function UserActions() {
    }
    UserActions.prototype.getUserOrders = function () {
        return { type: UserActions.GET_USER_ORDERS };
    };
    UserActions.prototype.getUserOrdersSuccess = function (orders) {
        return { type: UserActions.GET_USER_ORDERS_SUCCESS, payload: orders };
    };
    return UserActions;
}());

UserActions.GET_USER_ORDERS = 'GET_USER_ORDERS';
UserActions.GET_USER_ORDERS_SUCCESS = 'GET_USER_ORDERS_SUCCESS';
//# sourceMappingURL=user.actions.js.map

/***/ }),

/***/ "../../../../../src/app/user/effects/user.effects.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/user/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__actions_user_actions__ = __webpack_require__("../../../../../src/app/user/actions/user.actions.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserEffects; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserEffects = (function () {
    function UserEffects(actions$, userService, userActions) {
        var _this = this;
        this.actions$ = actions$;
        this.userService = userService;
        this.userActions = userActions;
        // tslint:disable-next-line:member-ordering
        this.GetUserOrders$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_4__actions_user_actions__["a" /* UserActions */].GET_USER_ORDERS)
            .switchMap(function () { return _this.userService.getOrders(); })
            .filter(function (orders) { return orders.length > 0; })
            .map(function (orders) { return _this.userActions.getUserOrdersSuccess(orders); });
    }
    return UserEffects;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["b" /* Effect */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"]) === "function" && _a || Object)
], UserEffects.prototype, "GetUserOrders$", void 0);
UserEffects = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["c" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_effects__["c" /* Actions */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__actions_user_actions__["a" /* UserActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__actions_user_actions__["a" /* UserActions */]) === "function" && _d || Object])
], UserEffects);

var _a, _b, _c, _d;
//# sourceMappingURL=user.effects.js.map

/***/ }),

/***/ "../../../../../src/app/user/reducers/user.reducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_state__ = __webpack_require__("../../../../../src/app/user/reducers/user.state.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__actions_user_actions__ = __webpack_require__("../../../../../src/app/user/actions/user.actions.ts");
/* unused harmony export initialState */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return userReducer; });


var initialState = new __WEBPACK_IMPORTED_MODULE_0__user_state__["a" /* UserStateRecord */]();
var userReducer = function (state, _a) {
    if (state === void 0) { state = initialState; }
    var type = _a.type, payload = _a.payload;
    switch (type) {
        case __WEBPACK_IMPORTED_MODULE_1__actions_user_actions__["a" /* UserActions */].GET_USER_ORDERS_SUCCESS:
            return state.merge({ orders: payload });
        default:
            return state;
    }
};
//# sourceMappingURL=user.reducer.js.map

/***/ }),

/***/ "../../../../../src/app/user/reducers/user.state.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable__ = __webpack_require__("../../../../immutable/dist/immutable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_immutable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserStateRecord; });

var UserStateRecord = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Record"])({
    user: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["Map"])({}),
    orders: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_immutable__["List"])([])
});
//# sourceMappingURL=user.state.js.map

/***/ }),

/***/ "../../../../../src/app/user/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_services_http__ = __webpack_require__("../../../../../src/app/core/services/http.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions_user_actions__ = __webpack_require__("../../../../../src/app/user/actions/user.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = (function () {
    function UserService(http, actions, store) {
        this.http = http;
        this.actions = actions;
        this.store = store;
    }
    /**
     *
     *
     * @returns {Observable<Order[]>}
     *
     * @memberof UserService
     */
    UserService.prototype.getOrders = function () {
        return this.http.get('api/orders')
            .map(function (res) { return res.json(); });
    };
    /**
     *
     *
     * @param {any} orderNumber
     * @returns {Observable<Order>}
     *
     * @memberof UserService
     */
    UserService.prototype.getOrderDetail = function (orderNumber) {
        return this.http.get("spree/api/v1/orders/" + orderNumber)
            .map(function (res) { return res.json(); });
    };
    /**
     *
     *
     * @returns {Observable<User>}
     *
     * @memberof UserService
     */
    UserService.prototype.getUser = function () {
        var user_id = JSON.parse(localStorage.getItem('user')).id;
        return this.http.get("spree/api/v1/users/" + user_id)
            .map(function (res) { return res.json(); });
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__core_services_http__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__core_services_http__["a" /* HttpService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__actions_user_actions__["a" /* UserActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__actions_user_actions__["a" /* UserActions */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ngrx_store__["b" /* Store */]) === "function" && _c || Object])
], UserService);

var _a, _b, _c;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/assets/search-sprite.d5ab50f1b815dfaf3976c6ce2e19d24670e5ba0b.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "search-sprite.d5ab50f1b815dfaf3976c6ce2e19d24670e5ba0b.306b025b18bf226581d1.png";

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
    production: false,
    // API_ENDPOINT: 'http://localhost:3000/',
    API_ENDPOINT: 'https://angularspree-new.herokuapp.com/',
    AppName: 'Dentca'
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map