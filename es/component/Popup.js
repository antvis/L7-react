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

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ('value' in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function');
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true },
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === 'object' || typeof call === 'function')) {
    return call;
  }
  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  }
  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === 'undefined' || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === 'function') return true;
  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}

import { Popup } from '@antv/l7';
import * as React from 'react';
import { createPortal } from 'react-dom';
import { SceneContext } from './SceneContext';

var PopupComponet = /*#__PURE__*/ (function(_React$PureComponent) {
  _inherits(PopupComponet, _React$PureComponent);

  var _super = _createSuper(PopupComponet);

  function PopupComponet(props) {
    var _this;

    _classCallCheck(this, PopupComponet);

    _this = _super.call(this, props);
    _this.el = document.createElement('div');
    return _this;
  }

  _createClass(PopupComponet, [
    {
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this$props = this.props,
          lnglat = _this$props.lnglat,
          children = _this$props.children,
          option = _this$props.option;
        var p = new Popup(
          _objectSpread(
            _objectSpread({}, option),
            {},
            {
              stopPropagation: false,
            },
          ),
        );

        if (lnglat) {
          p.setLnglat(lnglat);
        }

        if (children) {
          p.setDOMContent(this.el);
        }

        this.popup = p;
        this.scene.addPopup(p);
      },
    },
    {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        var _prevProps$lnglat,
          _prevProps$lnglat2,
          _this$props2,
          _this$props2$lnglat,
          _this$props3,
          _this$props3$lnglat;

        // @ts-ignore
        var preLnglat = Array.isArray(prevProps.lnglat)
          ? prevProps.lnglat
          : [
              prevProps === null || prevProps === void 0
                ? void 0
                : (_prevProps$lnglat = prevProps.lnglat) === null ||
                  _prevProps$lnglat === void 0
                ? void 0
                : _prevProps$lnglat.lng,
              prevProps === null || prevProps === void 0
                ? void 0
                : (_prevProps$lnglat2 = prevProps.lnglat) === null ||
                  _prevProps$lnglat2 === void 0
                ? void 0
                : _prevProps$lnglat2.lat,
            ];
        var nowLnglat = Array.isArray(this.props.lnglat)
          ? this.props.lnglat
          : [
              (_this$props2 = this.props) === null || _this$props2 === void 0
                ? void 0
                : (_this$props2$lnglat = _this$props2.lnglat) === null ||
                  _this$props2$lnglat === void 0
                ? void 0
                : _this$props2$lnglat.lng,
              (_this$props3 = this.props) === null || _this$props3 === void 0
                ? void 0
                : (_this$props3$lnglat = _this$props3.lnglat) === null ||
                  _this$props3$lnglat === void 0
                ? void 0
                : _this$props3$lnglat.lat,
            ];
        var positionChanged = preLnglat.toString() !== nowLnglat.toString();

        if (positionChanged) {
          this.popup.remove();
          this.popup = new Popup(
            _objectSpread(
              _objectSpread({}, this.props.option),
              {},
              {
                stopPropagation: false,
              },
            ),
          );
          this.popup.setLnglat(this.props.lnglat);
          this.popup.setDOMContent(this.el);
          this.scene.addPopup(this.popup);
        }
      },
    },
    {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.popup.remove();
      },
    },
    {
      key: 'render',
      value: function render() {
        var _this2 = this;

        return React.createElement(
          SceneContext.Consumer, // @ts-ignore
          {},
          function(scene) {
            if (scene) {
              _this2.scene = scene;
            }

            return createPortal(_this2.props.children, _this2.el);
          },
        );
      },
    },
  ]);

  return PopupComponet;
})(React.PureComponent);

export { PopupComponet as default };
