/*
 * @Description: 默认初始数据
 * @Author: yp
 * @Date: 2021-05-26 15:32:56
 * @LastEditTime: 2022-03-01 21:15:31
 * @LastEditors: yp
 */

module.exports = {

  //默认位置
  location: {
    name: "北京",
    id: "101040100",
    lat: "29.56376",
    lon: "106.55046",
    adm2: "北京",
    adm1: "北京市",
    country: "中国",
  },

  //默认生日
  birthday: {
    //月，从0开始
    month: 0,
    //日,从0开始
    day: 0,
  },

  //默认按键振动触觉(0:无振动，1:轻度，2:中度，3:重度)
  vibrateValue: 2,

  //卡片默认配置
  cardsDefaultConfig: {
    // 失败状态的卡片
    'error': {

    },
    //加载状态的卡片
    'loading': {

    },
    // 日历
    1: {
      //年进度条是否显示
      progressOpenValue: true,
      //农历是否显示
      lunarOpenValue: true,
      //忌宜是否显示
      jiyiOpenValue: true
    },

    // 纪念日
    2: {
      //优先显示几个列表选项
      firstPickerValue: [1],
      //是否只展示节假日数据
      onlyHolidayValue: false
    },
    // 天气
    3: {
      //自动获取当前位置开关
      autoLocationOpenValue: true,
      //优先显示几个列表选项
      firstPickerValue: [2],
    },
    //尾号限行
    4: {

    },
    //生日提醒
    5: {
      //优先显示几个列表选项
      firstPickerValue: [3],
    },
    //实时快报
    6: {

    },
    //经期记录
    7: {
      //月经周期时长，默认28天
      mensesPeriodPickerValue: [7],
      //经期时长，默认5天
      mensesDayPickerValue: [3],
      //上一次月经时间
      mensesDate: -1
    },
    //历史上的今天
    8: {

    },
    //新事物
    9: {

    },
    //股市
    10: {

    },
    //基金
    11: {

    },
    //世界金融
    // 12: {

    // },
    //待办事项
    13: {

    },
    //课程表
    14: {

    },
    //彩票
    15: {

    },
    //打卡
    16: {

    },
    // 旅行推荐
    17: {

    },
    // 世界时间
    18: {

    },
  }


}