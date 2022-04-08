/*
 * @Description: 世界时间模块 底层国家数据
 * @Author: yp
 * @Date: 2021-08-28 16:44:57
 * @LastEditTime: 2021-09-03 17:03:23
 * @LastEditors: yp
 */
module.exports = {
  //世界时间，国家列表
  cityClockMap: new Map(
    [
      //北美
      [2, {
        //id
        id: 2,
        //城市名称
        city: "纽约",
        //国家名称
        countryName: "美国",
        //国家国旗图片url，不包括config前缀
        countryFlag: "flag/USA.png",
        //时区
        timezone: -5,
        //是否有夏令时
        hasDST: true,
        //夏令时配置，3月的第二个星期日2点开始，至每年11月的第一个星期日2点结束
        dstStartMonth: 2,
        dstStartIndex: 2,
        dstStartWeek: 0,
        dstStartHour: 2,
        dstEndMonth: 10,
        dstEndIndex: 1,
        dstEndWeek: 0,
        dstEndHour: 2,
      }],
      [8, {
        //id
        id: 8,
        //城市名称
        city: "洛杉矶",
        //国家名称
        countryName: "美国",
        //国家国旗图片url，不包括config前缀
        countryFlag: "flag/USA.png",
        //时区
        timezone: -8,
        //是否有夏令时
        hasDST: true,
        //夏令时配置，3月的第二个星期日开始，至每年11月的第一个星期日结束
        dstStartMonth: 2,
        dstStartIndex: 2,
        dstStartWeek: 0,
        dstStartHour: 2,
        dstEndMonth: 10,
        dstEndIndex: 1,
        dstEndWeek: 0,
        dstEndHour: 2,
      }],
      [37, {
        //id
        id: 37,
        //城市名称
        city: "旧金山",
        //国家名称
        countryName: "美国",
        //国家国旗图片url，不包括config前缀
        countryFlag: "flag/USA.png",
        //时区
        timezone: -8,
        //是否有夏令时
        hasDST: true,
        //夏令时配置，3月的第二个星期日开始，至每年11月的第一个星期日结束
        dstStartMonth: 2,
        dstStartIndex: 2,
        dstStartWeek: 0,
        dstStartHour: 2,
        dstEndMonth: 10,
        dstEndIndex: 1,
        dstEndWeek: 0,
        dstEndHour: 2,
      }],
      [16, {
        //id
        id: 16,
        //城市名称
        city: "芝加哥",
        //国家名称
        countryName: "美国",
        //国家国旗图片url，不包括config前缀
        countryFlag: "flag/USA.png",
        //时区
        timezone: -6,
        //是否有夏令时
        hasDST: true,
        //夏令时配置，3月的第二个星期日开始，至每年11月的第一个星期日结束
        dstStartMonth: 2,
        dstStartIndex: 2,
        dstStartWeek: 0,
        dstStartHour: 2,
        dstEndMonth: 10,
        dstEndIndex: 1,
        dstEndWeek: 0,
        dstEndHour: 2,
      }],
      [42, {
        //id
        id: 42,
        //城市名称
        city: "盐湖城",
        //国家名称
        countryName: "美国",
        //国家国旗图片url，不包括config前缀
        countryFlag: "flag/USA.png",
        //时区
        timezone: -7,
        //是否有夏令时
        hasDST: true,
        //夏令时配置，3月的第二个星期日开始，至每年11月的第一个星期日结束
        dstStartMonth: 2,
        dstStartIndex: 2,
        dstStartWeek: 0,
        dstStartHour: 2,
        dstEndMonth: 10,
        dstEndIndex: 1,
        dstEndWeek: 0,
        dstEndHour: 2,
      }],
      [41, {
        //id
        id: 41,
        //城市名称
        city: "檀香山(火奴鲁鲁)",
        //国家名称
        countryName: "美国",
        //国家国旗图片url，不包括config前缀
        countryFlag: "flag/USA.png",
        //时区
        timezone: -10,
        //是否有夏令时
        hasDST: false,
        //夏令时配置，3月的第二个星期日开始，至每年11月的第一个星期日结束
        dstStartMonth: 0,
        dstStartIndex: 0,
        dstStartWeek: 0,
        dstStartHour: 0,
        dstEndMonth: 0,
        dstEndIndex: 0,
        dstEndWeek: 0,
        dstEndHour: 0,
      }],
      [9, {
        //id
        id: 9,
        //城市名称
        city: "多伦多",
        //国家名称
        countryName: "加拿大",
        //国家国旗图片url，不包括config前缀
        countryFlag: "flag/CAN.png",
        //时区
        timezone: -5,
        //是否有夏令时
        hasDST: true,
        //夏令时配置，3月的第二个星期日开始，至每年11月的第一个星期日结束
        dstStartMonth: 2,
        dstStartIndex: 2,
        dstStartWeek: 0,
        dstStartHour: 2,
        dstEndMonth: 10,
        dstEndIndex: 1,
        dstEndWeek: 0,
        dstEndHour: 2,
      }],
      [35, {
        //id
        id: 35,
        //城市名称
        city: "温哥华",
        //国家名称
        countryName: "加拿大",
        //国家国旗图片url，不包括config前缀
        countryFlag: "flag/CAN.png",
        //时区
        timezone: -8,
        //是否有夏令时
        hasDST: true,
        //夏令时配置，3月的第二个星期日开始，至每年11月的第一个星期日结束
        dstStartMonth: 2,
        dstStartIndex: 2,
        dstStartWeek: 0,
        dstStartHour: 2,
        dstEndMonth: 10,
        dstEndIndex: 1,
        dstEndWeek: 0,
        dstEndHour: 2,
      }],
      [14, {
        //id
        id: 14,
        //城市名称
        city: "墨西哥城",
        //国家名称
        countryName: "墨西哥",
        //国家国旗图片url，不包括config前缀
        countryFlag: "flag/MEX.png",
        //时区
        timezone: -6,
        //是否有夏令时
        hasDST: true,
        //夏令时配置，起始于 从4月第一个星期日2点到10月最后一个星期日2点
        dstStartMonth: 3,
        dstStartIndex: 1,
        dstStartWeek: 0,
        dstStartHour: 2,
        dstEndMonth: 9,
        dstEndIndex: -1,
        dstEndWeek: 0,
        dstEndHour: 2,
      }],
      //欧洲
      [1, {
        //id
        id: 1,
        //城市名称
        city: "伦敦",
        //国家名称
        countryName: "英国",
        //国家国旗图片url，不包括config前缀
        countryFlag: "flag/GBR.png",
        //时区
        timezone: 0,
        //是否有夏令时
        hasDST: true,
        //夏令时配置，从3月的最后一个周日凌晨1点开始生效,一直到10月的最后一个周日凌晨2点恢复为零时区
        dstStartMonth: 2,
        dstStartIndex: -1,
        dstStartWeek: 0,
        dstStartHour: 1,
        dstEndMonth: 9,
        dstEndIndex: -1,
        dstEndWeek: 0,
        dstEndHour: 2,
      }],
      [5, {
        //id
        id: 5,
        //城市名称
        city: "巴黎",
        //国家名称
        countryName: "法国",
        //国家国旗图片url，不包括config前缀
        countryFlag: "flag/FRA.png",
        //时区
        timezone: 1,
        //是否有夏令时
        hasDST: true,
        //夏令时配置，3月最后一个周日的早上2点，到10月最后一个周日的早上时间3点
        dstStartMonth: 2,
        dstStartIndex: -1,
        dstStartWeek: 0,
        dstStartHour: 2,
        dstEndMonth: 9,
        dstEndIndex: -1,
        dstEndWeek: 0,
        dstEndHour: 3,
      }],
      [13, {
        //id
        id: 13,
        //城市名称
        city: "柏林",
        //国家名称
        countryName: "德国",
        //国家国旗图片url，不包括config前缀
        countryFlag: "flag/DEU.png",
        //时区
        timezone: 1,
        //是否有夏令时
        hasDST: true,
        //夏令时配置，3月最后一个周日的早上2点，到10月最后一个周日的早上时间3点
        dstStartMonth: 2,
        dstStartIndex: -1,
        dstStartWeek: 0,
        dstStartHour: 2,
        dstEndMonth: 9,
        dstEndIndex: -1,
        dstEndWeek: 0,
        dstEndHour: 3,
      }],
      [19, {
        //id
        id: 19,
        //城市名称
        city: "莫斯科",
        //国家名称
        countryName: "俄罗斯",
        //国家国旗图片url，不包括config前缀
        countryFlag: "flag/RUS.png",
        //时区
        timezone: 3,
        //是否有夏令时
        hasDST: false,
        //夏令时配置，起始于 某月第几个周几，以及具体时间
        dstStartMonth: 0,
        dstStartIndex: 0,
        dstStartWeek: 0,
        dstStartHour: 0,
        dstEndMonth: 0,
        dstEndIndex: 0,
        dstEndWeek: 0,
        dstEndHour: 0,
      }],
      [11, {
        //id
        id: 11,
        //城市名称
        city: "阿姆斯特丹",
        //国家名称
        countryName: "荷兰",
        //国家国旗图片url，不包括config前缀
        countryFlag: "flag/NLD.png",
        //时区
        timezone: 1,
        //是否有夏令时
        hasDST: true,
        //夏令时配置，3月最后一个周日的早上2点，到10月最后一个周日的早上时间3点
        dstStartMonth: 2,
        dstStartIndex: -1,
        dstStartWeek: 0,
        dstStartHour: 2,
        dstEndMonth: 9,
        dstEndIndex: -1,
        dstEndWeek: 0,
        dstEndHour: 3,
      }],
      [12, {
        //id
        id: 12,
        //城市名称
        city: "罗马",
        //国家名称
        countryName: "意大利",
        //国家国旗图片url，不包括config前缀
        countryFlag: "flag/ITA.png",
        //时区
        timezone: 1,
        //是否有夏令时
        hasDST: true,
        //夏令时配置，3月最后一个周日的早上2点，到10月最后一个周日的早上时间3点
        dstStartMonth: 2,
        dstStartIndex: -1,
        dstStartWeek: 0,
        dstStartHour: 2,
        dstEndMonth: 9,
        dstEndIndex: -1,
        dstEndWeek: 0,
        dstEndHour: 3,
      }],
      [18, {
        //id
        id: 18,
        //城市名称
        city: "马德里",
        //国家名称
        countryName: "西班牙",
        //国家国旗图片url，不包括config前缀
        countryFlag: "flag/ESP.png",
        //时区
        timezone: 1,
        //是否有夏令时
        hasDST: true,
        //夏令时配置，3月最后一个周日的早上2点，到10月最后一个周日的早上时间3点
        dstStartMonth: 2,
        dstStartIndex: -1,
        dstStartWeek: 0,
        dstStartHour: 2,
        dstEndMonth: 9,
        dstEndIndex: -1,
        dstEndWeek: 0,
        dstEndHour: 3,
      }],
      [21, {
        //id
        id: 21,
        //城市名称
        city: "布鲁塞尔",
        //国家名称
        countryName: "比利时",
        //国家国旗图片url，不包括config前缀
        countryFlag: "flag/BEL.png",
        //时区
        timezone: 1,
        //是否有夏令时
        hasDST: true,
        //夏令时配置，3月最后一个周日的早上2点，到10月最后一个周日的早上时间3点
        dstStartMonth: 2,
        dstStartIndex: -1,
        dstStartWeek: 0,
        dstStartHour: 2,
        dstEndMonth: 9,
        dstEndIndex: -1,
        dstEndWeek: 0,
        dstEndHour: 3,
      }],
      [22, {
        //id
        id: 22,
        //城市名称
        city: "华沙",
        //国家名称
        countryName: "波兰",
        //国家国旗图片url，不包括config前缀
        countryFlag: "flag/POL.png",
        //时区
        timezone: 1,
        //是否有夏令时
        hasDST: true,
        //夏令时配置，3月最后一个周日的早上2点，到10月最后一个周日的早上时间3点
        dstStartMonth: 2,
        dstStartIndex: -1,
        dstStartWeek: 0,
        dstStartHour: 2,
        dstEndMonth: 9,
        dstEndIndex: -1,
        dstEndWeek: 0,
        dstEndHour: 3,
      }],
      [25, {
        //id
        id: 25,
        //城市名称
        city: "苏黎世",
        //国家名称
        countryName: "瑞士",
        //国家国旗图片url，不包括config前缀
        countryFlag: "flag/CHE.png",
        //时区
        timezone: 1,
        //是否有夏令时
        hasDST: true,
        //夏令时配置，3月最后一个周日的早上2点，到10月最后一个周日的早上时间3点
        dstStartMonth: 2,
        dstStartIndex: -1,
        dstStartWeek: 0,
        dstStartHour: 2,
        dstEndMonth: 9,
        dstEndIndex: -1,
        dstEndWeek: 0,
        dstEndHour: 3,
      }],
      [26, {
        //id
        id: 26,
        //城市名称
        city: "伊斯坦布尔",
        //国家名称
        countryName: "土耳其",
        //国家国旗图片url，不包括config前缀
        countryFlag: "flag/TUR.png",
        //时区
        timezone: 2,
        //是否有夏令时
        hasDST: true,
        //夏令时配置，3月最后一个周日的早上3点，到10月最后一个周日的早上时间4点
        dstStartMonth: 2,
        dstStartIndex: -1,
        dstStartWeek: 0,
        dstStartHour: 3,
        dstEndMonth: 9,
        dstEndIndex: -1,
        dstEndWeek: 0,
        dstEndHour: 4,
      }],
      [28, {
        //id
        id: 28,
        //城市名称
        city: "斯德哥尔摩",
        //国家名称
        countryName: "瑞典",
        //国家国旗图片url，不包括config前缀
        countryFlag: "flag/SWE.png",
        //时区
        timezone: 1,
        //是否有夏令时
        hasDST: true,
        //夏令时配置，3月最后一个周日的早上2点，到10月最后一个周日的早上时间3点
        dstStartMonth: 2,
        dstStartIndex: -1,
        dstStartWeek: 0,
        dstStartHour: 2,
        dstEndMonth: 9,
        dstEndIndex: -1,
        dstEndWeek: 0,
        dstEndHour: 3,
      }],
      [29, {
        //id
        id: 29,
        //城市名称
        city: "维也纳",
        //国家名称
        countryName: "奥地利",
        //国家国旗图片url，不包括config前缀
        countryFlag: "flag/AUT.png",
        //时区
        timezone: 1,
        //是否有夏令时
        hasDST: true,
        //夏令时配置，3月最后一个周日的早上2点，到10月最后一个周日的早上时间3点
        dstStartMonth: 2,
        dstStartIndex: -1,
        dstStartWeek: 0,
        dstStartHour: 2,
        dstEndMonth: 9,
        dstEndIndex: -1,
        dstEndWeek: 0,
        dstEndHour: 3,
      }],
      [31, {
        //id
        id: 31,
        //城市名称
        city: "里斯本",
        //国家名称
        countryName: "葡萄牙",
        //国家国旗图片url，不包括config前缀
        countryFlag: "flag/PRT.png",
        //时区
        timezone: 0,
        //是否有夏令时
        hasDST: true,
        //夏令时配置，从3月的最后一个周日凌晨1点开始生效,一直到10月的最后一个周日凌晨2点恢复为零时区
        dstStartMonth: 2,
        dstStartIndex: -1,
        dstStartWeek: 0,
        dstStartHour: 1,
        dstEndMonth: 9,
        dstEndIndex: -1,
        dstEndWeek: 0,
        dstEndHour: 2,
      }],
      [33, {
        //id
        id: 33,
        //城市名称
        city: "布拉格",
        //国家名称
        countryName: "捷克",
        //国家国旗图片url，不包括config前缀
        countryFlag: "flag/CZE.png",
        //时区
        timezone: 1,
        //是否有夏令时
        hasDST: true,
        //夏令时配置，3月最后一个周日的早上2点，到10月最后一个周日的早上时间3点
        dstStartMonth: 2,
        dstStartIndex: -1,
        dstStartWeek: 0,
        dstStartHour: 2,
        dstEndMonth: 9,
        dstEndIndex: -1,
        dstEndWeek: 0,
        dstEndHour: 3,
      }],
      [38, {
        //id
        id: 38,
        //城市名称
        city: "基辅",
        //国家名称
        countryName: "乌克兰",
        //国家国旗图片url，不包括config前缀
        countryFlag: "flag/UKR.png",
        //时区
        timezone: 2,
        //是否有夏令时
        hasDST: true,
        //夏令时配置，3月最后一个周日的早上3点，到10月最后一个周日的早上时间4点
        dstStartMonth: 2,
        dstStartIndex: -1,
        dstStartWeek: 0,
        dstStartHour: 3,
        dstEndMonth: 9,
        dstEndIndex: -1,
        dstEndWeek: 0,
        dstEndHour: 4,
      }],
      [39, {
        //id
        id: 39,
        //城市名称
        city: "赫尔辛基",
        //国家名称
        countryName: "芬兰",
        //国家国旗图片url，不包括config前缀
        countryFlag: "flag/FIN.png",
        //时区
        timezone: 2,
        //是否有夏令时
        hasDST: true,
        //夏令时配置，3月最后一个周日的早上3点，到10月最后一个周日的早上时间4点
        dstStartMonth: 2,
        dstStartIndex: -1,
        dstStartWeek: 0,
        dstStartHour: 3,
        dstEndMonth: 9,
        dstEndIndex: -1,
        dstEndWeek: 0,
        dstEndHour: 4,
      }],

      //大洋洲
      [7, {
        //id
        id: 7,
        //城市名称
        city: "悉尼",
        //国家名称
        countryName: "澳大利亚",
        //国家国旗图片url，不包括config前缀
        countryFlag: "flag/AUS.png",
        //时区
        timezone: 10,
        //是否有夏令时
        hasDST: true,
        //夏令时配置，夏令时于十月的第一个周日凌晨2点开始，到次年四月的第一个周日凌晨3点结束
        dstStartMonth: 9,
        dstStartIndex: 1,
        dstStartWeek: 0,
        dstStartHour: 2,
        dstEndMonth: 3,
        dstEndIndex: 1,
        dstEndWeek: 0,
        dstEndHour: 3,
      }],
      [36, {
        //id
        id: 36,
        //城市名称
        city: "惠灵顿",
        //国家名称
        countryName: "新西兰",
        //国家国旗图片url，不包括config前缀
        countryFlag: "flag/NZL.png",
        //时区
        timezone: 12,
        //是否有夏令时
        hasDST: true,
        //夏令时配置，9月最后一个星期日到4月第一个星期天
        dstStartMonth: 8,
        dstStartIndex: -1,
        dstStartWeek: 0,
        dstStartHour: 2,
        dstEndMonth: 3,
        dstEndIndex: 1,
        dstEndWeek: 0,
        dstEndHour: 3,
      }],

      //亚洲
      [6, {
        //id
        id: 6,
        //城市名称
        city: "东京",
        //国家名称
        countryName: "日本",
        //国家国旗图片url，不包括config前缀
        countryFlag: "flag/JPN.png",
        //时区
        timezone: 9,
        //是否有夏令时
        hasDST: false,
        //夏令时配置，起始于 某月第几个周几，以及具体时间
        dstStartMonth: 0,
        dstStartIndex: 0,
        dstStartWeek: 0,
        dstStartHour: 0,
        dstEndMonth: 0,
        dstEndIndex: 0,
        dstEndWeek: 0,
        dstEndHour: 0,
      }],
      [23, {
        //id
        id: 23,
        //城市名称
        city: "首尔",
        //国家名称
        countryName: "韩国",
        //国家国旗图片url，不包括config前缀
        countryFlag: "flag/KOR.png",
        //时区
        timezone: 9,
        //是否有夏令时
        hasDST: false,
        //夏令时配置，起始于 某月第几个周几，以及具体时间
        dstStartMonth: 0,
        dstStartIndex: 0,
        dstStartWeek: 0,
        dstStartHour: 0,
        dstEndMonth: 0,
        dstEndIndex: 0,
        dstEndWeek: 0,
        dstEndHour: 0,
      }],
      [3, {
        //id
        id: 3,
        //城市名称
        city: "新加坡市",
        //国家名称
        countryName: "新加坡",
        //国家国旗图片url，不包括config前缀
        countryFlag: "flag/SGP.png",
        //时区
        timezone: 8,
        //是否有夏令时
        hasDST: false,
        //夏令时配置，起始于 某月第几个周几，以及具体时间
        dstStartMonth: 0,
        dstStartIndex: 0,
        dstStartWeek: 0,
        dstStartHour: 0,
        dstEndMonth: 0,
        dstEndIndex: 0,
        dstEndWeek: 0,
        dstEndHour: 0,
      }],
      [4, {
        //id
        id: 4,
        //城市名称
        city: "迪拜",
        //国家名称
        countryName: "阿联酋",
        //国家国旗图片url，不包括config前缀
        countryFlag: "flag/ARE.png",
        //时区
        timezone: 4,
        //是否有夏令时
        hasDST: false,
        //夏令时配置，起始于 某月第几个周几，以及具体时间
        dstStartMonth: 0,
        dstStartIndex: 0,
        dstStartWeek: 0,
        dstStartHour: 0,
        dstEndMonth: 0,
        dstEndIndex: 0,
        dstEndWeek: 0,
        dstEndHour: 0,
      }],
      [27, {
        //id
        id: 27,
        //城市名称
        city: "曼谷",
        //国家名称
        countryName: "泰国",
        //国家国旗图片url，不包括config前缀
        countryFlag: "flag/THA.png",
        //时区
        timezone: 7,
        //是否有夏令时
        hasDST: false,
        //夏令时配置，起始于 某月第几个周几，以及具体时间
        dstStartMonth: 0,
        dstStartIndex: 0,
        dstStartWeek: 0,
        dstStartHour: 0,
        dstEndMonth: 0,
        dstEndIndex: 0,
        dstEndWeek: 0,
        dstEndHour: 0,
      }],
      [10, {
        //id
        id: 10,
        //城市名称
        city: "孟买",
        //国家名称
        countryName: "印度",
        //国家国旗图片url，不包括config前缀
        countryFlag: "flag/IND.png",
        //时区
        timezone: 5.5,
        //是否有夏令时
        hasDST: false,
        //夏令时配置，起始于 某月第几个周几，以及具体时间
        dstStartMonth: 0,
        dstStartIndex: 0,
        dstStartWeek: 0,
        dstStartHour: 0,
        dstEndMonth: 0,
        dstEndIndex: 0,
        dstEndWeek: 0,
        dstEndHour: 0,
      }],
      [17, {
        //id
        id: 17,
        //城市名称
        city: "吉隆坡",
        //国家名称
        countryName: "马来西亚",
        //国家国旗图片url，不包括config前缀
        countryFlag: "flag/MYS.png",
        //时区
        timezone: 8,
        //是否有夏令时
        hasDST: false,
        //夏令时配置，起始于 某月第几个周几，以及具体时间
        dstStartMonth: 0,
        dstStartIndex: 0,
        dstStartWeek: 0,
        dstStartHour: 0,
        dstEndMonth: 0,
        dstEndIndex: 0,
        dstEndWeek: 0,
        dstEndHour: 0,
      }],
      [20, {
        //id
        id: 20,
        //城市名称
        city: "雅加达",
        //国家名称
        countryName: "印度尼西亚",
        //国家国旗图片url，不包括config前缀
        countryFlag: "flag/IDN.png",
        //时区
        timezone: 7,
        //是否有夏令时
        hasDST: false,
        //夏令时配置，起始于 某月第几个周几，以及具体时间
        dstStartMonth: 0,
        dstStartIndex: 0,
        dstStartWeek: 0,
        dstStartHour: 0,
        dstEndMonth: 0,
        dstEndIndex: 0,
        dstEndWeek: 0,
        dstEndHour: 0,
      }],
      [32, {
        //id
        id: 32,
        //城市名称
        city: "马尼拉",
        //国家名称
        countryName: "菲律宾",
        //国家国旗图片url，不包括config前缀
        countryFlag: "flag/PHL.png",
        //时区
        timezone: 8,
        //是否有夏令时
        hasDST: false,
        //夏令时配置，起始于 某月第几个周几，以及具体时间
        dstStartMonth: 0,
        dstStartIndex: 0,
        dstStartWeek: 0,
        dstStartHour: 0,
        dstEndMonth: 0,
        dstEndIndex: 0,
        dstEndWeek: 0,
        dstEndHour: 0,
      }],
      [34, {
        //id
        id: 34,
        //城市名称
        city: "耶路撒冷",
        //国家名称
        countryName: "以色列",
        //国家国旗图片url，不包括config前缀
        countryFlag: "flag/ISR.png",
        //时区
        timezone: 2,
        //是否有夏令时
        hasDST: true,
        //夏令时配置，三月份的最末的那个星期五2点，冬令时开始是每年十月份的最后的星期日2点
        dstStartMonth: 2,
        dstStartIndex: -1,
        dstStartWeek: 5,
        dstStartHour: 2,
        dstEndMonth: 10,
        dstEndIndex: -1,
        dstEndWeek: 0,
        dstEndHour: 2,
      }],
      [40, {
        //id
        id: 40,
        //城市名称
        city: "河内",
        //国家名称
        countryName: "越南",
        //国家国旗图片url，不包括config前缀
        countryFlag: "flag/VNM.png",
        //时区
        timezone: 7,
        //是否有夏令时
        hasDST: false,
        //夏令时配置，起始于 某月第几个周几，以及具体时间
        dstStartMonth: 0,
        dstStartIndex: 0,
        dstStartWeek: 0,
        dstStartHour: 0,
        dstEndMonth: 0,
        dstEndIndex: 0,
        dstEndWeek: 0,
        dstEndHour: 0,
      }],

      //南美
      [15, {
        //id
        id: 15,
        //城市名称
        city: "巴西利亚",
        //国家名称
        countryName: "巴西",
        //国家国旗图片url，不包括config前缀
        countryFlag: "flag/BRA.png",
        //时区
        timezone: -3,
        //是否有夏令时
        hasDST: false,
        //夏令时配置，起始于 某月第几个周几，以及具体时间
        dstStartMonth: 0,
        dstStartIndex: 0,
        dstStartWeek: 0,
        dstStartHour: 0,
        dstEndMonth: 0,
        dstEndIndex: 0,
        dstEndWeek: 0,
        dstEndHour: 0,
      }],
      [30, {
        //id
        id: 30,
        //城市名称
        city: "布伊诺斯艾利斯",
        //国家名称
        countryName: "阿根廷",
        //国家国旗图片url，不包括config前缀
        countryFlag: "flag/ARG.png",
        //时区
        timezone: -3,
        //是否有夏令时
        hasDST: false,
        //夏令时配置，起始于 某月第几个周几，以及具体时间
        dstStartMonth: 0,
        dstStartIndex: 0,
        dstStartWeek: 0,
        dstStartHour: 0,
        dstEndMonth: 0,
        dstEndIndex: 0,
        dstEndWeek: 0,
        dstEndHour: 0,
      }],

      //非洲
      [24, {
        //id
        id: 24,
        //城市名称
        city: "开普敦",
        //国家名称
        countryName: "南非",
        //国家国旗图片url，不包括config前缀
        countryFlag: "flag/ZAF.png",
        //时区
        timezone: 2,
        //是否有夏令时
        hasDST: false,
        //夏令时配置，起始于 某月第几个周几，以及具体时间
        dstStartMonth: 0,
        dstStartIndex: 0,
        dstStartWeek: 0,
        dstStartHour: 0,
        dstEndMonth: 0,
        dstEndIndex: 0,
        dstEndWeek: 0,
        dstEndHour: 0,
      }]
    ])
}