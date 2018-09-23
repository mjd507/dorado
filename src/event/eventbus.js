let eventStore = {};
const busContext = {};

/**
 * @module eventBus
 */
const eventBus = {
  /**
   * 发布事件
   * @param  {string} event 事件名称
   * @return {void}    
   * @alias module:eventBus   
   */
  emit(event) {
    const args = [];
    for (let i = 1; i < arguments.length; i += 1) {
      args.push(arguments[i]);
    }
    for (const ev in eventStore) {
      if (ev === event) {
        eventStore[ev].apply(busContext, args)
        break;
      }
    }
  },
  /**
   * 订阅事件
   * @param  {string} event 事件名称
   * @param  {function} func  事件处理函数
   * @return {void}      
   * @alias module:eventBus   
   */
  on(event, func) {
    if (!eventStore[event]) {
      eventStore[event] = func
    }
  },
  /**
   * 订阅事件 （事件发布后取消该订阅）
   * @param  {string} event [description]
   * @param  {function} func  [description]
   * @return {void}       [description]
   */
  once(event, func) {
    if (!eventStore[event]) {
      eventStore[event] = (...rest) => {
        func.apply(busContext, rest)
        this.off(event)
      }
    }
  },
  /**
   * 取消订阅 (不传事件名称，则取消所有订阅)
   * @param  {string} event 事件名称
   * @return {void} 
   * @alias module:eventBus        
   */
  off(event) {
    if (!event) {
      eventStore = {};
    }
    if (eventStore[event]) {
      eventStore[event] = null;
      delete eventStore[event]
    }
  }
}

export default eventBus
