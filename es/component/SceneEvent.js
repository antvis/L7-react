import * as React from 'react';
import { useSceneValue } from './SceneContext';
var useEffect = React.useEffect;
var SceneEvent = React.memo(function(props) {
  var type = props.type,
    handler = props.handler;
  var mapScene = useSceneValue();
  useEffect(
    function() {
      mapScene.on(type, handler);
      return function() {
        mapScene.off(type, handler);
      };
    },
    [type],
  );
  return null;
});
export default SceneEvent;
