import { createContext, useContext } from 'react'; // tslint:disable-next-line: no-object-literal-type-assertion

export var LayerContext = createContext({});
export function useLayerValue() {
  return useContext(LayerContext);
}