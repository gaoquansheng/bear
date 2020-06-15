"use weex:vue";
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************************************************************************************!*\
  !*** C:/Users/DELL/Desktop/gitlab/graduation/bear-app/main.js?{"page":"pages%2Flive%2Flive"} ***!
  \***********************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uni-app-style */ 1);
/* harmony import */ var uni_app_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uni_app_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_live_live_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/live/live.nvue?mpType=page */ 4);

        
        
        
        _pages_live_live_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"].mpType = 'page'
        _pages_live_live_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"].route = 'pages/live/live'
        _pages_live_live_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"].el = '#root'
        new Vue(_pages_live_live_nvue_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"])
        

/***/ }),
/* 1 */
/*!************************************************************************************!*\
  !*** C:/Users/DELL/Desktop/gitlab/graduation/bear-app/main.js?{"type":"appStyle"} ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Vue.prototype.__$appStyle__ = {}
Vue.prototype.__merge_style && Vue.prototype.__merge_style(__webpack_require__(/*! ./App.vue?vue&type=style&index=0&lang=css */ 2).default,Vue.prototype.__$appStyle__)


/***/ }),
/* 2 */
/*!************************************************************************************************!*\
  !*** C:/Users/DELL/Desktop/gitlab/graduation/bear-app/App.vue?vue&type=style&index=0&lang=css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../Downloads/HBuilderX.2.3.3.20190923.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../Downloads/HBuilderX.2.3.3.20190923.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../../../Downloads/HBuilderX.2.3.3.20190923.full/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../../../Downloads/HBuilderX.2.3.3.20190923.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../../../Downloads/HBuilderX.2.3.3.20190923.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=style&index=0&lang=css */ 3);
/* harmony import */ var _Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_style_index_0_lang_css__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 3 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/DELL/Desktop/gitlab/graduation/bear-app/App.vue?vue&type=style&index=0&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {}

/***/ }),
/* 4 */
/*!*****************************************************************************************!*\
  !*** C:/Users/DELL/Desktop/gitlab/graduation/bear-app/pages/live/live.nvue?mpType=page ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _live_nvue_vue_type_template_id_46e591c3_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./live.nvue?vue&type=template&id=46e591c3&mpType=page */ 5);
/* harmony import */ var _live_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./live.nvue?vue&type=script&lang=js&mpType=page */ 7);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _live_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _live_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../Downloads/HBuilderX.2.3.3.20190923.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 22);

var renderjs


function injectStyles (context) {
  
  if(!this.options.style){
          this.options.style = {}
      }
      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){
        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)
      }
      if(Vue.prototype.__merge_style){
                Vue.prototype.__merge_style(__webpack_require__(/*! ./live.nvue?vue&type=style&index=0&lang=css&mpType=page */ 29).default, this.options.style)
            }else{
                Object.assign(this.options.style,__webpack_require__(/*! ./live.nvue?vue&type=style&index=0&lang=css&mpType=page */ 29).default)
            }

}

/* normalize component */

var component = Object(_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _live_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__["default"],
  _live_nvue_vue_type_template_id_46e591c3_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"],
  _live_nvue_vue_type_template_id_46e591c3_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  "8601db86",
  false,
  _live_nvue_vue_type_template_id_46e591c3_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

injectStyles.call(component)
component.options.__file = "Desktop/gitlab/graduation/bear-app/pages/live/live.nvue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 5 */
/*!***********************************************************************************************************************!*\
  !*** C:/Users/DELL/Desktop/gitlab/graduation/bear-app/pages/live/live.nvue?vue&type=template&id=46e591c3&mpType=page ***!
  \***********************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_live_nvue_vue_type_template_id_46e591c3_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Downloads/HBuilderX.2.3.3.20190923.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../Downloads/HBuilderX.2.3.3.20190923.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!../../../../../../Downloads/HBuilderX.2.3.3.20190923.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../Downloads/HBuilderX.2.3.3.20190923.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../../../../Downloads/HBuilderX.2.3.3.20190923.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./live.nvue?vue&type=template&id=46e591c3&mpType=page */ 6);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_live_nvue_vue_type_template_id_46e591c3_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_live_nvue_vue_type_template_id_46e591c3_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_live_nvue_vue_type_template_id_46e591c3_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_js_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_live_nvue_vue_type_template_id_46e591c3_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 6 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/DELL/Desktop/gitlab/graduation/bear-app/pages/live/live.nvue?vue&type=template&id=46e591c3&mpType=page ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "scroll-view",
    {
      staticStyle: { flexDirection: "column" },
      attrs: {
        scrollY: true,
        showScrollbar: true,
        enableBackToTop: true,
        bubble: "true"
      }
    },
    [
      _c("div", [
        _vm.markact
          ? _c(
              "view",
              {
                staticClass: ["mark"],
                style: { width: _vm.width + "px", height: _vm.height + "px" }
              },
              [
                _c("u-text", { staticClass: ["mark-text"] }, [
                  _vm._v("直播启动中...")
                ])
              ]
            )
          : _vm._e(),
        _c(
          "view",
          [
            _c("live-pusher", {
              ref: "livePusher",
              style: { width: _vm.width + "px", height: _vm.height + "px" },
              attrs: {
                beauty: _vm.beauty,
                id: "livePusher",
                url: _vm.rtmpUrl,
                mode: "FHD",
                aspect: "9:16"
              },
              on: {
                statechange: _vm.statechange,
                netstatus: _vm.netstatus,
                error: _vm.error
              }
            }),
            _c(
              "view",
              { staticClass: ["chat"] },
              [
                _c(
                  "scroll-view",
                  {
                    staticClass: ["scroll-Y"],
                    attrs: { scrollTop: _vm.scrollTop, scrollY: "true" }
                  },
                  _vm._l(_vm.chatList, function(it, i) {
                    return _c("view", { key: i, staticClass: ["chat-list"] }, [
                      _c("u-text", { staticClass: ["chat-username"] }, [
                        _vm._v("用户" + _vm._s(it.userTel) + "：")
                      ]),
                      _c("u-text", { staticClass: ["chat-usertext"] }, [
                        _vm._v(_vm._s(it.message))
                      ])
                    ])
                  }),
                  0
                )
              ],
              1
            ),
            _c(
              "view",
              { staticClass: ["but"], style: { width: _vm.width + "px" } },
              _vm._l(_vm.tabList, function(item, id) {
                return _c(
                  "view",
                  {
                    key: id,
                    staticClass: ["meiyanbut"],
                    on: {
                      click: function($event) {
                        _vm.tmpMethods(item.func)
                      }
                    }
                  },
                  [
                    _c("u-image", {
                      staticClass: ["but-img"],
                      attrs: { src: item.image }
                    }),
                    _c("u-text", { staticClass: ["but-text"] }, [
                      _vm._v(_vm._s(item.name))
                    ])
                  ],
                  1
                )
              }),
              0
            )
          ],
          1
        )
      ])
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 7 */
/*!*****************************************************************************************************************!*\
  !*** C:/Users/DELL/Desktop/gitlab/graduation/bear-app/pages/live/live.nvue?vue&type=script&lang=js&mpType=page ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_live_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Downloads/HBuilderX.2.3.3.20190923.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../../../Downloads/HBuilderX.2.3.3.20190923.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../../../Downloads/HBuilderX.2.3.3.20190923.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./live.nvue?vue&type=script&lang=js&mpType=page */ 8);
/* harmony import */ var _Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_live_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_live_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_live_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_live_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_live_nvue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 8 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/DELL/Desktop/gitlab/graduation/bear-app/pages/live/live.nvue?vue&type=script&lang=js&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;






























var _vuex = __webpack_require__(/*! vuex */ 10);
var _uniPopup = _interopRequireDefault(__webpack_require__(/*! @/components/uni-popup/uni-popup.vue */ 11));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default = { data: function data() {return { width: '', height: '', url: 'rtmp://39.102.80.119:1935/live/', //这是推流地址
      context: null, context1: null, markact: true, beauty: 0, tabList: [{ name: "开启美颜", image: "../../static/image/meiyan.png", func: "openBeauty" }, { name: "结束直播", image: "../../static/image/stop.png", func: "stopLive" }, { name: "切换摄像头", image: "../../static/image/qiehuan.png", func: "switchCamera" }], chatList: [], scrollTop: 0, websocket: null, flag: false };

  },
  onLoad: function onLoad() {
    //获取设备的宽度和高度,设置直播全屏
    var res = uni.getSystemInfoSync();
    this.width = res.windowWidth;
    this.height = res.windowHeight;

  },
  onReady: function onReady() {var _this2 = this;
    this.context = uni.createLivePusherContext('livePusher', this);
    setTimeout(function () {
      _this2.startLive();
    }, 1000);
  },
  computed: (0, _vuex.mapState)({
    rtmpUrl: function rtmpUrl(state) {
      var userTel = state.userTel;
      var lat = state.lat; //这里获取经纬度
      var lng = state.lng;
      return this.url + userTel + "?lat=" + lat + "&lng=" + lng;
    } }),

  methods: {
    tmpMethods: function tmpMethods(methodsName) {
      this[methodsName]();
    },
    //直播相关方法
    openBeauty: function openBeauty() {
      if (this.beauty == 0) {
        this.beauty = 9;
        this.tabList[0].name = "关闭美颜";
      } else {
        this.beauty = 0;
        this.tabList[0].name = "开启美颜";
      }
    },
    startLive: function startLive() {
      //开始推流之前要先调用一次停止，或关闭视频预览
      //我测试关闭视频预览没成功,就先这样吧
      var _this = this;
      this.context.stop({
        success: function success(a) {
          __f__("log", JSON.stringify(a), " at pages/live/live.nvue:108");

        } });

      this.context.start({
        success: function success(a) {
          _this.markact = false;
          __f__("log", 'livePusher.start:' + JSON.stringify(a), " at pages/live/live.nvue:115");
          // _this.context.switchCamera();
          _this.initWebSocket();
        } });



    },
    stopLive: function stopLive() {
      var _this = this;
      this.context.stop({
        success: function success(a) {
          __f__("log", JSON.stringify(a), " at pages/live/live.nvue:127");
          // _this.websocket.close();
          uni.switchTab({
            url: "beforeLive" });

        } });


    },
    switchCamera: function switchCamera() {
      this.context.switchCamera({
        success: function success(a) {
          __f__("log", "livePusher.switchCamera:" + JSON.stringify(a), " at pages/live/live.nvue:139");
        } });

    },
    error: function error(e) {
      __f__("log", "error:" + JSON.stringify(e), " at pages/live/live.nvue:144");
    },
    //WebSocket相关方法
    initWebSocket: function initWebSocket() {
      var _this = this;
      //建立websocket连接
      this.websocket = uni.connectSocket({
        url: "ws://39.102.80.119:8080/webSocketServer/" + this.$store.state.userTel,
        success: function success() {
          __f__("log", "连接成功", " at pages/live/live.nvue:153");
        },
        fail: function fail() {
          __f__("log", "连接失败", " at pages/live/live.nvue:156");
        } });

      this.websocket.onOpen(this.websocketOnOpen);
      this.websocket.onMessage(this.websocketOnMessage);
      this.websocket.onClose(this.websocketOnClose);
      this.websocket.onError(this.websocketOnError);
    },
    websocketOnOpen: function websocketOnOpen() {
      __f__("log", "连接成功l hhh", " at pages/live/live.nvue:165");
    },
    websocketOnMessage: function websocketOnMessage(res) {
      __f__("log", "接受数据", " at pages/live/live.nvue:168");
      // console.log(res.data);

      this.chatList.push(JSON.parse(res.data));
      __f__("log", this.chatList, " at pages/live/live.nvue:172");
    },
    websocketOnClose: function websocketOnClose() {
      __f__("log", "断开连接", " at pages/live/live.nvue:175");
    },
    websocketOnError: function websocketOnError() {
      __f__("log", "连接失败", " at pages/live/live.nvue:178");
      // this.initWebSocket();
    },
    websocketSend: function websocketSend(data) {
      this.websocket.send(data);
    },
    websocketClose: function websocketClose() {
      __f__("log", "主动断开连接", " at pages/live/live.nvue:185");
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 9)["default"]))

/***/ }),
/* 9 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.log = log;exports.default = formatLog;function typof(v) {
  var s = Object.prototype.toString.call(v);
  return s.substring(8, s.length - 1);
}

function isDebugMode() {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__;
}

function log(type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  console[type].apply(console, args);
}

function formatLog() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  var type = args.shift();
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'));
    return console[type].apply(console, args);
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase();

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v) + '---END:JSON---';
      } catch (e) {
        v = '[object object]';
      }
    } else {
      if (v === null) {
        v = '---NULL---';
      } else if (v === undefined) {
        v = '---UNDEFINED---';
      } else {
        var vType = typof(v).toUpperCase();

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---';
        } else {
          v = String(v);
        }
      }
    }

    return v;
  });
  var msg = '';

  if (msgs.length > 1) {
    var lastMsg = msgs.pop();
    msg = msgs.join('---COMMA---');

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg;
    } else {
      msg += '---COMMA---' + lastMsg;
    }
  } else {
    msg = msgs[0];
  }

  console[type](msg);
}

/***/ }),
/* 10 */
/*!********************************************!*\
  !*** ./node_modules/vuex/dist/vuex.esm.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.install = install;exports.default = exports.createNamespacedHelpers = exports.mapActions = exports.mapGetters = exports.mapMutations = exports.mapState = exports.Store = void 0; /**
                                                                                                                                                                                                                                                                      * vuex v3.0.1
                                                                                                                                                                                                                                                                      * (c) 2017 Evan You
                                                                                                                                                                                                                                                                      * @license MIT
                                                                                                                                                                                                                                                                      */
var applyMixin = function applyMixin(Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if (options === void 0) options = {};

      options.init = options.init ?
      [vuexInit].concat(options.init) :
      vuexInit;
      _init.call(this, options);
    };
  }

  /**
     * Vuex init hook, injected into each instances init hooks list.
     */

  function vuexInit() {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function' ?
      options.store() :
      options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
};

var devtoolHook =
typeof window !== 'undefined' &&
window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin(store) {
  if (!devtoolHook) {return;}

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  });
}

/**
   * Get the first item that pass the test
   * by second argument function
   *
   * @param {Array} list
   * @param {Function} f
   * @return {*}
   */
/**
       * Deep copy the given object considering circular structure.
       * This function caches all nested objects and its copies.
       * If it detects circular structure, use cached copy to avoid infinite loop.
       *
       * @param {*} obj
       * @param {Array<Object>} cache
       * @return {*}
       */


/**
           * forEach for object
           */
function forEachValue(obj, fn) {
  Object.keys(obj).forEach(function (key) {return fn(obj[key], key);});
}

function isObject(obj) {
  return obj !== null && typeof obj === 'object';
}

function isPromise(val) {
  return val && typeof val.then === 'function';
}

function assert(condition, msg) {
  if (!condition) {throw new Error("[vuex] " + msg);}
}

var Module = function Module(rawModule, runtime) {
  this.runtime = runtime;
  this._children = Object.create(null);
  this._rawModule = rawModule;
  var rawState = rawModule.state;
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors$1 = { namespaced: { configurable: true } };

prototypeAccessors$1.namespaced.get = function () {
  return !!this._rawModule.namespaced;
};

Module.prototype.addChild = function addChild(key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild(key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild(key) {
  return this._children[key];
};

Module.prototype.update = function update(rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild(fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter(fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction(fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation(fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties(Module.prototype, prototypeAccessors$1);

var ModuleCollection = function ModuleCollection(rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get(path) {
  return path.reduce(function (module, key) {
    return module.getChild(key);
  }, this.root);
};

ModuleCollection.prototype.getNamespace = function getNamespace(path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '');
  }, '');
};

ModuleCollection.prototype.update = function update$1(rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register(path, rawModule, runtime) {
  var this$1 = this;
  if (runtime === void 0) runtime = true;

  if (true) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister(path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  if (!parent.getChild(key).runtime) {return;}

  parent.removeChild(key);
};

function update(path, targetModule, newModule) {
  if (true) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if (true) {
          console.warn(
          "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
          'manual reload is needed');

        }
        return;
      }
      update(
      path.concat(key),
      targetModule.getChild(key),
      newModule.modules[key]);

    }
  }
}

var functionAssert = {
  assert: function assert(value) {return typeof value === 'function';},
  expected: 'function' };


var objectAssert = {
  assert: function assert(value) {return typeof value === 'function' ||
    typeof value === 'object' && typeof value.handler === 'function';},
  expected: 'function or object with "handler" function' };


var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert };


function assertRawModule(path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) {return;}

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
      assertOptions.assert(value),
      makeAssertionMessage(path, key, type, value, assertOptions.expected));

    });
  });
}

function makeAssertionMessage(path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + path.join('.') + "\"";
  }
  buf += " is " + JSON.stringify(value) + ".";
  return buf;
}

var Vue; // bind on install

var Store = function Store(options) {
  var this$1 = this;
  if (options === void 0) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if (true) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "Store must be called with the new operator.");
  }

  var plugins = options.plugins;if (plugins === void 0) plugins = [];
  var strict = options.strict;if (strict === void 0) strict = false;

  var state = options.state;if (state === void 0) state = {};
  if (typeof state === 'function') {
    state = state() || {};
  }

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch(type, payload) {
    return dispatch.call(store, type, payload);
  };
  this.commit = function boundCommit(type, payload, options) {
    return commit.call(store, type, payload, options);
  };

  // strict mode
  this.strict = strict;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) {return plugin(this$1);});

  if (Vue.config.devtools) {
    devtoolPlugin(this);
  }
};exports.Store = Store;

var prototypeAccessors = { state: { configurable: true } };

prototypeAccessors.state.get = function () {
  return this._vm._data.$$state;
};

prototypeAccessors.state.set = function (v) {
  if (true) {
    assert(false, "Use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit(_type, _payload, _options) {
  var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
  var type = ref.type;
  var payload = ref.payload;
  var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if (true) {
      console.error("[vuex] unknown mutation type: " + type);
    }
    return;
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator(handler) {
      handler(payload);
    });
  });
  this._subscribers.forEach(function (sub) {return sub(mutation, this$1.state);});

  if (
   true &&
  options && options.silent)
  {
    console.warn(
    "[vuex] mutation type: " + type + ". Silent option has been removed. " +
    'Use the filter functionality in the vue-devtools');

  }
};

Store.prototype.dispatch = function dispatch(_type, _payload) {
  var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
  var type = ref.type;
  var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if (true) {
      console.error("[vuex] unknown action type: " + type);
    }
    return;
  }

  this._actionSubscribers.forEach(function (sub) {return sub(action, this$1.state);});

  return entry.length > 1 ?
  Promise.all(entry.map(function (handler) {return handler(payload);})) :
  entry[0](payload);
};

Store.prototype.subscribe = function subscribe(fn) {
  return genericSubscribe(fn, this._subscribers);
};

Store.prototype.subscribeAction = function subscribeAction(fn) {
  return genericSubscribe(fn, this._actionSubscribers);
};

Store.prototype.watch = function watch(getter, cb, options) {
  var this$1 = this;

  if (true) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () {return getter(this$1.state, this$1.getters);}, cb, options);
};

Store.prototype.replaceState = function replaceState(state) {
  var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule(path, rawModule, options) {
  if (options === void 0) options = {};

  if (typeof path === 'string') {path = [path];}

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule(path) {
  var this$1 = this;

  if (typeof path === 'string') {path = [path];}

  if (true) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hotUpdate = function hotUpdate(newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit(fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties(Store.prototype, prototypeAccessors);

function genericSubscribe(fn, subs) {
  if (subs.indexOf(fn) < 0) {
    subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  };
}

function resetStore(store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM(store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    computed[key] = function () {return fn(store);};
    Object.defineProperty(store.getters, key, {
      get: function get() {return store._vm[key];},
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state },

    computed: computed });

  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () {return oldVm.$destroy();});
  }
}

function installModule(store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
   * make localized dispatch, commit, getters and state
   * if there is no namespace, just use root ones
   */
function makeLocalContext(store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if ( true && !store._actions[type]) {
          console.error("[vuex] unknown local action type: " + args.type + ", global type: " + type);
          return;
        }
      }

      return store.dispatch(type, payload);
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if ( true && !store._mutations[type]) {
          console.error("[vuex] unknown local mutation type: " + args.type + ", global type: " + type);
          return;
        }
      }

      store.commit(type, payload, options);
    } };


  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace ?
      function () {return store.getters;} :
      function () {return makeLocalGetters(store, namespace);} },

    state: {
      get: function get() {return getNestedState(store.state, path);} } });



  return local;
}

function makeLocalGetters(store, namespace) {
  var gettersProxy = {};

  var splitPos = namespace.length;
  Object.keys(store.getters).forEach(function (type) {
    // skip if the target getter is not match this namespace
    if (type.slice(0, splitPos) !== namespace) {return;}

    // extract local getter type
    var localType = type.slice(splitPos);

    // Add a port to the getters proxy.
    // Define as getter property because
    // we do not want to evaluate the getters in this time.
    Object.defineProperty(gettersProxy, localType, {
      get: function get() {return store.getters[type];},
      enumerable: true });

  });

  return gettersProxy;
}

function registerMutation(store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler(payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction(store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler(payload, cb) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state },
    payload, cb);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err;
      });
    } else {
      return res;
    }
  });
}

function registerGetter(store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if (true) {
      console.error("[vuex] duplicate getter key: " + type);
    }
    return;
  }
  store._wrappedGetters[type] = function wrappedGetter(store) {
    return rawGetter(
    local.state, // local state
    local.getters, // local getters
    store.state, // root state
    store.getters // root getters
    );
  };
}

function enableStrictMode(store) {
  store._vm.$watch(function () {return this._data.$$state;}, function () {
    if (true) {
      assert(store._committing, "Do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState(state, path) {
  return path.length ?
  path.reduce(function (state, key) {return state[key];}, state) :
  state;
}

function unifyObjectStyle(type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if (true) {
    assert(typeof type === 'string', "Expects string as the type, but found " + typeof type + ".");
  }

  return { type: type, payload: payload, options: options };
}

function install(_Vue) {
  if (Vue && _Vue === Vue) {
    if (true) {
      console.error(
      '[vuex] already installed. Vue.use(Vuex) should be called only once.');

    }
    return;
  }
  Vue = _Vue;
  applyMixin(Vue);
}

var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState() {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return;
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function' ?
      val.call(this, state, getters) :
      state[val];
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res;
});exports.mapState = mapState;

var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation() {
      var args = [],len = arguments.length;
      while (len--) {args[len] = arguments[len];}

      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return;
        }
        commit = module.context.commit;
      }
      return typeof val === 'function' ?
      val.apply(this, [commit].concat(args)) :
      commit.apply(this.$store, [val].concat(args));
    };
  });
  return res;
});exports.mapMutations = mapMutations;

var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    val = namespace + val;
    res[key] = function mappedGetter() {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return;
      }
      if ( true && !(val in this.$store.getters)) {
        console.error("[vuex] unknown getter: " + val);
        return;
      }
      return this.$store.getters[val];
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res;
});exports.mapGetters = mapGetters;

var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction() {
      var args = [],len = arguments.length;
      while (len--) {args[len] = arguments[len];}

      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return;
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function' ?
      val.apply(this, [dispatch].concat(args)) :
      dispatch.apply(this.$store, [val].concat(args));
    };
  });
  return res;
});exports.mapActions = mapActions;

var createNamespacedHelpers = function createNamespacedHelpers(namespace) {return {
    mapState: mapState.bind(null, namespace),
    mapGetters: mapGetters.bind(null, namespace),
    mapMutations: mapMutations.bind(null, namespace),
    mapActions: mapActions.bind(null, namespace) };
};exports.createNamespacedHelpers = createNamespacedHelpers;

function normalizeMap(map) {
  return Array.isArray(map) ?
  map.map(function (key) {return { key: key, val: key };}) :
  Object.keys(map).map(function (key) {return { key: key, val: map[key] };});
}

function normalizeNamespace(fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map);
  };
}

function getModuleByNamespace(store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if ( true && !module) {
    console.error("[vuex] module namespace not found in " + helper + "(): " + namespace);
  }
  return module;
}

var index_esm = {
  Store: Store,
  install: install,
  version: '3.0.1',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers };var _default =



index_esm;exports.default = _default;

/***/ }),
/* 11 */
/*!*******************************************************************************************!*\
  !*** C:/Users/DELL/Desktop/gitlab/graduation/bear-app/components/uni-popup/uni-popup.vue ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uni_popup_vue_vue_type_template_id_33b9e8ff_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-popup.vue?vue&type=template&id=33b9e8ff&scoped=true& */ 12);
/* harmony import */ var _uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-popup.vue?vue&type=script&lang=js& */ 23);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../Downloads/HBuilderX.2.3.3.20190923.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 22);

var renderjs


function injectStyles (context) {
  
  if(!this.options.style){
          this.options.style = {}
      }
      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){
        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)
      }
      if(Vue.prototype.__merge_style){
                Vue.prototype.__merge_style(__webpack_require__(/*! ./uni-popup.vue?vue&type=style&index=0&id=33b9e8ff&lang=scss&scoped=true& */ 27).default, this.options.style)
            }else{
                Object.assign(this.options.style,__webpack_require__(/*! ./uni-popup.vue?vue&type=style&index=0&id=33b9e8ff&lang=scss&scoped=true& */ 27).default)
            }

}

/* normalize component */

var component = Object(_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _uni_popup_vue_vue_type_template_id_33b9e8ff_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _uni_popup_vue_vue_type_template_id_33b9e8ff_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "33b9e8ff",
  "0b330d82",
  false,
  _uni_popup_vue_vue_type_template_id_33b9e8ff_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

injectStyles.call(component)
component.options.__file = "Desktop/gitlab/graduation/bear-app/components/uni-popup/uni-popup.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 12 */
/*!**************************************************************************************************************************************!*\
  !*** C:/Users/DELL/Desktop/gitlab/graduation/bear-app/components/uni-popup/uni-popup.vue?vue&type=template&id=33b9e8ff&scoped=true& ***!
  \**************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_template_id_33b9e8ff_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Downloads/HBuilderX.2.3.3.20190923.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../Downloads/HBuilderX.2.3.3.20190923.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../../../Downloads/HBuilderX.2.3.3.20190923.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../../../../Downloads/HBuilderX.2.3.3.20190923.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-popup.vue?vue&type=template&id=33b9e8ff&scoped=true& */ 13);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_template_id_33b9e8ff_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_template_id_33b9e8ff_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_template_id_33b9e8ff_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_template_id_33b9e8ff_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 13 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/DELL/Desktop/gitlab/graduation/bear-app/components/uni-popup/uni-popup.vue?vue&type=template&id=33b9e8ff&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components = {
  uniTransition: __webpack_require__(/*! @/components/uni-transition/uni-transition.vue */ 14)
    .default
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.showPopup
    ? _c(
        "view",
        {
          staticClass: ["uni-popup"],
          class: [_vm.popupstyle],
          on: { touchmove: _vm.clear }
        },
        [
          _vm.maskShow
            ? _c("uni-transition", {
                attrs: {
                  modeClass: ["fade"],
                  styles: _vm.maskClass,
                  duration: _vm.duration,
                  show: _vm.showTrans
                },
                on: { click: _vm.onTap }
              })
            : _vm._e(),
          _c(
            "uni-transition",
            {
              attrs: {
                modeClass: _vm.ani,
                styles: _vm.transClass,
                duration: _vm.duration,
                show: _vm.showTrans
              },
              on: { click: _vm.onTap }
            },
            [
              _c(
                "view",
                {
                  staticClass: ["uni-popup__wrapper-box"],
                  on: { click: _vm.clear }
                },
                [_vm._t("default")],
                2
              )
            ]
          )
        ],
        1
      )
    : _vm._e()
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 14 */
/*!*****************************************************************************************************!*\
  !*** C:/Users/DELL/Desktop/gitlab/graduation/bear-app/components/uni-transition/uni-transition.vue ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _uni_transition_vue_vue_type_template_id_fd0b94c2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-transition.vue?vue&type=template&id=fd0b94c2& */ 15);
/* harmony import */ var _uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-transition.vue?vue&type=script&lang=js& */ 17);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../Downloads/HBuilderX.2.3.3.20190923.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 22);

var renderjs


function injectStyles (context) {
  
  if(!this.options.style){
          this.options.style = {}
      }
      if(Vue.prototype.__merge_style && Vue.prototype.__$appStyle__){
        Vue.prototype.__merge_style(Vue.prototype.__$appStyle__, this.options.style)
      }
      if(Vue.prototype.__merge_style){
                Vue.prototype.__merge_style(__webpack_require__(/*! ./uni-transition.vue?vue&type=style&index=0&lang=css& */ 20).default, this.options.style)
            }else{
                Object.assign(this.options.style,__webpack_require__(/*! ./uni-transition.vue?vue&type=style&index=0&lang=css& */ 20).default)
            }

}

/* normalize component */

var component = Object(_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _uni_transition_vue_vue_type_template_id_fd0b94c2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _uni_transition_vue_vue_type_template_id_fd0b94c2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  "cce6f0ce",
  false,
  _uni_transition_vue_vue_type_template_id_fd0b94c2___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

injectStyles.call(component)
component.options.__file = "Desktop/gitlab/graduation/bear-app/components/uni-transition/uni-transition.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 15 */
/*!************************************************************************************************************************************!*\
  !*** C:/Users/DELL/Desktop/gitlab/graduation/bear-app/components/uni-transition/uni-transition.vue?vue&type=template&id=fd0b94c2& ***!
  \************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_template_id_fd0b94c2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Downloads/HBuilderX.2.3.3.20190923.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../Downloads/HBuilderX.2.3.3.20190923.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!../../../../../../Downloads/HBuilderX.2.3.3.20190923.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!../../../../../../Downloads/HBuilderX.2.3.3.20190923.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-transition.vue?vue&type=template&id=fd0b94c2& */ 16);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_template_id_fd0b94c2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_template_id_fd0b94c2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_template_id_fd0b94c2___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_template_recycle_js_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_7_0_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_template_id_fd0b94c2___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 16 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/template.recycle.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--7-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/DELL/Desktop/gitlab/graduation/bear-app/components/uni-transition/uni-transition.vue?vue&type=template&id=fd0b94c2& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.isShow
    ? _c(
        "view",
        {
          ref: "ani",
          staticClass: ["uni-transition"],
          class: [_vm.ani.in],
          style: "transform:" + _vm.transform + ";" + _vm.stylesObject,
          on: { click: _vm.change }
        },
        [_vm._t("default")],
        2
      )
    : _vm._e()
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 17 */
/*!******************************************************************************************************************************!*\
  !*** C:/Users/DELL/Desktop/gitlab/graduation/bear-app/components/uni-transition/uni-transition.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Downloads/HBuilderX.2.3.3.20190923.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../../../Downloads/HBuilderX.2.3.3.20190923.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../../../Downloads/HBuilderX.2.3.3.20190923.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-transition.vue?vue&type=script&lang=js& */ 18);
