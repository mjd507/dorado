/**
 * @module images
 */
const images = {
  /**
   * 判断浏览器是否支持 webP 格式
   * @return {Boolean} [description]
   * @alias module:images
   */
  isSupportWebP() {
    return !![].map && document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') === 0;
  }
}

export default images
