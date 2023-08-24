"use strict";
(self["webpackChunkinnova_ipr"] = self["webpackChunkinnova_ipr"] || []).push([["src_screens_MessagesPage_ui_MessagesPage_tsx"],{

/***/ "./src/features/Messages/ui/MessageInput.tsx":
/*!***************************************************!*\
  !*** ./src/features/Messages/ui/MessageInput.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MessageInput: () => (/* binding */ MessageInput)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.mjs");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/button/index.js");
/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! nanoid */ "./node_modules/nanoid/index.browser.js");
/* harmony import */ var _shared_ui_Input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/shared/ui/Input */ "./src/shared/ui/Input/index.ts");
/* harmony import */ var _Messages_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Messages.module.scss */ "./src/features/Messages/ui/Messages.module.scss");
/* harmony import */ var _app_providers_socketProvider_SocketProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/providers/socketProvider/SocketProvider */ "./src/app/providers/socketProvider/SocketProvider.tsx");
/* harmony import */ var _shared_hooks_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/shared/hooks/redux */ "./src/shared/hooks/redux.ts");
/* harmony import */ var _shared_ui_InputFile__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/shared/ui/InputFile */ "./src/shared/ui/InputFile/index.ts");









var MessageInput = function MessageInput() {
  var _a = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_6__.useForm)(),
    register = _a.register,
    handleSubmit = _a.handleSubmit,
    reset = _a.reset;
  var socket = (0,_app_providers_socketProvider_SocketProvider__WEBPACK_IMPORTED_MODULE_3__.useSocket)();
  var _b = (0,_shared_hooks_redux__WEBPACK_IMPORTED_MODULE_4__.useAppSelector)(function (state) {
      return state.user;
    }),
    user = _b.user,
    authData = _b.authData;
  var onSubmit = function onSubmit(_a) {
    var message = _a.message;
    if (message.trim() !== '') {
      socket.emit('send_message', {
        message: message,
        id: (0,nanoid__WEBPACK_IMPORTED_MODULE_7__.nanoid)(),
        sender: (user === null || user === void 0 ? void 0 : user.firstName) || (user === null || user === void 0 ? void 0 : user.username),
        senderId: authData === null || authData === void 0 ? void 0 : authData.id
      });
      reset();
    }
  };
  var handleSendPhoto = function handleSendPhoto(e) {
    var reader = new FileReader();
    var selectedFile = e.target.files[0];
    if (selectedFile) {
      reader.onload = function (event) {
        var photoData = event.target.result;
        console.log(photoData);
        socket.emit('send_message', {
          message: '',
          id: (0,nanoid__WEBPACK_IMPORTED_MODULE_7__.nanoid)(),
          sender: (user === null || user === void 0 ? void 0 : user.firstName) || (user === null || user === void 0 ? void 0 : user.username),
          senderId: authData === null || authData === void 0 ? void 0 : authData.id,
          file: photoData
        });
      };
      reader.readAsDataURL(selectedFile);
    }
  };
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
    name: "formMessage",
    onSubmit: handleSubmit(onSubmit),
    className: _Messages_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].messageInputForm,
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_ui_Input__WEBPACK_IMPORTED_MODULE_1__.Input, {
      fieldName: "message",
      register: register,
      id: "message",
      className: _Messages_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].messageInput,
      rules: {
        required: true
      },
      autoComplete: "off"
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_shared_ui_InputFile__WEBPACK_IMPORTED_MODULE_5__.InputFile, {
      label: "\u0424\u043E\u0442\u043E",
      onChange: handleSendPhoto
    }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_8__["default"], {
      htmlType: "submit",
      children: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C"
    })]
  });
};

/***/ }),

/***/ "./src/features/Messages/ui/Messages.tsx":
/*!***********************************************!*\
  !*** ./src/features/Messages/ui/Messages.tsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Messages: () => (/* binding */ Messages)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _MessageInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MessageInput */ "./src/features/Messages/ui/MessageInput.tsx");
/* harmony import */ var _Messages_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Messages.module.scss */ "./src/features/Messages/ui/Messages.module.scss");
/* harmony import */ var _MessagesList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MessagesList */ "./src/features/Messages/ui/MessagesList.tsx");




var Messages = function Messages() {
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: _Messages_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].messagesConteiner,
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_MessagesList__WEBPACK_IMPORTED_MODULE_3__.MessagesList, {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_MessageInput__WEBPACK_IMPORTED_MODULE_1__.MessageInput, {})]
  });
};

/***/ }),

/***/ "./src/features/Messages/ui/MessagesList.tsx":
/*!***************************************************!*\
  !*** ./src/features/Messages/ui/MessagesList.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MessagesList: () => (/* binding */ MessagesList)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/image/index.js");
/* harmony import */ var _Messages_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Messages.module.scss */ "./src/features/Messages/ui/Messages.module.scss");
/* harmony import */ var _app_providers_socketProvider_SocketProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/providers/socketProvider/SocketProvider */ "./src/app/providers/socketProvider/SocketProvider.tsx");
/* harmony import */ var _shared_hooks_useAuth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/shared/hooks/useAuth */ "./src/shared/hooks/useAuth.ts");
var __spreadArray = undefined && undefined.__spreadArray || function (to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
};







