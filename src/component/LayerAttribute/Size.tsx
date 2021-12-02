import { ILayer, StyleAttrField } from '@antv/l7';
import * as React from 'react';
import isEqual from 'lodash/isEqual';
import { IAttributeOptions } from './';
interface ILayerProps {
  layer: ILayer;
  size: Partial<IAttributeOptions>;
}
export default React.memo(function Chart(props: ILayerProps) {
  const { layer, size } = props;
  size.field
    ? layer.size(size.field, size.values)
    : layer.size(size.values as StyleAttrField);
  return null;
}, isEqual);
