import {
  CityBuildingLayer,
  HeatmapLayer,
  ILayer,
  ImageLayer,
  LineLayer,
  PointLayer,
  PolygonLayer,
  RasterLayer,
} from '@antv/l7';
import * as React from 'react';
import { LayerContext } from '../LayerContext';
import { useSceneValue } from '../SceneContext';
import {
  Active,
  Animate,
  Color,
  Filter,
  ILayerProps,
  Scale,
  Select,
  Shape,
  Size,
  Source,
  Style,
} from './';

const { useEffect, useState } = React;

export default function BaseLayer(type: string, props: ILayerProps) {
  const {
    source,
    color,
    shape,
    style,
    size,
    scale,
    active,
    select,
    filter,
    animate,
    options,
    onLayerLoaded,
  } = props;
  const mapScene = useSceneValue();
  const [layer] = useState<ILayer>(() => {
    let l: ILayer;
    switch (type) {
      case 'polygonLayer':
        l = new PolygonLayer(options);
        break;
      case 'lineLayer':
        l = new LineLayer(options);
        break;
      case 'pointLayer':
        l = new PointLayer(options);
        break;
      case 'heatmapLayer':
        l = new HeatmapLayer(options);
        break;
      case 'rasterLayer':
        l = new RasterLayer(options);
        break;
      case 'imageLayer':
        l = new ImageLayer(options);
        break;
      case 'citybuildingLayer':
        l = new CityBuildingLayer(options);
        break;
      default:
        l = new PolygonLayer(options);
    }
    l.on('inited', () => {
      if (onLayerLoaded) {
        onLayerLoaded(l, mapScene);
      }
    });

    return l;
  });

  useEffect(() => {
    mapScene.addLayer(layer);
    return () => {
      mapScene.removeLayer(layer);
    };
  }, []);

  useEffect(() => {
    if (layer.inited && options) {
      layer.updateLayerConfig(options);
    }
  }, [options?.minZoom, options?.maxZoom, options?.visible]);

  useEffect(() => {
    if (layer.inited && options?.zIndex) {
      layer.setIndex(options.zIndex);
    }
  }, [options?.zIndex]);

  useEffect(() => {
    if (layer.inited && options?.blend) {
      layer.setBlend(options.blend);
    }
  }, [options?.blend]);

  useEffect(() => {
    // 重绘layer
    mapScene.render();
  });

  return (
    <LayerContext.Provider value={layer}>
      <Source layer={layer} source={source} />
      {scale && <Scale layer={layer} scale={scale} />}
      {color && <Color layer={layer} color={color} />}
      {size && <Size layer={layer} size={size} />}
      {shape && <Shape layer={layer} shape={shape} />}
      {style && <Style layer={layer} style={style} />}
      {active && <Active layer={layer} active={active} />}
      {select && <Select layer={layer} select={select} />}
      {filter && <Filter layer={layer} filter={filter} />}
      {animate && <Animate layer={layer} animate={animate} />}
      {/* LayerContext主要传入LayerEvent组件 */}
      {props.children}
    </LayerContext.Provider>
  );
}
