import { Button, Switch } from 'antd-mobile';
import { Helmet, history } from 'umi';
import styles from './index.less';

export default function Page() {
  return (
    <div className={styles['page']}>
      <Helmet title="首页" />
      <div className={styles['title']}>首页</div>
      <Switch />
      <Button onClick={() => history.push('/devices/battery')}>电量</Button>
      <Button onClick={() => history.push('/devices/voices')}>录音</Button>
    </div>
  );
}
