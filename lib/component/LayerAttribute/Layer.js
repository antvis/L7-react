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
exports.default = BaseLayer;

var _l = require('@antv/l7');

var React = _interopRequireWildcard(require('react'));

var _LayerContext = require('../LayerContext');

var _SceneContext = require('../SceneContext');

var _ = require('./');

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

function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) ||
    _iterableToArrayLimit(arr, i) ||
    _unsupportedIterableToArray(arr, i) ||
    _nonIterableRest()
  );
}

function _nonIterableRest() {
  throw new TypeError(
    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
  );
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === 'Object' && o.constructor) n = o.constructor.name;
  if (n === 'Map' || n === 'Set') return Array.from(o);
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }
  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === 'undefined' || !(Symbol.iterator in Object(arr)))
    return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;
  try {
    for (
      var _i = arr[Symbol.iterator](), _s;
      !(_n = (_s = _i.next()).done);
      _n = true
    ) {
      _arr.push(_s.value);
      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i['return'] != null) _i['return']();
    } finally {
      if (_d) throw _e;
    }
  }
  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

var useEffect = React.useEffect,
  useState = React.useState;

function BaseLayer(type, props) {
  var source = props.source,
    color = props.color,
    shape = props.shape,
    style = props.style,
    size = props.size,
    scale = props.scale,
    active = props.active,
    select = props.select,
    filter = props.filter,
    animate = props.animate,
    options = props.options,
    onLayerLoaded = props.onLayerLoaded;
  var mapScene = (0, _SceneContext.useSceneValue)();

  var _useState = useState(),
    _useState2 = _slicedToArray(_useState, 2),
    layer = _useState2[0],
    setLayer = _useState2[1];

  if (!layer) {
    var l;

    switch (type) {
      case 'polygonLayer':
        l = new _l.PolygonLayer(options);
        break;

      case 'lineLayer':
        l = new _l.LineLayer(options);
        break;

      case 'pointLayer':
        l = new _l.PointLayer(options);
        break;

      case 'heatmapLayer':
        l = new _l.HeatmapLayer(options);
        break;

      case 'rasterLayer':
        l = new _l.RasterLayer(options);
        break;

      case 'imageLayer':
        l = new _l.ImageLayer(options);
        break;

      case 'citybuildingLayer':
        l = new _l.CityBuildingLayer(options);
        break;

      default:
        l = new _l.PolygonLayer(options);
    }

    l.on('inited', function() {
      if (onLayerLoaded) {
        onLayerLoaded(l, mapScene);
      }
    });
    setLayer(l);
  }

  useEffect(function() {
    if (layer !== undefined) {
      mapScene.addLayer(layer);
      return function() {
        mapScene.removeLayer(layer);
      };
    }
  }, []);
  useEffect(function() {
    // 重绘layer
    if (layer) {
      mapScene.render();
    }
  });
  useEffect(
    function() {
      if (layer && layer.inited && options) {
        layer.updateLayerConfig(options);
      }
    },
    [
      options === null || options === void 0 ? void 0 : options.minZoom,
      options === null || options === void 0 ? void 0 : options.maxZoom,
      options === null || options === void 0 ? void 0 : options.visible,
    ],
  );
  useEffect(
    function() {
      if (layer && layer.inited && options && options.zIndex) {
        layer.setIndex(options.zIndex);
      }
    },
    [options === null || options === void 0 ? void 0 : options.zIndex],
  );
  useEffect(
    function() {
      if (layer && layer.inited && options && options.blend) {
        layer.setBlend(options.blend);
      }
    },
    [options === null || options === void 0 ? void 0 : options.blend],
  );
  return layer !== null && layer !== undefined
    ? React.createElement(
        _LayerContext.LayerContext.Provider,
        {
          value: layer,
        },
        React.createElement(_.Source, {
          layer: layer,
          source: source,
        }),
        scale &&
          React.createElement(_.Scale, {
            layer: layer,
            scale: scale,
          }),
        color &&
          React.createElement(_.Color, {
            layer: layer,
            color: color,
          }),
        size &&
          React.createElement(_.Size, {
            layer: layer,
            size: size,
          }),
        shape &&
          React.createElement(_.Shape, {
            layer: layer,
            shape: shape,
          }),
        style &&
          React.createElement(_.Style, {
            layer: layer,
            style: style,
          }),
        active &&
          React.createElement(_.Active, {
            layer: layer,
            active: active,
          }),
        select &&
          React.createElement(_.Select, {
            layer: layer,
            select: select,
          }),
        filter &&
          React.createElement(_.Filter, {
            layer: layer,
            filter: filter,
          }),
        animate &&
          React.createElement(_.Animate, {
            layer: layer,
            animate: animate,
          }),
        props.children,
      )
    : null;
}
