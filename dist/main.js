/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components sync recursive ^\\.\\/(?!.*(?:__tests__)).*\\.(jsx?)$":
/*!*************************************************************!*\
  !*** ./components sync ^\.\/(?!.*(?:__tests__)).*\.(jsx?)$ ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./benefits-desc/benefits-desc.js": "./components/benefits-desc/benefits-desc.js",
	"./bullet-list/bullet-list.js": "./components/bullet-list/bullet-list.js",
	"./button-text/button-text.js": "./components/button-text/button-text.js",
	"./button/button.js": "./components/button/button.js",
	"./calendar-filter/calendar-filter.js": "./components/calendar-filter/calendar-filter.js",
	"./calendar/calendar.js": "./components/calendar/calendar.js",
	"./card-login/card-login.js": "./components/card-login/card-login.js",
	"./card-reg/card-reg.js": "./components/card-reg/card-reg.js",
	"./card-select/card-select.js": "./components/card-select/card-select.js",
	"./card-slider/card-slider.js": "./components/card-slider/card-slider.js",
	"./card-tobook/card-tobook.js": "./components/card-tobook/card-tobook.js",
	"./checkbox/checkbox.js": "./components/checkbox/checkbox.js",
	"./comment/comment.js": "./components/comment/comment.js",
	"./copyright/copyright.js": "./components/copyright/copyright.js",
	"./dropdown-room/dropdown-room.js": "./components/dropdown-room/dropdown-room.js",
	"./exp-check-list/exp-check-list.js": "./components/exp-check-list/exp-check-list.js",
	"./footer/footer.js": "./components/footer/footer.js",
	"./gray-logo/gray-logo.js": "./components/gray-logo/gray-logo.js",
	"./header/header.js": "./components/header/header.js",
	"./like-butt/like-butt.js": "./components/like-butt/like-butt.js",
	"./main-logo/main-logo.js": "./components/main-logo/main-logo.js",
	"./menu/menu.js": "./components/menu/menu.js",
	"./pagination/pagination.js": "./components/pagination/pagination.js",
	"./radio-but/radio-but.js": "./components/radio-but/radio-but.js",
	"./range-slider/range-slider.js": "./components/range-slider/range-slider.js",
	"./rating-star/rating-star.js": "./components/rating-star/rating-star.js",
	"./rich-checkbox/rich-checkbox.js": "./components/rich-checkbox/rich-checkbox.js",
	"./room-num/room-num.js": "./components/room-num/room-num.js",
	"./socials/socials.js": "./components/socials/socials.js",
	"./text-bold-12/text-bold-12.js": "./components/text-bold-12/text-bold-12.js",
	"./text-head-foot/text-head-foot.js": "./components/text-head-foot/text-head-foot.js",
	"./text-input/text-input.js": "./components/text-input/text-input.js",
	"./toggle-but/toggle-but.js": "./components/toggle-but/toggle-but.js",
	"./votes-disc/votes-disc.js": "./components/votes-disc/votes-disc.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./components sync recursive ^\\.\\/(?!.*(?:__tests__)).*\\.(jsx?)$";

/***/ }),

/***/ "./components sync recursive ^\\.\\/(?!.*(?:__tests__)).*\\.(png)$":
/*!************************************************************!*\
  !*** ./components sync ^\.\/(?!.*(?:__tests__)).*\.(png)$ ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./comment/img/comment.png": "./components/comment/img/comment.png",
	"./comment/img/comment1.png": "./components/comment/img/comment1.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./components sync recursive ^\\.\\/(?!.*(?:__tests__)).*\\.(png)$";

/***/ }),

/***/ "./components/benefits-desc/benefits-desc.js":
/*!***************************************************!*\
  !*** ./components/benefits-desc/benefits-desc.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _benefits_desc_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./benefits-desc.scss */ "./components/benefits-desc/benefits-desc.scss");
/* harmony import */ var _benefits_desc_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_benefits_desc_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./components/benefits-desc/benefits-desc.scss":
/*!*****************************************************!*\
  !*** ./components/benefits-desc/benefits-desc.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./components/bullet-list/bullet-list.js":
/*!***********************************************!*\
  !*** ./components/bullet-list/bullet-list.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bullet_list_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bullet-list.scss */ "./components/bullet-list/bullet-list.scss");
/* harmony import */ var _bullet_list_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_bullet_list_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./components/bullet-list/bullet-list.scss":
/*!*************************************************!*\
  !*** ./components/bullet-list/bullet-list.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./components/button-text/button-text.js":
/*!***********************************************!*\
  !*** ./components/button-text/button-text.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _button_text_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button-text.scss */ "./components/button-text/button-text.scss");
/* harmony import */ var _button_text_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_button_text_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./components/button-text/button-text.scss":
/*!*************************************************!*\
  !*** ./components/button-text/button-text.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./components/button/button.js":
/*!*************************************!*\
  !*** ./components/button/button.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _button_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button.scss */ "./components/button/button.scss");
/* harmony import */ var _button_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_button_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./components/button/button.scss":
/*!***************************************!*\
  !*** ./components/button/button.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./components/calendar-filter/calendar-filter.js":
/*!*******************************************************!*\
  !*** ./components/calendar-filter/calendar-filter.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _calendar_filter_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calendar-filter.scss */ "./components/calendar-filter/calendar-filter.scss");
/* harmony import */ var _calendar_filter_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_calendar_filter_scss__WEBPACK_IMPORTED_MODULE_1__);