var MessagesList = function MessagesList() {
  var _a = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
    messages = _a[0],
    setMessages = _a[1];
  var socket = (0,_app_providers_socketProvider_SocketProvider__WEBPACK_IMPORTED_MODULE_4__.useSocket)();
  var userId = (0,_shared_hooks_useAuth__WEBPACK_IMPORTED_MODULE_5__.useAuth)().id;
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    socket.on('receive_message', function (data) {
      setMessages(function (prevMessages) {
        return __spreadArray(__spreadArray([], prevMessages, true), [data], false);
      });
    });
  }, []);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    className: _Messages_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].messagesList,
    children: messages.map(function (_a) {
      var message = _a.message,
        id = _a.id,
        sender = _a.sender,
        senderId = _a.senderId,
        file = _a.file;
      return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_Messages_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].message, userId === senderId ? _Messages_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].messageMe : _Messages_module_scss__WEBPACK_IMPORTED_MODULE_3__["default"].messageOther),
        children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
          children: "".concat(sender, ": ").concat(message)
        }), file && (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(antd__WEBPACK_IMPORTED_MODULE_6__["default"], {
          src: file,
          alt: "file",
          width: 200
        })]
      }, id);
    })
  });
};

/***/ }),

/***/ "./src/screens/MessagesPage/ui/MessagesPage.tsx":
/*!******************************************************!*\
  !*** ./src/screens/MessagesPage/ui/MessagesPage.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_grid_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-grid-system */ "./node_modules/react-grid-system/build/index.js");
/* harmony import */ var _MessagesPage_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MessagesPage.module.scss */ "./src/screens/MessagesPage/ui/MessagesPage.module.scss");
/* harmony import */ var _features_Messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/features/Messages */ "./src/features/Messages/index.ts");




