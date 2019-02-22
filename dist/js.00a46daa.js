// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"js/test.js":[function(require,module,exports) {
'use strict'; // Комментарий, занимающий одну строку.

/* Блочный комментарий начинается с косой черты и звездочки(*), 
   а заканчивается ими же в обратном порядке 
*/

/*
    * Это многострочный
    * комментарий
*/

/*  
  Нельзя вкладывать \/* комментарии друг в друга SyntaxError *\/ 
*/
// alert("Hello Javascript!");
// window.foo = 'Hello bar!';
// alert(window.foo);
// ============Ключевое слово var====================
// var x = 30;
// console.log("the value of x is", x); // the value of x is 30
// confirm("Well, let's go?");
// prompt("Dude, tell me everything you know about programming", "...");
// console.log("the value of cat is ", cat);
// var cat = 'Red Cat';
// ============Ключевое слово let====================
// let a = 10;
// ==========================================
// console.log("the value of cat is ", cat);
// let cat = 'Red Cat';
//  ReferenceError: can't access lexical declaration
// `cat' before initialization
// ==========================================
// console.log("the value of a is ", a);
// {
//     let a = 3;
//     console.log("the value of a inside block is ", a);
// }
// console.log("the value of a outside block is ", a);
// console.log(1 / 2); /* возвращает 0.5 */
// console.log(1 / 2 == 1.0 / 2.0); /* возвращает true */
// ===============declaring variables=============
// let a = 10;
// let b = 3;
// let c = 15;
// let d = '5';
// let e = 'My name';
// let f = 'Maybe';
// ============Ключевое слово const====================
// const NAME_ARR = [];
// const NAME = 'Maybe';
// NAME_ARR.push('My name');
// NAME_ARR.push(NAME);
// console.log(NAME_ARR[0], ' is ', NAME_ARR[1]);
// ============Группировка сообщений====================
// Вы можете использовать console.group() для создания indented groups в выводе консоли.
// ====================Addition======================
// console.group('Addition');
// console.log(a + b); // 13
// console.log(a + d); // 105
// console.log(e + ' ' + f);
// console.log(e += ' is the Fly Cat');
// console.groupEnd();
// ==============Оформление сообщений===================
// можете использовать спецификатор формата "%c" для стилизации консольных сообщений:

console.log("%cMy stylish message", "color: red; font-style: italic"); // =========Ошибки округления=============
// if ( а + Ь == 0.3 ) { 
//   // не делайте так !
//   alert ( "You got 0.3 . " );
// }

console.log("Никогда %cне делайте так!", "color: red; font-size: 24px; background-color: yellow; padding: 2px;"); // ====================Incrementing======================
// a++;
// b--;
// --b;
// c += a;
// console.group('Incrementing');
// console.log(a); // 11   
// console.log(b); // 1
// console.log(c); // 25
// console.groupEnd();
// ====================Присваивание======================
// var x = 30,
//     y = 3;
// console.log("Присваивание со сложением x += y", x += y);
// console.log("Присваивание с вычитанием x-=y x=x-y", x -= y);
// console.log("Присваивание с умножением x *= y x = x * y", x *= y);
// console.log("Присваивание с делением x /= y x = x / y", x /= y);
// console.log("Присваивание по модулю x %= y x = x % y", x %= y);
// =============declaring strings========================
// var srt1 = 'this is my string',
//     srt2 = 'my second string',
//     srt3 = "my name is chris";
// ===============declaring numbers========================
// let num1 = 10,
//     num2 = 500,
//     num3 = 3.14;
// ===============booleans (truthy / falsy)==================
// let b1 = true,
//     b2 = false;
// ==================objects========================
// const user = {
//     name: 'Chris',
//     username: 'chrisoncode'
// };
// ======================arrays======================
// const users = ['chris', 'nick', 'holly'];
// const luckyNumbers = [1, 43, 54, 132];
// const whatever = ['chris', 1, 'holly'];
// ====================typeof=======================
// console.log(typeof (message));
// console.log(typeof (b1));
// console.log(typeof (num3));
// console.log(typeof (users));
// console.log(typeof (user));
// console.log(typeof (null));
// console.log(typeof (function () {}));
// ======================undefined==================
// var messageUndifined;
// console.log(messageUndifined == undefined);
// =====================null========================
// var car = null; // пull
// alert(typeof car); // "object "
// =================isNaN===============================
// console.log(isNaN(NaN)); // true
// console.log(isNaN(10)); // false
// console.log(isNaN("10")); // false
// console.log(isNaN("Ыuе")); // true
// console.log(isNaN(true)); // false
// ========================convert========================
// Унарный оператор «плюс» работает так же, как функция Number().
// let test = (+"1.1") + (+"1.1"); // 2.2
// parseInt("0xAF", 16); //175
// var num = parseFloat("1234blue");
// var num4 = parseFloat("22.5");
// =======Octal literals are not allowed in strict mode. (W115)=========
// var xb = 01010101,
//     yb = 10101010;
// console.log("Присваивание с побитовым AND x&=y x=x&y", xb &= yb);
// console.log("Присваивание с побитовым XOR x^=y x=x^y", xb ^= yb);
// console.log("Присваивание с побитовым OR x|=y x=x|y", xb | yb);
// var xb = 01010101;
// console.log("Присваивание с левым сдвигом x<<=y xb = xb<<y", xb <<= y);
// console.log("Присваивание с правым сдвигом xb>>=y xb = xb >> y", xb >>= y);
// Line is too long. (W101)
// console.log("Присваивание с беззнаковым сдвигом вправо xb>>>=y xb=xb>>> y", xb >>>= y);
// var message = "Hello world !";
// var messageAsBoolean = Boolean(message);
// ====================boolean operators=======================
// var a1 = true && true; // t && t возвращает true
// var a2 = true && false; // t && f возвращает false
// var a3 = false && true; // f && t возвращает false
// var a4 = false && (3 == 4); // f && f возвращает false
// var a5 = "Cat" && "Dog"; // t && t возвращает Dog
// var a6 = false && "Cat"; // f && t возвращает false
// var a7 = "Cat" && false; // t && f возвращает false
// var o1 = true || true; // t || t возвращает true
// var o2 = false || true; // f || t возвращает true
// var o3 = true || false; // t || f возвращает true
// var o4 = false || (3 == 4); // f || f возвращает false
// var o5 = "Cat" || "Dog"; // t || t возвращает Cat
// var o6 = false || "Cat"; // f || t возвращает Cat
// var o7 = "Cat" || false; // t || f возвращает Cat
// var n1 = !true; // !t возвращает false
// var n2 = !false; // !f возвращает true
// var n3 = !"Cat"; // !t возвращает false
// let anything1 = false && anything // "короткое замыкание" с результатом false.
// let anything2 = true || anything // "короткое замыкание" с результатом true.
},{}],"js/index.js":[function(require,module,exports) {
"use strict";

require("./test");
},{"./test":"js/test.js"}],"../../../.nvm/versions/node/v11.10.0/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "43895" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["../../../.nvm/versions/node/v11.10.0/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/index.js"], null)
//# sourceMappingURL=/js.00a46daa.map