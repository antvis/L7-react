import { IActiveOption, ILayer } from '@antv/l7';
import * as React from 'react';
import { isEqual } from 'lodash';
const { useEffect } = React;
interface ILayerProps {
  layer: ILayer;
  active: {
    option: IActiveOption | boolean;
  };
}
export default React.memo(function Chart(props: ILayerProps) {
  const { layer, active } = props;
  layer.active(active.option);

  return null;
}, isEqual);
