import { Control, PositionName } from '@antv/l7';
import * as React from 'react';
import { createPortal } from 'react-dom';
import { useSceneValue } from './SceneContext';
const { useEffect, useState } = React;

export interface IColorLegendProps {
  position: PositionName;
  className?: string;
  style?: React.CSSProperties;
  children?: JSX.Element | JSX.Element[] | Array<JSX.Element | undefined>;
}

export default function CustomControl(
  props: IColorLegendProps,
): React.ReactPortal {
  const { className, style, children, position } = props;
  const [control, setControl] = useState<Control>();
  const mapScene = useSceneValue();
  const [el] = useState<HTMLDivElement>(() => document.createElement('div'));

  useEffect(() => {
    const custom = new Control({
      position,
    });
    custom.onAdd = () => {
      if (className) {
        el.className = className;
      }
      if (style) {
        const cssText = Object.keys(style)
          .map((key: string) => {
            // @ts-ignore
            return `${key}:${style[key]}`;
          })
          .join(';');
        el.style.cssText = cssText;
      }

      return el;
    };
    custom.onRemove = () => {};
    setControl(custom);
    mapScene.addControl(custom);
    return () => {
      mapScene.removeControl(custom);
    };
  }, []);

  useEffect(() => {
    control && control.setPosition((position as any) || 'bottomleft');
  }, [position]);

  return createPortal(children, el);
}
