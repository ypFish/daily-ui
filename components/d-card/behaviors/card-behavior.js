/*
 * @Description: 
 * @Author: yp
 * @Date: 2021-09-06 17:59:50
 * @LastEditTime: 2022-02-06 17:04:23
 * @LastEditors: yp
 */

// 卡片组件通用属性
const D_CARD_PROPERTIES = {
  //id，纯数据字段
  _id: {
    type: Number,
    value: 0
  },
  //标题
  title: {
    type: String,
    value: ''
  },
  //描述
  desc: {
    type: String,
    value: ''
  },
  //图标名称
  iconName: {
    type: String,
    value: ''
  },
  //图标大小
  iconSize: {
    type: Number,
    value: 0
  },
  //图标底部顶起高度（部分图标居中后视觉靠下，需要设置padding-bottom抬高）
  iconBottom: {
    type: Number,
    value: 0
  },
  //是否为loading状态
  // loading: {
  //   type: Boolean,
  //   value: true
  // },
  //锚点类名
  archorClz: {
    type: String,
    value: ''
  },
  //是否为空
  // empty: {
  //   type: Boolean,
  //   value: false
  // },
  //是否隐藏分割线
  gapHidden: {
    type: Boolean,
    value: false
  },
  //配置组件名称，纯数据字段
  _comp: {
    type: String,
    value: ""
  },
  //错误状态
  // error: {
  //   type: Boolean,
  //   value: false
  // },
  //卡片状态（2:空数据，1:正常，0:等待，-1:错误）
  status: {
    type: Number,
    value: 1
  },
  //卡片在app.globalData.cardList中的位置（纯数据字段）
  // _idx: {
  //   type: Number,
  //   value: -1
  // }
  // 组件所在页面标示，如在分享页中：from=share
  from: {
    type: String,
    value: ''
  },
  shareId: {
    type: String,
    value: ''
  }

}

//卡片组件 属性值
module.exports.dCardBehavior = Behavior({
  properties: {
    ...D_CARD_PROPERTIES
  }
})