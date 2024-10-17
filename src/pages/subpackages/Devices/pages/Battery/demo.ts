export const getBattery = () => {
  if ('getBattery' in navigator) {
    navigator
      .getBattery()
      .then(function (battery) {
        console.log('🧢', battery);
        // 初始获取电池信息
        console.log('当前电池电量: ' + battery.level * 100 + '%');
        console.log('充电状态: ' + (battery.charging ? '正在充电' : '未充电'));
        console.log('充满电所需时间: ' + battery.chargingTime + '秒');
        console.log('防空电所需时间: ' + battery.dischargingTime + '秒');

        // 监听电池状态变化
        battery.addEventListener('levelchange', function () {
          console.log('电量已更新: 当前电量为' + battery.level * 100 + '%');
        });

        battery.addEventListener('chargingchange', function () {
          console.log(
            '充电状态已变更: ' + (battery.charging ? '正在充电' : '未在充电'),
          );
        });

        battery.addEventListener('chargingtimechange', function () {
          console.log('充满电所需时间更新: 剩余' + battery.chargingTime + '秒');
        });

        battery.addEventListener('dischargingtimechange', function () {
          console.log(
            '放空电所需时间更新: 剩余' + battery.dischargingTime + '秒',
          );
        });
      })
      .catch(function (error: any) {
        // 处理获取电池对象失败的情况
        console.error('获取电池信息失败:', error);
      });
  } else {
    // 处理浏览器不支持Battery API的情况
    console.log('当前浏览器不支持Battery API');
  }
};
