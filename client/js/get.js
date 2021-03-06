/**
 * simple xhr promise module
 *
 * used to dynamically serve markdown files
 */
var xhr = require('xhr')
module.exports = function (url) { return new Promise(function (resolve) {
    xhr(url, function (e,r,b) {
      if (e) {
        console.log(e.message)
        return
      }
      resolve(b)
    })
  }); }
