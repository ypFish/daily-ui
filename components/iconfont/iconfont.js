Component({
  properties: {
    // suozhu | locksuo | jiesuo | xiazai1 | fenxiangx | taiyang | qidongkaiguanf | taiyang1 | dingyue1 | daiban | peizhi5 | lajitong | sort | bianji6 | shuaxin | xingshi | wendu | shuye | huodong_2 | jian2 | sousuo | diandiandian | paixu7 | dingyue | fenlei | geren2 | touxiang-fill | dingwei | huojian4 | gonggao | jia2 | kaijinduose_da10yuanjiao | taiyangchunse_da10yuanjiao | caozuo-kaiguan | rili-cuxiantiao | lvyou1 | biaoge2 | daka4 | lishijilu | piaohao | quanqiu | gupiao2 | gongmujijin | xinwen1 | xinwen4 | shuji-copy | shengliqi | shouyinjixian | shengri-weixuan | cheliang | tianqi1 | jieri | tishi | biaoqing_3 | biaoqing_2 | fuxuan | close1 | loadingroll | home1 | you | zuo
    name: {
      type: String,
    },
    // string | string[]
    color: {
      type: null,
      observer: function(color) {
        this.setData({
          colors: this.fixColor(),
          isStr: typeof color === 'string',
        });
      }
    },
    size: {
      type: Number,
      value: 18,
      observer: function(size) {
        this.setData({
          svgSize: size / 750 * wx.getSystemInfoSync().windowWidth,
        });
      },
    },
  },
  data: {
    colors: '',
    svgSize: 18 / 750 * wx.getSystemInfoSync().windowWidth,
    quot: '"',
    isStr: true,
  },
  methods: {
    fixColor: function() {
      var color = this.data.color;
      var hex2rgb = this.hex2rgb;

      if (typeof color === 'string') {
        return color.indexOf('#') === 0 ? hex2rgb(color) : color;
      }

      return color.map(function (item) {
        return item.indexOf('#') === 0 ? hex2rgb(item) : item;
      });
    },
    hex2rgb: function(hex) {
      var rgb = [];

      hex = hex.substr(1);

      if (hex.length === 3) {
        hex = hex.replace(/(.)/g, '$1$1');
      }

      hex.replace(/../g, function(color) {
        rgb.push(parseInt(color, 0x10));
        return color;
      });

      return 'rgb(' + rgb.join(',') + ')';
    }
  }
});
