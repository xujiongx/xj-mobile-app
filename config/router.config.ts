export default [
  {
    path: '/',
    name: '首页',
    component: '@/pages/Home',
  },
  {
    path: '/center',
    name: '广场',
    component: '@/pages/Center',
  },
  {
    path: '/my',
    name: '我的',
    component: '@/pages/My',
  },
  {
    path: '/devices/battery',
    name: '电量',
    component: '@/pages/subpackages/Devices/pages/Battery',
  },
  {
    path: '/devices/voices',
    name: '录音',
    component: '@/pages/subpackages/Devices/pages/Voices',
  },
];
