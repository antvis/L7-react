import {
  IControl,
  Logo,
  PositionName,
  Scale,
  Zoom,
  LayerSwitch,
  Fullscreen,
  Control,
  MouseLocation,
  MapTheme,
  GeoLocate,
  ExportImage,
} from '@antv/l7';
import React, { useRef, useEffect } from 'react';
import { useSceneValue } from './SceneContext';
export interface IControlProps {
  type:
    | 'scale'
    | 'zoom'
    | 'logo'
    | 'layer'
    | 'layerSwitch'
    | 'mouseLocation'
    | 'mapTheme'
    | 'geoLocate'
    | 'exportImage'
    | 'fullscreen';
  position?: PositionName;
  [key: string]: any;
}

const CONTROL_TYPE_MAP: Record<IControlProps['type'], typeof Control<any>> = {
  exportImage: ExportImage,
  fullscreen: Fullscreen,
  geoLocate: GeoLocate,
  layer: LayerSwitch,
  layerSwitch: LayerSwitch,
  logo: Logo,
  mapTheme: MapTheme,
  mouseLocation: MouseLocation,
  zoom: Zoom,
  scale: Scale
};

export default React.memo(function MapControl(props: IControlProps) {
  const scene = useSceneValue();
  const control = useRef<IControl>();
  const { type, position, ...rest } = props;
  useEffect(() => {
    const Control = CONTROL_TYPE_MAP[type];
    const ctr = new Control({
      position,
      ...rest
    })
    control.current = ctr;
    scene.addControl(ctr);
    return () => {
      control.current = undefined;
      scene.removeControl(ctr);
    };
  }, [type]);

  useEffect(() => {
    if (control.current) {
      // @ts-ignore
      control.current.setPosition((position as any) || 'bottomleft');
    }
  }, [position]);

  return null;
});
