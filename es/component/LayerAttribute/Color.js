import * as React from 'react';
var useEffect = React.useEffect;
export default React.memo(function Chart(props) {
  var layer = props.layer,
    color = props.color;
  useEffect(
    function() {
      color.field
        ? layer.color(color.field, color.values)
        : layer.color(color.values);
    },
    [
      color.field,
      color.scale,
      JSON.stringify(color.values),
      JSON.stringify(color.options),
    ],
  );
  return null;
});
