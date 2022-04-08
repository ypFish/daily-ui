/*
 * @Description: 
 * @Author: yp
 * @Date: 2021-04-18 09:42:57
 * @LastEditTime: 2022-04-08 16:57:57
 * @LastEditors: yp
 */
// pages/set/set.js

const app = getApp();

Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

    //页面基础信息
    baseInfo: {
      //unionId
      unionid: "",
      //用户头像
      nickName: "",
      //用户昵称
      avatarUrl: "",
      //用户是否授权
      userInfo: {
        authorize: 0
      },
    },
    //卡片配置列表
    cardList: [],
    //调整顺序卡片列表
    cardListForSort: [],
    //调整顺序全页配置开关
    sortCoverPageVisible: false,
    //聚焦状态
    focusIdx: -1,

    //位置列表
    _positionList: [],

    //基础信息同步完成时间戳（内容包含：用户选取的卡片[不含卡片数据]、用户信息、订阅信心、基础配置信息）
    _baseInfoSyncTime: app.globalData.baseInfoSyncTime,

    //所有卡片数据同步完成完成
    _cardInfoSyncTime: app.globalData.cardInfoSyncTime,

    //跳转顺序弹窗页
    coverPageLoading: false
  },

  /**
   * 组件的方法列表
   */
  methods: {

    onLoad: function () {

    },


  }

})