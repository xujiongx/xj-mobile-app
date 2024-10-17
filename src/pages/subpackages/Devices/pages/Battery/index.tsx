import { useEffect } from 'react';
import { useBattery } from 'react-use';
import styles from './index.less';

export default function Page() {
  const battery = useBattery();

  useEffect(() => {
    console.log('😀', 'getBattery' in navigator, battery);
  }, []);

  return <div className={styles['page']}>电量</div>;
}
