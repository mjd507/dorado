/**
 * @module objects
 */
const objects = {
  /**
   * 判断对象是否为数组
   * @param  {object}  obj object
   * @return {Boolean}     true if is array
   * @alias module:objects
   */
  isArray(obj) {
    if (Array.isArray) {
      return Array.isArray(obj);
    }
    return Object.prototype.toString.call(obj) === '[object Array]';
  },
  /**
   * 深拷贝对象
   * @param  {object} obj object
   * @return {object}     the deep copy of the object
   * @alias module:objects
   */
  deepClone(obj) {
    if (!obj || typeof obj !== 'object') {
      return obj;
    }
    let copy;
    // Handle Date
    if (obj instanceof Date) {
      copy = new Date();
      copy.setTime(obj.getTime());
      return copy;
    }
    // Handle Array
    if (this.isArray(obj)) {
      copy = [];
      for (let i = 0, len = obj.length; i < len; i++) {
        copy[i] = this.deepClone(obj[i]);
      }
      return copy;
    }
    // Handle Object
    if (obj instanceof Object) {
      copy = {};
      for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          copy[key] = this.deepClone(obj[key])
        }
      }
      return copy;
    }
    throw new Error("Unable to copy object! Its type isn't supported.");
  }
}

export default objects
