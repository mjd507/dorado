/**
 * @module arrays
 */
const arrays = {
  /**
   * 比较两个数组不同的元素，并收集全部的不同元素
   * @param  {Array} arr1 [description]
   * @param  {Array} arr2 [description]
   * @return {Array}      [description]
   * @alias module:arrays
   */
  diffElement(arr1, arr2) {
    const uniqueResultOne = arr1.filter(el => arr2.indexOf(el) === -1)
    const uniqueResultTwo = arr2.filter(el => arr1.indexOf(el) === -1)
    return uniqueResultOne.concat(uniqueResultTwo)
  },
  /**
   * 取出数组中不同的对象元素
   * @param  {Array} arr1      [description]
   * @param  {Array} arr2      [description]
   * @param  {Array} condition 对象唯一的条件 function
   * @return {Array}           [description]
   *
   * @alias module:arrays
   * 
   * @example
   * ```javascript
   * const arrA = [{name: "barry", age: 40}, {name: "alex", age: 30}, {name: "andrew", age: 25}]
   * const arrB = [{name: "vivi", age: 30}, {name: "alex", age: 30}, {name: "andrew", age: 25}]
   * const unique = diffObject(arrA, arrB, (a, b)=> a.name === b.name && a.age === b.age)
   * console.log(unique) // [{name: "barry", age: 40}, {name: "vivi", age: 30}]
   * ```
   */
  diffObject(arr1, arr2, condition) {
    const uniqueResultOne = arr1.filter(el => !arr2.some(el2 => condition(el2, el)))
    const uniqueResultTwo = arr2.filter(el2 => !arr1.some(el => condition(el, el2)))
    return uniqueResultOne.concat(uniqueResultTwo)
  }

}

export default arrays
