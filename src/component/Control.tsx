import { IControl, Logo, PositionName, Scale, Zoom, Layers } from '@antv/l7';
import React, { useRef, useEffect } from 'react';
import { useSceneValue } from './SceneContext';
interface IControlProps {
  type: 'scale' | 'zoom' | 'logo' | 'layer';
  position: PositionName;
  [key: string]: any;
}
export default React.memo(function MapControl(props: IControlProps) {
  const scene = useSceneValue();
  const control = useRef<IControl>();
  const { type, position, ...rest } = props;
  useEffect(() => {
    let ctr: IControl;
    switch (type) {
      case 'scale':
        ctr = new Scale({
          position: position || 'bottomright',
        });
        break;
      case 'zoom':
        ctr = new Zoom({
          position: position || 'topright',
          ...rest,
        });
        break;
      case 'logo':
        ctr = new Logo({
          position: position || 'bottomleft',
          ...rest,
        });
      case 'layer':
        ctr = new Layers({
          position: position || 'bottomleft',
          ...rest,
        });
    }
    control.current = ctr;
    scene.addControl(ctr);
    return () => {
      control.current = undefined;
      scene.removeControl(ctr);
    };
  }, [type]);

  useEffect(() => {
    control.current &&
      control.current.setPosition((position as any) || 'bottomleft');
  }, [position]);

  return null;
});