$(document).ready(function () {
  var timeNow = mostime();
  var yearNum = timeNow.getFullYear();
  var monthDiff = 0;
  var stage = 0; //- получение даты по московскому времени

  function mostime() {
    var diff = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var d = new Date();
    var utc = 3;
    d.setHours(d.getHours() + utc, d.getMinutes() + d.getTimezoneOffset());
    d.setMonth(d.getMonth() + diff);
    return d;
  } //- date1 > date2?


  function compareDates(date1, date2) {
    if (date1.year > date2.year) return true;else if (date1.year < date2.year) {
      return false;
    }
    ;
    if (date1.month > date2.month) return true;else if (date1.month < date2.month) {
      return false;
    }

    if (date1.year === date2.year) {
      if (date1.month === date2.month) {
        if (date1.date > date2.date) {
          return true;
        } else return false;
      } else return false;
    } else return false;
  }

  function calDateGen(diff) {
    var firstDay = mostime(diff);
    firstDay.setDate(1);
    var beforeDays = [];
    var dayBefore = mostime(diff);
    dayBefore.setDate(1);
    var totalElems = 0;
    $('.calendar-filter__dates').empty(); //- получаем массив объектов дат прошлого месяца

    if (firstDay.getDay() !== 1) {
      for (var i = 1; dayBefore.getDay() !== 1; i++) {
        var dayBefore = mostime(diff);
        dayBefore.setDate(1);
        dayBefore.setDate(dayBefore.getDate() - i);
        beforeDays.push(dayBefore);
      }

      beforeDays.reverse();
    } //- даты прошлого месяца


    beforeDays.forEach(function (item, i, arr) {
      $('.calendar-filter__dates').append("<div data-date=\"".concat(item.getDate(), "\" data-month=\"").concat(item.getMonth(), "\" data-year=\"").concat(item.getFullYear(), "\" class=\"calendar-filter__date calendar-filter__other-month\">").concat(item.getDate(), "</div>"));
      totalElems += 1;
    }); //- даты текущего месяца

    for (var i = 1; i <= 31; i++) {
      var thisMthday = mostime(diff);
      thisMthday.setDate(i);

      if (thisMthday.getMonth() === firstDay.getMonth()) {
        $('.calendar-filter__dates').append("<div data-date=\"".concat(thisMthday.getDate(), "\" data-month=\"").concat(thisMthday.getMonth(), "\" data-year=\"").concat(thisMthday.getFullYear(), "\" class=\"calendar-filter__date\">").concat(thisMthday.getDate(), "</div>"));
        totalElems += 1;
      }
    } //- даты следующего месяца


    if (!(totalElems % 7 === 0)) {
      for (var i = 1; !(totalElems % 7 === 0); i++) {
        var nextMthday = mostime(diff + 1);
        nextMthday.setDate(i);
        $('.calendar-filter__dates').append("<div data-date=\"".concat(nextMthday.getDate(), "\" data-month=\"").concat(nextMthday.getMonth(), "\" data-year=\"").concat(nextMthday.getFullYear(), "\" class=\"calendar-filter__date calendar-filter__other-month\">").concat(nextMthday.getDate(), "</div>"));
        totalElems += 1;
      }
    } //- подцветка сегоднешней даты


    $(".calendar-filter__date[data-date=\"".concat(timeNow.getDate(), "\"][data-month=\"").concat(timeNow.getMonth(), "\"][data-year=\"").concat(timeNow.getFullYear(), "\"]")).addClass('calendar-filter__curr-date'); //- нажатие на дату

    $('.calendar-filter__date').click(function () {
      if (stage === 1) {
        //- получаем обьект дата с кликнутой даты
        var dt = $(this).data();
        var arrData = $(this).parents('.calendar-filter').find('.calendar-filter__arrive-text').data(); //- получаем обьект дата из инпута прибытия
        //- дата отбытия больше даты прибытия

        if (compareDates(dt, arrData)) {
          var exit = $(this).parents('.calendar-filter').find('.calendar-filter__exit-text');
          var arrive = $(this).parents('.calendar-filter').find('.calendar-filter__arrive-text');
          var dtDate = $(this).data('date');
          var dtMonth = $(this).data('month');
          var dtYear = $(this).data('year');
          $(this).addClass('calendar-filter__date_selected');
          exit.data('date', dtDate);
          exit.data('month', dtMonth);
          exit.data('year', dtYear);
          arrive.val(arrive.val() + ' ' + "".concat(dtDate, " ").concat(getMounthByNum(dtMonth)));
          stage = 2;
        } //- дата прибытия больше даты отбытия


        if (compareDates(arrData, dt)) {
          $('.calendar-filter__date').each(function () {
            $(this).removeClass('calendar-filter__date_selected');
          });
          var arrive = $(this).parents('.calendar-filter').find('.calendar-filter__arrive-text');
          $(this).addClass('calendar-filter__date_selected');
          var dtDate = $(this).data('date');
          var dtMonth = $(this).data('month');
          var dtYear = $(this).data('year');
          arrive.data('date', dtDate);
          arrive.data('month', dtMonth);
          arrive.data('year', dtYear);
          arrive.val("".concat(dtDate, " ").concat(getMounthByNum(dtMonth), " -"));
          stage = 1;
        }
      }

      if (stage === 0) {
        stage = 1; //var dt = $(this).data();

        var arrive = $(this).parents('.calendar-filter').find('.calendar-filter__arrive-text');
        $(this).addClass('calendar-filter__date_selected');
        var dtDate = $(this).data('date');
        var dtMonth = $(this).data('month');
        var dtYear = $(this).data('year');
        arrive.data('date', dtDate);
        arrive.data('month', dtMonth);
        arrive.data('year', dtYear);
        arrive.val("".concat(dtDate, " ").concat(getMounthByNum(dtMonth), " -"));
      }
    }); //- наведение выши

    $('.calendar-filter__date').mouseenter(function () {
      if (stage === 0) {
        $(this).addClass('calendar-filter__date_grayhover');
      }

      if (stage === 1) {
        $(this).addClass('calendar-filter__date_hover');
        var mouseEntrDate = $(this).data();
        var arriveDate = $(this).parents('.calendar-filter').find('.calendar-filter__arrive-text').data();
        var mouseEntr = $(this);
        $('.calendar-filter__date').each(function () {
          var eachDate = $(this).data();
          $(this).removeClass('calendar-filter__in-range');
          $(this).removeClass('calendar-filter__range-to');
          $(this).removeClass('calendar-filter__range-from');

          if (compareDates(mouseEntrDate, arriveDate)) {
            mouseEntr.addClass('calendar-filter__range-to');
            $(this).parents('.calendar-filter__select').find('.calendar-filter__date_selected').addClass('calendar-filter__range-from');
          }

          if (compareDates(arriveDate, mouseEntrDate)) {
            mouseEntr.addClass('calendar-filter__range-from');
            $(this).parents('.calendar-filter__select').find('.calendar-filter__date_selected').addClass('calendar-filter__range-to');
          }

          if (compareDates(eachDate, arriveDate) && compareDates(mouseEntrDate, eachDate) || compareDates(eachDate, mouseEntrDate) && compareDates(arriveDate, eachDate)) {
            $(this).addClass('calendar-filter__in-range');
          }
        });
      }
    });
    $('.calendar-filter__date').mouseleave(function () {
      $(this).removeClass('calendar-filter__date_hover');
    });
    $('.calendar-filter__date').mouseleave(function () {
      $(this).removeClass('calendar-filter__date_grayhover');
    }); //- кнопка очистки

    $('.calendar-filter__clear').click(function () {
      stage = 0;
      var cal = $(this).parents('.calendar-filter');
      cal.find('.calendar-filter__arrive-text').val('');
      cal.find('.calendar-filter__exit-text').val('');
      cal.find('.calendar-filter__arrive-text').removeData('year');
      cal.find('.calendar-filter__exit-text').removeData();
      $(this).parents('.calendar-filter__select').find('.calendar-filter__date').each(function () {
        $(this).removeClass('calendar-filter__date_selected');
        $(this).removeClass('calendar-filter__in-range');
        $(this).removeClass('calendar-filter__range-to');
        $(this).removeClass('calendar-filter__range-from');
      });
    }); //- состояние: выбрана дата отбытия

    if (stage === 2) {
      var dataobj = $('.calendar-filter__exit-text').data();
      var dataobj2 = $('.calendar-filter__arrive-text').data(); //- берем объект дата из инпута

      $('.calendar-filter__date').each(function () {
        if (compareDates($(this).data(), dataobj2) && compareDates(dataobj, $(this).data())) {
          $(this).addClass('calendar-filter__in-range');
        }
      });
      $(".calendar-filter__date[data-date='".concat(dataobj.date, "'][data-month='").concat(dataobj.month, "'][data-year='").concat(dataobj.year, "']")).addClass('calendar-filter__date_selected calendar-filter__range-to'); //- подсвечиваем дату отбытия

      $(".calendar-filter__date[data-date='".concat(dataobj2.date, "'][data-month='").concat(dataobj2.month, "'][data-year='").concat(dataobj2.year, "']")).addClass('calendar-filter__range-from');
    } //- состояние: выбрана дата прибытия


    if (stage >= 1) {
      var dataobj = $('.calendar-filter__arrive-text').data(); //- берем объект дата из инпута

      $(".calendar-filter__date[data-date='".concat(dataobj.date, "'][data-month='").concat(dataobj.month, "'][data-year='").concat(dataobj.year, "']")).addClass('calendar-filter__date_selected'); //- подсвечиваем дату прибытия
    }
  } //- получить название месяца на русском по цифре из объекта date


  function getMounthName(date) {
    var dateNum = date.getMonth();
    var months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    return months[dateNum];
  }

  function getMounthByNum(num) {
    var months = ['янв', 'фев', 'Мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'];
    return months[num];
  } //- функция получает смещение (diff) от текущего месяца, заполняет calendar_month и вызывает calDateGen


  function calTitle(diff) {
    var date = mostime(diff);
    var month = getMounthName(date);
    var year = date.getFullYear();
    $('.calendar-filter__select').find('.calendar-filter__month').empty();
    $('.calendar-filter__select').find('.calendar-filter__month').html("".concat(month, "<br>").concat(year));
    calDateGen(diff);
  }

  $('.calendar-filter__select').data('year', String(yearNum));
  $('.calendar-filter__arrive').click(function () {
    $(this).parents('.calendar-filter__box').siblings('.calendar-filter__select').toggleClass('calendar-filter__select_active');
    monthDiff = 0;
    calTitle(monthDiff);
  });
  $('.calendar-filter__exit').click(function () {
    $(this).parents('.calendar-filter__box').siblings('.calendar-filter__select').toggleClass('calendar-filter__select_active');
    monthDiff = 0;
    calTitle(monthDiff);
  });
  $('.calendar-filter__prev').click(function () {
    monthDiff -= 1;
    calTitle(monthDiff);
  });
  $('.calendar-filter__next').click(function () {
    monthDiff += 1;
    calTitle(monthDiff);
  });
  $('.calendar-filter__apply').click(function () {
    $(this).parents('.calendar-filter__select').removeClass('calendar-filter__select_active');
  });
  $(document).click(function (event) {
    var calsel = $('.calendar-filter');
    var btn1 = $('.calendar-filter__arrive');
    var apply = $('.calendar-filter__apply');

    if (!btn1.is(event.target) && btn1.has(event.target).length === 0 && !calsel.is(event.target) && calsel.has(event.target).length === 0) {
      $('.calendar-filter__select').removeClass('calendar-filter__select_active');
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./components/calendar-filter/calendar-filter.scss":
/*!*********************************************************!*\
  !*** ./components/calendar-filter/calendar-filter.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./components/calendar/calendar.js":
/*!*****************************************!*\
  !*** ./components/calendar/calendar.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _calendar_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calendar.scss */ "./components/calendar/calendar.scss");
/* harmony import */ var _calendar_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_calendar_scss__WEBPACK_IMPORTED_MODULE_1__);


$(document).ready(function () {
  var timeNow = mostime();
  var yearNum = timeNow.getFullYear();
  var monthDiff = 0;
  var arrDate, exDate; //- получение даты по московскому времени

  function mostime() {
    var diff = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var d = new Date();
    var utc = 3;
    d.setHours(d.getHours() + utc, d.getMinutes() + d.getTimezoneOffset());
    d.setMonth(d.getMonth() + diff);
    return d;
  } //- date1 > date2?


  function compareDates(date1, date2) {
    if (date1.year > date2.year) return true;else if (date1.year < date2.year) {
      return false;
    }
    ;
    if (date1.month > date2.month) return true;else if (date1.month < date2.month) {
      return false;
    }

    if (date1.year === date2.year) {
      if (date1.month === date2.month) {
        if (date1.date > date2.date) {
          return true;
        } else return false;
      } else return false;
    } else return false;
  }

  function calDateGen(diff, id, stage) {
    var id = $("#".concat(id));
    var stage = stage;
    var firstDay = mostime(diff);
    firstDay.setDate(1);
    var beforeDays = [];
    var dayBefore = mostime(diff);
    dayBefore.setDate(1);
    var totalElems = 0;
    id.find('.calendar__dates').empty(); //- получаем массив объектов дат прошлого месяца

    if (firstDay.getDay() !== 1) {
      for (var i = 1; dayBefore.getDay() !== 1; i++) {
        var dayBefore = mostime(diff);
        dayBefore.setDate(1);
        dayBefore.setDate(dayBefore.getDate() - i);
        beforeDays.push(dayBefore);
      }

      beforeDays.reverse();
    } //- даты прошлого месяца


    beforeDays.forEach(function (item, i, arr) {
      id.find('.calendar__dates').append("<div data-date=\"".concat(item.getDate(), "\" data-month=\"").concat(item.getMonth(), "\" data-year=\"").concat(item.getFullYear(), "\" class=\"calendar__date calendar__other-month\">").concat(item.getDate(), "</div>"));
      totalElems += 1;
    }); //- даты текущего месяца

    for (var i = 1; i <= 31; i++) {
      var thisMthday = mostime(diff);
      thisMthday.setDate(i);

      if (thisMthday.getMonth() === firstDay.getMonth()) {
        id.find('.calendar__dates').append("<div data-date=\"".concat(thisMthday.getDate(), "\" data-month=\"").concat(thisMthday.getMonth(), "\" data-year=\"").concat(thisMthday.getFullYear(), "\" class=\"calendar__date\">").concat(thisMthday.getDate(), "</div>"));
        totalElems += 1;
      }
    } //- даты следующего месяца


    if (!(totalElems % 7 === 0)) {
      for (var i = 1; !(totalElems % 7 === 0); i++) {
        var nextMthday = mostime(diff + 1);
        nextMthday.setDate(i);
        id.find('.calendar__dates').append("<div data-date=\"".concat(nextMthday.getDate(), "\" data-month=\"").concat(nextMthday.getMonth(), "\" data-year=\"").concat(nextMthday.getFullYear(), "\" class=\"calendar__date calendar__other-month\">").concat(nextMthday.getDate(), "</div>"));
        totalElems += 1;
      }
    } //- подцветка сегоднешней даты


    $(".calendar__date[data-date=\"".concat(timeNow.getDate(), "\"][data-month=\"").concat(timeNow.getMonth(), "\"][data-year=\"").concat(timeNow.getFullYear(), "\"]")).addClass('calendar__curr-date'); //- нажатие на дату

    $('.calendar__date').click(function () {
      if (stage === 1) {
        //- получаем обьект дата с кликнутой даты
        var dt = $(this).data();
        var arrData = $(this).parents('.calendar').find('.calendar__arrive-text').data(); //- получаем обьект дата из инпута прибытия
        //- дата отбытия больше даты прибытия

        if (compareDates(dt, arrData)) {
          var exit = $(this).parents('.calendar').find('.calendar__exit-text');
          var dtDate = $(this).data('date');
          var dtMonth = $(this).data('month');
          var dtYear = $(this).data('year');
          $(this).addClass('calendar__date_selected');
          exit.data('date', dtDate);
          exit.data('month', dtMonth);
          exit.data('year', dtYear);
          exDate = new Date(dtYear, dtMonth, dtDate);
          var dateDiff = (exDate - arrDate) / 86400000;
          $(this).parents('.calendar').data('diff', dateDiff);
          dtMonth += 1;

          if (dtDate < 10) {
            dtDate = '0' + dtDate;
          }

          if (dtMonth < 10) {
            dtMonth = '0' + dtMonth;
          }

          exit.val("".concat(dtDate, ".").concat(dtMonth, ".").concat(dtYear));
          stage = 2;
          id.data('stage', stage);
        } //- дата прибытия больше даты отбытия


        if (compareDates(arrData, dt)) {
          $('.calendar__date').each(function () {
            $(this).removeClass('calendar__date_selected');
          });
          var arrive = $(this).parents('.calendar').find('.calendar__arrive-text');
          $(this).addClass('calendar__date_selected');
          var dtDate = $(this).data('date');
          var dtMonth = $(this).data('month');
          var dtYear = $(this).data('year');
          arrive.data('date', dtDate);
          arrive.data('month', dtMonth);
          arrive.data('year', dtYear);
          arrDate = new Date(dtYear, dtMonth, dtDate);
          dtMonth += 1;

          if (dtDate < 10) {
            dtDate = '0' + dtDate;
          }

          if (dtMonth < 10) {
            dtMonth = '0' + dtMonth;
          }

          arrive.val("".concat(dtDate, ".").concat(dtMonth, ".").concat(dtYear));
          stage = 1;
          id.data('stage', stage);
        }
      }

      if (stage === 0) {
        stage = 1;
        id.data('stage', stage);
        var arrive = $(this).parents('.calendar').find('.calendar__arrive-text');
        $(this).addClass('calendar__date_selected');
        var dtDate = $(this).data('date');
        var dtMonth = $(this).data('month');
        var dtYear = $(this).data('year');
        arrive.data('date', dtDate);
        arrive.data('month', dtMonth);
        arrive.data('year', dtYear);
        arrDate = new Date(dtYear, dtMonth, dtDate);
        dtMonth += 1;

        if (dtDate < 10) {
          dtDate = "0".concat(dtDate);
        }

        if (dtMonth < 10) {
          dtMonth = "0".concat(dtMonth);
        }

        arrive.val("".concat(dtDate, ".").concat(dtMonth, ".").concat(dtYear));
      }
    }); //- наведение выши

    $('.calendar__date').mouseenter(function () {
      if (stage === 0) {
        $(this).addClass('calendar__date_grayhover');
      }

      var thisdate = $(this);

      if (stage === 1) {
        $(this).addClass('calendar__date_hover');
        var mouseEntrDate = $(this).data();
        var arriveDate = $(this).parents('.calendar').find('.calendar__arrive-text').data();
        var mouseEntr = $(this);
        thisdate.parents('.calendar').find('.calendar__date').each(function () {
          var eachDate = $(this).data();
          $(this).removeClass('calendar__in-range');
          $(this).removeClass('calendar__range-to');
          $(this).removeClass('calendar__range-from');

          if (compareDates(mouseEntrDate, arriveDate)) {
            mouseEntr.addClass('calendar__range-to');
            $(this).parents('.calendar__select').find('.calendar__date_selected').addClass('calendar__range-from');
          }

          if (compareDates(arriveDate, mouseEntrDate)) {
            mouseEntr.addClass('calendar__range-from');
            $(this).parents('.calendar__select').find('.calendar__date_selected').addClass('calendar__range-to');
          }

          if (compareDates(eachDate, arriveDate) && compareDates(mouseEntrDate, eachDate) || compareDates(eachDate, mouseEntrDate) && compareDates(arriveDate, eachDate)) {
            $(this).addClass('calendar__in-range');
          }
        });
      }
    });
    $('.calendar__date').mouseleave(function () {
      $(this).removeClass('calendar__date_hover');
      $(this).removeClass('calendar__date_grayhover');
    }); //- кнопка очистки

    $('.calendar__clear').click(function () {
      stage = 0;
      var cal = $(this).parents('.calendar');
      cal.find('.calendar__arrive-text').val('');
      cal.find('.calendar__exit-text').val('');
      cal.find('.calendar__arrive-text').removeData('year');
      cal.find('.calendar__exit-text').removeData();
      $(this).parents('.calendar__select').find('.calendar__date').each(function () {
        $(this).removeClass('calendar__date_selected');
        $(this).removeClass('calendar__in-range');
        $(this).removeClass('calendar__range-to');
        $(this).removeClass('calendar__range-from');
      });
    }); //- состояние: выбрана дата отбытия

    if (stage === 2) {
      var dataobj = id.find('.calendar__exit-text').data();
      var dataobj2 = id.find('.calendar__arrive-text').data(); //- берем объект дата из инпута

      id.find('.calendar__date').each(function () {
        if (compareDates($(this).data(), dataobj2) && compareDates(dataobj, $(this).data())) {
          $(this).addClass('calendar__in-range');
        }
      });
      id.find(".calendar__date[data-date='".concat(dataobj.date, "'][data-month='").concat(dataobj.month, "'][data-year='").concat(dataobj.year, "']")).addClass('calendar__date_selected calendar__range-to'); //- подсвечиваем дату отбытия

      id.find(".calendar__date[data-date='".concat(dataobj2.date, "'][data-month='").concat(dataobj2.month, "'][data-year='").concat(dataobj2.year, "']")).addClass('calendar__range-from');
    } //- состояние: выбрана дата прибытия


    if (stage >= 1) {
      var dataobj = id.find('.calendar__arrive-text').data(); //- берем объект дата из инпута

      id.find(".calendar__date[data-date='".concat(dataobj.date, "'][data-month='").concat(dataobj.month, "'][data-year='").concat(dataobj.year, "']")).addClass('calendar__date_selected'); //- подсвечиваем дату прибытия
    }
  } //end caldategen
  //- получить название месяца на русском по цифре


  function getMounthName(date) {
    var dateNum = date.getMonth();
    var months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    return months[dateNum];
  } //- функция получает смещение (diff) от текущего месяца, заполняет calendar_month и вызывает calDateGen


  function calTitle(diff, id, stage) {
    var date = mostime(diff);
    var month = getMounthName(date);
    var year = date.getFullYear();
    $('.calendar__select').find('.calendar__month').empty();
    $('.calendar__select').find('.calendar__month').html("".concat(month, "<br>").concat(year));
    calDateGen(diff, id, stage);
  }

  $('.calendar__select').data('year', String(yearNum));
  $('.calendar__arrive, .calendar__exit').click(function () {
    $(this).parents('.calendar__box').siblings('.calendar__select').toggleClass('calendar__select_active');
    var id = $(this).parents('.calendar').attr('id');
    var stage = $(this).parents('.calendar').data('stage') || 0;
    monthDiff = 0;
    calTitle(monthDiff, id, stage);
    $(document).click(function (event) {
      var calsel = $("#".concat(id));
      var btn1 = calsel.find('.calendar__arrive');
      var apply = calsel.find('.calendar__apply');

      if (!btn1.is(event.target) && btn1.has(event.target).length === 0 && !calsel.is(event.target) && calsel.has(event.target).length === 0) {
        calsel.find('.calendar__select').removeClass('calendar__select_active');
      }
    });
  });
  $('.calendar__prev').click(function () {
    var id = $(this).parents('.calendar').attr('id');
    var stage = $(this).parents('.calendar').data('stage') || 0;
    monthDiff -= 1;
    calTitle(monthDiff, id, stage);
  });
  $('.calendar__next').click(function () {
    var id = $(this).parents('.calendar').attr('id');
    var stage = $(this).parents('.calendar').data('stage') || 0;
    monthDiff += 1;
    calTitle(monthDiff, id, stage);
  });
  $('.calendar__apply').click(function () {
    $(this).parents('.calendar__select').removeClass('calendar__select_active');
  });
  var id = $('.calendar__select_active').parents('.calendar').attr('id');
  var stage = $('.calendar__select_active').parents('.calendar').data('stage') || 0;

  if (id === 'disabled') {
    stage = 2;
  }

  monthDiff = 0;
  calTitle(monthDiff, id, stage);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./components/calendar/calendar.scss":
/*!*******************************************!*\
  !*** ./components/calendar/calendar.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./components/card-login/card-login.js":
/*!*********************************************!*\
  !*** ./components/card-login/card-login.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _card_login_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card-login.scss */ "./components/card-login/card-login.scss");
/* harmony import */ var _card_login_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_card_login_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./components/card-login/card-login.scss":
/*!***********************************************!*\
  !*** ./components/card-login/card-login.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./components/card-reg/card-reg.js":
/*!*****************************************!*\
  !*** ./components/card-reg/card-reg.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _card_reg_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card-reg.scss */ "./components/card-reg/card-reg.scss");
/* harmony import */ var _card_reg_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_card_reg_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./components/card-reg/card-reg.scss":
/*!*******************************************!*\
  !*** ./components/card-reg/card-reg.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./components/card-select/card-select.js":
/*!***********************************************!*\
  !*** ./components/card-select/card-select.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _card_select_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card-select.scss */ "./components/card-select/card-select.scss");
/* harmony import */ var _card_select_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_card_select_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./components/card-select/card-select.scss":
/*!*************************************************!*\
  !*** ./components/card-select/card-select.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./components/card-slider/card-slider.js":
/*!***********************************************!*\
  !*** ./components/card-slider/card-slider.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _card_slider_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card-slider.scss */ "./components/card-slider/card-slider.scss");
/* harmony import */ var _card_slider_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_card_slider_scss__WEBPACK_IMPORTED_MODULE_0__);

