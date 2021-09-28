import { IMapConfig, ISceneConfig, Scene } from '@antv/l7';
export interface IMapSceneConfig {
  style?: React.CSSProperties;
  className?: string;
  map: Partial<IMapConfig>;
  option?: Partial<ISceneConfig>;
  children?: React.ReactNode;
  onSceneLoaded?: (scene: Scene) => void;
}
