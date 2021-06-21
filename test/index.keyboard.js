const expect = require('chai').expect
const webIME = require('../lib/index.js')

describe('测试webIME功能', () => {
  it('测试输入：', function () {
    expect(webIME('kk', {
      key: 'q',
      preventDefault: () => {}
    })).to.be.equal('й')
  })
})
