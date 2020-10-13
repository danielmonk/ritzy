(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("/Users/danielmonk/Sites/ritzy-new/node_modules/@reach/router/index.js"), require("/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.array.concat.js"), require("/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.array.filter.js"), require("/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.array.find.js"), require("/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.array.for-each.js"), require("/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.array.from.js"), require("/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.array.includes.js"), require("/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.array.iterator.js"), require("/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.array.map.js"), require("/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.array.slice.js"), require("/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.array.some.js"), require("/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.function.name.js"), require("/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.map.js"), require("/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.number.constructor.js"), require("/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.object.assign.js"), require("/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.object.keys.js"), require("/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.object.to-string.js"), require("/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.promise.js"), require("/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.regexp.constructor.js"), require("/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.regexp.exec.js"), require("/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.regexp.to-string.js"), require("/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.set.js"), require("/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.string.ends-with.js"), require("/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.string.includes.js"), require("/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.string.iterator.js"), require("/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.string.link.js"), require("/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.string.split.js"), require("/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.string.starts-with.js"), require("/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.symbol.js"), require("/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.symbol.description.js"), require("/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.symbol.iterator.js"), require("/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/web.dom-collections.for-each.js"), require("/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/web.dom-collections.iterator.js"), require("/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/web.url.js"), require("fs"), require("/Users/danielmonk/Sites/ritzy-new/node_modules/lodash/lodash.js"), require("path"), require("react"), require("react-dom/server"), require("react-helmet"));
	else if(typeof define === 'function' && define.amd)
		define("lib", ["/Users/danielmonk/Sites/ritzy-new/node_modules/@reach/router/index.js", "/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.array.concat.js", "/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.array.filter.js", "/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.array.find.js", "/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.array.for-each.js", "/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.array.from.js", "/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.array.includes.js", "/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.array.iterator.js", "/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.array.map.js", "/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.array.slice.js", "/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.array.some.js", "/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.function.name.js", "/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.map.js", "/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.number.constructor.js", "/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.object.assign.js", "/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.object.keys.js", "/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.object.to-string.js", "/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.promise.js", "/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.regexp.constructor.js", "/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.regexp.exec.js", "/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.regexp.to-string.js", "/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.set.js", "/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.string.ends-with.js", "/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.string.includes.js", "/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.string.iterator.js", "/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.string.link.js", "/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.string.split.js", "/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.string.starts-with.js", "/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.symbol.js", "/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.symbol.description.js", "/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.symbol.iterator.js", "/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/web.dom-collections.for-each.js", "/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/web.dom-collections.iterator.js", "/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/web.url.js", "fs", "/Users/danielmonk/Sites/ritzy-new/node_modules/lodash/lodash.js", "path", "react", "react-dom/server", "react-helmet"], factory);
	else if(typeof exports === 'object')
		exports["lib"] = factory(require("/Users/danielmonk/Sites/ritzy-new/node_modules/@reach/router/index.js"), require("/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.array.concat.js"), require("/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.array.filter.js"), require("/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.array.find.js"), require("/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.array.for-each.js"), require("/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.array.from.js"), require("/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.array.includes.js"), require("/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.array.iterator.js"), require("/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.array.map.js"), require("/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.array.slice.js"), require("/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.array.some.js"), require("/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.function.name.js"), require("/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.map.js"), require("/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.number.constructor.js"), require("/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.object.assign.js"), require("/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.object.keys.js"), require("/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.object.to-string.js"), require("/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.promise.js"), require("/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.regexp.constructor.js"), require("/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.regexp.exec.js"), require("/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.regexp.to-string.js"), require("/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.set.js"), require("/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.string.ends-with.js"), require("/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.string.includes.js"), require("/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.string.iterator.js"), require("/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.string.link.js"), require("/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.string.split.js"), require("/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.string.starts-with.js"), require("/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.symbol.js"), require("/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.symbol.description.js"), require("/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.symbol.iterator.js"), require("/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/web.dom-collections.for-each.js"), require("/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/web.dom-collections.iterator.js"), require("/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/web.url.js"), require("fs"), require("/Users/danielmonk/Sites/ritzy-new/node_modules/lodash/lodash.js"), require("path"), require("react"), require("react-dom/server"), require("react-helmet"));
	else
		root["lib"] = factory(root["/Users/danielmonk/Sites/ritzy-new/node_modules/@reach/router/index.js"], root["/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.array.concat.js"], root["/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.array.filter.js"], root["/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.array.find.js"], root["/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.array.for-each.js"], root["/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.array.from.js"], root["/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.array.includes.js"], root["/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.array.iterator.js"], root["/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.array.map.js"], root["/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.array.slice.js"], root["/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.array.some.js"], root["/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.function.name.js"], root["/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.map.js"], root["/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.number.constructor.js"], root["/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.object.assign.js"], root["/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.object.keys.js"], root["/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.object.to-string.js"], root["/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.promise.js"], root["/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.regexp.constructor.js"], root["/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.regexp.exec.js"], root["/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.regexp.to-string.js"], root["/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.set.js"], root["/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.string.ends-with.js"], root["/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.string.includes.js"], root["/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.string.iterator.js"], root["/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.string.link.js"], root["/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.string.split.js"], root["/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.string.starts-with.js"], root["/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.symbol.js"], root["/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.symbol.description.js"], root["/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.symbol.iterator.js"], root["/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/web.dom-collections.for-each.js"], root["/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/web.dom-collections.iterator.js"], root["/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/web.url.js"], root["fs"], root["/Users/danielmonk/Sites/ritzy-new/node_modules/lodash/lodash.js"], root["path"], root["react"], root["react-dom/server"], root["react-helmet"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE__reach_router__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es_array_concat__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es_array_filter__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es_array_find__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es_array_for_each__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es_array_from__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es_array_includes__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es_array_iterator__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es_array_map__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es_array_slice__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es_array_some__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es_function_name__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es_map__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es_number_constructor__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es_object_assign__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es_object_keys__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es_object_to_string__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es_promise__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es_regexp_constructor__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es_regexp_exec__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es_regexp_to_string__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es_set__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es_string_ends_with__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es_string_includes__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es_string_iterator__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es_string_link__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es_string_split__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es_string_starts_with__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es_symbol__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es_symbol_description__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_es_symbol_iterator__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_web_dom_collections_for_each__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_web_dom_collections_iterator__, __WEBPACK_EXTERNAL_MODULE_core_js_modules_web_url__, __WEBPACK_EXTERNAL_MODULE_fs__, __WEBPACK_EXTERNAL_MODULE_lodash__, __WEBPACK_EXTERNAL_MODULE_path__, __WEBPACK_EXTERNAL_MODULE_react__, __WEBPACK_EXTERNAL_MODULE_react_dom_server__, __WEBPACK_EXTERNAL_MODULE_react_helmet__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./.cache/develop-static-entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./.cache/api-runner-ssr.js":
/*!**********************************!*\
  !*** ./.cache/api-runner-ssr.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.array.filter */ "core-js/modules/es.array.filter");

__webpack_require__(/*! core-js/modules/es.array.map */ "core-js/modules/es.array.map");

var plugins = [{
  plugin: __webpack_require__(/*! ./node_modules/gatsby-plugin-react-helmet/gatsby-ssr */ "./node_modules/gatsby-plugin-react-helmet/gatsby-ssr.js"),
  options: {
    "plugins": []
  }
}, {
  plugin: __webpack_require__(/*! ./node_modules/gatsby-plugin-manifest/gatsby-ssr */ "./node_modules/gatsby-plugin-manifest/gatsby-ssr.js"),
  options: {
    "plugins": [],
    "name": "gatsby-starter-default",
    "short_name": "starter",
    "start_url": "/",
    "background_color": "#663399",
    "theme_color": "#663399",
    "display": "minimal-ui",
    "icon": "src/images/ritzy-r-no-text.png",
    "cache_busting_mode": "query",
    "include_favicon": true,
    "legacy": true,
    "theme_color_in_head": true,
    "cacheDigest": "02671f3b2e4f33e5ae14bfabc5162fe4"
  }
}, {
  plugin: __webpack_require__(/*! ./node_modules/gatsby-plugin-offline/gatsby-ssr */ "./node_modules/gatsby-plugin-offline/gatsby-ssr.js"),
  options: {
    "plugins": []
  }
}]; // During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

var apis = __webpack_require__(/*! ./api-ssr-docs */ "./.cache/api-ssr-docs.js"); // Run the specified API in any plugins that have implemented it


module.exports = function (api, args, defaultReturn, argTransform) {
  if (!apis[api]) {
    console.log("This API doesn't exist", api);
  } // Run each plugin in series.
  // eslint-disable-next-line no-undef


  var results = plugins.map(function (plugin) {
    if (!plugin.plugin[api]) {
      return undefined;
    }

    var result = plugin.plugin[api](args, plugin.options);

    if (result && argTransform) {
      args = argTransform({
        args: args,
        result: result
      });
    }

    return result;
  }); // Filter out undefined results.

  results = results.filter(function (result) {
    return typeof result !== "undefined";
  });

  if (results.length > 0) {
    return results;
  } else {
    return [defaultReturn];
  }
};

/***/ }),

/***/ "./.cache/api-ssr-docs.js":
/*!********************************!*\
  !*** ./.cache/api-ssr-docs.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Object containing options defined in `gatsby-config.js`
 * @typedef {object} pluginOptions
 */

/**
 * Replace the default server renderer. This is useful for integration with
 * Redux, css-in-js libraries, etc. that need custom setups for server
 * rendering.
 * @param {object} $0
 * @param {string} $0.pathname The pathname of the page currently being rendered.
 * @param {function} $0.replaceBodyHTMLString Call this with the HTML string
 * you render. **WARNING** if multiple plugins implement this API it's the
 * last plugin that "wins". TODO implement an automated warning against this.
 * @param {function} $0.setHeadComponents Takes an array of components as its
 * first argument which are added to the `headComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setHtmlAttributes Takes an object of props which will
 * spread into the `<html>` component.
 * @param {function} $0.setBodyAttributes Takes an object of props which will
 * spread into the `<body>` component.
 * @param {function} $0.setPreBodyComponents Takes an array of components as its
 * first argument which are added to the `preBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setPostBodyComponents Takes an array of components as its
 * first argument which are added to the `postBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setBodyProps Takes an object of data which
 * is merged with other body props and passed to `html.js` as `bodyProps`.
 * @param {pluginOptions} pluginOptions
 * @example
 * // From gatsby-plugin-glamor
 * const { renderToString } = require("react-dom/server")
 * const inline = require("glamor-inline")
 *
 * exports.replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
 *   const bodyHTML = renderToString(bodyComponent)
 *   const inlinedHTML = inline(bodyHTML)
 *
 *   replaceBodyHTMLString(inlinedHTML)
 * }
 */
exports.replaceRenderer = true;
/**
 * Called after every page Gatsby server renders while building HTML so you can
 * set head and body components to be rendered in your `html.js`.
 *
 * Gatsby does a two-pass render for HTML. It loops through your pages first
 * rendering only the body and then takes the result body HTML string and
 * passes it as the `body` prop to your `html.js` to complete the render.
 *
 * It's often handy to be able to send custom components to your `html.js`.
 * For example, it's a very common pattern for React.js libraries that
 * support server rendering to pull out data generated during the render to
 * add to your HTML.
 *
 * Using this API over [`replaceRenderer`](#replaceRenderer) is preferable as
 * multiple plugins can implement this API where only one plugin can take
 * over server rendering. However, if your plugin requires taking over server
 * rendering then that's the one to
 * use
 * @param {object} $0
 * @param {string} $0.pathname The pathname of the page currently being rendered.
 * @param {function} $0.setHeadComponents Takes an array of components as its
 * first argument which are added to the `headComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setHtmlAttributes Takes an object of props which will
 * spread into the `<html>` component.
 * @param {function} $0.setBodyAttributes Takes an object of props which will
 * spread into the `<body>` component.
 * @param {function} $0.setPreBodyComponents Takes an array of components as its
 * first argument which are added to the `preBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setPostBodyComponents Takes an array of components as its
 * first argument which are added to the `postBodyComponents` array which is passed
 * to the `html.js` component.
 * @param {function} $0.setBodyProps Takes an object of data which
 * is merged with other body props and passed to `html.js` as `bodyProps`.
 * @param {pluginOptions} pluginOptions
 * @example
 * const { Helmet } = require("react-helmet")
 *
 * exports.onRenderBody = (
 *   { setHeadComponents, setHtmlAttributes, setBodyAttributes },
 *   pluginOptions
 * ) => {
 *   const helmet = Helmet.renderStatic()
 *   setHtmlAttributes(helmet.htmlAttributes.toComponent())
 *   setBodyAttributes(helmet.bodyAttributes.toComponent())
 *   setHeadComponents([
 *     helmet.title.toComponent(),
 *     helmet.link.toComponent(),
 *     helmet.meta.toComponent(),
 *     helmet.noscript.toComponent(),
 *     helmet.script.toComponent(),
 *     helmet.style.toComponent(),
 *   ])
 * }
 */

