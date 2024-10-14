import pxToView from 'postcss-px-to-viewport-8-plugin';
import { defineConfig } from 'umi';
import proxyConfig from './proxy.config';
import routesConfig from './router.config';

export default defineConfig({
  base: '/crm-mobile/',
  hash: true,
  fastRefresh: true,
  routes: routesConfig,
  proxy: proxyConfig,
  publicPath: '/crm-mobile/',
  outputPath: 'crm-mobile',
  plugins: ['./plugin/version'],
  jsMinifierOptions: {
    target: ['chrome80', 'es2020'],
  },
  codeSplitting: {
    jsStrategy: 'granularChunks',
  },
  esbuildMinifyIIFE: true,
  deadCode: {
    exclude: ['**/interface.ts'],
  },
  npmClient: 'pnpm',
  extraPostCSSPlugins: [
    pxToView({
      unitToConvert: 'px',
      viewportWidth: 375,
      unitPrecision: 5,
      propList: ['*'],
      viewportUnit: 'vw',
      fontViewportUnit: 'vw',
      selectorBlackList: [],
      minPixelValue: 1,
      mediaQuery: false,
      replace: true,
      exclude: [],
      landscape: false,
      landscapeUnit: 'vw',
      landscapeWidth: 568,
    }),
  ],
});
