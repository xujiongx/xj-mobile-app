import VConsole from 'vconsole';

/**
 * 注册 VConsole 工具，用于在开发环境中调试移动端页面
 * 该函数会检查当前域名是否包含特定的开发环境标识，如果是，则初始化 VConsole
 * @remarks
 * 该函数仅在以下环境中执行：
 * - 本地开发环境（localhost）
 * - 测试环境（包含 'test' 的域名）
 * - 开发环境（包含 'dev' 的域名）
 * - 内网环境（包含 '192' 的域名）
 * @returns {void}
 */
export const registerVConsole = () => {
  // 检查当前域名是否包含特定的开发环境标识
  if (
    window.location.hostname.includes('192') ||
    window.location.hostname.includes('localhost') ||
    window.location.hostname.includes('dev') ||
    window.location.hostname.includes('test')
  ) {
    // 如果 VConsole 尚未初始化，则创建一个新的实例
    if (!window._vConsole) {
      const vConsole = new VConsole();
      window._vConsole = vConsole;
    }
  }
};
