import {
  IActiveOption,
  IImage,
  ILayer,
  ILngLat,
  IMarker,
  IMarkerOption,
  IPoint,
  Marker,
  Popup,
  Scene,
} from '@antv/l7';
import * as React from 'react';
import { createPortal } from 'react-dom';
import { SceneContext } from './SceneContext';
export interface IMarkerProps {
  option?: Partial<IMarkerOption>;
  lnglat: ILngLat | number[];
  onMarkerLoaded?: (marker: IMarker) => void;
  children?: React.ReactNode;
}
export default class MarkerComponet extends React.PureComponent<IMarkerProps> {
  private el: HTMLDivElement;
  private scene: Scene;
  private marker: IMarker;

  constructor(props: IMarkerProps) {
    super(props);
    this.el = document.createElement('div');
  }
  public componentDidMount() {
    const { lnglat, children, option, onMarkerLoaded } = this.props;
    const marker = new Marker(option);
    if (lnglat) {
      marker.setLnglat(lnglat as ILngLat | IPoint);
    }
    if (children) {
      marker.setElement(this.el);
    }
    this.marker = marker;
    if (onMarkerLoaded) {
      onMarkerLoaded(marker);
    }
    this.scene.addMarker(marker);
  }
  public componentDidUpdate(prevProps: IMarkerProps) {
    const positionChanged =
      JSON.stringify(prevProps?.lnglat) !== JSON.stringify(this.props?.lnglat);

    if (positionChanged && this.props.lnglat) {
      this.marker.setLnglat(this.props.lnglat as ILngLat | IPoint);
    }
  }

  public componentWillUnmount() {
    if (this.marker) {
      this.marker.remove();
    }
  }

  public render() {
    return React.createElement(
      SceneContext.Consumer,
      // @ts-ignore
      {},
      (scene: Scene) => {
        if (scene) {
          this.scene = scene;
        }

        return createPortal(this.props.children, this.el);
      },
    );
  }
}
