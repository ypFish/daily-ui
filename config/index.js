/*
 * @Description: 配置文件信息
 * @Author: yp
 * @Date: 2021-06-07 18:00:09
 * @LastEditTime: 2022-03-01 12:09:28
 * @LastEditors: yp
 */

module.exports = {

  //云托管环境id
  CLOUD_ENV_ID: "prd-container-5gpnh082f2fa08b9",
  //云托管服务
  CLOUD_SERVER: "daily-api",
  //订阅消息模板:日程提醒
  TMPLID: "tc_8yrkKjsZflfRJ8wDSZKYUE7iSNP9ByGPNJJwTw_k",
  //图片基础路径。
  //七牛存储
  PIC_PATH: "https://picb2b.qyer.com/b2b/wakereading/",
  //小程序云存储
  // PIC_PATH: "cloud://wakereading-prd-6gyyhwo9ab09dd67.7761-wakereading-prd-6gyyhwo9ab09dd67-1307957463/"
  //接口请求超时时间(毫秒)
  // REQUEST_TIME_OUT: 15000,
  //平台（1:打开今天小程序）  
  PLATFORM: 1,
  //请求接口环境（0:本地，1:灰度，2:线上）
  MODE: 2,
}