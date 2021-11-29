---
title: Control 地图组件
order: 4
---

## Contorl Props

- type: `'scale' | 'zoom' | 'logo' | 'layer'`

- position: `'topright' | 'topleft' | 'bottomright' | 'bottomleft' | 'topcenter' | 'bottomcenter' | 'leftcenter' | 'rightcenter';`

<code src='./demo/control.tsx'>

## CustomControl

自定义 Control

- position: `'topright' | 'topleft' | 'bottomright' | 'bottomleft' | 'topcenter' | 'bottomcenter' | 'leftcenter' | 'rightcenter';`
- style controll Css 样式

```tsx
<CustomControl position="topright" style={{ display: 'flex' }}>
  <h1 style={{ color: 'red' }}>1</h1>
  <h1 style={{ color: 'red' }}>2</h1>
</CustomControl>
```
