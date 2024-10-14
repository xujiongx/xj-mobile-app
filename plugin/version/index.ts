import dayjs from 'dayjs';
import { join } from 'path';
import { IApi } from 'umi';
const { execa } = require('@umijs/utils');

export default function (api: IApi) {
  const { name, version } = require(join(api.paths.cwd!, 'package.json'));
  let commit, branch;
  try {
    commit = execa.execaCommandSync('git rev-parse --short HEAD').stdout;
    branch = execa.execaCommandSync('git rev-parse --abbrev-ref HEAD').stdout;
  } catch (error) {}
  console.log('branch', branch);

  if (branch?.startsWith('main/')) {
    branch = branch.replace('main/', '');
  } else if (!['develop'].includes(branch)) {
    branch = '';
  }
  const appVersion = `${name}_${version}(${branch ? `${branch}.` : ''}${
    commit ? `${commit}.` : ''
  }${dayjs().format('YYYYMMDDHHmm')})`;
  api.logger.info(`版本号：${appVersion}`);
  api.addEntryCodeAhead(() => `console.log('${appVersion}');`);
  api.addHTMLHeadScripts(
    () => `
    // IE浏览器（含IE11）提示不兼容
    if (!!window.ActiveXObject || 'ActiveXObject' in window) {
      document.write('浏览器不兼容，请使用Chrome、360、QQ浏览器等现代浏览器');
    }
    // Chrome版本低于49，提示更新浏览器
    var arr = navigator.userAgent.split(' ');
    var chromeVersion = '';
    for (var i = 0; i < arr.length; i++) {
      if (/chrome/i.test(arr[i])) {
        chromeVersion = arr[i];
      }
    }
    if (chromeVersion) {
      var version = Number(chromeVersion.split('/')[1].split('.')[0]);
      if (version < 49) {
        alert('当前Chrome内核版本过低，无法保证完整体验，请更新浏览器');
      }
    }
  `,
  );

  api.addHTMLStyles(() => ({
    content: `
    .spinner {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 9999;
    }

    .spinner img {
      width: 30px;
      height: 30px;
      -webkit-animation: spinner 0.8s infinite linear;
      animation: spinner 0.8s infinite linear;
    }

    @-webkit-keyframes spinner {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(359deg);
      }
    }

    @keyframes spinner {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(359deg);
      }
    }
  `,
  }));

  api.modifyHTML(($) => {
    $(`#${api.config.mountElementId}`).append([
      `<div class="spinner">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAMAAAC5zwKfAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACiUExURUxpcdvb2+Dg4NnZ2eDg4NnZ2eDg4Nra2tnZ2f///9ra2tzc3P///9nZ2dnZ2dnZ2dra2tnZ2dra2tra2sPDw9ra2tnZ2dfX18LCwsjIyNbW1tnZ2dnZ2dnZ2crKytnZ2dra2tnZ2dnZ2dnZ2dra2sbGxr+/v8fHx9ra2tnZ2cjIyMrKysTExMzMzMfHx83NzczMzNjY2NjY2NnZ2b+/v9LS0gOkYu4AAAAzdFJOUwBxCU4RnRTg8QYdKgE9xfuT64Ah+mrSNP7PR7FSjKbMB9XlrFrp/v67j72M9G7aXXp/9Dr61GYAAAKCSURBVHjardnXcqNQDAbgHzCHbrDBJS6JUxwnm7I7I/L+r7bjZKQhjAtw9N0lFxqJ02VcYVaz4mUeTPJ8EsxfitnKYDjXe50TE/NXz8UAaeaHdEboZyn62c0CuiiY7frU6jzQVQ9O58q9gDoJPHRRrqmzdYyrNiH1EG5wWVRQy+Rx+rQoTRSZcvE0fZxQSxFdLHdMv9w5SYpf0sS5o1/GI5y1qA7NcrYJTkq2ITXcxzgjq+r6S8JNRzhrNG2GDJJz+dW1RPQNLjJ+M+LJHOOqPloeIwYZrsqCRtUnqnHf6x/LnMYGHZgxiXGEtpuaLf0InUQ+iQItb7W4RWdOTmzTGpBlzd7QgycRwxhN+575CYfY+nTBN+jJJ+ZBuBXH20foKZKxDlywW45XlejNyHx0ZCHxiDx/YIBM9vBdO8FPsGGfcYZvacUJJhjEhPwVUxx9cIJ/MNCUU8xw9MkBYww04hT977+eZQoOtuXl4gL4xwmuMFgik7uxzbzDAp8zrwDebYakvaTnQMkVe4BCzUYmzTKFhZTP65Uskz2sPMpiuWl9Qsu5XWAvG7WVJ/rxIoP8F1YWMsy8M2SwUvL+AN4LS1gxfFkDr2QXViL6kasHVC9ZfVDUp436xFZfeuqbg/r2pb/BotI9AvQPKf1j1K2VD3q5ijwrXUVk4hy2Gpcluc4dvig0Otc53B7DccYKF064hy9OWedKDIc4Z6NyaYcr/xvrPCvgEfPtHj5iTcxReZqhlCd/7qk8HrEhljtWz1tRkLB9gMtoMZ0WAUb3xOyaGCIOiNm1WUTCEW0bQSK+J51WlRhZNNPU2336DUn9lql+U1e/7azfGNdv3ev/uKD+88d/GLJbHPTC69cAAAAASUVORK5CYII="
        />
      </div>`,
    ]);
    return $;
  });
}
