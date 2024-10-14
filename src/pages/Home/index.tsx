import { Switch } from 'antd-mobile';
import { Helmet } from 'umi';
import styles from './index.less';

export default function Page() {
  return (
    <div className={styles['page']}>
      <Helmet title="首页" />
      <div className={styles['title']}>首页</div>
      <Switch />
      <div style={{ height: '100vh' }}>11</div>
    </div>
  );
}
