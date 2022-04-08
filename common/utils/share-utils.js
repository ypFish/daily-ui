/*
 * @Description: 设置分享转发好友的桥接数据
 * @Author: yp
 * @Date: 2022-01-26 18:00:28
 * @LastEditTime: 2022-02-17 18:33:15
 * @LastEditors: yp
 */

const config = require('../../config/index')

const app = getApp();

module.exports = {

  //默认的分享信息
  defaultShareInfo: {
    title: 'Hi，推荐一个宝藏小程序，快速获取每日所需信息',
    path: '/page/main/main?from=share',
    imageUrl: config.PIC_PATH + "share/share3.png"
  },

  //转发的源信息（key:分享源id，value传输给分享处理者的数据）
  shareBlock: {
    //不同按钮的分享方法
    id: {
      // //分享处理事件标示
      // handlerType:{

      // },
      // //分享的源数据
      // shareData:{

      // }
    }
  },


  /**
   * @description:  添加转发分享块数据
   * @param {*} shareId 触发分享按钮的id
   * @param {*} shareData 分享中所需要的数据
   * @param {*} handlerType 处理事件的标示
   * @return {*}
   */
  setShareBlock(shareId, shareData, handlerType = "") {
    this.shareBlock[shareId] = {
      shareData,
      handlerType
    }
  },

  /**
   * @description: 处理分享的promise方法，id为触发元素id，this为当前上下本
   * 注意：需要在调用页面 建立 <canvas> 标签
   * @param {*} shareId
   * @param {*} that
   * @return {*}
   */
  async shareHandler(shareId = '', that) {

    const shareBlock = this.shareBlock[shareId] || {};
    return new Promise((shareResove, shareReject) => {
      if (shareBlock['handlerType'] === 'warning') {
        //处理 预警信息分享 事件
        //获取原始数据
        const {
          warningTitle,
          warningDesc,
          warningIcon,
          warningBg,
          path
        } = shareBlock['shareData'];

        const query = wx.createSelectorQuery()
        query.in(that).select('#share-canvas')
          .fields({
            node: true,
            size: true
          })
          .exec(async (res) => {
            const canvas = res[0].node
            const ctx = canvas.getContext('2d')
            //获取设备像素比
            const dpr = app.globalData.pixelRatio
            canvas.width = res[0].width * dpr
            canvas.height = res[0].height * dpr
            // ctx.scale(dpr, dpr)
            const canvasWidth = canvas.width;
            const canvasHeight = canvas.height;
            //分享背景图
            // 创建一个图片
            const image = canvas.createImage()
            // 等待图片加载
            try {
              await new Promise(resolve => {
                image.onload = resolve
                image.src = warningBg // 要加载的图片 url
              })
            } catch (err) {
              console.log(err);
              shareReject();
            }

            ctx.drawImage(image, 0, 0, canvasWidth, canvasHeight);
            // 绘制标题
            const dateText = warningDesc;
            ctx.fillStyle = 'rgba(256,256,256,1)';
            // ctx.textAlign = '';
            ctx.font = "normal bold 110px PingFang SC,STHeiti,Microsoft Yahei,Yuanti SC"
            //居中
            const metrics = ctx.measureText(dateText)
            ctx.fillText(dateText, (canvasWidth - metrics.width) / 2, canvasHeight * .77, canvasWidth)

            // 绘制图标
            // 创建一个图片
            const iconImage = canvas.createImage()
            // 等待图片加载
            try {
              await new Promise(resolve => {
                iconImage.onload = resolve
                iconImage.src = warningIcon // 要加载的图片 url
              })
            } catch (err) {
              console.log(err);
              shareReject();
            }
            // 绘制图标
            ctx.drawImage(iconImage, (canvasWidth - 300) / 2, canvasHeight * 0.22, 300, 300);

            //转化为临时路径
            try {
              const res = await wx.canvasToTempFilePath({
                fileType: 'jpg',
                quality: 0.8,
                canvas: canvas
              });
              if (res.tempFilePath) {
                //为canvas的虚拟地址
                // 返回分享信息
                shareResove({
                  title: warningTitle,
                  path: path || '/page/main/main?from=share',
                  imageUrl: res.tempFilePath
                })
              } else {
                shareReject();
              }
            } catch (err) {
              console.log(err);
            }
          })
      } else if (shareBlock['handlerType'] === 'share_1') {
        //日历卡片分享
        // 返回分享信息
        shareResove({
          ...shareBlock['shareData']
        })
      } else if (shareBlock['handlerType'] === 'share_3') {
        //天气卡片分享
        console.log(shareBlock['shareData'])
        // 返回分享信息
        shareResove({
          ...shareBlock['shareData']
        })
      } else if (shareBlock['handlerType'] === 'share_4') {
        //尾号限行卡片分享
        console.log(shareBlock['shareData'])
        // 返回分享信息
        shareResove({
          ...shareBlock['shareData']
        })
      } else if (shareBlock['handlerType'] === 'share_birthday_form') {
        // 生日记录表单邀请分享
        console.log(shareBlock['shareData'])
        // 返回分享信息
        shareResove({
          ...shareBlock['shareData']
        })
      } else {
        // 返回分享信息
        shareResove(this.defaultShareInfo)
      }
    })
  },
}