exports.onRenderBody = true;
/**
 * Called after every page Gatsby server renders while building HTML so you can
 * replace head components to be rendered in your `html.js`. This is useful if
 * you need to reorder scripts or styles added by other plugins.
 * @param {object} $0
 * @param {string} $0.pathname The pathname of the page currently being rendered.
 * @param {Array<ReactNode>} $0.getHeadComponents Returns the current `headComponents` array.
 * @param {function} $0.replaceHeadComponents Takes an array of components as its
 * first argument which replace the `headComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {Array<ReactNode>} $0.getPreBodyComponents Returns the current `preBodyComponents` array.
 *  @param {function} $0.replacePreBodyComponents Takes an array of components as its
 * first argument which replace the `preBodyComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {Array<ReactNode>} $0.getPostBodyComponents Returns the current `postBodyComponents` array.
 *  @param {function} $0.replacePostBodyComponents Takes an array of components as its
 * first argument which replace the `postBodyComponents` array which is passed
 * to the `html.js` component. **WARNING** if multiple plugins implement this
 * API it's the last plugin that "wins".
 * @param {pluginOptions} pluginOptions
 * @example
 * // Move Typography.js styles to the top of the head section so they're loaded first.
 * exports.onPreRenderHTML = ({ getHeadComponents, replaceHeadComponents }) => {
 *   const headComponents = getHeadComponents()
 *   headComponents.sort((x, y) => {
 *     if (x.key === 'TypographyStyle') {
 *       return -1
 *     } else if (y.key === 'TypographyStyle') {
 *       return 1
 *     }
 *     return 0
 *   })
 *   replaceHeadComponents(headComponents)
 * }
 */

exports.onPreRenderHTML = true;
/**
 * Allow a plugin to wrap the page element.
 *
 * This is useful for setting wrapper components around pages that won't get
 * unmounted on page changes. For setting Provider components, use [wrapRootElement](#wrapRootElement).
 *
 * _Note:_
 * There is an equivalent hook in Gatsby's [Browser API](/docs/browser-apis/#wrapPageElement).
 * It is recommended to use both APIs together.
 * For example usage, check out [Using i18n](https://github.com/gatsbyjs/gatsby/tree/master/examples/using-i18n).
 * @param {object} $0
 * @param {ReactNode} $0.element The "Page" React Element built by Gatsby.
 * @param {object} $0.props Props object used by page.
 * @param {pluginOptions} pluginOptions
 * @returns {ReactNode} Wrapped element
 * @example
 * const React = require("react")
 * const Layout = require("./src/components/layout").default
 *
 * exports.wrapPageElement = ({ element, props }) => {
 *   // props provide same data to Layout as Page element will get
 *   // including location, data, etc - you don't need to pass it
 *   return <Layout {...props}>{element}</Layout>
 * }
 */

exports.wrapPageElement = true;
/**
 * Allow a plugin to wrap the root element.
 *
 * This is useful to set up any Provider components that will wrap your application.
 * For setting persistent UI elements around pages use [wrapPageElement](#wrapPageElement).
 *
 * _Note:_
 * There is an equivalent hook in Gatsby's [Browser API](/docs/browser-apis/#wrapRootElement).
 * It is recommended to use both APIs together.
 * For example usage, check out [Using redux](https://github.com/gatsbyjs/gatsby/tree/master/examples/using-redux).
 * @param {object} $0
 * @param {ReactNode} $0.element The "Root" React Element built by Gatsby.
 * @param {pluginOptions} pluginOptions
 * @returns {ReactNode} Wrapped element
 * @example
 * const React = require("react")
 * const { Provider } = require("react-redux")
 *
 * const createStore = require("./src/state/createStore")
 * const store = createStore()
 *
 * exports.wrapRootElement = ({ element }) => {
 *   return (
 *     <Provider store={store}>
 *       {element}
 *     </Provider>
 *   )
 * }
 */

exports.wrapRootElement = true;

/***/ }),

/***/ "./.cache/default-html.js":
/*!********************************!*\
  !*** ./.cache/default-html.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HTML; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);


function HTML(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("html", props.htmlAttributes, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("head", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    charSet: "utf-8"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    httpEquiv: "x-ua-compatible",
    content: "ie=edge"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1, shrink-to-fit=no"
  }), props.headComponents), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("body", props.bodyAttributes, props.preBodyComponents, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    key: "body",
    id: "___gatsby",
    dangerouslySetInnerHTML: {
      __html: props.body
    }
  }), props.postBodyComponents));
}
HTML.propTypes = {
  htmlAttributes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  headComponents: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  bodyAttributes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  preBodyComponents: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array,
  body: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  postBodyComponents: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
};

/***/ }),

/***/ "./.cache/develop-static-entry.js":
/*!****************************************!*\
  !*** ./.cache/develop-static-entry.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "core-js/modules/es.array.concat");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "core-js/modules/es.object.assign");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "core-js/modules/es.object.to-string");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_constructor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.constructor */ "core-js/modules/es.regexp.constructor");
/* harmony import */ var core_js_modules_es_regexp_constructor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_constructor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "core-js/modules/es.regexp.exec");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "core-js/modules/es.regexp.to-string");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.split */ "core-js/modules/es.string.split");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _api_runner_ssr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./api-runner-ssr */ "./.cache/api-runner-ssr.js");
/* harmony import */ var _api_runner_ssr__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_api_runner_ssr__WEBPACK_IMPORTED_MODULE_10__);










 // import testRequireError from "./test-require-error"
// For some extremely mysterious reason, webpack adds the above module *after*
// this module so that when this code runs, testRequireError is undefined.
// So in the meantime, we'll just inline it.

var testRequireError = function testRequireError(moduleName, err) {
  var regex = new RegExp("Error: Cannot find module\\s." + moduleName);
  var firstLine = err.toString().split("\n")[0];
  return regex.test(firstLine);
};

var Html;

try {
  Html = __webpack_require__(/*! ../src/html */ "./src/html.js");
} catch (err) {
  if (testRequireError("../src/html", err)) {
    Html = __webpack_require__(/*! ./default-html */ "./.cache/default-html.js");
  } else {
    console.log("There was an error requiring \"src/html.js\"\n\n", err, "\n\n");
    process.exit();
  }
}

Html = Html && Html.__esModule ? Html.default : Html;
/* harmony default export */ __webpack_exports__["default"] = (function (pagePath, callback) {
  var headComponents = [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("meta", {
    key: "environment",
    name: "note",
    content: "environment=development"
  })];
  var htmlAttributes = {};
  var bodyAttributes = {};
  var preBodyComponents = [];
  var postBodyComponents = [];
  var bodyProps = {};
  var htmlStr;

  var setHeadComponents = function setHeadComponents(components) {
    headComponents = headComponents.concat(components);
  };

  var setHtmlAttributes = function setHtmlAttributes(attributes) {
    htmlAttributes = Object(lodash__WEBPACK_IMPORTED_MODULE_9__["merge"])(htmlAttributes, attributes);
  };

  var setBodyAttributes = function setBodyAttributes(attributes) {
    bodyAttributes = Object(lodash__WEBPACK_IMPORTED_MODULE_9__["merge"])(bodyAttributes, attributes);
  };

  var setPreBodyComponents = function setPreBodyComponents(components) {
    preBodyComponents = preBodyComponents.concat(components);
  };

  var setPostBodyComponents = function setPostBodyComponents(components) {
    postBodyComponents = postBodyComponents.concat(components);
  };

  var setBodyProps = function setBodyProps(props) {
    bodyProps = Object(lodash__WEBPACK_IMPORTED_MODULE_9__["merge"])({}, bodyProps, props);
  };

  var getHeadComponents = function getHeadComponents() {
    return headComponents;
  };

  var replaceHeadComponents = function replaceHeadComponents(components) {
    headComponents = components;
  };

  var getPreBodyComponents = function getPreBodyComponents() {
    return preBodyComponents;
  };

  var replacePreBodyComponents = function replacePreBodyComponents(components) {
    preBodyComponents = components;
  };

  var getPostBodyComponents = function getPostBodyComponents() {
    return postBodyComponents;
  };

  var replacePostBodyComponents = function replacePostBodyComponents(components) {
    postBodyComponents = components;
  };

  _api_runner_ssr__WEBPACK_IMPORTED_MODULE_10___default()("onRenderBody", {
    setHeadComponents: setHeadComponents,
    setHtmlAttributes: setHtmlAttributes,
    setBodyAttributes: setBodyAttributes,
    setPreBodyComponents: setPreBodyComponents,
    setPostBodyComponents: setPostBodyComponents,
    setBodyProps: setBodyProps,
    pathname: pagePath
  });
  _api_runner_ssr__WEBPACK_IMPORTED_MODULE_10___default()("onPreRenderHTML", {
    getHeadComponents: getHeadComponents,
    replaceHeadComponents: replaceHeadComponents,
    getPreBodyComponents: getPreBodyComponents,
    replacePreBodyComponents: replacePreBodyComponents,
    getPostBodyComponents: getPostBodyComponents,
    replacePostBodyComponents: replacePostBodyComponents,
    pathname: pagePath
  });
  var htmlElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Html, Object.assign({}, bodyProps, {
    body: "",
    headComponents: headComponents.concat([/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("script", {
      key: "io",
      src: "/socket.io/socket.io.js"
    })]),
    htmlAttributes: htmlAttributes,
    bodyAttributes: bodyAttributes,
    preBodyComponents: preBodyComponents,
    postBodyComponents: postBodyComponents.concat([/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("script", {
      key: "commons",
      src: "/commons.js"
    })])
  }));
  htmlStr = Object(react_dom_server__WEBPACK_IMPORTED_MODULE_8__["renderToStaticMarkup"])(htmlElement);
  htmlStr = "<!DOCTYPE html>" + htmlStr;
  callback(null, htmlStr);
});

/***/ }),

/***/ "./.cache/emitter.js":
/*!***************************!*\
  !*** ./.cache/emitter.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mitt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mitt */ "./node_modules/mitt/dist/mitt.es.js");

var emitter = Object(mitt__WEBPACK_IMPORTED_MODULE_0__["default"])();
/* harmony default export */ __webpack_exports__["default"] = (emitter);

/***/ }),

/***/ "./.cache/find-path.js":
/*!*****************************!*\
  !*** ./.cache/find-path.js ***!
  \*****************************/
