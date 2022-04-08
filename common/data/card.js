/*
 * @Description: 模拟数据
 * @Author: yp
 * @Date: 2021-04-19 18:04:02
 * @LastEditTime: 2022-02-28 11:42:02
 * @LastEditors: yp
 */

// 卡片状态：（2:数据空，1:正常，0:等待，-1:错误）

//卡片基础信息
const BASE_CARD_INFO = {

  //获取数据失败状态的卡片
  'error': {
    id: -2,
    title: '',
    desc: '',
    iconName: '',
    iconSize: 50,
    iconBottom: 0,
    cardData: {
      name: ''
    },
    archorClz: '',
    comp: '',
    iconMiniSize: 27,
    opening: false,
    from: '',
    shareId: '',
    status: -1,

  },
  //加载状态的卡片
  'loading': {
    id: -1,
    title: '',
    desc: '',
    iconName: '',
    iconSize: 50,
    iconBottom: 0,
    cardData: {
      name: ''
    },
    archorClz: '',
    comp: '',
    iconMiniSize: 27,
    opening: false,
    from: '',
    shareId: '',
    status: 0
  },
  // 日历
  1: {
    id: 1,
    title: '日历',
    // desc: '2020年09月24日 周五 第42周 射手座',
    desc: '',
    iconName: 'rili-cuxiantiao',
    iconSize: 50,
    iconBottom: 0,
    cardData: {
      name: '日历'
    },
    archorClz: 'calendar',
    comp: 'calendar',
    iconMiniSize: 27,
    opening: false,
    from: '',
    //卡片是否允许被分享，分享按钮id
    shareId: 'share_1',
    status: 0,
  },

  // 纪念日
  2: {
    id: 2,
    title: '纪念日',
    // desc: '最近30天中有3个纪念日',
    desc: '',
    iconName: 'jieri',
    iconSize: 52,
    iconBottom: 0,
    cardData: {
      name: '纪念日'
    },
    archorClz: 'festival',
    comp: 'festival',
    iconMiniSize: 29.12,
    opening: false,
    from: '',
    shareId: '',
    status: 0
  },
  // 天气
  3: {
    id: 3,
    title: '天气',
    // desc: '中国 北京市 朝阳区',
    desc: '',
    iconName: 'tianqi1',
    iconSize: 54,
    iconBottom: 0,
    cardData: {
      name: '天气'
    },
    iconMiniSize: 30.24,
    archorClz: 'weather',
    comp: 'weather',
    opening: false,
    status: 0,
    from: '',
    //卡片是否允许被分享，分享按钮id
    shareId: 'share_3',
  },
  //尾号限行
  4: {
    id: 4,
    title: '尾号限行',
    desc: '',
    iconName: 'cheliang',
    iconSize: 56,
    iconBottom: 0,
    cardData: {
      name: '尾号限行'
    },
    iconMiniSize: 31.36,
    archorClz: 'traffic',
    comp: 'traffic',
    opening: false,
    status: 0,
    from: '',
    //卡片是否允许被分享，分享按钮id
    shareId: 'share_4',
  },
  //生日提醒
  5: {
    id: 5,
    title: '生日提醒',
    desc: '',
    iconName: 'shengri-weixuan',
    iconSize: 56,
    iconBottom: 4,
    cardData: {
      name: '生日提醒'
    },
    iconMiniSize: 32,
    archorClz: 'birthday',
    comp: 'birthday',
    opening: false,
    from: '',
    shareId: '',
    status: 0
  },
  //实时快报
  6: {
    id: 6,
    title: '实时快报',
    desc: '24小时滚动播报',
    iconName: 'shouyinjixian',
    iconSize: 56,
    iconBottom: 4,
    cardData: {
      name: '实时快报'
    },
    iconMiniSize: 30.4,
    archorClz: 'news',
    comp: 'news',
    opening: false,
    from: '',
    shareId: '',
    status: 0
  },
  //经期记录
  7: {
    id: 7,
    title: '经期记录',
    desc: '',
    iconName: 'shengliqi',
    iconSize: 54,
    iconBottom: 0,
    cardData: {
      name: '经期记录'
    },
    iconMiniSize: 31,
    archorClz: 'menses',
    comp: 'menses',
    opening: false,
    from: '',
    shareId: '',
    status: 0
  },
  //历史上的今天
  8: {
    id: 8,
    title: '历史上的今天',
    minTitle: '历史今天',
    desc: '历史上的1月7日',
    iconName: 'shuji-copy',
    iconSize: 54,
    iconBottom: 0,
    cardData: {
      name: '历史上的今天'
    },
    iconMiniSize: 28,
    archorClz: 'history',
    comp: 'history',
    opening: false,
    status: 0,
    from: '',
    //卡片是否允许被分享，分享按钮id
    shareId: 'share_8',
  },
  //新事物
  9: {
    id: 9,
    title: '新事物',
    desc: '2021年7月14日8点更新',
    iconName: 'xinwen1',
    iconSize: 54,
    iconBottom: 0,
    cardData: {
      name: '新事物'
    },
    iconMiniSize: 28,
    archorClz: 'report',
    comp: 'report',
    opening: false,
    status: 0,
    from: '',
    //卡片是否允许被分享，分享按钮id
    shareId: 'share_9'
  },
  //股市
  10: {
    id: 10,
    title: '股市',
    desc: '已添加14支自选股，09:34更新',
    iconName: 'gupiao2',
    iconSize: 60,
    iconBottom: 0,
    cardData: {
      name: '股市'
    },
    iconMiniSize: 33.6,
    archorClz: 'stock',
    comp: 'stock',
    opening: false,
    from: '',
    shareId: '',
    status: 0
  },
  //基金
  11: {
    id: 11,
    title: '基金',
    desc: '已添加5支自选基金，16:08更新',
    iconName: 'gongmujijin',
    iconSize: 56,
    iconBottom: 0,
    cardData: {
      name: '基金'
    },
    iconMiniSize: 31.36,
    archorClz: 'fund',
    comp: 'fund',
    opening: false,
    from: '',
    shareId: '',
    status: 0
  },
  //世界金融
  // 12: {
  //   id: 12,
  //   title: '世界金融',
  //   desc: '16:08更新',
  //   iconName: 'quanqiu',
  //   iconSize: 52,
  //   iconBottom: 0,
  //   cardData: {
  //     name: '世界金融'
  //   },
  //   archorClz: 'finance',
  //   comp: "finance",
  //   iconMiniSize: 26,
  //   from: '',
  //   opening: false,
  //   status: 0
  // },
  //待办事项
  13: {
    id: 13,
    title: '待办事项',
    desc: '今日共5条待办事项',
    iconName: 'xinwen4',
    iconSize: 58,
    iconBottom: 0,
    cardData: {
      name: '待办事项'
    },
    archorClz: 'backlog',
    comp: 'backlog',
    iconMiniSize: 31,
    opening: false,
    from: '',
    shareId: '',
    status: 0
  },
  //课程表
  14: {
    id: 14,
    title: '课程表',
    desc: '今日共3节课程',
    iconName: 'biaoge2',
    iconSize: 48,
    iconBottom: 0,
    cardData: {
      name: '课程表'
    },
    archorClz: 'timetable',
    comp: 'timetable',
    iconMiniSize: 26,
    opening: false,
    from: '',
    status: 0,
    //卡片是否允许被分享，分享按钮id
    shareId: 'share_14'
  },
  //彩票
  15: {
    id: 15,
    title: '彩票',
    desc: '已添加3类彩票',
    iconName: 'piaohao',
    iconSize: 52,
    iconBottom: 0,
    cardData: {
      name: '彩票'
    },
    archorClz: 'lottery',
    comp: 'lottery',
    iconMiniSize: 29.12,
    opening: false,
    from: '',
    shareId: '',
    status: 0
  },
  //打卡
  16: {
    id: 16,
    title: '打卡',
    desc: '已创建3个打卡项',
    iconName: 'daka4',
    iconSize: 46,
    iconBottom: 0,
    cardData: {
      name: '打卡'
    },
    archorClz: 'check',
    comp: 'check',
    iconMiniSize: 27,
    opening: false,
    from: '',
    shareId: '',
    status: 0
  },
  // 17: {
  //   id: 17,
  //   title: '旅行推荐',
  //   desc: '7月上旬推荐旅行目的地',
  //   iconName: 'lvyou1',
  //   iconSize: 60,
  //   iconBottom: 0,
  //   cardData: {
  //     name: '当季旅行推荐'
  //   },
  //   iconMiniSize: 34,
  //   opening: false,
  //   status: 0
  // },
  18: {
    id: 18,
    title: '世界时间',
    desc: '以北京（东八时区）时间为基准时间',
    iconName: 'lishijilu',
    iconSize: 56,
    iconBottom: 0,
    cardData: {
      name: '世界时间'
    },
    archorClz: 'clock',
    comp: 'clock',
    iconMiniSize: 30,
    opening: false,
    from: '',
    shareId: '',
    status: 0
  },
};

module.exports = {

  //卡片基础信息对象
  baseCardInfo: BASE_CARD_INFO,

  //卡片默认展示卡片列表
  baseCardList: [
    //日历
    BASE_CARD_INFO[1],
    //天气
    BASE_CARD_INFO[3],
    //待办事项
    BASE_CARD_INFO[13],
    //纪念日
    BASE_CARD_INFO[2],
    //生日提醒
    BASE_CARD_INFO[5],
    //课程表
    BASE_CARD_INFO[14],
    //经期记录
    BASE_CARD_INFO[7],
    //尾号限行
    BASE_CARD_INFO[4],
    //新事物
    BASE_CARD_INFO[9],
    //实时快报
    BASE_CARD_INFO[6],
    //历史上的今天
    BASE_CARD_INFO[8],
    //打卡
    BASE_CARD_INFO[16],
    //彩票
    BASE_CARD_INFO[15],
    //股市
    BASE_CARD_INFO[10],
    //基金
    BASE_CARD_INFO[11],
    //世界时间
    BASE_CARD_INFO[18],
  ],

  //默认展示的卡片id列表
  baseCardIdList: [
    1, 3, 13, 2, 5, 14, 7, 4, 9, 6, 8, 16, 15, 10, 11, 18
  ],



}