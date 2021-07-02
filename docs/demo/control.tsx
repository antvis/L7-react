//@ts-ignore
import { AMapScene, CustomControl } from '@antv/l7-react';
import React, { useState } from 'react';
export default () => {
  const [show, setShow] = useState(true);
  return (
    <div>
      <div>
        <button onClick={() => setShow(!show)}>toggle</button>
      </div>
      {show && (
        <AMapScene
          map={{
            center: [110.19382669582967, 50.258134],
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
          <CustomControl position="bottomright">
            <div style={{ color: '#fff' }}>1232432</div>
          </CustomControl>
        </AMapScene>
      )}
    </div>
  );
};
