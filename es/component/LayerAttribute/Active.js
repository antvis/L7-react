import * as React from 'react';
var useEffect = React.useEffect;
export default React.memo(function Chart(props) {
  var layer = props.layer,
      active = props.active;
  useEffect(function () {
    layer.active(active.option);
  }, [JSON.stringify(active)]);
  return null;
});