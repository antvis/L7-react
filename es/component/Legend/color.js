import * as React from 'react';
import './style.css';
export var ColorComponent = React.memo(function(props) {
  var className = props.className,
    style = props.style,
    title = props.title;
  var items = [
    {
      title: '1',
      color: 'rgb(239,243,255)',
    },
    {
      title: '10',
      color: 'rgb(198,219,239)',
    },
    {
      title: '30',
      color: 'rgb(158,202,225)',
    },
    {
      title: '50',
      color: 'rgb(107,174,214)',
    },
    {
      title: '60',
      color: 'rgb(49,130,189)',
    },
    {
      title: '100',
      color: 'rgb(8,81,156)',
    },
  ];
  return React.createElement(
    'div',
    null,
    React.createElement(
      'div',
      null,
      items.map(function(c, i) {
        return React.createElement('div', {
          key: i.toString(),
          style: {
            background: c.color,
            height: '100%',
            display: 'inline-block',
            cursor: 'pointer',
            width: '' + (100.0 - items.length) / items.length + '%',
            marginRight: '1%',
            padding: 5,
          },
        });
      }),
    ),
    React.createElement(
      'div',
      null,
      items.map(function(c, i) {
        return React.createElement(
          'div',
          {
            key: i.toString() + '122',
            style: {
              background: '#fff',
              height: '100%',
              display: 'inline-block',
              textAlign: 'left',
              cursor: 'pointer',
              width: '' + (100.0 - items.length) / items.length + '%',
              marginRight: '1%',
            },
          },
          c.title,
        );
      }),
    ),
  );
});