/* harmony import */ var _Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 18 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/DELL/Desktop/gitlab/graduation/bear-app/components/uni-transition/uni-transition.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__webpack_provided_uni_dot_requireNativePlugin) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} //
//
//
//
//
//
//


var animation = __webpack_provided_uni_dot_requireNativePlugin('animation');

/**
                                                       * Transition 过渡动画
                                                       * @description 简单过渡动画组件
                                                       * @tutorial https://ext.dcloud.net.cn/plugin?id=985
                                                       * @property {Boolean} show = [false|true] 控制组件显示或隐藏
                                                          * @property {Array} modeClass = [fade|slide-top|slide-right|slide-bottom|slide-left|zoom-in|zoom-out] 过渡动画类型
                                                          *  @value fade 渐隐渐出过渡
                                                          *  @value slide-top 由上至下过渡
                                                          *  @value slide-right 由右至左过渡
                                                          *  @value slide-bottom 由下至上过渡
                                                          *  @value slide-left 由左至右过渡
                                                          *  @value zoom-in 由小到大过渡
                                                          *  @value zoom-out 由大到小过渡
                                                       * @property {Number} duration 过渡动画持续时间
                                                       * @property {Object} styles 组件样式，同 css 样式，注意带’-‘连接符的属性需要使用小驼峰写法如：`backgroundColor:red`
                                                       */var _default2 =
{
  name: 'uniTransition',
  props: {
    show: {
      type: Boolean,
      default: false },

    modeClass: {
      type: Array,
      default: function _default() {
        return [];
      } },

    duration: {
      type: Number,
      default: 300 },

    styles: {
      type: Object,
      default: function _default() {
        return {};
      } } },


  data: function data() {
    return {
      isShow: false,
      transform: '',
      ani: { in: '',
        active: '' } };


  },
  watch: {
    show: {
      handler: function handler(newVal) {
        if (newVal) {
          this.open();
        } else {
          this.close();
        }
      },
      immediate: true } },


  computed: {
    stylesObject: function stylesObject() {
      var styles = _objectSpread({},
      this.styles, {
        'transition-duration': this.duration / 1000 + 's' });

      var transfrom = '';
      for (var i in styles) {
        var line = this.toLine(i);
        transfrom += line + ':' + styles[i] + ';';
      }
      return transfrom;
    } },

  created: function created() {
    // this.timer = null
    // this.nextTick = (time = 50) => new Promise(resolve => {
    // 	clearTimeout(this.timer)
    // 	this.timer = setTimeout(resolve, time)
    // 	return this.timer
    // });
  },
  methods: {
    change: function change() {
      this.$emit('click', {
        detail: this.isShow });

    },
    open: function open() {var _this = this;
      clearTimeout(this.timer);
      this.isShow = true;
      this.transform = '';
      this.ani.in = '';
      for (var i in this.getTranfrom(false)) {
        if (i === 'opacity') {
          this.ani.in = 'fade-in';
        } else {
          this.transform += "".concat(this.getTranfrom(false)[i], " ");
        }
      }
      this.$nextTick(function () {
        setTimeout(function () {
          _this._animation(true);
        }, 50);
      });

    },
    close: function close(type) {
      clearTimeout(this.timer);
      this._animation(false);
    },
    _animation: function _animation(type) {var _this2 = this;
      var styles = this.getTranfrom(type);

      if (!this.$refs['ani']) return;
      animation.transition(this.$refs['ani'].ref, {
        styles: styles,
        duration: this.duration, //ms
        timingFunction: 'ease',
        needLayout: false,
        delay: 0 //ms
      }, function () {
        if (!type) {
          _this2.isShow = false;
        }
        _this2.$emit('change', {
          detail: _this2.isShow });

      });





















    },
    getTranfrom: function getTranfrom(type) {
      var styles = {
        transform: '' };

      this.modeClass.forEach(function (mode) {
        switch (mode) {
          case 'fade':
            styles.opacity = type ? 1 : 0;
            break;
          case 'slide-top':
            styles.transform += "translateY(".concat(type ? '0' : '-100%', ") ");
            break;
          case 'slide-right':
            styles.transform += "translateX(".concat(type ? '0' : '100%', ") ");
            break;
          case 'slide-bottom':
            styles.transform += "translateY(".concat(type ? '0' : '100%', ") ");
            break;
          case 'slide-left':
            styles.transform += "translateX(".concat(type ? '0' : '-100%', ") ");
            break;
          case 'zoom-in':
            styles.transform += "scale(".concat(type ? 1 : 0.8, ") ");
            break;
          case 'zoom-out':
            styles.transform += "scale(".concat(type ? 1 : 1.2, ") ");
            break;}

      });
      return styles;
    },
    _modeClassArr: function _modeClassArr(type) {
      var mode = this.modeClass;
      if (typeof mode !== "string") {
        var modestr = '';
        mode.forEach(function (item) {
          modestr += item + '-' + type + ',';
        });
        return modestr.substr(0, modestr.length - 1);
      } else {
        return mode + '-' + type;
      }
    },
    // getEl(el) {
    // 	console.log(el || el.ref || null);
    // 	return el || el.ref || null
    // },
    toLine: function toLine(name) {
      return name.replace(/([A-Z])/g, "-$1").toLowerCase();
    } } };exports.default = _default2;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js */ 19)["default"]))

/***/ }),
/* 19 */
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/uni-app-plus-nvue/dist/require-native-plugin.js ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = requireNativePlugin;function requireNativePlugin(name) {
  return weex.requireModule(name);
}

/***/ }),
/* 20 */
/*!**************************************************************************************************************************************!*\
  !*** C:/Users/DELL/Desktop/gitlab/graduation/bear-app/components/uni-transition/uni-transition.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Downloads/HBuilderX.2.3.3.20190923.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../Downloads/HBuilderX.2.3.3.20190923.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../../../../../Downloads/HBuilderX.2.3.3.20190923.full/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../../../../../Downloads/HBuilderX.2.3.3.20190923.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../../../../../Downloads/HBuilderX.2.3.3.20190923.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-transition.vue?vue&type=style&index=0&lang=css& */ 21);
/* harmony import */ var _Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_transition_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 21 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/DELL/Desktop/gitlab/graduation/bear-app/components/uni-transition/uni-transition.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "@TRANSITION": {
    "uni-transition": {
      "timingFunction": "ease",
      "duration": 300,
      "property": "transform,opacity"
    }
  },
  "uni-transition": {
    "transitionTimingFunction": "ease",
    "transitionDuration": 300,
    "transitionProperty": "transform,opacity"
  },
  "fade-in": {
    "opacity": 0
  },
  "fade-active": {
    "opacity": 1
  },
  "slide-top-in": {
    "transform": "translateY(-100%)"
  },
  "slide-top-active": {
    "transform": "translateY(0)"
  },
  "slide-right-in": {
    "transform": "translateX(100%)"
  },
  "slide-right-active": {
    "transform": "translateX(0)"
  },
  "slide-bottom-in": {
    "transform": "translateY(100%)"
  },
  "slide-bottom-active": {
    "transform": "translateY(0)"
  },
  "slide-left-in": {
    "transform": "translateX(-100%)"
  },
  "slide-left-active": {
    "transform": "translateX(0)",
    "opacity": 1
  },
  "zoom-in-in": {
    "transform": "scale(0.8)"
  },
  "zoom-out-active": {
    "transform": "scale(1)"
  },
  "zoom-out-in": {
    "transform": "scale(1.2)"
  }
}

/***/ }),
/* 22 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 23 */
/*!********************************************************************************************************************!*\
  !*** C:/Users/DELL/Desktop/gitlab/graduation/bear-app/components/uni-popup/uni-popup.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Downloads/HBuilderX.2.3.3.20190923.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib??ref--4-0!../../../../../../Downloads/HBuilderX.2.3.3.20190923.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!../../../../../../Downloads/HBuilderX.2.3.3.20190923.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-popup.vue?vue&type=script&lang=js& */ 24);
/* harmony import */ var _Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_ref_4_0_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_4_1_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 24 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--4-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/DELL/Desktop/gitlab/graduation/bear-app/components/uni-popup/uni-popup.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;












var _uniTransition = _interopRequireDefault(__webpack_require__(/*! ../uni-transition/uni-transition.vue */ 14));
var _popup = _interopRequireDefault(__webpack_require__(/*! ./popup.js */ 25));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //
//
//
//
//
//
//
//
//
//
//
//
/**
 * PopUp 弹出层
 * @description 弹出层组件，为了解决遮罩弹层的问题
 * @tutorial https://ext.dcloud.net.cn/plugin?id=329
 * @property {String} type = [top|center|bottom] 弹出方式
 * 	@value top 顶部弹出
 * 	@value center 中间弹出
 * 	@value bottom 底部弹出
 * 	@value message 消息提示
 * 	@value dialog 对话框
 * 	@value share 底部分享示例
 * @property {Boolean} animation = [ture|false] 是否开启动画
 * @property {Boolean} maskClick = [ture|false] 蒙版点击是否关闭弹窗
 * @event {Function} change 打开关闭弹窗触发，e={show: false}
 */var _default = { name: 'UniPopup', components: { uniTransition: _uniTransition.default }, props: { // 开启动画
    animation: { type: Boolean, default: true },
    // 弹出层类型，可选值，top: 顶部弹出层；bottom：底部弹出层；center：全屏弹出层
    // message: 消息提示 ; dialog : 对话框
    type: {
      type: String,
      default: 'center' },

    // maskClick
    maskClick: {
      type: Boolean,
      default: true } },


  provide: function provide() {
    return {
      popup: this };

  },
  mixins: [_popup.default],
  watch: {
    /**
            * 监听type类型
            */
    type: {
      handler: function handler(newVal) {
        this[this.config[newVal]]();
      },
      immediate: true },

    /**
                          * 监听遮罩是否可点击
                          * @param {Object} val
                          */
    maskClick: function maskClick(val) {
      this.mkclick = val;
    } },

  data: function data() {
    return {
      duration: 300,
      ani: [],
      showPopup: false,
      showTrans: false,
      maskClass: {
        'position': 'fixed',
        'bottom': 0,
        'top': 0,
        'left': 0,
        'right': 0,
        'backgroundColor': 'rgba(0, 0, 0, 0.4)' },

      transClass: {
        'position': 'fixed',
        'left': 0,
        'right': 0 },

      maskShow: true,
      mkclick: true,
      popupstyle: 'top' };

  },
  created: function created() {
    if (this.animation) {
      this.duration = 300;
    } else {
      this.duration = 0;
    }
  },
  methods: {
    clear: function clear(e) {
      // TODO nvue 取消冒泡
      e.stopPropagation();
    },
    open: function open() {var _this = this;
      this.showPopup = true;
      this.$nextTick(function () {
        new Promise(function (resolve) {
          clearTimeout(_this.timer);
          _this.timer = setTimeout(function () {
            _this.showTrans = true;
            // fixed by mehaotian 兼容 app 端
            _this.$nextTick(function () {
              resolve();
            });
          }, 50);
        }).then(function (res) {
          // 自定义打开事件
          clearTimeout(_this.msgtimer);
          _this.msgtimer = setTimeout(function () {
            _this.customOpen && _this.customOpen();
          }, 100);
          _this.$emit('change', {
            show: true,
            type: _this.type });

        });
      });
    },
    close: function close(type) {var _this2 = this;
      this.showTrans = false;
      this.$nextTick(function () {
        _this2.$emit('change', {
          show: false,
          type: _this2.type });

        clearTimeout(_this2.timer);
        // 自定义关闭事件
        _this2.customOpen && _this2.customClose();
        _this2.timer = setTimeout(function () {
          _this2.showPopup = false;
        }, 300);
      });
    },
    onTap: function onTap() {
      if (!this.mkclick) return;
      this.close();
    },
    /**
        * 顶部弹出样式处理
        */
    top: function top() {
      this.popupstyle = 'top';
      this.ani = ['slide-top'];
      this.transClass = {
        'position': 'fixed',
        'left': 0,
        'right': 0 };

    },
    /**
        * 底部弹出样式处理
        */
    bottom: function bottom() {
      this.popupstyle = 'bottom';
      this.ani = ['slide-bottom'];
      this.transClass = {
        'position': 'fixed',
        'left': 0,
        'right': 0,
        'bottom': 0 };

    },
    /**
        * 中间弹出样式处理
        */
    center: function center() {
      this.popupstyle = 'center';
      this.ani = ['zoom-out', 'fade'];
      this.transClass = {
        'position': 'fixed',




        'bottom': 0,
        'left': 0,
        'right': 0,
        'top': 0,
        'justifyContent': 'center',
        'alignItems': 'center' };

    } } };exports.default = _default;

/***/ }),
/* 25 */
/*!**************************************************************************************!*\
  !*** C:/Users/DELL/Desktop/gitlab/graduation/bear-app/components/uni-popup/popup.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _message = _interopRequireDefault(__webpack_require__(/*! ./message.js */ 26));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
// 定义 type 类型:弹出类型：top/bottom/center
var config = {
  // 顶部弹出
  top: 'top',
  // 底部弹出
  bottom: 'bottom',
  // 居中弹出
  center: 'center',
  // 消息提示
  message: 'top',
  // 对话框
  dialog: 'center',
  // 分享
  share: 'bottom' };var _default =


{
  data: function data() {
    return {
      config: config };

  },
  mixins: [_message.default] };exports.default = _default;

/***/ }),
/* 26 */
/*!****************************************************************************************!*\
  !*** C:/Users/DELL/Desktop/gitlab/graduation/bear-app/components/uni-popup/message.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _created$created$meth;function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var _default = (_created$created$meth = {
  created: function created() {
    if (this.type === 'message') {
      // 获取自组件对象
      this.maskShow = false;
      this.children = null;
    }
  } }, _defineProperty(_created$created$meth, "created", function created()
{
  if (this.type === 'message') {
    // 不显示遮罩
    this.maskShow = false;
    // 获取子组件对象
    this.childrenMsg = null;
  }
}), _defineProperty(_created$created$meth, "methods",
{
  customOpen: function customOpen() {
    if (this.childrenMsg) {
      this.childrenMsg.open();
    }
  },
  customClose: function customClose() {
    if (this.childrenMsg) {
      this.childrenMsg.close();
    }
  } }), _created$created$meth);exports.default = _default;

/***/ }),
/* 27 */
/*!*****************************************************************************************************************************************************!*\
  !*** C:/Users/DELL/Desktop/gitlab/graduation/bear-app/components/uni-popup/uni-popup.vue?vue&type=style&index=0&id=33b9e8ff&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_style_index_0_id_33b9e8ff_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Downloads/HBuilderX.2.3.3.20190923.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../Downloads/HBuilderX.2.3.3.20190923.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!../../../../../../Downloads/HBuilderX.2.3.3.20190923.full/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--9-oneOf-0-2!../../../../../../Downloads/HBuilderX.2.3.3.20190923.full/HBuilderX/plugins/uniapp-cli/node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-0-3!../../../../../../Downloads/HBuilderX.2.3.3.20190923.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-4!../../../../../../Downloads/HBuilderX.2.3.3.20190923.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-popup.vue?vue&type=style&index=0&id=33b9e8ff&lang=scss&scoped=true& */ 28);
/* harmony import */ var _Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_style_index_0_id_33b9e8ff_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_style_index_0_id_33b9e8ff_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_style_index_0_id_33b9e8ff_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_style_index_0_id_33b9e8ff_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_1_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_9_oneOf_0_2_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_0_3_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_9_oneOf_0_4_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_popup_vue_vue_type_style_index_0_id_33b9e8ff_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 28 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-1!./node_modules/postcss-loader/src??ref--9-oneOf-0-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--9-oneOf-0-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/DELL/Desktop/gitlab/graduation/bear-app/components/uni-popup/uni-popup.vue?vue&type=style&index=0&id=33b9e8ff&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "uni-popup": {
    "position": "fixed"
  },
  "uni-popup__mask": {
    "position": "absolute",
    "top": 0,
    "bottom": 0,
    "left": 0,
    "right": 0,
    "backgroundColor": "rgba(0,0,0,0.4)",
    "opacity": 0
  },
  "@TRANSITION": {
    "mask-ani": {
      "property": "opacity",
      "duration": 200
    },
    "content-ani": {
      "property": "transform,opacity",
      "duration": 200
    }
  },
  "mask-ani": {
    "transitionProperty": "opacity",
    "transitionDuration": 200
  },
  "uni-top-mask": {
    "opacity": 1
  },
  "uni-bottom-mask": {
    "opacity": 1
  },
  "uni-center-mask": {
    "opacity": 1
  },
  "uni-popup__wrapper": {
    "position": "absolute"
  },
  "top": {
    "top": 0
  },
  "bottom": {
    "bottom": 0
  },
  "uni-popup__wrapper-box": {
    "position": "relative"
  },
  "content-ani": {
    "transitionProperty": "transform,opacity",
    "transitionDuration": 200
  },
  "uni-top-content": {
    "transform": "translateY(0)"
  },
  "uni-bottom-content": {
    "transform": "translateY(0)"
  },
  "uni-center-content": {
    "transform": "scale(1)",
    "opacity": 1
  }
}

/***/ }),
/* 29 */
/*!*************************************************************************************************************************!*\
  !*** C:/Users/DELL/Desktop/gitlab/graduation/bear-app/pages/live/live.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_live_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../Downloads/HBuilderX.2.3.3.20190923.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!../../../../../../Downloads/HBuilderX.2.3.3.20190923.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!../../../../../../Downloads/HBuilderX.2.3.3.20190923.full/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--8-oneOf-0-2!../../../../../../Downloads/HBuilderX.2.3.3.20190923.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!../../../../../../Downloads/HBuilderX.2.3.3.20190923.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./live.nvue?vue&type=style&index=0&lang=css&mpType=page */ 30);
