import { createContext, useContext } from 'react'; // tslint:disable-next-line: no-object-literal-type-assertion

export var SceneContext = createContext({});
export function useSceneValue() {
  return useContext(SceneContext);
}
