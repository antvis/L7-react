import { ILayer } from '@antv/l7';
import * as React from 'react';
import { ISourceOptions } from './';
import isEqual from 'lodash/isEqual';

interface ISourceProps {
  layer: ILayer;
  source: Partial<ISourceOptions>;
}
export default React.memo(function Chart(props: ISourceProps) {
  const { layer, source } = props;
  const { data, ...sourceOption } = source;
  if (!layer.inited) {
    layer.source(data, sourceOption);
  } else {
    layer.setData(data, sourceOption);
  }
  if (sourceOption.autoFit) {
    layer.fitBounds(sourceOption && sourceOption.fitBoundsOptions);
  }

  return null;
}, isEqual);
