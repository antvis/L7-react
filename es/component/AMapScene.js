function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function(sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function(key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function(key) {
        Object.defineProperty(
          target,
          key,
          Object.getOwnPropertyDescriptor(source, key),
        );
      });
    }
  }
  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }
  return obj;
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

import { Scene } from '@antv/l7'; // @ts-ignore
// tslint:disable-next-line:no-submodule-imports

import { GaodeMap } from '@antv/l7-maps';
import React, { createElement, createRef, useEffect, useState } from 'react';
import { SceneContext } from './SceneContext';
var AMapScene = React.memo(function(props) {
  var style = props.style,
    className = props.className,
    map = props.map,
    option = props.option,
    onSceneLoaded = props.onSceneLoaded;
  var container = createRef();

  var _useState = useState(),
    _useState2 = _slicedToArray(_useState, 2),
    scene = _useState2[0],
    setScene = _useState2[1];

  useEffect(function() {
    var sceneInstance = new Scene(
      _objectSpread(
        _objectSpread(
          {
            id: container.current,
          },
          option,
        ),
        {},
        {
          map: new GaodeMap(map),
        },
      ),
    );
    sceneInstance.on('loaded', function() {
      setScene(sceneInstance);

      if (onSceneLoaded) {
        onSceneLoaded(sceneInstance);
      }
    });
    return function() {
      sceneInstance.destroy();
    };
  }, []); // 更新地图样式

  useEffect(
    function() {
      if (scene && map.style) {
        scene.setMapStyle(map.style);
      }
    },
    [JSON.stringify(map.style)],
  );
  useEffect(
    function() {
      if (scene && map.zoom) {
        scene.setZoom(map.zoom);
      }
    },
    [map.zoom],
  );
  useEffect(
    function() {
      if (scene && map.center) {
        scene.setCenter(map.center);
      }
    },
    [JSON.stringify(map.center)],
  );
  useEffect(
    function() {
      if (scene && map.pitch) {
        scene.setPitch(map.pitch);
      }
    },
    [map.pitch],
  );
  useEffect(
    function() {
      if (scene && map.rotation) {
        scene.setRotation(map.rotation);
      }
    },
    [map.rotation],
  );
  return React.createElement(
    SceneContext.Provider,
    {
      value: scene,
    },
    createElement(
      'div',
      {
        ref: container,
        style: style,
        className: className,
      },
      scene && props.children,
    ),
  );
});
export default AMapScene;
