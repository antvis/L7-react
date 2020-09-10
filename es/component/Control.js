function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

import { Logo, Scale, Zoom } from '@antv/l7';
import React, { useEffect, useState } from 'react';
import { useSceneValue } from './SceneContext';
export default React.memo(function MapControl(props) {
  var scene = useSceneValue();

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      setControl = _useState2[1];

  var type = props.type,
      position = props.position;
  useEffect(function () {
    var ctr;

    switch (type) {
      case 'scale':
        ctr = new Scale({
          position: position || 'bottomright'
        });
        break;

      case 'zoom':
        ctr = new Zoom({
          position: position || 'topright'
        });
        break;

      case 'logo':
        ctr = new Logo({
          position: position || 'bottomleft'
        });
    }

    setControl(ctr);
    scene.addControl(ctr);
    return function () {
      scene.removeControl(ctr);
    };
  }, [type, position]);
  return null;
});