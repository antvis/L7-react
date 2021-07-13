import { IMapConfig, ISceneConfig, Scene } from '@antv/l7';
// @ts-ignore
// tslint:disable-next-line:no-submodule-imports
import { Map } from '@antv/l7-maps';
import React, { useRef, useEffect, useState } from 'react';
import { SceneContext } from './SceneContext';
interface IMapSceneConfig {
  style?: React.CSSProperties;
  className?: string;
  map: Partial<IMapConfig>;
  option?: Partial<ISceneConfig>;
  children?: React.ReactNode;
  onSceneLoaded?: (scene: Scene) => void;
}
const MapScene = React.memo((props: IMapSceneConfig) => {
  const { style, className, map, option, onSceneLoaded, children } = props;
  const container = useRef<HTMLDivElement>(null);
  const [scene, setScene] = useState<Scene>();

  // 地图初始
  useEffect(() => {
    const sceneInstance = new Scene({
      id: container.current!,
      ...option,
      map: new Map(map),
    });
    sceneInstance.on('loaded', () => {
      setScene(sceneInstance);
      if (onSceneLoaded) {
        onSceneLoaded(sceneInstance);
      }
    });
    return () => {
      sceneInstance.destroy();
    };
  }, []);

  // 更新地图样式
  useEffect(() => {
    if (scene && map.style) {
      scene.setMapStyle(map.style);
    }
  }, [JSON.stringify(map.style)]);

  useEffect(() => {
    if (scene && map.zoom) {
      scene.setZoom(map.zoom);
    }
  }, [map.zoom]);

  useEffect(() => {
    if (scene && map.center) {
      scene.setCenter(map.center);
    }
  }, [JSON.stringify(map.center)]);
  useEffect(() => {
    if (scene && map.pitch) {
      scene.setPitch(map.pitch);
    }
  }, [map.pitch]);
  useEffect(() => {
    if (scene && map.rotation) {
      scene.setRotation(map.rotation);
    }
  }, [map.rotation]);

  return (
    <SceneContext.Provider value={scene}>
      <div ref={container} className={className} style={style}>
        {scene && children}
      </div>
    </SceneContext.Provider>
  );
});

export default MapScene;