$('.single-item').slick({
  infinite: true,
  slidesToShow: 1,
  dots: true
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./components/card-slider/card-slider.scss":
/*!*************************************************!*\
  !*** ./components/card-slider/card-slider.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./components/card-tobook/card-tobook.js":
/*!***********************************************!*\
  !*** ./components/card-tobook/card-tobook.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _card_tobook_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card-tobook.scss */ "./components/card-tobook/card-tobook.scss");
/* harmony import */ var _card_tobook_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_card_tobook_scss__WEBPACK_IMPORTED_MODULE_0__);

$(document).ready(function () {
  $('.card-tobook').click(function () {
    var price = $('.card-tobook').attr('data-price');
    var days = $('.card-tobook').attr('data-days');
    var addprice = $('.card-tobook').attr('data-addprices');
    var prnum = price * days;

    var makeStr = function makeStr(num) {
      var sum1 = String(num);
      var sum1str = sum1.split('').reverse();
      sum1str.splice(3, 0, ' ');
      sum1str.reverse();
      var sum2str = sum1str.join('');
      return sum2str;
    };

    var sumres = makeStr(prnum);
    var allsum = makeStr(+prnum + +addprice);
    console.log(allsum);
    $('.card-tobook__money-sum').children('span').html(sumres);
    $('.card-tobook__sum').children('span').html(allsum);
    console.log(price);
    console.log(days);
    console.log(addprice);
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./components/card-tobook/card-tobook.scss":
/*!*************************************************!*\
  !*** ./components/card-tobook/card-tobook.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./components/checkbox/checkbox.js":
/*!*****************************************!*\
  !*** ./components/checkbox/checkbox.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _checkbox_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkbox.scss */ "./components/checkbox/checkbox.scss");
/* harmony import */ var _checkbox_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_checkbox_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./components/checkbox/checkbox.scss":
/*!*******************************************!*\
  !*** ./components/checkbox/checkbox.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./components/comment/comment.js":
/*!***************************************!*\
  !*** ./components/comment/comment.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _comment_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comment.scss */ "./components/comment/comment.scss");
/* harmony import */ var _comment_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_comment_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./components/comment/comment.scss":
/*!*****************************************!*\
  !*** ./components/comment/comment.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./components/comment/img/comment.png":
/*!********************************************!*\
  !*** ./components/comment/img/comment.png ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/comment.png");

/***/ }),

