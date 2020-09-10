import * as React from 'react';
var useEffect = React.useEffect;
export default React.memo(function Chart(props) {
  var layer = props.layer,
    style = props.style;
  useEffect(
    function() {
      layer.style(style);
    },
    Object.keys(style).map(function(key) {
      return style[key];
    }),
  );
  return null;
});
