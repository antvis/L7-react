import { ILayer, StyleAttrField } from '@antv/l7';
import * as React from 'react';
import { IAttributeOptions } from './';
import { isEqual } from '../util';
interface ILayerProps {
  layer: ILayer;
  color: Partial<IAttributeOptions>;
}
export default React.memo(function Chart(props: ILayerProps) {
  const { layer, color } = props;
  color.field
    ? layer.color(color.field as StyleAttrField, color.values)
    : layer.color(color.values as StyleAttrField);
  return null;
}, isEqual);