/***/ "./components/comment/img/comment1.png":
/*!*********************************************!*\
  !*** ./components/comment/img/comment1.png ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/comment1.png");

/***/ }),

/***/ "./components/copyright/copyright.js":
/*!*******************************************!*\
  !*** ./components/copyright/copyright.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _copyright_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./copyright.scss */ "./components/copyright/copyright.scss");
/* harmony import */ var _copyright_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_copyright_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./components/copyright/copyright.scss":
/*!*********************************************!*\
  !*** ./components/copyright/copyright.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./components/dropdown-room/dropdown-room.js":
/*!***************************************************!*\
  !*** ./components/dropdown-room/dropdown-room.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _dropdown_room_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropdown-room.scss */ "./components/dropdown-room/dropdown-room.scss");
/* harmony import */ var _dropdown_room_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dropdown_room_scss__WEBPACK_IMPORTED_MODULE_0__);
 // нужны элементы управления плагином из пага -

$(document).ready(function () {
  function filltext(ctx) {
    //- заполнение текста инпута если это дропдаун гостей
    if ($(ctx).parents(".dropdown__box").data('preset') === 'guest') {
      var arr = ['взрослые', 'дети', 'младенцы'];
      var ii = 0;
      $(ctx).parents('.drop__menu').find('.item__text').each(function () {
        $(this).text(arr[ii]);
        ii++;
      });
      var num = 0;
      var baby = 0;
      var numtext = 'гостей';
      var babytext = 'младенцев';
      $(ctx).parents('.drop__menu').find('.item__value').each(function (index, value) {
        if (!($(this).parents('.item__calc').siblings('.item__text').text() === 'младенцы')) {
          num += Number($(this).text());
        } else {
          baby += Number($(this).text());
        }
      });
      $(ctx).parents('.dropdown__box').data('sum', num);
      var inner;
      var babyinner = '';

      if (num === 1) {
        numtext = 'гость';
      }

      ;

      if (num >= 2 && num < 5) {
        numtext = 'гостя';
      }

      ;

      if (baby === 1) {
        babytext = 'младенец';
      }

      ;

      if (baby >= 2 && baby < 5) {
        babytext = 'младенца';
      }

      ;
      inner = num + ' ' + numtext;

      if (num < 1) {
        inner = '';
      }

      if (baby > 0) {
        babyinner = baby + ' ' + babytext;
        inner = inner === '' ? babyinner : inner + ', ' + babyinner;
      }

      if (num === 0 && baby === 0) {
        inner = 'Сколько гостей';
        $(ctx).parents('.drop__menu').find('.dropdown__clear').addClass('dropdown__clear_unactive');
      } else {
        $(ctx).parents('.drop__menu').find('.dropdown__clear').removeClass('dropdown__clear_unactive');
      }

      $(ctx).parents('.drop__menu').siblings('.drop__text-box').children('.drop__text-field').val(inner);
    } else {
      //- заполнение текста инпута если это дропдаун комнат
      var text = [];
      $(ctx).parents('.drop__menu').find('.item__value').each(function (index, value) {
        if (Number($(this).text()) !== 0) {
          var numtext = String($(this).parent('.item__calc').siblings('.item__text').text());

          if (Number($(this).text()) === 1) {
            if (numtext === 'спальни') {
              numtext = 'спальня';
            }

            ;

            if (numtext === 'ванные комнаты') {
              numtext = 'ванная комната';
            }

            ;

            if (numtext === 'кровати') {
              numtext = 'кровать';
            }

            ;
          }

          var t = $(this).text() + ' ' + numtext + ', ';
          text.push(t);
        }
      });
      var inner = text.join(" ");

      if (inner === '') {
        inner = 'Удобства номера';
      }

      $(ctx).parents('.drop__menu').siblings('.drop__text-box').children('.drop__text-field').val(inner);
    }
  }

  function checkval() {
    //проверка значения - меняет стиль кнопки при 0
    $('.item__value').each(function () {
      if (Number($(this).text()) === 0) {
        $(this).siblings('.item__calc-dec').addClass('item__calc-dec_unactive');
      } else {
        $(this).siblings('.item__calc-dec').removeClass('item__calc-dec_unactive');
      }

      ;
    });
  }

  ; // при клике по документу, исключая дропдаун = убирает меню

  $(document).click(function (event) {
    if (!event.target.matches('.drop__text-box') && !event.target.matches('.item, .item__text, .item__calc, .item__calc-dec, .item__value, .item__calc-inc') && !event.target.matches('.drop__text-field') && !event.target.matches('.dropdown__clear')) {
      $('.drop__text-box').removeClass('dropdown__box_active');
      $('.drop__text-box').siblings('.drop__menu').removeClass('visible');
    }

    ;
  });
  $('.drop__text-box').click(function () {
    var ctx = this;
    $('.drop__text-box').each(function () {
      if (this !== ctx) {
        $(this).removeClass('dropdown__box_active');
        $(this).siblings('.drop__menu').removeClass('visible');
      }
    });
    $(this).toggleClass('dropdown__box_active');
    $(this).siblings('.drop__menu').toggleClass('visible');
  });
  $('.item__calc-inc').click(function () {
    var val = $(this).siblings('.item__value').text();
    val++;
    $(this).siblings('.item__value').text(val);
    checkval();
    filltext(this);
  });
  $('.item__calc-dec').click(function () {
    var val = parseInt($(this).siblings('.item__value').text());

    if (!(val == 0)) {
      val--;
    }

    ;
    $(this).siblings('.item__value').text(val);
    checkval();
    filltext(this);
  });
  checkval(); //нас

  $(".dropdown__box[data-preset='guest']").find('.drop__text-box').addClass('dropdown_w320');
  $(".dropdown__box[data-preset='guest']").find('.drop__menu').addClass('dropdown_w320');
  $(".dropdown__box[data-preset='guest']").find('.drop__menu').append("\n    <div class=\"item\">\n    <div class=\"dropdown__clear\">\u043E\u0447\u0438\u0441\u0442\u0438\u0442\u044C</div>\n    <div class=\"dropdown__submit\">\u043F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C</div>\n    </div>\n    ");
  $(".dropdown__box[data-preset='guest']").find('.dropdown__clear').click(function () {
    $(this).parents('.drop__menu').find('.item__value').each(function () {
      $(this).text(0);
    });
    filltext(this);
  }); //заполнение поля при загрузке

  $('.item__value').each(function (i, val) {
    filltext(this);
  });

  function calc(arr) {
    var result = 0;

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] > 0 && arr[i] % 2 !== 0) {
        result += arr[i];
      }
    }

    return result;
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./components/dropdown-room/dropdown-room.scss":
/*!*****************************************************!*\
  !*** ./components/dropdown-room/dropdown-room.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./components/exp-check-list/exp-check-list.js":
/*!*****************************************************!*\
  !*** ./components/exp-check-list/exp-check-list.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _exp_check_list_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exp-check-list.scss */ "./components/exp-check-list/exp-check-list.scss");
