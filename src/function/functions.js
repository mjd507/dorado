import dates from '../date/dates'
/**
 * @module functions
 */
const functions = {
  /**
   * 节流函数 （在指定的时间内只会执行一次）
   * @param  {function} func  要执行的函数
   * @param  {number} delay   延迟执行的毫秒数
   * @param  {object} options 包含两个参数 leading => true 表示节流函数会首次执行  trailing => true 表示节流函数会最后执行一次
   * @return {function}       [description]
   * @alias module:functions
   *
   * @example
   * ```javascript
   * const throttled = throttle(() => {}, 500)
   * window.scroll(throttled)
   * ```
   */
  throttle(func, delay, options) {
    let context, args, timeout, result;
    if (!options) { options = {} }

    let preTime = 0;

    /**
     * 清除引用，防止内存泄漏
     * @return {void} [description]
     */
    const clear = () => {
      timeout = null;
      context = null;
      args = null;
    }

    /**
     * 设置最后一次执行
     * @return {function} [description]
     */
    const later = () => {
      preTime = options.leading === false ? 0 : dates.now()
      result = func.apply(context, args);
      clear()
    }

    /**
     * 具体的节流函数
     * @return {function} [description]
     */
    const throttled = () => {
      context = this;
      args = arguments;
      const now = dates.now();
      // 首次执行到该函数，并且设置首次不执行 即 options.leading = false
      if (!preTime && options.leading === false) { preTime = now }
      const passedTime = now - preTime
      if (delay <= passedTime) { // 已经到达 delay time，执行函数
        if (timeout) { // 如果有定时器，清空
          clearTimeout(timeout);
        }
        preTime = dates.now();
        result = func.apply(context, args)
        clear();
      } else if (!timeout && options.trailing !== false) { // 如果函数没有执行，但是设置了 trailing，即最后一次执行，则会在间隔时间内最后执行一次
        timeout = setTimeout(later, delay - passedTime);
      }

      return result
    }

    /**
     * 取消定时任务
     * @return {function} [description]
     */
    throttled.cancel = () => {
      clearTimeout(timeout);
      preTime = 0;
      clear();
    };

    return throttled
  },
  /**
   * 防抖函数 （在指定的时间内，每次触发，都需重新等待指定的时间）
   * 使用场景：提交表单（防止多次提交）
   * @param  {function} func      [description]
   * @param  {number} delay     [description]
   * @param  {boolean} immediate [description]
   * @return {function}           [description]
   * @alias module:functions
   * @example
   * ```javascript
   * const debounced = debounce(()=>{}, 1000, true)
   * 
   * onPostForm() {
   *   debounced();
   * }
   * ```
   */
  debounce(func, delay, immediate) {
    let context, args, timeout, result;

    const clear = () => {
      args = null;
    }

    const later = () => {
      timeout = null;
      if (args) {
        result = func.apply(context, args)
      }
    }

    const debounced = () => {
      // 清除定时器
      if (timeout) {
        clearTimeout(timeout);
      }
      context = this;
      args = arguments;
      if (immediate) {
        const callNow = !timeout;
        timeout = setTimeout(later, delay);
        if (callNow) {
          result = func.apply(context, args);
          clear(); // clear agrs 
        }
      } else {
        timeout = setTimeout(later, delay);
      }
      return result
    }

    debounced.cancel = () => {
      clearTimeout(timeout);
      timeout = null;
      context = null;
      args = null;
    }

    return debounced
  }
}

export default functions
