const { assert } = require('chai');
const axios = require('axios');
const _DEBUG = process.env.NODE_ENV | true
// Data test
const { testCase } = require('./testsuit/domain')

// Lib
const { fetch } = require('../index')

describe('Test [Lib]', function() {
  describe('Request information', function() {

    /**
     * Validate protocol input
     */
    it('Case 1: Protocol validation', async function () {
      const badProtocol = 'hqqt'    // Lib only process http and https
      let response = await fetch(badProtocol, testCase.domain);
      assert.equal(response.message, 'Wrong protocol')
    })

    /**
     * Request test, get information and anaylze status
     */
    it('Case 2: Return info about website', async function() {
      let response = await fetch(testCase.protocol, testCase.domain);

      // data test
      assert.isNotNull(response, 'Value is not null');
      assert.isNotNull(response.data, 'Response, contains information');
      assert.isNotNull(response.status, 'Response, contains status');
      assert.equal(response.status, 200);
    });

  });
});