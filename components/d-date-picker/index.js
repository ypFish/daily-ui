/*
 * @Description: 
 * @Author: yp
 * @Date: 2021-03-08 10:57:31
 * @LastEditTime: 2022-04-11 16:33:01
 * @LastEditors: yp
 */
// components/d-coverpage/index.js

const {
  getZeroDate
} = require('../../common/utils/time-utils')

//获取封装的微信按键震动
const vibrateUtils = require('../../common/utils/vibrate-utils')

// const app = getApp()
let dragY = 0;

Component({

  options: {
    pureDataPattern: /^_/ // 指定所有 _ 开头的数据字段为纯数据字段
  },

  /**
   * 组件的属性列表
   */
  properties: {
    //弹窗是否可见
    visible: {
      type: Boolean,
      value: true,
      observer(visible) {
        if (visible) {
          this.setData({
            y: 0,
            loading: false
          });
        }
      },
    },
    //标题
    title: {
      type: String,
      value: ''
    },
    //取消按钮字体颜色
    cancelTextColor: {
      type: String,
      value: '#727986'
    },
    //确认按钮字体颜色
    confirmTextColor: {
      type: String,
      value: '#16A085'
    },

    //初始时间
    // preYear:{
    //   type:Number,
    //   value:0
    // },
    // //结束时间
    // nextYear:{
    //   type:Number,
    //   value:0
    // },

    //开始时间
    startTime: {
      type: Number,
      value: 0
    },
    //结束时间
    endTime: {
      type: Number,
      value: 0
    },

    //当前时间
    // currentTime:{
    //   type: Number,
    //   value: 0
    // },
    //选中的时间
    valueTime: {
      type: Number,
      value: 0
    },

    //模式（YMD:年月日模式，MD:月日模式）
    mode: {
      type: String,
      value: 'YMD'
    },

    //月份（0-11）
    month: {
      type: Number,
      value: -1
    },
    //日（0-31）
    day: {
      type: Number,
      value: -1
    },

  },

  /**
   * 组件的初始数据
   */
  data: {
    //可移动区域
    y: 0,
    loading: false,
    //当前初始索引数组
    value: [1, 3, 5],
    options: [
      [0],
      [0],
      [0]
    ],
    _resultValue: [-1, -1, -1],
    _lastValueTime: 0
  },

  //数据监听器
  observers: {
    // 'preYear,nextYear,currentTime' : function(preYear,nextYear,currentTime){
    //   let {valueTime} = this.data;
    //   valueTime = getZeroDate(new Date(valueTime)).getTime();

    //   if(preYear>=0&&nextYear>=0&&currentTime>0){
    //     this.updateOptionsAndValueByValueTime(valueTime);
    //   }
    // },
    'valueTime': function (valueTime) {
      const {
        startTime,
        endTime,
        _lastValueTime
      } = this.data;
      valueTime = getZeroDate(new Date(valueTime)).getTime();
      const startZeroTime = getZeroDate(new Date(startTime)).getTime();
      const endZeroTime = getZeroDate(new Date(endTime)).getTime();
      if (endZeroTime >= startZeroTime && valueTime >= startZeroTime && valueTime <= endZeroTime && valueTime > 0) {
        if (_lastValueTime !== valueTime) {
          // console.log('valuetime', valueTime)
          this.updateOptionsAndValueByValueTime(valueTime, startZeroTime, endZeroTime);
        }
      }
    },
    'month,day': function (month, day) {
      const {
        _resultValue
      } = this.data
      if (this.data.mode === 'MD' && month >= 0 && day >= 0 && (_resultValue[0] !== month || _resultValue[1] !== day)) {
        //避免2月29日的情况
        this.updateOptionsAndValueByMonthDay();
      }
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {

    /**
     * @description: 更新月日选择器列表
     * @param {*}
     * @return {*}
     */
    updateOptionsAndValueByMonthDay() {
      const {
        month,
        day
      } = this.data;

      const monthList = Array.from({
        length: 12
      }, (v, i) => {
        return String(i + 1).padStart(2, '0')
      });
      const monthValue = month

      const dayList = this.getDayListByYearMonth(month)
      let dayValue = day;
      if (dayValue >= dayList.length) {
        dayValue = dayList.length - 1
      }

      const options = [monthList, dayList];
      const value = [monthValue, dayValue];


      this.setData({
        options,
        _resultValue: value
      }, () => {
        this.setData({
          value
        })
      });
    },

    /**
     * @description: 根据选项值更新初始化列表
     * @param {*} curValue
     * @return {*}
     */
    updateOptionsAndValueByValue(curValue) {

      const {
        options,
        _resultValue,
        startTime,
        endTime,
      } = this.data;

      if (_resultValue[0] === curValue[0] && _resultValue[1] === curValue[1] && _resultValue[2] === curValue[2]) {
        return
      }

      const startDate = new Date(startTime);
      const endDate = new Date(endTime);

      let val = new Date(parseInt(options[0][curValue[0]]), parseInt(options[1][curValue[1]]) - 1, parseInt(options[2][curValue[2]]));

      //操作过于频繁，组件崩溃
      if (!val || !val.getTime()) {
        console.log('组件崩坏重置')
        val = startDate;
      }

      //边界判断
      if (val.getTime() < startTime) {
        val = startDate;
      } else if (val.getTime() > endTime) {
        val = endDate;
      }

      const valYear = val.getFullYear();
      const valMonth = parseInt(options[1][curValue[1]]) - 1

      let i = 0;


      if (_resultValue[0] !== curValue[0]) {
        //如果年变化，月份和日列表变化
        const monthList = [];
        let monthValue = curValue[1];
        const curMonth = parseInt(options[1][curValue[1]]);

        const startYear = startDate.getFullYear();
        const endYear = endDate.getFullYear();

        const valMonth = val.getMonth();
        const totalValMonth = valYear * 12 + valMonth;

        const startMonth = startDate.getMonth();
        const totalStartMonth = startYear * 12 + startMonth;

        const endMonth = endDate.getMonth();
        const totalEndMonth = endYear * 12 + endMonth;

        let valStartMonth = 1;
        let valEndMonth = 12;

        //月份差值比较
        if ((totalValMonth - totalStartMonth) >= valMonth) {
          valStartMonth = 1;
        } else {
          valStartMonth = 1 + startMonth;
        }

        if (((totalEndMonth - totalValMonth) >= (11 - valMonth))) {
          valEndMonth = 12;
        } else {
          valEndMonth = valMonth + 1 + totalEndMonth - totalValMonth;
        }
        //初始化月份列表
        i = 0;
        for (let month = valStartMonth; month <= valEndMonth; month++) {
          monthList.push(String(month).padStart(2, '0'))
          if (curMonth === month) {
            monthValue = i;
          }
          i++;
        }
        //重新初始化月份值
        if (curMonth > valEndMonth) {
          monthValue = monthList.length - 1;
        } else if (curMonth < valStartMonth) {
          monthValue = 0;
        }


        //初始化日列表
        const dayList = [];
        let dayValue = curValue[2];
        const curDay = parseInt(options[2][curValue[2]]);

        const valDay = val.getDate();

        const startDiffDays = Math.floor((val.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
        const endDiffDays = Math.floor((endDate.getTime() - val.getTime()) / (1000 * 60 * 60 * 24));

        let monthDayNumber = this.getDayNumberByYearMonth(valMonth, valYear)

        let startValDay = 1;
        let endValDay = monthDayNumber;

        if (startDiffDays >= valDay - 1) {
          startValDay = 1;
        } else {
          startValDay = valDay - startDiffDays;
        }

        if (endDiffDays >= monthDayNumber - valDay) {
          endValDay = monthDayNumber;
        } else {
          endValDay = valDay + endDiffDays;
        }

        i = 0;
        for (let day = startValDay; day <= endValDay; day++) {
          dayList.push(String(day).padStart(2, '0'))
          if (curDay === day) {
            dayValue = i;
          }
          i++;
        }

        //重新初始化月份值
        if (curDay > endValDay) {
          dayValue = dayList.length - 1;
        } else if (curDay < startValDay) {
          dayValue = 0;
        }

        options[1] = monthList;
        options[2] = dayList;

        curValue[1] = monthValue;
        curValue[2] = dayValue;


        this.setData({
          options,
          _resultValue: curValue,
          value: curValue
        }, () => {
          this.setData({
            value: curValue
          })
        });


      } else if (_resultValue[1] !== curValue[1]) {
        //如果月变换，日列表变化

        //初始化日列表
        const dayList = [];
        let dayValue = curValue[2];
        const curDay = parseInt(options[2][curValue[2]]);

        const valDay = val.getDate();

        const startDiffDays = Math.floor((val.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
        const endDiffDays = Math.floor((endDate.getTime() - val.getTime()) / (1000 * 60 * 60 * 24));

        let monthDayNumber = this.getDayNumberByYearMonth(valMonth, valYear)

        let startValDay = 1;
        let endValDay = monthDayNumber;

        if (startDiffDays >= valDay - 1) {
          startValDay = 1;
        } else {
          startValDay = valDay - startDiffDays;
        }

        if (endDiffDays >= monthDayNumber - valDay) {
          endValDay = monthDayNumber;
        } else {
          endValDay = valDay + endDiffDays;
        }

        i = 0;
        for (let day = startValDay; day <= endValDay; day++) {
          dayList.push(String(day).padStart(2, '0'))
          if (curDay === day) {
            dayValue = i;
          }
          i++;
        }
        //重新初始化月份值
        if (curDay > endValDay) {
          dayValue = dayList.length - 1;
        } else if (curDay < startValDay) {
          dayValue = 0;
        }

        options[2] = dayList;
        curValue[2] = dayValue;

        this.setData({
          options,
          _resultValue: curValue,
          value: curValue
        }, () => {
          this.setData({
            value: curValue
          })
        });

      } else {
        this.setData({
          options,
          _resultValue: curValue,
          value: curValue
        });
      }
    },



    /**
     * @description: 根据valueTime更新选项和值
     * @param {*}
     * @return {*}
     */
    updateOptionsAndValueByValueTime(valueTime, startTime, endTime) {

      const val = getZeroDate(new Date(valueTime))
      const startDate = getZeroDate(new Date(startTime));
      const endDate = getZeroDate(new Date(endTime));
      const valYear = val.getFullYear();
      const valMonth = val.getMonth();

      //初始化年选项和值
      let yearValue = 0;
      const yearList = [];

      let startYear = startDate.getFullYear();
      let endYear = endDate.getFullYear();

      let i = 0;
      for (let year = startYear; year <= endYear; year++) {
        yearList.push(year)
        if (year === valYear) {
          yearValue = i;
        }
        i++;
      }

      //初始化月份选项和值
      const monthList = [];
      let monthValue = 0;

      const totalValMonth = valYear * 12 + valMonth;

      const startMonth = startDate.getMonth();
      const totalStartMonth = startYear * 12 + startMonth;

      const endMonth = endDate.getMonth();
      const totalEndMonth = endYear * 12 + endMonth;

      let valStartMonth = 1;
      let valEndMonth = 12;

      //月份差值比较
      if ((totalValMonth - totalStartMonth) >= valMonth) {
        valStartMonth = 1;
      } else {
        valStartMonth = 1 + startMonth;
      }

      if (((totalEndMonth - totalValMonth) >= (11 - valMonth))) {
        valEndMonth = 12;
      } else {
        valEndMonth = valMonth + 1 + totalEndMonth - totalValMonth;
      }

      i = 0;

      for (let month = valStartMonth; month <= valEndMonth; month++) {
        monthList.push(String(month).padStart(2, '0'))
        if (month === valMonth + 1) {
          monthValue = i;
        }
        i++;
      }

      //初始化日和值
      let dayValue = 0;
      const dayList = [];

      const valDay = val.getDate();

      const startDiffDays = Math.floor((val.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
      const endDiffDays = Math.floor((endDate.getTime() - val.getTime()) / (1000 * 60 * 60 * 24));

      let monthDayNumber = this.getDayNumberByYearMonth(valMonth, valYear)

      let startValDay = 1;
      let endValDay = monthDayNumber;

      if (startDiffDays >= valDay - 1) {
        startValDay = 1;
      } else {
        startValDay = valDay - startDiffDays;
      }

      if (endDiffDays >= monthDayNumber - valDay) {
        endValDay = monthDayNumber;
      } else {
        endValDay = valDay + endDiffDays;
      }

      i = 0;
      for (let day = startValDay; day <= endValDay; day++) {
        dayList.push(String(day).padStart(2, '0'))
        if (day === valDay) {
          dayValue = i;
        }
        i++;
      }

      const value = [yearValue, monthValue, dayValue];
      const options = [yearList, monthList, dayList];

      this.setData({
        options,
        _resultValue: value,
        _lastValueTime: valueTime,
        startTime: startTime,
        endTime: endTime
      }, () => {
        this.setData({
          value
        })
      });
    },

    getDayNumberByYearMonth(month, year = -1) {
      let dayNumber = 0;
      switch (month) {
        case 0:
        case 2:
        case 4:
        case 6:
        case 7:
        case 9:
        case 11:
          dayNumber = 31;
          break;
        case 3:
        case 5:
        case 8:
        case 10:
          dayNumber = 30;
          break;
        case 1:
          if (year > 0 && (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0)) {
            dayNumber = 29;
          } else {
            dayNumber = 28;
          }
          break;
        default:
          dayNumber = 0
      }
      return dayNumber;
    },

    /**
     * @description: 根据年和月获取到 日列表
     * @param {*} month 月（0-11）
     * @param {*} year 年（1-n）
     * @return {*}
     */
    getDayListByYearMonth(month, year = -1) {
      let dayList = [];
      switch (month) {
        case 0:
        case 2:
        case 4:
        case 6:
        case 7:
        case 9:
        case 11:
          dayList = Array.from({
            length: 31
          }, (v, i) => {
            return String(i + 1).padStart(2, '0')
          })
          break;
        case 3:
        case 5:
        case 8:
        case 10:
          dayList = Array.from({
            length: 30
          }, (v, i) => {
            return String(i + 1).padStart(2, '0')
          })
          break;
        case 1:
          if (year > 0 && (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0)) {
            dayList = Array.from({
              length: 29
            }, (v, i) => {
              return String(i + 1).padStart(2, '0')
            })
          } else {
            dayList = Array.from({
              length: 28
            }, (v, i) => {
              return String(i + 1).padStart(2, '0')
            })
          }
          break;
        default:
          dayList = [];
      }
      return dayList;
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
     * 处理触摸滚动问题
     */
    handleCatchTouchMove() {
      return false;
    },

    /**
     * @description: 关闭弹窗
     * @param {*}
     * @return {*}
     */
    onClose() {
      this.setData({
        visible: false
      });
      this.triggerEvent(
        'onClose', {}, {}
      )
    },

    /**
     * @description: 拖动事件回调
     * @param {*} e
     * @return {*}
     */
    dragMove(e) {
      dragY = e.detail.y;
    },

    /**
     * @description: 触摸结束事件回调
     * @param {*} e
     * @return {*}
     */
    toucheEnd() {
      if (dragY < 70) {
        this.setData({
          y: 0
        })
      } else {
        this.onClose();
      }
      dragY = 0;
    },

    /**
     * @description: 选择器开始转动
     * @param {*}
     * @return {*}
     */
    pickerStart() {
      this.setData({
        loading: true
      })
    },

    /**
     * @description: 选择器停止转动
     * @param {*}
     * @return {*}
     */
    pickerEnd() {
      this.setData({
        loading: false
      })
    },

    /**
     * @description: 选择器停止转动值改变时
     * @param {*} e
     * @return {*}
     */
    pickerChanged(e) {
      const {
        value
      } = e.detail;
      const {
        options,
        mode,
        _resultValue
      } = this.data;

      if (mode === 'MD') {
        let curOptions = options;
        let curValue = value;

        //月日模式
        if (value[0] !== _resultValue[0]) {

          const dayList = this.getDayListByYearMonth(parseInt(value[0]), -1);
          const orginDayList = this.getDayListByYearMonth(parseInt(_resultValue[0]), -1);
          if (orginDayList.length !== dayList.length) {
            let dayValue = value[1]
            if (dayValue >= dayList.length) {
              dayValue = dayList.length - 1
            }
            curOptions[1] = dayList;
            curValue[1] = dayValue;
          }
        }

        this.setData({
          options,
          _resultValue: curValue,
          value: curValue
        });

      } else {
        //年月日模式
        this.updateOptionsAndValueByValue(value);
      }

    },

    /**
     * @description: 根据选项和值将结果转化为时间戳
     * @param {*}
     * @return {*}
     */
    convertValueToStamp() {
      const {
        options,
        _resultValue
      } = this.data;
      const year = parseInt(options[0][_resultValue[0]]);
      const month = parseInt(options[1][_resultValue[1]]) - 1;
      const day = parseInt(options[2][_resultValue[2]]);
      return (new Date(year, month, day)).getTime();
    },

    /**
     * @description: 确认选择
     * @param {*}
     * @return {*}
     */
    onConfirm() {

      //震动
      vibrateUtils.vibrate();

      const {
        loading,
        mode,
        _resultValue
      } = this.data;
      if (loading) {
        return false;
      }
      this.onClose();
      if (mode === 'MD') {
        //月日模式
        this.triggerEvent('onConfirm', {
          'value': _resultValue
        }, {})
      } else {
        const result = this.convertValueToStamp();
        this.triggerEvent('onConfirm', {
          'value': result
        }, {})
        this.setData({
          _lastValueTime: result
        })
      }

    },
  }
})