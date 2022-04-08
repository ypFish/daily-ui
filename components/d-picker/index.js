/*
 * @Description:
 * @Author: yp
 * @Date: 2021-03-08 10:57:31
 * @LastEditTime: 2022-02-07 18:10:06
 * @LastEditors: yp
 */
// components/d-picker/index.js

//获取封装的微信按键震动
const vibrateUtils = require('../../common/utils/vibrate-utils')

let dragY = 0

Component({
  options: {
    pureDataPattern: /^_/, // 指定所有 _ 开头的数据字段为纯数据字段
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
          const defaultValue = this.data.value
          if (!this.data.value || this.data.value.length <= 0) {
            if (this.data.options && this.data.options.length > 0) {
              defaultValue.length = this.data.options.length
              defaultValue.fill(0)
            }
          }
          this.setData({
            y: 0,
            loading: false,
            value: defaultValue,
          })
        }
      },
    },
    //标题
    title: {
      type: String,
      value: '',
    },
    //取消按钮字体颜色
    cancelTextColor: {
      type: String,
      value: '#727986',
    },
    //确认按钮字体颜色
    confirmTextColor: {
      type: String,
      value: '#16A085',
    },
    //当前初始索引数组
    value: {
      type: Array,
      value: [],
      observer(value) {
        this.setData({
          _resultValue: value,
        })
      },
    },
    options: {
      type: Array,
      value: [],
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    //可移动区域
    y: 0,
    loading: false,

    _resultValue: [],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * 处理触摸滚动问题
     */
    handleCatchTouchMove() {
      return false
    },

    /**
     * @description: 关闭弹窗
     * @param {*}
     * @return {*}
     */
    onClose() {
      this.setData({
        visible: false,
      })
      this.triggerEvent('onClose', {}, {})
    },

    /**
     * @description: 拖动事件回调
     * @param {*} e
     * @return {*}
     */
    dragMove(e) {
      dragY = e.detail.y
    },

    /**
     * @description: 触摸结束事件回调
     * @param {*} e
     * @return {*}
     */
    toucheEnd() {
      if (dragY < 70) {
        this.setData({
          y: 0,
        })
      } else {
        this.onClose()
      }
      dragY = 0
    },

    /**
     * @description: 选择器开始转动
     * @param {*}
     * @return {*}
     */
    pickerStart() {
      this.setData({
        loading: true,
      })
    },

    /**
     * @description: 选择器停止转动
     * @param {*}
     * @return {*}
     */
    pickerEnd() {
      this.setData({
        loading: false,
      })
    },

    pickerChanged(e) {
      const {
        value
      } = e.detail
      this.setData({
        _resultValue: value,
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
        _resultValue
      } = this.data
      if (loading) {
        return false
      }
      this.onClose()

      //将选中信息返回调用者
      this.triggerEvent('onConfirm', {
        value: _resultValue
      }, {})
    },
  },
})