/*! exports provided: setMatchPaths, findMatchPath, findPath, cleanPath */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMatchPaths", function() { return setMatchPaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findMatchPath", function() { return findMatchPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findPath", function() { return findPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanPath", function() { return cleanPath; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "core-js/modules/es.symbol");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "core-js/modules/es.symbol.description");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "core-js/modules/es.symbol.iterator");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.from */ "core-js/modules/es.array.from");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "core-js/modules/es.array.iterator");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "core-js/modules/es.array.slice");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.function.name */ "core-js/modules/es.function.name");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.map */ "core-js/modules/es.map");
/* harmony import */ var core_js_modules_es_map__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_map__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "core-js/modules/es.object.to-string");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.regexp.exec */ "core-js/modules/es.regexp.exec");
/* harmony import */ var core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "core-js/modules/es.regexp.to-string");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_ends_with__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.ends-with */ "core-js/modules/es.string.ends-with");
/* harmony import */ var core_js_modules_es_string_ends_with__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_ends_with__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "core-js/modules/es.string.iterator");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.string.split */ "core-js/modules/es.string.split");
/* harmony import */ var core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_starts_with__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.string.starts-with */ "core-js/modules/es.string.starts-with");
/* harmony import */ var core_js_modules_es_string_starts_with__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_starts_with__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "core-js/modules/web.dom-collections.iterator");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/web.url */ "core-js/modules/web.url");
/* harmony import */ var core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _reach_router_lib_utils__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @reach/router/lib/utils */ "./node_modules/@reach/router/lib/utils.js");
/* harmony import */ var _reach_router_lib_utils__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_reach_router_lib_utils__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _strip_prefix__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./strip-prefix */ "./.cache/strip-prefix.js");
/* harmony import */ var _normalize_page_path__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./normalize-page-path */ "./.cache/normalize-page-path.js");


















function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } it = o[Symbol.iterator](); return it.next.bind(it); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




var pathCache = new Map();
var matchPaths = [];

var trimPathname = function trimPathname(rawPathname) {
  var pathname = decodeURIComponent(rawPathname); // Remove the pathPrefix from the pathname.

  var trimmedPathname = Object(_strip_prefix__WEBPACK_IMPORTED_MODULE_18__["default"])(pathname, "") // Remove any hashfragment
  .split("#")[0] // Remove search query
  .split("?")[0];
  return trimmedPathname;
};

function absolutify(path) {
  // If it's already absolute, return as-is
  if (path.startsWith("/") || path.startsWith("https://") || path.startsWith("http://")) {
    return path;
  } // Calculate path relative to current location, adding a trailing slash to
  // match behavior of @reach/router


  return new URL(path, window.location.href + (window.location.href.endsWith("/") ? "" : "/")).pathname;
}
/**
 * Set list of matchPaths
 *
 * @param {Array<{path: string, matchPath: string}>} value collection of matchPaths
 */


var setMatchPaths = function setMatchPaths(value) {
  matchPaths = value;
};
/**
 * Return a matchpath url
 * if `match-paths.json` contains `{ "/foo*": "/page1", ...}`, then
 * `/foo?bar=far` => `/page1`
 *
 * @param {string} rawPathname A raw pathname
 * @return {string|null}
 */

var findMatchPath = function findMatchPath(rawPathname) {
  var trimmedPathname = cleanPath(rawPathname);

  for (var _iterator = _createForOfIteratorHelperLoose(matchPaths), _step; !(_step = _iterator()).done;) {
    var _step$value = _step.value,
        matchPath = _step$value.matchPath,
        path = _step$value.path;

    if (Object(_reach_router_lib_utils__WEBPACK_IMPORTED_MODULE_17__["match"])(matchPath, trimmedPathname)) {
      return Object(_normalize_page_path__WEBPACK_IMPORTED_MODULE_19__["default"])(path);
    }
  }

  return null;
}; // Given a raw URL path, returns the cleaned version of it (trim off
// `#` and query params), or if it matches an entry in
// `match-paths.json`, its matched path is returned
//
// E.g. `/foo?bar=far` => `/foo`
//
// Or if `match-paths.json` contains `{ "/foo*": "/page1", ...}`, then
// `/foo?bar=far` => `/page1`

var findPath = function findPath(rawPathname) {
  var trimmedPathname = trimPathname(absolutify(rawPathname));

  if (pathCache.has(trimmedPathname)) {
    return pathCache.get(trimmedPathname);
  }

  var foundPath = findMatchPath(trimmedPathname);

  if (!foundPath) {
    foundPath = cleanPath(rawPathname);
  }

  pathCache.set(trimmedPathname, foundPath);
  return foundPath;
};
/**
 * Clean a url and converts /index.html => /
 * E.g. `/foo?bar=far` => `/foo`
 *
 * @param {string} rawPathname A raw pathname
 * @return {string}
 */

var cleanPath = function cleanPath(rawPathname) {
  var trimmedPathname = trimPathname(absolutify(rawPathname));
  var foundPath = trimmedPathname;

  if (foundPath === "/index.html") {
    foundPath = "/";
  }

  foundPath = Object(_normalize_page_path__WEBPACK_IMPORTED_MODULE_19__["default"])(foundPath);
  return foundPath;
};

/***/ }),

/***/ "./.cache/gatsby-browser-entry.js":
/*!****************************************!*\
  !*** ./.cache/gatsby-browser-entry.js ***!
  \****************************************/
/*! exports provided: Link, withAssetPrefix, withPrefix, graphql, parsePath, navigate, push, replace, navigateTo, StaticQueryContext, StaticQuery, PageRenderer, useStaticQuery, prefetchPathname */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "graphql", function() { return graphql; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticQueryContext", function() { return StaticQueryContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaticQuery", function() { return StaticQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useStaticQuery", function() { return useStaticQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prefetchPathname", function() { return prefetchPathname; });
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor */ "core-js/modules/es.number.constructor");
/* harmony import */ var core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gatsby-link */ "./node_modules/gatsby-link/index.js");
/* harmony import */ var gatsby_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(gatsby_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_3___default.a; });
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withAssetPrefix", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_3__["withAssetPrefix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "withPrefix", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_3__["withPrefix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parsePath", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_3__["parsePath"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigate", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_3__["navigate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "push", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_3__["push"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "replace", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_3__["replace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "navigateTo", function() { return gatsby_link__WEBPACK_IMPORTED_MODULE_3__["navigateTo"]; });

/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./public-page-renderer */ "./.cache/public-page-renderer.js");
/* harmony import */ var _public_page_renderer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_public_page_renderer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "PageRenderer", function() { return _public_page_renderer__WEBPACK_IMPORTED_MODULE_4___default.a; });
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loader */ "./.cache/loader.js");






var prefetchPathname = _loader__WEBPACK_IMPORTED_MODULE_5__["default"].enqueue;
var StaticQueryContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext({});

function StaticQueryDataRenderer(_ref) {
  var staticQueryData = _ref.staticQueryData,
      data = _ref.data,
      query = _ref.query,
      render = _ref.render;
  var finalData = data ? data.data : staticQueryData[query] && staticQueryData[query].data;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, finalData && render(finalData), !finalData && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "Loading (StaticQuery)"));
}

var StaticQuery = function StaticQuery(props) {
  var data = props.data,
      query = props.query,
      render = props.render,
      children = props.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StaticQueryContext.Consumer, null, function (staticQueryData) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StaticQueryDataRenderer, {
      data: data,
      query: query,
      render: render || children,
      staticQueryData: staticQueryData
    });
  });
};

var useStaticQuery = function useStaticQuery(query) {
  if (typeof react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext !== "function" && "development" === "development") {
    throw new Error("You're likely using a version of React that doesn't support Hooks\n" + "Please update React and ReactDOM to 16.8.0 or later to use the useStaticQuery hook.");
  }

  var context = react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext(StaticQueryContext); // query is a stringified number like `3303882` when wrapped with graphql, If a user forgets
  // to wrap the query in a grqphql, then casting it to a Number results in `NaN` allowing us to
  // catch the misuse of the API and give proper direction

  if (isNaN(Number(query))) {
    throw new Error("useStaticQuery was called with a string but expects to be called using `graphql`. Try this:\n\nimport { useStaticQuery, graphql } from 'gatsby';\n\nuseStaticQuery(graphql`" + query + "`);\n");
  }

  if (context[query] && context[query].data) {
    return context[query].data;
  } else {
    throw new Error("The result of this StaticQuery could not be fetched.\n\n" + "This is likely a bug in Gatsby and if refreshing the page does not fix it, " + "please open an issue in https://github.com/gatsbyjs/gatsby/issues");
  }
};

StaticQuery.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  query: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired,
  render: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};

function graphql() {
  throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls " + "are supposed to only be evaluated at compile time, and then compiled away. " + "Unfortunately, something went wrong and the query was left in the compiled code.\n\n" + "Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.");
}



/***/ }),

/***/ "./.cache/loader.js":
/*!**************************!*\
  !*** ./.cache/loader.js ***!
  \**************************/
/*! exports provided: PageResourceStatus, BaseLoader, ProdLoader, setLoader, publicLoader, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageResourceStatus", function() { return PageResourceStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseLoader", function() { return BaseLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProdLoader", function() { return ProdLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLoader", function() { return setLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "publicLoader", function() { return publicLoader; });
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol */ "core-js/modules/es.symbol");
/* harmony import */ var core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description */ "core-js/modules/es.symbol.description");
/* harmony import */ var core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator */ "core-js/modules/es.symbol.iterator");
/* harmony import */ var core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat */ "core-js/modules/es.array.concat");
/* harmony import */ var core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.from */ "core-js/modules/es.array.from");
/* harmony import */ var core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.includes */ "core-js/modules/es.array.includes");
/* harmony import */ var core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator */ "core-js/modules/es.array.iterator");
/* harmony import */ var core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.map */ "core-js/modules/es.array.map");
/* harmony import */ var core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "core-js/modules/es.array.slice");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_some__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.some */ "core-js/modules/es.array.some");
/* harmony import */ var core_js_modules_es_array_some__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_some__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.function.name */ "core-js/modules/es.function.name");
/* harmony import */ var core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_map__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.map */ "core-js/modules/es.map");
/* harmony import */ var core_js_modules_es_map__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_map__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.assign */ "core-js/modules/es.object.assign");
/* harmony import */ var core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "core-js/modules/es.object.to-string");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.promise */ "core-js/modules/es.promise");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string */ "core-js/modules/es.regexp.to-string");
/* harmony import */ var core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_set__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.set */ "core-js/modules/es.set");
/* harmony import */ var core_js_modules_es_set__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_ends_with__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.ends-with */ "core-js/modules/es.string.ends-with");
/* harmony import */ var core_js_modules_es_string_ends_with__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_ends_with__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.string.includes */ "core-js/modules/es.string.includes");
/* harmony import */ var core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.string.iterator */ "core-js/modules/es.string.iterator");
/* harmony import */ var core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "core-js/modules/web.dom-collections.iterator");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _prefetch__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./prefetch */ "./.cache/prefetch.js");
/* harmony import */ var _emitter__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./emitter */ "./.cache/emitter.js");
/* harmony import */ var _find_path__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./find-path */ "./.cache/find-path.js");






















function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




/**
 * Available resource loading statuses
 */

var PageResourceStatus = {
  /**
   * At least one of critical resources failed to load
   */
  Error: "error",

  /**
   * Resources loaded successfully
   */
  Success: "success"
};

var preferDefault = function preferDefault(m) {
  return m && m.default || m;
};

var stripSurroundingSlashes = function stripSurroundingSlashes(s) {
  s = s[0] === "/" ? s.slice(1) : s;
  s = s.endsWith("/") ? s.slice(0, -1) : s;
  return s;
};

var createPageDataUrl = function createPageDataUrl(path) {
  var fixedPath = path === "/" ? "index" : stripSurroundingSlashes(path);
  return "" + "/page-data/" + fixedPath + "/page-data.json";
};

var doFetch = function doFetch(url, method) {
  if (method === void 0) {
    method = "GET";
  }

  return new Promise(function (resolve, reject) {
    var req = new XMLHttpRequest();
    req.open(method, url, true);

    req.onreadystatechange = function () {
      if (req.readyState == 4) {
        resolve(req);
      }
    };

    req.send(null);
  });
};

