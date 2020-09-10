'use strict';

function _typeof(obj) {
  '@babel/helpers - typeof';
  if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj &&
        typeof Symbol === 'function' &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? 'symbol'
        : typeof obj;
    };
  }
  return _typeof(obj);
}

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = CustoonConrol;

var _l = require('@antv/l7');

var React = _interopRequireWildcard(require('react'));

var _reactDom = require('react-dom');

var _SceneContext = require('./SceneContext');

function _getRequireWildcardCache() {
  if (typeof WeakMap !== 'function') return null;
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
  if (
    obj === null ||
    (_typeof(obj) !== 'object' && typeof obj !== 'function')
  ) {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor =
    Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor
        ? Object.getOwnPropertyDescriptor(obj, key)
        : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}

var useEffect = React.useEffect,
  useState = React.useState;

function CustoonConrol(props) {
  var className = props.className,
    style = props.style,
    children = props.children,
    position = props.position;
  var mapScene = (0, _SceneContext.useSceneValue)();
  var el = document.createElement('div');
  useEffect(function() {
    var custom = new _l.Control({
      position: position,
    });

    custom.onAdd = function() {
      if (className) {
        el.className = className;
      }

      if (style) {
        var cssText = Object.keys(style)
          .map(function(key) {
            // @ts-ignore
            return ''.concat(key, ':').concat(style[key]);
          })
          .join(';');
        el.style.cssText = cssText;
      }

      return el;
    };

    mapScene.addControl(custom);
    return function() {
      mapScene.removeControl(custom);
    };
  }, []);
  return (0, _reactDom.createPortal)(children, el);
}
