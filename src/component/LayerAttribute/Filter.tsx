import { ILayer, StyleAttrField } from '@antv/l7';
import * as React from 'react';
import { IAttributeOptions } from './';
import isEqual from 'lodash/isEqual';
interface ILayerProps {
  layer: ILayer;
  filter: Partial<IAttributeOptions>;
}
export default React.memo(function Chart(props: ILayerProps) {
  const { layer, filter } = props;
  if (filter.field) {
    layer.filter(filter.field as string, filter.values as StyleAttrField);
  }
  return null;
}, isEqual);