var _loadPageDataJson = function loadPageDataJson(loadObj) {
  var pagePath = loadObj.pagePath,
      _loadObj$retries = loadObj.retries,
      retries = _loadObj$retries === void 0 ? 0 : _loadObj$retries;
  var url = createPageDataUrl(pagePath);
  return doFetch(url).then(function (req) {
    var status = req.status,
        responseText = req.responseText; // Handle 200

    if (status === 200) {
      try {
        var jsonPayload = JSON.parse(responseText);

        if (jsonPayload.path === undefined) {
          throw new Error("not a valid pageData response");
        }

        return Object.assign(loadObj, {
          status: PageResourceStatus.Success,
          payload: jsonPayload
        });
      } catch (err) {// continue regardless of error
      }
    } // Handle 404


    if (status === 404 || status === 200) {
      // If the request was for a 404 page and it doesn't exist, we're done
      if (pagePath === "/404.html") {
        return Object.assign(loadObj, {
          status: PageResourceStatus.Error
        });
      } // Need some code here to cache the 404 request. In case
      // multiple loadPageDataJsons result in 404s


      return _loadPageDataJson(Object.assign(loadObj, {
        pagePath: "/404.html",
        notFound: true
      }));
    } // handle 500 response (Unrecoverable)


    if (status === 500) {
      return Object.assign(loadObj, {
        status: PageResourceStatus.Error
      });
    } // Handle everything else, including status === 0, and 503s. Should retry


    if (retries < 3) {
      return _loadPageDataJson(Object.assign(loadObj, {
        retries: retries + 1
      }));
    } // Retried 3 times already, result is an error.


    return Object.assign(loadObj, {
      status: PageResourceStatus.Error
    });
  });
};

var doesConnectionSupportPrefetch = function doesConnectionSupportPrefetch() {
  if ("connection" in navigator && typeof navigator.connection !== "undefined") {
    if ((navigator.connection.effectiveType || "").includes("2g")) {
      return false;
    }

    if (navigator.connection.saveData) {
      return false;
    }
  }

  return true;
};

var toPageResources = function toPageResources(pageData, component) {
  if (component === void 0) {
    component = null;
  }

  var page = {
    componentChunkName: pageData.componentChunkName,
    path: pageData.path,
    webpackCompilationHash: pageData.webpackCompilationHash,
    matchPath: pageData.matchPath
  };
  return {
    component: component,
    json: pageData.result,
    page: page
  };
};

var BaseLoader = /*#__PURE__*/function () {
  function BaseLoader(loadComponent, matchPaths) {
    // Map of pagePath -> Page. Where Page is an object with: {
    //   status: PageResourceStatus.Success || PageResourceStatus.Error,
    //   payload: PageResources, // undefined if PageResourceStatus.Error
    // }
    // PageResources is {
    //   component,
    //   json: pageData.result,
    //   page: {
    //     componentChunkName,
    //     path,
    //     webpackCompilationHash,
    //   }
    // }
    this.pageDb = new Map();
    this.inFlightDb = new Map();
    this.pageDataDb = new Map();
    this.prefetchTriggered = new Set();
    this.prefetchCompleted = new Set();
    this.loadComponent = loadComponent;
    Object(_find_path__WEBPACK_IMPORTED_MODULE_23__["setMatchPaths"])(matchPaths);
  }

  var _proto = BaseLoader.prototype;

  _proto.setApiRunner = function setApiRunner(apiRunner) {
    this.apiRunner = apiRunner;
    this.prefetchDisabled = apiRunner("disableCorePrefetching").some(function (a) {
      return a;
    });
  };

  _proto.loadPageDataJson = function loadPageDataJson(rawPath) {
    var _this = this;

    var pagePath = Object(_find_path__WEBPACK_IMPORTED_MODULE_23__["findPath"])(rawPath);

    if (this.pageDataDb.has(pagePath)) {
      return Promise.resolve(this.pageDataDb.get(pagePath));
    }

    return _loadPageDataJson({
      pagePath: pagePath
    }).then(function (pageData) {
      _this.pageDataDb.set(pagePath, pageData);

      return pageData;
    });
  };

  _proto.findMatchPath = function findMatchPath(rawPath) {
    return Object(_find_path__WEBPACK_IMPORTED_MODULE_23__["findMatchPath"])(rawPath);
  } // TODO check all uses of this and whether they use undefined for page resources not exist
  ;

  _proto.loadPage = function loadPage(rawPath) {
    var _this2 = this;

    var pagePath = Object(_find_path__WEBPACK_IMPORTED_MODULE_23__["findPath"])(rawPath);

    if (this.pageDb.has(pagePath)) {
      var page = this.pageDb.get(pagePath);
      return Promise.resolve(page.payload);
    }

    if (this.inFlightDb.has(pagePath)) {
      return this.inFlightDb.get(pagePath);
    }

    var inFlight = Promise.all([this.loadAppData(), this.loadPageDataJson(pagePath)]).then(function (allData) {
      var result = allData[1];

      if (result.status === PageResourceStatus.Error) {
        return {
          status: PageResourceStatus.Error
        };
      }

      var pageData = result.payload;
      var _pageData = pageData,
          componentChunkName = _pageData.componentChunkName;
      return _this2.loadComponent(componentChunkName).then(function (component) {
        var finalResult = {
          createdAt: new Date()
        };
        var pageResources;

        if (!component) {
          finalResult.status = PageResourceStatus.Error;
        } else {
          finalResult.status = PageResourceStatus.Success;

          if (result.notFound === true) {
            finalResult.notFound = true;
          }

          pageData = Object.assign(pageData, {
            webpackCompilationHash: allData[0] ? allData[0].webpackCompilationHash : ""
          });
          pageResources = toPageResources(pageData, component);
          finalResult.payload = pageResources;
          _emitter__WEBPACK_IMPORTED_MODULE_22__["default"].emit("onPostLoadPageResources", {
            page: pageResources,
            pageResources: pageResources
          });
        }

        _this2.pageDb.set(pagePath, finalResult); // undefined if final result is an error


        return pageResources;
      });
    }) // prefer duplication with then + catch over .finally to prevent problems in ie11 + firefox
    .then(function (response) {
      _this2.inFlightDb.delete(pagePath);

      return response;
    }).catch(function (err) {
      _this2.inFlightDb.delete(pagePath);

      throw err;
    });
    this.inFlightDb.set(pagePath, inFlight);
    return inFlight;
  } // returns undefined if loading page ran into errors
  ;

  _proto.loadPageSync = function loadPageSync(rawPath) {
    var pagePath = Object(_find_path__WEBPACK_IMPORTED_MODULE_23__["findPath"])(rawPath);

    if (this.pageDb.has(pagePath)) {
      return this.pageDb.get(pagePath).payload;
    }

    return undefined;
  };

  _proto.shouldPrefetch = function shouldPrefetch(pagePath) {
    // Skip prefetching if we know user is on slow or constrained connection
    if (!doesConnectionSupportPrefetch()) {
      return false;
    } // Check if the page exists.


    if (this.pageDb.has(pagePath)) {
      return false;
    }

    return true;
  };

  _proto.prefetch = function prefetch(pagePath) {
    var _this3 = this;

    if (!this.shouldPrefetch(pagePath)) {
      return false;
    } // Tell plugins with custom prefetching logic that they should start
    // prefetching this path.


    if (!this.prefetchTriggered.has(pagePath)) {
      this.apiRunner("onPrefetchPathname", {
        pathname: pagePath
      });
      this.prefetchTriggered.add(pagePath);
    } // If a plugin has disabled core prefetching, stop now.


    if (this.prefetchDisabled) {
      return false;
    }

    var realPath = Object(_find_path__WEBPACK_IMPORTED_MODULE_23__["findPath"])(pagePath); // Todo make doPrefetch logic cacheable
    // eslint-disable-next-line consistent-return

    this.doPrefetch(realPath).then(function () {
      if (!_this3.prefetchCompleted.has(pagePath)) {
        _this3.apiRunner("onPostPrefetchPathname", {
          pathname: pagePath
        });

        _this3.prefetchCompleted.add(pagePath);
      }
    });
    return true;
  };

  _proto.doPrefetch = function doPrefetch(pagePath) {
    throw new Error("doPrefetch not implemented");
  };

  _proto.hovering = function hovering(rawPath) {
    this.loadPage(rawPath);
  };

  _proto.getResourceURLsForPathname = function getResourceURLsForPathname(rawPath) {
    var pagePath = Object(_find_path__WEBPACK_IMPORTED_MODULE_23__["findPath"])(rawPath);
    var page = this.pageDataDb.get(pagePath);

    if (page) {
      var pageResources = toPageResources(page.payload);
      return [].concat(_toConsumableArray(createComponentUrls(pageResources.page.componentChunkName)), [createPageDataUrl(pagePath)]);
    } else {
      return null;
    }
  };

  _proto.isPageNotFound = function isPageNotFound(rawPath) {
    var pagePath = Object(_find_path__WEBPACK_IMPORTED_MODULE_23__["findPath"])(rawPath);
    var page = this.pageDb.get(pagePath);
    return page && page.notFound === true;
  };

  _proto.loadAppData = function loadAppData(retries) {
    var _this4 = this;

    if (retries === void 0) {
      retries = 0;
    }

    return doFetch("" + "/page-data/app-data.json").then(function (req) {
      var status = req.status,
          responseText = req.responseText;
      var appData;

      if (status !== 200 && retries < 3) {
        // Retry 3 times incase of non-200 responses
        return _this4.loadAppData(retries + 1);
      } // Handle 200


      if (status === 200) {
        try {
          var jsonPayload = JSON.parse(responseText);

          if (jsonPayload.webpackCompilationHash === undefined) {
            throw new Error("not a valid app-data response");
          }

          appData = jsonPayload;
        } catch (err) {// continue regardless of error
        }
      }

      return appData;
    });
  };

  return BaseLoader;
}();

var createComponentUrls = function createComponentUrls(componentChunkName) {
  return (window.___chunkMapping[componentChunkName] || []).map(function (chunk) {
    return "" + chunk;
  });
};

var ProdLoader = /*#__PURE__*/function (_BaseLoader) {
  _inheritsLoose(ProdLoader, _BaseLoader);

  function ProdLoader(asyncRequires, matchPaths) {
    var loadComponent = function loadComponent(chunkName) {
      return asyncRequires.components[chunkName] ? asyncRequires.components[chunkName]().then(preferDefault) // loader will handle the case when component is null
      .catch(function () {
        return null;
      }) : Promise.resolve();
    };

    return _BaseLoader.call(this, loadComponent, matchPaths) || this;
  }

  var _proto2 = ProdLoader.prototype;

  _proto2.doPrefetch = function doPrefetch(pagePath) {
    var _this5 = this;

    var pageDataUrl = createPageDataUrl(pagePath);
    return Object(_prefetch__WEBPACK_IMPORTED_MODULE_21__["default"])(pageDataUrl, {
      crossOrigin: "anonymous",
      as: "fetch"
    }).then(function () {
      return (// This was just prefetched, so will return a response from
        // the cache instead of making another request to the server
        _this5.loadPageDataJson(pagePath)
      );
    }).then(function (result) {
      if (result.status !== PageResourceStatus.Success) {
        return Promise.resolve();
      }

      var pageData = result.payload;
      var chunkName = pageData.componentChunkName;
      var componentUrls = createComponentUrls(chunkName);
      return Promise.all(componentUrls.map(_prefetch__WEBPACK_IMPORTED_MODULE_21__["default"])).then(function () {
        return pageData;
      });
    });
  };

  _proto2.loadPageDataJson = function loadPageDataJson(rawPath) {
    return _BaseLoader.prototype.loadPageDataJson.call(this, rawPath).then(function (data) {
      if (data.notFound) {
        // check if html file exist using HEAD request:
        // if it does we should navigate to it instead of showing 404
        return doFetch(rawPath, "HEAD").then(function (req) {
          if (req.status === 200) {
            // page (.html file) actually exist (or we asked for 404 )
            // returning page resources status as errored to trigger
            // regular browser navigation to given page
            return {
              status: PageResourceStatus.Error
            };
          } // if HEAD request wasn't 200, return notFound result
          // and show 404 page


          return data;
        });
      }

      return data;
    });
  };

  return ProdLoader;
}(BaseLoader);
var instance;
var setLoader = function setLoader(_loader) {
  instance = _loader;
};
var publicLoader = {
  // Deprecated methods. As far as we're aware, these are only used by
  // core gatsby and the offline plugin, however there's a very small
  // chance they're called by others.
  getResourcesForPathname: function getResourcesForPathname(rawPath) {
    console.warn("Warning: getResourcesForPathname is deprecated. Use loadPage instead");
    return instance.i.loadPage(rawPath);
  },
  getResourcesForPathnameSync: function getResourcesForPathnameSync(rawPath) {
    console.warn("Warning: getResourcesForPathnameSync is deprecated. Use loadPageSync instead");
    return instance.i.loadPageSync(rawPath);
  },
  enqueue: function enqueue(rawPath) {
    return instance.prefetch(rawPath);
  },
  // Real methods
  getResourceURLsForPathname: function getResourceURLsForPathname(rawPath) {
    return instance.getResourceURLsForPathname(rawPath);
  },
  loadPage: function loadPage(rawPath) {
    return instance.loadPage(rawPath);
  },
  loadPageSync: function loadPageSync(rawPath) {
    return instance.loadPageSync(rawPath);
  },
  prefetch: function prefetch(rawPath) {
    return instance.prefetch(rawPath);
  },
  isPageNotFound: function isPageNotFound(rawPath) {
    return instance.isPageNotFound(rawPath);
  },
  hovering: function hovering(rawPath) {
    return instance.hovering(rawPath);
  },
  loadAppData: function loadAppData() {
    return instance.loadAppData();
  }
};
/* harmony default export */ __webpack_exports__["default"] = (publicLoader);

