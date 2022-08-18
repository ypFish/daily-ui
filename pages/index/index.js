/*
 * @Description: 
 * @Author: yp
 * @Date: 2021-04-18 09:42:57
 * @LastEditTime: 2022-08-18 15:18:09
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

    //展开按钮
    spread: false,
    //全页弹窗展示
    pageLoading: false,

    //底部弹窗选择器
    pickShow: false,
    pickerValue: [2, 2],
    pickerOptions: [
      ['红色', '绿色', '黄色', '白色', '紫色', '黑色', '橙色'],
      ['宝石', '珍珠', '翡翠', '玛瑙', '珊瑚', '钻石']
    ],

    listPickerShow: false,
    listValue: 0,
    //支持两种列表数据类型（数组列表和对象列表）
    listOptions: [{
        title: "巴黎",
        desc: "法兰西共和国的首都，也是法国的政治和商业中心"
      },
      {
        title: "华盛顿",
        desc: "华盛顿哥伦比亚特区，美利坚合众国的首都"
      },
      {
        title: "伦敦",
        desc: "大不列颠及北爱尔兰联合王国首都，世界金融中心"
      },
      {
        title: "伊斯坦布尔",
        desc: "原名君士坦丁堡，是土耳其经济、文化、交通中心"
      },
      {
        title: "巴西利亚",
        desc: "巴西联邦共和国首都，是巴西第四大城市"
      },
      {
        title: "东京",
        desc: "日本首都，是面向东京湾的国际大都市"
      },
      {
        title: "巴塞罗那",
        desc: "位于伊比利亚半岛东北部，濒临地中海，是西班牙第二大城市"
      },
      {
        title: "慕尼黑",
        desc: "也称明兴，是德国巴伐利亚州的首府"
      },
      {
        title: "悉尼",
        desc: "位于澳大利亚的东南沿岸，是澳大利亚新南威尔士州的首府"
      },
      {
        title: "布宜诺斯艾利斯",
        desc: "阿根廷的首都和最大城市"
      },
      {
        title: "莫斯科",
        desc: "是俄罗斯联邦首都、莫斯科州首府"
      }
    ],


    checkboxPickerShow: false,
    chekboxValue: [1, 3, 4],
    chekboxOptions: [
      "美国·华盛顿",
      "英国·伦敦",
      "法国·巴黎",
      "土耳其·伊斯坦布尔",
      "巴西·巴西利亚",
      "日本·东京",
      "西班牙·巴塞罗那",
      "韩国·汉城",
      "澳大利亚·悉尼",
      "阿根廷·布宜诺斯艾利斯",
      "意大利·都灵",
      "俄罗斯·莫斯科",
    ],

    orderboxPickerShow: false,
    orderboxValue: [5, 3, 1, 2],
    orderboxOptions: [
      "美国·华盛顿",
      "英国·伦敦",
      "法国·巴黎",
      "土耳其·伊斯坦布尔",
      "巴西·巴西利亚",
      "日本·东京",
      "西班牙·巴塞罗那",
      "韩国·汉城",
      "澳大利亚·悉尼",
      "阿根廷·布宜诺斯艾利斯",
      "意大利·都灵",
      "俄罗斯·莫斯科",
    ],

    datePickerShow: false,
    startTime: 1,
    endTime: 1,
    valueTime: -1,

    datePickerMDShow: false,
    month: -1,
    day: -1,

    dialogShow: false,
    dialogConfirm: true,

    notifyVisible: false,
    iconType: 0,
    colorType: 0,
    notifyTitle: "通知",

    demo: -1,

    //关于组件库
    businessListOptions: [{
        title: "项目地址",
        desc: "github：https://github.com/ypFish/daily-ui"
      },
      {
        title: "联系作者",
        desc: "wechat：yp-fish"
      }
    ],

  },

  /**
   * 组件的方法列表
   */
  methods: {

    onShow: function () {

      const current = new Date();
      const valueTime = +new Date();
      const startTime = +new Date(current.getFullYear() - 1, current.getMonth(), current.getDate());
      const endTime = +new Date(current.getFullYear() + 1, current.getMonth(), current.getDate());

      const month = current.getMonth();
      const day = current.getDate() - 1;

      this.setData({
        valueTime,
        startTime,
        endTime,
        month,
        day
      })
    },

    handleSpreadButtonTap() {
      this.spread = !this.spread;
      this.setData({
        spread: this.spread
      })
    },

    handleCoverPageLoading() {
      this.setData({
        pageLoading: true
      }, setTimeout(() => {
        this.setData({
          pageLoading: false
        })
      }, 1200))
    },

    handlePickerConfirm(e) {
      this.setData({
        pickerValue: [e.detail.value[0], e.detail.value[1]]
      })
    },

    handleListConfirm(e) {
      this.setData({
        listValue: e.detail.value
      })
    },

    handleCheckboxConfirm(e) {
      this.setData({
        chekboxValue: e.detail.value
      })
    },

    handleOrderboxConfirm(e) {
      this.setData({
        orderboxValue: e.detail.value
      })
    },

    handleDatePickerConfirm(e) {
      this.setData({
        valueTime: e.detail.value
      })
    },

    handleDatePickerMDConfirm(e) {
      this.setData({
        month: e.detail.value[0],
        day: e.detail.value[1]
      })
    },

    handleDialogShow() {
      this.setData({
        dialogShow: true
      })
    },

    handleDialogConfirm(e) {
      this.setData({
        dialogConfirm: e.detail.value
      })
    },

    handleNotify() {
      this.setData({
        notifyTitle: "操作成功！",
        iconType: 0,
        colorType: 0,
        notifyVisible: true
      })
    },

    handleDemoShow(e) {
      const demo = e.currentTarget.dataset.demo ?? -1;
      this.setData({
        demo: parseInt(demo),
        spread: false
      })
    },

    /**
     * @description: 点击商务合作具体项，复制联系方式
     * @param {*} e
     * @return {*}
     */
    handleBusinessListConfirm(e) {

      const {
        businessListOptions
      } = this.data;
      const value = e.detail.value
      if (value >= 0 && value < businessListOptions.length) {
        let copyValue = businessListOptions[value].desc;
        copyValue = businessListOptions[value].desc.includes('：') ? businessListOptions[value].desc.split('：')[1] : businessListOptions[value].desc;
        wx.setClipboardData({
          data: copyValue
        })
      }
    },
  }

})