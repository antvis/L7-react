import { IAnimateOption, ILayer } from '@antv/l7';
import * as React from 'react';
import { isEqual } from '../util';
interface ILayerProps {
  layer: ILayer;
  animate: Partial<IAnimateOption>;
}
export default React.memo(function Chart(props: ILayerProps) {
  const { layer, animate } = props;

  layer.animate(animate);
  return null;
}, isEqual);
