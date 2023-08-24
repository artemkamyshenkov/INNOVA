"use strict";
(self["webpackChunkinnova_ipr"] = self["webpackChunkinnova_ipr"] || []).push([["src_screens_LoginPage_ui_LoginPage_tsx"],{

/***/ "./src/features/LoginForm/ui/LoginForm.tsx":
/*!*************************************************!*\
  !*** ./src/features/LoginForm/ui/LoginForm.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginForm: () => (/* binding */ LoginForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-grid-system */ "./node_modules/react-grid-system/build/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/icons/LoadingOutlined.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/space/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/button/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/spin/index.js");
/* harmony import */ var _shared_api_authService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/shared/api/authService */ "./src/shared/api/authService.ts");
/* harmony import */ var _shared_helpers_firebaseError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/shared/helpers/firebaseError */ "./src/shared/helpers/firebaseError.ts");
/* harmony import */ var _shared_hooks_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/shared/hooks/redux */ "./src/shared/hooks/redux.ts");
/* harmony import */ var _shared_ui_Input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/shared/ui/Input */ "./src/shared/ui/Input/index.ts");
/* harmony import */ var _shared_ui_ServiceIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/shared/ui/ServiceIcon */ "./src/shared/ui/ServiceIcon/index.ts");
/* harmony import */ var _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./LoginForm.module.scss */ "./src/features/LoginForm/ui/LoginForm.module.scss");
/* harmony import */ var _entities_User__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/entities/User */ "./src/entities/User/index.ts");
/* harmony import */ var _shared_api_userService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/shared/api/userService */ "./src/shared/api/userService.ts");
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};
var __generator = undefined && undefined.__generator || function (thisArg, body) {
  var _ = {
      label: 0,
      sent: function sent() {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    },
    f,
    y,
    t,
    g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;
  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return {
            value: op[1],
            done: false
          };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};














var LoginForm = function LoginForm() {
  var _a, _b;
  var _c = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_10__.useForm)({
      mode: 'onBlur'
    }),
    register = _c.register,
    handleSubmit = _c.handleSubmit,
    formError = _c.formState.errors;
  var _d = (0,_shared_api_authService__WEBPACK_IMPORTED_MODULE_2__.useLoginUserMutation)(),
    loginByUsername = _d[0],
    _e = _d[1],
    isLoading = _e.isLoading,
    error = _e.error;
  var dispatch = (0,_shared_hooks_redux__WEBPACK_IMPORTED_MODULE_4__.useAppDispatch)();
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_11__.useNavigate)();
  var onSubmit = function onSubmit(_a) {
    var email = _a.email,
      password = _a.password;
    return __awaiter(void 0, void 0, void 0, function () {
      var user, currentUser, err_1;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            _b.trys.push([0, 3,, 4]);
            return [4 /*yield*/, loginByUsername({
              email: email,
              password: password,
              returnSecureToken: true
            }).unwrap()];
          case 1:
            user = _b.sent();
            dispatch(_entities_User__WEBPACK_IMPORTED_MODULE_8__.userActions.setAuthData({
              id: user.localId,
              email: user.email
            }));
            return [4 /*yield*/, _shared_api_userService__WEBPACK_IMPORTED_MODULE_9__.userService.getCurrentUser(user.localId)];
          case 2:
            currentUser = _b.sent();
            dispatch(_entities_User__WEBPACK_IMPORTED_MODULE_8__.userActions.setCurrentUser(currentUser));
            navigate('/', {
              replace: true
            });
            return [3 /*break*/, 4];
          case 3:
            err_1 = _b.sent();
            console.error(err_1);
            return [3 /*break*/, 4];
          case 4:
            return [2 /*return*/];
        }
      });
    });
  };

  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_grid_system__WEBPACK_IMPORTED_MODULE_1__.Row, {
      align: "center",
      justify: "center",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_grid_system__WEBPACK_IMPORTED_MODULE_1__.Col, {
        xl: 4,
        className: _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].iconContainer,
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_ui_ServiceIcon__WEBPACK_IMPORTED_MODULE_6__.ServiceIcon, {
          name: "telegram"
        })
      })
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_grid_system__WEBPACK_IMPORTED_MODULE_1__.Row, {
      align: "center",
      justify: "center",
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_grid_system__WEBPACK_IMPORTED_MODULE_1__.Col, {
        xl: 4,
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
          name: "loginForm",
          onSubmit: handleSubmit(onSubmit),
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_ui_Input__WEBPACK_IMPORTED_MODULE_5__.Input, {
            label: "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430\u044F \u043F\u043E\u0447\u0442\u0430",
            id: "email",
            type: "email",
            fieldName: "email",
            register: register,
            rules: {
              required: 'Поле обязательно к заполнению'
            },
            error: (_a = formError === null || formError === void 0 ? void 0 : formError.email) === null || _a === void 0 ? void 0 : _a.message
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_ui_Input__WEBPACK_IMPORTED_MODULE_5__.Input, {
            label: "\u041F\u0430\u0440\u043E\u043B\u044C",
            id: "password",
            register: register,
            type: "password",
            fieldName: "password",
            rules: {
              required: 'Поле обязательно к заполнению',
              minLength: {
                value: 6,
                message: 'Минимум 6 символов'
              }
            },
            error: (_b = formError === null || formError === void 0 ? void 0 : formError.password) === null || _b === void 0 ? void 0 : _b.message
          }), error && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
            className: _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].error,
            children: (0,_shared_helpers_firebaseError__WEBPACK_IMPORTED_MODULE_3__.firebaseError)(error)
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_12__["default"], {
            direction: "vertical",
            className: _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].buttonsContainer,
            children: [isLoading ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_13__["default"], {
              type: "primary",
              className: _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].signinButton,
              disabled: true,
              children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_14__["default"], {
                indicator: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_15__["default"], {
                  className: _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].spin
                })
              })
            }) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_13__["default"], {
              type: "primary",
              htmlType: "submit",
              className: _LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_7__["default"].signinButton,
              children: "\u0412\u043E\u0439\u0442\u0438"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.Link, {
              to: "/register",
              children: "\u0415\u0449\u0435 \u043D\u0435\u0442 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430? \u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F"
            })]
          })]
        })
      })
    })]
  });
};

