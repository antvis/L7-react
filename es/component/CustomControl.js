import { Control } from '@antv/l7';
import * as React from 'react';
import { createPortal } from 'react-dom';
import { useSceneValue } from './SceneContext';
var useEffect = React.useEffect,
  useState = React.useState;
export default function CustoonConrol(props) {
  var className = props.className,
    style = props.style,
    children = props.children,
    position = props.position;
  var mapScene = useSceneValue();
  var el = document.createElement('div');
  useEffect(function() {
    var custom = new Control({
      position: position,
    });

    custom.onAdd = function() {
      if (className) {
        el.className = className;
      }

      if (style) {
        var cssText = Object.keys(style)
          .map(function(key) {
            // @ts-ignore
            return ''.concat(key, ':').concat(style[key]);
          })
          .join(';');
        el.style.cssText = cssText;
      }

      return el;
    };

    mapScene.addControl(custom);
    return function() {
      mapScene.removeControl(custom);
    };
  }, []);
  return createPortal(children, el);
}
