import {
  AMapScene,
  ImageLayer,
  PolygonLayer,
  LayerEvent,
  Popup,
} from '@antv/l7-react';
import React, { useState } from 'react';
export default () => {
  const [selectFeature, setSelectFeature] = useState();
  return (
    <AMapScene
      map={{
        center: [110.19382669582967, 50.258134],
        pitch: 0,
        style: 'dark',
        zoom: 1,
      }}
      style={{
        height: '500px',
        position: 'relative',
      }}
    >
      <PolygonLayer
        source={{
          data: {
            type: 'FeatureCollection',
            features: [
              {
                type: 'Feature',
                properties: {},
                geometry: {
                  type: 'Polygon',
                  coordinates: [
                    [
                      [88.9453125, -3.864254615721396],
                      [155.7421875, -3.864254615721396],
                      [155.7421875, 46.800059446787316],
                      [88.9453125, 46.800059446787316],
                      [88.9453125, -3.864254615721396],
                    ],
                  ],
                },
              },
            ],
          },
        }}
        color={{
          values: 'red',
        }}
        shape={{
          values: 'fill',
        }}
      >
        <LayerEvent
          type="click"
          handler={e => {
            setSelectFeature(e);
          }}
        ></LayerEvent>
      </PolygonLayer>
      {selectFeature && (
        <Popup
          option={{
            stopPropagation: false,
          }}
          lnglat={selectFeature?.lngLat}
        >
          <div
            onClick={e => {
              e.stopPropagation();
              e.preventDefault();
              alert('我被点击了');
            }}
          >
            <button>我能不能被点击</button>
          </div>
        </Popup>
      )}
    </AMapScene>
  );
};
