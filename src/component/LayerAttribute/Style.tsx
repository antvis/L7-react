import { ILayer } from '@antv/l7';
import * as React from 'react';
import { IStyleOptions } from './';
import { isEqual } from '../util';

const { useEffect } = React;
interface ILayerProps {
  layer: ILayer;
  style: Partial<IStyleOptions>;
}
export default React.memo(function Chart(props: ILayerProps) {
  const { layer, style } = props;

  layer.style(style);

  return null;
}, isEqual);
