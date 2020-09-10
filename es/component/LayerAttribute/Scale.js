import * as React from 'react';
var useEffect = React.useEffect;
export default React.memo(function Chart(props) {
  var layer = props.layer,
      scale = props.scale;
  useEffect(function () {
    layer.scale(scale.values);
  }, [scale.values]);
  return null;
});