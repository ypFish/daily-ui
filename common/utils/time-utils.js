/*
 * @Description: 时间处理工具类
 * @Author: yp
 * @Date: 2021-03-12 16:27:15
 * @LastEditTime: 2022-02-27 17:53:19
 * @LastEditors: yp
 */
/**
 * @description: 时间处理工具类
 * @param {*}
 * @return {*}
 */

//请求处理工具
const requestUtil = require('./request-utils')

const WEEK_CN = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];

module.exports = {

  //获取到的服务器时间戳
  serverTimestamp: -1,
  //服务器时间与客户端时间差异
  timestampGap: 0,

  /**
   * @description: 根据服务端时间校准当前时间，获得当前时间
   * @param {*}
   * @return {*}
   */
  getCurrentDate() {
    const cur = new Date();
    if (this.serverTimestamp < 0) {
      //服务端时间和本地时间无差异(差距时间可接受)
      return cur;
    } else {
      //返回服务器端时间
      return new Date(cur.getTime() + this.timestampGap)
    }
  },

  //设置服务器端时间
  async setServerTime() {
    //发起请求获取服务器时间
    //模拟从后端请求，如果失败，使用前端时间
    const serverTime = await requestUtil.getSystemCurrent() || +new Date();

    //判断和本地时间差异
    const cilentTime = +new Date();

    this.timestampGap = serverTime - cilentTime;

    console.log('获取服务端时间：' + serverTime + "，客户端时间：" + cilentTime);

    //差异大于5分钟时，则使用服务器时间显示
    if (Math.abs(cilentTime - serverTime) > 1000 * 60 * 5) {
      this.serverTime = serverTime;
    } else {
      this.serverTime = -1;
    }

    return serverTime;
  },

  /**
   * @description: 在某天年月日的基础上相加/减年，获取新的年月日
   * @param {*} currentDate
   * @param {*} y 加/减 的年
   * @return {*} Date 未来的日期（注意：小时分钟秒都会归0）
   */
  addYearDate(currentDate = new Date(), y = 0) {

    return new Date(currentDate.getFullYear() + y, currentDate.getMonth(), currentDate.getDate())
  },

  /**
   * @description: 获取某个Date对象当日0点0分0点的Date对象
   * @param {*} currentDate
   * @return {*}
   */
  getZeroDate(currentDate = new Date()) {
    //兼容性好，不要使用 toLocaleDateString 方法，各个js执行环境返回不一致
    return new Date(currentDate.setHours(0, 0, 0, 0))
  },

  /**
   * @description: 时期格式化
   * @param {*} fmt 格式
   * @param {*} date 日期Date对象
   * @return {*}
   */
  dateFormat(fmt = 'YYYY-mm-dd HH:MM:SS', date) {
    let ret;
    const opt = {
      "Y+": date.getFullYear().toString(), // 年
      "m+": (date.getMonth() + 1).toString(), // 月
      "d+": date.getDate().toString(), // 日
      "H+": date.getHours().toString(), // 时
      "M+": date.getMinutes().toString(), // 分
      "S+": date.getSeconds().toString() // 秒
      // 有其他格式化字符需求可以继续添加，必须转化成字符串
    };
    for (let k in opt) {
      ret = new RegExp("(" + k + ")").exec(fmt);
      if (ret) {
        fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
      }
    }
    return fmt;
  },

  /**
   * @description: 判断是否为闰年
   * @param {*} year 年
   * @return {*}
   */
  isRun(year) {
    year = parseInt(year);
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
      return true;
    }
    return false;
  },

  /**
   * @description: 传入date对象，返回 中文 周几
   * @param {*} date
   * @return {*}
   */
  getWeekCN(date = new Date()) {
    return WEEK_CN[date.getDay()];
  },

  /**
   * @description: 获取当前时刻 中文，如 凌晨
   * @param {*}
   * @return {*}
   */
  getMerdiemCN(date = new Date()) {

    const hour = date.getHours();
    const minute = date.getMinutes();
    const hm = (hour * 100) + minute;

    if (hm < 600) {
      return '凌晨'
    } else if (hm < 900) {
      return '早上'
    } else if (hm < 1100) {
      return '上午'
    } else if (hm < 1300) {
      return '中午'
    } else if (hm < 1800) {
      return '下午'
    }
    return '晚上'
  },

  /**
   * @description: 根据当前时间，获取时刻的问候语
   * @param {*} date
   * @return {*}
   */
  getGreetingCN(date = new Date()) {
    const hour = date.getHours();
    const minute = date.getMinutes();
    const hm = (hour * 100) + minute;

    if (hm < 430) {
      return '夜深了'
    } else if (hm < 900) {
      return '早上好'
    } else if (hm < 1100) {
      return '上午好'
    } else if (hm < 1330) {
      return '中午好'
    } else if (hm < 1800) {
      return '下午好'
    }
    return '晚上好'
  },

  /**
   * @description: 获取某一年某月的第index周几具体是哪一天,以及具体时分秒，例如 2021年12月倒数第一个星期日，凌晨2点时间 timeUtils.getDateByYearMonthIndexWeek(2021,11,-1,0,2,0,0); 2021年6月第二个星期五，凌晨5点时间  timeUtils.getDateByYearMonthIndexWeek(2021,5,2,5,5,0,0);
   * @param {*} year
   * @param {*} month
   * @param {*} index 第几个周几，1表示第1个，-1表示本月最后一个
   * @param {*} week 周几，0表示周日
   * @param {*} hour 小时，忽略默认值为0
   * @param {*} minute 分钟，忽略默认值为0
   * @param {*} second 秒，忽略默认值为0
   * @return {*} Date对象
   */
  getDateByYearMonthIndexWeek(year, month, index, week, hour = 0, minute = 0, second = 0) {

    if (index === 0) {
      index = 1;
    }

    let originDate = null;

    if (index >= 0) {

      //获取当月1日
      originDate = new Date(year, month, 1, hour, minute, second);
      const originWeek = originDate.getDay();
      //计算加上的天数
      let addDays = week - originWeek >= 0 ? week - originWeek : week - originWeek + 7;
      addDays = addDays + (index - 1) * 7;

      originDate.setDate(originDate.getDate() + addDays);

    } else {
      //获取下个月1日
      originDate = new Date(year, month + 1, 1, hour, minute, second);
      const originWeek = originDate.getDay();
      //计算减去的天数
      let subDays = originWeek - week > 0 ? originWeek - week : originWeek - week + 7;
      subDays = subDays + (Math.abs(index) - 1) * 7;
      originDate.setDate(originDate.getDate() - subDays);
    }
    return originDate;
  }



}