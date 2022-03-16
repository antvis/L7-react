import React, { useState } from 'react';
import {
  AMapScene,
  Marker,
  MapScene,
  Control,
  PolygonLayer,
  HeatmapLayer,
} from '@antv/l7-react';
import { useInterval } from 'ahooks';

export default () => {
  const [positionData, setPositionData] = useState<any>({
    lng: 120,
    lat: 30,
  });

  useInterval(() => {
    setPositionData({
      lng: 120 + Math.random() * 10,
      lat: 30 + Math.random() * 10,
    });
  }, 400);

  React.useEffect(() => {}, []);

  return (
    <AMapScene
      map={{
        pitch: 0,
        style: 'light',
        zoom: 2,
        center: [112, 30],
      }}
      style={{
        height: '400px',
        position: 'relative',
        background: '#011030',
      }}
    >
      <Marker
        // key={JSON.stringify(positionData)}
        lnglat={{ lng: positionData.lng, lat: positionData.lat }}
      >
        <img
          src="https://img0.baidu.com/it/u=3430222711,372718749&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=503"
          style={{ width: 100, height: 100 }}
        />
      </Marker>
    </AMapScene>
  );
};
