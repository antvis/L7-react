import { AMapScene, ImageLayer } from '@antv/l7-react';
import React from 'react';
export default () => {
  return (
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
      <ImageLayer
        source={{
          data:
            'https://gw.alipayobjects.com/mdn/antv_site/afts/img/A*8SUaRr7bxNsAAAAAAAAAAABkARQnAQ',
          parser: {
            type: 'image',
            extent: [
              113.1277263548,
              32.3464238863,
              118.1365790452,
              36.4786759137,
            ],
          },
        }}
      />
    </AMapScene>
  );
};