/***/ }),

/***/ "./.cache/normalize-page-path.js":
/*!***************************************!*\
  !*** ./.cache/normalize-page-path.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "core-js/modules/es.array.slice");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function (path) {
  if (path === undefined) {
    return path;
  }

  if (path === "/") {
    return "/";
  }

  if (path.charAt(path.length - 1) === "/") {
    return path.slice(0, -1);
  }

  return path;
});

/***/ }),

/***/ "./.cache/prefetch.js":
/*!****************************!*\
  !*** ./.cache/prefetch.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each */ "core-js/modules/es.array.for-each");
/* harmony import */ var core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.keys */ "core-js/modules/es.object.keys");
/* harmony import */ var core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string */ "core-js/modules/es.object.to-string");
/* harmony import */ var core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.promise */ "core-js/modules/es.promise");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "core-js/modules/web.dom-collections.for-each");
/* harmony import */ var core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each__WEBPACK_IMPORTED_MODULE_4__);






var support = function support(feature) {
  if (typeof document === "undefined") {
    return false;
  }

  var fakeLink = document.createElement("link");

  try {
    if (fakeLink.relList && typeof fakeLink.relList.supports === "function") {
      return fakeLink.relList.supports(feature);
    }
  } catch (err) {
    return false;
  }

  return false;
};

var linkPrefetchStrategy = function linkPrefetchStrategy(url, options) {
  return new Promise(function (resolve, reject) {
    if (typeof document === "undefined") {
      reject();
      return;
    }

    var link = document.createElement("link");
    link.setAttribute("rel", "prefetch");
    link.setAttribute("href", url);
    Object.keys(options).forEach(function (key) {
      link.setAttribute(key, options[key]);
    });
    link.onload = resolve;
    link.onerror = reject;
    var parentElement = document.getElementsByTagName("head")[0] || document.getElementsByName("script")[0].parentNode;
    parentElement.appendChild(link);
  });
};

var xhrPrefetchStrategy = function xhrPrefetchStrategy(url) {
  return new Promise(function (resolve, reject) {
    var req = new XMLHttpRequest();
    req.open("GET", url, true);

    req.onload = function () {
      if (req.status === 200) {
        resolve();
      } else {
        reject();
      }
    };

    req.send(null);
  });
};

var supportedPrefetchStrategy = support("prefetch") ? linkPrefetchStrategy : xhrPrefetchStrategy;
var preFetched = {};

var prefetch = function prefetch(url, options) {
  return new Promise(function (resolve) {
    if (preFetched[url]) {
      resolve();
      return;
    }

    supportedPrefetchStrategy(url, options).then(function () {
      resolve();
      preFetched[url] = true;
    }).catch(function () {}); // 404s are logged to the console anyway
  });
};

/* harmony default export */ __webpack_exports__["default"] = (prefetch);

/***/ }),

/***/ "./.cache/public-page-renderer.js":
/*!****************************************!*\
  !*** ./.cache/public-page-renderer.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var preferDefault = function preferDefault(m) {
  return m && m.default || m;
};

if (false) {} else if (false) {} else {
  module.exports = function () {
    return null;
  };
}

/***/ }),

/***/ "./.cache/strip-prefix.js":
/*!********************************!*\
  !*** ./.cache/strip-prefix.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return stripPrefix; });
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.slice */ "core-js/modules/es.array.slice");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_starts_with__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.starts-with */ "core-js/modules/es.string.starts-with");
/* harmony import */ var core_js_modules_es_string_starts_with__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_starts_with__WEBPACK_IMPORTED_MODULE_1__);



/**
 * Remove a prefix from a string. Return the input string if the given prefix
 * isn't found.
 */
function stripPrefix(str, prefix) {
  if (prefix === void 0) {
    prefix = "";
  }

  if (!prefix) {
    return str;
  }

  if (str === prefix) {
    return "/";
  }

  if (str.startsWith(prefix + "/")) {
    return str.slice(prefix.length);
  }

  return str;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inheritsLoose.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inheritsLoose.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

module.exports = _inheritsLoose;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@reach/router/lib/utils.js":
/*!*************************************************!*\
  !*** ./node_modules/@reach/router/lib/utils.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.shallowCompare = exports.validateRedirect = exports.insertParams = exports.resolve = exports.match = exports.pick = exports.startsWith = undefined;

var _invariant = __webpack_require__(/*! invariant */ "./node_modules/invariant/invariant.js");

var _invariant2 = _interopRequireDefault(_invariant);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

////////////////////////////////////////////////////////////////////////////////
// startsWith(string, search) - Check if `string` starts with `search`
var startsWith = function startsWith(string, search) {
  return string.substr(0, search.length) === search;
};

////////////////////////////////////////////////////////////////////////////////
// pick(routes, uri)
//
// Ranks and picks the best route to match. Each segment gets the highest
// amount of points, then the type of segment gets an additional amount of
// points where
//
//     static > dynamic > splat > root
//
// This way we don't have to worry about the order of our routes, let the
// computers do it.
//
// A route looks like this
//
//     { path, default, value }
//
// And a returned match looks like:
//
//     { route, params, uri }
//
// I know, I should use TypeScript not comments for these types.
var pick = function pick(routes, uri) {
  var match = void 0;
  var default_ = void 0;

  var _uri$split = uri.split("?"),
      uriPathname = _uri$split[0];

  var uriSegments = segmentize(uriPathname);
  var isRootUri = uriSegments[0] === "";
  var ranked = rankRoutes(routes);

  for (var i = 0, l = ranked.length; i < l; i++) {
    var missed = false;
    var route = ranked[i].route;

    if (route.default) {
      default_ = {
        route: route,
        params: {},
        uri: uri
      };
      continue;
    }

    var routeSegments = segmentize(route.path);
    var params = {};
    var max = Math.max(uriSegments.length, routeSegments.length);
    var index = 0;

    for (; index < max; index++) {
      var routeSegment = routeSegments[index];
      var uriSegment = uriSegments[index];

      if (isSplat(routeSegment)) {
        // Hit a splat, just grab the rest, and return a match
        // uri:   /files/documents/work
        // route: /files/*
        var param = routeSegment.slice(1) || "*";
        params[param] = uriSegments.slice(index).map(decodeURIComponent).join("/");
        break;
      }

      if (uriSegment === undefined) {
        // URI is shorter than the route, no match
        // uri:   /users
        // route: /users/:userId
        missed = true;
        break;
      }

      var dynamicMatch = paramRe.exec(routeSegment);

      if (dynamicMatch && !isRootUri) {
        var matchIsNotReserved = reservedNames.indexOf(dynamicMatch[1]) === -1;
        !matchIsNotReserved ?  true ? (0, _invariant2.default)(false, "<Router> dynamic segment \"" + dynamicMatch[1] + "\" is a reserved name. Please use a different name in path \"" + route.path + "\".") : undefined : void 0;
        var value = decodeURIComponent(uriSegment);
        params[dynamicMatch[1]] = value;
      } else if (routeSegment !== uriSegment) {
        // Current segments don't match, not dynamic, not splat, so no match
        // uri:   /users/123/settings
        // route: /users/:id/profile
        missed = true;
        break;
      }
    }

    if (!missed) {
      match = {
        route: route,
        params: params,
        uri: "/" + uriSegments.slice(0, index).join("/")
      };
      break;
    }
  }

  return match || default_ || null;
};

////////////////////////////////////////////////////////////////////////////////
// match(path, uri) - Matches just one path to a uri, also lol
var match = function match(path, uri) {
  return pick([{ path: path }], uri);
};

////////////////////////////////////////////////////////////////////////////////
// resolve(to, basepath)
//
// Resolves URIs as though every path is a directory, no files.  Relative URIs
// in the browser can feel awkward because not only can you be "in a directory"
// you can be "at a file", too. For example
//
//     browserSpecResolve('foo', '/bar/') => /bar/foo
//     browserSpecResolve('foo', '/bar') => /foo
//
// But on the command line of a file system, it's not as complicated, you can't
// `cd` from a file, only directories.  This way, links have to know less about
// their current path. To go deeper you can do this:
//
//     <Link to="deeper"/>
//     // instead of
//     <Link to=`{${props.uri}/deeper}`/>
//
// Just like `cd`, if you want to go deeper from the command line, you do this:
//
//     cd deeper
//     # not
//     cd $(pwd)/deeper
//
// By treating every path as a directory, linking to relative paths should
// require less contextual information and (fingers crossed) be more intuitive.
var resolve = function resolve(to, base) {
  // /foo/bar, /baz/qux => /foo/bar
  if (startsWith(to, "/")) {
    return to;
  }

  var _to$split = to.split("?"),
      toPathname = _to$split[0],
      toQuery = _to$split[1];

  var _base$split = base.split("?"),
      basePathname = _base$split[0];

  var toSegments = segmentize(toPathname);
  var baseSegments = segmentize(basePathname);

  // ?a=b, /users?b=c => /users?a=b
  if (toSegments[0] === "") {
    return addQuery(basePathname, toQuery);
  }

  // profile, /users/789 => /users/789/profile
  if (!startsWith(toSegments[0], ".")) {
    var pathname = baseSegments.concat(toSegments).join("/");
    return addQuery((basePathname === "/" ? "" : "/") + pathname, toQuery);
  }

  // ./         /users/123  =>  /users/123
  // ../        /users/123  =>  /users
  // ../..      /users/123  =>  /
  // ../../one  /a/b/c/d    =>  /a/b/one
  // .././one   /a/b/c/d    =>  /a/b/c/one
  var allSegments = baseSegments.concat(toSegments);
  var segments = [];
  for (var i = 0, l = allSegments.length; i < l; i++) {
    var segment = allSegments[i];
    if (segment === "..") segments.pop();else if (segment !== ".") segments.push(segment);
  }

  return addQuery("/" + segments.join("/"), toQuery);
};

////////////////////////////////////////////////////////////////////////////////
// insertParams(path, params)

