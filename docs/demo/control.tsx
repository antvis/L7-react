import { AMapScene, Control, CustomControl } from '@antv/l7-react';
import * as React from 'react';

export default React.memo(function Map() {
  return (
    <AMapScene
      map={{
        center: [110.19382669582967, 30.258134],
        pitch: 0,
        style: 'dark',
        zoom: 1,
      }}
      style={{
        height: '400px',
        position: 'relative',
        background: '#011030',
      }}
    >
      <Control type="scale" position="topleft" />
      <Control type="zoom" position="topleft" />
      <CustomControl position="topright" style={{ display: 'flex' }}>
        <h1 style={{ color: 'red' }}>1</h1>
        <h1 style={{ color: 'red' }}>2</h1>
      </CustomControl>
    </AMapScene>
  );
});
