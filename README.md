# Daily-UI 组件库

Hi，欢迎使用 **Daily-UI** 组件库，**Daily-UI** 应用平台主要是微信小程序端，使用原生 JS 开发，支持：Less、icon-font 的使用，可以配置全局振动反馈。速度还不错，尽可能贴近小程序端使用需求，遵循用户习惯，着重用户体验感，试试吧~

以下内容基于组件维度，从演示、使用和参数配置角度描述

组件库中如果需要使用图标，需要前置引用：mini-program-iconfont-cli 图标组件库，详细信息：[mini-program-iconfont-cli](https://github.com/iconfont-cli/mini-program-iconfont-cli)

```
npm install mini-program-iconfont-cli --save -dev
```

or

```
yarn add mini-program-iconfont-cli --dev
```

<br />

## 按钮组件

### 演示

### 使用

```
<d-button
size="2"
title="{{title}}"
iconName="{{iconName}}"
iconSize="{{iconSize}}"
iconPaddingsizeBottom="{{iconPaddingsizeBottom}}"
catch:onTap="handleManage" />
```

### 配置参数

| 属性                     | 说明                                                   | 类型    | 默认值                 |
| ------------------------ | ------------------------------------------------------ | ------- | ---------------------- |
| size                     | 按钮默认尺寸，0:大尺寸，1:中等尺寸，2:小尺寸           | Number  | 0                      |
| width                    | 强制按钮宽度，缺省为 size 默认宽度                     | Number  | 0                      |
| height                   | 强制按钮高度，缺省为 size 默认高度                     | Number  | 0                      |
| title                    | 按钮上的文字                                           | String  | ''                     |
| bgColor                  | 按钮的背景颜色                                         | String  | '#16A085'              |
| textColor                | 按钮上文字和图标颜色                                   | String  | '#FFFFFF'              |
| iconName                 | 按钮图标，引入 iconfont 的图标名称                     | String  | ''                     |
| iconSize                 | 按钮图标大小，单位 rpx                                 | Number  | 0                      |
| iconPaddingBottom        | 按钮中图标向上偏移量，单位 rpx                         | Number  | 0                      |
| disable                  | 按钮是否禁用                                           | Boolean | false                  |
| disableBgColor           | 禁用状态下按钮颜色                                     | String  | 'rgba(114,121,134,.5)' |
| loading                  | 按钮是否为加载状态，加载状态下点击不可用               | boolean | false                  |
| loadingIconSize          | 按钮加载状态图标尺寸                                   | Number  | 0                      |
| loadingIconPaddingBottom | 按钮加载状态,图标向上偏移量，单位 rpx                  | Number  | 0                      |
| openType                 | 绑定按钮组件上微信开放能力（例如：share、feedback 等） | String  | ''                     |
| innerId                  | 绑定在按钮组件上 id，通常作为分享按钮时使用            | String  | ''                     |

### 回调函数

| 函数名 | 说明                 | 类型     |
| ------ | -------------------- | -------- |
| onTap  | 点击按钮后触发的回调 | ()=>void |

<br />

## 展开按钮组件

### 演示

### 使用

```
<d-spread-button
title="全部"
color="{{common.greenColor}}"
isSpread="{{isSpread}}"
catch:onSpreadButtonTap="handleSpreadButtonTap"
loading="{{loading}}" />
```

### 配置参数

| 属性       | 说明                                                 | 类型    | 默认值    |
| ---------- | ---------------------------------------------------- | ------- | --------- |
| title      | 展开按钮的文字                                       | String  | '展开'    |
| color      | 展开按钮文字和分割线颜色                             | String  | '#16A085' |
| isSpread   | 是否为展开状态                                       | Boolean | false     |
| loading    | 是否为加载状态                                       | Boolean | false     |
| iconAlways | 是否允许改变按钮状态（默认收起时 icon 会旋转 90 度） | Boolean | false     |

### 回调函数

| 函数名 | 说明                                 | 类型                     |
| ------ | ------------------------------------ | ------------------------ |
| onTap  | 点击按钮时触发，传入点击后的按钮状态 | (isSpread:boolean)=>void |

<br />

## 开关组件

### 演示

### 使用

```
<d-switch
value="{{switchValue}}"
disable="{{loading}}"
catch:onChange="handleSwitchChange">
</d-switch>
```

### 配置参数

| 属性       | 说明                     | 类型    | 默认值    |
| ---------- | ------------------------ | ------- | --------- |
| color      | 开启状态时的背景色       | String  | '#16A085' |
| offColor   | 关闭状态时的背景色       | String  | '#727986' |
| value      | 开关状态                 | Boolean | false     |
| disable    | 开关按钮是否禁用         | Boolean | false     |
| hasInitAns | 初始赋值时是否有动画效果 | Boolean | false     |

## 顶部导航组件

### 演示

### 使用

```
<d-navigation
title="{{title}}"
bgColor="{{common.greenColor}}"
textColor="#FFF"
iconShow="{{false}}" />
```

### 配置参数

| 属性      | 说明                                 | 类型    | 默认值             |
| --------- | ------------------------------------ | ------- | ------------------ |
| loading   | 导航条是否为加载状态                 | Boolean | false              |
| title     | 顶部导航条标题                       | String  | ''                 |
| iconShow  | 是否显示左侧胶囊按钮                 | Boolean | true               |
| textColor | 标题文字颜色                         | String  | '#000000'          |
| bgColor   | 导航条背景颜色                       | String  | '#FFFFFF'          |
| mainPath  | 导航条左侧胶囊按钮，点击主页跳转路径 | String  | '/pages/main/main' |

<br/>

## 底部弹框组件

支持 按钮关闭、下滑关闭、点击蒙层关闭，当数据垂直高度超过弹层可视区域，出现滚动条

### 演示

### 使用

```
<d-popup
title="{{title}}"
visible="{{false}}"  />
```

### 配置参数

| 属性    | 说明             | 类型    | 默认值 |
| ------- | ---------------- | ------- | ------ |
| title   | 顶部导航条标题   | String  | ''     |
| visible | 上滑弹窗是否可见 | Boolean | true   |

### 插槽

| 名称    | 说明                 |
| ------- | -------------------- |
| content | 上滑弹窗显示时的内容 |

<br />

## 全页弹窗组件

### 演示

### 使用

```
<d-cover-page
title="{{title}}"
visible="{{visible}}"
loading="{{loading}}"
allowClose="{{allowClose}}">
```

### 配置参数

| 属性        | 说明                                                                | 类型    | 默认值 |
| ----------- | ------------------------------------------------------------------- | ------- | ------ |
| title       | 全页弹窗标题                                                        | String  | ''     |
| visible     | 全页弹窗是否可见                                                    | Boolean | true   |
| loading     | 是否为加载状态                                                      | Boolean | false  |
| allowClose  | 全页弹窗关闭按钮和关闭区域是否可见                                  | Boolean | true   |
| closeBySelf | 关闭是否由自身决定。如果为 false，触发 onClose 回调但不影响可见装填 | Boolean | true   |

### 回调函数

| 函数名  | 说明                       | 类型                    |
| ------- | -------------------------- | ----------------------- |
| onClose | 全页弹窗通过按钮关闭时触发 | (visible:boolean)=>void |

<br />

## 底部弹窗选择器组件（单项多列选择）

### 演示

### 使用

```
<d-picker
visible="{{visible}}"
title="选择元素"
value="{{pickerValue}}"
options="{{pickerOptions}}" catch:onConfirm="handlePickerConfirm">
</d-picker>
```

### 配置参数

| 属性             | 说明                                                                                                            | 类型    | 默认值    |
| ---------------- | --------------------------------------------------------------------------------------------------------------- | ------- | --------- |
| title            | 底部弹窗标题                                                                                                    | String  | ''        |
| visible          | 底部弹窗是否可见                                                                                                | Boolean | true      |
| confirmTextColor | 确认按钮字体颜色                                                                                                | String  | '#16A085' |
| cancelTextColor  | 取消按钮字体颜色                                                                                                | String  | '#727986' |
| options          | 选择器选项数组，二维数组，第一维度代表列，第二维度代表备选项，选项支持字符串和 {label:'元素 1',id:1} 形式的数组 | Array   | []        |
| value            | 选择器当前选项值，数组长度与选项数组长度相同，值从 0 开始                                                       | Array   | []        |

### 回调函数

| 函数名    | 说明                                       | 类型             |
| --------- | ------------------------------------------ | ---------------- |
| onClose   | 底部弹窗通过按钮关闭时触发                 | ()=>void         |
| onConfirm | 选项确认后，弹窗关闭时触发，返回选项值数组 | (value:[])=>void |

<br/>

## 底部弹窗列表选择器组件（单项单列选择）

底部弹窗列表选择器组件 只支持单列选择，当列表累计高度大于 8.5 行时，内部支持滚动条滚动

### 演示

### 使用

```
<d-list-picker
title="标题"
visible="{{visible}}"
options="{{pickerOptions}}"
value="{{pickerValue}}"
confirmTextColor="{{common.greenColor}}"
cancelTextColor="{{common.greyColor}}"
lineTextColor="{{common.blackColor}}"
catch:onConfirm="handleListPickerConfirm">
</d-list-picker>
```

### 配置参数

| 属性             | 说明                                                                                                                         | 类型    | 默认值    |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------- | ------- | --------- |
| title            | 底部弹窗标题                                                                                                                 | String  | ''        |
| visible          | 底部弹窗是否可见                                                                                                             | Boolean | true      |
| confirmTextColor | 确认按钮字体颜色                                                                                                             | String  | '#16A085' |
| cancelTextColor  | 取消按钮字体颜色                                                                                                             | String  | '#727986' |
| lineTextColor    | 选项字体颜色                                                                                                                 | String  | '#444444' |
| options          | 选择器选项数组，二维数组，第一维度代表列，第二维度代表备选项，选项支持字符串和 {title:'选项标题',desc:'选项描述'} 形式的数组 | Array   | []        |
| lineNumber       | 最大显示行数，当选项数超过最大显示行数时，内部出现滚动条                                                                     | Number  | 8.5       |
| showIcon         | 是否显示每个选项右侧的箭头图标                                                                                               | Boolean | ture      |

### 回调函数

| 函数名    | 说明                                           | 类型                 |
| --------- | ---------------------------------------------- | -------------------- |
| onClose   | 底部弹窗通过按钮关闭时触发                     | ()=>void             |
| onConfirm | 选项确认后，弹窗关闭时触发，返回选中的选项索引 | (value:number)=>void |

<br/>

## 底部弹窗多项选择器组件（多项单列选择）

底部弹窗多项选择器组件 只支持单列选择，使用复选框形式多项选择，当列表累计高度大于 8.5 行时，内部支持滚动条滚动

### 演示

### 使用

```
<d-checkbox-picker
visible="{{checkboxPickerShow}}"
title="多项选择器"
options="{{chekboxOptions}}"
value="{{chekboxValue}}"
confirmTextColor="{{common.greenColor}}"
cancelTextColor="{{common.greyColor}}"
lineTextColor="{{common.blackColor}}"  catch:onConfirm="handleCheckboxConfirm">
</d-checkbox-picker>
```

### 配置参数

| 属性             | 说明                                                                                                            | 类型    | 默认值    |
| ---------------- | --------------------------------------------------------------------------------------------------------------- | ------- | --------- |
| title            | 底部弹窗标题                                                                                                    | String  | ''        |
| visible          | 底部弹窗是否可见                                                                                                | Boolean | true      |
| confirmTextColor | 确认按钮字体颜色                                                                                                | String  | '#16A085' |
| cancelTextColor  | 取消按钮字体颜色                                                                                                | String  | '#727986' |
| lineTextColor    | 选项字体颜色                                                                                                    | String  | '#444444' |
| options          | 选择器选项数组，二维数组，第一维度代表列，第二维度代表备选项，选项支持字符串和 {label:'元素 1',id:1} 形式的数组 | Array   | []        |
| value            | 初始化复选选项，选项从 0 开始，比如[0,1,5]                                                                      | Array   | []        |
| lineNumber       | 最大显示行数，当选项数超过最大显示行数时，内部出现滚动条                                                        | Number  | 8.5       |

### 回调函数

| 函数名    | 说明                                                          | 类型             |
| --------- | ------------------------------------------------------------- | ---------------- |
| onClose   | 底部弹窗通过按钮关闭时触发                                    | ()=>void         |
| onConfirm | 选项确认后，弹窗关闭时触发，返回选中的选项索引列表(从 0 开始) | (value:[])=>void |

<br/>

## 底部弹窗日期选择器组件（单项多列选择）

底部弹窗日期选择器组件 有两种模式，年月日选择模式和日月选择模式，当为日月选择模式时，默认为平年

### 演示

### 使用

```
<d-date-picker
startTime="{{startTimestamp}}"
endTime="{{endTimestamp}}"
visible="{{visible}}"
valueTime="{{currentTimestamp}}"
title="选择目标日"
catch:onConfirm="handleTimestampPickerConfirm" catch:onClose="hiddlePickerClose">
</d-date-picker>
```

### 配置参数

| 属性             | 说明                                                                                                       | 类型    | 默认值    |
| ---------------- | ---------------------------------------------------------------------------------------------------------- | ------- | --------- |
| title            | 底部弹窗标题                                                                                               | String  | ''        |
| visible          | 底部弹窗是否可见                                                                                           | Boolean | true      |
| confirmTextColor | 确认按钮字体颜色                                                                                           | String  | '#16A085' |
| cancelTextColor  | 取消按钮字体颜色                                                                                           | String  | '#727986' |
| startTime        | “年月日”模式下，选择日期的起始日期时间戳                                                                   | Number  | 0         |
| endTime          | “年月日”模式下，选择日期的截止起日期时间戳                                                                 | Number  | 0         |
| valueTime        | “年月日”模式下，选择日期默认状态下的日期时间戳，当时间戳不在 startTime 与 endTime 区间时，强制为 startTime | Number  | 0         |
| month            | “月日”模式下，选择的月份值，月份从 0 开始                                                                  | Number  | -1        |
| day              | “月日”模式下，选择的月中第几天，选值从 0 开始                                                              | Number  | -1        |

### 回调函数

| 函数名    | 说明                                                                                                                         | 类型          |
| --------- | ---------------------------------------------------------------------------------------------------------------------------- | ------------- | --------- |
| onClose   | 底部弹窗通过按钮关闭时触发                                                                                                   | ()=>void      |
| onConfirm | 选项确认后，弹窗关闭时触发，在“年月日”模式下，返回选中的日期的时间戳，在“月日”模式下返回[月(从 0 开始)，日(从 0 开始)]的数组 | (value:Number | [])=>void |

<br/>

## 对话框组件

### 演示

### 使用

```
<d-dialog
visible="{{dialogVisble}}"
iconShow="{{false}}"
title="请确认是否保存?"
catch:onConfirm="handleAddConfirm" />
```

### 配置参数

| 属性             | 说明                     | 类型    | 默认值    |
| ---------------- | ------------------------ | ------- | --------- |
| title            | 对框框标题               | String  | ''        |
| visible          | 对框框是否可见           | Boolean | true      |
| confirmTextColor | 确认按钮字体颜色         | String  | '#16A085' |
| cancelTextColor  | 取消按钮字体颜色         | String  | '#727986' |
| titleTextColor   | 标题问题字体颜色         | String  | '#16A085' |
| iconShow         | 是否展示标题前的问号图标 | Boolean | true      |

### 回调函数

| 函数名    | 说明                   | 类型                  |
| --------- | ---------------------- | --------------------- |
| onClose   | 对话框关闭时触发       | ()=>void              |
| onConfirm | 对话框点击确定按钮触发 | (value:boolean)=>void |

<br/>

## 消息提示框组件

### 演示

### 使用

```
<d-notify
mode="{{notify}}" />
```

### 配置参数

| 属性      | 说明                                                                                                                                                                              | 类型    | 默认值    |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | --------- |
| title     | 消息框反馈信息                                                                                                                                                                    | String  | ''        |
| visible   | 消息框是否可见                                                                                                                                                                    | Boolean | false     |
| during    | 消息框弹出持续时长（单位：毫秒）                                                                                                                                                  | Number  | 1500      |
| bgColor   | 消息框背景颜色                                                                                                                                                                    | String  | '#16A085' |
| colorType | 消息框背景颜色类型（0:#16A085; 1:#EC492C）支持在组件中预置                                                                                                                        | Number  | 0         |
| iconType  | 消息框图标类型（0:'公告'；1:'成功'；2:'失败';）支持在组件中预置                                                                                                                   | Number  | 0         |
| mode      | 显示模式，支持在组件内预置多种显示模型，例如（2: {title: "查询失败，请输入有效信息",visible: true,iconType: 2,colorType: 1}）在外层直接调用，mode:2，规范消息框显示，增加复用能力 | Number  | 0         |
