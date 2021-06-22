const expect = require('chai').expect
const webIME = require('../index.js')

describe('Test sarmayIme =>', () => {
  it('lang:kk;input key:q;input value:й;', function () {
    expect(webIME('kk', {
      key: 'q',
      target:{
        value: '',
        selectionStart: 0,
        selectionEnd: 0,
        setSelectionRange: () => {}
      },
      preventDefault: () => {}
    })).to.be.equal('й')
  })
  it('lang:kz;input key:q;input value:چ;', function () {
    expect(webIME('kz', {
      key: 'q',
      target:{
        value: '',
        selectionStart: 0,
        selectionEnd: 0,
        setSelectionRange: () => {}
      },
      preventDefault: () => {}
    })).to.be.equal('چ')
  })
  it('lang:ug;input key:s;input value:س;', function () {
    expect(webIME('kz', {
      key: 's',
      target:{
        value:'',
        selectionStart: 0,
        selectionEnd: 0,
        setSelectionRange: () => {}
      },
      preventDefault: () => {}
    })).to.be.equal('س')
  })
  it('lang:kg;input key:k;input value:ك;', function () {
    expect(webIME('kz', {
      key: 'k',
      target:{
        value: '',
        selectionStart: 0,
        selectionEnd: 0,
        setSelectionRange: () => {}
      },
      preventDefault: () => {}
    })).to.be.equal('ك')
  })
})
