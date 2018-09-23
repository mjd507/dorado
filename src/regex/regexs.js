/**
 * @module regexs
 */
const regexs = {
  /**
   * 是否是邮箱
   * @param  {string}  str [description]
   * @return {Boolean}     true if is email
   * @alias module:regexs
   */
  isEmail(str) {
    return /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4})*$/.test(str);
  },
  /**
   * 是否是身份证
   * @param  {string}  str [description]
   * @return {Boolean}     true if is id-card
   * @alias module:regexs
   */
  isIdCard(str) {
    return /^[1-9]\d{5}(19|20)\d{2}((0[1-9])|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}[0-9Xx]$/.test(str)
  },
  /**
   * 是否是手机号
   * @param  {string}  str [description]
   * @return {Boolean}     true if is phone number
   * @alias module:regexs
   */
  isPhoneNumber(str) {
    return /^1\d{10}$/.test(str)
  },
  /**
   * 是否是 url
   * @param  {string}  str [description]
   * @return {Boolean}     true if is url
   * @alias module:regexs
   */
  isUrl(str) {
    return /^((http|https):\/\/)[^\s]*$/.test(str)
  }

}

export default regexs
