dbg = require('debug')('app:mod-1')
_ = require('lodash')

dbg('hello?')

module.exports = _.capitalize("it works from content.js.")
