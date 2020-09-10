"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColorComponent = void 0;

var React = _interopRequireWildcard(require("react"));

require("./style.css");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var ColorComponent = React.memo(function (props) {
  var className = props.className,
      style = props.style,
      title = props.title;
  var items = [{
    title: '1',
    color: 'rgb(239,243,255)'
  }, {
    title: '10',
    color: 'rgb(198,219,239)'
  }, {
    title: '30',
    color: 'rgb(158,202,225)'
  }, {
    title: '50',
    color: 'rgb(107,174,214)'
  }, {
    title: '60',
    color: 'rgb(49,130,189)'
  }, {
    title: '100',
    color: 'rgb(8,81,156)'
  }];
  return React.createElement("div", null, React.createElement("div", null, items.map(function (c, i) {
    return React.createElement("div", {
      key: i.toString(),
      style: {
        background: c.color,
        height: '100%',
        display: 'inline-block',
        cursor: 'pointer',
        width: '' + (100.0 - items.length) / items.length + '%',
        marginRight: '1%',
        padding: 5
      }
    });
  })), React.createElement("div", null, items.map(function (c, i) {
    return React.createElement("div", {
      key: i.toString() + '122',
      style: {
        background: '#fff',
        height: '100%',
        display: 'inline-block',
        textAlign: 'left',
        cursor: 'pointer',
        width: '' + (100.0 - items.length) / items.length + '%',
        marginRight: '1%'
      }
    }, c.title);
  })));
});
exports.ColorComponent = ColorComponent;