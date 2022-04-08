/*
 * @Description: 
 * @Author: yp
 * @Date: 2021-03-07 17:21:27
 * @LastEditTime: 2021-03-07 17:38:47
 * @LastEditors: yp
 */
// components/d-mask/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    visible: {
      type: Boolean,
      value: true,
    },
    maskCancel: {
      type: Boolean,
      value: true,
    },
    zIndex: {
      type: Number,
      value: 100,
    },
    opacity: {
      type: Number,
      value: 0.6,
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    maskStyles: '',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleClick() {
      const { visible } = this.data;
      const { maskCancel } = this.data;
      if (!maskCancel) return false; // 如果用户没开则退出
      this.triggerEvent(
        'onClose',
        {
          visible,
        },
        {}
      );
    },
    /**
     * 处理触摸滚动问题
     */
    handleCatchTouchMove() {
      return false;
    },
  },
  ready: function() {
    const { zIndex, opacity } = this.data;
    let maskStyles = '';
    maskStyles += `z-index: ${zIndex}; background: rgba(0, 0, 0, ${opacity});`;
    this.setData({
      maskStyles,
    });
  },
})
