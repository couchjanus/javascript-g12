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
})({"../../../.nvm/versions/node/v11.10.0/lib/node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../../../.nvm/versions/node/v11.10.0/lib/node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../../../.nvm/versions/node/v11.10.0/lib/node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"../node_modules/@fortawesome/fontawesome-free/css/all.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./../webfonts/fa-brands-400.eot":[["fa-brands-400.7b5acd02.eot","../node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.eot"],"../node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.eot"],"./../webfonts/fa-brands-400.woff2":[["fa-brands-400.34cc846b.woff2","../node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.woff2"],"../node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.woff2"],"./../webfonts/fa-brands-400.woff":[["fa-brands-400.75159956.woff","../node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.woff"],"../node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.woff"],"./../webfonts/fa-brands-400.ttf":[["fa-brands-400.f885063e.ttf","../node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.ttf"],"../node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.ttf"],"./../webfonts/fa-brands-400.svg":[["fa-brands-400.1f0eb095.svg","../node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.svg"],"../node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.svg"],"./../webfonts/fa-regular-400.eot":[["fa-regular-400.d4b9b17f.eot","../node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.eot"],"../node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.eot"],"./../webfonts/fa-regular-400.woff2":[["fa-regular-400.82c42f2f.woff2","../node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.woff2"],"../node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.woff2"],"./../webfonts/fa-regular-400.woff":[["fa-regular-400.adc5c7aa.woff","../node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.woff"],"../node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.woff"],"./../webfonts/fa-regular-400.ttf":[["fa-regular-400.b073eab5.ttf","../node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.ttf"],"../node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.ttf"],"./../webfonts/fa-regular-400.svg":[["fa-regular-400.16d6ac71.svg","../node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.svg"],"../node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.svg"],"./../webfonts/fa-solid-900.eot":[["fa-solid-900.0b60ff24.eot","../node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.eot"],"../node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.eot"],"./../webfonts/fa-solid-900.woff2":[["fa-solid-900.55d5ef42.woff2","../node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff2"],"../node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff2"],"./../webfonts/fa-solid-900.woff":[["fa-solid-900.f824330b.woff","../node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff"],"../node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff"],"./../webfonts/fa-solid-900.ttf":[["fa-solid-900.47a039f3.ttf","../node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.ttf"],"../node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.ttf"],"./../webfonts/fa-solid-900.svg":[["fa-solid-900.d08d5f59.svg","../node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.svg"],"../node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.svg"],"_css_loader":"../../../.nvm/versions/node/v11.10.0/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"../node_modules/normalize.css/normalize.css":[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":"../../../.nvm/versions/node/v11.10.0/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"sass/main.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"@fortawesome/fontawesome-free/css/all.css":"../node_modules/@fortawesome/fontawesome-free/css/all.css","normalize.css":"../node_modules/normalize.css/normalize.css","./images/overlay.png":[["overlay.b2a30f3f.png","sass/images/overlay.png"],"sass/images/overlay.png"],"./images/cat1.jpg":[["cat1.a18b8267.jpg","sass/images/cat1.jpg"],"sass/images/cat1.jpg"],"./images/cat2.jpg":[["cat2.89a965ca.jpg","sass/images/cat2.jpg"],"sass/images/cat2.jpg"],"./images/cat3.jpg":[["cat3.6ff286f4.jpg","sass/images/cat3.jpg"],"sass/images/cat3.jpg"],"./images/cat4.jpg":[["cat4.ec2ac807.jpg","sass/images/cat4.jpg"],"sass/images/cat4.jpg"],"./images/cat5.jpg":[["cat5.77e2cbd7.jpg","sass/images/cat5.jpg"],"sass/images/cat5.jpg"],"_css_loader":"../../../.nvm/versions/node/v11.10.0/lib/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"js/app.functions.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fadeOut = fadeOut;
exports.fadeIn = fadeIn;
exports.makeProductItem = makeProductItem;
exports.addProductToCart = addProductToCart;

function raf(fn) {
  window.requestAnimationFrame(function () {
    window.requestAnimationFrame(function () {
      fn();
    });
  });
}

function fadeOut(item) {
  var hendler = function hendler() {
    item.style.display = 'none';
    item.classList.remove('fade-active');
    item.removeEventListener('transitionend', hendler);
  };

  item.classList.add('fade-active');
  item.addEventListener('transitionend', hendler);
}

function fadeIn(item) {
  var hendler = function hendler() {
    item.classList.remove('fade-active');
    item.removeEventListener('transitionend', hendler);
  };

  item.style.display = 'block';
  item.classList.add('fade');
  raf(function () {
    item.classList.add('fade-passive');
    item.classList.remove('fade');
  });
  item.addEventListener('transitionend', hendler);
}

function makeProductItem($template, product) {
  $template.querySelector('.product-wrapper').setAttribute('productId', product.id);
  $template.querySelector('.product-name').textContent = product.name;
  $template.querySelector('img').setAttribute('src', "images/" + product.picture);
  $template.querySelector('img').setAttribute('alt', product.name);
  $template.querySelector('.product-price').textContent = '$' + product.price;
  return $template;
}

function addProductToCart(content, item) {
  content.querySelector('.item-name').textContent = item.querySelector(".product-name").textContent;
  content.querySelector('.item-quantity').textContent = item.querySelector(".quantity").value;
  content.querySelector('.item-price').textContent = item.querySelector(".product-price").textContent;
  content.querySelector('.item-img img').setAttribute('src', item.querySelector(".product-picture img").getAttribute('src'));
  return content;
}
},{}],"js/app.js":[function(require,module,exports) {
"use strict"; // app.js
// import {
//     data
// } from './data.js';

var _app = require("./app.functions");

// ---------------------------------------------------------------------------------
(function () {
  document.getElementById("cart-toggle").addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(".aside").classList.toggle("open");
    document.querySelector(".backdrop").classList.toggle("backdrop--open");
  });
  document.querySelector(".toggle-sidebar").addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(".aside").classList.toggle("open");
    document.querySelector(".backdrop").classList.toggle("backdrop--open");
  }); // Контент шаблона

  var $template = document.getElementById("productItem").content; // const url = 'https://api.myjson.com/bins/wzxxy';

  var url = 'https://my-json-server.typicode.com/couchjanus/db/products';
  fetch(url).then(function (response) {
    if (response.status !== 200) {
      console.log('Looks like there was a problem. Status Code: ' + response.status);
      return;
    }

    response.json().then(function (data) {
      data.forEach(function (index) {
        document.querySelector('.main').append((0, _app.makeProductItem)($template, index).cloneNode(true));
      });
      var plus = document.getElementsByClassName('plus');
      plus = Array.prototype.slice.call(plus); // теперь plus - массив

      plus.forEach(function (elem) {
        elem.addEventListener('click', function () {
          var val = parseInt(this.previousElementSibling.getAttribute('value'));
          this.previousElementSibling.setAttribute('value', val + 1);
        });
      });
      var minus = document.getElementsByClassName('minus');
      minus = Array.prototype.slice.call(minus); // теперь minus - массив

      minus.forEach(function (elem) {
        elem.addEventListener('click', function () {
          var val = parseInt(this.nextElementSibling.getAttribute('value'));
          this.nextElementSibling.setAttribute('value', val - 1);
        });
      });
      var byes = Array.from(document.getElementsByClassName('buy-now'));
      byes.forEach(function (buy) {
        buy.addEventListener('click', function (e) {
          (0, _app.fadeOut)(e.target.parentNode.parentNode.querySelector('.product-name'));
          (0, _app.fadeOut)(e.target.parentNode.parentNode.querySelector('.icon'));
          e.target.style.display = 'none';
          e.target.parentNode.querySelector('.product-detail').style.display = 'block';
          e.target.parentNode.style.top = '40%';
        });
      });
      var cancels = Array.from(document.getElementsByClassName('cancel'));
      cancels.forEach(function (cancel) {
        cancel.addEventListener('click', function (e) {
          (0, _app.fadeIn)(e.target.parentNode.parentNode.querySelector('.product-name'));
          (0, _app.fadeIn)(e.target.parentNode.parentNode.querySelector('.icon'));
          e.target.parentNode.querySelector('.buy-now').style.display = 'block';
          e.target.parentNode.querySelector('.product-detail').style.display = 'none';
          e.target.parentNode.style.top = '80%';
        });
      });
      var content = document.getElementById("cartItem").content;
      var carts = Array.from(document.getElementsByClassName('add-to-cart'));
      carts.forEach(function (cart) {
        cart.addEventListener('click', function (e) {
          var element = e.target.parentNode.parentNode;
          document.querySelector('.cart-items').append(document.importNode((0, _app.addProductToCart)(content, element), true)); // Поиск элемента с заданным номером

          var imgToDrag = element.querySelector("img");
          var rectOrigin = imgToDrag.getBoundingClientRect();
          var toLeftStart = rectOrigin.left + 'px';
          var toTopStart = rectOrigin.top + 'px';
          console.log(toLeftStart, toTopStart);

          if (imgToDrag) {
            var imgClone = imgToDrag.cloneNode(true);
            imgClone.style.left = 0;
            imgClone.style.top = 0;
            imgClone.classList.add('offset-img');
            imgClone.style.height = '150px';
            imgClone.style.width = '150px';
            document.body.appendChild(imgClone);
            e.target.parentNode.parentNode.parentNode.parentNode.querySelector('.product-wrapper').style.transform = 'rotateY(180deg)';
            e.target.parentNode.parentNode.parentNode.parentNode.querySelector('.product-back').classList.add('back-is-visible');
            var rect = document.querySelector('#cart-toggle').getBoundingClientRect();
            var toLeft = rect.left - 50 + 'px';
            var toTop = rect.top - 50 + 'px';

            imgClone.animate([{
              transform: 'translate3D(' + toLeftStart + ',' + toTopStart + ', 0)'
            }, {
              transform: 'translate3D(' + toLeft + ',' + toTop + ',0) perspective(500px) scale3d(0.1, 0.1, 0.2)'
            }], {
              duration: 2000
            }).onfinish = function () {
              imgClone.remove();
              e.target.parentNode.parentNode.parentNode.parentNode.querySelector('.product-wrapper').style.transform = 'rotateY(0deg)';
              (0, _app.fadeIn)(e.target.parentNode.parentNode.querySelector('.product-name'));
              (0, _app.fadeIn)(e.target.parentNode.parentNode.querySelector('.icon'));
              e.target.parentNode.querySelector('.buy-now').style.display = 'block';
              e.target.parentNode.querySelector('.product-detail').style.display = 'none';
              e.target.parentNode.style.top = '80%';
            };
          }
        });
      });
      document.querySelector('.cart-items').addEventListener('click', function (e) {
        if (e.target && e.target.matches(".remove-item")) {
          // console.log(e.target.parentNode);
          e.target.parentNode.remove();
        }
      }, false);
    });
  }).catch(function (err) {
    console.log('Fetch Error :-S', err);
  }); // ====================================================================
})();
},{"./app.functions":"js/app.functions.js"}],"js/index.js":[function(require,module,exports) {
'use strict';

require("../sass/main.scss");

require("./app");
},{"../sass/main.scss":"sass/main.scss","./app":"js/app.js"}],"../../../.nvm/versions/node/v11.10.0/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "40945" + '/');

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