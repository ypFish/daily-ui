/*
 * @Description: 
 * @Author: yp
 * @Date: 2022-03-01 21:23:08
 * @LastEditTime: 2022-04-08 16:34:35
 * @LastEditors: yp
 */
// app.js
App({
  onLaunch() {
    //初始化设备硬件信息
    this.ininSystemInfo();
  },
  globalData: {
    //导航栏位置信息
    navInfo: {
      navHeight: 0,
      menuLeft: 0,
      menuTop: 0,
      menuHeight: 0,
      menuWidth: 0,
      menuIconWidth: 0
    },
    //屏幕信息
    screenWidth: 0,
    screenHeight: 0,
    //设备像素比
    pixelRatio: 2,
  },

  /**
   * @description: 初始化系统设备信息
   * @param {*}
   * @return {*}
   */
  ininSystemInfo() {
    //初始化导航栏位置信息
    const that = this;
    // 获取系统信息
    const systemInfo = wx.getSystemInfoSync();
    // 胶囊按钮位置信息
    const menuButtonInfo = wx.getMenuButtonBoundingClientRect();

    // 导航栏高度 = 状态栏到胶囊的间距（胶囊距上距离-状态栏高度） * 3 + 胶囊高度 + 状态栏高度
    that.globalData.navInfo.navHeight = (menuButtonInfo.top - systemInfo.statusBarHeight) * 3 + menuButtonInfo.height + systemInfo.statusBarHeight;
    // 导航栏内容左定位
    that.globalData.navInfo.menuLeft = systemInfo.screenWidth - menuButtonInfo.right;
    // 导航栏内容顶部定位
    that.globalData.navInfo.menuTop = menuButtonInfo.top;
    // 导航栏内容高度
    that.globalData.navInfo.menuHeight = menuButtonInfo.height;
    // 导航栏内容宽度
    that.globalData.navInfo.menuWidth = systemInfo.screenWidth - menuButtonInfo.width - that.globalData.navInfo.menuLeft * 2
    // 导航栏图标占位宽度
    that.globalData.navInfo.menuIconWidth = menuButtonInfo.width;
    // 获取屏幕宽度
    that.globalData.screenWidth = systemInfo.screenWidth;
    // 获取屏幕高度
    that.globalData.screenHeight = systemInfo.screenHeight;
    // 获取设备像素比
    that.globalData.pixelRatio = systemInfo.pixelRatio;
    // 获取基础库版本号
    that.globalData.SDKVersion = systemInfo.SDKVersion;
  },
})