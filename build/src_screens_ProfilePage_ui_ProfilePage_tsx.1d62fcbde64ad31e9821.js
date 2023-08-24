"use strict";
(self["webpackChunkinnova_ipr"] = self["webpackChunkinnova_ipr"] || []).push([["src_screens_ProfilePage_ui_ProfilePage_tsx"],{

/***/ "./src/screens/ProfilePage/ui/ProfilePage.tsx":
/*!****************************************************!*\
  !*** ./src/screens/ProfilePage/ui/ProfilePage.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/notification/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/skeleton/index.js");
/* harmony import */ var _shared_hooks_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/shared/hooks/redux */ "./src/shared/hooks/redux.ts");
/* harmony import */ var _shared_ui_PageLoader_PageLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/shared/ui/PageLoader/PageLoader */ "./src/shared/ui/PageLoader/PageLoader.tsx");
/* harmony import */ var _entities_User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/entities/User */ "./src/entities/User/index.ts");
/* harmony import */ var _widgets_UserProfile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/widgets/UserProfile */ "./src/widgets/UserProfile/index.ts");
/* harmony import */ var _widgets_UserProfile_ui_UserProfileView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/widgets/UserProfile/ui/UserProfileView */ "./src/widgets/UserProfile/ui/UserProfileView.tsx");
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








var ProfilePage = function ProfilePage() {
  var _a = (0,_shared_hooks_redux__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)(function (state) {
      return state.user;
    }),
    user = _a.user,
    authData = _a.authData,
    loading = _a.loading;
  var _b = antd__WEBPACK_IMPORTED_MODULE_7__["default"].useNotification(),
    notify = _b[0],
    contextHolder = _b[1];
  var _c = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('view'),
    mode = _c[0],
    setMode = _c[1];
  var dispatch = (0,_shared_hooks_redux__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();
  var handleFileChange = function handleFileChange(e) {
    return __awaiter(void 0, void 0, void 0, function () {
      var selectedFile, error_1;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 2,, 3]);
            selectedFile = e.target.files[0];
            return [4 /*yield*/, dispatch((0,_entities_User__WEBPACK_IMPORTED_MODULE_4__.updateUserAvatar)(selectedFile))];
          case 1:
            _a.sent();
            notify.success({
              message: 'Данные успешно обновлены'
            });
            return [3 /*break*/, 3];
          case 2:
            error_1 = _a.sent();
            console.error(error_1);
            notify.error({
              message: error_1.message
            });
            return [3 /*break*/, 3];
          case 3:
            return [2 /*return*/];
        }
      });
    });
  };

  var handleEditProfile = function handleEditProfile() {
    setMode(mode === 'view' ? 'edit' : 'view');
  };
  if (!(user === null || user === void 0 ? void 0 : user.email) || !(user === null || user === void 0 ? void 0 : user.username)) {
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_ui_PageLoader_PageLoader__WEBPACK_IMPORTED_MODULE_3__.PageLoader, {});
  }
  if (loading) {
    return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_8__["default"], {});
  }
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [contextHolder, mode === 'view' ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_widgets_UserProfile_ui_UserProfileView__WEBPACK_IMPORTED_MODULE_6__.UserProfileView, {
      user: user,
      mode: mode,
      onEditProfile: handleEditProfile,
      onFileChange: handleFileChange
    }) : (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_widgets_UserProfile__WEBPACK_IMPORTED_MODULE_5__.UserProfileEdit, {
      user: user,
      authData: authData,
      onFileChange: handleFileChange,
      onEditProfile: handleEditProfile,
      notify: notify
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProfilePage);

/***/ }),

/***/ "./src/widgets/UserProfile/ui/UserProfileEdit.tsx":
/*!********************************************************!*\
  !*** ./src/widgets/UserProfile/ui/UserProfileEdit.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserProfileEdit: () => (/* binding */ UserProfileEdit)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-grid-system */ "./node_modules/react-grid-system/build/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/space/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/button/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/icons/EditOutlined.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/icons/SaveOutlined.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var antd_es_input_TextArea__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/es/input/TextArea */ "./node_modules/antd/es/input/TextArea.js");
/* harmony import */ var _shared_hooks_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/shared/hooks/redux */ "./src/shared/hooks/redux.ts");
/* harmony import */ var _shared_icons_avatar_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/shared/icons/avatar.png */ "./src/shared/icons/avatar.png");
/* harmony import */ var _UserProfile_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./UserProfile.module.scss */ "./src/widgets/UserProfile/ui/UserProfile.module.scss");
/* harmony import */ var _shared_ui_Input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/shared/ui/Input */ "./src/shared/ui/Input/index.ts");
/* harmony import */ var _entities_User__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/entities/User */ "./src/entities/User/index.ts");
/* harmony import */ var _shared_ui_InputFile__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/shared/ui/InputFile */ "./src/shared/ui/InputFile/index.ts");
var __assign = undefined && undefined.__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
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













