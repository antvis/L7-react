import { ILayer, StyleAttrField } from '@antv/l7';
import * as React from 'react';
import { isEqual } from '../util';
import { IAttributeOptions } from './';

interface ILayerProps {
  layer: ILayer;
  shape: Partial<IAttributeOptions>;
}
export default React.memo(function Chart(props: ILayerProps) {
  const { layer, shape } = props;
  shape.field
    ? layer.shape(shape.field, shape.values)
    : layer.shape(shape.values as StyleAttrField);
  return null;
}, isEqual);