var insertParams = function insertParams(path, params) {
  var _path$split = path.split("?"),
      pathBase = _path$split[0],
      _path$split$ = _path$split[1],
      query = _path$split$ === undefined ? "" : _path$split$;

  var segments = segmentize(pathBase);
  var constructedPath = "/" + segments.map(function (segment) {
    var match = paramRe.exec(segment);
    return match ? params[match[1]] : segment;
  }).join("/");
  var _params$location = params.location;
  _params$location = _params$location === undefined ? {} : _params$location;
  var _params$location$sear = _params$location.search,
      search = _params$location$sear === undefined ? "" : _params$location$sear;

  var searchSplit = search.split("?")[1] || "";
  constructedPath = addQuery(constructedPath, query, searchSplit);
  return constructedPath;
};

var validateRedirect = function validateRedirect(from, to) {
  var filter = function filter(segment) {
    return isDynamic(segment);
  };
  var fromString = segmentize(from).filter(filter).sort().join("/");
  var toString = segmentize(to).filter(filter).sort().join("/");
  return fromString === toString;
};

////////////////////////////////////////////////////////////////////////////////
// Junk
var paramRe = /^:(.+)/;

var SEGMENT_POINTS = 4;
var STATIC_POINTS = 3;
var DYNAMIC_POINTS = 2;
var SPLAT_PENALTY = 1;
var ROOT_POINTS = 1;

var isRootSegment = function isRootSegment(segment) {
  return segment === "";
};
var isDynamic = function isDynamic(segment) {
  return paramRe.test(segment);
};
var isSplat = function isSplat(segment) {
  return segment && segment[0] === "*";
};

var rankRoute = function rankRoute(route, index) {
  var score = route.default ? 0 : segmentize(route.path).reduce(function (score, segment) {
    score += SEGMENT_POINTS;
    if (isRootSegment(segment)) score += ROOT_POINTS;else if (isDynamic(segment)) score += DYNAMIC_POINTS;else if (isSplat(segment)) score -= SEGMENT_POINTS + SPLAT_PENALTY;else score += STATIC_POINTS;
    return score;
  }, 0);
  return { route: route, score: score, index: index };
};

var rankRoutes = function rankRoutes(routes) {
  return routes.map(rankRoute).sort(function (a, b) {
    return a.score < b.score ? 1 : a.score > b.score ? -1 : a.index - b.index;
  });
};

var segmentize = function segmentize(uri) {
  return uri
  // strip starting/ending slashes
  .replace(/(^\/+|\/+$)/g, "").split("/");
};

var addQuery = function addQuery(pathname) {
  for (var _len = arguments.length, query = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    query[_key - 1] = arguments[_key];
  }

  query = query.filter(function (q) {
    return q && q.length > 0;
  });
  return pathname + (query && query.length > 0 ? "?" + query.join("&") : "");
};

var reservedNames = ["uri", "path"];

/**
 * Shallow compares two objects.
 * @param {Object} obj1 The first object to compare.
 * @param {Object} obj2 The second object to compare.
 */
var shallowCompare = function shallowCompare(obj1, obj2) {
  var obj1Keys = Object.keys(obj1);
  return obj1Keys.length === Object.keys(obj2).length && obj1Keys.every(function (key) {
    return obj2.hasOwnProperty(key) && obj1[key] === obj2[key];
  });
};

////////////////////////////////////////////////////////////////////////////////
exports.startsWith = startsWith;
exports.pick = pick;
exports.match = match;
exports.resolve = resolve;
exports.insertParams = insertParams;
exports.validateRedirect = validateRedirect;
exports.shallowCompare = shallowCompare;

/***/ }),

/***/ "./node_modules/gatsby-link/index.js":
/*!*******************************************!*\
  !*** ./node_modules/gatsby-link/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.withPrefix = withPrefix;
exports.withAssetPrefix = withAssetPrefix;
exports.navigateTo = exports.replace = exports.push = exports.navigate = exports.default = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js"));

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! @reach/router */ "@reach/router");

var _utils = __webpack_require__(/*! @reach/router/lib/utils */ "./node_modules/@reach/router/lib/utils.js");

var _parsePath = __webpack_require__(/*! ./parse-path */ "./node_modules/gatsby-link/parse-path.js");

exports.parsePath = _parsePath.parsePath;

var isAbsolutePath = function isAbsolutePath(path) {
  return path === null || path === void 0 ? void 0 : path.startsWith("/");
};

function withPrefix(path, prefix) {
  var _ref, _prefix;

  if (prefix === void 0) {
    prefix = "";
  }

  if (!isLocalLink(path)) {
    return path;
  }

  if (path.startsWith("./") || path.startsWith("../")) {
    return path;
  }

  var base = (_ref = (_prefix = prefix) !== null && _prefix !== void 0 ? _prefix : "") !== null && _ref !== void 0 ? _ref : "/";
  return "" + ((base === null || base === void 0 ? void 0 : base.endsWith("/")) ? base.slice(0, -1) : base) + (path.startsWith("/") ? path : "/" + path);
}

var isLocalLink = function isLocalLink(path) {
  return path && !path.startsWith("http://") && !path.startsWith("https://") && !path.startsWith("//");
};

function withAssetPrefix(path) {
  return withPrefix(path, "");
}

function absolutify(path, current) {
  // If it's already absolute, return as-is
  if (isAbsolutePath(path)) {
    return path;
  }

  return (0, _utils.resolve)(path, current);
}

var rewriteLinkPath = function rewriteLinkPath(path, relativeTo) {
  if (!isLocalLink(path)) {
    return path;
  }

  return isAbsolutePath(path) ? withPrefix(path) : absolutify(path, relativeTo);
};

var NavLinkPropTypes = {
  activeClassName: _propTypes.default.string,
  activeStyle: _propTypes.default.object,
  partiallyActive: _propTypes.default.bool
}; // Set up IntersectionObserver

var createIntersectionObserver = function createIntersectionObserver(el, cb) {
  var io = new window.IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (el === entry.target) {
        // Check if element is within viewport, remove listener, destroy observer, and run link callback.
        // MSEdge doesn't currently support isIntersecting, so also test for  an intersectionRatio > 0
        if (entry.isIntersecting || entry.intersectionRatio > 0) {
          io.unobserve(el);
          io.disconnect();
          cb();
        }
      }
    });
  }); // Add element to the observer

  io.observe(el);
  return {
    instance: io,
    el: el
  };
};

var GatsbyLink = /*#__PURE__*/function (_React$Component) {
  (0, _inheritsLoose2.default)(GatsbyLink, _React$Component);

  function GatsbyLink(props) {
    var _this;

    _this = _React$Component.call(this, props) || this; // Default to no support for IntersectionObserver

    _this.defaultGetProps = function (_ref2) {
      var isPartiallyCurrent = _ref2.isPartiallyCurrent,
          isCurrent = _ref2.isCurrent;

      if (_this.props.partiallyActive ? isPartiallyCurrent : isCurrent) {
        return {
          className: [_this.props.className, _this.props.activeClassName].filter(Boolean).join(" "),
          style: (0, _extends2.default)({}, _this.props.style, _this.props.activeStyle)
        };
      }

      return null;
    };

    var IOSupported = false;

    if (typeof window !== "undefined" && window.IntersectionObserver) {
      IOSupported = true;
    }

    _this.state = {
      IOSupported: IOSupported
    };
    _this.handleRef = _this.handleRef.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  var _proto = GatsbyLink.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    // Preserve non IO functionality if no support
    if (this.props.to !== prevProps.to && !this.state.IOSupported) {
      ___loader.enqueue((0, _parsePath.parsePath)(rewriteLinkPath(this.props.to, window.location.pathname)).pathname);
    }
  };

  _proto.componentDidMount = function componentDidMount() {
    // Preserve non IO functionality if no support
    if (!this.state.IOSupported) {
      ___loader.enqueue((0, _parsePath.parsePath)(rewriteLinkPath(this.props.to, window.location.pathname)).pathname);
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (!this.io) {
      return;
    }

    var _this$io = this.io,
        instance = _this$io.instance,
        el = _this$io.el;
    instance.unobserve(el);
    instance.disconnect();
  };

  _proto.handleRef = function handleRef(ref) {
    var _this2 = this;

    if (this.props.innerRef && this.props.innerRef.hasOwnProperty("current")) {
      this.props.innerRef.current = ref;
    } else if (this.props.innerRef) {
      this.props.innerRef(ref);
    }

    if (this.state.IOSupported && ref) {
      // If IO supported and element reference found, setup Observer functionality
      this.io = createIntersectionObserver(ref, function () {
        ___loader.enqueue((0, _parsePath.parsePath)(rewriteLinkPath(_this2.props.to, window.location.pathname)).pathname);
      });
    }
  };

  _proto.render = function render() {
    var _this3 = this;

    var _this$props = this.props,
        to = _this$props.to,
        _this$props$getProps = _this$props.getProps,
        getProps = _this$props$getProps === void 0 ? this.defaultGetProps : _this$props$getProps,
        _onClick = _this$props.onClick,
        _onMouseEnter = _this$props.onMouseEnter,
        $activeClassName = _this$props.activeClassName,
        $activeStyle = _this$props.activeStyle,
        $innerRef = _this$props.innerRef,
        partiallyActive = _this$props.partiallyActive,
        state = _this$props.state,
        replace = _this$props.replace,
        rest = (0, _objectWithoutPropertiesLoose2.default)(_this$props, ["to", "getProps", "onClick", "onMouseEnter", "activeClassName", "activeStyle", "innerRef", "partiallyActive", "state", "replace"]);

    if ( true && !isLocalLink(to)) {
      console.warn("External link " + to + " was detected in a Link component. Use the Link component only for internal links. See: https://gatsby.dev/internal-links");
    }

    return /*#__PURE__*/_react.default.createElement(_router.Location, null, function (_ref3) {
      var location = _ref3.location;
      var prefixedTo = rewriteLinkPath(to, location.pathname);
      return isLocalLink(prefixedTo) ? /*#__PURE__*/_react.default.createElement(_router.Link, (0, _extends2.default)({
        to: prefixedTo,
        state: state,
        getProps: getProps,
        innerRef: _this3.handleRef,
        onMouseEnter: function onMouseEnter(e) {
          if (_onMouseEnter) {
            _onMouseEnter(e);
          }

          ___loader.hovering((0, _parsePath.parsePath)(prefixedTo).pathname);
        },
        onClick: function onClick(e) {
          if (_onClick) {
            _onClick(e);
          }

          if (e.button === 0 && // ignore right clicks
          !_this3.props.target && // let browser handle "target=_blank"
          !e.defaultPrevented && // onClick prevented default
          !e.metaKey && // ignore clicks with modifier keys...
          !e.altKey && !e.ctrlKey && !e.shiftKey) {
            e.preventDefault();
            var shouldReplace = replace;
            var isCurrent = encodeURI(prefixedTo) === window.location.pathname;

            if (typeof replace !== "boolean" && isCurrent) {
              shouldReplace = true;
            } // Make sure the necessary scripts and data are
            // loaded before continuing.


            window.___navigate(prefixedTo, {
              state: state,
              replace: shouldReplace
            });
          }

          return true;
        }
      }, rest)) : /*#__PURE__*/_react.default.createElement("a", (0, _extends2.default)({
        href: prefixedTo
      }, rest));
    });
  };

  return GatsbyLink;
}(_react.default.Component);

GatsbyLink.propTypes = (0, _extends2.default)({}, NavLinkPropTypes, {
  onClick: _propTypes.default.func,
  to: _propTypes.default.string.isRequired,
  replace: _propTypes.default.bool,
  state: _propTypes.default.object
});

var showDeprecationWarning = function showDeprecationWarning(functionName, altFunctionName, version) {
  return console.warn("The \"" + functionName + "\" method is now deprecated and will be removed in Gatsby v" + version + ". Please use \"" + altFunctionName + "\" instead.");
};

var _default = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  return /*#__PURE__*/_react.default.createElement(GatsbyLink, (0, _extends2.default)({
    innerRef: ref
  }, props));
});

exports.default = _default;

