/**
 * @module urls
 */
const urls = {

  /**
   * 解析 GET 请求 参数
   * @param  {string} url  url
   * @return {object}      query param object or {}
   * @alias module:urls
   */
  parseQueryParam(url) {
    const obj = {};
    const hasParam = url && url.indexOf('?') > -1;
    if (!hasParam) {
      return {};
    }
    let params = url.split('?')[1];
    if (!params) {
      return {};
    }
    params = decodeURIComponent(params);
    const paramsArr = params.split('&');
    paramsArr.forEach(item => {
      const paramMap = item.split('=');
      obj[paramMap[0]] = paramMap[1] || '';
    })
    return obj;
  }
}

export default urls