/***/ }),

/***/ "./src/screens/LoginPage/ui/LoginPage.tsx":
/*!************************************************!*\
  !*** ./src/screens/LoginPage/ui/LoginPage.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-grid-system */ "./node_modules/react-grid-system/build/index.js");
/* harmony import */ var _features_LoginForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/features/LoginForm */ "./src/features/LoginForm/index.ts");
/* harmony import */ var _LoginPage_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LoginPage.module.scss */ "./src/screens/LoginPage/ui/LoginPage.module.scss");




var LoginPage = function LoginPage() {
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_grid_system__WEBPACK_IMPORTED_MODULE_1__.Container, {
    className: _LoginPage_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].formContainer,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_features_LoginForm__WEBPACK_IMPORTED_MODULE_2__.LoginForm, {})
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LoginPage);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/features/LoginForm/ui/LoginForm.module.scss":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/features/LoginForm/ui/LoginForm.module.scss ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.src-features-LoginForm-ui-LoginForm-module__buttonsContainer--D0M1x {
  display: flex;
  justify-content: center;
  align-items: center;
}

.src-features-LoginForm-ui-LoginForm-module__signinButton--JqFNG {
  padding: 0 4rem;
}

.src-features-LoginForm-ui-LoginForm-module__iconContainer--BH6YO {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
}

.src-features-LoginForm-ui-LoginForm-module__spin--JL0_e {
  color: #fff;
}

