/*
 * @Description: 用户授权工具集
 * @Author: yp
 * @Date: 2022-01-19 16:04:14
 * @LastEditTime: 2022-01-24 14:07:04
 * @LastEditors: yp
 */

module.exports = {

  //权限信息
  setting: {
    // authSetting:{
    //     //   "scope.userInfo": true,
    //     //   "scope.userLocation": true
    // }
    // subscriptionsSetting: {
    //   mainSwitch: false
    // }
  },

  /**
   * @description: 同步全局微信授权状态
   * @param {*}
   * @return {*}
   */
  async syncWXSetting() {

    //同步调用微信接口，获取权限数据
    try {
      const res = await wx.getSetting({
        withSubscriptions: true
      });

      //全局授权信息
      this.setting = {
        authSetting: res.authSetting || {},
        subscriptionsSetting: res.subscriptionsSetting || {}
      }

    } catch (err) {
      console.log('获取授权信息失败', err)
    }

    return this.setting;
  },


}