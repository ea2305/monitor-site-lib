const { assert } = require('chai');
const _DEBUG = process.env.NODE_ENV | true

// Data test
const { testCase } = require('./testsuit/domain')
const { protocolValidation, domainValidation } = require('../src/urlValidator')

describe('URL Validations', function() {
  /**
   * Validate protocol input
   */
  it('Case 1: Wrong protocol validation', function () {
    const mistake = 'hqqt'    // Lib only process http and https
    const callback = () => {
      protocolValidation(mistake)
    }
    assert.throw(callback, Error, 'Wrong protocol')
  })

  /**
   * Validate domain input
   */   
  it('Case 2: wrong domain validation', function () {
    const mistake = 'español,com'    // Lib only process http and https
    const callback = () => {
      domainValidation(mistake)
    }
    assert.throw(callback, Error, 'Wrong domain format')
  })

  /**
   * Validate return normalized value of protocol
   */
  it('Case 3: Format protocol value', function () {
    let format = protocolValidation(testCase.protocol)
    assert.equal(format, testCase.protocol.toLocaleLowerCase())
  })

  /**
   * Validate return normalized value of domain
   */
  it('Case 4: Format domain value', function () {
    let format = domainValidation(testCase.domain)
    assert.equal(format, testCase.domain.toLocaleLowerCase())
  })

});