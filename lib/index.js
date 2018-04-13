(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Mango"] = factory();
	else
		root["Mango"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function webpackUniversalModuleDefinition(root, factory) {
    if (( false ? 'undefined' : _typeof2(exports)) === 'object' && ( false ? 'undefined' : _typeof2(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof2(exports)) === 'object') exports["mangoHelper"] = factory();else root["mangoHelper"] = factory();
})(typeof self !== 'undefined' ? self : undefined, function () {
    return (/******/function (modules) {
            /******/ // The module cache
            /******/var installedModules = {};
            /******/
            /******/ // The require function
            /******/function __webpack_require__(moduleId) {
                /******/
                /******/ // Check if module is in cache
                /******/if (installedModules[moduleId]) {
                    /******/return installedModules[moduleId].exports;
                    /******/
                }
                /******/ // Create a new module (and put it into the cache)
                /******/var module = installedModules[moduleId] = {
                    /******/i: moduleId,
                    /******/l: false,
                    /******/exports: {}
                    /******/
                };
                /******/
                /******/ // Execute the module function
                /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                /******/
                /******/ // Flag the module as loaded
                /******/module.l = true;
                /******/
                /******/ // Return the exports of the module
                /******/return module.exports;
                /******/
            }
            /******/
            /******/
            /******/ // expose the modules object (__webpack_modules__)
            /******/__webpack_require__.m = modules;
            /******/
            /******/ // expose the module cache
            /******/__webpack_require__.c = installedModules;
            /******/
            /******/ // define getter function for harmony exports
            /******/__webpack_require__.d = function (exports, name, getter) {
                /******/if (!__webpack_require__.o(exports, name)) {
                    /******/Object.defineProperty(exports, name, {
                        /******/configurable: false,
                        /******/enumerable: true,
                        /******/get: getter
                        /******/
                    });
                    /******/
                }
                /******/
            };
            /******/
            /******/ // getDefaultExport function for compatibility with non-harmony modules
            /******/__webpack_require__.n = function (module) {
                /******/var getter = module && module.__esModule ?
                /******/function getDefault() {
                    return module['default'];
                } :
                /******/function getModuleExports() {
                    return module;
                };
                /******/__webpack_require__.d(getter, 'a', getter);
                /******/return getter;
                /******/
            };
            /******/
            /******/ // Object.prototype.hasOwnProperty.call
            /******/__webpack_require__.o = function (object, property) {
                return Object.prototype.hasOwnProperty.call(object, property);
            };
            /******/
            /******/ // __webpack_public_path__
            /******/__webpack_require__.p = "";
            /******/
            /******/ // Load entry module and return exports
            /******/return __webpack_require__(__webpack_require__.s = 3);
            /******/
        }([
        /* 0 */
        /***/function (module, exports, __webpack_require__) {
            /**
             * toxic-predicate-functions v0.1.5
             * (c) 2017 toxic-johann
             * Released under MIT
             */
            (function (global, factory) {
                true ? factory(exports) : typeof define === 'function' && define.amd ? define(['exports'], factory) : factory(global.toxicPredicateFunctions = {});
            })(this, function (exports) {
                'use strict';

                var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
                    return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
                } : function (obj) {
                    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
                };
                var asyncGenerator = function () {
                    function AwaitValue(value) {
                        this.value = value;
                    }
                    function AsyncGenerator(gen) {
                        var front, back;
                        function send(key, arg) {
                            return new Promise(function (resolve, reject) {
                                var request = {
                                    key: key,
                                    arg: arg,
                                    resolve: resolve,
                                    reject: reject,
                                    next: null
                                };
                                if (back) {
                                    back = back.next = request;
                                } else {
                                    front = back = request;
                                    resume(key, arg);
                                }
                            });
                        }
                        function resume(key, arg) {
                            try {
                                var result = gen[key](arg);
                                var value = result.value;
                                if (value instanceof AwaitValue) {
                                    Promise.resolve(value.value).then(function (arg) {
                                        resume("next", arg);
                                    }, function (arg) {
                                        resume("throw", arg);
                                    });
                                } else {
                                    settle(result.done ? "return" : "normal", result.value);
                                }
                            } catch (err) {
                                settle("throw", err);
                            }
                        }
                        function settle(type, value) {
                            switch (type) {
                                case "return":
                                    front.resolve({
                                        value: value,
                                        done: true
                                    });
                                    break;
                                case "throw":
                                    front.reject(value);
                                    break;
                                default:
                                    front.resolve({
                                        value: value,
                                        done: false
                                    });
                                    break;
                            }
                            front = front.next;
                            if (front) {
                                resume(front.key, front.arg);
                            } else {
                                back = null;
                            }
                        }
                        this._invoke = send;
                        if (typeof gen.return !== "function") {
                            this.return = undefined;
                        }
                    }
                    if (typeof Symbol === "function" && Symbol.asyncIterator) {
                        AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
                            return this;
                        };
                    }
                    AsyncGenerator.prototype.next = function (arg) {
                        return this._invoke("next", arg);
                    };
                    AsyncGenerator.prototype.throw = function (arg) {
                        return this._invoke("throw", arg);
                    };
                    AsyncGenerator.prototype.return = function (arg) {
                        return this._invoke("return", arg);
                    };
                    return {
                        wrap: function wrap(fn) {
                            return function () {
                                return new AsyncGenerator(fn.apply(this, arguments));
                            };
                        },
                        await: function _await(value) {
                            return new AwaitValue(value);
                        }
                    };
                }();
                /**
                 * to check whether the object is defined or not
                 */
                function defined(obj) {
                    return typeof obj !== 'undefined';
                }
                /**
                 * is void element or not ? Means it will return true when val is undefined or null
                 */
                function isVoid(obj) {
                    return obj === undefined || obj === null;
                }
                /**
                 * to check whether a variable is array
                 */
                function isArray(arr) {
                    return Array.isArray(arr);
                }
                /**
                 * is it a function or not
                 */
                function isFunction(obj) {
                    return typeof obj === 'function';
                }
                /**
                 * is it an object or not
                 */
                function isObject(obj) {
                    // incase of arrow function and array
                    return Object(obj) === obj && String(obj) === '[object Object]' && !isFunction(obj) && !isArray(obj);
                }
                /**
                 * to tell you if it's a real number
                 */
                function isNumber(obj) {
                    return typeof obj === 'number';
                }
                /**
                 * to tell you if the val can be transfer into number
                 */
                function isNumeric(obj) {
                    return !isArray(obj) && obj - Number.parseFloat(obj) + 1 >= 0;
                }
                /**
                 * is it an interget or not
                 */
                function isInteger(num) {
                    return Number.isInteger(num);
                }
                /**
                 * return true when the value is "", {}, [], 0, null, undefined, false.
                 */
                function isEmpty(obj) {
                    if (isArray(obj)) {
                        return obj.length === 0;
                    } else if (isObject(obj)) {
                        return Object.keys(obj).length === 0;
                    } else {
                        return !obj;
                    }
                }
                /**
                 * is it an event or not
                 */
                function isEvent(obj) {
                    return obj instanceof Event || (obj && obj.originalEvent) instanceof Event;
                }
                /**
                 * is it a blob
                 */
                function isBlob(obj) {
                    return obj instanceof Blob;
                }
                /**
                 * is it a file uploaded by user through file inpue
                 */
                function isFile(obj) {
                    return isBlob(obj) && isString(obj.name);
                }
                /**
                 * is it a date
                 */
                function isDate(obj) {
                    return Object.prototype.toString.call(obj) === '[object Date]';
                }
                /**
                 * is it a string
                 */
                function isString(str) {
                    return typeof str === 'string' || str instanceof String;
                }
                /**
                 * is Boolean or not
                 */
                function isBoolean(bool) {
                    return typeof bool === 'boolean';
                }
                /**
                 * is a promise or not
                 */
                function isPromise(obj) {
                    return !!obj && ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
                }
                /**
                 * is Primitive type or not, whick means it will return true when data is number/string/boolean/undefined/null
                 */
                function isPrimitive(val) {
                    return isVoid(val) || isBoolean(val) || isString(val) || isNumber(val);
                }
                /**
                 * is it an url, but this test require the url to have an protocol
                 */
                function isUrl(str) {
                    return isString(str) && !!str.match(/^((https?|ftp|rtsp|mms):\/\/)(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?(([0-9]{1,3}\.){3}[0-9]{1,3}|([0-9a-z_!~*'()-]+\.)*([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]\.[a-z]{2,6}|localhost)(:[0-9]{1,4})?((\/?)|(\/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+\/?)$/i);
                }
                /**
                 * to test if a HTML node
                 */
                function isNode(obj) {
                    return !!((typeof Node === 'undefined' ? 'undefined' : _typeof(Node)) === 'object' ? obj instanceof Node : obj && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && typeof obj.nodeType === 'number' && typeof obj.nodeName === 'string');
                }
                /**
                 * to test if a HTML element
                 */
                function isElement(obj) {
                    return !!((typeof HTMLElement === 'undefined' ? 'undefined' : _typeof(HTMLElement)) === 'object' ? obj instanceof HTMLElement : obj && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && obj !== null && obj.nodeType === 1 && typeof obj.nodeName === 'string');
                }
                /**
                 * check if node A is node B's parent or not
                 */
                function isChildNode(parent, child) {
                    if (!isNode(parent) || !isNode(child)) {
                        return false;
                    }
                    return child.parentNode === parent;
                }
                /**
                 * check if node B is node A's posterrity or not
                 */
                function isPosterityNode(parent, child) {
                    if (!isNode(parent) || !isNode(child)) {
                        return false;
                    }
                    while (child.parentNode) {
                        child = child.parentNode;
                        if (child === parent) {
                            return true;
                        }
                    }
                    return false;
                }
                /**
                 * check if the string is an HTMLString
                 */
                function isHTMLString(str) {
                    return (/<[^>]+?>/.test(str)
                    );
                }
                /**
                 * check if is an error
                 */
                function isError(val) {
                    return val instanceof Error;
                }
                /**
                 * check if is an RegExp
                 */
                function isRegExp(val) {
                    return val instanceof RegExp;
                }
                exports.defined = defined;
                exports.isVoid = isVoid;
                exports.isArray = isArray;
                exports.isFunction = isFunction;
                exports.isObject = isObject;
                exports.isNumber = isNumber;
                exports.isNumeric = isNumeric;
                exports.isInteger = isInteger;
                exports.isEmpty = isEmpty;
                exports.isEvent = isEvent;
                exports.isBlob = isBlob;
                exports.isFile = isFile;
                exports.isDate = isDate;
                exports.isString = isString;
                exports.isBoolean = isBoolean;
                exports.isPromise = isPromise;
                exports.isPrimitive = isPrimitive;
                exports.isUrl = isUrl;
                exports.isNode = isNode;
                exports.isElement = isElement;
                exports.isChildNode = isChildNode;
                exports.isPosterityNode = isPosterityNode;
                exports.isHTMLString = isHTMLString;
                exports.isError = isError;
                exports.isRegExp = isRegExp;
                Object.defineProperty(exports, '__esModule', { value: true });
            });
            /***/
        },
        /* 1 */
        /***/function (module, exports, __webpack_require__) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.caf = exports.raf = exports.inBrowser = undefined;
            exports.makeArray = makeArray;
            exports.transObjectAttrIntoArray = transObjectAttrIntoArray;
            exports.runRejectableQueue = runRejectableQueue;
            exports.runStoppableQueue = runStoppableQueue;
            exports.decodeUTF8 = decodeUTF8;
            exports.debounce = debounce;
            exports.throttle = throttle;
            exports.strRepeat = strRepeat;
            exports.formatTime = formatTime;
            exports.appendCSS = appendCSS;
            exports.formatDate = formatDate;
            exports.getLocalStorage = getLocalStorage;
            exports.setLocalStorage = setLocalStorage;
            exports.getUrlParam = getUrlParam;
            exports.getCookie = getCookie;
            var _toxicPredicateFunctions = __webpack_require__(0);
            // **********************  judgement   ************************
            /**
             * check if the code running in browser environment (not include worker env)
             * @returns {Boolean}
             */
            var inBrowser = exports.inBrowser = typeof window !== 'undefined' && Object.prototype.toString.call(window) !== '[object Object]';
            // **********************  对象操作  ************************
            /**
             * 转变一个类数组对象为数组
             */
            // @flow
            function makeArray(obj) {
                return Array.from(obj);
            }
            /**
             * sort Object attributes by function
             * and transfer them into array
             * @param  {Object} obj Object form from numric
             * @param  {Function} fn sort function
             * @return {Array} the sorted attirbutes array
             */
            function transObjectAttrIntoArray(obj, fn) {
                if (fn === void 0) {
                    fn = function fn(a, b) {
                        return +a - +b;
                    };
                }
                return Object.keys(obj).sort(fn).reduce(function (order, key) {
                    return order.concat(obj[key]);
                }, []);
            }
            /**
             * run a queue one by one.If include function reject or return false it will stop
             * @param  {Array} queue the queue which we want to run one by one
             * @return {Promise}    tell us whether a queue run finished
             */
            function runRejectableQueue(queue) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                return new Promise(function (resolve, reject) {
                    var step = function step(index) {
                        if (index >= queue.length) {
                            resolve();
                            return;
                        }
                        var result = (0, _toxicPredicateFunctions.isFunction)(queue[index]) ? queue[index].apply(queue, args) : queue[index];
                        if (result === false) return reject('stop');
                        return Promise.resolve(result).then(function () {
                            return step(index + 1);
                        }).catch(function (err) {
                            return reject(err || 'stop');
                        });
                    };
                    step(0);
                });
            }
            /**
             * run a queue one by one.If include function return false it will stop
             * @param  {Array} queue the queue which we want to run one by one
             * @return {boolean} tell the user if the queue run finished
             */
            function runStoppableQueue(queue) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                }
                var step = function step(index) {
                    if (index >= queue.length) {
                        return true;
                    }
                    var result = (0, _toxicPredicateFunctions.isFunction)(queue[index]) ? queue[index].apply(queue, args) : queue[index];
                    if (result === false) return false;
                    return step(++index);
                };
                return step(0);
            }
            function checkContinuation(uint8array, start, checkLength) {
                var array = uint8array;
                if (start + checkLength < array.length) {
                    while (checkLength--) {
                        if ((array[++start] & 0xC0) !== 0x80) {
                            return false;
                        }
                    }
                    return true;
                }
                return false;
            }
            // decodeUTF8
            function decodeUTF8(uint8array) {
                var out = [];
                var input = uint8array;
                var i = 0;
                var length = uint8array.length;
                while (i < length) {
                    if (input[i] < 0x80) {
                        out.push(String.fromCharCode(input[i]));
                        ++i;
                        continue;
                    } else if (input[i] < 0xC0) {
                        // fallthrough
                    } else if (input[i] < 0xE0) {
                        if (checkContinuation(input, i, 1)) {
                            var ucs4 = (input[i] & 0x1F) << 6 | input[i + 1] & 0x3F;
                            if (ucs4 >= 0x80) {
                                out.push(String.fromCharCode(ucs4 & 0xFFFF));
                                i += 2;
                                continue;
                            }
                        }
                    } else if (input[i] < 0xF0) {
                        if (checkContinuation(input, i, 2)) {
                            var ucs4 = (input[i] & 0xF) << 12 | (input[i + 1] & 0x3F) << 6 | input[i + 2] & 0x3F;
                            if (ucs4 >= 0x800 && (ucs4 & 0xF800) !== 0xD800) {
                                out.push(String.fromCharCode(ucs4 & 0xFFFF));
                                i += 3;
                                continue;
                            }
                        }
                    } else if (input[i] < 0xF8) {
                        if (checkContinuation(input, i, 3)) {
                            var ucs4 = (input[i] & 0x7) << 18 | (input[i + 1] & 0x3F) << 12 | (input[i + 2] & 0x3F) << 6 | input[i + 3] & 0x3F;
                            if (ucs4 > 0x10000 && ucs4 < 0x110000) {
                                ucs4 -= 0x10000;
                                out.push(String.fromCharCode(ucs4 >>> 10 | 0xD800));
                                out.push(String.fromCharCode(ucs4 & 0x3FF | 0xDC00));
                                i += 4;
                                continue;
                            }
                        }
                    }
                    out.push(String.fromCharCode(0xFFFD));
                    ++i;
                }
                return out.join('');
            }
            function debounce(func, wait, immediate) {
                // immediate默认为false
                var timeout, args, context, timestamp, result;
                var later = function later() {
                    // 当wait指定的时间间隔期间多次调用_.debounce返回的函数，则会不断更新timestamp的值，导致last < wait && last >= 0一直为true，从而不断启动新的计时器延时执行func
                    var last = new Date() - timestamp;
                    if (last < wait && last >= 0) {
                        timeout = setTimeout(later, wait - last);
                    } else {
                        timeout = null;
                        if (!immediate) {
                            result = func.apply(context, args);
                            if (!timeout) context = args = null;
                        }
                    }
                };
                return function () {
                    context = this;
                    args = arguments;
                    timestamp = new Date();
                    // 第一次调用该方法时，且immediate为true，则调用func函数
                    var callNow = immediate && !timeout;
                    // 在wait指定的时间间隔内首次调用该方法，则启动计时器定时调用func函数
                    if (!timeout) timeout = setTimeout(later, wait);
                    if (callNow) {
                        result = func.apply(context, args);
                        context = args = null;
                    }
                    return result;
                };
            }
            /**
             * 函数节流（控制函数执行频率）
             * @param  {Function} func 要节流控制的函数，必填
             * @return {Number}   wait 等待时长
             * @return {Object}   options {
             *                      leading<是否首次调用立即执行，否：则按wait设定等待到期后调用才执行>:false,
             *                      trailing<是否在调用并未到期时启用定时器，以保证一定执行>:true
             *                    }
             * @return {Object}   cxt 上下文对象
             * @return {Function}
             */
            function throttle(func, wait, options, cxt) {
                /* options的默认值
                 *  表示首次调用返回值方法时，会马上调用func；否则仅会记录当前时刻，当第二次调用的时间间隔超过wait时，才调用func。
                 *  options.leading = true;
                 * 表示当调用方法时，未到达wait指定的时间间隔，则启动计时器延迟调用func函数，若后续在既未达到wait指定的时间间隔和func函数又未被调用的情况下调用返回值方法，则被调用请求将被丢弃。
                 *  options.trailing = true;
                 * 注意：当options.trailing = false时，效果与上面的简单实现效果相同
                 */
                var context, args, result;
                var timeout = null;
                var previous = 0;
                if (!options) options = {};
                var later = function later() {
                    previous = options.leading === false ? 0 : new Date() - 0;
                    timeout = null;
                    result = func.apply(context, args);
                    if (!timeout) context = args = null;
                };
                wait = wait || 0;
                return function () {
                    var now = new Date();
                    if (!previous && options.leading === false) previous = now;
                    // 计算剩余时间
                    var remaining = wait - (now - previous);
                    if (cxt) {
                        context = cxt;
                    } else {
                        context = this;
                    }
                    args = arguments;
                    // 当到达wait指定的时间间隔，则调用func函数
                    // 精彩之处：按理来说remaining <= 0已经足够证明已经到达wait的时间间隔，但这里还考虑到假如客户端修改了系统时间则马上执行func函数。
                    if (remaining <= 0 || remaining > wait) {
                        // 由于setTimeout存在最小时间精度问题，因此会存在到达wait的时间间隔，但之前设置的setTimeout操作还没被执行，因此为保险起见，这里先清理setTimeout操作
                        if (timeout) {
                            clearTimeout(timeout);
                            timeout = null;
                        }
                        previous = now;
                        result = func.apply(context, args);
                        if (!timeout) context = args = null;
                    } else if (!timeout && options.trailing !== false) {
                        // options.trailing=true时，延时执行func函数
                        timeout = setTimeout(later, remaining);
                    }
                    return result;
                };
            }
            // requestAnimationFrame
            var raf = exports.raf = inBrowser && (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame) || function (cb) {
                return setTimeout(cb, 17);
            };
            // cancelAnimationFrame
            var caf = exports.caf = inBrowser && (window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.msCancelAnimationFrame || window.oCancelAnimationFrame) || function (id) {
                clearTimeout(id);
            };
            // 根据要求的位数，将9格式化为 09\009\0009...
            function strRepeat(num, bit) {
                var pBit = bit;
                num = "" + (num || '');
                var numLen = num.length;
                bit = (bit || numLen) - numLen;
                var paddingStr = bit > 0 ? num.repeat ? '0'.repeat(bit) : new Array(bit + 1).join('0') : '';
                return (paddingStr + num).slice(0, pBit);
            }
            // video 时间格式化
            function formatTime(time) {
                var hh = Math.floor(time / 3600);
                time = Math.floor(time % 3600);
                var mm = strRepeat(Math.floor(time / 60), 2);
                time = Math.floor(time % 60);
                var ss = strRepeat(time, 2);
                return hh >= 1 ? hh + ":" + mm + ":" + ss : mm + ":" + ss;
            }
            /**
             * 追加样式代码到head的style标签，不存在则创建
             * @param {String} cssText 样式文本
             * @return {HTMLElement}
             */
            function appendCSS(cssText) {
                var doc = document;
                var styleEl = doc.querySelector('style');
                if (!styleEl) {
                    styleEl = doc.createElement('style');
                    var header = doc.querySelector('head');
                    header && header.appendChild(styleEl);
                }
                styleEl.appendChild(doc.createTextNode(cssText));
                return styleEl;
            }
            /**
             * 格式化日期对象为：年-月-日 时:分:秒.毫秒
             * @param {Date} date Date日期对象
             * @param {String} pattern 要输出的日期格式，默认：`yyyy-MM-dd hh:mm:ss.i`
             * @return {String}
             */
            function formatDate(date, pattern) {
                if (date === void 0) {
                    date = new Date();
                }
                if (pattern === void 0) {
                    pattern = 'yyyy-MM-dd hh:mm:ss.i';
                }
                var year = date.getFullYear().toString();
                var fields = {
                    M: date.getMonth() + 1,
                    d: date.getDate(),
                    h: date.getHours(),
                    m: date.getMinutes(),
                    s: date.getSeconds(),
                    i: date.getMilliseconds()
                };
                pattern = pattern.replace(/(y+)/ig, function (_, yearPattern) {
                    return year.substr(4 - Math.min(4, yearPattern.length));
                });
                var _loop_1 = function _loop_1(i) {
                    pattern = pattern.replace(new RegExp('(' + i + '+)', 'g'), function (_, pattStr) {
                        return (fields[i] < 10 && pattStr.length > 1 ? '0' : '') + fields[i];
                    });
                };
                for (var i in fields) {
                    _loop_1(i);
                }
                return pattern;
            }
            /**
             * 读取本地存储的值（不支持localStorage则降级到cookie）
             * @param {String} key 目标数据key
             * @return {String}
             */
            function getLocalStorage(key) {
                try {
                    return window.localStorage.getItem(key);
                } catch (e) {
                    try {
                        var regRt = document.cookie.match(new RegExp('(^| )' + key + '=([^;]*)(;|$)'));
                        return (0, _toxicPredicateFunctions.isArray)(regRt) ? unescape(regRt[2]) : '';
                    } catch (e) {
                        return '';
                    }
                }
            }
            /**
             * 将指定key对应值写入本地存储（不支持localStorage则降级到cookie）
             * @param {String} key
             * @param {String} val
             * @return {String}
             */
            function setLocalStorage(key, val) {
                try {
                    window.localStorage.setItem(key, val);
                } catch (e) {
                    var expires = new Date();
                    // 默认存储300天
                    expires.setTime(expires.getTime() + 24 * 3600 * 1000 * 300);
                    try {
                        document.cookie = key + '=' + escape(val) + ';expires=' + expires.toUTCString() + ';path=/;';
                    } catch (e) {
                        console.error(e);
                    }
                }
            }
            function getUrlParam(name) {
                var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象  
                var r = window.location.search.substr(1).match(reg); //匹配目标参数  
                if (r != null) return unescape(r[2]);
                return null; //返回参数值  
            }
            function getCookie(name) {
                var r = new RegExp("(?:^|;+|\\s+)" + name + "=([^;]*)");
                var m = document.cookie.match(r);
                return !m ? "" : m[1];
            }
            /***/
        },
        /* 2 */
        /***/function (module, exports, __webpack_require__) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.CustEvent = undefined;
            var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
                return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
            } : function (obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
            };
            exports.emitEventCache = emitEventCache;
            exports.addEventCache = addEventCache;
            exports.removeEventCache = removeEventCache;
            var _toxicPredicateFunctions = __webpack_require__(0);
            /**
            * @module event
            * @author huzunjie
            * @description 自定义事件基础类
            */
            /* 缓存事件监听方法及包装，内部数据格式：
             * targetIndex_<type:'click|mouseup|done'>: [ [
             *   function(){ ... handler ... },
             *   function(){ ... handlerWrap ... handler.apply(target, arguments) ... },
             *   isOnce
             * ]]
             */
            var _evtListenerCache = Object.create(null);
            _evtListenerCache.count = 0;
            /**
             * 得到某对象的某事件类型对应的监听队列数组
             * @param  {Object}  target 发生事件的对象
             * @param {String} type 事件类型(这里的时间类型不只是名称，还是缓存标识，可以通过添加后缀来区分)
             * @return {Array}
             */
            function getEvtTypeCache(target, type) {
                var evtId = target.__evt_id;
                if (!evtId) {
                    /* 设置__evt_id不可枚举 */
                    Object.defineProperty(target, '__evt_id', {
                        writable: true,
                        enumerable: false,
                        configurable: true
                    });
                    /* 空对象初始化绑定索引 */
                    evtId = target.__evt_id = ++_evtListenerCache.count;
                }
                var typeCacheKey = evtId + '_' + type;
                var evtTypeCache = _evtListenerCache[typeCacheKey];
                if (!evtTypeCache) {
                    evtTypeCache = _evtListenerCache[typeCacheKey] = [];
                }
                return evtTypeCache;
            }
            /**
             * 触发事件监听方法
             * @param  {Object}  target 发生事件的对象
             * @param {String} type 事件类型
             * @param {Object} eventObj 触发事件时要传回的event对象
             * @return {undefined}
             */
            function emitEventCache(target, type, eventObj) {
                var evt = Object.create(null);
                evt.type = type;
                evt.target = target;
                if (eventObj) {
                    Object.assign(evt, (0, _toxicPredicateFunctions.isObject)(eventObj) ? eventObj : { data: eventObj });
                }
                getEvtTypeCache(target, type).forEach(function (item) {
                    (item[1] || item[0]).apply(target, [evt]);
                });
            }
            /**
             * 添加事件监听到缓存
             * @param  {Object}  target 发生事件的对象
             * @param {String} type 事件类型
             * @param {Function} handler 监听函数
             * @param {Boolean} isOnce 是否单次执行
             * @param {Function} handlerWrap
             * @return {undefined}
             */
            function addEventCache(target, type, handler, isOnce, handlerWrap) {
                if (isOnce === void 0) {
                    isOnce = false;
                }
                if ((0, _toxicPredicateFunctions.isFunction)(isOnce) && !handlerWrap) {
                    handlerWrap = isOnce;
                    isOnce = undefined;
                }
                var handlers = [handler, undefined, isOnce];
                if (isOnce && !handlerWrap) {
                    handlerWrap = function handlerWrap() {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        removeEventCache(target, type, handler, isOnce);
                        handler.apply(target, args);
                    };
                }
                if (handlerWrap) {
                    handlers[1] = handlerWrap;
                }
                getEvtTypeCache(target, type).push(handlers);
            }
            /**
             * 移除事件监听
             * @param  {Object}  target 发生事件的对象
             * @param {String} type 事件类型
             * @param {Function} handler 监听函数
             * @return {undefined}
             */
            function removeEventCache(target, type, handler, isOnce) {
                if (isOnce === void 0) {
                    isOnce = false;
                }
                var typeCache = getEvtTypeCache(target, type);
                if (handler || isOnce) {
                    /* 有指定 handler 则清除对应监听 */
                    var handlerId_1 = -1;
                    var handlerWrap_1;
                    typeCache.find(function (item, i) {
                        if ((!handler || item[0] === handler) && (!isOnce || item[2])) {
                            handlerId_1 = i;
                            handlerWrap_1 = item[1];
                            return true;
                        }
                    });
                    if (handlerId_1 !== -1) {
                        typeCache.splice(handlerId_1, 1);
                    }
                    return handlerWrap_1;
                } else {
                    /* 未指定 handler 则清除type对应的所有监听 */
                    typeCache.length = 0;
                }
            }
            /**
             * @class CustEvent
             * @description
             * Event 自定义事件类
             * 1. 可以使用不传参得到的实例作为eventBus使用
             * 2. 可以通过指定target，用多个实例操作同一target对象的事件管理
             * 3. 当设定target时，可以通过设置assign为true，来给target实现"on\once\off\emit"方法
             * @param  {Object}  target 发生事件的对象（空则默认为event实例）
             * @param  {Boolean}  assign 是否将"on\once\off\emit"方法实现到target对象上
             * @return {event}
             */
            var CustEvent = /** @class */function () {
                function CustEvent(target, assign) {
                    var _this = this;
                    /* 设置__target不可枚举 */
                    Object.defineProperty(this, '__target', {
                        writable: true,
                        enumerable: false,
                        configurable: true
                    });
                    this.__target = this;
                    if (target) {
                        if ((typeof target === 'undefined' ? 'undefined' : _typeof(target)) !== 'object') {
                            throw new Error('CusEvent target are not object');
                        }
                        this.__target = target;
                        /* 为target实现on\once\off\emit */
                        if (assign) {
                            ['on', 'once', 'off', 'emit'].forEach(function (mth) {
                                target[mth] = _this[mth];
                            });
                        }
                    }
                }
                /**
                 * 添加事件监听
                 * @param {String} type 事件类型
                 * @param {Function} handler 监听函数
                 * @param {Boolean} isOnce 单次监听类型
                 * @return {event}
                 */
                CustEvent.prototype.on = function (type, handler, isOnce) {
                    if (isOnce === void 0) {
                        isOnce = false;
                    }
                    addEventCache(this.__target, type, handler, isOnce);
                    return this;
                };
                /**
                 * 添加事件监听,并且只执行一次
                 * @param {String} type 事件类型
                 * @param {Function} handler 监听函数
                 * @return {event}
                 */
                CustEvent.prototype.once = function (type, handler) {
                    return this.on(type, handler, true);
                };
                /**
                 * 移除事件监听
                 * @param {String} type 事件类型
                 * @param {Function} handler 监听函数(不指定handler则清除type对应的所有事件监听)
                 * @param {Boolean} isOnce 单次监听类型
                 * @return {event}
                 */
                CustEvent.prototype.off = function (type, handler, isOnce) {
                    if (isOnce === void 0) {
                        isOnce = false;
                    }
                    removeEventCache(this.__target, type, handler, isOnce);
                    return this;
                };
                /**
                 * 触发事件监听函数
                 * @param {String} type 事件类型
                 * @return {event}
                 */
                CustEvent.prototype.emit = function (type, data) {
                    emitEventCache(this.__target, type, { data: data });
                    return this;
                };
                return CustEvent;
            }();
            exports.CustEvent = CustEvent;
            /***/
        },
        /* 3 */
        /***/function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(4);
            /***/
        },
        /* 4 */
        /***/function (module, exports, __webpack_require__) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var _toxicUtils = __webpack_require__(5);
            var ToxicUtils = _interopRequireWildcard(_toxicUtils);
            var _toxicPredicateFunctions = __webpack_require__(0);
            var Predicate = _interopRequireWildcard(_toxicPredicateFunctions);
            var _utils = __webpack_require__(1);
            var Util = _interopRequireWildcard(_utils);
            var _events = __webpack_require__(2);
            var Events = _interopRequireWildcard(_events);
            var _dom = __webpack_require__(6);
            var Dom = _interopRequireWildcard(_dom);
            var _fetchJsonp = __webpack_require__(7);
            var _fetchJsonp2 = _interopRequireDefault(_fetchJsonp);
            var _log = __webpack_require__(8);
            var _log2 = _interopRequireDefault(_log);
            var _uaParserJs = __webpack_require__(9);
            var _uaParserJs2 = _interopRequireDefault(_uaParserJs);
            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
            }
            function _interopRequireWildcard(obj) {
                if (obj && obj.__esModule) {
                    return obj;
                } else {
                    var newObj = {};
                    if (obj != null) {
                        for (var key in obj) {
                            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                        }
                    }
                    newObj.default = obj;
                    return newObj;
                }
            }
            var __assign = undefined && undefined.__assign || Object.assign || function (t) {
                for (var s, i = 1, n = arguments.length; i < n; i++) {
                    s = arguments[i];
                    for (var p in s) {
                        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                    }
                }
                return t;
            };
            // @flow
            exports.default = __assign({}, ToxicUtils, Predicate, Util, Events, Dom, { Log: _log2.default,
                UAParser: _uaParserJs2.default,
                fetchJsonp: _fetchJsonp2.default });
            /***/
        },
        /* 5 */
        /***/function (module, exports, __webpack_require__) {
            /**
             * toxic-utils v0.2.0
             * (c) 2017 toxic-johann
             * Released under MIT
             */
            (function (global, factory) {
                true ? factory(exports) : typeof define === 'function' && define.amd ? define(['exports'], factory) : factory(global.toxicUtils = {});
            })(this, function (exports) {
                'use strict';

                function unwrapExports(x) {
                    return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
                }
                function createCommonjsModule(fn, module) {
                    return module = { exports: {} }, fn(module, module.exports), module.exports;
                }
                // 7.1.4 ToInteger
                var ceil = Math.ceil;
                var floor = Math.floor;
                var _toInteger = function _toInteger(it) {
                    return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
                };
                // 7.2.1 RequireObjectCoercible(argument)
                var _defined = function _defined(it) {
                    if (it == undefined) throw TypeError("Can't call method on  " + it);
                    return it;
                };
                // true  -> String#at
                // false -> String#codePointAt
                var _stringAt = function _stringAt(TO_STRING) {
                    return function (that, pos) {
                        var s = String(_defined(that));
                        var i = _toInteger(pos);
                        var l = s.length;
                        var a, b;
                        if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
                        a = s.charCodeAt(i);
                        return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
                    };
                };
                var _library = true;
                var _global = createCommonjsModule(function (module) {
                    // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
                    var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self
                    // eslint-disable-next-line no-new-func
                    : Function('return this')();
                    if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
                });
                var _core = createCommonjsModule(function (module) {
                    var core = module.exports = { version: '2.5.1' };
                    if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
                });
                var _core_1 = _core.version;
                var _aFunction = function _aFunction(it) {
                    if (typeof it != 'function') throw TypeError(it + ' is not a function!');
                    return it;
                };
                // optional / simple context binding
                var _ctx = function _ctx(fn, that, length) {
                    _aFunction(fn);
                    if (that === undefined) return fn;
                    switch (length) {
                        case 1:
                            return function (a) {
                                return fn.call(that, a);
                            };
                        case 2:
                            return function (a, b) {
                                return fn.call(that, a, b);
                            };
                        case 3:
                            return function (a, b, c) {
                                return fn.call(that, a, b, c);
                            };
                    }
                    return function () /* ...args */{
                        return fn.apply(that, arguments);
                    };
                };
                var _isObject = function _isObject(it) {
                    return (typeof it === 'undefined' ? 'undefined' : _typeof2(it)) === 'object' ? it !== null : typeof it === 'function';
                };
                var _anObject = function _anObject(it) {
                    if (!_isObject(it)) throw TypeError(it + ' is not an object!');
                    return it;
                };
                var _fails = function _fails(exec) {
                    try {
                        return !!exec();
                    } catch (e) {
                        return true;
                    }
                };
                // Thank's IE8 for his funny defineProperty
                var _descriptors = !_fails(function () {
                    return Object.defineProperty({}, 'a', { get: function get() {
                            return 7;
                        } }).a != 7;
                });
                var document = _global.document;
                // typeof document.createElement is 'object' in old IE
                var is = _isObject(document) && _isObject(document.createElement);
                var _domCreate = function _domCreate(it) {
                    return is ? document.createElement(it) : {};
                };
                var _ie8DomDefine = !_descriptors && !_fails(function () {
                    return Object.defineProperty(_domCreate('div'), 'a', { get: function get() {
                            return 7;
                        } }).a != 7;
                });
                // 7.1.1 ToPrimitive(input [, PreferredType])
                // instead of the ES6 spec version, we didn't implement @@toPrimitive case
                // and the second argument - flag - preferred type is a string
                var _toPrimitive = function _toPrimitive(it, S) {
                    if (!_isObject(it)) return it;
                    var fn, val;
                    if (S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
                    if (typeof (fn = it.valueOf) == 'function' && !_isObject(val = fn.call(it))) return val;
                    if (!S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
                    throw TypeError("Can't convert object to primitive value");
                };
                var dP = Object.defineProperty;
                var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
                    _anObject(O);
                    P = _toPrimitive(P, true);
                    _anObject(Attributes);
                    if (_ie8DomDefine) try {
                        return dP(O, P, Attributes);
                    } catch (e) {/* empty */}
                    if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
                    if ('value' in Attributes) O[P] = Attributes.value;
                    return O;
                };
                var _objectDp = {
                    f: f
                };
                var _propertyDesc = function _propertyDesc(bitmap, value) {
                    return {
                        enumerable: !(bitmap & 1),
                        configurable: !(bitmap & 2),
                        writable: !(bitmap & 4),
                        value: value
                    };
                };
                var _hide = _descriptors ? function (object, key, value) {
                    return _objectDp.f(object, key, _propertyDesc(1, value));
                } : function (object, key, value) {
                    object[key] = value;
                    return object;
                };
                var PROTOTYPE = 'prototype';
                var $export = function $export(type, name, source) {
                    var IS_FORCED = type & $export.F;
                    var IS_GLOBAL = type & $export.G;
                    var IS_STATIC = type & $export.S;
                    var IS_PROTO = type & $export.P;
                    var IS_BIND = type & $export.B;
                    var IS_WRAP = type & $export.W;
                    var exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
                    var expProto = exports[PROTOTYPE];
                    var target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] : (_global[name] || {})[PROTOTYPE];
                    var key, own, out;
                    if (IS_GLOBAL) source = name;
                    for (key in source) {
                        // contains in native
                        own = !IS_FORCED && target && target[key] !== undefined;
                        if (own && key in exports) continue;
                        // export native or passed
                        out = own ? target[key] : source[key];
                        // prevent global pollution for namespaces
                        exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
                        // bind timers to global for call from export context
                        : IS_BIND && own ? _ctx(out, _global)
                        // wrap global constructors for prevent change them in library
                        : IS_WRAP && target[key] == out ? function (C) {
                            var F = function F(a, b, c) {
                                if (this instanceof C) {
                                    switch (arguments.length) {
                                        case 0:
                                            return new C();
                                        case 1:
                                            return new C(a);
                                        case 2:
                                            return new C(a, b);
                                    }
                                    return new C(a, b, c);
                                }
                                return C.apply(this, arguments);
                            };
                            F[PROTOTYPE] = C[PROTOTYPE];
                            return F;
                            // make static versions for prototype methods
                        }(out) : IS_PROTO && typeof out == 'function' ? _ctx(Function.call, out) : out;
                        // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
                        if (IS_PROTO) {
                            (exports.virtual || (exports.virtual = {}))[key] = out;
                            // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
                            if (type & $export.R && expProto && !expProto[key]) _hide(expProto, key, out);
                        }
                    }
                };
                // type bitmap
                $export.F = 1; // forced
                $export.G = 2; // global
                $export.S = 4; // static
                $export.P = 8; // proto
                $export.B = 16; // bind
                $export.W = 32; // wrap
                $export.U = 64; // safe
                $export.R = 128; // real proto method for `library`
                var _export = $export;
                var _redefine = _hide;
                var hasOwnProperty = {}.hasOwnProperty;
                var _has = function _has(it, key) {
                    return hasOwnProperty.call(it, key);
                };
                var _iterators = {};
                var toString = {}.toString;
                var _cof = function _cof(it) {
                    return toString.call(it).slice(8, -1);
                };
                // fallback for non-array-like ES3 and non-enumerable old V8 strings
                // eslint-disable-next-line no-prototype-builtins
                var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
                    return _cof(it) == 'String' ? it.split('') : Object(it);
                };
                // to indexed object, toObject with fallback for non-array-like ES3 strings
                var _toIobject = function _toIobject(it) {
                    return _iobject(_defined(it));
                };
                // 7.1.15 ToLength
                var min = Math.min;
                var _toLength = function _toLength(it) {
                    return it > 0 ? min(_toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
                };
                var max = Math.max;
                var min$1 = Math.min;
                var _toAbsoluteIndex = function _toAbsoluteIndex(index, length) {
                    index = _toInteger(index);
                    return index < 0 ? max(index + length, 0) : min$1(index, length);
                };
                // false -> Array#indexOf
                // true  -> Array#includes
                var _arrayIncludes = function _arrayIncludes(IS_INCLUDES) {
                    return function ($this, el, fromIndex) {
                        var O = _toIobject($this);
                        var length = _toLength(O.length);
                        var index = _toAbsoluteIndex(fromIndex, length);
                        var value;
                        // Array#includes uses SameValueZero equality algorithm
                        // eslint-disable-next-line no-self-compare
                        if (IS_INCLUDES && el != el) while (length > index) {
                            value = O[index++];
                            // eslint-disable-next-line no-self-compare
                            if (value != value) return true;
                            // Array#indexOf ignores holes, Array#includes - not
                        } else for (; length > index; index++) {
                            if (IS_INCLUDES || index in O) {
                                if (O[index] === el) return IS_INCLUDES || index || 0;
                            }
                        }return !IS_INCLUDES && -1;
                    };
                };
                var SHARED = '__core-js_shared__';
                var store = _global[SHARED] || (_global[SHARED] = {});
                var _shared = function _shared(key) {
                    return store[key] || (store[key] = {});
                };
                var id = 0;
                var px = Math.random();
                var _uid = function _uid(key) {
                    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
                };
                var shared = _shared('keys');
                var _sharedKey = function _sharedKey(key) {
                    return shared[key] || (shared[key] = _uid(key));
                };
                var arrayIndexOf = _arrayIncludes(false);
                var IE_PROTO$1 = _sharedKey('IE_PROTO');
                var _objectKeysInternal = function _objectKeysInternal(object, names) {
                    var O = _toIobject(object);
                    var i = 0;
                    var result = [];
                    var key;
                    for (key in O) {
                        if (key != IE_PROTO$1) _has(O, key) && result.push(key);
                    } // Don't enum bug & hidden keys
                    while (names.length > i) {
                        if (_has(O, key = names[i++])) {
                            ~arrayIndexOf(result, key) || result.push(key);
                        }
                    }return result;
                };
                // IE 8- don't enum bug keys
                var _enumBugKeys = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');
                // 19.1.2.14 / 15.2.3.14 Object.keys(O)
                var _objectKeys = Object.keys || function keys(O) {
                    return _objectKeysInternal(O, _enumBugKeys);
                };
                var _objectDps = _descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
                    _anObject(O);
                    var keys = _objectKeys(Properties);
                    var length = keys.length;
                    var i = 0;
                    var P;
                    while (length > i) {
                        _objectDp.f(O, P = keys[i++], Properties[P]);
                    }return O;
                };
                var document$1 = _global.document;
                var _html = document$1 && document$1.documentElement;
                // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
                var IE_PROTO = _sharedKey('IE_PROTO');
                var Empty = function Empty() {};
                var PROTOTYPE$1 = 'prototype';
                // Create object with fake `null` prototype: use iframe Object with cleared prototype
                var _createDict = function createDict() {
                    // Thrash, waste and sodomy: IE GC bug
                    var iframe = _domCreate('iframe');
                    var i = _enumBugKeys.length;
                    var lt = '<';
                    var gt = '>';
                    var iframeDocument;
                    iframe.style.display = 'none';
                    _html.appendChild(iframe);
                    iframe.src = 'javascript:'; // eslint-disable-line no-script-url
                    // createDict = iframe.contentWindow.Object;
                    // html.removeChild(iframe);
                    iframeDocument = iframe.contentWindow.document;
                    iframeDocument.open();
                    iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
                    iframeDocument.close();
                    _createDict = iframeDocument.F;
                    while (i--) {
                        delete _createDict[PROTOTYPE$1][_enumBugKeys[i]];
                    }return _createDict();
                };
                var _objectCreate = Object.create || function create(O, Properties) {
                    var result;
                    if (O !== null) {
                        Empty[PROTOTYPE$1] = _anObject(O);
                        result = new Empty();
                        Empty[PROTOTYPE$1] = null;
                        // add "__proto__" for Object.getPrototypeOf polyfill
                        result[IE_PROTO] = O;
                    } else result = _createDict();
                    return Properties === undefined ? result : _objectDps(result, Properties);
                };
                var _wks = createCommonjsModule(function (module) {
                    var store = _shared('wks');
                    var _Symbol = _global.Symbol;
                    var USE_SYMBOL = typeof _Symbol == 'function';
                    var $exports = module.exports = function (name) {
                        return store[name] || (store[name] = USE_SYMBOL && _Symbol[name] || (USE_SYMBOL ? _Symbol : _uid)('Symbol.' + name));
                    };
                    $exports.store = store;
                });
                var def = _objectDp.f;
                var TAG = _wks('toStringTag');
                var _setToStringTag = function _setToStringTag(it, tag, stat) {
                    if (it && !_has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
                };
                var IteratorPrototype = {};
                // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
                _hide(IteratorPrototype, _wks('iterator'), function () {
                    return this;
                });
                var _iterCreate = function _iterCreate(Constructor, NAME, next) {
                    Constructor.prototype = _objectCreate(IteratorPrototype, { next: _propertyDesc(1, next) });
                    _setToStringTag(Constructor, NAME + ' Iterator');
                };
                // 7.1.13 ToObject(argument)
                var _toObject = function _toObject(it) {
                    return Object(_defined(it));
                };
                // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
                var IE_PROTO$2 = _sharedKey('IE_PROTO');
                var ObjectProto = Object.prototype;
                var _objectGpo = Object.getPrototypeOf || function (O) {
                    O = _toObject(O);
                    if (_has(O, IE_PROTO$2)) return O[IE_PROTO$2];
                    if (typeof O.constructor == 'function' && O instanceof O.constructor) {
                        return O.constructor.prototype;
                    }
                    return O instanceof Object ? ObjectProto : null;
                };
                var ITERATOR = _wks('iterator');
                var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
                var FF_ITERATOR = '@@iterator';
                var KEYS = 'keys';
                var VALUES = 'values';
                var returnThis = function returnThis() {
                    return this;
                };
                var _iterDefine = function _iterDefine(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
                    _iterCreate(Constructor, NAME, next);
                    var getMethod = function getMethod(kind) {
                        if (!BUGGY && kind in proto) return proto[kind];
                        switch (kind) {
                            case KEYS:
                                return function keys() {
                                    return new Constructor(this, kind);
                                };
                            case VALUES:
                                return function values() {
                                    return new Constructor(this, kind);
                                };
                        }
                        return function entries() {
                            return new Constructor(this, kind);
                        };
                    };
                    var TAG = NAME + ' Iterator';
                    var DEF_VALUES = DEFAULT == VALUES;
                    var VALUES_BUG = false;
                    var proto = Base.prototype;
                    var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
                    var $default = $native || getMethod(DEFAULT);
                    var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
                    var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
                    var methods, key, IteratorPrototype;
                    // Fix native
                    if ($anyNative) {
                        IteratorPrototype = _objectGpo($anyNative.call(new Base()));
                        if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
                            // Set @@toStringTag to native iterators
                            _setToStringTag(IteratorPrototype, TAG, true);
                            // fix for some old engines
                            if (!_library && !_has(IteratorPrototype, ITERATOR)) _hide(IteratorPrototype, ITERATOR, returnThis);
                        }
                    }
                    // fix Array#{values, @@iterator}.name in V8 / FF
                    if (DEF_VALUES && $native && $native.name !== VALUES) {
                        VALUES_BUG = true;
                        $default = function values() {
                            return $native.call(this);
                        };
                    }
                    // Define iterator
                    if ((!_library || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
                        _hide(proto, ITERATOR, $default);
                    }
                    // Plug for library
                    _iterators[NAME] = $default;
                    _iterators[TAG] = returnThis;
                    if (DEFAULT) {
                        methods = {
                            values: DEF_VALUES ? $default : getMethod(VALUES),
                            keys: IS_SET ? $default : getMethod(KEYS),
                            entries: $entries
                        };
                        if (FORCED) for (key in methods) {
                            if (!(key in proto)) _redefine(proto, key, methods[key]);
                        } else _export(_export.P + _export.F * (BUGGY || VALUES_BUG), NAME, methods);
                    }
                    return methods;
                };
                var $at = _stringAt(true);
                // 21.1.3.27 String.prototype[@@iterator]()
                _iterDefine(String, 'String', function (iterated) {
                    this._t = String(iterated); // target
                    this._i = 0; // next index
                    // 21.1.5.2.1 %StringIteratorPrototype%.next()
                }, function () {
                    var O = this._t;
                    var index = this._i;
                    var point;
                    if (index >= O.length) return { value: undefined, done: true };
                    point = $at(O, index);
                    this._i += point.length;
                    return { value: point, done: false };
                });
                // call something on iterator step with safe closing on error
                var _iterCall = function _iterCall(iterator, fn, value, entries) {
                    try {
                        return entries ? fn(_anObject(value)[0], value[1]) : fn(value);
                        // 7.4.6 IteratorClose(iterator, completion)
                    } catch (e) {
                        var ret = iterator['return'];
                        if (ret !== undefined) _anObject(ret.call(iterator));
                        throw e;
                    }
                };
                // check on default Array iterator
                var ITERATOR$1 = _wks('iterator');
                var ArrayProto = Array.prototype;
                var _isArrayIter = function _isArrayIter(it) {
                    return it !== undefined && (_iterators.Array === it || ArrayProto[ITERATOR$1] === it);
                };
                var _createProperty = function _createProperty(object, index, value) {
                    if (index in object) _objectDp.f(object, index, _propertyDesc(0, value));else object[index] = value;
                };
                // getting tag from 19.1.3.6 Object.prototype.toString()
                var TAG$1 = _wks('toStringTag');
                // ES3 wrong here
                var ARG = _cof(function () {
                    return arguments;
                }()) == 'Arguments';
                // fallback for IE11 Script Access Denied error
                var tryGet = function tryGet(it, key) {
                    try {
                        return it[key];
                    } catch (e) {/* empty */}
                };
                var _classof = function _classof(it) {
                    var O, T, B;
                    return it === undefined ? 'Undefined' : it === null ? 'Null'
                    // @@toStringTag case
                    : typeof (T = tryGet(O = Object(it), TAG$1)) == 'string' ? T
                    // builtinTag case
                    : ARG ? _cof(O)
                    // ES3 arguments fallback
                    : (B = _cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
                };
                var ITERATOR$2 = _wks('iterator');
                var core_getIteratorMethod = _core.getIteratorMethod = function (it) {
                    if (it != undefined) return it[ITERATOR$2] || it['@@iterator'] || _iterators[_classof(it)];
                };
                var ITERATOR$3 = _wks('iterator');
                var SAFE_CLOSING = false;
                try {
                    var riter = [7][ITERATOR$3]();
                    riter['return'] = function () {
                        SAFE_CLOSING = true;
                    };
                    // eslint-disable-next-line no-throw-literal
                } catch (e) {/* empty */}
                var _iterDetect = function _iterDetect(exec, skipClosing) {
                    if (!skipClosing && !SAFE_CLOSING) return false;
                    var safe = false;
                    try {
                        var arr = [7];
                        var iter = arr[ITERATOR$3]();
                        iter.next = function () {
                            return { done: safe = true };
                        };
                        arr[ITERATOR$3] = function () {
                            return iter;
                        };
                        exec(arr);
                    } catch (e) {/* empty */}
                    return safe;
                };
                _export(_export.S + _export.F * !_iterDetect(function (iter) {}), 'Array', {
                    // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
                    from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
                        var O = _toObject(arrayLike);
                        var C = typeof this == 'function' ? this : Array;
                        var aLen = arguments.length;
                        var mapfn = aLen > 1 ? arguments[1] : undefined;
                        var mapping = mapfn !== undefined;
                        var index = 0;
                        var iterFn = core_getIteratorMethod(O);
                        var length, result, step, iterator;
                        if (mapping) mapfn = _ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
                        // if object isn't iterable or it's array with default iterator - use simple case
                        if (iterFn != undefined && !(C == Array && _isArrayIter(iterFn))) {
                            for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
                                _createProperty(result, index, mapping ? _iterCall(iterator, mapfn, [step.value, index], true) : step.value);
                            }
                        } else {
                            length = _toLength(O.length);
                            for (result = new C(length); length > index; index++) {
                                _createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
                            }
                        }
                        result.length = index;
                        return result;
                    }
                });
                var from$2 = _core.Array.from;
                var from = createCommonjsModule(function (module) {
                    module.exports = { "default": from$2, __esModule: true };
                });
                unwrapExports(from);
                var toConsumableArray = createCommonjsModule(function (module, exports) {
                    exports.__esModule = true;
                    var _from2 = _interopRequireDefault(from);
                    function _interopRequireDefault(obj) {
                        return obj && obj.__esModule ? obj : { default: obj };
                    }
                    exports.default = function (arr) {
                        if (Array.isArray(arr)) {
                            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
                                arr2[i] = arr[i];
                            }
                            return arr2;
                        } else {
                            return (0, _from2.default)(arr);
                        }
                    };
                });
                var _toConsumableArray = unwrapExports(toConsumableArray);
                var _iterStep = function _iterStep(done, value) {
                    return { value: value, done: !!done };
                };
                // 22.1.3.4 Array.prototype.entries()
                // 22.1.3.13 Array.prototype.keys()
                // 22.1.3.29 Array.prototype.values()
                // 22.1.3.30 Array.prototype[@@iterator]()
                var es6_array_iterator = _iterDefine(Array, 'Array', function (iterated, kind) {
                    this._t = _toIobject(iterated); // target
                    this._i = 0; // next index
                    this._k = kind; // kind
                    // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
                }, function () {
                    var O = this._t;
                    var kind = this._k;
                    var index = this._i++;
                    if (!O || index >= O.length) {
                        this._t = undefined;
                        return _iterStep(1);
                    }
                    if (kind == 'keys') return _iterStep(0, index);
                    if (kind == 'values') return _iterStep(0, O[index]);
                    return _iterStep(0, [index, O[index]]);
                }, 'values');
                // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
                _iterators.Arguments = _iterators.Array;
                var TO_STRING_TAG = _wks('toStringTag');
                var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' + 'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' + 'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' + 'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' + 'TextTrackList,TouchList').split(',');
                for (var i = 0; i < DOMIterables.length; i++) {
                    var NAME = DOMIterables[i];
                    var Collection = _global[NAME];
                    var proto = Collection && Collection.prototype;
                    if (proto && !proto[TO_STRING_TAG]) _hide(proto, TO_STRING_TAG, NAME);
                    _iterators[NAME] = _iterators.Array;
                }
                var f$1 = _wks;
                var _wksExt = {
                    f: f$1
                };
                var iterator$2 = _wksExt.f('iterator');
                var iterator = createCommonjsModule(function (module) {
                    module.exports = { "default": iterator$2, __esModule: true };
                });
                unwrapExports(iterator);
                var _meta = createCommonjsModule(function (module) {
                    var META = _uid('meta');
                    var setDesc = _objectDp.f;
                    var id = 0;
                    var isExtensible = Object.isExtensible || function () {
                        return true;
                    };
                    var FREEZE = !_fails(function () {
                        return isExtensible(Object.preventExtensions({}));
                    });
                    var setMeta = function setMeta(it) {
                        setDesc(it, META, { value: {
                                i: 'O' + ++id,
                                w: {} // weak collections IDs
                            } });
                    };
                    var fastKey = function fastKey(it, create) {
                        // return primitive with prefix
                        if (!_isObject(it)) return (typeof it === 'undefined' ? 'undefined' : _typeof2(it)) == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
                        if (!_has(it, META)) {
                            // can't set metadata to uncaught frozen object
                            if (!isExtensible(it)) return 'F';
                            // not necessary to add metadata
                            if (!create) return 'E';
                            // add missing metadata
                            setMeta(it);
                            // return object ID
                        }
                        return it[META].i;
                    };
                    var getWeak = function getWeak(it, create) {
                        if (!_has(it, META)) {
                            // can't set metadata to uncaught frozen object
                            if (!isExtensible(it)) return true;
                            // not necessary to add metadata
                            if (!create) return false;
                            // add missing metadata
                            setMeta(it);
                            // return hash weak collections IDs
                        }
                        return it[META].w;
                    };
                    // add metadata on freeze-family methods calling
                    var onFreeze = function onFreeze(it) {
                        if (FREEZE && meta.NEED && isExtensible(it) && !_has(it, META)) setMeta(it);
                        return it;
                    };
                    var meta = module.exports = {
                        KEY: META,
                        NEED: false,
                        fastKey: fastKey,
                        getWeak: getWeak,
                        onFreeze: onFreeze
                    };
                });
                var _meta_1 = _meta.KEY;
                var _meta_2 = _meta.NEED;
                var _meta_3 = _meta.fastKey;
                var _meta_4 = _meta.getWeak;
                var _meta_5 = _meta.onFreeze;
                var defineProperty = _objectDp.f;
                var _wksDefine = function _wksDefine(name) {
                    var $Symbol = _core.Symbol || (_core.Symbol = _library ? {} : _global.Symbol || {});
                    if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: _wksExt.f(name) });
                };
                var f$2 = Object.getOwnPropertySymbols;
                var _objectGops = {
                    f: f$2
                };
                var f$3 = {}.propertyIsEnumerable;
                var _objectPie = {
                    f: f$3
                };
                // all enumerable object keys, includes symbols
                var _enumKeys = function _enumKeys(it) {
                    var result = _objectKeys(it);
                    var getSymbols = _objectGops.f;
                    if (getSymbols) {
                        var symbols = getSymbols(it);
                        var isEnum = _objectPie.f;
                        var i = 0;
                        var key;
                        while (symbols.length > i) {
                            if (isEnum.call(it, key = symbols[i++])) result.push(key);
                        }
                    }
                    return result;
                };
                // 7.2.2 IsArray(argument)
                var _isArray = Array.isArray || function isArray(arg) {
                    return _cof(arg) == 'Array';
                };
                // 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
                var hiddenKeys = _enumBugKeys.concat('length', 'prototype');
                var f$5 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
                    return _objectKeysInternal(O, hiddenKeys);
                };
                var _objectGopn = {
                    f: f$5
                };
                // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
                var gOPN$1 = _objectGopn.f;
                var toString$1 = {}.toString;
                var windowNames = (typeof window === 'undefined' ? 'undefined' : _typeof2(window)) == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
                var getWindowNames = function getWindowNames(it) {
                    try {
                        return gOPN$1(it);
                    } catch (e) {
                        return windowNames.slice();
                    }
                };
                var f$4 = function getOwnPropertyNames(it) {
                    return windowNames && toString$1.call(it) == '[object Window]' ? getWindowNames(it) : gOPN$1(_toIobject(it));
                };
                var _objectGopnExt = {
                    f: f$4
                };
                var gOPD$1 = Object.getOwnPropertyDescriptor;
                var f$6 = _descriptors ? gOPD$1 : function getOwnPropertyDescriptor(O, P) {
                    O = _toIobject(O);
                    P = _toPrimitive(P, true);
                    if (_ie8DomDefine) try {
                        return gOPD$1(O, P);
                    } catch (e) {/* empty */}
                    if (_has(O, P)) return _propertyDesc(!_objectPie.f.call(O, P), O[P]);
                };
                var _objectGopd = {
                    f: f$6
                };
                // ECMAScript 6 symbols shim
                var META = _meta.KEY;
                var gOPD = _objectGopd.f;
                var dP$1 = _objectDp.f;
                var gOPN = _objectGopnExt.f;
                var $Symbol = _global.Symbol;
                var $JSON = _global.JSON;
                var _stringify = $JSON && $JSON.stringify;
                var PROTOTYPE$2 = 'prototype';
                var HIDDEN = _wks('_hidden');
                var TO_PRIMITIVE = _wks('toPrimitive');
                var isEnum = {}.propertyIsEnumerable;
                var SymbolRegistry = _shared('symbol-registry');
                var AllSymbols = _shared('symbols');
                var OPSymbols = _shared('op-symbols');
                var ObjectProto$1 = Object[PROTOTYPE$2];
                var USE_NATIVE = typeof $Symbol == 'function';
                var QObject = _global.QObject;
                // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
                var setter = !QObject || !QObject[PROTOTYPE$2] || !QObject[PROTOTYPE$2].findChild;
                // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
                var setSymbolDesc = _descriptors && _fails(function () {
                    return _objectCreate(dP$1({}, 'a', {
                        get: function get() {
                            return dP$1(this, 'a', { value: 7 }).a;
                        }
                    })).a != 7;
                }) ? function (it, key, D) {
                    var protoDesc = gOPD(ObjectProto$1, key);
                    if (protoDesc) delete ObjectProto$1[key];
                    dP$1(it, key, D);
                    if (protoDesc && it !== ObjectProto$1) dP$1(ObjectProto$1, key, protoDesc);
                } : dP$1;
                var wrap = function wrap(tag) {
                    var sym = AllSymbols[tag] = _objectCreate($Symbol[PROTOTYPE$2]);
                    sym._k = tag;
                    return sym;
                };
                var isSymbol = USE_NATIVE && _typeof2($Symbol.iterator) == 'symbol' ? function (it) {
                    return (typeof it === 'undefined' ? 'undefined' : _typeof2(it)) == 'symbol';
                } : function (it) {
                    return it instanceof $Symbol;
                };
                var $defineProperty = function defineProperty(it, key, D) {
                    if (it === ObjectProto$1) $defineProperty(OPSymbols, key, D);
                    _anObject(it);
                    key = _toPrimitive(key, true);
                    _anObject(D);
                    if (_has(AllSymbols, key)) {
                        if (!D.enumerable) {
                            if (!_has(it, HIDDEN)) dP$1(it, HIDDEN, _propertyDesc(1, {}));
                            it[HIDDEN][key] = true;
                        } else {
                            if (_has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
                            D = _objectCreate(D, { enumerable: _propertyDesc(0, false) });
                        }
                        return setSymbolDesc(it, key, D);
                    }
                    return dP$1(it, key, D);
                };
                var $defineProperties = function defineProperties(it, P) {
                    _anObject(it);
                    var keys = _enumKeys(P = _toIobject(P));
                    var i = 0;
                    var l = keys.length;
                    var key;
                    while (l > i) {
                        $defineProperty(it, key = keys[i++], P[key]);
                    }return it;
                };
                var $create = function create(it, P) {
                    return P === undefined ? _objectCreate(it) : $defineProperties(_objectCreate(it), P);
                };
                var $propertyIsEnumerable = function propertyIsEnumerable(key) {
                    var E = isEnum.call(this, key = _toPrimitive(key, true));
                    if (this === ObjectProto$1 && _has(AllSymbols, key) && !_has(OPSymbols, key)) return false;
                    return E || !_has(this, key) || !_has(AllSymbols, key) || _has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
                };
                var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
                    it = _toIobject(it);
                    key = _toPrimitive(key, true);
                    if (it === ObjectProto$1 && _has(AllSymbols, key) && !_has(OPSymbols, key)) return;
                    var D = gOPD(it, key);
                    if (D && _has(AllSymbols, key) && !(_has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
                    return D;
                };
                var $getOwnPropertyNames = function getOwnPropertyNames(it) {
                    var names = gOPN(_toIobject(it));
                    var result = [];
                    var i = 0;
                    var key;
                    while (names.length > i) {
                        if (!_has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
                    }
                    return result;
                };
                var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
                    var IS_OP = it === ObjectProto$1;
                    var names = gOPN(IS_OP ? OPSymbols : _toIobject(it));
                    var result = [];
                    var i = 0;
                    var key;
                    while (names.length > i) {
                        if (_has(AllSymbols, key = names[i++]) && (IS_OP ? _has(ObjectProto$1, key) : true)) result.push(AllSymbols[key]);
                    }
                    return result;
                };
                // 19.4.1.1 Symbol([description])
                if (!USE_NATIVE) {
                    $Symbol = function _Symbol2() {
                        if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
                        var tag = _uid(arguments.length > 0 ? arguments[0] : undefined);
                        var $set = function $set(value) {
                            if (this === ObjectProto$1) $set.call(OPSymbols, value);
                            if (_has(this, HIDDEN) && _has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
                            setSymbolDesc(this, tag, _propertyDesc(1, value));
                        };
                        if (_descriptors && setter) setSymbolDesc(ObjectProto$1, tag, { configurable: true, set: $set });
                        return wrap(tag);
                    };
                    _redefine($Symbol[PROTOTYPE$2], 'toString', function toString() {
                        return this._k;
                    });
                    _objectGopd.f = $getOwnPropertyDescriptor;
                    _objectDp.f = $defineProperty;
                    _objectGopn.f = _objectGopnExt.f = $getOwnPropertyNames;
                    _objectPie.f = $propertyIsEnumerable;
                    _objectGops.f = $getOwnPropertySymbols;
                    if (_descriptors && !_library) {
                        _redefine(ObjectProto$1, 'propertyIsEnumerable', $propertyIsEnumerable, true);
                    }
                    _wksExt.f = function (name) {
                        return wrap(_wks(name));
                    };
                }
                _export(_export.G + _export.W + _export.F * !USE_NATIVE, { Symbol: $Symbol });
                for (var es6Symbols =
                // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
                'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(','), j = 0; es6Symbols.length > j;) {
                    _wks(es6Symbols[j++]);
                }for (var wellKnownSymbols = _objectKeys(_wks.store), k = 0; wellKnownSymbols.length > k;) {
                    _wksDefine(wellKnownSymbols[k++]);
                }_export(_export.S + _export.F * !USE_NATIVE, 'Symbol', {
                    // 19.4.2.1 Symbol.for(key)
                    'for': function _for(key) {
                        return _has(SymbolRegistry, key += '') ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
                    },
                    // 19.4.2.5 Symbol.keyFor(sym)
                    keyFor: function keyFor(sym) {
                        if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
                        for (var key in SymbolRegistry) {
                            if (SymbolRegistry[key] === sym) return key;
                        }
                    },
                    useSetter: function useSetter() {
                        setter = true;
                    },
                    useSimple: function useSimple() {
                        setter = false;
                    }
                });
                _export(_export.S + _export.F * !USE_NATIVE, 'Object', {
                    // 19.1.2.2 Object.create(O [, Properties])
                    create: $create,
                    // 19.1.2.4 Object.defineProperty(O, P, Attributes)
                    defineProperty: $defineProperty,
                    // 19.1.2.3 Object.defineProperties(O, Properties)
                    defineProperties: $defineProperties,
                    // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
                    getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
                    // 19.1.2.7 Object.getOwnPropertyNames(O)
                    getOwnPropertyNames: $getOwnPropertyNames,
                    // 19.1.2.8 Object.getOwnPropertySymbols(O)
                    getOwnPropertySymbols: $getOwnPropertySymbols
                });
                // 24.3.2 JSON.stringify(value [, replacer [, space]])
                $JSON && _export(_export.S + _export.F * (!USE_NATIVE || _fails(function () {
                    var S = $Symbol();
                    // MS Edge converts symbol values to JSON as {}
                    // WebKit converts symbol values to JSON as null
                    // V8 throws on boxed symbols
                    return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
                })), 'JSON', {
                    stringify: function stringify(it) {
                        if (it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
                        var args = [it];
                        var i = 1;
                        var replacer, $replacer;
                        while (arguments.length > i) {
                            args.push(arguments[i++]);
                        }replacer = args[1];
                        if (typeof replacer == 'function') $replacer = replacer;
                        if ($replacer || !_isArray(replacer)) replacer = function replacer(key, value) {
                            if ($replacer) value = $replacer.call(this, key, value);
                            if (!isSymbol(value)) return value;
                        };
                        args[1] = replacer;
                        return _stringify.apply($JSON, args);
                    }
                });
                // 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
                $Symbol[PROTOTYPE$2][TO_PRIMITIVE] || _hide($Symbol[PROTOTYPE$2], TO_PRIMITIVE, $Symbol[PROTOTYPE$2].valueOf);
                // 19.4.3.5 Symbol.prototype[@@toStringTag]
                _setToStringTag($Symbol, 'Symbol');
                // 20.2.1.9 Math[@@toStringTag]
                _setToStringTag(Math, 'Math', true);
                // 24.3.3 JSON[@@toStringTag]
                _setToStringTag(_global.JSON, 'JSON', true);
                _wksDefine('asyncIterator');
                _wksDefine('observable');
                var symbol$2 = _core.Symbol;
                var symbol = createCommonjsModule(function (module) {
                    module.exports = { "default": symbol$2, __esModule: true };
                });
                unwrapExports(symbol);
                var _typeof_1 = createCommonjsModule(function (module, exports) {
                    exports.__esModule = true;
                    var _iterator2 = _interopRequireDefault(iterator);
                    var _symbol2 = _interopRequireDefault(symbol);
                    var _typeof = typeof _symbol2.default === "function" && _typeof2(_iterator2.default) === "symbol" ? function (obj) {
                        return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
                    } : function (obj) {
                        return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
                    };
                    function _interopRequireDefault(obj) {
                        return obj && obj.__esModule ? obj : { default: obj };
                    }
                    exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
                        return typeof obj === "undefined" ? "undefined" : _typeof(obj);
                    } : function (obj) {
                        return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
                    };
                });
                unwrapExports(_typeof_1);
                // most Object methods by ES6 should accept primitives
                var _objectSap = function _objectSap(KEY, exec) {
                    var fn = (_core.Object || {})[KEY] || Object[KEY];
                    var exp = {};
                    exp[KEY] = exec(fn);
                    _export(_export.S + _export.F * _fails(function () {
                        fn(1);
                    }), 'Object', exp);
                };
                // 19.1.2.14 Object.keys(O)
                _objectSap('keys', function () {
                    return function keys(it) {
                        return _objectKeys(_toObject(it));
                    };
                });
                var keys$1 = _core.Object.keys;
                var keys = createCommonjsModule(function (module) {
                    module.exports = { "default": keys$1, __esModule: true };
                });
                unwrapExports(keys);
                // 20.1.2.3 Number.isInteger(number)
                var floor$1 = Math.floor;
                var _isInteger = function isInteger(it) {
                    return !_isObject(it) && isFinite(it) && floor$1(it) === it;
                };
                // 20.1.2.3 Number.isInteger(number)
                _export(_export.S, 'Number', { isInteger: _isInteger });
                var isInteger$2 = _core.Number.isInteger;
                var isInteger$1 = createCommonjsModule(function (module) {
                    module.exports = { "default": isInteger$2, __esModule: true };
                });
                unwrapExports(isInteger$1);
                var _stringWs = '\t\n\x0B\f\r \xA0\u1680\u180E\u2000\u2001\u2002\u2003' + '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';
                var space = '[' + _stringWs + ']';
                var non = '\u200B\x85';
                var ltrim = RegExp('^' + space + space + '*');
                var rtrim = RegExp(space + space + '*$');
                var exporter = function exporter(KEY, exec, ALIAS) {
                    var exp = {};
                    var FORCE = _fails(function () {
                        return !!_stringWs[KEY]() || non[KEY]() != non;
                    });
                    var fn = exp[KEY] = FORCE ? exec(trim) : _stringWs[KEY];
                    if (ALIAS) exp[ALIAS] = fn;
                    _export(_export.P + _export.F * FORCE, 'String', exp);
                };
                // 1 -> String#trimLeft
                // 2 -> String#trimRight
                // 3 -> String#trim
                var trim = exporter.trim = function (string, TYPE) {
                    string = String(_defined(string));
                    if (TYPE & 1) string = string.replace(ltrim, '');
                    if (TYPE & 2) string = string.replace(rtrim, '');
                    return string;
                };
                var _stringTrim = exporter;
                var $parseFloat = _global.parseFloat;
                var $trim = _stringTrim.trim;
                var _parseFloat$3 = 1 / $parseFloat(_stringWs + '-0') !== -Infinity ? function parseFloat(str) {
                    var string = $trim(String(str), 3);
                    var result = $parseFloat(string);
                    return result === 0 && string.charAt(0) == '-' ? -0 : result;
                } : $parseFloat;
                // 20.1.2.12 Number.parseFloat(string)
                _export(_export.S + _export.F * (Number.parseFloat != _parseFloat$3), 'Number', { parseFloat: _parseFloat$3 });
                var _parseFloat$1 = parseFloat;
                var _parseFloat = createCommonjsModule(function (module) {
                    module.exports = { "default": _parseFloat$1, __esModule: true };
                });
                unwrapExports(_parseFloat);
                /**
                 * toxic-predicate-functions v0.1.5
                 * (c) 2017 toxic-johann
                 * Released under MIT
                 */
                /**
                 * is void element or not ? Means it will return true when val is undefined or null
                 */
                function isVoid(obj) {
                    return obj === undefined || obj === null;
                }
                /**
                 * to check whether a variable is array
                 */
                function isArray(arr) {
                    return Array.isArray(arr);
                }
                /**
                 * is it a function or not
                 */
                function isFunction(obj) {
                    return typeof obj === 'function';
                }
                /**
                 * is it an object or not
                 */
                function isObject$1(obj) {
                    // incase of arrow function and array
                    return Object(obj) === obj && String(obj) === '[object Object]' && !isFunction(obj) && !isArray(obj);
                }
                /**
                 * to tell you if it's a real number
                 */
                function isNumber(obj) {
                    return typeof obj === 'number';
                }
                /**
                 * is it a string
                 */
                function isString(str) {
                    return typeof str === 'string' || str instanceof String;
                }
                /**
                 * is Boolean or not
                 */
                function isBoolean(bool) {
                    return typeof bool === 'boolean';
                }
                /**
                 * is Primitive type or not, whick means it will return true when data is number/string/boolean/undefined/null
                 */
                function isPrimitive(val) {
                    return isVoid(val) || isBoolean(val) || isString(val) || isNumber(val);
                }
                /**
                 * the handler to generate an deep traversal handler
                 * @param  {Function} fn the function you wanna run when you reach in the deep property
                 * @return {Function}    the handler
                 */
                function genTraversalHandler(fn) {
                    var setter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (target, key, value) {
                        target[key] = value;
                    };
                    // use recursive to move what in source to the target
                    // if you do not provide a target, we will create a new target
                    function recursiveFn(source, target, key) {
                        if (isArray(source) || isObject$1(source)) {
                            target = isPrimitive(target) ? isObject$1(source) ? {} : [] : target;
                            for (var _key in source) {
                                // $FlowFixMe: support computed key here
                                setter(target, _key, recursiveFn(source[_key], target[_key], _key));
                                // target[key] = recursiveFn(source[key], target[key], key);
                            }
                            return target;
                        }
                        return fn(source, target, key);
                    }
                    return recursiveFn;
                }
                var _deepAssign = genTraversalHandler(function (val) {
                    return val;
                });
                /**
                 * deeply clone an object
                 * @param  {Array|Object} source if you pass in other type, it will throw an error
                 * @return {clone-target}        the new Object
                 */
                function deepClone(source) {
                    if (isPrimitive(source)) {
                        throw new TypeError('deepClone only accept non primitive type');
                    }
                    return _deepAssign(source);
                }
                /**
                 * merge multiple objects
                 * @param  {...Object} args [description]
                 * @return {merge-object}         [description]
                 */
                function deepAssign() {
                    for (var _len = arguments.length, args = Array(_len), _key2 = 0; _key2 < _len; _key2++) {
                        args[_key2] = arguments[_key2];
                    }
                    if (args.length < 2) {
                        throw new Error('deepAssign accept two and more argument');
                    }
                    for (var i = args.length - 1; i > -1; i--) {
                        if (isPrimitive(args[i])) {
                            throw new TypeError('deepAssign only accept non primitive type');
                        }
                    }
                    var target = args.shift();
                    args.forEach(function (source) {
                        return _deepAssign(source, target);
                    });
                    return target;
                }
                /**
                 * camelize any string, e.g hello world -> helloWorld
                 * @param  {string} str only accept string!
                 * @return {string}     camelize string
                 */
                function camelize(str, isBig) {
                    return str.replace(/(^|[^a-zA-Z]+)([a-zA-Z])/g, function (match, spilt, initials, index) {
                        return !isBig && index === 0 ? initials.toLowerCase() : initials.toUpperCase();
                    });
                }
                /**
                 * hypenate any string e.g hello world -> hello-world
                 * @param  {string} str only accept string
                 * @return {string}
                 */
                function hypenate(str) {
                    return camelize(str).replace(/([A-Z])/g, function (match) {
                        return '-' + match.toLowerCase();
                    });
                }
                /**
                 * bind the function with some context. we have some fallback strategy here
                 * @param {function} fn the function which we need to bind the context on
                 * @param {any} context the context object
                 */
                function bind(fn, context) {
                    if (fn.bind) {
                        return fn.bind(context);
                    } else if (fn.apply) {
                        return function __autobind__() {
                            for (var _len2 = arguments.length, args = Array(_len2), _key3 = 0; _key3 < _len2; _key3++) {
                                args[_key3] = arguments[_key3];
                            }
                            return fn.apply(context, args);
                        };
                    } else {
                        return function __autobind__() {
                            for (var _len3 = arguments.length, args = Array(_len3), _key4 = 0; _key4 < _len3; _key4++) {
                                args[_key4] = arguments[_key4];
                            }
                            return fn.call.apply(fn, [context].concat(_toConsumableArray(args)));
                        };
                    }
                }
                /**
                 * generate an uuid
                 */
                function uuid() {
                    return S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4();
                }
                /**
                 * generate an random number which length is 4
                 */
                function S4() {
                    return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
                }
                /**
                 * generate an random number with specific length
                 */
                function rand(length) {
                    var str = '';
                    while (str.length < length) {
                        str += S4();
                    }
                    return str.slice(0, length);
                }
                /**
                 * get an deep property
                 */
                function getDeepProperty(obj, keys) {
                    var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
                        _ref$throwError = _ref.throwError,
                        throwError = _ref$throwError === undefined ? false : _ref$throwError,
                        backup = _ref.backup;
                    if (isString(keys)) {
                        keys = keys.split('.');
                    }
                    if (!isArray(keys)) {
                        throw new TypeError('keys of getDeepProperty must be string or Array<string>');
                    }
                    var read = [];
                    var target = obj;
                    for (var i = 0, len = keys.length; i < len; i++) {
                        var key = keys[i];
                        if (isVoid(target)) {
                            if (throwError) {
                                throw new Error('obj' + (read.length > 0 ? '.' + read.join('.') : ' itself') + ' is ' + target);
                            } else {
                                return backup;
                            }
                        }
                        target = target[key];
                        read.push(key);
                    }
                    return target;
                }
                exports.genTraversalHandler = genTraversalHandler;
                exports.deepClone = deepClone;
                exports.deepAssign = deepAssign;
                exports.camelize = camelize;
                exports.hypenate = hypenate;
                exports.bind = bind;
                exports.uuid = uuid;
                exports.S4 = S4;
                exports.rand = rand;
                exports.getDeepProperty = getDeepProperty;
                Object.defineProperty(exports, '__esModule', { value: true });
            });
            /***/
        },
        /* 6 */
        /***/function (module, exports, __webpack_require__) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.NodeWrap = exports.supportsPassive = undefined;
            exports.getAttr = getAttr;
            exports.setAttr = setAttr;
            exports.addClassName = addClassName;
            exports.removeClassName = removeClassName;
            exports.hasClassName = hasClassName;
            exports.removeEvent = removeEvent;
            exports.addEvent = addEvent;
            exports.addDelegate = addDelegate;
            exports.removeDelegate = removeDelegate;
            exports.getStyle = getStyle;
            exports.setStyle = setStyle;
            exports.query = query;
            exports.removeEl = removeEl;
            exports.findParents = findParents;
            exports.$ = $;
            var _toxicPredicateFunctions = __webpack_require__(0);
            var _events = __webpack_require__(2);
            var _utils = __webpack_require__(1);
            /**
             * @module dom
             * @author huzunjie
             * @description 一些常用的DOM判断及操作方法，可以使用dom.$('*')包装DOM，实现类jQuery的链式操作；当然这里的静态方法也可以直接使用。
             */
            var _divEl = _utils.inBrowser ? document.createElement('div') : {};
            var _textAttrName = 'innerText';
            'textContent' in _divEl && (_textAttrName = 'textContent');
            var _arrPrototype = Array.prototype;
            /**
             * 读取HTML元素属性值
             * @param {HTMLElement} el 目标元素
             * @param {String} attrName 目标属性名称
             * @return {String}
             */
            function getAttr(el, attrName) {
                return el.getAttribute(attrName);
            }
            /**
             * 设置HTML元素属性值
             * @param {HTMLElement} el 目标元素
             * @param {String} attrName 目标属性名称
             * @param {String} attrVal 目标属性值
             */
            function setAttr(el, attrName, attrVal) {
                if (attrVal === undefined) {
                    el.removeAttribute(attrName);
                } else {
                    el.setAttribute(attrName, attrVal);
                }
            }
            /**
             * 为HTML元素添加className
             * @param {HTMLElement} el 目标元素
             * @param {String} cls 要添加的className（多个以空格分割）
             */
            function addClassName(el, cls) {
                if (!cls || !(cls = cls.trim())) {
                    return;
                }
                var clsArr = cls.split(/\s+/);
                if (el.classList) {
                    clsArr.forEach(function (c) {
                        return el.classList.add(c);
                    });
                } else {
                    var curCls_1 = " " + (el.className || '') + " ";
                    clsArr.forEach(function (c) {
                        curCls_1.indexOf(" " + c + " ") === -1 && (curCls_1 += ' ' + c);
                    });
                    el.className = curCls_1.trim();
                }
            }
            /**
             * 为HTML元素移除className
             * @param {HTMLElement} el 目标元素
             * @param {String} cls 要移除的className（多个以空格分割）
             */
            function removeClassName(el, cls) {
                if (!cls || !(cls = cls.trim())) {
                    return;
                }
                var clsArr = cls.split(/\s+/);
                if (el.classList) {
                    clsArr.forEach(function (c) {
                        return el.classList.remove(c);
                    });
                } else {
                    var curCls_2 = " " + el.className + " ";
                    clsArr.forEach(function (c) {
                        var tar = ' ' + c + ' ';
                        while (curCls_2.indexOf(tar) !== -1) {
                            curCls_2 = curCls_2.replace(tar, ' ');
                        }
                    });
                    el.className = curCls_2.trim();
                }
            }
            /**
             * 检查HTML元素是否已设置className
             * @param {HTMLElement} el 目标元素
             * @param {String} className 要检查的className
             * @return {Boolean}
             */
            function hasClassName(el, className) {
                return new RegExp('(?:^|\\s)' + className + '(?=\\s|$)').test(el.className);
            }
            /**
             * addEventListener 是否已支持 passive
             * @return {Boolean}
             */
            var supportsPassive = exports.supportsPassive = false;
            try {
                var opts = Object.defineProperty({}, 'passive', {
                    get: function get() {
                        exports.supportsPassive = supportsPassive = true;
                    }
                });
                if (_utils.inBrowser) window.addEventListener('test', null, opts);
            } catch (e) {
                console.error(e);
            }
            /**
             * 为HTML元素移除事件监听
             * @param {HTMLElement} el 目标元素
             * @param {String} type 事件名称
             * @param {Function} handler 处理函数
             * @param {Boolean} once 是否只监听一次
             * @param {Boolean} capture 是否在捕获阶段的监听
             */
            function removeEvent(el, type, handler, once, capture) {
                if (once === void 0) {
                    once = false;
                }
                if (capture === void 0) {
                    capture = false;
                }
                if (capture !== undefined && !(0, _toxicPredicateFunctions.isBoolean)(capture) && supportsPassive) {
                    capture = { passive: true };
                }
                if (once) {
                    /* 尝试从缓存中读取包装后的方法 */
                    var handlerWrap = (0, _events.removeEventCache)(el, type + '_once', handler);
                    if (handlerWrap) {
                        handler = handlerWrap;
                    }
                }
                el.removeEventListener(type, handler, capture);
            }
            /**
             * 为HTML元素添加事件监听
             * @param {HTMLElement} el 目标元素
             * @param {String} type 事件名称
             * @param {Function} handler 处理函数
             * @param {Boolean} once 是否只监听一次
             * @param {Boolean|Object} capture 是否在捕获阶段监听，这里也可以传入 { passive: true } 表示被动模式
             */
            function addEvent(el, type, handler, once, capture) {
                if (once === void 0) {
                    once = false;
                }
                if (capture === void 0) {
                    capture = false;
                }
                if (capture !== undefined && !(0, _toxicPredicateFunctions.isBoolean)(capture) && supportsPassive) {
                    capture = { passive: true };
                }
                if (once) {
                    var oldHandler_1 = handler;
                    handler = function () {
                        return function () {
                            var args = [];
                            for (var _i = 0; _i < arguments.length; _i++) {
                                args[_i] = arguments[_i];
                            }
                            oldHandler_1.apply(this, args);
                            removeEvent(el, type, handler, once, capture);
                        };
                    }();
                    /* 将包装后的方法记录到缓存中 */
                    (0, _events.addEventCache)(el, type + '_once', oldHandler_1, handler);
                }
                el.addEventListener(type, handler, capture);
            }
            /**
             * 为HTML元素添加事件代理
             * @param {HTMLElement} el 目标元素
             * @param {String} selector 要被代理的元素
             * @param {String} type 事件名称
             * @param {Function} handler 处理函数
             * @param {Boolean} capture 是否在捕获阶段监听
             */
            function addDelegate(el, selector, type, handler, capture) {
                if (capture === void 0) {
                    capture = false;
                }
                if (capture !== undefined && !(0, _toxicPredicateFunctions.isBoolean)(capture) && supportsPassive) {
                    capture = { passive: true };
                }
                var handlerWrap = function handlerWrap(e) {
                    var targetElsArr = findParents(e.target || e.srcElement, el, true);
                    var targetElArr = query(selector, el, true);
                    var retEl;
                    if (targetElArr.find) {
                        retEl = targetElArr.find(function (seEl) {
                            return targetElsArr.find(function (tgEl) {
                                return seEl === tgEl;
                            });
                        });
                    } else {
                        // Fixed IE11 Array.find not defined bug
                        targetElArr.forEach(function (seEl) {
                            return !retEl && targetElsArr.forEach(function (tgEl) {
                                if (!retEl && seEl === tgEl) {
                                    retEl = tgEl;
                                }
                            });
                        });
                    }
                    retEl && handler.apply(retEl, arguments);
                };
                /* 将包装后的方法记录到缓存中 */
                (0, _events.addEventCache)(el, type + '_delegate_' + selector, handler, handlerWrap);
                el.addEventListener(type, handlerWrap, capture);
            }
            /**
             * 为HTML元素移除事件代理
             * @param {HTMLElement} el 目标元素
             * @param {String} selector 要被代理的元素
             * @param {String} type 事件名称
             * @param {Function} handler 处理函数
             * @param {Boolean} capture 是否在捕获阶段监听
             */
            function removeDelegate(el, selector, type, handler, capture) {
                if (capture === void 0) {
                    capture = false;
                }
                if (capture !== undefined && !(0, _toxicPredicateFunctions.isBoolean)(capture) && supportsPassive) {
                    capture = { passive: true };
                }
                /* 尝试从缓存中读取包装后的方法 */
                var handlerWrap = (0, _events.removeEventCache)(el, type + '_delegate_' + selector, handler);
                handlerWrap && el.removeEventListener(type, handlerWrap, capture);
            }
            /**
             * 读取HTML元素样式值
             * @param {HTMLElement} el 目标元素
             * @param {String} key 样式key
             * @return {String}
             */
            function getStyle(el, key) {
                return (el.currentStyle || document.defaultView.getComputedStyle(el, null))[key] || el.style[key];
            }
            /**
             * 设置HTML元素样式值
             * @param {HTMLElement} el 目标元素
             * @param {String} key 样式key
             * @param {String} val 样式值
             */
            function setStyle(el, key, val) {
                if ((0, _toxicPredicateFunctions.isObject)(key)) {
                    for (var k in key) {
                        setStyle(el, k, key[k]);
                    }
                } else {
                    el.style[key] = val;
                }
            }
            /**
             * 根据选择器查询目标元素
             * @param {String} selector 选择器,用于 querySelectorAll
             * @param {HTMLElement} container 父容器
             * @param {Boolean} toArray 强制输出为数组
             * @return {NodeList|Array}
             */
            function query(selector, container, toArray) {
                if (container === void 0) {
                    container = document;
                }
                var retNodeList = container.querySelectorAll(selector);
                return toArray ? Array.from(retNodeList) : retNodeList;
            }
            /**
             * 从DOM树中移除el
             * @param {HTMLElement} el 目标元素
             */
            function removeEl(el) {
                el.parentNode.removeChild(el);
            }
            /**
             * 查找元素的父节点们
             * @param {HTMLElement} el 目标元素
             * @param {HTMLElement} endEl 最大父容器（不指定则找到html）
             * @param {Boolean} haveEl 包含当前元素
             * @param {Boolean} haveEndEl 包含设定的最大父容器
             */
            function findParents(el, endEl, haveEl, haveEndEl) {
                if (endEl === void 0) {
                    endEl = null;
                }
                var retEls = [];
                if (haveEl) {
                    retEls.push(el);
                }
                while (el && el.parentNode !== endEl) {
                    el = el.parentNode;
                    el && retEls.push(el);
                }
                if (haveEndEl) {
                    retEls.push(endEl);
                }
                return retEls;
            }
            /**
             * @class NodeWrap
             * @description
             * NodeWrap DOM包装器，用以实现基本的链式操作
             * new dom.NodeWrap('*') 相当于 dom.$('*')
             * 这里面用于DOM操作的属性方法都是基于上面静态方法实现，有需要可以随时修改补充
             * @param {String} selector 选择器(兼容 String||HTMLString||NodeList||NodeArray||HTMLElement)
             * @param {HTMLElement} container 父容器（默认为document）
             */
            var NodeWrap = /** @class */function () {
                function NodeWrap(selector, container) {
                    if (container === void 0) {
                        container = document;
                    }
                    var _this = this;
                    _this.selector = selector;
                    /* String||NodeList||HTMLElement 识别处理 */
                    var elsArr;
                    if (selector && selector.constructor === NodeList) {
                        /* 支持直接传入NodeList来构建包装器 */
                        elsArr = (0, _utils.makeArray)(selector);
                    } else if ((0, _toxicPredicateFunctions.isArray)(selector)) {
                        /* 支持直接传入Node数组来构建包装器 */
                        elsArr = selector;
                    } else if ((0, _toxicPredicateFunctions.isString)(selector)) {
                        if (selector.indexOf('<') === 0) {
                            /* 支持直接传入HTML字符串来新建DOM并构建包装器 */
                            _divEl.innerHTML = selector;
                            elsArr = query('*', _divEl, true);
                        } else {
                            /* 支持直接传入字符串选择器来查找DOM并构建包装器 */
                            elsArr = query(selector, container, true);
                        }
                    } else {
                        /* 其他任意对象直接构建包装器 */
                        elsArr = [selector];
                    }
                    Object.assign(_this, elsArr);
                    /* NodeWrap本意可以 extends Array省略构造方法中下面这部分代码，但目前编译不支持 */
                    _this.length = elsArr.length;
                }
                /**
                 * 循环遍历DOM集合
                 * @param {Function} fn 遍历函数 fn(item, i)
                 * @return {Object}
                 */
                NodeWrap.prototype.each = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    _arrPrototype.forEach.apply(this, args);
                    return this;
                };
                /**
                 * 添加元素到DOM集合
                 * @param {HTMLElement} el 要加入的元素
                 * @return {this}
                 */
                NodeWrap.prototype.push = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    _arrPrototype.push.apply(this, args);
                    return this;
                };
                /**
                 * 截取DOM集合片段，并得到新的包装器splice
                 * @param {Nubmer} start
                 * @param {Nubmer} count
                 * @return {NodeWrap} 新的DOM集合包装器
                 */
                NodeWrap.prototype.splice = function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    return $(_arrPrototype.splice.apply(this, args));
                };
                /**
                 * 查找子元素
                 * @param {String} selector 选择器
                 * @return {NodeWrap} 新的DOM集合包装器
                 */
                NodeWrap.prototype.find = function (selector) {
                    var childs = [];
                    this.each(function (el) {
                        childs = childs.concat(query(selector, el, true));
                    });
                    var childsWrap = $(childs);
                    childsWrap.parent = this;
                    childsWrap.selector = selector;
                    return childsWrap;
                };
                /**
                 * 添加子元素
                 * @param {HTMLElement} childEls 要添加的HTML元素
                 * @return {this}
                 */
                NodeWrap.prototype.append = function (childEls) {
                    var childsWrap = $(childEls);
                    var firstEl = this[0];
                    childsWrap.each(function (newEl) {
                        return firstEl.appendChild(newEl);
                    });
                    return this;
                };
                /**
                 * 将元素集合添加到指定容器
                 * @param {HTMLElement} parentEl 要添加到父容器
                 * @return {this}
                 */
                NodeWrap.prototype.appendTo = function (parentEl) {
                    $(parentEl).append(this);
                    return this;
                };
                /**
                 * DOM集合text内容读写操作
                 * @param {String} val 文本内容（如果有设置该参数则执行写操作，否则执行读操作）
                 * @return {this}
                 */
                NodeWrap.prototype.text = function (val) {
                    if (arguments.length === 0) {
                        return this[0][_textAttrName];
                    }
                    return this.each(function (el) {
                        el[_textAttrName] = val;
                    });
                };
                /**
                 * DOM集合HTML内容读写操作
                 * @param {String} html html内容（如果有设置该参数则执行写操作，否则执行读操作）
                 * @return {this}
                 */
                NodeWrap.prototype.html = function (html) {
                    if (arguments.length === 0) {
                        return this[0].innerHTML;
                    }
                    return this.each(function (el) {
                        el.innerHTML = html;
                    });
                };
                /**
                 * DOM集合属性读写操作
                 * @param {String} name 属性名称
                 * @param {String} val 属性值（如果有设置该参数则执行写操作，否则执行读操作）
                 * @return {this}
                 */
                NodeWrap.prototype.attr = function (name, val) {
                    if (arguments.length === 1) {
                        return getAttr(this[0], name);
                    }
                    return this.each(function (el) {
                        return setAttr(el, name, val);
                    });
                };
                /**
                 * DOM集合dataset读写操作
                 * @param {String} key 键名
                 * @param {Any} val 键值（如果有设置该参数则执行写操作，否则执行读操作）
                 * @return {this}
                 */
                NodeWrap.prototype.data = function (key, val) {
                    if (arguments.length === 0) {
                        return this[0].dataset || {};
                    }
                    if (arguments.length === 1) {
                        return (this[0].dataset || {})[key];
                    }
                    return this.each(function (el) {
                        (el.dataset || (el.dataset = {}))[key] = val;
                    });
                };
                /**
                 * DOM集合样式读写操作
                 * @param {String} key 样式key
                 * @param {String} val 样式值（如果有设置该参数则执行写操作，否则执行读操作）
                 * @return {this}
                 */
                NodeWrap.prototype.css = function (key, val) {
                    if (arguments.length === 1 && !(0, _toxicPredicateFunctions.isObject)(key)) {
                        return getStyle(this[0], key);
                    }
                    return this.each(function (el) {
                        return setStyle(el, key, val);
                    });
                };
                /**
                 * 为DOM集合增加className
                 * @param {String} cls 要增加的className
                 * @return {this}
                 */
                NodeWrap.prototype.addClass = function (cls) {
                    return this.each(function (el) {
                        return addClassName(el, cls);
                    });
                };
                /**
                 * 移除当前DOM集合的className
                 * @param {String} cls 要移除的className
                 * @return {this}
                 */
                NodeWrap.prototype.removeClass = function (cls) {
                    return this.each(function (el) {
                        return removeClassName(el, cls);
                    });
                };
                /**
                 * 检查索引0的DOM是否有className
                 * @param {String} cls 要检查的className
                 * @return {this}
                 */
                NodeWrap.prototype.hasClass = function (cls) {
                    return hasClassName(this[0], cls);
                };
                /**
                 * 为DOM集合添加事件监听
                 * @param {String} type 事件名称
                 * @param {Function} handler 处理函数
                 * @param {Boolean} once 是否只监听一次
                 * @param {Boolean} capture 是否在捕获阶段监听
                 * @return {this}
                 */
                NodeWrap.prototype.on = function (type, handler, once, capture) {
                    if (once === void 0) {
                        once = false;
                    }
                    if (capture === void 0) {
                        capture = false;
                    }
                    return this.each(function (el) {
                        return addEvent(el, type, handler, once, capture);
                    });
                };
                /**
                 * 为DOM集合解除事件监听
                 * @param {String} type 事件名称
                 * @param {Function} handler 处理函数
                 * @param {Boolean} once 是否只监听一次
                 * @param {Boolean} capture 是否在捕获阶段监听
                 * @return {this}
                 */
                NodeWrap.prototype.off = function (type, handler, once, capture) {
                    if (once === void 0) {
                        once = false;
                    }
                    if (capture === void 0) {
                        capture = false;
                    }
                    return this.each(function (el) {
                        return removeEvent(el, type, handler, once, capture);
                    });
                };
                /**
                 * 为DOM集合绑定事件代理
                 * @param {String} selector 目标子元素选择器
                 * @param {String} type 事件名称
                 * @param {Function} handler 处理函数
                 * @param {Boolean} capture 是否在捕获阶段监听
                 * @return {this}
                 */
                NodeWrap.prototype.delegate = function (selector, type, handler, capture) {
                    if (capture === void 0) {
                        capture = false;
                    }
                    return this.each(function (el) {
                        return addDelegate(el, selector, type, handler, capture);
                    });
                };
                /**
                 * 为DOM集合解绑事件代理
                 * @param {String} selector 目标子元素选择器
                 * @param {String} type 事件名称
                 * @param {Function} handler 处理函数
                 * @param {Boolean} capture 是否在捕获阶段监听
                 * @return {this}
                 */
                NodeWrap.prototype.undelegate = function (selector, type, handler, capture) {
                    if (capture === void 0) {
                        capture = false;
                    }
                    return this.each(function (el) {
                        return removeDelegate(el, selector, type, handler, capture);
                    });
                };
                /**
                 * 从DOM树中移除
                 * @return {this}
                 */
                NodeWrap.prototype.remove = function () {
                    return this.each(function (el) {
                        return removeEl(el);
                    });
                };
                return NodeWrap;
            }();
            exports.NodeWrap = NodeWrap;
            /**
             * 根据选择器查询并得到目标元素的wrap包装器
             * @param {String} selector 选择器,另外支持 HTMLString||NodeList||NodeArray||HTMLElement
             * @param {HTMLElement} container 父容器
             * @return {Object}
             */
            function $(selector, container) {
                return selector.constructor === NodeWrap ? selector : new NodeWrap(selector, container);
            }
            /***/
        },
        /* 7 */
        /***/function (module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
            (function (global, factory) {
                if (true) {
                    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, module], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
                } else if (typeof exports !== 'undefined' && typeof module !== 'undefined') {
                    factory(exports, module);
                } else {
                    var mod = {
                        exports: {}
                    };
                    factory(mod.exports, mod);
                    global.fetchJsonp = mod.exports;
                }
            })(this, function (exports, module) {
                'use strict';

                var defaultOptions = {
                    timeout: 5000,
                    jsonpCallback: 'callback',
                    jsonpCallbackFunction: null
                };
                function generateCallbackFunction() {
                    return 'jsonp_' + Date.now() + '_' + Math.ceil(Math.random() * 100000);
                }
                function clearFunction(functionName) {
                    // IE8 throws an exception when you try to delete a property on window
                    // http://stackoverflow.com/a/1824228/751089
                    try {
                        delete window[functionName];
                    } catch (e) {
                        window[functionName] = undefined;
                    }
                }
                function removeScript(scriptId) {
                    var script = document.getElementById(scriptId);
                    if (script) {
                        document.getElementsByTagName('head')[0].removeChild(script);
                    }
                }
                function fetchJsonp(_url) {
                    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
                    // to avoid param reassign
                    var url = _url;
                    var timeout = options.timeout || defaultOptions.timeout;
                    var jsonpCallback = options.jsonpCallback || defaultOptions.jsonpCallback;
                    var timeoutId = undefined;
                    return new Promise(function (resolve, reject) {
                        var callbackFunction = options.jsonpCallbackFunction || generateCallbackFunction();
                        var scriptId = jsonpCallback + '_' + callbackFunction;
                        window[callbackFunction] = function (response) {
                            resolve({
                                ok: true,
                                // keep consistent with fetch API
                                json: function json() {
                                    return Promise.resolve(response);
                                }
                            });
                            if (timeoutId) clearTimeout(timeoutId);
                            removeScript(scriptId);
                            clearFunction(callbackFunction);
                        };
                        // Check if the user set their own params, and if not add a ? to start a list of params
                        url += url.indexOf('?') === -1 ? '?' : '&';
                        var jsonpScript = document.createElement('script');
                        jsonpScript.setAttribute('src', '' + url + jsonpCallback + '=' + callbackFunction);
                        if (options.charset) {
                            jsonpScript.setAttribute('charset', options.charset);
                        }
                        jsonpScript.id = scriptId;
                        document.getElementsByTagName('head')[0].appendChild(jsonpScript);
                        timeoutId = setTimeout(function () {
                            reject(new Error('JSONP request to ' + _url + ' timed out'));
                            clearFunction(callbackFunction);
                            removeScript(scriptId);
                            window[callbackFunction] = function () {
                                clearFunction(callbackFunction);
                            };
                        }, timeout);
                        // Caught if got 404/500
                        jsonpScript.onerror = function () {
                            reject(new Error('JSONP request to ' + _url + ' failed'));
                            clearFunction(callbackFunction);
                            removeScript(scriptId);
                            if (timeoutId) clearTimeout(timeoutId);
                        };
                    });
                }
                // export as global function
                /*
                let local;
                if (typeof global !== 'undefined') {
                  local = global;
                } else if (typeof self !== 'undefined') {
                  local = self;
                } else {
                  try {
                    local = Function('return this')();
                  } catch (e) {
                    throw new Error('polyfill failed because global object is unavailable in this environment');
                  }
                }
                local.fetchJsonp = fetchJsonp;
                */
                module.exports = fetchJsonp;
            });
            /***/
        },
        /* 8 */
        /***/function (module, exports, __webpack_require__) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
                return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
            } : function (obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
            }; // @flow
            var _toxicPredicateFunctions = __webpack_require__(0);
            function formatter(tag, msg) {
                if (!(0, _toxicPredicateFunctions.isString)(tag)) throw new TypeError("Log's method only acccept string as argument, but not " + tag + " in " + (typeof tag === "undefined" ? "undefined" : _typeof(tag)));
                if (!(0, _toxicPredicateFunctions.isString)(msg)) return "[" + Log.GLOBAL_TAG + "] > " + tag;
                tag = Log.FORCE_GLOBAL_TAG ? Log.GLOBAL_TAG : tag || Log.GLOBAL_TAG;
                return "[" + tag + "] > " + msg;
            }
            /**
             * Log Object
             */
            var Log = /** @class */function () {
                function Log() {}
                /**
                 * equal to console.error, output `[${tag}] > {$msg}`
                 * @param {string} tag optional, the header of log
                 * @param {string} msg the message
                 */
                Log.error = function (tag, msg) {
                    if (!Log.ENABLE_ERROR) {
                        return;
                    }
                    (console.error || console.warn || console.log).call(console, formatter(tag, msg));
                };
                /**
                 * equal to console.info, output `[${tag}] > {$msg}`
                 * @param {string} tag optional, the header of log
                 * @param {string} msg the message
                 */
                Log.info = function (tag, msg) {
                    if (!Log.ENABLE_INFO) {
                        return;
                    }
                    (console.info || console.log).call(console, formatter(tag, msg));
                };
                /**
                 * equal to console.warn, output `[${tag}] > {$msg}`
                 * @param {string} tag optional, the header of log
                 * @param {string} msg the message
                 */
                Log.warn = function (tag, msg) {
                    if (!Log.ENABLE_WARN) {
                        return;
                    }
                    (console.warn || console.log).call(console, formatter(tag, msg));
                };
                /**
                 * equal to console.debug, output `[${tag}] > {$msg}`
                 * @param {string} tag optional, the header of log
                 * @param {string} msg the message
                 */
                Log.debug = function (tag, msg) {
                    if (!Log.ENABLE_DEBUG) {
                        return;
                    }
                    (console.debug || console.log).call(console, formatter(tag, msg));
                };
                /**
                 * equal to console.verbose, output `[${tag}] > {$msg}`
                 * @param {string} tag optional, the header of log
                 * @param {string} msg the message
                 */
                Log.verbose = function (tag, msg) {
                    if (!Log.ENABLE_VERBOSE) {
                        return;
                    }
                    console.log(formatter(tag, msg));
                };
                /**
                 * @member {string}
                 */
                Log.GLOBAL_TAG = 'chimee';
                /**
                 * @member {boolean}
                 */
                Log.FORCE_GLOBAL_TAG = false;
                /**
                 * @member {boolean}
                 */
                Log.ENABLE_ERROR = true;
                /**
                 * @member {boolean}
                 */
                Log.ENABLE_INFO = true;
                /**
                 * @member {boolean}
                 */
                Log.ENABLE_WARN = true;
                /**
                 * @member {boolean}
                 */
                Log.ENABLE_DEBUG = true;
                /**
                 * @member {boolean}
                 */
                Log.ENABLE_VERBOSE = true;
                return Log;
            }();
            exports.default = Log;
            /***/
        },
        /* 9 */
        /***/function (module, exports, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_RESULT__; /**
                                               * UAParser.js v0.7.17
                                               * Lightweight JavaScript-based User-Agent string parser
                                               * https://github.com/faisalman/ua-parser-js
                                               *
                                               * Copyright © 2012-2016 Faisal Salman <fyzlman@gmail.com>
                                               * Dual licensed under GPLv2 & MIT
                                               */
            (function (window, undefined) {
                'use strict';
                //////////////
                // Constants
                /////////////

                var LIBVERSION = '0.7.17',
                    EMPTY = '',
                    UNKNOWN = '?',
                    FUNC_TYPE = 'function',
                    UNDEF_TYPE = 'undefined',
                    OBJ_TYPE = 'object',
                    STR_TYPE = 'string',
                    MAJOR = 'major',
                    // deprecated
                MODEL = 'model',
                    NAME = 'name',
                    TYPE = 'type',
                    VENDOR = 'vendor',
                    VERSION = 'version',
                    ARCHITECTURE = 'architecture',
                    CONSOLE = 'console',
                    MOBILE = 'mobile',
                    TABLET = 'tablet',
                    SMARTTV = 'smarttv',
                    WEARABLE = 'wearable',
                    EMBEDDED = 'embedded';
                ///////////
                // Helper
                //////////
                var util = {
                    extend: function extend(regexes, extensions) {
                        var margedRegexes = {};
                        for (var i in regexes) {
                            if (extensions[i] && extensions[i].length % 2 === 0) {
                                margedRegexes[i] = extensions[i].concat(regexes[i]);
                            } else {
                                margedRegexes[i] = regexes[i];
                            }
                        }
                        return margedRegexes;
                    },
                    has: function has(str1, str2) {
                        if (typeof str1 === "string") {
                            return str2.toLowerCase().indexOf(str1.toLowerCase()) !== -1;
                        } else {
                            return false;
                        }
                    },
                    lowerize: function lowerize(str) {
                        return str.toLowerCase();
                    },
                    major: function major(version) {
                        return (typeof version === 'undefined' ? 'undefined' : _typeof2(version)) === STR_TYPE ? version.replace(/[^\d\.]/g, '').split(".")[0] : undefined;
                    },
                    trim: function trim(str) {
                        return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
                    }
                };
                ///////////////
                // Map helper
                //////////////
                var mapper = {
                    rgx: function rgx(ua, arrays) {
                        //var result = {},
                        var i = 0,
                            j,
                            k,
                            p,
                            q,
                            matches,
                            match; //, args = arguments;
                        /*// construct object barebones
                        for (p = 0; p < args[1].length; p++) {
                            q = args[1][p];
                            result[typeof q === OBJ_TYPE ? q[0] : q] = undefined;
                        }*/
                        // loop through all regexes maps
                        while (i < arrays.length && !matches) {
                            var regex = arrays[i],
                                // even sequence (0,2,4,..)
                            props = arrays[i + 1]; // odd sequence (1,3,5,..)
                            j = k = 0;
                            // try matching uastring with regexes
                            while (j < regex.length && !matches) {
                                matches = regex[j++].exec(ua);
                                if (!!matches) {
                                    for (p = 0; p < props.length; p++) {
                                        match = matches[++k];
                                        q = props[p];
                                        // check if given property is actually array
                                        if ((typeof q === 'undefined' ? 'undefined' : _typeof2(q)) === OBJ_TYPE && q.length > 0) {
                                            if (q.length == 2) {
                                                if (_typeof2(q[1]) == FUNC_TYPE) {
                                                    // assign modified match
                                                    this[q[0]] = q[1].call(this, match);
                                                } else {
                                                    // assign given value, ignore regex match
                                                    this[q[0]] = q[1];
                                                }
                                            } else if (q.length == 3) {
                                                // check whether function or regex
                                                if (_typeof2(q[1]) === FUNC_TYPE && !(q[1].exec && q[1].test)) {
                                                    // call function (usually string mapper)
                                                    this[q[0]] = match ? q[1].call(this, match, q[2]) : undefined;
                                                } else {
                                                    // sanitize match using given regex
                                                    this[q[0]] = match ? match.replace(q[1], q[2]) : undefined;
                                                }
                                            } else if (q.length == 4) {
                                                this[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : undefined;
                                            }
                                        } else {
                                            this[q] = match ? match : undefined;
                                        }
                                    }
                                }
                            }
                            i += 2;
                        }
                        // console.log(this);
                        //return this;
                    },
                    str: function str(_str, map) {
                        for (var i in map) {
                            // check if array
                            if (_typeof2(map[i]) === OBJ_TYPE && map[i].length > 0) {
                                for (var j = 0; j < map[i].length; j++) {
                                    if (util.has(map[i][j], _str)) {
                                        return i === UNKNOWN ? undefined : i;
                                    }
                                }
                            } else if (util.has(map[i], _str)) {
                                return i === UNKNOWN ? undefined : i;
                            }
                        }
                        return _str;
                    }
                };
                ///////////////
                // String map
                //////////////
                var maps = {
                    browser: {
                        oldsafari: {
                            version: {
                                '1.0': '/8',
                                '1.2': '/1',
                                '1.3': '/3',
                                '2.0': '/412',
                                '2.0.2': '/416',
                                '2.0.3': '/417',
                                '2.0.4': '/419',
                                '?': '/'
                            }
                        }
                    },
                    device: {
                        amazon: {
                            model: {
                                'Fire Phone': ['SD', 'KF']
                            }
                        },
                        sprint: {
                            model: {
                                'Evo Shift 4G': '7373KT'
                            },
                            vendor: {
                                'HTC': 'APA',
                                'Sprint': 'Sprint'
                            }
                        }
                    },
                    os: {
                        windows: {
                            version: {
                                'ME': '4.90',
                                'NT 3.11': 'NT3.51',
                                'NT 4.0': 'NT4.0',
                                '2000': 'NT 5.0',
                                'XP': ['NT 5.1', 'NT 5.2'],
                                'Vista': 'NT 6.0',
                                '7': 'NT 6.1',
                                '8': 'NT 6.2',
                                '8.1': 'NT 6.3',
                                '10': ['NT 6.4', 'NT 10.0'],
                                'RT': 'ARM'
                            }
                        }
                    }
                };
                //////////////
                // Regex map
                /////////////
                var regexes = {
                    browser: [[
                    // Presto based
                    /(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i // Opera < 9.80
                    ], [NAME, VERSION], [/(opios)[\/\s]+([\w\.]+)/i // Opera mini on iphone >= 8.0
                    ], [[NAME, 'Opera Mini'], VERSION], [/\s(opr)\/([\w\.]+)/i // Opera Webkit
                    ], [[NAME, 'Opera'], VERSION], [
                    // Mixed
                    /(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i,
                    // Lunascape/Maxthon/Netfront/Jasmine/Blazer
                    // Trident based
                    /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,
                    // Avant/IEMobile/SlimBrowser/Baidu
                    /(?:ms|\()(ie)\s([\w\.]+)/i,
                    // Webkit/KHTML based
                    /(rekonq)\/([\w\.]+)*/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser)\/([\w\.-]+)/i
                    // Chromium/Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron/Iridium/PhantomJS/Bowser
                    ], [NAME, VERSION], [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i // IE11
                    ], [[NAME, 'IE'], VERSION], [/(edge)\/((\d+)?[\w\.]+)/i // Microsoft Edge
                    ], [NAME, VERSION], [/(yabrowser)\/([\w\.]+)/i // Yandex
                    ], [[NAME, 'Yandex'], VERSION], [/(puffin)\/([\w\.]+)/i // Puffin
                    ], [[NAME, 'Puffin'], VERSION], [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i
                    // UCBrowser
                    ], [[NAME, 'UCBrowser'], VERSION], [/(comodo_dragon)\/([\w\.]+)/i // Comodo Dragon
                    ], [[NAME, /_/g, ' '], VERSION], [/(micromessenger)\/([\w\.]+)/i // WeChat
                    ], [[NAME, 'WeChat'], VERSION], [/(QQ)\/([\d\.]+)/i // QQ, aka ShouQ
                    ], [NAME, VERSION], [/m?(qqbrowser)[\/\s]?([\w\.]+)/i // QQBrowser
                    ], [NAME, VERSION], [/xiaomi\/miuibrowser\/([\w\.]+)/i // MIUI Browser
                    ], [VERSION, [NAME, 'MIUI Browser']], [/;fbav\/([\w\.]+);/i // Facebook App for iOS & Android
                    ], [VERSION, [NAME, 'Facebook']], [/headlesschrome(?:\/([\w\.]+)|\s)/i // Chrome Headless
                    ], [VERSION, [NAME, 'Chrome Headless']], [/\swv\).+(chrome)\/([\w\.]+)/i // Chrome WebView
                    ], [[NAME, /(.+)/, '$1 WebView'], VERSION], [/((?:oculus|samsung)browser)\/([\w\.]+)/i], [[NAME, /(.+(?:g|us))(.+)/, '$1 $2'], VERSION], [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i // Android Browser
                    ], [VERSION, [NAME, 'Android Browser']], [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i
                    // Chrome/OmniWeb/Arora/Tizen/Nokia
                    ], [NAME, VERSION], [/(dolfin)\/([\w\.]+)/i // Dolphin
                    ], [[NAME, 'Dolphin'], VERSION], [/((?:android.+)crmo|crios)\/([\w\.]+)/i // Chrome for Android/iOS
                    ], [[NAME, 'Chrome'], VERSION], [/(coast)\/([\w\.]+)/i // Opera Coast
                    ], [[NAME, 'Opera Coast'], VERSION], [/fxios\/([\w\.-]+)/i // Firefox for iOS
                    ], [VERSION, [NAME, 'Firefox']], [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i // Mobile Safari
                    ], [VERSION, [NAME, 'Mobile Safari']], [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i // Safari & Safari Mobile
                    ], [VERSION, NAME], [/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i // Google Search Appliance on iOS
                    ], [[NAME, 'GSA'], VERSION], [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i // Safari < 3.0
                    ], [NAME, [VERSION, mapper.str, maps.browser.oldsafari.version]], [/(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i], [NAME, VERSION], [
                    // Gecko based
                    /(navigator|netscape)\/([\w\.-]+)/i // Netscape
                    ], [[NAME, 'Netscape'], VERSION], [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,
                    // IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror
                    /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i,
                    // Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
                    /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,
                    // Other
                    /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,
                    // Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf/Sleipnir
                    /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]+)*/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i // Mosaic
                    ], [NAME, VERSION]
                    /* /////////////////////
                    // Media players BEGIN
                    ////////////////////////
                                 , [
                                 /(apple(?:coremedia|))\/((\d+)[\w\._]+)/i,                          // Generic Apple CoreMedia
                    /(coremedia) v((\d+)[\w\._]+)/i
                    ], [NAME, VERSION], [
                                 /(aqualung|lyssna|bsplayer)\/((\d+)?[\w\.-]+)/i                     // Aqualung/Lyssna/BSPlayer
                    ], [NAME, VERSION], [
                                 /(ares|ossproxy)\s((\d+)[\w\.-]+)/i                                 // Ares/OSSProxy
                    ], [NAME, VERSION], [
                                 /(audacious|audimusicstream|amarok|bass|core|dalvik|gnomemplayer|music on console|nsplayer|psp-internetradioplayer|videos)\/((\d+)[\w\.-]+)/i,
                                                                                        // Audacious/AudiMusicStream/Amarok/BASS/OpenCORE/Dalvik/GnomeMplayer/MoC
                                                                                        // NSPlayer/PSP-InternetRadioPlayer/Videos
                    /(clementine|music player daemon)\s((\d+)[\w\.-]+)/i,               // Clementine/MPD
                    /(lg player|nexplayer)\s((\d+)[\d\.]+)/i,
                    /player\/(nexplayer|lg player)\s((\d+)[\w\.-]+)/i                   // NexPlayer/LG Player
                    ], [NAME, VERSION], [
                    /(nexplayer)\s((\d+)[\w\.-]+)/i                                     // Nexplayer
                    ], [NAME, VERSION], [
                                 /(flrp)\/((\d+)[\w\.-]+)/i                                          // Flip Player
                    ], [[NAME, 'Flip Player'], VERSION], [
                                 /(fstream|nativehost|queryseekspider|ia-archiver|facebookexternalhit)/i
                                                                                        // FStream/NativeHost/QuerySeekSpider/IA Archiver/facebookexternalhit
                    ], [NAME], [
                                 /(gstreamer) souphttpsrc (?:\([^\)]+\)){0,1} libsoup\/((\d+)[\w\.-]+)/i
                                                                                        // Gstreamer
                    ], [NAME, VERSION], [
                                 /(htc streaming player)\s[\w_]+\s\/\s((\d+)[\d\.]+)/i,              // HTC Streaming Player
                    /(java|python-urllib|python-requests|wget|libcurl)\/((\d+)[\w\.-_]+)/i,
                                                                                        // Java/urllib/requests/wget/cURL
                    /(lavf)((\d+)[\d\.]+)/i                                             // Lavf (FFMPEG)
                    ], [NAME, VERSION], [
                                 /(htc_one_s)\/((\d+)[\d\.]+)/i                                      // HTC One S
                    ], [[NAME, /_/g, ' '], VERSION], [
                                 /(mplayer)(?:\s|\/)(?:(?:sherpya-){0,1}svn)(?:-|\s)(r\d+(?:-\d+[\w\.-]+){0,1})/i
                                                                                        // MPlayer SVN
                    ], [NAME, VERSION], [
                                 /(mplayer)(?:\s|\/|[unkow-]+)((\d+)[\w\.-]+)/i                      // MPlayer
                    ], [NAME, VERSION], [
                                 /(mplayer)/i,                                                       // MPlayer (no other info)
                    /(yourmuze)/i,                                                      // YourMuze
                    /(media player classic|nero showtime)/i                             // Media Player Classic/Nero ShowTime
                    ], [NAME], [
                                 /(nero (?:home|scout))\/((\d+)[\w\.-]+)/i                           // Nero Home/Nero Scout
                    ], [NAME, VERSION], [
                                 /(nokia\d+)\/((\d+)[\w\.-]+)/i                                      // Nokia
                    ], [NAME, VERSION], [
                                 /\s(songbird)\/((\d+)[\w\.-]+)/i                                    // Songbird/Philips-Songbird
                    ], [NAME, VERSION], [
                                 /(winamp)3 version ((\d+)[\w\.-]+)/i,                               // Winamp
                    /(winamp)\s((\d+)[\w\.-]+)/i,
                    /(winamp)mpeg\/((\d+)[\w\.-]+)/i
                    ], [NAME, VERSION], [
                                 /(ocms-bot|tapinradio|tunein radio|unknown|winamp|inlight radio)/i  // OCMS-bot/tap in radio/tunein/unknown/winamp (no other info)
                                                                                        // inlight radio
                    ], [NAME], [
                                 /(quicktime|rma|radioapp|radioclientapplication|soundtap|totem|stagefright|streamium)\/((\d+)[\w\.-]+)/i
                                                                                        // QuickTime/RealMedia/RadioApp/RadioClientApplication/
                                                                                        // SoundTap/Totem/Stagefright/Streamium
                    ], [NAME, VERSION], [
                                 /(smp)((\d+)[\d\.]+)/i                                              // SMP
                    ], [NAME, VERSION], [
                                 /(vlc) media player - version ((\d+)[\w\.]+)/i,                     // VLC Videolan
                    /(vlc)\/((\d+)[\w\.-]+)/i,
                    /(xbmc|gvfs|xine|xmms|irapp)\/((\d+)[\w\.-]+)/i,                    // XBMC/gvfs/Xine/XMMS/irapp
                    /(foobar2000)\/((\d+)[\d\.]+)/i,                                    // Foobar2000
                    /(itunes)\/((\d+)[\d\.]+)/i                                         // iTunes
                    ], [NAME, VERSION], [
                                 /(wmplayer)\/((\d+)[\w\.-]+)/i,                                     // Windows Media Player
                    /(windows-media-player)\/((\d+)[\w\.-]+)/i
                    ], [[NAME, /-/g, ' '], VERSION], [
                                 /windows\/((\d+)[\w\.-]+) upnp\/[\d\.]+ dlnadoc\/[\d\.]+ (home media server)/i
                                                                                        // Windows Media Server
                    ], [VERSION, [NAME, 'Windows']], [
                                 /(com\.riseupradioalarm)\/((\d+)[\d\.]*)/i                          // RiseUP Radio Alarm
                    ], [NAME, VERSION], [
                                 /(rad.io)\s((\d+)[\d\.]+)/i,                                        // Rad.io
                    /(radio.(?:de|at|fr))\s((\d+)[\d\.]+)/i
                    ], [[NAME, 'rad.io'], VERSION]
                                 //////////////////////
                    // Media players END
                    ////////////////////*/
                    ],
                    cpu: [[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i // AMD64
                    ], [[ARCHITECTURE, 'amd64']], [/(ia32(?=;))/i // IA32 (quicktime)
                    ], [[ARCHITECTURE, util.lowerize]], [/((?:i[346]|x)86)[;\)]/i // IA32
                    ], [[ARCHITECTURE, 'ia32']], [
                    // PocketPC mistakenly identified as PowerPC
                    /windows\s(ce|mobile);\sppc;/i], [[ARCHITECTURE, 'arm']], [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i // PowerPC
                    ], [[ARCHITECTURE, /ower/, '', util.lowerize]], [/(sun4\w)[;\)]/i // SPARC
                    ], [[ARCHITECTURE, 'sparc']], [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i
                    // IA64, 68K, ARM/64, AVR/32, IRIX/64, MIPS/64, SPARC/64, PA-RISC
                    ], [[ARCHITECTURE, util.lowerize]]],
                    device: [[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i // iPad/PlayBook
                    ], [MODEL, VENDOR, [TYPE, TABLET]], [/applecoremedia\/[\w\.]+ \((ipad)/ // iPad
                    ], [MODEL, [VENDOR, 'Apple'], [TYPE, TABLET]], [/(apple\s{0,1}tv)/i // Apple TV
                    ], [[MODEL, 'Apple TV'], [VENDOR, 'Apple']], [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(hp).+(tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i // Dell Streak
                    ], [VENDOR, MODEL, [TYPE, TABLET]], [/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i // Kindle Fire HD
                    ], [MODEL, [VENDOR, 'Amazon'], [TYPE, TABLET]], [/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i // Fire Phone
                    ], [[MODEL, mapper.str, maps.device.amazon.model], [VENDOR, 'Amazon'], [TYPE, MOBILE]], [/\((ip[honed|\s\w*]+);.+(apple)/i // iPod/iPhone
                    ], [MODEL, VENDOR, [TYPE, MOBILE]], [/\((ip[honed|\s\w*]+);/i // iPod/iPhone
                    ], [MODEL, [VENDOR, 'Apple'], [TYPE, MOBILE]], [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i,
                    // BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Meizu/Motorola/Polytron
                    /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i // Asus
                    ], [VENDOR, MODEL, [TYPE, MOBILE]], [/\(bb10;\s(\w+)/i // BlackBerry 10
                    ], [MODEL, [VENDOR, 'BlackBerry'], [TYPE, MOBILE]], [
                    // Asus Tablets
                    /android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i], [MODEL, [VENDOR, 'Asus'], [TYPE, TABLET]], [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i], [[VENDOR, 'Sony'], [MODEL, 'Xperia Tablet'], [TYPE, TABLET]], [/android.+\s([c-g]\d{4}|so[-l]\w+)\sbuild\//i], [MODEL, [VENDOR, 'Sony'], [TYPE, MOBILE]], [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i // Nintendo
                    ], [VENDOR, MODEL, [TYPE, CONSOLE]], [/android.+;\s(shield)\sbuild/i // Nvidia
                    ], [MODEL, [VENDOR, 'Nvidia'], [TYPE, CONSOLE]], [/(playstation\s[34portablevi]+)/i // Playstation
                    ], [MODEL, [VENDOR, 'Sony'], [TYPE, CONSOLE]], [/(sprint\s(\w+))/i // Sprint Phones
                    ], [[VENDOR, mapper.str, maps.device.sprint.vendor], [MODEL, mapper.str, maps.device.sprint.model], [TYPE, MOBILE]], [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i // Lenovo tablets
                    ], [VENDOR, MODEL, [TYPE, TABLET]], [/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, /(zte)-(\w+)*/i, /(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i
                    // Alcatel/GeeksPhone/Lenovo/Nexian/Panasonic/Sony
                    ], [VENDOR, [MODEL, /_/g, ' '], [TYPE, MOBILE]], [/(nexus\s9)/i // HTC Nexus 9
                    ], [MODEL, [VENDOR, 'HTC'], [TYPE, TABLET]], [/d\/huawei([\w\s-]+)[;\)]/i, /(nexus\s6p)/i // Huawei
                    ], [MODEL, [VENDOR, 'Huawei'], [TYPE, MOBILE]], [/(microsoft);\s(lumia[\s\w]+)/i // Microsoft Lumia
                    ], [VENDOR, MODEL, [TYPE, MOBILE]], [/[\s\(;](xbox(?:\sone)?)[\s\);]/i // Microsoft Xbox
                    ], [MODEL, [VENDOR, 'Microsoft'], [TYPE, CONSOLE]], [/(kin\.[onetw]{3})/i // Microsoft Kin
                    ], [[MODEL, /\./g, ' '], [VENDOR, 'Microsoft'], [TYPE, MOBILE]], [
                    // Motorola
                    /\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w+)*/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i], [MODEL, [VENDOR, 'Motorola'], [TYPE, MOBILE]], [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i], [MODEL, [VENDOR, 'Motorola'], [TYPE, TABLET]], [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i // HbbTV devices
                    ], [[VENDOR, util.trim], [MODEL, util.trim], [TYPE, SMARTTV]], [/hbbtv.+maple;(\d+)/i], [[MODEL, /^/, 'SmartTV'], [VENDOR, 'Samsung'], [TYPE, SMARTTV]], [/\(dtv[\);].+(aquos)/i // Sharp
                    ], [MODEL, [VENDOR, 'Sharp'], [TYPE, SMARTTV]], [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i], [[VENDOR, 'Samsung'], MODEL, [TYPE, TABLET]], [/smart-tv.+(samsung)/i], [VENDOR, [TYPE, SMARTTV], MODEL], [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i, /sec-((sgh\w+))/i], [[VENDOR, 'Samsung'], MODEL, [TYPE, MOBILE]], [/sie-(\w+)*/i // Siemens
                    ], [MODEL, [VENDOR, 'Siemens'], [TYPE, MOBILE]], [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]+)*/i], [[VENDOR, 'Nokia'], MODEL, [TYPE, MOBILE]], [/android\s3\.[\s\w;-]{10}(a\d{3})/i // Acer
                    ], [MODEL, [VENDOR, 'Acer'], [TYPE, TABLET]], [/android.+([vl]k\-?\d{3})\s+build/i // LG Tablet
                    ], [MODEL, [VENDOR, 'LG'], [TYPE, TABLET]], [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i // LG Tablet
                    ], [[VENDOR, 'LG'], MODEL, [TYPE, TABLET]], [/(lg) netcast\.tv/i // LG SmartTV
                    ], [VENDOR, MODEL, [TYPE, SMARTTV]], [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w+)*/i, /android.+lg(\-?[\d\w]+)\s+build/i], [MODEL, [VENDOR, 'LG'], [TYPE, MOBILE]], [/android.+(ideatab[a-z0-9\-\s]+)/i // Lenovo
                    ], [MODEL, [VENDOR, 'Lenovo'], [TYPE, TABLET]], [/linux;.+((jolla));/i // Jolla
                    ], [VENDOR, MODEL, [TYPE, MOBILE]], [/((pebble))app\/[\d\.]+\s/i // Pebble
                    ], [VENDOR, MODEL, [TYPE, WEARABLE]], [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i // OPPO
                    ], [VENDOR, MODEL, [TYPE, MOBILE]], [/crkey/i // Google Chromecast
                    ], [[MODEL, 'Chromecast'], [VENDOR, 'Google']], [/android.+;\s(glass)\s\d/i // Google Glass
                    ], [MODEL, [VENDOR, 'Google'], [TYPE, WEARABLE]], [/android.+;\s(pixel c)\s/i // Google Pixel C
                    ], [MODEL, [VENDOR, 'Google'], [TYPE, TABLET]], [/android.+;\s(pixel xl|pixel)\s/i // Google Pixel
                    ], [MODEL, [VENDOR, 'Google'], [TYPE, MOBILE]], [/android.+(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d\w)?)\s+build/i, /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+)?)\s+build/i // Redmi Phones
                    ], [[MODEL, /_/g, ' '], [VENDOR, 'Xiaomi'], [TYPE, MOBILE]], [/android.+(mi[\s\-_]*(?:pad)?(?:[\s_]*[\w\s]+)?)\s+build/i // Mi Pad tablets
                    ], [[MODEL, /_/g, ' '], [VENDOR, 'Xiaomi'], [TYPE, TABLET]], [/android.+;\s(m[1-5]\snote)\sbuild/i // Meizu Tablet
                    ], [MODEL, [VENDOR, 'Meizu'], [TYPE, TABLET]], [/android.+a000(1)\s+build/i // OnePlus
                    ], [MODEL, [VENDOR, 'OnePlus'], [TYPE, MOBILE]], [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i // RCA Tablets
                    ], [MODEL, [VENDOR, 'RCA'], [TYPE, TABLET]], [/android.+[;\/]\s*(Venue[\d\s]*)\s+build/i // Dell Venue Tablets
                    ], [MODEL, [VENDOR, 'Dell'], [TYPE, TABLET]], [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i // Verizon Tablet
                    ], [MODEL, [VENDOR, 'Verizon'], [TYPE, TABLET]], [/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i // Barnes & Noble Tablet
                    ], [[VENDOR, 'Barnes & Noble'], MODEL, [TYPE, TABLET]], [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i // Barnes & Noble Tablet
                    ], [MODEL, [VENDOR, 'NuVision'], [TYPE, TABLET]], [/android.+[;\/]\s*(zte)?.+(k\d{2})\s+build/i // ZTE K Series Tablet
                    ], [[VENDOR, 'ZTE'], MODEL, [TYPE, TABLET]], [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i // Swiss GEN Mobile
                    ], [MODEL, [VENDOR, 'Swiss'], [TYPE, MOBILE]], [/android.+[;\/]\s*(zur\d{3})\s+build/i // Swiss ZUR Tablet
                    ], [MODEL, [VENDOR, 'Swiss'], [TYPE, TABLET]], [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i // Zeki Tablets
                    ], [MODEL, [VENDOR, 'Zeki'], [TYPE, TABLET]], [/(android).+[;\/]\s+([YR]\d{2}x?.*)\s+build/i, /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(.+)\s+build/i // Dragon Touch Tablet
                    ], [[VENDOR, 'Dragon Touch'], MODEL, [TYPE, TABLET]], [/android.+[;\/]\s*(NS-?.+)\s+build/i // Insignia Tablets
                    ], [MODEL, [VENDOR, 'Insignia'], [TYPE, TABLET]], [/android.+[;\/]\s*((NX|Next)-?.+)\s+build/i // NextBook Tablets
                    ], [MODEL, [VENDOR, 'NextBook'], [TYPE, TABLET]], [/android.+[;\/]\s*(Xtreme\_?)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i], [[VENDOR, 'Voice'], MODEL, [TYPE, MOBILE]], [/android.+[;\/]\s*(LVTEL\-?)?(V1[12])\s+build/i // LvTel Phones
                    ], [[VENDOR, 'LvTel'], MODEL, [TYPE, MOBILE]], [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i // Envizen Tablets
                    ], [MODEL, [VENDOR, 'Envizen'], [TYPE, TABLET]], [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(.*\b)\s+build/i // Le Pan Tablets
                    ], [VENDOR, MODEL, [TYPE, TABLET]], [/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i // MachSpeed Tablets
                    ], [MODEL, [VENDOR, 'MachSpeed'], [TYPE, TABLET]], [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i // Trinity Tablets
                    ], [VENDOR, MODEL, [TYPE, TABLET]], [/android.+[;\/]\s*TU_(1491)\s+build/i // Rotor Tablets
                    ], [MODEL, [VENDOR, 'Rotor'], [TYPE, TABLET]], [/android.+(KS(.+))\s+build/i // Amazon Kindle Tablets
                    ], [MODEL, [VENDOR, 'Amazon'], [TYPE, TABLET]], [/android.+(Gigaset)[\s\-]+(Q.+)\s+build/i // Gigaset Tablets
                    ], [VENDOR, MODEL, [TYPE, TABLET]], [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i // Unidentifiable Mobile
                    ], [[TYPE, util.lowerize], VENDOR, MODEL], [/(android.+)[;\/].+build/i // Generic Android Device
                    ], [MODEL, [VENDOR, 'Generic']]
                    /*//////////////////////////
                        // TODO: move to string map
                        ////////////////////////////
                                         /(C6603)/i                                                          // Sony Xperia Z C6603
                        ], [[MODEL, 'Xperia Z C6603'], [VENDOR, 'Sony'], [TYPE, MOBILE]], [
                        /(C6903)/i                                                          // Sony Xperia Z 1
                        ], [[MODEL, 'Xperia Z 1'], [VENDOR, 'Sony'], [TYPE, MOBILE]], [
                                         /(SM-G900[F|H])/i                                                   // Samsung Galaxy S5
                        ], [[MODEL, 'Galaxy S5'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
                        /(SM-G7102)/i                                                       // Samsung Galaxy Grand 2
                        ], [[MODEL, 'Galaxy Grand 2'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
                        /(SM-G530H)/i                                                       // Samsung Galaxy Grand Prime
                        ], [[MODEL, 'Galaxy Grand Prime'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
                        /(SM-G313HZ)/i                                                      // Samsung Galaxy V
                        ], [[MODEL, 'Galaxy V'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
                        /(SM-T805)/i                                                        // Samsung Galaxy Tab S 10.5
                        ], [[MODEL, 'Galaxy Tab S 10.5'], [VENDOR, 'Samsung'], [TYPE, TABLET]], [
                        /(SM-G800F)/i                                                       // Samsung Galaxy S5 Mini
                        ], [[MODEL, 'Galaxy S5 Mini'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
                        /(SM-T311)/i                                                        // Samsung Galaxy Tab 3 8.0
                        ], [[MODEL, 'Galaxy Tab 3 8.0'], [VENDOR, 'Samsung'], [TYPE, TABLET]], [
                                         /(T3C)/i                                                            // Advan Vandroid T3C
                        ], [MODEL, [VENDOR, 'Advan'], [TYPE, TABLET]], [
                        /(ADVAN T1J\+)/i                                                    // Advan Vandroid T1J+
                        ], [[MODEL, 'Vandroid T1J+'], [VENDOR, 'Advan'], [TYPE, TABLET]], [
                        /(ADVAN S4A)/i                                                      // Advan Vandroid S4A
                        ], [[MODEL, 'Vandroid S4A'], [VENDOR, 'Advan'], [TYPE, MOBILE]], [
                                         /(V972M)/i                                                          // ZTE V972M
                        ], [MODEL, [VENDOR, 'ZTE'], [TYPE, MOBILE]], [
                                         /(i-mobile)\s(IQ\s[\d\.]+)/i                                        // i-mobile IQ
                        ], [VENDOR, MODEL, [TYPE, MOBILE]], [
                        /(IQ6.3)/i                                                          // i-mobile IQ IQ 6.3
                        ], [[MODEL, 'IQ 6.3'], [VENDOR, 'i-mobile'], [TYPE, MOBILE]], [
                        /(i-mobile)\s(i-style\s[\d\.]+)/i                                   // i-mobile i-STYLE
                        ], [VENDOR, MODEL, [TYPE, MOBILE]], [
                        /(i-STYLE2.1)/i                                                     // i-mobile i-STYLE 2.1
                        ], [[MODEL, 'i-STYLE 2.1'], [VENDOR, 'i-mobile'], [TYPE, MOBILE]], [
                                         /(mobiistar touch LAI 512)/i                                        // mobiistar touch LAI 512
                        ], [[MODEL, 'Touch LAI 512'], [VENDOR, 'mobiistar'], [TYPE, MOBILE]], [
                                         /////////////
                        // END TODO
                        ///////////*/
                    ],
                    engine: [[/windows.+\sedge\/([\w\.]+)/i // EdgeHTML
                    ], [VERSION, [NAME, 'EdgeHTML']], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i // iCab
                    ], [NAME, VERSION], [/rv\:([\w\.]+).*(gecko)/i // Gecko
                    ], [VERSION, NAME]],
                    os: [[
                    // Windows based
                    /microsoft\s(windows)\s(vista|xp)/i // Windows (iTunes)
                    ], [NAME, VERSION], [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s]+\w)*/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i], [NAME, [VERSION, mapper.str, maps.os.windows.version]], [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i], [[NAME, 'Windows'], [VERSION, mapper.str, maps.os.windows.version]], [
                    // Mobile/Embedded OS
                    /\((bb)(10);/i // BlackBerry 10
                    ], [[NAME, 'BlackBerry'], VERSION], [/(blackberry)\w*\/?([\w\.]+)*/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i,
                    // Android/WebOS/Palm/QNX/Bada/RIM/MeeGo/Contiki
                    /linux;.+(sailfish);/i // Sailfish OS
                    ], [NAME, VERSION], [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i // Symbian
                    ], [[NAME, 'Symbian'], VERSION], [/\((series40);/i // Series 40
                    ], [NAME], [/mozilla.+\(mobile;.+gecko.+firefox/i // Firefox OS
                    ], [[NAME, 'Firefox OS'], VERSION], [
                    // Console
                    /(nintendo|playstation)\s([wids34portablevu]+)/i,
                    // GNU/Linux based
                    /(mint)[\/\s\(]?(\w+)*/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]+)*/i,
                    // Joli/Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware
                    // Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus
                    /(hurd|linux)\s?([\w\.]+)*/i, /(gnu)\s?([\w\.]+)*/i // GNU
                    ], [NAME, VERSION], [/(cros)\s[\w]+\s([\w\.]+\w)/i // Chromium OS
                    ], [[NAME, 'Chromium OS'], VERSION], [
                    // Solaris
                    /(sunos)\s?([\w\.]+\d)*/i // Solaris
                    ], [[NAME, 'Solaris'], VERSION], [
                    // BSD based
                    /\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i // FreeBSD/NetBSD/OpenBSD/PC-BSD/DragonFly
                    ], [NAME, VERSION], [/(haiku)\s(\w+)/i // Haiku
                    ], [NAME, VERSION], [/cfnetwork\/.+darwin/i, /ip[honead]+(?:.*os\s([\w]+)\slike\smac|;\sopera)/i // iOS
                    ], [[VERSION, /_/g, '.'], [NAME, 'iOS']], [/(mac\sos\sx)\s?([\w\s\.]+\w)*/i, /(macintosh|mac(?=_powerpc)\s)/i // Mac OS
                    ], [[NAME, 'Mac OS'], [VERSION, /_/g, '.']], [
                    // Other
                    /((?:open)?solaris)[\/\s-]?([\w\.]+)*/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,
                    // Plan9/Minix/BeOS/OS2/AmigaOS/MorphOS/RISCOS/OpenVMS
                    /(unix)\s?([\w\.]+)*/i // UNIX
                    ], [NAME, VERSION]]
                };
                /////////////////
                // Constructor
                ////////////////
                /*
                var Browser = function (name, version) {
                    this[NAME] = name;
                    this[VERSION] = version;
                };
                var CPU = function (arch) {
                    this[ARCHITECTURE] = arch;
                };
                var Device = function (vendor, model, type) {
                    this[VENDOR] = vendor;
                    this[MODEL] = model;
                    this[TYPE] = type;
                };
                var Engine = Browser;
                var OS = Browser;
                */
                var UAParser = function UAParser(uastring, extensions) {
                    if ((typeof uastring === 'undefined' ? 'undefined' : _typeof2(uastring)) === 'object') {
                        extensions = uastring;
                        uastring = undefined;
                    }
                    if (!(this instanceof UAParser)) {
                        return new UAParser(uastring, extensions).getResult();
                    }
                    var ua = uastring || (window && window.navigator && window.navigator.userAgent ? window.navigator.userAgent : EMPTY);
                    var rgxmap = extensions ? util.extend(regexes, extensions) : regexes;
                    //var browser = new Browser();
                    //var cpu = new CPU();
                    //var device = new Device();
                    //var engine = new Engine();
                    //var os = new OS();
                    this.getBrowser = function () {
                        var browser = { name: undefined, version: undefined };
                        mapper.rgx.call(browser, ua, rgxmap.browser);
                        browser.major = util.major(browser.version); // deprecated
                        return browser;
                    };
                    this.getCPU = function () {
                        var cpu = { architecture: undefined };
                        mapper.rgx.call(cpu, ua, rgxmap.cpu);
                        return cpu;
                    };
                    this.getDevice = function () {
                        var device = { vendor: undefined, model: undefined, type: undefined };
                        mapper.rgx.call(device, ua, rgxmap.device);
                        return device;
                    };
                    this.getEngine = function () {
                        var engine = { name: undefined, version: undefined };
                        mapper.rgx.call(engine, ua, rgxmap.engine);
                        return engine;
                    };
                    this.getOS = function () {
                        var os = { name: undefined, version: undefined };
                        mapper.rgx.call(os, ua, rgxmap.os);
                        return os;
                    };
                    this.getResult = function () {
                        return {
                            ua: this.getUA(),
                            browser: this.getBrowser(),
                            engine: this.getEngine(),
                            os: this.getOS(),
                            device: this.getDevice(),
                            cpu: this.getCPU()
                        };
                    };
                    this.getUA = function () {
                        return ua;
                    };
                    this.setUA = function (uastring) {
                        ua = uastring;
                        //browser = new Browser();
                        //cpu = new CPU();
                        //device = new Device();
                        //engine = new Engine();
                        //os = new OS();
                        return this;
                    };
                    return this;
                };
                UAParser.VERSION = LIBVERSION;
                UAParser.BROWSER = {
                    NAME: NAME,
                    MAJOR: MAJOR,
                    VERSION: VERSION
                };
                UAParser.CPU = {
                    ARCHITECTURE: ARCHITECTURE
                };
                UAParser.DEVICE = {
                    MODEL: MODEL,
                    VENDOR: VENDOR,
                    TYPE: TYPE,
                    CONSOLE: CONSOLE,
                    MOBILE: MOBILE,
                    SMARTTV: SMARTTV,
                    TABLET: TABLET,
                    WEARABLE: WEARABLE,
                    EMBEDDED: EMBEDDED
                };
                UAParser.ENGINE = {
                    NAME: NAME,
                    VERSION: VERSION
                };
                UAParser.OS = {
                    NAME: NAME,
                    VERSION: VERSION
                };
                //UAParser.Utils = util;
                ///////////
                // Export
                //////////
                // check js environment
                if ((typeof exports === 'undefined' ? 'undefined' : _typeof2(exports)) !== UNDEF_TYPE) {
                    // nodejs env
                    if ((typeof module === 'undefined' ? 'undefined' : _typeof2(module)) !== UNDEF_TYPE && module.exports) {
                        exports = module.exports = UAParser;
                    }
                    // TODO: test!!!!!!!!
                    /*
                    if (require && require.main === module && process) {
                        // cli
                        var jsonize = function (arr) {
                            var res = [];
                            for (var i in arr) {
                                res.push(new UAParser(arr[i]).getResult());
                            }
                            process.stdout.write(JSON.stringify(res, null, 2) + '\n');
                        };
                        if (process.stdin.isTTY) {
                            // via args
                            jsonize(process.argv.slice(2));
                        } else {
                            // via pipe
                            var str = '';
                            process.stdin.on('readable', function() {
                                var read = process.stdin.read();
                                if (read !== null) {
                                    str += read;
                                }
                            });
                            process.stdin.on('end', function () {
                                jsonize(str.replace(/\n$/, '').split('\n'));
                            });
                        }
                    }
                    */
                    exports.UAParser = UAParser;
                } else {
                    // requirejs env (optional)
                    if ("function" === FUNC_TYPE && __webpack_require__(10)) {
                        !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
                            return UAParser;
                        }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
                    } else if (window) {
                        // browser env
                        window.UAParser = UAParser;
                    }
                }
                // jQuery/Zepto specific (optional)
                // Note:
                //   In AMD env the global scope should be kept clean, but jQuery is an exception.
                //   jQuery always exports to global scope, unless jQuery.noConflict(true) is used,
                //   and we should catch that.
                var $ = window && (window.jQuery || window.Zepto);
                if ((typeof $ === 'undefined' ? 'undefined' : _typeof2($)) !== UNDEF_TYPE) {
                    var parser = new UAParser();
                    $.ua = parser.getResult();
                    $.ua.get = function () {
                        return parser.getUA();
                    };
                    $.ua.set = function (uastring) {
                        parser.setUA(uastring);
                        var result = parser.getResult();
                        for (var prop in result) {
                            $.ua[prop] = result[prop];
                        }
                    };
                }
            })((typeof window === 'undefined' ? 'undefined' : _typeof2(window)) === 'object' ? window : this);
            /***/
        },
        /* 10 */
        /***/function (module, exports) {
            /* WEBPACK VAR INJECTION */(function (__webpack_amd_options__) {
                module.exports = __webpack_amd_options__;
                /* WEBPACK VAR INJECTION */
            }).call(exports, {});
            /***/
        }]
        /******/
        )["default"]
    );
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)(module)))

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {


/**
 * toxic-decorators v0.3.8
 * (c) 2017 toxic-johann
 * Released under GPL-3.0
 */

(function (global, factory) {
	 true ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.toxicDecorators = {})));
}(this, (function (exports) { 'use strict';

function unwrapExports (x) {
	return x && x.__esModule ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

// 7.1.4 ToInteger
var ceil  = Math.ceil;
var floor = Math.floor;
var _toInteger = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

// 7.2.1 RequireObjectCoercible(argument)
var _defined = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

// true  -> String#at
// false -> String#codePointAt
var _stringAt = function(TO_STRING){
  return function(that, pos){
    var s = String(_defined(that))
      , i = _toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

var _library = true;

var _global = createCommonjsModule(function (module) {
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
});

var _core = createCommonjsModule(function (module) {
var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
});

var _aFunction = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

// optional / simple context binding

var _ctx = function(fn, that, length){
  _aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

var _isObject = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

var _anObject = function(it){
  if(!_isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

var _fails = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

// Thank's IE8 for his funny defineProperty
var _descriptors = !_fails(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

var document$1 = _global.document;
var is = _isObject(document$1) && _isObject(document$1.createElement);
var _domCreate = function(it){
  return is ? document$1.createElement(it) : {};
};

var _ie8DomDefine = !_descriptors && !_fails(function(){
  return Object.defineProperty(_domCreate('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

// 7.1.1 ToPrimitive(input [, PreferredType])

// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
var _toPrimitive = function(it, S){
  if(!_isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !_isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};

var dP             = Object.defineProperty;

var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes){
  _anObject(O);
  P = _toPrimitive(P, true);
  _anObject(Attributes);
  if(_ie8DomDefine)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};

var _objectDp = {
	f: f
};

var _propertyDesc = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

var _hide = _descriptors ? function(object, key, value){
  return _objectDp.f(object, key, _propertyDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

var PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? _core : _core[name] || (_core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? _global : IS_STATIC ? _global[name] : (_global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? _ctx(out, _global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? _ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])_hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
var _export = $export;

var _redefine = _hide;

var hasOwnProperty = {}.hasOwnProperty;
var _has = function(it, key){
  return hasOwnProperty.call(it, key);
};

var _iterators = {};

var toString = {}.toString;

var _cof = function(it){
  return toString.call(it).slice(8, -1);
};

// fallback for non-array-like ES3 and non-enumerable old V8 strings

var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return _cof(it) == 'String' ? it.split('') : Object(it);
};

// to indexed object, toObject with fallback for non-array-like ES3 strings

var _toIobject = function(it){
  return _iobject(_defined(it));
};

// 7.1.15 ToLength
var min       = Math.min;
var _toLength = function(it){
  return it > 0 ? min(_toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

var max       = Math.max;
var min$1       = Math.min;
var _toIndex = function(index, length){
  index = _toInteger(index);
  return index < 0 ? max(index + length, 0) : min$1(index, length);
};

// false -> Array#indexOf
// true  -> Array#includes

var _arrayIncludes = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = _toIobject($this)
      , length = _toLength(O.length)
      , index  = _toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

var SHARED = '__core-js_shared__';
var store  = _global[SHARED] || (_global[SHARED] = {});
var _shared = function(key){
  return store[key] || (store[key] = {});
};

var id = 0;
var px = Math.random();
var _uid = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

var shared = _shared('keys');
var _sharedKey = function(key){
  return shared[key] || (shared[key] = _uid(key));
};

var arrayIndexOf = _arrayIncludes(false);
var IE_PROTO$1     = _sharedKey('IE_PROTO');

var _objectKeysInternal = function(object, names){
  var O      = _toIobject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO$1)_has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(_has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

// IE 8- don't enum bug keys
var _enumBugKeys = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

// 19.1.2.14 / 15.2.3.14 Object.keys(O)


var _objectKeys = Object.keys || function keys(O){
  return _objectKeysInternal(O, _enumBugKeys);
};

var _objectDps = _descriptors ? Object.defineProperties : function defineProperties(O, Properties){
  _anObject(O);
  var keys   = _objectKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)_objectDp.f(O, P = keys[i++], Properties[P]);
  return O;
};

var _html = _global.document && document.documentElement;

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var IE_PROTO    = _sharedKey('IE_PROTO');
var Empty       = function(){ /* empty */ };
var PROTOTYPE$1   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = _domCreate('iframe')
    , i      = _enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  _html.appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE$1][_enumBugKeys[i]];
  return createDict();
};

var _objectCreate = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE$1] = _anObject(O);
    result = new Empty;
    Empty[PROTOTYPE$1] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : _objectDps(result, Properties);
};

var _wks = createCommonjsModule(function (module) {
var store      = _shared('wks')
  , Symbol     = _global.Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : _uid)('Symbol.' + name));
};

$exports.store = store;
});

var def = _objectDp.f;
var TAG = _wks('toStringTag');

var _setToStringTag = function(it, tag, stat){
  if(it && !_has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};

var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
_hide(IteratorPrototype, _wks('iterator'), function(){ return this; });

var _iterCreate = function(Constructor, NAME, next){
  Constructor.prototype = _objectCreate(IteratorPrototype, {next: _propertyDesc(1, next)});
  _setToStringTag(Constructor, NAME + ' Iterator');
};

// 7.1.13 ToObject(argument)

var _toObject = function(it){
  return Object(_defined(it));
};

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var IE_PROTO$2    = _sharedKey('IE_PROTO');
var ObjectProto = Object.prototype;

var _objectGpo = Object.getPrototypeOf || function(O){
  O = _toObject(O);
  if(_has(O, IE_PROTO$2))return O[IE_PROTO$2];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

var ITERATOR       = _wks('iterator');
var BUGGY          = !([].keys && 'next' in [].keys());
var FF_ITERATOR    = '@@iterator';
var KEYS           = 'keys';
var VALUES         = 'values';

var returnThis = function(){ return this; };

var _iterDefine = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  _iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = _objectGpo($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      _setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!_library && !_has(IteratorPrototype, ITERATOR))_hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!_library || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    _hide(proto, ITERATOR, $default);
  }
  // Plug for library
  _iterators[NAME] = $default;
  _iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))_redefine(proto, key, methods[key]);
    } else _export(_export.P + _export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

var $at  = _stringAt(true);

// 21.1.3.27 String.prototype[@@iterator]()
_iterDefine(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});

var _addToUnscopables = function(){ /* empty */ };

var _iterStep = function(done, value){
  return {value: value, done: !!done};
};

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
var es6_array_iterator = _iterDefine(Array, 'Array', function(iterated, kind){
  this._t = _toIobject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return _iterStep(1);
  }
  if(kind == 'keys'  )return _iterStep(0, index);
  if(kind == 'values')return _iterStep(0, O[index]);
  return _iterStep(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
_iterators.Arguments = _iterators.Array;

_addToUnscopables('keys');
_addToUnscopables('values');
_addToUnscopables('entries');

var TO_STRING_TAG = _wks('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = _global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])_hide(proto, TO_STRING_TAG, NAME);
  _iterators[NAME] = _iterators.Array;
}

var f$1 = _wks;

var _wksExt = {
	f: f$1
};

var iterator$2 = _wksExt.f('iterator');

var iterator = createCommonjsModule(function (module) {
module.exports = { "default": iterator$2, __esModule: true };
});

var _meta = createCommonjsModule(function (module) {
var META     = _uid('meta')
  , setDesc  = _objectDp.f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !_fails(function(){
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function(it){
  setDesc(it, META, {value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  }});
};
var fastKey = function(it, create){
  // return primitive with prefix
  if(!_isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if(!_has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return 'F';
    // not necessary to add metadata
    if(!create)return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function(it, create){
  if(!_has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return true;
    // not necessary to add metadata
    if(!create)return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function(it){
  if(FREEZE && meta.NEED && isExtensible(it) && !_has(it, META))setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY:      META,
  NEED:     false,
  fastKey:  fastKey,
  getWeak:  getWeak,
  onFreeze: onFreeze
};
});

var defineProperty = _objectDp.f;
var _wksDefine = function(name){
  var $Symbol = _core.Symbol || (_core.Symbol = _library ? {} : _global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: _wksExt.f(name)});
};

var _keyof = function(object, el){
  var O      = _toIobject(object)
    , keys   = _objectKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};

var f$2 = Object.getOwnPropertySymbols;

var _objectGops = {
	f: f$2
};

var f$3 = {}.propertyIsEnumerable;

var _objectPie = {
	f: f$3
};

// all enumerable object keys, includes symbols

var _enumKeys = function(it){
  var result     = _objectKeys(it)
    , getSymbols = _objectGops.f;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = _objectPie.f
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
  } return result;
};

// 7.2.2 IsArray(argument)

var _isArray = Array.isArray || function isArray(arg){
  return _cof(arg) == 'Array';
};

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var hiddenKeys = _enumBugKeys.concat('length', 'prototype');

var f$5 = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return _objectKeysInternal(O, hiddenKeys);
};

var _objectGopn = {
	f: f$5
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var gOPN$1      = _objectGopn.f;
var toString$1  = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return gOPN$1(it);
  } catch(e){
    return windowNames.slice();
  }
};

var f$4 = function getOwnPropertyNames(it){
  return windowNames && toString$1.call(it) == '[object Window]' ? getWindowNames(it) : gOPN$1(_toIobject(it));
};

var _objectGopnExt = {
	f: f$4
};

var gOPD$1           = Object.getOwnPropertyDescriptor;

var f$6 = _descriptors ? gOPD$1 : function getOwnPropertyDescriptor(O, P){
  O = _toIobject(O);
  P = _toPrimitive(P, true);
  if(_ie8DomDefine)try {
    return gOPD$1(O, P);
  } catch(e){ /* empty */ }
  if(_has(O, P))return _propertyDesc(!_objectPie.f.call(O, P), O[P]);
};

var _objectGopd = {
	f: f$6
};

// ECMAScript 6 symbols shim
var META           = _meta.KEY;
var gOPD           = _objectGopd.f;
var dP$1             = _objectDp.f;
var gOPN           = _objectGopnExt.f;
var $Symbol        = _global.Symbol;
var $JSON          = _global.JSON;
var _stringify     = $JSON && $JSON.stringify;
var PROTOTYPE$2      = 'prototype';
var HIDDEN         = _wks('_hidden');
var TO_PRIMITIVE   = _wks('toPrimitive');
var isEnum         = {}.propertyIsEnumerable;
var SymbolRegistry = _shared('symbol-registry');
var AllSymbols     = _shared('symbols');
var OPSymbols      = _shared('op-symbols');
var ObjectProto$1    = Object[PROTOTYPE$2];
var USE_NATIVE     = typeof $Symbol == 'function';
var QObject        = _global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE$2] || !QObject[PROTOTYPE$2].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = _descriptors && _fails(function(){
  return _objectCreate(dP$1({}, 'a', {
    get: function(){ return dP$1(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = gOPD(ObjectProto$1, key);
  if(protoDesc)delete ObjectProto$1[key];
  dP$1(it, key, D);
  if(protoDesc && it !== ObjectProto$1)dP$1(ObjectProto$1, key, protoDesc);
} : dP$1;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _objectCreate($Symbol[PROTOTYPE$2]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
  return typeof it == 'symbol';
} : function(it){
  return it instanceof $Symbol;
};

var $defineProperty$1 = function defineProperty(it, key, D){
  if(it === ObjectProto$1)$defineProperty$1(OPSymbols, key, D);
  _anObject(it);
  key = _toPrimitive(key, true);
  _anObject(D);
  if(_has(AllSymbols, key)){
    if(!D.enumerable){
      if(!_has(it, HIDDEN))dP$1(it, HIDDEN, _propertyDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(_has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _objectCreate(D, {enumerable: _propertyDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return dP$1(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  _anObject(it);
  var keys = _enumKeys(P = _toIobject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty$1(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _objectCreate(it) : $defineProperties(_objectCreate(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key = _toPrimitive(key, true));
  if(this === ObjectProto$1 && _has(AllSymbols, key) && !_has(OPSymbols, key))return false;
  return E || !_has(this, key) || !_has(AllSymbols, key) || _has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  it  = _toIobject(it);
  key = _toPrimitive(key, true);
  if(it === ObjectProto$1 && _has(AllSymbols, key) && !_has(OPSymbols, key))return;
  var D = gOPD(it, key);
  if(D && _has(AllSymbols, key) && !(_has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = gOPN(_toIobject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(!_has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var IS_OP  = it === ObjectProto$1
    , names  = gOPN(IS_OP ? OPSymbols : _toIobject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(_has(AllSymbols, key = names[i++]) && (IS_OP ? _has(ObjectProto$1, key) : true))result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if(!USE_NATIVE){
  $Symbol = function Symbol(){
    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
    var tag = _uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function(value){
      if(this === ObjectProto$1)$set.call(OPSymbols, value);
      if(_has(this, HIDDEN) && _has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, _propertyDesc(1, value));
    };
    if(_descriptors && setter)setSymbolDesc(ObjectProto$1, tag, {configurable: true, set: $set});
    return wrap(tag);
  };
  _redefine($Symbol[PROTOTYPE$2], 'toString', function toString(){
    return this._k;
  });

  _objectGopd.f = $getOwnPropertyDescriptor;
  _objectDp.f   = $defineProperty$1;
  _objectGopn.f = _objectGopnExt.f = $getOwnPropertyNames;
  _objectPie.f  = $propertyIsEnumerable;
  _objectGops.f = $getOwnPropertySymbols;

  if(_descriptors && !_library){
    _redefine(ObjectProto$1, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  _wksExt.f = function(name){
    return wrap(_wks(name));
  };
}

_export(_export.G + _export.W + _export.F * !USE_NATIVE, {Symbol: $Symbol});

for(var symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), i$1 = 0; symbols.length > i$1; )_wks(symbols[i$1++]);

for(var symbols = _objectKeys(_wks.store), i$1 = 0; symbols.length > i$1; )_wksDefine(symbols[i$1++]);

_export(_export.S + _export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return _has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    if(isSymbol(key))return _keyof(SymbolRegistry, key);
    throw TypeError(key + ' is not a symbol!');
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
});

_export(_export.S + _export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty$1,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && _export(_export.S + _export.F * (!USE_NATIVE || _fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it){
    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
    var args = [it]
      , i    = 1
      , replacer, $replacer;
    while(arguments.length > i)args.push(arguments[i++]);
    replacer = args[1];
    if(typeof replacer == 'function')$replacer = replacer;
    if($replacer || !_isArray(replacer))replacer = function(key, value){
      if($replacer)value = $replacer.call(this, key, value);
      if(!isSymbol(value))return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE$2][TO_PRIMITIVE] || _hide($Symbol[PROTOTYPE$2], TO_PRIMITIVE, $Symbol[PROTOTYPE$2].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
_setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
_setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
_setToStringTag(_global.JSON, 'JSON', true);

_wksDefine('asyncIterator');

_wksDefine('observable');

var index = _core.Symbol;

var symbol = createCommonjsModule(function (module) {
module.exports = { "default": index, __esModule: true };
});

var _typeof_1 = createCommonjsModule(function (module, exports) {
"use strict";

exports.__esModule = true;



var _iterator2 = _interopRequireDefault(iterator);



var _symbol2 = _interopRequireDefault(symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};
});

var _typeof = unwrapExports(_typeof_1);

// most Object methods by ES6 should accept primitives

var _objectSap = function(KEY, exec){
  var fn  = (_core.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  _export(_export.S + _export.F * _fails(function(){ fn(1); }), 'Object', exp);
};

// 19.1.2.14 Object.keys(O)


_objectSap('keys', function(){
  return function keys(it){
    return _objectKeys(_toObject(it));
  };
});

var keys$1 = _core.Object.keys;

var keys = createCommonjsModule(function (module) {
module.exports = { "default": keys$1, __esModule: true };
});

// 20.1.2.3 Number.isInteger(number)
var floor$1    = Math.floor;
var _isInteger = function isInteger(it){
  return !_isObject(it) && isFinite(it) && floor$1(it) === it;
};

// 20.1.2.3 Number.isInteger(number)


_export(_export.S, 'Number', {isInteger: _isInteger});

var isInteger$2 = _core.Number.isInteger;

var isInteger$1 = createCommonjsModule(function (module) {
module.exports = { "default": isInteger$2, __esModule: true };
});

var _stringWs = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

var space   = '[' + _stringWs + ']';
var non     = '\u200b\u0085';
var ltrim   = RegExp('^' + space + space + '*');
var rtrim   = RegExp(space + space + '*$');

var exporter = function(KEY, exec, ALIAS){
  var exp   = {};
  var FORCE = _fails(function(){
    return !!_stringWs[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : _stringWs[KEY];
  if(ALIAS)exp[ALIAS] = fn;
  _export(_export.P + _export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function(string, TYPE){
  string = String(_defined(string));
  if(TYPE & 1)string = string.replace(ltrim, '');
  if(TYPE & 2)string = string.replace(rtrim, '');
  return string;
};

var _stringTrim = exporter;

var $parseFloat = _global.parseFloat;
var $trim       = _stringTrim.trim;

var _parseFloat$3 = 1 / $parseFloat(_stringWs + '-0') !== -Infinity ? function parseFloat(str){
  var string = $trim(String(str), 3)
    , result = $parseFloat(string);
  return result === 0 && string.charAt(0) == '-' ? -0 : result;
} : $parseFloat;

// 20.1.2.12 Number.parseFloat(string)
_export(_export.S + _export.F * (Number.parseFloat != _parseFloat$3), 'Number', {parseFloat: _parseFloat$3});

var _parseFloat$1 = parseFloat;

var _parseFloat = createCommonjsModule(function (module) {
module.exports = { "default": _parseFloat$1, __esModule: true };
});

/**
 * toxic-predicate-functions v0.1.2
 * (c) 2017 toxic-johann
 * Released under MIT
 */

/**
 * is void element or not ? Means it will return true when val is undefined or null
 * @param  {Anything}  obj
 * @return {Boolean}   return true when val is undefined or null
 */
function isVoid(obj) {
  return obj === undefined || obj === null;
}
/**
 * to check whether a variable is array
 * @param {Anything} arr
 * @return {Boolean} true when it is a boolean
 */
function isArray(arr) {
  return Array.isArray(arr);
}

/**
 * 判断是否为function
 * @param  {Anything}  obj [description]
 * @return {Boolean}     [description]
 */
function isFunction(obj) {
  return typeof obj === 'function';
}

/**
 * 判断是否是对象
 * @param  {Anything}  obj 传入对象
 * @return {Boolean}     [description]
 */
function isObject(obj) {
  // incase of arrow function and array
  return Object(obj) === obj && String(obj) === '[object Object]' && !isFunction(obj) && !isArray(obj);
}
/**
 * to tell you if it's a real number
 * @param  {Anything}  obj
 * @return {Boolean}   return true when it's a number
 */
function isNumber(obj) {
  return typeof obj === 'number';
}
/**
 * 判断是否是string
 * @param  {Anything}  str [description]
 * @return {Boolean}     [description]
 */
function isString(str) {
  return typeof str === 'string' || str instanceof String;
}
/**
 * is Boolean or not
 * @param  {Anything} bool
 * @return {Boolean}
 */
function isBoolean(bool) {
  return typeof bool === 'boolean';
}
/**
 * is a promise or not
 * @param {Anything} obj
 * @return {boolean}
 */
function isPromise(obj) {
  return !!obj && ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}
/**
 * is Primitive type or not, whick means it will return true when data is number/string/boolean/undefined/null
 * @param  {Anyting}  val
 * @return {Boolean}  true when type is number/string/boolean/undefined/null
 */
function isPrimitive(val) {
  return isVoid(val) || isBoolean(val) || isString(val) || isNumber(val);
}

// call something on iterator step with safe closing on error

var _iterCall = function(iterator, fn, value, entries){
  try {
    return entries ? fn(_anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined)_anObject(ret.call(iterator));
    throw e;
  }
};

// check on default Array iterator
var ITERATOR$1   = _wks('iterator');
var ArrayProto = Array.prototype;

var _isArrayIter = function(it){
  return it !== undefined && (_iterators.Array === it || ArrayProto[ITERATOR$1] === it);
};

var _createProperty = function(object, index, value){
  if(index in object)_objectDp.f(object, index, _propertyDesc(0, value));
  else object[index] = value;
};

// getting tag from 19.1.3.6 Object.prototype.toString()
var TAG$1 = _wks('toStringTag');
var ARG = _cof(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

var _classof = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG$1)) == 'string' ? T
    // builtinTag case
    : ARG ? _cof(O)
    // ES3 arguments fallback
    : (B = _cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

var ITERATOR$2  = _wks('iterator');
var core_getIteratorMethod = _core.getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR$2]
    || it['@@iterator']
    || _iterators[_classof(it)];
};

var ITERATOR$3     = _wks('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR$3]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }

var _iterDetect = function(exec, skipClosing){
  if(!skipClosing && !SAFE_CLOSING)return false;
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[ITERATOR$3]();
    iter.next = function(){ return {done: safe = true}; };
    arr[ITERATOR$3] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};

_export(_export.S + _export.F * !_iterDetect(function(iter){ Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
    var O       = _toObject(arrayLike)
      , C       = typeof this == 'function' ? this : Array
      , aLen    = arguments.length
      , mapfn   = aLen > 1 ? arguments[1] : undefined
      , mapping = mapfn !== undefined
      , index   = 0
      , iterFn  = core_getIteratorMethod(O)
      , length, result, step, iterator;
    if(mapping)mapfn = _ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if(iterFn != undefined && !(C == Array && _isArrayIter(iterFn))){
      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
        _createProperty(result, index, mapping ? _iterCall(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = _toLength(O.length);
      for(result = new C(length); length > index; index++){
        _createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});

var from$2 = _core.Array.from;

var from = createCommonjsModule(function (module) {
module.exports = { "default": from$2, __esModule: true };
});

var toConsumableArray = createCommonjsModule(function (module, exports) {
"use strict";

exports.__esModule = true;



var _from2 = _interopRequireDefault(from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};
});

var _toConsumableArray = unwrapExports(toConsumableArray);

/**
 * toxic-utils v0.1.5
 * (c) 2017 toxic-johann
 * Released under MIT
 */

/**
 * the handler to generate an deep traversal handler
 * @param  {Function} fn the function you wanna run when you reach in the deep property
 * @return {Function}    the handler
 */
function genTraversalHandler(fn) {
  function recursiveFn(source, target, key) {
    if (isArray(source) || isObject(source)) {
      target = target || (isObject(source) ? {} : []);
      for (var _key in source) {
        target[_key] = recursiveFn(source[_key], target[_key], _key);
      }
      return target;
    }
    return fn(source, target, key);
  }
  return recursiveFn;
}
var _deepAssign = genTraversalHandler(function (val) {
  return val;
});
/**
 * bind the function with some context. we have some fallback strategy here
 * @param {function} fn the function which we need to bind the context on
 * @param {any} context the context object
 */
function bind(fn, context) {
  if (fn.bind) {
    return fn.bind(context);
  } else if (fn.apply) {
    return function __autobind__() {
      for (var _len2 = arguments.length, args = Array(_len2), _key3 = 0; _key3 < _len2; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return fn.apply(context, args);
    };
  } else {
    return function __autobind__() {
      for (var _len3 = arguments.length, args = Array(_len3), _key4 = 0; _key4 < _len3; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return fn.call.apply(fn, [context].concat(_toConsumableArray(args)));
    };
  }
}

/**
 * get an deep property
 */
function getDeepProperty(obj, keys) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref$throwError = _ref.throwError,
      throwError = _ref$throwError === undefined ? false : _ref$throwError,
      backup = _ref.backup;

  if (isString(keys)) {
    keys = keys.split('.');
  }
  if (!isArray(keys)) {
    throw new TypeError('keys of getDeepProperty must be string or Array<string>');
  }
  var read = [];
  var target = obj;
  for (var i = 0, len = keys.length; i < len; i++) {
    var key = keys[i];
    if (isVoid(target)) {
      if (throwError) {
        throw new Error('obj' + (read.length > 0 ? '.' + read.join('.') : ' itself') + ' is ' + target);
      } else {
        return backup;
      }
    }
    target = target[key];
    read.push(key);
  }
  return target;
}

var _typeof$1 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};



















var defineProperty$1 = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};





















var slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();













var toConsumableArray$1 = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
// **********************  对象操作  ************************
/**
 * sort Object attributes by function
 * and transfer them into array
 * @param  {Object} obj Object form from numric
 * @param  {Function} fn sort function
 * @return {Array} the sorted attirbutes array
 */


/**
 * to check if an descriptor
 * @param {anything} desc
 */
function isDescriptor(desc) {
  if (!desc || !desc.hasOwnProperty) {
    return false;
  }

  var keys = ['value', 'initializer', 'get', 'set'];

  for (var i = 0, l = keys.length; i < l; i++) {
    if (desc.hasOwnProperty(keys[i])) {
      return true;
    }
  }
  return false;
}
/**
 * to check if the descirptor is an accessor descriptor
 * @param {descriptor} desc it should be a descriptor better
 */
function isAccessorDescriptor(desc) {
  return !!desc && (isFunction(desc.get) || isFunction(desc.set)) && isBoolean(desc.configurable) && isBoolean(desc.enumerable) && desc.writable === undefined;
}
/**
 * to check if the descirptor is an data descriptor
 * @param {descriptor} desc it should be a descriptor better
 */
function isDataDescriptor(desc) {
  return !!desc && desc.hasOwnProperty('value') && isBoolean(desc.configurable) && isBoolean(desc.enumerable) && isBoolean(desc.writable);
}
/**
 * to check if the descirptor is an initiallizer descriptor
 * @param {descriptor} desc it should be a descriptor better
 */
function isInitializerDescriptor(desc) {
  return !!desc && isFunction(desc.initializer) && isBoolean(desc.configurable) && isBoolean(desc.enumerable) && isBoolean(desc.writable);
}
/**
 * set one value on the object
 * @param {string} key
 */
function createDefaultSetter(key) {
  return function set$$1(newValue) {
    Object.defineProperty(this, key, {
      configurable: true,
      writable: true,
      // IS enumerable when reassigned by the outside word
      enumerable: true,
      value: newValue
    });
    return newValue;
  };
}

/**
 * Compress many function into one function, but this function only accept one arguments;
 * @param {Array<Function>} fns the array of function we need to compress into one function
 * @param {string} errmsg When we check that there is something is not function, we will throw an error, you can set your own error message
 */
function compressOneArgFnArray(fns) {
  var errmsg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'You must pass me an array of function';

  if (!isArray(fns) || fns.length < 1) {
    throw new TypeError(errmsg);
  }
  if (fns.length === 1) {
    if (!isFunction(fns[0])) {
      throw new TypeError(errmsg);
    }
    return fns[0];
  }
  return fns.reduce(function (prev, curr) {
    if (!isFunction(curr) || !isFunction(prev)) throw new TypeError(errmsg);
    return function (value) {
      return bind(curr, this)(bind(prev, this)(value));
    };
  });
}
/**
 * just a method to call console.warn, maybe i will add some handler on it someday
 * @param {anything} args
 */
function warn(message) {
  if (isFunction(console.warn)) return console.warn(message);
  console.log(message);
}

function getOwnKeysFn() {
  var getOwnPropertyNames = Object.getOwnPropertyNames,
      getOwnPropertySymbols = Object.getOwnPropertySymbols;

  return isFunction(getOwnPropertySymbols) ? function (obj) {
    // $FlowFixMe: do not support symwbol yet
    return Array.from(getOwnPropertyNames(obj).concat(getOwnPropertySymbols(obj)));
  } : getOwnPropertyNames;
}

var getOwnKeys = getOwnKeysFn();

function getOwnPropertyDescriptorsFn() {
  // $FlowFixMe: In some environment, Object.getOwnPropertyDescriptors has been implemented;
  return isFunction(Object.getOwnPropertyDescriptors) ? Object.getOwnPropertyDescriptors : function (obj) {
    return getOwnKeys(obj).reduce(function (descs, key) {
      descs[key] = getOwnPropertyDescriptor(obj, key);
      return descs;
    }, {});
  };
}

var getOwnPropertyDescriptors = getOwnPropertyDescriptorsFn();

function compressMultipleDecorators() {
  for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  if (!fns.length) throw new TypeError('You must pass in decorators in compressMultipleDecorators');
  fns.forEach(function (fn) {
    if (!isFunction(fn)) throw new TypeError('Decorators must be a function, but not "' + fn + '" in ' + (typeof fn === 'undefined' ? 'undefined' : _typeof$1(fn)));
  });
  if (fns.length === 1) return fns[0];
  return function (obj, prop, descirptor) {
    // $FlowFixMe: the reduce will return a descriptor
    return fns.reduce(function (descirptor, fn) {
      return fn(obj, prop, descirptor);
    }, descirptor);
  };
}

function accessor() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      get = _ref.get,
      set = _ref.set;

  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref2$preGet = _ref2.preGet,
      preGet = _ref2$preGet === undefined ? false : _ref2$preGet,
      _ref2$preSet = _ref2.preSet,
      preSet = _ref2$preSet === undefined ? true : _ref2$preSet;

  if (!isFunction(get) && !isFunction(set) && !(isArray(get) && get.length > 0) && !(isArray(set) && set.length > 0)) throw new TypeError("@accessor need a getter or setter. If you don't need to add setter/getter. You should remove @accessor");
  var errmsg = '@accessor only accept function or array of function as getter/setter';
  get = isArray(get) ? compressOneArgFnArray(get, errmsg) : get;
  set = isArray(set) ? compressOneArgFnArray(set, errmsg) : set;
  return function (obj, prop, descriptor) {
    var _ref3 = descriptor || {},
        _ref3$configurable = _ref3.configurable,
        configurable = _ref3$configurable === undefined ? true : _ref3$configurable,
        _ref3$enumerable = _ref3.enumerable,
        enumerable = _ref3$enumerable === undefined ? true : _ref3$enumerable;

    var hasGet = isFunction(get);
    var hasSet = isFunction(set);
    var handleGet = function handleGet(value) {
      // $FlowFixMe: it's really function here
      return hasGet ? bind(get, this)(value) : value;
    };
    var handleSet = function handleSet(value) {
      // $FlowFixMe: it's really function here
      return hasSet ? bind(set, this)(value) : value;
    };
    if (isAccessorDescriptor(descriptor)) {
      var originGet = descriptor.get,
          originSet = descriptor.set;

      var hasOriginGet = isFunction(originGet);
      var hasOriginSet = isFunction(originSet);
      if ("development" !== 'production' && !hasOriginGet && hasGet) {
        warn('You are trying to set getter via @accessor on ' + prop + ' without getter. That\'s not a good idea.');
      }
      if ("development" !== 'production' && !hasOriginSet && hasSet) {
        warn('You are trying to set setter via @accessor on  ' + prop + ' without setter. That\'s not a good idea.');
      }
      var getter = hasOriginGet || hasGet ? function () {
        var _this = this;

        var boundGetter = bind(handleGet, this);
        var originBoundGetter = function originBoundGetter() {
          return hasOriginGet
          // $FlowFixMe: we have do a check here
          ? bind(originGet, _this)() : undefined;
        };
        var order = preGet ? [boundGetter, originBoundGetter] : [originBoundGetter, boundGetter];
        // $FlowFixMe: it's all function here
        return order.reduce(function (value, fn) {
          return fn(value);
        }, undefined);
      } : undefined;
      var setter = hasOriginSet || hasSet ? function (val) {
        var _this2 = this;

        var boundSetter = bind(handleSet, this);
        var originBoundSetter = function originBoundSetter(value) {
          return hasOriginSet
          // $FlowFixMe: flow act like a retarded child on optional property
          ? bind(originSet, _this2)(value) : value;
        };
        var order = preSet ? [boundSetter, originBoundSetter] : [originBoundSetter, boundSetter];
        return order.reduce(function (value, fn) {
          return fn(value);
        }, val);
      } : undefined;
      return {
        get: getter,
        set: setter,
        configurable: configurable,
        enumerable: enumerable
      };
    } else if (isInitializerDescriptor(descriptor)) {
      // $FlowFixMe: disjoint union is horrible, descriptor is initializerDescriptor now
      var initializer = descriptor.initializer;

      var value = void 0;
      var inited = false;
      return {
        get: function get() {
          var boundFn = bind(handleGet, this);
          if (inited) return boundFn(value);
          value = bind(initializer, this)();
          inited = true;
          return boundFn(value);
        },
        set: function set(val) {
          var boundFn = bind(handleSet, this);
          value = preSet ? boundFn(val) : val;
          inited = true;
          if (!preSet) {
            boundFn(value);
          }
          return value;
        },

        configurable: configurable,
        enumerable: enumerable
      };
    } else {
      // $FlowFixMe: disjoint union is horrible, descriptor is DataDescriptor now
      var _ref4 = descriptor || {},
          _value = _ref4.value;

      return {
        get: function get() {
          return bind(handleGet, this)(_value);
        },
        set: function set(val) {
          var boundFn = bind(handleSet, this);
          _value = preSet ? boundFn(val) : val;
          if (!preSet) {
            boundFn(_value);
          }
          return _value;
        },

        configurable: configurable,
        enumerable: enumerable
      };
    }
  };
}

function before() {
  for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  if (fns.length === 0) throw new Error("@before accept at least one parameter. If you don't need to preprocess before your function, do not add @before decorators");
  if (fns.length > 2 && isDescriptor(fns[2])) {
    throw new Error('You may use @before straightly, @before return decorators, you should call it before you set it as decorator.');
  }
  for (var i = fns.length - 1; i > -1; i--) {
    if (!isFunction(fns[i])) throw new TypeError('@before only accept function parameter');
  }
  return function (obj, prop, descriptor) {
    var _ref = descriptor || {},
        fn = _ref.value,
        configurable = _ref.configurable,
        enumerable = _ref.enumerable,
        writable = _ref.writable;

    if (!isFunction(fn)) throw new TypeError('@before can only be used on function, please check the property "' + prop + '" is a method or not.');
    var handler = function handler() {
      var _this = this;

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      var paras = fns.reduce(function (paras, fn) {
        var result = bind(fn, _this).apply(undefined, toConsumableArray$1(paras));
        return result === undefined ? paras : isArray(result) ? result
        // $FlowFixMe: what the hell, it can be anything
        : [result];
      }, args);
      return bind(fn, this).apply(undefined, toConsumableArray$1(paras));
    };
    return {
      value: handler,
      configurable: configurable,
      enumerable: enumerable,
      writable: writable
    };
  };
}

function after() {
  for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  if (fns.length === 0) throw new Error("@after accept at least one parameter. If you don't need to preprocess after your function, do not add @after decorators");
  if (fns.length > 2 && isDescriptor(fns[2])) {
    throw new Error('You may have used @after straightly. @after return decorators. You should call it before you use it as decorators');
  }
  var fn = compressOneArgFnArray(fns, '@after only accept function parameter');
  return function (obj, prop, descriptor) {
    var _ref = descriptor || {},
        value = _ref.value,
        configurable = _ref.configurable,
        enumerable = _ref.enumerable,
        writable = _ref.writable;

    if (!isFunction(value)) throw new TypeError('@after can only be used on function, please checkout your property "' + prop + '" is a method or not.');
    var handler = function handler() {
      var ret = bind(value, this).apply(undefined, arguments);
      return bind(fn, this)(ret);
    };
    return {
      value: handler,
      configurable: configurable,
      enumerable: enumerable,
      writable: writable
    };
  };
}

function readonly(obj, prop, descriptor) {
  if (descriptor === undefined) {
    /* istanbul ignore else  */
    warn('You are using @readonly on an undefined property "' + prop + '". This property will become a readonly undefined forever, which is meaningless.');
    return {
      value: undefined,
      writable: false,
      enumerable: true,
      configurable: true
    };
  }
  if (isAccessorDescriptor(descriptor)) {
    descriptor.set = undefined;
    return descriptor;
  }
  // $FlowFixMe: disjoint union makes me disappointed
  descriptor.writable = false;
  return descriptor;
}

function initialize() {
  for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  if (fns.length === 0) throw new Error("@initialize accept at least one parameter. If you don't need to initialize your value, do not add @initialize.");
  if (fns.length > 2 && isDescriptor(fns[2])) {
    throw new Error('You may use @initialize straightly, @initialize return decorators, you need to call it');
  }
  var fn = compressOneArgFnArray(fns, '@initialize only accept function parameter');
  return function (obj, prop, descriptor) {
    if (descriptor === undefined) {
      return {
        value: bind(fn, obj)(),
        configurable: true,
        writable: true,
        enumerable: true
      };
    }
    if (isAccessorDescriptor(descriptor)) {
      var hasBeenReset = false;
      var originSet = descriptor.set;

      return accessor({
        get: function get(value) {
          if (hasBeenReset) return value;
          return bind(fn, this)(value);
        },

        set: originSet ? function (value) {
          hasBeenReset = true;
          return value;
        } : undefined
      })(obj, prop, descriptor);
    }
    /**
     * when we set decorator on propery
     * we will get a descriptor with initializer
     * as they will be attach on the instance later
     * so, we need to substitute the initializer function
     */
    if (isInitializerDescriptor(descriptor)) {
      // $FlowFixMe: useless disjoint union
      var initializer = descriptor.initializer;

      var handler = function handler() {
        return bind(fn, this)(bind(initializer, this)());
      };
      return {
        initializer: handler,
        configurable: descriptor.configurable,
        // $FlowFixMe: useless disjoint union
        writable: descriptor.writable,
        enumerable: descriptor.enumerable
      };
    }
    // $FlowFixMe: useless disjoint union
    var value = bind(fn, this)(descriptor.value);
    return {
      value: value,
      // $FlowFixMe: useless disjoint union
      writable: descriptor.writable,
      configurable: descriptor.configurable,
      enumerable: descriptor.enumerable
    };
  };
}

var getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor;
var defineProperty$2 = Object.defineProperty;

function setAlias(root, prop, _ref, obj, key, _ref2) {
  var configurable = _ref.configurable,
      enumerable = _ref.enumerable;
  var force = _ref2.force,
      omit = _ref2.omit;

  var originDesc = getOwnPropertyDescriptor$1(obj, key);
  if (originDesc !== undefined) {
    if (omit) return;
    // TODO: we should add an github link here
    if (!force) throw new Error('"' + prop + '" is an existing property, if you want to override it, please set "force" true in @alias option.');
    if (!originDesc.configurable) {
      throw new Error('property "' + prop + '" is unconfigurable.');
    }
  }
  defineProperty$2(obj, key, {
    get: function get$$1() {
      return root[prop];
    },
    set: function set$$1(value) {
      root[prop] = value;
      return prop;
    },

    configurable: configurable,
    enumerable: enumerable
  });
}
function alias(other, key, option) {
  // set argument into right position
  if (arguments.length === 2) {
    if (isString(other)) {
      // $FlowFixMe: i will check this later
      option = key;
      key = other;
      other = undefined;
    }
  } else if (arguments.length === 1) {
    // $FlowFixMe: i will check this later
    key = other;
    other = undefined;
  }
  // argument validate
  if (!isString(key)) throw new TypeError('@alias need a string as a key to find the porperty to set alias on');
  var illegalObjErrorMsg = 'If you want to use @alias to set alias on other instance, you must pass in a legal instance';
  if (other !== undefined && isPrimitive(other)) throw new TypeError(illegalObjErrorMsg);

  var _ref3 = isObject(option) ? option : { force: false, omit: false },
      force = _ref3.force,
      omit = _ref3.omit;

  return function (obj, prop, descriptor) {
    descriptor = descriptor || {
      value: undefined,
      configurable: true,
      writable: true,
      enumerable: true
    };
    function getTargetAndName(other, obj, key) {
      var target = isPrimitive(other) ? obj : other;
      var keys = key.split('.');

      var _keys$slice = keys.slice(-1),
          _keys$slice2 = slicedToArray(_keys$slice, 1),
          name = _keys$slice2[0];

      target = getDeepProperty(target, keys.slice(0, -1), { throwError: true });
      if (isPrimitive(target)) {
        throw new TypeError(illegalObjErrorMsg);
      }
      return {
        target: target,
        name: name
      };
    }
    if (isInitializerDescriptor(descriptor)) {
      return initialize(function (value) {
        var _getTargetAndName = getTargetAndName(other, this, key),
            target = _getTargetAndName.target,
            name = _getTargetAndName.name;

        setAlias(this, prop, descriptor, target, name, { force: force, omit: omit });
        return value;
      })(obj, prop, descriptor);
    }
    if (isAccessorDescriptor(descriptor)) {
      var inited = void 0;
      var handler = function handler(value) {
        if (inited) return value;

        var _getTargetAndName2 = getTargetAndName(other, this, key),
            target = _getTargetAndName2.target,
            name = _getTargetAndName2.name;

        setAlias(this, prop, descriptor, target, name, { force: force, omit: omit });
        inited = true;
        return value;
      };
      return accessor({ get: handler, set: handler })(obj, prop, descriptor);
    }

    var _getTargetAndName3 = getTargetAndName(other, obj, key),
        target = _getTargetAndName3.target,
        name = _getTargetAndName3.name;

    setAlias(obj, prop, descriptor, target, name, { force: force, omit: omit });
    return descriptor;
  };
}

var defineProperty$3 = Object.defineProperty;

function classify(decorator) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      requirement = _ref.requirement,
      _ref$customArgs = _ref.customArgs,
      customArgs = _ref$customArgs === undefined ? false : _ref$customArgs;

  return function () {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref2$exclude = _ref2.exclude,
        exclude = _ref2$exclude === undefined ? [] : _ref2$exclude,
        _ref2$include = _ref2.include,
        include = _ref2$include === undefined ? [] : _ref2$include,
        _ref2$construct = _ref2.construct,
        construct = _ref2$construct === undefined ? false : _ref2$construct,
        _ref2$self = _ref2.self,
        self = _ref2$self === undefined ? false : _ref2$self;

    if (!isArray(exclude)) throw new TypeError('options.exclude must be an array');
    if (!isArray(include)) throw new TypeError('options.include must be an array');
    return function (Klass) {
      var isClass = isFunction(Klass);
      if (!self && !isClass) throw new TypeError('@' + decorator.name + 'Class can only be used on class');
      if (self && isPrimitive(Klass)) throw new TypeError('@' + decorator.name + 'Class must be used on non-primitive type value in \'self\' mode');
      var prototype = self ? Klass : Klass.prototype;
      if (isVoid(prototype)) throw new Error('The prototype of the ' + Klass.name + ' is empty, please check it');
      var descs = getOwnPropertyDescriptors(prototype);
      getOwnKeys(prototype).concat(include).forEach(function (key) {
        var desc = descs[key];
        if (key === 'constructor' && !construct || self && isClass && ['name', 'length', 'prototype'].indexOf(key) > -1 || exclude.indexOf(key) > -1 || isFunction(requirement) && requirement(prototype, key, desc, { self: self }) === false) return;
        defineProperty$3(prototype, key, (customArgs ? decorator.apply(undefined, toConsumableArray$1(args)) : decorator)(prototype, key, desc));
      });
    };
  };
}

var autobindClass = classify(autobind, {
  requirement: function requirement(obj, prop, desc) {
    // $FlowFixMe: it's data descriptor now
    return isDataDescriptor(desc) && isFunction(desc.value);
  }
});

var mapStore = void 0;
// save bound function for super
function getBoundSuper(obj, fn) {
  if (typeof WeakMap === 'undefined') {
    throw new Error('Using @autobind on ' + fn.name + '() requires WeakMap support due to its use of super.' + fn.name + '()');
  }

  if (!mapStore) {
    mapStore = new WeakMap();
  }

  if (mapStore.has(obj) === false) {
    mapStore.set(obj, new WeakMap());
  }

  var superStore = mapStore.get(obj);
  // $FlowFixMe: already insure superStore is not undefined
  if (superStore.has(fn) === false) {
    // $FlowFixMe: already insure superStore is not undefined
    superStore.set(fn, bind(fn, obj));
  }
  // $FlowFixMe: already insure superStore is not undefined
  return superStore.get(fn);
}
/**
 * auto bind the function on the class, just support function
 * @param {Object} obj Target Object
 * @param {string} prop prop strong
 * @param {Object} descriptor
 */
function autobind(obj, prop, descriptor) {
  if (arguments.length === 1) return autobindClass()(obj);

  var _ref = descriptor || {},
      fn = _ref.value,
      configurable = _ref.configurable;

  if (!isFunction(fn)) {
    throw new TypeError('@autobind can only be used on functions, not "' + fn + '" in ' + (typeof fn === 'undefined' ? 'undefined' : _typeof$1(fn)) + ' on property "' + prop + '"');
  }
  var constructor = obj.constructor;

  return {
    configurable: configurable,
    enumerable: false,
    get: function get$$1() {
      var _this = this;

      var boundFn = function boundFn() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return fn.call.apply(fn, [_this].concat(toConsumableArray$1(args)));
      };
      // Someone accesses the property directly on the prototype on which it is
      // actually defined on, i.e. Class.prototype.hasOwnProperty(key)
      if (this === obj) {
        return fn;
      }
      // Someone accesses the property directly on a prototype,
      // but it was found up the chain, not defined directly on it
      // i.e. Class.prototype.hasOwnProperty(key) == false && key in Class.prototype
      if (this.constructor !== constructor && Object.getPrototypeOf(this).constructor === constructor) {
        return fn;
      }

      // Autobound method calling super.sameMethod() which is also autobound and so on.
      if (this.constructor !== constructor && prop in this.constructor.prototype) {
        return getBoundSuper(this, fn);
      }
      Object.defineProperty(this, prop, {
        configurable: true,
        writable: true,
        // NOT enumerable when it's a bound method
        enumerable: false,
        value: boundFn
      });

      return boundFn;
    },

    set: createDefaultSetter(prop)
  };
}

var defineProperty$4 = Object.defineProperty;
/**
 * make one attr only can be read, but could not be rewrited/ deleted
 * @param {Object} obj
 * @param {string} prop
 * @param {Object} descriptor
 * @return {descriptor}
 */

function frozen(obj, prop, descriptor) {
  if (descriptor === undefined) {
    /* istanbul ignore else  */
    warn('You are using @frozen on an undefined property. This property will become a frozen undefined forever, which is meaningless');
    return {
      value: undefined,
      writable: false,
      enumerable: false,
      configurable: false
    };
  }
  descriptor.enumerable = false;
  descriptor.configurable = false;
  if (isAccessorDescriptor(descriptor)) {
    var _get = descriptor.get;

    descriptor.set = undefined;
    if (!isFunction(_get)) {
      /* istanbul ignore else  */
      warn('You are using @frozen on one accessor descriptor without getter. This property will become a frozen undefined finally.Which maybe meaningless.');
      return;
    }
    return {
      get: function get() {
        var value = bind(_get, this)();
        defineProperty$4(this, prop, {
          value: value,
          writable: false,
          configurable: false,
          enumerable: false
        });
        return value;
      },

      set: undefined,
      configurable: false,
      enumerable: false
    };
  }
  // $FlowFixMe: comeon, can disjoint union be reliable?
  descriptor.writable = false;
  return descriptor;
}

var getOwnPropertyDescriptor$2 = Object.getOwnPropertyDescriptor;
var defineProperty$5 = Object.defineProperty;

function waituntil(key) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      other = _ref.other;

  if (!isFunction(key) && !isPromise(key) && !isString(key)) throw new TypeError('@waitUntil only accept Function, Promise or String');
  return function (obj, prop, descriptor) {
    var _ref2 = descriptor || {},
        _value = _ref2.value,
        configurable = _ref2.configurable;

    if (!isFunction(_value)) throw new TypeError('@waituntil can only be used on function, but not ' + _value + ' on property "' + prop + '"');
    var binded = false;
    var waitingQueue = [];
    var canIRun = isPromise(key) ? function () {
      return key;
    } : isFunction(key) ? key : function () {
      // $FlowFixMe: We have use isPromise to exclude
      var keys = key.split('.');
      var prop = keys.slice(-1);
      var originTarget = isPrimitive(other) ? this : other;
      if (!binded) {
        var target = getDeepProperty(originTarget, keys.slice(0, -1));
        if (isVoid(target)) return target;
        var _descriptor = getOwnPropertyDescriptor$2(target, prop);
        /**
         * create a setter hook here
         * when it get ture, it will run all function in waiting queue immediately
         */
        var set = function set(value) {
          if (value === true) {
            while (waitingQueue.length > 0) {
              waitingQueue[0]();
              waitingQueue.shift();
            }
          }
          return value;
        };
        var desc = isDescriptor(_descriptor) ? accessor({ set: set })(target, prop, _descriptor) : accessor({ set: set })(target, prop, {
          value: undefined,
          configurable: true,
          enumerable: true,
          writable: true
        });
        defineProperty$5(target, prop, desc);
        binded = true;
      }
      return getDeepProperty(originTarget, keys);
    };
    return {
      value: function value() {
        var _this = this;

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        var boundFn = bind(_value, this);
        var runnable = bind(canIRun, this).apply(undefined, args);
        if (isPromise(runnable)) {
          return Promise.resolve(runnable).then(function () {
            return bind(_value, _this).apply(undefined, args);
          });
        } else if (runnable === true) {
          return bind(_value, this).apply(undefined, args);
        } else {
          return new Promise(function (resolve) {
            var cb = function cb() {
              boundFn.apply(undefined, args);
              resolve();
            };
            waitingQueue.push(cb);
          });
        }
      },

      // function should not be enmuerable
      enumerable: false,
      configurable: configurable,
      // as we have delay this function
      // it's not a good idea to change it
      writable: false
    };
  };
}

var defineProperty$6 = Object.defineProperty;

function lazyInit(obj, prop, descriptor) {
  if (descriptor === undefined) throw new TypeError('@lazyInit cannot be apply on undefined property.');
  if (!isFunction(descriptor.initializer)) {
    /* istanbul ignore else  */
    warn('@lazyInit can only be used on property, but not propery "' + prop + '" which may be methods or getter/setter.');
    // $FlowFixMe: disjoint union ****
    return descriptor;
  }
  var initializer = descriptor.initializer,
      configurable = descriptor.configurable,
      enumerable = descriptor.enumerable,
      writable = descriptor.writable;

  return {
    get: function get() {
      var value = bind(initializer, this)();
      defineProperty$6(this, prop, {
        value: value,
        configurable: configurable,
        enumerable: enumerable,
        writable: writable
      });
      return value;
    },

    set: createDefaultSetter(prop),
    configurable: configurable,
    enumerable: enumerable
  };
}

var defineProperty$7 = Object.defineProperty;
/**
 * make one attr only can be read, but could not be rewrited/ deleted
 * @param {Object} obj
 * @param {string} prop
 * @param {Object} descriptor
 * @return {descriptor}
 */

function lock(obj, prop, descriptor) {
  if (descriptor === undefined) {
    /* istanbul ignore else  */
    warn('You are using @lock on an undefined property "' + prop + '". This property will become a lock undefined forever, which is meaningless.');
    return {
      value: undefined,
      writable: false,
      enumerable: true,
      configurable: false
    };
  }
  descriptor.configurable = false;
  if (isAccessorDescriptor(descriptor)) {
    var _get = descriptor.get;

    descriptor.set = undefined;
    if (!isFunction(_get)) {
      warn('You are using @lock on one accessor descriptor without getter. This property will become a lock undefined finally.Which maybe meaningless.');
      return;
    }
    return {
      get: function get() {
        var value = bind(_get, this)();
        defineProperty$7(this, prop, {
          value: value,
          writable: false,
          configurable: false,
          enumerable: descriptor.enumerable
        });
        return value;
      },

      set: undefined,
      configurable: false,
      enumerable: descriptor.enumerable
    };
  }
  // $FlowFixMe: comeon, can disjoint union be reliable?
  descriptor.writable = false;
  return descriptor;
}

function nonenumerable(obj, prop, descriptor) {
  if (descriptor === undefined) {
    return {
      value: undefined,
      enumerable: false,
      configurable: true,
      writable: true
    };
  }
  descriptor.enumerable = false;
  return descriptor;
}

var defineProperty$8 = Object.defineProperty;
var getOwnPropertyDescriptor$3 = Object.getOwnPropertyDescriptor;


function applyDecorators(Class, props) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref$self = _ref.self,
      self = _ref$self === undefined ? false : _ref$self,
      _ref$omit = _ref.omit,
      omit = _ref$omit === undefined ? false : _ref$omit;

  var isPropsFunction = isFunction(props);
  if (isPropsFunction || isArray(props)) {
    // apply decorators on class
    if (!isFunction(Class)) throw new TypeError('If you want to decorator class, you must pass it a legal class');
    // $FlowFixMe: Terrible union, it's function now
    if (isPropsFunction) props(Class);else {
      // $FlowFixMe: Terrible union, it's array now
      for (var i = 0, len = props.length; i < len; i++) {
        // $FlowFixMe: Terrible union, it's array now
        var fn = props[i];
        if (!isFunction(fn)) throw new TypeError('If you want to decorate an class, you must pass it function or array of function');
        fn(Class);
      }
    }
    return Class;
  }
  if (!self && !isFunction(Class)) throw new TypeError('applyDecorators only accept class as first arguments. If you want to modify instance, you should set options.self true.');
  if (self && isPrimitive(Class)) throw new TypeError("We can't apply docorators on a primitive value, even in self mode");
  if (!isObject(props)) throw new TypeError('applyDecorators only accept object as second arguments');
  var prototype = self ? Class : Class.prototype;
  if (isVoid(prototype)) throw new Error('The class muse have a prototype, please take a check');
  for (var key in props) {
    var value = props[key];
    var decorators = isArray(value) ? value : [value];
    var handler = void 0;
    try {
      handler = compressMultipleDecorators.apply(undefined, toConsumableArray$1(decorators));
    } catch (err) {
      /* istanbul ignore else  */
      warn(err && err.message);
      throw new Error('The decorators set on props must be Function or Array of Function');
    }
    var descriptor = getOwnPropertyDescriptor$3(prototype, key);
    if (descriptor && !descriptor.configurable) {
      if (!omit) throw new Error(key + ' of ' + prototype + ' is unconfigurable');
      continue;
    }
    defineProperty$8(prototype, key, handler(prototype, key, descriptor));
  }
  return Class;
}

var arrayChangeMethod = ['push', 'pop', 'unshift', 'shift', 'splice', 'sort', 'reverse'];

function deepProxy(value, hook, _ref) {
  var _operateProps;

  var diff = _ref.diff,
      operationPrefix = _ref.operationPrefix;

  var mapStore = {};
  var arrayChanging = false;
  var proxyValue = new Proxy(value, {
    get: function get$$1(target, property, receiver) {
      var value = target[property];
      if (isArray(target) && arrayChangeMethod.indexOf(property) > -1) {
        return function () {
          arrayChanging = true;
          bind(value, receiver).apply(undefined, arguments);
          arrayChanging = false;
          hook();
        };
      }
      if (mapStore[property] === true) return value;
      if (isObject(value) || isArray(value)) {
        var _proxyValue = mapStore[property] || deepProxy(value, hook, { diff: diff, operationPrefix: operationPrefix });
        mapStore[property] = _proxyValue;
        return _proxyValue;
      }
      mapStore[property] = true;
      return value;
    },
    set: function set$$1(target, property, value) {
      var oldVal = target[property];
      var newVal = isObject(value) || isArray(value) ? deepProxy(value, hook, { diff: diff, operationPrefix: operationPrefix }) : value;
      target[property] = newVal;
      mapStore[property] = true;
      if (arrayChanging || diff && oldVal === newVal) return true;
      hook();
      return true;
    },
    deleteProperty: function deleteProperty(target, property) {
      delete target[property];
      delete mapStore[property];
      if (arrayChanging) return true;
      hook();
      return true;
    }
  });
  var operateProps = (_operateProps = {}, defineProperty$1(_operateProps, operationPrefix + 'set', [initialize(function (method) {
    return function (property, val) {
      // $FlowFixMe: we have check the computed value
      proxyValue[property] = val;
    };
  }), nonenumerable]), defineProperty$1(_operateProps, operationPrefix + 'del', [initialize(function (method) {
    return function (property) {
      // $FlowFixMe: we have check the computed value
      delete proxyValue[property];
    };
  }), nonenumerable]), _operateProps);
  applyDecorators(proxyValue, operateProps, { self: true });
  return proxyValue;
}

function deepObserve(value, hook, _ref2) {
  var _this = this,
      _operateProps2;

  var operationPrefix = _ref2.operationPrefix,
      diff = _ref2.diff;

  var mapStore = {};
  var arrayChanging = false;
  function getPropertyDecorators(keys) {
    var oldVal = void 0;
    return keys.reduce(function (props, key) {
      props[key] = [accessor({
        set: function set$$1(value) {
          oldVal = this[key];
          return value;
        }
      }), accessor({
        get: function get$$1(val) {
          if (mapStore[key]) return val;
          if (isObject(val) || isArray(val)) {
            deepObserve(val, hook, { operationPrefix: operationPrefix, diff: diff });
          }
          mapStore[key] = true;
          return val;
        },
        set: function set$$1(val) {
          if (isObject(val) || isArray(val)) deepObserve(val, hook, { operationPrefix: operationPrefix, diff: diff });
          mapStore[key] = true;
          if (!arrayChanging && (!diff || oldVal !== val)) hook();
          return val;
        }
      }, { preSet: false })];
      return props;
    }, {});
  }
  var props = getPropertyDecorators(getOwnKeys(value));
  applyDecorators(value, props, { self: true, omit: true });
  if (isArray(value)) {
    var methodProps = arrayChangeMethod.reduce(function (props, key) {
      props[key] = [initialize(function (method) {
        method = isFunction(method) ? method
        // $FlowFixMe: we have check the key
        : Array.prototype[key];
        return function () {
          var originLength = value.length;
          arrayChanging = true;
          bind(method, value).apply(undefined, arguments);
          arrayChanging = false;
          if (originLength < value.length) {
            var keys = new Array(value.length - originLength).fill(1).map(function (value, index) {
              return (index + originLength).toString();
            });
            var _props = getPropertyDecorators(keys);
            applyDecorators(value, _props, { self: true, omit: true });
          }
          hook();
        };
      }), nonenumerable];
      return props;
    }, {});
    applyDecorators(value, methodProps, { self: true });
  }
  var operateProps = (_operateProps2 = {}, defineProperty$1(_operateProps2, operationPrefix + 'set', [initialize(function (method) {
    return function (property, val) {
      var _ref3 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
          disable = _ref3.disable,
          isNewVal = _ref3.isNewVal;

      isNewVal = isNewVal || getOwnKeys(value).indexOf(property) === -1;
      if (isFunction(method)) {
        bind(method, _this)(property, val, { disable: true, isNewVal: isNewVal });
      }
      if (isNewVal) {
        var _props2 = getPropertyDecorators([property]);
        applyDecorators(value, _props2, { self: true, omit: true });
      }
      if (!disable) {
        value[property] = val;
      }
    };
  }), nonenumerable]), defineProperty$1(_operateProps2, operationPrefix + 'del', [initialize(function (method) {
    return function (property) {
      if (isFunction(method)) {
        bind(method, _this)(property);
      } else {
        delete value[property];
      }
      hook();
    };
  }), nonenumerable]), _operateProps2);
  applyDecorators(value, operateProps, { self: true });
  return value;
}

function watch() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var option = isObject(args[args.length - 1]) ? args[args.length - 1] : {};
  // $FlowFixMe: we have check if it's an object
  var deep = option.deep,
      omit = option.omit,
      other = option.other,
      _option$operationPref = option.operationPrefix,
      operationPrefix = _option$operationPref === undefined ? '__' : _option$operationPref,
      _option$diff = option.diff,
      diff = _option$diff === undefined ? true : _option$diff;
  // $FlowFixMe: we have check if it's an object

  var proxy = option.proxy;

  if (typeof Proxy !== 'function') {
    proxy = false;
    /* istanbul ignore else  */
    warn('You browser do not support Proxy, we will fall back into observe mode.');
  }
  if (!args.length) throw new TypeError('You must pass a function or a string to find the hanlder function.');
  if (other !== undefined && isPrimitive(other)) throw new TypeError('If you want us to trigger function on the other instance, you must pass in a legal instance');
  if (!isString(operationPrefix)) throw new TypeError('operationPrefix must be an string');
  return function (obj, prop, descriptor) {
    var fns = args.reduce(function (fns, keyOrFn, index) {
      if (!isString(keyOrFn) && !isFunction(keyOrFn)) {
        if (!index || index !== args.length - 1) throw new TypeError('You can only pass function or string as handler');
        return fns;
      }
      fns.push(isString(keyOrFn) ? function (newVal, oldVal) {
        var target = other || obj;
        // $FlowFixMe: we have ensure it must be a string
        var fn = getDeepProperty(target, keyOrFn);
        if (!isFunction(fn)) {
          if (!omit) throw new Error('You pass in a function for us to trigger, please ensure the property to be a function or set omit flag true');
          return;
        }
        return bind(fn, this)(newVal, oldVal);
      } : keyOrFn);
      return fns;
    }, []);
    var handler = function handler(newVal, oldVal) {
      var _this2 = this;

      fns.forEach(function (fn) {
        return bind(fn, _this2)(newVal, oldVal);
      });
    };
    var inited = false;
    var oldVal = void 0;
    var newVal = void 0;
    var proxyValue = void 0;
    return compressMultipleDecorators(accessor({
      set: function set$$1(value) {
        var _this3 = this;

        oldVal = this[prop];
        proxyValue = undefined;
        var hook = function hook() {
          return bind(handler, _this3)(newVal, oldVal);
        };
        return deep && (isObject(value) || isArray(value)) ? proxy ? deepProxy(value, hook, { diff: diff, operationPrefix: operationPrefix }) : deepObserve(value, hook, { operationPrefix: operationPrefix, diff: diff }) : value;
      },
      get: function get$$1(value) {
        var _this4 = this;

        if (proxyValue) return proxyValue;
        if (!inited) {
          inited = true;
          var hook = function hook() {
            return bind(handler, _this4)(newVal, oldVal);
          };
          if (deep && (isObject(value) || isArray(value))) {
            if (proxy) {
              proxyValue = deepProxy(value, hook, { diff: diff, operationPrefix: operationPrefix });
              oldVal = proxyValue;
              newVal = proxyValue;
              return proxyValue;
            }
            deepObserve(value, hook, { operationPrefix: operationPrefix, diff: diff });
          }
          oldVal = value;
          newVal = value;
        }
        return value;
      }
    }, { preSet: true }), accessor({
      set: function set$$1(value) {
        newVal = value;
        if (!diff || oldVal !== value) bind(handler, this)(newVal, oldVal);
        oldVal = value;
        return value;
      }
    }, { preSet: false }))(obj, prop, descriptor);
  };
}

var preventExtensions = Object.preventExtensions;

function nonextendable(obj, prop, descriptor) {
  if (descriptor === undefined) throw new Error('@nonextendable could not handle undefined property "' + prop + '".');
  return initialize(function (value) {
    preventExtensions(value);
    return value;
  })(obj, prop, descriptor);
}

function runnable(key) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      other = _ref.other,
      backup = _ref.backup;

  if (!isFunction(key) && !isString(key)) throw new TypeError('@runnable only accept Function or String');
  return function (obj, prop, descriptor) {
    var _ref2 = descriptor || {},
        _value = _ref2.value,
        configurable = _ref2.configurable;

    if (!isFunction(_value)) throw new TypeError('@runnable can only be used on method, but not ' + _value + ' on property "' + prop + '".');
    var canIRun = isFunction(key) ? key : function () {
      var keys = key.split('.');
      var originTarget = isPrimitive(other) ? this : other;
      return getDeepProperty(originTarget, keys);
    };
    backup = isFunction(backup) ? backup : function () {};
    return {
      value: function value() {
        if (bind(canIRun, this).apply(undefined, arguments) === true) {
          return bind(_value, this).apply(undefined, arguments);
        } else {
          // $FlowFixMe: I have reassign it when it's not a function
          return bind(backup, this).apply(undefined, arguments);
        }
      },

      // function should not be enmuerable
      enumerable: false,
      configurable: configurable,
      // as we have delay this function
      // it's not a good idea to change it
      writable: false
    };
  };
}

function enumerable(obj, prop, descriptor) {
  if (descriptor === undefined) {
    return {
      value: undefined,
      enumerable: true,
      configurable: true,
      writable: true
    };
  }
  descriptor.enumerable = true;
  return descriptor;
}

function nonconfigurable(obj, prop, descriptor) {
  if (descriptor === undefined) {
    return {
      value: undefined,
      enumerable: true,
      configurable: true,
      writable: true
    };
  }
  descriptor.configurable = true;
  return descriptor;
}

function nonconfigurable$1(obj, prop, descriptor) {
  if (descriptor === undefined) {
    return {
      value: undefined,
      enumerable: true,
      configurable: false,
      writable: true
    };
  }
  descriptor.configurable = false;
  return descriptor;
}

function string() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var defaultValue = isString(args[0]) ? args.shift() : '';
  args.unshift(function (value) {
    return isString(value) ? value : defaultValue;
  });
  return initialize.apply(undefined, args);
}

function boolean() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var defaultValue = isBoolean(args[0]) ? args.shift() : false;
  args.unshift(function (value) {
    return isBoolean(value) ? value : defaultValue;
  });
  return initialize.apply(undefined, args);
}

function array() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var defaultValue = isArray(args[0]) ? args.shift() : [];
  args.unshift(function (value) {
    return isArray(value) ? value : defaultValue;
  });
  return initialize.apply(undefined, args);
}

function number() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var defaultValue = isNumber(args[0]) ? args.shift() : 0;
  args.unshift(function (value) {
    return isNumber(value) ? value : defaultValue;
  });
  return initialize.apply(undefined, args);
}

function string$1() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var defaultValue = isString(args[0]) ? args.shift() : '';
  args.unshift(function (value) {
    return isString(value) ? value : defaultValue;
  });
  return accessor({ set: args, get: args });
}

function boolean$1() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var defaultValue = isBoolean(args[0]) ? args.shift() : false;
  args.unshift(function (value) {
    return isBoolean(value) ? value : defaultValue;
  });
  return accessor({ set: args, get: args });
}

function array$1() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var defaultValue = isArray(args[0]) ? args.shift() : [];
  args.unshift(function (value) {
    return isArray(value) ? value : defaultValue;
  });
  return accessor({ set: args, get: args });
}

function number$1() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var defaultValue = isNumber(args[0]) ? args.shift() : 0;
  args.unshift(function (value) {
    return isNumber(value) ? value : defaultValue;
  });
  return accessor({ set: args, get: args });
}

var before$1 = classify(before, {
  requirement: function requirement(obj, prop, desc) {
    // $FlowFixMe: it's data descriptor now
    return isDataDescriptor(desc) && isFunction(desc.value);
  },

  customArgs: true
});

var after$1 = classify(after, {
  requirement: function requirement(obj, prop, desc) {
    // $FlowFixMe: it's data descriptor now
    return isDataDescriptor(desc) && isFunction(desc.value);
  },

  customArgs: true
});

var runnable$1 = classify(runnable, {
  requirement: function requirement(obj, prop, desc) {
    // $FlowFixMe: it's data descriptor now
    return isDataDescriptor(desc) && isFunction(desc.value);
  },

  customArgs: true
});

var waituntil$1 = classify(waituntil, {
  requirement: function requirement(obj, prop, desc) {
    // $FlowFixMe: it's data descriptor now
    return isDataDescriptor(desc) && isFunction(desc.value);
  },

  customArgs: true
});

exports.accessor = accessor;
exports.before = before;
exports.after = after;
exports.readonly = readonly;
exports.alias = alias;
exports.autobind = autobind;
exports.frozen = frozen;
exports.initialize = initialize;
exports.waituntil = waituntil;
exports.lazyInit = lazyInit;
exports.lock = lock;
exports.watch = watch;
exports.nonextendable = nonextendable;
exports.runnable = runnable;
exports.enumerable = enumerable;
exports.nonenumerable = nonenumerable;
exports.configurable = nonconfigurable;
exports.nonconfigurable = nonconfigurable$1;
exports.initString = string;
exports.initBoolean = boolean;
exports.initArray = array;
exports.initNumber = number;
exports.alwaysString = string$1;
exports.alwaysBoolean = boolean$1;
exports.alwaysArray = array$1;
exports.alwaysNumber = number$1;
exports.autobindClass = autobindClass;
exports.beforeClass = before$1;
exports.afterClass = after$1;
exports.runnableClass = runnable$1;
exports.waituntilClass = waituntil$1;
exports.applyDecorators = applyDecorators;
exports.classify = classify;
exports.getOwnKeys = getOwnKeys;
exports.getOwnPropertyDescriptors = getOwnPropertyDescriptors;
exports.isDescriptor = isDescriptor;
exports.isAccessorDescriptor = isAccessorDescriptor;
exports.isInitializerDescriptor = isInitializerDescriptor;
exports.isDataDescriptor = isDataDescriptor;

Object.defineProperty(exports, '__esModule', { value: true });

})));


/***/ }),
/* 2 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var videoEvents = exports.videoEvents = ['abort', 'canplay', 'canplaythrough', 'durationchange', 'emptied', 'encrypted', 'ended', 'error', 'interruptbegin', 'interruptend', 'loadeddata', 'loadedmetadata', 'loadstart', 'mozaudioavailable', 'pause', 'play', 'playing', 'progress', 'ratechange', 'seeked', 'seeking', 'stalled', 'suspend', 'timeupdate', 'volumechange', 'waiting'];
var videoReadOnlyProperties = exports.videoReadOnlyProperties = ['buffered', 'currentSrc', 'duration', 'error', 'ended', 'networkState', 'paused', 'readyState', 'seekable', 'sinkId', 'controlsList', 'tabIndex', 'dataset', 'offsetHeight', 'offsetLeft', 'offsetParent', 'offsetTop', 'offsetWidth'];
var domEvents = exports.domEvents = ['beforeinput', 'blur', 'click', 'compositionend', 'compositionstart', 'compositionupdate', 'dblclick', 'focus', 'focusin', 'focusout', 'input', 'keydown', 'keypress', 'keyup', 'mousedown', 'mouseenter', 'mouseleave', 'mousemove', 'mouseout', 'mouseover', 'mouseup', 'resize', 'scroll', 'select', 'wheel', 'mousewheel', 'fullscreenchange', 'contextmenu', 'touchstart', 'touchmove', 'touchend'];
var passiveEvents = exports.passiveEvents = ['wheel', 'mousewheel', 'touchstart', 'touchmove'];
var selfProcessorEvents = exports.selfProcessorEvents = ['silentLoad', 'fullscreen'];
var kernelMethods = exports.kernelMethods = ['play', 'pause', 'seek', 'startLoad', 'stopLoad'];
var dispatcherMethods = exports.dispatcherMethods = ['load'];
var kernelEvents = exports.kernelEvents = ['mediaInfo', 'heartbeat', 'error'];
var domMethods = exports.domMethods = ['focus', 'fullscreen', 'requestFullscreen', 'exitFullscreen'];
var videoMethods = exports.videoMethods = ['canPlayType', 'captureStream', 'setSinkId'];

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 5 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.4' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(13)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _mangoHelper = __webpack_require__(0);

var _toxicDecorators = __webpack_require__(1);

var _videoWrapper = __webpack_require__(10);

var _videoWrapper2 = _interopRequireDefault(_videoWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// @flow

/**
 * <pre>
 * Plugin is the class for plugin developer.
 * When we use a plugin, we will generate an instance of plugin.
 * Developer can do most of things base on this plugin
 * </pre>
 */
var Plugin = /** @class */function (_super) {
    __extends(Plugin, _super);
    /**
     * <pre>
     * to create a plugin, we need three parameter
     * 1. the config of a plugin
     * 2. the dispatcher
     * 3. this option for plugin to read
     * this is the plugin base class, which you can get on Chimee
     * You can just extends it and then install
     * But in that way you must remember to pass the arguments to super()
     * </pre>
     * @param  {string}  PluginConfig.id        camelize from plugin's name or class name.
     * @param  {string}  PluginConfig.name      plugin's name or class name
     * @param  {Number}  PluginConfig.level     the level of z-index
     * @param  {Boolean} PluginConfig.operable  to tell if the plugin can be operable, if not, we will add pointer-events: none on it.
     * @param  {Function}  PluginConfig.create  the create function which we will called when plugin is used. sth like constructor in object style.
     * @param  {Function}  PluginConfig.destroy   function to be called when we destroy a plugin
     * @param  {Object}  PluginConfig.events    You can set some events handler in this object, we will bind it once you use the plugin.
     * @param  {Object}  PluginConfig.data      dataset we will bind on data in object style
     * @param  {Object<{get: Function, set: Function}}  PluginConfig.computed  dataset we will handle by getter and setter
     * @param  {Object<Function>}  PluginConfig.methods   some function we will bind on plugin
     * @param  {string|HTMLElment}  PluginConfig.el  can be string or HTMLElement, we will use this to create the dom for plugin
     * @param  {boolean} PluginConfig.penetrate boolean to let us do we need to forward the dom events for this plugin.
     * @param  {Dispatcher}  dispatcher referrence of dispatcher
     * @param  {Object}  option  PluginOption that will pass to the plugin
     * @return {Plugin}  plugin instance
     */
    function Plugin(_a, dispatcher, option) {
        var _b = _a === void 0 ? {} : _a,
            id = _b.id,
            name = _b.name,
            _c = _b.level,
            level = _c === void 0 ? 0 : _c,
            _d = _b.operable,
            operable = _d === void 0 ? true : _d,
            beforeCreate = _b.beforeCreate,
            create = _b.create,
            init = _b.init,
            inited = _b.inited,
            destroy = _b.destroy,
            _e = _b.events,
            events = _e === void 0 ? {} : _e,
            _f = _b.data,
            data = _f === void 0 ? {} : _f,
            _g = _b.computed,
            computed = _g === void 0 ? {} : _g,
            _h = _b.methods,
            methods = _h === void 0 ? {} : _h,
            el = _b.el,
            _j = _b.penetrate,
            penetrate = _j === void 0 ? false : _j,
            _k = _b.inner,
            inner = _k === void 0 ? true : _k,
            autoFocus = _b.autoFocus,
            className = _b.className;
        if (option === void 0) {
            option = { name: name };
        }
        var _this = _super.call(this) || this;
        _this.destroyed = false;
        _this.VERSION = process.env.PLAYER_VERSION;
        _this.__operable = true;
        _this.__level = 0;
        if ((0, _mangoHelper.isEmpty)(dispatcher)) {
            /* istanbul ignore else  */
            if (process.env.NODE_ENV !== 'production') _mangoHelper.Log.error('Dispatcher.plugin', 'lack of dispatcher. Do you forget to pass arguments to super in plugin?');
            throw new TypeError('lack of dispatcher');
        }
        if (!(0, _mangoHelper.isString)(id)) {
            throw new TypeError('id of PluginConfig must be string');
        }
        _this.__id = id;
        _this.__dispatcher = dispatcher;
        _this.$videoConfig = _this.__dispatcher.videoConfig;
        _this.__wrapAsVideo(_this.$videoConfig);
        _this.beforeCreate = _this.beforeCreate || beforeCreate;
        try {
            (0, _mangoHelper.isFunction)(_this.beforeCreate) && _this.beforeCreate({
                events: events,
                data: data,
                computed: computed,
                methods: methods
            }, option);
        } catch (error) {
            _this.$throwError(error);
        }
        // bind plugin methods into instance
        if (!(0, _mangoHelper.isEmpty)(methods) && (0, _mangoHelper.isObject)(methods)) {
            Object.keys(methods).forEach(function (key) {
                var fn = methods[key];
                if (!(0, _mangoHelper.isFunction)(fn)) throw new TypeError('plugins methods must be Function');
                Object.defineProperty(_this, key, {
                    value: (0, _mangoHelper.bind)(fn, _this),
                    writable: true,
                    enumerable: false,
                    configurable: true
                });
            });
        }
        // hook plugin events on bus
        if (!(0, _mangoHelper.isEmpty)(events) && (0, _mangoHelper.isObject)(events)) {
            Object.keys(events).forEach(function (key) {
                if (!(0, _mangoHelper.isFunction)(events[key])) throw new TypeError('plugins events hook must bind with Function');
                _this.$on(key, events[key]);
            });
        }
        // bind data into plugin instance
        if (!(0, _mangoHelper.isEmpty)(data) && (0, _mangoHelper.isObject)(data)) {
            (0, _mangoHelper.deepAssign)(_this, data);
        }
        // set the computed member by getter and setter
        if (!(0, _mangoHelper.isEmpty)(computed) && (0, _mangoHelper.isObject)(computed)) {
            var props = Object.keys(computed).reduce(function (props, key) {
                var val = computed[key];
                if ((0, _mangoHelper.isFunction)(val)) {
                    props[key] = (0, _toxicDecorators.accessor)({ get: val });
                    return props;
                }
                if ((0, _mangoHelper.isObject)(val) && ((0, _mangoHelper.isFunction)(val.get) || (0, _mangoHelper.isFunction)(val.set))) {
                    props[key] = (0, _toxicDecorators.accessor)(val);
                    return props;
                }
                /* istanbul ignore else  */
                if (process.env.NODE_ENV !== 'production') _mangoHelper.Log.warn('Dispatcher.plugin', "Wrong computed member '" + key + "' defination in Plugin " + name);
                return props;
            }, {});
            (0, _toxicDecorators.applyDecorators)(_this, props, { self: true });
        }
        /**
         * the create Function of plugin
         * @type {Function}
         */
        _this.create = _this.create || create;
        /**
         * this init Function of plugin
         * which will be called when we start to create the video player
         * the plugin can handle some config here
         * @type {Function}
         */
        _this.init = _this.init || init;
        /**
         * this inited Function of plugin
         * which will be called when we have created the video player
         * @type {Function}
         */
        _this.inited = _this.inited || inited;
        /**
         * the destroy Function of plugin
         * @type {Function}
         */
        _this.destroy = _this.destroy || destroy;
        /**
         * the dom node of whole plugin
         * @type {HTMLElement}
         */
        _this.$dom = _this.__dispatcher.dom.insertPlugin(_this.__id, el, { penetrate: penetrate, inner: inner, autoFocus: autoFocus, className: className });
        // now we can frozen inner, autoFocus and penetrate
        _this.$inner = inner;
        _this.$autoFocus = autoFocus;
        _this.$penetrate = penetrate;
        (0, _toxicDecorators.applyDecorators)(_this, {
            $inner: _toxicDecorators.frozen,
            $autoFocus: _toxicDecorators.frozen,
            $penetrate: _toxicDecorators.frozen
        }, { self: true });
        /**
         * to tell us if the plugin can be operable, can be dynamic change
         * @type {boolean}
         */
        _this.$operable = (0, _mangoHelper.isBoolean)(option.operable) ? option.operable : operable;
        _this.__level = (0, _mangoHelper.isInteger)(option.level) ? option.level : level;
        /**
         * pluginOption, so it's easy for plugin developer to check the config
         * @type {Object}
         */
        _this.$config = option;
        try {
            (0, _mangoHelper.isFunction)(_this.create) && _this.create();
        } catch (error) {
            _this.$throwError(error);
        }
        return _this;
    }
    /**
     * call for init lifecycle hook, which mainly handle the original config of video and kernel.
     * @param {VideoConfig} videoConfig the original config of the videoElement or Kernel
     */
    Plugin.prototype.__init = function (videoConfig) {
        try {
            (0, _mangoHelper.isFunction)(this.init) && this.init(videoConfig);
        } catch (error) {
            this.$throwError(error);
        }
    };
    /**
     * call for inited lifecycle hook, which just to tell the plugin we have inited.
     */
    Plugin.prototype.__inited = function () {
        var _this = this;
        var result;
        try {
            result = (0, _mangoHelper.isFunction)(this.inited) && this.inited();
        } catch (error) {
            this.$throwError(error);
        }
        this.readySync = !(0, _mangoHelper.isPromise)(result);
        this.ready = this.readySync ? Promise.resolve()
        // $FlowFixMe: it's promise now
        : result.then(function (ret) {
            _this.readySync = true;
            return ret;
        }).catch(function (error) {
            if ((0, _mangoHelper.isError)(error)) return _this.$throwError(error);
            return Promise.reject(error);
        });
        return this.readySync || this.ready;
    };
    /**
     * set the plugin to be the top of all plugins
     */
    Plugin.prototype.$bumpToTop = function () {
        var topLevel = this.__dispatcher._getTopLevel(this.$inner);
        this.$level = topLevel + 1;
    };
    Plugin.prototype.$throwError = function (error) {
        this.__dispatcher.throwError(error);
    };
    /**
     * officail destroy function for plugin
     * we will call user destory function in this method
     */
    Plugin.prototype.$destroy = function () {
        (0, _mangoHelper.isFunction)(this.destroy) && this.destroy();
        _super.prototype.__destroy.call(this);
        this.__dispatcher.dom.removePlugin(this.__id);
        delete this.__dispatcher;
        delete this.$dom;
        this.destroyed = true;
    };
    Object.defineProperty(Plugin.prototype, "$operable", {
        get: function get() {
            return this.__operable;
        },
        /**
         * to tell us if the plugin can be operable, can be dynamic change
         * @type {boolean}
         */
        set: function set(val) {
            if (!(0, _mangoHelper.isBoolean)(val)) return;
            this.$dom.style.pointerEvents = val ? 'auto' : 'none';
            this.__operable = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Plugin.prototype, "$level", {
        get: function get() {
            return this.__level;
        },
        /**
         * the z-index level, higher when you set higher
         * @type {boolean}
         */
        set: function set(val) {
            if (!(0, _mangoHelper.isInteger)(val)) return;
            this.__level = val;
            this.__dispatcher._sortZIndex();
        },
        enumerable: true,
        configurable: true
    });
    Plugin = __decorate([(0, _toxicDecorators.autobindClass)()], Plugin);
    return Plugin;
}(_videoWrapper2.default);
exports.default = Plugin;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _mangoHelper = __webpack_require__(0);

var _const = __webpack_require__(3);

var _checker = __webpack_require__(19);

var _toxicDecorators = __webpack_require__(1);

var _video = __webpack_require__(11);

var _video2 = _interopRequireDefault(_video);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// @flow

function propertyAccessibilityWarn(property) {
    /* istanbul ignore else  */
    if (process.env.NODE_ENV !== 'production') _mangoHelper.Log.warn('chimee', "You are trying to obtain " + property + ", we will return you the DOM node. It's not a good idea to handle this by yourself. If you have some requirement, you can tell use by https://github.com/Chimeejs/chimee/issues");
}
var VideoWrapper = /** @class */function () {
    function VideoWrapper() {
        this.__events = {};
        this.__unwatchHandlers = [];
    }
    VideoWrapper.prototype.__wrapAsVideo = function (videoConfig) {
        var _this = this;
        // bind video read only properties on instance, so that you can get info like buffered
        _const.videoReadOnlyProperties.forEach(function (key) {
            Object.defineProperty(_this, key, {
                get: function get() {
                    return this.__dispatcher.dom.videoElement[key];
                },
                set: undefined,
                configurable: false,
                enumerable: false
            });
        });
        // bind videoMethods like canplaytype on instance
        _const.videoMethods.forEach(function (key) {
            Object.defineProperty(_this, key, {
                get: function get() {
                    var video = this.__dispatcher.dom.videoElement;
                    return (0, _mangoHelper.bind)(video[key], video);
                },
                set: undefined,
                configurable: false,
                enumerable: false
            });
        });
        // bind video config properties on instance, so that you can just set src by this
        var props = videoConfig._realDomAttr.concat(videoConfig._kernelProperty).reduce(function (props, key) {
            props[key] = [(0, _toxicDecorators.accessor)({
                get: function get() {
                    // $FlowFixMe: support computed key here
                    return videoConfig[key];
                },
                set: function set(value) {
                    // $FlowFixMe: support computed key here
                    videoConfig[key] = value;
                    return value;
                }
            }), _toxicDecorators.nonenumerable];
            return props;
        }, {});
        (0, _toxicDecorators.applyDecorators)(this, props, { self: true });
        _const.kernelMethods.forEach(function (key) {
            Object.defineProperty(_this, key, {
                value: function value() {
                    var _this = this;
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    return new Promise(function (resolve) {
                        _this.__dispatcher.bus.once(_this.__id, '_' + key, resolve);
                        (_a = _this.__dispatcher.bus)[/^(seek)$/.test(key) ? 'emitSync' : 'emit'].apply(_a, [key].concat(args));
                        var _a;
                    });
                },
                configurable: true,
                enumerable: false,
                writable: true
            });
        });
        _const.domMethods.forEach(function (key) {
            if (key === 'fullscreen') return;
            Object.defineProperty(_this, key, {
                value: function value() {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    return (_a = this.__dispatcher.dom)[key].apply(_a, args);
                    var _a;
                },
                configurable: true,
                enumerable: false,
                writable: true
            });
        });
    };
    Object.defineProperty(VideoWrapper.prototype, "currentTime", {
        get: function get() {
            return this.__dispatcher.kernel.currentTime;
        },
        set: function set(second) {
            this.__dispatcher.bus.emitSync('seek', second);
        },
        enumerable: true,
        configurable: true
    });
    VideoWrapper.prototype.$watch = function (key, handler, _a) {
        var _this = this;
        var _b = _a === void 0 ? {} : _a,
            deep = _b.deep,
            _c = _b.diff,
            diff = _c === void 0 ? true : _c,
            other = _b.other,
            _d = _b.proxy,
            proxy = _d === void 0 ? false : _d;
        if (!(0, _mangoHelper.isString)(key) && !(0, _mangoHelper.isArray)(key)) throw new TypeError("$watch only accept string and Array<string> as key to find the target to spy on, but not " + key + ", whose type is " + (typeof key === "undefined" ? "undefined" : _typeof(key)));
        var watching = true;
        var watcher = function watcher() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (watching && (!(this instanceof _video2.default) || this.dispatcher.changeWatchable)) (0, _mangoHelper.bind)(handler, this).apply(void 0, args);
        };
        var unwatcher = function unwatcher() {
            watching = false;
            var index = _this.__unwatchHandlers.indexOf(unwatcher);
            if (index > -1) _this.__unwatchHandlers.splice(index, 1);
        };
        var keys = (0, _mangoHelper.isString)(key) ? key.split('.') : key;
        var property = keys.pop();
        var videoConfig = this.__dispatcher.videoConfig;
        var target = keys.length === 0 && !other && videoConfig._realDomAttr.indexOf(property) > -1 ? videoConfig : ['isFullscreen', 'fullscreenElement'].indexOf(property) > -1 ? this.__dispatcher.dom : (0, _mangoHelper.getDeepProperty)(other || this, keys, { throwError: true });
        (0, _toxicDecorators.applyDecorators)(target, (_e = {}, _e[property] = (0, _toxicDecorators.watch)(watcher, { deep: deep, diff: diff, proxy: proxy }), _e), { self: true });
        this.__unwatchHandlers.push(unwatcher);
        return unwatcher;
        var _e;
    };
    VideoWrapper.prototype.$set = function (obj, property, value) {
        if (!(0, _mangoHelper.isObject)(obj) && !(0, _mangoHelper.isArray)(obj)) throw new TypeError("$set only support Array or Object, but not " + obj + ", whose type is " + (typeof obj === "undefined" ? "undefined" : _typeof(obj)));
        // $FlowFixMe: we have custom this function
        if (!(0, _mangoHelper.isFunction)(obj.__set)) {
            /* istanbul ignore else  */
            if (process.env.NODE_ENV !== 'production') _mangoHelper.Log.warn('chimee', JSON.stringify(obj) + " has not been deep watch. There is no need to use $set.");
            // $FlowFixMe: we support computed string on array here
            obj[property] = value;
            return;
        }
        obj.__set(property, value);
    };
    VideoWrapper.prototype.$del = function (obj, property) {
        if (!(0, _mangoHelper.isObject)(obj) && !(0, _mangoHelper.isArray)(obj)) throw new TypeError("$del only support Array or Object, but not " + obj + ", whose type is " + (typeof obj === "undefined" ? "undefined" : _typeof(obj)));
        // $FlowFixMe: we have custom this function
        if (!(0, _mangoHelper.isFunction)(obj.__del)) {
            /* istanbul ignore else  */
            if (process.env.NODE_ENV !== 'production') _mangoHelper.Log.warn('chimee', JSON.stringify(obj) + " has not been deep watch. There is no need to use $del.");
            // $FlowFixMe: we support computed string on array here
            delete obj[property];
            return;
        }
        obj.__del(property);
    };
    VideoWrapper.prototype.load = function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return new Promise(function (resolve) {
            _this.__dispatcher.bus.once(_this.__id, '_load', resolve);
            (_a = _this.__dispatcher.bus).emit.apply(_a, ['load'].concat(args));
            var _a;
        });
    };
    VideoWrapper.prototype.$silentLoad = function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return this.__dispatcher.bus.emit('silentLoad').then(function () {
            return (_a = _this.__dispatcher).silentLoad.apply(_a, args);
            var _a;
        }).then(function (result) {
            _this.__dispatcher.bus.trigger('silentLoad', result);
        });
    };
    /**
     * call fullscreen api on some specific element
     * @param {boolean} flag true means fullscreen and means exit fullscreen
     * @param {string} element the element you want to fullscreen, default it's container, you can choose from video | container | wrapper
     */
    VideoWrapper.prototype.$fullscreen = function (flag, element) {
        if (flag === void 0) {
            flag = true;
        }
        if (element === void 0) {
            element = 'container';
        }
        if (!this.__dispatcher.bus.emitSync('fullscreen', flag, element)) return false;
        var result = this.__dispatcher.dom.fullscreen(flag, element);
        this.__dispatcher.bus.triggerSync('fullscreen', flag, element);
        return result;
    };
    /**
     * emit an event
     * @param  {string}    key event's name
     * @param  {...args} args
     */
    VideoWrapper.prototype.$emit = function (key) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!(0, _mangoHelper.isString)(key)) throw new TypeError('emit key parameter must be String');
        /* istanbul ignore else  */
        if (process.env.NODE_ENV !== 'production' && _const.domEvents.indexOf(key.replace(/^\w_/, '')) > -1) {
            _mangoHelper.Log.warn('plugin', "You are try to emit " + key + " event. As emit is wrapped in Promise. It make you can't use event.preventDefault and event.stopPropagation. So we advice you to use emitSync");
        }
        (_a = this.__dispatcher.bus).emit.apply(_a, [key].concat(args));
        var _a;
    };
    /**
     * emit a sync event
     * @param  {string}    key event's name
     * @param  {...args} args
     */
    VideoWrapper.prototype.$emitSync = function (key) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!(0, _mangoHelper.isString)(key)) throw new TypeError('emitSync key parameter must be String');
        return (_a = this.__dispatcher.bus).emitSync.apply(_a, [key].concat(args));
        var _a;
    };
    /**
     * bind event handler through this function
     * @param  {string} key event's name
     * @param  {Function} fn event's handler
     */
    VideoWrapper.prototype.$on = function (key, fn) {
        this.__dispatcher.bus.on(this.__id, key, fn);
        // set on __events as mark so that i can destroy it when i destroy
        this.__addEvents(key, fn);
    };
    /**
     * remove event handler through this function
     * @param  {string} key event's name
     * @param  {Function} fn event's handler
     */
    VideoWrapper.prototype.$off = function (key, fn) {
        this.__dispatcher.bus.off(this.__id, key, fn);
        this.__removeEvents(key, fn);
    };
    /**
     * bind one time event handler
     * @param {string} key event's name
     * @param {Function} fn event's handler
     */
    VideoWrapper.prototype.$once = function (key, fn) {
        var self = this;
        var boundFn = function boundFn() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            (0, _mangoHelper.bind)(fn, this).apply(void 0, args);
            self.__removeEvents(key, boundFn);
        };
        self.__addEvents(key, boundFn);
        this.__dispatcher.bus.once(this.__id, key, boundFn);
    };
    /**
     * set style
     * @param {string} element optional, default to be video, you can choose from video | container | wrapper
     * @param {string} attribute the atrribue name
     * @param {any} value optional, when it's no offer, we consider you want to get the attribute's value. When it's offered, we consider you to set the attribute's value, if the value you passed is undefined, that means you want to remove the value;
     */
    VideoWrapper.prototype.$css = function (method) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return (_a = this.__dispatcher.dom)[method + 'Style'].apply(_a, args);
        var _a;
    };
    /**
     * set attr
     * @param {string} element optional, default to be video, you can choose from video | container | wrapper
     * @param {string} attribute the atrribue nameß
     * @param {any} value optional, when it's no offer, we consider you want to get the attribute's value. When it's offered, we consider you to set the attribute's value, if the value you passed is undefined, that means you want to remove the value;
     */
    VideoWrapper.prototype.$attr = function (method) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (method === 'set' && /video/.test(args[0])) {
            if (!this.__dispatcher.videoConfigReady) {
                /* istanbul ignore else  */
                if (process.env.NODE_ENV !== 'production') _mangoHelper.Log.warn('chimee', this.__id + " is tring to set attribute on video before video inited. Please wait until the inited event has benn trigger");
                return args[2];
            }
            if (this.__dispatcher.videoConfig._realDomAttr.indexOf(args[1]) > -1) {
                var key = args[1],
                    val = args[2];
                this.__dispatcher.videoConfig[key] = val;
                return val;
            }
        }
        return (_a = this.__dispatcher.dom)[method + 'Attr'].apply(_a, args);
        var _a;
    };
    Object.defineProperty(VideoWrapper.prototype, "$plugins", {
        get: function get() {
            return this.__dispatcher.plugins;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VideoWrapper.prototype, "$pluginOrder", {
        get: function get() {
            return this.__dispatcher.order;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VideoWrapper.prototype, "$wrapper", {
        get: function get() {
            propertyAccessibilityWarn('wrapper');
            return this.__dispatcher.dom.wrapper;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VideoWrapper.prototype, "$container", {
        get: function get() {
            propertyAccessibilityWarn('container');
            return this.__dispatcher.dom.container;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VideoWrapper.prototype, "$video", {
        get: function get() {
            propertyAccessibilityWarn('video');
            return this.__dispatcher.dom.videoElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VideoWrapper.prototype, "isFullscreen", {
        get: function get() {
            return this.__dispatcher.dom.isFullscreen;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VideoWrapper.prototype, "fullscreenElement", {
        get: function get() {
            return this.__dispatcher.dom.fullscreenElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(VideoWrapper.prototype, "container", {
        get: function get() {
            return this.__dispatcher.containerConfig;
        },
        set: function set(config) {
            if (!(0, _mangoHelper.isObject)(config)) {
                throw new Error("The config of container must be Object, but not " + (typeof config === "undefined" ? "undefined" : _typeof(config)) + ".");
            }
            (0, _mangoHelper.deepAssign)(this.__dispatcher.containerConfig, config);
            return this.__dispatcher.container;
        },
        enumerable: true,
        configurable: true
    });
    VideoWrapper.prototype.__addEvents = function (key, fn) {
        this.__events[key] = this.__events[key] || [];
        this.__events[key].push(fn);
    };
    VideoWrapper.prototype.__removeEvents = function (key, fn) {
        if ((0, _mangoHelper.isEmpty)(this.__events[key])) return;
        var index = this.__events[key].indexOf(fn);
        if (index < 0) return;
        this.__events[key].splice(index, 1);
        if ((0, _mangoHelper.isEmpty)(this.__events[key])) delete this.__events[key];
    };
    VideoWrapper.prototype.__destroy = function () {
        var _this = this;
        this.__unwatchHandlers.forEach(function (unwatcher) {
            return unwatcher();
        });
        Object.keys(this.__events).forEach(function (key) {
            if (!(0, _mangoHelper.isArray)(_this.__events[key])) return;
            _this.__events[key].forEach(function (fn) {
                return _this.$off(key, fn);
            });
        });
        delete this.__events;
    };
    __decorate([(0, _toxicDecorators.alias)('silentLoad')], VideoWrapper.prototype, "$silentLoad", null);
    __decorate([(0, _toxicDecorators.alias)('fullScreen'), (0, _toxicDecorators.alias)('$fullScreen'), (0, _toxicDecorators.alias)('fullscreen')], VideoWrapper.prototype, "$fullscreen", null);
    __decorate([(0, _toxicDecorators.alias)('emit')], VideoWrapper.prototype, "$emit", null);
    __decorate([(0, _toxicDecorators.alias)('emitSync')], VideoWrapper.prototype, "$emitSync", null);
    __decorate([(0, _toxicDecorators.alias)('on'), (0, _toxicDecorators.alias)('addEventListener'), (0, _toxicDecorators.before)(_checker.eventBinderCheck)], VideoWrapper.prototype, "$on", null);
    __decorate([(0, _toxicDecorators.alias)('off'), (0, _toxicDecorators.alias)('removeEventListener'), (0, _toxicDecorators.before)(_checker.eventBinderCheck)], VideoWrapper.prototype, "$off", null);
    __decorate([(0, _toxicDecorators.alias)('once'), (0, _toxicDecorators.before)(_checker.eventBinderCheck)], VideoWrapper.prototype, "$once", null);
    __decorate([(0, _toxicDecorators.alias)('css'), (0, _toxicDecorators.before)(_checker.attrAndStyleCheck)], VideoWrapper.prototype, "$css", null);
    __decorate([(0, _toxicDecorators.alias)('attr'), (0, _toxicDecorators.before)(_checker.attrAndStyleCheck)], VideoWrapper.prototype, "$attr", null);
    __decorate([_toxicDecorators.nonenumerable], VideoWrapper.prototype, "$plugins", null);
    __decorate([_toxicDecorators.nonenumerable], VideoWrapper.prototype, "$pluginOrder", null);
    __decorate([_toxicDecorators.nonenumerable], VideoWrapper.prototype, "$wrapper", null);
    __decorate([_toxicDecorators.nonenumerable], VideoWrapper.prototype, "$container", null);
    __decorate([_toxicDecorators.nonenumerable], VideoWrapper.prototype, "$video", null);
    VideoWrapper = __decorate([(0, _toxicDecorators.autobindClass)()], VideoWrapper);
    return VideoWrapper;
}();
exports.default = VideoWrapper;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _toxicDecorators = __webpack_require__(1);

var _mangoHelper = __webpack_require__(0);

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// @flow

function stringOrVoid(value) {
    return (0, _mangoHelper.isString)(value) ? value : undefined;
}
function accessorVideoProperty(property) {
    return (0, _toxicDecorators.accessor)({
        get: function get(value) {
            return this.dispatcher.videoConfigReady && this.inited ? this.dom.videoElement[property] : value;
        },
        set: function set(value) {
            if (!this.dispatcher.videoConfigReady) return value;
            this.dom.videoElement[property] = value;
            return value;
        }
    });
}
function accessorVideoAttribute(attribute) {
    var _a = (0, _mangoHelper.isObject)(attribute) ? attribute : {
        set: attribute,
        get: attribute,
        isBoolean: false
    },
        _set = _a.set,
        _get = _a.get,
        isBoolean = _a.isBoolean;
    return (0, _toxicDecorators.accessor)({
        get: function get(value) {
            return this.dispatcher.videoConfigReady && this.inited ? this.dom.videoElement[_get] : value;
        },
        set: function set(value) {
            if (!this.dispatcher.videoConfigReady) return value;
            var val = isBoolean ? value ? '' : undefined
            /* istanbul ignore next */
            : value === null ? undefined : value;
            this.dom.setAttr('video', _set, val);
            return value;
        }
    }, {
        preSet: false
    });
}
function accessorCustomAttribute(attribute, isBoolean) {
    return (0, _toxicDecorators.accessor)({
        get: function get(value) {
            var attrValue = this.dom.getAttr('video', attribute);
            return this.dispatcher.videoConfigReady && this.inited ? isBoolean ? !!attrValue : attrValue : value;
        },
        set: function set(value) {
            if (!this.dispatcher.videoConfigReady) return value;
            var val = isBoolean ? value || undefined : value === null ? undefined : value;
            this.dom.setAttr('video', attribute, val);
            return value;
        }
    });
}
function accessorWidthAndHeight(property) {
    return (0, _toxicDecorators.accessor)({
        get: function get(value) {
            if (!this.dispatcher.videoConfigReady || !this.inited) return value;
            var attr = this.dom.getAttr('video', property);
            var prop = this.dom.videoElement[property];
            if ((0, _mangoHelper.isNumeric)(attr) && (0, _mangoHelper.isNumber)(prop)) return prop;
            return attr || undefined;
        },
        set: function set(value) {
            if (!this.dispatcher.videoConfigReady) return value;
            var val;
            if (value === undefined || (0, _mangoHelper.isNumber)(value)) {
                val = value;
            } else if ((0, _mangoHelper.isString)(value) && !Number.isNaN(parseFloat(value))) {
                val = value;
            }
            this.dom.setAttr('video', property, val);
            return val;
        }
    });
}
var accessorMap = {
    src: [(0, _toxicDecorators.alwaysString)(), (0, _toxicDecorators.accessor)({
        set: function set(val) {
            // must check val !== this.src here
            // as we will set config.src in the video
            // the may cause dead lock
            if (this.dispatcher.readySync && this.autoload && val !== this.src) this.needToLoadSrc = true;
            return val;
        }
    }), (0, _toxicDecorators.accessor)({
        set: function set(val) {
            if (this.needToLoadSrc) {
                // unlock it at first, to avoid deadlock
                this.needToLoadSrc = false;
                this.dispatcher.bus.emit('load', val);
            }
            return val;
        }
    }, { preSet: false })],
    autoload: (0, _toxicDecorators.alwaysBoolean)(),
    autoplay: [(0, _toxicDecorators.alwaysBoolean)(), accessorVideoProperty('autoplay')],
    controls: [(0, _toxicDecorators.alwaysBoolean)(), accessorVideoProperty('controls')],
    width: [accessorWidthAndHeight('width')],
    height: [accessorWidthAndHeight('height')],
    crossOrigin: [(0, _toxicDecorators.accessor)({ set: stringOrVoid }), accessorVideoAttribute({ set: 'crossorigin', get: 'crossOrigin' })],
    loop: [(0, _toxicDecorators.alwaysBoolean)(), accessorVideoProperty('loop')],
    defaultMuted: [(0, _toxicDecorators.alwaysBoolean)(), accessorVideoAttribute({ get: 'defaultMuted', set: 'muted', isBoolean: true })],
    muted: [(0, _toxicDecorators.alwaysBoolean)(), accessorVideoProperty('muted')],
    preload: [(0, _toxicDecorators.accessor)({
        set: function set(value) {
            var options = ['none', 'auto', 'metadata', ''];
            return options.indexOf(value) > -1 ? value : 'none';
        }
    }, {
        preSet: true
    }), accessorVideoAttribute('preload')],
    poster: [
    // 因为如果在 video 上随便加一个字符串，他会将其拼接到地址上，所以这里要避免
    // 单元测试无法检测
    (0, _toxicDecorators.alwaysString)(), (0, _toxicDecorators.accessor)({
        get: function get(value) {
            return this.dispatcher.videoConfigReady && this.inited ? this.dom.videoElement.poster : value;
        },
        set: function set(value) {
            if (!this.dispatcher.videoConfigReady) return value;
            if (value.length) this.dom.setAttr('video', 'poster', value);
            return value;
        }
    })],
    playsInline: [(0, _toxicDecorators.accessor)({
        get: function get(value) {
            var playsInline = this.dom.videoElement.playsInline;
            return this.dispatcher.videoConfigReady && this.inited ? playsInline === undefined ? value : playsInline : value;
        },
        set: function set(value) {
            if (!this.dispatcher.videoConfigReady) return value;
            this.dom.videoElement.playsInline = value;
            var val = value ? '' : undefined;
            this.dom.setAttr('video', 'playsinline', val);
            this.dom.setAttr('video', 'webkit-playsinline', val);
            this.dom.setAttr('video', 'x5-playsinline', val);
            return value;
        }
    }), (0, _toxicDecorators.alwaysBoolean)()],
    x5VideoPlayerFullscreen: [(0, _toxicDecorators.accessor)({ set: function set(value) {
            return !!value;
        }, get: function get(value) {
            return !!value;
        } }), accessorCustomAttribute('x5-video-player-fullscreen', true)],
    x5VideoOrientation: [(0, _toxicDecorators.accessor)({ set: stringOrVoid }), accessorCustomAttribute('x5-video-orientation')],
    x5VideoPlayerType: [(0, _toxicDecorators.accessor)({
        set: function set(value) {
            if (!this.dispatcher.videoConfigReady) return value;
            var val = value === 'h5' ? 'h5' : undefined;
            this.dom.setAttr('video', 'x5-video-player-type', val);
            return value;
        },
        get: function get() {
            return this.dom.getAttr('video', 'x5-video-player-type') ? 'h5' : undefined;
        }
    })],
    xWebkitAirplay: [(0, _toxicDecorators.accessor)({ set: function set(value) {
            return !!value;
        }, get: function get(value) {
            return !!value;
        } }), accessorCustomAttribute('x-webkit-airplay', true)],
    playbackRate: [(0, _toxicDecorators.alwaysNumber)(1), accessorVideoProperty('playbackRate')],
    defaultPlaybackRate: [accessorVideoProperty('defaultPlaybackRate'), (0, _toxicDecorators.alwaysNumber)(1)],
    disableRemotePlayback: [(0, _toxicDecorators.alwaysBoolean)(), accessorVideoProperty('disableRemotePlayback')],
    volume: [(0, _toxicDecorators.alwaysNumber)(1), accessorVideoProperty('volume')]
};
var VideoConfig = /** @class */function () {
    function VideoConfig(dispatcher, config) {
        this.needToLoadSrc = false;
        this.changeWatchable = true;
        this.inited = false;
        this.src = '';
        this.isLive = false;
        // 此处 box 只能置空，因为 kernel 会自动根据你的安装 kernel 和相关地址作智能判断。
        // 曾经 bug 详见 https://github.com/Chimeejs/chimee-kernel/issues/1
        this.box = '';
        // 转为供 kernel 使用的内部参数
        this.preset = {};
        this.presetConfig = {};
        this.autoload = true;
        this.autoplay = false;
        this.controls = false;
        this.width = '100%';
        this.height = '100%';
        this.crossOrigin = undefined;
        this.loop = false;
        this.defaultMuted = false;
        this.muted = false;
        this.preload = 'auto';
        this.poster = undefined;
        this.playsInline = false;
        this.x5VideoPlayerFullscreen = false;
        this.x5VideoOrientation = undefined;
        this.x5VideoPlayerType = undefined;
        this.xWebkitAirplay = false;
        this.playbackRate = 1;
        this.defaultPlaybackRate = 1;
        this.disableRemotePlayback = false;
        this.volume = 1;
        // @frozen
        this._kernelProperty = ['isLive', 'box', 'preset', 'kernels', 'presetConfig'];
        // @frozen
        this._realDomAttr = ['src', 'controls', 'width', 'height', 'crossOrigin', 'loop', 'muted', 'preload', 'poster', 'autoplay', 'playsInline', 'x5VideoPlayerFullscreen', 'x5VideoOrientation', 'xWebkitAirplay', 'playbackRate', 'defaultPlaybackRate', 'autoload', 'disableRemotePlayback', 'defaultMuted', 'volume', 'x5VideoPlayerType'];
        (0, _toxicDecorators.applyDecorators)(this, accessorMap, { self: true });
        Object.defineProperty(this, 'dispatcher', {
            value: dispatcher,
            enumerable: false,
            writable: false,
            configurable: false
        });
        Object.defineProperty(this, 'dom', {
            value: dispatcher.dom,
            enumerable: false,
            writable: false,
            configurable: false
        });
        (0, _mangoHelper.deepAssign)(this, config);
    }
    VideoConfig.prototype.init = function () {
        var _this = this;
        this._realDomAttr.forEach(function (key) {
            // $FlowFixMe: we have check the computed here
            _this[key] = _this[key];
        });
        this.inited = true;
    };
    __decorate([_toxicDecorators.nonenumerable], VideoConfig.prototype, "needToLoadSrc", void 0);
    __decorate([_toxicDecorators.nonenumerable], VideoConfig.prototype, "changeWatchable", void 0);
    __decorate([_toxicDecorators.nonenumerable], VideoConfig.prototype, "inited", void 0);
    __decorate([(0, _toxicDecorators.initBoolean)(), _toxicDecorators.configurable], VideoConfig.prototype, "isLive", void 0);
    __decorate([(0, _toxicDecorators.initString)(function (str) {
        return str.toLocaleLowerCase();
    }), _toxicDecorators.configurable], VideoConfig.prototype, "box", void 0);
    return VideoConfig;
}();
exports.default = VideoConfig;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(28);
var createDesc = __webpack_require__(33);
module.exports = __webpack_require__(7) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(15);


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _index = __webpack_require__(16);

var _index2 = _interopRequireDefault(_index);

var _mangoHelper = __webpack_require__(0);

var _plugin = __webpack_require__(9);

var _plugin2 = _interopRequireDefault(_plugin);

var _toxicDecorators = __webpack_require__(1);

var _videoWrapper = __webpack_require__(10);

var _videoWrapper2 = _interopRequireDefault(_videoWrapper);

var _global = __webpack_require__(24);

var _global2 = _interopRequireDefault(_global);

var _global3 = __webpack_require__(25);

var _global4 = _interopRequireDefault(_global3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// @flow

var Chimee = /** @class */function (_super) {
    __extends(Chimee, _super);
    function Chimee(config) {
        var _this = _super.call(this) || this;
        _this.destroyed = false;
        // @frozen
        _this.__id = '_vm';
        // @frozen
        _this.version = process.env.PLAYER_VERSION;
        // @frozen
        _this.config = {
            errorHandler: undefined
        };
        /* istanbul ignore if */
        if (process.env.NODE_ENV !== 'production' && !_global4.default.Object.defineProperty) {
            /* istanbul ignore next */
            _mangoHelper.Log.error('Chimee', "We detect that this browser lack of Object.defineProperty. Chimee can't run on this browser");
        }
        /* istanbul ignore if */
        if (process.env.NODE_ENV !== 'production' && !_global4.default.Promise) {
            /* istanbul ignore next */
            _mangoHelper.Log.error('Chimee', 'We detect that this browser lack of Promise. If you are running Chimee in old browser. Please make sure you have import polyfill such as babel-polyfill.');
        }
        if ((0, _mangoHelper.isString)(config) || (0, _mangoHelper.isElement)(config)) {
            config = {
                wrapper: config,
                controls: true
            };
        } else if ((0, _mangoHelper.isObject)(config)) {
            if (!config.wrapper) throw new Error('You must pass in an legal object');
        } else {
            throw new Error('You must pass in an Object containing wrapper or string or element to new a Chimee');
        }
        // $FlowFixMe: we have check wrapper here
        _this.__dispatcher = new _index2.default(config, _this);
        _this.ready = _this.__dispatcher.ready;
        _this.readySync = _this.__dispatcher.readySync;
        _this.__wrapAsVideo(_this.__dispatcher.videoConfig);
        return _this;
    }
    Chimee_1 = Chimee;
    Chimee.prototype.destroy = function () {
        _super.prototype.__destroy.call(this);
        this.__dispatcher.destroy();
        // $FlowFixMe: normal obejct define
        Object.defineProperty(this, '__dispatcher', {
            get: function get() {
                throw new Error('This instance has been destroyed.');
            },
            enumerable: true,
            configurable: true
        });
        this.destroyed = true;
    };
    Chimee.prototype.use = function (option) {
        this.__dispatcher.use(option);
    };
    Chimee.prototype.unuse = function (name) {
        this.__dispatcher.unuse(name);
    };
    Chimee.prototype.__throwError = function (error) {
        if ((0, _mangoHelper.isString)(error)) error = new Error(error);
        var errorHandler = this.config.errorHandler || Chimee_1.config.errorHandler;
        if ((0, _mangoHelper.isFunction)(errorHandler)) return errorHandler(error);
        if (Chimee_1.config.silent) return;
        if ((0, _mangoHelper.isError)(error)) throw error;else console.error(error);
    };
    // @frozen
    Chimee.plugin = _plugin2.default;
    // @frozen
    Chimee.config = new _global2.default();
    // @frozen
    Chimee.install = _index2.default.install;
    // @frozen
    Chimee.uninstall = _index2.default.uninstall;
    // @frozen
    Chimee.hasInstalled = _index2.default.hasInstalled;
    // @frozen
    Chimee.installKernel = _index2.default.installKernel;
    // @frozen
    Chimee.uninstallKernel = _index2.default.uninstallKernel;
    // @frozen
    Chimee.hasInstalledKernel = _index2.default.hasInstalledKernel;
    // @frozen
    Chimee.getPluginConfig = _index2.default.getPluginConfig;
    Chimee = Chimee_1 = __decorate([(0, _toxicDecorators.autobindClass)()], Chimee);
    return Chimee;
    var Chimee_1;
}(_videoWrapper2.default);
exports.default = Chimee;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _mangoHelper = __webpack_require__(0);

var _mangoKernel = __webpack_require__(17);

var _mangoKernel2 = _interopRequireDefault(_mangoKernel);

var _bus = __webpack_require__(18);

var _bus2 = _interopRequireDefault(_bus);

var _plugin = __webpack_require__(9);

var _plugin2 = _interopRequireDefault(_plugin);

var _dom = __webpack_require__(20);

var _dom2 = _interopRequireDefault(_dom);

var _video = __webpack_require__(11);

var _video2 = _interopRequireDefault(_video);

var _container = __webpack_require__(22);

var _container2 = _interopRequireDefault(_container);

var _toxicDecorators = __webpack_require__(1);

var _vessel = __webpack_require__(23);

var _vessel2 = _interopRequireDefault(_vessel);

var _const = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// @flow

var pluginConfigSet = {};
var kernelsSet = {};
function convertNameIntoId(name) {
    if (!(0, _mangoHelper.isString)(name)) throw new Error("Plugin's name must be a string, but not \"" + name + "\" in " + (typeof name === "undefined" ? "undefined" : _typeof(name)));
    return (0, _mangoHelper.camelize)(name);
}
function checkPluginConfig(config) {
    if ((0, _mangoHelper.isFunction)(config)) {
        if (!(config.prototype instanceof _plugin2.default)) {
            throw new TypeError("Your are trying to install plugin " + config.name + ", but it's not extends from Chimee.plugin.");
        }
        return;
    }
    if (!(0, _mangoHelper.isObject)(config) || (0, _mangoHelper.isEmpty)(config)) throw new TypeError("plugin's config must be an Object, but not \"" + config + "\" in " + (typeof config === "undefined" ? "undefined" : _typeof(config)));
    var name = config.name;
    if (!(0, _mangoHelper.isString)(name) || name.length < 1) throw new TypeError("plugin must have a legal namea, but not \"" + name + "\" in " + (typeof name === "undefined" ? "undefined" : _typeof(name)));
}
/**
 * <pre>
 * Dispatcher is the hub of plugins, user, and video kernel.
 * It take charge of plugins install, use and remove
 * It also offer a bridge to let user handle video kernel.
 * </pre>
 */
var Dispatcher = /** @class */function () {
    /**
     * @param  {UserConfig} config UserConfig for whole Chimee player
     * @param  {Chimee} vm referrence of outer class
     * @return {Dispatcher}
     */
    function Dispatcher(config, vm) {
        var _this = this;
        /**
         * all plugins instance set
         * @type {Object}
         * @member plugins
         */
        this.plugins = {};
        /**
         * plugin's order
         * @type {Array<string>}
         * @member order
         */
        this.order = [];
        /**
         * the synchronous ready flag
         * @type {boolean}
         * @member readySync
         */
        this.readySync = false;
        /**
         * the z-index map of the dom, it contain some important infomation
         * @type {Object}
         * @member zIndexMap
         */
        this.zIndexMap = {
            inner: [],
            outer: []
        };
        this.changeWatchable = true;
        // to save the kernel event handler, so that we can remove it when we destroy the kernel
        this.kernelEventHandlerList = [];
        if (!(0, _mangoHelper.isObject)(config)) throw new TypeError("UserConfig must be an Object, but not \"" + config + "\" in " + (typeof config === "undefined" ? "undefined" : _typeof(config)));
        /**
         * dom Manager
         * @type {Dom}
         */
        this.dom = new _dom2.default(config.wrapper, this);
        /**
         * eventBus
         * @type {Bus}
         */
        this.bus = new _bus2.default(this);
        /**
         * Chimee's referrence
         * @type {[type]}
         */
        this.vm = vm;
        /**
         * tell user have Chimee installed finished
         * @type {Promises}
         */
        this.videoConfigReady = false;
        // create the videoconfig
        this.videoConfig = new _video2.default(this, config);
        // support both plugin and plugins here as people often cofuse both
        // $FlowFixMe: we support plugins here, which should be illegal
        if ((0, _mangoHelper.isArray)(config.plugins) && !(0, _mangoHelper.isArray)(config.plugin)) {
            config.plugin = config.plugins;
            delete config.plugins;
        }
        // use the plugin user want to use
        this._initUserPlugin(config.plugin);
        // add default config for container
        var containerConfig = (0, _mangoHelper.deepAssign)({}, _container2.default, config.container || {});
        // trigger the init life hook of plugin
        this.order.forEach(function (key) {
            return _this.plugins[key].__init(_this.videoConfig, containerConfig);
        });
        this.videoConfigReady = true;
        this.videoConfig.init();
        this.containerConfig = new _vessel2.default(this, 'container', containerConfig);
        /**
         * video kernel
         * @type {Kernel}
         */
        this.kernel = this._createKernel(this.dom.videoElement, this.videoConfig);
        this._bindKernelEvents(this.kernel);
        // trigger auto load event
        var asyncInitedTasks = [];
        this.order.forEach(function (key) {
            var ready = _this.plugins[key].__inited();
            if ((0, _mangoHelper.isPromise)(ready)) {
                asyncInitedTasks.push(ready);
            }
        });
        this.readySync = asyncInitedTasks.length === 0;
        // tell them we have inited the whold player
        this.ready = this.readySync ? Promise.resolve() : Promise.all(asyncInitedTasks).then(function () {
            _this.readySync = true;
            _this.bus.trigger('ready');
            _this._autoloadVideoSrcAtFirst();
        });
        if (this.readySync) this._autoloadVideoSrcAtFirst();
    }
    /**
     * use a plugin, which means we will new a plugin instance and include int this Chimee instance
     * @param  {Object|string} option you can just set a plugin name or plugin config
     * @return {Promise}
     */
    Dispatcher.prototype.use = function (option) {
        if ((0, _mangoHelper.isString)(option)) option = { name: option, alias: undefined };
        if (!(0, _mangoHelper.isObject)(option) || (0, _mangoHelper.isObject)(option) && !(0, _mangoHelper.isString)(option.name)) {
            throw new TypeError('pluginConfig do not match requirement');
        }
        if (!(0, _mangoHelper.isString)(option.alias)) option.alias = undefined;
        var name = option.name,
            alias = option.alias;
        option.name = alias || name;
        delete option.alias;
        var key = (0, _mangoHelper.camelize)(name);
        var id = (0, _mangoHelper.camelize)(alias || name);
        var pluginOption = option;
        var pluginConfig = Dispatcher.getPluginConfig(key);
        if ((0, _mangoHelper.isEmpty)(pluginConfig)) throw new TypeError('You have not installed plugin ' + key);
        if ((0, _mangoHelper.isObject)(pluginConfig)) {
            pluginConfig.id = id;
        }
        var plugin = (0, _mangoHelper.isFunction)(pluginConfig) ? new pluginConfig({ id: id }, this, pluginOption) // eslint-disable-line 
        : new _plugin2.default(pluginConfig, this, pluginOption);
        this.plugins[id] = plugin;
        Object.defineProperty(this.vm, id, {
            value: plugin,
            configurable: true,
            enumerable: false,
            writable: false
        });
        this.order.push(id);
        this._sortZIndex();
        if (this.videoConfigReady) plugin.__inited();
        return plugin.ready;
    };
    /**
     * unuse an plugin, we will destroy the plugin instance and exlude it
     * @param  {string} name plugin's name
     */
    Dispatcher.prototype.unuse = function (id) {
        var plugin = this.plugins[id];
        if (!(0, _mangoHelper.isObject)(plugin) || !(0, _mangoHelper.isFunction)(plugin.$destroy)) {
            delete this.plugins[id];
            return;
        }
        plugin.$destroy();
        var orderIndex = this.order.indexOf(id);
        if (orderIndex > -1) {
            this.order.splice(orderIndex, 1);
        }
        delete this.plugins[id];
        delete this.vm[id];
    };
    Dispatcher.prototype.throwError = function (error) {
        this.vm.__throwError(error);
    };
    Dispatcher.prototype.silentLoad = function (src, option) {
        var _this = this;
        if (option === void 0) {
            option = {};
        }
        var _a = option.duration,
            duration = _a === void 0 ? 3 : _a,
            _b = option.bias,
            bias = _b === void 0 ? 0 : _b,
            _c = option.repeatTimes,
            repeatTimes = _c === void 0 ? 0 : _c,
            _d = option.increment,
            increment = _d === void 0 ? 0 : _d,
            _e = option.isLive,
            isLive = _e === void 0 ? this.videoConfig.isLive : _e,
            _f = option.box,
            box = _f === void 0 ? this.videoConfig.box : _f,
            _g = option.kernels,
            kernels = _g === void 0 ? this.videoConfig.kernels : _g,
            _h = option.preset,
            preset = _h === void 0 ? this.videoConfig.preset : _h;
        // all live stream seem as immediate mode
        // it's impossible to seek on live stream
        var immediate = option.immediate || isLive;
        // form the base config for kernel
        // it should be the same as the config now
        var config = { isLive: isLive, box: box, src: src, kernels: kernels, preset: preset };
        // build tasks accroding repeat times
        var tasks = new Array(repeatTimes + 1).fill(1).map(function (value, index) {
            return function () {
                return new Promise(function (resolve, reject) {
                    // if abort, give up and reject
                    if (option.abort) reject({ error: true, message: 'user abort the mission' });
                    var video = document.createElement('video');
                    var idealTime = _this.kernel.currentTime + duration + increment * index;
                    video.muted = true;
                    var newVideoReady = false;
                    var kernel;
                    var _videoError;
                    var videoCanplay;
                    var videoLoadedmetadata;
                    // bind time update on old video
                    // when we bump into the switch point and ready
                    // we switch
                    var oldVideoTimeupdate = function oldVideoTimeupdate() {
                        var currentTime = _this.kernel.currentTime;
                        if (bias <= 0 && currentTime >= idealTime || bias > 0 && (Math.abs(idealTime - currentTime) <= bias && newVideoReady || currentTime - idealTime > bias)) {
                            (0, _mangoHelper.removeEvent)(_this.dom.videoElement, 'timeupdate', oldVideoTimeupdate);
                            (0, _mangoHelper.removeEvent)(video, 'error', _videoError, true);
                            if (!newVideoReady) {
                                (0, _mangoHelper.removeEvent)(video, 'canplay', videoCanplay, true);
                                (0, _mangoHelper.removeEvent)(video, 'loadedmetadata', videoLoadedmetadata, true);
                                kernel.destroy();
                                return resolve();
                            }
                            return reject({
                                error: false,
                                video: video,
                                kernel: kernel
                            });
                        }
                    };
                    videoCanplay = function videoCanplay() {
                        newVideoReady = true;
                        // you can set it immediately run by yourself
                        if (immediate) {
                            (0, _mangoHelper.removeEvent)(_this.dom.videoElement, 'timeupdate', oldVideoTimeupdate);
                            (0, _mangoHelper.removeEvent)(video, 'error', _videoError, true);
                            return reject({
                                error: false,
                                video: video,
                                kernel: kernel
                            });
                        }
                    };
                    videoLoadedmetadata = function videoLoadedmetadata() {
                        if (!isLive) kernel.seek(idealTime);
                    };
                    _videoError = function videoError(evt) {
                        (0, _mangoHelper.removeEvent)(video, 'canplay', videoCanplay, true);
                        (0, _mangoHelper.removeEvent)(video, 'loadedmetadata', videoLoadedmetadata, true);
                        (0, _mangoHelper.removeEvent)(_this.dom.videoElement, 'timeupdate', oldVideoTimeupdate);
                        kernel.off('error', _videoError);
                        var error;
                        if (evt.target === kernel) {
                            var message = evt.data.errmsg;
                            _mangoHelper.Log.error("chimee's silentload bump into a kernel error", message);
                            error = new Error(message);
                        } else {
                            error = !(0, _mangoHelper.isEmpty)(video.error) ? new Error(video.error.message) : new Error('unknow video error');
                            _mangoHelper.Log.error("chimee's silentload", error.message);
                        }
                        kernel.destroy();
                        _this._silentLoadTempKernel = undefined;
                        return index === repeatTimes ? reject(error) : resolve(error);
                    };
                    (0, _mangoHelper.addEvent)(video, 'canplay', videoCanplay, true);
                    (0, _mangoHelper.addEvent)(video, 'loadedmetadata', videoLoadedmetadata, true);
                    (0, _mangoHelper.addEvent)(video, 'error', _videoError, true);
                    kernel = _this._createKernel(video, config);
                    _this._silentLoadTempKernel = kernel;
                    kernel.on('error', _videoError);
                    (0, _mangoHelper.addEvent)(_this.dom.videoElement, 'timeupdate', oldVideoTimeupdate);
                    kernel.load();
                });
            };
        });
        return (0, _mangoHelper.runRejectableQueue)(tasks).then(function () {
            var message = "The silentLoad for " + src + " timed out. Please set a longer duration or check your network";
            /* istanbul ignore else  */
            if (process.env.NODE_ENV !== 'production') {
                _mangoHelper.Log.warn("chimee's silentLoad", message);
            }
            return Promise.reject(new Error(message));
        }).catch(function (data) {
            if ((0, _mangoHelper.isError)(data)) {
                return Promise.reject(data);
            }
            if (data.error) {
                /* istanbul ignore else  */
                if (process.env.NODE_ENV !== 'production') {
                    _mangoHelper.Log.warn("chimee's silentLoad", data.message);
                }
                return Promise.reject(new Error(data.message));
            }
            var video = data.video,
                kernel = data.kernel;
            if (option.abort) {
                kernel.destroy();
                return Promise.reject(new Error('user abort the mission'));
            }
            var paused = _this.dom.videoElement.paused;
            if (paused) {
                _this.switchKernel({ video: video, kernel: kernel, config: config });
                return Promise.resolve();
            }
            return new Promise(function (resolve) {
                (0, _mangoHelper.addEvent)(video, 'play', function () {
                    _this.switchKernel({ video: video, kernel: kernel, config: config });
                    resolve();
                }, true);
                video.play();
            });
        });
    };
    Dispatcher.prototype.load = function (srcOrOption, option) {
        if (option === void 0) {
            option = {};
        }
        var src = (0, _mangoHelper.isString)(srcOrOption) ? srcOrOption : (0, _mangoHelper.isObject)(srcOrOption) && (0, _mangoHelper.isString)(srcOrOption.src) ? srcOrOption.src : '';
        if ((0, _mangoHelper.isObject)(srcOrOption)) {
            delete srcOrOption.src;
            option = srcOrOption;
        }
        var oldBox = this.kernel.box;
        var videoConfig = this.videoConfig;
        var _a = option.isLive,
            isLive = _a === void 0 ? videoConfig.isLive : _a,
            _b = option.box,
            box = _b === void 0 ? videoConfig.box : _b,
            _c = option.preset,
            preset = _c === void 0 ? videoConfig.preset : _c,
            _d = option.kernels,
            kernels = _d === void 0 ? videoConfig.kernels : _d;
        if (box !== 'native' || box !== oldBox || !(0, _mangoHelper.isEmpty)(option)) {
            var video = document.createElement('video');
            var config = { isLive: isLive, box: box, preset: preset, src: src, kernels: kernels };
            var kernel = this._createKernel(video, config);
            this.switchKernel({ video: video, kernel: kernel, config: config });
        }
        var originAutoLoad = this.videoConfig.autoload;
        this._changeUnwatchable(this.videoConfig, 'autoload', false);
        this.videoConfig.src = src || this.videoConfig.src;
        this.kernel.load(this.videoConfig.src);
        this._changeUnwatchable(this.videoConfig, 'autoload', originAutoLoad);
    };
    Dispatcher.prototype.switchKernel = function (_a) {
        var _this = this;
        var video = _a.video,
            kernel = _a.kernel,
            config = _a.config;
        var oldKernel = this.kernel;
        var originVideoConfig = (0, _mangoHelper.deepClone)(this.videoConfig);
        this.dom.removeVideo();
        this.dom.installVideo(video, { bindEvent: false });
        // as we will reset the currentVideoConfig on the new video
        // it will trigger the watch function as they maybe differnet
        // because video config will return the real situation
        // so we need to stop them
        this.videoConfig.changeWatchable = false;
        this.videoConfig.autoload = false;
        this.videoConfig.src = config.src;
        this.videoConfig._realDomAttr.forEach(function (key) {
            // $FlowFixMe: support computed key here
            if (key !== 'src') _this.videoConfig[key] = originVideoConfig[key];
        });
        this.videoConfig.changeWatchable = true;
        this._bindKernelEvents(oldKernel, true);
        this._bindKernelEvents(kernel);
        this.kernel = kernel;
        this._silentLoadTempKernel = undefined;
        var isLive = config.isLive,
            box = config.box,
            preset = config.preset,
            kernels = config.kernels;
        Object.assign(this.videoConfig, { isLive: isLive, box: box, preset: preset, kernels: kernels });
        // const config = {}
        oldKernel.destroy();
        // delay video event binding
        // so that people can't feel the default value change
        setTimeout(function () {
            return _this.dom.bindVideoEvents(video);
        });
    };
    /**
     * destroy function called when dispatcher destroyed
     */
    Dispatcher.prototype.destroy = function () {
        for (var key in this.plugins) {
            this.unuse(key);
        }
        this.bus.destroy();
        delete this.bus;
        this.dom.destroy();
        delete this.dom;
        this._bindKernelEvents(this.kernel, true);
        this.kernel.destroy();
        delete this.kernel;
        delete this.vm;
        delete this.plugins;
        delete this.order;
    };
    /**
     * use a set of plugin
     * @param  {Array<UserPluginConfig>}  configs  a set of plugin config
     * @return {Array<Promise>}   a set of Promise indicate the plugin install stage
     */
    Dispatcher.prototype._initUserPlugin = function (configs) {
        var _this = this;
        if (configs === void 0) {
            configs = [];
        }
        if (!(0, _mangoHelper.isArray)(configs)) {
            /* istanbul ignore else  */
            if (process.env.NODE_ENV !== 'production') _mangoHelper.Log.warn('Dispatcher', "UserConfig.plugin can only by an Array, but not \"" + configs + "\" in " + (typeof configs === "undefined" ? "undefined" : _typeof(configs)));
            configs = [];
        }
        return configs.map(function (config) {
            return _this.use(config);
        });
    };
    /**
     * sort zIndex of plugins to make plugin display in order
     */
    Dispatcher.prototype._sortZIndex = function () {
        var _this = this;
        var _a = this.order.reduce(function (levelSet, key) {
            var plugin = _this.plugins[key];
            if ((0, _mangoHelper.isEmpty)(plugin)) return levelSet;
            var set = levelSet[plugin.$inner ? 'inner' : 'outer'];
            var level = plugin.$level;
            set[level] = set[level] || [];
            set[level].push(key);
            return levelSet;
        }, { inner: {}, outer: {} }),
            inner = _a.inner,
            outer = _a.outer;
        inner[0] = inner[0] || [];
        inner[0].unshift('videoElement');
        outer[0] = outer[0] || [];
        outer[0].unshift('container');
        var innerOrderArr = (0, _mangoHelper.transObjectAttrIntoArray)(inner);
        var outerOrderArr = (0, _mangoHelper.transObjectAttrIntoArray)(outer);
        this.dom.setPluginsZIndex(innerOrderArr);
        this.dom.setPluginsZIndex(outerOrderArr);
        this.zIndexMap.inner = innerOrderArr;
        this.zIndexMap.outer = outerOrderArr;
    };
    /**
     * get the top element's level
     * @param {boolean} inner get the inner array or the outer array
     */
    Dispatcher.prototype._getTopLevel = function (inner) {
        var arr = this.zIndexMap[inner ? 'inner' : 'outer'];
        var plugin = this.plugins[arr[arr.length - 1]];
        return (0, _mangoHelper.isEmpty)(plugin) ? 0 : plugin.$level;
    };
    Dispatcher.prototype._autoloadVideoSrcAtFirst = function () {
        if (this.videoConfig.video_id) {
            _mangoHelper.Log.warn('When you has config video_id, it will not autoreload');
            return;
        }
        if (this.videoConfig.autoload) {
            if (process.env.NODE_ENV !== 'prodution' && !this.videoConfig.src) {
                _mangoHelper.Log.warn('You have not set the src, so you better set autoload to be false. Accroding to https://github.com/Chimeejs/chimee/blob/master/doc/zh-cn/chimee-api.md#src.');
                return;
            }
            this.bus.emit('load', this.videoConfig.src);
        }
    };
    Dispatcher.prototype._changeUnwatchable = function (object, property, value) {
        this.changeWatchable = false;
        object[property] = value;
        this.changeWatchable = true;
    };
    Dispatcher.prototype._createKernel = function (video, config) {
        var kernels = config.kernels,
            preset = config.preset;
        /* istanbul ignore else  */
        if (process.env.NODE_ENV !== 'production' && (0, _mangoHelper.isEmpty)(kernels) && !(0, _mangoHelper.isEmpty)(preset)) _mangoHelper.Log.warn('preset will be deprecated in next major version, please use kernels instead.');
        var presetConfig = {};
        var newPreset = {};
        if ((0, _mangoHelper.isArray)(kernels)) {
            // SKC means SingleKernelConfig
            newPreset = kernels.reduce(function (kernels, keyOrSKC) {
                // if it is a string key, it means the kernel has been pre installed.
                if ((0, _mangoHelper.isString)(keyOrSKC)) {
                    var kernelFn = kernelsSet[keyOrSKC];
                    if (!(0, _mangoHelper.isFunction)(kernelFn)) {
                        _mangoHelper.Log.warn("You have not installed kernel for " + keyOrSKC + ".");
                        return kernels;
                    }
                    kernels[keyOrSKC] = kernelFn;
                    return kernels;
                }
                // if it is a SingleKernelConfig, it means user may pass in some config here
                // so we need to extract the handler
                // get the name of the handler
                // and collect the config for the handler
                if ((0, _mangoHelper.isObject)(keyOrSKC)) {
                    var name_1 = keyOrSKC.name,
                        handler = keyOrSKC.handler;
                    // if the handler is a pure string, it means the kernel has been pre installed
                    if ((0, _mangoHelper.isString)(handler)) {
                        var kernelFn = kernelsSet[handler];
                        if (!(0, _mangoHelper.isFunction)(kernelFn)) {
                            _mangoHelper.Log.warn("You have not installed kernel for " + handler + ".");
                            return kernels;
                        }
                        kernels[handler] = kernelFn;
                        presetConfig[handler] = keyOrSKC;
                        return kernels;
                    }
                    // if the handler is a function, it means that the user pass in the kernel directly
                    // if the provide name, we use it as kernel name
                    // if they do not provide name, we just use the function's name
                    if ((0, _mangoHelper.isFunction)(handler)) {
                        var kernelName = name_1 || handler.name;
                        kernels[kernelName] = handler;
                        presetConfig[kernelName] = keyOrSKC;
                        return kernels;
                    }
                    _mangoHelper.Log.warn("When you pass in an SingleKernelConfig in Array, you must clarify it's handler, we only support handler in string or function but not " + (typeof handler === "undefined" ? "undefined" : _typeof(handler)));
                    return kernels;
                }
                _mangoHelper.Log.warn("If you pass in kernels as array, you must pass in kernels in string or function, but not " + (typeof keyOrSKC === "undefined" ? "undefined" : _typeof(keyOrSKC)));
                return kernels;
            }, {});
        }
        if ((0, _mangoHelper.isObject)(kernels)) {
            // SKC means SingleKernelConfig
            Object.keys(kernels).forEach(function (key) {
                var fnOrSKC = kernels[key];
                // if it's a function, means we need to do nothing
                if ((0, _mangoHelper.isFunction)(fnOrSKC)) {
                    newPreset[key] = fnOrSKC;
                    return;
                }
                if ((0, _mangoHelper.isObject)(fnOrSKC)) {
                    var handler = fnOrSKC.handler;
                    // if handler is an string, it means user has pre install it
                    if ((0, _mangoHelper.isString)(handler)) {
                        var kernelFn = kernelsSet[handler];
                        if (!(0, _mangoHelper.isFunction)(kernelFn)) {
                            _mangoHelper.Log.warn("You have not installed kernel for " + handler + ".");
                            return;
                        }
                        newPreset[key] = kernelFn;
                        presetConfig[key] = fnOrSKC;
                        return;
                    }
                    if ((0, _mangoHelper.isFunction)(handler)) {
                        newPreset[key] = handler;
                        presetConfig[key] = fnOrSKC;
                        return;
                    }
                    _mangoHelper.Log.warn("When you pass in an SingleKernelConfig in Object, you must clarify it's handler, we only support handler in string or function but not " + (typeof handler === "undefined" ? "undefined" : _typeof(handler)));
                    return;
                }
                _mangoHelper.Log.warn("If you pass in kernels as object, you must pass in kernels in string or function, but not " + (typeof fnOrSKC === "undefined" ? "undefined" : _typeof(fnOrSKC)));
                return kernels;
            });
        }
        config.preset = Object.assign(newPreset, preset);
        config.presetConfig = presetConfig;
        var kernel = new _mangoKernel2.default(video, config);
        return kernel;
    };
    Dispatcher.prototype._bindKernelEvents = function (kernel, remove) {
        var _this = this;
        if (remove === void 0) {
            remove = false;
        }
        _const.kernelEvents.forEach(function (key, index) {
            if (!remove) {
                var fn_1 = function fn_1() {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    return (_a = _this.bus).triggerSync.apply(_a, [key].concat(args));
                    var _a;
                };
                kernel.on(key, fn_1);
                _this.kernelEventHandlerList.push(fn_1);
                return;
            }
            var fn = _this.kernelEventHandlerList[index];
            kernel.off(key, fn);
        });
        if (remove) {
            this.kernelEventHandlerList = [];
            kernel.off('error', this.throwError);
        } else {
            kernel.on('error', this.throwError);
        }
    };
    /**
     * static method to install plugin
     * we will store the plugin config
     * @type {string} plugin's id
     */
    Dispatcher.install = function (config) {
        var name = config.name;
        var id = (0, _mangoHelper.camelize)(name);
        if (!(0, _mangoHelper.isEmpty)(pluginConfigSet[id])) {
            /* istanbul ignore else  */
            if (process.env.NODE_ENV !== 'production') _mangoHelper.Log.warn('Dispatcher', 'You have installed ' + name + ' again. And the older one will be replaced');
        }
        var pluginConfig = (0, _mangoHelper.isFunction)(config) ? config : (0, _mangoHelper.deepAssign)({ id: id }, config);
        pluginConfigSet[id] = pluginConfig;
        return id;
    };
    Dispatcher.hasInstalled = function (id) {
        return !(0, _mangoHelper.isEmpty)(pluginConfigSet[id]);
    };
    Dispatcher.uninstall = function (id) {
        delete pluginConfigSet[id];
    };
    /**
     * get Plugin config based on plugin's id
     * @type {[type]}
     */
    Dispatcher.getPluginConfig = function (id) {
        return pluginConfigSet[id];
    };
    Dispatcher.installKernel = function (key, value) {
        var tasks = (0, _mangoHelper.isObject)(key) ? Object.entries(key) : [[key, value]];
        tasks.forEach(function (_a) {
            var key = _a[0],
                value = _a[1];
            if (!(0, _mangoHelper.isFunction)(value)) throw new Error("The kernel you install on " + key + " must be a Function, but not " + (typeof value === "undefined" ? "undefined" : _typeof(value)));
            if ((0, _mangoHelper.isFunction)(kernelsSet[key])) _mangoHelper.Log.warn("You have alrady install a kernel on " + key + ", and now we will replace it");
            kernelsSet[key] = value;
        });
    };
    // only use for debug in internal
    Dispatcher.uninstallKernel = function (key) {
        delete kernelsSet[key];
    };
    Dispatcher.hasInstalledKernel = function (key) {
        return (0, _mangoHelper.isFunction)(kernelsSet[key]);
    };
    __decorate([(0, _toxicDecorators.before)(convertNameIntoId)], Dispatcher.prototype, "unuse", null);
    __decorate([_toxicDecorators.autobind], Dispatcher.prototype, "throwError", null);
    __decorate([(0, _toxicDecorators.before)(checkPluginConfig)], Dispatcher, "install", null);
    __decorate([(0, _toxicDecorators.before)(convertNameIntoId)], Dispatcher, "hasInstalled", null);
    __decorate([(0, _toxicDecorators.before)(convertNameIntoId)], Dispatcher, "uninstall", null);
    __decorate([(0, _toxicDecorators.before)(convertNameIntoId)], Dispatcher, "getPluginConfig", null);
    return Dispatcher;
}();
exports.default = Dispatcher;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof3 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function webpackUniversalModuleDefinition(root, factory) {
    if (( false ? 'undefined' : _typeof3(exports)) === 'object' && ( false ? 'undefined' : _typeof3(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof3(exports)) === 'object') exports["MangoKernel"] = factory();else root["MangoKernel"] = factory();
})(typeof self !== 'undefined' ? self : undefined, function () {
    return (/******/function (modules) {
            /******/ // The module cache
            /******/var installedModules = {};
            /******/
            /******/ // The require function
            /******/function __webpack_require__(moduleId) {
                /******/
                /******/ // Check if module is in cache
                /******/if (installedModules[moduleId]) {
                    /******/return installedModules[moduleId].exports;
                    /******/
                }
                /******/ // Create a new module (and put it into the cache)
                /******/var module = installedModules[moduleId] = {
                    /******/i: moduleId,
                    /******/l: false,
                    /******/exports: {}
                    /******/
                };
                /******/
                /******/ // Execute the module function
                /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                /******/
                /******/ // Flag the module as loaded
                /******/module.l = true;
                /******/
                /******/ // Return the exports of the module
                /******/return module.exports;
                /******/
            }
            /******/
            /******/
            /******/ // expose the modules object (__webpack_modules__)
            /******/__webpack_require__.m = modules;
            /******/
            /******/ // expose the module cache
            /******/__webpack_require__.c = installedModules;
            /******/
            /******/ // define getter function for harmony exports
            /******/__webpack_require__.d = function (exports, name, getter) {
                /******/if (!__webpack_require__.o(exports, name)) {
                    /******/Object.defineProperty(exports, name, {
                        /******/configurable: false,
                        /******/enumerable: true,
                        /******/get: getter
                        /******/
                    });
                    /******/
                }
                /******/
            };
            /******/
            /******/ // getDefaultExport function for compatibility with non-harmony modules
            /******/__webpack_require__.n = function (module) {
                /******/var getter = module && module.__esModule ?
                /******/function getDefault() {
                    return module['default'];
                } :
                /******/function getModuleExports() {
                    return module;
                };
                /******/__webpack_require__.d(getter, 'a', getter);
                /******/return getter;
                /******/
            };
            /******/
            /******/ // Object.prototype.hasOwnProperty.call
            /******/__webpack_require__.o = function (object, property) {
                return Object.prototype.hasOwnProperty.call(object, property);
            };
            /******/
            /******/ // __webpack_public_path__
            /******/__webpack_require__.p = "";
            /******/
            /******/ // Load entry module and return exports
            /******/return __webpack_require__(__webpack_require__.s = 1);
            /******/
        }([
        /* 0 */
        /***/function (module, exports, __webpack_require__) {
            "use strict";
            /* WEBPACK VAR INJECTION */
            (function (module) {
                var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
                var _typeof2 = typeof Symbol === "function" && _typeof3(Symbol.iterator) === "symbol" ? function (obj) {
                    return typeof obj === 'undefined' ? 'undefined' : _typeof3(obj);
                } : function (obj) {
                    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof3(obj);
                };
                (function webpackUniversalModuleDefinition(root, factory) {
                    if ((false ? 'undefined' : _typeof2(exports)) === 'object' && (false ? 'undefined' : _typeof2(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else if ((typeof exports === 'undefined' ? 'undefined' : _typeof2(exports)) === 'object') exports["mangoHelper"] = factory();else root["mangoHelper"] = factory();
                })(typeof self !== 'undefined' ? self : undefined, function () {
                    return (/******/function (modules) {
                            /******/ // The module cache
                            /******/var installedModules = {};
                            /******/
                            /******/ // The require function
                            /******/function __webpack_require__(moduleId) {
                                /******/
                                /******/ // Check if module is in cache
                                /******/if (installedModules[moduleId]) {
                                    /******/return installedModules[moduleId].exports;
                                    /******/
                                }
                                /******/ // Create a new module (and put it into the cache)
                                /******/var module = installedModules[moduleId] = {
                                    /******/i: moduleId,
                                    /******/l: false,
                                    /******/exports: {}
                                    /******/
                                };
                                /******/
                                /******/ // Execute the module function
                                /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
                                /******/
                                /******/ // Flag the module as loaded
                                /******/module.l = true;
                                /******/
                                /******/ // Return the exports of the module
                                /******/return module.exports;
                                /******/
                            }
                            /******/
                            /******/
                            /******/ // expose the modules object (__webpack_modules__)
                            /******/__webpack_require__.m = modules;
                            /******/
                            /******/ // expose the module cache
                            /******/__webpack_require__.c = installedModules;
                            /******/
                            /******/ // define getter function for harmony exports
                            /******/__webpack_require__.d = function (exports, name, getter) {
                                /******/if (!__webpack_require__.o(exports, name)) {
                                    /******/Object.defineProperty(exports, name, {
                                        /******/configurable: false,
                                        /******/enumerable: true,
                                        /******/get: getter
                                        /******/
                                    });
                                    /******/
                                }
                                /******/
                            };
                            /******/
                            /******/ // getDefaultExport function for compatibility with non-harmony modules
                            /******/__webpack_require__.n = function (module) {
                                /******/var getter = module && module.__esModule ?
                                /******/function getDefault() {
                                    return module['default'];
                                } :
                                /******/function getModuleExports() {
                                    return module;
                                };
                                /******/__webpack_require__.d(getter, 'a', getter);
                                /******/return getter;
                                /******/
                            };
                            /******/
                            /******/ // Object.prototype.hasOwnProperty.call
                            /******/__webpack_require__.o = function (object, property) {
                                return Object.prototype.hasOwnProperty.call(object, property);
                            };
                            /******/
                            /******/ // __webpack_public_path__
                            /******/__webpack_require__.p = "";
                            /******/
                            /******/ // Load entry module and return exports
                            /******/return __webpack_require__(__webpack_require__.s = 3);
                            /******/
                        }([
                        /* 0 */
                        /***/function (module, exports, __webpack_require__) {
                            /**
                             * toxic-predicate-functions v0.1.5
                             * (c) 2017 toxic-johann
                             * Released under MIT
                             */
                            (function (global, factory) {
                                true ? factory(exports) : typeof define === 'function' && define.amd ? define(['exports'], factory) : factory(global.toxicPredicateFunctions = {});
                            })(this, function (exports) {
                                'use strict';

                                var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
                                    return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
                                } : function (obj) {
                                    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
                                };
                                var asyncGenerator = function () {
                                    function AwaitValue(value) {
                                        this.value = value;
                                    }
                                    function AsyncGenerator(gen) {
                                        var front, back;
                                        function send(key, arg) {
                                            return new Promise(function (resolve, reject) {
                                                var request = {
                                                    key: key,
                                                    arg: arg,
                                                    resolve: resolve,
                                                    reject: reject,
                                                    next: null
                                                };
                                                if (back) {
                                                    back = back.next = request;
                                                } else {
                                                    front = back = request;
                                                    resume(key, arg);
                                                }
                                            });
                                        }
                                        function resume(key, arg) {
                                            try {
                                                var result = gen[key](arg);
                                                var value = result.value;
                                                if (value instanceof AwaitValue) {
                                                    Promise.resolve(value.value).then(function (arg) {
                                                        resume("next", arg);
                                                    }, function (arg) {
                                                        resume("throw", arg);
                                                    });
                                                } else {
                                                    settle(result.done ? "return" : "normal", result.value);
                                                }
                                            } catch (err) {
                                                settle("throw", err);
                                            }
                                        }
                                        function settle(type, value) {
                                            switch (type) {
                                                case "return":
                                                    front.resolve({
                                                        value: value,
                                                        done: true
                                                    });
                                                    break;
                                                case "throw":
                                                    front.reject(value);
                                                    break;
                                                default:
                                                    front.resolve({
                                                        value: value,
                                                        done: false
                                                    });
                                                    break;
                                            }
                                            front = front.next;
                                            if (front) {
                                                resume(front.key, front.arg);
                                            } else {
                                                back = null;
                                            }
                                        }
                                        this._invoke = send;
                                        if (typeof gen.return !== "function") {
                                            this.return = undefined;
                                        }
                                    }
                                    if (typeof Symbol === "function" && Symbol.asyncIterator) {
                                        AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
                                            return this;
                                        };
                                    }
                                    AsyncGenerator.prototype.next = function (arg) {
                                        return this._invoke("next", arg);
                                    };
                                    AsyncGenerator.prototype.throw = function (arg) {
                                        return this._invoke("throw", arg);
                                    };
                                    AsyncGenerator.prototype.return = function (arg) {
                                        return this._invoke("return", arg);
                                    };
                                    return {
                                        wrap: function wrap(fn) {
                                            return function () {
                                                return new AsyncGenerator(fn.apply(this, arguments));
                                            };
                                        },
                                        await: function _await(value) {
                                            return new AwaitValue(value);
                                        }
                                    };
                                }();
                                /**
                                 * to check whether the object is defined or not
                                 */
                                function defined(obj) {
                                    return typeof obj !== 'undefined';
                                }
                                /**
                                 * is void element or not ? Means it will return true when val is undefined or null
                                 */
                                function isVoid(obj) {
                                    return obj === undefined || obj === null;
                                }
                                /**
                                 * to check whether a variable is array
                                 */
                                function isArray(arr) {
                                    return Array.isArray(arr);
                                }
                                /**
                                 * is it a function or not
                                 */
                                function isFunction(obj) {
                                    return typeof obj === 'function';
                                }
                                /**
                                 * is it an object or not
                                 */
                                function isObject(obj) {
                                    // incase of arrow function and array
                                    return Object(obj) === obj && String(obj) === '[object Object]' && !isFunction(obj) && !isArray(obj);
                                }
                                /**
                                 * to tell you if it's a real number
                                 */
                                function isNumber(obj) {
                                    return typeof obj === 'number';
                                }
                                /**
                                 * to tell you if the val can be transfer into number
                                 */
                                function isNumeric(obj) {
                                    return !isArray(obj) && obj - Number.parseFloat(obj) + 1 >= 0;
                                }
                                /**
                                 * is it an interget or not
                                 */
                                function isInteger(num) {
                                    return Number.isInteger(num);
                                }
                                /**
                                 * return true when the value is "", {}, [], 0, null, undefined, false.
                                 */
                                function isEmpty(obj) {
                                    if (isArray(obj)) {
                                        return obj.length === 0;
                                    } else if (isObject(obj)) {
                                        return Object.keys(obj).length === 0;
                                    } else {
                                        return !obj;
                                    }
                                }
                                /**
                                 * is it an event or not
                                 */
                                function isEvent(obj) {
                                    return obj instanceof Event || (obj && obj.originalEvent) instanceof Event;
                                }
                                /**
                                 * is it a blob
                                 */
                                function isBlob(obj) {
                                    return obj instanceof Blob;
                                }
                                /**
                                 * is it a file uploaded by user through file inpue
                                 */
                                function isFile(obj) {
                                    return isBlob(obj) && isString(obj.name);
                                }
                                /**
                                 * is it a date
                                 */
                                function isDate(obj) {
                                    return Object.prototype.toString.call(obj) === '[object Date]';
                                }
                                /**
                                 * is it a string
                                 */
                                function isString(str) {
                                    return typeof str === 'string' || str instanceof String;
                                }
                                /**
                                 * is Boolean or not
                                 */
                                function isBoolean(bool) {
                                    return typeof bool === 'boolean';
                                }
                                /**
                                 * is a promise or not
                                 */
                                function isPromise(obj) {
                                    return !!obj && ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
                                }
                                /**
                                 * is Primitive type or not, whick means it will return true when data is number/string/boolean/undefined/null
                                 */
                                function isPrimitive(val) {
                                    return isVoid(val) || isBoolean(val) || isString(val) || isNumber(val);
                                }
                                /**
                                 * is it an url, but this test require the url to have an protocol
                                 */
                                function isUrl(str) {
                                    return isString(str) && !!str.match(/^((https?|ftp|rtsp|mms):\/\/)(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?(([0-9]{1,3}\.){3}[0-9]{1,3}|([0-9a-z_!~*'()-]+\.)*([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]\.[a-z]{2,6}|localhost)(:[0-9]{1,4})?((\/?)|(\/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+\/?)$/i);
                                }
                                /**
                                 * to test if a HTML node
                                 */
                                function isNode(obj) {
                                    return !!((typeof Node === 'undefined' ? 'undefined' : _typeof(Node)) === 'object' ? obj instanceof Node : obj && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && typeof obj.nodeType === 'number' && typeof obj.nodeName === 'string');
                                }
                                /**
                                 * to test if a HTML element
                                 */
                                function isElement(obj) {
                                    return !!((typeof HTMLElement === 'undefined' ? 'undefined' : _typeof(HTMLElement)) === 'object' ? obj instanceof HTMLElement : obj && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && obj !== null && obj.nodeType === 1 && typeof obj.nodeName === 'string');
                                }
                                /**
                                 * check if node A is node B's parent or not
                                 */
                                function isChildNode(parent, child) {
                                    if (!isNode(parent) || !isNode(child)) {
                                        return false;
                                    }
                                    return child.parentNode === parent;
                                }
                                /**
                                 * check if node B is node A's posterrity or not
                                 */
                                function isPosterityNode(parent, child) {
                                    if (!isNode(parent) || !isNode(child)) {
                                        return false;
                                    }
                                    while (child.parentNode) {
                                        child = child.parentNode;
                                        if (child === parent) {
                                            return true;
                                        }
                                    }
                                    return false;
                                }
                                /**
                                 * check if the string is an HTMLString
                                 */
                                function isHTMLString(str) {
                                    return (/<[^>]+?>/.test(str)
                                    );
                                }
                                /**
                                 * check if is an error
                                 */
                                function isError(val) {
                                    return val instanceof Error;
                                }
                                /**
                                 * check if is an RegExp
                                 */
                                function isRegExp(val) {
                                    return val instanceof RegExp;
                                }
                                exports.defined = defined;
                                exports.isVoid = isVoid;
                                exports.isArray = isArray;
                                exports.isFunction = isFunction;
                                exports.isObject = isObject;
                                exports.isNumber = isNumber;
                                exports.isNumeric = isNumeric;
                                exports.isInteger = isInteger;
                                exports.isEmpty = isEmpty;
                                exports.isEvent = isEvent;
                                exports.isBlob = isBlob;
                                exports.isFile = isFile;
                                exports.isDate = isDate;
                                exports.isString = isString;
                                exports.isBoolean = isBoolean;
                                exports.isPromise = isPromise;
                                exports.isPrimitive = isPrimitive;
                                exports.isUrl = isUrl;
                                exports.isNode = isNode;
                                exports.isElement = isElement;
                                exports.isChildNode = isChildNode;
                                exports.isPosterityNode = isPosterityNode;
                                exports.isHTMLString = isHTMLString;
                                exports.isError = isError;
                                exports.isRegExp = isRegExp;
                                Object.defineProperty(exports, '__esModule', { value: true });
                            });
                            /***/
                        },
                        /* 1 */
                        /***/function (module, exports, __webpack_require__) {
                            "use strict";

                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            exports.caf = exports.raf = exports.inBrowser = undefined;
                            exports.makeArray = makeArray;
                            exports.transObjectAttrIntoArray = transObjectAttrIntoArray;
                            exports.runRejectableQueue = runRejectableQueue;
                            exports.runStoppableQueue = runStoppableQueue;
                            exports.decodeUTF8 = decodeUTF8;
                            exports.debounce = debounce;
                            exports.throttle = throttle;
                            exports.strRepeat = strRepeat;
                            exports.formatTime = formatTime;
                            exports.appendCSS = appendCSS;
                            exports.formatDate = formatDate;
                            exports.getLocalStorage = getLocalStorage;
                            exports.setLocalStorage = setLocalStorage;
                            var _toxicPredicateFunctions = __webpack_require__(0);
                            // **********************  judgement   ************************
                            /**
                             * check if the code running in browser environment (not include worker env)
                             * @returns {Boolean}
                             */
                            var inBrowser = exports.inBrowser = typeof window !== 'undefined' && Object.prototype.toString.call(window) !== '[object Object]';
                            // **********************  对象操作  ************************
                            /**
                             * 转变一个类数组对象为数组
                             */
                            // @flow
                            function makeArray(obj) {
                                return Array.from(obj);
                            }
                            /**
                             * sort Object attributes by function
                             * and transfer them into array
                             * @param  {Object} obj Object form from numric
                             * @param  {Function} fn sort function
                             * @return {Array} the sorted attirbutes array
                             */
                            function transObjectAttrIntoArray(obj, fn) {
                                if (fn === void 0) {
                                    fn = function fn(a, b) {
                                        return +a - +b;
                                    };
                                }
                                return Object.keys(obj).sort(fn).reduce(function (order, key) {
                                    return order.concat(obj[key]);
                                }, []);
                            }
                            /**
                             * run a queue one by one.If include function reject or return false it will stop
                             * @param  {Array} queue the queue which we want to run one by one
                             * @return {Promise}    tell us whether a queue run finished
                             */
                            function runRejectableQueue(queue) {
                                var args = [];
                                for (var _i = 1; _i < arguments.length; _i++) {
                                    args[_i - 1] = arguments[_i];
                                }
                                return new Promise(function (resolve, reject) {
                                    var step = function step(index) {
                                        if (index >= queue.length) {
                                            resolve();
                                            return;
                                        }
                                        var result = (0, _toxicPredicateFunctions.isFunction)(queue[index]) ? queue[index].apply(queue, args) : queue[index];
                                        if (result === false) return reject('stop');
                                        return Promise.resolve(result).then(function () {
                                            return step(index + 1);
                                        }).catch(function (err) {
                                            return reject(err || 'stop');
                                        });
                                    };
                                    step(0);
                                });
                            }
                            /**
                             * run a queue one by one.If include function return false it will stop
                             * @param  {Array} queue the queue which we want to run one by one
                             * @return {boolean} tell the user if the queue run finished
                             */
                            function runStoppableQueue(queue) {
                                var args = [];
                                for (var _i = 1; _i < arguments.length; _i++) {
                                    args[_i - 1] = arguments[_i];
                                }
                                var step = function step(index) {
                                    if (index >= queue.length) {
                                        return true;
                                    }
                                    var result = (0, _toxicPredicateFunctions.isFunction)(queue[index]) ? queue[index].apply(queue, args) : queue[index];
                                    if (result === false) return false;
                                    return step(++index);
                                };
                                return step(0);
                            }
                            function checkContinuation(uint8array, start, checkLength) {
                                var array = uint8array;
                                if (start + checkLength < array.length) {
                                    while (checkLength--) {
                                        if ((array[++start] & 0xC0) !== 0x80) {
                                            return false;
                                        }
                                    }
                                    return true;
                                }
                                return false;
                            }
                            // decodeUTF8
                            function decodeUTF8(uint8array) {
                                var out = [];
                                var input = uint8array;
                                var i = 0;
                                var length = uint8array.length;
                                while (i < length) {
                                    if (input[i] < 0x80) {
                                        out.push(String.fromCharCode(input[i]));
                                        ++i;
                                        continue;
                                    } else if (input[i] < 0xC0) {
                                        // fallthrough
                                    } else if (input[i] < 0xE0) {
                                        if (checkContinuation(input, i, 1)) {
                                            var ucs4 = (input[i] & 0x1F) << 6 | input[i + 1] & 0x3F;
                                            if (ucs4 >= 0x80) {
                                                out.push(String.fromCharCode(ucs4 & 0xFFFF));
                                                i += 2;
                                                continue;
                                            }
                                        }
                                    } else if (input[i] < 0xF0) {
                                        if (checkContinuation(input, i, 2)) {
                                            var ucs4 = (input[i] & 0xF) << 12 | (input[i + 1] & 0x3F) << 6 | input[i + 2] & 0x3F;
                                            if (ucs4 >= 0x800 && (ucs4 & 0xF800) !== 0xD800) {
                                                out.push(String.fromCharCode(ucs4 & 0xFFFF));
                                                i += 3;
                                                continue;
                                            }
                                        }
                                    } else if (input[i] < 0xF8) {
                                        if (checkContinuation(input, i, 3)) {
                                            var ucs4 = (input[i] & 0x7) << 18 | (input[i + 1] & 0x3F) << 12 | (input[i + 2] & 0x3F) << 6 | input[i + 3] & 0x3F;
                                            if (ucs4 > 0x10000 && ucs4 < 0x110000) {
                                                ucs4 -= 0x10000;
                                                out.push(String.fromCharCode(ucs4 >>> 10 | 0xD800));
                                                out.push(String.fromCharCode(ucs4 & 0x3FF | 0xDC00));
                                                i += 4;
                                                continue;
                                            }
                                        }
                                    }
                                    out.push(String.fromCharCode(0xFFFD));
                                    ++i;
                                }
                                return out.join('');
                            }
                            function debounce(func, wait, immediate) {
                                // immediate默认为false
                                var timeout, args, context, timestamp, result;
                                var later = function later() {
                                    // 当wait指定的时间间隔期间多次调用_.debounce返回的函数，则会不断更新timestamp的值，导致last < wait && last >= 0一直为true，从而不断启动新的计时器延时执行func
                                    var last = new Date() - timestamp;
                                    if (last < wait && last >= 0) {
                                        timeout = setTimeout(later, wait - last);
                                    } else {
                                        timeout = null;
                                        if (!immediate) {
                                            result = func.apply(context, args);
                                            if (!timeout) context = args = null;
                                        }
                                    }
                                };
                                return function () {
                                    context = this;
                                    args = arguments;
                                    timestamp = new Date();
                                    // 第一次调用该方法时，且immediate为true，则调用func函数
                                    var callNow = immediate && !timeout;
                                    // 在wait指定的时间间隔内首次调用该方法，则启动计时器定时调用func函数
                                    if (!timeout) timeout = setTimeout(later, wait);
                                    if (callNow) {
                                        result = func.apply(context, args);
                                        context = args = null;
                                    }
                                    return result;
                                };
                            }
                            /**
                             * 函数节流（控制函数执行频率）
                             * @param  {Function} func 要节流控制的函数，必填
                             * @return {Number}   wait 等待时长
                             * @return {Object}   options {
                             *                      leading<是否首次调用立即执行，否：则按wait设定等待到期后调用才执行>:false,
                             *                      trailing<是否在调用并未到期时启用定时器，以保证一定执行>:true
                             *                    }
                             * @return {Object}   cxt 上下文对象
                             * @return {Function}
                             */
                            function throttle(func, wait, options, cxt) {
                                /* options的默认值
                                 *  表示首次调用返回值方法时，会马上调用func；否则仅会记录当前时刻，当第二次调用的时间间隔超过wait时，才调用func。
                                 *  options.leading = true;
                                 * 表示当调用方法时，未到达wait指定的时间间隔，则启动计时器延迟调用func函数，若后续在既未达到wait指定的时间间隔和func函数又未被调用的情况下调用返回值方法，则被调用请求将被丢弃。
                                 *  options.trailing = true;
                                 * 注意：当options.trailing = false时，效果与上面的简单实现效果相同
                                 */
                                var context, args, result;
                                var timeout = null;
                                var previous = 0;
                                if (!options) options = {};
                                var later = function later() {
                                    previous = options.leading === false ? 0 : new Date() - 0;
                                    timeout = null;
                                    result = func.apply(context, args);
                                    if (!timeout) context = args = null;
                                };
                                wait = wait || 0;
                                return function () {
                                    var now = new Date();
                                    if (!previous && options.leading === false) previous = now;
                                    // 计算剩余时间
                                    var remaining = wait - (now - previous);
                                    if (cxt) {
                                        context = cxt;
                                    } else {
                                        context = this;
                                    }
                                    args = arguments;
                                    // 当到达wait指定的时间间隔，则调用func函数
                                    // 精彩之处：按理来说remaining <= 0已经足够证明已经到达wait的时间间隔，但这里还考虑到假如客户端修改了系统时间则马上执行func函数。
                                    if (remaining <= 0 || remaining > wait) {
                                        // 由于setTimeout存在最小时间精度问题，因此会存在到达wait的时间间隔，但之前设置的setTimeout操作还没被执行，因此为保险起见，这里先清理setTimeout操作
                                        if (timeout) {
                                            clearTimeout(timeout);
                                            timeout = null;
                                        }
                                        previous = now;
                                        result = func.apply(context, args);
                                        if (!timeout) context = args = null;
                                    } else if (!timeout && options.trailing !== false) {
                                        // options.trailing=true时，延时执行func函数
                                        timeout = setTimeout(later, remaining);
                                    }
                                    return result;
                                };
                            }
                            // requestAnimationFrame
                            var raf = exports.raf = inBrowser && (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame) || function (cb) {
                                return setTimeout(cb, 17);
                            };
                            // cancelAnimationFrame
                            var caf = exports.caf = inBrowser && (window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.msCancelAnimationFrame || window.oCancelAnimationFrame) || function (id) {
                                clearTimeout(id);
                            };
                            // 根据要求的位数，将9格式化为 09\009\0009...
                            function strRepeat(num, bit) {
                                var pBit = bit;
                                num = "" + (num || '');
                                var numLen = num.length;
                                bit = (bit || numLen) - numLen;
                                var paddingStr = bit > 0 ? num.repeat ? '0'.repeat(bit) : new Array(bit + 1).join('0') : '';
                                return (paddingStr + num).slice(0, pBit);
                            }
                            // video 时间格式化
                            function formatTime(time) {
                                var hh = Math.floor(time / 3600);
                                time = Math.floor(time % 3600);
                                var mm = strRepeat(Math.floor(time / 60), 2);
                                time = Math.floor(time % 60);
                                var ss = strRepeat(time, 2);
                                return hh >= 1 ? hh + ":" + mm + ":" + ss : mm + ":" + ss;
                            }
                            /**
                             * 追加样式代码到head的style标签，不存在则创建
                             * @param {String} cssText 样式文本
                             * @return {HTMLElement}
                             */
                            function appendCSS(cssText) {
                                var doc = document;
                                var styleEl = doc.querySelector('style');
                                if (!styleEl) {
                                    styleEl = doc.createElement('style');
                                    var header = doc.querySelector('head');
                                    header && header.appendChild(styleEl);
                                }
                                styleEl.appendChild(doc.createTextNode(cssText));
                                return styleEl;
                            }
                            /**
                             * 格式化日期对象为：年-月-日 时:分:秒.毫秒
                             * @param {Date} date Date日期对象
                             * @param {String} pattern 要输出的日期格式，默认：`yyyy-MM-dd hh:mm:ss.i`
                             * @return {String}
                             */
                            function formatDate(date, pattern) {
                                if (date === void 0) {
                                    date = new Date();
                                }
                                if (pattern === void 0) {
                                    pattern = 'yyyy-MM-dd hh:mm:ss.i';
                                }
                                var year = date.getFullYear().toString();
                                var fields = {
                                    M: date.getMonth() + 1,
                                    d: date.getDate(),
                                    h: date.getHours(),
                                    m: date.getMinutes(),
                                    s: date.getSeconds(),
                                    i: date.getMilliseconds()
                                };
                                pattern = pattern.replace(/(y+)/ig, function (_, yearPattern) {
                                    return year.substr(4 - Math.min(4, yearPattern.length));
                                });
                                var _loop_1 = function _loop_1(i) {
                                    pattern = pattern.replace(new RegExp('(' + i + '+)', 'g'), function (_, pattStr) {
                                        return (fields[i] < 10 && pattStr.length > 1 ? '0' : '') + fields[i];
                                    });
                                };
                                for (var i in fields) {
                                    _loop_1(i);
                                }
                                return pattern;
                            }
                            /**
                             * 读取本地存储的值（不支持localStorage则降级到cookie）
                             * @param {String} key 目标数据key
                             * @return {String}
                             */
                            function getLocalStorage(key) {
                                try {
                                    return window.localStorage.getItem(key);
                                } catch (e) {
                                    try {
                                        var regRt = document.cookie.match(new RegExp('(^| )' + key + '=([^;]*)(;|$)'));
                                        return (0, _toxicPredicateFunctions.isArray)(regRt) ? unescape(regRt[2]) : '';
                                    } catch (e) {
                                        return '';
                                    }
                                }
                            }
                            /**
                             * 将指定key对应值写入本地存储（不支持localStorage则降级到cookie）
                             * @param {String} key
                             * @param {String} val
                             * @return {String}
                             */
                            function setLocalStorage(key, val) {
                                try {
                                    window.localStorage.setItem(key, val);
                                } catch (e) {
                                    var expires = new Date();
                                    // 默认存储300天
                                    expires.setTime(expires.getTime() + 24 * 3600 * 1000 * 300);
                                    try {
                                        document.cookie = key + '=' + escape(val) + ';expires=' + expires.toUTCString() + ';path=/;';
                                    } catch (e) {
                                        console.error(e);
                                    }
                                }
                            }
                            /***/
                        },
                        /* 2 */
                        /***/function (module, exports, __webpack_require__) {
                            "use strict";

                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            exports.CustEvent = undefined;
                            var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
                                return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
                            } : function (obj) {
                                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
                            };
                            exports.emitEventCache = emitEventCache;
                            exports.addEventCache = addEventCache;
                            exports.removeEventCache = removeEventCache;
                            var _toxicPredicateFunctions = __webpack_require__(0);
                            /**
                            * @module event
                            * @author huzunjie
                            * @description 自定义事件基础类
                            */
                            /* 缓存事件监听方法及包装，内部数据格式：
                             * targetIndex_<type:'click|mouseup|done'>: [ [
                             *   function(){ ... handler ... },
                             *   function(){ ... handlerWrap ... handler.apply(target, arguments) ... },
                             *   isOnce
                             * ]]
                             */
                            var _evtListenerCache = Object.create(null);
                            _evtListenerCache.count = 0;
                            /**
                             * 得到某对象的某事件类型对应的监听队列数组
                             * @param  {Object}  target 发生事件的对象
                             * @param {String} type 事件类型(这里的时间类型不只是名称，还是缓存标识，可以通过添加后缀来区分)
                             * @return {Array}
                             */
                            function getEvtTypeCache(target, type) {
                                var evtId = target.__evt_id;
                                if (!evtId) {
                                    /* 设置__evt_id不可枚举 */
                                    Object.defineProperty(target, '__evt_id', {
                                        writable: true,
                                        enumerable: false,
                                        configurable: true
                                    });
                                    /* 空对象初始化绑定索引 */
                                    evtId = target.__evt_id = ++_evtListenerCache.count;
                                }
                                var typeCacheKey = evtId + '_' + type;
                                var evtTypeCache = _evtListenerCache[typeCacheKey];
                                if (!evtTypeCache) {
                                    evtTypeCache = _evtListenerCache[typeCacheKey] = [];
                                }
                                return evtTypeCache;
                            }
                            /**
                             * 触发事件监听方法
                             * @param  {Object}  target 发生事件的对象
                             * @param {String} type 事件类型
                             * @param {Object} eventObj 触发事件时要传回的event对象
                             * @return {undefined}
                             */
                            function emitEventCache(target, type, eventObj) {
                                var evt = Object.create(null);
                                evt.type = type;
                                evt.target = target;
                                if (eventObj) {
                                    Object.assign(evt, (0, _toxicPredicateFunctions.isObject)(eventObj) ? eventObj : { data: eventObj });
                                }
                                getEvtTypeCache(target, type).forEach(function (item) {
                                    (item[1] || item[0]).apply(target, [evt]);
                                });
                            }
                            /**
                             * 添加事件监听到缓存
                             * @param  {Object}  target 发生事件的对象
                             * @param {String} type 事件类型
                             * @param {Function} handler 监听函数
                             * @param {Boolean} isOnce 是否单次执行
                             * @param {Function} handlerWrap
                             * @return {undefined}
                             */
                            function addEventCache(target, type, handler, isOnce, handlerWrap) {
                                if (isOnce === void 0) {
                                    isOnce = false;
                                }
                                if ((0, _toxicPredicateFunctions.isFunction)(isOnce) && !handlerWrap) {
                                    handlerWrap = isOnce;
                                    isOnce = undefined;
                                }
                                var handlers = [handler, undefined, isOnce];
                                if (isOnce && !handlerWrap) {
                                    handlerWrap = function handlerWrap() {
                                        var args = [];
                                        for (var _i = 0; _i < arguments.length; _i++) {
                                            args[_i] = arguments[_i];
                                        }
                                        removeEventCache(target, type, handler, isOnce);
                                        handler.apply(target, args);
                                    };
                                }
                                if (handlerWrap) {
                                    handlers[1] = handlerWrap;
                                }
                                getEvtTypeCache(target, type).push(handlers);
                            }
                            /**
                             * 移除事件监听
                             * @param  {Object}  target 发生事件的对象
                             * @param {String} type 事件类型
                             * @param {Function} handler 监听函数
                             * @return {undefined}
                             */
                            function removeEventCache(target, type, handler, isOnce) {
                                if (isOnce === void 0) {
                                    isOnce = false;
                                }
                                var typeCache = getEvtTypeCache(target, type);
                                if (handler || isOnce) {
                                    /* 有指定 handler 则清除对应监听 */
                                    var handlerId_1 = -1;
                                    var handlerWrap_1;
                                    typeCache.find(function (item, i) {
                                        if ((!handler || item[0] === handler) && (!isOnce || item[2])) {
                                            handlerId_1 = i;
                                            handlerWrap_1 = item[1];
                                            return true;
                                        }
                                    });
                                    if (handlerId_1 !== -1) {
                                        typeCache.splice(handlerId_1, 1);
                                    }
                                    return handlerWrap_1;
                                } else {
                                    /* 未指定 handler 则清除type对应的所有监听 */
                                    typeCache.length = 0;
                                }
                            }
                            /**
                             * @class CustEvent
                             * @description
                             * Event 自定义事件类
                             * 1. 可以使用不传参得到的实例作为eventBus使用
                             * 2. 可以通过指定target，用多个实例操作同一target对象的事件管理
                             * 3. 当设定target时，可以通过设置assign为true，来给target实现"on\once\off\emit"方法
                             * @param  {Object}  target 发生事件的对象（空则默认为event实例）
                             * @param  {Boolean}  assign 是否将"on\once\off\emit"方法实现到target对象上
                             * @return {event}
                             */
                            var CustEvent = /** @class */function () {
                                function CustEvent(target, assign) {
                                    var _this = this;
                                    /* 设置__target不可枚举 */
                                    Object.defineProperty(this, '__target', {
                                        writable: true,
                                        enumerable: false,
                                        configurable: true
                                    });
                                    this.__target = this;
                                    if (target) {
                                        if ((typeof target === 'undefined' ? 'undefined' : _typeof(target)) !== 'object') {
                                            throw new Error('CusEvent target are not object');
                                        }
                                        this.__target = target;
                                        /* 为target实现on\once\off\emit */
                                        if (assign) {
                                            ['on', 'once', 'off', 'emit'].forEach(function (mth) {
                                                target[mth] = _this[mth];
                                            });
                                        }
                                    }
                                }
                                /**
                                 * 添加事件监听
                                 * @param {String} type 事件类型
                                 * @param {Function} handler 监听函数
                                 * @param {Boolean} isOnce 单次监听类型
                                 * @return {event}
                                 */
                                CustEvent.prototype.on = function (type, handler, isOnce) {
                                    if (isOnce === void 0) {
                                        isOnce = false;
                                    }
                                    addEventCache(this.__target, type, handler, isOnce);
                                    return this;
                                };
                                /**
                                 * 添加事件监听,并且只执行一次
                                 * @param {String} type 事件类型
                                 * @param {Function} handler 监听函数
                                 * @return {event}
                                 */
                                CustEvent.prototype.once = function (type, handler) {
                                    return this.on(type, handler, true);
                                };
                                /**
                                 * 移除事件监听
                                 * @param {String} type 事件类型
                                 * @param {Function} handler 监听函数(不指定handler则清除type对应的所有事件监听)
                                 * @param {Boolean} isOnce 单次监听类型
                                 * @return {event}
                                 */
                                CustEvent.prototype.off = function (type, handler, isOnce) {
                                    if (isOnce === void 0) {
                                        isOnce = false;
                                    }
                                    removeEventCache(this.__target, type, handler, isOnce);
                                    return this;
                                };
                                /**
                                 * 触发事件监听函数
                                 * @param {String} type 事件类型
                                 * @return {event}
                                 */
                                CustEvent.prototype.emit = function (type, data) {
                                    emitEventCache(this.__target, type, { data: data });
                                    return this;
                                };
                                return CustEvent;
                            }();
                            exports.CustEvent = CustEvent;
                            /***/
                        },
                        /* 3 */
                        /***/function (module, exports, __webpack_require__) {
                            module.exports = __webpack_require__(4);
                            /***/
                        },
                        /* 4 */
                        /***/function (module, exports, __webpack_require__) {
                            "use strict";

                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            var _toxicUtils = __webpack_require__(5);
                            var ToxicUtils = _interopRequireWildcard(_toxicUtils);
                            var _toxicPredicateFunctions = __webpack_require__(0);
                            var Predicate = _interopRequireWildcard(_toxicPredicateFunctions);
                            var _utils = __webpack_require__(1);
                            var Util = _interopRequireWildcard(_utils);
                            var _events = __webpack_require__(2);
                            var Events = _interopRequireWildcard(_events);
                            var _dom = __webpack_require__(6);
                            var Dom = _interopRequireWildcard(_dom);
                            var _log = __webpack_require__(7);
                            var _log2 = _interopRequireDefault(_log);
                            var _uaParserJs = __webpack_require__(8);
                            var _uaParserJs2 = _interopRequireDefault(_uaParserJs);
                            function _interopRequireDefault(obj) {
                                return obj && obj.__esModule ? obj : { default: obj };
                            }
                            function _interopRequireWildcard(obj) {
                                if (obj && obj.__esModule) {
                                    return obj;
                                } else {
                                    var newObj = {};
                                    if (obj != null) {
                                        for (var key in obj) {
                                            if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
                                        }
                                    }
                                    newObj.default = obj;
                                    return newObj;
                                }
                            }
                            var __assign = undefined && undefined.__assign || Object.assign || function (t) {
                                for (var s, i = 1, n = arguments.length; i < n; i++) {
                                    s = arguments[i];
                                    for (var p in s) {
                                        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                                    }
                                }
                                return t;
                            };
                            // @flow
                            exports.default = __assign({}, ToxicUtils, Predicate, Util, Events, Dom, { Log: _log2.default,
                                UAParser: _uaParserJs2.default });
                            /***/
                        },
                        /* 5 */
                        /***/function (module, exports, __webpack_require__) {
                            /**
                             * toxic-utils v0.2.0
                             * (c) 2017 toxic-johann
                             * Released under MIT
                             */
                            (function (global, factory) {
                                true ? factory(exports) : typeof define === 'function' && define.amd ? define(['exports'], factory) : factory(global.toxicUtils = {});
                            })(this, function (exports) {
                                'use strict';

                                function unwrapExports(x) {
                                    return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
                                }
                                function createCommonjsModule(fn, module) {
                                    return module = { exports: {} }, fn(module, module.exports), module.exports;
                                }
                                // 7.1.4 ToInteger
                                var ceil = Math.ceil;
                                var floor = Math.floor;
                                var _toInteger = function _toInteger(it) {
                                    return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
                                };
                                // 7.2.1 RequireObjectCoercible(argument)
                                var _defined = function _defined(it) {
                                    if (it == undefined) throw TypeError("Can't call method on  " + it);
                                    return it;
                                };
                                // true  -> String#at
                                // false -> String#codePointAt
                                var _stringAt = function _stringAt(TO_STRING) {
                                    return function (that, pos) {
                                        var s = String(_defined(that));
                                        var i = _toInteger(pos);
                                        var l = s.length;
                                        var a, b;
                                        if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
                                        a = s.charCodeAt(i);
                                        return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
                                    };
                                };
                                var _library = true;
                                var _global = createCommonjsModule(function (module) {
                                    // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
                                    var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self
                                    // eslint-disable-next-line no-new-func
                                    : Function('return this')();
                                    if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
                                });
                                var _core = createCommonjsModule(function (module) {
                                    var core = module.exports = { version: '2.5.1' };
                                    if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
                                });
                                var _core_1 = _core.version;
                                var _aFunction = function _aFunction(it) {
                                    if (typeof it != 'function') throw TypeError(it + ' is not a function!');
                                    return it;
                                };
                                // optional / simple context binding
                                var _ctx = function _ctx(fn, that, length) {
                                    _aFunction(fn);
                                    if (that === undefined) return fn;
                                    switch (length) {
                                        case 1:
                                            return function (a) {
                                                return fn.call(that, a);
                                            };
                                        case 2:
                                            return function (a, b) {
                                                return fn.call(that, a, b);
                                            };
                                        case 3:
                                            return function (a, b, c) {
                                                return fn.call(that, a, b, c);
                                            };
                                    }
                                    return function () {
                                        return fn.apply(that, arguments);
                                    };
                                };
                                var _isObject = function _isObject(it) {
                                    return (typeof it === 'undefined' ? 'undefined' : _typeof2(it)) === 'object' ? it !== null : typeof it === 'function';
                                };
                                var _anObject = function _anObject(it) {
                                    if (!_isObject(it)) throw TypeError(it + ' is not an object!');
                                    return it;
                                };
                                var _fails = function _fails(exec) {
                                    try {
                                        return !!exec();
                                    } catch (e) {
                                        return true;
                                    }
                                };
                                // Thank's IE8 for his funny defineProperty
                                var _descriptors = !_fails(function () {
                                    return Object.defineProperty({}, 'a', { get: function get() {
                                            return 7;
                                        } }).a != 7;
                                });
                                var document = _global.document;
                                // typeof document.createElement is 'object' in old IE
                                var is = _isObject(document) && _isObject(document.createElement);
                                var _domCreate = function _domCreate(it) {
                                    return is ? document.createElement(it) : {};
                                };
                                var _ie8DomDefine = !_descriptors && !_fails(function () {
                                    return Object.defineProperty(_domCreate('div'), 'a', { get: function get() {
                                            return 7;
                                        } }).a != 7;
                                });
                                // 7.1.1 ToPrimitive(input [, PreferredType])
                                // instead of the ES6 spec version, we didn't implement @@toPrimitive case
                                // and the second argument - flag - preferred type is a string
                                var _toPrimitive = function _toPrimitive(it, S) {
                                    if (!_isObject(it)) return it;
                                    var fn, val;
                                    if (S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
                                    if (typeof (fn = it.valueOf) == 'function' && !_isObject(val = fn.call(it))) return val;
                                    if (!S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
                                    throw TypeError("Can't convert object to primitive value");
                                };
                                var dP = Object.defineProperty;
                                var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
                                    _anObject(O);
                                    P = _toPrimitive(P, true);
                                    _anObject(Attributes);
                                    if (_ie8DomDefine) try {
                                        return dP(O, P, Attributes);
                                    } catch (e) {/* empty */}
                                    if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
                                    if ('value' in Attributes) O[P] = Attributes.value;
                                    return O;
                                };
                                var _objectDp = {
                                    f: f
                                };
                                var _propertyDesc = function _propertyDesc(bitmap, value) {
                                    return {
                                        enumerable: !(bitmap & 1),
                                        configurable: !(bitmap & 2),
                                        writable: !(bitmap & 4),
                                        value: value
                                    };
                                };
                                var _hide = _descriptors ? function (object, key, value) {
                                    return _objectDp.f(object, key, _propertyDesc(1, value));
                                } : function (object, key, value) {
                                    object[key] = value;
                                    return object;
                                };
                                var PROTOTYPE = 'prototype';
                                var $export = function $export(type, name, source) {
                                    var IS_FORCED = type & $export.F;
                                    var IS_GLOBAL = type & $export.G;
                                    var IS_STATIC = type & $export.S;
                                    var IS_PROTO = type & $export.P;
                                    var IS_BIND = type & $export.B;
                                    var IS_WRAP = type & $export.W;
                                    var exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
                                    var expProto = exports[PROTOTYPE];
                                    var target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] : (_global[name] || {})[PROTOTYPE];
                                    var key, own, out;
                                    if (IS_GLOBAL) source = name;
                                    for (key in source) {
                                        // contains in native
                                        own = !IS_FORCED && target && target[key] !== undefined;
                                        if (own && key in exports) continue;
                                        // export native or passed
                                        out = own ? target[key] : source[key];
                                        // prevent global pollution for namespaces
                                        exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
                                        // bind timers to global for call from export context
                                        : IS_BIND && own ? _ctx(out, _global)
                                        // wrap global constructors for prevent change them in library
                                        : IS_WRAP && target[key] == out ? function (C) {
                                            var F = function F(a, b, c) {
                                                if (this instanceof C) {
                                                    switch (arguments.length) {
                                                        case 0:
                                                            return new C();
                                                        case 1:
                                                            return new C(a);
                                                        case 2:
                                                            return new C(a, b);
                                                    }
                                                    return new C(a, b, c);
                                                }
                                                return C.apply(this, arguments);
                                            };
                                            F[PROTOTYPE] = C[PROTOTYPE];
                                            return F;
                                            // make static versions for prototype methods
                                        }(out) : IS_PROTO && typeof out == 'function' ? _ctx(Function.call, out) : out;
                                        // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
                                        if (IS_PROTO) {
                                            (exports.virtual || (exports.virtual = {}))[key] = out;
                                            // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
                                            if (type & $export.R && expProto && !expProto[key]) _hide(expProto, key, out);
                                        }
                                    }
                                };
                                // type bitmap
                                $export.F = 1; // forced
                                $export.G = 2; // global
                                $export.S = 4; // static
                                $export.P = 8; // proto
                                $export.B = 16; // bind
                                $export.W = 32; // wrap
                                $export.U = 64; // safe
                                $export.R = 128; // real proto method for `library`
                                var _export = $export;
                                var _redefine = _hide;
                                var hasOwnProperty = {}.hasOwnProperty;
                                var _has = function _has(it, key) {
                                    return hasOwnProperty.call(it, key);
                                };
                                var _iterators = {};
                                var toString = {}.toString;
                                var _cof = function _cof(it) {
                                    return toString.call(it).slice(8, -1);
                                };
                                // fallback for non-array-like ES3 and non-enumerable old V8 strings
                                // eslint-disable-next-line no-prototype-builtins
                                var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
                                    return _cof(it) == 'String' ? it.split('') : Object(it);
                                };
                                // to indexed object, toObject with fallback for non-array-like ES3 strings
                                var _toIobject = function _toIobject(it) {
                                    return _iobject(_defined(it));
                                };
                                // 7.1.15 ToLength
                                var min = Math.min;
                                var _toLength = function _toLength(it) {
                                    return it > 0 ? min(_toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
                                };
                                var max = Math.max;
                                var min$1 = Math.min;
                                var _toAbsoluteIndex = function _toAbsoluteIndex(index, length) {
                                    index = _toInteger(index);
                                    return index < 0 ? max(index + length, 0) : min$1(index, length);
                                };
                                // false -> Array#indexOf
                                // true  -> Array#includes
                                var _arrayIncludes = function _arrayIncludes(IS_INCLUDES) {
                                    return function ($this, el, fromIndex) {
                                        var O = _toIobject($this);
                                        var length = _toLength(O.length);
                                        var index = _toAbsoluteIndex(fromIndex, length);
                                        var value;
                                        // Array#includes uses SameValueZero equality algorithm
                                        // eslint-disable-next-line no-self-compare
                                        if (IS_INCLUDES && el != el) while (length > index) {
                                            value = O[index++];
                                            // eslint-disable-next-line no-self-compare
                                            if (value != value) return true;
                                            // Array#indexOf ignores holes, Array#includes - not
                                        } else for (; length > index; index++) {
                                            if (IS_INCLUDES || index in O) {
                                                if (O[index] === el) return IS_INCLUDES || index || 0;
                                            }
                                        }
                                        return !IS_INCLUDES && -1;
                                    };
                                };
                                var SHARED = '__core-js_shared__';
                                var store = _global[SHARED] || (_global[SHARED] = {});
                                var _shared = function _shared(key) {
                                    return store[key] || (store[key] = {});
                                };
                                var id = 0;
                                var px = Math.random();
                                var _uid = function _uid(key) {
                                    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
                                };
                                var shared = _shared('keys');
                                var _sharedKey = function _sharedKey(key) {
                                    return shared[key] || (shared[key] = _uid(key));
                                };
                                var arrayIndexOf = _arrayIncludes(false);
                                var IE_PROTO$1 = _sharedKey('IE_PROTO');
                                var _objectKeysInternal = function _objectKeysInternal(object, names) {
                                    var O = _toIobject(object);
                                    var i = 0;
                                    var result = [];
                                    var key;
                                    for (key in O) {
                                        if (key != IE_PROTO$1) _has(O, key) && result.push(key);
                                    } // Don't enum bug & hidden keys
                                    while (names.length > i) {
                                        if (_has(O, key = names[i++])) {
                                            ~arrayIndexOf(result, key) || result.push(key);
                                        }
                                    }
                                    return result;
                                };
                                // IE 8- don't enum bug keys
                                var _enumBugKeys = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');
                                // 19.1.2.14 / 15.2.3.14 Object.keys(O)
                                var _objectKeys = Object.keys || function keys(O) {
                                    return _objectKeysInternal(O, _enumBugKeys);
                                };
                                var _objectDps = _descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
                                    _anObject(O);
                                    var keys = _objectKeys(Properties);
                                    var length = keys.length;
                                    var i = 0;
                                    var P;
                                    while (length > i) {
                                        _objectDp.f(O, P = keys[i++], Properties[P]);
                                    }
                                    return O;
                                };
                                var document$1 = _global.document;
                                var _html = document$1 && document$1.documentElement;
                                // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
                                var IE_PROTO = _sharedKey('IE_PROTO');
                                var Empty = function Empty() {};
                                var PROTOTYPE$1 = 'prototype';
                                // Create object with fake `null` prototype: use iframe Object with cleared prototype
                                var _createDict = function createDict() {
                                    // Thrash, waste and sodomy: IE GC bug
                                    var iframe = _domCreate('iframe');
                                    var i = _enumBugKeys.length;
                                    var lt = '<';
                                    var gt = '>';
                                    var iframeDocument;
                                    iframe.style.display = 'none';
                                    _html.appendChild(iframe);
                                    iframe.src = 'javascript:'; // eslint-disable-line no-script-url
                                    // createDict = iframe.contentWindow.Object;
                                    // html.removeChild(iframe);
                                    iframeDocument = iframe.contentWindow.document;
                                    iframeDocument.open();
                                    iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
                                    iframeDocument.close();
                                    _createDict = iframeDocument.F;
                                    while (i--) {
                                        delete _createDict[PROTOTYPE$1][_enumBugKeys[i]];
                                    }
                                    return _createDict();
                                };
                                var _objectCreate = Object.create || function create(O, Properties) {
                                    var result;
                                    if (O !== null) {
                                        Empty[PROTOTYPE$1] = _anObject(O);
                                        result = new Empty();
                                        Empty[PROTOTYPE$1] = null;
                                        // add "__proto__" for Object.getPrototypeOf polyfill
                                        result[IE_PROTO] = O;
                                    } else result = _createDict();
                                    return Properties === undefined ? result : _objectDps(result, Properties);
                                };
                                var _wks = createCommonjsModule(function (module) {
                                    var store = _shared('wks');
                                    var _Symbol = _global.Symbol;
                                    var USE_SYMBOL = typeof _Symbol == 'function';
                                    var $exports = module.exports = function (name) {
                                        return store[name] || (store[name] = USE_SYMBOL && _Symbol[name] || (USE_SYMBOL ? _Symbol : _uid)('Symbol.' + name));
                                    };
                                    $exports.store = store;
                                });
                                var def = _objectDp.f;
                                var TAG = _wks('toStringTag');
                                var _setToStringTag = function _setToStringTag(it, tag, stat) {
                                    if (it && !_has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
                                };
                                var IteratorPrototype = {};
                                // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
                                _hide(IteratorPrototype, _wks('iterator'), function () {
                                    return this;
                                });
                                var _iterCreate = function _iterCreate(Constructor, NAME, next) {
                                    Constructor.prototype = _objectCreate(IteratorPrototype, { next: _propertyDesc(1, next) });
                                    _setToStringTag(Constructor, NAME + ' Iterator');
                                };
                                // 7.1.13 ToObject(argument)
                                var _toObject = function _toObject(it) {
                                    return Object(_defined(it));
                                };
                                // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
                                var IE_PROTO$2 = _sharedKey('IE_PROTO');
                                var ObjectProto = Object.prototype;
                                var _objectGpo = Object.getPrototypeOf || function (O) {
                                    O = _toObject(O);
                                    if (_has(O, IE_PROTO$2)) return O[IE_PROTO$2];
                                    if (typeof O.constructor == 'function' && O instanceof O.constructor) {
                                        return O.constructor.prototype;
                                    }
                                    return O instanceof Object ? ObjectProto : null;
                                };
                                var ITERATOR = _wks('iterator');
                                var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
                                var FF_ITERATOR = '@@iterator';
                                var KEYS = 'keys';
                                var VALUES = 'values';
                                var returnThis = function returnThis() {
                                    return this;
                                };
                                var _iterDefine = function _iterDefine(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
                                    _iterCreate(Constructor, NAME, next);
                                    var getMethod = function getMethod(kind) {
                                        if (!BUGGY && kind in proto) return proto[kind];
                                        switch (kind) {
                                            case KEYS:
                                                return function keys() {
                                                    return new Constructor(this, kind);
                                                };
                                            case VALUES:
                                                return function values() {
                                                    return new Constructor(this, kind);
                                                };
                                        }
                                        return function entries() {
                                            return new Constructor(this, kind);
                                        };
                                    };
                                    var TAG = NAME + ' Iterator';
                                    var DEF_VALUES = DEFAULT == VALUES;
                                    var VALUES_BUG = false;
                                    var proto = Base.prototype;
                                    var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
                                    var $default = $native || getMethod(DEFAULT);
                                    var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
                                    var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
                                    var methods, key, IteratorPrototype;
                                    // Fix native
                                    if ($anyNative) {
                                        IteratorPrototype = _objectGpo($anyNative.call(new Base()));
                                        if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
                                            // Set @@toStringTag to native iterators
                                            _setToStringTag(IteratorPrototype, TAG, true);
                                            // fix for some old engines
                                            if (!_library && !_has(IteratorPrototype, ITERATOR)) _hide(IteratorPrototype, ITERATOR, returnThis);
                                        }
                                    }
                                    // fix Array#{values, @@iterator}.name in V8 / FF
                                    if (DEF_VALUES && $native && $native.name !== VALUES) {
                                        VALUES_BUG = true;
                                        $default = function values() {
                                            return $native.call(this);
                                        };
                                    }
                                    // Define iterator
                                    if ((!_library || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
                                        _hide(proto, ITERATOR, $default);
                                    }
                                    // Plug for library
                                    _iterators[NAME] = $default;
                                    _iterators[TAG] = returnThis;
                                    if (DEFAULT) {
                                        methods = {
                                            values: DEF_VALUES ? $default : getMethod(VALUES),
                                            keys: IS_SET ? $default : getMethod(KEYS),
                                            entries: $entries
                                        };
                                        if (FORCED) for (key in methods) {
                                            if (!(key in proto)) _redefine(proto, key, methods[key]);
                                        } else _export(_export.P + _export.F * (BUGGY || VALUES_BUG), NAME, methods);
                                    }
                                    return methods;
                                };
                                var $at = _stringAt(true);
                                // 21.1.3.27 String.prototype[@@iterator]()
                                _iterDefine(String, 'String', function (iterated) {
                                    this._t = String(iterated); // target
                                    this._i = 0; // next index
                                    // 21.1.5.2.1 %StringIteratorPrototype%.next()
                                }, function () {
                                    var O = this._t;
                                    var index = this._i;
                                    var point;
                                    if (index >= O.length) return { value: undefined, done: true };
                                    point = $at(O, index);
                                    this._i += point.length;
                                    return { value: point, done: false };
                                });
                                // call something on iterator step with safe closing on error
                                var _iterCall = function _iterCall(iterator, fn, value, entries) {
                                    try {
                                        return entries ? fn(_anObject(value)[0], value[1]) : fn(value);
                                        // 7.4.6 IteratorClose(iterator, completion)
                                    } catch (e) {
                                        var ret = iterator['return'];
                                        if (ret !== undefined) _anObject(ret.call(iterator));
                                        throw e;
                                    }
                                };
                                // check on default Array iterator
                                var ITERATOR$1 = _wks('iterator');
                                var ArrayProto = Array.prototype;
                                var _isArrayIter = function _isArrayIter(it) {
                                    return it !== undefined && (_iterators.Array === it || ArrayProto[ITERATOR$1] === it);
                                };
                                var _createProperty = function _createProperty(object, index, value) {
                                    if (index in object) _objectDp.f(object, index, _propertyDesc(0, value));else object[index] = value;
                                };
                                // getting tag from 19.1.3.6 Object.prototype.toString()
                                var TAG$1 = _wks('toStringTag');
                                // ES3 wrong here
                                var ARG = _cof(function () {
                                    return arguments;
                                }()) == 'Arguments';
                                // fallback for IE11 Script Access Denied error
                                var tryGet = function tryGet(it, key) {
                                    try {
                                        return it[key];
                                    } catch (e) {/* empty */}
                                };
                                var _classof = function _classof(it) {
                                    var O, T, B;
                                    return it === undefined ? 'Undefined' : it === null ? 'Null'
                                    // @@toStringTag case
                                    : typeof (T = tryGet(O = Object(it), TAG$1)) == 'string' ? T
                                    // builtinTag case
                                    : ARG ? _cof(O)
                                    // ES3 arguments fallback
                                    : (B = _cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
                                };
                                var ITERATOR$2 = _wks('iterator');
                                var core_getIteratorMethod = _core.getIteratorMethod = function (it) {
                                    if (it != undefined) return it[ITERATOR$2] || it['@@iterator'] || _iterators[_classof(it)];
                                };
                                var ITERATOR$3 = _wks('iterator');
                                var SAFE_CLOSING = false;
                                try {
                                    var riter = [7][ITERATOR$3]();
                                    riter['return'] = function () {
                                        SAFE_CLOSING = true;
                                    };
                                    // eslint-disable-next-line no-throw-literal
                                } catch (e) {/* empty */}
                                var _iterDetect = function _iterDetect(exec, skipClosing) {
                                    if (!skipClosing && !SAFE_CLOSING) return false;
                                    var safe = false;
                                    try {
                                        var arr = [7];
                                        var iter = arr[ITERATOR$3]();
                                        iter.next = function () {
                                            return { done: safe = true };
                                        };
                                        arr[ITERATOR$3] = function () {
                                            return iter;
                                        };
                                        exec(arr);
                                    } catch (e) {/* empty */}
                                    return safe;
                                };
                                _export(_export.S + _export.F * !_iterDetect(function (iter) {}), 'Array', {
                                    // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
                                    from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
                                        var O = _toObject(arrayLike);
                                        var C = typeof this == 'function' ? this : Array;
                                        var aLen = arguments.length;
                                        var mapfn = aLen > 1 ? arguments[1] : undefined;
                                        var mapping = mapfn !== undefined;
                                        var index = 0;
                                        var iterFn = core_getIteratorMethod(O);
                                        var length, result, step, iterator;
                                        if (mapping) mapfn = _ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
                                        // if object isn't iterable or it's array with default iterator - use simple case
                                        if (iterFn != undefined && !(C == Array && _isArrayIter(iterFn))) {
                                            for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
                                                _createProperty(result, index, mapping ? _iterCall(iterator, mapfn, [step.value, index], true) : step.value);
                                            }
                                        } else {
                                            length = _toLength(O.length);
                                            for (result = new C(length); length > index; index++) {
                                                _createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
                                            }
                                        }
                                        result.length = index;
                                        return result;
                                    }
                                });
                                var from$2 = _core.Array.from;
                                var from = createCommonjsModule(function (module) {
                                    module.exports = { "default": from$2, __esModule: true };
                                });
                                unwrapExports(from);
                                var toConsumableArray = createCommonjsModule(function (module, exports) {
                                    exports.__esModule = true;
                                    var _from2 = _interopRequireDefault(from);
                                    function _interopRequireDefault(obj) {
                                        return obj && obj.__esModule ? obj : { default: obj };
                                    }
                                    exports.default = function (arr) {
                                        if (Array.isArray(arr)) {
                                            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
                                                arr2[i] = arr[i];
                                            }
                                            return arr2;
                                        } else {
                                            return (0, _from2.default)(arr);
                                        }
                                    };
                                });
                                var _toConsumableArray = unwrapExports(toConsumableArray);
                                var _iterStep = function _iterStep(done, value) {
                                    return { value: value, done: !!done };
                                };
                                // 22.1.3.4 Array.prototype.entries()
                                // 22.1.3.13 Array.prototype.keys()
                                // 22.1.3.29 Array.prototype.values()
                                // 22.1.3.30 Array.prototype[@@iterator]()
                                var es6_array_iterator = _iterDefine(Array, 'Array', function (iterated, kind) {
                                    this._t = _toIobject(iterated); // target
                                    this._i = 0; // next index
                                    this._k = kind; // kind
                                    // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
                                }, function () {
                                    var O = this._t;
                                    var kind = this._k;
                                    var index = this._i++;
                                    if (!O || index >= O.length) {
                                        this._t = undefined;
                                        return _iterStep(1);
                                    }
                                    if (kind == 'keys') return _iterStep(0, index);
                                    if (kind == 'values') return _iterStep(0, O[index]);
                                    return _iterStep(0, [index, O[index]]);
                                }, 'values');
                                // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
                                _iterators.Arguments = _iterators.Array;
                                var TO_STRING_TAG = _wks('toStringTag');
                                var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' + 'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' + 'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' + 'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' + 'TextTrackList,TouchList').split(',');
                                for (var i = 0; i < DOMIterables.length; i++) {
                                    var NAME = DOMIterables[i];
                                    var Collection = _global[NAME];
                                    var proto = Collection && Collection.prototype;
                                    if (proto && !proto[TO_STRING_TAG]) _hide(proto, TO_STRING_TAG, NAME);
                                    _iterators[NAME] = _iterators.Array;
                                }
                                var f$1 = _wks;
                                var _wksExt = {
                                    f: f$1
                                };
                                var iterator$2 = _wksExt.f('iterator');
                                var iterator = createCommonjsModule(function (module) {
                                    module.exports = { "default": iterator$2, __esModule: true };
                                });
                                unwrapExports(iterator);
                                var _meta = createCommonjsModule(function (module) {
                                    var META = _uid('meta');
                                    var setDesc = _objectDp.f;
                                    var id = 0;
                                    var isExtensible = Object.isExtensible || function () {
                                        return true;
                                    };
                                    var FREEZE = !_fails(function () {
                                        return isExtensible(Object.preventExtensions({}));
                                    });
                                    var setMeta = function setMeta(it) {
                                        setDesc(it, META, { value: {
                                                i: 'O' + ++id,
                                                w: {} // weak collections IDs
                                            } });
                                    };
                                    var fastKey = function fastKey(it, create) {
                                        // return primitive with prefix
                                        if (!_isObject(it)) return (typeof it === 'undefined' ? 'undefined' : _typeof2(it)) == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
                                        if (!_has(it, META)) {
                                            // can't set metadata to uncaught frozen object
                                            if (!isExtensible(it)) return 'F';
                                            // not necessary to add metadata
                                            if (!create) return 'E';
                                            // add missing metadata
                                            setMeta(it);
                                            // return object ID
                                        }
                                        return it[META].i;
                                    };
                                    var getWeak = function getWeak(it, create) {
                                        if (!_has(it, META)) {
                                            // can't set metadata to uncaught frozen object
                                            if (!isExtensible(it)) return true;
                                            // not necessary to add metadata
                                            if (!create) return false;
                                            // add missing metadata
                                            setMeta(it);
                                            // return hash weak collections IDs
                                        }
                                        return it[META].w;
                                    };
                                    // add metadata on freeze-family methods calling
                                    var onFreeze = function onFreeze(it) {
                                        if (FREEZE && meta.NEED && isExtensible(it) && !_has(it, META)) setMeta(it);
                                        return it;
                                    };
                                    var meta = module.exports = {
                                        KEY: META,
                                        NEED: false,
                                        fastKey: fastKey,
                                        getWeak: getWeak,
                                        onFreeze: onFreeze
                                    };
                                });
                                var _meta_1 = _meta.KEY;
                                var _meta_2 = _meta.NEED;
                                var _meta_3 = _meta.fastKey;
                                var _meta_4 = _meta.getWeak;
                                var _meta_5 = _meta.onFreeze;
                                var defineProperty = _objectDp.f;
                                var _wksDefine = function _wksDefine(name) {
                                    var $Symbol = _core.Symbol || (_core.Symbol = _library ? {} : _global.Symbol || {});
                                    if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: _wksExt.f(name) });
                                };
                                var f$2 = Object.getOwnPropertySymbols;
                                var _objectGops = {
                                    f: f$2
                                };
                                var f$3 = {}.propertyIsEnumerable;
                                var _objectPie = {
                                    f: f$3
                                };
                                // all enumerable object keys, includes symbols
                                var _enumKeys = function _enumKeys(it) {
                                    var result = _objectKeys(it);
                                    var getSymbols = _objectGops.f;
                                    if (getSymbols) {
                                        var symbols = getSymbols(it);
                                        var isEnum = _objectPie.f;
                                        var i = 0;
                                        var key;
                                        while (symbols.length > i) {
                                            if (isEnum.call(it, key = symbols[i++])) result.push(key);
                                        }
                                    }
                                    return result;
                                };
                                // 7.2.2 IsArray(argument)
                                var _isArray = Array.isArray || function isArray(arg) {
                                    return _cof(arg) == 'Array';
                                };
                                // 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
                                var hiddenKeys = _enumBugKeys.concat('length', 'prototype');
                                var f$5 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
                                    return _objectKeysInternal(O, hiddenKeys);
                                };
                                var _objectGopn = {
                                    f: f$5
                                };
                                // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
                                var gOPN$1 = _objectGopn.f;
                                var toString$1 = {}.toString;
                                var windowNames = (typeof window === 'undefined' ? 'undefined' : _typeof2(window)) == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
                                var getWindowNames = function getWindowNames(it) {
                                    try {
                                        return gOPN$1(it);
                                    } catch (e) {
                                        return windowNames.slice();
                                    }
                                };
                                var f$4 = function getOwnPropertyNames(it) {
                                    return windowNames && toString$1.call(it) == '[object Window]' ? getWindowNames(it) : gOPN$1(_toIobject(it));
                                };
                                var _objectGopnExt = {
                                    f: f$4
                                };
                                var gOPD$1 = Object.getOwnPropertyDescriptor;
                                var f$6 = _descriptors ? gOPD$1 : function getOwnPropertyDescriptor(O, P) {
                                    O = _toIobject(O);
                                    P = _toPrimitive(P, true);
                                    if (_ie8DomDefine) try {
                                        return gOPD$1(O, P);
                                    } catch (e) {/* empty */}
                                    if (_has(O, P)) return _propertyDesc(!_objectPie.f.call(O, P), O[P]);
                                };
                                var _objectGopd = {
                                    f: f$6
                                };
                                // ECMAScript 6 symbols shim
                                var META = _meta.KEY;
                                var gOPD = _objectGopd.f;
                                var dP$1 = _objectDp.f;
                                var gOPN = _objectGopnExt.f;
                                var $Symbol = _global.Symbol;
                                var $JSON = _global.JSON;
                                var _stringify = $JSON && $JSON.stringify;
                                var PROTOTYPE$2 = 'prototype';
                                var HIDDEN = _wks('_hidden');
                                var TO_PRIMITIVE = _wks('toPrimitive');
                                var isEnum = {}.propertyIsEnumerable;
                                var SymbolRegistry = _shared('symbol-registry');
                                var AllSymbols = _shared('symbols');
                                var OPSymbols = _shared('op-symbols');
                                var ObjectProto$1 = Object[PROTOTYPE$2];
                                var USE_NATIVE = typeof $Symbol == 'function';
                                var QObject = _global.QObject;
                                // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
                                var setter = !QObject || !QObject[PROTOTYPE$2] || !QObject[PROTOTYPE$2].findChild;
                                // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
                                var setSymbolDesc = _descriptors && _fails(function () {
                                    return _objectCreate(dP$1({}, 'a', {
                                        get: function get() {
                                            return dP$1(this, 'a', { value: 7 }).a;
                                        }
                                    })).a != 7;
                                }) ? function (it, key, D) {
                                    var protoDesc = gOPD(ObjectProto$1, key);
                                    if (protoDesc) delete ObjectProto$1[key];
                                    dP$1(it, key, D);
                                    if (protoDesc && it !== ObjectProto$1) dP$1(ObjectProto$1, key, protoDesc);
                                } : dP$1;
                                var wrap = function wrap(tag) {
                                    var sym = AllSymbols[tag] = _objectCreate($Symbol[PROTOTYPE$2]);
                                    sym._k = tag;
                                    return sym;
                                };
                                var isSymbol = USE_NATIVE && _typeof2($Symbol.iterator) == 'symbol' ? function (it) {
                                    return (typeof it === 'undefined' ? 'undefined' : _typeof2(it)) == 'symbol';
                                } : function (it) {
                                    return it instanceof $Symbol;
                                };
                                var $defineProperty = function defineProperty(it, key, D) {
                                    if (it === ObjectProto$1) $defineProperty(OPSymbols, key, D);
                                    _anObject(it);
                                    key = _toPrimitive(key, true);
                                    _anObject(D);
                                    if (_has(AllSymbols, key)) {
                                        if (!D.enumerable) {
                                            if (!_has(it, HIDDEN)) dP$1(it, HIDDEN, _propertyDesc(1, {}));
                                            it[HIDDEN][key] = true;
                                        } else {
                                            if (_has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
                                            D = _objectCreate(D, { enumerable: _propertyDesc(0, false) });
                                        }
                                        return setSymbolDesc(it, key, D);
                                    }
                                    return dP$1(it, key, D);
                                };
                                var $defineProperties = function defineProperties(it, P) {
                                    _anObject(it);
                                    var keys = _enumKeys(P = _toIobject(P));
                                    var i = 0;
                                    var l = keys.length;
                                    var key;
                                    while (l > i) {
                                        $defineProperty(it, key = keys[i++], P[key]);
                                    }
                                    return it;
                                };
                                var $create = function create(it, P) {
                                    return P === undefined ? _objectCreate(it) : $defineProperties(_objectCreate(it), P);
                                };
                                var $propertyIsEnumerable = function propertyIsEnumerable(key) {
                                    var E = isEnum.call(this, key = _toPrimitive(key, true));
                                    if (this === ObjectProto$1 && _has(AllSymbols, key) && !_has(OPSymbols, key)) return false;
                                    return E || !_has(this, key) || !_has(AllSymbols, key) || _has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
                                };
                                var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
                                    it = _toIobject(it);
                                    key = _toPrimitive(key, true);
                                    if (it === ObjectProto$1 && _has(AllSymbols, key) && !_has(OPSymbols, key)) return;
                                    var D = gOPD(it, key);
                                    if (D && _has(AllSymbols, key) && !(_has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
                                    return D;
                                };
                                var $getOwnPropertyNames = function getOwnPropertyNames(it) {
                                    var names = gOPN(_toIobject(it));
                                    var result = [];
                                    var i = 0;
                                    var key;
                                    while (names.length > i) {
                                        if (!_has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
                                    }
                                    return result;
                                };
                                var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
                                    var IS_OP = it === ObjectProto$1;
                                    var names = gOPN(IS_OP ? OPSymbols : _toIobject(it));
                                    var result = [];
                                    var i = 0;
                                    var key;
                                    while (names.length > i) {
                                        if (_has(AllSymbols, key = names[i++]) && (IS_OP ? _has(ObjectProto$1, key) : true)) result.push(AllSymbols[key]);
                                    }
                                    return result;
                                };
                                // 19.4.1.1 Symbol([description])
                                if (!USE_NATIVE) {
                                    $Symbol = function _Symbol2() {
                                        if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
                                        var tag = _uid(arguments.length > 0 ? arguments[0] : undefined);
                                        var $set = function $set(value) {
                                            if (this === ObjectProto$1) $set.call(OPSymbols, value);
                                            if (_has(this, HIDDEN) && _has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
                                            setSymbolDesc(this, tag, _propertyDesc(1, value));
                                        };
                                        if (_descriptors && setter) setSymbolDesc(ObjectProto$1, tag, { configurable: true, set: $set });
                                        return wrap(tag);
                                    };
                                    _redefine($Symbol[PROTOTYPE$2], 'toString', function toString() {
                                        return this._k;
                                    });
                                    _objectGopd.f = $getOwnPropertyDescriptor;
                                    _objectDp.f = $defineProperty;
                                    _objectGopn.f = _objectGopnExt.f = $getOwnPropertyNames;
                                    _objectPie.f = $propertyIsEnumerable;
                                    _objectGops.f = $getOwnPropertySymbols;
                                    if (_descriptors && !_library) {
                                        _redefine(ObjectProto$1, 'propertyIsEnumerable', $propertyIsEnumerable, true);
                                    }
                                    _wksExt.f = function (name) {
                                        return wrap(_wks(name));
                                    };
                                }
                                _export(_export.G + _export.W + _export.F * !USE_NATIVE, { Symbol: $Symbol });
                                for (var es6Symbols =
                                // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
                                'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(','), j = 0; es6Symbols.length > j;) {
                                    _wks(es6Symbols[j++]);
                                }
                                for (var wellKnownSymbols = _objectKeys(_wks.store), k = 0; wellKnownSymbols.length > k;) {
                                    _wksDefine(wellKnownSymbols[k++]);
                                }
                                _export(_export.S + _export.F * !USE_NATIVE, 'Symbol', {
                                    // 19.4.2.1 Symbol.for(key)
                                    'for': function _for(key) {
                                        return _has(SymbolRegistry, key += '') ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
                                    },
                                    // 19.4.2.5 Symbol.keyFor(sym)
                                    keyFor: function keyFor(sym) {
                                        if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
                                        for (var key in SymbolRegistry) {
                                            if (SymbolRegistry[key] === sym) return key;
                                        }
                                    },
                                    useSetter: function useSetter() {
                                        setter = true;
                                    },
                                    useSimple: function useSimple() {
                                        setter = false;
                                    }
                                });
                                _export(_export.S + _export.F * !USE_NATIVE, 'Object', {
                                    // 19.1.2.2 Object.create(O [, Properties])
                                    create: $create,
                                    // 19.1.2.4 Object.defineProperty(O, P, Attributes)
                                    defineProperty: $defineProperty,
                                    // 19.1.2.3 Object.defineProperties(O, Properties)
                                    defineProperties: $defineProperties,
                                    // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
                                    getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
                                    // 19.1.2.7 Object.getOwnPropertyNames(O)
                                    getOwnPropertyNames: $getOwnPropertyNames,
                                    // 19.1.2.8 Object.getOwnPropertySymbols(O)
                                    getOwnPropertySymbols: $getOwnPropertySymbols
                                });
                                // 24.3.2 JSON.stringify(value [, replacer [, space]])
                                $JSON && _export(_export.S + _export.F * (!USE_NATIVE || _fails(function () {
                                    var S = $Symbol();
                                    // MS Edge converts symbol values to JSON as {}
                                    // WebKit converts symbol values to JSON as null
                                    // V8 throws on boxed symbols
                                    return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
                                })), 'JSON', {
                                    stringify: function stringify(it) {
                                        if (it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
                                        var args = [it];
                                        var i = 1;
                                        var replacer, $replacer;
                                        while (arguments.length > i) {
                                            args.push(arguments[i++]);
                                        }
                                        replacer = args[1];
                                        if (typeof replacer == 'function') $replacer = replacer;
                                        if ($replacer || !_isArray(replacer)) replacer = function replacer(key, value) {
                                            if ($replacer) value = $replacer.call(this, key, value);
                                            if (!isSymbol(value)) return value;
                                        };
                                        args[1] = replacer;
                                        return _stringify.apply($JSON, args);
                                    }
                                });
                                // 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
                                $Symbol[PROTOTYPE$2][TO_PRIMITIVE] || _hide($Symbol[PROTOTYPE$2], TO_PRIMITIVE, $Symbol[PROTOTYPE$2].valueOf);
                                // 19.4.3.5 Symbol.prototype[@@toStringTag]
                                _setToStringTag($Symbol, 'Symbol');
                                // 20.2.1.9 Math[@@toStringTag]
                                _setToStringTag(Math, 'Math', true);
                                // 24.3.3 JSON[@@toStringTag]
                                _setToStringTag(_global.JSON, 'JSON', true);
                                _wksDefine('asyncIterator');
                                _wksDefine('observable');
                                var symbol$2 = _core.Symbol;
                                var symbol = createCommonjsModule(function (module) {
                                    module.exports = { "default": symbol$2, __esModule: true };
                                });
                                unwrapExports(symbol);
                                var _typeof_1 = createCommonjsModule(function (module, exports) {
                                    exports.__esModule = true;
                                    var _iterator2 = _interopRequireDefault(iterator);
                                    var _symbol2 = _interopRequireDefault(symbol);
                                    var _typeof = typeof _symbol2.default === "function" && _typeof2(_iterator2.default) === "symbol" ? function (obj) {
                                        return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
                                    } : function (obj) {
                                        return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
                                    };
                                    function _interopRequireDefault(obj) {
                                        return obj && obj.__esModule ? obj : { default: obj };
                                    }
                                    exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
                                        return typeof obj === "undefined" ? "undefined" : _typeof(obj);
                                    } : function (obj) {
                                        return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
                                    };
                                });
                                unwrapExports(_typeof_1);
                                // most Object methods by ES6 should accept primitives
                                var _objectSap = function _objectSap(KEY, exec) {
                                    var fn = (_core.Object || {})[KEY] || Object[KEY];
                                    var exp = {};
                                    exp[KEY] = exec(fn);
                                    _export(_export.S + _export.F * _fails(function () {
                                        fn(1);
                                    }), 'Object', exp);
                                };
                                // 19.1.2.14 Object.keys(O)
                                _objectSap('keys', function () {
                                    return function keys(it) {
                                        return _objectKeys(_toObject(it));
                                    };
                                });
                                var keys$1 = _core.Object.keys;
                                var keys = createCommonjsModule(function (module) {
                                    module.exports = { "default": keys$1, __esModule: true };
                                });
                                unwrapExports(keys);
                                // 20.1.2.3 Number.isInteger(number)
                                var floor$1 = Math.floor;
                                var _isInteger = function isInteger(it) {
                                    return !_isObject(it) && isFinite(it) && floor$1(it) === it;
                                };
                                // 20.1.2.3 Number.isInteger(number)
                                _export(_export.S, 'Number', { isInteger: _isInteger });
                                var isInteger$2 = _core.Number.isInteger;
                                var isInteger$1 = createCommonjsModule(function (module) {
                                    module.exports = { "default": isInteger$2, __esModule: true };
                                });
                                unwrapExports(isInteger$1);
                                var _stringWs = '\t\n\x0B\f\r \xA0\u1680\u180E\u2000\u2001\u2002\u2003' + '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';
                                var space = '[' + _stringWs + ']';
                                var non = '\u200B\x85';
                                var ltrim = RegExp('^' + space + space + '*');
                                var rtrim = RegExp(space + space + '*$');
                                var exporter = function exporter(KEY, exec, ALIAS) {
                                    var exp = {};
                                    var FORCE = _fails(function () {
                                        return !!_stringWs[KEY]() || non[KEY]() != non;
                                    });
                                    var fn = exp[KEY] = FORCE ? exec(trim) : _stringWs[KEY];
                                    if (ALIAS) exp[ALIAS] = fn;
                                    _export(_export.P + _export.F * FORCE, 'String', exp);
                                };
                                // 1 -> String#trimLeft
                                // 2 -> String#trimRight
                                // 3 -> String#trim
                                var trim = exporter.trim = function (string, TYPE) {
                                    string = String(_defined(string));
                                    if (TYPE & 1) string = string.replace(ltrim, '');
                                    if (TYPE & 2) string = string.replace(rtrim, '');
                                    return string;
                                };
                                var _stringTrim = exporter;
                                var $parseFloat = _global.parseFloat;
                                var $trim = _stringTrim.trim;
                                var _parseFloat$3 = 1 / $parseFloat(_stringWs + '-0') !== -Infinity ? function parseFloat(str) {
                                    var string = $trim(String(str), 3);
                                    var result = $parseFloat(string);
                                    return result === 0 && string.charAt(0) == '-' ? -0 : result;
                                } : $parseFloat;
                                // 20.1.2.12 Number.parseFloat(string)
                                _export(_export.S + _export.F * (Number.parseFloat != _parseFloat$3), 'Number', { parseFloat: _parseFloat$3 });
                                var _parseFloat$1 = parseFloat;
                                var _parseFloat = createCommonjsModule(function (module) {
                                    module.exports = { "default": _parseFloat$1, __esModule: true };
                                });
                                unwrapExports(_parseFloat);
                                /**
                                 * toxic-predicate-functions v0.1.5
                                 * (c) 2017 toxic-johann
                                 * Released under MIT
                                 */
                                /**
                                 * is void element or not ? Means it will return true when val is undefined or null
                                 */
                                function isVoid(obj) {
                                    return obj === undefined || obj === null;
                                }
                                /**
                                 * to check whether a variable is array
                                 */
                                function isArray(arr) {
                                    return Array.isArray(arr);
                                }
                                /**
                                 * is it a function or not
                                 */
                                function isFunction(obj) {
                                    return typeof obj === 'function';
                                }
                                /**
                                 * is it an object or not
                                 */
                                function isObject$1(obj) {
                                    // incase of arrow function and array
                                    return Object(obj) === obj && String(obj) === '[object Object]' && !isFunction(obj) && !isArray(obj);
                                }
                                /**
                                 * to tell you if it's a real number
                                 */
                                function isNumber(obj) {
                                    return typeof obj === 'number';
                                }
                                /**
                                 * is it a string
                                 */
                                function isString(str) {
                                    return typeof str === 'string' || str instanceof String;
                                }
                                /**
                                 * is Boolean or not
                                 */
                                function isBoolean(bool) {
                                    return typeof bool === 'boolean';
                                }
                                /**
                                 * is Primitive type or not, whick means it will return true when data is number/string/boolean/undefined/null
                                 */
                                function isPrimitive(val) {
                                    return isVoid(val) || isBoolean(val) || isString(val) || isNumber(val);
                                }
                                /**
                                 * the handler to generate an deep traversal handler
                                 * @param  {Function} fn the function you wanna run when you reach in the deep property
                                 * @return {Function}    the handler
                                 */
                                function genTraversalHandler(fn) {
                                    var setter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function (target, key, value) {
                                        target[key] = value;
                                    };
                                    // use recursive to move what in source to the target
                                    // if you do not provide a target, we will create a new target
                                    function recursiveFn(source, target, key) {
                                        if (isArray(source) || isObject$1(source)) {
                                            target = isPrimitive(target) ? isObject$1(source) ? {} : [] : target;
                                            for (var _key in source) {
                                                // $FlowFixMe: support computed key here
                                                setter(target, _key, recursiveFn(source[_key], target[_key], _key));
                                                // target[key] = recursiveFn(source[key], target[key], key);
                                            }
                                            return target;
                                        }
                                        return fn(source, target, key);
                                    }
                                    return recursiveFn;
                                }
                                var _deepAssign = genTraversalHandler(function (val) {
                                    return val;
                                });
                                /**
                                 * deeply clone an object
                                 * @param  {Array|Object} source if you pass in other type, it will throw an error
                                 * @return {clone-target}        the new Object
                                 */
                                function deepClone(source) {
                                    if (isPrimitive(source)) {
                                        throw new TypeError('deepClone only accept non primitive type');
                                    }
                                    return _deepAssign(source);
                                }
                                /**
                                 * merge multiple objects
                                 * @param  {...Object} args [description]
                                 * @return {merge-object}         [description]
                                 */
                                function deepAssign() {
                                    for (var _len = arguments.length, args = Array(_len), _key2 = 0; _key2 < _len; _key2++) {
                                        args[_key2] = arguments[_key2];
                                    }
                                    if (args.length < 2) {
                                        throw new Error('deepAssign accept two and more argument');
                                    }
                                    for (var i = args.length - 1; i > -1; i--) {
                                        if (isPrimitive(args[i])) {
                                            throw new TypeError('deepAssign only accept non primitive type');
                                        }
                                    }
                                    var target = args.shift();
                                    args.forEach(function (source) {
                                        return _deepAssign(source, target);
                                    });
                                    return target;
                                }
                                /**
                                 * camelize any string, e.g hello world -> helloWorld
                                 * @param  {string} str only accept string!
                                 * @return {string}     camelize string
                                 */
                                function camelize(str, isBig) {
                                    return str.replace(/(^|[^a-zA-Z]+)([a-zA-Z])/g, function (match, spilt, initials, index) {
                                        return !isBig && index === 0 ? initials.toLowerCase() : initials.toUpperCase();
                                    });
                                }
                                /**
                                 * hypenate any string e.g hello world -> hello-world
                                 * @param  {string} str only accept string
                                 * @return {string}
                                 */
                                function hypenate(str) {
                                    return camelize(str).replace(/([A-Z])/g, function (match) {
                                        return '-' + match.toLowerCase();
                                    });
                                }
                                /**
                                 * bind the function with some context. we have some fallback strategy here
                                 * @param {function} fn the function which we need to bind the context on
                                 * @param {any} context the context object
                                 */
                                function bind(fn, context) {
                                    if (fn.bind) {
                                        return fn.bind(context);
                                    } else if (fn.apply) {
                                        return function __autobind__() {
                                            for (var _len2 = arguments.length, args = Array(_len2), _key3 = 0; _key3 < _len2; _key3++) {
                                                args[_key3] = arguments[_key3];
                                            }
                                            return fn.apply(context, args);
                                        };
                                    } else {
                                        return function __autobind__() {
                                            for (var _len3 = arguments.length, args = Array(_len3), _key4 = 0; _key4 < _len3; _key4++) {
                                                args[_key4] = arguments[_key4];
                                            }
                                            return fn.call.apply(fn, [context].concat(_toConsumableArray(args)));
                                        };
                                    }
                                }
                                /**
                                 * generate an uuid
                                 */
                                function uuid() {
                                    return S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4();
                                }
                                /**
                                 * generate an random number which length is 4
                                 */
                                function S4() {
                                    return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
                                }
                                /**
                                 * generate an random number with specific length
                                 */
                                function rand(length) {
                                    var str = '';
                                    while (str.length < length) {
                                        str += S4();
                                    }
                                    return str.slice(0, length);
                                }
                                /**
                                 * get an deep property
                                 */
                                function getDeepProperty(obj, keys) {
                                    var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
                                        _ref$throwError = _ref.throwError,
                                        throwError = _ref$throwError === undefined ? false : _ref$throwError,
                                        backup = _ref.backup;
                                    if (isString(keys)) {
                                        keys = keys.split('.');
                                    }
                                    if (!isArray(keys)) {
                                        throw new TypeError('keys of getDeepProperty must be string or Array<string>');
                                    }
                                    var read = [];
                                    var target = obj;
                                    for (var i = 0, len = keys.length; i < len; i++) {
                                        var key = keys[i];
                                        if (isVoid(target)) {
                                            if (throwError) {
                                                throw new Error('obj' + (read.length > 0 ? '.' + read.join('.') : ' itself') + ' is ' + target);
                                            } else {
                                                return backup;
                                            }
                                        }
                                        target = target[key];
                                        read.push(key);
                                    }
                                    return target;
                                }
                                exports.genTraversalHandler = genTraversalHandler;
                                exports.deepClone = deepClone;
                                exports.deepAssign = deepAssign;
                                exports.camelize = camelize;
                                exports.hypenate = hypenate;
                                exports.bind = bind;
                                exports.uuid = uuid;
                                exports.S4 = S4;
                                exports.rand = rand;
                                exports.getDeepProperty = getDeepProperty;
                                Object.defineProperty(exports, '__esModule', { value: true });
                            });
                            /***/
                        },
                        /* 6 */
                        /***/function (module, exports, __webpack_require__) {
                            "use strict";

                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            exports.NodeWrap = exports.supportsPassive = undefined;
                            exports.getAttr = getAttr;
                            exports.setAttr = setAttr;
                            exports.addClassName = addClassName;
                            exports.removeClassName = removeClassName;
                            exports.hasClassName = hasClassName;
                            exports.removeEvent = removeEvent;
                            exports.addEvent = addEvent;
                            exports.addDelegate = addDelegate;
                            exports.removeDelegate = removeDelegate;
                            exports.getStyle = getStyle;
                            exports.setStyle = setStyle;
                            exports.query = query;
                            exports.removeEl = removeEl;
                            exports.findParents = findParents;
                            exports.$ = $;
                            var _toxicPredicateFunctions = __webpack_require__(0);
                            var _events = __webpack_require__(2);
                            var _utils = __webpack_require__(1);
                            /**
                             * @module dom
                             * @author huzunjie
                             * @description 一些常用的DOM判断及操作方法，可以使用dom.$('*')包装DOM，实现类jQuery的链式操作；当然这里的静态方法也可以直接使用。
                             */
                            var _divEl = _utils.inBrowser ? document.createElement('div') : {};
                            var _textAttrName = 'innerText';
                            'textContent' in _divEl && (_textAttrName = 'textContent');
                            var _arrPrototype = Array.prototype;
                            /**
                             * 读取HTML元素属性值
                             * @param {HTMLElement} el 目标元素
                             * @param {String} attrName 目标属性名称
                             * @return {String}
                             */
                            function getAttr(el, attrName) {
                                return el.getAttribute(attrName);
                            }
                            /**
                             * 设置HTML元素属性值
                             * @param {HTMLElement} el 目标元素
                             * @param {String} attrName 目标属性名称
                             * @param {String} attrVal 目标属性值
                             */
                            function setAttr(el, attrName, attrVal) {
                                if (attrVal === undefined) {
                                    el.removeAttribute(attrName);
                                } else {
                                    el.setAttribute(attrName, attrVal);
                                }
                            }
                            /**
                             * 为HTML元素添加className
                             * @param {HTMLElement} el 目标元素
                             * @param {String} cls 要添加的className（多个以空格分割）
                             */
                            function addClassName(el, cls) {
                                if (!cls || !(cls = cls.trim())) {
                                    return;
                                }
                                var clsArr = cls.split(/\s+/);
                                if (el.classList) {
                                    clsArr.forEach(function (c) {
                                        return el.classList.add(c);
                                    });
                                } else {
                                    var curCls_1 = " " + (el.className || '') + " ";
                                    clsArr.forEach(function (c) {
                                        curCls_1.indexOf(" " + c + " ") === -1 && (curCls_1 += ' ' + c);
                                    });
                                    el.className = curCls_1.trim();
                                }
                            }
                            /**
                             * 为HTML元素移除className
                             * @param {HTMLElement} el 目标元素
                             * @param {String} cls 要移除的className（多个以空格分割）
                             */
                            function removeClassName(el, cls) {
                                if (!cls || !(cls = cls.trim())) {
                                    return;
                                }
                                var clsArr = cls.split(/\s+/);
                                if (el.classList) {
                                    clsArr.forEach(function (c) {
                                        return el.classList.remove(c);
                                    });
                                } else {
                                    var curCls_2 = " " + el.className + " ";
                                    clsArr.forEach(function (c) {
                                        var tar = ' ' + c + ' ';
                                        while (curCls_2.indexOf(tar) !== -1) {
                                            curCls_2 = curCls_2.replace(tar, ' ');
                                        }
                                    });
                                    el.className = curCls_2.trim();
                                }
                            }
                            /**
                             * 检查HTML元素是否已设置className
                             * @param {HTMLElement} el 目标元素
                             * @param {String} className 要检查的className
                             * @return {Boolean}
                             */
                            function hasClassName(el, className) {
                                return new RegExp('(?:^|\\s)' + className + '(?=\\s|$)').test(el.className);
                            }
                            /**
                             * addEventListener 是否已支持 passive
                             * @return {Boolean}
                             */
                            var supportsPassive = exports.supportsPassive = false;
                            try {
                                var opts = Object.defineProperty({}, 'passive', {
                                    get: function get() {
                                        exports.supportsPassive = supportsPassive = true;
                                    }
                                });
                                if (_utils.inBrowser) window.addEventListener('test', null, opts);
                            } catch (e) {
                                console.error(e);
                            }
                            /**
                             * 为HTML元素移除事件监听
                             * @param {HTMLElement} el 目标元素
                             * @param {String} type 事件名称
                             * @param {Function} handler 处理函数
                             * @param {Boolean} once 是否只监听一次
                             * @param {Boolean} capture 是否在捕获阶段的监听
                             */
                            function removeEvent(el, type, handler, once, capture) {
                                if (once === void 0) {
                                    once = false;
                                }
                                if (capture === void 0) {
                                    capture = false;
                                }
                                if (capture !== undefined && !(0, _toxicPredicateFunctions.isBoolean)(capture) && supportsPassive) {
                                    capture = { passive: true };
                                }
                                if (once) {
                                    /* 尝试从缓存中读取包装后的方法 */
                                    var handlerWrap = (0, _events.removeEventCache)(el, type + '_once', handler);
                                    if (handlerWrap) {
                                        handler = handlerWrap;
                                    }
                                }
                                el.removeEventListener(type, handler, capture);
                            }
                            /**
                             * 为HTML元素添加事件监听
                             * @param {HTMLElement} el 目标元素
                             * @param {String} type 事件名称
                             * @param {Function} handler 处理函数
                             * @param {Boolean} once 是否只监听一次
                             * @param {Boolean|Object} capture 是否在捕获阶段监听，这里也可以传入 { passive: true } 表示被动模式
                             */
                            function addEvent(el, type, handler, once, capture) {
                                if (once === void 0) {
                                    once = false;
                                }
                                if (capture === void 0) {
                                    capture = false;
                                }
                                if (capture !== undefined && !(0, _toxicPredicateFunctions.isBoolean)(capture) && supportsPassive) {
                                    capture = { passive: true };
                                }
                                if (once) {
                                    var oldHandler_1 = handler;
                                    handler = function () {
                                        return function () {
                                            var args = [];
                                            for (var _i = 0; _i < arguments.length; _i++) {
                                                args[_i] = arguments[_i];
                                            }
                                            oldHandler_1.apply(this, args);
                                            removeEvent(el, type, handler, once, capture);
                                        };
                                    }();
                                    /* 将包装后的方法记录到缓存中 */
                                    (0, _events.addEventCache)(el, type + '_once', oldHandler_1, handler);
                                }
                                el.addEventListener(type, handler, capture);
                            }
                            /**
                             * 为HTML元素添加事件代理
                             * @param {HTMLElement} el 目标元素
                             * @param {String} selector 要被代理的元素
                             * @param {String} type 事件名称
                             * @param {Function} handler 处理函数
                             * @param {Boolean} capture 是否在捕获阶段监听
                             */
                            function addDelegate(el, selector, type, handler, capture) {
                                if (capture === void 0) {
                                    capture = false;
                                }
                                if (capture !== undefined && !(0, _toxicPredicateFunctions.isBoolean)(capture) && supportsPassive) {
                                    capture = { passive: true };
                                }
                                var handlerWrap = function handlerWrap(e) {
                                    var targetElsArr = findParents(e.target || e.srcElement, el, true);
                                    var targetElArr = query(selector, el, true);
                                    var retEl;
                                    if (targetElArr.find) {
                                        retEl = targetElArr.find(function (seEl) {
                                            return targetElsArr.find(function (tgEl) {
                                                return seEl === tgEl;
                                            });
                                        });
                                    } else {
                                        // Fixed IE11 Array.find not defined bug
                                        targetElArr.forEach(function (seEl) {
                                            return !retEl && targetElsArr.forEach(function (tgEl) {
                                                if (!retEl && seEl === tgEl) {
                                                    retEl = tgEl;
                                                }
                                            });
                                        });
                                    }
                                    retEl && handler.apply(retEl, arguments);
                                };
                                /* 将包装后的方法记录到缓存中 */
                                (0, _events.addEventCache)(el, type + '_delegate_' + selector, handler, handlerWrap);
                                el.addEventListener(type, handlerWrap, capture);
                            }
                            /**
                             * 为HTML元素移除事件代理
                             * @param {HTMLElement} el 目标元素
                             * @param {String} selector 要被代理的元素
                             * @param {String} type 事件名称
                             * @param {Function} handler 处理函数
                             * @param {Boolean} capture 是否在捕获阶段监听
                             */
                            function removeDelegate(el, selector, type, handler, capture) {
                                if (capture === void 0) {
                                    capture = false;
                                }
                                if (capture !== undefined && !(0, _toxicPredicateFunctions.isBoolean)(capture) && supportsPassive) {
                                    capture = { passive: true };
                                }
                                /* 尝试从缓存中读取包装后的方法 */
                                var handlerWrap = (0, _events.removeEventCache)(el, type + '_delegate_' + selector, handler);
                                handlerWrap && el.removeEventListener(type, handlerWrap, capture);
                            }
                            /**
                             * 读取HTML元素样式值
                             * @param {HTMLElement} el 目标元素
                             * @param {String} key 样式key
                             * @return {String}
                             */
                            function getStyle(el, key) {
                                return (el.currentStyle || document.defaultView.getComputedStyle(el, null))[key] || el.style[key];
                            }
                            /**
                             * 设置HTML元素样式值
                             * @param {HTMLElement} el 目标元素
                             * @param {String} key 样式key
                             * @param {String} val 样式值
                             */
                            function setStyle(el, key, val) {
                                if ((0, _toxicPredicateFunctions.isObject)(key)) {
                                    for (var k in key) {
                                        setStyle(el, k, key[k]);
                                    }
                                } else {
                                    el.style[key] = val;
                                }
                            }
                            /**
                             * 根据选择器查询目标元素
                             * @param {String} selector 选择器,用于 querySelectorAll
                             * @param {HTMLElement} container 父容器
                             * @param {Boolean} toArray 强制输出为数组
                             * @return {NodeList|Array}
                             */
                            function query(selector, container, toArray) {
                                if (container === void 0) {
                                    container = document;
                                }
                                var retNodeList = container.querySelectorAll(selector);
                                return toArray ? Array.from(retNodeList) : retNodeList;
                            }
                            /**
                             * 从DOM树中移除el
                             * @param {HTMLElement} el 目标元素
                             */
                            function removeEl(el) {
                                el.parentNode.removeChild(el);
                            }
                            /**
                             * 查找元素的父节点们
                             * @param {HTMLElement} el 目标元素
                             * @param {HTMLElement} endEl 最大父容器（不指定则找到html）
                             * @param {Boolean} haveEl 包含当前元素
                             * @param {Boolean} haveEndEl 包含设定的最大父容器
                             */
                            function findParents(el, endEl, haveEl, haveEndEl) {
                                if (endEl === void 0) {
                                    endEl = null;
                                }
                                var retEls = [];
                                if (haveEl) {
                                    retEls.push(el);
                                }
                                while (el && el.parentNode !== endEl) {
                                    el = el.parentNode;
                                    el && retEls.push(el);
                                }
                                if (haveEndEl) {
                                    retEls.push(endEl);
                                }
                                return retEls;
                            }
                            /**
                             * @class NodeWrap
                             * @description
                             * NodeWrap DOM包装器，用以实现基本的链式操作
                             * new dom.NodeWrap('*') 相当于 dom.$('*')
                             * 这里面用于DOM操作的属性方法都是基于上面静态方法实现，有需要可以随时修改补充
                             * @param {String} selector 选择器(兼容 String||HTMLString||NodeList||NodeArray||HTMLElement)
                             * @param {HTMLElement} container 父容器（默认为document）
                             */
                            var NodeWrap = /** @class */function () {
                                function NodeWrap(selector, container) {
                                    if (container === void 0) {
                                        container = document;
                                    }
                                    var _this = this;
                                    _this.selector = selector;
                                    /* String||NodeList||HTMLElement 识别处理 */
                                    var elsArr;
                                    if (selector && selector.constructor === NodeList) {
                                        /* 支持直接传入NodeList来构建包装器 */
                                        elsArr = (0, _utils.makeArray)(selector);
                                    } else if ((0, _toxicPredicateFunctions.isArray)(selector)) {
                                        /* 支持直接传入Node数组来构建包装器 */
                                        elsArr = selector;
                                    } else if ((0, _toxicPredicateFunctions.isString)(selector)) {
                                        if (selector.indexOf('<') === 0) {
                                            /* 支持直接传入HTML字符串来新建DOM并构建包装器 */
                                            _divEl.innerHTML = selector;
                                            elsArr = query('*', _divEl, true);
                                        } else {
                                            /* 支持直接传入字符串选择器来查找DOM并构建包装器 */
                                            elsArr = query(selector, container, true);
                                        }
                                    } else {
                                        /* 其他任意对象直接构建包装器 */
                                        elsArr = [selector];
                                    }
                                    Object.assign(_this, elsArr);
                                    /* NodeWrap本意可以 extends Array省略构造方法中下面这部分代码，但目前编译不支持 */
                                    _this.length = elsArr.length;
                                }
                                /**
                                 * 循环遍历DOM集合
                                 * @param {Function} fn 遍历函数 fn(item, i)
                                 * @return {Object}
                                 */
                                NodeWrap.prototype.each = function () {
                                    var args = [];
                                    for (var _i = 0; _i < arguments.length; _i++) {
                                        args[_i] = arguments[_i];
                                    }
                                    _arrPrototype.forEach.apply(this, args);
                                    return this;
                                };
                                /**
                                 * 添加元素到DOM集合
                                 * @param {HTMLElement} el 要加入的元素
                                 * @return {this}
                                 */
                                NodeWrap.prototype.push = function () {
                                    var args = [];
                                    for (var _i = 0; _i < arguments.length; _i++) {
                                        args[_i] = arguments[_i];
                                    }
                                    _arrPrototype.push.apply(this, args);
                                    return this;
                                };
                                /**
                                 * 截取DOM集合片段，并得到新的包装器splice
                                 * @param {Nubmer} start
                                 * @param {Nubmer} count
                                 * @return {NodeWrap} 新的DOM集合包装器
                                 */
                                NodeWrap.prototype.splice = function () {
                                    var args = [];
                                    for (var _i = 0; _i < arguments.length; _i++) {
                                        args[_i] = arguments[_i];
                                    }
                                    return $(_arrPrototype.splice.apply(this, args));
                                };
                                /**
                                 * 查找子元素
                                 * @param {String} selector 选择器
                                 * @return {NodeWrap} 新的DOM集合包装器
                                 */
                                NodeWrap.prototype.find = function (selector) {
                                    var childs = [];
                                    this.each(function (el) {
                                        childs = childs.concat(query(selector, el, true));
                                    });
                                    var childsWrap = $(childs);
                                    childsWrap.parent = this;
                                    childsWrap.selector = selector;
                                    return childsWrap;
                                };
                                /**
                                 * 添加子元素
                                 * @param {HTMLElement} childEls 要添加的HTML元素
                                 * @return {this}
                                 */
                                NodeWrap.prototype.append = function (childEls) {
                                    var childsWrap = $(childEls);
                                    var firstEl = this[0];
                                    childsWrap.each(function (newEl) {
                                        return firstEl.appendChild(newEl);
                                    });
                                    return this;
                                };
                                /**
                                 * 将元素集合添加到指定容器
                                 * @param {HTMLElement} parentEl 要添加到父容器
                                 * @return {this}
                                 */
                                NodeWrap.prototype.appendTo = function (parentEl) {
                                    $(parentEl).append(this);
                                    return this;
                                };
                                /**
                                 * DOM集合text内容读写操作
                                 * @param {String} val 文本内容（如果有设置该参数则执行写操作，否则执行读操作）
                                 * @return {this}
                                 */
                                NodeWrap.prototype.text = function (val) {
                                    if (arguments.length === 0) {
                                        return this[0][_textAttrName];
                                    }
                                    return this.each(function (el) {
                                        el[_textAttrName] = val;
                                    });
                                };
                                /**
                                 * DOM集合HTML内容读写操作
                                 * @param {String} html html内容（如果有设置该参数则执行写操作，否则执行读操作）
                                 * @return {this}
                                 */
                                NodeWrap.prototype.html = function (html) {
                                    if (arguments.length === 0) {
                                        return this[0].innerHTML;
                                    }
                                    return this.each(function (el) {
                                        el.innerHTML = html;
                                    });
                                };
                                /**
                                 * DOM集合属性读写操作
                                 * @param {String} name 属性名称
                                 * @param {String} val 属性值（如果有设置该参数则执行写操作，否则执行读操作）
                                 * @return {this}
                                 */
                                NodeWrap.prototype.attr = function (name, val) {
                                    if (arguments.length === 1) {
                                        return getAttr(this[0], name);
                                    }
                                    return this.each(function (el) {
                                        return setAttr(el, name, val);
                                    });
                                };
                                /**
                                 * DOM集合dataset读写操作
                                 * @param {String} key 键名
                                 * @param {Any} val 键值（如果有设置该参数则执行写操作，否则执行读操作）
                                 * @return {this}
                                 */
                                NodeWrap.prototype.data = function (key, val) {
                                    if (arguments.length === 0) {
                                        return this[0].dataset || {};
                                    }
                                    if (arguments.length === 1) {
                                        return (this[0].dataset || {})[key];
                                    }
                                    return this.each(function (el) {
                                        (el.dataset || (el.dataset = {}))[key] = val;
                                    });
                                };
                                /**
                                 * DOM集合样式读写操作
                                 * @param {String} key 样式key
                                 * @param {String} val 样式值（如果有设置该参数则执行写操作，否则执行读操作）
                                 * @return {this}
                                 */
                                NodeWrap.prototype.css = function (key, val) {
                                    if (arguments.length === 1 && !(0, _toxicPredicateFunctions.isObject)(key)) {
                                        return getStyle(this[0], key);
                                    }
                                    return this.each(function (el) {
                                        return setStyle(el, key, val);
                                    });
                                };
                                /**
                                 * 为DOM集合增加className
                                 * @param {String} cls 要增加的className
                                 * @return {this}
                                 */
                                NodeWrap.prototype.addClass = function (cls) {
                                    return this.each(function (el) {
                                        return addClassName(el, cls);
                                    });
                                };
                                /**
                                 * 移除当前DOM集合的className
                                 * @param {String} cls 要移除的className
                                 * @return {this}
                                 */
                                NodeWrap.prototype.removeClass = function (cls) {
                                    return this.each(function (el) {
                                        return removeClassName(el, cls);
                                    });
                                };
                                /**
                                 * 检查索引0的DOM是否有className
                                 * @param {String} cls 要检查的className
                                 * @return {this}
                                 */
                                NodeWrap.prototype.hasClass = function (cls) {
                                    return hasClassName(this[0], cls);
                                };
                                /**
                                 * 为DOM集合添加事件监听
                                 * @param {String} type 事件名称
                                 * @param {Function} handler 处理函数
                                 * @param {Boolean} once 是否只监听一次
                                 * @param {Boolean} capture 是否在捕获阶段监听
                                 * @return {this}
                                 */
                                NodeWrap.prototype.on = function (type, handler, once, capture) {
                                    if (once === void 0) {
                                        once = false;
                                    }
                                    if (capture === void 0) {
                                        capture = false;
                                    }
                                    return this.each(function (el) {
                                        return addEvent(el, type, handler, once, capture);
                                    });
                                };
                                /**
                                 * 为DOM集合解除事件监听
                                 * @param {String} type 事件名称
                                 * @param {Function} handler 处理函数
                                 * @param {Boolean} once 是否只监听一次
                                 * @param {Boolean} capture 是否在捕获阶段监听
                                 * @return {this}
                                 */
                                NodeWrap.prototype.off = function (type, handler, once, capture) {
                                    if (once === void 0) {
                                        once = false;
                                    }
                                    if (capture === void 0) {
                                        capture = false;
                                    }
                                    return this.each(function (el) {
                                        return removeEvent(el, type, handler, once, capture);
                                    });
                                };
                                /**
                                 * 为DOM集合绑定事件代理
                                 * @param {String} selector 目标子元素选择器
                                 * @param {String} type 事件名称
                                 * @param {Function} handler 处理函数
                                 * @param {Boolean} capture 是否在捕获阶段监听
                                 * @return {this}
                                 */
                                NodeWrap.prototype.delegate = function (selector, type, handler, capture) {
                                    if (capture === void 0) {
                                        capture = false;
                                    }
                                    return this.each(function (el) {
                                        return addDelegate(el, selector, type, handler, capture);
                                    });
                                };
                                /**
                                 * 为DOM集合解绑事件代理
                                 * @param {String} selector 目标子元素选择器
                                 * @param {String} type 事件名称
                                 * @param {Function} handler 处理函数
                                 * @param {Boolean} capture 是否在捕获阶段监听
                                 * @return {this}
                                 */
                                NodeWrap.prototype.undelegate = function (selector, type, handler, capture) {
                                    if (capture === void 0) {
                                        capture = false;
                                    }
                                    return this.each(function (el) {
                                        return removeDelegate(el, selector, type, handler, capture);
                                    });
                                };
                                /**
                                 * 从DOM树中移除
                                 * @return {this}
                                 */
                                NodeWrap.prototype.remove = function () {
                                    return this.each(function (el) {
                                        return removeEl(el);
                                    });
                                };
                                return NodeWrap;
                            }();
                            exports.NodeWrap = NodeWrap;
                            /**
                             * 根据选择器查询并得到目标元素的wrap包装器
                             * @param {String} selector 选择器,另外支持 HTMLString||NodeList||NodeArray||HTMLElement
                             * @param {HTMLElement} container 父容器
                             * @return {Object}
                             */
                            function $(selector, container) {
                                return selector.constructor === NodeWrap ? selector : new NodeWrap(selector, container);
                            }
                            /***/
                        },
                        /* 7 */
                        /***/function (module, exports, __webpack_require__) {
                            "use strict";

                            Object.defineProperty(exports, "__esModule", {
                                value: true
                            });
                            var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
                                return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
                            } : function (obj) {
                                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
                            }; // @flow
                            var _toxicPredicateFunctions = __webpack_require__(0);
                            function formatter(tag, msg) {
                                if (!(0, _toxicPredicateFunctions.isString)(tag)) throw new TypeError("Log's method only acccept string as argument, but not " + tag + " in " + (typeof tag === "undefined" ? "undefined" : _typeof(tag)));
                                if (!(0, _toxicPredicateFunctions.isString)(msg)) return "[" + Log.GLOBAL_TAG + "] > " + tag;
                                tag = Log.FORCE_GLOBAL_TAG ? Log.GLOBAL_TAG : tag || Log.GLOBAL_TAG;
                                return "[" + tag + "] > " + msg;
                            }
                            /**
                             * Log Object
                             */
                            var Log = /** @class */function () {
                                function Log() {}
                                /**
                                 * equal to console.error, output `[${tag}] > {$msg}`
                                 * @param {string} tag optional, the header of log
                                 * @param {string} msg the message
                                 */
                                Log.error = function (tag, msg) {
                                    if (!Log.ENABLE_ERROR) {
                                        return;
                                    }
                                    (console.error || console.warn || console.log).call(console, formatter(tag, msg));
                                };
                                /**
                                 * equal to console.info, output `[${tag}] > {$msg}`
                                 * @param {string} tag optional, the header of log
                                 * @param {string} msg the message
                                 */
                                Log.info = function (tag, msg) {
                                    if (!Log.ENABLE_INFO) {
                                        return;
                                    }
                                    (console.info || console.log).call(console, formatter(tag, msg));
                                };
                                /**
                                 * equal to console.warn, output `[${tag}] > {$msg}`
                                 * @param {string} tag optional, the header of log
                                 * @param {string} msg the message
                                 */
                                Log.warn = function (tag, msg) {
                                    if (!Log.ENABLE_WARN) {
                                        return;
                                    }
                                    (console.warn || console.log).call(console, formatter(tag, msg));
                                };
                                /**
                                 * equal to console.debug, output `[${tag}] > {$msg}`
                                 * @param {string} tag optional, the header of log
                                 * @param {string} msg the message
                                 */
                                Log.debug = function (tag, msg) {
                                    if (!Log.ENABLE_DEBUG) {
                                        return;
                                    }
                                    (console.debug || console.log).call(console, formatter(tag, msg));
                                };
                                /**
                                 * equal to console.verbose, output `[${tag}] > {$msg}`
                                 * @param {string} tag optional, the header of log
                                 * @param {string} msg the message
                                 */
                                Log.verbose = function (tag, msg) {
                                    if (!Log.ENABLE_VERBOSE) {
                                        return;
                                    }
                                    console.log(formatter(tag, msg));
                                };
                                /**
                                 * @member {string}
                                 */
                                Log.GLOBAL_TAG = 'chimee';
                                /**
                                 * @member {boolean}
                                 */
                                Log.FORCE_GLOBAL_TAG = false;
                                /**
                                 * @member {boolean}
                                 */
                                Log.ENABLE_ERROR = true;
                                /**
                                 * @member {boolean}
                                 */
                                Log.ENABLE_INFO = true;
                                /**
                                 * @member {boolean}
                                 */
                                Log.ENABLE_WARN = true;
                                /**
                                 * @member {boolean}
                                 */
                                Log.ENABLE_DEBUG = true;
                                /**
                                 * @member {boolean}
                                 */
                                Log.ENABLE_VERBOSE = true;
                                return Log;
                            }();
                            exports.default = Log;
                            /***/
                        },
                        /* 8 */
                        /***/function (module, exports, __webpack_require__) {
                            var __WEBPACK_AMD_DEFINE_RESULT__; /**
                                                               * UAParser.js v0.7.17
                                                               * Lightweight JavaScript-based User-Agent string parser
                                                               * https://github.com/faisalman/ua-parser-js
                                                               *
                                                               * Copyright © 2012-2016 Faisal Salman <fyzlman@gmail.com>
                                                               * Dual licensed under GPLv2 & MIT
                                                               */
                            (function (window, undefined) {
                                'use strict';
                                //////////////
                                // Constants
                                /////////////

                                var LIBVERSION = '0.7.17',
                                    EMPTY = '',
                                    UNKNOWN = '?',
                                    FUNC_TYPE = 'function',
                                    UNDEF_TYPE = 'undefined',
                                    OBJ_TYPE = 'object',
                                    STR_TYPE = 'string',
                                    MAJOR = 'major',

                                // deprecated
                                MODEL = 'model',
                                    NAME = 'name',
                                    TYPE = 'type',
                                    VENDOR = 'vendor',
                                    VERSION = 'version',
                                    ARCHITECTURE = 'architecture',
                                    CONSOLE = 'console',
                                    MOBILE = 'mobile',
                                    TABLET = 'tablet',
                                    SMARTTV = 'smarttv',
                                    WEARABLE = 'wearable',
                                    EMBEDDED = 'embedded';
                                ///////////
                                // Helper
                                //////////
                                var util = {
                                    extend: function extend(regexes, extensions) {
                                        var margedRegexes = {};
                                        for (var i in regexes) {
                                            if (extensions[i] && extensions[i].length % 2 === 0) {
                                                margedRegexes[i] = extensions[i].concat(regexes[i]);
                                            } else {
                                                margedRegexes[i] = regexes[i];
                                            }
                                        }
                                        return margedRegexes;
                                    },
                                    has: function has(str1, str2) {
                                        if (typeof str1 === "string") {
                                            return str2.toLowerCase().indexOf(str1.toLowerCase()) !== -1;
                                        } else {
                                            return false;
                                        }
                                    },
                                    lowerize: function lowerize(str) {
                                        return str.toLowerCase();
                                    },
                                    major: function major(version) {
                                        return (typeof version === 'undefined' ? 'undefined' : _typeof2(version)) === STR_TYPE ? version.replace(/[^\d\.]/g, '').split(".")[0] : undefined;
                                    },
                                    trim: function trim(str) {
                                        return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
                                    }
                                };
                                ///////////////
                                // Map helper
                                //////////////
                                var mapper = {
                                    rgx: function rgx(ua, arrays) {
                                        //var result = {},
                                        var i = 0,
                                            j,
                                            k,
                                            p,
                                            q,
                                            matches,
                                            match; //, args = arguments;
                                        /*// construct object barebones
                                        for (p = 0; p < args[1].length; p++) {
                                            q = args[1][p];
                                            result[typeof q === OBJ_TYPE ? q[0] : q] = undefined;
                                        }*/
                                        // loop through all regexes maps
                                        while (i < arrays.length && !matches) {
                                            var regex = arrays[i],

                                            // even sequence (0,2,4,..)
                                            props = arrays[i + 1]; // odd sequence (1,3,5,..)
                                            j = k = 0;
                                            // try matching uastring with regexes
                                            while (j < regex.length && !matches) {
                                                matches = regex[j++].exec(ua);
                                                if (!!matches) {
                                                    for (p = 0; p < props.length; p++) {
                                                        match = matches[++k];
                                                        q = props[p];
                                                        // check if given property is actually array
                                                        if ((typeof q === 'undefined' ? 'undefined' : _typeof2(q)) === OBJ_TYPE && q.length > 0) {
                                                            if (q.length == 2) {
                                                                if (_typeof2(q[1]) == FUNC_TYPE) {
                                                                    // assign modified match
                                                                    this[q[0]] = q[1].call(this, match);
                                                                } else {
                                                                    // assign given value, ignore regex match
                                                                    this[q[0]] = q[1];
                                                                }
                                                            } else if (q.length == 3) {
                                                                // check whether function or regex
                                                                if (_typeof2(q[1]) === FUNC_TYPE && !(q[1].exec && q[1].test)) {
                                                                    // call function (usually string mapper)
                                                                    this[q[0]] = match ? q[1].call(this, match, q[2]) : undefined;
                                                                } else {
                                                                    // sanitize match using given regex
                                                                    this[q[0]] = match ? match.replace(q[1], q[2]) : undefined;
                                                                }
                                                            } else if (q.length == 4) {
                                                                this[q[0]] = match ? q[3].call(this, match.replace(q[1], q[2])) : undefined;
                                                            }
                                                        } else {
                                                            this[q] = match ? match : undefined;
                                                        }
                                                    }
                                                }
                                            }
                                            i += 2;
                                        }
                                        // console.log(this);
                                        //return this;
                                    },
                                    str: function str(_str, map) {
                                        for (var i in map) {
                                            // check if array
                                            if (_typeof2(map[i]) === OBJ_TYPE && map[i].length > 0) {
                                                for (var j = 0; j < map[i].length; j++) {
                                                    if (util.has(map[i][j], _str)) {
                                                        return i === UNKNOWN ? undefined : i;
                                                    }
                                                }
                                            } else if (util.has(map[i], _str)) {
                                                return i === UNKNOWN ? undefined : i;
                                            }
                                        }
                                        return _str;
                                    }
                                };
                                ///////////////
                                // String map
                                //////////////
                                var maps = {
                                    browser: {
                                        oldsafari: {
                                            version: {
                                                '1.0': '/8',
                                                '1.2': '/1',
                                                '1.3': '/3',
                                                '2.0': '/412',
                                                '2.0.2': '/416',
                                                '2.0.3': '/417',
                                                '2.0.4': '/419',
                                                '?': '/'
                                            }
                                        }
                                    },
                                    device: {
                                        amazon: {
                                            model: {
                                                'Fire Phone': ['SD', 'KF']
                                            }
                                        },
                                        sprint: {
                                            model: {
                                                'Evo Shift 4G': '7373KT'
                                            },
                                            vendor: {
                                                'HTC': 'APA',
                                                'Sprint': 'Sprint'
                                            }
                                        }
                                    },
                                    os: {
                                        windows: {
                                            version: {
                                                'ME': '4.90',
                                                'NT 3.11': 'NT3.51',
                                                'NT 4.0': 'NT4.0',
                                                '2000': 'NT 5.0',
                                                'XP': ['NT 5.1', 'NT 5.2'],
                                                'Vista': 'NT 6.0',
                                                '7': 'NT 6.1',
                                                '8': 'NT 6.2',
                                                '8.1': 'NT 6.3',
                                                '10': ['NT 6.4', 'NT 10.0'],
                                                'RT': 'ARM'
                                            }
                                        }
                                    }
                                };
                                //////////////
                                // Regex map
                                /////////////
                                var regexes = {
                                    browser: [[
                                    // Presto based
                                    /(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i // Opera < 9.80
                                    ], [NAME, VERSION], [/(opios)[\/\s]+([\w\.]+)/i // Opera mini on iphone >= 8.0
                                    ], [[NAME, 'Opera Mini'], VERSION], [/\s(opr)\/([\w\.]+)/i // Opera Webkit
                                    ], [[NAME, 'Opera'], VERSION], [
                                    // Mixed
                                    /(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]+)*/i,
                                    // Lunascape/Maxthon/Netfront/Jasmine/Blazer
                                    // Trident based
                                    /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i,
                                    // Avant/IEMobile/SlimBrowser/Baidu
                                    /(?:ms|\()(ie)\s([\w\.]+)/i,
                                    // Webkit/KHTML based
                                    /(rekonq)\/([\w\.]+)*/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser)\/([\w\.-]+)/i
                                    // Chromium/Flock/RockMelt/Midori/Epiphany/Silk/Skyfire/Bolt/Iron/Iridium/PhantomJS/Bowser
                                    ], [NAME, VERSION], [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i // IE11
                                    ], [[NAME, 'IE'], VERSION], [/(edge)\/((\d+)?[\w\.]+)/i // Microsoft Edge
                                    ], [NAME, VERSION], [/(yabrowser)\/([\w\.]+)/i // Yandex
                                    ], [[NAME, 'Yandex'], VERSION], [/(puffin)\/([\w\.]+)/i // Puffin
                                    ], [[NAME, 'Puffin'], VERSION], [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i
                                    // UCBrowser
                                    ], [[NAME, 'UCBrowser'], VERSION], [/(comodo_dragon)\/([\w\.]+)/i // Comodo Dragon
                                    ], [[NAME, /_/g, ' '], VERSION], [/(micromessenger)\/([\w\.]+)/i // WeChat
                                    ], [[NAME, 'WeChat'], VERSION], [/(QQ)\/([\d\.]+)/i // QQ, aka ShouQ
                                    ], [NAME, VERSION], [/m?(qqbrowser)[\/\s]?([\w\.]+)/i // QQBrowser
                                    ], [NAME, VERSION], [/xiaomi\/miuibrowser\/([\w\.]+)/i // MIUI Browser
                                    ], [VERSION, [NAME, 'MIUI Browser']], [/;fbav\/([\w\.]+);/i // Facebook App for iOS & Android
                                    ], [VERSION, [NAME, 'Facebook']], [/headlesschrome(?:\/([\w\.]+)|\s)/i // Chrome Headless
                                    ], [VERSION, [NAME, 'Chrome Headless']], [/\swv\).+(chrome)\/([\w\.]+)/i // Chrome WebView
                                    ], [[NAME, /(.+)/, '$1 WebView'], VERSION], [/((?:oculus|samsung)browser)\/([\w\.]+)/i], [[NAME, /(.+(?:g|us))(.+)/, '$1 $2'], VERSION], [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i // Android Browser
                                    ], [VERSION, [NAME, 'Android Browser']], [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i
                                    // Chrome/OmniWeb/Arora/Tizen/Nokia
                                    ], [NAME, VERSION], [/(dolfin)\/([\w\.]+)/i // Dolphin
                                    ], [[NAME, 'Dolphin'], VERSION], [/((?:android.+)crmo|crios)\/([\w\.]+)/i // Chrome for Android/iOS
                                    ], [[NAME, 'Chrome'], VERSION], [/(coast)\/([\w\.]+)/i // Opera Coast
                                    ], [[NAME, 'Opera Coast'], VERSION], [/fxios\/([\w\.-]+)/i // Firefox for iOS
                                    ], [VERSION, [NAME, 'Firefox']], [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i // Mobile Safari
                                    ], [VERSION, [NAME, 'Mobile Safari']], [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i // Safari & Safari Mobile
                                    ], [VERSION, NAME], [/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i // Google Search Appliance on iOS
                                    ], [[NAME, 'GSA'], VERSION], [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i // Safari < 3.0
                                    ], [NAME, [VERSION, mapper.str, maps.browser.oldsafari.version]], [/(konqueror)\/([\w\.]+)/i, /(webkit|khtml)\/([\w\.]+)/i], [NAME, VERSION], [
                                    // Gecko based
                                    /(navigator|netscape)\/([\w\.-]+)/i // Netscape
                                    ], [[NAME, 'Netscape'], VERSION], [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,
                                    // IceDragon/Iceweasel/Camino/Chimera/Fennec/Maemo/Minimo/Conkeror
                                    /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix)\/([\w\.-]+)/i,
                                    // Firefox/SeaMonkey/K-Meleon/IceCat/IceApe/Firebird/Phoenix
                                    /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i,
                                    // Other
                                    /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i,
                                    // Polaris/Lynx/Dillo/iCab/Doris/Amaya/w3m/NetSurf/Sleipnir
                                    /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]+)*/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i // Mosaic
                                    ], [NAME, VERSION]
                                    /* /////////////////////
                                    // Media players BEGIN
                                    ////////////////////////
                                                 , [
                                                 /(apple(?:coremedia|))\/((\d+)[\w\._]+)/i,                          // Generic Apple CoreMedia
                                    /(coremedia) v((\d+)[\w\._]+)/i
                                    ], [NAME, VERSION], [
                                                 /(aqualung|lyssna|bsplayer)\/((\d+)?[\w\.-]+)/i                     // Aqualung/Lyssna/BSPlayer
                                    ], [NAME, VERSION], [
                                                 /(ares|ossproxy)\s((\d+)[\w\.-]+)/i                                 // Ares/OSSProxy
                                    ], [NAME, VERSION], [
                                                 /(audacious|audimusicstream|amarok|bass|core|dalvik|gnomemplayer|music on console|nsplayer|psp-internetradioplayer|videos)\/((\d+)[\w\.-]+)/i,
                                                                                                        // Audacious/AudiMusicStream/Amarok/BASS/OpenCORE/Dalvik/GnomeMplayer/MoC
                                                                                                        // NSPlayer/PSP-InternetRadioPlayer/Videos
                                    /(clementine|music player daemon)\s((\d+)[\w\.-]+)/i,               // Clementine/MPD
                                    /(lg player|nexplayer)\s((\d+)[\d\.]+)/i,
                                    /player\/(nexplayer|lg player)\s((\d+)[\w\.-]+)/i                   // NexPlayer/LG Player
                                    ], [NAME, VERSION], [
                                    /(nexplayer)\s((\d+)[\w\.-]+)/i                                     // Nexplayer
                                    ], [NAME, VERSION], [
                                                 /(flrp)\/((\d+)[\w\.-]+)/i                                          // Flip Player
                                    ], [[NAME, 'Flip Player'], VERSION], [
                                                 /(fstream|nativehost|queryseekspider|ia-archiver|facebookexternalhit)/i
                                                                                                        // FStream/NativeHost/QuerySeekSpider/IA Archiver/facebookexternalhit
                                    ], [NAME], [
                                                 /(gstreamer) souphttpsrc (?:\([^\)]+\)){0,1} libsoup\/((\d+)[\w\.-]+)/i
                                                                                                        // Gstreamer
                                    ], [NAME, VERSION], [
                                                 /(htc streaming player)\s[\w_]+\s\/\s((\d+)[\d\.]+)/i,              // HTC Streaming Player
                                    /(java|python-urllib|python-requests|wget|libcurl)\/((\d+)[\w\.-_]+)/i,
                                                                                                        // Java/urllib/requests/wget/cURL
                                    /(lavf)((\d+)[\d\.]+)/i                                             // Lavf (FFMPEG)
                                    ], [NAME, VERSION], [
                                                 /(htc_one_s)\/((\d+)[\d\.]+)/i                                      // HTC One S
                                    ], [[NAME, /_/g, ' '], VERSION], [
                                                 /(mplayer)(?:\s|\/)(?:(?:sherpya-){0,1}svn)(?:-|\s)(r\d+(?:-\d+[\w\.-]+){0,1})/i
                                                                                                        // MPlayer SVN
                                    ], [NAME, VERSION], [
                                                 /(mplayer)(?:\s|\/|[unkow-]+)((\d+)[\w\.-]+)/i                      // MPlayer
                                    ], [NAME, VERSION], [
                                                 /(mplayer)/i,                                                       // MPlayer (no other info)
                                    /(yourmuze)/i,                                                      // YourMuze
                                    /(media player classic|nero showtime)/i                             // Media Player Classic/Nero ShowTime
                                    ], [NAME], [
                                                 /(nero (?:home|scout))\/((\d+)[\w\.-]+)/i                           // Nero Home/Nero Scout
                                    ], [NAME, VERSION], [
                                                 /(nokia\d+)\/((\d+)[\w\.-]+)/i                                      // Nokia
                                    ], [NAME, VERSION], [
                                                 /\s(songbird)\/((\d+)[\w\.-]+)/i                                    // Songbird/Philips-Songbird
                                    ], [NAME, VERSION], [
                                                 /(winamp)3 version ((\d+)[\w\.-]+)/i,                               // Winamp
                                    /(winamp)\s((\d+)[\w\.-]+)/i,
                                    /(winamp)mpeg\/((\d+)[\w\.-]+)/i
                                    ], [NAME, VERSION], [
                                                 /(ocms-bot|tapinradio|tunein radio|unknown|winamp|inlight radio)/i  // OCMS-bot/tap in radio/tunein/unknown/winamp (no other info)
                                                                                                        // inlight radio
                                    ], [NAME], [
                                                 /(quicktime|rma|radioapp|radioclientapplication|soundtap|totem|stagefright|streamium)\/((\d+)[\w\.-]+)/i
                                                                                                        // QuickTime/RealMedia/RadioApp/RadioClientApplication/
                                                                                                        // SoundTap/Totem/Stagefright/Streamium
                                    ], [NAME, VERSION], [
                                                 /(smp)((\d+)[\d\.]+)/i                                              // SMP
                                    ], [NAME, VERSION], [
                                                 /(vlc) media player - version ((\d+)[\w\.]+)/i,                     // VLC Videolan
                                    /(vlc)\/((\d+)[\w\.-]+)/i,
                                    /(xbmc|gvfs|xine|xmms|irapp)\/((\d+)[\w\.-]+)/i,                    // XBMC/gvfs/Xine/XMMS/irapp
                                    /(foobar2000)\/((\d+)[\d\.]+)/i,                                    // Foobar2000
                                    /(itunes)\/((\d+)[\d\.]+)/i                                         // iTunes
                                    ], [NAME, VERSION], [
                                                 /(wmplayer)\/((\d+)[\w\.-]+)/i,                                     // Windows Media Player
                                    /(windows-media-player)\/((\d+)[\w\.-]+)/i
                                    ], [[NAME, /-/g, ' '], VERSION], [
                                                 /windows\/((\d+)[\w\.-]+) upnp\/[\d\.]+ dlnadoc\/[\d\.]+ (home media server)/i
                                                                                                        // Windows Media Server
                                    ], [VERSION, [NAME, 'Windows']], [
                                                 /(com\.riseupradioalarm)\/((\d+)[\d\.]*)/i                          // RiseUP Radio Alarm
                                    ], [NAME, VERSION], [
                                                 /(rad.io)\s((\d+)[\d\.]+)/i,                                        // Rad.io
                                    /(radio.(?:de|at|fr))\s((\d+)[\d\.]+)/i
                                    ], [[NAME, 'rad.io'], VERSION]
                                                 //////////////////////
                                    // Media players END
                                    ////////////////////*/
                                    ],
                                    cpu: [[/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i // AMD64
                                    ], [[ARCHITECTURE, 'amd64']], [/(ia32(?=;))/i // IA32 (quicktime)
                                    ], [[ARCHITECTURE, util.lowerize]], [/((?:i[346]|x)86)[;\)]/i // IA32
                                    ], [[ARCHITECTURE, 'ia32']], [
                                    // PocketPC mistakenly identified as PowerPC
                                    /windows\s(ce|mobile);\sppc;/i], [[ARCHITECTURE, 'arm']], [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i // PowerPC
                                    ], [[ARCHITECTURE, /ower/, '', util.lowerize]], [/(sun4\w)[;\)]/i // SPARC
                                    ], [[ARCHITECTURE, 'sparc']], [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+;))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i
                                    // IA64, 68K, ARM/64, AVR/32, IRIX/64, MIPS/64, SPARC/64, PA-RISC
                                    ], [[ARCHITECTURE, util.lowerize]]],
                                    device: [[/\((ipad|playbook);[\w\s\);-]+(rim|apple)/i // iPad/PlayBook
                                    ], [MODEL, VENDOR, [TYPE, TABLET]], [/applecoremedia\/[\w\.]+ \((ipad)/ // iPad
                                    ], [MODEL, [VENDOR, 'Apple'], [TYPE, TABLET]], [/(apple\s{0,1}tv)/i // Apple TV
                                    ], [[MODEL, 'Apple TV'], [VENDOR, 'Apple']], [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(hp).+(tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i // Dell Streak
                                    ], [VENDOR, MODEL, [TYPE, TABLET]], [/(kf[A-z]+)\sbuild\/[\w\.]+.*silk\//i // Kindle Fire HD
                                    ], [MODEL, [VENDOR, 'Amazon'], [TYPE, TABLET]], [/(sd|kf)[0349hijorstuw]+\sbuild\/[\w\.]+.*silk\//i // Fire Phone
                                    ], [[MODEL, mapper.str, maps.device.amazon.model], [VENDOR, 'Amazon'], [TYPE, MOBILE]], [/\((ip[honed|\s\w*]+);.+(apple)/i // iPod/iPhone
                                    ], [MODEL, VENDOR, [TYPE, MOBILE]], [/\((ip[honed|\s\w*]+);/i // iPod/iPhone
                                    ], [MODEL, [VENDOR, 'Apple'], [TYPE, MOBILE]], [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]+)*/i,
                                    // BenQ/Palm/Sony-Ericsson/Acer/Asus/Dell/Meizu/Motorola/Polytron
                                    /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i // Asus
                                    ], [VENDOR, MODEL, [TYPE, MOBILE]], [/\(bb10;\s(\w+)/i // BlackBerry 10
                                    ], [MODEL, [VENDOR, 'BlackBerry'], [TYPE, MOBILE]], [
                                    // Asus Tablets
                                    /android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone)/i], [MODEL, [VENDOR, 'Asus'], [TYPE, TABLET]], [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i], [[VENDOR, 'Sony'], [MODEL, 'Xperia Tablet'], [TYPE, TABLET]], [/android.+\s([c-g]\d{4}|so[-l]\w+)\sbuild\//i], [MODEL, [VENDOR, 'Sony'], [TYPE, MOBILE]], [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i // Nintendo
                                    ], [VENDOR, MODEL, [TYPE, CONSOLE]], [/android.+;\s(shield)\sbuild/i // Nvidia
                                    ], [MODEL, [VENDOR, 'Nvidia'], [TYPE, CONSOLE]], [/(playstation\s[34portablevi]+)/i // Playstation
                                    ], [MODEL, [VENDOR, 'Sony'], [TYPE, CONSOLE]], [/(sprint\s(\w+))/i // Sprint Phones
                                    ], [[VENDOR, mapper.str, maps.device.sprint.vendor], [MODEL, mapper.str, maps.device.sprint.model], [TYPE, MOBILE]], [/(lenovo)\s?(S(?:5000|6000)+(?:[-][\w+]))/i // Lenovo tablets
                                    ], [VENDOR, MODEL, [TYPE, TABLET]], [/(htc)[;_\s-]+([\w\s]+(?=\))|\w+)*/i, /(zte)-(\w+)*/i, /(alcatel|geeksphone|lenovo|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]+)*/i
                                    // Alcatel/GeeksPhone/Lenovo/Nexian/Panasonic/Sony
                                    ], [VENDOR, [MODEL, /_/g, ' '], [TYPE, MOBILE]], [/(nexus\s9)/i // HTC Nexus 9
                                    ], [MODEL, [VENDOR, 'HTC'], [TYPE, TABLET]], [/d\/huawei([\w\s-]+)[;\)]/i, /(nexus\s6p)/i // Huawei
                                    ], [MODEL, [VENDOR, 'Huawei'], [TYPE, MOBILE]], [/(microsoft);\s(lumia[\s\w]+)/i // Microsoft Lumia
                                    ], [VENDOR, MODEL, [TYPE, MOBILE]], [/[\s\(;](xbox(?:\sone)?)[\s\);]/i // Microsoft Xbox
                                    ], [MODEL, [VENDOR, 'Microsoft'], [TYPE, CONSOLE]], [/(kin\.[onetw]{3})/i // Microsoft Kin
                                    ], [[MODEL, /\./g, ' '], [VENDOR, 'Microsoft'], [TYPE, MOBILE]], [
                                    // Motorola
                                    /\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?(:?\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w+)*/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i], [MODEL, [VENDOR, 'Motorola'], [TYPE, MOBILE]], [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i], [MODEL, [VENDOR, 'Motorola'], [TYPE, TABLET]], [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i // HbbTV devices
                                    ], [[VENDOR, util.trim], [MODEL, util.trim], [TYPE, SMARTTV]], [/hbbtv.+maple;(\d+)/i], [[MODEL, /^/, 'SmartTV'], [VENDOR, 'Samsung'], [TYPE, SMARTTV]], [/\(dtv[\);].+(aquos)/i // Sharp
                                    ], [MODEL, [VENDOR, 'Sharp'], [TYPE, SMARTTV]], [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i], [[VENDOR, 'Samsung'], MODEL, [TYPE, TABLET]], [/smart-tv.+(samsung)/i], [VENDOR, [TYPE, SMARTTV], MODEL], [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)*/i, /sec-((sgh\w+))/i], [[VENDOR, 'Samsung'], MODEL, [TYPE, MOBILE]], [/sie-(\w+)*/i // Siemens
                                    ], [MODEL, [VENDOR, 'Siemens'], [TYPE, MOBILE]], [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]+)*/i], [[VENDOR, 'Nokia'], MODEL, [TYPE, MOBILE]], [/android\s3\.[\s\w;-]{10}(a\d{3})/i // Acer
                                    ], [MODEL, [VENDOR, 'Acer'], [TYPE, TABLET]], [/android.+([vl]k\-?\d{3})\s+build/i // LG Tablet
                                    ], [MODEL, [VENDOR, 'LG'], [TYPE, TABLET]], [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i // LG Tablet
                                    ], [[VENDOR, 'LG'], MODEL, [TYPE, TABLET]], [/(lg) netcast\.tv/i // LG SmartTV
                                    ], [VENDOR, MODEL, [TYPE, SMARTTV]], [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w+)*/i, /android.+lg(\-?[\d\w]+)\s+build/i], [MODEL, [VENDOR, 'LG'], [TYPE, MOBILE]], [/android.+(ideatab[a-z0-9\-\s]+)/i // Lenovo
                                    ], [MODEL, [VENDOR, 'Lenovo'], [TYPE, TABLET]], [/linux;.+((jolla));/i // Jolla
                                    ], [VENDOR, MODEL, [TYPE, MOBILE]], [/((pebble))app\/[\d\.]+\s/i // Pebble
                                    ], [VENDOR, MODEL, [TYPE, WEARABLE]], [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i // OPPO
                                    ], [VENDOR, MODEL, [TYPE, MOBILE]], [/crkey/i // Google Chromecast
                                    ], [[MODEL, 'Chromecast'], [VENDOR, 'Google']], [/android.+;\s(glass)\s\d/i // Google Glass
                                    ], [MODEL, [VENDOR, 'Google'], [TYPE, WEARABLE]], [/android.+;\s(pixel c)\s/i // Google Pixel C
                                    ], [MODEL, [VENDOR, 'Google'], [TYPE, TABLET]], [/android.+;\s(pixel xl|pixel)\s/i // Google Pixel
                                    ], [MODEL, [VENDOR, 'Google'], [TYPE, MOBILE]], [/android.+(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i, /android.+(mi[\s\-_]*(?:one|one[\s_]plus|note lte)?[\s_]*(?:\d\w)?)\s+build/i, /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+)?)\s+build/i // Redmi Phones
                                    ], [[MODEL, /_/g, ' '], [VENDOR, 'Xiaomi'], [TYPE, MOBILE]], [/android.+(mi[\s\-_]*(?:pad)?(?:[\s_]*[\w\s]+)?)\s+build/i // Mi Pad tablets
                                    ], [[MODEL, /_/g, ' '], [VENDOR, 'Xiaomi'], [TYPE, TABLET]], [/android.+;\s(m[1-5]\snote)\sbuild/i // Meizu Tablet
                                    ], [MODEL, [VENDOR, 'Meizu'], [TYPE, TABLET]], [/android.+a000(1)\s+build/i // OnePlus
                                    ], [MODEL, [VENDOR, 'OnePlus'], [TYPE, MOBILE]], [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i // RCA Tablets
                                    ], [MODEL, [VENDOR, 'RCA'], [TYPE, TABLET]], [/android.+[;\/]\s*(Venue[\d\s]*)\s+build/i // Dell Venue Tablets
                                    ], [MODEL, [VENDOR, 'Dell'], [TYPE, TABLET]], [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i // Verizon Tablet
                                    ], [MODEL, [VENDOR, 'Verizon'], [TYPE, TABLET]], [/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i // Barnes & Noble Tablet
                                    ], [[VENDOR, 'Barnes & Noble'], MODEL, [TYPE, TABLET]], [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i // Barnes & Noble Tablet
                                    ], [MODEL, [VENDOR, 'NuVision'], [TYPE, TABLET]], [/android.+[;\/]\s*(zte)?.+(k\d{2})\s+build/i // ZTE K Series Tablet
                                    ], [[VENDOR, 'ZTE'], MODEL, [TYPE, TABLET]], [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i // Swiss GEN Mobile
                                    ], [MODEL, [VENDOR, 'Swiss'], [TYPE, MOBILE]], [/android.+[;\/]\s*(zur\d{3})\s+build/i // Swiss ZUR Tablet
                                    ], [MODEL, [VENDOR, 'Swiss'], [TYPE, TABLET]], [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i // Zeki Tablets
                                    ], [MODEL, [VENDOR, 'Zeki'], [TYPE, TABLET]], [/(android).+[;\/]\s+([YR]\d{2}x?.*)\s+build/i, /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(.+)\s+build/i // Dragon Touch Tablet
                                    ], [[VENDOR, 'Dragon Touch'], MODEL, [TYPE, TABLET]], [/android.+[;\/]\s*(NS-?.+)\s+build/i // Insignia Tablets
                                    ], [MODEL, [VENDOR, 'Insignia'], [TYPE, TABLET]], [/android.+[;\/]\s*((NX|Next)-?.+)\s+build/i // NextBook Tablets
                                    ], [MODEL, [VENDOR, 'NextBook'], [TYPE, TABLET]], [/android.+[;\/]\s*(Xtreme\_?)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i], [[VENDOR, 'Voice'], MODEL, [TYPE, MOBILE]], [/android.+[;\/]\s*(LVTEL\-?)?(V1[12])\s+build/i // LvTel Phones
                                    ], [[VENDOR, 'LvTel'], MODEL, [TYPE, MOBILE]], [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i // Envizen Tablets
                                    ], [MODEL, [VENDOR, 'Envizen'], [TYPE, TABLET]], [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(.*\b)\s+build/i // Le Pan Tablets
                                    ], [VENDOR, MODEL, [TYPE, TABLET]], [/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i // MachSpeed Tablets
                                    ], [MODEL, [VENDOR, 'MachSpeed'], [TYPE, TABLET]], [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i // Trinity Tablets
                                    ], [VENDOR, MODEL, [TYPE, TABLET]], [/android.+[;\/]\s*TU_(1491)\s+build/i // Rotor Tablets
                                    ], [MODEL, [VENDOR, 'Rotor'], [TYPE, TABLET]], [/android.+(KS(.+))\s+build/i // Amazon Kindle Tablets
                                    ], [MODEL, [VENDOR, 'Amazon'], [TYPE, TABLET]], [/android.+(Gigaset)[\s\-]+(Q.+)\s+build/i // Gigaset Tablets
                                    ], [VENDOR, MODEL, [TYPE, TABLET]], [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i // Unidentifiable Mobile
                                    ], [[TYPE, util.lowerize], VENDOR, MODEL], [/(android.+)[;\/].+build/i // Generic Android Device
                                    ], [MODEL, [VENDOR, 'Generic']]
                                    /*//////////////////////////
                                        // TODO: move to string map
                                        ////////////////////////////
                                                         /(C6603)/i                                                          // Sony Xperia Z C6603
                                        ], [[MODEL, 'Xperia Z C6603'], [VENDOR, 'Sony'], [TYPE, MOBILE]], [
                                        /(C6903)/i                                                          // Sony Xperia Z 1
                                        ], [[MODEL, 'Xperia Z 1'], [VENDOR, 'Sony'], [TYPE, MOBILE]], [
                                                         /(SM-G900[F|H])/i                                                   // Samsung Galaxy S5
                                        ], [[MODEL, 'Galaxy S5'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
                                        /(SM-G7102)/i                                                       // Samsung Galaxy Grand 2
                                        ], [[MODEL, 'Galaxy Grand 2'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
                                        /(SM-G530H)/i                                                       // Samsung Galaxy Grand Prime
                                        ], [[MODEL, 'Galaxy Grand Prime'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
                                        /(SM-G313HZ)/i                                                      // Samsung Galaxy V
                                        ], [[MODEL, 'Galaxy V'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
                                        /(SM-T805)/i                                                        // Samsung Galaxy Tab S 10.5
                                        ], [[MODEL, 'Galaxy Tab S 10.5'], [VENDOR, 'Samsung'], [TYPE, TABLET]], [
                                        /(SM-G800F)/i                                                       // Samsung Galaxy S5 Mini
                                        ], [[MODEL, 'Galaxy S5 Mini'], [VENDOR, 'Samsung'], [TYPE, MOBILE]], [
                                        /(SM-T311)/i                                                        // Samsung Galaxy Tab 3 8.0
                                        ], [[MODEL, 'Galaxy Tab 3 8.0'], [VENDOR, 'Samsung'], [TYPE, TABLET]], [
                                                         /(T3C)/i                                                            // Advan Vandroid T3C
                                        ], [MODEL, [VENDOR, 'Advan'], [TYPE, TABLET]], [
                                        /(ADVAN T1J\+)/i                                                    // Advan Vandroid T1J+
                                        ], [[MODEL, 'Vandroid T1J+'], [VENDOR, 'Advan'], [TYPE, TABLET]], [
                                        /(ADVAN S4A)/i                                                      // Advan Vandroid S4A
                                        ], [[MODEL, 'Vandroid S4A'], [VENDOR, 'Advan'], [TYPE, MOBILE]], [
                                                         /(V972M)/i                                                          // ZTE V972M
                                        ], [MODEL, [VENDOR, 'ZTE'], [TYPE, MOBILE]], [
                                                         /(i-mobile)\s(IQ\s[\d\.]+)/i                                        // i-mobile IQ
                                        ], [VENDOR, MODEL, [TYPE, MOBILE]], [
                                        /(IQ6.3)/i                                                          // i-mobile IQ IQ 6.3
                                        ], [[MODEL, 'IQ 6.3'], [VENDOR, 'i-mobile'], [TYPE, MOBILE]], [
                                        /(i-mobile)\s(i-style\s[\d\.]+)/i                                   // i-mobile i-STYLE
                                        ], [VENDOR, MODEL, [TYPE, MOBILE]], [
                                        /(i-STYLE2.1)/i                                                     // i-mobile i-STYLE 2.1
                                        ], [[MODEL, 'i-STYLE 2.1'], [VENDOR, 'i-mobile'], [TYPE, MOBILE]], [
                                                         /(mobiistar touch LAI 512)/i                                        // mobiistar touch LAI 512
                                        ], [[MODEL, 'Touch LAI 512'], [VENDOR, 'mobiistar'], [TYPE, MOBILE]], [
                                                         /////////////
                                        // END TODO
                                        ///////////*/
                                    ],
                                    engine: [[/windows.+\sedge\/([\w\.]+)/i // EdgeHTML
                                    ], [VERSION, [NAME, 'EdgeHTML']], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i // iCab
                                    ], [NAME, VERSION], [/rv\:([\w\.]+).*(gecko)/i // Gecko
                                    ], [VERSION, NAME]],
                                    os: [[
                                    // Windows based
                                    /microsoft\s(windows)\s(vista|xp)/i // Windows (iTunes)
                                    ], [NAME, VERSION], [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s]+\w)*/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i], [NAME, [VERSION, mapper.str, maps.os.windows.version]], [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i], [[NAME, 'Windows'], [VERSION, mapper.str, maps.os.windows.version]], [
                                    // Mobile/Embedded OS
                                    /\((bb)(10);/i // BlackBerry 10
                                    ], [[NAME, 'BlackBerry'], VERSION], [/(blackberry)\w*\/?([\w\.]+)*/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|contiki)[\/\s-]?([\w\.]+)*/i,
                                    // Android/WebOS/Palm/QNX/Bada/RIM/MeeGo/Contiki
                                    /linux;.+(sailfish);/i // Sailfish OS
                                    ], [NAME, VERSION], [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]+)*/i // Symbian
                                    ], [[NAME, 'Symbian'], VERSION], [/\((series40);/i // Series 40
                                    ], [NAME], [/mozilla.+\(mobile;.+gecko.+firefox/i // Firefox OS
                                    ], [[NAME, 'Firefox OS'], VERSION], [
                                    // Console
                                    /(nintendo|playstation)\s([wids34portablevu]+)/i,
                                    // GNU/Linux based
                                    /(mint)[\/\s\(]?(\w+)*/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|[open]*suse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]+)*/i,
                                    // Joli/Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware
                                    // Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus
                                    /(hurd|linux)\s?([\w\.]+)*/i, /(gnu)\s?([\w\.]+)*/i // GNU
                                    ], [NAME, VERSION], [/(cros)\s[\w]+\s([\w\.]+\w)/i // Chromium OS
                                    ], [[NAME, 'Chromium OS'], VERSION], [
                                    // Solaris
                                    /(sunos)\s?([\w\.]+\d)*/i // Solaris
                                    ], [[NAME, 'Solaris'], VERSION], [
                                    // BSD based
                                    /\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]+)*/i // FreeBSD/NetBSD/OpenBSD/PC-BSD/DragonFly
                                    ], [NAME, VERSION], [/(haiku)\s(\w+)/i // Haiku
                                    ], [NAME, VERSION], [/cfnetwork\/.+darwin/i, /ip[honead]+(?:.*os\s([\w]+)\slike\smac|;\sopera)/i // iOS
                                    ], [[VERSION, /_/g, '.'], [NAME, 'iOS']], [/(mac\sos\sx)\s?([\w\s\.]+\w)*/i, /(macintosh|mac(?=_powerpc)\s)/i // Mac OS
                                    ], [[NAME, 'Mac OS'], [VERSION, /_/g, '.']], [
                                    // Other
                                    /((?:open)?solaris)[\/\s-]?([\w\.]+)*/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.]*)*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms)/i,
                                    // Plan9/Minix/BeOS/OS2/AmigaOS/MorphOS/RISCOS/OpenVMS
                                    /(unix)\s?([\w\.]+)*/i // UNIX
                                    ], [NAME, VERSION]]
                                };
                                /////////////////
                                // Constructor
                                ////////////////
                                /*
                                var Browser = function (name, version) {
                                    this[NAME] = name;
                                    this[VERSION] = version;
                                };
                                var CPU = function (arch) {
                                    this[ARCHITECTURE] = arch;
                                };
                                var Device = function (vendor, model, type) {
                                    this[VENDOR] = vendor;
                                    this[MODEL] = model;
                                    this[TYPE] = type;
                                };
                                var Engine = Browser;
                                var OS = Browser;
                                */
                                var UAParser = function UAParser(uastring, extensions) {
                                    if ((typeof uastring === 'undefined' ? 'undefined' : _typeof2(uastring)) === 'object') {
                                        extensions = uastring;
                                        uastring = undefined;
                                    }
                                    if (!(this instanceof UAParser)) {
                                        return new UAParser(uastring, extensions).getResult();
                                    }
                                    var ua = uastring || (window && window.navigator && window.navigator.userAgent ? window.navigator.userAgent : EMPTY);
                                    var rgxmap = extensions ? util.extend(regexes, extensions) : regexes;
                                    //var browser = new Browser();
                                    //var cpu = new CPU();
                                    //var device = new Device();
                                    //var engine = new Engine();
                                    //var os = new OS();
                                    this.getBrowser = function () {
                                        var browser = { name: undefined, version: undefined };
                                        mapper.rgx.call(browser, ua, rgxmap.browser);
                                        browser.major = util.major(browser.version); // deprecated
                                        return browser;
                                    };
                                    this.getCPU = function () {
                                        var cpu = { architecture: undefined };
                                        mapper.rgx.call(cpu, ua, rgxmap.cpu);
                                        return cpu;
                                    };
                                    this.getDevice = function () {
                                        var device = { vendor: undefined, model: undefined, type: undefined };
                                        mapper.rgx.call(device, ua, rgxmap.device);
                                        return device;
                                    };
                                    this.getEngine = function () {
                                        var engine = { name: undefined, version: undefined };
                                        mapper.rgx.call(engine, ua, rgxmap.engine);
                                        return engine;
                                    };
                                    this.getOS = function () {
                                        var os = { name: undefined, version: undefined };
                                        mapper.rgx.call(os, ua, rgxmap.os);
                                        return os;
                                    };
                                    this.getResult = function () {
                                        return {
                                            ua: this.getUA(),
                                            browser: this.getBrowser(),
                                            engine: this.getEngine(),
                                            os: this.getOS(),
                                            device: this.getDevice(),
                                            cpu: this.getCPU()
                                        };
                                    };
                                    this.getUA = function () {
                                        return ua;
                                    };
                                    this.setUA = function (uastring) {
                                        ua = uastring;
                                        //browser = new Browser();
                                        //cpu = new CPU();
                                        //device = new Device();
                                        //engine = new Engine();
                                        //os = new OS();
                                        return this;
                                    };
                                    return this;
                                };
                                UAParser.VERSION = LIBVERSION;
                                UAParser.BROWSER = {
                                    NAME: NAME,
                                    MAJOR: MAJOR,
                                    VERSION: VERSION
                                };
                                UAParser.CPU = {
                                    ARCHITECTURE: ARCHITECTURE
                                };
                                UAParser.DEVICE = {
                                    MODEL: MODEL,
                                    VENDOR: VENDOR,
                                    TYPE: TYPE,
                                    CONSOLE: CONSOLE,
                                    MOBILE: MOBILE,
                                    SMARTTV: SMARTTV,
                                    TABLET: TABLET,
                                    WEARABLE: WEARABLE,
                                    EMBEDDED: EMBEDDED
                                };
                                UAParser.ENGINE = {
                                    NAME: NAME,
                                    VERSION: VERSION
                                };
                                UAParser.OS = {
                                    NAME: NAME,
                                    VERSION: VERSION
                                };
                                //UAParser.Utils = util;
                                ///////////
                                // Export
                                //////////
                                // check js environment
                                if ((typeof exports === 'undefined' ? 'undefined' : _typeof2(exports)) !== UNDEF_TYPE) {
                                    // nodejs env
                                    if ((typeof module === 'undefined' ? 'undefined' : _typeof2(module)) !== UNDEF_TYPE && module.exports) {
                                        exports = module.exports = UAParser;
                                    }
                                    // TODO: test!!!!!!!!
                                    /*
                                    if (require && require.main === module && process) {
                                        // cli
                                        var jsonize = function (arr) {
                                            var res = [];
                                            for (var i in arr) {
                                                res.push(new UAParser(arr[i]).getResult());
                                            }
                                            process.stdout.write(JSON.stringify(res, null, 2) + '\n');
                                        };
                                        if (process.stdin.isTTY) {
                                            // via args
                                            jsonize(process.argv.slice(2));
                                        } else {
                                            // via pipe
                                            var str = '';
                                            process.stdin.on('readable', function() {
                                                var read = process.stdin.read();
                                                if (read !== null) {
                                                    str += read;
                                                }
                                            });
                                            process.stdin.on('end', function () {
                                                jsonize(str.replace(/\n$/, '').split('\n'));
                                            });
                                        }
                                    }
                                    */
                                    exports.UAParser = UAParser;
                                } else {
                                    // requirejs env (optional)
                                    if ("function" === FUNC_TYPE && __webpack_require__(9)) {
                                        !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
                                            return UAParser;
                                        }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
                                    } else if (window) {
                                        // browser env
                                        window.UAParser = UAParser;
                                    }
                                }
                                // jQuery/Zepto specific (optional)
                                // Note:
                                //   In AMD env the global scope should be kept clean, but jQuery is an exception.
                                //   jQuery always exports to global scope, unless jQuery.noConflict(true) is used,
                                //   and we should catch that.
                                var $ = window && (window.jQuery || window.Zepto);
                                if ((typeof $ === 'undefined' ? 'undefined' : _typeof2($)) !== UNDEF_TYPE) {
                                    var parser = new UAParser();
                                    $.ua = parser.getResult();
                                    $.ua.get = function () {
                                        return parser.getUA();
                                    };
                                    $.ua.set = function (uastring) {
                                        parser.setUA(uastring);
                                        var result = parser.getResult();
                                        for (var prop in result) {
                                            $.ua[prop] = result[prop];
                                        }
                                    };
                                }
                            })((typeof window === 'undefined' ? 'undefined' : _typeof2(window)) === 'object' ? window : this);
                            /***/
                        },
                        /* 9 */
                        /***/function (module, exports) {
                            /* WEBPACK VAR INJECTION */(function (__webpack_amd_options__) {
                                module.exports = __webpack_amd_options__;
                                /* WEBPACK VAR INJECTION */
                            }).call(exports, {});
                            /***/
                        }]
                        /******/
                        )["default"]
                    );
                });
                /* WEBPACK VAR INJECTION */
            }).call(exports, __webpack_require__(4)(module));
            /***/
        },
        /* 1 */
        /***/function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(2);
            /***/
        },
        /* 2 */
        /***/function (module, exports, __webpack_require__) {
            "use strict";
            /* WEBPACK VAR INJECTION */
            (function (process) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                var _typeof = typeof Symbol === "function" && _typeof3(Symbol.iterator) === "symbol" ? function (obj) {
                    return typeof obj === 'undefined' ? 'undefined' : _typeof3(obj);
                } : function (obj) {
                    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof3(obj);
                };
                var _mangoHelper = __webpack_require__(0);
                var _index = __webpack_require__(5);
                var _index2 = _interopRequireDefault(_index);
                var _config = __webpack_require__(6);
                var _config2 = _interopRequireDefault(_config);
                function _interopRequireDefault(obj) {
                    return obj && obj.__esModule ? obj : { default: obj };
                }
                var __extends = undefined && undefined.__extends || function () {
                    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
                        d.__proto__ = b;
                    } || function (d, b) {
                        for (var p in b) {
                            if (b.hasOwnProperty(p)) d[p] = b[p];
                        }
                    };
                    return function (d, b) {
                        extendStatics(d, b);
                        function __() {
                            this.constructor = d;
                        }
                        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                    };
                }();
                // @flow
                var LOG_TAG = 'mango-kernel';
                var kernelEvents = ['mediaInfo', 'heartbeat', 'error'];
                var boxSuffixMap = {
                    flv: '.flv',
                    hls: '.m3u8',
                    mp4: '.mp4'
                };
                var ChimeeKernel = /** @class */function (_super) {
                    __extends(ChimeeKernel, _super);
                    /**
                       * kernelWrapper
                       * @param {any} wrap videoElement
                       * @param {any} option
                       * @class kernel
                       */
                    function ChimeeKernel(videoElement, config) {
                        var _this = _super.call(this) || this;
                        _this.VERSION = process.env.VERSION;
                        if (!(0, _mangoHelper.isElement)(videoElement)) throw new Error('You must pass in an video element to the chimee-kernel');
                        // copy and maintain only one config for chimee-kernel
                        // actually kernel is disposable in most situation nowaday
                        _this.config = (0, _mangoHelper.deepAssign)({}, _config2.default, config);
                        _this.videoElement = videoElement;
                        _this.initVideoKernel();
                        _this.bindEvents(_this.videoKernel);
                        return _this;
                    }
                    ChimeeKernel.prototype.destroy = function () {
                        this.bindEvents(this.videoKernel, true);
                        this.videoKernel.destroy();
                    };
                    ChimeeKernel.prototype.initVideoKernel = function () {
                        var config = this.config;
                        var box = this.chooseBox(config);
                        this.box = box;
                        var VideoKernel = this.chooseVideoKernel(this.box, config.preset);
                        if (!(0, _mangoHelper.isFunction)(VideoKernel)) throw new Error("We can't find video kernel for " + box + ". Please check your config and make sure it's installed or provided");
                        var customConfig = config.presetConfig[this.box] || {};
                        // TODO: nowaday, kernels all get config from one config
                        // it's not a good way, because custom config may override kernel config
                        // so we may remove this code later
                        (0, _mangoHelper.deepAssign)(config, customConfig);
                        this.videoKernel = new VideoKernel(this.videoElement, config, customConfig);
                    };
                    // return the config box
                    // or choose the right one according to the src
                    ChimeeKernel.prototype.chooseBox = function (_a) {
                        var src = _a.src,
                            box = _a.box;
                        if ((0, _mangoHelper.isString)(box) && box) return box;
                        src = src.toLowerCase();
                        for (var key in boxSuffixMap) {
                            var suffix = boxSuffixMap[key];
                            if (src.indexOf(suffix) > -1) return key;
                        }
                        return 'native';
                    };
                    // choose the right video kernel according to the box setting
                    ChimeeKernel.prototype.chooseVideoKernel = function (box, preset) {
                        switch (box) {
                            case 'native':
                                // $FlowFixMe: it's the same as videoKernel
                                return _index2.default;
                            case 'mp4':
                                return this.getMp4Kernel(preset.mp4);
                            case 'flv':
                            case 'hls':
                                return preset[box];
                            default:
                                throw new Error("We currently do not support box " + box + ", please contact us through https://github.com/Chimeejs/chimee/issues.");
                        }
                    };
                    // fetch the legal mp4 kernel
                    // if it's not exist or not support
                    // we will fall back to the native video kernel
                    ChimeeKernel.prototype.getMp4Kernel = function (mp4Kernel) {
                        var hasLegalMp4Kernel = mp4Kernel && (0, _mangoHelper.isFunction)(mp4Kernel.isSupport);
                        // $FlowFixMe: we have make sure it's an kernel now
                        var supportMp4Kernel = hasLegalMp4Kernel && mp4Kernel.isSupport();
                        // $FlowFixMe: we have make sure it's an kernel now
                        if (supportMp4Kernel) return mp4Kernel;
                        if (hasLegalMp4Kernel) this.warnLog('mp4 decode is not support in this browser, we will switch to the native video kernel');
                        this.box = 'native';
                        // $FlowFixMe: it's the same as videoKernel
                        return _index2.default;
                    };
                    ChimeeKernel.prototype.errorLog = function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        this.emit('error', new Error(args[0]));
                        return _mangoHelper.Log.error.apply(_mangoHelper.Log, [LOG_TAG].concat(args));
                    };
                    ChimeeKernel.prototype.warnLog = function () {
                        var args = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            args[_i] = arguments[_i];
                        }
                        return _mangoHelper.Log.warn.apply(_mangoHelper.Log, [LOG_TAG].concat(args));
                    };
                    ChimeeKernel.prototype.bindEvents = function (videoKernel, remove) {
                        var _this = this;
                        if (remove === void 0) {
                            remove = false;
                        }
                        kernelEvents.forEach(function (eventName) {
                            /* istanbul ignore next  */
                            // $FlowFixMe: we have make sure it's legal now
                            videoKernel[remove ? 'off' : 'on'](eventName, function (_a) {
                                var data = (_a === void 0 ? {} : _a).data;
                                _this.emit(eventName, data);
                            });
                        });
                    };
                    ChimeeKernel.prototype.attachMedia = function () {
                        this.videoKernel.attachMedia();
                    };
                    ChimeeKernel.prototype.load = function (src) {
                        if (src === void 0) {
                            src = this.config.src;
                        }
                        this.config.src = src;
                        this.videoKernel.load(src);
                    };
                    ChimeeKernel.prototype.startLoad = function () {
                        /* istanbul ignore if */
                        if (!(0, _mangoHelper.isFunction)(this.videoKernel.startLoad)) throw new Error('This video kernel do not support startLoad, please contact us on https://github.com/Chimeejs/chimee/issues');
                        this.videoKernel.startLoad(this.config.src);
                    };
                    ChimeeKernel.prototype.stopLoad = function () {
                        /* istanbul ignore else */
                        if ((0, _mangoHelper.isFunction)(this.videoKernel.stopLoad)) this.videoKernel.stopLoad();
                    };
                    ChimeeKernel.prototype.play = function () {
                        this.videoKernel.play();
                    };
                    ChimeeKernel.prototype.pause = function () {
                        this.videoKernel.pause();
                    };
                    Object.defineProperty(ChimeeKernel.prototype, "currentTime", {
                        get: function get() {
                            return this.videoElement.currentTime || 0;
                        },
                        enumerable: true,
                        configurable: true
                    });
                    ChimeeKernel.prototype.seek = function (seconds) {
                        if (!(0, _mangoHelper.isNumber)(seconds)) {
                            this.errorLog("When you try to seek, you must offer us a number, but not " + (typeof seconds === 'undefined' ? 'undefined' : _typeof(seconds)));
                            return;
                        }
                        this.videoKernel.seek(seconds);
                    };
                    ChimeeKernel.prototype.refresh = function () {
                        this.videoKernel.refresh();
                    };
                    return ChimeeKernel;
                }(_mangoHelper.CustEvent);
                exports.default = ChimeeKernel;
                /* WEBPACK VAR INJECTION */
            }).call(exports, __webpack_require__(3));
            /***/
        },
        /* 3 */
        /***/function (module, exports) {
            // shim for using process in browser
            var process = module.exports = {};
            // cached from whatever global is present so that test runners that stub it
            // don't break things.  But we need to wrap it in a try catch in case it is
            // wrapped in strict mode code which doesn't define any globals.  It's inside a
            // function because try/catches deoptimize in certain engines.
            var cachedSetTimeout;
            var cachedClearTimeout;
            function defaultSetTimout() {
                throw new Error('setTimeout has not been defined');
            }
            function defaultClearTimeout() {
                throw new Error('clearTimeout has not been defined');
            }
            (function () {
                try {
                    if (typeof setTimeout === 'function') {
                        cachedSetTimeout = setTimeout;
                    } else {
                        cachedSetTimeout = defaultSetTimout;
                    }
                } catch (e) {
                    cachedSetTimeout = defaultSetTimout;
                }
                try {
                    if (typeof clearTimeout === 'function') {
                        cachedClearTimeout = clearTimeout;
                    } else {
                        cachedClearTimeout = defaultClearTimeout;
                    }
                } catch (e) {
                    cachedClearTimeout = defaultClearTimeout;
                }
            })();
            function runTimeout(fun) {
                if (cachedSetTimeout === setTimeout) {
                    //normal enviroments in sane situations
                    return setTimeout(fun, 0);
                }
                // if setTimeout wasn't available but was latter defined
                if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
                    cachedSetTimeout = setTimeout;
                    return setTimeout(fun, 0);
                }
                try {
                    // when when somebody has screwed with setTimeout but no I.E. maddness
                    return cachedSetTimeout(fun, 0);
                } catch (e) {
                    try {
                        // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
                        return cachedSetTimeout.call(null, fun, 0);
                    } catch (e) {
                        // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
                        return cachedSetTimeout.call(this, fun, 0);
                    }
                }
            }
            function runClearTimeout(marker) {
                if (cachedClearTimeout === clearTimeout) {
                    //normal enviroments in sane situations
                    return clearTimeout(marker);
                }
                // if clearTimeout wasn't available but was latter defined
                if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
                    cachedClearTimeout = clearTimeout;
                    return clearTimeout(marker);
                }
                try {
                    // when when somebody has screwed with setTimeout but no I.E. maddness
                    return cachedClearTimeout(marker);
                } catch (e) {
                    try {
                        // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
                        return cachedClearTimeout.call(null, marker);
                    } catch (e) {
                        // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
                        // Some versions of I.E. have different rules for clearTimeout vs setTimeout
                        return cachedClearTimeout.call(this, marker);
                    }
                }
            }
            var queue = [];
            var draining = false;
            var currentQueue;
            var queueIndex = -1;
            function cleanUpNextTick() {
                if (!draining || !currentQueue) {
                    return;
                }
                draining = false;
                if (currentQueue.length) {
                    queue = currentQueue.concat(queue);
                } else {
                    queueIndex = -1;
                }
                if (queue.length) {
                    drainQueue();
                }
            }
            function drainQueue() {
                if (draining) {
                    return;
                }
                var timeout = runTimeout(cleanUpNextTick);
                draining = true;
                var len = queue.length;
                while (len) {
                    currentQueue = queue;
                    queue = [];
                    while (++queueIndex < len) {
                        if (currentQueue) {
                            currentQueue[queueIndex].run();
                        }
                    }
                    queueIndex = -1;
                    len = queue.length;
                }
                currentQueue = null;
                draining = false;
                runClearTimeout(timeout);
            }
            process.nextTick = function (fun) {
                var args = new Array(arguments.length - 1);
                if (arguments.length > 1) {
                    for (var i = 1; i < arguments.length; i++) {
                        args[i - 1] = arguments[i];
                    }
                }
                queue.push(new Item(fun, args));
                if (queue.length === 1 && !draining) {
                    runTimeout(drainQueue);
                }
            };
            // v8 likes predictible objects
            function Item(fun, array) {
                this.fun = fun;
                this.array = array;
            }
            Item.prototype.run = function () {
                this.fun.apply(null, this.array);
            };
            process.title = 'browser';
            process.browser = true;
            process.env = {};
            process.argv = [];
            process.version = ''; // empty string to avoid regexp issues
            process.versions = {};
            function noop() {}
            process.on = noop;
            process.addListener = noop;
            process.once = noop;
            process.off = noop;
            process.removeListener = noop;
            process.removeAllListeners = noop;
            process.emit = noop;
            process.prependListener = noop;
            process.prependOnceListener = noop;
            process.listeners = function (name) {
                return [];
            };
            process.binding = function (name) {
                throw new Error('process.binding is not supported');
            };
            process.cwd = function () {
                return '/';
            };
            process.chdir = function (dir) {
                throw new Error('process.chdir is not supported');
            };
            process.umask = function () {
                return 0;
            };
            /***/
        },
        /* 4 */
        /***/function (module, exports) {
            module.exports = function (module) {
                if (!module.webpackPolyfill) {
                    module.deprecate = function () {};
                    module.paths = [];
                    // module.parent = undefined by default
                    if (!module.children) module.children = [];
                    Object.defineProperty(module, "loaded", {
                        enumerable: true,
                        get: function get() {
                            return module.l;
                        }
                    });
                    Object.defineProperty(module, "id", {
                        enumerable: true,
                        get: function get() {
                            return module.i;
                        }
                    });
                    module.webpackPolyfill = 1;
                }
                return module;
            };
            /***/
        },
        /* 5 */
        /***/function (module, exports, __webpack_require__) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            var _typeof = typeof Symbol === "function" && _typeof3(Symbol.iterator) === "symbol" ? function (obj) {
                return typeof obj === 'undefined' ? 'undefined' : _typeof3(obj);
            } : function (obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof3(obj);
            };
            var _mangoHelper = __webpack_require__(0);
            var __extends = undefined && undefined.__extends || function () {
                var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
                    d.__proto__ = b;
                } || function (d, b) {
                    for (var p in b) {
                        if (b.hasOwnProperty(p)) d[p] = b[p];
                    }
                };
                return function (d, b) {
                    extendStatics(d, b);
                    function __() {
                        this.constructor = d;
                    }
                    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                };
            }();
            // @flow
            var tempCurrentTime = 0;
            var NativeVideoKernel = /** @class */function (_super) {
                __extends(NativeVideoKernel, _super);
                function NativeVideoKernel(videoElement, config, customConfig) {
                    var _this = _super.call(this) || this;
                    if (!(0, _mangoHelper.isElement)(videoElement)) throw new Error("You must pass in an legal video element but not " + (typeof videoElement === 'undefined' ? 'undefined' : _typeof(videoElement)));
                    _this.video = videoElement;
                    _this.config = config;
                    _this.customConfig = customConfig;
                    return _this;
                }
                /* istanbul ignore next  */
                NativeVideoKernel.isSupport = function () {
                    return true;
                };
                NativeVideoKernel.prototype.load = function (src) {
                    this.video.setAttribute('src', src);
                    this.video.src = src;
                };
                NativeVideoKernel.prototype.startLoad = function (src) {
                    /* istanbul ignore next */
                    var currentTime = this.video.currentTime || tempCurrentTime;
                    this.load(src);
                    this.seek(currentTime);
                };
                // https://developer.mozilla.org/de/docs/Web/HTML/Using_HTML5_audio_and_video#Stopping_the_download_of_media
                NativeVideoKernel.prototype.stopLoad = function () {
                    tempCurrentTime = this.video.currentTime;
                    this.video.src = '';
                    this.video.removeAttribute('src');
                };
                NativeVideoKernel.prototype.destroy = function () {
                    /* istanbul ignore next  */
                    if ((0, _mangoHelper.isElement)(this.video)) this.stopLoad();
                };
                NativeVideoKernel.prototype.play = function () {
                    return this.video.play();
                };
                NativeVideoKernel.prototype.pause = function () {
                    return this.video.pause();
                };
                NativeVideoKernel.prototype.refresh = function () {
                    this.video.src = this.config.src;
                };
                NativeVideoKernel.prototype.attachMedia = function () {};
                NativeVideoKernel.prototype.seek = function (seconds) {
                    this.video.currentTime = seconds;
                };
                return NativeVideoKernel;
            }(_mangoHelper.CustEvent);
            exports.default = NativeVideoKernel;
            /***/
        },
        /* 6 */
        /***/function (module, exports, __webpack_require__) {
            "use strict";

            Object.defineProperty(exports, "__esModule", {
                value: true
            });
            exports.default = {
                isLive: false,
                box: '',
                preset: {},
                presetConfig: {}
            };
            /***/
        }]
        /******/
        )["default"]
    );
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)(module)))

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _mangoHelper = __webpack_require__(0);

var _const = __webpack_require__(3);

var _toxicDecorators = __webpack_require__(1);

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// @flow

var secondaryReg = /^(before|after|_)/;
function secondaryChecker(key) {
    if (key.match(secondaryReg)) {
        /* istanbul ignore else  */
        if (process.env.NODE_ENV !== 'production') _mangoHelper.Log.warn('bus', "Secondary Event \"" + key + "\" could not be call straightly by API.");
        return false;
    }
    return true;
}
/**
 * <pre>
 * event Bus class. Bus take charge of commuication between plugins and user.
 * Some of the event may trigger the kernel to do some task.
 * An event will run in four lifecycle
 * before -> processor -> main -> after -> side effect(_)
 * -------------------- emit period ----------------
 * before: once an event emit, it will run through plugins in bubble to know is it possible to run.
 * processor: if sth need to be done on kernel. It will tell kernel. If kernel will trigger event later, it will break down here. Else will run into trigger period
 * -------------------- trigger period -----------------
 * main: this procedure will trigger the main event in bubble, which means it can be stop in one plugin.
 * after: once event run through all events. It will trigger after event. This event will be trigger in broadcast way.
 * side effect(_): This events will always trigger once we bump into trigger period. So that you can know if the events been blocked. But it's not advice to listen on this effect.
 * </pre>
 */
var Bus = /** @class */function () {
    /**
     * @param {Dispatcheer} dispatcher bus rely on dispatcher, so you mush pass dispatcher at first when you generate Bus.
     * @return {Bus}
     */
    function Bus(dispatcher) {
        /**
         * the handler set of all events
         * @type {Object}
         * @member events
         */
        this.events = {};
        this.onceMap = {};
        /**
         * the referrence to dispatcher
         * @type {Dispatcher}
         */
        this.__dispatcher = dispatcher;
    }
    /**
     * [Can only be called in dispatcher]bind event on bus.
     * @param  {string} id plugin's id
     * @param  {string} key event's name
     * @param  {fn} handler function
     */
    Bus.prototype.on = function (id, key, fn) {
        var _a = this._getEventStage(key),
            stage = _a.stage,
            eventName = _a.key;
        this._addEvent([eventName, stage, id], fn);
    };
    /**
     * [Can only be called in dispatcher]remove event off bus. Only suggest one by one.
     * @param  {string} id plugin's id
     * @param  {string} key event's name
     * @param  {fn} handler function
     */
    Bus.prototype.off = function (id, key, fn) {
        var _a = this._getEventStage(key),
            stage = _a.stage,
            eventName = _a.key;
        var keys = [eventName, stage, id];
        var deleted = this._removeEvent(keys, fn);
        if (deleted) return;
        var handler = this._getHandlerFromOnceMap(keys, fn);
        if ((0, _mangoHelper.isFunction)(handler)) {
            this._removeEvent(keys, handler) && this._removeFromOnceMap(keys, fn, handler);
        }
    };
    /**
     * [Can only be called in dispatcher]bind event on bus and remove it once event is triggered.
     * @param  {string} id plugin's id
     * @param  {string} key event's name
     * @param  {Function} fn handler function
     */
    Bus.prototype.once = function (id, key, fn) {
        var _a = this._getEventStage(key),
            stage = _a.stage,
            eventName = _a.key;
        var bus = this;
        var keys = [eventName, stage, id];
        var handler = function handler() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            // keep the this so that it can run
            (0, _mangoHelper.bind)(fn, this).apply(void 0, args);
            bus._removeEvent(keys, handler);
            bus._removeFromOnceMap(keys, fn, handler);
        };
        this._addEvent(keys, handler);
        this._addToOnceMap(keys, fn, handler);
    };
    /**
     * [Can only be called in dispatcher]emit an event, which will run before -> processor period.
     * It may stop in before period.
     * @param  {string}    key event's name
     * @param  {anything} args other argument will be passed into handler
     * @return {Promise}  this promise maybe useful if the event would not trigger kernel event. In that will you can know if it runs successful. But you can know if the event been stopped by the promise.
     */
    Bus.prototype.emit = function (key) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var event = this.events[key];
        if ((0, _mangoHelper.isEmpty)(event)) {
            if (_const.selfProcessorEvents.indexOf(key) > -1) return Promise.resolve();
            // $FlowFixMe: conditional return here
            return this._eventProcessor.apply(this, [key, { sync: false }].concat(args));
        }
        var beforeQueue = this._getEventQueue(event.before, this.__dispatcher.order);
        return _mangoHelper.runRejectableQueue.apply(void 0, [beforeQueue].concat(args)).then(function () {
            if (_const.selfProcessorEvents.indexOf(key) > -1) return;
            return _this._eventProcessor.apply(_this, [key, { sync: false }].concat(args));
        }).catch(function (error) {
            if ((0, _mangoHelper.isError)(error)) _this.__dispatcher.throwError(error);
            return Promise.reject(error);
        });
    };
    /**
     * [Can only be called in dispatcher]emit an event, which will run before -> processor period synchronize.
     * It may stop in before period.
     * @param  {string}    key event's name
     * @param  {anything} args other argument will be passed into handler
     * @return {Promise}  this promise maybe useful if the event would not trigger kernel event. In that will you can know if it runs successful. But you can know if the event been stopped by the promise.
     */
    Bus.prototype.emitSync = function (key) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var event = this.events[key];
        if ((0, _mangoHelper.isEmpty)(event)) {
            if (_const.selfProcessorEvents.indexOf(key) > -1) return true;
            // $FlowFixMe: conditional return here
            return this._eventProcessor.apply(this, [key, { sync: true }].concat(args));
        }
        var beforeQueue = this._getEventQueue(event.before, this.__dispatcher.order);
        return _mangoHelper.runStoppableQueue.apply(void 0, [beforeQueue].concat(args)) && (_const.selfProcessorEvents.indexOf(key) > -1 ||
        // $FlowFixMe: conditional return here
        this._eventProcessor.apply(
        // $FlowFixMe: conditional return here
        this, [key, { sync: true }].concat(args)));
    };
    /**
     * [Can only be called in dispatcher]trigger an event, which will run main -> after -> side effect period
     * @param  {string}    key event's name
     * @param  {anything} args
     * @return {Promise|undefined}    you can know if event trigger finished~ However, if it's unlegal
     */
    Bus.prototype.trigger = function (key) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var event = this.events[key];
        if ((0, _mangoHelper.isEmpty)(event)) {
            return Promise.resolve(true);
        }
        var mainQueue = this._getEventQueue(event.main, this.__dispatcher.order);
        return _mangoHelper.runRejectableQueue.apply(void 0, [mainQueue].concat(args)).then(function () {
            var afterQueue = _this._getEventQueue(event.after, _this.__dispatcher.order);
            return _mangoHelper.runRejectableQueue.apply(void 0, [afterQueue].concat(args));
        }).then(function () {
            return _this._runSideEffectEvent.apply(_this, [key, _this.__dispatcher.order].concat(args));
        }).catch(function (error) {
            if ((0, _mangoHelper.isError)(error)) _this.__dispatcher.throwError(error);
            return _this._runSideEffectEvent.apply(_this, [key, _this.__dispatcher.order].concat(args));
        });
    };
    /**
     * [Can only be called in dispatcher]trigger an event, which will run main -> after -> side effect period in synchronize
     * @param  {string}    key event's name
     * @param  {anything} args
     * @return {boolean}    you can know if event trigger finished~ However, if it's unlegal
     */
    Bus.prototype.triggerSync = function (key) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var event = this.events[key];
        if ((0, _mangoHelper.isEmpty)(event)) {
            return true;
        }
        var mainQueue = this._getEventQueue(event.main, this.__dispatcher.order);
        var afterQueue = this._getEventQueue(event.after, this.__dispatcher.order);
        var result = _mangoHelper.runStoppableQueue.apply(void 0, [mainQueue].concat(args)) && _mangoHelper.runStoppableQueue.apply(void 0, [afterQueue].concat(args));
        this._runSideEffectEvent.apply(this, [key, this.__dispatcher.order].concat(args));
        return result;
    };
    /**
     * destroy hook which will be called when object destroy
     */
    Bus.prototype.destroy = function () {
        delete this.events;
        delete this.__dispatcher;
    };
    /**
     * add event into bus
     * @private
     * @param {Array} keys keys map pointing to position to put event handler
     * @param {function} fn handler to put
     */
    Bus.prototype._addEvent = function (keys, fn) {
        keys = (0, _mangoHelper.deepClone)(keys);
        var id = keys.pop();
        var target = keys.reduce(function (target, key) {
            target[key] = target[key] || {};
            return target[key];
        }, this.events);
        // events will store like {play: {main: {plugin: []}}}
        target[id] = target[id] || [];
        target[id].push(fn);
    };
    /**
     * remove event from bus
     * @private
     * @param {Array} keys keys map pointing to position to get event handler
     * @param {function} fn handler to put
     */
    Bus.prototype._removeEvent = function (keys, fn) {
        keys = (0, _mangoHelper.deepClone)(keys);
        var id = keys.pop();
        var target = this.events;
        for (var i = 0, len = keys.length; i < len; i++) {
            var son = target[keys[i]];
            // if we can't find the event binder, just return
            if ((0, _mangoHelper.isEmpty)(son)) return;
            target = son;
        }
        var queue = target[id] || [];
        var index = queue.indexOf(fn);
        var hasFn = index > -1;
        // if we found handler remove it
        if (hasFn) {
            queue.splice(index, 1);
        }
        // if this plugin has no event binding, we remove this event session, which make us perform faster in emit & trigger period.
        if (queue.length < 1) {
            delete target[id];
        }
        return hasFn;
    };
    Bus.prototype._addToOnceMap = function (keys, fn, handler) {
        var key = keys.join('-');
        var map = this.onceMap[key] = this.onceMap[key] || new Map();
        if (!map.has(fn)) map.set(fn, []);
        var handlers = map.get(fn);
        // $FlowFixMe: flow do not understand map yet
        handlers.push(handler);
    };
    Bus.prototype._removeFromOnceMap = function (keys, fn, handler) {
        var key = keys.join('-');
        var map = this.onceMap[key];
        // do not need to check now
        // if(isVoid(map) || !map.has(fn)) return;
        var handlers = map.get(fn);
        var index = handlers.indexOf(handler);
        handlers.splice(index, 1);
        if ((0, _mangoHelper.isEmpty)(handlers)) map.delete(fn);
    };
    Bus.prototype._getHandlerFromOnceMap = function (keys, fn) {
        var key = keys.join('-');
        var map = this.onceMap[key];
        if ((0, _mangoHelper.isVoid)(map) || !map.has(fn)) return;
        var handlers = map.get(fn);
        return handlers[0];
    };
    /**
     * get event stage by evnet key name
     * @private
     * @param  {key} key event's name
     * @return {stage}  event stage
     */
    Bus.prototype._getEventStage = function (key) {
        var secondaryCheck = key.match(secondaryReg);
        var stage = secondaryCheck && secondaryCheck[0] || 'main';
        if (secondaryCheck) {
            key = (0, _mangoHelper.camelize)(key.replace(secondaryReg, ''));
        }
        return { stage: stage, key: key };
    };
    /**
     * get event handlers queue to run
     * @private
     * @param  {Object} handlerSet the object include all handler
     * @param  {Array} Array form of plugin id
     * @return {Array<Function>} event handler in queue to run
     */
    Bus.prototype._getEventQueue = function (handlerSet, order) {
        var _this = this;
        order = (0, _mangoHelper.isArray)(order) ? order.concat(['_vm']) : ['_vm'];
        return (0, _mangoHelper.isEmpty)(handlerSet) ? [] : order.reduce(function (queue, id) {
            if ((0, _mangoHelper.isEmpty)(handlerSet[id]) || !(0, _mangoHelper.isArray)(handlerSet[id]) ||
            // in case plugins is missed
            // _vm indicate the user. This is the function for user
            !_this.__dispatcher.plugins[id] && id !== '_vm') {
                return queue;
            }
            return queue.concat(handlerSet[id].map(function (fn) {
                // bind context for plugin instance
                return (0, _mangoHelper.bind)(fn, _this.__dispatcher.plugins[id] || _this.__dispatcher.vm);
            }));
        }, []);
    };
    /**
     * event processor period. If event needs call kernel function.
     * I will called here.
     * If kernel will reponse. I will stop here.
     * Else I will trigger next period.
     * @param  {string}    key event's name
     * @param  {boolean}  options.sync we will take triggerSync if true, otherwise we will run trigger. default is false
     * @param  {anything} args
     * @return {Promise|undefined}
     */
    Bus.prototype._eventProcessor = function (key, _a) {
        var sync = _a.sync;
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        var isKernelMethod = _const.kernelMethods.indexOf(key) > -1;
        var isDomMethod = _const.domMethods.indexOf(key) > -1;
        var isDispatcherMethod = _const.dispatcherMethods.indexOf(key) > -1;
        if (isKernelMethod || isDomMethod || isDispatcherMethod) {
            if (isDispatcherMethod) {
                (_b = this.__dispatcher)[key].apply(_b, args);
            } else {
                (_c = this.__dispatcher[isKernelMethod ? 'kernel' : 'dom'])[key].apply(_c, args);
            }
            if (_const.videoEvents.indexOf(key) > -1 || _const.domEvents.indexOf(key) > -1) return true;
        }
        // $FlowFixMe: flow do not support computed sytax on classs, but it's ok here
        return this[sync ? 'triggerSync' : 'trigger'].apply(this, [key].concat(args));
        var _b, _c;
    };
    /**
     * run side effect period
     * @param  {string}    key event's name
     * @param  {args} args
     */
    Bus.prototype._runSideEffectEvent = function (key, order) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        var event = this.events[key];
        if ((0, _mangoHelper.isEmpty)(event)) {
            return false;
        }
        var queue = this._getEventQueue(event._, order);
        queue.forEach(function (run) {
            return run.apply(void 0, args);
        });
        return true;
    };
    __decorate([(0, _toxicDecorators.runnable)(secondaryChecker)], Bus.prototype, "emit", null);
    __decorate([(0, _toxicDecorators.runnable)(secondaryChecker, { backup: function backup() {
            return false;
        } })], Bus.prototype, "emitSync", null);
    __decorate([(0, _toxicDecorators.runnable)(secondaryChecker)], Bus.prototype, "trigger", null);
    __decorate([(0, _toxicDecorators.runnable)(secondaryChecker, { backup: function backup() {
            return false;
        } })], Bus.prototype, "triggerSync", null);
    return Bus;
}();
exports.default = Bus;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.eventBinderCheck = eventBinderCheck;
exports.attrAndStyleCheck = attrAndStyleCheck;

var _mangoHelper = __webpack_require__(0);

/**
 * checker for on, off, once function
 * @param {string} key
 * @param {Function} fn
 */
function eventBinderCheck(key, fn) {
    if (!(0, _mangoHelper.isString)(key)) throw new TypeError('key parameter must be String');
    if (!(0, _mangoHelper.isFunction)(fn)) throw new TypeError('fn parameter must be Function');
}
/**
 * checker for attr or css function
 */
// @flow
function attrAndStyleCheck() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    if (args.length > 2) {
        return ['set'].concat(args);
    }
    if (args.length === 2) {
        if (['video', 'container', 'wrapper', 'videoElement'].indexOf(args[0]) > -1) {
            return ['get'].concat(args);
        }
        return ['set', 'container'].concat(args);
    }
    return ['get', 'container'].concat(args);
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _mangoHelper = __webpack_require__(0);

var _const = __webpack_require__(3);

var _esFullscreen = __webpack_require__(21);

var _esFullscreen2 = _interopRequireDefault(_esFullscreen);

var _toxicDecorators = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// @flow

function targetCheck(target) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (target === 'video') target = 'videoElement';
    if (!(0, _mangoHelper.isElement)(this[target])) throw new TypeError("Your target \"" + target + "\" is not a legal HTMLElement");
    return [target].concat(args);
}
function attrOperationCheck(target, attr, val) {
    if (!(0, _mangoHelper.isString)(attr)) throw new TypeError("to handle dom's attribute or style, your attr parameter must be string, but not " + attr + " in " + (typeof attr === "undefined" ? "undefined" : _typeof(attr)));
    if (!(0, _mangoHelper.isString)(target)) throw new TypeError("to handle dom's attribute or style, your target parameter must be string, , but not " + target + " in " + (typeof target === "undefined" ? "undefined" : _typeof(target)));
    return [target, attr, val];
}
/**
 * <pre>
 * Dom work for Dispatcher.
 * It take charge of dom management of Dispatcher.
 * </pre>
 */
var Dom = /** @class */function () {
    function Dom(wrapper, dispatcher) {
        var _this = this;
        /**
         * all plugin's dom element set
         */
        this.plugins = {};
        /**
         * the html to restore when we are destroyed
         */
        this.originHTML = '';
        /**
         * Array to store all video event handler
         */
        this.videoEventHandlerList = [];
        /**
         * Array to store all video dom event handler
         */
        this.videoDomEventHandlerList = [];
        /**
         * Array to store all container dom event handler
         */
        this.containerDomEventHandlerList = [];
        /**
         * Array to store all video dom event handler
         */
        this.wrapperDomEventHandlerList = [];
        /**
         * Object to store different plugin's dom event handlers
         */
        this.__domEventHandlerList = {};
        /**
         * to mark is the mouse in the video area
         */
        this.__mouseInVideo = false;
        /**
         * collection of video extension nodes
         * some nodes can be regarded as part of video (such as penetrate element)
         * so we store them here
         */
        this.__videoExtendedNodes = [];
        this.isFullscreen = false;
        this.fullscreenElement = undefined;
        this.__dispatcher = dispatcher;
        if (!(0, _mangoHelper.isElement)(wrapper) && !(0, _mangoHelper.isString)(wrapper)) throw new TypeError("Wrapper can only be string or HTMLElement, but not " + (typeof wrapper === "undefined" ? "undefined" : _typeof(wrapper)));
        var $wrapper = (0, _mangoHelper.$)(wrapper);
        if ($wrapper.length === 0) {
            throw new TypeError('Can not get dom node accroding wrapper. Please check your wrapper');
        }
        /**
         * the referrence of the dom wrapper of whole Chimee
         */
        // $FlowFixMe: support computed key on nodewrap
        this.wrapper = $wrapper[0];
        this.originHTML = this.wrapper.innerHTML;
        // if we find video element inside wrapper
        // we use it
        // or we create a video element by ourself.
        // $FlowFixMe: support computed key on nodewrap
        var videoElement = $wrapper.find('video')[0];
        if (!videoElement) {
            videoElement = document.createElement('video');
        }
        /**
         * referrence of video's dom element
         */
        this.installVideo(videoElement);
        this._addDomEvents(this.container, this.containerDomEventHandlerList, function (key) {
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return (_a = _this.__dispatcher.bus).triggerSync.apply(_a, ['c_' + key].concat(args));
                var _a;
            };
        });
        this._addDomEvents(this.wrapper, this.wrapperDomEventHandlerList, function (key) {
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return (_a = _this.__dispatcher.bus).triggerSync.apply(_a, ['w_' + key].concat(args));
                var _a;
            };
        });
        this._fullscreenMonitor();
        _esFullscreen2.default.on('fullscreenchange', this._fullscreenMonitor);
    }
    Dom.prototype.installVideo = function (videoElement, _a) {
        var _b = (_a === void 0 ? {} : _a).bindEvent,
            bindEvent = _b === void 0 ? true : _b;
        this.__videoExtendedNodes.push(videoElement);
        (0, _mangoHelper.setAttr)(videoElement, 'tabindex', -1);
        this._autoFocusToVideo(videoElement);
        if (!(0, _mangoHelper.isElement)(this.container)) {
            // create container
            if (videoElement.parentElement && (0, _mangoHelper.isElement)(videoElement.parentElement) && videoElement.parentElement !== this.wrapper) {
                this.container = videoElement.parentElement;
            } else {
                this.container = document.createElement('container');
                (0, _mangoHelper.$)(this.container).append(videoElement);
            }
        } else {
            var container = this.container;
            if (container.childNodes.length === 0) {
                container.appendChild(videoElement);
            } else {
                container.insertBefore(videoElement, container.childNodes[0]);
            }
        }
        // check container.position
        if (this.container.parentElement !== this.wrapper) {
            (0, _mangoHelper.$)(this.wrapper).append(this.container);
        }
        if (bindEvent) this.bindVideoEvents(videoElement);
        this.videoElement = videoElement;
        return videoElement;
    };
    Dom.prototype.bindVideoEvents = function (videoElement) {
        var _this = this;
        _const.videoEvents.forEach(function (key) {
            var fn = function fn() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return (_a = _this.__dispatcher.bus).trigger.apply(_a, [key].concat(args));
                var _a;
            };
            _this.videoEventHandlerList.push(fn);
            (0, _mangoHelper.addEvent)(videoElement, key, fn);
        });
        this._addDomEvents(videoElement, this.videoDomEventHandlerList, function (key) {
            return _this._getEventHandler(key, { penetrate: true });
        });
    };
    Dom.prototype.removeVideo = function () {
        var _this = this;
        var videoElement = this.videoElement;
        this._autoFocusToVideo(this.videoElement, false);
        _const.videoEvents.forEach(function (key, index) {
            (0, _mangoHelper.removeEvent)(_this.videoElement, key, _this.videoEventHandlerList[index]);
        });
        this.videoEventHandlerList = [];
        _const.domEvents.forEach(function (key, index) {
            (0, _mangoHelper.removeEvent)(_this.videoElement, key, _this.videoDomEventHandlerList[index]);
        });
        this.videoDomEventHandlerList = [];
        (0, _mangoHelper.$)(videoElement).remove();
        delete this.videoElement;
        return videoElement;
    };
    /**
     * each plugin has its own dom node, this function will create one or them.
     * we support multiple kind of el
     * 1. Element, we will append this dom node on wrapper straight
     * 2. HTMLString, we will create dom based on this HTMLString and append it on wrapper
     * 3. string, we will transfer this string into hypen string, then we create a custom elment called by this and bind it on wrapper
     * 4. nothing, we will create a div and bind it on the wrapper
     */
    Dom.prototype.insertPlugin = function (id, el, option) {
        var _this = this;
        if (option === void 0) {
            option = {};
        }
        if (!(0, _mangoHelper.isString)(id)) throw new TypeError('insertPlugin id parameter must be string');
        if ((0, _mangoHelper.isElement)(this.plugins[id])) {
            /* istanbul ignore else  */
            if (process.env.NODE_ENV !== 'production') _mangoHelper.Log.warn('Dispatcher.dom', "Plugin " + id + " have already had a dom node. Now it will be replaced");
            this.removePlugin(id);
        }
        if ((0, _mangoHelper.isString)(el)) {
            if ((0, _mangoHelper.isHTMLString)(el)) {
                var outer_1 = document.createElement('div');
                outer_1.innerHTML = el;
                el = outer_1.children[0];
            } else {
                el = document.createElement((0, _mangoHelper.hypenate)(el));
            }
        } else if ((0, _mangoHelper.isObject)(el)) {
            // $FlowFixMe: we have check el's type here and make sure it's an object
            option = el;
        }
        var inner = option.inner,
            penetrate = option.penetrate,
            autoFocus = option.autoFocus;
        var className = option.className;
        var node = el && (0, _mangoHelper.isElement)(el) ? el : document.createElement('div');
        if ((0, _mangoHelper.isArray)(className)) {
            className = className.join(' ');
        }
        if ((0, _mangoHelper.isString)(className)) {
            (0, _mangoHelper.addClassName)(node, className);
        }
        this.plugins[id] = node;
        var outerElement = inner ? this.container : this.wrapper;
        var originElement = inner ? this.videoElement : this.container;
        if ((0, _mangoHelper.isBoolean)(autoFocus) ? autoFocus : inner) this._autoFocusToVideo(node);
        // auto forward the event if this plugin can be penetrate
        if (penetrate) {
            this.__domEventHandlerList[id] = this.__domEventHandlerList[id] || [];
            this._addDomEvents(node, this.__domEventHandlerList[id], function (key) {
                return _this._getEventHandler(key, { penetrate: penetrate });
            });
            this.__videoExtendedNodes.push(node);
        }
        if (outerElement.lastChild === originElement) {
            outerElement.appendChild(node);
            return node;
        }
        outerElement.insertBefore(node, originElement.nextSibling);
        return node;
    };
    /**
     * remove plugin's dom
     */
    Dom.prototype.removePlugin = function (id) {
        var _this = this;
        if (!(0, _mangoHelper.isString)(id)) return;
        var dom = this.plugins[id];
        if ((0, _mangoHelper.isElement)(dom)) {
            dom.parentNode && dom.parentNode.removeChild(dom);
            this._autoFocusToVideo(dom, true);
        }
        if (!(0, _mangoHelper.isEmpty)(this.__domEventHandlerList[id])) {
            _const.domEvents.forEach(function (key, index) {
                (0, _mangoHelper.removeEvent)(_this.plugins[id], key, _this.__domEventHandlerList[id][index]);
            });
            delete this.__domEventHandlerList[id];
        }
        delete this.plugins[id];
    };
    /**
     * Set zIndex for a plugins list
     */
    Dom.prototype.setPluginsZIndex = function (plugins) {
        var _this = this;
        // $FlowFixMe: there are videoElment and container here
        plugins.forEach(function (key, index) {
            return (0, _mangoHelper.setStyle)(key.match(/^(videoElement|container)$/) ? _this[key] : _this.plugins[key], 'z-index', ++index);
        });
    };
    /**
     * set attribute on our dom
     * @param {string} attr attribute's name
     * @param {anything} val attribute's value
     * @param {string} target the HTMLElemnt string name, only support video/wrapper/container now
     */
    Dom.prototype.setAttr = function (target, attr, val) {
        // $FlowFixMe: flow do not support computed property/element on class, which is silly here.
        (0, _mangoHelper.setAttr)(this[target], attr, val);
    };
    Dom.prototype.getAttr = function (target, attr) {
        // $FlowFixMe: flow do not support computed property/element on class, which is silly here.
        return (0, _mangoHelper.getAttr)(this[target], attr);
    };
    Dom.prototype.setStyle = function (target, attr, val) {
        // $FlowFixMe: flow do not support computed property/element on class, which is silly here.
        (0, _mangoHelper.setStyle)(this[target], attr, val);
    };
    Dom.prototype.getStyle = function (target, attr) {
        // $FlowFixMe: flow do not support computed property/element on class, which is silly here.
        return (0, _mangoHelper.getStyle)(this[target], attr);
    };
    Dom.prototype.requestFullscreen = function (target) {
        // $FlowFixMe: flow do not support computed property/element on document, which is silly here.
        return _esFullscreen2.default.open(this[target]);
    };
    Dom.prototype.exitFullscreen = function () {
        return _esFullscreen2.default.exit();
    };
    Dom.prototype.fullscreen = function (request, target) {
        if (request === void 0) {
            request = true;
        }
        if (target === void 0) {
            target = 'container';
        }
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        return request ? this.requestFullscreen.apply(this, [target].concat(args)) : this.exitFullscreen.apply(this, args);
    };
    Dom.prototype.focus = function () {
        this.videoElement.focus();
    };
    /**
     * function called when we distory
     */
    Dom.prototype.destroy = function () {
        var _this = this;
        this.removeVideo();
        _const.domEvents.forEach(function (key, index) {
            (0, _mangoHelper.removeEvent)(_this.container, key, _this.containerDomEventHandlerList[index]);
            (0, _mangoHelper.removeEvent)(_this.wrapper, key, _this.wrapperDomEventHandlerList[index]);
        });
        _esFullscreen2.default.off('fullscreenchange', this._fullscreenMonitor);
        this.wrapper.innerHTML = this.originHTML;
        delete this.wrapper;
        delete this.plugins;
    };
    /**
     * bind all dom events on one element
     * we will use passive mode if it support
     */
    Dom.prototype._addDomEvents = function (element, handlerList, handlerGenerate) {
        _const.domEvents.forEach(function (key) {
            var fn = handlerGenerate(key);
            handlerList.push(fn);
            if (_const.passiveEvents.indexOf(key) > -1) {
                (0, _mangoHelper.addEvent)(element, key, fn, false, { passive: true });
                return;
            }
            (0, _mangoHelper.addEvent)(element, key, fn);
        });
    };
    Dom.prototype._autoFocusToVideo = function (element, remove) {
        if (remove === void 0) {
            remove = false;
        }
        if (!(0, _mangoHelper.isElement)(element)) return;
        (remove ? _mangoHelper.removeEvent : _mangoHelper.addEvent)(element, 'mouseup', this._focusToVideo, false, true);
        (remove ? _mangoHelper.removeEvent : _mangoHelper.addEvent)(element, 'touchend', this._focusToVideo, false, true);
    };
    Dom.prototype._focusToVideo = function () {
        var x = window.scrollX;
        var y = window.scrollY;
        (0, _mangoHelper.isFunction)(this.videoElement.focus) && this.videoElement.focus();
        window.scrollTo(x, y);
    };
    Dom.prototype._fullscreenMonitor = function (evt) {
        var element = _esFullscreen2.default.fullscreenElement;
        var original = this.isFullscreen;
        if (!element || !(0, _mangoHelper.isPosterityNode)(this.wrapper, element) && element !== this.wrapper) {
            this.isFullscreen = false;
            this.fullscreenElement = undefined;
        } else {
            this.isFullscreen = true;
            this.fullscreenElement = this.wrapper === element ? 'wrapper' : this.container === element ? 'container' : this.videoElement === element ? 'video' : element;
        }
        if ((0, _mangoHelper.isEvent)(evt) && original !== this.isFullscreen) {
            this.__dispatcher.bus.triggerSync('fullscreenchange', evt);
        }
    };
    /**
     * get the event handler for dom to bind
     */
    Dom.prototype._getEventHandler = function (key, _a) {
        var _this = this;
        var penetrate = _a.penetrate;
        if (!penetrate || ['mouseenter', 'mouseleave'].indexOf(key) < 0) {
            return function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                (_a = _this.__dispatcher.bus).triggerSync.apply(_a, [key].concat(args));
                var _a;
            };
        }
        var insideVideo = function insideVideo(node) {
            return _this.__videoExtendedNodes.indexOf(node) > -1 || _this.__videoExtendedNodes.reduce(function (flag, video) {
                if (flag) return flag;
                return (0, _mangoHelper.isPosterityNode)(video, node);
            }, false);
        };
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var _a = args[0],
                toElement = _a.toElement,
                currentTarget = _a.currentTarget,
                relatedTarget = _a.relatedTarget,
                type = _a.type;
            var to = toElement || relatedTarget;
            if (_this.__mouseInVideo && type === 'mouseleave' && !insideVideo(to)) {
                _this.__mouseInVideo = false;
                return (_b = _this.__dispatcher.bus).triggerSync.apply(_b, ['mouseleave'].concat(args));
            }
            if (!_this.__mouseInVideo && type === 'mouseenter' && insideVideo(currentTarget)) {
                _this.__mouseInVideo = true;
                return (_c = _this.__dispatcher.bus).triggerSync.apply(_c, ['mouseenter'].concat(args));
            }
            var _b, _c;
        };
    };
    __decorate([(0, _toxicDecorators.waituntil)('__dispatcher.videoConfigReady'), (0, _toxicDecorators.before)(attrOperationCheck, targetCheck)], Dom.prototype, "setAttr", null);
    __decorate([(0, _toxicDecorators.before)(attrOperationCheck, targetCheck)], Dom.prototype, "getAttr", null);
    __decorate([(0, _toxicDecorators.before)(attrOperationCheck, targetCheck)], Dom.prototype, "setStyle", null);
    __decorate([(0, _toxicDecorators.before)(attrOperationCheck, targetCheck)], Dom.prototype, "getStyle", null);
    __decorate([(0, _toxicDecorators.before)(targetCheck)], Dom.prototype, "requestFullscreen", null);
    __decorate([_toxicDecorators.autobind], Dom.prototype, "_focusToVideo", null);
    __decorate([_toxicDecorators.autobind], Dom.prototype, "_fullscreenMonitor", null);
    return Dom;
}();
exports.default = Dom;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {


/**
 * es-fullscreen v0.3.0
 * (c) 2017-2018 toxic-johann
 * Released under MIT
 */

(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.esFullscreen = factory());
}(this, (function () { 'use strict';

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
var _toInteger = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

// 7.2.1 RequireObjectCoercible(argument)
var _defined = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

// true  -> String#at
// false -> String#codePointAt
var _stringAt = function (TO_STRING) {
  return function (that, pos) {
    var s = String(_defined(that));
    var i = _toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

var _library = true;

var _global = createCommonjsModule(function (module) {
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
});

var _core = createCommonjsModule(function (module) {
var core = module.exports = { version: '2.5.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
});
var _core_1 = _core.version;

var _aFunction = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

// optional / simple context binding

var _ctx = function (fn, that, length) {
  _aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

var _isObject = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

var _anObject = function (it) {
  if (!_isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

var _fails = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

// Thank's IE8 for his funny defineProperty
var _descriptors = !_fails(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});

var document$1 = _global.document;
// typeof document.createElement is 'object' in old IE
var is = _isObject(document$1) && _isObject(document$1.createElement);
var _domCreate = function (it) {
  return is ? document$1.createElement(it) : {};
};

var _ie8DomDefine = !_descriptors && !_fails(function () {
  return Object.defineProperty(_domCreate('div'), 'a', { get: function () { return 7; } }).a != 7;
});

// 7.1.1 ToPrimitive(input [, PreferredType])

// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
var _toPrimitive = function (it, S) {
  if (!_isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !_isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

var dP = Object.defineProperty;

var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  _anObject(O);
  P = _toPrimitive(P, true);
  _anObject(Attributes);
  if (_ie8DomDefine) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var _objectDp = {
	f: f
};

var _propertyDesc = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var _hide = _descriptors ? function (object, key, value) {
  return _objectDp.f(object, key, _propertyDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] : (_global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? _ctx(out, _global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? _ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) _hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
var _export = $export;

var _redefine = _hide;

var hasOwnProperty = {}.hasOwnProperty;
var _has = function (it, key) {
  return hasOwnProperty.call(it, key);
};

var _iterators = {};

var toString = {}.toString;

var _cof = function (it) {
  return toString.call(it).slice(8, -1);
};

// fallback for non-array-like ES3 and non-enumerable old V8 strings

// eslint-disable-next-line no-prototype-builtins
var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return _cof(it) == 'String' ? it.split('') : Object(it);
};

// to indexed object, toObject with fallback for non-array-like ES3 strings


var _toIobject = function (it) {
  return _iobject(_defined(it));
};

// 7.1.15 ToLength

var min = Math.min;
var _toLength = function (it) {
  return it > 0 ? min(_toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

var max = Math.max;
var min$1 = Math.min;
var _toAbsoluteIndex = function (index, length) {
  index = _toInteger(index);
  return index < 0 ? max(index + length, 0) : min$1(index, length);
};

// false -> Array#indexOf
// true  -> Array#includes



var _arrayIncludes = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = _toIobject($this);
    var length = _toLength(O.length);
    var index = _toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

var SHARED = '__core-js_shared__';
var store = _global[SHARED] || (_global[SHARED] = {});
var _shared = function (key) {
  return store[key] || (store[key] = {});
};

var id = 0;
var px = Math.random();
var _uid = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

var shared$1 = _shared('keys');

var _sharedKey = function (key) {
  return shared$1[key] || (shared$1[key] = _uid(key));
};

var arrayIndexOf = _arrayIncludes(false);
var IE_PROTO = _sharedKey('IE_PROTO');

var _objectKeysInternal = function (object, names) {
  var O = _toIobject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) _has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (_has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

// IE 8- don't enum bug keys
var _enumBugKeys = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

// 19.1.2.14 / 15.2.3.14 Object.keys(O)



var _objectKeys = Object.keys || function keys(O) {
  return _objectKeysInternal(O, _enumBugKeys);
};

var _objectDps = _descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
  _anObject(O);
  var keys = _objectKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) _objectDp.f(O, P = keys[i++], Properties[P]);
  return O;
};

var document$2 = _global.document;
var _html = document$2 && document$2.documentElement;

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])



var IE_PROTO$1 = _sharedKey('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE$1 = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = _domCreate('iframe');
  var i = _enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  _html.appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE$1][_enumBugKeys[i]];
  return createDict();
};

var _objectCreate = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE$1] = _anObject(O);
    result = new Empty();
    Empty[PROTOTYPE$1] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO$1] = O;
  } else result = createDict();
  return Properties === undefined ? result : _objectDps(result, Properties);
};

var _wks = createCommonjsModule(function (module) {
var store = _shared('wks');

var Symbol = _global.Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : _uid)('Symbol.' + name));
};

$exports.store = store;
});

var def = _objectDp.f;

var TAG = _wks('toStringTag');

var _setToStringTag = function (it, tag, stat) {
  if (it && !_has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};

var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
_hide(IteratorPrototype, _wks('iterator'), function () { return this; });

var _iterCreate = function (Constructor, NAME, next) {
  Constructor.prototype = _objectCreate(IteratorPrototype, { next: _propertyDesc(1, next) });
  _setToStringTag(Constructor, NAME + ' Iterator');
};

// 7.1.13 ToObject(argument)

var _toObject = function (it) {
  return Object(_defined(it));
};

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)


var IE_PROTO$2 = _sharedKey('IE_PROTO');
var ObjectProto = Object.prototype;

var _objectGpo = Object.getPrototypeOf || function (O) {
  O = _toObject(O);
  if (_has(O, IE_PROTO$2)) return O[IE_PROTO$2];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

var ITERATOR = _wks('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

var _iterDefine = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  _iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = (!BUGGY && $native) || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = _objectGpo($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      _setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!_library && !_has(IteratorPrototype, ITERATOR)) _hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!_library || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    _hide(proto, ITERATOR, $default);
  }
  // Plug for library
  _iterators[NAME] = $default;
  _iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) _redefine(proto, key, methods[key]);
    } else _export(_export.P + _export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

var $at = _stringAt(true);

// 21.1.3.27 String.prototype[@@iterator]()
_iterDefine(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});

var _iterStep = function (done, value) {
  return { value: value, done: !!done };
};

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
var es6_array_iterator = _iterDefine(Array, 'Array', function (iterated, kind) {
  this._t = _toIobject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return _iterStep(1);
  }
  if (kind == 'keys') return _iterStep(0, index);
  if (kind == 'values') return _iterStep(0, O[index]);
  return _iterStep(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
_iterators.Arguments = _iterators.Array;

var TO_STRING_TAG = _wks('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = _global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) _hide(proto, TO_STRING_TAG, NAME);
  _iterators[NAME] = _iterators.Array;
}

var f$1 = _wks;

var _wksExt = {
	f: f$1
};

var iterator = _wksExt.f('iterator');

var iterator$2 = createCommonjsModule(function (module) {
module.exports = { "default": iterator, __esModule: true };
});

unwrapExports(iterator$2);

var _meta = createCommonjsModule(function (module) {
var META = _uid('meta');


var setDesc = _objectDp.f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !_fails(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!_isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!_has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!_has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !_has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};
});
var _meta_1 = _meta.KEY;
var _meta_2 = _meta.NEED;
var _meta_3 = _meta.fastKey;
var _meta_4 = _meta.getWeak;
var _meta_5 = _meta.onFreeze;

var defineProperty = _objectDp.f;
var _wksDefine = function (name) {
  var $Symbol = _core.Symbol || (_core.Symbol = _library ? {} : _global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: _wksExt.f(name) });
};

var f$2 = Object.getOwnPropertySymbols;

var _objectGops = {
	f: f$2
};

var f$3 = {}.propertyIsEnumerable;

var _objectPie = {
	f: f$3
};

// all enumerable object keys, includes symbols



var _enumKeys = function (it) {
  var result = _objectKeys(it);
  var getSymbols = _objectGops.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = _objectPie.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};

// 7.2.2 IsArray(argument)

var _isArray = Array.isArray || function isArray(arg) {
  return _cof(arg) == 'Array';
};

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)

var hiddenKeys = _enumBugKeys.concat('length', 'prototype');

var f$4 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return _objectKeysInternal(O, hiddenKeys);
};

var _objectGopn = {
	f: f$4
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window

var gOPN$1 = _objectGopn.f;
var toString$1 = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN$1(it);
  } catch (e) {
    return windowNames.slice();
  }
};

var f$5 = function getOwnPropertyNames(it) {
  return windowNames && toString$1.call(it) == '[object Window]' ? getWindowNames(it) : gOPN$1(_toIobject(it));
};

var _objectGopnExt = {
	f: f$5
};

var gOPD = Object.getOwnPropertyDescriptor;

var f$6 = _descriptors ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = _toIobject(O);
  P = _toPrimitive(P, true);
  if (_ie8DomDefine) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (_has(O, P)) return _propertyDesc(!_objectPie.f.call(O, P), O[P]);
};

var _objectGopd = {
	f: f$6
};

// ECMAScript 6 symbols shim





var META = _meta.KEY;



















var gOPD$1 = _objectGopd.f;
var dP$2 = _objectDp.f;
var gOPN$2 = _objectGopnExt.f;
var $Symbol = _global.Symbol;
var $JSON = _global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE$2 = 'prototype';
var HIDDEN = _wks('_hidden');
var TO_PRIMITIVE = _wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = _shared('symbol-registry');
var AllSymbols = _shared('symbols');
var OPSymbols = _shared('op-symbols');
var ObjectProto$1 = Object[PROTOTYPE$2];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = _global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE$2] || !QObject[PROTOTYPE$2].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = _descriptors && _fails(function () {
  return _objectCreate(dP$2({}, 'a', {
    get: function () { return dP$2(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD$1(ObjectProto$1, key);
  if (protoDesc) delete ObjectProto$1[key];
  dP$2(it, key, D);
  if (protoDesc && it !== ObjectProto$1) dP$2(ObjectProto$1, key, protoDesc);
} : dP$2;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _objectCreate($Symbol[PROTOTYPE$2]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto$1) $defineProperty(OPSymbols, key, D);
  _anObject(it);
  key = _toPrimitive(key, true);
  _anObject(D);
  if (_has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!_has(it, HIDDEN)) dP$2(it, HIDDEN, _propertyDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (_has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _objectCreate(D, { enumerable: _propertyDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP$2(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  _anObject(it);
  var keys = _enumKeys(P = _toIobject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _objectCreate(it) : $defineProperties(_objectCreate(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = _toPrimitive(key, true));
  if (this === ObjectProto$1 && _has(AllSymbols, key) && !_has(OPSymbols, key)) return false;
  return E || !_has(this, key) || !_has(AllSymbols, key) || _has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = _toIobject(it);
  key = _toPrimitive(key, true);
  if (it === ObjectProto$1 && _has(AllSymbols, key) && !_has(OPSymbols, key)) return;
  var D = gOPD$1(it, key);
  if (D && _has(AllSymbols, key) && !(_has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN$2(_toIobject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!_has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto$1;
  var names = gOPN$2(IS_OP ? OPSymbols : _toIobject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (_has(AllSymbols, key = names[i++]) && (IS_OP ? _has(ObjectProto$1, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = _uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto$1) $set.call(OPSymbols, value);
      if (_has(this, HIDDEN) && _has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, _propertyDesc(1, value));
    };
    if (_descriptors && setter) setSymbolDesc(ObjectProto$1, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  _redefine($Symbol[PROTOTYPE$2], 'toString', function toString() {
    return this._k;
  });

  _objectGopd.f = $getOwnPropertyDescriptor;
  _objectDp.f = $defineProperty;
  _objectGopn.f = _objectGopnExt.f = $getOwnPropertyNames;
  _objectPie.f = $propertyIsEnumerable;
  _objectGops.f = $getOwnPropertySymbols;

  if (_descriptors && !_library) {
    _redefine(ObjectProto$1, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  _wksExt.f = function (name) {
    return wrap(_wks(name));
  };
}

_export(_export.G + _export.W + _export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)_wks(es6Symbols[j++]);

for (var wellKnownSymbols = _objectKeys(_wks.store), k = 0; wellKnownSymbols.length > k;) _wksDefine(wellKnownSymbols[k++]);

_export(_export.S + _export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return _has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

_export(_export.S + _export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && _export(_export.S + _export.F * (!USE_NATIVE || _fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!_isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!_isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE$2][TO_PRIMITIVE] || _hide($Symbol[PROTOTYPE$2], TO_PRIMITIVE, $Symbol[PROTOTYPE$2].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
_setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
_setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
_setToStringTag(_global.JSON, 'JSON', true);

_wksDefine('asyncIterator');

_wksDefine('observable');

var symbol = _core.Symbol;

var symbol$2 = createCommonjsModule(function (module) {
module.exports = { "default": symbol, __esModule: true };
});

unwrapExports(symbol$2);

var _typeof_1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;



var _iterator2 = _interopRequireDefault(iterator$2);



var _symbol2 = _interopRequireDefault(symbol$2);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};
});

var _typeof = unwrapExports(_typeof_1);

// most Object methods by ES6 should accept primitives



var _objectSap = function (KEY, exec) {
  var fn = (_core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  _export(_export.S + _export.F * _fails(function () { fn(1); }), 'Object', exp);
};

// 19.1.2.14 Object.keys(O)



_objectSap('keys', function () {
  return function keys(it) {
    return _objectKeys(_toObject(it));
  };
});

var keys = _core.Object.keys;

var keys$2 = createCommonjsModule(function (module) {
module.exports = { "default": keys, __esModule: true };
});

unwrapExports(keys$2);

// 20.1.2.3 Number.isInteger(number)

var floor$1 = Math.floor;
var _isInteger = function isInteger(it) {
  return !_isObject(it) && isFinite(it) && floor$1(it) === it;
};

// 20.1.2.3 Number.isInteger(number)


_export(_export.S, 'Number', { isInteger: _isInteger });

var isInteger = _core.Number.isInteger;

var isInteger$2 = createCommonjsModule(function (module) {
module.exports = { "default": isInteger, __esModule: true };
});

unwrapExports(isInteger$2);

var _stringWs = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

var space = '[' + _stringWs + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = _fails(function () {
    return !!_stringWs[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : _stringWs[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  _export(_export.P + _export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(_defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

var _stringTrim = exporter;

var $parseFloat = _global.parseFloat;
var $trim = _stringTrim.trim;

var _parseFloat = 1 / $parseFloat(_stringWs + '-0') !== -Infinity ? function parseFloat(str) {
  var string = $trim(String(str), 3);
  var result = $parseFloat(string);
  return result === 0 && string.charAt(0) == '-' ? -0 : result;
} : $parseFloat;

// 20.1.2.12 Number.parseFloat(string)
_export(_export.S + _export.F * (Number.parseFloat != _parseFloat), 'Number', { parseFloat: _parseFloat });

var _parseFloat$2 = parseFloat;

var _parseFloat$4 = createCommonjsModule(function (module) {
module.exports = { "default": _parseFloat$2, __esModule: true };
});

unwrapExports(_parseFloat$4);

/**
 * to check whether the object is defined or not
 */
function defined$1(obj) {
  return typeof obj !== 'undefined';
}
/**
 * is void element or not ? Means it will return true when val is undefined or null
 */
function isVoid(obj) {
  return obj === undefined || obj === null;
}
/**
 * to check whether a variable is array
 */
function isArray$1(arr) {
  return Array.isArray(arr);
}

/**
 * is it a function or not
 */
function isFunction(obj) {
  return typeof obj === 'function';
}

/**
 * is it an object or not
 */
function isObject$1(obj) {
  // incase of arrow function and array
  return Object(obj) === obj && String(obj) === '[object Object]' && !isFunction(obj) && !isArray$1(obj);
}
/**
 * to tell you if it's a real number
 */
function isNumber(obj) {
  return typeof obj === 'number';
}
/**
 * is it an event or not
 */
function isEvent(obj) {
  return obj instanceof Event || (obj && obj.originalEvent) instanceof Event;
}
/**
 * is it a string
 */
function isString(str) {
  return typeof str === 'string' || str instanceof String;
}
/**
 * is Boolean or not
 */
function isBoolean(bool) {
  return typeof bool === 'boolean';
}
/**
 * is a promise or not
 */
function isPromise(obj) {
  return !!obj && ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}
/**
 * is Primitive type or not, whick means it will return true when data is number/string/boolean/undefined/null
 */
function isPrimitive(val) {
  return isVoid(val) || isBoolean(val) || isString(val) || isNumber(val);
}
/**
 * to test if a HTML element
 */
function isElement(obj) {
  return !!((typeof HTMLElement === 'undefined' ? 'undefined' : _typeof(HTMLElement)) === 'object' ? obj instanceof HTMLElement : obj && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' && obj !== null && obj.nodeType === 1 && typeof obj.nodeName === 'string');
}

var VENDOR_PREFIXES = ['', 'o', 'ms', 'moz', 'webkit', 'webkitCurrent'];

var SYNONYMS = [['', ''], // empty
['exit', 'cancel'], // firefox & old webkits expect cancelFullScreen instead of exitFullscreen
['screen', 'Screen']];

var DESKTOP_FULLSCREEN_STYLE = {
  position: 'fixed',
  zIndex: '2147483647',
  left: 0,
  top: 0,
  right: 0,
  bottom: 0,
  overflow: 'hidden',
  width: '100%',
  height: '100%'
};

var FULLSCREEN_CHANGE = ['fullscreenchange', 'webkitfullscreenchange', 'mozfullscreenchange', 'MSFullscreenChange'];

var FULLSCREEN_ERROR = ['fullscreenerror', 'webkitfullscreenerror', 'mozfullscreenerror', 'MSFullscreenError'];

var _typeof$1 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var supportDocument = typeof document !== 'undefined';

function setStyle(el, key, val) {
  if (isObject$1(key)) {
    for (var k in key) {
      setStyle(el, k, key[k]);
    }
  } else {
    // $FlowFixMe: we found it
    el.style[key] = val;
  }
}

function native(target, name) {
  var option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (isObject$1(name)) {
    option = name;
  }
  if (isString(target)) {
    name = target;
  }
  var _option = option,
      _option$keyOnly = _option.keyOnly,
      keyOnly = _option$keyOnly === undefined ? false : _option$keyOnly;
  /* istanbul ignore if */

  if (!supportDocument) {
    return keyOnly ? '' : undefined;
  }
  if (!isElement(target)) {
    target = document;
  }
  if (!isString(name)) throw new Error('You must pass in a string as name, but not ' + (typeof name === 'undefined' ? 'undefined' : _typeof$1(name)) + '.');
  for (var i = 0; i < SYNONYMS.length; i++) {
    name = name.replace(SYNONYMS[i][0], SYNONYMS[i][1]);
    for (var j = 0; j < VENDOR_PREFIXES.length; j++) {
      var prefixed = j === 0 ? name : VENDOR_PREFIXES[j] + name.charAt(0).toUpperCase() + name.substr(1);
      // $FlowFixMe: we support document computed property here
      if (target[prefixed] !== undefined) return keyOnly ? prefixed : target[prefixed];
    }
  }
  return keyOnly ? '' : undefined;
}

function dispatchEvent(element, name) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref$bubbles = _ref.bubbles,
      bubbles = _ref$bubbles === undefined ? true : _ref$bubbles,
      _ref$cancelable = _ref.cancelable,
      cancelable = _ref$cancelable === undefined ? true : _ref$cancelable;

  var event = void 0;
  /* istanbul ignore else  */
  if (isFunction(Event)) {
    event = new Event(name, {
      bubbles: bubbles,
      cancelable: cancelable
    });
  } else if (supportDocument && document.createEvent) {
    event = document.createEvent('HTMLEvents');
    event.initEvent(name, true, true);
  } else if (supportDocument && document.createEventObject) {
    // $FlowFixMe: IE < 9
    event = document.createEventObject();
    event.eventType = name;
    event.eventName = name;
  }
  /* istanbul ignore next  */
  if (!isObject$1(event) && !isEvent(event)) throw new Error("We can't create an object on this browser, please report to author");
  /* istanbul ignore else  */
  if (element.dispatchEvent) {
    element.dispatchEvent(event);
    // $FlowFixMe: IE < 9
  } else if (element.fireEvent) {
    // $FlowFixMe: IE < 9
    element.fireEvent('on' + event.eventType, event); // can trigger only real event (e.g. 'click')
    // $FlowFixMe: support computed key
  } else if (element[name]) {
    // $FlowFixMe: support computed key
    element[name]();
    // $FlowFixMe: support computed key
  } else if (element['on' + name]) {
    // $FlowFixMe: support computed key
    element['on' + name]();
  }
}

// all object keys, includes non-enumerable and symbols



var Reflect = _global.Reflect;
var _ownKeys = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = _objectGopn.f(_anObject(it));
  var getSymbols = _objectGops.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};

var _createProperty = function (object, index, value) {
  if (index in object) _objectDp.f(object, index, _propertyDesc(0, value));
  else object[index] = value;
};

// https://github.com/tc39/proposal-object-getownpropertydescriptors






_export(_export.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = _toIobject(object);
    var getDesc = _objectGopd.f;
    var keys = _ownKeys(O);
    var result = {};
    var i = 0;
    var key, desc;
    while (keys.length > i) {
      desc = getDesc(O, key = keys[i++]);
      if (desc !== undefined) _createProperty(result, key, desc);
    }
    return result;
  }
});

var getOwnPropertyDescriptors = _core.Object.getOwnPropertyDescriptors;

var getOwnPropertyDescriptors$2 = createCommonjsModule(function (module) {
module.exports = { "default": getOwnPropertyDescriptors, __esModule: true };
});

var _Object$getOwnPropertyDescriptors = unwrapExports(getOwnPropertyDescriptors$2);

// call something on iterator step with safe closing on error

var _iterCall = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(_anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) _anObject(ret.call(iterator));
    throw e;
  }
};

// check on default Array iterator

var ITERATOR$1 = _wks('iterator');
var ArrayProto = Array.prototype;

var _isArrayIter = function (it) {
  return it !== undefined && (_iterators.Array === it || ArrayProto[ITERATOR$1] === it);
};

// getting tag from 19.1.3.6 Object.prototype.toString()

var TAG$1 = _wks('toStringTag');
// ES3 wrong here
var ARG = _cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

var _classof = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG$1)) == 'string' ? T
    // builtinTag case
    : ARG ? _cof(O)
    // ES3 arguments fallback
    : (B = _cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

var ITERATOR$2 = _wks('iterator');

var core_getIteratorMethod = _core.getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR$2]
    || it['@@iterator']
    || _iterators[_classof(it)];
};

var ITERATOR$3 = _wks('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR$3]();
  riter['return'] = function () { SAFE_CLOSING = true; };
} catch (e) { /* empty */ }

var _iterDetect = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR$3]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR$3] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};

_export(_export.S + _export.F * !_iterDetect(function (iter) { }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = _toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = core_getIteratorMethod(O);
    var length, result, step, iterator;
    if (mapping) mapfn = _ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && _isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        _createProperty(result, index, mapping ? _iterCall(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = _toLength(O.length);
      for (result = new C(length); length > index; index++) {
        _createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});

var from = _core.Array.from;

var from$2 = createCommonjsModule(function (module) {
module.exports = { "default": from, __esModule: true };
});

var _Array$from = unwrapExports(from$2);

var getOwnPropertySymbols = _core.Object.getOwnPropertySymbols;

var getOwnPropertySymbols$2 = createCommonjsModule(function (module) {
module.exports = { "default": getOwnPropertySymbols, __esModule: true };
});

var _Object$getOwnPropertySymbols = unwrapExports(getOwnPropertySymbols$2);

// 19.1.2.7 Object.getOwnPropertyNames(O)
_objectSap('getOwnPropertyNames', function () {
  return _objectGopnExt.f;
});

var $Object = _core.Object;
var getOwnPropertyNames = function getOwnPropertyNames(it) {
  return $Object.getOwnPropertyNames(it);
};

var getOwnPropertyNames$2 = createCommonjsModule(function (module) {
module.exports = { "default": getOwnPropertyNames, __esModule: true };
});

var _Object$getOwnPropertyNames = unwrapExports(getOwnPropertyNames$2);

// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
_export(_export.S + _export.F * !_descriptors, 'Object', { defineProperty: _objectDp.f });

var $Object$1 = _core.Object;
var defineProperty$2 = function defineProperty(it, key, desc) {
  return $Object$1.defineProperty(it, key, desc);
};

var defineProperty$4 = createCommonjsModule(function (module) {
module.exports = { "default": defineProperty$2, __esModule: true };
});

var _Object$defineProperty = unwrapExports(defineProperty$4);

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)

var $getOwnPropertyDescriptor$1 = _objectGopd.f;

_objectSap('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor$1(_toIobject(it), key);
  };
});

var $Object$2 = _core.Object;
var getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  return $Object$2.getOwnPropertyDescriptor(it, key);
};

var getOwnPropertyDescriptor$2 = createCommonjsModule(function (module) {
module.exports = { "default": getOwnPropertyDescriptor, __esModule: true };
});

var _Object$getOwnPropertyDescriptor = unwrapExports(getOwnPropertyDescriptor$2);

var toConsumableArray$1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;



var _from2 = _interopRequireDefault(from$2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};
});

var _toConsumableArray = unwrapExports(toConsumableArray$1);

/**
 * bind the function with some context. we have some fallback strategy here
 * @param {function} fn the function which we need to bind the context on
 * @param {any} context the context object
 */
function bind(fn, context) {
  if (fn.bind) {
    return fn.bind(context);
  } else if (fn.apply) {
    return function __autobind__() {
      for (var _len2 = arguments.length, args = Array(_len2), _key3 = 0; _key3 < _len2; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return fn.apply(context, args);
    };
  } else {
    return function __autobind__() {
      for (var _len3 = arguments.length, args = Array(_len3), _key4 = 0; _key4 < _len3; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return fn.call.apply(fn, [context].concat(_toConsumableArray(args)));
    };
  }
}

/**
 * get an deep property
 */
function getDeepProperty(obj, keys) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      _ref$throwError = _ref.throwError,
      throwError = _ref$throwError === undefined ? false : _ref$throwError,
      backup = _ref.backup;

  if (isString(keys)) {
    keys = keys.split('.');
  }
  if (!isArray$1(keys)) {
    throw new TypeError('keys of getDeepProperty must be string or Array<string>');
  }
  var read = [];
  var target = obj;
  for (var i = 0, len = keys.length; i < len; i++) {
    var key = keys[i];
    if (isVoid(target)) {
      if (throwError) {
        throw new Error('obj' + (read.length > 0 ? '.' + read.join('.') : ' itself') + ' is ' + target);
      } else {
        return backup;
      }
    }
    target = target[key];
    read.push(key);
  }
  return target;
}

var ITERATOR$4 = _wks('iterator');

var core_isIterable = _core.isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR$4] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || _iterators.hasOwnProperty(_classof(O));
};

var isIterable = core_isIterable;

var isIterable$2 = createCommonjsModule(function (module) {
module.exports = { "default": isIterable, __esModule: true };
});

unwrapExports(isIterable$2);

var core_getIterator = _core.getIterator = function (it) {
  var iterFn = core_getIteratorMethod(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return _anObject(iterFn.call(it));
};

var getIterator = core_getIterator;

var getIterator$2 = createCommonjsModule(function (module) {
module.exports = { "default": getIterator, __esModule: true };
});

unwrapExports(getIterator$2);

var slicedToArray$1 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;



var _isIterable3 = _interopRequireDefault(isIterable$2);



var _getIterator3 = _interopRequireDefault(getIterator$2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();
});

var _slicedToArray = unwrapExports(slicedToArray$1);

// 19.1.2.9 Object.getPrototypeOf(O)



_objectSap('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return _objectGpo(_toObject(it));
  };
});

var getPrototypeOf = _core.Object.getPrototypeOf;

var getPrototypeOf$2 = createCommonjsModule(function (module) {
module.exports = { "default": getPrototypeOf, __esModule: true };
});

var _Object$getPrototypeOf = unwrapExports(getPrototypeOf$2);

var SPECIES = _wks('species');

var _arraySpeciesConstructor = function (original) {
  var C;
  if (_isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || _isArray(C.prototype))) C = undefined;
    if (_isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)


var _arraySpeciesCreate = function (original, length) {
  return new (_arraySpeciesConstructor(original))(length);
};

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex





var _arrayMethods = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || _arraySpeciesCreate;
  return function ($this, callbackfn, that) {
    var O = _toObject($this);
    var self = _iobject(O);
    var f = _ctx(callbackfn, that, 3);
    var length = _toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};

// 19.1.2.1 Object.assign(target, source, ...)





var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
var _objectAssign = !$assign || _fails(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = _toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = _objectGops.f;
  var isEnum = _objectPie.f;
  while (aLen > index) {
    var S = _iobject(arguments[index++]);
    var keys = getSymbols ? _objectKeys(S).concat(getSymbols(S)) : _objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;

var _redefineAll = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else _hide(target, key, src[key]);
  } return target;
};

var _anInstance = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};

var _forOf = createCommonjsModule(function (module) {
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : core_getIteratorMethod(iterable);
  var f = _ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (_isArrayIter(iterFn)) for (length = _toLength(iterable.length); length > index; index++) {
    result = entries ? f(_anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = _iterCall(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;
});

var _validateCollection = function (it, TYPE) {
  if (!_isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};

var getWeak = _meta.getWeak;







var arrayFind = _arrayMethods(5);
var arrayFindIndex = _arrayMethods(6);
var id$1 = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (that) {
  return that._l || (that._l = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function () {
  this.a = [];
};
var findUncaughtFrozen = function (store, key) {
  return arrayFind(store.a, function (it) {
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.a.push([key, value]);
  },
  'delete': function (key) {
    var index = arrayFindIndex(this.a, function (it) {
      return it[0] === key;
    });
    if (~index) this.a.splice(index, 1);
    return !!~index;
  }
};

var _collectionWeak = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      _anInstance(that, C, NAME, '_i');
      that._t = NAME;      // collection type
      that._i = id$1++;      // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if (iterable != undefined) _forOf(iterable, IS_MAP, that[ADDER], that);
    });
    _redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function (key) {
        if (!_isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(_validateCollection(this, NAME))['delete'](key);
        return data && _has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key) {
        if (!_isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(_validateCollection(this, NAME)).has(key);
        return data && _has(data, this._i);
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var data = getWeak(_anObject(key), true);
    if (data === true) uncaughtFrozenStore(that).set(key, value);
    else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};

var dP$3 = _objectDp.f;
var each = _arrayMethods(0);


var _collection = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = _global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  if (!_descriptors || typeof C != 'function' || !(IS_WEAK || proto.forEach && !_fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    _redefineAll(C.prototype, methods);
    _meta.NEED = true;
  } else {
    C = wrapper(function (target, iterable) {
      _anInstance(target, C, NAME, '_c');
      target._c = new Base();
      if (iterable != undefined) _forOf(iterable, IS_MAP, target[ADDER], target);
    });
    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','), function (KEY) {
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if (KEY in proto && !(IS_WEAK && KEY == 'clear')) _hide(C.prototype, KEY, function (a, b) {
        _anInstance(this, C, KEY);
        if (!IS_ADDER && IS_WEAK && !_isObject(a)) return KEY == 'get' ? undefined : false;
        var result = this._c[KEY](a === 0 ? 0 : a, b);
        return IS_ADDER ? this : result;
      });
    });
    IS_WEAK || dP$3(C.prototype, 'size', {
      get: function () {
        return this._c.size;
      }
    });
  }

  _setToStringTag(C, NAME);

  O[NAME] = C;
  _export(_export.G + _export.W + _export.F, O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};

var es6_weakMap = createCommonjsModule(function (module) {
var each = _arrayMethods(0);







var WEAK_MAP = 'WeakMap';
var getWeak = _meta.getWeak;
var isExtensible = Object.isExtensible;
var uncaughtFrozenStore = _collectionWeak.ufstore;
var tmp = {};
var InternalMap;

var wrapper = function (get) {
  return function WeakMap() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key) {
    if (_isObject(key)) {
      var data = getWeak(key);
      if (data === true) return uncaughtFrozenStore(_validateCollection(this, WEAK_MAP)).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value) {
    return _collectionWeak.def(_validateCollection(this, WEAK_MAP), key, value);
  }
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = _collection(WEAK_MAP, wrapper, methods, _collectionWeak, true, true);

// IE11 WeakMap frozen keys fix
if (_fails(function () { return new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7; })) {
  InternalMap = _collectionWeak.getConstructor(wrapper, WEAK_MAP);
  _objectAssign(InternalMap.prototype, methods);
  _meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function (key) {
    var proto = $WeakMap.prototype;
    var method = proto[key];
    _redefine(proto, key, function (a, b) {
      // store frozen objects on internal weakmap shim
      if (_isObject(a) && !isExtensible(a)) {
        if (!this._f) this._f = new InternalMap();
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    });
  });
}
});

// https://tc39.github.io/proposal-setmap-offrom/


var _setCollectionOf = function (COLLECTION) {
  _export(_export.S, COLLECTION, { of: function of() {
    var length = arguments.length;
    var A = new Array(length);
    while (length--) A[length] = arguments[length];
    return new this(A);
  } });
};

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.of
_setCollectionOf('WeakMap');

// https://tc39.github.io/proposal-setmap-offrom/





var _setCollectionFrom = function (COLLECTION) {
  _export(_export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
    var mapFn = arguments[1];
    var mapping, A, n, cb;
    _aFunction(this);
    mapping = mapFn !== undefined;
    if (mapping) _aFunction(mapFn);
    if (source == undefined) return new this();
    A = [];
    if (mapping) {
      n = 0;
      cb = _ctx(mapFn, arguments[2], 2);
      _forOf(source, false, function (nextItem) {
        A.push(cb(nextItem, n++));
      });
    } else {
      _forOf(source, false, A.push, A);
    }
    return new this(A);
  } });
};

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.from
_setCollectionFrom('WeakMap');

var weakMap = _core.WeakMap;

var weakMap$2 = createCommonjsModule(function (module) {
module.exports = { "default": weakMap, __esModule: true };
});

var _WeakMap = unwrapExports(weakMap$2);

// 7.3.20 SpeciesConstructor(O, defaultConstructor)


var SPECIES$1 = _wks('species');
var _speciesConstructor = function (O, D) {
  var C = _anObject(O).constructor;
  var S;
  return C === undefined || (S = _anObject(C)[SPECIES$1]) == undefined ? D : _aFunction(S);
};

// fast apply, http://jsperf.lnkit.com/fast-apply/5
var _invoke = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};

var process = _global.process;
var setTask = _global.setImmediate;
var clearTask = _global.clearImmediate;
var MessageChannel = _global.MessageChannel;
var Dispatch = _global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      _invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (_cof(process) == 'process') {
    defer = function (id) {
      process.nextTick(_ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(_ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = _ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (_global.addEventListener && typeof postMessage == 'function' && !_global.importScripts) {
    defer = function (id) {
      _global.postMessage(id + '', '*');
    };
    _global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in _domCreate('script')) {
    defer = function (id) {
      _html.appendChild(_domCreate('script'))[ONREADYSTATECHANGE] = function () {
        _html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(_ctx(run, id, 1), 0);
    };
  }
}
var _task = {
  set: setTask,
  clear: clearTask
};

var macrotask = _task.set;
var Observer = _global.MutationObserver || _global.WebKitMutationObserver;
var process$1 = _global.process;
var Promise$1 = _global.Promise;
var isNode$1 = _cof(process$1) == 'process';

var _microtask = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode$1 && (parent = process$1.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode$1) {
    notify = function () {
      process$1.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(_global.navigator && _global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise$1 && Promise$1.resolve) {
    var promise = Promise$1.resolve();
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(_global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};

// 25.4.1.5 NewPromiseCapability(C)


function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = _aFunction(resolve);
  this.reject = _aFunction(reject);
}

var f$7 = function (C) {
  return new PromiseCapability(C);
};

var _newPromiseCapability = {
	f: f$7
};

var _perform = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};

var _promiseResolve = function (C, x) {
  _anObject(C);
  if (_isObject(x) && x.constructor === C) return x;
  var promiseCapability = _newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};

var SPECIES$2 = _wks('species');

var _setSpecies = function (KEY) {
  var C = typeof _core[KEY] == 'function' ? _core[KEY] : _global[KEY];
  if (_descriptors && C && !C[SPECIES$2]) _objectDp.f(C, SPECIES$2, {
    configurable: true,
    get: function () { return this; }
  });
};

var task = _task.set;
var microtask = _microtask();



var PROMISE = 'Promise';
var TypeError$1 = _global.TypeError;
var process$2 = _global.process;
var $Promise = _global[PROMISE];
var isNode$2 = _classof(process$2) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability$1 = newGenericPromiseCapability = _newPromiseCapability.f;

var USE_NATIVE$1 = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[_wks('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode$2 || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return _isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value);
            if (domain) domain.exit();
          }
          if (result === reaction.promise) {
            reject(TypeError$1('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(_global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = _perform(function () {
        if (isNode$2) {
          process$2.emit('unhandledRejection', value, promise);
        } else if (handler = _global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = _global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode$2 || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(_global, function () {
    var handler;
    if (isNode$2) {
      process$2.emit('rejectionHandled', promise);
    } else if (handler = _global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError$1("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, _ctx($resolve, wrapper, 1), _ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE$1) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    _anInstance(this, $Promise, PROMISE, '_h');
    _aFunction(executor);
    Internal.call(this);
    try {
      executor(_ctx($resolve, this, 1), _ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = _redefineAll($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability$1(_speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode$2 ? process$2.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = _ctx($resolve, promise, 1);
    this.reject = _ctx($reject, promise, 1);
  };
  _newPromiseCapability.f = newPromiseCapability$1 = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

_export(_export.G + _export.W + _export.F * !USE_NATIVE$1, { Promise: $Promise });
_setToStringTag($Promise, PROMISE);
_setSpecies(PROMISE);
Wrapper = _core[PROMISE];

// statics
_export(_export.S + _export.F * !USE_NATIVE$1, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability$1(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
_export(_export.S + _export.F * (_library || !USE_NATIVE$1), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return _promiseResolve(_library && this === Wrapper ? $Promise : this, x);
  }
});
_export(_export.S + _export.F * !(USE_NATIVE$1 && _iterDetect(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability$1(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = _perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      _forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability$1(C);
    var reject = capability.reject;
    var result = _perform(function () {
      _forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});

_export(_export.P + _export.R, 'Promise', { 'finally': function (onFinally) {
  var C = _speciesConstructor(this, _core.Promise || _global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return _promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return _promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });

// https://github.com/tc39/proposal-promise-try




_export(_export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = _newPromiseCapability.f(this);
  var result = _perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });

var promise = _core.Promise;

var promise$2 = createCommonjsModule(function (module) {
module.exports = { "default": promise, __esModule: true };
});

var _Promise = unwrapExports(promise$2);

var defineProperty$5 = createCommonjsModule(function (module, exports) {

exports.__esModule = true;



var _defineProperty2 = _interopRequireDefault(defineProperty$4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (obj, key, value) {
  if (key in obj) {
    (0, _defineProperty2.default)(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};
});

unwrapExports(defineProperty$5);

// 19.1.2.15 Object.preventExtensions(O)

var meta = _meta.onFreeze;

_objectSap('preventExtensions', function ($preventExtensions) {
  return function preventExtensions(it) {
    return $preventExtensions && _isObject(it) ? $preventExtensions(meta(it)) : it;
  };
});

var preventExtensions = _core.Object.preventExtensions;

var preventExtensions$2 = createCommonjsModule(function (module) {
module.exports = { "default": preventExtensions, __esModule: true };
});

unwrapExports(preventExtensions$2);

var getOwnPropertyDescriptor$3 = _Object$getOwnPropertyDescriptor;
// **********************  对象操作  ************************
/**
 * sort Object attributes by function
 * and transfer them into array
 * @param  {Object} obj Object form from numric
 * @param  {Function} fn sort function
 * @return {Array} the sorted attirbutes array
 */


/**
 * to check if an descriptor
 * @param {anything} desc
 */
function isDescriptor(desc) {
  if (!desc || !desc.hasOwnProperty) {
    return false;
  }

  var keys = ['value', 'initializer', 'get', 'set'];

  for (var i = 0, l = keys.length; i < l; i++) {
    if (desc.hasOwnProperty(keys[i])) {
      return true;
    }
  }
  return false;
}
/**
 * to check if the descirptor is an accessor descriptor
 * @param {descriptor} desc it should be a descriptor better
 */
function isAccessorDescriptor(desc) {
  return !!desc && (isFunction(desc.get) || isFunction(desc.set)) && isBoolean(desc.configurable) && isBoolean(desc.enumerable) && desc.writable === undefined;
}
/**
 * to check if the descirptor is an data descriptor
 * @param {descriptor} desc it should be a descriptor better
 */
function isDataDescriptor(desc) {
  return !!desc && desc.hasOwnProperty('value') && isBoolean(desc.configurable) && isBoolean(desc.enumerable) && isBoolean(desc.writable);
}
/**
 * to check if the descirptor is an initiallizer descriptor
 * @param {descriptor} desc it should be a descriptor better
 */
function isInitializerDescriptor(desc) {
  return !!desc && isFunction(desc.initializer) && isBoolean(desc.configurable) && isBoolean(desc.enumerable) && isBoolean(desc.writable);
}
/**
 * set one value on the object
 * @param {string} key
 */
function createDefaultSetter(key) {
  return function set(newValue) {
    _Object$defineProperty(this, key, {
      configurable: true,
      writable: true,
      // IS enumerable when reassigned by the outside word
      enumerable: true,
      value: newValue
    });
    return newValue;
  };
}

/**
 * Compress many function into one function, but this function only accept one arguments;
 * @param {Array<Function>} fns the array of function we need to compress into one function
 * @param {string} errmsg When we check that there is something is not function, we will throw an error, you can set your own error message
 */
function compressOneArgFnArray(fns) {
  var errmsg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'You must pass me an array of function';

  if (!isArray$1(fns) || fns.length < 1) {
    throw new TypeError(errmsg);
  }
  if (fns.length === 1) {
    if (!isFunction(fns[0])) {
      throw new TypeError(errmsg);
    }
    return fns[0];
  }
  return fns.reduce(function (prev, curr) {
    if (!isFunction(curr) || !isFunction(prev)) throw new TypeError(errmsg);
    return function (value) {
      return bind(curr, this)(bind(prev, this)(value));
    };
  });
}

function getOwnKeysFn() {
  var getOwnPropertyNames = _Object$getOwnPropertyNames,
      getOwnPropertySymbols = _Object$getOwnPropertySymbols;

  return isFunction(getOwnPropertySymbols) ? function (obj) {
    // $FlowFixMe: do not support symwbol yet
    return _Array$from(getOwnPropertyNames(obj).concat(getOwnPropertySymbols(obj)));
  } : getOwnPropertyNames;
}

var getOwnKeys = getOwnKeysFn();

function getOwnPropertyDescriptorsFn() {
  // $FlowFixMe: In some environment, Object.getOwnPropertyDescriptors has been implemented;
  return isFunction(_Object$getOwnPropertyDescriptors) ? _Object$getOwnPropertyDescriptors : function (obj) {
    return getOwnKeys(obj).reduce(function (descs, key) {
      descs[key] = getOwnPropertyDescriptor$3(obj, key);
      return descs;
    }, {});
  };
}

var getOwnPropertyDescriptors$3 = getOwnPropertyDescriptorsFn();

function accessor() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      get = _ref.get,
      set = _ref.set;

  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref2$preGet = _ref2.preGet,
      preGet = _ref2$preGet === undefined ? false : _ref2$preGet,
      _ref2$preSet = _ref2.preSet,
      preSet = _ref2$preSet === undefined ? true : _ref2$preSet;

  if (!isFunction(get) && !isFunction(set) && !(isArray$1(get) && get.length > 0) && !(isArray$1(set) && set.length > 0)) throw new TypeError("@accessor need a getter or setter. If you don't need to add setter/getter. You should remove @accessor");
  var errmsg = '@accessor only accept function or array of function as getter/setter';
  get = isArray$1(get) ? compressOneArgFnArray(get, errmsg) : get;
  set = isArray$1(set) ? compressOneArgFnArray(set, errmsg) : set;
  return function (obj, prop, descriptor) {
    var _ref3 = descriptor || {},
        _ref3$configurable = _ref3.configurable,
        configurable = _ref3$configurable === undefined ? true : _ref3$configurable,
        _ref3$enumerable = _ref3.enumerable,
        enumerable = _ref3$enumerable === undefined ? true : _ref3$enumerable;

    var hasGet = isFunction(get);
    var hasSet = isFunction(set);
    var handleGet = function handleGet(value) {
      // $FlowFixMe: it's really function here
      return hasGet ? bind(get, this)(value) : value;
    };
    var handleSet = function handleSet(value) {
      // $FlowFixMe: it's really function here
      return hasSet ? bind(set, this)(value) : value;
    };
    if (isAccessorDescriptor(descriptor)) {
      var originGet = descriptor.get,
          originSet = descriptor.set;

      var hasOriginGet = isFunction(originGet);
      var hasOriginSet = isFunction(originSet);
      var getter = hasOriginGet || hasGet ? function () {
        var _this = this;

        var boundGetter = bind(handleGet, this);
        var originBoundGetter = function originBoundGetter() {
          return hasOriginGet
          // $FlowFixMe: we have do a check here
          ? bind(originGet, _this)() : undefined;
        };
        var order = preGet ? [boundGetter, originBoundGetter] : [originBoundGetter, boundGetter];
        // $FlowFixMe: it's all function here
        return order.reduce(function (value, fn) {
          return fn(value);
        }, undefined);
      } : undefined;
      var setter = hasOriginSet || hasSet ? function (val) {
        var _this2 = this;

        var boundSetter = bind(handleSet, this);
        var originBoundSetter = function originBoundSetter(value) {
          return hasOriginSet
          // $FlowFixMe: flow act like a retarded child on optional property
          ? bind(originSet, _this2)(value) : value;
        };
        var order = preSet ? [boundSetter, originBoundSetter] : [originBoundSetter, boundSetter];
        return order.reduce(function (value, fn) {
          return fn(value);
        }, val);
      } : undefined;
      return {
        get: getter,
        set: setter,
        configurable: configurable,
        enumerable: enumerable
      };
    } else if (isInitializerDescriptor(descriptor)) {
      // $FlowFixMe: disjoint union is horrible, descriptor is initializerDescriptor now
      var initializer = descriptor.initializer;

      var value = void 0;
      var inited = false;
      return {
        get: function get() {
          var boundFn = bind(handleGet, this);
          if (inited) return boundFn(value);
          value = bind(initializer, this)();
          inited = true;
          return boundFn(value);
        },
        set: function set(val) {
          var boundFn = bind(handleSet, this);
          value = preSet ? boundFn(val) : val;
          inited = true;
          if (!preSet) {
            boundFn(value);
          }
          return value;
        },

        configurable: configurable,
        enumerable: enumerable
      };
    } else {
      // $FlowFixMe: disjoint union is horrible, descriptor is DataDescriptor now
      var _ref4 = descriptor || {},
          _value = _ref4.value;

      return {
        get: function get() {
          return bind(handleGet, this)(_value);
        },
        set: function set(val) {
          var boundFn = bind(handleSet, this);
          _value = preSet ? boundFn(val) : val;
          if (!preSet) {
            boundFn(_value);
          }
          return _value;
        },

        configurable: configurable,
        enumerable: enumerable
      };
    }
  };
}

function before() {
  for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  if (fns.length === 0) throw new Error("@before accept at least one parameter. If you don't need to preprocess before your function, do not add @before decorators");
  if (fns.length > 2 && isDescriptor(fns[2])) {
    throw new Error('You may use @before straightly, @before return decorators, you should call it before you set it as decorator.');
  }
  for (var i = fns.length - 1; i > -1; i--) {
    if (!isFunction(fns[i])) throw new TypeError('@before only accept function parameter');
  }
  return function (obj, prop, descriptor) {
    var _ref = descriptor || {},
        fn = _ref.value,
        configurable = _ref.configurable,
        enumerable = _ref.enumerable,
        writable = _ref.writable;

    if (!isFunction(fn)) throw new TypeError('@before can only be used on function, please check the property "' + prop + '" is a method or not.');
    var handler = function handler() {
      var _this = this;

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      var paras = fns.reduce(function (paras, fn) {
        var result = bind(fn, _this).apply(undefined, _toConsumableArray(paras));
        return result === undefined ? paras : isArray$1(result) ? result
        // $FlowFixMe: what the hell, it can be anything
        : [result];
      }, args);
      return bind(fn, this).apply(undefined, _toConsumableArray(paras));
    };
    return {
      value: handler,
      configurable: configurable,
      enumerable: enumerable,
      writable: writable
    };
  };
}

function after() {
  for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  if (fns.length === 0) throw new Error("@after accept at least one parameter. If you don't need to preprocess after your function, do not add @after decorators");
  if (fns.length > 2 && isDescriptor(fns[2])) {
    throw new Error('You may have used @after straightly. @after return decorators. You should call it before you use it as decorators');
  }
  var fn = compressOneArgFnArray(fns, '@after only accept function parameter');
  return function (obj, prop, descriptor) {
    var _ref = descriptor || {},
        value = _ref.value,
        configurable = _ref.configurable,
        enumerable = _ref.enumerable,
        writable = _ref.writable;

    if (!isFunction(value)) throw new TypeError('@after can only be used on function, please checkout your property "' + prop + '" is a method or not.');
    var handler = function handler() {
      var ret = bind(value, this).apply(undefined, arguments);
      return bind(fn, this)(ret);
    };
    return {
      value: handler,
      configurable: configurable,
      enumerable: enumerable,
      writable: writable
    };
  };
}

function initialize() {
  for (var _len = arguments.length, fns = Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  if (fns.length === 0) throw new Error("@initialize accept at least one parameter. If you don't need to initialize your value, do not add @initialize.");
  if (fns.length > 2 && isDescriptor(fns[2])) {
    throw new Error('You may use @initialize straightly, @initialize return decorators, you need to call it');
  }
  var fn = compressOneArgFnArray(fns, '@initialize only accept function parameter');
  return function (obj, prop, descriptor) {
    if (descriptor === undefined) {
      return {
        value: bind(fn, obj)(),
        configurable: true,
        writable: true,
        enumerable: true
      };
    }
    if (isAccessorDescriptor(descriptor)) {
      var hasBeenReset = false;
      var originSet = descriptor.set;

      return accessor({
        get: function get(value) {
          if (hasBeenReset) return value;
          return bind(fn, this)(value);
        },

        set: originSet ? function (value) {
          hasBeenReset = true;
          return value;
        } : undefined
      })(obj, prop, descriptor);
    }
    /**
     * when we set decorator on propery
     * we will get a descriptor with initializer
     * as they will be attach on the instance later
     * so, we need to substitute the initializer function
     */
    if (isInitializerDescriptor(descriptor)) {
      // $FlowFixMe: useless disjoint union
      var initializer = descriptor.initializer;

      var handler = function handler() {
        return bind(fn, this)(bind(initializer, this)());
      };
      return {
        initializer: handler,
        configurable: descriptor.configurable,
        // $FlowFixMe: useless disjoint union
        writable: descriptor.writable,
        enumerable: descriptor.enumerable
      };
    }
    // $FlowFixMe: useless disjoint union
    var value = bind(fn, this)(descriptor.value);
    return {
      value: value,
      // $FlowFixMe: useless disjoint union
      writable: descriptor.writable,
      configurable: descriptor.configurable,
      enumerable: descriptor.enumerable
    };
  };
}

var getOwnPropertyDescriptor$1$1 = _Object$getOwnPropertyDescriptor;
var defineProperty$6 = _Object$defineProperty;

function setAlias(root, prop, _ref, obj, key, _ref2) {
  var configurable = _ref.configurable,
      enumerable = _ref.enumerable;
  var force = _ref2.force,
      omit = _ref2.omit;

  var originDesc = getOwnPropertyDescriptor$1$1(obj, key);
  if (originDesc !== undefined) {
    if (omit) return;
    // TODO: we should add an github link here
    if (!force) throw new Error('"' + prop + '" is an existing property, if you want to override it, please set "force" true in @alias option.');
    if (!originDesc.configurable) {
      throw new Error('property "' + prop + '" is unconfigurable.');
    }
  }
  defineProperty$6(obj, key, {
    get: function get() {
      return root[prop];
    },
    set: function set(value) {
      root[prop] = value;
      return prop;
    },

    configurable: configurable,
    enumerable: enumerable
  });
}
function alias(other, key, option) {
  // set argument into right position
  if (arguments.length === 2) {
    if (isString(other)) {
      // $FlowFixMe: i will check this later
      option = key;
      key = other;
      other = undefined;
    }
  } else if (arguments.length === 1) {
    // $FlowFixMe: i will check this later
    key = other;
    other = undefined;
  }
  // argument validate
  if (!isString(key)) throw new TypeError('@alias need a string as a key to find the porperty to set alias on');
  var illegalObjErrorMsg = 'If you want to use @alias to set alias on other instance, you must pass in a legal instance';
  if (other !== undefined && isPrimitive(other)) throw new TypeError(illegalObjErrorMsg);

  var _ref3 = isObject$1(option) ? option : { force: false, omit: false },
      force = _ref3.force,
      omit = _ref3.omit;

  return function (obj, prop, descriptor) {
    descriptor = descriptor || {
      value: undefined,
      configurable: true,
      writable: true,
      enumerable: true
    };
    function getTargetAndName(other, obj, key) {
      var target = isPrimitive(other) ? obj : other;
      var keys = key.split('.');

      var _keys$slice = keys.slice(-1),
          _keys$slice2 = _slicedToArray(_keys$slice, 1),
          name = _keys$slice2[0];

      target = getDeepProperty(target, keys.slice(0, -1), { throwError: true });
      if (isPrimitive(target)) {
        throw new TypeError(illegalObjErrorMsg);
      }
      return {
        target: target,
        name: name
      };
    }
    if (isInitializerDescriptor(descriptor)) {
      return initialize(function (value) {
        var _getTargetAndName = getTargetAndName(other, this, key),
            target = _getTargetAndName.target,
            name = _getTargetAndName.name;

        setAlias(this, prop, descriptor, target, name, { force: force, omit: omit });
        return value;
      })(obj, prop, descriptor);
    }
    if (isAccessorDescriptor(descriptor)) {
      var inited = void 0;
      var handler = function handler(value) {
        if (inited) return value;

        var _getTargetAndName2 = getTargetAndName(other, this, key),
            target = _getTargetAndName2.target,
            name = _getTargetAndName2.name;

        setAlias(this, prop, descriptor, target, name, { force: force, omit: omit });
        inited = true;
        return value;
      };
      return accessor({ get: handler, set: handler })(obj, prop, descriptor);
    }

    var _getTargetAndName3 = getTargetAndName(other, obj, key),
        target = _getTargetAndName3.target,
        name = _getTargetAndName3.name;

    setAlias(obj, prop, descriptor, target, name, { force: force, omit: omit });
    return descriptor;
  };
}

var defineProperty$1$1 = _Object$defineProperty;

function classify(decorator) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      requirement = _ref.requirement,
      _ref$customArgs = _ref.customArgs,
      customArgs = _ref$customArgs === undefined ? false : _ref$customArgs;

  return function () {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref2$exclude = _ref2.exclude,
        exclude = _ref2$exclude === undefined ? [] : _ref2$exclude,
        _ref2$include = _ref2.include,
        include = _ref2$include === undefined ? [] : _ref2$include,
        _ref2$construct = _ref2.construct,
        construct = _ref2$construct === undefined ? false : _ref2$construct,
        _ref2$self = _ref2.self,
        self = _ref2$self === undefined ? false : _ref2$self;

    if (!isArray$1(exclude)) throw new TypeError('options.exclude must be an array');
    if (!isArray$1(include)) throw new TypeError('options.include must be an array');
    return function (Klass) {
      var isClass = isFunction(Klass);
      if (!self && !isClass) throw new TypeError('@' + decorator.name + 'Class can only be used on class');
      if (self && isPrimitive(Klass)) throw new TypeError('@' + decorator.name + 'Class must be used on non-primitive type value in \'self\' mode');
      var prototype = self ? Klass : Klass.prototype;
      if (isVoid(prototype)) throw new Error('The prototype of the ' + Klass.name + ' is empty, please check it');
      var descs = getOwnPropertyDescriptors$3(prototype);
      getOwnKeys(prototype).concat(include).forEach(function (key) {
        var desc = descs[key];
        if (key === 'constructor' && !construct || self && isClass && ['name', 'length', 'prototype'].indexOf(key) > -1 || exclude.indexOf(key) > -1 || isFunction(requirement) && requirement(prototype, key, desc, { self: self }) === false) return;
        defineProperty$1$1(prototype, key, (customArgs ? decorator.apply(undefined, _toConsumableArray(args)) : decorator)(prototype, key, desc));
      });
    };
  };
}

var autobindClass = classify(autobind, {
  requirement: function requirement(obj, prop, desc) {
    // $FlowFixMe: it's data descriptor now
    return isDataDescriptor(desc) && isFunction(desc.value);
  }
});

var mapStore = void 0;
// save bound function for super
function getBoundSuper(obj, fn) {
  if (typeof _WeakMap === 'undefined') {
    throw new Error('Using @autobind on ' + fn.name + '() requires WeakMap support due to its use of super.' + fn.name + '()');
  }

  if (!mapStore) {
    mapStore = new _WeakMap();
  }

  if (mapStore.has(obj) === false) {
    mapStore.set(obj, new _WeakMap());
  }

  var superStore = mapStore.get(obj);
  // $FlowFixMe: already insure superStore is not undefined
  if (superStore.has(fn) === false) {
    // $FlowFixMe: already insure superStore is not undefined
    superStore.set(fn, bind(fn, obj));
  }
  // $FlowFixMe: already insure superStore is not undefined
  return superStore.get(fn);
}
/**
 * auto bind the function on the class, just support function
 * @param {Object} obj Target Object
 * @param {string} prop prop strong
 * @param {Object} descriptor
 */
function autobind(obj, prop, descriptor) {
  if (arguments.length === 1) return autobindClass()(obj);

  var _ref = descriptor || {},
      fn = _ref.value,
      configurable = _ref.configurable;

  if (!isFunction(fn)) {
    throw new TypeError('@autobind can only be used on functions, not "' + fn + '" in ' + (typeof fn === 'undefined' ? 'undefined' : _typeof(fn)) + ' on property "' + prop + '"');
  }
  var constructor = obj.constructor;

  return {
    configurable: configurable,
    enumerable: false,
    get: function get() {
      var _this = this;

      var boundFn = function boundFn() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return fn.call.apply(fn, [_this].concat(_toConsumableArray(args)));
      };
      // Someone accesses the property directly on the prototype on which it is
      // actually defined on, i.e. Class.prototype.hasOwnProperty(key)
      if (this === obj) {
        return fn;
      }
      // Someone accesses the property directly on a prototype,
      // but it was found up the chain, not defined directly on it
      // i.e. Class.prototype.hasOwnProperty(key) == false && key in Class.prototype
      if (this.constructor !== constructor && _Object$getPrototypeOf(this).constructor === constructor) {
        return fn;
      }

      // Autobound method calling super.sameMethod() which is also autobound and so on.
      if (this.constructor !== constructor && prop in this.constructor.prototype) {
        return getBoundSuper(this, fn);
      }
      _Object$defineProperty(this, prop, {
        configurable: true,
        writable: true,
        // NOT enumerable when it's a bound method
        enumerable: false,
        value: boundFn
      });

      return boundFn;
    },

    set: createDefaultSetter(prop)
  };
}

var getOwnPropertyDescriptor$2$1 = _Object$getOwnPropertyDescriptor;
var defineProperty$3$1 = _Object$defineProperty;

function waituntil(key) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      other = _ref.other;

  if (!isFunction(key) && !isPromise(key) && !isString(key)) throw new TypeError('@waitUntil only accept Function, Promise or String');
  return function (obj, prop, descriptor) {
    var _ref2 = descriptor || {},
        _value = _ref2.value,
        configurable = _ref2.configurable;

    if (!isFunction(_value)) throw new TypeError('@waituntil can only be used on function, but not ' + _value + ' on property "' + prop + '"');
    var binded = false;
    var waitingQueue = [];
    var canIRun = isPromise(key) ? function () {
      return key;
    } : isFunction(key) ? key : function () {
      // $FlowFixMe: We have use isPromise to exclude
      var keys = key.split('.');
      var prop = keys.slice(-1);
      var originTarget = isPrimitive(other) ? this : other;
      if (!binded) {
        var target = getDeepProperty(originTarget, keys.slice(0, -1));
        if (isVoid(target)) return target;
        var _descriptor = getOwnPropertyDescriptor$2$1(target, prop);
        /**
         * create a setter hook here
         * when it get ture, it will run all function in waiting queue immediately
         */
        var set = function set(value) {
          if (value === true) {
            while (waitingQueue.length > 0) {
              waitingQueue[0]();
              waitingQueue.shift();
            }
          }
          return value;
        };
        var desc = isDescriptor(_descriptor) ? accessor({ set: set })(target, prop, _descriptor) : accessor({ set: set })(target, prop, {
          value: undefined,
          configurable: true,
          enumerable: true,
          writable: true
        });
        defineProperty$3$1(target, prop, desc);
        binded = true;
      }
      return getDeepProperty(originTarget, keys);
    };
    return {
      value: function value() {
        var _this = this;

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        var boundFn = bind(_value, this);
        var runnable = bind(canIRun, this).apply(undefined, args);
        if (isPromise(runnable)) {
          return _Promise.resolve(runnable).then(function () {
            return bind(_value, _this).apply(undefined, args);
          });
        } else if (runnable === true) {
          return bind(_value, this).apply(undefined, args);
        } else {
          return new _Promise(function (resolve) {
            var cb = function cb() {
              boundFn.apply(undefined, args);
              resolve();
            };
            waitingQueue.push(cb);
          });
        }
      },

      // function should not be enmuerable
      enumerable: false,
      configurable: configurable,
      // as we have delay this function
      // it's not a good idea to change it
      writable: false
    };
  };
}

function runnable(key) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      other = _ref.other,
      backup = _ref.backup;

  if (!isFunction(key) && !isString(key)) throw new TypeError('@runnable only accept Function or String');
  return function (obj, prop, descriptor) {
    var _ref2 = descriptor || {},
        _value = _ref2.value,
        configurable = _ref2.configurable;

    if (!isFunction(_value)) throw new TypeError('@runnable can only be used on method, but not ' + _value + ' on property "' + prop + '".');
    var canIRun = isFunction(key) ? key : function () {
      var keys = key.split('.');
      var originTarget = isPrimitive(other) ? this : other;
      return getDeepProperty(originTarget, keys);
    };
    backup = isFunction(backup) ? backup : function () {};
    return {
      value: function value() {
        if (bind(canIRun, this).apply(undefined, arguments) === true) {
          return bind(_value, this).apply(undefined, arguments);
        } else {
          // $FlowFixMe: I have reassign it when it's not a function
          return bind(backup, this).apply(undefined, arguments);
        }
      },

      // function should not be enmuerable
      enumerable: false,
      configurable: configurable,
      // as we have delay this function
      // it's not a good idea to change it
      writable: false
    };
  };
}

var before$1 = classify(before, {
  requirement: function requirement(obj, prop, desc) {
    // $FlowFixMe: it's data descriptor now
    return isDataDescriptor(desc) && isFunction(desc.value);
  },

  customArgs: true
});

var after$1 = classify(after, {
  requirement: function requirement(obj, prop, desc) {
    // $FlowFixMe: it's data descriptor now
    return isDataDescriptor(desc) && isFunction(desc.value);
  },

  customArgs: true
});

var runnable$1 = classify(runnable, {
  requirement: function requirement(obj, prop, desc) {
    // $FlowFixMe: it's data descriptor now
    return isDataDescriptor(desc) && isFunction(desc.value);
  },

  customArgs: true
});

var waituntil$1 = classify(waituntil, {
  requirement: function requirement(obj, prop, desc) {
    // $FlowFixMe: it's data descriptor now
    return isDataDescriptor(desc) && isFunction(desc.value);
  },

  customArgs: true
});

var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2;

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}
var fullscreenEnabled = native('fullscreenEnabled');
var useStyleFirst = false;

var ESFullScreen = (_dec = autobindClass(), _dec2 = alias('requestFullscreen'), _dec3 = alias('exitFullscreen'), _dec4 = alias('addEventListener'), _dec5 = alias('removeEventListener'), _dec(_class = (_class2 = function () {
  function ESFullScreen() {
    classCallCheck(this, ESFullScreen);
    this._fullscreenElement = null;
    this.isNativelySupport = defined$1(native('fullscreenElement')) && (!defined$1(fullscreenEnabled) || fullscreenEnabled === true);
    this._openKey = supportDocument ? native(document.body || document.documentElement, 'requestFullscreen', { keyOnly: true }) : '';
    this._exitKey = native('exitFullscreen', { keyOnly: true });
    this._useStyleFirst = false;
    this.hasUsedStyle = false;
  }

  createClass(ESFullScreen, [{
    key: 'open',
    value: function open(element) {
      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref$force = _ref.force,
          force = _ref$force === undefined ? false : _ref$force;
      var originElement = this.fullscreenElement;
      if (originElement && originElement !== element) {
        if (!force) {
          dispatchEvent(document, 'fullscreenerror');
          return false;
        }
        this.exit();
      }

      if (!this.useStyleFirst) {
        if (this.isNativelySupport) {
          // $FlowFixMe: support computed key on HTMLElment here
          isFunction(element[this._openKey]) && element[this._openKey]();
          return true;
        }

        // add wekitEnterFullscreen support as required in https://github.com/toxic-johann/es-fullscreen/issues/4
        /* istanbul ignore if  */
        if (element instanceof HTMLVideoElement && element.webkitSupportsFullscreen &&
        // $FlowFixMe: support webkitEnterFullscreen on some werid safari
        isFunction(element.webkitEnterFullscreen)) {
          element.webkitEnterFullscreen();
          this._fullscreenElement = element;
          return true;
        }
      }

      this._savedStyles = Object.keys(DESKTOP_FULLSCREEN_STYLE).reduce(function (styles, key) {
        // $FlowFixMe: support string here
        styles[key] = element.style[key];
        return styles;
      }, {});
      setStyle(element, DESKTOP_FULLSCREEN_STYLE);

      /* istanbul ignore else  */
      if (document.body) {
        this._bodyOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
      }
      /* istanbul ignore else  */
      if (document.documentElement) {
        this._htmlOverflow = document.documentElement.style.overflow;
        document.documentElement.style.overflow = 'hidden';
      }
      this._fullscreenElement = element;
      this.hasUsedStyle = true;
      dispatchEvent(element, 'fullscreenchange');
      return true;
    }
  }, {
    key: 'exit',
    value: function exit() {
      if (!this.isFullscreen) return false;
      if (this.isNativelySupport && !this.useStyleFirst && !this.hasUsedStyle) {
        // $FlowFixMe: support document computed key here
        document[this._exitKey]();
        return true;
      }
      // $FlowFixMe: element is an Elment here
      var element = this._fullscreenElement;
      setStyle(element, this._savedStyles);
      /* istanbul ignore else  */
      if (document.body) document.body.style.overflow = this._bodyOverflow;
      /* istanbul ignore else  */
      if (document.documentElement) document.documentElement.style.overflow = this._htmlOverflow;

      this._fullscreenElement = null;
      this._savedStyles = {};
      dispatchEvent(element, 'fullscreenchange');
      return true;
    }
  }, {
    key: 'on',
    value: function on(name, fn) {
      var element = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : document;

      this._handleEvent(element, 'addEventListener', name, fn);
    }
  }, {
    key: 'off',
    value: function off(name, fn) {
      var element = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : document;

      this._handleEvent(element, 'removeEventListener', name, fn);
    }
  }, {
    key: '_handleEvent',
    value: function _handleEvent(element, behavior, name, fn) {
      var names = name === 'fullscreenchange' ? FULLSCREEN_CHANGE : name === 'fullscreenerror' ? FULLSCREEN_ERROR : [name];
      names.forEach(function (name) {
        // $FlowFixMe: support computed attribute here
        element[behavior](name, fn);
      });
    }
  }, {
    key: 'useStyleFirst',
    get: function get$$1() {
      return useStyleFirst;
    },
    set: function set$$1(value) {
      value = !!value;
      if (value === useStyleFirst) return value;
      useStyleFirst = value;
      dispatchEvent(document, 'esfullscreenmethodchange');
      return value;
    }
  }, {
    key: 'fullscreenElement',
    get: function get$$1() {
      var element = ['fullscreenElement', 'webkitFullscreenElement', 'mozFullScreenElement', 'msFullscreenElement'].reduce(function (element, key) {
        // $FlowFixMe: support computed element on document
        return element || document[key];
      }, null);
      return element || this._fullscreenElement;
    }
  }, {
    key: 'isFullscreen',
    get: function get$$1() {
      return isElement(this.fullscreenElement);
    }
  }]);
  return ESFullScreen;
}(), _applyDecoratedDescriptor(_class2.prototype, 'open', [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, 'open'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'exit', [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, 'exit'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'on', [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, 'on'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'off', [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, 'off'), _class2.prototype), _class2)) || _class);

var index = new ESFullScreen();

return index;

})));


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    width: '100%',
    height: '100%',
    position: 'relative',
    display: 'block'
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; // @flow


var _mangoHelper = __webpack_require__(0);

// base css controller for container and wrapper
var Vessel = /** @class */function () {
    function Vessel(dispatcher, target, config) {
        var _this = this;
        this.__dispatcher = dispatcher;
        this.__target = target;
        ['width', 'height', 'position', 'display'].forEach(function (key) {
            Object.defineProperty(_this, key, {
                get: function get() {
                    return this.__dispatcher.dom.getStyle(this.__target, key);
                },
                set: function set(value) {
                    if ((0, _mangoHelper.isNumber)(value)) {
                        value = value + 'px';
                    }
                    if (!(0, _mangoHelper.isString)(value)) {
                        throw new Error("The value of " + key + " in " + this.__target + "Config must be string, but not " + (typeof value === 'undefined' ? 'undefined' : _typeof(value)) + ".");
                    }
                    this.__dispatcher.dom.setStyle(this.__target, key, value);
                    // return value;
                },
                configurable: true,
                enumerable: true
            });
        });
        (0, _mangoHelper.deepAssign)(this, config);
    }
    return Vessel;
}();
exports.default = Vessel;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _mangoHelper = __webpack_require__(0);

var _toxicDecorators = __webpack_require__(1);

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// @flow

var GlobalConfig = /** @class */function () {
    function GlobalConfig() {
        this.log = {
            error: true,
            info: true,
            warn: true,
            debug: true,
            verbose: true
        };
        this._silent = false;
        this.errorHandler = undefined;
        var props = Object.keys(this.log).reduce(function (props, key) {
            props[key] = (0, _toxicDecorators.accessor)({
                get: function get() {
                    // $FlowFixMe: we have check the keys
                    return _mangoHelper.Log['ENABLE_' + key.toUpperCase()];
                },
                set: function set(val) {
                    // $FlowFixMe: we have check the keys
                    _mangoHelper.Log['ENABLE_' + key.toUpperCase()] = val;
                    if (val === true) this.silent = false;
                    return val;
                }
            });
            return props;
        }, {});
        (0, _toxicDecorators.applyDecorators)(this.log, props, { self: true });
    }
    Object.defineProperty(GlobalConfig.prototype, "silent", {
        get: function get() {
            return this._silent;
        },
        set: function set(val) {
            var _this = this;
            val = !!val;
            this._silent = val;
            Object.keys(this.log).forEach(function (key) {
                _this.log[key] = !val;
            });
        },
        enumerable: true,
        configurable: true
    });
    __decorate([_toxicDecorators.nonenumerable], GlobalConfig.prototype, "_silent", void 0);
    return GlobalConfig;
}();
exports.default = GlobalConfig;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(26);
module.exports = __webpack_require__(5).global;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-global
var $export = __webpack_require__(27);

$export($export.G, { global: __webpack_require__(4) });


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(4);
var core = __webpack_require__(5);
var hide = __webpack_require__(12);
var redefine = __webpack_require__(34);
var ctx = __webpack_require__(37);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(29);
var IE8_DOM_DEFINE = __webpack_require__(30);
var toPrimitive = __webpack_require__(32);
var dP = Object.defineProperty;

exports.f = __webpack_require__(7) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(6);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(7) && !__webpack_require__(13)(function () {
  return Object.defineProperty(__webpack_require__(31)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(6);
var document = __webpack_require__(4).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(6);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(4);
var hide = __webpack_require__(12);
var has = __webpack_require__(35);
var SRC = __webpack_require__(36)('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(5).inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),
/* 35 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 36 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(38);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ })
/******/ ])["default"];
});