/* harmony import */ var _Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_live_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_live_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_live_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_live_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_hbuilderx_packages_webpack_uni_nvue_loader_lib_style_js_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_1_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_0_2_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_0_3_Downloads_HBuilderX_2_3_3_20190923_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_live_nvue_vue_type_style_index_0_lang_css_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 30 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-hbuilderx/packages/webpack-uni-nvue-loader/lib/style.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-1!./node_modules/postcss-loader/src??ref--8-oneOf-0-2!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-0-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!C:/Users/DELL/Desktop/gitlab/graduation/bear-app/pages/live/live.nvue?vue&type=style&index=0&lang=css&mpType=page ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  "but-img": {
    "width": "20",
    "height": "20"
  },
  "meiyanbut": {
    "paddingTop": "10",
    "paddingRight": "20",
    "paddingBottom": "10",
    "paddingLeft": "20",
    "marginLeft": "20",
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "center",
    "flexDirection": "column"
  },
  "but-text": {
    "paddingTop": "3",
    "fontSize": "13",
    "color": "#FFFFFF"
  },
  "id": {
    "fontSize": "14",
    "color": "#FFFFFF"
  },
  "text-box": {
    "fontSize": "12",
    "color": "#FFFFFF"
  },
  "user-img": {
    "marginRight": "5",
    "width": "30",
    "height": "30",
    "borderRadius": 50
  },
  "mark-text": {
    "color": "#FFFFFF",
    "fontSize": "20"
  },
  "mark": {
    "position": "fixed",
    "top": "0",
    "backgroundColor": "#000000",
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "center",
    "flexDirection": "column"
  },
  "but": {
    "backgroundColor": "rgba(0,0,0,0.4)",
    "position": "fixed",
    "bottom": "0",
    "display": "flex",
    "alignItems": "center",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "paddingBottom": "20"
  },
  "arrow-box": {
    "position": "fixed",
    "top": "60",
    "left": "20",
    "zIndex": 10,
    "borderRadius": "20",
    "backgroundColor": "rgba(0,0,0,0.4)"
  },
  "jiesu": {
    "paddingTop": "10",
    "paddingRight": "20",
    "paddingBottom": "10",
    "paddingLeft": "20",
    "color": "#FFFFFF",
    "fontSize": "16"
  },
  "chat-username": {
    "fontSize": "18",
    "color": "#FFFFFF"
  },
  "chat-usertext": {
    "fontSize": "16",
    "color": "#FFFFFF"
  },
  "chat-list": {
    "marginTop": "5",
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "flex-start",
    "flexDirection": "row",
    "backgroundColor": "rgba(0,0,0,0.5)",
    "paddingTop": "5",
    "paddingRight": "10",
    "paddingBottom": "5",
    "paddingLeft": "10",
    "borderRadius": "3"
  },
  "scroll-Y": {
    "height": "150",
    "width": "250"
  },
  "chat": {
    "position": "fixed",
    "zIndex": 10,
    "bottom": "80"
  }
}

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbCwid2VicGFjazovLy9DOi9Vc2Vycy9ERUxML0Rlc2t0b3AvZ2l0bGFiL2dyYWR1YXRpb24vYmVhci1hcHAvbWFpbi5qcz84ZTI1Iiwid2VicGFjazovLy9DOi9Vc2Vycy9ERUxML0Rlc2t0b3AvZ2l0bGFiL2dyYWR1YXRpb24vYmVhci1hcHAvbWFpbi5qcz9jMTJjIiwid2VicGFjazovLy9DOi9Vc2Vycy9ERUxML0Rlc2t0b3AvZ2l0bGFiL2dyYWR1YXRpb24vYmVhci1hcHAvQXBwLnZ1ZT80ZTI1Iiwid2VicGFjazovLy9DOi9Vc2Vycy9ERUxML0Rlc2t0b3AvZ2l0bGFiL2dyYWR1YXRpb24vYmVhci1hcHAvQXBwLnZ1ZT82ZDE3Iiwid2VicGFjazovLy9DOi9Vc2Vycy9ERUxML0Rlc2t0b3AvZ2l0bGFiL2dyYWR1YXRpb24vYmVhci1hcHAvcGFnZXMvbGl2ZS9saXZlLm52dWU/YTM2ZSIsIndlYnBhY2s6Ly8vQzovVXNlcnMvREVMTC9EZXNrdG9wL2dpdGxhYi9ncmFkdWF0aW9uL2JlYXItYXBwL3BhZ2VzL2xpdmUvbGl2ZS5udnVlPzY5N2UiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL0RFTEwvRGVza3RvcC9naXRsYWIvZ3JhZHVhdGlvbi9iZWFyLWFwcC9wYWdlcy9saXZlL2xpdmUubnZ1ZT9lZmM2Iiwid2VicGFjazovLy9DOi9Vc2Vycy9ERUxML0Rlc2t0b3AvZ2l0bGFiL2dyYWR1YXRpb24vYmVhci1hcHAvcGFnZXMvbGl2ZS9saXZlLm52dWU/MTRhMyIsInVuaS1hcHA6Ly8vcGFnZXMvbGl2ZS9saXZlLm52dWUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvbGliL2Zvcm1hdC1sb2cuanM/MGRlOSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVleC9kaXN0L3Z1ZXguZXNtLmpzPzJmNjIiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL0RFTEwvRGVza3RvcC9naXRsYWIvZ3JhZHVhdGlvbi9iZWFyLWFwcC9jb21wb25lbnRzL3VuaS1wb3B1cC91bmktcG9wdXAudnVlP2JkZjMiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL0RFTEwvRGVza3RvcC9naXRsYWIvZ3JhZHVhdGlvbi9iZWFyLWFwcC9jb21wb25lbnRzL3VuaS1wb3B1cC91bmktcG9wdXAudnVlPzRlODUiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL0RFTEwvRGVza3RvcC9naXRsYWIvZ3JhZHVhdGlvbi9iZWFyLWFwcC9jb21wb25lbnRzL3VuaS1wb3B1cC91bmktcG9wdXAudnVlP2NjNjUiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL0RFTEwvRGVza3RvcC9naXRsYWIvZ3JhZHVhdGlvbi9iZWFyLWFwcC9jb21wb25lbnRzL3VuaS10cmFuc2l0aW9uL3VuaS10cmFuc2l0aW9uLnZ1ZT81NDY0Iiwid2VicGFjazovLy9DOi9Vc2Vycy9ERUxML0Rlc2t0b3AvZ2l0bGFiL2dyYWR1YXRpb24vYmVhci1hcHAvY29tcG9uZW50cy91bmktdHJhbnNpdGlvbi91bmktdHJhbnNpdGlvbi52dWU/MmM2OCIsIndlYnBhY2s6Ly8vQzovVXNlcnMvREVMTC9EZXNrdG9wL2dpdGxhYi9ncmFkdWF0aW9uL2JlYXItYXBwL2NvbXBvbmVudHMvdW5pLXRyYW5zaXRpb24vdW5pLXRyYW5zaXRpb24udnVlPzNjYTkiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL0RFTEwvRGVza3RvcC9naXRsYWIvZ3JhZHVhdGlvbi9iZWFyLWFwcC9jb21wb25lbnRzL3VuaS10cmFuc2l0aW9uL3VuaS10cmFuc2l0aW9uLnZ1ZT9lNjdiIiwidW5pLWFwcDovLy9jb21wb25lbnRzL3VuaS10cmFuc2l0aW9uL3VuaS10cmFuc2l0aW9uLnZ1ZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy91bmktYXBwLXBsdXMtbnZ1ZS9kaXN0L3JlcXVpcmUtbmF0aXZlLXBsdWdpbi5qcz9lZmU1Iiwid2VicGFjazovLy9DOi9Vc2Vycy9ERUxML0Rlc2t0b3AvZ2l0bGFiL2dyYWR1YXRpb24vYmVhci1hcHAvY29tcG9uZW50cy91bmktdHJhbnNpdGlvbi91bmktdHJhbnNpdGlvbi52dWU/ZDFiNyIsIndlYnBhY2s6Ly8vQzovVXNlcnMvREVMTC9EZXNrdG9wL2dpdGxhYi9ncmFkdWF0aW9uL2JlYXItYXBwL2NvbXBvbmVudHMvdW5pLXRyYW5zaXRpb24vdW5pLXRyYW5zaXRpb24udnVlP2Q2YzciLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzP2YwYzUiLCJ3ZWJwYWNrOi8vL0M6L1VzZXJzL0RFTEwvRGVza3RvcC9naXRsYWIvZ3JhZHVhdGlvbi9iZWFyLWFwcC9jb21wb25lbnRzL3VuaS1wb3B1cC91bmktcG9wdXAudnVlPzMzNTAiLCJ1bmktYXBwOi8vL2NvbXBvbmVudHMvdW5pLXBvcHVwL3VuaS1wb3B1cC52dWUiLCJ1bmktYXBwOi8vL2NvbXBvbmVudHMvdW5pLXBvcHVwL3BvcHVwLmpzIiwidW5pLWFwcDovLy9jb21wb25lbnRzL3VuaS1wb3B1cC9tZXNzYWdlLmpzIiwid2VicGFjazovLy9DOi9Vc2Vycy9ERUxML0Rlc2t0b3AvZ2l0bGFiL2dyYWR1YXRpb24vYmVhci1hcHAvY29tcG9uZW50cy91bmktcG9wdXAvdW5pLXBvcHVwLnZ1ZT83ZGI5Iiwid2VicGFjazovLy9DOi9Vc2Vycy9ERUxML0Rlc2t0b3AvZ2l0bGFiL2dyYWR1YXRpb24vYmVhci1hcHAvY29tcG9uZW50cy91bmktcG9wdXAvdW5pLXBvcHVwLnZ1ZT81OGQ2Iiwid2VicGFjazovLy9DOi9Vc2Vycy9ERUxML0Rlc2t0b3AvZ2l0bGFiL2dyYWR1YXRpb24vYmVhci1hcHAvcGFnZXMvbGl2ZS9saXZlLm52dWU/NWE1NiIsIndlYnBhY2s6Ly8vQzovVXNlcnMvREVMTC9EZXNrdG9wL2dpdGxhYi9ncmFkdWF0aW9uL2JlYXItYXBwL3BhZ2VzL2xpdmUvbGl2ZS5udnVlP2E0ZmQiXSwibmFtZXMiOlsidHlwb2YiLCJ2IiwicyIsIk9iamVjdCIsInByb3RvdHlwZSIsInRvU3RyaW5nIiwiY2FsbCIsInN1YnN0cmluZyIsImxlbmd0aCIsImlzRGVidWdNb2RlIiwiX19jaGFubmVsSWRfXyIsImxvZyIsInR5cGUiLCJfbGVuIiwiYXJndW1lbnRzIiwiYXJncyIsIkFycmF5IiwiX2tleSIsImNvbnNvbGUiLCJhcHBseSIsImZvcm1hdExvZyIsInNoaWZ0IiwicHVzaCIsInBvcCIsInJlcGxhY2UiLCJtc2dzIiwibWFwIiwidG9Mb3dlckNhc2UiLCJKU09OIiwic3RyaW5naWZ5IiwiZSIsInVuZGVmaW5lZCIsInZUeXBlIiwidG9VcHBlckNhc2UiLCJTdHJpbmciLCJtc2ciLCJsYXN0TXNnIiwiam9pbiIsImluZGV4T2YiLCJhcHBseU1peGluIiwiVnVlIiwidmVyc2lvbiIsIk51bWJlciIsInNwbGl0IiwibWl4aW4iLCJiZWZvcmVDcmVhdGUiLCJ2dWV4SW5pdCIsIl9pbml0Iiwib3B0aW9ucyIsImluaXQiLCJjb25jYXQiLCIkb3B0aW9ucyIsInN0b3JlIiwiJHN0b3JlIiwicGFyZW50IiwiZGV2dG9vbEhvb2siLCJ3aW5kb3ciLCJfX1ZVRV9ERVZUT09MU19HTE9CQUxfSE9PS19fIiwiZGV2dG9vbFBsdWdpbiIsIl9kZXZ0b29sSG9vayIsImVtaXQiLCJvbiIsInRhcmdldFN0YXRlIiwicmVwbGFjZVN0YXRlIiwic3Vic2NyaWJlIiwibXV0YXRpb24iLCJzdGF0ZSIsImZvckVhY2hWYWx1ZSIsIm9iaiIsImZuIiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJpc09iamVjdCIsImlzUHJvbWlzZSIsInZhbCIsInRoZW4iLCJhc3NlcnQiLCJjb25kaXRpb24iLCJFcnJvciIsIk1vZHVsZSIsInJhd01vZHVsZSIsInJ1bnRpbWUiLCJfY2hpbGRyZW4iLCJjcmVhdGUiLCJfcmF3TW9kdWxlIiwicmF3U3RhdGUiLCJwcm90b3R5cGVBY2Nlc3NvcnMkMSIsIm5hbWVzcGFjZWQiLCJjb25maWd1cmFibGUiLCJnZXQiLCJhZGRDaGlsZCIsIm1vZHVsZSIsInJlbW92ZUNoaWxkIiwiZ2V0Q2hpbGQiLCJ1cGRhdGUiLCJhY3Rpb25zIiwibXV0YXRpb25zIiwiZ2V0dGVycyIsImZvckVhY2hDaGlsZCIsImZvckVhY2hHZXR0ZXIiLCJmb3JFYWNoQWN0aW9uIiwiZm9yRWFjaE11dGF0aW9uIiwiZGVmaW5lUHJvcGVydGllcyIsIk1vZHVsZUNvbGxlY3Rpb24iLCJyYXdSb290TW9kdWxlIiwicmVnaXN0ZXIiLCJwYXRoIiwicmVkdWNlIiwicm9vdCIsImdldE5hbWVzcGFjZSIsIm5hbWVzcGFjZSIsInVwZGF0ZSQxIiwidGhpcyQxIiwicHJvY2VzcyIsImFzc2VydFJhd01vZHVsZSIsIm5ld01vZHVsZSIsInNsaWNlIiwibW9kdWxlcyIsInJhd0NoaWxkTW9kdWxlIiwidW5yZWdpc3RlciIsInRhcmdldE1vZHVsZSIsIndhcm4iLCJmdW5jdGlvbkFzc2VydCIsInZhbHVlIiwiZXhwZWN0ZWQiLCJvYmplY3RBc3NlcnQiLCJoYW5kbGVyIiwiYXNzZXJ0VHlwZXMiLCJhc3NlcnRPcHRpb25zIiwibWFrZUFzc2VydGlvbk1lc3NhZ2UiLCJidWYiLCJTdG9yZSIsImluc3RhbGwiLCJQcm9taXNlIiwicGx1Z2lucyIsInN0cmljdCIsIl9jb21taXR0aW5nIiwiX2FjdGlvbnMiLCJfYWN0aW9uU3Vic2NyaWJlcnMiLCJfbXV0YXRpb25zIiwiX3dyYXBwZWRHZXR0ZXJzIiwiX21vZHVsZXMiLCJfbW9kdWxlc05hbWVzcGFjZU1hcCIsIl9zdWJzY3JpYmVycyIsIl93YXRjaGVyVk0iLCJyZWYiLCJkaXNwYXRjaCIsImNvbW1pdCIsImJvdW5kRGlzcGF0Y2giLCJwYXlsb2FkIiwiYm91bmRDb21taXQiLCJpbnN0YWxsTW9kdWxlIiwicmVzZXRTdG9yZVZNIiwicGx1Z2luIiwiY29uZmlnIiwiZGV2dG9vbHMiLCJwcm90b3R5cGVBY2Nlc3NvcnMiLCJfdm0iLCJfZGF0YSIsIiQkc3RhdGUiLCJzZXQiLCJfdHlwZSIsIl9wYXlsb2FkIiwiX29wdGlvbnMiLCJ1bmlmeU9iamVjdFN0eWxlIiwiZW50cnkiLCJlcnJvciIsIl93aXRoQ29tbWl0IiwiY29tbWl0SXRlcmF0b3IiLCJzdWIiLCJzaWxlbnQiLCJhY3Rpb24iLCJhbGwiLCJnZW5lcmljU3Vic2NyaWJlIiwic3Vic2NyaWJlQWN0aW9uIiwid2F0Y2giLCJnZXR0ZXIiLCJjYiIsIiR3YXRjaCIsInJlZ2lzdGVyTW9kdWxlIiwiaXNBcnJheSIsInByZXNlcnZlU3RhdGUiLCJ1bnJlZ2lzdGVyTW9kdWxlIiwicGFyZW50U3RhdGUiLCJnZXROZXN0ZWRTdGF0ZSIsImRlbGV0ZSIsInJlc2V0U3RvcmUiLCJob3RVcGRhdGUiLCJuZXdPcHRpb25zIiwiY29tbWl0dGluZyIsInN1YnMiLCJpIiwic3BsaWNlIiwiaG90Iiwib2xkVm0iLCJ3cmFwcGVkR2V0dGVycyIsImNvbXB1dGVkIiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZGF0YSIsImVuYWJsZVN0cmljdE1vZGUiLCJuZXh0VGljayIsIiRkZXN0cm95Iiwicm9vdFN0YXRlIiwiaXNSb290IiwibW9kdWxlTmFtZSIsImxvY2FsIiwiY29udGV4dCIsIm1ha2VMb2NhbENvbnRleHQiLCJuYW1lc3BhY2VkVHlwZSIsInJlZ2lzdGVyTXV0YXRpb24iLCJyZWdpc3RlckFjdGlvbiIsInJlZ2lzdGVyR2V0dGVyIiwiY2hpbGQiLCJub05hbWVzcGFjZSIsIm1ha2VMb2NhbEdldHRlcnMiLCJnZXR0ZXJzUHJveHkiLCJzcGxpdFBvcyIsImxvY2FsVHlwZSIsIndyYXBwZWRNdXRhdGlvbkhhbmRsZXIiLCJ3cmFwcGVkQWN0aW9uSGFuZGxlciIsInJlcyIsInJvb3RHZXR0ZXJzIiwicmVzb2x2ZSIsImNhdGNoIiwiZXJyIiwicmF3R2V0dGVyIiwid3JhcHBlZEdldHRlciIsImRlZXAiLCJzeW5jIiwiX1Z1ZSIsIm1hcFN0YXRlIiwibm9ybWFsaXplTmFtZXNwYWNlIiwic3RhdGVzIiwibm9ybWFsaXplTWFwIiwibWFwcGVkU3RhdGUiLCJnZXRNb2R1bGVCeU5hbWVzcGFjZSIsInZ1ZXgiLCJtYXBNdXRhdGlvbnMiLCJtYXBwZWRNdXRhdGlvbiIsImxlbiIsIm1hcEdldHRlcnMiLCJtYXBwZWRHZXR0ZXIiLCJtYXBBY3Rpb25zIiwibWFwcGVkQWN0aW9uIiwiY3JlYXRlTmFtZXNwYWNlZEhlbHBlcnMiLCJiaW5kIiwiY2hhckF0IiwiaGVscGVyIiwiaW5kZXhfZXNtIiwicmVxdWlyZU5hdGl2ZVBsdWdpbiIsIm5hbWUiLCJ3ZWV4IiwicmVxdWlyZU1vZHVsZSIsInRvcCIsImJvdHRvbSIsImNlbnRlciIsIm1lc3NhZ2UiLCJkaWFsb2ciLCJzaGFyZSIsIm1peGlucyIsImNyZWF0ZWQiLCJtYXNrU2hvdyIsImNoaWxkcmVuIiwiY2hpbGRyZW5Nc2ciLCJjdXN0b21PcGVuIiwib3BlbiIsImN1c3RvbUNsb3NlIiwiY2xvc2UiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6InBhZ2VzL2xpdmUvbGl2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIlxuICAgICAgICBcbiAgICAgICAgaW1wb3J0ICd1bmktYXBwLXN0eWxlJ1xuICAgICAgICBpbXBvcnQgQXBwIGZyb20gJy4vcGFnZXMvbGl2ZS9saXZlLm52dWU/bXBUeXBlPXBhZ2UnXG4gICAgICAgIEFwcC5tcFR5cGUgPSAncGFnZSdcbiAgICAgICAgQXBwLnJvdXRlID0gJ3BhZ2VzL2xpdmUvbGl2ZSdcbiAgICAgICAgQXBwLmVsID0gJyNyb290J1xuICAgICAgICBuZXcgVnVlKEFwcClcbiAgICAgICAgIiwiVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fID0ge31cblZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSAmJiBWdWUucHJvdG90eXBlLl9fbWVyZ2Vfc3R5bGUocmVxdWlyZShcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCIpLmRlZmF1bHQsVnVlLnByb3RvdHlwZS5fXyRhcHBTdHlsZV9fKVxuIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuMy4zLjIwMTkwOTIzLmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy93ZWJwYWNrLXVuaS1udnVlLWxvYWRlci9saWIvc3R5bGUuanMhLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjMuMy4yMDE5MDkyMy5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMSEuLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuMy4zLjIwMTkwOTIzLmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0yIS4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi4zLjMuMjAxOTA5MjMuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTMhLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjMuMy4yMDE5MDkyMy5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0FwcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzc1wiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi4zLjMuMjAxOTA5MjMuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuMy4zLjIwMTkwOTIzLmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0xIS4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi4zLjMuMjAxOTA5MjMuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTIhLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjMuMy4yMDE5MDkyMy5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMyEuLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuMy4zLjIwMTkwOTIzLmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzXCIiLCJtb2R1bGUuZXhwb3J0cyA9IHt9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi9saXZlLm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDZlNTkxYzMmbXBUeXBlPXBhZ2VcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2xpdmUubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi9saXZlLm52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL2xpdmUubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL2xpdmUubnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJm1wVHlwZT1wYWdlXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuMy4zLjIwMTkwOTIzLmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBcIjg2MDFkYjg2XCIsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5pbmplY3RTdHlsZXMuY2FsbChjb21wb25lbnQpXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkRlc2t0b3AvZ2l0bGFiL2dyYWR1YXRpb24vYmVhci1hcHAvcGFnZXMvbGl2ZS9saXZlLm52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuMy4zLjIwMTkwOTIzLmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjMuMy4yMDE5MDkyMy5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvd2VicGFjay11bmktbnZ1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLmpzIS4uLy4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi4zLjMuMjAxOTA5MjMuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvcGFnZS1tZXRhLmpzIS4uLy4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi4zLjMuMjAxOTA5MjMuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0wIS4uLy4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi4zLjMuMjAxOTA5MjMuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9saXZlLm52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDZlNTkxYzMmbXBUeXBlPXBhZ2VcIiIsInZhciBjb21wb25lbnRzXG52YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwic2Nyb2xsLXZpZXdcIixcbiAgICB7XG4gICAgICBzdGF0aWNTdHlsZTogeyBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiIH0sXG4gICAgICBhdHRyczoge1xuICAgICAgICBzY3JvbGxZOiB0cnVlLFxuICAgICAgICBzaG93U2Nyb2xsYmFyOiB0cnVlLFxuICAgICAgICBlbmFibGVCYWNrVG9Ub3A6IHRydWUsXG4gICAgICAgIGJ1YmJsZTogXCJ0cnVlXCJcbiAgICAgIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgX3ZtLm1hcmthY3RcbiAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICBcInZpZXdcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJtYXJrXCJdLFxuICAgICAgICAgICAgICAgIHN0eWxlOiB7IHdpZHRoOiBfdm0ud2lkdGggKyBcInB4XCIsIGhlaWdodDogX3ZtLmhlaWdodCArIFwicHhcIiB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcInUtdGV4dFwiLCB7IHN0YXRpY0NsYXNzOiBbXCJtYXJrLXRleHRcIl0gfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi55u05pKt5ZCv5Yqo5LitLi4uXCIpXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwidmlld1wiLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwibGl2ZS1wdXNoZXJcIiwge1xuICAgICAgICAgICAgICByZWY6IFwibGl2ZVB1c2hlclwiLFxuICAgICAgICAgICAgICBzdHlsZTogeyB3aWR0aDogX3ZtLndpZHRoICsgXCJweFwiLCBoZWlnaHQ6IF92bS5oZWlnaHQgKyBcInB4XCIgfSxcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBiZWF1dHk6IF92bS5iZWF1dHksXG4gICAgICAgICAgICAgICAgaWQ6IFwibGl2ZVB1c2hlclwiLFxuICAgICAgICAgICAgICAgIHVybDogX3ZtLnJ0bXBVcmwsXG4gICAgICAgICAgICAgICAgbW9kZTogXCJGSERcIixcbiAgICAgICAgICAgICAgICBhc3BlY3Q6IFwiOToxNlwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgc3RhdGVjaGFuZ2U6IF92bS5zdGF0ZWNoYW5nZSxcbiAgICAgICAgICAgICAgICBuZXRzdGF0dXM6IF92bS5uZXRzdGF0dXMsXG4gICAgICAgICAgICAgICAgZXJyb3I6IF92bS5lcnJvclxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInZpZXdcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogW1wiY2hhdFwiXSB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInNjcm9sbC12aWV3XCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJzY3JvbGwtWVwiXSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc2Nyb2xsVG9wOiBfdm0uc2Nyb2xsVG9wLCBzY3JvbGxZOiBcInRydWVcIiB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5jaGF0TGlzdCwgZnVuY3Rpb24oaXQsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwidmlld1wiLCB7IGtleTogaSwgc3RhdGljQ2xhc3M6IFtcImNoYXQtbGlzdFwiXSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ1LXRleHRcIiwgeyBzdGF0aWNDbGFzczogW1wiY2hhdC11c2VybmFtZVwiXSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLnlKjmiLdcIiArIF92bS5fcyhpdC51c2VyVGVsKSArIFwi77yaXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ1LXRleHRcIiwgeyBzdGF0aWNDbGFzczogW1wiY2hhdC11c2VydGV4dFwiXSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGl0Lm1lc3NhZ2UpKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFtcImJ1dFwiXSwgc3R5bGU6IHsgd2lkdGg6IF92bS53aWR0aCArIFwicHhcIiB9IH0sXG4gICAgICAgICAgICAgIF92bS5fbChfdm0udGFiTGlzdCwgZnVuY3Rpb24oaXRlbSwgaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICBcInZpZXdcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiBpZCxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcIm1laXlhbmJ1dFwiXSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0udG1wTWV0aG9kcyhpdGVtLmZ1bmMpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInUtaW1hZ2VcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJidXQtaW1nXCJdLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogaXRlbS5pbWFnZSB9XG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInUtdGV4dFwiLCB7IHN0YXRpY0NsYXNzOiBbXCJidXQtdGV4dFwiXSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhpdGVtLm5hbWUpKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAwXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgXVxuICApXG59XG52YXIgcmVjeWNsYWJsZVJlbmRlciA9IGZhbHNlXG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuMy4zLjIwMTkwOTIzLmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjMuMy4yMDE5MDkyMy5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjMuMy4yMDE5MDkyMy5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2xpdmUubnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi4zLjMuMjAxOTA5MjMuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuMy4zLjIwMTkwOTIzLmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuMy4zLjIwMTkwOTIzLmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbGl2ZS5udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiLCI8dGVtcGxhdGU+XHJcblx0PGRpdj5cclxuXHRcdDx2aWV3IDpzdHlsZT1cInt3aWR0aDogd2lkdGggKyAncHgnLGhlaWdodDpoZWlnaHQgKyAncHgnfVwiIHYtaWY9XCJtYXJrYWN0XCIgY2xhc3M9XCJtYXJrXCI+XHJcblx0XHRcdDx0ZXh0IGNsYXNzPVwibWFyay10ZXh0XCI+55u05pKt5ZCv5Yqo5LitLi4uPC90ZXh0PlxyXG5cdFx0PC92aWV3PlxyXG5cdFx0PHZpZXc+XHJcblx0XHRcdDxsaXZlLXB1c2hlciAgOmJlYXV0eT1cImJlYXV0eVwiIDpzdHlsZT1cInt3aWR0aDogd2lkdGggKyAncHgnLGhlaWdodDpoZWlnaHQgKyAncHgnfVwiIGlkPVwibGl2ZVB1c2hlclwiIHJlZj1cImxpdmVQdXNoZXJcIiBcclxuXHRcdFx0OnVybD1cInJ0bXBVcmxcIiBtb2RlPVwiRkhEXCIgICBhc3BlY3Q9XCI5OjE2XCIgXHJcblx0XHRcdEBzdGF0ZWNoYW5nZT1cInN0YXRlY2hhbmdlXCIgQG5ldHN0YXR1cz1cIm5ldHN0YXR1c1wiIEBlcnJvciA9IFwiZXJyb3JcIj48L2xpdmUtcHVzaGVyPlxyXG5cdFx0XHRcclxuXHRcdFx0PCEtLSDov5nmmK/ogYrlpKnlrqQgLS0+XHJcblx0XHRcdDx2aWV3IGNsYXNzPVwiY2hhdFwiID5cclxuXHRcdFx0XHQ8c2Nyb2xsLXZpZXcgOnNjcm9sbC10b3A9XCJzY3JvbGxUb3BcIiBzY3JvbGwteT1cInRydWVcIiBjbGFzcz1cInNjcm9sbC1ZXCI+XHJcblx0XHRcdFx0XHQ8dmlldyBjbGFzcz1cImNoYXQtbGlzdFwiIHYtZm9yPVwiKGl0LGkpIGluIGNoYXRMaXN0XCIgOmtleT0naSc+XHJcblx0XHRcdFx0XHRcdDx0ZXh0IGNsYXNzPVwiY2hhdC11c2VybmFtZVwiPueUqOaIt3t7aXQudXNlclRlbH1977yaPC90ZXh0PlxyXG5cdFx0XHRcdFx0XHQ8dGV4dCBjbGFzcz1cImNoYXQtdXNlcnRleHRcIj57e2l0Lm1lc3NhZ2V9fTwvdGV4dD5cclxuXHRcdFx0XHRcdDwvdmlldz5cclxuXHRcdFx0XHQ8L3Njcm9sbC12aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHRcdFxyXG5cdFx0XHQ8dmlldyA6c3R5bGU9XCJ7d2lkdGg6IHdpZHRoICsgJ3B4J31cIiBjbGFzcz1cImJ1dFwiPlxyXG5cdFx0XHRcdDx2aWV3IHYtZm9yPVwiKGl0ZW0saWQpIG9mIHRhYkxpc3RcIiA6a2V5PVwiaWRcIiBjbGFzcz1cIm1laXlhbmJ1dFwiIEBjbGljaz1cInRtcE1ldGhvZHMoaXRlbS5mdW5jKVwiPlxyXG5cdFx0XHRcdFx0PGltYWdlIGNsYXNzPVwiYnV0LWltZ1wiIDpzcmM9XCJpdGVtLmltYWdlXCIgID48L2ltYWdlPlxyXG5cdFx0XHRcdFx0PHRleHQgY2xhc3M9XCJidXQtdGV4dFwiPnt7aXRlbS5uYW1lfX08L3RleHQ+XHJcblx0XHRcdFx0PC92aWV3PlxyXG5cdFx0XHQ8L3ZpZXc+XHJcblx0XHQ8L3ZpZXc+XHJcblx0PC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGltcG9ydCB7bWFwU3RhdGV9IGZyb20gXCJ2dWV4XCJcclxuXHRpbXBvcnQgdW5pUG9wdXAgZnJvbSBcIkAvY29tcG9uZW50cy91bmktcG9wdXAvdW5pLXBvcHVwLnZ1ZVwiXHJcblx0ZXhwb3J0IGRlZmF1bHQge1xyXG5cdFx0ZGF0YSgpIHtcclxuXHRcdFx0cmV0dXJuIHtcclxuXHRcdFx0XHR3aWR0aDogJycsXHJcblx0XHRcdFx0aGVpZ2h0OiAnJyxcclxuXHRcdFx0XHR1cmw6ICdydG1wOi8vMzkuMTAyLjgwLjExOToxOTM1L2xpdmUvJywvL+i/meaYr+aOqOa1geWcsOWdgFxyXG5cdFx0XHRcdGNvbnRleHQ6IG51bGwsXHJcblx0XHRcdFx0Y29udGV4dDE6IG51bGwsXHJcblx0XHRcdFx0bWFya2FjdDogdHJ1ZSxcclxuXHRcdFx0XHRiZWF1dHk6IDAsXHJcblx0XHRcdFx0dGFiTGlzdDpbXHJcblx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdG5hbWU6IFwi5byA5ZCv576O6aKcXCIsXHJcblx0XHRcdFx0XHRcdGltYWdlOiBcIi4uLy4uL3N0YXRpYy9pbWFnZS9tZWl5YW4ucG5nXCIsXHJcblx0XHRcdFx0XHRcdGZ1bmM6IFwib3BlbkJlYXV0eVwiXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRuYW1lOiBcIue7k+adn+ebtOaSrVwiLFxyXG5cdFx0XHRcdFx0XHRpbWFnZTogXCIuLi8uLi9zdGF0aWMvaW1hZ2Uvc3RvcC5wbmdcIixcclxuXHRcdFx0XHRcdFx0ZnVuYzogXCJzdG9wTGl2ZVwiXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRuYW1lOiBcIuWIh+aNouaRhOWDj+WktFwiLFxyXG5cdFx0XHRcdFx0XHRpbWFnZTogXCIuLi8uLi9zdGF0aWMvaW1hZ2UvcWllaHVhbi5wbmdcIixcclxuXHRcdFx0XHRcdFx0ZnVuYzogXCJzd2l0Y2hDYW1lcmFcIlxyXG5cdFx0XHRcdFx0fVx0XHJcblx0XHRcdFx0XSxcclxuXHRcdFx0XHRjaGF0TGlzdDpbXSxcclxuXHRcdFx0XHRzY3JvbGxUb3A6IDAsXHJcblx0XHRcdFx0d2Vic29ja2V0OiBudWxsLFxyXG5cdFx0XHRcdGZsYWc6IGZhbHNlXHJcblx0XHRcdH07XHJcblx0XHR9LFxyXG5cdFx0b25Mb2FkKCkge1xyXG5cdFx0XHQvL+iOt+WPluiuvuWkh+eahOWuveW6puWSjOmrmOW6pizorr7nva7nm7Tmkq3lhajlsY9cclxuXHRcdFx0bGV0IHJlcyA9IHVuaS5nZXRTeXN0ZW1JbmZvU3luYygpXHJcblx0XHRcdHRoaXMud2lkdGggPSByZXMud2luZG93V2lkdGg7XHJcblx0XHRcdHRoaXMuaGVpZ2h0ID0gcmVzLndpbmRvd0hlaWdodDtcclxuXHRcdFx0XHJcblx0XHR9LFxyXG5cdFx0b25SZWFkeSgpIHtcclxuXHRcdFx0dGhpcy5jb250ZXh0ID0gdW5pLmNyZWF0ZUxpdmVQdXNoZXJDb250ZXh0KCdsaXZlUHVzaGVyJywgdGhpcyk7XHJcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMuc3RhcnRMaXZlKCk7XHJcblx0XHRcdH0sIDEwMDApXHJcblx0XHR9LFxyXG5cdFx0Y29tcHV0ZWQ6bWFwU3RhdGUoe1xyXG5cdFx0XHRydG1wVXJsKHN0YXRlKXtcclxuXHRcdFx0XHRsZXQgdXNlclRlbCA9IHN0YXRlLnVzZXJUZWw7XHJcblx0XHRcdFx0bGV0IGxhdCA9IHN0YXRlLmxhdDsvL+i/memHjOiOt+WPlue7j+e6rOW6plxyXG5cdFx0XHRcdGxldCBsbmcgPSBzdGF0ZS5sbmc7XHJcblx0XHRcdFx0cmV0dXJuIHRoaXMudXJsICsgdXNlclRlbCArIFwiP2xhdD1cIiArIGxhdCArIFwiJmxuZz1cIiArIGxuZztcclxuXHRcdFx0fVx0XHJcblx0XHR9KSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0dG1wTWV0aG9kcyhtZXRob2RzTmFtZSl7XHJcblx0XHRcdFx0dGhpc1ttZXRob2RzTmFtZV0oKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly/nm7Tmkq3nm7jlhbPmlrnms5VcclxuXHRcdFx0b3BlbkJlYXV0eSgpIHtcclxuXHRcdFx0XHRpZih0aGlzLmJlYXV0eSA9PSAwKXtcclxuXHRcdFx0XHRcdHRoaXMuYmVhdXR5ID0gOTtcclxuXHRcdFx0XHRcdHRoaXMudGFiTGlzdFswXS5uYW1lID0gXCLlhbPpl63nvo7popxcIjtcclxuXHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdHRoaXMuYmVhdXR5ID0gMDtcclxuXHRcdFx0XHRcdHRoaXMudGFiTGlzdFswXS5uYW1lID0gXCLlvIDlkK/nvo7popxcIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdHN0YXJ0TGl2ZSgpIHtcclxuXHRcdFx0XHQvL+W8gOWni+aOqOa1geS5i+WJjeimgeWFiOiwg+eUqOS4gOasoeWBnOatou+8jOaIluWFs+mXreinhumikemihOiniFxyXG5cdFx0XHRcdC8v5oiR5rWL6K+V5YWz6Zet6KeG6aKR6aKE6KeI5rKh5oiQ5YqfLOWwseWFiOi/meagt+WQp1xyXG5cdFx0XHRcdGxldCBfdGhpcyA9IHRoaXM7XHJcblx0XHRcdFx0dGhpcy5jb250ZXh0LnN0b3Aoe1xyXG5cdFx0XHRcdFx0c3VjY2VzczogYSA9PiB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGEpKTtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0dGhpcy5jb250ZXh0LnN0YXJ0KHtcclxuXHRcdFx0XHRcdHN1Y2Nlc3M6IGEgPT4ge1xyXG5cdFx0XHRcdFx0XHRfdGhpcy5tYXJrYWN0ID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCdsaXZlUHVzaGVyLnN0YXJ0OicgKyBKU09OLnN0cmluZ2lmeShhKSk7XHJcblx0XHRcdFx0XHRcdC8vIF90aGlzLmNvbnRleHQuc3dpdGNoQ2FtZXJhKCk7XHJcblx0XHRcdFx0XHRcdF90aGlzLmluaXRXZWJTb2NrZXQoKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0XHJcblx0XHRcdH0sXHJcblx0XHRcdHN0b3BMaXZlKCkge1xyXG5cdFx0XHRcdGxldCBfdGhpcyA9IHRoaXM7XHJcblx0XHRcdFx0dGhpcy5jb250ZXh0LnN0b3Aoe1xyXG5cdFx0XHRcdFx0c3VjY2VzczogYSA9PiB7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KGEpKTtcclxuXHRcdFx0XHRcdFx0Ly8gX3RoaXMud2Vic29ja2V0LmNsb3NlKCk7XHJcblx0XHRcdFx0XHRcdHVuaS5zd2l0Y2hUYWIoe1xyXG5cdFx0XHRcdFx0XHRcdHVybDpcImJlZm9yZUxpdmVcIlxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fSxcclxuXHRcdFx0c3dpdGNoQ2FtZXJhKCkge1xyXG5cdFx0XHRcdHRoaXMuY29udGV4dC5zd2l0Y2hDYW1lcmEoe1xyXG5cdFx0XHRcdFx0c3VjY2VzczogKGEpID0+IHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCJsaXZlUHVzaGVyLnN3aXRjaENhbWVyYTpcIiArIEpTT04uc3RyaW5naWZ5KGEpKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0ZXJyb3IoZSkge1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiZXJyb3I6XCIgKyBKU09OLnN0cmluZ2lmeShlKSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdC8vV2ViU29ja2V055u45YWz5pa55rOVXHJcblx0XHRcdGluaXRXZWJTb2NrZXQoKXtcclxuXHRcdFx0XHRsZXQgX3RoaXMgPSB0aGlzO1xyXG5cdFx0XHRcdC8v5bu656uLd2Vic29ja2V06L+e5o6lXHJcblx0XHRcdFx0dGhpcy53ZWJzb2NrZXQgPSB1bmkuY29ubmVjdFNvY2tldCh7XHJcblx0XHRcdFx0XHR1cmw6IFwid3M6Ly8zOS4xMDIuODAuMTE5OjgwODAvd2ViU29ja2V0U2VydmVyL1wiK3RoaXMuJHN0b3JlLnN0YXRlLnVzZXJUZWwsXHJcblx0XHRcdFx0XHRzdWNjZXNzOigpPT57XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwi6L+e5o6l5oiQ5YqfXCIpO1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdGZhaWw6KCk9PntcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCLov57mjqXlpLHotKVcIik7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0dGhpcy53ZWJzb2NrZXQub25PcGVuKHRoaXMud2Vic29ja2V0T25PcGVuKTtcclxuXHRcdFx0XHR0aGlzLndlYnNvY2tldC5vbk1lc3NhZ2UodGhpcy53ZWJzb2NrZXRPbk1lc3NhZ2UpO1xyXG5cdFx0XHRcdHRoaXMud2Vic29ja2V0Lm9uQ2xvc2UodGhpcy53ZWJzb2NrZXRPbkNsb3NlKTtcclxuXHRcdFx0XHR0aGlzLndlYnNvY2tldC5vbkVycm9yKHRoaXMud2Vic29ja2V0T25FcnJvcik7XHJcblx0XHRcdH0sXHJcblx0XHRcdHdlYnNvY2tldE9uT3Blbigpe1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwi6L+e5o6l5oiQ5YqfbCBoaGhcIik7XHJcblx0XHRcdH0sXHJcblx0XHRcdHdlYnNvY2tldE9uTWVzc2FnZShyZXMpe1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwi5o6l5Y+X5pWw5o2uXCIpO1xyXG5cdFx0XHRcdC8vIGNvbnNvbGUubG9nKHJlcy5kYXRhKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR0aGlzLmNoYXRMaXN0LnB1c2goSlNPTi5wYXJzZShyZXMuZGF0YSkpO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKHRoaXMuY2hhdExpc3QpXHJcblx0XHRcdH0sXHJcblx0XHRcdHdlYnNvY2tldE9uQ2xvc2UoKXtcclxuXHRcdFx0XHRjb25zb2xlLmxvZyhcIuaWreW8gOi/nuaOpVwiKTtcclxuXHRcdFx0fSxcclxuXHRcdFx0d2Vic29ja2V0T25FcnJvcigpe1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwi6L+e5o6l5aSx6LSlXCIpO1xyXG5cdFx0XHRcdC8vIHRoaXMuaW5pdFdlYlNvY2tldCgpO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHR3ZWJzb2NrZXRTZW5kKGRhdGEpe1xyXG5cdFx0XHRcdHRoaXMud2Vic29ja2V0LnNlbmQoZGF0YSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdHdlYnNvY2tldENsb3NlKCl7XHJcblx0XHRcdFx0Y29uc29sZS5sb2coXCLkuLvliqjmlq3lvIDov57mjqVcIik7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG5cdC5idXQtaW1nIHtcclxuXHRcdHdpZHRoOiAyMHB4O1xyXG5cdFx0aGVpZ2h0OiAyMHB4O1xyXG5cdH1cclxuXHJcblx0Lm1laXlhbmJ1dCB7XHJcblx0XHRwYWRkaW5nOiAxMHB4IDIwcHggMTBweCAyMHB4O1xyXG5cdFx0bWFyZ2luLWxlZnQ6IDIwcHg7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHR9XHJcblxyXG5cdC5idXQtdGV4dCB7XHJcblx0XHRwYWRkaW5nLXRvcDogM3B4O1xyXG5cdFx0Zm9udC1zaXplOiAxM3B4O1xyXG5cdFx0Y29sb3I6IHdoaXRlO1xyXG5cdH1cclxuXHJcblx0LmlkIHtcclxuXHRcdGZvbnQtc2l6ZTogMTRweDtcclxuXHRcdGNvbG9yOiB3aGl0ZTtcclxuXHR9XHJcblxyXG5cdC50ZXh0LWJveCB7XHJcblx0XHRmb250LXNpemU6IDEycHg7XHJcblx0XHRjb2xvcjogd2hpdGU7XHJcblx0fVxyXG5cclxuXHQudXNlci1pbWcge1xyXG5cdFx0bWFyZ2luLXJpZ2h0OiA1cHg7XHJcblx0XHR3aWR0aDogMzBweDtcclxuXHRcdGhlaWdodDogMzBweDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDUwJTtcclxuXHR9XHJcblxyXG5cdC5tYXJrLXRleHQge1xyXG5cdFx0Y29sb3I6IHdoaXRlO1xyXG5cdFx0Zm9udC1zaXplOiAyMHB4O1xyXG5cdH1cclxuXHJcblx0Lm1hcmsge1xyXG5cdFx0cG9zaXRpb246IGZpeGVkO1xyXG5cdFx0dG9wOiAwcHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblx0fVxyXG5cclxuXHQuYnV0IHtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjQpO1xyXG5cdFx0cG9zaXRpb246IGZpeGVkO1xyXG5cdFx0Ym90dG9tOiAwcHg7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblx0XHRwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuXHR9XHJcblxyXG5cclxuXHQuYXJyb3ctYm94IHtcclxuXHRcdHBvc2l0aW9uOiBmaXhlZDtcclxuXHRcdHRvcDogNjBweDtcclxuXHRcdGxlZnQ6IDIwcHg7XHJcblx0XHR6LWluZGV4OiAxMDtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC40KTtcclxuXHR9XHJcblxyXG5cdC5qaWVzdSB7XHJcblx0XHRwYWRkaW5nOiAxMHB4IDIwcHggMTBweCAyMHB4O1xyXG5cdFx0Y29sb3I6IHdoaXRlO1xyXG5cdFx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdH1cclxuXHRcclxuXHQuY2hhdC11c2VybmFtZXtcclxuXHRcdGZvbnQtc2l6ZTogMThweDtcclxuXHRcdGNvbG9yOiB3aGl0ZTtcclxuXHR9XHJcblx0LmNoYXQtdXNlcnRleHR7XHJcblx0XHRmb250LXNpemU6IDE2cHg7XHJcblx0XHRjb2xvcjogd2hpdGU7XHJcblx0fVxyXG5cdC5jaGF0LWxpc3R7XHJcblx0XHRtYXJnaW4tdG9wOiA1cHg7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC41KTtcclxuXHRcdHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMHB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogM3B4O1xyXG5cdH1cclxuXHQuc2Nyb2xsLVl7XHJcblx0XHRoZWlnaHQ6IDE1MHB4O1xyXG5cdFx0d2lkdGg6IDI1MHB4O1xyXG5cdH1cclxuXHQuY2hhdCB7XHJcblx0XHRwb3NpdGlvbjogZml4ZWQ7XHJcblx0XHR6LWluZGV4OjEwO1xyXG5cdFx0Ym90dG9tOiA4MHB4O1xyXG5cdH1cclxuPC9zdHlsZT5cbiIsImZ1bmN0aW9uIHR5cG9mICh2KSB7XG4gIHZhciBzID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHYpXG4gIHJldHVybiBzLnN1YnN0cmluZyg4LCBzLmxlbmd0aCAtIDEpXG59XG5cbmZ1bmN0aW9uIGlzRGVidWdNb2RlICgpIHtcbiAgLyogZXNsaW50LWRpc2FibGUgbm8tdW5kZWYgKi9cbiAgcmV0dXJuIHR5cGVvZiBfX2NoYW5uZWxJZF9fID09PSAnc3RyaW5nJyAmJiBfX2NoYW5uZWxJZF9fXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2cgKHR5cGUpIHtcbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiA+IDEgPyBfbGVuIC0gMSA6IDApLCBfa2V5ID0gMTsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleSAtIDFdID0gYXJndW1lbnRzW19rZXldXG4gIH1cbiAgY29uc29sZVt0eXBlXS5hcHBseShjb25zb2xlLCBhcmdzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXRMb2cgKCkge1xuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldXG4gIH1cbiAgdmFyIHR5cGUgPSBhcmdzLnNoaWZ0KClcbiAgaWYgKGlzRGVidWdNb2RlKCkpIHtcbiAgICBhcmdzLnB1c2goYXJncy5wb3AoKS5yZXBsYWNlKCdhdCAnLCAndW5pLWFwcDovLy8nKSlcbiAgICByZXR1cm4gY29uc29sZVt0eXBlXS5hcHBseShjb25zb2xlLCBhcmdzKVxuICB9XG5cbiAgdmFyIG1zZ3MgPSBhcmdzLm1hcChmdW5jdGlvbiAodikge1xuICAgIHZhciB0eXBlID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHYpLnRvTG93ZXJDYXNlKClcblxuICAgIGlmICh0eXBlID09PSAnW29iamVjdCBvYmplY3RdJyB8fCB0eXBlID09PSAnW29iamVjdCBhcnJheV0nKSB7XG4gICAgICB0cnkge1xuICAgICAgICB2ID0gJy0tLUJFR0lOOkpTT04tLS0nICsgSlNPTi5zdHJpbmdpZnkodikgKyAnLS0tRU5EOkpTT04tLS0nXG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHYgPSAnW29iamVjdCBvYmplY3RdJ1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodiA9PT0gbnVsbCkge1xuICAgICAgICB2ID0gJy0tLU5VTEwtLS0nXG4gICAgICB9IGVsc2UgaWYgKHYgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICB2ID0gJy0tLVVOREVGSU5FRC0tLSdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciB2VHlwZSA9IHR5cG9mKHYpLnRvVXBwZXJDYXNlKClcblxuICAgICAgICBpZiAodlR5cGUgPT09ICdOVU1CRVInIHx8IHZUeXBlID09PSAnQk9PTEVBTicpIHtcbiAgICAgICAgICB2ID0gJy0tLUJFR0lOOicgKyB2VHlwZSArICctLS0nICsgdiArICctLS1FTkQ6JyArIHZUeXBlICsgJy0tLSdcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2ID0gU3RyaW5nKHYpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdlxuICB9KVxuICB2YXIgbXNnID0gJydcblxuICBpZiAobXNncy5sZW5ndGggPiAxKSB7XG4gICAgdmFyIGxhc3RNc2cgPSBtc2dzLnBvcCgpXG4gICAgbXNnID0gbXNncy5qb2luKCctLS1DT01NQS0tLScpXG5cbiAgICBpZiAobGFzdE1zZy5pbmRleE9mKCcgYXQgJykgPT09IDApIHtcbiAgICAgIG1zZyArPSBsYXN0TXNnXG4gICAgfSBlbHNlIHtcbiAgICAgIG1zZyArPSAnLS0tQ09NTUEtLS0nICsgbGFzdE1zZ1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBtc2cgPSBtc2dzWzBdXG4gIH1cblxuICBjb25zb2xlW3R5cGVdKG1zZylcbn1cbiIsIi8qKlxuICogdnVleCB2My4wLjFcbiAqIChjKSAyMDE3IEV2YW4gWW91XG4gKiBAbGljZW5zZSBNSVRcbiAqL1xudmFyIGFwcGx5TWl4aW4gPSBmdW5jdGlvbiAoVnVlKSB7XG4gIHZhciB2ZXJzaW9uID0gTnVtYmVyKFZ1ZS52ZXJzaW9uLnNwbGl0KCcuJylbMF0pO1xuXG4gIGlmICh2ZXJzaW9uID49IDIpIHtcbiAgICBWdWUubWl4aW4oeyBiZWZvcmVDcmVhdGU6IHZ1ZXhJbml0IH0pO1xuICB9IGVsc2Uge1xuICAgIC8vIG92ZXJyaWRlIGluaXQgYW5kIGluamVjdCB2dWV4IGluaXQgcHJvY2VkdXJlXG4gICAgLy8gZm9yIDEueCBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cbiAgICB2YXIgX2luaXQgPSBWdWUucHJvdG90eXBlLl9pbml0O1xuICAgIFZ1ZS5wcm90b3R5cGUuX2luaXQgPSBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgaWYgKCBvcHRpb25zID09PSB2b2lkIDAgKSBvcHRpb25zID0ge307XG5cbiAgICAgIG9wdGlvbnMuaW5pdCA9IG9wdGlvbnMuaW5pdFxuICAgICAgICA/IFt2dWV4SW5pdF0uY29uY2F0KG9wdGlvbnMuaW5pdClcbiAgICAgICAgOiB2dWV4SW5pdDtcbiAgICAgIF9pbml0LmNhbGwodGhpcywgb3B0aW9ucyk7XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBWdWV4IGluaXQgaG9vaywgaW5qZWN0ZWQgaW50byBlYWNoIGluc3RhbmNlcyBpbml0IGhvb2tzIGxpc3QuXG4gICAqL1xuXG4gIGZ1bmN0aW9uIHZ1ZXhJbml0ICgpIHtcbiAgICB2YXIgb3B0aW9ucyA9IHRoaXMuJG9wdGlvbnM7XG4gICAgLy8gc3RvcmUgaW5qZWN0aW9uXG4gICAgaWYgKG9wdGlvbnMuc3RvcmUpIHtcbiAgICAgIHRoaXMuJHN0b3JlID0gdHlwZW9mIG9wdGlvbnMuc3RvcmUgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyBvcHRpb25zLnN0b3JlKClcbiAgICAgICAgOiBvcHRpb25zLnN0b3JlO1xuICAgIH0gZWxzZSBpZiAob3B0aW9ucy5wYXJlbnQgJiYgb3B0aW9ucy5wYXJlbnQuJHN0b3JlKSB7XG4gICAgICB0aGlzLiRzdG9yZSA9IG9wdGlvbnMucGFyZW50LiRzdG9yZTtcbiAgICB9XG4gIH1cbn07XG5cbnZhciBkZXZ0b29sSG9vayA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gIHdpbmRvdy5fX1ZVRV9ERVZUT09MU19HTE9CQUxfSE9PS19fO1xuXG5mdW5jdGlvbiBkZXZ0b29sUGx1Z2luIChzdG9yZSkge1xuICBpZiAoIWRldnRvb2xIb29rKSB7IHJldHVybiB9XG5cbiAgc3RvcmUuX2RldnRvb2xIb29rID0gZGV2dG9vbEhvb2s7XG5cbiAgZGV2dG9vbEhvb2suZW1pdCgndnVleDppbml0Jywgc3RvcmUpO1xuXG4gIGRldnRvb2xIb29rLm9uKCd2dWV4OnRyYXZlbC10by1zdGF0ZScsIGZ1bmN0aW9uICh0YXJnZXRTdGF0ZSkge1xuICAgIHN0b3JlLnJlcGxhY2VTdGF0ZSh0YXJnZXRTdGF0ZSk7XG4gIH0pO1xuXG4gIHN0b3JlLnN1YnNjcmliZShmdW5jdGlvbiAobXV0YXRpb24sIHN0YXRlKSB7XG4gICAgZGV2dG9vbEhvb2suZW1pdCgndnVleDptdXRhdGlvbicsIG11dGF0aW9uLCBzdGF0ZSk7XG4gIH0pO1xufVxuXG4vKipcbiAqIEdldCB0aGUgZmlyc3QgaXRlbSB0aGF0IHBhc3MgdGhlIHRlc3RcbiAqIGJ5IHNlY29uZCBhcmd1bWVudCBmdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IGxpc3RcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZcbiAqIEByZXR1cm4geyp9XG4gKi9cbi8qKlxuICogRGVlcCBjb3B5IHRoZSBnaXZlbiBvYmplY3QgY29uc2lkZXJpbmcgY2lyY3VsYXIgc3RydWN0dXJlLlxuICogVGhpcyBmdW5jdGlvbiBjYWNoZXMgYWxsIG5lc3RlZCBvYmplY3RzIGFuZCBpdHMgY29waWVzLlxuICogSWYgaXQgZGV0ZWN0cyBjaXJjdWxhciBzdHJ1Y3R1cmUsIHVzZSBjYWNoZWQgY29weSB0byBhdm9pZCBpbmZpbml0ZSBsb29wLlxuICpcbiAqIEBwYXJhbSB7Kn0gb2JqXG4gKiBAcGFyYW0ge0FycmF5PE9iamVjdD59IGNhY2hlXG4gKiBAcmV0dXJuIHsqfVxuICovXG5cblxuLyoqXG4gKiBmb3JFYWNoIGZvciBvYmplY3RcbiAqL1xuZnVuY3Rpb24gZm9yRWFjaFZhbHVlIChvYmosIGZuKSB7XG4gIE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IHJldHVybiBmbihvYmpba2V5XSwga2V5KTsgfSk7XG59XG5cbmZ1bmN0aW9uIGlzT2JqZWN0IChvYmopIHtcbiAgcmV0dXJuIG9iaiAhPT0gbnVsbCAmJiB0eXBlb2Ygb2JqID09PSAnb2JqZWN0J1xufVxuXG5mdW5jdGlvbiBpc1Byb21pc2UgKHZhbCkge1xuICByZXR1cm4gdmFsICYmIHR5cGVvZiB2YWwudGhlbiA9PT0gJ2Z1bmN0aW9uJ1xufVxuXG5mdW5jdGlvbiBhc3NlcnQgKGNvbmRpdGlvbiwgbXNnKSB7XG4gIGlmICghY29uZGl0aW9uKSB7IHRocm93IG5ldyBFcnJvcigoXCJbdnVleF0gXCIgKyBtc2cpKSB9XG59XG5cbnZhciBNb2R1bGUgPSBmdW5jdGlvbiBNb2R1bGUgKHJhd01vZHVsZSwgcnVudGltZSkge1xuICB0aGlzLnJ1bnRpbWUgPSBydW50aW1lO1xuICB0aGlzLl9jaGlsZHJlbiA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHRoaXMuX3Jhd01vZHVsZSA9IHJhd01vZHVsZTtcbiAgdmFyIHJhd1N0YXRlID0gcmF3TW9kdWxlLnN0YXRlO1xuICB0aGlzLnN0YXRlID0gKHR5cGVvZiByYXdTdGF0ZSA9PT0gJ2Z1bmN0aW9uJyA/IHJhd1N0YXRlKCkgOiByYXdTdGF0ZSkgfHwge307XG59O1xuXG52YXIgcHJvdG90eXBlQWNjZXNzb3JzJDEgPSB7IG5hbWVzcGFjZWQ6IHsgY29uZmlndXJhYmxlOiB0cnVlIH0gfTtcblxucHJvdG90eXBlQWNjZXNzb3JzJDEubmFtZXNwYWNlZC5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiAhIXRoaXMuX3Jhd01vZHVsZS5uYW1lc3BhY2VkXG59O1xuXG5Nb2R1bGUucHJvdG90eXBlLmFkZENoaWxkID0gZnVuY3Rpb24gYWRkQ2hpbGQgKGtleSwgbW9kdWxlKSB7XG4gIHRoaXMuX2NoaWxkcmVuW2tleV0gPSBtb2R1bGU7XG59O1xuXG5Nb2R1bGUucHJvdG90eXBlLnJlbW92ZUNoaWxkID0gZnVuY3Rpb24gcmVtb3ZlQ2hpbGQgKGtleSkge1xuICBkZWxldGUgdGhpcy5fY2hpbGRyZW5ba2V5XTtcbn07XG5cbk1vZHVsZS5wcm90b3R5cGUuZ2V0Q2hpbGQgPSBmdW5jdGlvbiBnZXRDaGlsZCAoa2V5KSB7XG4gIHJldHVybiB0aGlzLl9jaGlsZHJlbltrZXldXG59O1xuXG5Nb2R1bGUucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIHVwZGF0ZSAocmF3TW9kdWxlKSB7XG4gIHRoaXMuX3Jhd01vZHVsZS5uYW1lc3BhY2VkID0gcmF3TW9kdWxlLm5hbWVzcGFjZWQ7XG4gIGlmIChyYXdNb2R1bGUuYWN0aW9ucykge1xuICAgIHRoaXMuX3Jhd01vZHVsZS5hY3Rpb25zID0gcmF3TW9kdWxlLmFjdGlvbnM7XG4gIH1cbiAgaWYgKHJhd01vZHVsZS5tdXRhdGlvbnMpIHtcbiAgICB0aGlzLl9yYXdNb2R1bGUubXV0YXRpb25zID0gcmF3TW9kdWxlLm11dGF0aW9ucztcbiAgfVxuICBpZiAocmF3TW9kdWxlLmdldHRlcnMpIHtcbiAgICB0aGlzLl9yYXdNb2R1bGUuZ2V0dGVycyA9IHJhd01vZHVsZS5nZXR0ZXJzO1xuICB9XG59O1xuXG5Nb2R1bGUucHJvdG90eXBlLmZvckVhY2hDaGlsZCA9IGZ1bmN0aW9uIGZvckVhY2hDaGlsZCAoZm4pIHtcbiAgZm9yRWFjaFZhbHVlKHRoaXMuX2NoaWxkcmVuLCBmbik7XG59O1xuXG5Nb2R1bGUucHJvdG90eXBlLmZvckVhY2hHZXR0ZXIgPSBmdW5jdGlvbiBmb3JFYWNoR2V0dGVyIChmbikge1xuICBpZiAodGhpcy5fcmF3TW9kdWxlLmdldHRlcnMpIHtcbiAgICBmb3JFYWNoVmFsdWUodGhpcy5fcmF3TW9kdWxlLmdldHRlcnMsIGZuKTtcbiAgfVxufTtcblxuTW9kdWxlLnByb3RvdHlwZS5mb3JFYWNoQWN0aW9uID0gZnVuY3Rpb24gZm9yRWFjaEFjdGlvbiAoZm4pIHtcbiAgaWYgKHRoaXMuX3Jhd01vZHVsZS5hY3Rpb25zKSB7XG4gICAgZm9yRWFjaFZhbHVlKHRoaXMuX3Jhd01vZHVsZS5hY3Rpb25zLCBmbik7XG4gIH1cbn07XG5cbk1vZHVsZS5wcm90b3R5cGUuZm9yRWFjaE11dGF0aW9uID0gZnVuY3Rpb24gZm9yRWFjaE11dGF0aW9uIChmbikge1xuICBpZiAodGhpcy5fcmF3TW9kdWxlLm11dGF0aW9ucykge1xuICAgIGZvckVhY2hWYWx1ZSh0aGlzLl9yYXdNb2R1bGUubXV0YXRpb25zLCBmbik7XG4gIH1cbn07XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKCBNb2R1bGUucHJvdG90eXBlLCBwcm90b3R5cGVBY2Nlc3NvcnMkMSApO1xuXG52YXIgTW9kdWxlQ29sbGVjdGlvbiA9IGZ1bmN0aW9uIE1vZHVsZUNvbGxlY3Rpb24gKHJhd1Jvb3RNb2R1bGUpIHtcbiAgLy8gcmVnaXN0ZXIgcm9vdCBtb2R1bGUgKFZ1ZXguU3RvcmUgb3B0aW9ucylcbiAgdGhpcy5yZWdpc3RlcihbXSwgcmF3Um9vdE1vZHVsZSwgZmFsc2UpO1xufTtcblxuTW9kdWxlQ29sbGVjdGlvbi5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gZ2V0IChwYXRoKSB7XG4gIHJldHVybiBwYXRoLnJlZHVjZShmdW5jdGlvbiAobW9kdWxlLCBrZXkpIHtcbiAgICByZXR1cm4gbW9kdWxlLmdldENoaWxkKGtleSlcbiAgfSwgdGhpcy5yb290KVxufTtcblxuTW9kdWxlQ29sbGVjdGlvbi5wcm90b3R5cGUuZ2V0TmFtZXNwYWNlID0gZnVuY3Rpb24gZ2V0TmFtZXNwYWNlIChwYXRoKSB7XG4gIHZhciBtb2R1bGUgPSB0aGlzLnJvb3Q7XG4gIHJldHVybiBwYXRoLnJlZHVjZShmdW5jdGlvbiAobmFtZXNwYWNlLCBrZXkpIHtcbiAgICBtb2R1bGUgPSBtb2R1bGUuZ2V0Q2hpbGQoa2V5KTtcbiAgICByZXR1cm4gbmFtZXNwYWNlICsgKG1vZHVsZS5uYW1lc3BhY2VkID8ga2V5ICsgJy8nIDogJycpXG4gIH0sICcnKVxufTtcblxuTW9kdWxlQ29sbGVjdGlvbi5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gdXBkYXRlJDEgKHJhd1Jvb3RNb2R1bGUpIHtcbiAgdXBkYXRlKFtdLCB0aGlzLnJvb3QsIHJhd1Jvb3RNb2R1bGUpO1xufTtcblxuTW9kdWxlQ29sbGVjdGlvbi5wcm90b3R5cGUucmVnaXN0ZXIgPSBmdW5jdGlvbiByZWdpc3RlciAocGF0aCwgcmF3TW9kdWxlLCBydW50aW1lKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG4gICAgaWYgKCBydW50aW1lID09PSB2b2lkIDAgKSBydW50aW1lID0gdHJ1ZTtcblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGFzc2VydFJhd01vZHVsZShwYXRoLCByYXdNb2R1bGUpO1xuICB9XG5cbiAgdmFyIG5ld01vZHVsZSA9IG5ldyBNb2R1bGUocmF3TW9kdWxlLCBydW50aW1lKTtcbiAgaWYgKHBhdGgubGVuZ3RoID09PSAwKSB7XG4gICAgdGhpcy5yb290ID0gbmV3TW9kdWxlO1xuICB9IGVsc2Uge1xuICAgIHZhciBwYXJlbnQgPSB0aGlzLmdldChwYXRoLnNsaWNlKDAsIC0xKSk7XG4gICAgcGFyZW50LmFkZENoaWxkKHBhdGhbcGF0aC5sZW5ndGggLSAxXSwgbmV3TW9kdWxlKTtcbiAgfVxuXG4gIC8vIHJlZ2lzdGVyIG5lc3RlZCBtb2R1bGVzXG4gIGlmIChyYXdNb2R1bGUubW9kdWxlcykge1xuICAgIGZvckVhY2hWYWx1ZShyYXdNb2R1bGUubW9kdWxlcywgZnVuY3Rpb24gKHJhd0NoaWxkTW9kdWxlLCBrZXkpIHtcbiAgICAgIHRoaXMkMS5yZWdpc3RlcihwYXRoLmNvbmNhdChrZXkpLCByYXdDaGlsZE1vZHVsZSwgcnVudGltZSk7XG4gICAgfSk7XG4gIH1cbn07XG5cbk1vZHVsZUNvbGxlY3Rpb24ucHJvdG90eXBlLnVucmVnaXN0ZXIgPSBmdW5jdGlvbiB1bnJlZ2lzdGVyIChwYXRoKSB7XG4gIHZhciBwYXJlbnQgPSB0aGlzLmdldChwYXRoLnNsaWNlKDAsIC0xKSk7XG4gIHZhciBrZXkgPSBwYXRoW3BhdGgubGVuZ3RoIC0gMV07XG4gIGlmICghcGFyZW50LmdldENoaWxkKGtleSkucnVudGltZSkgeyByZXR1cm4gfVxuXG4gIHBhcmVudC5yZW1vdmVDaGlsZChrZXkpO1xufTtcblxuZnVuY3Rpb24gdXBkYXRlIChwYXRoLCB0YXJnZXRNb2R1bGUsIG5ld01vZHVsZSkge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGFzc2VydFJhd01vZHVsZShwYXRoLCBuZXdNb2R1bGUpO1xuICB9XG5cbiAgLy8gdXBkYXRlIHRhcmdldCBtb2R1bGVcbiAgdGFyZ2V0TW9kdWxlLnVwZGF0ZShuZXdNb2R1bGUpO1xuXG4gIC8vIHVwZGF0ZSBuZXN0ZWQgbW9kdWxlc1xuICBpZiAobmV3TW9kdWxlLm1vZHVsZXMpIHtcbiAgICBmb3IgKHZhciBrZXkgaW4gbmV3TW9kdWxlLm1vZHVsZXMpIHtcbiAgICAgIGlmICghdGFyZ2V0TW9kdWxlLmdldENoaWxkKGtleSkpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBcIlt2dWV4XSB0cnlpbmcgdG8gYWRkIGEgbmV3IG1vZHVsZSAnXCIgKyBrZXkgKyBcIicgb24gaG90IHJlbG9hZGluZywgXCIgK1xuICAgICAgICAgICAgJ21hbnVhbCByZWxvYWQgaXMgbmVlZGVkJ1xuICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICB1cGRhdGUoXG4gICAgICAgIHBhdGguY29uY2F0KGtleSksXG4gICAgICAgIHRhcmdldE1vZHVsZS5nZXRDaGlsZChrZXkpLFxuICAgICAgICBuZXdNb2R1bGUubW9kdWxlc1trZXldXG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuXG52YXIgZnVuY3Rpb25Bc3NlcnQgPSB7XG4gIGFzc2VydDogZnVuY3Rpb24gKHZhbHVlKSB7IHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbic7IH0sXG4gIGV4cGVjdGVkOiAnZnVuY3Rpb24nXG59O1xuXG52YXIgb2JqZWN0QXNzZXJ0ID0ge1xuICBhc3NlcnQ6IGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nIHx8XG4gICAgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIHZhbHVlLmhhbmRsZXIgPT09ICdmdW5jdGlvbicpOyB9LFxuICBleHBlY3RlZDogJ2Z1bmN0aW9uIG9yIG9iamVjdCB3aXRoIFwiaGFuZGxlclwiIGZ1bmN0aW9uJ1xufTtcblxudmFyIGFzc2VydFR5cGVzID0ge1xuICBnZXR0ZXJzOiBmdW5jdGlvbkFzc2VydCxcbiAgbXV0YXRpb25zOiBmdW5jdGlvbkFzc2VydCxcbiAgYWN0aW9uczogb2JqZWN0QXNzZXJ0XG59O1xuXG5mdW5jdGlvbiBhc3NlcnRSYXdNb2R1bGUgKHBhdGgsIHJhd01vZHVsZSkge1xuICBPYmplY3Qua2V5cyhhc3NlcnRUeXBlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgaWYgKCFyYXdNb2R1bGVba2V5XSkgeyByZXR1cm4gfVxuXG4gICAgdmFyIGFzc2VydE9wdGlvbnMgPSBhc3NlcnRUeXBlc1trZXldO1xuXG4gICAgZm9yRWFjaFZhbHVlKHJhd01vZHVsZVtrZXldLCBmdW5jdGlvbiAodmFsdWUsIHR5cGUpIHtcbiAgICAgIGFzc2VydChcbiAgICAgICAgYXNzZXJ0T3B0aW9ucy5hc3NlcnQodmFsdWUpLFxuICAgICAgICBtYWtlQXNzZXJ0aW9uTWVzc2FnZShwYXRoLCBrZXksIHR5cGUsIHZhbHVlLCBhc3NlcnRPcHRpb25zLmV4cGVjdGVkKVxuICAgICAgKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG1ha2VBc3NlcnRpb25NZXNzYWdlIChwYXRoLCBrZXksIHR5cGUsIHZhbHVlLCBleHBlY3RlZCkge1xuICB2YXIgYnVmID0ga2V5ICsgXCIgc2hvdWxkIGJlIFwiICsgZXhwZWN0ZWQgKyBcIiBidXQgXFxcIlwiICsga2V5ICsgXCIuXCIgKyB0eXBlICsgXCJcXFwiXCI7XG4gIGlmIChwYXRoLmxlbmd0aCA+IDApIHtcbiAgICBidWYgKz0gXCIgaW4gbW9kdWxlIFxcXCJcIiArIChwYXRoLmpvaW4oJy4nKSkgKyBcIlxcXCJcIjtcbiAgfVxuICBidWYgKz0gXCIgaXMgXCIgKyAoSlNPTi5zdHJpbmdpZnkodmFsdWUpKSArIFwiLlwiO1xuICByZXR1cm4gYnVmXG59XG5cbnZhciBWdWU7IC8vIGJpbmQgb24gaW5zdGFsbFxuXG52YXIgU3RvcmUgPSBmdW5jdGlvbiBTdG9yZSAob3B0aW9ucykge1xuICB2YXIgdGhpcyQxID0gdGhpcztcbiAgaWYgKCBvcHRpb25zID09PSB2b2lkIDAgKSBvcHRpb25zID0ge307XG5cbiAgLy8gQXV0byBpbnN0YWxsIGlmIGl0IGlzIG5vdCBkb25lIHlldCBhbmQgYHdpbmRvd2AgaGFzIGBWdWVgLlxuICAvLyBUbyBhbGxvdyB1c2VycyB0byBhdm9pZCBhdXRvLWluc3RhbGxhdGlvbiBpbiBzb21lIGNhc2VzLFxuICAvLyB0aGlzIGNvZGUgc2hvdWxkIGJlIHBsYWNlZCBoZXJlLiBTZWUgIzczMVxuICBpZiAoIVZ1ZSAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuVnVlKSB7XG4gICAgaW5zdGFsbCh3aW5kb3cuVnVlKTtcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgYXNzZXJ0KFZ1ZSwgXCJtdXN0IGNhbGwgVnVlLnVzZShWdWV4KSBiZWZvcmUgY3JlYXRpbmcgYSBzdG9yZSBpbnN0YW5jZS5cIik7XG4gICAgYXNzZXJ0KHR5cGVvZiBQcm9taXNlICE9PSAndW5kZWZpbmVkJywgXCJ2dWV4IHJlcXVpcmVzIGEgUHJvbWlzZSBwb2x5ZmlsbCBpbiB0aGlzIGJyb3dzZXIuXCIpO1xuICAgIGFzc2VydCh0aGlzIGluc3RhbmNlb2YgU3RvcmUsIFwiU3RvcmUgbXVzdCBiZSBjYWxsZWQgd2l0aCB0aGUgbmV3IG9wZXJhdG9yLlwiKTtcbiAgfVxuXG4gIHZhciBwbHVnaW5zID0gb3B0aW9ucy5wbHVnaW5zOyBpZiAoIHBsdWdpbnMgPT09IHZvaWQgMCApIHBsdWdpbnMgPSBbXTtcbiAgdmFyIHN0cmljdCA9IG9wdGlvbnMuc3RyaWN0OyBpZiAoIHN0cmljdCA9PT0gdm9pZCAwICkgc3RyaWN0ID0gZmFsc2U7XG5cbiAgdmFyIHN0YXRlID0gb3B0aW9ucy5zdGF0ZTsgaWYgKCBzdGF0ZSA9PT0gdm9pZCAwICkgc3RhdGUgPSB7fTtcbiAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHN0YXRlID0gc3RhdGUoKSB8fCB7fTtcbiAgfVxuXG4gIC8vIHN0b3JlIGludGVybmFsIHN0YXRlXG4gIHRoaXMuX2NvbW1pdHRpbmcgPSBmYWxzZTtcbiAgdGhpcy5fYWN0aW9ucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHRoaXMuX2FjdGlvblN1YnNjcmliZXJzID0gW107XG4gIHRoaXMuX211dGF0aW9ucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHRoaXMuX3dyYXBwZWRHZXR0ZXJzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgdGhpcy5fbW9kdWxlcyA9IG5ldyBNb2R1bGVDb2xsZWN0aW9uKG9wdGlvbnMpO1xuICB0aGlzLl9tb2R1bGVzTmFtZXNwYWNlTWFwID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgdGhpcy5fc3Vic2NyaWJlcnMgPSBbXTtcbiAgdGhpcy5fd2F0Y2hlclZNID0gbmV3IFZ1ZSgpO1xuXG4gIC8vIGJpbmQgY29tbWl0IGFuZCBkaXNwYXRjaCB0byBzZWxmXG4gIHZhciBzdG9yZSA9IHRoaXM7XG4gIHZhciByZWYgPSB0aGlzO1xuICB2YXIgZGlzcGF0Y2ggPSByZWYuZGlzcGF0Y2g7XG4gIHZhciBjb21taXQgPSByZWYuY29tbWl0O1xuICB0aGlzLmRpc3BhdGNoID0gZnVuY3Rpb24gYm91bmREaXNwYXRjaCAodHlwZSwgcGF5bG9hZCkge1xuICAgIHJldHVybiBkaXNwYXRjaC5jYWxsKHN0b3JlLCB0eXBlLCBwYXlsb2FkKVxuICB9O1xuICB0aGlzLmNvbW1pdCA9IGZ1bmN0aW9uIGJvdW5kQ29tbWl0ICh0eXBlLCBwYXlsb2FkLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIGNvbW1pdC5jYWxsKHN0b3JlLCB0eXBlLCBwYXlsb2FkLCBvcHRpb25zKVxuICB9O1xuXG4gIC8vIHN0cmljdCBtb2RlXG4gIHRoaXMuc3RyaWN0ID0gc3RyaWN0O1xuXG4gIC8vIGluaXQgcm9vdCBtb2R1bGUuXG4gIC8vIHRoaXMgYWxzbyByZWN1cnNpdmVseSByZWdpc3RlcnMgYWxsIHN1Yi1tb2R1bGVzXG4gIC8vIGFuZCBjb2xsZWN0cyBhbGwgbW9kdWxlIGdldHRlcnMgaW5zaWRlIHRoaXMuX3dyYXBwZWRHZXR0ZXJzXG4gIGluc3RhbGxNb2R1bGUodGhpcywgc3RhdGUsIFtdLCB0aGlzLl9tb2R1bGVzLnJvb3QpO1xuXG4gIC8vIGluaXRpYWxpemUgdGhlIHN0b3JlIHZtLCB3aGljaCBpcyByZXNwb25zaWJsZSBmb3IgdGhlIHJlYWN0aXZpdHlcbiAgLy8gKGFsc28gcmVnaXN0ZXJzIF93cmFwcGVkR2V0dGVycyBhcyBjb21wdXRlZCBwcm9wZXJ0aWVzKVxuICByZXNldFN0b3JlVk0odGhpcywgc3RhdGUpO1xuXG4gIC8vIGFwcGx5IHBsdWdpbnNcbiAgcGx1Z2lucy5mb3JFYWNoKGZ1bmN0aW9uIChwbHVnaW4pIHsgcmV0dXJuIHBsdWdpbih0aGlzJDEpOyB9KTtcblxuICBpZiAoVnVlLmNvbmZpZy5kZXZ0b29scykge1xuICAgIGRldnRvb2xQbHVnaW4odGhpcyk7XG4gIH1cbn07XG5cbnZhciBwcm90b3R5cGVBY2Nlc3NvcnMgPSB7IHN0YXRlOiB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH07XG5cbnByb3RvdHlwZUFjY2Vzc29ycy5zdGF0ZS5nZXQgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiB0aGlzLl92bS5fZGF0YS4kJHN0YXRlXG59O1xuXG5wcm90b3R5cGVBY2Nlc3NvcnMuc3RhdGUuc2V0ID0gZnVuY3Rpb24gKHYpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBhc3NlcnQoZmFsc2UsIFwiVXNlIHN0b3JlLnJlcGxhY2VTdGF0ZSgpIHRvIGV4cGxpY2l0IHJlcGxhY2Ugc3RvcmUgc3RhdGUuXCIpO1xuICB9XG59O1xuXG5TdG9yZS5wcm90b3R5cGUuY29tbWl0ID0gZnVuY3Rpb24gY29tbWl0IChfdHlwZSwgX3BheWxvYWQsIF9vcHRpb25zKSB7XG4gICAgdmFyIHRoaXMkMSA9IHRoaXM7XG5cbiAgLy8gY2hlY2sgb2JqZWN0LXN0eWxlIGNvbW1pdFxuICB2YXIgcmVmID0gdW5pZnlPYmplY3RTdHlsZShfdHlwZSwgX3BheWxvYWQsIF9vcHRpb25zKTtcbiAgICB2YXIgdHlwZSA9IHJlZi50eXBlO1xuICAgIHZhciBwYXlsb2FkID0gcmVmLnBheWxvYWQ7XG4gICAgdmFyIG9wdGlvbnMgPSByZWYub3B0aW9ucztcblxuICB2YXIgbXV0YXRpb24gPSB7IHR5cGU6IHR5cGUsIHBheWxvYWQ6IHBheWxvYWQgfTtcbiAgdmFyIGVudHJ5ID0gdGhpcy5fbXV0YXRpb25zW3R5cGVdO1xuICBpZiAoIWVudHJ5KSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoKFwiW3Z1ZXhdIHVua25vd24gbXV0YXRpb24gdHlwZTogXCIgKyB0eXBlKSk7XG4gICAgfVxuICAgIHJldHVyblxuICB9XG4gIHRoaXMuX3dpdGhDb21taXQoZnVuY3Rpb24gKCkge1xuICAgIGVudHJ5LmZvckVhY2goZnVuY3Rpb24gY29tbWl0SXRlcmF0b3IgKGhhbmRsZXIpIHtcbiAgICAgIGhhbmRsZXIocGF5bG9hZCk7XG4gICAgfSk7XG4gIH0pO1xuICB0aGlzLl9zdWJzY3JpYmVycy5mb3JFYWNoKGZ1bmN0aW9uIChzdWIpIHsgcmV0dXJuIHN1YihtdXRhdGlvbiwgdGhpcyQxLnN0YXRlKTsgfSk7XG5cbiAgaWYgKFxuICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiZcbiAgICBvcHRpb25zICYmIG9wdGlvbnMuc2lsZW50XG4gICkge1xuICAgIGNvbnNvbGUud2FybihcbiAgICAgIFwiW3Z1ZXhdIG11dGF0aW9uIHR5cGU6IFwiICsgdHlwZSArIFwiLiBTaWxlbnQgb3B0aW9uIGhhcyBiZWVuIHJlbW92ZWQuIFwiICtcbiAgICAgICdVc2UgdGhlIGZpbHRlciBmdW5jdGlvbmFsaXR5IGluIHRoZSB2dWUtZGV2dG9vbHMnXG4gICAgKTtcbiAgfVxufTtcblxuU3RvcmUucHJvdG90eXBlLmRpc3BhdGNoID0gZnVuY3Rpb24gZGlzcGF0Y2ggKF90eXBlLCBfcGF5bG9hZCkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIC8vIGNoZWNrIG9iamVjdC1zdHlsZSBkaXNwYXRjaFxuICB2YXIgcmVmID0gdW5pZnlPYmplY3RTdHlsZShfdHlwZSwgX3BheWxvYWQpO1xuICAgIHZhciB0eXBlID0gcmVmLnR5cGU7XG4gICAgdmFyIHBheWxvYWQgPSByZWYucGF5bG9hZDtcblxuICB2YXIgYWN0aW9uID0geyB0eXBlOiB0eXBlLCBwYXlsb2FkOiBwYXlsb2FkIH07XG4gIHZhciBlbnRyeSA9IHRoaXMuX2FjdGlvbnNbdHlwZV07XG4gIGlmICghZW50cnkpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgY29uc29sZS5lcnJvcigoXCJbdnVleF0gdW5rbm93biBhY3Rpb24gdHlwZTogXCIgKyB0eXBlKSk7XG4gICAgfVxuICAgIHJldHVyblxuICB9XG5cbiAgdGhpcy5fYWN0aW9uU3Vic2NyaWJlcnMuZm9yRWFjaChmdW5jdGlvbiAoc3ViKSB7IHJldHVybiBzdWIoYWN0aW9uLCB0aGlzJDEuc3RhdGUpOyB9KTtcblxuICByZXR1cm4gZW50cnkubGVuZ3RoID4gMVxuICAgID8gUHJvbWlzZS5hbGwoZW50cnkubWFwKGZ1bmN0aW9uIChoYW5kbGVyKSB7IHJldHVybiBoYW5kbGVyKHBheWxvYWQpOyB9KSlcbiAgICA6IGVudHJ5WzBdKHBheWxvYWQpXG59O1xuXG5TdG9yZS5wcm90b3R5cGUuc3Vic2NyaWJlID0gZnVuY3Rpb24gc3Vic2NyaWJlIChmbikge1xuICByZXR1cm4gZ2VuZXJpY1N1YnNjcmliZShmbiwgdGhpcy5fc3Vic2NyaWJlcnMpXG59O1xuXG5TdG9yZS5wcm90b3R5cGUuc3Vic2NyaWJlQWN0aW9uID0gZnVuY3Rpb24gc3Vic2NyaWJlQWN0aW9uIChmbikge1xuICByZXR1cm4gZ2VuZXJpY1N1YnNjcmliZShmbiwgdGhpcy5fYWN0aW9uU3Vic2NyaWJlcnMpXG59O1xuXG5TdG9yZS5wcm90b3R5cGUud2F0Y2ggPSBmdW5jdGlvbiB3YXRjaCAoZ2V0dGVyLCBjYiwgb3B0aW9ucykge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgYXNzZXJ0KHR5cGVvZiBnZXR0ZXIgPT09ICdmdW5jdGlvbicsIFwic3RvcmUud2F0Y2ggb25seSBhY2NlcHRzIGEgZnVuY3Rpb24uXCIpO1xuICB9XG4gIHJldHVybiB0aGlzLl93YXRjaGVyVk0uJHdhdGNoKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGdldHRlcih0aGlzJDEuc3RhdGUsIHRoaXMkMS5nZXR0ZXJzKTsgfSwgY2IsIG9wdGlvbnMpXG59O1xuXG5TdG9yZS5wcm90b3R5cGUucmVwbGFjZVN0YXRlID0gZnVuY3Rpb24gcmVwbGFjZVN0YXRlIChzdGF0ZSkge1xuICAgIHZhciB0aGlzJDEgPSB0aGlzO1xuXG4gIHRoaXMuX3dpdGhDb21taXQoZnVuY3Rpb24gKCkge1xuICAgIHRoaXMkMS5fdm0uX2RhdGEuJCRzdGF0ZSA9IHN0YXRlO1xuICB9KTtcbn07XG5cblN0b3JlLnByb3RvdHlwZS5yZWdpc3Rlck1vZHVsZSA9IGZ1bmN0aW9uIHJlZ2lzdGVyTW9kdWxlIChwYXRoLCByYXdNb2R1bGUsIG9wdGlvbnMpIHtcbiAgICBpZiAoIG9wdGlvbnMgPT09IHZvaWQgMCApIG9wdGlvbnMgPSB7fTtcblxuICBpZiAodHlwZW9mIHBhdGggPT09ICdzdHJpbmcnKSB7IHBhdGggPSBbcGF0aF07IH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGFzc2VydChBcnJheS5pc0FycmF5KHBhdGgpLCBcIm1vZHVsZSBwYXRoIG11c3QgYmUgYSBzdHJpbmcgb3IgYW4gQXJyYXkuXCIpO1xuICAgIGFzc2VydChwYXRoLmxlbmd0aCA+IDAsICdjYW5ub3QgcmVnaXN0ZXIgdGhlIHJvb3QgbW9kdWxlIGJ5IHVzaW5nIHJlZ2lzdGVyTW9kdWxlLicpO1xuICB9XG5cbiAgdGhpcy5fbW9kdWxlcy5yZWdpc3RlcihwYXRoLCByYXdNb2R1bGUpO1xuICBpbnN0YWxsTW9kdWxlKHRoaXMsIHRoaXMuc3RhdGUsIHBhdGgsIHRoaXMuX21vZHVsZXMuZ2V0KHBhdGgpLCBvcHRpb25zLnByZXNlcnZlU3RhdGUpO1xuICAvLyByZXNldCBzdG9yZSB0byB1cGRhdGUgZ2V0dGVycy4uLlxuICByZXNldFN0b3JlVk0odGhpcywgdGhpcy5zdGF0ZSk7XG59O1xuXG5TdG9yZS5wcm90b3R5cGUudW5yZWdpc3Rlck1vZHVsZSA9IGZ1bmN0aW9uIHVucmVnaXN0ZXJNb2R1bGUgKHBhdGgpIHtcbiAgICB2YXIgdGhpcyQxID0gdGhpcztcblxuICBpZiAodHlwZW9mIHBhdGggPT09ICdzdHJpbmcnKSB7IHBhdGggPSBbcGF0aF07IH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGFzc2VydChBcnJheS5pc0FycmF5KHBhdGgpLCBcIm1vZHVsZSBwYXRoIG11c3QgYmUgYSBzdHJpbmcgb3IgYW4gQXJyYXkuXCIpO1xuICB9XG5cbiAgdGhpcy5fbW9kdWxlcy51bnJlZ2lzdGVyKHBhdGgpO1xuICB0aGlzLl93aXRoQ29tbWl0KGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcGFyZW50U3RhdGUgPSBnZXROZXN0ZWRTdGF0ZSh0aGlzJDEuc3RhdGUsIHBhdGguc2xpY2UoMCwgLTEpKTtcbiAgICBWdWUuZGVsZXRlKHBhcmVudFN0YXRlLCBwYXRoW3BhdGgubGVuZ3RoIC0gMV0pO1xuICB9KTtcbiAgcmVzZXRTdG9yZSh0aGlzKTtcbn07XG5cblN0b3JlLnByb3RvdHlwZS5ob3RVcGRhdGUgPSBmdW5jdGlvbiBob3RVcGRhdGUgKG5ld09wdGlvbnMpIHtcbiAgdGhpcy5fbW9kdWxlcy51cGRhdGUobmV3T3B0aW9ucyk7XG4gIHJlc2V0U3RvcmUodGhpcywgdHJ1ZSk7XG59O1xuXG5TdG9yZS5wcm90b3R5cGUuX3dpdGhDb21taXQgPSBmdW5jdGlvbiBfd2l0aENvbW1pdCAoZm4pIHtcbiAgdmFyIGNvbW1pdHRpbmcgPSB0aGlzLl9jb21taXR0aW5nO1xuICB0aGlzLl9jb21taXR0aW5nID0gdHJ1ZTtcbiAgZm4oKTtcbiAgdGhpcy5fY29tbWl0dGluZyA9IGNvbW1pdHRpbmc7XG59O1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyggU3RvcmUucHJvdG90eXBlLCBwcm90b3R5cGVBY2Nlc3NvcnMgKTtcblxuZnVuY3Rpb24gZ2VuZXJpY1N1YnNjcmliZSAoZm4sIHN1YnMpIHtcbiAgaWYgKHN1YnMuaW5kZXhPZihmbikgPCAwKSB7XG4gICAgc3Vicy5wdXNoKGZuKTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBpID0gc3Vicy5pbmRleE9mKGZuKTtcbiAgICBpZiAoaSA+IC0xKSB7XG4gICAgICBzdWJzLnNwbGljZShpLCAxKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVzZXRTdG9yZSAoc3RvcmUsIGhvdCkge1xuICBzdG9yZS5fYWN0aW9ucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHN0b3JlLl9tdXRhdGlvbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICBzdG9yZS5fd3JhcHBlZEdldHRlcnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICBzdG9yZS5fbW9kdWxlc05hbWVzcGFjZU1hcCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gIHZhciBzdGF0ZSA9IHN0b3JlLnN0YXRlO1xuICAvLyBpbml0IGFsbCBtb2R1bGVzXG4gIGluc3RhbGxNb2R1bGUoc3RvcmUsIHN0YXRlLCBbXSwgc3RvcmUuX21vZHVsZXMucm9vdCwgdHJ1ZSk7XG4gIC8vIHJlc2V0IHZtXG4gIHJlc2V0U3RvcmVWTShzdG9yZSwgc3RhdGUsIGhvdCk7XG59XG5cbmZ1bmN0aW9uIHJlc2V0U3RvcmVWTSAoc3RvcmUsIHN0YXRlLCBob3QpIHtcbiAgdmFyIG9sZFZtID0gc3RvcmUuX3ZtO1xuXG4gIC8vIGJpbmQgc3RvcmUgcHVibGljIGdldHRlcnNcbiAgc3RvcmUuZ2V0dGVycyA9IHt9O1xuICB2YXIgd3JhcHBlZEdldHRlcnMgPSBzdG9yZS5fd3JhcHBlZEdldHRlcnM7XG4gIHZhciBjb21wdXRlZCA9IHt9O1xuICBmb3JFYWNoVmFsdWUod3JhcHBlZEdldHRlcnMsIGZ1bmN0aW9uIChmbiwga2V5KSB7XG4gICAgLy8gdXNlIGNvbXB1dGVkIHRvIGxldmVyYWdlIGl0cyBsYXp5LWNhY2hpbmcgbWVjaGFuaXNtXG4gICAgY29tcHV0ZWRba2V5XSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZuKHN0b3JlKTsgfTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3RvcmUuZ2V0dGVycywga2V5LCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHN0b3JlLl92bVtrZXldOyB9LFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSAvLyBmb3IgbG9jYWwgZ2V0dGVyc1xuICAgIH0pO1xuICB9KTtcblxuICAvLyB1c2UgYSBWdWUgaW5zdGFuY2UgdG8gc3RvcmUgdGhlIHN0YXRlIHRyZWVcbiAgLy8gc3VwcHJlc3Mgd2FybmluZ3MganVzdCBpbiBjYXNlIHRoZSB1c2VyIGhhcyBhZGRlZFxuICAvLyBzb21lIGZ1bmt5IGdsb2JhbCBtaXhpbnNcbiAgdmFyIHNpbGVudCA9IFZ1ZS5jb25maWcuc2lsZW50O1xuICBWdWUuY29uZmlnLnNpbGVudCA9IHRydWU7XG4gIHN0b3JlLl92bSA9IG5ldyBWdWUoe1xuICAgIGRhdGE6IHtcbiAgICAgICQkc3RhdGU6IHN0YXRlXG4gICAgfSxcbiAgICBjb21wdXRlZDogY29tcHV0ZWRcbiAgfSk7XG4gIFZ1ZS5jb25maWcuc2lsZW50ID0gc2lsZW50O1xuXG4gIC8vIGVuYWJsZSBzdHJpY3QgbW9kZSBmb3IgbmV3IHZtXG4gIGlmIChzdG9yZS5zdHJpY3QpIHtcbiAgICBlbmFibGVTdHJpY3RNb2RlKHN0b3JlKTtcbiAgfVxuXG4gIGlmIChvbGRWbSkge1xuICAgIGlmIChob3QpIHtcbiAgICAgIC8vIGRpc3BhdGNoIGNoYW5nZXMgaW4gYWxsIHN1YnNjcmliZWQgd2F0Y2hlcnNcbiAgICAgIC8vIHRvIGZvcmNlIGdldHRlciByZS1ldmFsdWF0aW9uIGZvciBob3QgcmVsb2FkaW5nLlxuICAgICAgc3RvcmUuX3dpdGhDb21taXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBvbGRWbS5fZGF0YS4kJHN0YXRlID0gbnVsbDtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBWdWUubmV4dFRpY2soZnVuY3Rpb24gKCkgeyByZXR1cm4gb2xkVm0uJGRlc3Ryb3koKTsgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaW5zdGFsbE1vZHVsZSAoc3RvcmUsIHJvb3RTdGF0ZSwgcGF0aCwgbW9kdWxlLCBob3QpIHtcbiAgdmFyIGlzUm9vdCA9ICFwYXRoLmxlbmd0aDtcbiAgdmFyIG5hbWVzcGFjZSA9IHN0b3JlLl9tb2R1bGVzLmdldE5hbWVzcGFjZShwYXRoKTtcblxuICAvLyByZWdpc3RlciBpbiBuYW1lc3BhY2UgbWFwXG4gIGlmIChtb2R1bGUubmFtZXNwYWNlZCkge1xuICAgIHN0b3JlLl9tb2R1bGVzTmFtZXNwYWNlTWFwW25hbWVzcGFjZV0gPSBtb2R1bGU7XG4gIH1cblxuICAvLyBzZXQgc3RhdGVcbiAgaWYgKCFpc1Jvb3QgJiYgIWhvdCkge1xuICAgIHZhciBwYXJlbnRTdGF0ZSA9IGdldE5lc3RlZFN0YXRlKHJvb3RTdGF0ZSwgcGF0aC5zbGljZSgwLCAtMSkpO1xuICAgIHZhciBtb2R1bGVOYW1lID0gcGF0aFtwYXRoLmxlbmd0aCAtIDFdO1xuICAgIHN0b3JlLl93aXRoQ29tbWl0KGZ1bmN0aW9uICgpIHtcbiAgICAgIFZ1ZS5zZXQocGFyZW50U3RhdGUsIG1vZHVsZU5hbWUsIG1vZHVsZS5zdGF0ZSk7XG4gICAgfSk7XG4gIH1cblxuICB2YXIgbG9jYWwgPSBtb2R1bGUuY29udGV4dCA9IG1ha2VMb2NhbENvbnRleHQoc3RvcmUsIG5hbWVzcGFjZSwgcGF0aCk7XG5cbiAgbW9kdWxlLmZvckVhY2hNdXRhdGlvbihmdW5jdGlvbiAobXV0YXRpb24sIGtleSkge1xuICAgIHZhciBuYW1lc3BhY2VkVHlwZSA9IG5hbWVzcGFjZSArIGtleTtcbiAgICByZWdpc3Rlck11dGF0aW9uKHN0b3JlLCBuYW1lc3BhY2VkVHlwZSwgbXV0YXRpb24sIGxvY2FsKTtcbiAgfSk7XG5cbiAgbW9kdWxlLmZvckVhY2hBY3Rpb24oZnVuY3Rpb24gKGFjdGlvbiwga2V5KSB7XG4gICAgdmFyIHR5cGUgPSBhY3Rpb24ucm9vdCA/IGtleSA6IG5hbWVzcGFjZSArIGtleTtcbiAgICB2YXIgaGFuZGxlciA9IGFjdGlvbi5oYW5kbGVyIHx8IGFjdGlvbjtcbiAgICByZWdpc3RlckFjdGlvbihzdG9yZSwgdHlwZSwgaGFuZGxlciwgbG9jYWwpO1xuICB9KTtcblxuICBtb2R1bGUuZm9yRWFjaEdldHRlcihmdW5jdGlvbiAoZ2V0dGVyLCBrZXkpIHtcbiAgICB2YXIgbmFtZXNwYWNlZFR5cGUgPSBuYW1lc3BhY2UgKyBrZXk7XG4gICAgcmVnaXN0ZXJHZXR0ZXIoc3RvcmUsIG5hbWVzcGFjZWRUeXBlLCBnZXR0ZXIsIGxvY2FsKTtcbiAgfSk7XG5cbiAgbW9kdWxlLmZvckVhY2hDaGlsZChmdW5jdGlvbiAoY2hpbGQsIGtleSkge1xuICAgIGluc3RhbGxNb2R1bGUoc3RvcmUsIHJvb3RTdGF0ZSwgcGF0aC5jb25jYXQoa2V5KSwgY2hpbGQsIGhvdCk7XG4gIH0pO1xufVxuXG4vKipcbiAqIG1ha2UgbG9jYWxpemVkIGRpc3BhdGNoLCBjb21taXQsIGdldHRlcnMgYW5kIHN0YXRlXG4gKiBpZiB0aGVyZSBpcyBubyBuYW1lc3BhY2UsIGp1c3QgdXNlIHJvb3Qgb25lc1xuICovXG5mdW5jdGlvbiBtYWtlTG9jYWxDb250ZXh0IChzdG9yZSwgbmFtZXNwYWNlLCBwYXRoKSB7XG4gIHZhciBub05hbWVzcGFjZSA9IG5hbWVzcGFjZSA9PT0gJyc7XG5cbiAgdmFyIGxvY2FsID0ge1xuICAgIGRpc3BhdGNoOiBub05hbWVzcGFjZSA/IHN0b3JlLmRpc3BhdGNoIDogZnVuY3Rpb24gKF90eXBlLCBfcGF5bG9hZCwgX29wdGlvbnMpIHtcbiAgICAgIHZhciBhcmdzID0gdW5pZnlPYmplY3RTdHlsZShfdHlwZSwgX3BheWxvYWQsIF9vcHRpb25zKTtcbiAgICAgIHZhciBwYXlsb2FkID0gYXJncy5wYXlsb2FkO1xuICAgICAgdmFyIG9wdGlvbnMgPSBhcmdzLm9wdGlvbnM7XG4gICAgICB2YXIgdHlwZSA9IGFyZ3MudHlwZTtcblxuICAgICAgaWYgKCFvcHRpb25zIHx8ICFvcHRpb25zLnJvb3QpIHtcbiAgICAgICAgdHlwZSA9IG5hbWVzcGFjZSArIHR5cGU7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmICFzdG9yZS5fYWN0aW9uc1t0eXBlXSkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoKFwiW3Z1ZXhdIHVua25vd24gbG9jYWwgYWN0aW9uIHR5cGU6IFwiICsgKGFyZ3MudHlwZSkgKyBcIiwgZ2xvYmFsIHR5cGU6IFwiICsgdHlwZSkpO1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzdG9yZS5kaXNwYXRjaCh0eXBlLCBwYXlsb2FkKVxuICAgIH0sXG5cbiAgICBjb21taXQ6IG5vTmFtZXNwYWNlID8gc3RvcmUuY29tbWl0IDogZnVuY3Rpb24gKF90eXBlLCBfcGF5bG9hZCwgX29wdGlvbnMpIHtcbiAgICAgIHZhciBhcmdzID0gdW5pZnlPYmplY3RTdHlsZShfdHlwZSwgX3BheWxvYWQsIF9vcHRpb25zKTtcbiAgICAgIHZhciBwYXlsb2FkID0gYXJncy5wYXlsb2FkO1xuICAgICAgdmFyIG9wdGlvbnMgPSBhcmdzLm9wdGlvbnM7XG4gICAgICB2YXIgdHlwZSA9IGFyZ3MudHlwZTtcblxuICAgICAgaWYgKCFvcHRpb25zIHx8ICFvcHRpb25zLnJvb3QpIHtcbiAgICAgICAgdHlwZSA9IG5hbWVzcGFjZSArIHR5cGU7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nICYmICFzdG9yZS5fbXV0YXRpb25zW3R5cGVdKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcigoXCJbdnVleF0gdW5rbm93biBsb2NhbCBtdXRhdGlvbiB0eXBlOiBcIiArIChhcmdzLnR5cGUpICsgXCIsIGdsb2JhbCB0eXBlOiBcIiArIHR5cGUpKTtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBzdG9yZS5jb21taXQodHlwZSwgcGF5bG9hZCwgb3B0aW9ucyk7XG4gICAgfVxuICB9O1xuXG4gIC8vIGdldHRlcnMgYW5kIHN0YXRlIG9iamVjdCBtdXN0IGJlIGdvdHRlbiBsYXppbHlcbiAgLy8gYmVjYXVzZSB0aGV5IHdpbGwgYmUgY2hhbmdlZCBieSB2bSB1cGRhdGVcbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMobG9jYWwsIHtcbiAgICBnZXR0ZXJzOiB7XG4gICAgICBnZXQ6IG5vTmFtZXNwYWNlXG4gICAgICAgID8gZnVuY3Rpb24gKCkgeyByZXR1cm4gc3RvcmUuZ2V0dGVyczsgfVxuICAgICAgICA6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG1ha2VMb2NhbEdldHRlcnMoc3RvcmUsIG5hbWVzcGFjZSk7IH1cbiAgICB9LFxuICAgIHN0YXRlOiB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGdldE5lc3RlZFN0YXRlKHN0b3JlLnN0YXRlLCBwYXRoKTsgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGxvY2FsXG59XG5cbmZ1bmN0aW9uIG1ha2VMb2NhbEdldHRlcnMgKHN0b3JlLCBuYW1lc3BhY2UpIHtcbiAgdmFyIGdldHRlcnNQcm94eSA9IHt9O1xuXG4gIHZhciBzcGxpdFBvcyA9IG5hbWVzcGFjZS5sZW5ndGg7XG4gIE9iamVjdC5rZXlzKHN0b3JlLmdldHRlcnMpLmZvckVhY2goZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAvLyBza2lwIGlmIHRoZSB0YXJnZXQgZ2V0dGVyIGlzIG5vdCBtYXRjaCB0aGlzIG5hbWVzcGFjZVxuICAgIGlmICh0eXBlLnNsaWNlKDAsIHNwbGl0UG9zKSAhPT0gbmFtZXNwYWNlKSB7IHJldHVybiB9XG5cbiAgICAvLyBleHRyYWN0IGxvY2FsIGdldHRlciB0eXBlXG4gICAgdmFyIGxvY2FsVHlwZSA9IHR5cGUuc2xpY2Uoc3BsaXRQb3MpO1xuXG4gICAgLy8gQWRkIGEgcG9ydCB0byB0aGUgZ2V0dGVycyBwcm94eS5cbiAgICAvLyBEZWZpbmUgYXMgZ2V0dGVyIHByb3BlcnR5IGJlY2F1c2VcbiAgICAvLyB3ZSBkbyBub3Qgd2FudCB0byBldmFsdWF0ZSB0aGUgZ2V0dGVycyBpbiB0aGlzIHRpbWUuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGdldHRlcnNQcm94eSwgbG9jYWxUeXBlLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHN0b3JlLmdldHRlcnNbdHlwZV07IH0sXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlXG4gICAgfSk7XG4gIH0pO1xuXG4gIHJldHVybiBnZXR0ZXJzUHJveHlcbn1cblxuZnVuY3Rpb24gcmVnaXN0ZXJNdXRhdGlvbiAoc3RvcmUsIHR5cGUsIGhhbmRsZXIsIGxvY2FsKSB7XG4gIHZhciBlbnRyeSA9IHN0b3JlLl9tdXRhdGlvbnNbdHlwZV0gfHwgKHN0b3JlLl9tdXRhdGlvbnNbdHlwZV0gPSBbXSk7XG4gIGVudHJ5LnB1c2goZnVuY3Rpb24gd3JhcHBlZE11dGF0aW9uSGFuZGxlciAocGF5bG9hZCkge1xuICAgIGhhbmRsZXIuY2FsbChzdG9yZSwgbG9jYWwuc3RhdGUsIHBheWxvYWQpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gcmVnaXN0ZXJBY3Rpb24gKHN0b3JlLCB0eXBlLCBoYW5kbGVyLCBsb2NhbCkge1xuICB2YXIgZW50cnkgPSBzdG9yZS5fYWN0aW9uc1t0eXBlXSB8fCAoc3RvcmUuX2FjdGlvbnNbdHlwZV0gPSBbXSk7XG4gIGVudHJ5LnB1c2goZnVuY3Rpb24gd3JhcHBlZEFjdGlvbkhhbmRsZXIgKHBheWxvYWQsIGNiKSB7XG4gICAgdmFyIHJlcyA9IGhhbmRsZXIuY2FsbChzdG9yZSwge1xuICAgICAgZGlzcGF0Y2g6IGxvY2FsLmRpc3BhdGNoLFxuICAgICAgY29tbWl0OiBsb2NhbC5jb21taXQsXG4gICAgICBnZXR0ZXJzOiBsb2NhbC5nZXR0ZXJzLFxuICAgICAgc3RhdGU6IGxvY2FsLnN0YXRlLFxuICAgICAgcm9vdEdldHRlcnM6IHN0b3JlLmdldHRlcnMsXG4gICAgICByb290U3RhdGU6IHN0b3JlLnN0YXRlXG4gICAgfSwgcGF5bG9hZCwgY2IpO1xuICAgIGlmICghaXNQcm9taXNlKHJlcykpIHtcbiAgICAgIHJlcyA9IFByb21pc2UucmVzb2x2ZShyZXMpO1xuICAgIH1cbiAgICBpZiAoc3RvcmUuX2RldnRvb2xIb29rKSB7XG4gICAgICByZXR1cm4gcmVzLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgc3RvcmUuX2RldnRvb2xIb29rLmVtaXQoJ3Z1ZXg6ZXJyb3InLCBlcnIpO1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiByZXNcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZWdpc3RlckdldHRlciAoc3RvcmUsIHR5cGUsIHJhd0dldHRlciwgbG9jYWwpIHtcbiAgaWYgKHN0b3JlLl93cmFwcGVkR2V0dGVyc1t0eXBlXSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBjb25zb2xlLmVycm9yKChcIlt2dWV4XSBkdXBsaWNhdGUgZ2V0dGVyIGtleTogXCIgKyB0eXBlKSk7XG4gICAgfVxuICAgIHJldHVyblxuICB9XG4gIHN0b3JlLl93cmFwcGVkR2V0dGVyc1t0eXBlXSA9IGZ1bmN0aW9uIHdyYXBwZWRHZXR0ZXIgKHN0b3JlKSB7XG4gICAgcmV0dXJuIHJhd0dldHRlcihcbiAgICAgIGxvY2FsLnN0YXRlLCAvLyBsb2NhbCBzdGF0ZVxuICAgICAgbG9jYWwuZ2V0dGVycywgLy8gbG9jYWwgZ2V0dGVyc1xuICAgICAgc3RvcmUuc3RhdGUsIC8vIHJvb3Qgc3RhdGVcbiAgICAgIHN0b3JlLmdldHRlcnMgLy8gcm9vdCBnZXR0ZXJzXG4gICAgKVxuICB9O1xufVxuXG5mdW5jdGlvbiBlbmFibGVTdHJpY3RNb2RlIChzdG9yZSkge1xuICBzdG9yZS5fdm0uJHdhdGNoKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXMuX2RhdGEuJCRzdGF0ZSB9LCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGFzc2VydChzdG9yZS5fY29tbWl0dGluZywgXCJEbyBub3QgbXV0YXRlIHZ1ZXggc3RvcmUgc3RhdGUgb3V0c2lkZSBtdXRhdGlvbiBoYW5kbGVycy5cIik7XG4gICAgfVxuICB9LCB7IGRlZXA6IHRydWUsIHN5bmM6IHRydWUgfSk7XG59XG5cbmZ1bmN0aW9uIGdldE5lc3RlZFN0YXRlIChzdGF0ZSwgcGF0aCkge1xuICByZXR1cm4gcGF0aC5sZW5ndGhcbiAgICA/IHBhdGgucmVkdWNlKGZ1bmN0aW9uIChzdGF0ZSwga2V5KSB7IHJldHVybiBzdGF0ZVtrZXldOyB9LCBzdGF0ZSlcbiAgICA6IHN0YXRlXG59XG5cbmZ1bmN0aW9uIHVuaWZ5T2JqZWN0U3R5bGUgKHR5cGUsIHBheWxvYWQsIG9wdGlvbnMpIHtcbiAgaWYgKGlzT2JqZWN0KHR5cGUpICYmIHR5cGUudHlwZSkge1xuICAgIG9wdGlvbnMgPSBwYXlsb2FkO1xuICAgIHBheWxvYWQgPSB0eXBlO1xuICAgIHR5cGUgPSB0eXBlLnR5cGU7XG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGFzc2VydCh0eXBlb2YgdHlwZSA9PT0gJ3N0cmluZycsIChcIkV4cGVjdHMgc3RyaW5nIGFzIHRoZSB0eXBlLCBidXQgZm91bmQgXCIgKyAodHlwZW9mIHR5cGUpICsgXCIuXCIpKTtcbiAgfVxuXG4gIHJldHVybiB7IHR5cGU6IHR5cGUsIHBheWxvYWQ6IHBheWxvYWQsIG9wdGlvbnM6IG9wdGlvbnMgfVxufVxuXG5mdW5jdGlvbiBpbnN0YWxsIChfVnVlKSB7XG4gIGlmIChWdWUgJiYgX1Z1ZSA9PT0gVnVlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICdbdnVleF0gYWxyZWFkeSBpbnN0YWxsZWQuIFZ1ZS51c2UoVnVleCkgc2hvdWxkIGJlIGNhbGxlZCBvbmx5IG9uY2UuJ1xuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuXG4gIH1cbiAgVnVlID0gX1Z1ZTtcbiAgYXBwbHlNaXhpbihWdWUpO1xufVxuXG52YXIgbWFwU3RhdGUgPSBub3JtYWxpemVOYW1lc3BhY2UoZnVuY3Rpb24gKG5hbWVzcGFjZSwgc3RhdGVzKSB7XG4gIHZhciByZXMgPSB7fTtcbiAgbm9ybWFsaXplTWFwKHN0YXRlcykuZm9yRWFjaChmdW5jdGlvbiAocmVmKSB7XG4gICAgdmFyIGtleSA9IHJlZi5rZXk7XG4gICAgdmFyIHZhbCA9IHJlZi52YWw7XG5cbiAgICByZXNba2V5XSA9IGZ1bmN0aW9uIG1hcHBlZFN0YXRlICgpIHtcbiAgICAgIHZhciBzdGF0ZSA9IHRoaXMuJHN0b3JlLnN0YXRlO1xuICAgICAgdmFyIGdldHRlcnMgPSB0aGlzLiRzdG9yZS5nZXR0ZXJzO1xuICAgICAgaWYgKG5hbWVzcGFjZSkge1xuICAgICAgICB2YXIgbW9kdWxlID0gZ2V0TW9kdWxlQnlOYW1lc3BhY2UodGhpcy4kc3RvcmUsICdtYXBTdGF0ZScsIG5hbWVzcGFjZSk7XG4gICAgICAgIGlmICghbW9kdWxlKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgc3RhdGUgPSBtb2R1bGUuY29udGV4dC5zdGF0ZTtcbiAgICAgICAgZ2V0dGVycyA9IG1vZHVsZS5jb250ZXh0LmdldHRlcnM7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHlwZW9mIHZhbCA9PT0gJ2Z1bmN0aW9uJ1xuICAgICAgICA/IHZhbC5jYWxsKHRoaXMsIHN0YXRlLCBnZXR0ZXJzKVxuICAgICAgICA6IHN0YXRlW3ZhbF1cbiAgICB9O1xuICAgIC8vIG1hcmsgdnVleCBnZXR0ZXIgZm9yIGRldnRvb2xzXG4gICAgcmVzW2tleV0udnVleCA9IHRydWU7XG4gIH0pO1xuICByZXR1cm4gcmVzXG59KTtcblxudmFyIG1hcE11dGF0aW9ucyA9IG5vcm1hbGl6ZU5hbWVzcGFjZShmdW5jdGlvbiAobmFtZXNwYWNlLCBtdXRhdGlvbnMpIHtcbiAgdmFyIHJlcyA9IHt9O1xuICBub3JtYWxpemVNYXAobXV0YXRpb25zKS5mb3JFYWNoKGZ1bmN0aW9uIChyZWYpIHtcbiAgICB2YXIga2V5ID0gcmVmLmtleTtcbiAgICB2YXIgdmFsID0gcmVmLnZhbDtcblxuICAgIHJlc1trZXldID0gZnVuY3Rpb24gbWFwcGVkTXV0YXRpb24gKCkge1xuICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgIHZhciBjb21taXQgPSB0aGlzLiRzdG9yZS5jb21taXQ7XG4gICAgICBpZiAobmFtZXNwYWNlKSB7XG4gICAgICAgIHZhciBtb2R1bGUgPSBnZXRNb2R1bGVCeU5hbWVzcGFjZSh0aGlzLiRzdG9yZSwgJ21hcE11dGF0aW9ucycsIG5hbWVzcGFjZSk7XG4gICAgICAgIGlmICghbW9kdWxlKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgY29tbWl0ID0gbW9kdWxlLmNvbnRleHQuY29tbWl0O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyB2YWwuYXBwbHkodGhpcywgW2NvbW1pdF0uY29uY2F0KGFyZ3MpKVxuICAgICAgICA6IGNvbW1pdC5hcHBseSh0aGlzLiRzdG9yZSwgW3ZhbF0uY29uY2F0KGFyZ3MpKVxuICAgIH07XG4gIH0pO1xuICByZXR1cm4gcmVzXG59KTtcblxudmFyIG1hcEdldHRlcnMgPSBub3JtYWxpemVOYW1lc3BhY2UoZnVuY3Rpb24gKG5hbWVzcGFjZSwgZ2V0dGVycykge1xuICB2YXIgcmVzID0ge307XG4gIG5vcm1hbGl6ZU1hcChnZXR0ZXJzKS5mb3JFYWNoKGZ1bmN0aW9uIChyZWYpIHtcbiAgICB2YXIga2V5ID0gcmVmLmtleTtcbiAgICB2YXIgdmFsID0gcmVmLnZhbDtcblxuICAgIHZhbCA9IG5hbWVzcGFjZSArIHZhbDtcbiAgICByZXNba2V5XSA9IGZ1bmN0aW9uIG1hcHBlZEdldHRlciAoKSB7XG4gICAgICBpZiAobmFtZXNwYWNlICYmICFnZXRNb2R1bGVCeU5hbWVzcGFjZSh0aGlzLiRzdG9yZSwgJ21hcEdldHRlcnMnLCBuYW1lc3BhY2UpKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgJiYgISh2YWwgaW4gdGhpcy4kc3RvcmUuZ2V0dGVycykpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcigoXCJbdnVleF0gdW5rbm93biBnZXR0ZXI6IFwiICsgdmFsKSk7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLmdldHRlcnNbdmFsXVxuICAgIH07XG4gICAgLy8gbWFyayB2dWV4IGdldHRlciBmb3IgZGV2dG9vbHNcbiAgICByZXNba2V5XS52dWV4ID0gdHJ1ZTtcbiAgfSk7XG4gIHJldHVybiByZXNcbn0pO1xuXG52YXIgbWFwQWN0aW9ucyA9IG5vcm1hbGl6ZU5hbWVzcGFjZShmdW5jdGlvbiAobmFtZXNwYWNlLCBhY3Rpb25zKSB7XG4gIHZhciByZXMgPSB7fTtcbiAgbm9ybWFsaXplTWFwKGFjdGlvbnMpLmZvckVhY2goZnVuY3Rpb24gKHJlZikge1xuICAgIHZhciBrZXkgPSByZWYua2V5O1xuICAgIHZhciB2YWwgPSByZWYudmFsO1xuXG4gICAgcmVzW2tleV0gPSBmdW5jdGlvbiBtYXBwZWRBY3Rpb24gKCkge1xuICAgICAgdmFyIGFyZ3MgPSBbXSwgbGVuID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgIHdoaWxlICggbGVuLS0gKSBhcmdzWyBsZW4gXSA9IGFyZ3VtZW50c1sgbGVuIF07XG5cbiAgICAgIHZhciBkaXNwYXRjaCA9IHRoaXMuJHN0b3JlLmRpc3BhdGNoO1xuICAgICAgaWYgKG5hbWVzcGFjZSkge1xuICAgICAgICB2YXIgbW9kdWxlID0gZ2V0TW9kdWxlQnlOYW1lc3BhY2UodGhpcy4kc3RvcmUsICdtYXBBY3Rpb25zJywgbmFtZXNwYWNlKTtcbiAgICAgICAgaWYgKCFtb2R1bGUpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBkaXNwYXRjaCA9IG1vZHVsZS5jb250ZXh0LmRpc3BhdGNoO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHR5cGVvZiB2YWwgPT09ICdmdW5jdGlvbidcbiAgICAgICAgPyB2YWwuYXBwbHkodGhpcywgW2Rpc3BhdGNoXS5jb25jYXQoYXJncykpXG4gICAgICAgIDogZGlzcGF0Y2guYXBwbHkodGhpcy4kc3RvcmUsIFt2YWxdLmNvbmNhdChhcmdzKSlcbiAgICB9O1xuICB9KTtcbiAgcmV0dXJuIHJlc1xufSk7XG5cbnZhciBjcmVhdGVOYW1lc3BhY2VkSGVscGVycyA9IGZ1bmN0aW9uIChuYW1lc3BhY2UpIHsgcmV0dXJuICh7XG4gIG1hcFN0YXRlOiBtYXBTdGF0ZS5iaW5kKG51bGwsIG5hbWVzcGFjZSksXG4gIG1hcEdldHRlcnM6IG1hcEdldHRlcnMuYmluZChudWxsLCBuYW1lc3BhY2UpLFxuICBtYXBNdXRhdGlvbnM6IG1hcE11dGF0aW9ucy5iaW5kKG51bGwsIG5hbWVzcGFjZSksXG4gIG1hcEFjdGlvbnM6IG1hcEFjdGlvbnMuYmluZChudWxsLCBuYW1lc3BhY2UpXG59KTsgfTtcblxuZnVuY3Rpb24gbm9ybWFsaXplTWFwIChtYXApIHtcbiAgcmV0dXJuIEFycmF5LmlzQXJyYXkobWFwKVxuICAgID8gbWFwLm1hcChmdW5jdGlvbiAoa2V5KSB7IHJldHVybiAoeyBrZXk6IGtleSwgdmFsOiBrZXkgfSk7IH0pXG4gICAgOiBPYmplY3Qua2V5cyhtYXApLm1hcChmdW5jdGlvbiAoa2V5KSB7IHJldHVybiAoeyBrZXk6IGtleSwgdmFsOiBtYXBba2V5XSB9KTsgfSlcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplTmFtZXNwYWNlIChmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKG5hbWVzcGFjZSwgbWFwKSB7XG4gICAgaWYgKHR5cGVvZiBuYW1lc3BhY2UgIT09ICdzdHJpbmcnKSB7XG4gICAgICBtYXAgPSBuYW1lc3BhY2U7XG4gICAgICBuYW1lc3BhY2UgPSAnJztcbiAgICB9IGVsc2UgaWYgKG5hbWVzcGFjZS5jaGFyQXQobmFtZXNwYWNlLmxlbmd0aCAtIDEpICE9PSAnLycpIHtcbiAgICAgIG5hbWVzcGFjZSArPSAnLyc7XG4gICAgfVxuICAgIHJldHVybiBmbihuYW1lc3BhY2UsIG1hcClcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRNb2R1bGVCeU5hbWVzcGFjZSAoc3RvcmUsIGhlbHBlciwgbmFtZXNwYWNlKSB7XG4gIHZhciBtb2R1bGUgPSBzdG9yZS5fbW9kdWxlc05hbWVzcGFjZU1hcFtuYW1lc3BhY2VdO1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyAmJiAhbW9kdWxlKSB7XG4gICAgY29uc29sZS5lcnJvcigoXCJbdnVleF0gbW9kdWxlIG5hbWVzcGFjZSBub3QgZm91bmQgaW4gXCIgKyBoZWxwZXIgKyBcIigpOiBcIiArIG5hbWVzcGFjZSkpO1xuICB9XG4gIHJldHVybiBtb2R1bGVcbn1cblxudmFyIGluZGV4X2VzbSA9IHtcbiAgU3RvcmU6IFN0b3JlLFxuICBpbnN0YWxsOiBpbnN0YWxsLFxuICB2ZXJzaW9uOiAnMy4wLjEnLFxuICBtYXBTdGF0ZTogbWFwU3RhdGUsXG4gIG1hcE11dGF0aW9uczogbWFwTXV0YXRpb25zLFxuICBtYXBHZXR0ZXJzOiBtYXBHZXR0ZXJzLFxuICBtYXBBY3Rpb25zOiBtYXBBY3Rpb25zLFxuICBjcmVhdGVOYW1lc3BhY2VkSGVscGVyczogY3JlYXRlTmFtZXNwYWNlZEhlbHBlcnNcbn07XG5cbmV4cG9ydCB7IFN0b3JlLCBpbnN0YWxsLCBtYXBTdGF0ZSwgbWFwTXV0YXRpb25zLCBtYXBHZXR0ZXJzLCBtYXBBY3Rpb25zLCBjcmVhdGVOYW1lc3BhY2VkSGVscGVycyB9O1xuZXhwb3J0IGRlZmF1bHQgaW5kZXhfZXNtO1xuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi91bmktcG9wdXAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTMzYjllOGZmJnNjb3BlZD10cnVlJlwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdW5pLXBvcHVwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vdW5pLXBvcHVwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL3VuaS1wb3B1cC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zM2I5ZThmZiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpLmRlZmF1bHQsIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24odGhpcy5vcHRpb25zLnN0eWxlLHJlcXVpcmUoXCIuL3VuaS1wb3B1cC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zM2I5ZThmZiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpLmRlZmF1bHQpXG4gICAgICAgICAgICB9XG5cbn1cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuMy4zLjIwMTkwOTIzLmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjMzYjllOGZmXCIsXG4gIFwiMGIzMzBkODJcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiRGVza3RvcC9naXRsYWIvZ3JhZHVhdGlvbi9iZWFyLWFwcC9jb21wb25lbnRzL3VuaS1wb3B1cC91bmktcG9wdXAudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjMuMy4yMDE5MDkyMy5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi4zLjMuMjAxOTA5MjMuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS5yZWN5Y2xlLmpzIS4uLy4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi4zLjMuMjAxOTA5MjMuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy0wIS4uLy4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi4zLjMuMjAxOTA5MjMuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktcG9wdXAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTMzYjllOGZmJnNjb3BlZD10cnVlJlwiIiwidmFyIGNvbXBvbmVudHMgPSB7XG4gIHVuaVRyYW5zaXRpb246IHJlcXVpcmUoXCJAL2NvbXBvbmVudHMvdW5pLXRyYW5zaXRpb24vdW5pLXRyYW5zaXRpb24udnVlXCIpXG4gICAgLmRlZmF1bHRcbn1cbnZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX3ZtLnNob3dQb3B1cFxuICAgID8gX2MoXG4gICAgICAgIFwidmlld1wiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFtcInVuaS1wb3B1cFwiXSxcbiAgICAgICAgICBjbGFzczogW192bS5wb3B1cHN0eWxlXSxcbiAgICAgICAgICBvbjogeyB0b3VjaG1vdmU6IF92bS5jbGVhciB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfdm0ubWFza1Nob3dcbiAgICAgICAgICAgID8gX2MoXCJ1bmktdHJhbnNpdGlvblwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIG1vZGVDbGFzczogW1wiZmFkZVwiXSxcbiAgICAgICAgICAgICAgICAgIHN0eWxlczogX3ZtLm1hc2tDbGFzcyxcbiAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBfdm0uZHVyYXRpb24sXG4gICAgICAgICAgICAgICAgICBzaG93OiBfdm0uc2hvd1RyYW5zXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLm9uVGFwIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInVuaS10cmFuc2l0aW9uXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgbW9kZUNsYXNzOiBfdm0uYW5pLFxuICAgICAgICAgICAgICAgIHN0eWxlczogX3ZtLnRyYW5zQ2xhc3MsXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IF92bS5kdXJhdGlvbixcbiAgICAgICAgICAgICAgICBzaG93OiBfdm0uc2hvd1RyYW5zXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0ub25UYXAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2aWV3XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFtcInVuaS1wb3B1cF9fd3JhcHBlci1ib3hcIl0sXG4gICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmNsZWFyIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3QoXCJkZWZhdWx0XCIpXSxcbiAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICA6IF92bS5fZSgpXG59XG52YXIgcmVjeWNsYWJsZVJlbmRlciA9IGZhbHNlXG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHMgfSBmcm9tIFwiLi91bmktdHJhbnNpdGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZmQwYjk0YzImXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi91bmktdHJhbnNpdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3VuaS10cmFuc2l0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZnVuY3Rpb24gaW5qZWN0U3R5bGVzIChjb250ZXh0KSB7XG4gIFxuICBpZighdGhpcy5vcHRpb25zLnN0eWxlKXtcbiAgICAgICAgICB0aGlzLm9wdGlvbnMuc3R5bGUgPSB7fVxuICAgICAgfVxuICAgICAgaWYoVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlICYmIFZ1ZS5wcm90b3R5cGUuX18kYXBwU3R5bGVfXyl7XG4gICAgICAgIFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZShWdWUucHJvdG90eXBlLl9fJGFwcFN0eWxlX18sIHRoaXMub3B0aW9ucy5zdHlsZSlcbiAgICAgIH1cbiAgICAgIGlmKFZ1ZS5wcm90b3R5cGUuX19tZXJnZV9zdHlsZSl7XG4gICAgICAgICAgICAgICAgVnVlLnByb3RvdHlwZS5fX21lcmdlX3N0eWxlKHJlcXVpcmUoXCIuL3VuaS10cmFuc2l0aW9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiKS5kZWZhdWx0LCB0aGlzLm9wdGlvbnMuc3R5bGUpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMub3B0aW9ucy5zdHlsZSxyZXF1aXJlKFwiLi91bmktdHJhbnNpdGlvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIikuZGVmYXVsdClcbiAgICAgICAgICAgIH1cblxufVxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi4zLjMuMjAxOTA5MjMuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIFwiY2NlNmYwY2VcIixcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmluamVjdFN0eWxlcy5jYWxsKGNvbXBvbmVudClcbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiRGVza3RvcC9naXRsYWIvZ3JhZHVhdGlvbi9iZWFyLWFwcC9jb21wb25lbnRzL3VuaS10cmFuc2l0aW9uL3VuaS10cmFuc2l0aW9uLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi4zLjMuMjAxOTA5MjMuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuMy4zLjIwMTkwOTIzLmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy93ZWJwYWNrLXVuaS1udnVlLWxvYWRlci9saWIvdGVtcGxhdGUucmVjeWNsZS5qcyEuLi8uLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuMy4zLjIwMTkwOTIzLmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTctMCEuLi8uLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuMy4zLjIwMTkwOTIzLmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW5pLXRyYW5zaXRpb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWZkMGI5NGMyJlwiIiwidmFyIGNvbXBvbmVudHNcbnZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX3ZtLmlzU2hvd1xuICAgID8gX2MoXG4gICAgICAgIFwidmlld1wiLFxuICAgICAgICB7XG4gICAgICAgICAgcmVmOiBcImFuaVwiLFxuICAgICAgICAgIHN0YXRpY0NsYXNzOiBbXCJ1bmktdHJhbnNpdGlvblwiXSxcbiAgICAgICAgICBjbGFzczogW192bS5hbmkuaW5dLFxuICAgICAgICAgIHN0eWxlOiBcInRyYW5zZm9ybTpcIiArIF92bS50cmFuc2Zvcm0gKyBcIjtcIiArIF92bS5zdHlsZXNPYmplY3QsXG4gICAgICAgICAgb246IHsgY2xpY2s6IF92bS5jaGFuZ2UgfVxuICAgICAgICB9LFxuICAgICAgICBbX3ZtLl90KFwiZGVmYXVsdFwiKV0sXG4gICAgICAgIDJcbiAgICAgIClcbiAgICA6IF92bS5fZSgpXG59XG52YXIgcmVjeWNsYWJsZVJlbmRlciA9IGZhbHNlXG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuMy4zLjIwMTkwOTIzLmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjMuMy4yMDE5MDkyMy5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjMuMy4yMDE5MDkyMy5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VuaS10cmFuc2l0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuMy4zLjIwMTkwOTIzLmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjMuMy4yMDE5MDkyMy5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS00LTEhLi4vLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjMuMy4yMDE5MDkyMy5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VuaS10cmFuc2l0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyB2LWlmPVwiaXNTaG93XCIgcmVmPVwiYW5pXCIgY2xhc3M9XCJ1bmktdHJhbnNpdGlvblwiIDpjbGFzcz1cIlthbmkuaW5dXCIgOnN0eWxlPVwiJ3RyYW5zZm9ybTonICt0cmFuc2Zvcm0rJzsnK3N0eWxlc09iamVjdFwiXHJcblx0IEBjbGljaz1cImNoYW5nZVwiPlxyXG5cdFx0IDxzbG90Pjwvc2xvdD5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdC8vICNpZmRlZiBBUFAtTlZVRVxuXHRjb25zdCBhbmltYXRpb24gPSB1bmkucmVxdWlyZU5hdGl2ZVBsdWdpbignYW5pbWF0aW9uJyk7XHJcblx0Ly8gI2VuZGlmXG5cdC8qKlxuXHQgKiBUcmFuc2l0aW9uIOi/h+a4oeWKqOeUu1xuXHQgKiBAZGVzY3JpcHRpb24g566A5Y2V6L+H5rih5Yqo55S757uE5Lu2XG5cdCAqIEB0dXRvcmlhbCBodHRwczovL2V4dC5kY2xvdWQubmV0LmNuL3BsdWdpbj9pZD05ODVcblx0ICogQHByb3BlcnR5IHtCb29sZWFufSBzaG93ID0gW2ZhbHNlfHRydWVdIOaOp+WItue7hOS7tuaYvuekuuaIlumakOiXj1xyXG4gICAgICogQHByb3BlcnR5IHtBcnJheX0gbW9kZUNsYXNzID0gW2ZhZGV8c2xpZGUtdG9wfHNsaWRlLXJpZ2h0fHNsaWRlLWJvdHRvbXxzbGlkZS1sZWZ0fHpvb20taW58em9vbS1vdXRdIOi/h+a4oeWKqOeUu+exu+Wei1xuICAgICAqICBAdmFsdWUgZmFkZSDmuJDpmpDmuJDlh7rov4fmuKFcbiAgICAgKiAgQHZhbHVlIHNsaWRlLXRvcCDnlLHkuIroh7PkuIvov4fmuKFcbiAgICAgKiAgQHZhbHVlIHNsaWRlLXJpZ2h0IOeUseWPs+iHs+W3pui/h+a4oVxuICAgICAqICBAdmFsdWUgc2xpZGUtYm90dG9tIOeUseS4i+iHs+S4iui/h+a4oVxuICAgICAqICBAdmFsdWUgc2xpZGUtbGVmdCDnlLHlt6boh7Plj7Pov4fmuKFcbiAgICAgKiAgQHZhbHVlIHpvb20taW4g55Sx5bCP5Yiw5aSn6L+H5rihXG4gICAgICogIEB2YWx1ZSB6b29tLW91dCDnlLHlpKfliLDlsI/ov4fmuKFcblx0ICogQHByb3BlcnR5IHtOdW1iZXJ9IGR1cmF0aW9uIOi/h+a4oeWKqOeUu+aMgee7reaXtumXtFxuXHQgKiBAcHJvcGVydHkge09iamVjdH0gc3R5bGVzIOe7hOS7tuagt+W8j++8jOWQjCBjc3Mg5qC35byP77yM5rOo5oSP5bim4oCZLeKAmOi/nuaOpeespueahOWxnuaAp+mcgOimgeS9v+eUqOWwj+mpvOWzsOWGmeazleWmgu+8mmBiYWNrZ3JvdW5kQ29sb3I6cmVkYFxuXHQgKi9cclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRuYW1lOiAndW5pVHJhbnNpdGlvbicsXHJcblx0XHRwcm9wczoge1xyXG5cdFx0XHRzaG93OiB7XHJcblx0XHRcdFx0dHlwZTogQm9vbGVhbixcclxuXHRcdFx0XHRkZWZhdWx0OiBmYWxzZVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRtb2RlQ2xhc3M6IHtcclxuXHRcdFx0XHR0eXBlOiBBcnJheSxcclxuXHRcdFx0XHRkZWZhdWx0ICgpIHtcclxuXHRcdFx0XHRcdHJldHVybiBbXVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0ZHVyYXRpb246IHtcclxuXHRcdFx0XHR0eXBlOiBOdW1iZXIsXHJcblx0XHRcdFx0ZGVmYXVsdDogMzAwXHJcblx0XHRcdH0sXHJcblx0XHRcdHN0eWxlczoge1xyXG5cdFx0XHRcdHR5cGU6IE9iamVjdCxcclxuXHRcdFx0XHRkZWZhdWx0ICgpIHtcblx0XHRcdFx0XHRyZXR1cm4ge31cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdGlzU2hvdzogZmFsc2UsXHJcblx0XHRcdFx0dHJhbnNmb3JtOiAnJyxcclxuXHRcdFx0XHRhbmk6IHsgaW46ICcnLFxyXG5cdFx0XHRcdFx0YWN0aXZlOiAnJ1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fTtcclxuXHRcdH0sXHJcblx0XHR3YXRjaDoge1xyXG5cdFx0XHRzaG93OiB7XHJcblx0XHRcdFx0aGFuZGxlcihuZXdWYWwpIHtcclxuXHRcdFx0XHRcdGlmIChuZXdWYWwpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5vcGVuKClcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuY2xvc2UoKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0aW1tZWRpYXRlOiB0cnVlXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRjb21wdXRlZDoge1xyXG5cdFx0XHRzdHlsZXNPYmplY3QoKSB7XG5cdFx0XHRcdGxldCBzdHlsZXMgPSB7XHJcblx0XHRcdFx0XHQuLi50aGlzLnN0eWxlcyxcclxuXHRcdFx0XHRcdCd0cmFuc2l0aW9uLWR1cmF0aW9uJzogdGhpcy5kdXJhdGlvbiAvIDEwMDAgKyAncydcclxuXHRcdFx0XHR9XG5cdFx0XHRcdGxldCB0cmFuc2Zyb20gPSAnJ1xyXG5cdFx0XHRcdGZvciAobGV0IGkgaW4gc3R5bGVzKSB7XG5cdFx0XHRcdFx0bGV0IGxpbmUgPSB0aGlzLnRvTGluZShpKVxyXG5cdFx0XHRcdFx0dHJhbnNmcm9tICs9IGxpbmUgKyAnOicgKyBzdHlsZXNbaV0gKyAnOydcclxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB0cmFuc2Zyb21cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGNyZWF0ZWQoKSB7XHJcblx0XHRcdC8vIHRoaXMudGltZXIgPSBudWxsXHJcblx0XHRcdC8vIHRoaXMubmV4dFRpY2sgPSAodGltZSA9IDUwKSA9PiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuXHRcdFx0Ly8gXHRjbGVhclRpbWVvdXQodGhpcy50aW1lcilcclxuXHRcdFx0Ly8gXHR0aGlzLnRpbWVyID0gc2V0VGltZW91dChyZXNvbHZlLCB0aW1lKVxyXG5cdFx0XHQvLyBcdHJldHVybiB0aGlzLnRpbWVyXHJcblx0XHRcdC8vIH0pO1xyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0Y2hhbmdlKCkge1xyXG5cdFx0XHRcdHRoaXMuJGVtaXQoJ2NsaWNrJywge1xyXG5cdFx0XHRcdFx0ZGV0YWlsOiB0aGlzLmlzU2hvd1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXHJcblx0XHRcdG9wZW4oKSB7XG5cdFx0XHRcdGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKVxyXG5cdFx0XHRcdHRoaXMuaXNTaG93ID0gdHJ1ZVxyXG5cdFx0XHRcdHRoaXMudHJhbnNmb3JtID0gJydcclxuXHRcdFx0XHR0aGlzLmFuaS5pbiA9ICcnXHJcblx0XHRcdFx0Zm9yIChsZXQgaSBpbiB0aGlzLmdldFRyYW5mcm9tKGZhbHNlKSkge1xyXG5cdFx0XHRcdFx0aWYgKGkgPT09ICdvcGFjaXR5Jykge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmFuaS5pbiA9ICdmYWRlLWluJ1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0dGhpcy50cmFuc2Zvcm0gKz0gYCR7dGhpcy5nZXRUcmFuZnJvbShmYWxzZSlbaV19IGBcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGhpcy4kbmV4dFRpY2soKCkgPT4ge1xyXG5cdFx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdHRoaXMuX2FuaW1hdGlvbih0cnVlKVxyXG5cdFx0XHRcdFx0fSwgNTApXHJcblx0XHRcdFx0fSlcclxuXHJcblx0XHRcdH0sXHJcblx0XHRcdGNsb3NlKHR5cGUpIHtcblx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRoaXMudGltZXIpXHJcblx0XHRcdFx0dGhpcy5fYW5pbWF0aW9uKGZhbHNlKVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRfYW5pbWF0aW9uKHR5cGUpIHtcclxuXHRcdFx0XHRsZXQgc3R5bGVzID0gdGhpcy5nZXRUcmFuZnJvbSh0eXBlKVxyXG5cdFx0XHRcdC8vICNpZmRlZiBBUFAtTlZVRVxuXHRcdFx0XHRpZighdGhpcy4kcmVmc1snYW5pJ10pIHJldHVyblxyXG5cdFx0XHRcdGFuaW1hdGlvbi50cmFuc2l0aW9uKHRoaXMuJHJlZnNbJ2FuaSddLnJlZiwge1xyXG5cdFx0XHRcdFx0c3R5bGVzLFxyXG5cdFx0XHRcdFx0ZHVyYXRpb246IHRoaXMuZHVyYXRpb24sIC8vbXNcclxuXHRcdFx0XHRcdHRpbWluZ0Z1bmN0aW9uOiAnZWFzZScsXHJcblx0XHRcdFx0XHRuZWVkTGF5b3V0OiBmYWxzZSxcclxuXHRcdFx0XHRcdGRlbGF5OiAwIC8vbXNcclxuXHRcdFx0XHR9LCAoKSA9PiB7XHJcblx0XHRcdFx0XHRpZiAoIXR5cGUpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5pc1Nob3cgPSBmYWxzZVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0dGhpcy4kZW1pdCgnY2hhbmdlJywge1xyXG5cdFx0XHRcdFx0XHRkZXRhaWw6IHRoaXMuaXNTaG93XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0Ly8gI2VuZGlmXHJcblx0XHRcdFx0Ly8gI2lmbmRlZiBBUFAtTlZVRVxyXG5cdFx0XHRcdHRoaXMudHJhbnNmb3JtID0gJydcclxuXHRcdFx0XHRmb3IgKGxldCBpIGluIHN0eWxlcykge1xyXG5cdFx0XHRcdFx0aWYgKGkgPT09ICdvcGFjaXR5Jykge1xyXG5cdFx0XHRcdFx0XHR0aGlzLmFuaS5pbiA9IGBmYWRlLSR7dHlwZT8nb3V0JzonaW4nfWBcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHRoaXMudHJhbnNmb3JtICs9IGAke3N0eWxlc1tpXX0gYFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGlzLnRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRpZiAoIXR5cGUpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5pc1Nob3cgPSBmYWxzZVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0dGhpcy4kZW1pdCgnY2hhbmdlJywge1xyXG5cdFx0XHRcdFx0XHRkZXRhaWw6IHRoaXMuaXNTaG93XHJcblx0XHRcdFx0XHR9KVxyXG5cclxuXHRcdFx0XHR9LCB0aGlzLmR1cmF0aW9uKVxyXG5cdFx0XHRcdC8vICNlbmRpZlxyXG5cclxuXHRcdFx0fSxcclxuXHRcdFx0Z2V0VHJhbmZyb20odHlwZSkge1xyXG5cdFx0XHRcdGxldCBzdHlsZXMgPSB7XHJcblx0XHRcdFx0XHR0cmFuc2Zvcm06ICcnXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMubW9kZUNsYXNzLmZvckVhY2goKG1vZGUpID0+IHtcclxuXHRcdFx0XHRcdHN3aXRjaCAobW9kZSkge1xyXG5cdFx0XHRcdFx0XHRjYXNlICdmYWRlJzpcclxuXHRcdFx0XHRcdFx0XHRzdHlsZXMub3BhY2l0eSA9IHR5cGUgPyAxIDogMFxyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRjYXNlICdzbGlkZS10b3AnOlxyXG5cdFx0XHRcdFx0XHRcdHN0eWxlcy50cmFuc2Zvcm0gKz0gYHRyYW5zbGF0ZVkoJHt0eXBlPycwJzonLTEwMCUnfSkgYFxyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRjYXNlICdzbGlkZS1yaWdodCc6XHJcblx0XHRcdFx0XHRcdFx0c3R5bGVzLnRyYW5zZm9ybSArPSBgdHJhbnNsYXRlWCgke3R5cGU/JzAnOicxMDAlJ30pIGBcclxuXHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0Y2FzZSAnc2xpZGUtYm90dG9tJzpcclxuXHRcdFx0XHRcdFx0XHRzdHlsZXMudHJhbnNmb3JtICs9IGB0cmFuc2xhdGVZKCR7dHlwZT8nMCc6JzEwMCUnfSkgYFxyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRjYXNlICdzbGlkZS1sZWZ0JzpcclxuXHRcdFx0XHRcdFx0XHRzdHlsZXMudHJhbnNmb3JtICs9IGB0cmFuc2xhdGVYKCR7dHlwZT8nMCc6Jy0xMDAlJ30pIGBcclxuXHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0Y2FzZSAnem9vbS1pbic6XHJcblx0XHRcdFx0XHRcdFx0c3R5bGVzLnRyYW5zZm9ybSArPSBgc2NhbGUoJHt0eXBlPzE6MC44fSkgYFxyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRjYXNlICd6b29tLW91dCc6XHJcblx0XHRcdFx0XHRcdFx0c3R5bGVzLnRyYW5zZm9ybSArPSBgc2NhbGUoJHt0eXBlPzE6MS4yfSkgYFxyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0cmV0dXJuIHN0eWxlc1xyXG5cdFx0XHR9LFxyXG5cdFx0XHRfbW9kZUNsYXNzQXJyKHR5cGUpIHtcclxuXHRcdFx0XHRsZXQgbW9kZSA9IHRoaXMubW9kZUNsYXNzXHJcblx0XHRcdFx0aWYgKHR5cGVvZihtb2RlKSAhPT0gXCJzdHJpbmdcIikge1xyXG5cdFx0XHRcdFx0bGV0IG1vZGVzdHIgPSAnJ1xyXG5cdFx0XHRcdFx0bW9kZS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcblx0XHRcdFx0XHRcdG1vZGVzdHIgKz0gKGl0ZW0gKyAnLScgKyB0eXBlICsgJywnKVxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdHJldHVybiBtb2Rlc3RyLnN1YnN0cigwLCBtb2Rlc3RyLmxlbmd0aCAtIDEpXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHJldHVybiBtb2RlICsgJy0nICsgdHlwZVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0Ly8gZ2V0RWwoZWwpIHtcblx0XHRcdC8vIFx0Y29uc29sZS5sb2coZWwgfHwgZWwucmVmIHx8IG51bGwpO1xyXG5cdFx0XHQvLyBcdHJldHVybiBlbCB8fCBlbC5yZWYgfHwgbnVsbFxyXG5cdFx0XHQvLyB9LFxuXHRcdFx0dG9MaW5lKG5hbWUpIHtcblx0XHRcdFx0cmV0dXJuIG5hbWUucmVwbGFjZSgvKFtBLVpdKS9nLCBcIi0kMVwiKS50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcblx0LnVuaS10cmFuc2l0aW9uIHtcclxuXHRcdHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xyXG5cdFx0dHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcclxuXHRcdHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgb3BhY2l0eTtcclxuXHR9XHJcblxyXG5cdC5mYWRlLWluIHtcclxuXHRcdG9wYWNpdHk6IDA7XHJcblx0fVxyXG5cclxuXHQuZmFkZS1hY3RpdmUge1xyXG5cdFx0b3BhY2l0eTogMTtcclxuXHR9XHJcblxyXG5cdC5zbGlkZS10b3AtaW4ge1xyXG5cdFx0LyogdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCBvcGFjaXR5OyAqL1xyXG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcclxuXHR9XHJcblxyXG5cdC5zbGlkZS10b3AtYWN0aXZlIHtcclxuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuXHRcdC8qIG9wYWNpdHk6IDE7ICovXHJcblx0fVxyXG5cclxuXHQuc2xpZGUtcmlnaHQtaW4ge1xyXG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xyXG5cdH1cclxuXHJcblx0LnNsaWRlLXJpZ2h0LWFjdGl2ZSB7XHJcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcblx0fVxyXG5cclxuXHQuc2xpZGUtYm90dG9tLWluIHtcclxuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTtcclxuXHR9XHJcblxyXG5cdC5zbGlkZS1ib3R0b20tYWN0aXZlIHtcclxuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuXHR9XHJcblxyXG5cdC5zbGlkZS1sZWZ0LWluIHtcclxuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcblx0fVxyXG5cclxuXHQuc2xpZGUtbGVmdC1hY3RpdmUge1xyXG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG5cdFx0b3BhY2l0eTogMTtcclxuXHR9XHJcblxyXG5cdC56b29tLWluLWluIHtcclxuXHRcdHRyYW5zZm9ybTogc2NhbGUoMC44KTtcclxuXHR9XHJcblxyXG5cdC56b29tLW91dC1hY3RpdmUge1xyXG5cdFx0dHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuXHR9XHJcblxyXG5cdC56b29tLW91dC1pbiB7XHJcblx0XHR0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcblx0fVxyXG48L3N0eWxlPlxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZU5hdGl2ZVBsdWdpbihuYW1lKSB7XHJcbiAgcmV0dXJuIHdlZXgucmVxdWlyZU1vZHVsZShuYW1lKVxyXG59XHJcbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjMuMy4yMDE5MDkyMy5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvd2VicGFjay11bmktbnZ1ZS1sb2FkZXIvbGliL3N0eWxlLmpzIS4uLy4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi4zLjMuMjAxOTA5MjMuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTEhLi4vLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjMuMy4yMDE5MDkyMy5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMiEuLi8uLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuMy4zLjIwMTkwOTIzLmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0zIS4uLy4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi4zLjMuMjAxOTA5MjMuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktdHJhbnNpdGlvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuMy4zLjIwMTkwOTIzLmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLWhidWlsZGVyeC9wYWNrYWdlcy93ZWJwYWNrLXVuaS1udnVlLWxvYWRlci9saWIvc3R5bGUuanMhLi4vLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjMuMy4yMDE5MDkyMy5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMSEuLi8uLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuMy4zLjIwMTkwOTIzLmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0yIS4uLy4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi4zLjMuMjAxOTA5MjMuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTMhLi4vLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjMuMy4yMDE5MDkyMy5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VuaS10cmFuc2l0aW9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiQFRSQU5TSVRJT05cIjoge1xuICAgIFwidW5pLXRyYW5zaXRpb25cIjoge1xuICAgICAgXCJ0aW1pbmdGdW5jdGlvblwiOiBcImVhc2VcIixcbiAgICAgIFwiZHVyYXRpb25cIjogMzAwLFxuICAgICAgXCJwcm9wZXJ0eVwiOiBcInRyYW5zZm9ybSxvcGFjaXR5XCJcbiAgICB9XG4gIH0sXG4gIFwidW5pLXRyYW5zaXRpb25cIjoge1xuICAgIFwidHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uXCI6IFwiZWFzZVwiLFxuICAgIFwidHJhbnNpdGlvbkR1cmF0aW9uXCI6IDMwMCxcbiAgICBcInRyYW5zaXRpb25Qcm9wZXJ0eVwiOiBcInRyYW5zZm9ybSxvcGFjaXR5XCJcbiAgfSxcbiAgXCJmYWRlLWluXCI6IHtcbiAgICBcIm9wYWNpdHlcIjogMFxuICB9LFxuICBcImZhZGUtYWN0aXZlXCI6IHtcbiAgICBcIm9wYWNpdHlcIjogMVxuICB9LFxuICBcInNsaWRlLXRvcC1pblwiOiB7XG4gICAgXCJ0cmFuc2Zvcm1cIjogXCJ0cmFuc2xhdGVZKC0xMDAlKVwiXG4gIH0sXG4gIFwic2xpZGUtdG9wLWFjdGl2ZVwiOiB7XG4gICAgXCJ0cmFuc2Zvcm1cIjogXCJ0cmFuc2xhdGVZKDApXCJcbiAgfSxcbiAgXCJzbGlkZS1yaWdodC1pblwiOiB7XG4gICAgXCJ0cmFuc2Zvcm1cIjogXCJ0cmFuc2xhdGVYKDEwMCUpXCJcbiAgfSxcbiAgXCJzbGlkZS1yaWdodC1hY3RpdmVcIjoge1xuICAgIFwidHJhbnNmb3JtXCI6IFwidHJhbnNsYXRlWCgwKVwiXG4gIH0sXG4gIFwic2xpZGUtYm90dG9tLWluXCI6IHtcbiAgICBcInRyYW5zZm9ybVwiOiBcInRyYW5zbGF0ZVkoMTAwJSlcIlxuICB9LFxuICBcInNsaWRlLWJvdHRvbS1hY3RpdmVcIjoge1xuICAgIFwidHJhbnNmb3JtXCI6IFwidHJhbnNsYXRlWSgwKVwiXG4gIH0sXG4gIFwic2xpZGUtbGVmdC1pblwiOiB7XG4gICAgXCJ0cmFuc2Zvcm1cIjogXCJ0cmFuc2xhdGVYKC0xMDAlKVwiXG4gIH0sXG4gIFwic2xpZGUtbGVmdC1hY3RpdmVcIjoge1xuICAgIFwidHJhbnNmb3JtXCI6IFwidHJhbnNsYXRlWCgwKVwiLFxuICAgIFwib3BhY2l0eVwiOiAxXG4gIH0sXG4gIFwiem9vbS1pbi1pblwiOiB7XG4gICAgXCJ0cmFuc2Zvcm1cIjogXCJzY2FsZSgwLjgpXCJcbiAgfSxcbiAgXCJ6b29tLW91dC1hY3RpdmVcIjoge1xuICAgIFwidHJhbnNmb3JtXCI6IFwic2NhbGUoMSlcIlxuICB9LFxuICBcInpvb20tb3V0LWluXCI6IHtcbiAgICBcInRyYW5zZm9ybVwiOiBcInNjYWxlKDEuMilcIlxuICB9XG59IiwiLyogZ2xvYmFscyBfX1ZVRV9TU1JfQ09OVEVYVF9fICovXG5cbi8vIElNUE9SVEFOVDogRG8gTk9UIHVzZSBFUzIwMTUgZmVhdHVyZXMgaW4gdGhpcyBmaWxlIChleGNlcHQgZm9yIG1vZHVsZXMpLlxuLy8gVGhpcyBtb2R1bGUgaXMgYSBydW50aW1lIHV0aWxpdHkgZm9yIGNsZWFuZXIgY29tcG9uZW50IG1vZHVsZSBvdXRwdXQgYW5kIHdpbGxcbi8vIGJlIGluY2x1ZGVkIGluIHRoZSBmaW5hbCB3ZWJwYWNrIHVzZXIgYnVuZGxlLlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBub3JtYWxpemVDb21wb25lbnQgKFxuICBzY3JpcHRFeHBvcnRzLFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZnVuY3Rpb25hbFRlbXBsYXRlLFxuICBpbmplY3RTdHlsZXMsXG4gIHNjb3BlSWQsXG4gIG1vZHVsZUlkZW50aWZpZXIsIC8qIHNlcnZlciBvbmx5ICovXG4gIHNoYWRvd01vZGUsIC8qIHZ1ZS1jbGkgb25seSAqL1xuICBjb21wb25lbnRzLCAvLyBmaXhlZCBieSB4eHh4eHggYXV0byBjb21wb25lbnRzXG4gIHJlbmRlcmpzIC8vIGZpeGVkIGJ5IHh4eHh4eCByZW5kZXJqc1xuKSB7XG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zXG4gICAgOiBzY3JpcHRFeHBvcnRzXG5cbiAgLy8gZml4ZWQgYnkgeHh4eHh4IGF1dG8gY29tcG9uZW50c1xuICBpZiAoY29tcG9uZW50cykge1xuICAgIGlmICghb3B0aW9ucy5jb21wb25lbnRzKSB7XG4gICAgICBvcHRpb25zLmNvbXBvbmVudHMgPSB7fVxuICAgIH1cbiAgICB2YXIgaGFzT3duID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eVxuICAgIGZvciAodmFyIG5hbWUgaW4gY29tcG9uZW50cykge1xuICAgICAgaWYgKGhhc093bi5jYWxsKGNvbXBvbmVudHMsIG5hbWUpICYmICFoYXNPd24uY2FsbChvcHRpb25zLmNvbXBvbmVudHMsIG5hbWUpKSB7XG4gICAgICAgIG9wdGlvbnMuY29tcG9uZW50c1tuYW1lXSA9IGNvbXBvbmVudHNbbmFtZV1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLy8gZml4ZWQgYnkgeHh4eHh4IHJlbmRlcmpzXG4gIGlmIChyZW5kZXJqcykge1xuICAgIChyZW5kZXJqcy5iZWZvcmVDcmVhdGUgfHwgKHJlbmRlcmpzLmJlZm9yZUNyZWF0ZSA9IFtdKSkudW5zaGlmdChmdW5jdGlvbigpIHtcbiAgICAgIHRoaXNbcmVuZGVyanMuX19tb2R1bGVdID0gdGhpc1xuICAgIH0pO1xuICAgIChvcHRpb25zLm1peGlucyB8fCAob3B0aW9ucy5taXhpbnMgPSBbXSkpLnB1c2gocmVuZGVyanMpXG4gIH1cblxuICAvLyByZW5kZXIgZnVuY3Rpb25zXG4gIGlmIChyZW5kZXIpIHtcbiAgICBvcHRpb25zLnJlbmRlciA9IHJlbmRlclxuICAgIG9wdGlvbnMuc3RhdGljUmVuZGVyRm5zID0gc3RhdGljUmVuZGVyRm5zXG4gICAgb3B0aW9ucy5fY29tcGlsZWQgPSB0cnVlXG4gIH1cblxuICAvLyBmdW5jdGlvbmFsIHRlbXBsYXRlXG4gIGlmIChmdW5jdGlvbmFsVGVtcGxhdGUpIHtcbiAgICBvcHRpb25zLmZ1bmN0aW9uYWwgPSB0cnVlXG4gIH1cblxuICAvLyBzY29wZWRJZFxuICBpZiAoc2NvcGVJZCkge1xuICAgIG9wdGlvbnMuX3Njb3BlSWQgPSAnZGF0YS12LScgKyBzY29wZUlkXG4gIH1cblxuICB2YXIgaG9va1xuICBpZiAobW9kdWxlSWRlbnRpZmllcikgeyAvLyBzZXJ2ZXIgYnVpbGRcbiAgICBob29rID0gZnVuY3Rpb24gKGNvbnRleHQpIHtcbiAgICAgIC8vIDIuMyBpbmplY3Rpb25cbiAgICAgIGNvbnRleHQgPVxuICAgICAgICBjb250ZXh0IHx8IC8vIGNhY2hlZCBjYWxsXG4gICAgICAgICh0aGlzLiR2bm9kZSAmJiB0aGlzLiR2bm9kZS5zc3JDb250ZXh0KSB8fCAvLyBzdGF0ZWZ1bFxuICAgICAgICAodGhpcy5wYXJlbnQgJiYgdGhpcy5wYXJlbnQuJHZub2RlICYmIHRoaXMucGFyZW50LiR2bm9kZS5zc3JDb250ZXh0KSAvLyBmdW5jdGlvbmFsXG4gICAgICAvLyAyLjIgd2l0aCBydW5Jbk5ld0NvbnRleHQ6IHRydWVcbiAgICAgIGlmICghY29udGV4dCAmJiB0eXBlb2YgX19WVUVfU1NSX0NPTlRFWFRfXyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29udGV4dCA9IF9fVlVFX1NTUl9DT05URVhUX19cbiAgICAgIH1cbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgc3R5bGVzXG4gICAgICBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgICAgIGluamVjdFN0eWxlcy5jYWxsKHRoaXMsIGNvbnRleHQpXG4gICAgICB9XG4gICAgICAvLyByZWdpc3RlciBjb21wb25lbnQgbW9kdWxlIGlkZW50aWZpZXIgZm9yIGFzeW5jIGNodW5rIGluZmVycmVuY2VcbiAgICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzKSB7XG4gICAgICAgIGNvbnRleHQuX3JlZ2lzdGVyZWRDb21wb25lbnRzLmFkZChtb2R1bGVJZGVudGlmaWVyKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyB1c2VkIGJ5IHNzciBpbiBjYXNlIGNvbXBvbmVudCBpcyBjYWNoZWQgYW5kIGJlZm9yZUNyZWF0ZVxuICAgIC8vIG5ldmVyIGdldHMgY2FsbGVkXG4gICAgb3B0aW9ucy5fc3NyUmVnaXN0ZXIgPSBob29rXG4gIH0gZWxzZSBpZiAoaW5qZWN0U3R5bGVzKSB7XG4gICAgaG9vayA9IHNoYWRvd01vZGVcbiAgICAgID8gZnVuY3Rpb24gKCkgeyBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCB0aGlzLiRyb290LiRvcHRpb25zLnNoYWRvd1Jvb3QpIH1cbiAgICAgIDogaW5qZWN0U3R5bGVzXG4gIH1cblxuICBpZiAoaG9vaykge1xuICAgIGlmIChvcHRpb25zLmZ1bmN0aW9uYWwpIHtcbiAgICAgIC8vIGZvciB0ZW1wbGF0ZS1vbmx5IGhvdC1yZWxvYWQgYmVjYXVzZSBpbiB0aGF0IGNhc2UgdGhlIHJlbmRlciBmbiBkb2Vzbid0XG4gICAgICAvLyBnbyB0aHJvdWdoIHRoZSBub3JtYWxpemVyXG4gICAgICBvcHRpb25zLl9pbmplY3RTdHlsZXMgPSBob29rXG4gICAgICAvLyByZWdpc3RlciBmb3IgZnVuY3Rpb2FsIGNvbXBvbmVudCBpbiB2dWUgZmlsZVxuICAgICAgdmFyIG9yaWdpbmFsUmVuZGVyID0gb3B0aW9ucy5yZW5kZXJcbiAgICAgIG9wdGlvbnMucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyV2l0aFN0eWxlSW5qZWN0aW9uIChoLCBjb250ZXh0KSB7XG4gICAgICAgIGhvb2suY2FsbChjb250ZXh0KVxuICAgICAgICByZXR1cm4gb3JpZ2luYWxSZW5kZXIoaCwgY29udGV4dClcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaW5qZWN0IGNvbXBvbmVudCByZWdpc3RyYXRpb24gYXMgYmVmb3JlQ3JlYXRlIGhvb2tcbiAgICAgIHZhciBleGlzdGluZyA9IG9wdGlvbnMuYmVmb3JlQ3JlYXRlXG4gICAgICBvcHRpb25zLmJlZm9yZUNyZWF0ZSA9IGV4aXN0aW5nXG4gICAgICAgID8gW10uY29uY2F0KGV4aXN0aW5nLCBob29rKVxuICAgICAgICA6IFtob29rXVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgZXhwb3J0czogc2NyaXB0RXhwb3J0cyxcbiAgICBvcHRpb25zOiBvcHRpb25zXG4gIH1cbn1cbiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjMuMy4yMDE5MDkyMy5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi4zLjMuMjAxOTA5MjMuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNC0xIS4uLy4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi4zLjMuMjAxOTA5MjMuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktcG9wdXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi4zLjMuMjAxOTA5MjMuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuMy4zLjIwMTkwOTIzLmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTQtMSEuLi8uLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuMy4zLjIwMTkwOTIzLmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW5pLXBvcHVwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsIjx0ZW1wbGF0ZT5cclxuXHQ8dmlldyB2LWlmPVwic2hvd1BvcHVwXCIgY2xhc3M9XCJ1bmktcG9wdXBcIiA6Y2xhc3M9XCJbcG9wdXBzdHlsZV1cIiBAdG91Y2htb3ZlLnN0b3AucHJldmVudD1cImNsZWFyXCI+XHJcblx0XHQ8dW5pLXRyYW5zaXRpb24gdi1pZj1cIm1hc2tTaG93XCIgOm1vZGUtY2xhc3M9XCJbJ2ZhZGUnXVwiIDpzdHlsZXM9XCJtYXNrQ2xhc3NcIiA6ZHVyYXRpb249XCJkdXJhdGlvblwiIDpzaG93PVwic2hvd1RyYW5zXCJcclxuXHRcdCBAY2xpY2s9XCJvblRhcFwiIC8+XHJcblx0XHQ8dW5pLXRyYW5zaXRpb24gOm1vZGUtY2xhc3M9XCJhbmlcIiA6c3R5bGVzPVwidHJhbnNDbGFzc1wiIDpkdXJhdGlvbj1cImR1cmF0aW9uXCIgOnNob3c9XCJzaG93VHJhbnNcIiBAY2xpY2s9XCJvblRhcFwiPlxyXG5cdFx0XHQ8dmlldyBjbGFzcz1cInVuaS1wb3B1cF9fd3JhcHBlci1ib3hcIiBAY2xpY2suc3RvcD1cImNsZWFyXCI+XHJcblx0XHRcdFx0PHNsb3QgLz5cclxuXHRcdFx0PC92aWV3PlxyXG5cdFx0PC91bmktdHJhbnNpdGlvbj5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGltcG9ydCB1bmlUcmFuc2l0aW9uIGZyb20gJy4uL3VuaS10cmFuc2l0aW9uL3VuaS10cmFuc2l0aW9uLnZ1ZSdcclxuXHRpbXBvcnQgcG9wdXAgZnJvbSAnLi9wb3B1cC5qcydcclxuXHQvKipcclxuXHQgKiBQb3BVcCDlvLnlh7rlsYJcclxuXHQgKiBAZGVzY3JpcHRpb24g5by55Ye65bGC57uE5Lu277yM5Li65LqG6Kej5Yaz6YGu572p5by55bGC55qE6Zeu6aKYXHJcblx0ICogQHR1dG9yaWFsIGh0dHBzOi8vZXh0LmRjbG91ZC5uZXQuY24vcGx1Z2luP2lkPTMyOVxyXG5cdCAqIEBwcm9wZXJ0eSB7U3RyaW5nfSB0eXBlID0gW3RvcHxjZW50ZXJ8Ym90dG9tXSDlvLnlh7rmlrnlvI9cclxuXHQgKiBcdEB2YWx1ZSB0b3Ag6aG26YOo5by55Ye6XHJcblx0ICogXHRAdmFsdWUgY2VudGVyIOS4remXtOW8ueWHulxyXG5cdCAqIFx0QHZhbHVlIGJvdHRvbSDlupXpg6jlvLnlh7pcclxuXHQgKiBcdEB2YWx1ZSBtZXNzYWdlIOa2iOaBr+aPkOekulxyXG5cdCAqIFx0QHZhbHVlIGRpYWxvZyDlr7nor53moYZcclxuXHQgKiBcdEB2YWx1ZSBzaGFyZSDlupXpg6jliIbkuqvnpLrkvotcclxuXHQgKiBAcHJvcGVydHkge0Jvb2xlYW59IGFuaW1hdGlvbiA9IFt0dXJlfGZhbHNlXSDmmK/lkKblvIDlkK/liqjnlLtcclxuXHQgKiBAcHJvcGVydHkge0Jvb2xlYW59IG1hc2tDbGljayA9IFt0dXJlfGZhbHNlXSDokpnniYjngrnlh7vmmK/lkKblhbPpl63lvLnnqpdcclxuXHQgKiBAZXZlbnQge0Z1bmN0aW9ufSBjaGFuZ2Ug5omT5byA5YWz6Zet5by556qX6Kem5Y+R77yMZT17c2hvdzogZmFsc2V9XHJcblx0ICovXHJcblxyXG5cdGV4cG9ydCBkZWZhdWx0IHtcclxuXHRcdG5hbWU6ICdVbmlQb3B1cCcsXHJcblx0XHRjb21wb25lbnRzOiB7XHJcblx0XHRcdHVuaVRyYW5zaXRpb25cclxuXHRcdH0sXHJcblx0XHRwcm9wczoge1xyXG5cdFx0XHQvLyDlvIDlkK/liqjnlLtcclxuXHRcdFx0YW5pbWF0aW9uOiB7XHJcblx0XHRcdFx0dHlwZTogQm9vbGVhbixcclxuXHRcdFx0XHRkZWZhdWx0OiB0cnVlXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIOW8ueWHuuWxguexu+Wei++8jOWPr+mAieWAvO+8jHRvcDog6aG26YOo5by55Ye65bGC77ybYm90dG9t77ya5bqV6YOo5by55Ye65bGC77ybY2VudGVy77ya5YWo5bGP5by55Ye65bGCXHJcblx0XHRcdC8vIG1lc3NhZ2U6IOa2iOaBr+aPkOekuiA7IGRpYWxvZyA6IOWvueivneahhlxyXG5cdFx0XHR0eXBlOiB7XHJcblx0XHRcdFx0dHlwZTogU3RyaW5nLFxyXG5cdFx0XHRcdGRlZmF1bHQ6ICdjZW50ZXInXHJcblx0XHRcdH0sXHJcblx0XHRcdC8vIG1hc2tDbGlja1xyXG5cdFx0XHRtYXNrQ2xpY2s6IHtcclxuXHRcdFx0XHR0eXBlOiBCb29sZWFuLFxyXG5cdFx0XHRcdGRlZmF1bHQ6IHRydWVcclxuXHRcdFx0fVxyXG5cdFx0fSxcblx0XHRwcm92aWRlKCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0cG9wdXA6IHRoaXNcblx0XHRcdH1cblx0XHR9LFxuXHRcdG1peGluczogW3BvcHVwXSxcblx0XHR3YXRjaDoge1xuXHRcdFx0LyoqXG5cdFx0XHQgKiDnm5HlkKx0eXBl57G75Z6LXG5cdFx0XHQgKi9cblx0XHRcdHR5cGU6IHtcblx0XHRcdFx0aGFuZGxlcjogZnVuY3Rpb24obmV3VmFsKSB7XG5cdFx0XHRcdFx0dGhpc1t0aGlzLmNvbmZpZ1tuZXdWYWxdXSgpXG5cdFx0XHRcdH0sXG5cdFx0XHRcdGltbWVkaWF0ZTogdHJ1ZVxuXHRcdFx0fSxcblx0XHRcdC8qKlxuXHRcdFx0ICog55uR5ZCs6YGu572p5piv5ZCm5Y+v54K55Ye7XG5cdFx0XHQgKiBAcGFyYW0ge09iamVjdH0gdmFsXG5cdFx0XHQgKi9cblx0XHRcdG1hc2tDbGljayh2YWwpIHtcblx0XHRcdFx0dGhpcy5ta2NsaWNrID0gdmFsXG5cdFx0XHR9XG5cdFx0fSxcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0ZHVyYXRpb246IDMwMCxcclxuXHRcdFx0XHRhbmk6IFtdLFxyXG5cdFx0XHRcdHNob3dQb3B1cDogZmFsc2UsXHJcblx0XHRcdFx0c2hvd1RyYW5zOiBmYWxzZSxcclxuXHRcdFx0XHRtYXNrQ2xhc3M6IHtcclxuXHRcdFx0XHRcdCdwb3NpdGlvbic6ICdmaXhlZCcsXHJcblx0XHRcdFx0XHQnYm90dG9tJzogMCxcclxuXHRcdFx0XHRcdCd0b3AnOiAwLFxyXG5cdFx0XHRcdFx0J2xlZnQnOiAwLFxyXG5cdFx0XHRcdFx0J3JpZ2h0JzogMCxcclxuXHRcdFx0XHRcdCdiYWNrZ3JvdW5kQ29sb3InOiAncmdiYSgwLCAwLCAwLCAwLjQpJ1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0dHJhbnNDbGFzczoge1xyXG5cdFx0XHRcdFx0J3Bvc2l0aW9uJzogJ2ZpeGVkJyxcclxuXHRcdFx0XHRcdCdsZWZ0JzogMCxcclxuXHRcdFx0XHRcdCdyaWdodCc6IDAsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRtYXNrU2hvdzogdHJ1ZSxcclxuXHRcdFx0XHRta2NsaWNrOiB0cnVlLFxuXHRcdFx0XHRwb3B1cHN0eWxlOid0b3AnXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRjcmVhdGVkKCkge1xyXG5cdFx0XHRpZiAodGhpcy5hbmltYXRpb24pIHtcclxuXHRcdFx0XHR0aGlzLmR1cmF0aW9uID0gMzAwXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGhpcy5kdXJhdGlvbiA9IDBcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0Y2xlYXIoZSkge1xyXG5cdFx0XHRcdC8vIFRPRE8gbnZ1ZSDlj5bmtojlhpLms6FcclxuXHRcdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpXHJcblx0XHRcdH0sXHJcblx0XHRcdG9wZW4oKSB7XHJcblx0XHRcdFx0dGhpcy5zaG93UG9wdXAgPSB0cnVlXHJcblx0XHRcdFx0dGhpcy4kbmV4dFRpY2soKCkgPT4ge1xyXG5cdFx0XHRcdFx0bmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcblx0XHRcdFx0XHRcdGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKVxyXG5cdFx0XHRcdFx0XHR0aGlzLnRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5zaG93VHJhbnMgPSB0cnVlXG5cdFx0XHRcdFx0XHRcdC8vIGZpeGVkIGJ5IG1laGFvdGlhbiDlhbzlrrkgYXBwIOerr1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuJG5leHRUaWNrKCgpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRyZXNvbHZlKCk7XHJcblx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0fSwgNTApO1xyXG5cdFx0XHRcdFx0fSkudGhlbihyZXMgPT4ge1xuXHRcdFx0XHRcdFx0Ly8g6Ieq5a6a5LmJ5omT5byA5LqL5Lu2XG5cdFx0XHRcdFx0XHRjbGVhclRpbWVvdXQodGhpcy5tc2d0aW1lcilcblx0XHRcdFx0XHRcdHRoaXMubXNndGltZXIgPSBzZXRUaW1lb3V0KCgpPT57XG5cdFx0XHRcdFx0XHRcdHRoaXMuY3VzdG9tT3BlbiAmJiB0aGlzLmN1c3RvbU9wZW4oKVxuXHRcdFx0XHRcdFx0fSwxMDApXHJcblx0XHRcdFx0XHRcdHRoaXMuJGVtaXQoJ2NoYW5nZScsIHtcclxuXHRcdFx0XHRcdFx0XHRzaG93OiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRcdHR5cGU6IHRoaXMudHlwZVxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRjbG9zZSh0eXBlKSB7XHJcblx0XHRcdFx0dGhpcy5zaG93VHJhbnMgPSBmYWxzZVxyXG5cdFx0XHRcdHRoaXMuJG5leHRUaWNrKCgpID0+IHtcclxuXHRcdFx0XHRcdHRoaXMuJGVtaXQoJ2NoYW5nZScsIHtcclxuXHRcdFx0XHRcdFx0c2hvdzogZmFsc2UsXHJcblx0XHRcdFx0XHRcdHR5cGU6IHRoaXMudHlwZVxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKVxyXG5cdFx0XHRcdFx0Ly8g6Ieq5a6a5LmJ5YWz6Zet5LqL5Lu2XHJcblx0XHRcdFx0XHR0aGlzLmN1c3RvbU9wZW4gJiYgdGhpcy5jdXN0b21DbG9zZSgpXHJcblx0XHRcdFx0XHR0aGlzLnRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdHRoaXMuc2hvd1BvcHVwID0gZmFsc2VcclxuXHRcdFx0XHRcdH0sIDMwMClcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRvblRhcCgpIHtcclxuXHRcdFx0XHRpZiAoIXRoaXMubWtjbGljaykgcmV0dXJuXHJcblx0XHRcdFx0dGhpcy5jbG9zZSgpXHJcblx0XHRcdH0sXG5cdFx0XHQvKipcblx0XHRcdCAqIOmhtumDqOW8ueWHuuagt+W8j+WkhOeQhlxuXHRcdFx0ICovXG5cdFx0XHR0b3AoKSB7XG5cdFx0XHRcdHRoaXMucG9wdXBzdHlsZSA9ICd0b3AnXG5cdFx0XHRcdHRoaXMuYW5pID0gWydzbGlkZS10b3AnXVxuXHRcdFx0XHR0aGlzLnRyYW5zQ2xhc3MgPSB7XG5cdFx0XHRcdFx0J3Bvc2l0aW9uJzogJ2ZpeGVkJyxcblx0XHRcdFx0XHQnbGVmdCc6IDAsXG5cdFx0XHRcdFx0J3JpZ2h0JzogMCxcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdC8qKlxuXHRcdFx0ICog5bqV6YOo5by55Ye65qC35byP5aSE55CGXG5cdFx0XHQgKi9cblx0XHRcdGJvdHRvbSgpIHtcblx0XHRcdFx0dGhpcy5wb3B1cHN0eWxlID0gJ2JvdHRvbSdcblx0XHRcdFx0dGhpcy5hbmkgPSBbJ3NsaWRlLWJvdHRvbSddXG5cdFx0XHRcdHRoaXMudHJhbnNDbGFzcyA9IHtcblx0XHRcdFx0XHQncG9zaXRpb24nOiAnZml4ZWQnLFxuXHRcdFx0XHRcdCdsZWZ0JzogMCxcblx0XHRcdFx0XHQncmlnaHQnOiAwLFxuXHRcdFx0XHRcdCdib3R0b20nOiAwXG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHQvKipcblx0XHRcdCAqIOS4remXtOW8ueWHuuagt+W8j+WkhOeQhlxuXHRcdFx0ICovXG5cdFx0XHRjZW50ZXIoKSB7XG5cdFx0XHRcdHRoaXMucG9wdXBzdHlsZSA9ICdjZW50ZXInXG5cdFx0XHRcdHRoaXMuYW5pID0gWyd6b29tLW91dCcsICdmYWRlJ11cblx0XHRcdFx0dGhpcy50cmFuc0NsYXNzID0ge1xuXHRcdFx0XHRcdCdwb3NpdGlvbic6ICdmaXhlZCcsXG5cdFx0XHRcdFx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xuXHRcdFx0XHRcdCdkaXNwbGF5JzogJ2ZsZXgnLFxuXHRcdFx0XHRcdCdmbGV4RGlyZWN0aW9uJzogJ2NvbHVtbicsXG5cdFx0XHRcdFx0LyogI2VuZGlmICovXG5cdFx0XHRcdFx0J2JvdHRvbSc6IDAsXG5cdFx0XHRcdFx0J2xlZnQnOiAwLFxuXHRcdFx0XHRcdCdyaWdodCc6IDAsXG5cdFx0XHRcdFx0J3RvcCc6IDAsXG5cdFx0XHRcdFx0J2p1c3RpZnlDb250ZW50JzogJ2NlbnRlcicsXG5cdFx0XHRcdFx0J2FsaWduSXRlbXMnOiAnY2VudGVyJ1xuXHRcdFx0XHR9XG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG48L3NjcmlwdD5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG5cdC51bmktcG9wdXAge1xyXG5cdFx0cG9zaXRpb246IGZpeGVkO1xyXG5cdFx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xyXG5cdFx0ei1pbmRleDogOTk7XHJcblx0XHQvKiAjZW5kaWYgKi9cblx0fVxyXG5cclxuXHQudW5pLXBvcHVwX19tYXNrIHtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHRvcDogMDtcclxuXHRcdGJvdHRvbTogMDtcclxuXHRcdGxlZnQ6IDA7XHJcblx0XHRyaWdodDogMDtcclxuXHRcdGJhY2tncm91bmQtY29sb3I6ICR1bmktYmctY29sb3ItbWFzaztcclxuXHRcdG9wYWNpdHk6IDA7XHJcblx0fVxyXG5cclxuXHQubWFzay1hbmkge1xyXG5cdFx0dHJhbnNpdGlvbi1wcm9wZXJ0eTogb3BhY2l0eTtcclxuXHRcdHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XHJcblx0fVxyXG5cclxuXHQudW5pLXRvcC1tYXNrIHtcclxuXHRcdG9wYWNpdHk6IDE7XHJcblx0fVxyXG5cclxuXHQudW5pLWJvdHRvbS1tYXNrIHtcclxuXHRcdG9wYWNpdHk6IDE7XHJcblx0fVxyXG5cclxuXHQudW5pLWNlbnRlci1tYXNrIHtcclxuXHRcdG9wYWNpdHk6IDE7XHJcblx0fVxyXG5cclxuXHQudW5pLXBvcHVwX193cmFwcGVyIHtcclxuXHRcdC8qICNpZm5kZWYgQVBQLU5WVUUgKi9cclxuXHRcdGRpc3BsYXk6IGJsb2NrO1xyXG5cdFx0LyogI2VuZGlmICovXHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0fVxyXG5cclxuXHQudG9wIHtcclxuXHRcdC8qICNpZmRlZiBINSAqL1xuXHRcdHRvcDogdmFyKC0td2luZG93LXRvcCk7XG5cdFx0LyogI2VuZGlmICovXG5cdFx0LyogI2lmbmRlZiBINSAqL1xuXHRcdHRvcDogMDtcblx0XHQvKiAjZW5kaWYgKi9cclxuXHR9XHJcblxyXG5cdC5ib3R0b20ge1xyXG5cdFx0Ym90dG9tOiAwO1xyXG5cdH1cclxuXHQudW5pLXBvcHVwX193cmFwcGVyLWJveCB7XHJcblx0XHQvKiAjaWZuZGVmIEFQUC1OVlVFICovXHJcblx0XHRkaXNwbGF5OiBibG9jaztcclxuXHRcdC8qICNlbmRpZiAqL1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdC8qIGlwaG9uZXgg562J5a6J5YWo5Yy66K6+572u77yM5bqV6YOo5a6J5YWo5Yy66YCC6YWNICovXG5cdFx0LyogI2lmbmRlZiBBUFAtTlZVRSAqL1xuXHRcdHBhZGRpbmctYm90dG9tOiBjb25zdGFudChzYWZlLWFyZWEtaW5zZXQtYm90dG9tKTtcblx0XHRwYWRkaW5nLWJvdHRvbTogZW52KHNhZmUtYXJlYS1pbnNldC1ib3R0b20pO1xuXHRcdC8qICNlbmRpZiAqL1xuXHR9XHJcblxyXG5cdC5jb250ZW50LWFuaSB7XHJcblx0XHQvLyB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcztcclxuXHRcdHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgb3BhY2l0eTtcclxuXHRcdHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XHJcblx0fVxyXG5cclxuXHJcblx0LnVuaS10b3AtY29udGVudCB7XHJcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcblx0fVxyXG5cclxuXHQudW5pLWJvdHRvbS1jb250ZW50IHtcclxuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuXHR9XHJcblxyXG5cdC51bmktY2VudGVyLWNvbnRlbnQge1xyXG5cdFx0dHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuXHRcdG9wYWNpdHk6IDE7XHJcblx0fVxyXG48L3N0eWxlPlxuIiwiaW1wb3J0IG1lc3NhZ2UgZnJvbSAnLi9tZXNzYWdlLmpzJztcclxuLy8g5a6a5LmJIHR5cGUg57G75Z6LOuW8ueWHuuexu+Wei++8mnRvcC9ib3R0b20vY2VudGVyXHJcbmNvbnN0IGNvbmZpZyA9IHtcclxuXHQvLyDpobbpg6jlvLnlh7pcclxuXHR0b3A6J3RvcCcsXHJcblx0Ly8g5bqV6YOo5by55Ye6XHJcblx0Ym90dG9tOidib3R0b20nLFxyXG5cdC8vIOWxheS4reW8ueWHulxyXG5cdGNlbnRlcjonY2VudGVyJyxcclxuXHQvLyDmtojmga/mj5DnpLpcclxuXHRtZXNzYWdlOid0b3AnLFxyXG5cdC8vIOWvueivneahhlxyXG5cdGRpYWxvZzonY2VudGVyJyxcclxuXHQvLyDliIbkuqtcclxuXHRzaGFyZTonYm90dG9tJyxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdGRhdGEoKXtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdGNvbmZpZzpjb25maWdcclxuXHRcdH1cclxuXHR9LFxyXG5cdG1peGluczogW21lc3NhZ2VdLFxyXG59XHJcbiIsImV4cG9ydCBkZWZhdWx0IHtcclxuXHRjcmVhdGVkKCkge1xyXG5cdFx0aWYgKHRoaXMudHlwZSA9PT0gJ21lc3NhZ2UnKSB7XHJcblx0XHRcdC8vIOiOt+WPluiHque7hOS7tuWvueixoVxyXG5cdFx0XHR0aGlzLm1hc2tTaG93ID0gZmFsc2VcclxuXHRcdFx0dGhpcy5jaGlsZHJlbiA9IG51bGxcclxuXHRcdH1cclxuXHR9LFxyXG5cdGNyZWF0ZWQoKSB7XHJcblx0XHRpZiAodGhpcy50eXBlID09PSAnbWVzc2FnZScpIHtcclxuXHRcdFx0Ly8g5LiN5pi+56S66YGu572pXHJcblx0XHRcdHRoaXMubWFza1Nob3cgPSBmYWxzZSBcclxuXHRcdFx0Ly8g6I635Y+W5a2Q57uE5Lu25a+56LGhXHJcblx0XHRcdHRoaXMuY2hpbGRyZW5Nc2cgPSBudWxsXHJcblx0XHR9XHJcblx0fSxcclxuXHRtZXRob2RzOiB7XHJcblx0XHRjdXN0b21PcGVuKCkge1xyXG5cdFx0XHRpZiAodGhpcy5jaGlsZHJlbk1zZykge1xyXG5cdFx0XHRcdHRoaXMuY2hpbGRyZW5Nc2cub3BlbigpXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRjdXN0b21DbG9zZSgpIHtcclxuXHRcdFx0aWYgKHRoaXMuY2hpbGRyZW5Nc2cpIHtcclxuXHRcdFx0XHR0aGlzLmNoaWxkcmVuTXNnLmNsb3NlKClcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxufVxyXG4iLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi4zLjMuMjAxOTA5MjMuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLi8uLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuMy4zLjIwMTkwOTIzLmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMC0xIS4uLy4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi4zLjMuMjAxOTA5MjMuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0wLTIhLi4vLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjMuMy4yMDE5MDkyMy5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMC0zIS4uLy4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi4zLjMuMjAxOTA5MjMuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0wLTQhLi4vLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjMuMy4yMDE5MDkyMy5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VuaS1wb3B1cC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zM2I5ZThmZiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjMuMy4yMDE5MDkyMy5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvd2VicGFjay11bmktbnZ1ZS1sb2FkZXIvbGliL3N0eWxlLmpzIS4uLy4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi4zLjMuMjAxOTA5MjMuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0wLTEhLi4vLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjMuMy4yMDE5MDkyMy5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTAtMiEuLi8uLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuMy4zLjIwMTkwOTIzLmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0wLTMhLi4vLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjMuMy4yMDE5MDkyMy5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTAtNCEuLi8uLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuMy4zLjIwMTkwOTIzLmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW5pLXBvcHVwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTMzYjllOGZmJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInVuaS1wb3B1cFwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImZpeGVkXCJcbiAgfSxcbiAgXCJ1bmktcG9wdXBfX21hc2tcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiLFxuICAgIFwidG9wXCI6IDAsXG4gICAgXCJib3R0b21cIjogMCxcbiAgICBcImxlZnRcIjogMCxcbiAgICBcInJpZ2h0XCI6IDAsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCJyZ2JhKDAsMCwwLDAuNClcIixcbiAgICBcIm9wYWNpdHlcIjogMFxuICB9LFxuICBcIkBUUkFOU0lUSU9OXCI6IHtcbiAgICBcIm1hc2stYW5pXCI6IHtcbiAgICAgIFwicHJvcGVydHlcIjogXCJvcGFjaXR5XCIsXG4gICAgICBcImR1cmF0aW9uXCI6IDIwMFxuICAgIH0sXG4gICAgXCJjb250ZW50LWFuaVwiOiB7XG4gICAgICBcInByb3BlcnR5XCI6IFwidHJhbnNmb3JtLG9wYWNpdHlcIixcbiAgICAgIFwiZHVyYXRpb25cIjogMjAwXG4gICAgfVxuICB9LFxuICBcIm1hc2stYW5pXCI6IHtcbiAgICBcInRyYW5zaXRpb25Qcm9wZXJ0eVwiOiBcIm9wYWNpdHlcIixcbiAgICBcInRyYW5zaXRpb25EdXJhdGlvblwiOiAyMDBcbiAgfSxcbiAgXCJ1bmktdG9wLW1hc2tcIjoge1xuICAgIFwib3BhY2l0eVwiOiAxXG4gIH0sXG4gIFwidW5pLWJvdHRvbS1tYXNrXCI6IHtcbiAgICBcIm9wYWNpdHlcIjogMVxuICB9LFxuICBcInVuaS1jZW50ZXItbWFza1wiOiB7XG4gICAgXCJvcGFjaXR5XCI6IDFcbiAgfSxcbiAgXCJ1bmktcG9wdXBfX3dyYXBwZXJcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJhYnNvbHV0ZVwiXG4gIH0sXG4gIFwidG9wXCI6IHtcbiAgICBcInRvcFwiOiAwXG4gIH0sXG4gIFwiYm90dG9tXCI6IHtcbiAgICBcImJvdHRvbVwiOiAwXG4gIH0sXG4gIFwidW5pLXBvcHVwX193cmFwcGVyLWJveFwiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcInJlbGF0aXZlXCJcbiAgfSxcbiAgXCJjb250ZW50LWFuaVwiOiB7XG4gICAgXCJ0cmFuc2l0aW9uUHJvcGVydHlcIjogXCJ0cmFuc2Zvcm0sb3BhY2l0eVwiLFxuICAgIFwidHJhbnNpdGlvbkR1cmF0aW9uXCI6IDIwMFxuICB9LFxuICBcInVuaS10b3AtY29udGVudFwiOiB7XG4gICAgXCJ0cmFuc2Zvcm1cIjogXCJ0cmFuc2xhdGVZKDApXCJcbiAgfSxcbiAgXCJ1bmktYm90dG9tLWNvbnRlbnRcIjoge1xuICAgIFwidHJhbnNmb3JtXCI6IFwidHJhbnNsYXRlWSgwKVwiXG4gIH0sXG4gIFwidW5pLWNlbnRlci1jb250ZW50XCI6IHtcbiAgICBcInRyYW5zZm9ybVwiOiBcInNjYWxlKDEpXCIsXG4gICAgXCJvcGFjaXR5XCI6IDFcbiAgfVxufSIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjMuMy4yMDE5MDkyMy5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi1oYnVpbGRlcngvcGFja2FnZXMvd2VicGFjay11bmktbnZ1ZS1sb2FkZXIvbGliL3N0eWxlLmpzIS4uLy4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi4zLjMuMjAxOTA5MjMuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTEhLi4vLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjMuMy4yMDE5MDkyMy5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMiEuLi8uLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuMy4zLjIwMTkwOTIzLmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0zIS4uLy4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi4zLjMuMjAxOTA5MjMuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9saXZlLm52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi4zLjMuMjAxOTA5MjMuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4taGJ1aWxkZXJ4L3BhY2thZ2VzL3dlYnBhY2stdW5pLW52dWUtbG9hZGVyL2xpYi9zdHlsZS5qcyEuLi8uLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuMy4zLjIwMTkwOTIzLmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTgtb25lT2YtMC0xIS4uLy4uLy4uLy4uLy4uLy4uL0Rvd25sb2Fkcy9IQnVpbGRlclguMi4zLjMuMjAxOTA5MjMuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOC1vbmVPZi0wLTIhLi4vLi4vLi4vLi4vLi4vLi4vRG93bmxvYWRzL0hCdWlsZGVyWC4yLjMuMy4yMDE5MDkyMy5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS04LW9uZU9mLTAtMyEuLi8uLi8uLi8uLi8uLi8uLi9Eb3dubG9hZHMvSEJ1aWxkZXJYLjIuMy4zLjIwMTkwOTIzLmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbGl2ZS5udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmbXBUeXBlPXBhZ2VcIiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcImJ1dC1pbWdcIjoge1xuICAgIFwid2lkdGhcIjogXCIyMFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMjBcIlxuICB9LFxuICBcIm1laXlhbmJ1dFwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMTBcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjIwXCIsXG4gICAgXCJwYWRkaW5nQm90dG9tXCI6IFwiMTBcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMjBcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIyMFwiLFxuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCJcbiAgfSxcbiAgXCJidXQtdGV4dFwiOiB7XG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiM1wiLFxuICAgIFwiZm9udFNpemVcIjogXCIxM1wiLFxuICAgIFwiY29sb3JcIjogXCIjRkZGRkZGXCJcbiAgfSxcbiAgXCJpZFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjE0XCIsXG4gICAgXCJjb2xvclwiOiBcIiNGRkZGRkZcIlxuICB9LFxuICBcInRleHQtYm94XCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMTJcIixcbiAgICBcImNvbG9yXCI6IFwiI0ZGRkZGRlwiXG4gIH0sXG4gIFwidXNlci1pbWdcIjoge1xuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjMwXCIsXG4gICAgXCJoZWlnaHRcIjogXCIzMFwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IDUwXG4gIH0sXG4gIFwibWFyay10ZXh0XCI6IHtcbiAgICBcImNvbG9yXCI6IFwiI0ZGRkZGRlwiLFxuICAgIFwiZm9udFNpemVcIjogXCIyMFwiXG4gIH0sXG4gIFwibWFya1wiOiB7XG4gICAgXCJwb3NpdGlvblwiOiBcImZpeGVkXCIsXG4gICAgXCJ0b3BcIjogXCIwXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjMDAwMDAwXCIsXG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIlxuICB9LFxuICBcImJ1dFwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCJyZ2JhKDAsMCwwLDAuNClcIixcbiAgICBcInBvc2l0aW9uXCI6IFwiZml4ZWRcIixcbiAgICBcImJvdHRvbVwiOiBcIjBcIixcbiAgICBcImRpc3BsYXlcIjogXCJmbGV4XCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcInNwYWNlLWJldHdlZW5cIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIyMFwiXG4gIH0sXG4gIFwiYXJyb3ctYm94XCI6IHtcbiAgICBcInBvc2l0aW9uXCI6IFwiZml4ZWRcIixcbiAgICBcInRvcFwiOiBcIjYwXCIsXG4gICAgXCJsZWZ0XCI6IFwiMjBcIixcbiAgICBcInpJbmRleFwiOiAxMCxcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjIwXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCJyZ2JhKDAsMCwwLDAuNClcIlxuICB9LFxuICBcImppZXN1XCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCIxMFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjBcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIxMFwiLFxuICAgIFwicGFkZGluZ0xlZnRcIjogXCIyMFwiLFxuICAgIFwiY29sb3JcIjogXCIjRkZGRkZGXCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjE2XCJcbiAgfSxcbiAgXCJjaGF0LXVzZXJuYW1lXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMThcIixcbiAgICBcImNvbG9yXCI6IFwiI0ZGRkZGRlwiXG4gIH0sXG4gIFwiY2hhdC11c2VydGV4dFwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjE2XCIsXG4gICAgXCJjb2xvclwiOiBcIiNGRkZGRkZcIlxuICB9LFxuICBcImNoYXQtbGlzdFwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1XCIsXG4gICAgXCJkaXNwbGF5XCI6IFwiZmxleFwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJmbGV4LXN0YXJ0XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCJyZ2JhKDAsMCwwLDAuNSlcIixcbiAgICBcInBhZGRpbmdUb3BcIjogXCI1XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIxMFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjVcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMTBcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjNcIlxuICB9LFxuICBcInNjcm9sbC1ZXCI6IHtcbiAgICBcImhlaWdodFwiOiBcIjE1MFwiLFxuICAgIFwid2lkdGhcIjogXCIyNTBcIlxuICB9LFxuICBcImNoYXRcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJmaXhlZFwiLFxuICAgIFwiekluZGV4XCI6IDEwLFxuICAgIFwiYm90dG9tXCI6IFwiODBcIlxuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==