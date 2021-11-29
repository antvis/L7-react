import { AMapScene, PointLayer, CustomControl } from '@antv/l7-react';
import React, { useCallback, useEffect, useState } from 'react';
import { Select } from 'antd';
const { Option } = Select;

export default () => {
  const [data, setData] = useState();
  const [blend, setBlend] = useState('additive');
  const ControlPosition = useCallback(() => {
    return (
      <Select
        defaultValue="additive"
        style={{ width: 120 }}
        onChange={e => {
          setBlend(e);
        }}
      >
        {['additive', 'normal', 'max', 'min', 'none'].map((value: string) => {
          return (
            <Option key={value} value={value}>
              {value}
            </Option>
          );
        })}
      </Select>
    );
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://gw.alipayobjects.com/os/basement_prod/337ddbb7-aa3f-4679-ab60-d64359241955.json',
      );
      const data = await response.json();
      console.log(data);
      setData(data);
    };
    fetchData();
  }, []);
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
      {data && (
        <PointLayer
          options={{
            blend,
          }}
          source={{
            data,
          }}
          size={{
            values: 10,
          }}
          color={{
            values: '#b97feb',
          }}
          shape={{
            values: 'circle',
          }}
        />
      )}
      <CustomControl position="topright">
        <ControlPosition />
      </CustomControl>
    </AMapScene>
  );
};
