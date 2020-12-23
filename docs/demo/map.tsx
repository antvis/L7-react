import React from 'react';
import { MapScene, Control, PolygonLayer, HeatmapLayer } from '@antv/l7-react';
import { useRequest } from 'ahooks';
async function getData(url: string) {
  const res = await fetch(url);
  return await res.json();
}
const urls = {
  world:
    'https://gw.alipayobjects.com/os/bmw-prod/79143b04-5fab-4d24-8cce-80b818a3d189.json',
  grid:
    'https://gw.alipayobjects.com/os/bmw-prod/8990e8b4-c58e-419b-afb9-8ea3daff2dd1.json',
};
export default () => {
  const { run, fetches } = useRequest(getData, {
    manual: true,
    fetchKey: url => url,
  });
  React.useEffect(() => {
    run(urls.world);
    run(urls.grid);
  }, []);

  return (
    <MapScene
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
      {fetches[urls.grid]?.loading === false && (
        <HeatmapLayer
          key={'2'}
          source={{
            data: fetches[urls.grid].data,
            transforms: [
              {
                type: 'hexagon',
                size: 500000,
                field: 'capacity',
                method: 'sum',
              },
            ],
          }}
          color={{
            values: '#132953',
          }}
          shape={{
            values: 'circle',
          }}
          style={{
            coverage: 0.5,
            angle: 0.3,
            opacity: 0.8,
          }}
        />
      )}
      {fetches[urls.world]?.loading === false && (
        <PolygonLayer
          key={'1'}
          options={{
            autoFit: true,
          }}
          source={{
            data: fetches[urls.world].data,
          }}
          active={false}
          size={{
            values: 0.6,
          }}
          color={{
            values: '#274A91',
          }}
          shape={{
            values: 'line',
          }}
          style={{
            opacity: 0.6,
          }}
        />
      )}
      <Control type="scale" position="bottomright" />
      <Control type="zoom" position="bottomleft" />
    </MapScene>
  );
};
