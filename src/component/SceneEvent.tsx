import * as React from 'react';
import { useSceneValue } from './SceneContext';

const { useEffect } = React;
interface ILayerProps {
  type: string;
  handler: (...args: any[]) => void;
}
const SceneEvent = React.memo((props: ILayerProps) => {
  const { type, handler } = props;
  const mapScene = useSceneValue();

  useEffect(() => {
    mapScene.on(type, handler);
    return () => {
      mapScene.off(type, handler);
    };
  }, [type]);
  return null;
});

export default SceneEvent;
