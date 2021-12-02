import { ILayer, IScale, IScaleOptions } from '@antv/l7';
import * as React from 'react';
import { IScaleAttributeOptions } from './';
import isEqual from 'lodash/isEqual';

interface ILayerProps {
  layer: ILayer;
  scale: Partial<IScaleAttributeOptions>;
}
export default React.memo(function Chart(props: ILayerProps) {
  const { layer, scale } = props;
  layer.scale(scale.values as IScaleOptions);
  return null;
}, isEqual);
