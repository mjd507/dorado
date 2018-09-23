const userAgent = ('navigator' in window && 'userAgent' in navigator && navigator.userAgent) || '';
/**
 * @module devices
 */
const devices = {

  /**
   * 获取当前操作系统类型
   * @return {string} 'iOS | android | WindowsPhone | MacOS | Windows | Linux | unknown'
   * @alias module:devices
   */
  getOs() {
    const appVersion = ('navigator' in window && 'appVersion' in navigator && navigator.appVersion) || '';
    if (/iphone|ipad|ipod|iOS/i.test(userAgent)) return 'iOS'
    if (/android/i.test(userAgent)) return 'android'
    if (/win/i.test(appVersion) && /phone/i.test(userAgent)) return 'WindowsPhone'
    if (/mac/i.test(appVersion)) return 'MacOS'
    if (/win/i.test(appVersion)) return 'Windows'
    if (/linux/i.test(appVersion)) return 'Linux'
    return "unknown"
  },
  /**
   * 判断是否处于 iOS 设备运行
   * @return {Boolean} true is running in iOS
   * @alias module:devices
   */
  isiOS() {
    return /iphone|ipad|ipod|iOS/i.test(userAgent)
  },
  /**
   * 判断是否处于 Android 设备运行
   * @return {Boolean} true is running in weixin
   * @alias module:devices
   */
  isAndroid() {
    return /android/i.test(userAgent)
  },
  /**
   * 判断是否处于微信环境运行
   * @return {Boolean} true is running in weixin
   * @alias module:devices
   */
  isWeiXinEnv() {
    return /MicroMessenger/i.test(userAgent);
  },
  /**
   * 获取屏幕宽度
   * @return {number} screen width
   * @alias module:devices
   */
  screenWidth() {
    return document.documentElement.clientWidth;
  },
  /**
   * 获取屏幕高度
   * @return {number} screen height
   * @alias module:devices
   */
  screenHeight() {
    return document.documentElement.clientHeight;
  }
}

export default devices;
