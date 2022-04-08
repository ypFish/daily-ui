/*
 * @Description: 模拟向后端发起请求
 * @Author: yp
 * @Date: 2021-04-28 11:50:28
 * @LastEditTime: 2021-11-21 18:51:08
 * @LastEditors: yp
 */

module.exports = {
  /**
   * @description: 模拟发起一个后端请求
   * @param {*} successRate 成功比例（1-100)，如果为-1表示，使用一个随机数
   * @param {*} during 请求时长
   * @param {*} successResult 成功的返回值
   * @param {*} failResult 失败的返回值
   * @return {*}
   */
  request(successRate = -1, during = 1800, successResult = {
    result: 'success'
  }, failResult = {
    result: 'fail'
  }) {

    if (successRate < 0) {
      successRate = Math.floor(Math.random() * 100 + 1)
    }

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const random = Math.random() * 100 + 1
        if (random <= successRate) {
          resolve(successResult);
        } else {
          reject(failResult);
        }
      }, during)
    })
  }
}