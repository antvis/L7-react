"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useLayerValue = useLayerValue;
exports.LayerContext = void 0;

var _react = require("react");

// tslint:disable-next-line: no-object-literal-type-assertion
var LayerContext = (0, _react.createContext)({});
exports.LayerContext = LayerContext;

function useLayerValue() {
  return (0, _react.useContext)(LayerContext);
}