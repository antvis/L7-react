import * as React from 'react';
import { ILayerProps } from './LayerAttribute';
import BaseLayer from './LayerAttribute/Layer';

const PolygonLayer = React.memo(function Layer(props: ILayerProps) {
  return BaseLayer('polygonLayer', props);
});

const LineLayer = React.memo(function Layer(props: ILayerProps) {
  return BaseLayer('lineLayer', props);
});

const PointLayer = React.memo(function Layer(props: ILayerProps) {
  return BaseLayer('pointLayer', props);
});

const HeatmapLayer = React.memo(function Layer(props: ILayerProps) {
  return BaseLayer('heatmapLayer', props);
});

const RasterLayer = React.memo(function Layer(props: ILayerProps) {
  return BaseLayer('rasterLayer', props);
});

const ImageLayer = React.memo(function Layer(props: ILayerProps) {
  return BaseLayer('imageLayer', props);
});

const CityBuildingLayer = React.memo(function Layer(props: ILayerProps) {
  return BaseLayer('citybuildingLayer', props);
});

export {
  PolygonLayer,
  LineLayer,
  PointLayer,
  HeatmapLayer,
  RasterLayer,
  ImageLayer,
  CityBuildingLayer,
};
