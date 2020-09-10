function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
var useEffect = React.useEffect;
export default React.memo(function Chart(props) {
  var layer = props.layer,
      source = props.source;

  var data = source.data,
      sourceOption = _objectWithoutProperties(source, ["data"]);

  useEffect(function () {
    if (!layer.inited) {
      layer.source(data, sourceOption);
    } else {
      layer.setData(data, sourceOption);
    }

    if (sourceOption.autoFit) {
      layer.fitBounds(sourceOption && sourceOption.fitBoundsOptions);
    }
  }, [data, JSON.stringify(sourceOption)]);
  return null;
});