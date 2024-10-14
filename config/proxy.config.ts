export const DEV_HOST = 'aicc-test.qnzsai.com';

export const DEV_URI = `http${
  DEV_HOST.includes('192') ? '' : 's'
}://${DEV_HOST}/`;

export default {
  /** JAVA 管理台接口 */
  '/aicc-api': {
    target: DEV_URI,
    changeOrigin: true,
    secure: false,
  },
  '/minio': {
    target: DEV_URI,
    changeOrigin: true,
    secure: false,
  },
};
