import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'L7React',
  favicon:
    'https://gw.alipayobjects.com/mdn/rms_08cc33/afts/img/A*aoGdSISB9soAAAAAAAAAAAAAARQnAQ',
  logo:
    'https://gw.alipayobjects.com/mdn/rms_08cc33/afts/img/A*aoGdSISB9soAAAAAAAAAAAAAARQnAQ',
  outputPath: 'docs-dist',
  resolve: {
    previewLangs: [],
  },
  publicPath: '/L7-react/',
  base: '/L7-react/',
  // more config: https://d.umijs.org/config
});
