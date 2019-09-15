const { assert, expect } = require('chai');
const _DEBUG = process.env.NODE_ENV | true

// Data test
const { testCase } = require('./testsuit/domain')
const { fetch } = require('../src/request')

describe('HTTP Request', function() {
  /**
   * Request test, get information and anaylze status
   */
  it('Case 1: Return info about website', async function() {
    this.timeout(7000);
    let response = await fetch(testCase.protocol, testCase.domain);

    // data test
    assert.isNotNull(response, 'Value is not null');
    assert.isNotNull(response.data, 'Response, contains information');
    assert.isNotNull(response.status, 'Response, contains status');
    assert.equal(response.status, 200);
  });

  /**
   * Request test, page does not exist
   */
  it('Case 2: Page does not exist', async function() {
    this.timeout(7000);
    try {
      await fetch(testCase.protocol, `notexist-test.${testCase.domain}`)
    } catch (error) {
      if (error.code) {
        assert.equal(error.code, 'ENOTFOUND')
      }
    }
  });
});