/* harmony import */ var _exp_check_list_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_exp_check_list_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./components/exp-check-list/exp-check-list.scss":
/*!*******************************************************!*\
  !*** ./components/exp-check-list/exp-check-list.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./components/footer/footer.js":
/*!*************************************!*\
  !*** ./components/footer/footer.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _footer_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.scss */ "./components/footer/footer.scss");
/* harmony import */ var _footer_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_footer_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./components/footer/footer.scss":
/*!***************************************!*\
  !*** ./components/footer/footer.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./components/gray-logo/gray-logo.js":
/*!*******************************************!*\
  !*** ./components/gray-logo/gray-logo.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gray_logo_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gray-logo.scss */ "./components/gray-logo/gray-logo.scss");
/* harmony import */ var _gray_logo_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gray_logo_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./components/gray-logo/gray-logo.scss":
/*!*********************************************!*\
  !*** ./components/gray-logo/gray-logo.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./components/header/header.js":
/*!*************************************!*\
  !*** ./components/header/header.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.scss */ "./components/header/header.scss");
/* harmony import */ var _header_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_header_scss__WEBPACK_IMPORTED_MODULE_0__);

$(document).ready(function () {
  $('.header__burger').click(function () {
    $(this).toggleClass('open-menu');
    $(this).siblings('.header__nav').toggleClass('open-menu');
    $('body').toggleClass('header__fixed-page');
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./components/header/header.scss":
/*!***************************************!*\
  !*** ./components/header/header.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./components/like-butt/like-butt.js":
/*!*******************************************!*\
  !*** ./components/like-butt/like-butt.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _like_butt_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./like-butt.scss */ "./components/like-butt/like-butt.scss");
/* harmony import */ var _like_butt_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_like_butt_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./components/like-butt/like-butt.scss":
/*!*********************************************!*\
  !*** ./components/like-butt/like-butt.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./components/main-logo/main-logo.js":
/*!*******************************************!*\
  !*** ./components/main-logo/main-logo.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_logo_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-logo.scss */ "./components/main-logo/main-logo.scss");
/* harmony import */ var _main_logo_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_main_logo_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./components/main-logo/main-logo.scss":
/*!*********************************************!*\
  !*** ./components/main-logo/main-logo.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./components/menu/menu.js":
/*!*********************************!*\
  !*** ./components/menu/menu.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _menu_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.scss */ "./components/menu/menu.scss");
/* harmony import */ var _menu_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_menu_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./components/menu/menu.scss":
/*!***********************************!*\
  !*** ./components/menu/menu.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./components/pagination/pagination.js":
/*!*********************************************!*\
  !*** ./components/pagination/pagination.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pagination_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pagination.scss */ "./components/pagination/pagination.scss");
