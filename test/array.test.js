import arrays from '../src/array/arrays'
import chai from 'chai';

const { expect } = chai

describe('diffElement', () => {
  it('[1, 2, 3] 与 [1, 3, 5] 的不同元素为 [2, 5]', () => {
    expect(arrays.diffElement([1, 2, 3], [1, 3, 5])).to.be.deep.equal([2, 5]);
  });
});

const objArr1 = [{ name: "barry", age: 40 }, { name: "alex", age: 30 }]
const objArr2 = [{ name: "vivi", age: 30 }, { name: "alex", age: 30 }]
describe('diffObject', () => {
  it(`${JSON.stringify(objArr1)} 与 ${JSON.stringify(objArr2)} 的不同元素为 [{name: "barry", age: 40}, {name: "vivi", age: 30}]`, () => {
    expect(arrays.diffObject(objArr1, objArr2, (a1, a2) => a1.name === a2.name && a1.age === a2.age))
      .to.be.deep.equal([{ name: "barry", age: 40 }, { name: "vivi", age: 30 }]);
  });
});
