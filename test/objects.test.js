import objects from '../src/object/objects'
import chai from 'chai';

const { expect } = chai

describe('isArray', () => {
  it('[1, 2, 3] 是数组，{ a: 3 } 不是数组', () => {
    expect(objects.isArray([1, 2, 3])).to.be.equal(true);
    expect(objects.isArray({ a: 3 })).to.be.equal(false);
  });
});

const obj = { m: 1, o: { n: "n" }, func: () => 1 }
describe('deepClone', () => {
  it(`深拷贝 { m: 1, o: { n: "n" }, func: () => 1 } 对象与原对象地址不相等，各属性值相等，各属性对象地址不相等，各属性函数值地址相等`, () => {
    expect(objects.deepClone(obj)).to.be.not.equal(obj);
    expect(objects.deepClone(obj)).to.be.deep.equal(obj);
    expect(objects.deepClone(obj).o).to.be.not.equal(obj.o);
    expect(objects.deepClone(obj).func).to.be.equal(obj.func);
  });
});