/* harmony import */ var _pagination_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_pagination_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./components/pagination/pagination.scss":
/*!***********************************************!*\
  !*** ./components/pagination/pagination.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./components/radio-but/radio-but.js":
/*!*******************************************!*\
  !*** ./components/radio-but/radio-but.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _radio_but_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./radio-but.scss */ "./components/radio-but/radio-but.scss");
/* harmony import */ var _radio_but_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_radio_but_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./components/radio-but/radio-but.scss":
/*!*********************************************!*\
  !*** ./components/radio-but/radio-but.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./components/range-slider/range-slider.js":
/*!*************************************************!*\
  !*** ./components/range-slider/range-slider.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "../node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _range_slider_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./range-slider.scss */ "./components/range-slider/range-slider.scss");
/* harmony import */ var _range_slider_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_range_slider_scss__WEBPACK_IMPORTED_MODULE_1__);


$(document).ready(function () {
  if ($('*').is('.range')) {
    var calc = function calc(pnum) {
      return Math.round(Math.round((pnum - rangeBoxX) / boxWidth * max) / 100) * 100;
    };

    var fillInput = function fillInput() {
      input.val("".concat(rangefrom, "\u20BD - ").concat(rangeto, "\u20BD"));
    };

    var _min = 0;
    var max = 20000;
    var input = $('.range__input-box');
    var rangeBoxOfs = $('.range__cont').offset();
    var rangeBoxX = rangeBoxOfs.left;
    var rangemax = $('.range__max');
    var rangemin = $('.range__min');
    var boxWidth = $('.range__cont').width();
    $('.range__max').css({
      'left': '' + 130 + 'px'
    }); // def max val

    $('.range__min').css({
      'left': '' + 65 + 'px'
    }); // def min val

    var maxpoint = $('.range__max').offset().left;
    var minpoint = $('.range__min').offset().left;
    var midbar = $('.range__bar');
    midbar.width(maxpoint - minpoint);
    midbar.css({
      'left': '' + (minpoint - rangeBoxX) + 'px'
    });
    var rangefrom = calc(minpoint);
    var rangeto = calc(maxpoint);
    fillInput();
    $('.range__max').on('mousedown', function (e) {
      var x = e.pageX; //e.pageX

      $(document).bind('mouseup', function () {
        $(document).unbind();
      });
      $(document).bind('mousemove', function (event) {
        var xnow = event.pageX;
        maxpoint = xnow;
        maxpoint = maxpoint > rangeBoxX + boxWidth ? rangeBoxX + boxWidth : maxpoint;
        maxpoint = maxpoint < minpoint ? minpoint : maxpoint;
        rangeto = calc(maxpoint);
        fillInput();
        rangemax.css({
          'left': '' + (maxpoint - rangeBoxX - 5) + 'px'
        });
        midbar.width(maxpoint - minpoint);
      });
    });
    $('.range__min').on('mousedown', function (e) {
      var x = e.pageX;
      $(document).bind('mouseup', function () {
        $(document).unbind();
      });
      $(document).bind('mousemove', function (event) {
        var xnow = event.pageX;
        minpoint = xnow;
        minpoint = minpoint < rangeBoxX ? rangeBoxX : minpoint;
        minpoint = minpoint > maxpoint ? maxpoint : minpoint;
        rangefrom = calc(minpoint);
        fillInput();
        rangemin.css({
          'left': '' + (minpoint - rangeBoxX - 5) + 'px'
        });
        midbar.width(maxpoint - minpoint);
        midbar.css({
          'left': '' + (minpoint - rangeBoxX) + 'px'
        });
      });
    });
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./components/range-slider/range-slider.scss":
/*!***************************************************!*\
  !*** ./components/range-slider/range-slider.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./components/rating-star/rating-star.js":
/*!***********************************************!*\
  !*** ./components/rating-star/rating-star.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rating_star_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rating-star.scss */ "./components/rating-star/rating-star.scss");
/* harmony import */ var _rating_star_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rating_star_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./components/rating-star/rating-star.scss":
/*!*************************************************!*\
  !*** ./components/rating-star/rating-star.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./components/rich-checkbox/rich-checkbox.js":
/*!***************************************************!*\
  !*** ./components/rich-checkbox/rich-checkbox.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rich_checkbox_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rich-checkbox.scss */ "./components/rich-checkbox/rich-checkbox.scss");
/* harmony import */ var _rich_checkbox_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rich_checkbox_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./components/rich-checkbox/rich-checkbox.scss":
/*!*****************************************************!*\
  !*** ./components/rich-checkbox/rich-checkbox.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./components/room-num/room-num.js":
/*!*****************************************!*\
  !*** ./components/room-num/room-num.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _room_num_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./room-num.scss */ "./components/room-num/room-num.scss");
