const axios = require('axios').default
const errors = require('./errors')

exports.Client = class Client {
    constructor(port) {
      /**
      * The port of the miner API in your miner config
      * @type {Number}
      */
      this.port = port

      /**
      * The base API Url
      * @type {String}
      */
      this.baseApiUrl = `http://127.0.0.1:${port}`
    }

    /**
    * Build url to the API
    * @param  {String} path API endpoint
    * @return {String} url
    * @private
    */
    #buildURL(path) {
      return `${this.baseApiUrl}/${path}`
    }

    /**
    * Make request against the API
    * @param  {String} path API endpoint
    * @param  {Object} [options] request options
    * @return {Promise} promise
    * @private
    */
    #request(path, data) {

      var options = {
        method: "GET",
        url: this.#buildURL(path),
        headers: {
          "User-Agent": `2miners.js ${require("../package.json").version} (https://github.com/LockBlock-dev/gminer.js)`,                  
          "Content-Type": "application/json",
          "Accept-Encoding": "UTF8",
        }
      }

      data ? options.data = data : null

      return axios(options)
      .then(response => {
        if (typeof(response.data) === "object") {
          return response.data
        } else {
          try {
            const data = JSON.parse(response.data)
            if (data.ok) {
              return data.result
            }
          } catch (err) {
            throw new errors.ParseError(`Error parsing response: ${response.data}`, response)
          }
        }
      })
      .catch(error => {
        var error
        error.response ? error = new errors.APIError(error, error.response.status, options.method, options.url) : error = new errors.APIError(error, 503, options.method, options.url)
        throw error
      })
    }

    /**
    * Get all miner stats.
    * @example stats()
    * @return {Promise}
    */
    stats() {
      return this.#request("stat")
    }

}