var navigate = function navigate(to, options) {
  window.___navigate(rewriteLinkPath(to, window.location.pathname), options);
};

exports.navigate = navigate;

var push = function push(to) {
  showDeprecationWarning("push", "navigate", 3);

  window.___push(rewriteLinkPath(to, window.location.pathname));
};

exports.push = push;

var replace = function replace(to) {
  showDeprecationWarning("replace", "navigate", 3);

  window.___replace(rewriteLinkPath(to, window.location.pathname));
}; // TODO: Remove navigateTo for Gatsby v3


exports.replace = replace;

var navigateTo = function navigateTo(to) {
  showDeprecationWarning("navigateTo", "navigate", 3);
  return push(to);
};

exports.navigateTo = navigateTo;

/***/ }),

/***/ "./node_modules/gatsby-link/parse-path.js":
/*!************************************************!*\
  !*** ./node_modules/gatsby-link/parse-path.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parsePath = parsePath;

function parsePath(path) {
  var pathname = path || "/";
  var search = "";
  var hash = "";
  var hashIndex = pathname.indexOf("#");

  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf("?");

  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === "?" ? "" : search,
    hash: hash === "#" ? "" : hash
  };
}

/***/ }),

/***/ "./node_modules/gatsby-plugin-manifest/common.js":
/*!*******************************************************!*\
  !*** ./node_modules/gatsby-plugin-manifest/common.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.function.name */ "core-js/modules/es.function.name");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _fs = _interopRequireDefault(__webpack_require__(/*! fs */ "fs"));

var _path = _interopRequireDefault(__webpack_require__(/*! path */ "path"));

exports.favicons = [{
  src: "favicon-32x32.png",
  sizes: "32x32",
  type: "image/png"
}]; // default icons for generating icons

exports.defaultIcons = [{
  src: "icons/icon-48x48.png",
  sizes: "48x48",
  type: "image/png"
}, {
  src: "icons/icon-72x72.png",
  sizes: "72x72",
  type: "image/png"
}, {
  src: "icons/icon-96x96.png",
  sizes: "96x96",
  type: "image/png"
}, {
  src: "icons/icon-144x144.png",
  sizes: "144x144",
  type: "image/png"
}, {
  src: "icons/icon-192x192.png",
  sizes: "192x192",
  type: "image/png"
}, {
  src: "icons/icon-256x256.png",
  sizes: "256x256",
  type: "image/png"
}, {
  src: "icons/icon-384x384.png",
  sizes: "384x384",
  type: "image/png"
}, {
  src: "icons/icon-512x512.png",
  sizes: "512x512",
  type: "image/png"
}];
/**
 * Check if the icon exists on the filesystem
 *
 * @param {String} srcIcon Path of the icon
 */

exports.doesIconExist = function doesIconExist(srcIcon) {
  try {
    return _fs.default.statSync(srcIcon).isFile();
  } catch (e) {
    if (e.code !== "ENOENT") {
      throw e;
    }

    return false;
  }
};
/**
 * @param {string} path The generic path to an icon
 * @param {string} digest The digest of the icon provided in the plugin's options.
 */


exports.addDigestToPath = function (path, digest, method) {
  if (method === "name") {
    var parsedPath = _path.default.parse(path);

    return parsedPath.dir + "/" + parsedPath.name + "-" + digest + parsedPath.ext;
  }

  if (method === "query") {
    return path + "?v=" + digest;
  }

  return path;
};

/***/ }),

/***/ "./node_modules/gatsby-plugin-manifest/gatsby-ssr.js":
/*!***********************************************************!*\
  !*** ./node_modules/gatsby-plugin-manifest/gatsby-ssr.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.for-each */ "core-js/modules/es.array.for-each");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "core-js/modules/web.dom-collections.for-each");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var React = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _gatsby = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");

var _common = __webpack_require__(/*! ./common.js */ "./node_modules/gatsby-plugin-manifest/common.js");

var _getManifestPathname = _interopRequireDefault(__webpack_require__(/*! ./get-manifest-pathname */ "./node_modules/gatsby-plugin-manifest/get-manifest-pathname.js")); // TODO: remove for v3


var withPrefix = _gatsby.withAssetPrefix || _gatsby.withPrefix;

exports.onRenderBody = function (_ref, _ref2) {
  var setHeadComponents = _ref.setHeadComponents,
      _ref$pathname = _ref.pathname,
      pathname = _ref$pathname === void 0 ? "/" : _ref$pathname;
  var localize = _ref2.localize,
      legacy = _ref2.legacy,
      cacheBusting = _ref2.cache_busting_mode,
      cacheDigest = _ref2.cacheDigest,
      icon = _ref2.icon,
      pluginIcons = _ref2.icons,
      insertFaviconLinkTag = _ref2.include_favicon,
      insertMetaTag = _ref2.theme_color_in_head,
      theme_color = _ref2.theme_color,
      crossOrigin = _ref2.crossOrigin; // We use this to build a final array to pass as the argument to setHeadComponents at the end of onRenderBody.

  var headComponents = [];
  var srcIconExists = !!icon;
  var icons = pluginIcons || _common.defaultIcons;
  var manifestFileName = (0, _getManifestPathname.default)(pathname, localize); // If icons were generated, also add a favicon link.

  if (srcIconExists) {
    if (insertFaviconLinkTag) {
      _common.favicons.forEach(function (favicon) {
        headComponents.push( /*#__PURE__*/React.createElement("link", {
          key: "gatsby-plugin-manifest-icon-link",
          rel: "icon",
          href: withPrefix((0, _common.addDigestToPath)(favicon.src, cacheDigest, cacheBusting))
        }));
      });
    }
  } // Add manifest link tag.


  headComponents.push( /*#__PURE__*/React.createElement("link", {
    key: "gatsby-plugin-manifest-link",
    rel: "manifest",
    href: withPrefix("/" + manifestFileName),
    crossOrigin: crossOrigin
  })); // The user has an option to opt out of the theme_color meta tag being inserted into the head.

  if (theme_color && insertMetaTag) {
    headComponents.push( /*#__PURE__*/React.createElement("meta", {
      key: "gatsby-plugin-manifest-meta",
      name: "theme-color",
      content: theme_color
    }));
  }

  if (legacy) {
    icons.forEach(function (icon) {
      headComponents.push( /*#__PURE__*/React.createElement("link", {
        key: "gatsby-plugin-manifest-apple-touch-icon-" + icon.sizes,
        rel: "apple-touch-icon",
        sizes: icon.sizes,
        href: withPrefix((0, _common.addDigestToPath)(icon.src, cacheDigest, srcIconExists ? cacheBusting : "none"))
      }));
    });
  }

  setHeadComponents(headComponents);
  return true;
};

/***/ }),

/***/ "./node_modules/gatsby-plugin-manifest/get-manifest-pathname.js":
/*!**********************************************************************!*\
  !*** ./node_modules/gatsby-plugin-manifest/get-manifest-pathname.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.find */ "core-js/modules/es.array.find");

__webpack_require__(/*! core-js/modules/es.string.starts-with */ "core-js/modules/es.string.starts-with");

exports.__esModule = true;
exports.default = void 0;
/**
 * Get a manifest filename depending on localized pathname
 *
 * @param {string} pathname
 * @param {Array<{start_url: string, lang: string}>} localizedManifests
 * @return string
 */

var _default = function _default(pathname, localizedManifests) {
  var defaultFilename = "manifest.webmanifest";

  if (!Array.isArray(localizedManifests)) {
    return defaultFilename;
  }

  var localizedManifest = localizedManifests.find(function (app) {
    return pathname.startsWith(app.start_url);
  });

  if (!localizedManifest) {
    return defaultFilename;
  }

  return "manifest_" + localizedManifest.lang + ".webmanifest";
};

exports.default = _default;

/***/ }),

/***/ "./node_modules/gatsby-plugin-offline/gatsby-ssr.js":
/*!**********************************************************!*\
  !*** ./node_modules/gatsby-plugin-offline/gatsby-ssr.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.array.filter */ "core-js/modules/es.array.filter");

__webpack_require__(/*! core-js/modules/es.string.starts-with */ "core-js/modules/es.string.starts-with");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.onRenderBody = exports.onPreRenderHTML = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var onPreRenderHTML = function onPreRenderHTML(_ref) {
  var getHeadComponents = _ref.getHeadComponents,
      pathname = _ref.pathname,
      replaceHeadComponents = _ref.replaceHeadComponents;
  if (pathname !== "/offline-plugin-app-shell-fallback/") return;
  var headComponents = getHeadComponents();
  var filteredHeadComponents = headComponents.filter(function (_ref2) {
    var type = _ref2.type,
        props = _ref2.props;
    return !(type === "link" && props.as === "fetch" && props.rel === "preload" && (props.href.startsWith("/static/d/") || props.href.startsWith("/page-data/")));
  });
  replaceHeadComponents(filteredHeadComponents);
};

exports.onPreRenderHTML = onPreRenderHTML;

var onRenderBody = function onRenderBody(_ref3) {
  var pathname = _ref3.pathname,
      setHeadComponents = _ref3.setHeadComponents;

  if (pathname !== "/offline-plugin-app-shell-fallback/") {
    return;
  }

  setHeadComponents([/*#__PURE__*/_react.default.createElement("noscript", {
    key: "disable-offline-shell"
  }, /*#__PURE__*/_react.default.createElement("meta", {
    httpEquiv: "refresh",
    content: "0;url=/.gatsby-plugin-offline:api=disableOfflineShell&redirect=true"
  }))]);
};

exports.onRenderBody = onRenderBody;

/***/ }),

/***/ "./node_modules/gatsby-plugin-react-helmet/gatsby-ssr.js":
/*!***************************************************************!*\
  !*** ./node_modules/gatsby-plugin-react-helmet/gatsby-ssr.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! core-js/modules/es.string.link */ "core-js/modules/es.string.link");

exports.__esModule = true;
exports.onRenderBody = void 0;

var _reactHelmet = __webpack_require__(/*! react-helmet */ "react-helmet");

var onRenderBody = function onRenderBody(_ref) {
  var setHeadComponents = _ref.setHeadComponents,
      setHtmlAttributes = _ref.setHtmlAttributes,
      setBodyAttributes = _ref.setBodyAttributes;

  var helmet = _reactHelmet.Helmet.renderStatic(); // These action functions were added partway through the Gatsby 1.x cycle.


  if (setHtmlAttributes) {
    setHtmlAttributes(helmet.htmlAttributes.toComponent());
  }

  if (setBodyAttributes) {
    setBodyAttributes(helmet.bodyAttributes.toComponent());
  }

  setHeadComponents([helmet.title.toComponent(), helmet.link.toComponent(), helmet.meta.toComponent(), helmet.noscript.toComponent(), helmet.script.toComponent(), helmet.style.toComponent(), helmet.base.toComponent()]);
};

exports.onRenderBody = onRenderBody;

/***/ }),

/***/ "./node_modules/invariant/invariant.js":
/*!*********************************************!*\
  !*** ./node_modules/invariant/invariant.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var NODE_ENV = "development";

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;


/***/ }),

/***/ "./node_modules/mitt/dist/mitt.es.js":
/*!*******************************************!*\
  !*** ./node_modules/mitt/dist/mitt.es.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//      
// An event handler can take an optional event argument
// and should not return a value
                                          
                                                               

// An array of all currently registered event handlers for a type
                                            
                                                            
// A map of event types and their corresponding event handlers.
                        
                                 
                                   
  

/** Mitt: Tiny (~200b) functional event emitter / pubsub.
 *  @name mitt
 *  @returns {Mitt}
 */