/* harmony import */ var _room_num_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_room_num_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./components/room-num/room-num.scss":
/*!*******************************************!*\
  !*** ./components/room-num/room-num.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./components/socials/socials.js":
/*!***************************************!*\
  !*** ./components/socials/socials.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _socials_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./socials.scss */ "./components/socials/socials.scss");
/* harmony import */ var _socials_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_socials_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./components/socials/socials.scss":
/*!*****************************************!*\
  !*** ./components/socials/socials.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./components/text-bold-12/text-bold-12.js":
/*!*************************************************!*\
  !*** ./components/text-bold-12/text-bold-12.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _text_bold_12_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text-bold-12.scss */ "./components/text-bold-12/text-bold-12.scss");
/* harmony import */ var _text_bold_12_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_text_bold_12_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./components/text-bold-12/text-bold-12.scss":
/*!***************************************************!*\
  !*** ./components/text-bold-12/text-bold-12.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./components/text-head-foot/text-head-foot.js":
/*!*****************************************************!*\
  !*** ./components/text-head-foot/text-head-foot.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _text_head_foot_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text-head-foot.scss */ "./components/text-head-foot/text-head-foot.scss");
/* harmony import */ var _text_head_foot_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_text_head_foot_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./components/text-head-foot/text-head-foot.scss":
/*!*******************************************************!*\
  !*** ./components/text-head-foot/text-head-foot.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./components/text-input/text-input.js":
/*!*********************************************!*\
  !*** ./components/text-input/text-input.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _text_input_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./text-input.scss */ "./components/text-input/text-input.scss");
/* harmony import */ var _text_input_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_text_input_scss__WEBPACK_IMPORTED_MODULE_0__);

$(document).ready(function () {
  var im = new Inputmask('99.99.9999');
  im.mask('.masked-t-field');
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./components/text-input/text-input.scss":
/*!***********************************************!*\
  !*** ./components/text-input/text-input.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./components/toggle-but/toggle-but.js":
/*!*********************************************!*\
  !*** ./components/toggle-but/toggle-but.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _toggle_but_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toggle-but.scss */ "./components/toggle-but/toggle-but.scss");
/* harmony import */ var _toggle_but_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_toggle_but_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./components/toggle-but/toggle-but.scss":
/*!***********************************************!*\
  !*** ./components/toggle-but/toggle-but.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./components/votes-disc/votes-disc.js":
/*!*********************************************!*\
  !*** ./components/votes-disc/votes-disc.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _votes_disc_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./votes-disc.scss */ "./components/votes-disc/votes-disc.scss");
/* harmony import */ var _votes_disc_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_votes_disc_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./components/votes-disc/votes-disc.scss":
/*!***********************************************!*\
  !*** ./components/votes-disc/votes-disc.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./entry.js":
/*!******************!*\
  !*** ./entry.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_inputmask_bundle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/inputmask/bundle */ "../node_modules/inputmask/bundle.js");
/* harmony import */ var _node_modules_slick_carousel_slick_slick_min_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/slick-carousel/slick/slick.min.js */ "../node_modules/slick-carousel/slick/slick.min.js");
/* harmony import */ var _node_modules_slick_carousel_slick_slick_min_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_slick_carousel_slick_slick_min_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../node_modules/slick-carousel/slick/slick.css */ "../node_modules/slick-carousel/slick/slick.css");
/* harmony import */ var _node_modules_slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../node_modules/slick-carousel/slick/slick-theme.css */ "../node_modules/slick-carousel/slick/slick-theme.css");
/* harmony import */ var _node_modules_slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_ion_rangeslider_css_ion_rangeSlider_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../node_modules/ion-rangeslider/css/ion.rangeSlider.min.css */ "../node_modules/ion-rangeslider/css/ion.rangeSlider.min.css");
/* harmony import */ var _node_modules_ion_rangeslider_css_ion_rangeSlider_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_ion_rangeslider_css_ion_rangeSlider_min_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_ion_rangeslider_js_ion_rangeSlider_min_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../node_modules/ion-rangeslider/js/ion.rangeSlider.min.js */ "../node_modules/ion-rangeslider/js/ion.rangeSlider.min.js");
/* harmony import */ var _node_modules_ion_rangeslider_js_ion_rangeSlider_min_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_node_modules_ion_rangeslider_js_ion_rangeSlider_min_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _theme_fonts_text_fonts_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./theme/fonts/text-fonts.scss */ "./theme/fonts/text-fonts.scss");
/* harmony import */ var _theme_fonts_text_fonts_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_theme_fonts_text_fonts_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _theme_global_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./theme/global.scss */ "./theme/global.scss");
/* harmony import */ var _theme_global_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_theme_global_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _plug_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./plug.js */ "./plug.js");
/* harmony import */ var _plug_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_plug_js__WEBPACK_IMPORTED_MODULE_9__);

global.jQuery = jquery__WEBPACK_IMPORTED_MODULE_0___default.a;
global.$ = jquery__WEBPACK_IMPORTED_MODULE_0___default.a;










function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

requireAll(__webpack_require__("./components sync recursive ^\\.\\/(?!.*(?:__tests__)).*\\.(jsx?)$")); // pattern to take each .js(x) files except of the ones with __tests__ directory https://regex101.com/r/J8NWTj/1

requireAll(__webpack_require__("./pages sync recursive ^\\.\\/(?!.*(?:__tests__)).*\\.(jsx?)$"));
requireAll(__webpack_require__("./components sync recursive ^\\.\\/(?!.*(?:__tests__)).*\\.(png)$"));
requireAll(__webpack_require__("./pages sync recursive ^\\.\\/(?!.*(?:__tests__)).*\\.(png)$"));
requireAll(__webpack_require__("./img sync recursive ^\\.\\/(?!.*(?:__tests__)).*\\.(png)$"));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/global.js */ "../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./img sync recursive ^\\.\\/(?!.*(?:__tests__)).*\\.(png)$":
/*!*****************************************************!*\
  !*** ./img sync ^\.\/(?!.*(?:__tests__)).*\.(png)$ ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./room1.png": "./img/room1.png",
	"./room10.png": "./img/room10.png",
	"./room11.png": "./img/room11.png",
	"./room12.png": "./img/room12.png",
	"./room2.png": "./img/room2.png",
	"./room3.png": "./img/room3.png",
	"./room4.png": "./img/room4.png",
	"./room5.png": "./img/room5.png",
	"./room6.png": "./img/room6.png",
	"./room7.png": "./img/room7.png",
	"./room8.png": "./img/room8.png",
	"./room9.png": "./img/room9.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./img sync recursive ^\\.\\/(?!.*(?:__tests__)).*\\.(png)$";

/***/ }),

/***/ "./img/room1.png":
/*!***********************!*\
  !*** ./img/room1.png ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/room1.png");

/***/ }),

/***/ "./img/room10.png":
/*!************************!*\
  !*** ./img/room10.png ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/room10.png");

/***/ }),

/***/ "./img/room11.png":
/*!************************!*\
  !*** ./img/room11.png ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/room11.png");

/***/ }),

/***/ "./img/room12.png":
/*!************************!*\
  !*** ./img/room12.png ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/room12.png");

/***/ }),

/***/ "./img/room2.png":
/*!***********************!*\
  !*** ./img/room2.png ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/room2.png");

/***/ }),

/***/ "./img/room3.png":
/*!***********************!*\
  !*** ./img/room3.png ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/room3.png");

/***/ }),

/***/ "./img/room4.png":
/*!***********************!*\
  !*** ./img/room4.png ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/room4.png");

/***/ }),

/***/ "./img/room5.png":
/*!***********************!*\
  !*** ./img/room5.png ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/room5.png");

/***/ }),

/***/ "./img/room6.png":
/*!***********************!*\
  !*** ./img/room6.png ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/room6.png");

/***/ }),

/***/ "./img/room7.png":
/*!***********************!*\
  !*** ./img/room7.png ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/room7.png");

/***/ }),

