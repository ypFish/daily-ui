/*
 * @Description: 
 * @Author: yp
 * @Date: 2021-03-24 11:02:16
 * @LastEditTime: 2022-02-14 16:49:20
 * @LastEditors: yp
 */
// components/d-notify/index.js
let _timer = null;

//获取封装的微信按键震动
const vibrateUtils = require('../../common/utils/vibrate-utils')

//抽象模式
const MODE = {
  0: {
    //失败模式
    title: "同步失败，请重试",
    visible: true,
    iconType: 2,
    colorType: 1
  },
  1: {
    //成功模式
    title: "同步成功",
    visible: true,
    iconType: 1,
    colorType: 0
  },
  2: {
    //查询失败模式
    title: "查询失败，请输入有效信息",
    visible: true,
    iconType: 2,
    colorType: 1
  },
  3: {
    //保存成功模式
    title: "保存成功",
    visible: true,
    iconType: 1,
    colorType: 0
  },
  4: {
    //保存失败模式
    title: "保存失败，请重试",
    visible: true,
    iconType: 2,
    colorType: 1
  },
  5: {
    //保存失败模式
    title: "提交失败，请输入有效信息",
    visible: true,
    iconType: 2,
    colorType: 1
  },
  6: {
    //超过规定额度
    title: "操作失败，超过限定范围",
    visible: true,
    iconType: 2,
    colorType: 1
  },
  7: {
    // canvas生成图片并保存
    title: "已保存到相册",
    visible: true,
    iconType: 1,
    colorType: 0
  },
  8: {
    // canvas生成图片保存失败
    title: "操作失败，请重试",
    visible: true,
    iconType: 2,
    colorType: 1
  },
  9: {
    // 未授权，无法保存到相册
    title: "未授权添加到相册，请设置",
    visible: true,
    iconType: 2,
    colorType: 1,
    during: 2500
  },
  10: {
    // 删除掉最后一个启用的卡片
    title: "请保留至少一项卡片启用",
    visible: true,
    iconType: 2,
    colorType: 1
  },
  11: {
    //授权失败，无法完成后续动作
    title: "授权失败，请重试",
    visible: true,
    iconType: 2,
    colorType: 1,
    during: 2500
  },
  12: {
    //token验证失败
    title: "提交失败，当前卡片已失效",
    visible: true,
    iconType: 2,
    colorType: 1,
    during: 2500
  },
  13: {
    //从分享页填写生日记录，达到卡片拥有者生日记录上限
    title: "很遗憾，生日记录已至上限",
    visible: true,
    iconType: 2,
    colorType: 1,
    during: 2500
  },
  14: {
    //当用户之前已经填写过，之后再填写
    title: "提交失败，您已提交过记录",
    visible: true,
    iconType: 2,
    colorType: 1,
    during: 2500
  }
};

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //标题
    title: {
      type: String,
      value: ''
    },
    //是否可见
    visible: {
      type: Boolean,
      value: false
    },
    //持续毫秒数
    during: {
      type: Number,
      value: 1500
    },
    //颜色类型
    colorType: {
      type: Number,
      value: 0
    },
    //图标类型
    iconType: {
      type: Number,
      value: 0
    },
    //抽象模式
    mode: {
      type: Number,
      value: -1,
      observer(mode) {
        if (mode >= 0 && MODE[mode]) {
          this.setData({
            ...MODE[mode],
          })
        }
      }
    }
  },

  observers: {
    "visible": function (visible) {
      const {
        during
      } = this.data;
      if (visible) {
        if (_timer) {
          clearTimeout(_timer)
          _timer = null;
        }
        _timer = setTimeout(() => {
          const {
            visible
          } = this.data
          if (visible) {
            this.setData({
              visible: false,
              mode: -1
            })
          }
          clearTimeout(_timer)
          _timer = null;
        }, during)
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    colorItem: [
      "#16A085",
      "#EC492C"
    ],
    iconItem: [{
        name: "gonggao",
        size: 30,
      },
      {
        name: "biaoqing_3",
        size: 32,
      },
      {
        name: "biaoqing_2",
        size: 32,
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    closeNotify() {
      const {
        visible
      } = this.data;
      if (visible) {
        //震动
        vibrateUtils.vibrate();

        this.setData({
          visible: false,
          mode: -1
        })
        if (_timer) {
          clearTimeout(_timer)
          _timer = null;
        }

      }
    }
  }
})