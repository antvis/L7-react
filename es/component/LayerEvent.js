import * as React from 'react';
import { useLayerValue } from './LayerContext';
var useEffect = React.useEffect;
export var LayerEvent = React.memo(function(props) {
  var type = props.type,
    handler = props.handler;
  var layer = useLayerValue();
  useEffect(
    function() {
      layer.off(type, handler);
      layer.on(type, handler);
      return function() {
        layer.off(type, handler);
      };
    },
    [type, handler],
  );
  return null;
});