/***/ "./img/room8.png":
/*!***********************!*\
  !*** ./img/room8.png ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/room8.png");

/***/ }),

/***/ "./img/room9.png":
/*!***********************!*\
  !*** ./img/room9.png ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/room9.png");

/***/ }),

/***/ "./pages sync recursive ^\\.\\/(?!.*(?:__tests__)).*\\.(jsx?)$":
/*!********************************************************!*\
  !*** ./pages sync ^\.\/(?!.*(?:__tests__)).*\.(jsx?)$ ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./all-pages/all-pages.js": "./pages/all-pages/all-pages.js",
	"./cards/cards.js": "./pages/cards/cards.js",
	"./colors-types/colors-types.js": "./pages/colors-types/colors-types.js",
	"./form-el/form-el.js": "./pages/form-el/form-el.js",
	"./head-foot/head-foot.js": "./pages/head-foot/head-foot.js",
	"./page-landing/page-landing.js": "./pages/page-landing/page-landing.js",
	"./page-login/page-login.js": "./pages/page-login/page-login.js",
	"./page-reg/page-reg.js": "./pages/page-reg/page-reg.js",
	"./page-room-details/page-room-details.js": "./pages/page-room-details/page-room-details.js",
	"./page-search/page-search.js": "./pages/page-search/page-search.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./pages sync recursive ^\\.\\/(?!.*(?:__tests__)).*\\.(jsx?)$";

/***/ }),

/***/ "./pages sync recursive ^\\.\\/(?!.*(?:__tests__)).*\\.(png)$":
/*!*******************************************************!*\
  !*** ./pages sync ^\.\/(?!.*(?:__tests__)).*\.(png)$ ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./page-landing/img/search-room-back.png": "./pages/page-landing/img/search-room-back.png",
	"./page-login/img/page-reg-background.png": "./pages/page-login/img/page-reg-background.png",
	"./page-reg/img/page-reg-background.png": "./pages/page-reg/img/page-reg-background.png",
	"./page-room-details/img/room-details1.png": "./pages/page-room-details/img/room-details1.png",
	"./page-room-details/img/room-details2.png": "./pages/page-room-details/img/room-details2.png",
	"./page-room-details/img/room-details3.png": "./pages/page-room-details/img/room-details3.png"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./pages sync recursive ^\\.\\/(?!.*(?:__tests__)).*\\.(png)$";

/***/ }),

/***/ "./pages/all-pages/all-pages.js":
/*!**************************************!*\
  !*** ./pages/all-pages/all-pages.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _all_pages_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./all-pages.scss */ "./pages/all-pages/all-pages.scss");
/* harmony import */ var _all_pages_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_all_pages_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./pages/all-pages/all-pages.scss":
/*!****************************************!*\
  !*** ./pages/all-pages/all-pages.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./pages/cards/cards.js":
/*!******************************!*\
  !*** ./pages/cards/cards.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cards_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cards.scss */ "./pages/cards/cards.scss");
/* harmony import */ var _cards_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_cards_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./pages/cards/cards.scss":
/*!********************************!*\
  !*** ./pages/cards/cards.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./pages/colors-types/colors-types.js":
/*!********************************************!*\
  !*** ./pages/colors-types/colors-types.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _colors_types_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colors-types.scss */ "./pages/colors-types/colors-types.scss");
/* harmony import */ var _colors_types_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_colors_types_scss__WEBPACK_IMPORTED_MODULE_0__);

$(document).ready(function () {
  $("#example_id").ionRangeSlider({
    skin: "big",
    min: 0,
    max: 10000,
    from: 1000,
    to: 9000,
    type: 'double',
    prefix: "$",
    grid: true,
    grid_num: 10
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "../node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./pages/colors-types/colors-types.scss":
/*!**********************************************!*\
  !*** ./pages/colors-types/colors-types.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./pages/form-el/form-el.js":
/*!**********************************!*\
  !*** ./pages/form-el/form-el.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_el_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-el.scss */ "./pages/form-el/form-el.scss");
/* harmony import */ var _form_el_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_form_el_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./pages/form-el/form-el.scss":
/*!************************************!*\
  !*** ./pages/form-el/form-el.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./pages/head-foot/head-foot.js":
/*!**************************************!*\
  !*** ./pages/head-foot/head-foot.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _head_foot_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./head-foot.scss */ "./pages/head-foot/head-foot.scss");
/* harmony import */ var _head_foot_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_head_foot_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./pages/head-foot/head-foot.scss":
/*!****************************************!*\
  !*** ./pages/head-foot/head-foot.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./pages/page-landing/img/search-room-back.png":
/*!*****************************************************!*\
  !*** ./pages/page-landing/img/search-room-back.png ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/search-room-back.png");

/***/ }),

/***/ "./pages/page-landing/page-landing.js":
/*!********************************************!*\
  !*** ./pages/page-landing/page-landing.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page_landing_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-landing.scss */ "./pages/page-landing/page-landing.scss");
/* harmony import */ var _page_landing_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_page_landing_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./pages/page-landing/page-landing.scss":
/*!**********************************************!*\
  !*** ./pages/page-landing/page-landing.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./pages/page-login/img/page-reg-background.png":
/*!******************************************************!*\
  !*** ./pages/page-login/img/page-reg-background.png ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/page-reg-background.png");

/***/ }),

/***/ "./pages/page-login/page-login.js":
/*!****************************************!*\
  !*** ./pages/page-login/page-login.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page_login_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-login.scss */ "./pages/page-login/page-login.scss");
/* harmony import */ var _page_login_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_page_login_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./pages/page-login/page-login.scss":
/*!******************************************!*\
  !*** ./pages/page-login/page-login.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./pages/page-reg/img/page-reg-background.png":
/*!****************************************************!*\
  !*** ./pages/page-reg/img/page-reg-background.png ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/page-reg-background.png");

/***/ }),

/***/ "./pages/page-reg/page-reg.js":
/*!************************************!*\
  !*** ./pages/page-reg/page-reg.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page_reg_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-reg.scss */ "./pages/page-reg/page-reg.scss");
/* harmony import */ var _page_reg_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_page_reg_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./pages/page-reg/page-reg.scss":
/*!**************************************!*\
  !*** ./pages/page-reg/page-reg.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./pages/page-room-details/img/room-details1.png":
/*!*******************************************************!*\
  !*** ./pages/page-room-details/img/room-details1.png ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/room-details1.png");

/***/ }),

/***/ "./pages/page-room-details/img/room-details2.png":
/*!*******************************************************!*\
  !*** ./pages/page-room-details/img/room-details2.png ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/room-details2.png");

/***/ }),

/***/ "./pages/page-room-details/img/room-details3.png":
/*!*******************************************************!*\
  !*** ./pages/page-room-details/img/room-details3.png ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "img/room-details3.png");

/***/ }),

/***/ "./pages/page-room-details/page-room-details.js":
/*!******************************************************!*\
  !*** ./pages/page-room-details/page-room-details.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page_room_details_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-room-details.scss */ "./pages/page-room-details/page-room-details.scss");
/* harmony import */ var _page_room_details_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_page_room_details_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./pages/page-room-details/page-room-details.scss":
/*!********************************************************!*\
  !*** ./pages/page-room-details/page-room-details.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./pages/page-search/page-search.js":
/*!******************************************!*\
  !*** ./pages/page-search/page-search.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page_search_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-search.scss */ "./pages/page-search/page-search.scss");
/* harmony import */ var _page_search_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_page_search_scss__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./pages/page-search/page-search.scss":
/*!********************************************!*\
  !*** ./pages/page-search/page-search.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./plug.js":
/*!*****************!*\
  !*** ./plug.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./theme/fonts/text-fonts.scss":
/*!*************************************!*\
  !*** ./theme/fonts/text-fonts.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ "./theme/global.scss":
/*!***************************!*\
  !*** ./theme/global.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi @babel/polyfill ./entry.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! @babel/polyfill */"../node_modules/@babel/polyfill/lib/index.js");
module.exports = __webpack_require__(/*! ./entry.js */"./entry.js");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map