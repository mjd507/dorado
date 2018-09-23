import regexs from '../src/regex/regexs'
import chai from 'chai';

const { expect } = chai

describe('isEmail', () => {
  it('abc@qq.com 是邮箱', () => {
    expect(regexs.isEmail('abc@qq.com')).to.be.equal(true);
  });
});

describe('isIdCard', () => {
  it('320181199911113333 是身份证', () => {
    expect(regexs.isIdCard('320181199911113333')).to.be.equal(true);
  });
  it('32018119991111333s 不是身份证', () => {
    expect(regexs.isIdCard('32018119991111333s')).to.be.equal(false);
  });
});

describe('isPhoneNumber', () => {
  it('13811112222 是手机号', () => {
    expect(regexs.isPhoneNumber('13811112222')).to.be.equal(true);
  });
  it('138111122 不是是手机号', () => {
    expect(regexs.isPhoneNumber('138111122')).to.be.equal(false);
  });
});

describe('isUrl', () => {
  it('https://baidu.com 是 url', () => {
    expect(regexs.isUrl('https://baidu.com')).to.be.equal(true);
  });
  it('abcbaidu.com  不是 url', () => {
    expect(regexs.isUrl('abcbaidu.com')).to.be.equal(false);
  });
});
