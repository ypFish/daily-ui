/*
 * @Description: 微信订阅消息相关工具集
 * @Author: yp
 * @Date: 2021-12-14 15:15:16
 * @LastEditTime: 2021-12-15 16:55:33
 * @LastEditors: yp
 */
module.exports = {

  /**
   * @description: 封装的订阅消息
   * @param {*} tmplIds 订阅消息模板id数组
   * @param {*} showToast 是否弹出订阅失败提示
   * @return {*}
   */
  subscribeMessage(tmplId = '', showToast = false) {

    return new Promise((resolve, reject) => {

      if (!tmplId || tmplId.length <= 0) {
        if (showToast) {
          wx.showToast({
            title: '订阅失败：订阅功能被后台封禁',
            icon: 'none'
          })
        }
        reject({
          errCode: -1000,
          errMsg: 'tmplIds is empty'
        })
        return;
      }

      wx.requestSubscribeMessage({
        tmplIds: [tmplId],
        success(res) {
          console.log(res)
          if (res[tmplId] && res[tmplId] === 'accept') {
            //订阅成功
            resolve(res);
          } else if (res[tmplId] && res[tmplId] === 'reject') {
            //订阅失败
            if (showToast) {
              wx.showToast({
                title: '订阅失败：用户拒绝订阅消息',
                icon: 'none'
              })
            }
            reject({
              errCode: -1,
              errMsg: '订阅失败：用户拒绝订阅消息'
            })
          } else if (res[tmplId] && res[tmplId] === 'ben') {
            //订阅失败
            if (showToast) {
              wx.showToast({
                title: '订阅失败：订阅功能被后台封禁',
                icon: 'none'
              })
            }
            reject({
              errCode: -2,
              errMsg: '订阅失败：订阅功能被后台封禁'
            })
          } else {
            //订阅失败
            if (showToast) {
              wx.showToast({
                title: '订阅失败：未知原因',
                icon: 'none'
              })
            }
            reject({
              errCode: -2,
              errMsg: '订阅失败：未知原因'
            })
          }
        },
        fail(err) {
          if (showToast) {
            if (err.errCode === 10002 || err.errCode === 10003) {
              //网络问题，建议重试
              wx.showToast({
                title: '订阅失败：网络问题，建议重试',
                icon: 'none'
              })
            } else if (err.errCode === 20004) {
              //用户关闭了主开关，询问是否继续
              wx.showToast({
                title: '订阅失败：用户已关闭订阅主开关',
                icon: 'none'
              })
            } else {
              //订阅失败，询问是否继续
              wx.showToast({
                title: '订阅失败',
                icon: 'none'
              })
            }
          }
          console.log(err);
          reject(err)
        }
      })
    })
  }
}