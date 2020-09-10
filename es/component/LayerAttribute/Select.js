import * as React from 'react';
var useEffect = React.useEffect;
export default React.memo(function Chart(props) {
  var layer = props.layer,
      select = props.select;
  useEffect(function () {
    layer.select(select.option);
  }, [JSON.stringify(select)]);
  return null;
});