var MessagesPage = function MessagesPage() {
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_grid_system__WEBPACK_IMPORTED_MODULE_1__.Row, {
    className: _MessagesPage_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].messagesWrapper,
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_grid_system__WEBPACK_IMPORTED_MODULE_1__.Col, {
      className: _MessagesPage_module_scss__WEBPACK_IMPORTED_MODULE_2__["default"].messagesContainer,
      children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_features_Messages__WEBPACK_IMPORTED_MODULE_3__.Messages, {})
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MessagesPage);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/features/Messages/ui/Messages.module.scss":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/features/Messages/ui/Messages.module.scss ***!
  \**********************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.src-features-Messages-ui-Messages-module__messagesConteiner--DTt5M {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.src-features-Messages-ui-Messages-module__messageInputForm--LFx5l {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.src-features-Messages-ui-Messages-module__messageInput--fk1ql {
  flex-grow: 1;
  margin-bottom: 0;
  padding: 0.4rem 1rem;
}

.src-features-Messages-ui-Messages-module__messagesList--etkvg {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.src-features-Messages-ui-Messages-module__message--lSut7 {
  background-color: var(--white-color);
  padding: 0.5rem 1rem;
  border-radius: 6px;
  max-width: 70%;
  overflow-wrap: break-word;
  margin-bottom: 0.8rem;
}

.src-features-Messages-ui-Messages-module__messageMe--e0Wvq {
  align-self: flex-start;
}

.src-features-Messages-ui-Messages-module__messageOther--tGLeh {
  align-self: flex-end;
}`, "",{"version":3,"sources":["webpack://./src/features/Messages/ui/Messages.module.scss"],"names":[],"mappings":"AAAA;EACE,aAAA;EACA,sBAAA;EACA,YAAA;AACF;;AAEA;EACE,aAAA;EACA,mBAAA;EACA,WAAA;AACF;;AAEA;EACE,YAAA;EACA,gBAAA;EACA,oBAAA;AACF;;AAEA;EACE,YAAA;EACA,aAAA;EACA,sBAAA;AACF;;AAEA;EACE,oCAAA;EACA,oBAAA;EACA,kBAAA;EACA,cAAA;EACA,yBAAA;EACA,qBAAA;AACF;;AAEA;EACE,sBAAA;AACF;;AAEA;EACE,oBAAA;AACF","sourcesContent":[".messagesConteiner {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n.messageInputForm {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n\n.messageInput {\n  flex-grow: 1;\n  margin-bottom: 0;\n  padding: 0.4rem 1rem;\n}\n\n.messagesList {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n}\n\n.message {\n  background-color: var(--white-color);\n  padding: 0.5rem 1rem;\n  border-radius: 6px;\n  max-width: 70%;\n  overflow-wrap: break-word;\n  margin-bottom: 0.8rem;\n}\n\n.messageMe {\n  align-self: flex-start;\n}\n\n.messageOther {\n  align-self: flex-end;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"messagesConteiner": `src-features-Messages-ui-Messages-module__messagesConteiner--DTt5M`,
	"messageInputForm": `src-features-Messages-ui-Messages-module__messageInputForm--LFx5l`,
	"messageInput": `src-features-Messages-ui-Messages-module__messageInput--fk1ql`,
	"messagesList": `src-features-Messages-ui-Messages-module__messagesList--etkvg`,
	"message": `src-features-Messages-ui-Messages-module__message--lSut7`,
	"messageMe": `src-features-Messages-ui-Messages-module__messageMe--e0Wvq`,
	"messageOther": `src-features-Messages-ui-Messages-module__messageOther--tGLeh`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/screens/MessagesPage/ui/MessagesPage.module.scss":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/screens/MessagesPage/ui/MessagesPage.module.scss ***!
  \*****************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, `.src-screens-MessagesPage-ui-MessagesPage-module__messagesContainer--DDoSE {
  border: 1px solid var(--grey-color-600);
  border-radius: 6px;
  padding: 1rem 0;
  min-height: 100%;
}

.src-screens-MessagesPage-ui-MessagesPage-module__messagesWrapper--cnMZB {
  height: 100%;
}`, "",{"version":3,"sources":["webpack://./src/screens/MessagesPage/ui/MessagesPage.module.scss"],"names":[],"mappings":"AAAA;EACE,uCAAA;EACA,kBAAA;EACA,eAAA;EACA,gBAAA;AACF;;AAEA;EACE,YAAA;AACF","sourcesContent":[".messagesContainer {\n  border: 1px solid var(--grey-color-600);\n  border-radius: 6px;\n  padding: 1rem 0;\n  min-height: 100%;\n}\n\n.messagesWrapper {\n  height: 100%;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"messagesContainer": `src-screens-MessagesPage-ui-MessagesPage-module__messagesContainer--DDoSE`,
	"messagesWrapper": `src-screens-MessagesPage-ui-MessagesPage-module__messagesWrapper--cnMZB`
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/features/Messages/ui/Messages.module.scss":
/*!*******************************************************!*\
  !*** ./src/features/Messages/ui/Messages.module.scss ***!
  \*******************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Messages_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./Messages.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/features/Messages/ui/Messages.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Messages_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Messages_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
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
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Messages_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Messages_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Messages_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./Messages.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/features/Messages/ui/Messages.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Messages_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./Messages.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/features/Messages/ui/Messages.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Messages_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Messages_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Messages_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Messages_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Messages_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Messages_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Messages_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_Messages_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/screens/MessagesPage/ui/MessagesPage.module.scss":
/*!**************************************************************!*\
  !*** ./src/screens/MessagesPage/ui/MessagesPage.module.scss ***!
  \**************************************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_MessagesPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./MessagesPage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/screens/MessagesPage/ui/MessagesPage.module.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_MessagesPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);


if (true) {
  if (!_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_MessagesPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals || module.hot.invalidate) {
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
    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_MessagesPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;
    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_MessagesPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_MessagesPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

    module.hot.accept(
      /*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./MessagesPage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/screens/MessagesPage/ui/MessagesPage.module.scss",
      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_MessagesPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!../../../../node_modules/postcss-loader/dist/cjs.js!../../../../node_modules/sass-loader/dist/cjs.js!./MessagesPage.module.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[4].use[1]!./node_modules/postcss-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/screens/MessagesPage/ui/MessagesPage.module.scss");
(function () {
        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_MessagesPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_MessagesPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals, isNamedExport)) {
                module.hot.invalidate();

                return;
              }

              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_MessagesPage_module_scss__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_MessagesPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals;

              update(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_MessagesPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"]);
      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }
    )
  }

  module.hot.dispose(function() {
    update();
  });
}



       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_MessagesPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_MessagesPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_4_use_1_node_modules_postcss_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_MessagesPage_module_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/features/Messages/index.ts":
/*!****************************************!*\
  !*** ./src/features/Messages/index.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Messages: () => (/* reexport safe */ _ui_Messages__WEBPACK_IMPORTED_MODULE_0__.Messages)
/* harmony export */ });
/* harmony import */ var _ui_Messages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui/Messages */ "./src/features/Messages/ui/Messages.tsx");



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3NjcmVlbnNfTWVzc2FnZXNQYWdlX3VpX01lc3NhZ2VzUGFnZV90c3guODFhOGEwMzA2YjRlMDYyMmZlNTUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUErRDtBQUNyQjtBQUNaO0FBQ0U7QUFDVTtBQUNFO0FBQzhCO0FBQ3BCO0FBQ0o7QUFDM0MsSUFBSVksWUFBWSxHQUFHLFNBQWZBLFlBQVlBLENBQUEsRUFBZTtFQUNsQyxJQUFJQyxFQUFFLEdBQUdULHdEQUFPLENBQUMsQ0FBQztJQUFFVSxRQUFRLEdBQUdELEVBQUUsQ0FBQ0MsUUFBUTtJQUFFQyxZQUFZLEdBQUdGLEVBQUUsQ0FBQ0UsWUFBWTtJQUFFQyxLQUFLLEdBQUdILEVBQUUsQ0FBQ0csS0FBSztFQUM1RixJQUFJQyxNQUFNLEdBQUdSLHVGQUFTLENBQUMsQ0FBQztFQUN4QixJQUFJUyxFQUFFLEdBQUdSLG1FQUFjLENBQUMsVUFBVVMsS0FBSyxFQUFFO01BQUUsT0FBT0EsS0FBSyxDQUFDQyxJQUFJO0lBQUUsQ0FBQyxDQUFDO0lBQUVBLElBQUksR0FBR0YsRUFBRSxDQUFDRSxJQUFJO0lBQUVDLFFBQVEsR0FBR0gsRUFBRSxDQUFDRyxRQUFRO0VBQ3hHLElBQUlDLFFBQVEsR0FBRyxTQUFYQSxRQUFRQSxDQUFhVCxFQUFFLEVBQUU7SUFDekIsSUFBSVUsT0FBTyxHQUFHVixFQUFFLENBQUNVLE9BQU87SUFDeEIsSUFBSUEsT0FBTyxDQUFDQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtNQUN2QlAsTUFBTSxDQUFDUSxJQUFJLENBQUMsY0FBYyxFQUFFO1FBQ3hCRixPQUFPLEVBQUVBLE9BQU87UUFDaEJHLEVBQUUsRUFBRXBCLDhDQUFNLENBQUMsQ0FBQztRQUNacUIsTUFBTSxFQUFFLENBQUNQLElBQUksS0FBSyxJQUFJLElBQUlBLElBQUksS0FBSyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBR0EsSUFBSSxDQUFDUSxTQUFTLE1BQU1SLElB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDBNQUFPO0FBQ2hDLG9DQUFvQywrTEFBVyxHQUFHLDBNQUFPOztBQUV6RCxJQUFJLGlCQUFpQjtBQUNyQixNQUFNLGdhQUErTTtBQUNyTixNQUFNO0FBQUE7QUFDTixzREFBc0QsK0xBQVcsR0FBRywwTUFBTztBQUMzRSxnQkFBZ0IsVUFBVTs7QUFFMUI7QUFDQTs7QUFFQSwwQ0FBMEMsK0xBQVcsR0FBRywwTUFBTzs7QUFFL0QscUJBQXFCLDBNQUFPO0FBQzVCLE9BQU87QUFDUDtBQUNBOztBQUVBLEVBQUUsVUFBVTtBQUNaO0FBQ0EsR0FBRztBQUNIOzs7QUFHOE47QUFDOU4sT0FBTyxpRUFBZSwwTUFBTyxJQUFJLDBNQUFPLFVBQVUsME1BQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RXBDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW5ub3ZhLWlwci8uL3NyYy9mZWF0dXJlcy9NZXNzYWdlcy91aS9NZXNzYWdlSW5wdXQudHN4Iiwid2VicGFjazovL2lubm92YS1pcHIvLi9zcmMvZmVhdHVyZXMvTWVzc2FnZXMvdWkvTWVzc2FnZXMudHN4Iiwid2VicGFjazovL2lubm92YS1pcHIvLi9zcmMvZmVhdHVyZXMvTWVzc2FnZXMvdWkvTWVzc2FnZXNMaXN0LnRzeCIsIndlYnBhY2s6Ly9pbm5vdmEtaXByLy4vc3JjL3NjcmVlbnMvTWVzc2FnZXNQYWdlL3VpL01lc3NhZ2VzUGFnZS50c3giLCJ3ZWJwYWNrOi8vaW5ub3ZhLWlwci8uL3NyYy9mZWF0dXJlcy9NZXNzYWdlcy91aS9NZXNzYWdlcy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9pbm5vdmEtaXByLy4vc3JjL3NjcmVlbnMvTWVzc2FnZXNQYWdlL3VpL01lc3NhZ2VzUGFnZS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly9pbm5vdmEtaXByLy4vc3JjL2ZlYXR1cmVzL01lc3NhZ2VzL3VpL01lc3NhZ2VzLm1vZHVsZS5zY3NzPzlhNWMiLCJ3ZWJwYWNrOi8vaW5ub3ZhLWlwci8uL3NyYy9zY3JlZW5zL01lc3NhZ2VzUGFnZS91aS9NZXNzYWdlc1BhZ2UubW9kdWxlLnNjc3M/MGMyNiIsIndlYnBhY2s6Ly9pbm5vdmEtaXByLy4vc3JjL2ZlYXR1cmVzL01lc3NhZ2VzL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGpzeCBhcyBfanN4LCBqc3hzIGFzIF9qc3hzIH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHsgbmFub2lkIH0gZnJvbSAnbmFub2lkJztcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnQC9zaGFyZWQvdWkvSW5wdXQnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL01lc3NhZ2VzLm1vZHVsZS5zY3NzJztcbmltcG9ydCB7IHVzZVNvY2tldCB9IGZyb20gJ0AvYXBwL3Byb3ZpZGVycy9zb2NrZXRQcm92aWRlci9Tb2NrZXRQcm92aWRlcic7XG5pbXBvcnQgeyB1c2VBcHBTZWxlY3RvciB9IGZyb20gJ0Avc2hhcmVkL2hvb2tzL3JlZHV4JztcbmltcG9ydCB7IElucHV0RmlsZSB9IGZyb20gJ0Avc2hhcmVkL3VpL0lucHV0RmlsZSc7XG5leHBvcnQgdmFyIE1lc3NhZ2VJbnB1dCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX2EgPSB1c2VGb3JtKCksIHJlZ2lzdGVyID0gX2EucmVnaXN0ZXIsIGhhbmRsZVN1Ym1pdCA9IF9hLmhhbmRsZVN1Ym1pdCwgcmVzZXQgPSBfYS5yZXNldDtcbiAgICB2YXIgc29ja2V0ID0gdXNlU29ja2V0KCk7XG4gICAgdmFyIF9iID0gdXNlQXBwU2VsZWN0b3IoZnVuY3Rpb24gKHN0YXRlKSB7IHJldHVybiBzdGF0ZS51c2VyOyB9KSwgdXNlciA9IF9iLnVzZXIsIGF1dGhEYXRhID0gX2IuYXV0aERhdGE7XG4gICAgdmFyIG9uU3VibWl0ID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciBtZXNzYWdlID0gX2EubWVzc2FnZTtcbiAgICAgICAgaWYgKG1lc3NhZ2UudHJpbSgpICE9PSAnJykge1xuICAgICAgICAgICAgc29ja2V0LmVtaXQoJ3NlbmRfbWVzc2FnZScsIHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLFxuICAgICAgICAgICAgICAgIGlkOiBuYW5vaWQoKSxcbiAgICAgICAgICAgICAgICBzZW5kZXI6ICh1c2VyID09PSBudWxsIHx8IHVzZXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHVzZXIuZmlyc3ROYW1lKSB8fCAodXNlciA9PT0gbnVsbCB8fCB1c2VyID09PSB2b2lkIDAgPyB2b2lkIDAgOiB1c2VyLnVzZXJuYW1lKSxcbiAgICAgICAgICAgICAgICBzZW5kZXJJZDogYXV0aERhdGEgPT09IG51bGwgfHwgYXV0aERhdGEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGF1dGhEYXRhLmlkLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXNldCgpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB2YXIgaGFuZGxlU2VuZFBob3RvID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgIHZhciBzZWxlY3RlZEZpbGUgPSBlLnRhcmdldC5maWxlc1swXTtcbiAgICAgICAgaWYgKHNlbGVjdGVkRmlsZSkge1xuICAgICAgICAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgIHZhciBwaG90b0RhdGEgPSBldmVudC50YXJnZXQucmVzdWx0O1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHBob3RvRGF0YSk7XG4gICAgICAgICAgICAgICAgc29ja2V0LmVtaXQoJ3NlbmRfbWVzc2FnZScsIHtcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGlkOiBuYW5vaWQoKSxcbiAgICAgICAgICAgICAgICAgICAgc2VuZGVyOiAodXNlciA9PT0gbnVsbCB8fCB1c2VyID09PSB2b2lkIDAgPyB2b2lkIDAgOiB1c2VyLmZpcnN0TmFtZSkgfHwgKHVzZXIgPT09IG51bGwgfHwgdXNlciA9PT0gdm9pZCAwID8gdm9pZCAwIDogdXNlci51c2VybmFtZSksXG4gICAgICAgICAgICAgICAgICAgIHNlbmRlcklkOiBhdXRoRGF0YSA9PT0gbnVsbCB8fCBhdXRoRGF0YSA9PT0gdm9pZCAwID8gdm9pZCAwIDogYXV0aERhdGEuaWQsXG4gICAgICAgICAgICAgICAgICAgIGZpbGU6IHBob3RvRGF0YSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChzZWxlY3RlZEZpbGUpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gKF9qc3hzKFwiZm9ybVwiLCB7IG5hbWU6IFwiZm9ybU1lc3NhZ2VcIiwgb25TdWJtaXQ6IGhhbmRsZVN1Ym1pdChvblN1Ym1pdCksIGNsYXNzTmFtZTogc3R5bGVzLm1lc3NhZ2VJbnB1dEZvcm0sIGNoaWxkcmVuOiBbX2pzeChJbnB1dCwgeyBmaWVsZE5hbWU6IFwibWVzc2FnZVwiLCByZWdpc3RlcjogcmVnaXN0ZXIsIGlkOiBcIm1lc3NhZ2VcIiwgY2xhc3NOYW1lOiBzdHlsZXMubWVzc2FnZUlucHV0LCBydWxlczogeyByZXF1aXJlZDogdHJ1ZSB9LCBhdXRvQ29tcGxldGU6IFwib2ZmXCIgfSksIF9qc3goSW5wdXRGaWxlLCB7IGxhYmVsOiBcIlxcdTA0MjRcXHUwNDNFXFx1MDQ0MlxcdTA0M0VcIiwgb25DaGFuZ2U6IGhhbmRsZVNlbmRQaG90byB9KSwgX2pzeChCdXR0b24sIHsgaHRtbFR5cGU6IFwic3VibWl0XCIsIGNoaWxkcmVuOiBcIlxcdTA0MUVcXHUwNDQyXFx1MDQzRlxcdTA0NDBcXHUwNDMwXFx1MDQzMlxcdTA0MzhcXHUwNDQyXFx1MDQ0Q1wiIH0pXSB9KSk7XG59O1xuIiwiaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IE1lc3NhZ2VJbnB1dCB9IGZyb20gJy4vTWVzc2FnZUlucHV0JztcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9NZXNzYWdlcy5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgeyBNZXNzYWdlc0xpc3QgfSBmcm9tICcuL01lc3NhZ2VzTGlzdCc7XG5leHBvcnQgdmFyIE1lc3NhZ2VzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gKF9qc3hzKFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBzdHlsZXMubWVzc2FnZXNDb250ZWluZXIsIGNoaWxkcmVuOiBbX2pzeChNZXNzYWdlc0xpc3QsIHt9KSwgX2pzeChNZXNzYWdlSW5wdXQsIHt9KV0gfSkpOyB9O1xuIiwidmFyIF9fc3ByZWFkQXJyYXkgPSAodGhpcyAmJiB0aGlzLl9fc3ByZWFkQXJyYXkpIHx8IGZ1bmN0aW9uICh0bywgZnJvbSwgcGFjaykge1xuICAgIGlmIChwYWNrIHx8IGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIGZvciAodmFyIGkgPSAwLCBsID0gZnJvbS5sZW5ndGgsIGFyOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgIGlmIChhciB8fCAhKGkgaW4gZnJvbSkpIHtcbiAgICAgICAgICAgIGlmICghYXIpIGFyID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZnJvbSwgMCwgaSk7XG4gICAgICAgICAgICBhcltpXSA9IGZyb21baV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRvLmNvbmNhdChhciB8fCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tKSk7XG59O1xuaW1wb3J0IHsganN4IGFzIF9qc3gsIGpzeHMgYXMgX2pzeHMgfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY24gZnJvbSAnY2xhc3NuYW1lcyc7XG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL01lc3NhZ2VzLm1vZHVsZS5zY3NzJztcbmltcG9ydCB7IHVzZVNvY2tldCB9IGZyb20gJ0AvYXBwL3Byb3ZpZGVycy9zb2NrZXRQcm92aWRlci9Tb2NrZXRQcm92aWRlcic7XG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnQC9zaGFyZWQvaG9va3MvdXNlQXV0aCc7XG5leHBvcnQgdmFyIE1lc3NhZ2VzTGlzdCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX2EgPSB1c2VTdGF0ZShbXSksIG1lc3NhZ2VzID0gX2FbMF0sIHNldE1lc3NhZ2VzID0gX2FbMV07XG4gICAgdmFyIHNvY2tldCA9IHVzZVNvY2tldCgpO1xuICAgIHZhciB1c2VySWQgPSB1c2VBdXRoKCkuaWQ7XG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc29ja2V0Lm9uKCdyZWNlaXZlX21lc3NhZ2UnLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgc2V0TWVzc2FnZXMoZnVuY3Rpb24gKHByZXZNZXNzYWdlcykgeyByZXR1cm4gX19zcHJlYWRBcnJheShfX3NwcmVhZEFycmF5KFtdLCBwcmV2TWVzc2FnZXMsIHRydWUpLCBbZGF0YV0sIGZhbHNlKTsgfSk7XG4gICAgICAgIH0pO1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4gKF9qc3goXCJkaXZcIiwgeyBjbGFzc05hbWU6IHN0eWxlcy5tZXNzYWdlc0xpc3QsIGNoaWxkcmVuOiBtZXNzYWdlcy5tYXAoZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICB2YXIgbWVzc2FnZSA9IF9hLm1lc3NhZ2UsIGlkID0gX2EuaWQsIHNlbmRlciA9IF9hLnNlbmRlciwgc2VuZGVySWQgPSBfYS5zZW5kZXJJZCwgZmlsZSA9IF9hLmZpbGU7XG4gICAgICAgICAgICByZXR1cm4gKF9qc3hzKFwiZGl2XCIsIHsgY2xhc3NOYW1lOiBjbihzdHlsZXMubWVzc2FnZSwgdXNlcklkID09PSBzZW5kZXJJZCA/IHN0eWxlcy5tZXNzYWdlTWUgOiBzdHlsZXMubWVzc2FnZU90aGVyKSwgY2hpbGRyZW46IFtfanN4KFwicFwiLCB7IGNoaWxkcmVuOiBcIlwiLmNvbmNhdChzZW5kZXIsIFwiOiBcIikuY29uY2F0KG1lc3NhZ2UpIH0pLCBmaWxlICYmIF9qc3goSW1hZ2UsIHsgc3JjOiBmaWxlLCBhbHQ6IFwiZmlsZVwiLCB3aWR0aDogMjAwIH0pXSB9LCBpZCkpO1xuICAgICAgICB9KSB9KSk7XG59O1xuIiwiaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IENvbCwgUm93IH0gZnJvbSAncmVhY3QtZ3JpZC1zeXN0ZW0nO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL01lc3NhZ2VzUGFnZS5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgeyBNZXNzYWdlcyB9IGZyb20gJ0AvZmVhdHVyZXMvTWVzc2FnZXMnO1xudmFyIE1lc3NhZ2VzUGFnZSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIChfanN4KFJvdywgeyBjbGFzc05hbWU6IHN0eWxlcy5tZXNzYWdlc1dyYXBwZXIsIGNoaWxkcmVuOiBfanN4KENvbCwgeyBjbGFzc05hbWU6IHN0eWxlcy5tZXNzYWdlc0NvbnRhaW5lciwgY2hpbGRyZW46IF9qc3goTWVzc2FnZXMsIHt9KSB9KSB9KSk7IH07XG5leHBvcnQgZGVmYXVsdCBNZXNzYWdlc1BhZ2U7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLnNyYy1mZWF0dXJlcy1NZXNzYWdlcy11aS1NZXNzYWdlcy1tb2R1bGVfX21lc3NhZ2VzQ29udGVpbmVyLS1EVHQ1TSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnNyYy1mZWF0dXJlcy1NZXNzYWdlcy11aS1NZXNzYWdlcy1tb2R1bGVfX21lc3NhZ2VJbnB1dEZvcm0tLUxGeDVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjVyZW07XG59XG5cbi5zcmMtZmVhdHVyZXMtTWVzc2FnZXMtdWktTWVzc2FnZXMtbW9kdWxlX19tZXNzYWdlSW5wdXQtLWZrMXFsIHtcbiAgZmxleC1ncm93OiAxO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBwYWRkaW5nOiAwLjRyZW0gMXJlbTtcbn1cblxuLnNyYy1mZWF0dXJlcy1NZXNzYWdlcy11aS1NZXNzYWdlcy1tb2R1bGVfX21lc3NhZ2VzTGlzdC0tZXRrdmcge1xuICBmbGV4LWdyb3c6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5zcmMtZmVhdHVyZXMtTWVzc2FnZXMtdWktTWVzc2FnZXMtbW9kdWxlX19tZXNzYWdlLS1sU3V0NyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXdoaXRlLWNvbG9yKTtcbiAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgbWF4LXdpZHRoOiA3MCU7XG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gIG1hcmdpbi1ib3R0b206IDAuOHJlbTtcbn1cblxuLnNyYy1mZWF0dXJlcy1NZXNzYWdlcy11aS1NZXNzYWdlcy1tb2R1bGVfX21lc3NhZ2VNZS0tZTBXdnEge1xuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xufVxuXG4uc3JjLWZlYXR1cmVzLU1lc3NhZ2VzLXVpLU1lc3NhZ2VzLW1vZHVsZV9fbWVzc2FnZU90aGVyLS10R0xlaCB7XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2ZlYXR1cmVzL01lc3NhZ2VzL3VpL01lc3NhZ2VzLm1vZHVsZS5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFFQTtFQUNFLG9DQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxzQkFBQTtBQUNGOztBQUVBO0VBQ0Usb0JBQUE7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIubWVzc2FnZXNDb250ZWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5tZXNzYWdlSW5wdXRGb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAwLjVyZW07XFxufVxcblxcbi5tZXNzYWdlSW5wdXQge1xcbiAgZmxleC1ncm93OiAxO1xcbiAgbWFyZ2luLWJvdHRvbTogMDtcXG4gIHBhZGRpbmc6IDAuNHJlbSAxcmVtO1xcbn1cXG5cXG4ubWVzc2FnZXNMaXN0IHtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ubWVzc2FnZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS13aGl0ZS1jb2xvcik7XFxuICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIG1heC13aWR0aDogNzAlO1xcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG4gIG1hcmdpbi1ib3R0b206IDAuOHJlbTtcXG59XFxuXFxuLm1lc3NhZ2VNZSB7XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4ubWVzc2FnZU90aGVyIHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJtZXNzYWdlc0NvbnRlaW5lclwiOiBgc3JjLWZlYXR1cmVzLU1lc3NhZ2VzLXVpLU1lc3NhZ2VzLW1vZHVsZV9fbWVzc2FnZXNDb250ZWluZXItLURUdDVNYCxcblx0XCJtZXNzYWdlSW5wdXRGb3JtXCI6IGBzcmMtZmVhdHVyZXMtTWVzc2FnZXMtdWktTWVzc2FnZXMtbW9kdWxlX19tZXNzYWdlSW5wdXRGb3JtLS1MRng1bGAsXG5cdFwibWVzc2FnZUlucHV0XCI6IGBzcmMtZmVhdHVyZXMtTWVzc2FnZXMtdWktTWVzc2FnZXMtbW9kdWxlX19tZXNzYWdlSW5wdXQtLWZrMXFsYCxcblx0XCJtZXNzYWdlc0xpc3RcIjogYHNyYy1mZWF0dXJlcy1NZXNzYWdlcy11aS1NZXNzYWdlcy1tb2R1bGVfX21lc3NhZ2VzTGlzdC0tZXRrdmdgLFxuXHRcIm1lc3NhZ2VcIjogYHNyYy1mZWF0dXJlcy1NZXNzYWdlcy11aS1NZXNzYWdlcy1tb2R1bGVfX21lc3NhZ2UtLWxTdXQ3YCxcblx0XCJtZXNzYWdlTWVcIjogYHNyYy1mZWF0dXJlcy1NZXNzYWdlcy11aS1NZXNzYWdlcy1tb2R1bGVfX21lc3NhZ2VNZS0tZTBXdnFgLFxuXHRcIm1lc3NhZ2VPdGhlclwiOiBgc3JjLWZlYXR1cmVzLU1lc3NhZ2VzLXVpLU1lc3NhZ2VzLW1vZHVsZV9fbWVzc2FnZU90aGVyLS10R0xlaGBcbn07XG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuc3JjLXNjcmVlbnMtTWVzc2FnZXNQYWdlLXVpLU1lc3NhZ2VzUGFnZS1tb2R1bGVfX21lc3NhZ2VzQ29udGFpbmVyLS1ERG9TRSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyZXktY29sb3ItNjAwKTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBwYWRkaW5nOiAxcmVtIDA7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG59XG5cbi5zcmMtc2NyZWVucy1NZXNzYWdlc1BhZ2UtdWktTWVzc2FnZXNQYWdlLW1vZHVsZV9fbWVzc2FnZXNXcmFwcGVyLS1jbk1aQiB7XG4gIGhlaWdodDogMTAwJTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zY3JlZW5zL01lc3NhZ2VzUGFnZS91aS9NZXNzYWdlc1BhZ2UubW9kdWxlLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSx1Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm1lc3NhZ2VzQ29udGFpbmVyIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyZXktY29sb3ItNjAwKTtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIHBhZGRpbmc6IDFyZW0gMDtcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5tZXNzYWdlc1dyYXBwZXIge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJtZXNzYWdlc0NvbnRhaW5lclwiOiBgc3JjLXNjcmVlbnMtTWVzc2FnZXNQYWdlLXVpLU1lc3NhZ2VzUGFnZS1tb2R1bGVfX21lc3NhZ2VzQ29udGFpbmVyLS1ERG9TRWAsXG5cdFwibWVzc2FnZXNXcmFwcGVyXCI6IGBzcmMtc2NyZWVucy1NZXNzYWdlc1BhZ2UtdWktTWVzc2FnZXNQYWdlLW1vZHVsZV9fbWVzc2FnZXNXcmFwcGVyLS1jbk1aQmBcbn07XG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9NZXNzYWdlcy5tb2R1bGUuc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5pZiAobW9kdWxlLmhvdCkge1xuICBpZiAoIWNvbnRlbnQubG9jYWxzIHx8IG1vZHVsZS5ob3QuaW52YWxpZGF0ZSkge1xuICAgIHZhciBpc0VxdWFsTG9jYWxzID0gZnVuY3Rpb24gaXNFcXVhbExvY2FscyhhLCBiLCBpc05hbWVkRXhwb3J0KSB7XG4gIGlmICghYSAmJiBiIHx8IGEgJiYgIWIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHA7XG4gIGZvciAocCBpbiBhKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmIChhW3BdICE9PSBiW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIGZvciAocCBpbiBiKSB7XG4gICAgaWYgKGlzTmFtZWRFeHBvcnQgJiYgcCA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmICghYVtwXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG4gICAgdmFyIGlzTmFtZWRFeHBvcnQgPSAhY29udGVudC5sb2NhbHM7XG4gICAgdmFyIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXG4gICAgICBcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbNF0udXNlWzFdIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9NZXNzYWdlcy5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscywgaXNOYW1lZEV4cG9ydCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vTWVzc2FnZXMubW9kdWxlLnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vTWVzc2FnZXNQYWdlLm1vZHVsZS5zY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cbmlmIChtb2R1bGUuaG90KSB7XG4gIGlmICghY29udGVudC5sb2NhbHMgfHwgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKSB7XG4gICAgdmFyIGlzRXF1YWxMb2NhbHMgPSBmdW5jdGlvbiBpc0VxdWFsTG9jYWxzKGEsIGIsIGlzTmFtZWRFeHBvcnQpIHtcbiAgaWYgKCFhICYmIGIgfHwgYSAmJiAhYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgcDtcbiAgZm9yIChwIGluIGEpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGFbcF0gIT09IGJbcF0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZm9yIChwIGluIGIpIHtcbiAgICBpZiAoaXNOYW1lZEV4cG9ydCAmJiBwID09PSBcImRlZmF1bHRcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKCFhW3BdKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG4gIHJldHVybiB0cnVlO1xufTtcbiAgICB2YXIgaXNOYW1lZEV4cG9ydCA9ICFjb250ZW50LmxvY2FscztcbiAgICB2YXIgb2xkTG9jYWxzID0gaXNOYW1lZEV4cG9ydCA/IG5hbWVkRXhwb3J0IDogY29udGVudC5sb2NhbHM7XG5cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcbiAgICAgIFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1s0XS51c2VbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL01lc3NhZ2VzUGFnZS5tb2R1bGUuc2Nzc1wiLFxuICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWlzRXF1YWxMb2NhbHMob2xkTG9jYWxzLCBpc05hbWVkRXhwb3J0ID8gbmFtZWRFeHBvcnQgOiBjb250ZW50LmxvY2FscywgaXNOYW1lZEV4cG9ydCkpIHtcbiAgICAgICAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIG9sZExvY2FscyA9IGlzTmFtZWRFeHBvcnQgPyBuYW1lZEV4cG9ydCA6IGNvbnRlbnQubG9jYWxzO1xuXG4gICAgICAgICAgICAgIHVwZGF0ZShjb250ZW50KTtcbiAgICAgIH1cbiAgICApXG4gIH1cblxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7XG4gICAgdXBkYXRlKCk7XG4gIH0pO1xufVxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzRdLnVzZVsxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vTWVzc2FnZXNQYWdlLm1vZHVsZS5zY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiZXhwb3J0IHsgTWVzc2FnZXMgfSBmcm9tICcuL3VpL01lc3NhZ2VzJztcbiJdLCJuYW1lcyI6WyJqc3giLCJfanN4IiwianN4cyIsIl9qc3hzIiwidXNlRm9ybSIsIkJ1dHRvbiIsIm5hbm9pZCIsIklucHV0Iiwic3R5bGVzIiwidXNlU29ja2V0IiwidXNlQXBwU2VsZWN0b3IiLCJJbnB1dEZpbGUiLCJNZXNzYWdlSW5wdXQiLCJfYSIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwicmVzZXQiLCJzb2NrZXQiLCJfYiIsInN0YXRlIiwidXNlciIsImF1dGhEYXRhIiwib25TdWJtaXQiLCJtZXNzYWdlIiwidHJpbSIsImVtaXQiLCJpZCIsInNlbmRlciIsImZpcnN0TmFtZSIsInVzZXJuYW1lIiwic2VuZGVySWQiLCJoYW5kbGVTZW5kUGhvdG8iLCJlIiwicmVhZGVyIiwiRmlsZVJlYWRlciIsInNlbGVjdGVkRmlsZSIsInRhcmdldCIsImZpbGVzIiwib25sb2FkIiwiZXZlbnQiLCJwaG90b0RhdGEiLCJyZXN1bHQiLCJjb25zb2xlIiwibG9nIiwiZmlsZSIsInJlYWRBc0RhdGFVUkwiLCJuYW1lIiwiY2xhc3NOYW1lIiwibWVzc2FnZUlucHV0Rm9ybSIsImNoaWxkcmVuIiwiZmllbGROYW1lIiwibWVzc2FnZUlucHV0IiwicnVsZXMiLCJyZXF1aXJlZCIsImF1dG9Db21wbGV0ZSIsImxhYmVsIiwib25DaGFuZ2UiLCJodG1sVHlwZSIsIk1lc3NhZ2VzTGlzdCIsIk1lc3NhZ2VzIiwibWVzc2FnZXNDb250ZWluZXIiLCJfX3NwcmVhZEFycmF5IiwidG8iLCJmcm9tIiwicGFjayIsImFyZ3VtZW50cyIsImxlbmd0aCIsImkiLCJsIiwiYXIiLCJBcnJheSIsInByb3RvdHlwZSIsInNsaWNlIiwiY2FsbCIsImNvbmNhdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiY24iLCJJbWFnZSIsInVzZUF1dGgiLCJtZXNzYWdlcyIsInNldE1lc3NhZ2VzIiwidXNlcklkIiwib24iLCJkYXRhIiwicHJldk1lc3NhZ2VzIiwibWVzc2FnZXNMaXN0IiwibWFwIiwibWVzc2FnZU1lIiwibWVzc2FnZU90aGVyIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJDb2wiLCJSb3ciLCJNZXNzYWdlc1BhZ2UiLCJtZXNzYWdlc1dyYXBwZXIiLCJtZXNzYWdlc0NvbnRhaW5lciJdLCJzb3VyY2VSb290IjoiIn0=