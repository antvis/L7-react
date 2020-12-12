import { IControl, Logo, PositionName, Scale, Zoom } from '@antv/l7';
import React, { useRef, useEffect } from 'react';
import { useSceneValue } from './SceneContext';
interface IControlProps {
  type: 'scale' | 'zoom' | 'logo';
  position: PositionName;
  [key: string]: any;
}
export default React.memo(function MapControl(props: IControlProps) {
  const scene = useSceneValue();
  const control = useRef<IControl>();
  const { type, position } = props;
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
        });
        break;
      case 'logo':
        ctr = new Logo({
          position: position || 'bottomleft',
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
    control.current && control.current.setPosition(position as any);
  }, [position]);

  return null;
});
