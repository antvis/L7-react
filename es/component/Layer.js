import * as React from 'react';
import BaseLayer from './LayerAttribute/Layer';
var PolygonLayer = React.memo(function Layer(props) {
  return BaseLayer('polygonLayer', props);
});
var LineLayer = React.memo(function Layer(props) {
  return BaseLayer('lineLayer', props);
});
var PointLayer = React.memo(function Layer(props) {
  return BaseLayer('pointLayer', props);
});
var HeatmapLayer = React.memo(function Layer(props) {
  return BaseLayer('heatmapLayer', props);
});
var RasterLayer = React.memo(function Layer(props) {
  return BaseLayer('rasterLayer', props);
});
var ImageLayer = React.memo(function Layer(props) {
  return BaseLayer('imagelayer', props);
});
var CityBuildingLayer = React.memo(function Layer(props) {
  return BaseLayer('citybuildinglayer', props);
});
export { PolygonLayer, LineLayer, PointLayer, HeatmapLayer, RasterLayer, ImageLayer, CityBuildingLayer };