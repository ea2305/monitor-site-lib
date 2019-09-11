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
const fetch = function (protocol, domain) {
  // Perform validation before http request to provide more accuracy
  try {
    protocol = protocolValidation(protocol)
    domain = domainValidation(domain)
  } catch (error) { return error }

  return axios.get(`${protocol}://${domain}`)
}

/**
 * Validation of HTTP and HTTPS protocols format to prevent errors
 * @param {String} protocol Test case http protocol type
 * @returns {String} parsed protocol
 * @returns {Error} Format error message
 */
const protocolValidation = function (protocol = '') {
  const _protocol = protocol.toLocaleLowerCase() // normalization
  if (_protocol === '') return 'https'
  if ( _protocol === 'http' || _protocol === 'https')
    return _protocol
  else throw new Error('Wrong protocol')
}

/**
 * Validate domain test case, to prevent weird behaviors
 * @param {String} domain test case
 * @returns {String} domain verified
 * @returns {Error} validation error
 */
const domainValidation = function (domain = '') {
  const _domain = domain.toLocaleLowerCase() // normalization
  const domainRegExp = /(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9][a-z0-9-]{0,61}[a-z0-9]/
  if (!domainRegExp.test(_domain)) {
    throw new Error('Wrong domain format')
  }
  return _domain
}

module.exports = { 
  fetch,
  protocolValidation,
  domainValidation
}