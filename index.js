/**
 * Site Report
 * Generate simple web page report with (Domain, Server and HTTPS Certificate status)
 * @author Elihu A. Cruz
 * @version 1.0.0
 */

const axios = require('axios');

/**
 * 1.- Generate HTTP request
 * 2.- Server status [Boolean]
 * 3.- Domain expiration [Date]
 * 4.- HTTPs (SSL,TLS) [Date]
 */

 /**
  * Implement http request to provide all basic information about domain
  * white this information We perform the following operations
  * @param {String} protocol https or https protocol
  * @param {String} domain client domain
  * @returns {Promise} http request promise
  * @returns {Error} Format error message
  */
const fetch = function (protocol, domain = 'google.com') {
  try {
    protocol = protocolValidation(protocol)
  } catch (error) {
    return error  
  }

  return axios.get(`${protocol}://${domain}`)
}

/**
 * Validation of HTTP and HTTPS protocols format to prevent errors
 * @param {String} protocol Test case http protocol type
 * @returns {String} parsed protocol
 * @returns {Error} Format error message
 */
const protocolValidation = function (protocol = '') {
  const _proto = protocol.toLocaleLowerCase()
  if (_proto === '') return 'https'
  if ( _proto === 'http' || _proto === 'https')
    return _proto
  else throw new Error('Wrong protocol')
}

module.exports = { fetch }