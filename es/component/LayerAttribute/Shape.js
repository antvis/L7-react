import * as React from 'react';
var useEffect = React.useEffect;
export default React.memo(function Chart(props) {
  var layer = props.layer,
    shape = props.shape;
  useEffect(
    function() {
      shape.field
        ? layer.shape(shape.field, shape.values)
        : layer.shape(shape.values);
    },
    [shape.field, JSON.stringify(shape.values), JSON.stringify(shape.options)],
  );
  return null;
});
