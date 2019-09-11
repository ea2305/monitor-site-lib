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
      const mistake = 'hqqt'    // Lib only process http and https
      let response = await fetch(mistake, testCase.domain);
      assert.equal(response.message, 'Wrong protocol')
    })

    /**
     * Validate domain input
     */
    it('Case 1: Domain validation', async function () {
      const mistake = 'español,com'    // Lib only process http and https
      let response = await fetch(testCase.protocol, mistake);
      assert.equal(response.message, 'Wrong domain format')
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