import * as React from 'react';
var useEffect = React.useEffect;
export default React.memo(function Chart(props) {
  var layer = props.layer,
      animate = props.animate;
  useEffect(function () {
    layer.animate(animate);
  }, [JSON.stringify(animate)]);
  return null;
});