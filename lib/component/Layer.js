"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CityBuildingLayer = exports.ImageLayer = exports.RasterLayer = exports.HeatmapLayer = exports.PointLayer = exports.LineLayer = exports.PolygonLayer = void 0;

var React = _interopRequireWildcard(require("react"));

var _Layer = _interopRequireDefault(require("./LayerAttribute/Layer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var PolygonLayer = React.memo(function Layer(props) {
  return (0, _Layer.default)('polygonLayer', props);
});
exports.PolygonLayer = PolygonLayer;
var LineLayer = React.memo(function Layer(props) {
  return (0, _Layer.default)('lineLayer', props);
});
exports.LineLayer = LineLayer;
var PointLayer = React.memo(function Layer(props) {
  return (0, _Layer.default)('pointLayer', props);
});
exports.PointLayer = PointLayer;
var HeatmapLayer = React.memo(function Layer(props) {
  return (0, _Layer.default)('heatmapLayer', props);
});
exports.HeatmapLayer = HeatmapLayer;
var RasterLayer = React.memo(function Layer(props) {
  return (0, _Layer.default)('rasterLayer', props);
});
exports.RasterLayer = RasterLayer;
var ImageLayer = React.memo(function Layer(props) {
  return (0, _Layer.default)('imagelayer', props);
});
exports.ImageLayer = ImageLayer;
var CityBuildingLayer = React.memo(function Layer(props) {
  return (0, _Layer.default)('citybuildinglayer', props);
});
exports.CityBuildingLayer = CityBuildingLayer;