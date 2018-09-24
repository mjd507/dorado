## dorado
[![Build Status](https://travis-ci.com/mjd507/dorado.svg?branch=master)](https://travis-ci.com/mjd507/dorado)    [![Coverage Status](https://coveralls.io/repos/github/mjd507/dorado/badge.svg)](https://coveralls.io/github/mjd507/dorado)

## Modules

<dl>
<dt><a href="#module_arrays">arrays</a></dt>
<dd></dd>
<dt><a href="#module_dates">dates</a></dt>
<dd></dd>
<dt><a href="#module_devices">devices</a></dt>
<dd></dd>
<dt><a href="#module_eventBus">eventBus</a></dt>
<dd></dd>
<dt><a href="#module_functions">functions</a></dt>
<dd></dd>
<dt><a href="#module_images">images</a></dt>
<dd></dd>
<dt><a href="#module_objects">objects</a></dt>
<dd></dd>
<dt><a href="#module_regexs">regexs</a></dt>
<dd></dd>
<dt><a href="#module_urls">urls</a></dt>
<dd></dd>
</dl>

<a name="module_arrays"></a>

## arrays

* [arrays](#module_arrays)
    * [diffElement(arr1, arr2)](#exp_module_arrays--diffElement) ⇒ <code>Array</code> ⏏
    * [diffObject(arr1, arr2, condition)](#exp_module_arrays--diffObject) ⇒ <code>Array</code> ⏏

<a name="exp_module_arrays--diffElement"></a>

### diffElement(arr1, arr2) ⇒ <code>Array</code> ⏏
比较两个数组不同的元素，并收集全部的不同元素

**Kind**: Exported function  
**Returns**: <code>Array</code> - [description]  

| Param | Type | Description |
| --- | --- | --- |
| arr1 | <code>Array</code> | [description] |
| arr2 | <code>Array</code> | [description] |

<a name="exp_module_arrays--diffObject"></a>

### diffObject(arr1, arr2, condition) ⇒ <code>Array</code> ⏏
取出数组中不同的对象元素

**Kind**: Exported function  
**Returns**: <code>Array</code> - [description]  

| Param | Type | Description |
| --- | --- | --- |
| arr1 | <code>Array</code> | [description] |
| arr2 | <code>Array</code> | [description] |
| condition | <code>Array</code> | 对象唯一的条件 function |

**Example**  
```javascript
const arrA = [{name: "barry", age: 40}, {name: "alex", age: 30}, {name: "andrew", age: 25}]
const arrB = [{name: "vivi", age: 30}, {name: "alex", age: 30}, {name: "andrew", age: 25}]
const unique = diffObject(arrA, arrB, (a, b)=> a.name === b.name && a.age === b.age)
console.log(unique) // [{name: "barry", age: 40}, {name: "vivi", age: 30}]
```
<a name="module_dates"></a>

## dates
<a name="exp_module_dates--now"></a>

### now() ⇒ <code>number</code> ⏏
获取当前时间戳

**Kind**: Exported function  
**Returns**: <code>number</code> - [description]  
<a name="module_devices"></a>

## devices

* [devices](#module_devices)
    * [getOs()](#exp_module_devices--getOs) ⇒ <code>string</code> ⏏
    * [isiOS()](#exp_module_devices--isiOS) ⇒ <code>Boolean</code> ⏏
    * [isAndroid()](#exp_module_devices--isAndroid) ⇒ <code>Boolean</code> ⏏
    * [isWeiXinEnv()](#exp_module_devices--isWeiXinEnv) ⇒ <code>Boolean</code> ⏏
    * [screenWidth()](#exp_module_devices--screenWidth) ⇒ <code>number</code> ⏏
    * [screenHeight()](#exp_module_devices--screenHeight) ⇒ <code>number</code> ⏏

<a name="exp_module_devices--getOs"></a>

### getOs() ⇒ <code>string</code> ⏏
获取当前操作系统类型

**Kind**: Exported function  
**Returns**: <code>string</code> - 'iOS | android | WindowsPhone | MacOS | Windows | Linux | unknown'  
<a name="exp_module_devices--isiOS"></a>

### isiOS() ⇒ <code>Boolean</code> ⏏
判断是否处于 iOS 设备运行

**Kind**: Exported function  
**Returns**: <code>Boolean</code> - true is running in iOS  
<a name="exp_module_devices--isAndroid"></a>

### isAndroid() ⇒ <code>Boolean</code> ⏏
判断是否处于 Android 设备运行

**Kind**: Exported function  
**Returns**: <code>Boolean</code> - true is running in weixin  
<a name="exp_module_devices--isWeiXinEnv"></a>

### isWeiXinEnv() ⇒ <code>Boolean</code> ⏏
判断是否处于微信环境运行

**Kind**: Exported function  
**Returns**: <code>Boolean</code> - true is running in weixin  
<a name="exp_module_devices--screenWidth"></a>

### screenWidth() ⇒ <code>number</code> ⏏
获取屏幕宽度

**Kind**: Exported function  
**Returns**: <code>number</code> - screen width  
<a name="exp_module_devices--screenHeight"></a>

### screenHeight() ⇒ <code>number</code> ⏏
获取屏幕高度

**Kind**: Exported function  
**Returns**: <code>number</code> - screen height  
<a name="module_eventBus"></a>

## eventBus

* [eventBus](#module_eventBus)
    * [emit(event)](#exp_module_eventBus--emit) ⇒ <code>void</code> ⏏
    * [on(event, func)](#exp_module_eventBus--on) ⇒ <code>void</code> ⏏
    * [off(event)](#exp_module_eventBus--off) ⇒ <code>void</code> ⏏

<a name="exp_module_eventBus--emit"></a>

### emit(event) ⇒ <code>void</code> ⏏
发布事件

**Kind**: Exported function  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>string</code> | 事件名称 |

<a name="exp_module_eventBus--on"></a>

### on(event, func) ⇒ <code>void</code> ⏏
订阅事件

**Kind**: Exported function  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>string</code> | 事件名称 |
| func | <code>function</code> | 事件处理函数 |

<a name="exp_module_eventBus--off"></a>

### off(event) ⇒ <code>void</code> ⏏
取消订阅 (不传事件名称，则取消所有订阅)

**Kind**: Exported function  

| Param | Type | Description |
| --- | --- | --- |
| event | <code>string</code> | 事件名称 |

<a name="module_functions"></a>

## functions

* [functions](#module_functions)
    * [throttle(func, delay, options)](#exp_module_functions--throttle) ⇒ <code>function</code> ⏏
    * [debounce(func, delay, immediate)](#exp_module_functions--debounce) ⇒ <code>function</code> ⏏

<a name="exp_module_functions--throttle"></a>

### throttle(func, delay, options) ⇒ <code>function</code> ⏏
节流函数 （在指定的时间内只会执行一次）

**Kind**: Exported function  
**Returns**: <code>function</code> - [description]  

| Param | Type | Description |
| --- | --- | --- |
| func | <code>function</code> | 要执行的函数 |
| delay | <code>number</code> | 延迟执行的毫秒数 |
| options | <code>object</code> | 包含两个参数 leading => true 表示节流函数会首次执行  trailing => true 表示节流函数会最后执行一次 |

**Example**  
```javascript
const throttled = throttle(() => {}, 500)
window.scroll(throttled)
```
<a name="exp_module_functions--debounce"></a>

### debounce(func, delay, immediate) ⇒ <code>function</code> ⏏
防抖函数 （在指定的时间内，每次触发，都需重新等待指定的时间）
使用场景：提交表单（防止多次提交）

**Kind**: Exported function  
**Returns**: <code>function</code> - [description]  

| Param | Type | Description |
| --- | --- | --- |
| func | <code>function</code> | [description] |
| delay | <code>number</code> | [description] |
| immediate | <code>boolean</code> | [description] |

**Example**  
```javascript
const debounced = debounce(()=>{}, 1000, true)

onPostForm() {
  debounced();
}
```
<a name="module_images"></a>

## images
<a name="exp_module_images--isSupportWebP"></a>

### isSupportWebP() ⇒ <code>Boolean</code> ⏏
判断浏览器是否支持 webP 格式

**Kind**: Exported function  
**Returns**: <code>Boolean</code> - [description]  
<a name="module_objects"></a>

## objects

* [objects](#module_objects)
    * [isArray(obj)](#exp_module_objects--isArray) ⇒ <code>Boolean</code> ⏏
    * [deepClone(obj)](#exp_module_objects--deepClone) ⇒ <code>object</code> ⏏

<a name="exp_module_objects--isArray"></a>

### isArray(obj) ⇒ <code>Boolean</code> ⏏
判断对象是否为数组

**Kind**: Exported function  
**Returns**: <code>Boolean</code> - true if is array  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>object</code> | object |

<a name="exp_module_objects--deepClone"></a>

### deepClone(obj) ⇒ <code>object</code> ⏏
深拷贝对象

**Kind**: Exported function  
**Returns**: <code>object</code> - the deep copy of the object  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>object</code> | object |

<a name="module_regexs"></a>

## regexs

* [regexs](#module_regexs)
    * [isEmail(str)](#exp_module_regexs--isEmail) ⇒ <code>Boolean</code> ⏏
    * [isIdCard(str)](#exp_module_regexs--isIdCard) ⇒ <code>Boolean</code> ⏏
    * [isPhoneNumber(str)](#exp_module_regexs--isPhoneNumber) ⇒ <code>Boolean</code> ⏏
    * [isUrl(str)](#exp_module_regexs--isUrl) ⇒ <code>Boolean</code> ⏏

<a name="exp_module_regexs--isEmail"></a>

### isEmail(str) ⇒ <code>Boolean</code> ⏏
是否是邮箱

**Kind**: Exported function  
**Returns**: <code>Boolean</code> - true if is email  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | [description] |

<a name="exp_module_regexs--isIdCard"></a>

### isIdCard(str) ⇒ <code>Boolean</code> ⏏
是否是身份证

**Kind**: Exported function  
**Returns**: <code>Boolean</code> - true if is id-card  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | [description] |

<a name="exp_module_regexs--isPhoneNumber"></a>

### isPhoneNumber(str) ⇒ <code>Boolean</code> ⏏
是否是手机号

**Kind**: Exported function  
**Returns**: <code>Boolean</code> - true if is phone number  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | [description] |

<a name="exp_module_regexs--isUrl"></a>

### isUrl(str) ⇒ <code>Boolean</code> ⏏
是否是 url

**Kind**: Exported function  
**Returns**: <code>Boolean</code> - true if is url  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | [description] |

<a name="module_urls"></a>

## urls
<a name="exp_module_urls--parseQueryParam"></a>

### parseQueryParam(url) ⇒ <code>object</code> ⏏
解析 GET 请求 参数

**Kind**: Exported function  
**Returns**: <code>object</code> - query param object or {}  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | url |

