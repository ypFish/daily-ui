/*
 * @Description: 
 * @Author: yp
 * @Date: 2021-03-08 10:57:31
 * @LastEditTime: 2022-03-01 13:51:12
 * @LastEditors: yp
 */
// components/d-coverpage/index.js
let touchY = 0;
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
            y: 0
          });
        }
      },
    },
    //标题
    title: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    //导航栏相关位置信息
    // navHeight: app.globalData.navInfo.navHeight,
    // menuLeft: app.globalData.navInfo.menuLeft,
    // menuTop: app.globalData.navInfo.menuTop,
    // menuHeight : app.globalData.navInfo.menuHeight,
    // menuWidth: app.globalData.navInfo.menuWidth

    //可移动区域
    y: 0,
  },

  /**
   * 组件的方法列表
   */
  methods: {

    /**
     * 处理触摸滚动问题
     */
    handleCatchTouchMove() {
      return false;
    },

    onClose() {
      this.setData({
        visible: false
      })
    },

    touchStart(e) {
      console.log(e);
      touchY = e.changedTouches[0].clientY
    },

    toucheEnd(e) {
      console.log(e);
      const moveY = e.changedTouches[0].clientY - touchY;
      touchY = 0;
      if (moveY < 85) {
        this.setData({
          y: 0
        })
      } else {
        this.onClose();
      }

    }
  }
})