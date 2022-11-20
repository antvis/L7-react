import { IMapConfig, ISceneConfig, Scene } from '@antv/l7';
// @ts-ignore
// tslint:disable-next-line:no-submodule-imports
import { GaodeMapV1 } from '@antv/l7-maps';
import React, { useRef, useEffect, useState } from 'react';
import { SceneContext } from '../SceneContext';
import { IMapSceneConfig } from './interface';

const AMapScene = React.memo((props: IMapSceneConfig) => {
  const { style, className, map, option, onSceneLoaded, children } = props;
  const container = useRef<HTMLDivElement>(null);
  const [scene, setScene] = useState<Scene>();
  useEffect(() => {
    const sceneInstance = new Scene({
      id: container.current!,
      ...option,
      map: new GaodeMapV1(map),
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

export default AMapScene;
