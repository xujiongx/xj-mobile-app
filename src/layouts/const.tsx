import {
  AppOutline,
  UnorderedListOutline,
  UserOutline,
} from 'antd-mobile-icons';

export const TABS = [
  {
    link: '/',
    title: '首页',
    icon: <AppOutline />,
  },
  {
    link: '/center',
    title: '中心',
    icon: <UnorderedListOutline />,
  },
  {
    link: '/my',
    title: '我的',
    icon: <UserOutline />,
  },
];

export const SHOW_TABS = TABS.map((item) => item.link);
