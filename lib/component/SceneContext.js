"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useSceneValue = useSceneValue;
exports.SceneContext = void 0;

var _react = require("react");

// tslint:disable-next-line: no-object-literal-type-assertion
var SceneContext = (0, _react.createContext)({});
exports.SceneContext = SceneContext;

function useSceneValue() {
  return (0, _react.useContext)(SceneContext);
}