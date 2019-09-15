/**
 * Site status and information
 * Request web site to get current status
 * @author Elihu A. Cruz
 * @version 1.0.1
 */

const { protocolValidation, domainValidation } = require('./urlValidator')
const axios = require('axios');


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

module.exports = { fetch }