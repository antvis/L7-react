import * as React from 'react';
import { useSceneValue } from './SceneContext';
var useEffect = React.useEffect;
export default React.memo(function LoadImage(props) {
  var name = props.name,
    url = props.url;
  var mapScene = useSceneValue();
  useEffect(
    function() {
      mapScene.addImage(name, url);
    },
    [name, url],
  );
  return null;
});
