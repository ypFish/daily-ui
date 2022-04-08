/*
 * @Description: 日常使用函数工具类
 * @Author: yp
 * @Date: 2021-05-22 16:30:01
 * @LastEditTime: 2022-02-12 15:33:28
 * @LastEditors: yp
 */


module.exports = {

  /**
   * @description: 判断一个字符串是否为整数
   * @param {*} text
   * @return {*}
   */
  isInt(txt = '') {
    return /^[0-9]*$/.test(txt)
  },

  /**
   * @description: 从数组中随机获取一个元素
   * @param {*} array
   * @return {*}
   */
  getOneFromArray(array = []) {
    if (!Array.isArray(array) || array.length <= 0) {
      return {}
    }
    return array[Math.floor(Math.random() * array.length)]
  },

  /**
   * @description: 对源数据进行分页
   * @param {
   *  list:源数据数组；
   *  pageNumber:分页阈值
   * }
   * @return {*}
   */
  getPageDataByList(list = [], pageNumber = 1) {
    return list.reduce((prev, cur, index) => {
      if (!prev[~~(index / pageNumber)]) {
        prev[~~(index / pageNumber)] = [];
      }
      prev[~~(index / pageNumber)].push(cur);
      return prev;
    }, []);
  },

  /**
   * @description: 将对象中首字母下划线的属性转为驼峰
   * @param {*} data
   * @return {*}
   */
  convertObjectUpper(data) {
    if (typeof data !== 'object' || !data) return data
    if (Array.isArray(data)) {
      return data.map(item => this.convertObjectUpper(item))
    }

    let newObj = {}
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        let newKey = key.replace(/_([a-z])/g, res => res[1].toUpperCase())
        newObj[newKey] = this.convertObjectUpper(data[key])
      }
    }
    return newObj
  },

  /**
   * @description: 将对象及对象中属性值转化为字符串
   * @param {*} data
   * @return {*}
   */
  converObjectEncode(data = {}) {
    if (typeof data !== 'object' || !data || data === {}) return data
    if (Array.isArray(data)) {
      return data.map(item => this.converObjectEncode(item))
    }
    let newObj = {}
    for (const key in data) {
      if (Object.prototype.hasOwnProperty.call(data, key)) {
        if (Object.prototype.toString.call(data[key]) === '[object Object]') {
          newObj[key] = this.converObjectEncode(data[key])
        } else if (Object.prototype.toString.call(data[key]) === '[object String]') {
          newObj[key] = encodeURIComponent(data[key])
        } else {
          newObj[key] = data[key]
        }
      }
    }
    return newObj
  },

  /**
   * @description: 将一个javascript对象转为url params参数
   * 如：{name:'yp'} -> '?name=yp'
   * @param {*} obj
   * @return {*}
   */
  // converObjectToUrlParams(obj) {

  //   if (!obj || Object.keys(obj).length <= 0) {
  //     return '';
  //   }

  //   const params = [];
  //   for (let [key, value] of Object.entries(obj)) {
  //     if (Object.prototype.toString.call(value) === "[object String]" ||
  //       Object.prototype.toString.call(value) === "[object Number]" ||
  //       Object.prototype.toString.call(value) === "[object Boolean]") {
  //       params.push(`${key}=${value}`)
  //     }
  //   }
  //   let paramsUrl = params.join('&');
  //   if (paramsUrl.length > 0) {
  //     paramsUrl = "?" + paramsUrl
  //   }
  //   return paramsUrl;
  // }


  /**
   * @description: 将字段对象转化为参数字符串，例如 {name:'yp',age:18} 转化为 'name=yp&age=18'
   次方法会忽略类型为obj和array的字段
   * @param {*} obj
   * @return {*}
   */
  convertObjToParams(obj = {}) {

    const _result = [];
    for (let [key, value] of Object.entries(obj)) {
      if (Object.prototype.toString.call(value) === '[object String]' || Object.prototype.toString.call(value) === '[object Number]' || Object.prototype.toString.call(value) === '[object Boolean]') {
        _result.push(key + '=' + value);
      }
    }
    return _result.join('&');
  }
}