import * as React from 'react';
var useEffect = React.useEffect;
export default React.memo(function Chart(props) {
  var layer = props.layer,
      size = props.size;
  useEffect(function () {
    size.field ? layer.size(size.field, size.values) : layer.size(size.values);
  }, [size.field, size.scale, JSON.stringify(size.values), JSON.stringify(size.options)]);
  return null;
});