function mitt(all                 ) {
	all = all || Object.create(null);

	return {
		/**
		 * Register an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to listen for, or `"*"` for all events
		 * @param  {Function} handler Function to call in response to given event
		 * @memberOf mitt
		 */
		on: function on(type        , handler              ) {
			(all[type] || (all[type] = [])).push(handler);
		},

		/**
		 * Remove an event handler for the given type.
		 *
		 * @param  {String} type	Type of event to unregister `handler` from, or `"*"`
		 * @param  {Function} handler Handler function to remove
		 * @memberOf mitt
		 */
		off: function off(type        , handler              ) {
			if (all[type]) {
				all[type].splice(all[type].indexOf(handler) >>> 0, 1);
			}
		},

		/**
		 * Invoke all handlers for the given type.
		 * If present, `"*"` handlers are invoked after type-matched handlers.
		 *
		 * @param {String} type  The event type to invoke
		 * @param {Any} [evt]  Any value (object is recommended and powerful), passed to each handler
		 * @memberOf mitt
		 */
		emit: function emit(type        , evt     ) {
			(all[type] || []).slice().map(function (handler) { handler(evt); });
			(all['*'] || []).slice().map(function (handler) { handler(type, evt); });
		}
	};
}

/* harmony default export */ __webpack_exports__["default"] = (mitt);
//# sourceMappingURL=mitt.es.js.map


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./src/html.js":
/*!*********************!*\
  !*** ./src/html.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/gatsby/dist/utils/babel-loader.js):\nSyntaxError: /Users/danielmonk/Sites/ritzy-new/src/html.js: Unexpected token (24:9)\n\n\u001b[0m \u001b[90m 22 | \u001b[39m        \u001b[33m<\u001b[39m\u001b[33mlink\u001b[39m rel\u001b[33m=\u001b[39m\u001b[32m\"manifest\"\u001b[39m href\u001b[33m=\u001b[39m{manifest} \u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 23 | \u001b[39m        \u001b[33m<\u001b[39m\u001b[33mlink\u001b[39m rel\u001b[33m=\u001b[39m\u001b[32m\"shortcut icon\"\u001b[39m href\u001b[33m=\u001b[39m{faviconICO} \u001b[33m/\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 24 | \u001b[39m        \u001b[33m<\u001b[39m\u001b[33m!\u001b[39m\u001b[33m--\u001b[39m \u001b[33mGlobal\u001b[39m site tag (gtag\u001b[33m.\u001b[39mjs) \u001b[33m-\u001b[39m \u001b[33mGoogle\u001b[39m \u001b[33mAnalytics\u001b[39m \u001b[33m--\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    | \u001b[39m         \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 25 | \u001b[39m        \u001b[33m<\u001b[39m\u001b[33mscript\u001b[39m async src\u001b[33m=\u001b[39m\u001b[32m\"https://www.googletagmanager.com/gtag/js?id=UA-76115201-5\"\u001b[39m\u001b[33m>\u001b[39m\u001b[33m<\u001b[39m\u001b[33m/\u001b[39m\u001b[33mscript\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 26 | \u001b[39m        \u001b[33m<\u001b[39m\u001b[33mscript\u001b[39m\u001b[33m>\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 27 | \u001b[39m          window\u001b[33m.\u001b[39mdataLayer \u001b[33m=\u001b[39m window\u001b[33m.\u001b[39mdataLayer \u001b[33m||\u001b[39m []\u001b[33m;\u001b[39m\u001b[0m\n    at Object._raise (/Users/danielmonk/Sites/ritzy-new/node_modules/@babel/parser/lib/index.js:757:17)\n    at Object.raiseWithData (/Users/danielmonk/Sites/ritzy-new/node_modules/@babel/parser/lib/index.js:750:17)\n    at Object.raise (/Users/danielmonk/Sites/ritzy-new/node_modules/@babel/parser/lib/index.js:744:17)\n    at Object.unexpected (/Users/danielmonk/Sites/ritzy-new/node_modules/@babel/parser/lib/index.js:8834:16)\n    at Object.jsxParseIdentifier (/Users/danielmonk/Sites/ritzy-new/node_modules/@babel/parser/lib/index.js:4422:12)\n    at Object.jsxParseNamespacedName (/Users/danielmonk/Sites/ritzy-new/node_modules/@babel/parser/lib/index.js:4432:23)\n    at Object.jsxParseElementName (/Users/danielmonk/Sites/ritzy-new/node_modules/@babel/parser/lib/index.js:4443:21)\n    at Object.jsxParseOpeningElementAt (/Users/danielmonk/Sites/ritzy-new/node_modules/@babel/parser/lib/index.js:4529:22)\n    at Object.jsxParseElementAt (/Users/danielmonk/Sites/ritzy-new/node_modules/@babel/parser/lib/index.js:4562:33)\n    at Object.jsxParseElementAt (/Users/danielmonk/Sites/ritzy-new/node_modules/@babel/parser/lib/index.js:4578:32)\n    at Object.jsxParseElementAt (/Users/danielmonk/Sites/ritzy-new/node_modules/@babel/parser/lib/index.js:4578:32)\n    at Object.jsxParseElement (/Users/danielmonk/Sites/ritzy-new/node_modules/@babel/parser/lib/index.js:4636:17)\n    at Object.parseExprAtom (/Users/danielmonk/Sites/ritzy-new/node_modules/@babel/parser/lib/index.js:4643:19)\n    at Object.parseExprSubscripts (/Users/danielmonk/Sites/ritzy-new/node_modules/@babel/parser/lib/index.js:9688:23)\n    at Object.parseMaybeUnary (/Users/danielmonk/Sites/ritzy-new/node_modules/@babel/parser/lib/index.js:9668:21)\n    at Object.parseExprOps (/Users/danielmonk/Sites/ritzy-new/node_modules/@babel/parser/lib/index.js:9538:23)");

/***/ }),

/***/ "@reach/router":
/*!****************************************************************************************!*\
  !*** external "/Users/danielmonk/Sites/ritzy-new/node_modules/@reach/router/index.js" ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__reach_router__;

/***/ }),

/***/ "core-js/modules/es.array.concat":
/*!****************************************************************************************************!*\
  !*** external "/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.array.concat.js" ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es_array_concat__;

/***/ }),

/***/ "core-js/modules/es.array.filter":
/*!****************************************************************************************************!*\
  !*** external "/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.array.filter.js" ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es_array_filter__;

/***/ }),

/***/ "core-js/modules/es.array.find":
/*!**************************************************************************************************!*\
  !*** external "/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.array.find.js" ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es_array_find__;

/***/ }),

/***/ "core-js/modules/es.array.for-each":
/*!******************************************************************************************************!*\
  !*** external "/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.array.for-each.js" ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es_array_for_each__;

/***/ }),

/***/ "core-js/modules/es.array.from":
/*!**************************************************************************************************!*\
  !*** external "/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.array.from.js" ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es_array_from__;

/***/ }),

/***/ "core-js/modules/es.array.includes":
/*!******************************************************************************************************!*\
  !*** external "/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.array.includes.js" ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es_array_includes__;

/***/ }),

/***/ "core-js/modules/es.array.iterator":
/*!******************************************************************************************************!*\
  !*** external "/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.array.iterator.js" ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es_array_iterator__;

/***/ }),

/***/ "core-js/modules/es.array.map":
/*!*************************************************************************************************!*\
  !*** external "/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.array.map.js" ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es_array_map__;

/***/ }),

/***/ "core-js/modules/es.array.slice":
/*!***************************************************************************************************!*\
  !*** external "/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.array.slice.js" ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es_array_slice__;

/***/ }),

/***/ "core-js/modules/es.array.some":
/*!**************************************************************************************************!*\
  !*** external "/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.array.some.js" ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es_array_some__;

/***/ }),

/***/ "core-js/modules/es.function.name":
/*!*****************************************************************************************************!*\
  !*** external "/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.function.name.js" ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es_function_name__;

/***/ }),

/***/ "core-js/modules/es.map":
/*!*******************************************************************************************!*\
  !*** external "/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.map.js" ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es_map__;

/***/ }),

/***/ "core-js/modules/es.number.constructor":
/*!**********************************************************************************************************!*\
  !*** external "/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.number.constructor.js" ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es_number_constructor__;

/***/ }),

/***/ "core-js/modules/es.object.assign":
/*!*****************************************************************************************************!*\
  !*** external "/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.object.assign.js" ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es_object_assign__;

/***/ }),

/***/ "core-js/modules/es.object.keys":
/*!***************************************************************************************************!*\
  !*** external "/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.object.keys.js" ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es_object_keys__;

/***/ }),

/***/ "core-js/modules/es.object.to-string":
/*!********************************************************************************************************!*\
  !*** external "/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.object.to-string.js" ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es_object_to_string__;

/***/ }),

/***/ "core-js/modules/es.promise":
/*!***********************************************************************************************!*\
  !*** external "/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.promise.js" ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es_promise__;

/***/ }),

/***/ "core-js/modules/es.regexp.constructor":
/*!**********************************************************************************************************!*\
  !*** external "/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.regexp.constructor.js" ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es_regexp_constructor__;

/***/ }),

/***/ "core-js/modules/es.regexp.exec":
/*!***************************************************************************************************!*\
  !*** external "/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.regexp.exec.js" ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es_regexp_exec__;

/***/ }),

/***/ "core-js/modules/es.regexp.to-string":
/*!********************************************************************************************************!*\
  !*** external "/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.regexp.to-string.js" ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es_regexp_to_string__;

/***/ }),

/***/ "core-js/modules/es.set":
/*!*******************************************************************************************!*\
  !*** external "/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.set.js" ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es_set__;

/***/ }),

/***/ "core-js/modules/es.string.ends-with":
/*!********************************************************************************************************!*\
  !*** external "/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.string.ends-with.js" ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es_string_ends_with__;

/***/ }),

/***/ "core-js/modules/es.string.includes":
/*!*******************************************************************************************************!*\
  !*** external "/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.string.includes.js" ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es_string_includes__;

/***/ }),

/***/ "core-js/modules/es.string.iterator":
/*!*******************************************************************************************************!*\
  !*** external "/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.string.iterator.js" ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es_string_iterator__;

/***/ }),

/***/ "core-js/modules/es.string.link":
/*!***************************************************************************************************!*\
  !*** external "/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.string.link.js" ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es_string_link__;

/***/ }),

/***/ "core-js/modules/es.string.split":
/*!****************************************************************************************************!*\
  !*** external "/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.string.split.js" ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es_string_split__;

/***/ }),

/***/ "core-js/modules/es.string.starts-with":
/*!**********************************************************************************************************!*\
  !*** external "/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.string.starts-with.js" ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es_string_starts_with__;

/***/ }),

/***/ "core-js/modules/es.symbol":
/*!**********************************************************************************************!*\
  !*** external "/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.symbol.js" ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es_symbol__;

/***/ }),

/***/ "core-js/modules/es.symbol.description":
/*!**********************************************************************************************************!*\
  !*** external "/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.symbol.description.js" ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es_symbol_description__;

/***/ }),

/***/ "core-js/modules/es.symbol.iterator":
/*!*******************************************************************************************************!*\
  !*** external "/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/es.symbol.iterator.js" ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_es_symbol_iterator__;

/***/ }),

/***/ "core-js/modules/web.dom-collections.for-each":
/*!*****************************************************************************************************************!*\
  !*** external "/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/web.dom-collections.for-each.js" ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_web_dom_collections_for_each__;

/***/ }),

/***/ "core-js/modules/web.dom-collections.iterator":
/*!*****************************************************************************************************************!*\
  !*** external "/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/web.dom-collections.iterator.js" ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_web_dom_collections_iterator__;

/***/ }),

/***/ "core-js/modules/web.url":
/*!********************************************************************************************!*\
  !*** external "/Users/danielmonk/Sites/ritzy-new/node_modules/core-js/modules/web.url.js" ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_core_js_modules_web_url__;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_fs__;

/***/ }),

/***/ "lodash":
/*!**********************************************************************************!*\
  !*** external "/Users/danielmonk/Sites/ritzy-new/node_modules/lodash/lodash.js" ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash__;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_path__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_dom_server__;

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_helmet__;

/***/ })

/******/ });
});
//# sourceMappingURL=render-page.js.map