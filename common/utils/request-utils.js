/*
 * @Description: 请求后端服务接口
 * @Author: yp
 * @Date: 2021-10-27 17:52:15
 * @LastEditTime: 2022-02-14 17:40:51
 * @LastEditors: yp
 */

const {
  CLOUD_ENV_ID,
  CLOUD_SERVER,
  MODE,
  PLATFORM
} = require('../../config/index')

const MODE_DIC = {
  0: "本地",
  1: "灰度",
  2: "线上"
};

const {
  baseCardInfo
} = require('../../common/data/card')

//为空时，使用127.0.0.1
//172.16.4.79
const IP = "";

//绿色背景输出
const GREEN_BG = '\x1B[42m%s\x1B[49m';
//红色背景输出
const RED_BG = '\x1B[41m%s\x1B[49m';

//本地请求时，模拟header中的openid
const MOCK_OPENID = 'o93-85AkuJFFHkldCaqlqow9teb8'
//本地请求时，模拟header中的unionid6
const MOCK_UNIONID = 'o64EB59I2hXQDdeCb2KJSkkZteb8'

// 通用工具
const commonUtil = require('../utils/common-utils')

module.exports = {

  //是否为调试模式(0:本地，1:灰度，2:线上)
  mode: MODE,

  /**
   * @description: 对 wx.request 的promise封装
   * @param {*} options
   * @return {*}
   */
  myrequest(options) {
    return new Promise((resolve, reject) => {
      // 逻辑：发送请求到服务器
      wx.request({
        url: options.url,
        method: options.method || "GET",
        data: options.data || {},
        header: options.header || {},
        // timeout: REQUEST_TIME_OUT,
        success: res => {
          resolve(res);
        },
        fail: err => {
          reject(err);
        }
      });
    });
  },

  /**
   * @description: 通用请求封装
   * @param {*} path
   * @param {*} method
   * @param {*} data
   * @return {*}
   */
  async callContainer(path = "", method = "GET", data = {}) {

    let res = {
      code: 500,
      msg: '请求失败',
      data: {},
    };

    if (this.mode > 0) {
      //调用用托管，对中文参数进行编码
      if (method.toUpperCase() === "GET") {
        data = commonUtil.converObjectEncode(data)

      }
      try {
        res = await wx.cloud.callContainer({
          config: {
            env: CLOUD_ENV_ID,
          },
          data: {
            ...data,
            mode: this.mode,
            platform: PLATFORM
          },
          path: `daily${path}`,
          method: method,
          header: {
            'X-WX-SERVICE': CLOUD_SERVER
          },
          // timeout: REQUEST_TIME_OUT
        });
      } catch (e) {
        res.error = e;
      }
    } else {
      try {
        // 是否使用固定IP
        const url = IP ? `http://${IP}/daily${path}` : `http://127.0.0.1/daily${path}`;
        res = await this.myrequest({
          url: url,
          method: method,
          data: {
            ...data,
            platform: PLATFORM
          },
          header: {
            'content-type': 'application/json',
            // 'content-type': 'application/x-www-form-urlencoded',
            'x-wx-openid': MOCK_OPENID,
            'x-wx-unionid': MOCK_UNIONID
          },
        })
      } catch (e) {
        res.error = e;
      }
      res.env = "development"
    }

    return res;
  },

  /**
   * @description: 获取服务端时间
   * @param {*}
   * @return {*}
   */
  async getSystemCurrent() {

    const FN_TITLE = `【访问接口：获取服务端时间，环境：${MODE_DIC[this.mode]}】`;
    //接口描述
    console.log(GREEN_BG, FN_TITLE);

    //请求路径
    const path = "/system/current";
    //请求方法
    const method = "GET";
    //请求数据
    const data = {};

    //发送请求
    const res = await this.callContainer(path, method, data);
    let current = null;
    if (res.data.code === 0 && res.data.data.current) {
      current = res.data.data.current;
    }
    //异常输出
    // console.log(RED_BG, FN_TITLE, res.msg || res.data.msg);

    return current;
  },

  /**
   * @description: 获取位置列表（location），根据经纬度或者关键字
   * @param {*}
   * @return {*}
   */
  async getLocationList(lon = -1, lat = -1, keyword = '') {


    //接口描述
    const FN_TITLE = `【访问接口：获取位置列表，环境：${MODE_DIC[this.mode]}】`;
    console.log(GREEN_BG, FN_TITLE);

    //请求路径
    const path = "/system/location-list";
    //请求方法
    const method = "GET";
    //请求数据
    const data = {
      lon,
      lat,
      keyword
    };

    //发送请求
    const res = await this.callContainer(path, method, data);

    //整理返回数据
    let location_list = [];
    if (res.data && res.data.code === 0 && res.data.data.location_list) {
      location_list = res.data.data.location_list;
    }
    return location_list;
  },


  /**
   * @description: 用户配置初始化
   * @param {*} location
   * @param {*} cardIdList
   * @return {*} 返回用户配置数据
   */
  async initUser(location = null, cardIdList = [], userInfo = {}) {

    //接口描述
    const FN_TITLE = `【访问接口：初始化用户配置，环境：${MODE_DIC[this.mode]}】`
    console.log(GREEN_BG, FN_TITLE);

    //请求路径
    const path = "/system/user/init";
    //请求方法
    const method = "POST";
    //请求数据
    const data = {
      location,
      card_id_list: cardIdList,
      nick_name: userInfo.nick_name || '',
      avatar_url: userInfo.avatar_url || ''
    };

    //发送请求
    let res = null;
    let user = null;

    try {
      res = await this.callContainer(path, method, data);
    } catch (e) {
      console.log(RED_BG, e);
      return user;
    }

    if (res.data.code === 0 && res.data.data.user) {
      user = res.data.data.user
    } else {
      console.log(RED_BG, FN_TITLE, res.msg || res.data.msg);
    }

    return user;

  },


  /**
   * @description: 根据unionid获取用户配置
   * @param {*}
   * @return {*}
   */
  async getUser() {

    //接口描述
    const FN_TITLE = `【访问接口：获取用户配置，环境：${MODE_DIC[this.mode]}】`;
    console.log(GREEN_BG, FN_TITLE);

    //请求路径
    const path = "/system/user";
    //请求方法
    const method = "GET";
    //请求数据
    const data = {};

    //发送请求
    const res = await this.callContainer(path, method, data);
    let user = null;

    if (res.data.code !== 0) {
      console.log(RED_BG, FN_TITLE, res.msg || res.data.msg);
      //非正常返回
      throw new Error(res.msg || res.data.msg)
    }
    if (res.data.code === 0 && res.data.data.user) {
      user = res.data.data.user;
    }
    return user;
  },

  /**
   * @description: 更新用户配置（异步更新缓存）
   * @param {*} 更新的字段及参数（注意：key为下划线模式，非驼峰模式）
   * 可更新参数字段：
   * update:{
        card_id_list:[], //卡片顺序
        location:{}, //地理位置对象
        birthday:{}, //生日对象
        vibrate_value: 0 //震动反馈
        car_city: "beijing", //车辆限号城市代码
        nick_name: "Fish", //用户昵称
        avatar_url: "", //用户头像地址
        user_info: {}, //用户额外信息
        subscribe_status: 1, //订阅状态，1:开启
        subscribe_hour: 10, //推送时间
        subsrcibe_times: 0, //订阅次数
        status: 0, //用户状态
     }
   * @return {*}
   */
  async updateUser(update = {}) {

    const FN_TITLE = `【访问接口：更新用户配置，环境：${MODE_DIC[this.mode]}】`;
    //接口描述
    console.log(GREEN_BG, FN_TITLE);

    //请求路径
    const path = "/system/user/update";
    //请求方法
    const method = "POST";
    //请求数据
    const data = {
      update
    };

    let updateResult = -1;
    let res = null;

    //验证参数
    if (!update || Object.keys(update).length <= 0) {
      return updateResult;
    }

    //发送请求
    try {
      res = await this.callContainer(path, method, data);
    } catch (e) {
      console.log(RED_BG, e);
      return -1
    }

    //判断更新结果
    if (res.data.code === 0) {
      updateResult = 1
    } else {
      console.log(RED_BG, FN_TITLE, res.msg || res.data.msg);
    }

    return updateResult;
  },

  /**
   * @description: 更新用户卡片配置
   * @param {*} cardId
   * @param {*} updateKey
   * @param {*} updateValue
   * @return {*}
   */
  async updateUserCardsConfig(cardId, updateKey, updateValue) {

    const FN_TITLE = `【访问接口：更新用户卡片配置，环境：${MODE_DIC[this.mode]}】`;
    //接口描述
    console.log(GREEN_BG, FN_TITLE);

    //请求路径
    const path = "/system/user/cards-config/update";
    //请求方法
    const method = "POST";
    //请求数据
    const data = {
      card_id: cardId,
      update_key: updateKey,
      update_value: updateValue
    };

    let updateResult = -1;
    let res = null;

    //验证参数
    if (baseCardInfo[cardId] === undefined || !updateKey || updateValue === undefined) {
      return updateResult;
    }

    //发送请求
    try {
      res = await this.callContainer(path, method, data);
    } catch (e) {
      console.log(RED_BG, e);
      return -1
    }

    //判断更新结果
    if (res.data.code === 0) {
      updateResult = 1
    } else {
      console.log(RED_BG, FN_TITLE, res.msg || res.data.msg);
    }

    return updateResult;
  },

  /**
   * @description:增加用户订阅次数
   * @param {*}
   * @return {*}
   */
  async addUserSubscribeTimes() {
    const FN_TITLE = `【访问接口：增加用户订阅次数，环境：${MODE_DIC[this.mode]}】`;
    //接口描述
    console.log(GREEN_BG, FN_TITLE);

    //请求路径
    const path = "/system/user/subscribe-times/add";
    //请求方法
    const method = "POST";
    //请求数据
    const data = {};

    let updateResult = -1;
    let res = null;

    //发送请求
    try {
      res = await this.callContainer(path, method, data);
    } catch (e) {
      console.log(RED_BG, e);
      return -1
    }

    //判断更新结果
    if (res.data.code === 0) {
      updateResult = 1
    } else if (res.data.code === 401) {
      // 当订阅提醒未开启
      wx.showToast({
        icon: 'none',
        title: '请在配置中开启【订阅提醒】',
      })
      updateResult = -1

    } else if (res.data.code === 504) {
      // 当订阅次数到达上线999次
      wx.showToast({
        icon: 'none',
        title: '订阅次数已至上线',
      })
      updateResult = -1
    }

    return updateResult;
  },

  /**
   * @description: 请求延迟3秒发送订阅消息
   * @param {*}
   * @return {*}
   */
  async sendSubscribeMessage() {

    const FN_TITLE = `【访问接口：延迟3秒发送订阅消息，环境：${MODE_DIC[this.mode]}】`;
    //接口描述
    console.log(GREEN_BG, FN_TITLE);

    //请求路径
    const path = "/wechat/message/send";
    //请求方法
    const method = "POST";
    //请求数据
    const data = {};

    //发送请求
    const res = await this.callContainer(path, method, data);
    let current = null;
    if (res.data.code === 0) {
      current = res.data.data;
    }
    //异常输出
    // console.log(RED_BG, FN_TITLE, res.msg || res.data.msg);

    return current;
  },

  /**
   * @description: 获取卡片列表（包含卡片数据、配置和状态）
   * @param {*}
   * @return {*}
   */
  async getCardListAndUser(currentLocation = {}) {

    const FN_TITLE = `【访问接口：获取卡片列表，环境：${MODE_DIC[this.mode]}】`;
    //接口描述
    console.log(GREEN_BG, FN_TITLE);

    //请求路径
    const path = "/card/card-list";
    //请求方法
    const method = "GET";

    //获取当前地理位置参数
    const currentLocationParams = {}
    if (currentLocation.id && currentLocation.name) {
      currentLocationParams['cl_id'] = currentLocation.id;
      currentLocationParams['cl_name'] = currentLocation.name;
      currentLocationParams['cl_adm2'] = currentLocation.adm2 || '';
      currentLocationParams['cl_adm1'] = currentLocation.adm1 || '';
      currentLocationParams['cl_country'] = currentLocation.country || '';
    }
    if (currentLocation.lon !== undefined && currentLocation.lon >= 0 && currentLocation.lat !== undefined && currentLocation.lat >= 0) {
      currentLocationParams['cl_lon'] = currentLocation.lon
      currentLocationParams['cl_lat'] = currentLocation.lat
    }
    //请求数据
    const data = {
      ...currentLocationParams
    };

    //发送请求
    let res = null;
    let cardList = [];
    let user = {};
    try {
      res = await this.callContainer(path, method, data);
    } catch (e) {
      //异常输出
      console.log(RED_BG, e);
      return {
        cardList,
        user
      }
    }
    if (res.data.code === 0 && res.data.data.card_list) {
      cardList = res.data.data.card_list;
      user = res.data.data.user || {}
    }

    return {
      cardList,
      user
    };
  },

  /**
   * @description: 获取卡片数据（包含卡片数据、配置和状态）
   * @param {*}
   * @return {*}
   */
  async getCard(id = -1, currentLocation = {}) {

    const FN_TITLE = `【访问接口：获取卡片数据，环境：${MODE_DIC[this.mode]}】`;
    //接口描述
    console.log(GREEN_BG, FN_TITLE);

    //请求路径
    const path = "/card/card";
    //请求方法
    const method = "GET";

    //获取当前地理位置参数
    const currentLocationParams = {}
    if (currentLocation.id && currentLocation.name) {
      currentLocationParams['cl_id'] = currentLocation.id;
      currentLocationParams['cl_name'] = currentLocation.name;
      currentLocationParams['cl_adm2'] = currentLocation.adm2 || '';
      currentLocationParams['cl_adm1'] = currentLocation.adm1 || '';
      currentLocationParams['cl_country'] = currentLocation.country || '';
    }
    if (currentLocation.lon !== undefined && currentLocation.lon >= 0 && currentLocation.lat !== undefined && currentLocation.lat >= 0) {
      currentLocationParams['cl_lon'] = currentLocation.lon
      currentLocationParams['cl_lat'] = currentLocation.lat
    }
    //请求数据
    const data = {
      id,
      ...currentLocationParams
    };

    //发送请求
    let res = null;
    let card = {
      id: id,
      config: {},
      data: {},
      status: -1,
    }
    try {
      res = await this.callContainer(path, method, data);
    } catch (e) {
      //异常输出
      console.log(RED_BG, e);
      return {
        card
      }
    }
    if (res.data.code === 0 && res.data.data.card) {
      card = res.data.data.card;
    }

    return card;
  },



  /**
   * @description: //获取公共卡片和查询者用户配置数据（包含卡片数据、配置和状态）
   * @param {*} id 卡片id
   * @param {*} currentLocation 要查询的城市信息
   * @param {*} cityCode 尾号限行城市代码
   * @return {*}
   */
  async getCommonCardAndUser(id = -1, currentLocation = {}, cityCode = '') {

    const FN_TITLE = `【访问接口：获取公共卡片数据，环境：${MODE_DIC[this.mode]}】`;
    //接口描述
    console.log(GREEN_BG, FN_TITLE);

    //请求路径
    const path = "/card/common-card";
    //请求方法
    const method = "GET";
    //获取当前地理位置参数
    const currentLocationParams = {}
    if (currentLocation.id && currentLocation.name) {
      currentLocationParams['cl_id'] = currentLocation.id;
      currentLocationParams['cl_name'] = currentLocation.name;
      currentLocationParams['cl_adm2'] = currentLocation.adm2 || '';
      currentLocationParams['cl_adm1'] = currentLocation.adm1 || '';
      currentLocationParams['cl_country'] = currentLocation.country || '';
    }
    if (currentLocation.lon !== undefined && currentLocation.lon >= 0 && currentLocation.lat !== undefined && currentLocation.lat >= 0) {
      currentLocationParams['cl_lon'] = currentLocation.lon
      currentLocationParams['cl_lat'] = currentLocation.lat
    }
    //请求数据
    const data = {
      id,
      ...currentLocationParams,
      city_code: cityCode || ''
    };

    //发送请求
    let res = null;
    let card = {
      id: id,
      config: {},
      data: {},
      status: -1,
    }
    let user = null;
    try {
      res = await this.callContainer(path, method, data);
    } catch (e) {
      //异常输出
      console.log(RED_BG, e);
      return {
        card,
        user
      }
    }
    if (res.data.code === 0 && res.data.data.card) {
      card = res.data.data.card;
      user = res.data.data.user || null
    }
    return {
      card,
      user
    };
  },

  /**
   * @description: 删除自定义纪念日
   * @param {*} festivalId
   * @return {*}
   */
  async deleteFestival(festivalId) {

    const FN_TITLE = `【访问接口：删除自定义纪念日，环境：${MODE_DIC[this.mode]}】`;
    //接口描述
    console.log(GREEN_BG, FN_TITLE);

    //请求路径
    const path = "/card/festival/delete";
    //请求方法
    const method = "POST";
    //请求数据
    const data = {
      id: festivalId
    };

    let res = -1;
    let deleteRes = -1
    //发送请求
    try {
      res = await this.callContainer(path, method, data);
    } catch (e) {
      console.log(RED_BG, e);
      return -1
    }

    //判断更新结果
    if (res.data.code === 0 && res.data.data > 0) {
      deleteRes = 1
    } else {
      console.log(RED_BG, FN_TITLE, res.msg || res.data.msg);
      return -1;
    }

    return deleteRes;
  },

  /**
   * @description: 新增自定义纪念日
   * @param {*} festivalData
   *  新增的纪念日数据:
      "festival":{
          //标题，字符串，不能超过30个字符
          "title":"today test limit hey",
          //月份数据，0-11
          "month":0,
          //日数据，0-30
           "day":0,
          //是否每年重复
           "is_repeat":false,
          //是否订阅
           "is_subscribe":false
      }
   * @return {*}
   */
  async addFestival(festival = {}) {

    const FN_TITLE = `【访问接口：新增自定义纪念日，环境：${MODE_DIC[this.mode]}】`;
    //接口描述
    console.log(GREEN_BG, FN_TITLE);

    //请求路径
    const path = "/card/festival/add";
    //请求方法
    const method = "POST";
    //请求数据
    const data = {
      festival: festival
    };

    //基础验证
    if (!festival || Object.keys(festival).length <= 0) {
      return null;
    }

    let res = null;
    let festivalRes = null;

    //发送请求
    try {
      res = await this.callContainer(path, method, data);
    } catch (e) {
      console.log(RED_BG, e);
      return festivalRes
    }

    //判断更新结果
    if (res.data.code === 0 && res.data.data.id >= 0) {
      festivalRes = res.data.data
    } else {
      console.log(RED_BG, FN_TITLE, res.msg || res.data.msg);
    }
    return festivalRes;
  },

  /**
   * @description: 新增好友生日提醒
   * @param {*} birthdayData
   *  新增的生日提醒数据:
      "birthday":{
            //用户昵称，字符串，不能超过30个字符
            "nick_name":"张三",
            //用户头像，字符串，不能超过255个字符
"avatar_url":"http://fes.qyerstatic.com/FuBL80EuU0g8MSG1_Ymnzrqw_3D6", 
            //月份数据，0-11
            "month":0,
            //日数据，0-30
            "day":0,
            //是否置顶
           "is_top":false,
            //是否订阅
           "is_subscribe":false
      }
   * @return {*}
   */
  async addBirthday(birthday = {}) {

    const FN_TITLE = `【访问接口：新增好友生日提醒，环境：${MODE_DIC[this.mode]}】`;
    //接口描述
    console.log(GREEN_BG, FN_TITLE);

    //请求路径
    const path = "/card/birthday/add";
    //请求方法
    const method = "POST";
    //请求数据
    const data = {
      birthday: birthday
    };

    //基础验证
    if (!birthday || Object.keys(birthday).length <= 0) {
      return null;
    }

    let res = null;

    //发送请求
    try {
      res = await this.callContainer(path, method, data);
    } catch (e) {
      console.log(RED_BG, e);
      return null
    }

    //判断更新结果
    if (res.data.code === 0 && res.data.data.id >= 0) {
      res = res.data.data
    } else {
      res = res.data
    }
    return res;
  },

  /**
   * @description: 分享页中新增好友生日提醒
   * @param {*} birthdayData
   *  新增的生日提醒数据:
      "birthday":{
            //uid，添加到谁的好友提醒列表中
            ui:10006,
            //验证口令
            token:'JoKjef'
            //用户昵称，字符串，不能超过30个字符
            "nick_name":"张三",
            //用户头像，字符串，不能超过255个字符
        "avatar_url":"http://fes.qyerstatic.com/FuBL80EuU0g8MSG1_Ymnzrqw_3D6", 
            //月份数据，0-11
            "month":0,
            //日数据，0-30
            "day":0
      }
   * @return {*}
   */
  async addBirthdayByShare(birthday = {}) {

    const FN_TITLE = `【访问接口：在分享页新增好友生日提醒，环境：${MODE_DIC[this.mode]}】`;
    //接口描述
    console.log(GREEN_BG, FN_TITLE);

    //请求路径
    const path = "/card/birthday/share-add";
    //请求方法
    const method = "POST";
    //请求数据
    const data = {
      birthday: birthday
    };

    //基础验证
    if (!birthday || Object.keys(birthday).length <= 0) {
      return null;
    }

    let res = null;

    //发送请求
    try {
      res = await this.callContainer(path, method, data);
    } catch (e) {
      console.log(RED_BG, e);
      return null
    }

    //判断更新结果
    if (res.data.code === 0 && res.data.data.id >= 0) {
      res = res.data.data
    } else {
      res = res.data
    }
    return res;
  },

  /**
   * @description: 删除好友生日提醒
   * @param {*} birthdayId
   * @return {*}
   */
  async deleteBirthday(birthdayId) {

    const FN_TITLE = `【访问接口：删除生日提醒，环境：${MODE_DIC[this.mode]}】`;
    //接口描述
    console.log(GREEN_BG, FN_TITLE);

    //请求路径
    const path = "/card/birthday/delete";
    //请求方法
    const method = "POST";
    //请求数据
    const data = {
      id: birthdayId
    };

    let res = -1;
    let deleteRes = -1
    //发送请求
    try {
      res = await this.callContainer(path, method, data);
    } catch (e) {
      console.log(RED_BG, e);
      return -1
    }

    //判断更新结果
    if (res.data.code === 0 && res.data.data > 0) {
      deleteRes = 1
    } else {
      console.log(RED_BG, FN_TITLE, res.msg || res.data.msg);
      return -1;
    }
    return deleteRes;
  },

  /**
   * @description: 分享页中新增好友生日提醒
   * @param {*} birthdayData
   *  新增的生日提醒数据:
      "birthday":{
            //生日记录id
            "id": 9,
            //用户昵称，字符串，不能超过30个字符
            "nick_name":"张三",
            //用户头像，字符串，不能超过255个字符
            "avatar_url":"http://fes.qyerstatic.com/FuBL80EuU0g8MSG1_Ymnzrqw_3D6", 
            //月份数据，0-11
            "month":0,
            //日数据，0-30
            "day":0,
            //是否置顶
           "is_top":false,
            //是否订阅
           "is_subscribe":false
      }
   * @return {*}
   */
  async updateBirthday(birthday = {}) {

    const FN_TITLE = `【访问接口：跟新好友生日提醒，环境：${MODE_DIC[this.mode]}】`;
    //接口描述
    console.log(GREEN_BG, FN_TITLE);

    //请求路径
    const path = "/card/birthday/update";
    //请求方法
    const method = "POST";
    //请求数据
    const data = {
      birthday: birthday
    };

    //基础验证
    if (!birthday || Object.keys(birthday).length <= 0) {
      return null;
    }

    let res = null;

    //发送请求
    try {
      res = await this.callContainer(path, method, data);
    } catch (e) {
      console.log(RED_BG, e);
      return null
    }

    //判断更新结果
    if (res.data.code === 0 && res.data.data.id >= 0) {
      res = res.data.data
    } else {
      res = res.data
    }
    return res;
  },






}