var UserProfileEdit = function UserProfileEdit(_a) {
  var _b, _c, _d, _e;
  var user = _a.user,
    onEditProfile = _a.onEditProfile,
    onFileChange = _a.onFileChange,
    notify = _a.notify;
  var _f = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_9__.useForm)({
      mode: 'onBlur',
      defaultValues: {
        about: user === null || user === void 0 ? void 0 : user.about
      }
    }),
    register = _f.register,
    control = _f.control,
    handleSubmit = _f.handleSubmit,
    formError = _f.formState.errors;
  var dispatch = (0,_shared_hooks_redux__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch)();
  var onSubmit = function onSubmit(data) {
    return __awaiter(void 0, void 0, void 0, function () {
      var error_1;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 2,, 3]);
            return [4 /*yield*/, dispatch((0,_entities_User__WEBPACK_IMPORTED_MODULE_7__.updateUser)(data))];
          case 1:
            _a.sent();
            onEditProfile();
            notify.success({
              message: 'Данные успешно обновлены'
            });
            return [3 /*break*/, 3];
          case 2:
            error_1 = _a.sent();
            console.error(error_1);
            notify.error({
              message: error_1.message
            });
            return [3 /*break*/, 3];
          case 3:
            return [2 /*return*/];
        }
      });
    });
  };

  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_grid_system__WEBPACK_IMPORTED_MODULE_2__.Row, {
    className: _UserProfile_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].profileContainer,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_grid_system__WEBPACK_IMPORTED_MODULE_2__.Col, {
      xl: 12,
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        name: "loginForm",
        onSubmit: handleSubmit(onSubmit),
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_grid_system__WEBPACK_IMPORTED_MODULE_2__.Col, {
          className: _UserProfile_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].avatarContainer,
          xl: 4,
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
            src: (user === null || user === void 0 ? void 0 : user.avatarUrl) || _shared_icons_avatar_png__WEBPACK_IMPORTED_MODULE_4__["default"],
            alt: "avatar"
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_grid_system__WEBPACK_IMPORTED_MODULE_2__.Col, {
          className: classnames__WEBPACK_IMPORTED_MODULE_1___default()([_UserProfile_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].nameContainer, _UserProfile_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].nameContainerEdit]),
          xl: 4,
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_ui_Input__WEBPACK_IMPORTED_MODULE_6__.Input, {
            defaultValue: (user === null || user === void 0 ? void 0 : user.firstName) || '',
            id: "firstName",
            fieldName: "firstName",
            register: register,
            rules: {
              required: 'Поле обязательно к заполнению'
            },
            error: (_b = formError === null || formError === void 0 ? void 0 : formError.firstName) === null || _b === void 0 ? void 0 : _b.message
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_ui_Input__WEBPACK_IMPORTED_MODULE_6__.Input, {
            defaultValue: (user === null || user === void 0 ? void 0 : user.lastName) || '',
            id: "lastName",
            fieldName: "lastName",
            register: register,
            rules: {
              required: 'Поле обязательно к заполнению'
            },
            error: (_c = formError === null || formError === void 0 ? void 0 : formError.lastName) === null || _c === void 0 ? void 0 : _c.message
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_ui_Input__WEBPACK_IMPORTED_MODULE_6__.Input, {
            defaultValue: (user === null || user === void 0 ? void 0 : user.username) || '',
            id: "username",
            fieldName: "username",
            register: register,
            rules: {
              required: 'Поле обязательно к заполнению'
            },
            error: (_d = formError === null || formError === void 0 ? void 0 : formError.username) === null || _d === void 0 ? void 0 : _d.message
          })]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_grid_system__WEBPACK_IMPORTED_MODULE_2__.Col, {
          xl: 2,
          className: _UserProfile_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].fieldContainer,
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_ui_Input__WEBPACK_IMPORTED_MODULE_6__.Input, {
            defaultValue: (user === null || user === void 0 ? void 0 : user.email) || '',
            id: "email",
            fieldName: "email",
            register: register,
            rules: {
              required: 'Поле обязательно к заполнению'
            },
            error: (_e = formError === null || formError === void 0 ? void 0 : formError.email) === null || _e === void 0 ? void 0 : _e.message
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_grid_system__WEBPACK_IMPORTED_MODULE_2__.Col, {
          xl: 4,
          className: _UserProfile_module_scss__WEBPACK_IMPORTED_MODULE_5__["default"].fieldContainer,
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_hook_form__WEBPACK_IMPORTED_MODULE_9__.Controller, {
            name: "about",
            control: control,
            render: function render(_a) {
              var field = _a.field;
              return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd_es_input_TextArea__WEBPACK_IMPORTED_MODULE_10__["default"], __assign({}, field, {
                placeholder: "\u0414\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u043E \u0441\u0435\u0431\u0435, \u0447\u0442\u043E\u0431\u044B \u0434\u0440\u0443\u0433\u0438\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438 \u0431\u043E\u043B\u044C\u0448\u0435 \u0443\u0437\u043D\u0430\u043B\u0438 \u043E \u0432\u0430\u0441 (\u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440 \u0443\u0432\u043B\u0435\u0447\u0435\u043D\u0438\u044F, \u0445\u043E\u0431\u0431\u0438 \u0438 \u043F\u0440.)",
                defaultValue: (user === null || user === void 0 ? void 0 : user.about) || ''
              }));
            }
          })
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_grid_system__WEBPACK_IMPORTED_MODULE_2__.Col, {
          children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_11__["default"], {
            children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_ui_InputFile__WEBPACK_IMPORTED_MODULE_8__.InputFile, {
              onChange: onFileChange,
              children: "\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u0444\u043E\u0442\u043E"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_12__["default"], {
              onClick: onEditProfile,
              icon: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_13__["default"], {}),
              children: "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043F\u0440\u043E\u0444\u0438\u043B\u044C"
            }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_12__["default"], {
              icon: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_14__["default"], {}),
              type: "primary",
              htmlType: "submit",
              children: "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"
            })]
          })
        })]
      })
    })
  });
};

/***/ }),

/***/ "./src/widgets/UserProfile/ui/UserProfileView.tsx":
/*!********************************************************!*\
  !*** ./src/widgets/UserProfile/ui/UserProfileView.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserProfileView: () => (/* binding */ UserProfileView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/icons/EditOutlined.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/icons/SaveOutlined.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/typography/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/space/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/button/index.js");
/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-grid-system */ "./node_modules/react-grid-system/build/index.js");
/* harmony import */ var _shared_icons_avatar_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/shared/icons/avatar.png */ "./src/shared/icons/avatar.png");
/* harmony import */ var _shared_ui_InputFile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/shared/ui/InputFile */ "./src/shared/ui/InputFile/index.ts");
/* harmony import */ var _UserProfile_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UserProfile.module.scss */ "./src/widgets/UserProfile/ui/UserProfile.module.scss");







