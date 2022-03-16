import { IActiveOption, ILayer } from '@antv/l7';
import * as React from 'react';
import { isEqual } from '../util';

interface ILayerProps {
  layer: ILayer;
  select: {
    option: IActiveOption | boolean;
  };
}
export default React.memo(function Chart(props: ILayerProps) {
  const { layer, select } = props;
  layer.select(select.option);

  return null;
}, isEqual);
