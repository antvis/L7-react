import { IMapWrapper, Scene } from '@antv/l7';
import React, { useRef, useEffect, useState } from 'react';
import { SceneContext } from './SceneContext';
interface IMapSceneConfig {
  style?: Partial<React.CSSProperties>;
  className?: string;
  map: IMapWrapper;
  children?: React.ReactNode;
}
export default React.memo((props: IMapSceneConfig) => {
  const { style, className, map, children } = props;
  const container = useRef<HTMLDivElement>(null);
  const [scene, setScene] = useState<Scene>();
  useEffect(() => {
    const sceneInstance = new Scene({
      id: container.current!,
      map,
    });
    sceneInstance.on('loaded', () => {
      setScene(sceneInstance);
    });
    return () => {
      sceneInstance.destroy();
    };
  }, []);

  return (
    <SceneContext.Provider value={scene}>
      <div ref={container} className={className} style={style}>
        {scene && children}
      </div>
    </SceneContext.Provider>
  );
});
