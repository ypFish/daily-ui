/*
 * @Description: 
 * @Author: yp
 * @Date: 2021-03-08 10:57:31
 * @LastEditTime: 2021-10-15 18:23:38
 * @LastEditors: yp
 */

//获取封装的微信按键震动
const vibrateUtils = require('../../common/utils/vibrate-utils')

const app = getApp()
let dragY = 0;

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
          this.setData({
            y: 0,
            loading: false,
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
    //选项
    options: {
      type: Array,
      value: []
    },
    //设置显示行数
    lineNumber: {
      type: Number,
      value: 8.5
    },
    //是否展示右侧图标
    showIcon: {
      type: Boolean,
      value: true
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    y: 0,
    //可移动区域
    loading: false,
    // resultValue:-1,
    lineHeightRpx: 120,
    lineContainerHeightRpx: 360,
    propHeightRpx: 430,
    propTopRpx: 1000,
    //是否可以移动弹窗进行关闭
    moveDisable: true,
  },

  /**
   * 生命周期函数
   */
  lifetimes: {
    attached: function () {
      // 在组件实例进入页面节点树时执行
      this.init();
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
    init() {

      const {
        lineHeightRpx,
        lineNumber
      } = this.data

      let realLine = lineNumber;
      let moveDisable = true;

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
      
      const idx = e.currentTarget.dataset.idx
      this.triggerEvent('onConfirm', {
        'value': idx
      }, {})
      this.onClose();
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
    }
  }
})