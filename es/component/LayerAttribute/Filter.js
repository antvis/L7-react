import * as React from 'react';
var useEffect = React.useEffect;
export default React.memo(function Chart(props) {
  var layer = props.layer,
    filter = props.filter;
  useEffect(
    function() {
      if (filter.field) {
        layer.filter(filter.field, filter.values);
      }
    },
    [
      filter.field,
      filter.values,
      JSON.stringify(filter.values),
      JSON.stringify(filter.options),
    ],
  );
  return null;
});
