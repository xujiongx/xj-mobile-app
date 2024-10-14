import { Button } from 'antd-mobile';
import { history, useLocation } from 'umi';
import styles from './index.less';

export default function HomePage() {
  const {} = useLocation();
  return (
    <div className={styles['page']}>
      <h2 className={styles['h1']} onClick={() => history.push('/')}>
        Yay! Welcome to umi!
      </h2>
      <p
        style={{
          fontSize: '40px',
        }}
      >
        To get started, edit <code>pages/index.tsx</code> and save to reload.
      </p>
      <Button fill="none" shape="rounded" size="small">
        哈哈
      </Button>
    </div>
  );
}
