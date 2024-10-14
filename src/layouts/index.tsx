import { SafeArea, TabBar } from 'antd-mobile';
import { Helmet, history, Outlet, useLocation } from 'umi';
import { SHOW_TABS, TABS } from './const';
import styles from './index.less';
import { registerVConsole } from './utils';

export default function Layout() {
  const location = useLocation();
  const { pathname } = location;

  registerVConsole();

  const render = () => {
    if (!SHOW_TABS.includes(pathname)) {
      return (
        <div className={styles['main-only']}>
          <Outlet />
          <SafeArea position="bottom" />
        </div>
      );
    }

    return (
      <div className={styles.main}>
        <Outlet />
        <div className={styles.bottom}>
          <TabBar
            safeArea
            className={styles.tabbar}
            onChange={(value) => history.push(value)}
            activeKey={location.pathname}
          >
            {TABS.map((item) => (
              <TabBar.Item
                key={item.link}
                icon={item.icon}
                title={item.title}
              />
            ))}
          </TabBar>
        </div>
      </div>
    );
  };

  return (
    <>
      <Helmet>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0,viewport-fit=cover,user-scalable=no"
        />
      </Helmet>
      {render()}
    </>
  );
}