.src-features-LoginForm-ui-LoginForm-module__error--MF2ww {
  color: var(--red-light);
  margin-bottom: 1rem;
  text-align: center;
}`, "",{"version":3,"sources":["webpack://./src/features/LoginForm/ui/LoginForm.module.scss","webpack://./src/app/styles/mixins.scss"],"names":[],"mappings":"AAEA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;AADF;;AAIA;EACE,eAAA;AADF;;AAIA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,mBAAA;AADF;;AAIA;EACE,WAAA;AADF;;AAIA;ECtBE,uBAAA;EACA,mBAAA;EACA,kBAAA;ADsBF","sourcesContent":["@import '../../../app/styles/mixins.scss';\r\n\r\n.buttonsContainer {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.signinButton {\r\n  padding: 0 4rem;\r\n}\r\n\r\n.iconContainer {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.spin {\r\n  color: #fff;\r\n}\r\n\r\n.error {\r\n  @include errorMessage;\r\n}\r\n","@mixin errorMessage {\n  color: var(--red-light);\n  margin-bottom: 1rem;\n  text-align: center;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"buttonsContainer": `src-features-LoginForm-ui-LoginForm-module__buttonsContainer--D0M1x`,
	"signinButton": `src-features-LoginForm-ui-LoginForm-module__signinButton--JqFNG`,
	"iconContainer": `src-features-LoginForm-ui-LoginForm-module__iconContainer--BH6YO`,
	"spin": `src-features-LoginForm-ui-LoginForm-module__spin--JL0_e`,
	"error": `src-features-LoginForm-ui-LoginForm-module__error--MF2ww`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/screens/LoginPage/ui/LoginPage.module.scss":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/screens/LoginPage/ui/LoginPage.module.scss ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.src-screens-LoginPage-ui-LoginPage-module__formContainer--pGhhn {
  padding: 4rem 0;
}`, "",{"version":3,"sources":["webpack://./src/screens/LoginPage/ui/LoginPage.module.scss"],"names":[],"mappings":"AAAA;EACE,eAAA;AACF","sourcesContent":[".formContainer {\n  padding: 4rem 0;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"formContainer": `src-screens-LoginPage-ui-LoginPage-module__formContainer--pGhhn`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/features/LoginForm/ui/LoginForm.module.scss":
/*!*********************************************************!*\
  !*** ./src/features/LoginForm/ui/LoginForm.module.scss ***!
  \*********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./LoginForm.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/features/LoginForm/ui/LoginForm.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }
  var p;
  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (a[p] !== b[p]) {
      return false;
    }
  }
  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (!a[p]) {
      return false;
    }
  }
  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./LoginForm.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/features/LoginForm/ui/LoginForm.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./LoginForm.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/features/LoginForm/ui/LoginForm.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_LoginForm_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/screens/LoginPage/ui/LoginPage.module.scss":
/*!********************************************************!*\
  !*** ./src/screens/LoginPage/ui/LoginPage.module.scss ***!
  \********************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_LoginPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./LoginPage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/screens/LoginPage/ui/LoginPage.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_LoginPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_LoginPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {
  if (!a && b || a && !b) {
    return false;
  }
  var p;
  for (p in a) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (a[p] !== b[p]) {
      return false;
    }
  }
  for (p in b) {
    if (isNamedExport && p === "default") {
      // eslint-disable-next-line no-continue
      continue;
    }
    if (!a[p]) {
      return false;
    }
  }
  return true;
};
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_LoginPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_LoginPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_LoginPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./LoginPage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/screens/LoginPage/ui/LoginPage.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_LoginPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./LoginPage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/screens/LoginPage/ui/LoginPage.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_LoginPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_LoginPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_LoginPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_LoginPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_LoginPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_LoginPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_LoginPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_LoginPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/features/LoginForm/index.ts":
/*!*****************************************!*\
  !*** ./src/features/LoginForm/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginForm: () => (/* reexport safe */ _ui_LoginForm__WEBPACK_IMPORTED_MODULE_0__.LoginForm)
/* harmony export */ });
/* harmony import */ var _ui_LoginForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/LoginForm */ "./src/features/LoginForm/ui/LoginForm.tsx");



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3NjcmVlbnNfTG9naW5QYWdlX3VpX0xvZ2luUGFnZV90c3guYWJiMjVkODU0Zjg3NGRiZTRiZmYuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsU0FBUyxHQUFJLFNBQUksSUFBSSxTQUFJLENBQUNBLFNBQVMsSUFBSyxVQUFVQyxPQUFPLEVBQUVDLFVBQVUsRUFBRUMsQ0FBQyxFQUFFQyxTQUFTLEVBQUU7RUFDckYsU0FBU0MsS0FBS0EsQ0FBQ0MsS0FBSyxFQUFFO0lBQUUsT0FBT0EsS0FBSyxZQUFZSCxDQUFDLEdBQUdHLEtBQUssR0FBRyxJQUFJSCxDQUFDLENBQUMsVUFBVUksT0FBTyxFQUFFO01BQUVBLE9BQU8sQ0FBQ0QsS0FBSyxDQUFDO0lBQUUsQ0FBQyxDQUFDO0VBQUU7RUFDM0csT0FBTyxLQUFLSCxDQUFDLEtBQUtBLENBQUMsR0FBR0ssT0FBTyxDQUFDLEVBQUUsVUFBVUQsT0FBTyxFQUFFRSxNQUFNLEVBQUU7SUFDdkQsU0FBU0MsU0FBU0EsQ0FBQ0osS0FBSyxFQUFFO01BQUUsSUFBSTtRQUFFSyxJQUFJLENBQUNQLFNBQVMsQ0FBQ1EsSUFBSSxDQUFDTixLQUFLLENBQUMsQ0FBQztNQUFFLENBQUMsQ0FBQyxPQUFPTyxDQUFDLEVBQUU7UUFBRUosTUFBTSxDQUFDSSxDQUFDLENBQUM7TUFBRTtJQUFFO0lBQzFGLFNBQVNDLFFBQVFBLENBQUNSLEtBQUssRUFBRTtNQUFFLElBQUk7UUFBRUssSUFBSSxDQUFDUCxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUNFLEtBQUssQ0FBQyxDQUFDO01BQUUsQ0FBQyxDQUFDLE9BQU9PLENBQUMsRUFBRTtRQUFFSixNQUFNLENBQUNJLENBQUMsQ0FBQztNQUFFO0lBQUU7SUFDN0YsU0FBU0YsSUFBSUEsQ0FBQ0ksTUFBTSxFQUFFO01BQUVBLE1BQU0sQ0FBQ0MsSUFBSSxHQUFHVCxPQUFPLENBQUNRLE1BQU0sQ0FBQ1QsS0FBSyxDQUFDLEdBQUdE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VyxHQUFHLHVNQUFPO0FBQzNFLGdCQUFnQixVQUFVOztBQUUxQjtBQUNBOztBQUVBLDBDQUEwQyw0TEFBVyxHQUFHLHVNQUFPOztBQUUvRCxxQkFBcUIsdU1BQU87QUFDNUIsT0FBTztBQUNQO0FBQ0E7O0FBRUEsRUFBRSxVQUFVO0FBQ1o7QUFDQSxHQUFHO0FBQ0g7OztBQUcyTjtBQUMzTixPQUFPLGlFQUFlLHVNQUFPLElBQUksdU1BQU8sVUFBVSx1TUFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQzdFbEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbm5vdmEtaXByLy4vc3JjL2ZlYXR1cmVzL0xvZ2luRm9ybS91aS9Mb2dpbkZvcm0udHN4Iiwid2VicGFjazovL2lubm92YS1pcHIvLi9zcmMvc2NyZWVucy9Mb2dpblBhZ2UvdWkvTG9naW5QYWdlLnRzeCIsIndlYnBhY2s6Ly9pbm5vdmEtaXByLy4vc3JjL2ZlYXR1cmVzL0xvZ2luRm9ybS91aS9Mb2dpbkZvcm0ubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vaW5ub3ZhLWlwci8uL3NyYy9zY3JlZW5zL0xvZ2luUGFnZS91aS9Mb2dpblBhZ2UubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vaW5ub3ZhLWlwci8uL3NyYy9mZWF0dXJlcy9Mb2dpbkZvcm0vdWkvTG9naW5Gb3JtLm1vZHVsZS5zY3NzP2E5MjgiLCJ3ZWJwYWNrOi8vaW5ub3ZhLWlwci8uL3NyYy9zY3JlZW5zL0xvZ2luUGFnZS91aS9Mb2dpblBhZ2UubW9kdWxlLnNjc3M/N2U2MyIsIndlYnBhY2s6Ly9pbm5vdmEtaXByLy4vc3JjL2ZlYXR1cmVzL0xvZ2luRm9ybS9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKGcgJiYgKGcgPSAwLCBvcFswXSAmJiAoXyA9IDApKSwgXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwganN4cyBhcyBfanN4cywgRnJhZ21lbnQgYXMgX0ZyYWdtZW50IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyBDb2wsIFJvdyB9IGZyb20gJ3JlYWN0LWdyaWQtc3lzdGVtJztcbmltcG9ydCB7IExvYWRpbmdPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xuaW1wb3J0IHsgTGluaywgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IEJ1dHRvbiwgU3BhY2UsIFNwaW4gfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IHVzZUxvZ2luVXNlck11dGF0aW9uIH0gZnJvbSAnQC9zaGFyZWQvYXBpL2F1dGhTZXJ2aWNlJztcbmltcG9ydCB7IGZpcmViYXNlRXJyb3IgfSBmcm9tICdAL3NoYXJlZC9oZWxwZXJzL2ZpcmViYXNlRXJyb3InO1xuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2ggfSBmcm9tICdAL3NoYXJlZC9ob29rcy9yZWR1eCc7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJ0Avc2hhcmVkL3VpL0lucHV0JztcbmltcG9ydCB7IFNlcnZpY2VJY29uIH0gZnJvbSAnQC9zaGFyZWQvdWkvU2VydmljZUljb24nO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0xvZ2luRm9ybS5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgeyB1c2VyQWN0aW9ucyB9IGZyb20gJ0AvZW50aXRpZXMvVXNlcic7XG5pbXBvcnQgeyB1c2VyU2VydmljZSB9IGZyb20gJ0Avc2hhcmVkL2FwaS91c2VyU2VydmljZSc7XG5leHBvcnQgdmFyIExvZ2luRm9ybSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX2EsIF9iO1xuICAgIHZhciBfYyA9IHVzZUZvcm0oeyBtb2RlOiAnb25CbHVyJyB9KSwgcmVnaXN0ZXIgPSBfYy5yZWdpc3RlciwgaGFuZGxlU3VibWl0ID0gX2MuaGFuZGxlU3VibWl0LCBmb3JtRXJyb3IgPSBfYy5mb3JtU3RhdGUuZXJyb3JzO1xuICAgIHZhciBfZCA9IHVzZUxvZ2luVXNlck11dGF0aW9uKCksIGxvZ2luQnlVc2VybmFtZSA9IF9kWzBdLCBfZSA9IF9kWzFdLCBpc0xvYWRpbmcgPSBfZS5pc0xvYWRpbmcsIGVycm9yID0gX2UuZXJyb3I7XG4gICAgdmFyIGRpc3BhdGNoID0gdXNlQXBwRGlzcGF0Y2goKTtcbiAgICB2YXIgbmF2aWdhdGUgPSB1c2VOYXZpZ2F0ZSgpO1xuICAgIHZhciBvblN1Ym1pdCA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgZW1haWwgPSBfYS5lbWFpbCwgcGFzc3dvcmQgPSBfYS5wYXNzd29yZDtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdXNlciwgY3VycmVudFVzZXIsIGVycl8xO1xuICAgICAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYikge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoX2IubGFiZWwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgICAgICAgICAgX2IudHJ5cy5wdXNoKFswLCAzLCAsIDRdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIGxvZ2luQnlVc2VybmFtZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOiBlbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5TZWN1cmVUb2tlbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KS51bndyYXAoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXIgPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwYXRjaCh1c2VyQWN0aW9ucy5zZXRBdXRoRGF0YSh7IGlkOiB1c2VyLmxvY2FsSWQsIGVtYWlsOiB1c2VyLmVtYWlsIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbNCAvKnlpZWxkKi8sIHVzZXJTZXJ2aWNlLmdldEN1cnJlbnRVc2VyKHVzZXIubG9jYWxJZCldO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50VXNlciA9IF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BhdGNoKHVzZXJBY3Rpb25zLnNldEN1cnJlbnRVc2VyKGN1cnJlbnRVc2VyKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYXZpZ2F0ZSgnLycsIHsgcmVwbGFjZTogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJfMSA9IF9iLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyXzEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgNDogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiAoX2pzeHMoX0ZyYWdtZW50LCB7IGNoaWxkcmVuOiBbX2pzeChSb3csIHsgYWxpZ246IFwiY2VudGVyXCIsIGp1c3RpZnk6IFwiY2VudGVyXCIsIGNoaWxkcmVuOiBfanN4KENvbCwgeyB4bDogNCwgY2xhc3NOYW1lOiBzdHlsZXMuaWNvbkNvbnRhaW5lciwgY2hpbGRyZW46IF9qc3goU2VydmljZUljb24sIHsgbmFtZTogXCJ0ZWxlZ3JhbVwiIH0pIH0pIH0pLCBfanN4KFJvdywgeyBhbGlnbjogXCJjZW50ZXJcIiwganVzdGlmeTogXCJjZW50ZXJcIiwgY2hpbGRyZW46IF9qc3goQ29sLCB7IHhsOiA0LCBjaGlsZHJlbjogX2pzeHMoXCJmb3JtXCIsIHsgbmFtZTogXCJsb2dpbkZvcm1cIiwgb25TdWJtaXQ6IGhhbmRsZVN1Ym1pdChvblN1Ym1pdCksIGNoaWxkcmVuOiBbX2pzeChJbnB1dCwgeyBsYWJlbDogXCJcXHUwNDJEXFx1MDQzQlxcdTA0MzVcXHUwNDNBXFx1MDQ0MlxcdTA0NDBcXHUwNDNFXFx1MDQzRFxcdTA0M0RcXHUwNDMwXFx1MDQ0RiBcXHUwNDNGXFx1MDQzRVxcdTA0NDdcXHUwNDQyXFx1MDQzMFwiLCBpZDogXCJlbWFpbFwiLCB0eXBlOiBcImVtYWlsXCIsIGZpZWxkTmFtZTogXCJlbWFpbFwiLCByZWdpc3RlcjogcmVnaXN0ZXIsIHJ1bGVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogJ9Cf0L7Qu9C1INC+0LHRj9C30LDRgtC10LvRjNC90L4g0Log0LfQsNC/0L7Qu9C90LXQvdC40Y4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBlcnJvcjogKF9hID0gZm9ybUVycm9yID09PSBudWxsIHx8IGZvcm1FcnJvciA9PT0gdm9pZCAwID8gdm9pZCAwIDogZm9ybUVycm9yLmVtYWlsKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EubWVzc2FnZSB9KSwgX2pzeChJbnB1dCwgeyBsYWJlbDogXCJcXHUwNDFGXFx1MDQzMFxcdTA0NDBcXHUwNDNFXFx1MDQzQlxcdTA0NENcIiwgaWQ6IFwicGFzc3dvcmRcIiwgcmVnaXN0ZXI6IHJlZ2lzdGVyLCB0eXBlOiBcInBhc3N3b3JkXCIsIGZpZWxkTmFtZTogXCJwYXNzd29yZFwiLCBydWxlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6ICfQn9C+0LvQtSDQvtCx0Y/Qt9Cw0YLQtdC70YzQvdC+INC6INC30LDQv9C+0LvQvdC10L3QuNGOJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbkxlbmd0aDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiA2LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICfQnNC40L3QuNC80YPQvCA2INGB0LjQvNCy0L7Qu9C+0LInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgZXJyb3I6IChfYiA9IGZvcm1FcnJvciA9PT0gbnVsbCB8fCBmb3JtRXJyb3IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGZvcm1FcnJvci5wYXNzd29yZCkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLm1lc3NhZ2UgfSksIGVycm9yICYmIChfanN4KFwicFwiLCB7IGNsYXNzTmFtZTogc3R5bGVzLmVycm9yLCBjaGlsZHJlbjogZmlyZWJhc2VFcnJvcihlcnJvcikgfSkpLCBfanN4cyhTcGFjZSwgeyBkaXJlY3Rpb246IFwidmVydGljYWxcIiwgY2xhc3NOYW1lOiBzdHlsZXMuYnV0dG9uc0NvbnRhaW5lciwgY2hpbGRyZW46IFtpc0xvYWRpbmcgPyAoX2pzeChCdXR0b24sIHsgdHlwZTogXCJwcmltYXJ5XCIsIGNsYXNzTmFtZTogc3R5bGVzLnNpZ25pbkJ1dHRvbiwgZGlzYWJsZWQ6IHRydWUsIGNoaWxkcmVuOiBfanN4KFNwaW4sIHsgaW5kaWNhdG9yOiBfanN4KExvYWRpbmdPdXRsaW5lZCwgeyBjbGFzc05hbWU6IHN0eWxlcy5zcGluIH0pIH0pIH0pKSA6IChfanN4KEJ1dHRvbiwgeyB0eXBlOiBcInByaW1hcnlcIiwgaHRtbFR5cGU6IFwic3VibWl0XCIsIGNsYXNzTmFtZTogc3R5bGVzLnNpZ25pbkJ1dHRvbiwgY2hpbGRyZW46IFwiXFx1MDQxMlxcdTA0M0VcXHUwNDM5XFx1MDQ0MlxcdTA0MzhcIiB9KSksIF9qc3goTGluaywgeyB0bzogXCIvcmVnaXN0ZXJcIiwgY2hpbGRyZW46IFwiXFx1MDQxNVxcdTA0NDlcXHUwNDM1IFxcdTA0M0RcXHUwNDM1XFx1MDQ0MiBcXHUwNDMwXFx1MDQzQVxcdTA0M0FcXHUwNDMwXFx1MDQ0M1xcdTA0M0RcXHUwNDQyXFx1MDQzMD8gXFx1MDQxN1xcdTA0MzBcXHUwNDQwXFx1MDQzNVxcdTA0MzNcXHUwNDM4XFx1MDQ0MVxcdTA0NDJcXHUwNDQwXFx1MDQzOFxcdTA0NDBcXHUwNDNFXFx1MDQzMlxcdTA0MzBcXHUwNDQyXFx1MDQ0Q1xcdTA0NDFcXHUwNDRGXCIgfSldIH0pXSB9KSB9KSB9KV0gfSkpO1xufTtcbiIsImltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICdyZWFjdC1ncmlkLXN5c3RlbSc7XG5pbXBvcnQgeyBMb2dpbkZvcm0gfSBmcm9tICdAL2ZlYXR1cmVzL0xvZ2luRm9ybSc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vTG9naW5QYWdlLm1vZHVsZS5zY3NzJztcbnZhciBMb2dpblBhZ2UgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAoX2pzeChDb250YWluZXIsIHsgY2xhc3NOYW1lOiBzdHlsZXMuZm9ybUNvbnRhaW5lciwgY2hpbGRyZW46IF9qc3goTG9naW5Gb3JtLCB7fSkgfSkpOyB9O1xuZXhwb3J0IGRlZmF1bHQgTG9naW5QYWdlO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5zcmMtZmVhdHVyZXMtTG9naW5Gb3JtLXVpLUxvZ2luRm9ybS1tb2R1bGVfX2J1dHRvbnNDb250YWluZXItLUQwTTF4IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zcmMtZmVhdHVyZXMtTG9naW5Gb3JtLXVpLUxvZ2luRm9ybS1tb2R1bGVfX3NpZ25pbkJ1dHRvbi0tSnFGTkcge1xuICBwYWRkaW5nOiAwIDRyZW07XG59XG5cbi5zcmMtZmVhdHVyZXMtTG9naW5Gb3JtLXVpLUxvZ2luRm9ybS1tb2R1bGVfX2ljb25Db250YWluZXItLUJINllPIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5zcmMtZmVhdHVyZXMtTG9naW5Gb3JtLXVpLUxvZ2luRm9ybS1tb2R1bGVfX3NwaW4tLUpMMF9lIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5zcmMtZmVhdHVyZXMtTG9naW5Gb3JtLXVpLUxvZ2luRm9ybS1tb2R1bGVfX2Vycm9yLS1NRjJ3dyB7XG4gIGNvbG9yOiB2YXIoLS1yZWQtbGlnaHQpO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvZmVhdHVyZXMvTG9naW5Gb3JtL3VpL0xvZ2luRm9ybS5tb2R1bGUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2FwcC9zdHlsZXMvbWl4aW5zLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQURGOztBQUlBO0VBQ0UsZUFBQTtBQURGOztBQUlBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQURGOztBQUlBO0VBQ0UsV0FBQTtBQURGOztBQUlBO0VDdEJFLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBRHNCRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0ICcuLi8uLi8uLi9hcHAvc3R5bGVzL21peGlucy5zY3NzJztcXHJcXG5cXHJcXG4uYnV0dG9uc0NvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbmluQnV0dG9uIHtcXHJcXG4gIHBhZGRpbmc6IDAgNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmljb25Db250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5zcGluIHtcXHJcXG4gIGNvbG9yOiAjZmZmO1xcclxcbn1cXHJcXG5cXHJcXG4uZXJyb3Ige1xcclxcbiAgQGluY2x1ZGUgZXJyb3JNZXNzYWdlO1xcclxcbn1cXHJcXG5cIixcIkBtaXhpbiBlcnJvck1lc3NhZ2Uge1xcbiAgY29sb3I6IHZhcigtLXJlZC1saWdodCk7XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJidXR0b25zQ29udGFpbmVyXCI6IGBzcmMtZmVhdHVyZXMtTG9naW5Gb3JtLXVpLUxvZ2luRm9ybS1tb2R1bGVfX2J1dHRvbnNDb250YWluZXItLUQwTTF4YCxcblx0XCJzaWduaW5CdXR0b25cIjogYHNyYy1mZWF0dXJlcy1Mb2dpbkZvcm0tdWktTG9naW5Gb3JtLW1vZHVsZV9fc2lnbmluQnV0dG9uLS1KcUZOR2AsXG5cdFwiaWNvbkNvbnRhaW5lclwiOiBgc3JjLWZlYXR1cmVzLUxvZ2luRm9ybS11aS1Mb2dpbkZvcm0tbW9kdWxlX19pY29uQ29udGFpbmVyLS1CSDZZT2AsXG5cdFwic3BpblwiOiBgc3JjLWZlYXR1cmVzLUxvZ2luRm9ybS11aS1Mb2dpbkZvcm0tbW9kdWxlX19zcGluLS1KTDBfZWAsXG5cdFwiZXJyb3JcIjogYHNyYy1mZWF0dXJlcy1Mb2dpbkZvcm0tdWktTG9naW5Gb3JtLW1vZHVsZV9fZXJyb3ItLU1GMnd3YFxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC5zcmMtc2NyZWVucy1Mb2dpblBhZ2UtdWktTG9naW5QYWdlLW1vZHVsZV9fZm9ybUNvbnRhaW5lci0tcEdoaG4ge1xuICBwYWRkaW5nOiA0cmVtIDA7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc2NyZWVucy9Mb2dpblBhZ2UvdWkvTG9naW5QYWdlLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZUFBQTtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5mb3JtQ29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDRyZW0gMDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwiZm9ybUNvbnRhaW5lclwiOiBgc3JjLXNjcmVlbnMtTG9naW5QYWdlLXVpLUxvZ2luUGFnZS1tb2R1bGVfX2Zvcm1Db250YWluZXItLXBHaGhuYFxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0xvZ2luRm9ybS5tb2R1bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHA7XG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIGlzTmFtZWRFeHBvcnQgPSAhY29udGVudC5sb2NhbHM7XG4gICAgdmFyIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9Mb2dpbkZvcm0ubW9kdWxlLnNjc3NcIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCFpc0VxdWFsTG9jYWxzKG9sZExvY2FscywgaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHMsIGlzTmFtZWRFeHBvcnQpKSB7XG4gICAgICAgICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgICAgICAgICAgICB1cGRhdGUoY29udGVudCk7XG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkge1xuICAgIHVwZGF0ZSgpO1xuICB9KTtcbn1cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL0xvZ2luRm9ybS5tb2R1bGUuc2Nzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9Mb2dpblBhZ2UubW9kdWxlLnNjc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgaWYgKCFjb250ZW50LmxvY2FscyB8fCBtb2R1bGUuaG90LmludmFsaWRhdGUpIHtcbiAgICB2YXIgaXNFcXVhbExvY2FscyA9IGZ1bmN0aW9uIGlzRXF1YWxMb2NhbHMoYSwgYiwgaXNOYW1lZEV4cG9ydCkge1xuICBpZiAoIWEgJiYgYiB8fCBhICYmICFiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBwO1xuICBmb3IgKHAgaW4gYSkge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoYVtwXSAhPT0gYltwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICBmb3IgKHAgaW4gYikge1xuICAgIGlmIChpc05hbWVkRXhwb3J0ICYmIHAgPT09IFwiZGVmYXVsdFwiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAoIWFbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuICAgIHZhciBpc05hbWVkRXhwb3J0ID0gIWNvbnRlbnQubG9jYWxzO1xuICAgIHZhciBvbGRMb2NhbHMgPSBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscztcblxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFxuICAgICAgXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vTG9naW5QYWdlLm1vZHVsZS5zY3NzXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghaXNFcXVhbExvY2FscyhvbGRMb2NhbHMsIGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzLCBpc05hbWVkRXhwb3J0KSkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICAgICAgICAgICAgdXBkYXRlKGNvbnRlbnQpO1xuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHtcbiAgICB1cGRhdGUoKTtcbiAgfSk7XG59XG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9Mb2dpblBhZ2UubW9kdWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJleHBvcnQgeyBMb2dpbkZvcm0gfSBmcm9tICcuL3VpL0xvZ2luRm9ybSc7XG4iXSwibmFtZXMiOlsiX19hd2FpdGVyIiwidGhpc0FyZyIsIl9hcmd1bWVudHMiLCJQIiwiZ2VuZXJhdG9yIiwiYWRvcHQiLCJ2YWx1ZSIsInJlc29sdmUiLCJQcm9taXNlIiwicmVqZWN0IiwiZnVsZmlsbGVkIiwic3RlcCIsIm5leHQiLCJlIiwicmVqZWN0ZWQiLCJyZXN1bHQiLCJkb25lIiwidGhlbiIsImFwcGx5IiwiX19nZW5lcmF0b3IiLCJib2R5IiwiXyIsImxhYmVsIiwic2VudCIsInQiLCJ0cnlzIiwib3BzIiwiZiIsInkiLCJnIiwidmVyYiIsIlN5bWJvbCIsIml0ZXJhdG9yIiwibiIsInYiLCJvcCIsIlR5cGVFcnJvciIsImNhbGwiLCJwb3AiLCJsZW5ndGgiLCJwdXNoIiwianN4IiwiX2pzeCIsImpzeHMiLCJfanN4cyIsIkZyYWdtZW50IiwiX0ZyYWdtZW50IiwiQ29sIiwiUm93IiwiTG9hZGluZ091dGxpbmVkIiwidXNlRm9ybSIsIkxpbmsiLCJ1c2VOYXZpZ2F0ZSIsIkJ1dHRvbiIsIlNwYWNlIiwiU3BpbiIsInVzZUxvZ2luVXNlck11dGF0aW9uIiwiZmlyZWJhc2VFcnJvciIsInVzZUFwcERpc3BhdGNoIiwiSW5wdXQiLCJTZXJ2aWNlSWNvbiIsInN0eWxlcyIsInVzZXJBY3Rpb25zIiwidXNlclNlcnZpY2UiLCJMb2dpbkZvcm0iLCJfYSIsIl9iIiwiX2MiLCJtb2RlIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJmb3JtRXJyb3IiLCJmb3JtU3RhdGUiLCJlcnJvcnMiLCJfZCIsImxvZ2luQnlVc2VybmFtZSIsIl9lIiwiaXNMb2FkaW5nIiwiZXJyb3IiLCJkaXNwYXRjaCIsIm5hdmlnYXRlIiwib25TdWJtaXQiLCJlbWFpbCIsInBhc3N3b3JkIiwidXNlciIsImN1cnJlbnRVc2VyIiwiZXJyXzEiLCJyZXR1cm5TZWN1cmVUb2tlbiIsInVud3JhcCIsInNldEF1dGhEYXRhIiwiaWQiLCJsb2NhbElkIiwiZ2V0Q3VycmVudFVzZXIiLCJzZXRDdXJyZW50VXNlciIsInJlcGxhY2UiLCJjb25zb2xlIiwiY2hpbGRyZW4iLCJhbGlnbiIsImp1c3RpZnkiLCJ4bCIsImNsYXNzTmFtZSIsImljb25Db250YWluZXIiLCJuYW1lIiwidHlwZSIsImZpZWxkTmFtZSIsInJ1bGVzIiwicmVxdWlyZWQiLCJtZXNzYWdlIiwibWluTGVuZ3RoIiwiZGlyZWN0aW9uIiwiYnV0dG9uc0NvbnRhaW5lciIsInNpZ25pbkJ1dHRvbiIsImRpc2FibGVkIiwiaW5kaWNhdG9yIiwic3BpbiIsImh0bWxUeXBlIiwidG8iLCJDb250YWluZXIiLCJMb2dpblBhZ2UiLCJmb3JtQ29udGFpbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==