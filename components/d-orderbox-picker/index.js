/*
 * @Description: 
 * @Author: yp
 * @Date: 2021-03-08 10:57:31
 * @LastEditTime: 2022-08-18 14:52:02
 * @LastEditors: yp
 */
const app = getApp()
let dragY = 0;

//获取封装的微信按键震动
const vibrateUtils = require('../../common/utils/vibrate-utils')

Component({

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
          const defaultValue = this.data.value;
          if (!this.data.value || this.data.value.length <= 0) {
            if (this.data.options && this.data.options.length > 0) {
              defaultValue.length = this.data.options.length;
              defaultValue.fill(false);
              console.log('defaultValue', defaultValue)
            }
          }
          this.setData({
            y: 0,
            loading: false,
            value: defaultValue
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
    //选项文本颜色
    lineTextColor: {
      type: String,
      value: '#444444'
    },
    //当前初始索引数组
    value: {
      type: Array,
      value: [],
      observer(value) {
        const resultValue = {};
        value.forEach((item, index) => {
          resultValue[item] = index
        })
        this.setData({
          resultValue
        })
      }
    },
    options: {
      type: Array,
      value: []
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    y: 0,
    //可移动区域
    loading: false,
    resultValue: {},
    lineHeightRpx: 110,
    lineContainerHeightRpx: 330,
    propHeightRpx: 430,
    propTopRpx: 1000,
    //是否可以移动弹窗进行关闭
    moveDisable: true,
  },

  //数据监听器
  observers: {
    'options': function (options) {
      this.init(options);
    },

  },
  /**
   * 组件的方法列表
   */
  methods: {

    /**
     * @description: 初始化弹窗高度及位置
     * @param {*}
     * @return {*}
     */
    init(options) {
      const {
        lineHeightRpx
      } = this.data
      let realLine = options.length;
      let moveDisable = false;
      if (realLine < 3) {
        realLine = 3;
      } else if (realLine > 7) {
        realLine = 7.5
        moveDisable = true
      }

      //滚动区域高度
      const lineContainerHeightRpx = lineHeightRpx * realLine;
      //弹窗高度 (头部高度+)
      const propHeightRpx = 100 + lineContainerHeightRpx;
      //px和rpx换算比
      const pixelRatio = 750 / app.globalData.screenWidth
      //弹窗位置高度
      const propTopRpx = Math.ceil(app.globalData.screenHeight * pixelRatio - propHeightRpx)

      this.setData({
        lineContainerHeightRpx,
        propHeightRpx,
        propTopRpx,
        moveDisable
      })

    },


    /**
     * @description: 执行复选
     * @param {*} e
     * @return {*}
     */
    lineSelect(e) {
      //震动
      vibrateUtils.vibrate();
      const {
        resultValue
      } = this.data;
      let idx = e.currentTarget.dataset.idx
      idx = Number(idx)
      if (isNaN(idx)) {
        return;
      }

      if (resultValue[idx] === undefined) {
        resultValue[idx] = Object.keys(resultValue).length;
      } else {
        const indexValue = resultValue[idx] || 0;
        delete resultValue[idx];
        for (const [key, value] of Object.entries(resultValue)) {
          if (value > indexValue) {
            resultValue[key] = value - 1;
          }
        }
      }

      this.setData({
        resultValue
      })

    },

    /**
     * @description: 拖动事件回调
     * @param {*} e
     * @return {*}
     */
    dragMove(e) {
      if (this.data.moveDisable === true) {
        return
      }
      dragY = e.detail.y;
    },

    /**
     * @description: 触摸结束事件回调
     * @param {*} e
     * @return {*}
     */
    toucheEnd() {
      if (this.data.moveDisable === true) {
        return
      }
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
      })
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
        resultValue
      } = this.data;
      if (loading) {
        return false;
      }
      this.onClose();

      let result = [];
      for (const [key, value] of Object.entries(resultValue)) {
        if (!isNaN(Number(key))) {
          result[value] = Number(key);
        }

      }
      result = result.filter(item => {
        if (isNaN(item)) {
          return false;
        }
        return true;
      })

      console.log('result', result);

      this.triggerEvent('onConfirm', {
        'value': result
      }, {})

    },
  }
})