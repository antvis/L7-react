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
  headScripts: [
    `var _hmt = _hmt || [];
    (function() {
      var hm = document.createElement("script");
      hm.src = "https://hm.baidu.com/hm.js?fd8a7d7a266eb8e8f50a04d1e4bee6c1";
      var s = document.getElementsByTagName("script")[0];
      s.parentNode.insertBefore(hm, s);
    })();`,
  ],
  // more config: https://d.umijs.org/config
});