var UserProfileView = function UserProfileView(_a) {
  var user = _a.user,
    mode = _a.mode,
    onFileChange = _a.onFileChange,
    onEditProfile = _a.onEditProfile;
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_grid_system__WEBPACK_IMPORTED_MODULE_1__.Row, {
    className: _UserProfile_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].profileContainer,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_grid_system__WEBPACK_IMPORTED_MODULE_1__.Col, {
      xl: 12,
      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_grid_system__WEBPACK_IMPORTED_MODULE_1__.Col, {
        className: _UserProfile_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].avatarContainer,
        xl: 4,
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("img", {
          src: (user === null || user === void 0 ? void 0 : user.avatarUrl) || _shared_icons_avatar_png__WEBPACK_IMPORTED_MODULE_2__["default"],
          alt: "avatar"
        })
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_grid_system__WEBPACK_IMPORTED_MODULE_1__.Col, {
        className: _UserProfile_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].nameContainer,
        xl: 4,
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_5__["default"].Title, {
          level: 4,
          children: [user === null || user === void 0 ? void 0 : user.firstName, " ", user === null || user === void 0 ? void 0 : user.lastName]
        }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_5__["default"].Title, {
          level: 5,
          children: (user === null || user === void 0 ? void 0 : user.username) ? "(".concat(user === null || user === void 0 ? void 0 : user.username, ")") : ''
        })]
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_grid_system__WEBPACK_IMPORTED_MODULE_1__.Col, {
        xl: 2,
        className: _UserProfile_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].fieldContainer,
        children: "Email: ".concat((user === null || user === void 0 ? void 0 : user.email) || 'Not email yet :(')
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_grid_system__WEBPACK_IMPORTED_MODULE_1__.Col, {
        xl: 4,
        className: _UserProfile_module_scss__WEBPACK_IMPORTED_MODULE_4__["default"].fieldContainer,
        children: "\u041E \u0441\u0435\u0431\u0435: ".concat((user === null || user === void 0 ? void 0 : user.about) || "\u0414\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u044E \u043E \u0441\u0435\u0431\u0435, \u0447\u0442\u043E\u0431\u044B \u0434\u0440\u0443\u0433\u0438\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u0438 \u0431\u043E\u043B\u044C\u0448\u0435 \u0443\u0437\u043D\u0430\u043B\u0438 \u043E \u0432\u0430\u0441 \n        (\u043D\u0430\u043F\u0440\u0438\u043C\u0435\u0440 \u0443\u0432\u043B\u0435\u0447\u0435\u043D\u0438\u044F, \u0445\u043E\u0431\u0431\u0438 \u0438 \u043F\u0440.)")
      }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_grid_system__WEBPACK_IMPORTED_MODULE_1__.Col, {
        children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_6__["default"], {
          children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_ui_InputFile__WEBPACK_IMPORTED_MODULE_3__.InputFile, {
            onChange: onFileChange,
            children: "\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u0444\u043E\u0442\u043E"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_7__["default"], {
            onClick: onEditProfile,
            icon: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__["default"], {}),
            children: "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u043F\u0440\u043E\u0444\u0438\u043B\u044C"
          }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_7__["default"], {
            icon: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__["default"], {}),
            type: "primary",
            disabled: mode === 'view',
            children: "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"
          })]
        })
      })]
    })
  });
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/widgets/UserProfile/ui/UserProfile.module.scss":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/widgets/UserProfile/ui/UserProfile.module.scss ***!
  \***************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.src-widgets-UserProfile-ui-UserProfile-module__profileContainer--LiHAc {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.src-widgets-UserProfile-ui-UserProfile-module__avatarContainer--T1tUn {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 0 0 50% !important;
}
.src-widgets-UserProfile-ui-UserProfile-module__avatarContainer--T1tUn img {
  width: 10rem;
  height: 10rem;
}

.src-widgets-UserProfile-ui-UserProfile-module__nameContainer--y9b87 {
  display: flex;
  align-items: center;
  gap: 0.2rem;
  justify-content: center;
  margin-bottom: 1rem;
}

.src-widgets-UserProfile-ui-UserProfile-module__nameContainerEdit--E8HyC {
  margin-top: 1rem;
}

.src-widgets-UserProfile-ui-UserProfile-module__fieldContainer--Bev9K {
  margin-bottom: 1rem;
}`, "",{"version":3,"sources":["webpack://./src/widgets/UserProfile/ui/UserProfile.module.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,sBAAA;EACA,YAAA;AACF;;AAEA;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,wBAAA;AACF;AAAE;EACE,YAAA;EACA,aAAA;AAEJ;;AAEA;EACE,aAAA;EACA,mBAAA;EACA,WAAA;EACA,uBAAA;EACA,mBAAA;AACF;;AAEA;EACE,gBAAA;AACF;;AACA;EACE,mBAAA;AAEF","sourcesContent":[".profileContainer {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n.avatarContainer {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex: 0 0 50% !important;\n  img {\n    width: 10rem;\n    height: 10rem;\n  }\n}\n\n.nameContainer {\n  display: flex;\n  align-items: center;\n  gap: 0.2rem;\n  justify-content: center;\n  margin-bottom: 1rem;\n}\n\n.nameContainerEdit {\n  margin-top: 1rem;\n}\n.fieldContainer {\n  margin-bottom: 1rem;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"profileContainer": `src-widgets-UserProfile-ui-UserProfile-module__profileContainer--LiHAc`,
	"avatarContainer": `src-widgets-UserProfile-ui-UserProfile-module__avatarContainer--T1tUn`,
	"nameContainer": `src-widgets-UserProfile-ui-UserProfile-module__nameContainer--y9b87`,
	"nameContainerEdit": `src-widgets-UserProfile-ui-UserProfile-module__nameContainerEdit--E8HyC`,
	"fieldContainer": `src-widgets-UserProfile-ui-UserProfile-module__fieldContainer--Bev9K`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/shared/icons/avatar.png":
/*!*************************************!*\
  !*** ./src/shared/icons/avatar.png ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "ab45eb1d42b1faaf3d12b84117e3d937.png");

/***/ }),

/***/ "./src/widgets/UserProfile/ui/UserProfile.module.scss":
/*!************************************************************!*\
  !*** ./src/widgets/UserProfile/ui/UserProfile.module.scss ***!
  \************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_UserProfile_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./UserProfile.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/widgets/UserProfile/ui/UserProfile.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_UserProfile_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_UserProfile_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
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
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_UserProfile_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_UserProfile_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_UserProfile_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./UserProfile.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/widgets/UserProfile/ui/UserProfile.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_UserProfile_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./UserProfile.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/widgets/UserProfile/ui/UserProfile.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_UserProfile_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_UserProfile_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_UserProfile_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_UserProfile_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_UserProfile_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_UserProfile_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_UserProfile_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_UserProfile_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/widgets/UserProfile/index.ts":
/*!******************************************!*\
  !*** ./src/widgets/UserProfile/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   UserProfileEdit: () => (/* reexport safe */ _ui_UserProfileEdit__WEBPACK_IMPORTED_MODULE_0__.UserProfileEdit)
/* harmony export */ });
/* harmony import */ var _ui_UserProfileEdit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/UserProfileEdit */ "./src/widgets/UserProfile/ui/UserProfileEdit.tsx");



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3NjcmVlbnNfUHJvZmlsZVBhZ2VfdWlfUHJvZmlsZVBhZ2VfdHN4LjFkNjJmY2JkZTY0YWQzMWU5ODIxLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsU0FBUyxHQUFJLFNBQUksSUFBSSxTQUFJLENBQUNBLFNBQVMsSUFBSyxVQUFVQyxPQUFPLEVBQUVDLFVBQVUsRUFBRUMsQ0FBQyxFQUFFQyxTQUFTLEVBQUU7RUFDckYsU0FBU0MsS0FBS0EsQ0FBQ0MsS0FBSyxFQUFFO0lBQUUsT0FBT0EsS0FBSyxZQUFZSCxDQUFDLEdBQUdHLEtBQUssR0FBRyxJQUFJSCxDQUFDLENBQUMsVUFBVUksT0FBTyxFQUFFO01BQUVBLE9BQU8sQ0FBQ0QsS0FBSyxDQUFDO0lBQUUsQ0FBQyxDQUFDO0VBQUU7RUFDM0csT0FBTyxLQUFLSCxDQUFDLEtBQUtBLENBQUMsR0FBR0ssT0FBTyxDQUFDLEVBQUUsVUFBVUQsT0FBTyxFQUFFRSxNQUFNLEVBQUU7SUFDdkQsU0FBU0MsU0FBU0EsQ0FBQ0osS0FBSyxFQUFFO01BQUUsSUFBSTtRQUFFSyxJQUFJLENBQUNQLFNBQVMsQ0FBQ1EsSUFBSSxDQUFDTixLQUFLLENBQUMsQ0FBQztNQUFFLENBQUMsQ0FBQyxPQUFPTyxDQUFDLEVBQUU7UUFBRUosTUFBTSxDQUFDSSxDQUFDLENBQUM7TUFBRTtJQUFFO0lBQzFGLFNBQVNDLFFBQVFBLENBQUNSLEtBQUssRUFBRTtNQUFFLElBQUk7UUFBRUssSUFBSSxDQUFDUCxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUNFLEtBQUssQ0FBQyxDQUFDO01BQUUsQ0FBQyxDQUFDLE9BQU9PLENBQUMsRUFBRTtRQUFFSixNQUFNLENBQUNJLENBQUMsQ0FBQztNQUFFO0lBQUU7SUFDN0YsU0FBU0YsSUFBSUEsQ0FBQ0ksTUFBTSxFQUFFO01BQUVBLE1BQU0sQ0FBQ0MsSUFBSSxHQUFHVCxPQUFPLENBQUNRLE1BQU0sQ0FBQ1QsS0FBSyxDQUFDLEdBQUdELEtB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QUFVO0FBQ1o7QUFDQSxHQUFHO0FBQ0g7OztBQUc2TjtBQUM3TixPQUFPLGlFQUFlLHlNQUFPLElBQUkseU1BQU8sVUFBVSx5TUFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQzdFdEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbm5vdmEtaXByLy4vc3JjL3NjcmVlbnMvUHJvZmlsZVBhZ2UvdWkvUHJvZmlsZVBhZ2UudHN4Iiwid2VicGFjazovL2lubm92YS1pcHIvLi9zcmMvd2lkZ2V0cy9Vc2VyUHJvZmlsZS91aS9Vc2VyUHJvZmlsZUVkaXQudHN4Iiwid2VicGFjazovL2lubm92YS1pcHIvLi9zcmMvd2lkZ2V0cy9Vc2VyUHJvZmlsZS91aS9Vc2VyUHJvZmlsZVZpZXcudHN4Iiwid2VicGFjazovL2lubm92YS1pcHIvLi9zcmMvd2lkZ2V0cy9Vc2VyUHJvZmlsZS91aS9Vc2VyUHJvZmlsZS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9pbm5vdmEtaXByLy4vc3JjL3NoYXJlZC9pY29ucy9hdmF0YXIucG5nIiwid2VicGFjazovL2lubm92YS1pcHIvLi9zcmMvd2lkZ2V0cy9Vc2VyUHJvZmlsZS91aS9Vc2VyUHJvZmlsZS5tb2R1bGUuc2Nzcz8yMDRkIiwid2VicGFjazovL2lubm92YS1pcHIvLi9zcmMvd2lkZ2V0cy9Vc2VyUHJvZmlsZS9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKGcgJiYgKGcgPSAwLCBvcFswXSAmJiAoXyA9IDApKSwgXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG5pbXBvcnQgeyBqc3ggYXMgX2pzeCwgRnJhZ21lbnQgYXMgX0ZyYWdtZW50LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFNrZWxldG9uLCBub3RpZmljYXRpb24gfSBmcm9tICdhbnRkJztcbmltcG9ydCB7IHVzZUFwcERpc3BhdGNoLCB1c2VBcHBTZWxlY3RvciB9IGZyb20gJ0Avc2hhcmVkL2hvb2tzL3JlZHV4JztcbmltcG9ydCB7IFBhZ2VMb2FkZXIgfSBmcm9tICdAL3NoYXJlZC91aS9QYWdlTG9hZGVyL1BhZ2VMb2FkZXInO1xuaW1wb3J0IHsgdXBkYXRlVXNlckF2YXRhciB9IGZyb20gJ0AvZW50aXRpZXMvVXNlcic7XG5pbXBvcnQgeyBVc2VyUHJvZmlsZUVkaXQgfSBmcm9tICdAL3dpZGdldHMvVXNlclByb2ZpbGUnO1xuaW1wb3J0IHsgVXNlclByb2ZpbGVWaWV3IH0gZnJvbSAnQC93aWRnZXRzL1VzZXJQcm9maWxlL3VpL1VzZXJQcm9maWxlVmlldyc7XG52YXIgUHJvZmlsZVBhZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF9hID0gdXNlQXBwU2VsZWN0b3IoZnVuY3Rpb24gKHN0YXRlKSB7IHJldHVybiBzdGF0ZS51c2VyOyB9KSwgdXNlciA9IF9hLnVzZXIsIGF1dGhEYXRhID0gX2EuYXV0aERhdGEsIGxvYWRpbmcgPSBfYS5sb2FkaW5nO1xuICAgIHZhciBfYiA9IG5vdGlmaWNhdGlvbi51c2VOb3RpZmljYXRpb24oKSwgbm90aWZ5ID0gX2JbMF0sIGNvbnRleHRIb2xkZXIgPSBfYlsxXTtcbiAgICB2YXIgX2MgPSB1c2VTdGF0ZSgndmlldycpLCBtb2RlID0gX2NbMF0sIHNldE1vZGUgPSBfY1sxXTtcbiAgICB2YXIgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpO1xuICAgIHZhciBoYW5kbGVGaWxlQ2hhbmdlID0gZnVuY3Rpb24gKGUpIHsgcmV0dXJuIF9fYXdhaXRlcih2b2lkIDAsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzZWxlY3RlZEZpbGUsIGVycm9yXzE7XG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoX2EubGFiZWwpIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMCwgMiwgLCAzXSk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkRmlsZSA9IGUudGFyZ2V0LmZpbGVzWzBdO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBkaXNwYXRjaCh1cGRhdGVVc2VyQXZhdGFyKHNlbGVjdGVkRmlsZSkpXTtcbiAgICAgICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgbm90aWZ5LnN1Y2Nlc3MoeyBtZXNzYWdlOiAn0JTQsNC90L3Ri9C1INGD0YHQv9C10YjQvdC+INC+0LHQvdC+0LLQu9C10L3RiycgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbMyAvKmJyZWFrKi8sIDNdO1xuICAgICAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JfMSA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcl8xKTtcbiAgICAgICAgICAgICAgICAgICAgbm90aWZ5LmVycm9yKHsgbWVzc2FnZTogZXJyb3JfMS5tZXNzYWdlIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAzXTtcbiAgICAgICAgICAgICAgICBjYXNlIDM6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7IH07XG4gICAgdmFyIGhhbmRsZUVkaXRQcm9maWxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBzZXRNb2RlKG1vZGUgPT09ICd2aWV3JyA/ICdlZGl0JyA6ICd2aWV3Jyk7XG4gICAgfTtcbiAgICBpZiAoISh1c2VyID09PSBudWxsIHx8IHVzZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHVzZXIuZW1haWwpIHx8ICEodXNlciA9PT0gbnVsbCB8fCB1c2VyID09PSB2b2lkIDAgPyB2b2lkIDAgOiB1c2VyLnVzZXJuYW1lKSkge1xuICAgICAgICByZXR1cm4gX2pzeChQYWdlTG9hZGVyLCB7fSk7XG4gICAgfVxuICAgIGlmIChsb2FkaW5nKSB7XG4gICAgICAgIHJldHVybiBfanN4KFNrZWxldG9uLCB7fSk7XG4gICAgfVxuICAgIHJldHVybiAoX2pzeHMoX0ZyYWdtZW50LCB7IGNoaWxkcmVuOiBbY29udGV4dEhvbGRlciwgbW9kZSA9PT0gJ3ZpZXcnID8gKF9qc3goVXNlclByb2ZpbGVWaWV3LCB7IHVzZXI6IHVzZXIsIG1vZGU6IG1vZGUsIG9uRWRpdFByb2ZpbGU6IGhhbmRsZUVkaXRQcm9maWxlLCBvbkZpbGVDaGFuZ2U6IGhhbmRsZUZpbGVDaGFuZ2UgfSkpIDogKF9qc3goVXNlclByb2ZpbGVFZGl0LCB7IHVzZXI6IHVzZXIsIGF1dGhEYXRhOiBhdXRoRGF0YSwgb25GaWxlQ2hhbmdlOiBoYW5kbGVGaWxlQ2hhbmdlLCBvbkVkaXRQcm9maWxlOiBoYW5kbGVFZGl0UHJvZmlsZSwgbm90aWZ5OiBub3RpZnkgfSkpXSB9KSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZVBhZ2U7XG4iLCJ2YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xudmFyIF9fYXdhaXRlciA9ICh0aGlzICYmIHRoaXMuX19hd2FpdGVyKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcbiAgICB9KTtcbn07XG52YXIgX19nZW5lcmF0b3IgPSAodGhpcyAmJiB0aGlzLl9fZ2VuZXJhdG9yKSB8fCBmdW5jdGlvbiAodGhpc0FyZywgYm9keSkge1xuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XG4gICAgICAgIHdoaWxlIChnICYmIChnID0gMCwgb3BbMF0gJiYgKF8gPSAwKSksIF8pIHRyeSB7XG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcbiAgICB9XG59O1xuaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCBjbiBmcm9tICdjbGFzc25hbWVzJztcbmltcG9ydCB7IENvbCwgUm93IH0gZnJvbSAncmVhY3QtZ3JpZC1zeXN0ZW0nO1xuaW1wb3J0IHsgQnV0dG9uLCBTcGFjZSB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgRWRpdE91dGxpbmVkLCBTYXZlT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XG5pbXBvcnQgeyB1c2VGb3JtLCBDb250cm9sbGVyIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcbmltcG9ydCBUZXh0QXJlYSBmcm9tICdhbnRkL2VzL2lucHV0L1RleHRBcmVhJztcbmltcG9ydCB7IHVzZUFwcERpc3BhdGNoIH0gZnJvbSAnQC9zaGFyZWQvaG9va3MvcmVkdXgnO1xuaW1wb3J0IEF2YXRhciBmcm9tICdAL3NoYXJlZC9pY29ucy9hdmF0YXIucG5nJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Vc2VyUHJvZmlsZS5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJ0Avc2hhcmVkL3VpL0lucHV0JztcbmltcG9ydCB7IHVwZGF0ZVVzZXIgfSBmcm9tICdAL2VudGl0aWVzL1VzZXInO1xuaW1wb3J0IHsgSW5wdXRGaWxlIH0gZnJvbSAnQC9zaGFyZWQvdWkvSW5wdXRGaWxlJztcbmV4cG9ydCB2YXIgVXNlclByb2ZpbGVFZGl0ID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIF9iLCBfYywgX2QsIF9lO1xuICAgIHZhciB1c2VyID0gX2EudXNlciwgb25FZGl0UHJvZmlsZSA9IF9hLm9uRWRpdFByb2ZpbGUsIG9uRmlsZUNoYW5nZSA9IF9hLm9uRmlsZUNoYW5nZSwgbm90aWZ5ID0gX2Eubm90aWZ5O1xuICAgIHZhciBfZiA9IHVzZUZvcm0oe1xuICAgICAgICBtb2RlOiAnb25CbHVyJyxcbiAgICAgICAgZGVmYXVsdFZhbHVlczoge1xuICAgICAgICAgICAgYWJvdXQ6IHVzZXIgPT09IG51bGwgfHwgdXNlciA9PT0gdm9pZCAwID8gdm9pZCAwIDogdXNlci5hYm91dCxcbiAgICAgICAgfSxcbiAgICB9KSwgcmVnaXN0ZXIgPSBfZi5yZWdpc3RlciwgY29udHJvbCA9IF9mLmNvbnRyb2wsIGhhbmRsZVN1Ym1pdCA9IF9mLmhhbmRsZVN1Ym1pdCwgZm9ybUVycm9yID0gX2YuZm9ybVN0YXRlLmVycm9ycztcbiAgICB2YXIgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpO1xuICAgIHZhciBvblN1Ym1pdCA9IGZ1bmN0aW9uIChkYXRhKSB7IHJldHVybiBfX2F3YWl0ZXIodm9pZCAwLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZXJyb3JfMTtcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFswLCAyLCAsIDNdKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgZGlzcGF0Y2godXBkYXRlVXNlcihkYXRhKSldO1xuICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICBvbkVkaXRQcm9maWxlKCk7XG4gICAgICAgICAgICAgICAgICAgIG5vdGlmeS5zdWNjZXNzKHsgbWVzc2FnZTogJ9CU0LDQvdC90YvQtSDRg9GB0L/QtdGI0L3QviDQvtCx0L3QvtCy0LvQtdC90YsnIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCAzXTtcbiAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgIGVycm9yXzEgPSBfYS5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JfMSk7XG4gICAgICAgICAgICAgICAgICAgIG5vdGlmeS5lcnJvcih7IG1lc3NhZ2U6IGVycm9yXzEubWVzc2FnZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgM107XG4gICAgICAgICAgICAgICAgY2FzZSAzOiByZXR1cm4gWzIgLypyZXR1cm4qL107XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pOyB9O1xuICAgIHJldHVybiAoX2pzeChSb3csIHsgY2xhc3NOYW1lOiBzdHlsZXMucHJvZmlsZUNvbnRhaW5lciwgY2hpbGRyZW46IF9qc3goQ29sLCB7IHhsOiAxMiwgY2hpbGRyZW46IF9qc3hzKFwiZm9ybVwiLCB7IG5hbWU6IFwibG9naW5Gb3JtXCIsIG9uU3VibWl0OiBoYW5kbGVTdWJtaXQob25TdWJtaXQpLCBjaGlsZHJlbjogW19qc3goQ29sLCB7IGNsYXNzTmFtZTogc3R5bGVzLmF2YXRhckNvbnRhaW5lciwgeGw6IDQsIGNoaWxkcmVuOiBfanN4KFwiaW1nXCIsIHsgc3JjOiAodXNlciA9PT0gbnVsbCB8fCB1c2VyID09PSB2b2lkIDAgPyB2b2lkIDAgOiB1c2VyLmF2YXRhclVybCkgfHwgQXZhdGFyLCBhbHQ6IFwiYXZhdGFyXCIgfSkgfSksIF9qc3hzKENvbCwgeyBjbGFzc05hbWU6IGNuKFtzdHlsZXMubmFtZUNvbnRhaW5lciwgc3R5bGVzLm5hbWVDb250YWluZXJFZGl0XSksIHhsOiA0LCBjaGlsZHJlbjogW19qc3goSW5wdXQsIHsgZGVmYXVsdFZhbHVlOiAodXNlciA9PT0gbnVsbCB8fCB1c2VyID09PSB2b2lkIDAgPyB2b2lkIDAgOiB1c2VyLmZpcnN0TmFtZSkgfHwgJycsIGlkOiBcImZpcnN0TmFtZVwiLCBmaWVsZE5hbWU6IFwiZmlyc3ROYW1lXCIsIHJlZ2lzdGVyOiByZWdpc3RlciwgcnVsZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiAn0J/QvtC70LUg0L7QsdGP0LfQsNGC0LXQu9GM0L3QviDQuiDQt9Cw0L/QvtC70L3QtdC90LjRjicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIGVycm9yOiAoX2IgPSBmb3JtRXJyb3IgPT09IG51bGwgfHwgZm9ybUVycm9yID09PSB2b2lkIDAgPyB2b2lkIDAgOiBmb3JtRXJyb3IuZmlyc3ROYW1lKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IubWVzc2FnZSB9KSwgX2pzeChJbnB1dCwgeyBkZWZhdWx0VmFsdWU6ICh1c2VyID09PSBudWxsIHx8IHVzZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHVzZXIubGFzdE5hbWUpIHx8ICcnLCBpZDogXCJsYXN0TmFtZVwiLCBmaWVsZE5hbWU6IFwibGFzdE5hbWVcIiwgcmVnaXN0ZXI6IHJlZ2lzdGVyLCBydWxlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6ICfQn9C+0LvQtSDQvtCx0Y/Qt9Cw0YLQtdC70YzQvdC+INC6INC30LDQv9C+0LvQvdC10L3QuNGOJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgZXJyb3I6IChfYyA9IGZvcm1FcnJvciA9PT0gbnVsbCB8fCBmb3JtRXJyb3IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGZvcm1FcnJvci5sYXN0TmFtZSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLm1lc3NhZ2UgfSksIF9qc3goSW5wdXQsIHsgZGVmYXVsdFZhbHVlOiAodXNlciA9PT0gbnVsbCB8fCB1c2VyID09PSB2b2lkIDAgPyB2b2lkIDAgOiB1c2VyLnVzZXJuYW1lKSB8fCAnJywgaWQ6IFwidXNlcm5hbWVcIiwgZmllbGROYW1lOiBcInVzZXJuYW1lXCIsIHJlZ2lzdGVyOiByZWdpc3RlciwgcnVsZXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiAn0J/QvtC70LUg0L7QsdGP0LfQsNGC0LXQu9GM0L3QviDQuiDQt9Cw0L/QvtC70L3QtdC90LjRjicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIGVycm9yOiAoX2QgPSBmb3JtRXJyb3IgPT09IG51bGwgfHwgZm9ybUVycm9yID09PSB2b2lkIDAgPyB2b2lkIDAgOiBmb3JtRXJyb3IudXNlcm5hbWUpID09PSBudWxsIHx8IF9kID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZC5tZXNzYWdlIH0pXSB9KSwgX2pzeChDb2wsIHsgeGw6IDIsIGNsYXNzTmFtZTogc3R5bGVzLmZpZWxkQ29udGFpbmVyLCBjaGlsZHJlbjogX2pzeChJbnB1dCwgeyBkZWZhdWx0VmFsdWU6ICh1c2VyID09PSBudWxsIHx8IHVzZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHVzZXIuZW1haWwpIHx8ICcnLCBpZDogXCJlbWFpbFwiLCBmaWVsZE5hbWU6IFwiZW1haWxcIiwgcmVnaXN0ZXI6IHJlZ2lzdGVyLCBydWxlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogJ9Cf0L7Qu9C1INC+0LHRj9C30LDRgtC10LvRjNC90L4g0Log0LfQsNC/0L7Qu9C90LXQvdC40Y4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIGVycm9yOiAoX2UgPSBmb3JtRXJyb3IgPT09IG51bGwgfHwgZm9ybUVycm9yID09PSB2b2lkIDAgPyB2b2lkIDAgOiBmb3JtRXJyb3IuZW1haWwpID09PSBudWxsIHx8IF9lID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZS5tZXNzYWdlIH0pIH0pLCBfanN4KENvbCwgeyB4bDogNCwgY2xhc3NOYW1lOiBzdHlsZXMuZmllbGRDb250YWluZXIsIGNoaWxkcmVuOiBfanN4KENvbnRyb2xsZXIsIHsgbmFtZTogXCJhYm91dFwiLCBjb250cm9sOiBjb250cm9sLCByZW5kZXI6IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZmllbGQgPSBfYS5maWVsZDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChfanN4KFRleHRBcmVhLCBfX2Fzc2lnbih7fSwgZmllbGQsIHsgcGxhY2Vob2xkZXI6IFwiXFx1MDQxNFxcdTA0M0VcXHUwNDMxXFx1MDQzMFxcdTA0MzJcXHUwNDRDXFx1MDQ0MlxcdTA0MzUgXFx1MDQzOFxcdTA0M0RcXHUwNDQ0XFx1MDQzRVxcdTA0NDBcXHUwNDNDXFx1MDQzMFxcdTA0NDZcXHUwNDM4XFx1MDQ0RSBcXHUwNDNFIFxcdTA0NDFcXHUwNDM1XFx1MDQzMVxcdTA0MzUsIFxcdTA0NDdcXHUwNDQyXFx1MDQzRVxcdTA0MzFcXHUwNDRCIFxcdTA0MzRcXHUwNDQwXFx1MDQ0M1xcdTA0MzNcXHUwNDM4XFx1MDQzNSBcXHUwNDNGXFx1MDQzRVxcdTA0M0JcXHUwNDRDXFx1MDQzN1xcdTA0M0VcXHUwNDMyXFx1MDQzMFxcdTA0NDJcXHUwNDM1XFx1MDQzQlxcdTA0MzggXFx1MDQzMVxcdTA0M0VcXHUwNDNCXFx1MDQ0Q1xcdTA0NDhcXHUwNDM1IFxcdTA0NDNcXHUwNDM3XFx1MDQzRFxcdTA0MzBcXHUwNDNCXFx1MDQzOCBcXHUwNDNFIFxcdTA0MzJcXHUwNDMwXFx1MDQ0MSAoXFx1MDQzRFxcdTA0MzBcXHUwNDNGXFx1MDQ0MFxcdTA0MzhcXHUwNDNDXFx1MDQzNVxcdTA0NDAgXFx1MDQ0M1xcdTA0MzJcXHUwNDNCXFx1MDQzNVxcdTA0NDdcXHUwNDM1XFx1MDQzRFxcdTA0MzhcXHUwNDRGLCBcXHUwNDQ1XFx1MDQzRVxcdTA0MzFcXHUwNDMxXFx1MDQzOCBcXHUwNDM4IFxcdTA0M0ZcXHUwNDQwLilcIiwgZGVmYXVsdFZhbHVlOiAodXNlciA9PT0gbnVsbCB8fCB1c2VyID09PSB2b2lkIDAgPyB2b2lkIDAgOiB1c2VyLmFib3V0KSB8fCAnJyB9KSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gfSkgfSksIF9qc3goQ29sLCB7IGNoaWxkcmVuOiBfanN4cyhTcGFjZSwgeyBjaGlsZHJlbjogW19qc3goSW5wdXRGaWxlLCB7IG9uQ2hhbmdlOiBvbkZpbGVDaGFuZ2UsIGNoaWxkcmVuOiBcIlxcdTA0MUVcXHUwNDMxXFx1MDQzRFxcdTA0M0VcXHUwNDMyXFx1MDQzOFxcdTA0NDJcXHUwNDRDIFxcdTA0NDRcXHUwNDNFXFx1MDQ0MlxcdTA0M0VcIiB9KSwgX2pzeChCdXR0b24sIHsgb25DbGljazogb25FZGl0UHJvZmlsZSwgaWNvbjogX2pzeChFZGl0T3V0bGluZWQsIHt9KSwgY2hpbGRyZW46IFwiXFx1MDQyMFxcdTA0MzVcXHUwNDM0XFx1MDQzMFxcdTA0M0FcXHUwNDQyXFx1MDQzOFxcdTA0NDBcXHUwNDNFXFx1MDQzMlxcdTA0MzBcXHUwNDQyXFx1MDQ0QyBcXHUwNDNGXFx1MDQ0MFxcdTA0M0VcXHUwNDQ0XFx1MDQzOFxcdTA0M0JcXHUwNDRDXCIgfSksIF9qc3goQnV0dG9uLCB7IGljb246IF9qc3goU2F2ZU91dGxpbmVkLCB7fSksIHR5cGU6IFwicHJpbWFyeVwiLCBodG1sVHlwZTogXCJzdWJtaXRcIiwgY2hpbGRyZW46IFwiXFx1MDQyMVxcdTA0M0VcXHUwNDQ1XFx1MDQ0MFxcdTA0MzBcXHUwNDNEXFx1MDQzOFxcdTA0NDJcXHUwNDRDXCIgfSldIH0pIH0pXSB9KSB9KSB9KSk7XG59O1xuIiwiaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IEVkaXRPdXRsaW5lZCwgU2F2ZU91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xuaW1wb3J0IHsgQnV0dG9uLCBTcGFjZSwgVHlwb2dyYXBoeSB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgQ29sLCBSb3cgfSBmcm9tICdyZWFjdC1ncmlkLXN5c3RlbSc7XG5pbXBvcnQgQXZhdGFyIGZyb20gJ0Avc2hhcmVkL2ljb25zL2F2YXRhci5wbmcnO1xuaW1wb3J0IHsgSW5wdXRGaWxlIH0gZnJvbSAnQC9zaGFyZWQvdWkvSW5wdXRGaWxlJztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9Vc2VyUHJvZmlsZS5tb2R1bGUuc2Nzcyc7XG5leHBvcnQgdmFyIFVzZXJQcm9maWxlVmlldyA9IGZ1bmN0aW9uIChfYSkge1xuICAgIHZhciB1c2VyID0gX2EudXNlciwgbW9kZSA9IF9hLm1vZGUsIG9uRmlsZUNoYW5nZSA9IF9hLm9uRmlsZUNoYW5nZSwgb25FZGl0UHJvZmlsZSA9IF9hLm9uRWRpdFByb2ZpbGU7XG4gICAgcmV0dXJuIChfanN4KFJvdywgeyBjbGFzc05hbWU6IHN0eWxlcy5wcm9maWxlQ29udGFpbmVyLCBjaGlsZHJlbjogX2pzeHMoQ29sLCB7IHhsOiAxMiwgY2hpbGRyZW46IFtfanN4KENvbCwgeyBjbGFzc05hbWU6IHN0eWxlcy5hdmF0YXJDb250YWluZXIsIHhsOiA0LCBjaGlsZHJlbjogX2pzeChcImltZ1wiLCB7IHNyYzogKHVzZXIgPT09IG51bGwgfHwgdXNlciA9PT0gdm9pZCAwID8gdm9pZCAwIDogdXNlci5hdmF0YXJVcmwpIHx8IEF2YXRhciwgYWx0OiBcImF2YXRhclwiIH0pIH0pLCBfanN4cyhDb2wsIHsgY2xhc3NOYW1lOiBzdHlsZXMubmFtZUNvbnRhaW5lciwgeGw6IDQsIGNoaWxkcmVuOiBbX2pzeHMoVHlwb2dyYXBoeS5UaXRsZSwgeyBsZXZlbDogNCwgY2hpbGRyZW46IFt1c2VyID09PSBudWxsIHx8IHVzZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHVzZXIuZmlyc3ROYW1lLCBcIiBcIiwgdXNlciA9PT0gbnVsbCB8fCB1c2VyID09PSB2b2lkIDAgPyB2b2lkIDAgOiB1c2VyLmxhc3ROYW1lXSB9KSwgX2pzeChUeXBvZ3JhcGh5LlRpdGxlLCB7IGxldmVsOiA1LCBjaGlsZHJlbjogKHVzZXIgPT09IG51bGwgfHwgdXNlciA9PT0gdm9pZCAwID8gdm9pZCAwIDogdXNlci51c2VybmFtZSkgPyBcIihcIi5jb25jYXQodXNlciA9PT0gbnVsbCB8fCB1c2VyID09PSB2b2lkIDAgPyB2b2lkIDAgOiB1c2VyLnVzZXJuYW1lLCBcIilcIikgOiAnJyB9KV0gfSksIF9qc3goQ29sLCB7IHhsOiAyLCBjbGFzc05hbWU6IHN0eWxlcy5maWVsZENvbnRhaW5lciwgY2hpbGRyZW46IFwiRW1haWw6IFwiLmNvbmNhdCgodXNlciA9PT0gbnVsbCB8fCB1c2VyID09PSB2b2lkIDAgPyB2b2lkIDAgOiB1c2VyLmVtYWlsKSB8fCAnTm90IGVtYWlsIHlldCA6KCcpIH0pLCBfanN4KENvbCwgeyB4bDogNCwgY2xhc3NOYW1lOiBzdHlsZXMuZmllbGRDb250YWluZXIsIGNoaWxkcmVuOiBcIlxcdTA0MUUgXFx1MDQ0MVxcdTA0MzVcXHUwNDMxXFx1MDQzNTogXCIuY29uY2F0KCh1c2VyID09PSBudWxsIHx8IHVzZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHVzZXIuYWJvdXQpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcdTA0MTRcXHUwNDNFXFx1MDQzMVxcdTA0MzBcXHUwNDMyXFx1MDQ0Q1xcdTA0NDJcXHUwNDM1IFxcdTA0MzhcXHUwNDNEXFx1MDQ0NFxcdTA0M0VcXHUwNDQwXFx1MDQzQ1xcdTA0MzBcXHUwNDQ2XFx1MDQzOFxcdTA0NEUgXFx1MDQzRSBcXHUwNDQxXFx1MDQzNVxcdTA0MzFcXHUwNDM1LCBcXHUwNDQ3XFx1MDQ0MlxcdTA0M0VcXHUwNDMxXFx1MDQ0QiBcXHUwNDM0XFx1MDQ0MFxcdTA0NDNcXHUwNDMzXFx1MDQzOFxcdTA0MzUgXFx1MDQzRlxcdTA0M0VcXHUwNDNCXFx1MDQ0Q1xcdTA0MzdcXHUwNDNFXFx1MDQzMlxcdTA0MzBcXHUwNDQyXFx1MDQzNVxcdTA0M0JcXHUwNDM4IFxcdTA0MzFcXHUwNDNFXFx1MDQzQlxcdTA0NENcXHUwNDQ4XFx1MDQzNSBcXHUwNDQzXFx1MDQzN1xcdTA0M0RcXHUwNDMwXFx1MDQzQlxcdTA0MzggXFx1MDQzRSBcXHUwNDMyXFx1MDQzMFxcdTA0NDEgXFxuICAgICAgICAoXFx1MDQzRFxcdTA0MzBcXHUwNDNGXFx1MDQ0MFxcdTA0MzhcXHUwNDNDXFx1MDQzNVxcdTA0NDAgXFx1MDQ0M1xcdTA0MzJcXHUwNDNCXFx1MDQzNVxcdTA0NDdcXHUwNDM1XFx1MDQzRFxcdTA0MzhcXHUwNDRGLCBcXHUwNDQ1XFx1MDQzRVxcdTA0MzFcXHUwNDMxXFx1MDQzOCBcXHUwNDM4IFxcdTA0M0ZcXHUwNDQwLilcIikgfSksIF9qc3goQ29sLCB7IGNoaWxkcmVuOiBfanN4cyhTcGFjZSwgeyBjaGlsZHJlbjogW19qc3goSW5wdXRGaWxlLCB7IG9uQ2hhbmdlOiBvbkZpbGVDaGFuZ2UsIGNoaWxkcmVuOiBcIlxcdTA0MUVcXHUwNDMxXFx1MDQzRFxcdTA0M0VcXHUwNDMyXFx1MDQzOFxcdTA0NDJcXHUwNDRDIFxcdTA0NDRcXHUwNDNFXFx1MDQ0MlxcdTA0M0VcIiB9KSwgX2pzeChCdXR0b24sIHsgb25DbGljazogb25FZGl0UHJvZmlsZSwgaWNvbjogX2pzeChFZGl0T3V0bGluZWQsIHt9KSwgY2hpbGRyZW46IFwiXFx1MDQyMFxcdTA0MzVcXHUwNDM0XFx1MDQzMFxcdTA0M0FcXHUwNDQyXFx1MDQzOFxcdTA0NDBcXHUwNDNFXFx1MDQzMlxcdTA0MzBcXHUwNDQyXFx1MDQ0QyBcXHUwNDNGXFx1MDQ0MFxcdTA0M0VcXHUwNDQ0XFx1MDQzOFxcdTA0M0JcXHUwNDRDXCIgfSksIF9qc3goQnV0dG9uLCB7IGljb246IF9qc3goU2F2ZU91dGxpbmVkLCB7fSksIHR5cGU6IFwicHJpbWFyeVwiLCBkaXNhYmxlZDogbW9kZSA9PT0gJ3ZpZXcnLCBjaGlsZHJlbjogXCJcXHUwNDIxXFx1MDQzRVxcdTA0NDVcXHUwNDQwXFx1MDQzMFxcdTA0M0RcXHUwNDM4XFx1MDQ0MlxcdTA0NENcIiB9KV0gfSkgfSldIH0pIH0pKTtcbn07XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnNyYy13aWRnZXRzLVVzZXJQcm9maWxlLXVpLVVzZXJQcm9maWxlLW1vZHVsZV9fcHJvZmlsZUNvbnRhaW5lci0tTGlIQWMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zcmMtd2lkZ2V0cy1Vc2VyUHJvZmlsZS11aS1Vc2VyUHJvZmlsZS1tb2R1bGVfX2F2YXRhckNvbnRhaW5lci0tVDF0VW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4OiAwIDAgNTAlICFpbXBvcnRhbnQ7XG59XG4uc3JjLXdpZGdldHMtVXNlclByb2ZpbGUtdWktVXNlclByb2ZpbGUtbW9kdWxlX19hdmF0YXJDb250YWluZXItLVQxdFVuIGltZyB7XG4gIHdpZHRoOiAxMHJlbTtcbiAgaGVpZ2h0OiAxMHJlbTtcbn1cblxuLnNyYy13aWRnZXRzLVVzZXJQcm9maWxlLXVpLVVzZXJQcm9maWxlLW1vZHVsZV9fbmFtZUNvbnRhaW5lci0teTliODcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuMnJlbTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi5zcmMtd2lkZ2V0cy1Vc2VyUHJvZmlsZS11aS1Vc2VyUHJvZmlsZS1tb2R1bGVfX25hbWVDb250YWluZXJFZGl0LS1FOEh5QyB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG59XG5cbi5zcmMtd2lkZ2V0cy1Vc2VyUHJvZmlsZS11aS1Vc2VyUHJvZmlsZS1tb2R1bGVfX2ZpZWxkQ29udGFpbmVyLS1CZXY5SyB7XG4gIG1hcmdpbi1ib3R0b206IDFyZW07XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvd2lkZ2V0cy9Vc2VyUHJvZmlsZS91aS9Vc2VyUHJvZmlsZS5tb2R1bGUuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7QUFDRjtBQUFFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUFFSjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUNBO0VBQ0UsbUJBQUE7QUFFRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIucHJvZmlsZUNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmF2YXRhckNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4OiAwIDAgNTAlICFpbXBvcnRhbnQ7XFxuICBpbWcge1xcbiAgICB3aWR0aDogMTByZW07XFxuICAgIGhlaWdodDogMTByZW07XFxuICB9XFxufVxcblxcbi5uYW1lQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjJyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcbi5uYW1lQ29udGFpbmVyRWRpdCB7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbn1cXG4uZmllbGRDb250YWluZXIge1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5sb2NhbHMgPSB7XG5cdFwicHJvZmlsZUNvbnRhaW5lclwiOiBgc3JjLXdpZGdldHMtVXNlclByb2ZpbGUtdWktVXNlclByb2ZpbGUtbW9kdWxlX19wcm9maWxlQ29udGFpbmVyLS1MaUhBY2AsXG5cdFwiYXZhdGFyQ29udGFpbmVyXCI6IGBzcmMtd2lkZ2V0cy1Vc2VyUHJvZmlsZS11aS1Vc2VyUHJvZmlsZS1tb2R1bGVfX2F2YXRhckNvbnRhaW5lci0tVDF0VW5gLFxuXHRcIm5hbWVDb250YWluZXJcIjogYHNyYy13aWRnZXRzLVVzZXJQcm9maWxlLXVpLVVzZXJQcm9maWxlLW1vZHVsZV9fbmFtZUNvbnRhaW5lci0teTliODdgLFxuXHRcIm5hbWVDb250YWluZXJFZGl0XCI6IGBzcmMtd2lkZ2V0cy1Vc2VyUHJvZmlsZS11aS1Vc2VyUHJvZmlsZS1tb2R1bGVfX25hbWVDb250YWluZXJFZGl0LS1FOEh5Q2AsXG5cdFwiZmllbGRDb250YWluZXJcIjogYHNyYy13aWRnZXRzLVVzZXJQcm9maWxlLXVpLVVzZXJQcm9maWxlLW1vZHVsZV9fZmllbGRDb250YWluZXItLUJldjlLYFxufTtcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFiNDVlYjFkNDJiMWZhYWYzZDEyYjg0MTE3ZTNkOTM3LnBuZ1wiOyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9Vc2VyUHJvZmlsZS5tb2R1bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHA7XG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIGlzTmFtZWRFeHBvcnQgPSAhY29udGVudC5sb2NhbHM7XG4gICAgdmFyIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9Vc2VyUHJvZmlsZS5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscywgaXNOYW1lZEV4cG9ydCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vVXNlclByb2ZpbGUubW9kdWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJleHBvcnQgeyBVc2VyUHJvZmlsZUVkaXQgfSBmcm9tICcuL3VpL1VzZXJQcm9maWxlRWRpdCc7XG4iXSwibmFtZXMiOlsiX19hd2FpdGVyIiwidGhpc0FyZyIsIl9hcmd1bWVudHMiLCJQIiwiZ2VuZXJhdG9yIiwiYWRvcHQiLCJ2YWx1ZSIsInJlc29sdmUiLCJQcm9taXNlIiwicmVqZWN0IiwiZnVsZmlsbGVkIiwic3RlcCIsIm5leHQiLCJlIiwicmVqZWN0ZWQiLCJyZXN1bHQiLCJkb25lIiwidGhlbiIsImFwcGx5IiwiX19nZW5lcmF0b3IiLCJib2R5IiwiXyIsImxhYmVsIiwic2VudCIsInQiLCJ0cnlzIiwib3BzIiwiZiIsInkiLCJnIiwidmVyYiIsIlN5bWJvbCIsIml0ZXJhdG9yIiwibiIsInYiLCJvcCIsIlR5cGVFcnJvciIsImNhbGwiLCJwb3AiLCJsZW5ndGgiLCJwdXNoIiwianN4IiwiX2pzeCIsIkZyYWdtZW50IiwiX0ZyYWdtZW50IiwianN4cyIsIl9qc3hzIiwidXNlU3RhdGUiLCJTa2VsZXRvbiIsIm5vdGlmaWNhdGlvbiIsInVzZUFwcERpc3BhdGNoIiwidXNlQXBwU2VsZWN0b3IiLCJQYWdlTG9hZGVyIiwidXBkYXRlVXNlckF2YXRhciIsIlVzZXJQcm9maWxlRWRpdCIsIlVzZXJQcm9maWxlVmlldyIsIlByb2ZpbGVQYWdlIiwiX2EiLCJzdGF0ZSIsInVzZXIiLCJhdXRoRGF0YSIsImxvYWRpbmciLCJfYiIsInVzZU5vdGlmaWNhdGlvbiIsIm5vdGlmeSIsImNvbnRleHRIb2xkZXIiLCJfYyIsIm1vZGUiLCJzZXRNb2RlIiwiZGlzcGF0Y2giLCJoYW5kbGVGaWxlQ2hhbmdlIiwic2VsZWN0ZWRGaWxlIiwiZXJyb3JfMSIsInRhcmdldCIsImZpbGVzIiwic3VjY2VzcyIsIm1lc3NhZ2UiLCJjb25zb2xlIiwiZXJyb3IiLCJoYW5kbGVFZGl0UHJvZmlsZSIsImVtYWlsIiwidXNlcm5hbWUiLCJjaGlsZHJlbiIsIm9uRWRpdFByb2ZpbGUiLCJvbkZpbGVDaGFuZ2UiLCJfX2Fzc2lnbiIsIk9iamVjdCIsImFzc2lnbiIsInMiLCJpIiwiYXJndW1lbnRzIiwicCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY24iLCJDb2wiLCJSb3ciLCJCdXR0b24iLCJTcGFjZSIsIkVkaXRPdXRsaW5lZCIsIlNhdmVPdXRsaW5lZCIsInVzZUZvcm0iLCJDb250cm9sbGVyIiwiVGV4dEFyZWEiLCJBdmF0YXIiLCJzdHlsZXMiLCJJbnB1dCIsInVwZGF0ZVVzZXIiLCJJbnB1dEZpbGUiLCJfZCIsIl9lIiwiX2YiLCJkZWZhdWx0VmFsdWVzIiwiYWJvdXQiLCJyZWdpc3RlciIsImNvbnRyb2wiLCJoYW5kbGVTdWJtaXQiLCJmb3JtRXJyb3IiLCJmb3JtU3RhdGUiLCJlcnJvcnMiLCJvblN1Ym1pdCIsImRhdGEiLCJjbGFzc05hbWUiLCJwcm9maWxlQ29udGFpbmVyIiwieGwiLCJuYW1lIiwiYXZhdGFyQ29udGFpbmVyIiwic3JjIiwiYXZhdGFyVXJsIiwiYWx0IiwibmFtZUNvbnRhaW5lciIsIm5hbWVDb250YWluZXJFZGl0IiwiZGVmYXVsdFZhbHVlIiwiZmlyc3ROYW1lIiwiaWQiLCJmaWVsZE5hbWUiLCJydWxlcyIsInJlcXVpcmVkIiwibGFzdE5hbWUiLCJmaWVsZENvbnRhaW5lciIsInJlbmRlciIsImZpZWxkIiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsIm9uQ2xpY2siLCJpY29uIiwidHlwZSIsImh0bWxUeXBlIiwiVHlwb2dyYXBoeSIsIlRpdGxlIiwibGV2ZWwiLCJjb25jYXQiLCJkaXNhYmxlZCJdLCJzb3VyY2VSb290IjoiIn0=